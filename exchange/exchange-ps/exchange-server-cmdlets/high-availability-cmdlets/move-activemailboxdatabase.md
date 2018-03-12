---
title: "Move-ActiveMailboxDatabase"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 755d1ecb-95d1-45e3-9a21-56df9f196f37
description: "This cmdlet is available only in on-premises Exchange."
---

# Move-ActiveMailboxDatabase

This cmdlet is available only in on-premises Exchange. 
  
Use the **Move-ActiveMailboxDatabase** cmdlet to perform a database or server switchover.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Move-ActiveMailboxDatabase -Identity <DatabaseIdParameter> [-ActivateOnServer <MailboxServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example performs a switchover of the database DB2 to the Mailbox server MBX1. When the command completes, MBX1 hosts the active copy of DB2. Because the _MountDialOverride_ parameter is set to _None_, MBX1 mounts the database using its own defined database auto mount dial settings.
  
```
Move-ActiveMailboxDatabase DB2 -ActivateOnServer MBX1 -MountDialOverride:None
```

### Example 2

This example performs a switchover of the database DB1 to the Mailbox server MBX3. When the command completes, MBX3 hosts the active copy of DB1. Because the _MountDialOverride_ parameter is specified with a value of _Good Availability_, MBX3 mounts the database using a database auto mount dial setting of _GoodAvailability_.
  
```
Move-ActiveMailboxDatabase DB1 -ActivateOnServer MBX3 -MountDialOverride:GoodAvailability
```

### Example 3

This example performs a switchover of the database DB3 to the Mailbox server MBX4. When the command completes, MBX4 hosts the active copy of DB3. Because the _MountDialOverride_ parameter isn't specified, MBX4 mounts the database using a database auto mount dial setting of _Lossless_.
  
```
Move-ActiveMailboxDatabase DB3 -ActivateOnServer MBX4
```

### Example 4

This example performs a server switchover for the Mailbox server MBX1. All active mailbox database copies on MBX1 will be activated on one or more other Mailbox servers with healthy copies of the active databases on MBX1.
  
```
Move-ActiveMailboxDatabase -Server MBX1
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ActivatePreferredOnServer_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxServerIdParameter  <br/> | The _ActivatePreferredOnServer_ parameter specifies the Mailbox server where you want to activate all mailbox databases that have copies with an **ActivationPreference** value of 1. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/>  GUID <br/>  :You can use this parameter as part of ending maintenance mode on a Mailbox server. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Identity_ parameter specifies the mailbox database that you want to activate. You can use any value that uniquely identifies the database. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  You can't use this parameter with the _Server_ parameter <br/> |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxServerIdParameter  <br/> | The _Server_ parameter specifies the server that you want to move all active mailbox databases from. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/>  GUID <br/>  You can't use this parameter with the _Identity_ parameter <br/> |
| _SkipAllChecks_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipAllChecks_ switch specifies whether to skip all checks. You don't need to specify a value with this switch. <br/> This switch is equivalent to specifying all of the individual skip parameters that are available on this cmdlet.  <br/> You can only use this switch with the _ActivateOnServer_ parameter. <br/> |
| _ActivateOnServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxServerIdParameter  <br/> |The _ActivateOnServer_ parameter specifies the name of the Mailbox server on which the mailbox database copy should be activated. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _MountDialOverride_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DatabaseMountDialOverride  <br/> | The _MountDialOverride_ parameter is used to override the auto database mount dial (AutoDatabaseMountDial) setting for the target server and specify an alternate setting. The following are possible values: <br/>  `None`: When using this value, the currently configured auto database mount dial setting on the target server will be used.  <br/>  `Lossless`: This is the default value. When using this value, the database doesn't automatically mount until all log files that were generated on the original active copy have been copied to the passive copy.  <br/>  `GoodAvailability`: If you specify this value, the database automatically mounts immediately after a failover if the copy queue length is less than or equal to 6. If the copy queue length is greater than 6, the database doesn't automatically mount. When the copy queue length is less than or equal to 6, Microsoft Exchange attempts to replicate the remaining logs to the passive copy and then mounts the database.  <br/>  `BestEffort`: If you specify this value, the database automatically mounts regardless of the size of the copy queue length. Because the database will mount with any amount of log loss, using this value could result in a large amount of data loss.  <br/>  `BestAvailability`: If you specify this value, the database automatically mounts immediately after a failover if the copy queue length is less than or equal to 12. The copy queue length is the number of logs recognized by the passive copy that needs to be replicated. If the copy queue length is more than 12, the database doesn't automatically mount. When the copy queue length is less than or equal to 12, Exchange attempts to replicate the remaining logs to the passive copy and then mounts the database.  <br/> |
| _MoveAllDatabasesOrNone_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _MoveAllDatabasesOrNone_ switch specifies whether to prevent any databases from moving if a single active database on the server can't be moved. You don't need to specify a value with this switch. <br/> |
| _MoveComment_ <br/> |Optional  <br/> |System.String  <br/> |The _MoveComment_ parameter specifies an optional administrative reason for the move operation. The comment is recorded in the Event log. <br/> |
| _SkipActiveCopyChecks_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipActiveCopyChecks_ switch specifies whether to skip checking the current active copy to see if it's currently a seeding source for any passive databases. You don't need to specify a value with this switch. <br/> **Note**: When you use this switch, you can move a database that's currently a seeding source, which cancels the seed operation.  <br/> |
| _SkipClientExperienceChecks_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipClientExperienceChecks_ switch specifies whether to skip the search catalog (content index) state check to see if the search catalog is healthy and up to date. You don't need to specify a value with this switch. <br/>  If the search catalog for the database copy you're activating is in an unhealthy or unusable state and you use this parameter to skip the search catalog health check and activate the database copy, you will need to either re-crawl or reseed the search catalog. <br/> |
| _SkipCpuChecks_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipCpuChecks_ switch specifies whether to skip the high CPU utilization checks. You don't need to specify a value with this switch. <br/> |
| _SkipHealthChecks_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipHealthChecks_ switch specifies whether to bypass passive copy health checks. You don't need to specify a value with this switch. <br/> When you use this switch, you can move the active copy to a database copy that's in the Failed state. You should only use this switch if the initial attempt to move the active database has failed. This is because the _SkipHealthChecks_ switch performs additional validation to ensure that the log files are consistent, which can take a considerable amount of time. <br/> |
| _SkipLagChecks_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipLagChecks_ switch specifies whether to allow a copy to be activated that has replay and copy queues outside of the configured criteria. You don't need to specify a value with this switch. <br/> |
| _SkipMaximumActiveDatabasesChecks_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipMaximumActiveDatabasesChecks_ switch specifies whether to skip checking the value of MaximumPreferredActiveDatabases during the best copy and server selection (BCSS) process. You don't need to specify a value with this switch. <br/> Any configured value for MaximumActiveDatabases will still be honored during the BCSS process and by the Information Store.  <br/> |
| _SkipMoveSuppressionChecks_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipMoveSuppressionChecks_ switch specifies whether to skip the move suppression checks. You don't need to specify a value with this switch. <br/> |
| _TerminateOnWarning_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _TerminateOnWarning_ switch specifies whether to terminate the task and output an error message if a warning is encountered during the switchover operation. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

