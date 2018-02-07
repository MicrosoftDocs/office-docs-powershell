---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-CalendarProcessing

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-CalendarProcessing cmdlet to modify calendar-related processing configuration properties for the target mailbox, which include Calendar Attendant, resource booking assistant, and calendar configuration.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Calendar processing" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Calendar processing" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-CalendarProcessing -Identity "Conf 212" -AutomateProcessing AutoAccept -DeleteComments $true -AddOrganizerToSubject $true -AllowConflicts $false
```

This example automates the processing of calendar requests to the resource mailbox Conf 212.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-CalendarProcessing -Identity "Conf 212" -AutomateProcessing AutoAccept -DeleteComments $true -AddOrganizerToSubject $true -AllowConflicts $false
```

This example automates the processing of calendar requests to the resource mailbox Conf 212.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-CalendarProcessing -Identity "Conf 212" -AutomateProcessing AutoAccept -DeleteComments $true -AddOrganizerToSubject $true -AllowConflicts $false
```

This example automates the processing of calendar requests to the resource mailbox Conf 212.

### Example 1 -------------------------- (Exchange Online)
```
Set-CalendarProcessing -Identity "Conf 212" -AutomateProcessing AutoAccept -DeleteComments $true -AddOrganizerToSubject $true -AllowConflicts $false
```

This example automates the processing of calendar requests to the resource mailbox Conf 212.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-CalendarProcessing -Identity "Car 54" -AutomateProcessing:None
```

This example disables automatic processing for the resource mailbox Car 54.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing None
```

This example disables automatic processing for the resource mailbox Car 53.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing None
```

This example disables automatic processing for the resource mailbox Car 53.

### Example 2 -------------------------- (Exchange Online)
```
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing None
```

This example disables automatic processing for the resource mailbox Car 53.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-CalendarProcessing -Identity "David Pelton" -AddNewRequestsTentatively:$false
```

This example disables the automatic creation of new calendar items but maintains updates for existing calendar items of David Pelton's mailbox.

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllBookInPolicy $true
```

This example allows the Calendar Attendant to approve in-policy requests from all users.

### Example 3 -------------------------- (Exchange Server 2016)
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllBookInPolicy $true
```

This example allows the Calendar Attendant to approve in-policy requests from all users.

### Example 3 -------------------------- (Exchange Online)
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllBookInPolicy $true
```

This example allows the Calendar Attendant to approve in-policy requests from all users.

### Example 4 -------------------------- (Exchange Server 2010)
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllBookInPolicy $true
```

This example allows the Calendar Attendant to approve in-policy requests from all users.

### Example 4 -------------------------- (Exchange Server 2013)
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllRequestInPolicy $true
```

This example allows all users to submit in-policy requests, but the request is still subject to approval by a delegate.

### Example 4 -------------------------- (Exchange Server 2016)
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllRequestInPolicy $true -AllBookInPolicy $false -ResourceDelegates "chris@contoso.com","michelle@contoso.com"
```

This example allows all users to submit in-policy requests, but the request is still subject to approval by one of the specified delegates.

### Example 4 -------------------------- (Exchange Online)
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllRequestInPolicy $true -AllBookInPolicy $false -ResourceDelegates "chris@contoso.com","michelle@contoso.com"
```

This example allows all users to submit in-policy requests, but the request is still subject to approval by one of the specified delegates.

### Example 5 -------------------------- (Exchange Server 2010)
```
Set-CalendarProcessing -Identity "5th Floor Conference Room" -AutomateProcessing AutoAccept -AllRequestInPolicy $true
```

This example allows all users to submit in-policy requests, but the request is still subject to approval by a delegate.

### Example 5 -------------------------- (Exchange Server 2013)
```
Set-CalendarProcessing -Identity "Room 221" -AutomateProcessing AutoAccept -RequestOutOfPolicy DavidPelton@contoso.com
```

This example allows the Calendar Attendant to accept out-of-policy requests from David Pelton. The request is still subject to approval by a delegate.

### Example 5 -------------------------- (Exchange Server 2016)
```
Set-CalendarProcessing -Identity "Room 221" -AutomateProcessing AutoAccept -RequestOutOfPolicy DavidPelton@contoso.com -ResourceDelegates "chris@contoso.com","michelle@contoso.com"
```

This example allows the Calendar Attendant to accept out-of-policy requests from David Pelton. The request is still subject to approval by one of the specified delegates.

