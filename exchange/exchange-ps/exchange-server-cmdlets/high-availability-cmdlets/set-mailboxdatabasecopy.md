---
title: "Set-MailboxDatabaseCopy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 839f8781-2eb1-47bd-85ff-a31c8773998a
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-MailboxDatabaseCopy

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-MailboxDatabaseCopy** cmdlet to configure the properties of a database copy.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-MailboxDatabaseCopy -Identity <DatabaseCopyIdParameter> [-ActivationPreference <UInt32>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures the replay lag time with a value of 3 days for a copy of the database DB2 hosted on the Mailbox server MBX1.
  
```
Set-MailboxDatabaseCopy -Identity DB2\MBX1 -ReplayLagTime 3.0:0:0
```

### Example 2

This example configures an activation preference of 3 for the copy of the database DB1 hosted on the Mailbox server MBX2.
  
```
Set-MailboxDatabaseCopy -Identity DB1\MBX2 -ActivationPreference 3
```

## Detailed Description
<a name="DetailedDescription"> </a>

With this cmdlet, you can configure the replay lag time, truncation lag time, and activation preference value for a mailbox database copy.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ClearHostServer_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseCopyIdParameter  <br/> |The _Identity_ parameter specifies the name of the database whose copy is being modified. <br/> |
| _ActivationPreference_ <br/> |Optional  <br/> |System.UInt32  <br/> |The _ActivationPreference_ parameter value is used as part of Active Manager's best copy selection process and to redistribute active mailbox databases throughout the database availability group (DAG) when using the RedistributeActiveDatabases.ps1 script. The value for the _ActivationPreference_ parameter is a number equal to or greater than 1, where 1 is at the top of the preference order. The position number can't be larger than the number of database copies of the mailbox database. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DatabaseCopyAutoActivationPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DatabaseCopyAutoActivationPolicyType  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ReplayLagMaxDelay_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _ReplayLagMaxDelay_ parameter specifies the maximum delay for lagged database copy play down (also known as deferred lagged copy play down). If the disk read IO latency is greater than 25 ms, lagged copy play down is delayed up to the value of this parameter. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> The default value is  `24:00:00` (24 hours). To disable deferred lagged copy play down, specify the value `([TimeSpan]::Zero)`.  <br/> Note that when the disk is running out of space, the value of this parameter is ignored, and lagged copy play down occurs without delay.  <br/> |
| _ReplayLagTime_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _ReplayLagTime_ parameter specifies the amount of time that the Microsoft Exchange Replication service should wait before replaying log files that have been copied to the passive database copy. Setting this parameter to a value greater than 0 creates alagged database copy. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> The maximum allowable setting for this value is 14 days. The minimum allowable setting is 0 seconds, and setting this value to 0 seconds eliminates any delay in log replay activity.  <br/> For example, to specify a 14-day replay lag period, enter 14.00:00:00. The default value is 00.00:00:00, which specifies that there's no replay lag.  <br/> |
| _TruncationLagTime_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _TruncationLagTime_ parameter specifies the amount of time that the Microsoft Exchange Replication service should wait before truncating log files that have replayed into the passive copy of the database. The time period begins after the log has been successfully replayed into the copy of the database. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> The default value is  `00.00:00:00`, which specifies that there's no truncation lag. The maximum value is  `14.00:00:00` (14 days). <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

