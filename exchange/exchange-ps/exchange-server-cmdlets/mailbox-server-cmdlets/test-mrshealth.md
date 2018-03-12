---
title: "Test-MRSHealth"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 42de31ff-ba85-4e47-9da9-00a9a5f7a29f
description: "This cmdlet is available only in on-premises Exchange."
---

# Test-MRSHealth

This cmdlet is available only in on-premises Exchange. 
  
Use the **Test-MRSHealth** cmdlet to test the health of an instance of the Microsoft Exchange Mailbox Replication service.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-MRSHealth [-Identity <ServerIdParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-MaxQueueScanAgeSeconds <Int32>] [-MonitoringContext <$true | $false>] [-MRSProxyCredentials <PSCredential>] [-MRSProxyServer <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests the health of the Mailbox Replication service on all Mailbox servers.
  
```
Get-MailboxServer | Test-MRSHealth
```

### Example 2

This example tests the health of the Mailbox Replication service on the Mailbox server named MBX01.
  
```
Test-MRSHealth MBX01
```

## Detailed Description
<a name="DetailedDescription"> </a>

The Microsoft Exchange Mailbox Replication service runs on Mailbox servers. This command ensures that the Mailbox Replication service is running and that it responds to a remote procedure call (RPC) ping check.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Identity_ parameter specifies the server on which to perform the health test. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  `ExchangeLegacyDN` <br/>  GUID <br/>  If you don't specify the server, the command runs on the local server. <br/> |
| _MaxQueueScanAgeSeconds_ <br/> |Optional  <br/> |System.Int32  <br/> |The _MaxQueueScanAgeSeconds_ parameter specifies the threshold for the **last queue scan** property. If the time stamp on the **last queue scan** property is older than the value specified by this parameter, an error event is created that shows the Mailbox Replication service isn't scanning mailbox database queues. The default value is 1800 seconds (30 minutes). <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MonitoringContext_ parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values for this parameter are `$true` or `$false`. The default value is  `$false`. If you specify the value  `$true`, the monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM).  <br/> |
| _MRSProxyCredentials_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _MRSProxyCredentials_ parameter specifies the credentials that are required for the **MRSProxyPingCheck** test on the server that's specified by the _MRSProxyServer_ parameter. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _MRSProxyServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> | The _MRSProxyServer_ parameter specifies the fully qualified domain name (FQDN) of the target server for the **MRSProxyPingCheck** test. <br/>  The Microsoft Replication proxy service is part of the Mailbox Replication service, and is used for remote mailbox moves. However, the Mailbox Replication proxy service communicates only with the Mailbox Replication service on another server. You can test the Mailbox Replication proxy service in the following ways: <br/>  If you specify an _MRSProxyServer_ value, and you specify the source server by using the _Identity_ parameter, the test is performed between that server and the target server specified by the _MRSProxyServer_ parameter. <br/>  If you specify an _MRSProxyServer_ value, and you don't specify a source server by using the _Identity_ parameter, the test is performed between the local server and the target server specified by the _MRSProxyServer_ parameter. <br/>  If you don't specify an _MRSProxyServer_ value or an _Identity_ value, the test is performed between the Mailbox Replication service and the Mailbox Replication proxy service on the local server. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

