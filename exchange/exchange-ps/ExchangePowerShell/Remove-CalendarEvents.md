---
applicable: Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-calendarevents
schema: 2.0.0
title: Remove-CalendarEvents
---

# Remove-CalendarEvents

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-CalendarEvents cmdlet to cancel future meetings in user or resource mailboxes. Cancelling future meetings removes them from attendee and resource calendars (for example, you're going to remove the mailbox, or the user is going on a leave of absence).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

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
This cmdlet cancels meetings in the specified mailbox where the mailbox is the meeting organizer, and the meeting has one or more attendees or resources. It doesn't cancel appointments or meetings without attendees or resources. Because meeting cancellations must be sent out, the mailbox must still be enabled to send mail.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-CalendarEvents -Identity chris@contoso.com -CancelOrganizedMeetings -QueryWindowInDays 120
```

This example cancels every meeting in the mailbox chris@contoso.com that occurs on or 120 days after today's date. After you cancel the meetings, you can remove the mailbox.

### Example 2
```powershell
Remove-CalendarEvents -Identity "Angela Gruber" -CancelOrganizedMeetings -QueryStartDate 11-1-2018 -QueryWindowInDays 120
```

This example cancels the meetings in Angela Gruber's calendar for the specified date range. Angela is taking a temporary leave of absence from the company, so cancelling these meetings removes them from the user and resource calendars during her absence.

### Example 3
```powershell
Remove-CalendarEvents -Identity "Jacob Berger" -CancelOrganizedMeetings -QueryStartDate 9-1-2018 -QueryWindowInDays 90 -PreviewOnly -Verbose
```

This example previews the meetings that would be cancelled in Jacob Berger's calendar for the specified date range. No changes are made to the mailbox.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2019, Exchange Online

The PreviewOnly switch specifies whether to preview the results of the command without actually cancelling any meetings. You don't need to specify a value with this switch.

You use this switch with the Verbose switch.

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

> Applicable: Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2019, Exchange Online

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
