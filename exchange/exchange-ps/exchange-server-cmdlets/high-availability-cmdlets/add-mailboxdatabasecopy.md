---
title: "Add-MailboxDatabaseCopy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 84198fa9-ac8e-44ea-bd7b-64fe1e83e709
description: "This cmdlet is available only in on-premises Exchange."
---

# Add-MailboxDatabaseCopy

This cmdlet is available only in on-premises Exchange.
  
Use the **Add-MailboxDatabaseCopy** cmdlet to create a passive copy of an existing active mailbox database.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Add-MailboxDatabaseCopy -Identity <DatabaseIdParameter> -MailboxServer <MailboxServerIdParameter> [-ActivationPreference <UInt32>] [-ConfigurationOnly <SwitchParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-ReplayLagMaxDelay <EnhancedTimeSpan>] [-ReplayLagTime <EnhancedTimeSpan>] [-SeedingPostponed <SwitchParameter>] [-TruncationLagTime <EnhancedTimeSpan>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds a copy of mailbox database DB1 to the Mailbox server MBX3. Replay lag time and truncation lag time are configured with values of 10 minutes and 15 minutes, respectively. The activation preference is configured with a value of 2.
  
```
Add-MailboxDatabaseCopy -Identity DB1 -MailboxServer MBX3 -ReplayLagTime 00:10:00 -TruncationLagTime 00:15:00 -ActivationPreference 2
```

### Example 2

This example adds a copy of mailbox database DB2 to the Mailbox server MBX1. Replay lag time and truncation lag time are left at the default values of zero, and the activation preference is configured with a value of 3.
  
```
Add-MailboxDatabaseCopy -Identity DB2 -MailboxServer MBX1 -ActivationPreference 3
```

### Example 3

This example adds a copy of mailbox database DB3 to the Mailbox server MBX4. Replay lag time and truncation lag time are left at the default values of zero, and the activation preference is configured with a value of 5. In addition, seeding is being postponed for this copy so that it can be seeded using a local source server instead of the current active database copy, which is geographically distant from MBX4.
  
```
Add-MailboxDatabaseCopy -Identity DB3 -MailboxServer MBX4 -ActivationPreference 5 -SeedingPostponed
```

## Detailed Description
<a name="DetailedDescription"> </a>

To use the **Add-MailboxDatabaseCopy** cmdlet to add a mailbox database copy, the following criteria must be met:
  
- The specified Mailbox server must be in the same database availability group (DAG), and the DAG must have quorum and be healthy.
    
- The specified Mailbox server must not already host a copy of the specified mailbox database.
    
- The database path used by the specified database must also be available on the specified Mailbox server, because all copies of a database must use the same path.
    
- If you're adding the second copy of a database (for example, adding the first passive copy of the database), circular logging must not be enabled for the specified mailbox database. If circular logging is enabled, you must first disable it. After the mailbox database copy has been added, circular logging can be enabled. After enabling circular logging for a replicated mailbox database, continuous replication circular logging (CRCL) is used instead of JET circular logging. If you're adding the third or subsequent copy of a database, CRCL can remain enabled.
    
After running the **Add-MailboxDatabaseCopy** cmdlet, the new copy remains in a Suspended state if the _SeedingPostponed_ parameter is specified. When the database copy status is set to Suspended, the _SuspendMessage_ is set to "Replication is suspended for database copy '{0}' because database needs to be seeded."
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |The _Identity_ parameter specifies the name of the mailbox database being copied. Database names must be unique within the Exchange organization. <br/> |
| _MailboxServer_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxServerIdParameter  <br/> |The _MailboxServer_ parameter specifies the name of the server that will host the database copy. This server must be a member of the same DAG and must not already host a copy of the database. <br/> |
| _ActivationPreference_ <br/> |Optional  <br/> |System.UInt32  <br/> |The _ActivationPreference_ parameter value is used as part of Active Manager's best copy selection process and to redistribute active mailbox databases throughout the DAG when using the RedistributeActiveDatabases.ps1 script. The value for the activation preference is a number equal to or greater than 1, where 1 is at the top of the preference order. The preference number can't be larger than the number of copies of the mailbox database. <br/> |
| _ConfigurationOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ConfigurationOnly_ switch allows database copies to be added without invoking automatic seeding. You don't need to specify a value with this switch. <br/> The source database does not need to be online or present when using this parameter. It will create a new database in Active Directory without contacting the target server. This parameter may be useful in situations where the target server is down for maintenance and the new database copy does not yet exist on the target server.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ReplayLagMaxDelay_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _ReplayLagMaxDelay_ parameter specifies the maximum delay for lagged database copy play down (also known as deferred lagged copy play down). If the disk read IO latency is greater than 25 ms, lagged copy play down is delayed up to the value of this parameter. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> The default value is  `24:00:00` (24 hours). To disable deferred lagged copy play down, specify the value `00:00:00`.  <br/> Note that when the disk is running out of space, the value of this parameter is ignored, and lagged copy play down occurs without delay.  <br/> |
| _ReplayLagTime_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _ReplayLagTime_ parameter specifies the amount of time that the Microsoft Exchange Replication service waits before replaying log files that have been copied to the database copy. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> The default value is  `00.00:00:00`, which specifies that there's no truncation lag. The maximum value is  `14.00:00:00` (14 days). <br/> |
| _SeedingPostponed_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SeedingPostponed_ switch specifies that the task doesn't seed the database copy, so you need to explicitly seed the database copy. You don't need to specify a value with this switch. <br/> |
| _TruncationLagTime_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _TruncationLagTime_ parameter specifies the amount of time that the Microsoft Exchange Replication service waits before truncating log files that have replayed into a copy of the database. The time period begins after the log has been successfully replayed into the copy of the database. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> The default value is  `00.00:00:00`, which specifies that there's no truncation lag. The maximum value is  `14.00:00:00` (14 days). <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

