---
title: "Set-CalendarProcessing"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 000bc90f-1d00-4384-ab59-d6cf6f674825
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-CalendarProcessing

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-CalendarProcessing** cmdlet to modify calendar processing options for resource mailboxes, which include the Calendar Attendant, resource booking assistant, and calendar configuration. Note that this cmdlet is effective only on resource mailboxes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-CalendarProcessing -Identity <MailboxIdParameter> [-AddAdditionalResponse <$true | $false>] [-AdditionalResponse <String>] [-AddNewRequestsTentatively <$true | $false>] [-AddOrganizerToSubject <$true | $false>] [-AllBookInPolicy <$true | $false>] [-AllowConflicts <$true | $false>] [-AllowRecurringMeetings <$true | $false>] [-AllRequestInPolicy <$true | $false>] [-AllRequestOutOfPolicy <$true | $false>] [-AutomateProcessing <None | AutoUpdate | AutoAccept>] [-BookingWindowInDays <Int32>] [-BookInPolicy <RecipientIdParameter[]>] [-Confirm [<SwitchParameter>]] [-ConflictPercentageAllowed <Int32>] [-DeleteAttachments <$true | $false>] [-DeleteComments <$true | $false>] [-DeleteNonCalendarItems <$true | $false>] [-DeleteSubject <$true | $false>] [-DomainController <Fqdn>] [-EnableResponseDetails <$true | $false>] [-EnforceSchedulingHorizon <$true | $false>] [-ForwardRequestsToDelegates <$true | $false>] [-IgnoreDefaultScope <SwitchParameter>] [-MaximumConflictInstances <Int32>] [-MaximumDurationInMinutes <Int32>] [-OrganizerInfo <$true | $false>] [-ProcessExternalMeetingMessages <$true | $false>] [-RemoveForwardedMeetingNotifications <$true | $false>] [-RemoveOldMeetingMessages <$true | $false>] [-RemovePrivateProperty <$true | $false>] [-RequestInPolicy <RecipientIdParameter[]>] [-RequestOutOfPolicy <RecipientIdParameter[]>] [-ResourceDelegates <RecipientIdParameter[]>] [-ScheduleOnlyDuringWorkHours <$true | $false>] [-TentativePendingApproval <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example automates the processing of calendar requests to the resource mailbox Conf 212.
  
```
Set-CalendarProcessing -Identity "Conf 212" -AutomateProcessing AutoAccept -DeleteComments $true -AddOrganizerToSubject $true -AllowConflicts $false
```

### Example 2

This example disables automatic processing for the resource mailbox Car 53.
  
```
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing None
```

### Example 3

This example allows the Calendar Attendant to approve in-policy requests from all users.
  
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllBookInPolicy $true
```

### Example 4

This example allows all users to submit in-policy requests, but the request is still subject to approval by one of the specified delegates.
  
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllRequestInPolicy $true -AllBookInPolicy $false -ResourceDelegates "chris@contoso.com","michelle@contoso.com"
```

### Example 5

This example allows the Calendar Attendant to accept out-of-policy requests from David Pelton. The request is still subject to approval by one of the specified delegates.
  
```
Set-CalendarProcessing -Identity "Room 221" -AutomateProcessing AutoAccept -RequestOutOfPolicy DavidPelton@contoso.com -ResourceDelegates "chris@contoso.com","michelle@contoso.com"
```

### Example 6

This example allows a list of users to submit in-policy meeting requests to the equipment mailbox for Car 53.
  
```
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing AutoAccept -BookInPolicy "ayla@contoso.com","tony@contoso.com" -AllBookInPolicy $false
```

### Example 7

This example rejects meeting requests from any user who isn't a member of the Exchange organization.
  
```
Set-CalendarProcessing -Identity "Room 221" -ProcessExternalMeetingMessages $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the resource mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _AddAdditionalResponse_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AddAdditionalResponse_ parameter specifies whether additional information would be sent from the resource mailbox when responding to meeting requests. Valid input for this parameter is `$true` or `$false`. The default value is  `$false`.  <br/> This parameter is used only on resource mailboxes where the  _AutomateProcessing_ parameter is set to `AutoAccept`.  <br/> |
| _AdditionalResponse_ <br/> |Optional  <br/> |System.String  <br/> |The  _AdditionalResponse_ parameter specifies the additional information to be included in responses to meeting requests. This parameter is meaningful only when the _AddAdditionalRepsponse_ parameter is set to `$true`.  <br/> |
| _AddNewRequestsTentatively_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AddNewRequestsTentatively_ parameter specifies whether to have the Calendar Attendant put new calendar items tentatively on the calendar. If the _AddNewRequestsTentatively_ parameter is set to $false, only existing calendar items are updated by the Calendar Attendant <br/> Valid input for this parameter is  `$true` or `$false`. The default value is  `$true`.  <br/> |
| _AddOrganizerToSubject_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AddOrganizerToSubject_ parameter specifies whether the meeting organizer's name is used as the subject of the meeting request. Valid input for this parameter is `$true` or `$false`. The default value is  `$true`.  <br/> This parameter is used only on resource mailboxes where the  _AutomateProcessing_ parameter is set to `AutoAccept`.  <br/> |
| _AllBookInPolicy_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllBookInPolicy_ parameter specifies whether to automatically approve in-policy requests from all users. Valid input for this parameter is `$true` or `$false`. The default value is  `$true`.  <br/> |
| _AllowConflicts_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowConflicts_ parameter specifies whether to allow conflicting meeting requests. Valid input for this parameter is `$true` or `$false`. The default value is  `$false`.  <br/> |
| _AllowRecurringMeetings_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowRecurringMeetings_ parameter specifies whether to allow recurring meetings. Valid input for this parameter is `$true` or `$false`. The default value is  `$true`.  <br/> |
| _AllRequestInPolicy_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllRequestInPolicy_ parameter specifies whether to allow all users to submit in-policy requests. Valid input for this parameter is `$true` or `$false`. The default value is  `$false`.  <br/> These requests are subject to approval by a resource mailbox delegate unless the  _AllBookInPolicy_ parameter is set to `$true`.  <br/> |
| _AllRequestOutOfPolicy_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllRequestOutOfPolicy_ parameter specifies whether to allow all users to submit out-of-policy requests. Valid input for this parameter is `$true` or `$false`. The default value is  `$false`.  <br/> Out-of-policy requests are subject to approval by a resource mailbox delegate.  <br/> |
| _AutomateProcessing_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.CalendarProcessingFlags  <br/> | The _AutomateProcessing_ parameter enables or disables calendar processing on the mailbox. <br/>  This parameter takes the following values: <br/>  `None`: Both the resource booking attendant and the Calendar Attendant are disabled on the mailbox.  <br/>  `AutoUpdate`: Only the Calendar Attendant processes meeting requests and responses.  <br/>  `AutoAccept`: Both the Calendar Attendant and resource booking attendant are enabled on the mailbox. This means that the Calendar Attendant updates the calendar, and then the resource booking assistant accepts the meeting based upon the policies.  <br/>  The default value on a resource mailbox is `AutoAccept`. The default value on a user mailbox is  `AutoUpdate`, but you can't change the value on a user mailbox.  <br/> |
| _BookingWindowInDays_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _BookingWindowInDays_ parameter specifies the maximum number of days in advance that the resource can be reserved. Valid input is an integer from 0 through 1080. The default value is 180 days. The value 0 means today. <br/> |
| _BookInPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _BookInPolicy_ parameter specifies a comma-separated list of users who are allowed to submit in-policy meeting requests to the resource mailbox. Any in-policy meeting requests from these users are automatically approved. <br/>  You can use any value that uniquely identifies the recipient. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ConflictPercentageAllowed_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _ConflictPercentageAllowed_ parameter specifies the maximum percentage of meeting conflicts for new recurring meeting requests. Valid input for this parameter is an integer from 0 through 100. The default value is 0. <br/> If a new recurring meeting request conflicts with existing reservations for the resource more than the percentage specified by this parameter, the recurring meeting request is automatically declined. When the value is 0, no conflicts are permitted for new recurring meeting requests.  <br/> |
| _DeleteAttachments_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _DeleteAttachments_ parameter specifies whether to remove attachments from all incoming messages. Valid input for this parameter is `$true` or `$false`. The default value is  `$true`.  <br/> This parameter is used only on resource mailboxes where the  _AutomateProcessing_ parameter is set to `AutoAccept`.  <br/> |
| _DeleteComments_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _DeleteComments_ parameter specifies whether to remove or keep any text in the message body of incoming meeting requests. <br/> Valid input for this parameter is  `$true` or `$false`.  <br/> This parameter is used only on resource mailboxes where the  _AutomateProcessing_ parameter is set to `AutoAccept`.  <br/> |
| _DeleteNonCalendarItems_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _DeleteNonCalendarItems_ parameter specifies whether to remove or keep all non-calendar items received by the resource mailbox. Valid input for this parameter is `$true` or `$false`. The default value is  `$true`.  <br/> |
| _DeleteSubject_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _DeleteSubject_ parameter specifies whether to remove or keep the subject of incoming meeting requests. Valid input for this parameter is `$true` or `$false`. The default value is  `$true`.  <br/> This parameter is used only on resource mailboxes where the  _AutomateProcessing_ parameter is set to `AutoAccept`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EnableResponseDetails_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _EnableResponseDetails_ parameter specifies whether to include the reasons for accepting or declining a meeting in the response email message. Valid input for this parameter is `$true` or `$false`. The default value is  `$true`.  <br/> By default, the reasons for accepting or declining a meeting in the response email message are included.  <br/> |
| _EnforceSchedulingHorizon_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _EnforceSchedulingHorizon_ parameter controls the behavior of recurring meetings that extend beyond the date specified by the _BookingWindowInDays_ parameter. <br/>  Valid values for this parameter are: <br/>  `$true`: A recurring meeting request is automatically declined if the meetings start on or before the date specified by the  _BookingWindowInDays_ parameter, and the meetings extend beyond the specified date. <br/>  `$false`: A recurring meeting request is automatically accepted if the meetings start on or before the date specified by the  _BookingWindowInDays_ parameter, and the meetings extend beyond the specified date. However, the number of meetings is automatically reduced so meetings won't occur after the specified date. <br/>  The default value is `$true`.  <br/> |
| _ForwardRequestsToDelegates_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _ForwardRequestsToDelegates_ parameter specifies whether to forward incoming meeting requests to the delegates defined for the resource mailbox. <br/> Valid input for this parameter is  `$true` or `$false`. The default value is  `$true`.  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _MaximumConflictInstances_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _MaximumConflictInstances_ parameter specifies the maximum number of conflicts for new recurring meeting requests when the _AllowRecurringMeetings_ parameter is set to `$true`. Valid input for this parameter is an integer from 0 through  `INT32` (2147483647). The default value is 0. <br/> If a new recurring meeting request conflicts with existing reservations for the resource more than the number of times specified by the  _MaximumConflictInstances_ parameter value, the recurring meeting request is automatically declined. When the value is 0, no conflicts are permitted for new recurring meeting requests. <br/> |
| _MaximumDurationInMinutes_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _MaximumDurationInMinutes_ parameter specifies the maximum duration in minutes for meeting requests. Valid input for this parameter is an integer from 0 through `INT32` (2147483647). The default value is 1440 (24 hours). <br/> When the value is set to 0, the maximum duration of a meeting is unlimited. For recurring meetings, the value of this parameter applies to the length of an individual meeting instance.  <br/> |
| _OrganizerInfo_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _OrganizerInfo_ parameter specifies whether to have mailboxes send organizer information when a meeting request is declined because of conflicts. <br/> Valid input for this parameter is  `$true` or `$false`. The default value is  `$true`.  <br/> By default, resource mailboxes send organizer information when a meeting request is declined because of conflicts.  <br/> |
| _ProcessExternalMeetingMessages_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _ProcessExternalMeetingMessages_ parameter specifies whether to process meeting requests that originate outside the Exchange organization. Valid input for this parameter is `$true` or `$false`. The default value is  `$false`.  <br/> By default, meeting requests that originate outside of the organization are rejected.  <br/> |
| _RemoveForwardedMeetingNotifications_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RemoveForwardedMeetingNotifications_ parameter specifies whether forwarded meeting notifications are moved to the Deleted Items folder after they're processed by the Calendar Attendant. <br/> Valid input for this parameter is  `$true` or `$false`. The default value is  `$false`.  <br/> |
| _RemoveOldMeetingMessages_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RemoveOldMeetingMessages_ parameter specifies whether the Calendar Attendant removes old and redundant updates and responses. <br/> Valid input for this parameter is  `$true` or `$false`. The default value is  `$true`.  <br/> |
| _RemovePrivateProperty_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RemovePrivateProperty_ parameter specifies whether to clear the private flag for incoming meeting requests. Valid input for this parameter is `$true` or `$false`. The default value is  `$true`.  <br/> By default, the private flag for incoming meeting requests is cleared. To ensure the private flag that was sent by the organizer in the original request remains as specified, set tthis parameter to  `$false`.  <br/> |
| _RequestInPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _RequestInPolicy_ parameter specifies a comma-separated list of users who are allowed to submit in-policy meeting requests to the resource mailbox. All in-policy meeting requests from these users are subject to approval by a resource mailbox delegate. <br/>  You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _RequestOutOfPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _RequestOutOfPolicy_ parameter specifies a comma-separated list of users who are allowed to submit out-of-policy requests. <br/>  You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/>  Out-of-policy requests are subject to approval by a resource mailbox delegate. <br/> |
| _ResourceDelegates_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> | The _ResourceDelegates_ parameter specifies a comma-separated list of users who are resource mailbox delegates. Resource mailbox delegates can approve or reject requests sent to the resource mailbox. <br/>  You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _ScheduleOnlyDuringWorkHours_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _ScheduleOnlyDuringWorkHours_ parameter specifies whether to allow meetings to be scheduled outside of the working hours that are defined for the resource mailbox. <br/> Valid input for this parameter is  `$true` or `$false`. The default value is  `$false`.  <br/> If set to  `$true`, meeting requests for times outside the working hours of the resource mailbox will be rejected.  <br/> You configure the working hours of the resource mailbox by using the  _WorkDays_,  _WorkingHoursStartTime_,  _WorkingHoursEndTime_ and _WorkingHoursTimeZone_ parameters on the **Set-MailboxCalendarConfiguration** cmdlet. <br/> |
| _TentativePendingApproval_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _TentativePendingApproval_ parameter specifies whether to mark pending requests as tentative on the calendar. Valid input for this parameter is `$true` or `$false`. The default value is  `$true`.  <br/> If set to  `$false`, pending requests are marked as free.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

