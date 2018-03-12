---
title: "Resume-MailboxDatabaseCopy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3d90b006-9914-415b-9a1f-730bd91c8548
description: "This cmdlet is available only in on-premises Exchange."
---

# Resume-MailboxDatabaseCopy

This cmdlet is available only in on-premises Exchange. 
  
Use the **Resume-MailboxDatabaseCopy** cmdlet to unblock activation or resume log copying and replay for a passive mailbox database copy.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Resume-MailboxDatabaseCopy -Identity <DatabaseCopyIdParameter> [-ReplicationOnly <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example resumes replication and replay activity for the copy of the database DB1 hosted on the Mailbox server MBX3.
  
```
Resume-MailboxDatabaseCopy -Identity DB1\MBX3
```

### Example 2

This example resumes replication and replay activity for the copy of the database DB2 hosted on the Mailbox server MBX4. After the copy is resumed, it remains administratively blocked for activation.
  
```
Resume-MailboxDatabaseCopy -Identity DB2\MBX4 -ReplicationOnly
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Resume-MailboxDatabaseCopy** cmdlet resumes replication and replay from a suspended state. If a database copy was suspended without administrator intervention, it's because the database copy is in a bad state. You can use the **Get-MailboxDatabaseCopyStatus** cmdlet to see if there are any messages indicating a failure. If the copy of the database is in a bad state, resuming the copy causes replication to fail and the mailbox database copy to return to a suspended state.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DisableReplayLag_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DisableReplayLag_ parameter specifies that any configured replay lag time for the database copy should be disabled when the passive copy is resumed. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseCopyIdParameter  <br/> |The _Identity_ parameter specifies the name of the database whose copying is being resumed. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisableReplayLagReason_ <br/> |Optional  <br/> |System.String  <br/> |The _DisableReplayLagReason_ parameter is used with the _DisableReplayLag_ parameter to specify an administrative reason for disabling replay lag time for a passive copy. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ReplicationOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ReplicationOnly_ switch specifies whether to resume replication without affecting the activation setting (for example, the _ActivationSuspended_ property for the database copy remains set to True). <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

