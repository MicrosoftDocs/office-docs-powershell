---
title: "Test-PopConnectivity"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 73f0ce87-e723-43e5-a32c-29cd2d899ff9
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-PopConnectivity

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-PopConnectivity** cmdlet to verify that the Microsoft Exchange POP3 service is working as expected.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-PopConnectivity [-ClientAccessServer <ServerIdParameter>] [-ConnectionType <Plaintext | Tls | Ssl>] [-MailboxCredential <PSCredential>] [-PerConnectionTimeout <Int32>] [-PortClientAccessServer <Int32>] [-TrustAnySSLCertificate <SwitchParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-LightMode <SwitchParameter>] [-MailboxServer <ServerIdParameter>] [-MonitoringContext <SwitchParameter>] [-ResetTestAccountCredentials <SwitchParameter>] [-Timeout <UInt32>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests the client POP3 connectivity for the server named Contoso12 by using the credentials for the user contoso\kweku.
  
```
Test-PopConnectivity -ClientAccessServer Contoso12 -MailboxCredential (Get-Credential contoso\kweku)
```

### Example 2

This example tests the client POP3 connectivity of the specific server named Contoso12 and tests all Exchange mailboxes.
  
```
Test-PopConnectivity -ClientAccessServer Contoso12
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Test-PopConnectivity** cmdlet tests POP3 connectivity by connecting to a specified mailbox, a specified Exchange server, or all Exchange servers that are available in the local Active Directory site.
  
The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command.
  
```
&amp; $env:ExchangeInstallPath\Scripts\New-TestCasConnectivityUser.ps1
```

The test results are displayed on-screen. The cmdlet returns the following information.
  
- **CasServer**: The Exchange server that the client connected to.
    
- **LocalSite**: The name of the local Active Directory site.
    
- **Scenario**: The operations that are tested. **Test POP3 Connectivity** connects to the server using the POP3 protocol, searches for the test message, and deletes the test message.
    
- **Result**: The values returned are typically  `Success`,  `Skipped`, or  `Failure`.
    
- **Latency(MS)**: The time required to complete the test in milliseconds.
    
- **Error**: Any error messages that were encountered.
    
You can write the results to a file by piping the output to **ConvertTo-Html** or **ConvertTo-Csv** and adding `> <filename>` to the command. For example:
  
```
Test-PopConnectivity -ClientAccessServer MBX01 | ConvertTo-Html > "C:\My Documents\POP Test.html"
```

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ClientAccessServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _ClientAccessServer_ parameter specifies the Exchange server to test. This server has the Client Access server role installed, and is responsible for accepting client connections. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ConnectionType_ <br/> |Optional  <br/> |Microsoft.Exchange.Monitoring.ProtocolConnectionType  <br/> | The _ConnectionType_ parameter specifies the type of connection that's used to connect to the POP3 service. Valid values are: <br/>  `Plaintext` <br/>  `Ssl` <br/>  `Tls` <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _LightMode_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _LightMode_ switch tells the command to perform only a test logon to the server by using the POP3 protocol. You don't need to specify a value with this switch. <br/> If you don't use this switch, the command also tests sending and receiving a message using the POP3 protocol.  <br/> |
| _MailboxCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _MailboxCredential_ parameter specifies the mailbox credential to use for a single mailbox test. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _MailboxServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _MailboxServer_ parameter specifies the Exchange 2016 or Exchange 2013 Mailbox server that you want to test. This parameter identifies the backend server that accepts proxied connections from the frontend server where clients connect. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/>  GUID <br/>  If you don't use this parameter, connections to all Mailbox servers in the local Active Directory site are tested. <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _MonitoringContext_ switch includes the associated monitoring events and performance counters in the results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM). You don't need to specify a value with this switch. <br/> |
| _PerConnectionTimeout_ <br/> |Optional  <br/> |System.Int32  <br/> |The _PerConnectionTimeout_ parameter specifies the amount of time, in seconds, to wait per connection for the test operation to finish. Valid values are between 0 and 120 seconds. The default value is 120 seconds. <br/> We recommend that you configure this parameter with a value of 5 seconds or more.  <br/> |
| _PortClientAccessServer_ <br/> |Optional  <br/> |System.Int32  <br/> |The _PortClientAccessServer_ parameter specifies the port to use to connect to the Client Access server. The default port is 110 for POP3. The valid range is from 0 through 65,535. <br/> |
| _ResetTestAccountCredentials_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ResetTestAccountCredentials_ switch resets the password for the test account that's used to run this command. The password for the test account is typically reset every seven days. Use this switch to force a password reset any time it's required for security reasons. <br/> |
| _Timeout_ <br/> |Optional  <br/> |System.UInt32  <br/> |The _Timeout_ parameter specifies the amount of time, in seconds, to wait for the test operation to finish. Valid values are between 0 and 3600 seconds (1 hour). The default value is 180 seconds (3 minutes). <br/> We recommend that you configure this parameter with a value of 5 seconds or more.  <br/> |
| _TrustAnySSLCertificate_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _TrustAnySSLCertificate_ switch specifies whether to ignore Secure Sockets Layer (SSL) certificate validation failures. You don't need to specify a value with this switch. <br/> This switch is useful for testing internal URLs, because a URL that has an associated certificate is typically an external URL. This switch lets the task check an internal URL without generating an error when the certificate doesn't match the URL.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

