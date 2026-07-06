---
applicable: Exchange Online
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/invoke-changemeetingorganizer
schema: 2.0.0
title: Invoke-ChangeMeetingOrganizer
---

# Invoke-ChangeMeetingOrganizer

## SYNOPSIS

This cmdlet is available only in the cloud-based service.

Use the Invoke-ChangeMeetingOrganizer cmdlet to change the organizer of an existing meeting or meeting series.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Subject
```
Invoke-ChangeMeetingOrganizer
 -Identity <MailboxIdParameter>
 -Subject <String>
 -NewOrganizer <String>
 [-TransferSeriesStartDate <DateTime>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

### EventID
```
Invoke-ChangeMeetingOrganizer
 -Identity <MailboxIdParameter>
 -EventId <String>
 -NewOrganizer <String>
 [-TransferSeriesStartDate <DateTime>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```



## DESCRIPTION
This cmdlet changes the organizer of a meeting or meeting series. The change is effective starting from the next instance of the series or from a provided future date. Meeting instances before the effective date remain unmodified in the original organizer's calendar. Meeting instances after the effective date are moved to the new organizer's calendar and can be managed by the new organizer. The previous organizer is not included as an attendee on the transferred meeting, but can be manually re-invited by the new organizer.

Meeting attendees in the same Exchange Online tenant don't need to re-RSVP and the existing instances on their calendar are silently updated with the new meeting organizer information. Any changes attendees made to local meeting properties, such as Reminder, Category, Show As (Free/Tentative/Busy), and Private are preserved.
Other meeting attendees, including attendees outside the tenant or with mailboxes hosted on-premises in a hybrid deployment, receive a meeting message from the old organizer ending the meeting series, followed by an invitation message from the new organizer to the new series. Additional cancelation/invitation messages are sent for each meeting exception (e.g. rescheduled meeting time) after the effective date. External attendees will need to re-RSVP and recreate changes to local meeting properties.

Properties of the meeting are transferred to the new organizer's calendar as-is. If the meeting included online meeting information, the new organizer may not have permission to join or manage the existing online meeting and should manually update the series with new online meeting information. In the case of OneDrive attachments and links, the new organizer may not have permission to access the file and should manually remove and re-add a copy.

> [!WARNING]
> For Teams-enabled meetings, changing the meeting organizer does not update the organizer of the associated Teams online meeting. The new organizer should manually update the series with new Teams meeting information to ensure they can join and manage the online meeting.

#### Additional limitations:
- Only meetings on the user's default calendar can be transferred. 
- Meetings in Group or Shared mailboxes cannot be transferred. Instead, add the new organizer to the mailbox.
- After a meeting is transferred, any portion of the series remaining on the original organizer's calendar cannot be transferred again. You can still transfer future instances from the new organizer's calendar to another new organizer or back to the original organizer.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

> [!NOTE]
> Rollout for Invoke-ChangeMeetingOrganizer started in June 2026 and may not have reached your tenant yet. Running the cmdlet before it reaches your tenant returns "Transfer meeting action is disabled" and no changes will be made.

## EXAMPLES

### Example 1
```powershell
Invoke-ChangeMeetingOrganizer -Identity chris@contoso.com -Subject "Weekly Status Sync" -NewOrganizer adele@contoso.com
```

This example changes the organizer of the specified meeting from chris@contoso.com to adele@contoso.com, effective from the next meeting instance.

### Example 2
```powershell
Invoke-ChangeMeetingOrganizer -Identity chris@contoso.com -EventId AAMkAGRlMGI0 -NewOrganizer adele@contoso.com
```

This example changes the organizer of the specified meeting from chris@contoso.com to adele@contoso.com, effective from the next meeting instance.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the mailbox of the current meeting organizer. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Subject

> Applicable: Exchange Online

The Subject parameter identifies the meeting to change the organizer for. If the value contains spaces, enclose the value in quotation marks ("). If multiple meetings are found with the same Subject, a list of matching meetings is returned together with information to aid in the selection of the correct meeting. Find the EventId of the correct meeting and re-run Invoke-ChangeMeetingOrganizer providing the EventId instead of the Subject.

```yaml
Type: String
Parameter Sets: BySubject
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventId

> Applicable: Exchange Online

The EventId parameter specifies the meeting to change the organizer for. EventId must be for the series master and not an individual instance.

```yaml
Type: String
Parameter Sets: ByEventId
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewOrganizer

> Applicable: Exchange Online

The NewOrganizer parameter specifies the SMTP email address of the new meeting organizer. The new organizer must be a user within the same Exchange Online tenant. The new organizer does not need to be an attendee of the meeting.

```yaml
Type: String
Parameter Sets: ByEventId
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransferSeriesStartDate

> Applicable: Exchange Online

The TransferSeriesStartDate parameter specifies the effective date for changing the organizer. Meeting instances before this effective date remain with the original organizer. TransferSeriesStartDate must be a date in the future (previous instances cannot be transferred).

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2026 to specify September 1, 2026.

If you don't use this parameter, the series is transferred starting from the next instance.

```yaml
Type: DateTime
Parameter Sets: ByEventId
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. When -Confirm is provided or set to true, you must respond to a confirmation prompt before the organizer is changed. If -Confirm is not provided or set to false, the organizer is changed without confirmation. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Online

The WhatIf switch shows what the command does without making any changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
