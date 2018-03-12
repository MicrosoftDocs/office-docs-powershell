---
title: "Set-CalendarNotification"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: fc595e4d-abaa-450e-8803-6982b8a039ac
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-CalendarNotification

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-CalendarNotification** cmdlet to set text message notifications for calendar events for a user.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-CalendarNotification -Identity <MailboxIdParameter> [-CalendarUpdateNotification <$true | $false>] [-CalendarUpdateSendDuringWorkHour <$true | $false>] [-Confirm [<SwitchParameter>]] [-DailyAgendaNotification <$true | $false>] [-DailyAgendaNotificationSendTime <TimeSpan>] [-DomainController <Fqdn>] [-IgnoreDefaultScope <SwitchParameter>] [-MeetingReminderNotification <$true | $false>] [-MeetingReminderSendDuringWorkHour <$true | $false>] [-NextDays <Int32>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example enables calendar updates to be sent in text messages to the user Tony Smith.
  
```
Set-CalendarNotification -Identity "tony@contoso.com" -CalendarUpdateNotification $true
```

### Example 2

This example enables calendar updates and meeting reminders to be sent in text messages to the user Tony Smith.
  
```
Set-CalendarNotification -Identity "TonySmith" -CalendarUpdateNotification $true -MeetingReminderNotification $true -MeetingReminderSendDuringWorkHour $true
```

### Example 3

This example enables a daily agenda to be sent in text messages to the user Tony Smith.
  
```
Set-CalendarNotification -Identity contoso\tonysmith -DailyAgendaNotification $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

Users can receive text message notifications of changes to calendar events and daily agendas. Use the **Set-CalendarNotification** cmdlet to configure these notifications for a user.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The  _Identity_ parameter specifies the mailbox ID for the user. <br/> |
| _CalendarUpdateNotification_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _CalendarUpdateNotification_ parameter specifies whether calendar notifications are enabled for the user. <br/> |
| _CalendarUpdateSendDuringWorkHour_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _CalendarUpdateSendDuringWorkHour_ parameter specifies whether calendar notifications are sent during working hours. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DailyAgendaNotification_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _DailyAgendaNotification_ parameter specifies whether a daily agenda should be sent to the user's mobile phone. <br/> |
| _DailyAgendaNotificationSendTime_ <br/> |Optional  <br/> |System.TimeSpan  <br/> |The  _DailyAgendaNotificationSendTime_ parameter specifies the time to send the daily agenda. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> For example, a time span of 2 days and 8 hours is shown: 02.08:00:00.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IgnoreDefaultScope_ parameter isn't implemented yet. <br/> |
| _MeetingReminderNotification_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _MeetingReminderNotification_ parameter specifies whether meeting reminders are sent to the user's mobile phone. <br/> |
| _MeetingReminderSendDuringWorkHour_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _MeetingReminderSendDuringWorkHour_ parameter specifies whether meeting reminders are only sent during working hours. <br/> |
| _NextDays_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _NextDays_ parameter specifies how many days should be sent in the daily agenda. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

