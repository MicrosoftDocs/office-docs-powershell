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

### ByEventId (Default)
```
Invoke-ChangeMeetingOrganizer [-Identity] <MailboxIdParameter> [-EventId] <String> [-NewOrganizer] <String>
 [-TransferSeriesStartDate <DateTime>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

### BySubject
```
Invoke-ChangeMeetingOrganizer [-Identity] <MailboxIdParameter> [-Subject] <String> [-NewOrganizer] <String>
 [-TransferSeriesStartDate <DateTime>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet changes the organizer of a meeting or meeting series. The change is effective starting from the next instance of the series or from a specified future date. Meeting instances before the effective date remain unchanged in the original organizer's calendar. Meeting instances after the effective date move to the new organizer's calendar, where the new organizer can manage them. The previous organizer isn't included as an attendee on the transferred meeting, but the new organizer can manually re-invite them.

Meeting attendees in the same Exchange Online organization don't need to re-RSVP, and the meeting instances on their calendars are silently updated with the new organizer information. Any changes attendees made to local meeting properties, such as Reminder, Category, Show As (Free/Tentative/Busy), and Private, are preserved.

Other meeting attendees, including attendees outside the organization or with mailboxes hosted on-premises in a hybrid deployment, receive a meeting message from the old organizer that ends the meeting series, followed by an invitation message from the new organizer for the new series. More cancellation and invitation messages are sent for each meeting exception (for example, a rescheduled meeting time) after the effective date. External attendees need to re-RSVP and recreate their changes to local meeting properties.

The meeting's properties are transferred to the new organizer's calendar as-is. If the meeting included online meeting information, the new organizer might not have permission to join or manage the existing online meeting, and should manually update the series with new online meeting information. For OneDrive attachments and links, the new organizer might not have permission to access the file, and should manually remove and re-add a copy.

> [!WARNING]
> For Teams-enabled meetings, changing the meeting organizer doesn't update the organizer of the associated Teams online meeting. The new organizer should manually update the series with new Teams meeting information so they can join and manage the online meeting.

This cmdlet has the following limitations:

- You can transfer only meetings on the user's default calendar.
- You can't transfer meetings in Group or Shared mailboxes. Instead, add the new organizer to the mailbox.
- After a meeting is transferred, you can't transfer again any portion of the series that remains on the original organizer's calendar. You can still transfer future instances from the new organizer's calendar to another organizer, or back to the original organizer.

> [!NOTE]
> If the cmdlet isn't available in your organization yet, you get a "Transfer meeting action is disabled", and no changes are made.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Invoke-ChangeMeetingOrganizer -Identity chris@contoso.com -Subject "Weekly Status Sync" -NewOrganizer adele@contoso.com
```

This example changes the organizer of the specified meeting from `chris@contoso.com` to `adele@contoso.com`, effective from the next meeting instance. Because the Subject parameter is used, the change happens only if a single meeting matches the subject. If multiple meetings match, the command returns the list of matches so you can rerun the command using the EventId parameter.

### Example 2
```powershell
Invoke-ChangeMeetingOrganizer -Identity chris@contoso.com -EventId AAMkAGRlMGI0 -NewOrganizer adele@contoso.com
```

This example changes the organizer of the meeting that has the specified EventId value from `chris@contoso.com` to `adele@contoso.com`, effective from the next meeting instance.

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

The Subject parameter specifies the meeting to change the organizer for. If the value contains spaces, enclose the value in quotation marks (").

If multiple meetings are found with the same subject, a list of matching meetings is returned with information to help you select the correct meeting. Find the EventId value of the correct meeting, and then run the command again by using the EventId parameter instead of the Subject parameter.

```yaml
Type: String
Parameter Sets: BySubject
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventId

> Applicable: Exchange Online

The EventId parameter specifies the meeting to change the organizer for. The value must identify the recurring series, not an individual instance.

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

The NewOrganizer parameter specifies the SMTP email address of the new meeting organizer. The new organizer must be a user in the same Exchange Online organization. The new organizer doesn't need to be an attendee of the meeting.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransferSeriesStartDate

> Applicable: Exchange Online

The TransferSeriesStartDate parameter specifies the effective date for changing the organizer. Meeting instances before this effective date remain with the original organizer. The value must be a date in the future. You can't transfer previous instances.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2026 to specify September 1, 2026.

If you don't use this parameter, the series transfer starts from the next instance.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on whether the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you to acknowledge the command before proceeding.

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
