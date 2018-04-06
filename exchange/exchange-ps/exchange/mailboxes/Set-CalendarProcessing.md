---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-CalendarProcessing
schema: 2.0.0
---

# Set-CalendarProcessing

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-CalendarProcessing cmdlet to modify calendar processing options for resource mailboxes, which include the Calendar Attendant, resource booking assistant, and calendar configuration. Note that this cmdlet is effective only on resource mailboxes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-CalendarProcessing [-Identity] <MailboxIdParameter> [-AddAdditionalResponse <$true | $false>]
 [-AdditionalResponse <String>] [-AddNewRequestsTentatively <$true | $false>]
 [-AddOrganizerToSubject <$true | $false>] [-AllBookInPolicy <$true | $false>]
 [-AllowConflicts <$true | $false>] [-AllowRecurringMeetings <$true | $false>]
 [-AllRequestInPolicy <$true | $false>] [-AllRequestOutOfPolicy <$true | $false>]
 [-AutomateProcessing <None | AutoUpdate | AutoAccept>] [-BookingWindowInDays <Int32>]
 [-BookInPolicy <RecipientIdParameter[]>] [-Confirm] [-ConflictPercentageAllowed <Int32>]
 [-DeleteAttachments <$true | $false>] [-DeleteComments <$true | $false>]
 [-DeleteNonCalendarItems <$true | $false>] [-DeleteSubject <$true | $false>] [-DomainController <Fqdn>]
 [-EnableResponseDetails <$true | $false>] [-EnforceSchedulingHorizon <$true | $false>]
 [-ForwardRequestsToDelegates <$true | $false>] [-IgnoreDefaultScope] [-MaximumConflictInstances <Int32>]
 [-MaximumDurationInMinutes <Int32>] [-OrganizerInfo <$true | $false>]
 [-ProcessExternalMeetingMessages <$true | $false>] [-RemoveForwardedMeetingNotifications <$true | $false>]
 [-RemoveOldMeetingMessages <$true | $false>] [-RemovePrivateProperty <$true | $false>]
 [-RequestInPolicy <RecipientIdParameter[]>] [-RequestOutOfPolicy <RecipientIdParameter[]>]
 [-ResourceDelegates <RecipientIdParameter[]>] [-ScheduleOnlyDuringWorkHours <$true | $false>]
 [-TentativePendingApproval <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CalendarProcessing -Identity "Conf 212" -AutomateProcessing AutoAccept -DeleteComments $true -AddOrganizerToSubject $true -AllowConflicts $false
```

This example automates the processing of calendar requests to the resource mailbox Conf 212.

### -------------------------- Example 2 --------------------------
```
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing None
```

This example disables automatic processing for the resource mailbox Car 53.

### -------------------------- Example 3 --------------------------
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllBookInPolicy $true
```

This example allows the Calendar Attendant to approve in-policy requests from all users.

### -------------------------- Example 4 --------------------------
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllRequestInPolicy $true -AllBookInPolicy $false -ResourceDelegates "chris@contoso.com","michelle@contoso.com"
```

This example allows all users to submit in-policy requests, but the request is still subject to approval by one of the specified delegates.

### -------------------------- Example 5 --------------------------
```
Set-CalendarProcessing -Identity "Room 221" -AutomateProcessing AutoAccept -RequestOutOfPolicy DavidPelton@contoso.com -ResourceDelegates "chris@contoso.com","michelle@contoso.com"
```

This example allows the Calendar Attendant to accept out-of-policy requests from David Pelton. The request is still subject to approval by one of the specified delegates.

### -------------------------- Example 6 --------------------------
```
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing AutoAccept -BookInPolicy "ayla@contoso.com","tony@contoso.com" -AllBookInPolicy $false
```

This example allows a list of users to submit in-policy meeting requests to the equipment mailbox for Car 53.

### -------------------------- Example 7 --------------------------
```
Set-CalendarProcessing -Identity "Room 221" -ProcessExternalMeetingMessages $false
```

This example rejects meeting requests from any user who isn't a member of the Exchange organization.

## PARAMETERS

### -Identity
The Identity parameter specifies the resource mailbox that you want to modify. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddAdditionalResponse
The AddAdditionalResponse parameter specifies whether additional information would be sent from the resource mailbox when responding to meeting requests. Valid input for this parameter is $true or $false. The default value is $false.

This parameter is used only on resource mailboxes where the AutomateProcessing parameter is set to AutoAccept.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdditionalResponse
The AdditionalResponse parameter specifies the additional information to be included in responses to meeting requests. This parameter is meaningful only when the AddAdditionalRepsponse parameter is set to $true.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddNewRequestsTentatively
The AddNewRequestsTentatively parameter specifies whether to have the Calendar Attendant put new calendar items tentatively on the calendar. If the AddNewRequestsTentatively parameter is set to $false, only existing calendar items are updated by the Calendar Attendant

Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOrganizerToSubject
The AddOrganizerToSubject parameter specifies whether the meeting organizer's name is used as the subject of the meeting request. Valid input for this parameter is $true or $false. The default value is $true.

This parameter is used only on resource mailboxes where the AutomateProcessing parameter is set to AutoAccept.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllBookInPolicy
The AllBookInPolicy parameter specifies whether to automatically approve in-policy requests from all users. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowConflicts
The AllowConflicts parameter specifies whether to allow conflicting meeting requests. Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowRecurringMeetings
The AllowRecurringMeetings parameter specifies whether to allow recurring meetings. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllRequestInPolicy
The AllRequestInPolicy parameter specifies whether to allow all users to submit in-policy requests. Valid input for this parameter is $true or $false. The default value is $false.

These requests are subject to approval by a resource mailbox delegate unless the AllBookInPolicy parameter is set to $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllRequestOutOfPolicy
The AllRequestOutOfPolicy parameter specifies whether to allow all users to submit out-of-policy requests. Valid input for this parameter is $true or $false. The default value is $false.

Out-of-policy requests are subject to approval by a resource mailbox delegate.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomateProcessing
The AutomateProcessing parameter enables or disables calendar processing on the mailbox.

This parameter takes the following values:

- None: Both the resource booking attendant and the Calendar Attendant are disabled on the mailbox.

- AutoUpdate: Only the Calendar Attendant processes meeting requests and responses.

- AutoAccept: Both the Calendar Attendant and resource booking attendant are enabled on the mailbox. This means that the Calendar Attendant updates the calendar, and then the resource booking assistant accepts the meeting based upon the policies.

The default value on a resource mailbox is AutoAccept. The default value on a user mailbox is AutoUpdate, but you can't change the value on a user mailbox.

```yaml
Type: None | AutoUpdate | AutoAccept
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingWindowInDays
The BookingWindowInDays parameter specifies the maximum number of days in advance that the resource can be reserved. Valid input is an integer from 0 through 1080. The default value is 180 days. The value 0 means today.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookInPolicy
The BookInPolicy parameter specifies a comma-separated list of users who are allowed to submit in-policy meeting requests to the resource mailbox. Any in-policy meeting requests from these users are automatically approved.

You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConflictPercentageAllowed
The ConflictPercentageAllowed parameter specifies the maximum percentage of meeting conflicts for new recurring meeting requests. Valid input for this parameter is an integer from 0 through 100. The default value is 0.

If a new recurring meeting request conflicts with existing reservations for the resource more than the percentage specified by this parameter, the recurring meeting request is automatically declined. When the value is 0, no conflicts are permitted for new recurring meeting requests.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteAttachments
The DeleteAttachments parameter specifies whether to remove attachments from all incoming messages. Valid input for this parameter is $true or $false. The default value is $true.

This parameter is used only on resource mailboxes where the AutomateProcessing parameter is set to AutoAccept.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteComments
The DeleteComments parameter specifies whether to remove or keep any text in the message body of incoming meeting requests.

Valid input for this parameter is $true or $false.

This parameter is used only on resource mailboxes where the AutomateProcessing parameter is set to AutoAccept.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteNonCalendarItems
The DeleteNonCalendarItems parameter specifies whether to remove or keep all non-calendar items received by the resource mailbox. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteSubject
The DeleteSubject parameter specifies whether to remove or keep the subject of incoming meeting requests. Valid input for this parameter is $true or $false. The default value is $true.

This parameter is used only on resource mailboxes where the AutomateProcessing parameter is set to AutoAccept.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableResponseDetails
The EnableResponseDetails parameter specifies whether to include the reasons for accepting or declining a meeting in the response email message. Valid input for this parameter is $true or $false. The default value is $true.

By default, the reasons for accepting or declining a meeting in the response email message are included.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnforceSchedulingHorizon
The EnforceSchedulingHorizon parameter controls the behavior of recurring meetings that extend beyond the date specified by the BookingWindowInDays parameter.

Valid values for this parameter are:

- $true: A recurring meeting request is automatically declined if the meetings start on or before the date specified by the BookingWindowInDays parameter, and the meetings extend beyond the specified date.

- $false: A recurring meeting request is automatically accepted if the meetings start on or before the date specified by the BookingWindowInDays parameter, and the meetings extend beyond the specified date. However, the number of meetings is automatically reduced so meetings won't occur after the specified date.

The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardRequestsToDelegates
The ForwardRequestsToDelegates parameter specifies whether to forward incoming meeting requests to the delegates defined for the resource mailbox.

Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumConflictInstances
The MaximumConflictInstances parameter specifies the maximum number of conflicts for new recurring meeting requests when the AllowRecurringMeetings parameter is set to $true. Valid input for this parameter is an integer from 0 through INT32 (2147483647). The default value is 0.

If a new recurring meeting request conflicts with existing reservations for the resource more than the number of times specified by the MaximumConflictInstances parameter value, the recurring meeting request is automatically declined. When the value is 0, no conflicts are permitted for new recurring meeting requests.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumDurationInMinutes
The MaximumDurationInMinutes parameter specifies the maximum duration in minutes for meeting requests. Valid input for this parameter is an integer from 0 through INT32 (2147483647). The default value is 1440 (24 hours).

When the value is set to 0, the maximum duration of a meeting is unlimited. For recurring meetings, the value of this parameter applies to the length of an individual meeting instance.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizerInfo
The OrganizerInfo parameter specifies whether to have mailboxes send organizer information when a meeting request is declined because of conflicts.

Valid input for this parameter is $true or $false. The default value is $true.

By default, resource mailboxes send organizer information when a meeting request is declined because of conflicts.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProcessExternalMeetingMessages
The ProcessExternalMeetingMessages parameter specifies whether to process meeting requests that originate outside the Exchange organization. Valid input for this parameter is $true or $false. The default value is $false.

By default, meeting requests that originate outside of the organization are rejected.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveForwardedMeetingNotifications
The RemoveForwardedMeetingNotifications parameter specifies whether forwarded meeting notifications are moved to the Deleted Items folder after they're processed by the Calendar Attendant.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOldMeetingMessages
The RemoveOldMeetingMessages parameter specifies whether the Calendar Attendant removes old and redundant updates and responses.

Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovePrivateProperty
The RemovePrivateProperty parameter specifies whether to clear the private flag for incoming meeting requests. Valid input for this parameter is $true or $false. The default value is $true.

By default, the private flag for incoming meeting requests is cleared. To ensure the private flag that was sent by the organizer in the original request remains as specified, set tthis parameter to $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestInPolicy
The RequestInPolicy parameter specifies a comma-separated list of users who are allowed to submit in-policy meeting requests to the resource mailbox. All in-policy meeting requests from these users are subject to approval by a resource mailbox delegate.

You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestOutOfPolicy
The RequestOutOfPolicy parameter specifies a comma-separated list of users who are allowed to submit out-of-policy requests.

You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

Out-of-policy requests are subject to approval by a resource mailbox delegate.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceDelegates
The ResourceDelegates parameter specifies a comma-separated list of users who are resource mailbox delegates. Resource mailbox delegates can approve or reject requests sent to the resource mailbox.

You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScheduleOnlyDuringWorkHours
The ScheduleOnlyDuringWorkHours parameter specifies whether to allow meetings to be scheduled outside of the working hours that are defined for the resource mailbox.

Valid input for this parameter is $true or $false. The default value is $false.

If set to $true, meeting requests for times outside the working hours of the resource mailbox will be rejected.

You configure the working hours of the resource mailbox by using the WorkDays, WorkingHoursStartTime, WorkingHoursEndTime and WorkingHoursTimeZone parameters on the Set-MailboxCalendarConfiguration cmdlet.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TentativePendingApproval
The TentativePendingApproval parameter specifies whether to mark pending requests as tentative on the calendar. Valid input for this parameter is $true or $false. The default value is $true.

If set to $false, pending requests are marked as free.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/000bc90f-1d00-4384-ab59-d6cf6f674825.aspx)
