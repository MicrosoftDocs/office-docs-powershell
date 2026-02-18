---
# Required metadata
# For more information, see https://learn.microsoft.com/en-us/help/platform/learn-editor-add-metadata
# For valid values of ms.service, ms.prod, and ms.topic, see https://learn.microsoft.com/en-us/help/platform/metadata-taxonomies

title: Invoke-ChangeMeetingOrganizer
description: This cmdlet allows and administrator to change the organizer of an existing meeting.
author:      alexcotsalas # GitHub alias
ms.author:   alexcotsalas # Microsoft alias
ms.service: exchange-powershell
ms.topic: reference
ms.date:     02/18/2026
---

# Invoke-ChangeMeetingOrganizer

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Invoke-ChangeMeetingOrganizer cmdlet to change the organizer of an existing meeting or meeting series. Once the meeting is transferred, the new organizer will be able to maintain all properties of the event including meeting time and recurrence, attendees, and description. 

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

> [!NOTE]
> Invoke-ChangeMeetingOrganizer is rolling out and may not be available yet in all Exchange Online tenants. See the [Roadmap](https://www.microsoft.com/en-us/microsoft-365/roadmap?searchterms=554937#Roadmap) for roll out details.

## SYNTAX

```
Remove-CalendarEvents [-Identity] <MailboxIdParameter> -QueryWindowInDays <Int32>
 [-CancelOrganizedMeetings]
 [-Confirm]
 [-PreviewOnly]
 [-QueryStartDate <ExDateTime>]
 [-UseCustomRouting]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet changes the organizer of a meeting or meeting series, effective from the specified date. Meeting instances prior to the specified date will remain unmodified in the original organizer's calendar. Future instances are transferred to the new organizer's calendar. The previous organizer is not included as an attendee on the transferred portion of the meeting, but can be manually re-invited by the new organizer if desired.

Meeting attendees within the Exchange Online tenant will not need to re-RSVP and the existing instances on their calendar will be silently updated with the new meeting organizer information. Customization attendees made to the meeting Reminder, Category, Show As (Free/Tentative/Busy), and Private will be preserved.

Meeting attendees outside the Exchange Online tenant will receive a meeting update message truncating the meeting series from the old organizer followed by a meeting invitation message to the new series. Additional messages will be sent for any exceptions to the meeting series.

## EXAMPLES

### Example 1
```powershell
Remove-CalendarEvents -Identity chris@contoso.com -Subject "Weekly Status Update" -NewOrganizer adele@contoso.com
```

This example changes the organizer of the Weekly Status Update meeting from Chris to Adele, effective today. Adele will be able to manage the series going forward.

### Example 2
```powershell
Remove-CalendarEvents -Identity "Angela Gruber" -CancelOrganizedMeetings -QueryStartDate 11-30-2025 -QueryWindowInDays 120
```

This example cancels the meetings in Angela Gruber's calendar for the specified date range. Angela is taking a temporary leave of absence from the company, so cancelling these meetings removes them from the user and resource calendars during her absence.

### Example 3
```powershell
Remove-CalendarEvents -Identity "Jacob Berger" -CancelOrganizedMeetings -QueryStartDate 11-30-2025 -QueryWindowInDays 90 -PreviewOnly -Verbose
```

This example previews the meetings that would be cancelled in Jacob Berger's calendar for the specified date range. No changes are made to the mailbox.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2019, Exchange Server SE, Exchange Online

The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. For example:

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
Accept pipeline input: True
Accept wildcard characters: False
```

### -QueryWindowInDays

> Applicable: Exchange Server 2019, Exchange Server SE, Exchange Online

The QueryWindowInDays parameter specifies the number of days after the QueryStartDate parameter value to look for meetings that you want to cancel.

If an instance of a recurring meeting occurs during the specified time period, the entire series is cancelled (not just the instances during the time period).

**Note**: The maximum window that's allowed for meeting cancellation is 1825 days (5 years).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CancelOrganizedMeetings

> Applicable: Exchange Server 2019, Exchange Server SE, Exchange Online

The CancelOrganizedMeetings switch specifies whether to cancel meetings in the mailbox. You don't need to specify a value with this switch.

To cancel meetings in the mailbox, you need to use this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2019, Exchange Server SE, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -PreviewOnly

> Applicable: Exchange Server 2019, Exchange Server SE, Exchange Online

The PreviewOnly switch specifies whether to preview the results of the command without actually cancelling any meetings. You don't need to specify a value with this switch.

You use this switch with the Verbose switch.

 **Note**: The output of this cmdlet always says any existing meetings are queued for cancellation. But if you use this switch, the meetings aren't cancelled.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueryStartDate

> Applicable: Exchange Server 2019, Exchange Server SE, Exchange Online

The QueryStartDate parameter specifies the start date to look for meetings that you want to cancel.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

**Note**: If you don't use this parameter, today's date is used.

You use the QueryWindowInDays parameter to specify the end date.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseCustomRouting

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill UseCustomRouting Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2019, Exchange Server SE, Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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