### Example 5 -------------------------- (Exchange Online)
```
Set-CalendarProcessing -Identity "Room 221" -AutomateProcessing AutoAccept -RequestOutOfPolicy DavidPelton@contoso.com -ResourceDelegates "chris@contoso.com","michelle@contoso.com"
```

This example allows the Calendar Attendant to accept out-of-policy requests from David Pelton. The request is still subject to approval by one of the specified delegates.

### Example 6 -------------------------- (Exchange Server 2010)
```
Set-CalendarProcessing -Identity "Room222" -AutomateProcessing AutoAccept -RequestOutOfPolicy DavidPelton@contoso.com
```

This example allows the Calendar Attendant to accept out-of-policy requests from David Pelton. The request is still subject to approval by a delegate.

### Example 6 -------------------------- (Exchange Server 2013)
```
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing AutoAccept -BookInPolicy "ayla@contoso.com","tony@contoso.com"
```

This example allows a list of users to submit in-policy meeting requests to the equipment mailbox for Car 53.

### Example 6 -------------------------- (Exchange Server 2016)
```
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing AutoAccept -BookInPolicy "ayla@contoso.com","tony@contoso.com" -AllBookInPolicy $false
```

This example allows a list of users to submit in-policy meeting requests to the equipment mailbox for Car 53.

### Example 6 -------------------------- (Exchange Online)
```
Set-CalendarProcessing -Identity "Car 53" -AutomateProcessing AutoAccept -BookInPolicy "ayla@contoso.com","tony@contoso.com" -AllBookInPolicy $false
```

This example allows a list of users to submit in-policy meeting requests to the equipment mailbox for Car 53.

### Example 7 -------------------------- (Exchange Server 2010)
```
Set-CalendarProcessing -Identity "Car 54" -AutomateProcessing AutoAccept -BookInPolicy "ayla@contoso.com","tony@contoso.com"
```

This example allows a list of users to submit in-policy meeting requests to the equipment mailbox for Car 54.

### Example 7 -------------------------- (Exchange Server 2013)
```
Set-CalendarProcessing -Identity "Room 221" -ProcessExternalMeetingMessages $false
```

This example rejects meeting requests from any user who isn't a member of the Exchange organization.

### Example 7 -------------------------- (Exchange Server 2016)
```
Set-CalendarProcessing -Identity "Room 221" -ProcessExternalMeetingMessages $false
```

This example rejects meeting requests from any user who isn't a member of the Exchange organization.

### Example 7 -------------------------- (Exchange Online)
```
Set-CalendarProcessing -Identity "Room 221" -ProcessExternalMeetingMessages $false
```

This example rejects meeting requests from any user who isn't a member of the Exchange organization.

### Example 8 -------------------------- (Exchange Server 2010)
```
Set-CalendarProcessing -Identity "Room222" -ProcessExternalMeetingMessages $false
```

This example rejects meeting requests from any user who isn't a member of the Exchange organization.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the identity of the mailbox.

This parameter can take any of the following values:

- Distinguished name (DN)

- Canonical name

- GUID

- Name

- Display name

- Alias

- Exchange DN

- Primary SMTP e-mail address



!!! Exchange Server 2013

The Identity parameter specifies the resource mailbox.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The AddAdditionalResponse parameter specifies whether additional information would be sent from the resource mailbox when responding to meeting requests. Valid input for this parameter is $true or $false.

This parameter is ignored unless the AutomateProcessing parameter is set to AutoAccept.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The AdditionalResponse parameter specifies the additional information to be included in responses to meeting requests.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The AddNewRequestsTentatively parameter specifies whether to have the Calendar Attendant put new calendar items tentatively on the calendar. If the AddNewRequestsTentatively parameter is set to $false, only existing calendar items are updated by the Calendar Attendant.

Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The AddOrganizerToSubject parameter specifies whether the meeting organizer's name is used as the subject of the meeting request. Valid input for this parameter is $true or $false.

This parameter is ignored unless the AutomateProcessing parameter is set to AutoAccept.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The AllBookInPolicy parameter specifies whether to automatically approve in-policy requests from all users. Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The AllowConflicts parameter specifies whether to allow conflicting meeting requests. Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The AllowRecurringMeetings parameter specifies whether to allow recurring meetings. Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The AllRequestInPolicy parameter specifies whether to allow all users to submit in-policy requests. Valid input for this parameter is $true or $false.

