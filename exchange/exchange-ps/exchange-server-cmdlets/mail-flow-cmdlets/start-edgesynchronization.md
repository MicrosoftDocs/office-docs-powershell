---
title: "Start-EdgeSynchronization"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 7f8240bb-05fa-47c5-adcf-c843dbced0e8
description: "This cmdlet is available only in on-premises Exchange."
---

# Start-EdgeSynchronization

This cmdlet is available only in on-premises Exchange.
  
Use the **Start-EdgeSynchronization** cmdlet to immediately start synchronization of configuration data from Active Directory to the subscribed Edge Transport servers.
  
```
Start-EdgeSynchronization [-Confirm [<SwitchParameter>]] [-ForceFullSync <SwitchParameter>] [-ForceUpdateCookie <SwitchParameter>] [-Server <ServerIdParameter>] [-TargetServer <String>] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example starts edge synchronization on the Mailbox server named Mailbox01.
  
```
Start-EdgeSynchronization -Server Mailbox01
```

## Detailed Description
<a name="DetailedDescription"> </a>

The Microsoft Exchange EdgeSync service that runs on Mailbox servers replicates data stored in Active Directory to the local Active Directory Lightweight Directory Services (AD LDS) store on the Edge Transport server. After the initial replication, one-way synchronization of changed data in Active Directory to AD LDS keeps this data up to date.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ForceFullSync_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ForceFullSync_ switch specifies whether to initiate a full edge synchronization. If you run the command without this switch, only changes since the last replication are synchronized. If you use this switch, the entire configuration information and recipient data are synchronized. <br/> |
| _ForceUpdateCookie_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ForceUpdateCookie_ switch specifies whether to force the Microsoft Exchange EdgeSync service to update the replication cookie even if it encounters an error. The cookie maintains the changes in Active Directory since the previous EdgeSync replication. Normally, the Microsoft Exchange EdgeSync service doesn't update the cookie if it encounters any errors during replication. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/> |
| _TargetServer_ <br/> |Optional  <br/> |System.String  <br/> |The _TargetServer_ parameter specifies an Edge Transport server to initiate edge synchronization with. If omitted, all Edge Transport servers are synchronized. <br/> You may want to use this parameter to specify a single Edge Transport server for synchronization if a new Edge Transport server has been installed or if that Edge Transport server has been unavailable for some time.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

