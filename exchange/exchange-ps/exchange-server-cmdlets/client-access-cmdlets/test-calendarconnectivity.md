---
title: "Test-CalendarConnectivity"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 48e305d0-426b-455f-b160-41b199d6fdee
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-CalendarConnectivity

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-CalendarConnectivity** cmdlet to verify that anonymous calendar sharing is enabled and working properly. The Calendar virtual directory is a subdirectory of the Microsoft Outlook on the web virtual directories. When you run this command without any parameters, the command tests calendar connectivity against all Outlook on the web virtual directories.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-CalendarConnectivity [-ClientAccessServer <ServerIdParameter>] [-TestType <Internal | External>] [-VirtualDirectoryName <String>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-LightMode <SwitchParameter>] [-MailboxServer <ServerIdParameter>] [-MonitoringContext <SwitchParameter>] [-ResetTestAccountCredentials <SwitchParameter>] [-Timeout <UInt32>] [-TrustAnySSLCertificate <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests the anonymous calendar sharing for the server named MBX01.
  
```
Test-CalendarConnectivity -ClientAccessServer MBX01
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Test-CalendarConnectivity** cmdlet tests anonymous calendar sharing by connecting to a specified Outlook on the web virtual directory, to any Outlook on the web virtual directories on a specified Exchange server, or to any Outlook on the web virtual directories that are available in the local Active Directory site.
  
The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command.
  
```
&amp; $env:ExchangeInstallPath\Scripts\New-TestCasConnectivityUser.ps1
```

If the server hosting the test mailbox isn't available, the command returns an error that might not clearly identify the problem. To avoid this, use the **Test-MapiConnectivity** cmdlet to verify that the server that hosts the test mailbox is running and that the mailbox is available before you run this command.
  
The test results are displayed on-screen. The cmdlet returns the following information.
  
- **CasServer**: The Exchange server that the client connected to.
    
- **LocalSite**: The name of the local Active Directory site.
    
- **Scenario**: The operations that are tested. Values are:  `Logon`,  `CalendaICS`, and  `CalendarHTML`.
    
- **Result**: The values returned are typically  `Success`,  `Skipped`, or  `Failure`.
    
- **Latency(MS)**: The time required to complete the test in milliseconds.
    
- **Error**: Any error messages that were encountered.
    
You can write the results to a file by piping the output to **ConvertTo-Html** or **ConvertTo-Csv** and adding `> <filename>` to the command. For example:
  
```
Test-CalendarConnectivity -ClientAccessServer MBX01 | ConvertTo-Html > "C:\My Documents\Calendar Test.html"
```

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ClientAccessServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _ClientAccessServer_ parameter specifies the Exchange server to test. This server has the Client Access server role installed, and is responsible for accepting client connections. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _LightMode_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of this command.  <br/> |
| _MailboxServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _MailboxServer_ parameter specifies the Exchange 2016 or Exchange 2013 Mailbox server that you want to test. This parameter identifies the backend server that accepts proxied connections from the frontend server where clients connect. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/>  GUID <br/>  If you don't use this parameter, connections to all Mailbox servers in the local Active Directory site are tested. <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _MonitoringContext_ switch includes the associated monitoring events and performance counters in the results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM). You don't need to specify a value with this switch. <br/> |
| _ResetTestAccountCredentials_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ResetTestAccountCredentials_ switch resets the password for the test account that's used to run this command. The password for the test account is typically reset every seven days. Use this switch to force a password reset any time it's required for security reasons. <br/> |
| _TestType_ <br/> |Optional  <br/> |Microsoft.Exchange.Monitoring.OwaConnectivityTestType  <br/> |The _TestType_ parameter specifies whether the command tests internal or external URLs. Values are `Internal` and `External`. The default value is  `Internal`.  <br/> |
| _Timeout_ <br/> |Optional  <br/> |System.UInt32  <br/> |This parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of this command.  <br/> |
| _TrustAnySSLCertificate_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of this command.  <br/> |
| _VirtualDirectoryName_ <br/> |Optional  <br/> |System.String  <br/> |The _VirtualDirectoryName_ parameter specifies the name of the Outlook on the web virtual directory that you want to test. Enclose values that contain spaces in quotation marks ("). <br/>  If you don't use this parameter, all available Outlook on the web virtual directories are tested. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

