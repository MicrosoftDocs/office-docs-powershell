---
title: "Test-ActiveSyncConnectivity"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/23/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 83f7b578-496e-4903-aeb7-95517a28a9f4
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-ActiveSyncConnectivity

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-ActiveSyncConnectivity** cmdlet to test connectivity to Microsoft Exchange ActiveSync virtual directories.
  
> [!NOTE]
> This cmdlet works best in Exchange 2010. In Exchange 2013 or later, the functionality of this cmdlet has been replaced by Managed Availability. For the best results, use the **Invoke-MonitoringProbe** cmdlet and specify the relevant active monitor probe instead of using this cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-ActiveSyncConnectivity [-AllowUnsecureAccess <SwitchParameter>] [-ClientAccessServer <ServerIdParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-LightMode <SwitchParameter>] [-MailboxCredential <PSCredential>] [-MailboxServer <ServerIdParameter>] [-MonitoringContext <SwitchParameter>] [-MonitoringInstance <String>] [-ResetTestAccountCredentials <SwitchParameter>] [-Timeout <UInt32>] [-TrustAnySSLCertificate <SwitchParameter>] [-URL <String>] [-UseAutodiscoverForClientAccessServer <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests Exchange ActiveSync client connectivity for the server named MBX01.
  
```
Test-ActiveSyncConnectivity -ClientAccessServer MBX01
```

### Example 2

This example tests the Exchange ActiveSync connectivity for the mailbox PaulS using the Autodiscover URL.
  
```
Test-ActiveSyncConnectivity -UseAutodiscoverForClientAccessServer $true -URL "http://contoso.com/mail" -MailboxCredential (Get-Credential pauls@contoso.com)
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Test-ActiveSyncConnectivity** cmdlet tests Exchange ActiveSync connectivity by connecting to a specified Exchange ActiveSync virtual directory, to any Exchange ActiveSync virtual directories on a specified Exchange server, or to any Exchange ActiveSync virtual directories that are available in the local Active Directory site.
  
The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command.
  
```
&amp; $env:ExchangeInstallPath\Scripts\New-TestCasConnectivityUser.ps1
```

The test results are displayed on-screen. The cmdlet returns the following information.
  
- **CasServer**: The Exchange server that the client connected to.
    
- **LocalSite**: The name of the local Active Directory site.
    
- **Scenario**: The operations that are tested. Values are:  `Options`,  `FolderSync`,  `First Sync`,  `GetItemEstimate`,  `Sync Data`,  `Ping`, and  `Sync Test Item`.
    
- **Result**: The values returned are typically  `Success`,  `Skipped`, or  `Failure`.
    
- **Latency(MS)**: The time required to complete the test in milliseconds.
    
- **Error**: Any error messages that were encountered.
    
You can write the results to a file by piping the output to **ConvertTo-Html** or **ConvertTo-Csv** and adding `> <filename>` to the command. For example:
  
```
Test-ActiveSyncConnectivity -ClientAccessServer MBX01 | ConvertTo-Html > "C:\My Documents\EAS Test.html"
```

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AllowUnsecureAccess_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _AllowUnsecureAccess_ switch allows the test to continue over an unsecured channel that doesn't require Secure Sockets Layer (SSL). You don't need to specify a value with this switch. <br/> |
| _ClientAccessServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _ClientAccessServer_ parameter specifies the Exchange server to test. This server has the Client Access server role installed, and is responsible for accepting client connections. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/>  GUID <br/>  You can't use this parameter with the _Url_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _LightMode_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _LightMode_ switch tells the command to perform only a subset of the tests. You don't need to specify a value with this switch. <br/> When you use this switch, only the **Options** test is run. <br/> If you don't use this switch, the **First Sync**, **GetItemEstimate**, **Sync Data**, **Ping** and **Sync Test Item** tests are also run. <br/> |
| _MailboxCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _MailboxCredential_ parameter specifies the mailbox credential to use for a single mailbox test. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _MailboxServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _MailboxServer_ parameter specifies the Exchange 2016 or Exchange 2013 Mailbox server that you want to test. This parameter identifies the backend server that accepts proxied connections from the frontend server where clients connect. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/>  GUID <br/>  If you don't use this parameter, connections to all Mailbox servers in the local Active Directory site are tested. <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _MonitoringContext_ switch includes the associated monitoring events and performance counters in the results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM). You don't need to specify a value with this switch. <br/> |
| _MonitoringInstance_ <br/> |Optional  <br/> |System.String  <br/> |The _MonitoringInstance_ parameter specifies an identifier for this task when the test is run from Microsoft System Center Operations Manager (SCOM). This parameter is important because SCOM may run multiple instances of the test from the same server at the same time. <br/> |
| _ResetTestAccountCredentials_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ResetTestAccountCredentials_ switch resets the password for the test account that's used to run this command. The password for the test account is typically reset every seven days. Use this switch to force a password reset any time it's required for security reasons. <br/> |
| _Timeout_ <br/> |Optional  <br/> |System.UInt32  <br/> |The _Timeout_ parameter specifies the amount of time (in seconds) to wait for a response from the command. <br/> |
| _TrustAnySSLCertificate_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _TrustAnySSLCertificate_ switch specifies whether to ignore Secure Sockets Layer (SSL) certificate validation failures. You don't need to specify a value with this switch. <br/> This switch is useful for testing internal URLs, because a URL that has an associated certificate is typically an external URL. This switch lets the task check an internal URL without generating an error when the certificate doesn't match the URL.  <br/> |
| _URL_ <br/> |Optional  <br/> |System.String  <br/> |The _URL_ parameter specifies the URL that's used to connect to the Exchange ActiveSync virtual directory. <br/> You can't use this parameter with the _ClientAccessServer_ parameter. <br/> |
| _UseAutodiscoverForClientAccessServer_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _UseAutodiscoverForClientAccessServer_ switch specifies whether the test should use the Autodiscover service to locate the Exchange ActiveSync virtual directory. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