These requests are subject to approval by a resource mailbox delegate unless the AllBookInPolicy parameter is set to $true.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The AllRequestOutOfPolicy parameter specifies whether to allow all users to submit out-of-policy requests. Valid input for this parameter is $true or $false.

Out-of-policy requests are subject to approval by a resource mailbox delegate.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The AutomateProcessing parameter enables or disables calendar processing on the mailbox.

This parameter takes the following values:

- None If this parameter is set to None, both the resource booking attendant and the Calendar Attendant are disabled on the mailbox.

- AutoUpdate If this parameter is set to AutoUpdate, only the Calendar Attendant processes meeting requests and responses. This is the recommended setting.

- AutoAccept If this parameter is set to AutoAccept, both the Calendar Attendant and resource booking attendant are enabled on the mailbox. This means that the Calendar Attendant updates the calendar, and then the resource booking assistant accepts the meeting based upon the policies.

The default setting is AutoUpdate.



!!! Exchange Server 2013

The AutomateProcessing parameter enables or disables calendar processing on the mailbox.

This parameter takes the following values:

- None Both the resource booking attendant and the Calendar Attendant are disabled on the mailbox.

- AutoUpdate Only the Calendar Attendant processes meeting requests and responses.

- AutoAccept Both the Calendar Attendant and resource booking attendant are enabled on the mailbox. This means that the Calendar Attendant updates the calendar, and then the resource booking assistant accepts the meeting based upon the policies.

The default value on a resource mailbox is AutoAccept. The default value on a user mailbox is AutoUpdate, but you can't change the value on a user mailbox.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

Use the BookingWindowInDays parameter to specify the number of days for which meetings are allowed to be booked in advance. Valid input is an integer from 0 through 1080. By default, the Booking Window for accepting meetings is the current day when the value is set to 0. The meeting cannot be booked to a future date.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The BookInPolicy parameter specifies a list of users who are allowed to submit in-policy meeting requests to the resource mailbox. Any in-policy meeting requests from these users are automatically approved.

This parameter can take any of the following values:

- DN

- Canonical name

- GUID

- Name

- Display name

- Alias

- Exchange DN

- Primary SMTP e-mail address



!!! Exchange Server 2013

The BookInPolicy parameter specifies a comma-separated list of users who are allowed to submit in-policy meeting requests to the resource mailbox. Any in-policy meeting requests from these users are automatically approved.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConflictPercentageAllowed
!!! Exchange Server 2010

The ConflictPercentageAllowed parameter specifies the maximum percentage of meeting conflicts for new recurring meeting requests. Valid input for this parameter is an integer from 0 through 100.

If a new recurring meeting request conflicts with existing reservations for the resource more than the percentage specified by the ConflictPercentAllowed value, the recurring meeting request is automatically declined. When the value is 0, no conflicts are permitted for new recurring meeting requests.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The DeleteAttachments parameter specifies whether to remove attachments from all incoming messages. Valid input for this parameter is $true or $false.

This parameter is ignored unless the AutomateProcessing parameter is set to AutoAccept.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The DeleteComments parameter removes any text in the message body of incoming meeting requests.

Valid input for this parameter is $true or $false.

This parameter is ignored unless the AutomateProcessing parameter is set to AutoAccept.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The DeleteNonCalendarItems parameter is set to $true to remove all non-calendar items received by the mailbox. Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The DeleteSubject parameter removes the subject of incoming meeting requests. Valid input for this parameter is $true or $false.

This parameter is ignored unless the AutomateProcessing parameter is set to AutoAccept.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableResponseDetails
!!! Exchange Server 2010

The EnableResponseDetails parameter is set to $true to include the reasons for accepting or declining a meeting in the response e-mail message. Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The EnforceSchedulingHorizon parameter enforces an end date for recurring meetings based on the value of the BookingWindowInDays parameter.

Valid input for this parameter is $true or $false.

When BookingWindowInDays is 0, an end date isn't enforced for any recurring meetings.

When BookingWindowInDays is greater than 0 and EnforceSchedulingHorizon is $true, the recurring meeting request is automatically declined if the end date is greater that the value specified by BookingWindowInDays.

When BookingWindowInDays is greater than 0 and EnforceSchedulingHorizon is $false, the end date of a recurring meeting is automatically truncated to the value specified by BookingWindowInDays.



