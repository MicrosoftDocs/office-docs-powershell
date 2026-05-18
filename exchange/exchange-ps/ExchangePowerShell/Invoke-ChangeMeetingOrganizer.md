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

Use the Invoke-ChangeMeetingOrganizer cmdlet to change the organizer of an existing meeting or meeting series. After the meeting is transferred, the new organizer can maintain all properties of the event, including meeting time and recurrence, attendees, and description.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### ByEventId (Default)
```
Invoke-ChangeMeetingOrganizer [-EventId] <String> [-Identity] <MailboxIdParameter> [-NewOrganizer] <String>
 [-TransferSeriesStartDate <DateTime>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

### BySubject
```
Invoke-ChangeMeetingOrganizer [-Identity] <MailboxIdParameter> -Subject <String>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet changes the organizer of a meeting or meeting series, effective from the specified date. Meeting instances before the specified date remain unmodified in the original organizer's calendar. Future instances are transferred to the new organizer's calendar. The previous organizer isn't included as an attendee on the transferred portion of the meeting, but can be manually re-invited by the new organizer.

Meeting attendees in the Exchange Online tenant don't need to re-RSVP and the existing instances on their calendar are silently updated with the new meeting organizer information. Customizations attendees made to the meeting Reminder, Category, Show As (Free/Tentative/Busy), and Private are preserved.

Meeting attendees outside the Exchange Online tenant receive a meeting update message truncating the meeting series from the old organizer, followed by a meeting invitation message to the new series. Additional messages are sent for any exceptions to the meeting series.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Invoke-ChangeMeetingOrganizer -Identity chris@contoso.com -EventId AAMkAGRlMGI0 -NewOrganizer adele@contoso.com
```

This example changes the organizer of the specified meeting from chris@contoso.com to adele@contoso.com, effective today.

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

### -EventId

> Applicable: Exchange Online

The EventId parameter specifies the meeting to change the organizer for. You use this parameter with the Identity and NewOrganizer parameters.

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

The NewOrganizer parameter specifies the new meeting organizer. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Email address
- GUID
- User ID or user principal name (UPN)

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

### -Subject

> Applicable: Exchange Online

The Subject parameter identifies the meeting to change the organizer for by the meeting subject. If the value contains spaces, enclose the value in quotation marks (").

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

### -TransferSeriesStartDate

> Applicable: Exchange Online

The TransferSeriesStartDate parameter specifies the date from which the meeting organizer transfer takes effect. Meeting instances before this date remain with the original organizer.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018.

If you don't use this parameter, today's date is used.

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
