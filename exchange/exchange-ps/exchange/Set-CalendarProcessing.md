---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-calendarprocessing
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-CalendarProcessing
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-CalendarProcessing

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-CalendarProcessing cmdlet to modify calendar processing options for resource mailboxes, which include the Calendar Attendant, resource booking assistant, and calendar configuration. Note that this cmdlet is effective only on resource mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-CalendarProcessing [-Identity] <MailboxIdParameter>
 [-AddAdditionalResponse <Boolean>]
 [-AdditionalResponse <String>]
 [-AddNewRequestsTentatively <Boolean>]
 [-AddOrganizerToSubject <Boolean>]
 [-AllBookInPolicy <Boolean>]
 [-AllowConflicts <Boolean>]
 [-AllowRecurringMeetings <Boolean>]
 [-AllRequestInPolicy <Boolean>]
 [-AllRequestOutOfPolicy <Boolean>]
 [-AutomateProcessing <CalendarProcessingFlags>]
 [-BookingType <ResourceBookingType>]
 [-BookingWindowInDays <Int32>]
 [-BookInPolicy <RecipientIdParameter[]>]
 [-Confirm]
 [-ConflictPercentageAllowed <Int32>]
 [-DeleteAttachments <Boolean>]
 [-DeleteComments <Boolean>]
 [-DeleteNonCalendarItems <Boolean>]
 [-DeleteSubject <Boolean>]
 [-DomainController <Fqdn>]
 [-EnableResponseDetails <Boolean>]
 [-EnforceSchedulingHorizon <Boolean>]
 [-ForwardRequestsToDelegates <Boolean>]
 [-IgnoreDefaultScope]
 [-MaximumConflictInstances <Int32>]
 [-MaximumDurationInMinutes <Int32>]
 [-OrganizerInfo <Boolean>]
 [-ProcessExternalMeetingMessages <Boolean>]
 [-RemoveForwardedMeetingNotifications <Boolean>]
 [-RemoveOldMeetingMessages <Boolean>]
 [-RemovePrivateProperty <Boolean>]
 [-RequestInPolicy <RecipientIdParameter[]>]
 [-RequestOutOfPolicy <RecipientIdParameter[]>]
 [-ResourceDelegates <RecipientIdParameter[]>]
 [-ScheduleOnlyDuringWorkHours <Boolean>]
 [-TentativePendingApproval <Boolean>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-CalendarProcessing -Identity "Conf 212" -AutomateProcessing AutoAccept -DeleteComments $true -AddOrganizerToSubject $true -AllowConflicts $false
```

This example automates the processing of calendar requests to the resource mailbox Conf 212.

### Example 2
```powershell
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing None
```

This example disables automatic processing for the resource mailbox Car 53.

### Example 3
```powershell
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllBookInPolicy $true
```

This example allows the Calendar Attendant to approve in-policy requests from all users.

### Example 4
```powershell
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllRequestInPolicy $true -AllBookInPolicy $false -ResourceDelegates "chris@contoso.com","michelle@contoso.com"
```

This example allows all users to submit in-policy requests, but the request is still subject to approval by one of the specified delegates.

### Example 5
```powershell
Set-CalendarProcessing -Identity "Room 221" -AutomateProcessing AutoAccept -RequestOutOfPolicy DavidPelton@contoso.com -ResourceDelegates "chris@contoso.com","michelle@contoso.com"
```

This example allows the Calendar Attendant to accept out-of-policy requests from David Pelton. The request is still subject to approval by one of the specified delegates.

### Example 6
```powershell
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing AutoAccept -BookInPolicy "ayla@contoso.com","tony@contoso.com" -AllBookInPolicy $false
```

This example allows a list of users to submit in-policy meeting requests to the equipment mailbox for Car 53.

### Example 7
```powershell
$group = New-DistributionGroup "Room 221 Booking Allowed"
Update-DistributionGroupMember -Identity $group.Identity -Members karina@contoso.com,tony@contoso.com -BypassSecurityGroupManagerCheck:$true
Set-CalendarProcessing -Identity "Room 221" -AutomateProcessing AutoAccept -BookInPolicy $group.Identity -AllBookInPolicy $false
```

This example rejects meeting requests from any user who isn't a member of the "Room 221 Booking Allowed" distribution group.

### Example 8
```powershell
Set-CalendarProcessing -Identity "Room 221" -ProcessExternalMeetingMessages $false
```

This example rejects meeting requests from any user who isn't a member of the Exchange organization.

## PARAMETERS

### -Identity
The Identity parameter specifies the resource mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddAdditionalResponse
The AddAdditionalResponse parameter specifies whether additional information (the value of the AdditionalResponse parameter) is added to meeting request responses. Valid values are:

- $true: Text from the AdditionalResponse parameter is added to meeting request responses.

- $false: No additional text is added to meeting request responses (any text in the AddAdditionalResponse parameter isn't used). This is the default value.

This parameter is used only on resource mailboxes where the AutomateProcessing parameter is set to AutoAccept.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdditionalResponse
The AdditionalResponse parameter specifies the additional information to be included in responses to meeting requests when the value of the AddAdditionalResponse parameter is $true. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddNewRequestsTentatively
The AddNewRequestsTentatively parameter specifies whether new meeting requests are added to the calendar as tentative. Valid values are:

- $true: New calendar items are added to the calendar as tentative. This is the default value.

- $false: Only existing calendar items are updated by the Calendar Attendant.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOrganizerToSubject
The AddOrganizerToSubject parameter specifies whether the meeting organizer's name is used as the subject of the meeting request. Valid values are:

- $true: The meeting organizer's name replaces any existing Subject value for the meeting request. This is the default value.

- $false: The original Subject value is preserved.

This parameter is used only on resource mailboxes where the AutomateProcessing parameter is set to AutoAccept.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllBookInPolicy
The AllBookInPolicy parameter specifies whether to automatically approve in-policy requests from all users to the resource mailbox. Valid values are:

- $true: In-policy requests from all users are automatically approved. This is the default value.

- $false: In-policy requests from all users aren't automatically approved (approval by a delegate is required).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowConflicts
The AllowConflicts parameter specifies whether to allow conflicting meeting requests. Valid values are:

- $true: Conflicts are allowed.

- $false: Conflicts aren't allowed. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowRecurringMeetings
The AllowRecurringMeetings parameter specifies whether to allow recurring meetings in meeting requests. Valid values are:

- $true: Recurring meetings are allowed. This is the default value.

- $false: Recurring meetings aren't allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllRequestInPolicy
The AllRequestInPolicy parameter specifies whether to allow all users to submit in-policy requests to the resource mailbox. Valid values are:

- $true: All users are allowed to submit in-policy requests to the resource mailbox. These requests require approval by a resource mailbox delegate if the AllBookInPolicy parameter is set to $false (the default value is $true).

- $false: All users can't submit in-policy requests to the resource mailbox. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllRequestOutOfPolicy
The AllRequestOutOfPolicy parameter specifies whether to allow all users to submit out-of-policy requests to the resource mailbox. Valid values are:

- $true: All users are allowed to submit out-of-policy requests to the resource mailbox. Out-of-policy requests require approval by a resource mailbox delegate.

- $false: All users can't submit out-of-policy requests to the resource mailbox. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomateProcessing
The AutomateProcessing parameter enables or disables calendar processing on the mailbox. Valid values are:

- None: Calendar processing is disabled on the mailbox. Both the resource booking attendant and the Calendar Attendant are disabled on the mailbox.

- AutoUpdate: Only the Calendar Attendant processes meeting requests and responses. Meeting requests are tentative in the calendar until they're approved by a delegate. Meeting organizers receive only decisions from delegates.

- AutoAccept: Both the Calendar Attendant and resource booking attendant are enabled on the mailbox. This means that the Calendar Attendant updates the calendar, and then the resource booking assistant accepts the meeting based upon the policies. Eligible meeting organizers receive the decision directly without human intervention (free = accept; busy = decline).

In on-premises Exchange, resource mailboxes created in the Exchange admin center (EAC) have the default value AutoAccept, while resource mailboxes created in PowerShell have the default value AutoUpdate.

In Exchange Online, resource mailbox created in the EAC and resource mailboxes created in PowerShell after November 15, 2018 have the default value AutoAccept. Resource mailboxes created in PowerShell before November 15 have the default value AutoUpdate.

The default value for user mailboxes is AutoUpdate, but you can't change the value on a user mailbox.

```yaml
Type: CalendarProcessingFlags
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingType
This parameter is available only in the cloud-based service.

The BookingType parameter specifies how reservations work on the resource mailbox. Valid values are:

- Standard: The resource can be reserved based on the other settings in this cmdlet. This is the default value

- Reserved: The resource can't be reserved.

```yaml
Type: <ResourceBookingType>
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingWindowInDays
The BookingWindowInDays parameter specifies the maximum number of days in advance that the resource can be reserved. A valid value is an integer from 0 through 1080. The default value is 180 days. The value 0 means today.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookInPolicy
The BookInPolicy parameter specifies users or groups who are allowed to submit in-policy meeting requests to the resource mailbox that are automatically approved. You can use any value that uniquely identifies the user or group. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConflictPercentageAllowed
The ConflictPercentageAllowed parameter specifies the maximum percentage of meeting conflicts for new recurring meeting requests. A valid value is an integer from 0 through 100. The default value is 0.

If a new recurring meeting request conflicts with existing reservations for the resource more than the percentage specified by this parameter, the recurring meeting request is automatically declined. When the value is 0, no conflicts are permitted for new recurring meeting requests.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteAttachments
The DeleteAttachments parameter specifies whether to remove attachments from all incoming messages. Valid values are:

- $true: Remove any attachments in incoming messages. This is the default value.

- $false: Preserve any attachments in incoming messages.

This parameter is used only on resource mailboxes where the AutomateProcessing parameter is set to AutoAccept.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteComments
The DeleteComments parameter specifies whether to remove or keep any text in the message body of incoming meeting requests. Valid values are:

- $true: Remove any text in the message body of incoming meeting requests. This is the default value.

- $false: Preserve any text in the message body of incoming meeting requests.

This parameter is used only on resource mailboxes where the AutomateProcessing parameter is set to AutoAccept.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteNonCalendarItems
The DeleteNonCalendarItems parameter specifies whether to remove or keep all non-calendar-related messages that are received by the resource mailbox. Valid values are:

- $true: Non-calendar messages are deleted. This is the default value.

- $false: Non-calendar messages are preserved.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteSubject
The DeleteSubject parameter specifies whether to remove or keep the subject of incoming meeting requests. Valid values are:

- $true: Remove the Subject value of incoming meeting requests. This is the default value.

- $false: Preserve The Subject value of incoming meeting requests.

This parameter is used only on resource mailboxes where the AutomateProcessing parameter is set to AutoAccept.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableResponseDetails
The EnableResponseDetails parameter specifies whether to include the reasons for accepting or declining a meeting in the response email message. Valid values are:

- $true: The reasons for accepting or declining a meeting are included in the response message. This is the default value.

- $false: The reasons for accepting or declining a meeting aren't included in the response message.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnforceSchedulingHorizon
The EnforceSchedulingHorizon parameter controls the behavior of recurring meetings that extend beyond the date specified by the BookingWindowInDays parameter. Valid values are:

- $true: A recurring meeting request is automatically declined if the meetings start on or before the date specified by the BookingWindowInDays parameter, and the meetings extend beyond the specified date. This is the default value.

- $false: A recurring meeting request is automatically accepted if the meetings start on or before the date specified by the BookingWindowInDays parameter, and the meetings extend beyond the specified date. However, the number of meetings is automatically reduced so meetings won't occur after the specified date.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardRequestsToDelegates
The ForwardRequestsToDelegates parameter specifies whether to forward incoming meeting requests to the delegates that are configured for the resource mailbox. Valid values are:

- $true: Forward incoming meeting requests to the delegates. This is the default value.

- $false: Don't forward incoming meeting requests to the delegates.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumConflictInstances
The MaximumConflictInstances parameter specifies the maximum number of conflicts for new recurring meeting requests when the AllowRecurringMeetings parameter is set to $true. A valid value is an integer from 0 through INT32 (2147483647). The default value is 0.

If a new recurring meeting request conflicts with existing reservations for the resource more than the number of times specified by the MaximumConflictInstances parameter value, the recurring meeting request is automatically declined. When the value is 0, no conflicts are permitted for new recurring meeting requests.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumDurationInMinutes
The MaximumDurationInMinutes parameter specifies the maximum duration in minutes for meeting requests. A valid value is an integer from 0 through INT32 (2147483647). The default value is 1440 (24 hours).

When the value is set to 0, the maximum duration of a meeting is unlimited. For recurring meetings, the value of this parameter applies to the length of an individual meeting instance.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizerInfo
The OrganizerInfo parameter specifies whether the resource mailbox sends organizer information when a meeting request is declined because of conflicts. Valid values are:

- $true: Organizer information is sent when a meeting request is declined because of conflicts. This is the default value.

- $false: Organizer information isn't sent when a meeting request is declined because of conflicts.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProcessExternalMeetingMessages
The ProcessExternalMeetingMessages parameter specifies whether to process meeting requests that originate outside the Exchange organization. Valid values are:

- $true: Meeting requests from external senders are processed.

- $false: Meeting requests from external senders are rejected. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveForwardedMeetingNotifications
The RemoveForwardedMeetingNotifications parameter specifies whether forwarded meeting notifications are moved to the Deleted Items folder after they're processed by the Calendar Attendant. Valid values are:

- $true: Processed forwarded meeting notifications are deleted (moved to the Deleted Items folder).

- $false: Processed forwarded meeting notifications aren't deleted. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOldMeetingMessages
The RemoveOldMeetingMessages parameter specifies whether the Calendar Attendant removes old and redundant updates and responses. Valid values are:

- $true: Outdated and redundant meeting messages are deleted. This is the default value.

- $false: Outdated and redundant meeting messages aren't deleted.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovePrivateProperty
The RemovePrivateProperty parameter specifies whether to clear the private flag for incoming meetings that were sent by the organizer in the original requests. Valid values are:

- $true: The private flag for incoming meeting requests is cleared (the meeting is no longer private). This is the default value.

- $false: The private flag for incoming meeting requests is preserved (private meetings stay private).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestInPolicy
The RequestInPolicy parameter specifies users who are allowed to submit in-policy meeting requests to the resource mailbox that require approval by a resource mailbox delegate. You can use any value that uniquely identifies the user. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestOutOfPolicy
The RequestOutOfPolicy parameter specifies users who are allowed to submit out-of-policy requests that require approval by a resource mailbox delegate. You can use any value that uniquely identifies the user. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceDelegates
The ResourceDelegates parameter specifies users can approve or reject requests that are sent to the resource mailbox. You can use any value that uniquely identifies the user. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScheduleOnlyDuringWorkHours
The ScheduleOnlyDuringWorkHours parameter specifies whether to allow meetings to be scheduled outside of the working hours that are defined for the resource mailbox. Valid values are:

- $true: Meeting requests that are outside of working hours are automatically rejected.

- $false: Meeting requests that are outside of working hours aren't automatically rejected. This is the default value.

You configure the working hours of the resource mailbox by using the WorkDays, WorkingHoursStartTime, WorkingHoursEndTime and WorkingHoursTimeZone parameters on the Set-MailboxCalendarConfiguration cmdlet.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TentativePendingApproval
The TentativePendingApproval parameter specifies whether to mark pending requests as tentative on the calendar. Valid values are:

- $true: Meeting requests that are awaiting approval from a delegate appear in the calendar as tentative. This is the default value.

- $false: Meeting requests that are awaiting approval appear in the calendar as free.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