!!! Exchange Server 2013

The EnforceSchedulingHorizon parameter controls the behavior of recurring meetings that extend beyond the date specified by the BookingWindowInDays parameter.

Valid values for this parameter are:

- $true A recurring meeting request is automatically declined if the meetings start on or before the date specified by the BookingWindowInDays parameter, and the meetings extend beyond the specified date.

- $false A recurring meeting request is automatically accepted if the meetings start on or before the date specified by the BookingWindowInDays parameter, and the meetings extend beyond the specified date. However, the number of meetings is automatically reduced so meetings won't occur after the specified date.

The default value is $true.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The ForwardRequestsToDelegates parameter specifies whether to forward incoming meeting requests to the delegates defined for the mailbox.

Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The MaximumConflictInstances parameter specifies the maximum number of conflicts for new recurring meeting requests when the AllowRecurringMeetings parameter is set to $true. Valid input for this parameter is an integer from 0 through 2147483647.

If a new recurring meeting request conflicts with existing reservations for the resource more than the number of times specified by the MaximumConflictInstances value, the recurring meeting request is automatically declined. When the value is 0, no conflicts are permitted for new recurring meeting requests.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The MaximumDurationInMinutes parameter specifies the maximum duration allowed for incoming meeting requests. Valid input for this parameter is an integer from 0 through 2147483647. When the value is set to 0, the maximum duration of a meeting is unlimited. For recurring meetings, the value of MaximumDurationInMinutes applies to the length of an individual meeting instance.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The OrganizerInfo parameter is set to $true to have resource mailboxes send organizer information when a meeting request is declined because of conflicts.

Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The ProcessExternalMeetingMessages parameter specifies whether to process meeting requests that originate outside the Exchange organization. If set to $false, meeting requests that originate outside of the organization are rejected. Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The RemoveForwardedMeetingNotifications parameter specifies whether meeting forwarding notifications are moved to the Deleted Items folder after they are processed by the Calendar Attendant.

Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The RemoveOldMeetingMessages parameter specifies whether the Calendar Attendant removes old and redundant updates and responses.

Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The RemovePrivateProperty parameter is set to $true to clear the private flag for incoming meeting requests. To ensure the private flag that was sent by the organizer in the original request remains as specified, set the RemovePrivateProperty to $false for the room mailbox. Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The RequestInPolicy parameter specifies a list of users who are allowed to submit in-policy meeting requests to the resource mailbox. All in-policy meeting requests from these users are subject to approval by a resource mailbox delegate.

This parameter can take the following values:

- DN

- Canonical name

- GUID

- Name

- Display name

- Alias

- Exchange DN

- Primary SMTP e-mail address



!!! Exchange Server 2013

The RequestInPolicy parameter specifies a comma-separated list of users who are allowed to submit in-policy meeting requests to the resource mailbox. All in-policy meeting requests from these users are subject to approval by a resource mailbox delegate.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The RequestOutOfPolicy parameter specifies a list of users who are allowed to submit out-of-policy requests.

Out-of-policy requests are subject to approval by a resource mailbox delegate.

This parameter can take the following values:

- DN

- Canonical name

- GUID

- Name

- Display name

- Alias

- Exchange DN

- Primary SMTP e-mail address



!!! Exchange Server 2013

The RequestOutOfPolicy parameter specifies a comma-separated list of users who are allowed to submit out-of-policy requests.

Out-of-policy requests are subject to approval by a resource mailbox delegate.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The ResourceDelegates parameter specifies a list of users who are resource mailbox delegates. Resource mailbox delegates can approve or reject requests sent to this resource mailbox.

This parameter can take the following values:

- DN

- Canonical name

- GUID

- Name

- Display name

- Alias

- Exchange DN

- Primary SMTP e-mail address



!!! Exchange Server 2013

The ResourceDelegates parameter specifies a comma-separated list of users who are resource mailbox delegates. Resource mailbox delegates can approve or reject requests sent to the resource mailbox.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The ScheduleOnlyDuringWorkHours parameter specifies whether to allow meetings to be scheduled outside work hours. If set to $true, meeting requests for times outside of the mailbox's working hours will be rejected. Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The TentativePendingApproval parameter specifies whether to mark pending requests as tentative on the calendar. If set to $false, pending requests are marked as free. Valid input for this parameter is $true or $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
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

