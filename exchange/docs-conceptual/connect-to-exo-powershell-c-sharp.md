---
title: Use C# to connect to Exchange Online PowerShell
ms.author: chrisda
author: chrisda
manager: orspodek
ms.date: 8/21/2023
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-online
ms.reviewer:
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn about using the Exchange Online PowerShell V3 module and C# to connect to Exchange Online."
---

# Use C# to connect to Exchange Online PowerShell

The code samples in this article use the [Exchange Online PowerShell V3 module](exchange-online-powershell-v2.md#rest-api-connections-in-the-exo-v3-module) module to connect to Exchange Online from C#.

To install the Exchange Online PowerShell module, see [Install and maintain the Exchange Online PowerShell module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module).

> [!TIP]
> REST API connections in the Exchange Online PowerShell V3 module require the PowerShellGet and PackageManagement modules. For more information, see [PowerShellGet for REST-based connections in Windows](exchange-online-powershell-v2.md#powershellget-for-rest-api-connections-in-windows).
>
> If you get errors when you try to connect, use the _SkipLoadingFormatData_ switch on the **Connect-ExchangeOnline** cmdlet.

## Sample 1: Create a single connection using a PowerShell runspace

```csharp
using System.Collections.ObjectModel;

using System.Management.Automation;

using System.Management.Automation.Runspaces;

using System.Security;

void SingleConnectionToExchangeOnline()

{

    // Setup the Initial Session State of each runspace in the pool

    // Import the ExchangeOnlineManagement module.

    // Set the Execution Policy of the runspace.

    InitialSessionState iss = InitialSessionState.CreateDefault();

    iss.ImportPSModule(new string[] { "ExchangeOnlineManagement" });

    iss.ExecutionPolicy = Microsoft.PowerShell.ExecutionPolicy.RemoteSigned;

    iss.ThrowOnRunspaceOpenError = true;

    Runspace runspace = RunspaceFactory.CreateRunspace(iss);

    runspace.Open();

    // Run the Connect-ExchangeOnline command in the runspace to create a connection with EXO.

    PowerShell ps = PowerShell.Create(runspace);

    ps.AddCommand("Connect-ExchangeOnline");

    ps.AddParameters(new Dictionary<string, object>

    {

        ["Organization"] = "contoso.onmicrosoft.com",

        ["CertificateFilePath"] = "C:\\Users\\Certificates\\mycert.pfx",

        ["CertificatePassword"] = GetPassword(),

        ["AppID"] = "a37927a4-1a1a-4162-aa29-e346d5324590"

    });

    // Execute the script synchronously.

    Collection<PSObject> connectionResult = ps.Invoke();

    // Clear the connection commands before running cmdlets.

    ps.Commands.Clear();

    // Create a new command to execute an Exchange Online cmdlet.

    ps.AddCommand("Get-Mailbox");

    ps.AddParameter("Identity", "ContosoUser1");

    Collection<PSObject> results = ps.Invoke();

    // Check if there were any errors.

    if (!ps.HadErrors)

    {

        // Write the results to console.

        foreach (PSObject result in results)

        {

            Console.WriteLine(result.ToString());

        }

    }

    else

    {

        // Write the errors to console by accessing the error stream of the Powershell object.

        foreach (ErrorRecord error in ps.Streams.Error)

        {

            Console.WriteLine(error.ToString());

        }

    }

}

SecureString GetPassword()

{

    // Return the Password as a SecureString

}
```

## Sample 2: Create a multiple connections using PowerShell runspace pools

Use this code sample to run multiple Exchange Online PowerShell cmdlets in parallel.

```csharp
PowerShell CreateConnectionCommand(RunspacePool pool)

{

    PowerShell ps = PowerShell.Create();

    ps.RunspacePool = pool;

    ps.AddCommand("Connect-ExchangeOnline");

    ps.AddParameters(new Dictionary<string, object>

    {

        ["Organization"] = "contoso.onmicrosoft.com",

        ["CertificateFilePath"] = "C:\\Users\\Certificates\\mycert.pfx",

        ["CertificatePassword"] = GetPassword(),

        ["AppID"] = "a37927a4-1a1a-4162-aa29-e346d5324590"

    });

    return ps;

}

void ParallelConnectionsToExchangeOnline()

{

    // Setup the Initial Session State of each runspace in the pool

    // Import the ExchangeOnlineManagement module.

    // Set the Execution Policy of the runspace.

    InitialSessionState iss = InitialSessionState.CreateDefault();

    iss.ImportPSModule(new string[] { "ExchangeOnlineManagement" });

    iss.ExecutionPolicy = Microsoft.PowerShell.ExecutionPolicy.RemoteSigned;

    iss.ThrowOnRunspaceOpenError = true;

    // Create a RunspacePool initialized with the Initial Session State.

    using (RunspacePool pool = RunspaceFactory.CreateRunspacePool(iss))

    {

        // Configure the number of runspaces to maintain in the RunspacePool.

        pool.SetMaxRunspaces(3);

        pool.SetMinRunspaces(3);

        // Set the ThreadOptions to reuse the same threads for the runspaces so that

        // the Exchange Online cmdlets are available after running Connect-ExchangeOnline in each runspace.

        pool.ThreadOptions = PSThreadOptions.ReuseThread;

        pool.Open();

        // Run the Connect-ExchangeOnline cmdlet in all the runspaces in the pool

        // so that any cmdlets can be run in them after that.

        PowerShell ps1 = CreateConnectionCommand(pool);

        PowerShell ps2 = CreateConnectionCommand(pool);

        PowerShell ps3 = CreateConnectionCommand(pool);

        // Execute each of the 3 Connect-ExchangeOnline commands asynchronously.

        IAsyncResult job1 = ps1.BeginInvoke();

        IAsyncResult job2 = ps2.BeginInvoke();

        IAsyncResult job3 = ps3.BeginInvoke();

        // Get the results of the commands.

        PSDataCollection<PSObject> connectionResult = ps1.EndInvoke(job1);

        PSDataCollection<PSObject> connectionResult2 = ps2.EndInvoke(job2);

        PSDataCollection<PSObject> connectionResult3 = ps3.EndInvoke(job3);

        // Execute two Exchange-Online commands in parallel using the runspacepool.

        // All of them have an active connection to Exchange Online.

        // NOTE : Cmdlets that update the same object or can cause conflicting
        // results should not be run in parallel as they can lead to an undefined
        // outcome.

        PowerShell commandPS1 = PowerShell.Create();

        commandPS1.RunspacePool = pool;

        commandPS1.AddCommand("Get-Mailbox");

        commandPS1.AddParameter("Identity", "ContosoUser1");

        PowerShell commandPS2 = PowerShell.Create();

        commandPS2.RunspacePool = pool;

        commandPS2.AddCommand("Get-Mailbox");

        commandPS2.AddParameter("Identity", "ContosoUser2");

        IAsyncResult commandJob1 = commandPS1.BeginInvoke();

        IAsyncResult commandJob2 = commandPS2.BeginInvoke();

        // Wait for the commands to finish and return the results.

        PSDataCollection<PSObject> command1Result = commandPS1.EndInvoke(commandJob1);

        PSDataCollection<PSObject> command2Result = commandPS2.EndInvoke(commandJob2);

        // Check if there were any errors.

        if (!commandPS1.HadErrors)

        {

            // Write the results to console.

            foreach (PSObject result in command1Result)

            {

                Console.WriteLine(result.ToString());

            }

        }

        else

        {

            // Write the errors to console by accessing the error stream of the Powershell object.

            foreach (ErrorRecord error in commandPS1.Streams.Error)

            {

                Console.WriteLine(error.ToString());

            }

        }

        // Check if there were any errors.

        if (!commandPS2.HadErrors)

        {

            // Write the results to console.

            foreach (PSObject result in command2Result)

            {

                Console.WriteLine(result.ToString());

            }

        }

        else

        {

            // Write the errors to console by accessing the error stream of the Powershell object.

            foreach (ErrorRecord error in commandPS2.Streams.Error)

            {

                Console.WriteLine(error.ToString());

            }

        }

    }

}
```
