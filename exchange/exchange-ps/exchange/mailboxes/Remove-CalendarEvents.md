---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Online
title: Remove-CalendarEvents
schema: 2.0.0
---

# Remove-CalendarEvents

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-CalendarEvents cmdlet to cancel future meetings in user or resource mailboxes in Office 365. Cancelling future meetings removes them from attendee and resource calendars (for example, you're going to remove the mailbox, or the user is going on a leave of absence).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-CalendarEvents [-Identity] <MailboxIdParameter> [-CancelOrganizedMeetings] [-Confirm] [-PreviewOnly]
 [-QueryStartDate <ExDateTime>] [-QueryWindowInDays <Int32>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet cancels meetings in the specified mailbox where the mailbox is the meeting organizer, and the meeting has one or more attendees or resources. It doesn't cancel appointments or meetings without attendees or resources.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Remove-CalendarEvents -Identity chris@contoso.com -CancelOrganizedMeetings
```

This example cancels every meeting in the mailbox chris@contoso.com that occurs on or after today's date. After you cancel the meetings, you can remove the mailbox.

### Example 2
```
Remove-CalendarEvents -Identity "Angela Gruber" -CancelOrganizedMeetings -QueryStartDate 11-1-2018 -QueryWindowInDays 120
```

This example cancels the meetings in Angela Gruber's calendar for the specified date range. Angela is taking a temporary leave of absence from the company, so cancelling these meetings removes them from the user and resource calendars during her absence.

### Example 3
```
Remove-CalendarEvents -Identity "Jacob Berger" -CancelOrganizedMeetings -QueryStartDate 9-1-2018 -QueryWindowInDays 90 -PreviewOnly -Verbose
```

This example previews the meetings that would be cancelled in Jacob Berger's calender for the specified date range. No changes are made to the mailbox.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CancelOrganizedMeetings
The CancelOrganizedMeetings switch specifies whether to cancel meetings in the mailbox. You don't need to specify a value with this switch.

To cancel meetings in the mailbox, you need to use this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreviewOnly
The PreviewOnly switch specifies whether to preview the results of the command without actually cancelling any meetings. You don't need to specify a value with this switch.

You use this switch with the Verbose switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueryStartDate
The QueryStartDate parameter specifies the start date to look for meetings that you want to cancel.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

If you don't use this parameter, today's date is used.

You use the QueryWindowInDays parameter to specify the end date.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueryWindowInDays
The QueryWindowInDays parameter specifies the number of days after the QueryStartDate parameter value to look for meetings that you want to cancel.

If you don't use this parameter, all future meetings on or after the specified start date will be cancelled.

If an instance of a recurring meeting occurs during the specified time period, the entire series is cancelled (not just the instances during the time period).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/bf188d1c-d6e5-4c82-9508-35f9b788ff82.aspx)

