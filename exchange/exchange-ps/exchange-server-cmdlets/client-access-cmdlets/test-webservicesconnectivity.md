---
title: "Test-WebServicesConnectivity"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 5e1b2b06-f24e-4f33-8ddc-fdb1c5bb7eb2
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-WebServicesConnectivity

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-WebServicesConnectivity** cmdlet to test client connectivity to Exchange Web Services virtual directories.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-WebServicesConnectivity [-ClientAccessServer <ClientAccessServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests the client connection to Exchange Web Services on the server named MBX01.
  
```
Test-WebServicesConnectivity -ClientAccessServer MBX01
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Test-WebServicesConnectivity** cmdlet tests Exchange Web Services connectivity by connecting to a specified Exchange Web Services virtual directory, to any Exchange Web Services virtual directories on a specified Exchange server, or to any Exchange Web Services virtual directories that are available in the local Active Directory site.
  
The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command.
  
```
&amp; $env:ExchangeInstallPath\Scripts\New-TestCasConnectivityUser.ps1
```

The test results are displayed on-screen. The cmdlet returns the following information.
  
- **Source**: Source server.
    
- **ServiceEndpoint**: Destination server.
    
- **Scenario**: The operations that are tested. Values are  `Autodiscover: SOAP Provider` and `EWS: GetFolder` (full mode) or `EWS: ConvertID` (light mode).
    
- **Result**: The values returned are typically  `Success` or `*FAILURE*`.
    
- **Latency(MS)**: The time required to complete the test in milliseconds
    
You can write the results to a file by piping the output to **ConvertTo-Html** or **ConvertTo-Csv** and adding `> <filename>` to the command. For example:
  
```
Test-WebServicesConnectivity -ClientAccessServer MBX01 | ConvertTo-Html > "C:\My Documents\EWS Test.html"
```

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AutoDiscoverServer_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ClientAccessServerIdParameter  <br/> | The _AutoDiscoverServer_ parameter specifies the server with the Client Access server role installed that's used for Autodiscover. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name (for example, Exchange01) <br/>  Distinguished name (DN) (for example, `CN=Exchange01,CN=Servers,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=First Organization,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com`)  <br/>  Exchange Legacy DN (for example, `/o=First Organization/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Exchange01`)  <br/>  GUID (for example, `bc014a0d-1509-4ecc-b569-f077eec54942`)  <br/>  You can't use this parameter with the _ClientAccessServer_ parameter. <br/> |
| _MonitoringContext_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _MonitoringContext_ switch includes the associated monitoring events and performance counters in the results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM). You don't need to specify a value with this switch. <br/> |
| _ClientAccessServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ClientAccessServerIdParameter  <br/> | The _ClientAccessServer_ parameter specifies the Exchange server to test. This server has the Client Access server role installed, and is responsible for accepting client connections. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/>  GUID <br/>  You can't use this parameter with the _AutoDiscoverServer_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox to use for the test. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  When you use this parameter, you also need to use the _MailboxCredential_ parameter. <br/> |
| _LightMode_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _LightMode_ switch tells the command to perform only a subset of the tests. You don't need to specify a value with this switch. <br/> When you use this switch, the **EWS: ConvertId** test is run instead of the **EWS: GetFolder** test. <br/> |
| _MailboxCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _MailboxCredential_ parameter specifies the mailbox credential to use for a single mailbox test. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> This parameter is required when you use the _Identity_ parameter. <br/> |
| _TrustAnySSLCertificate_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _TrustAnySSLCertificate_ switch specifies whether to ignore Secure Sockets Layer (SSL) certificate validation failures. You don't need to specify a value with this switch. <br/> This switch is useful for testing internal URLs, because a URL that has an associated certificate is typically an external URL. This switch lets the task check an internal URL without generating an error when the certificate doesn't match the URL.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

