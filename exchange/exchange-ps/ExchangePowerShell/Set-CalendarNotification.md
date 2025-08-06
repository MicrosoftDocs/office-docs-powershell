---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-calendarnotification
schema: 2.0.0
title: Set-CalendarNotification
---

# Set-CalendarNotification

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

The Set-CalendarNotification cmdlet allows users to set text message notification options for calendar events in their own calendar. By default, the MyTextMessaging end-user role gives access to this cmdlet, so admins can't configure text messaging notification for calendar events in user calendars.

**Note**: This cmdlet is deprecated in Exchange Online PowerShell. The text message notification service is discontinued in Microsoft 365.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-CalendarNotification [-Identity] <MailboxIdParameter>
 [-CalendarUpdateNotification <Boolean>]
 [-CalendarUpdateSendDuringWorkHour <Boolean>]
 [-Confirm]
 [-DailyAgendaNotification <Boolean>]
 [-DailyAgendaNotificationSendTime <TimeSpan>]
 [-DomainController <Fqdn>]
 [-IgnoreDefaultScope]
 [-MeetingReminderNotification <Boolean>]
 [-MeetingReminderSendDuringWorkHour <Boolean>]
 [-NextDays <Int32>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Users can receive text message notifications of changes to calendar events and daily agendas.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-CalendarNotification -Identity "TonySmith" -CalendarUpdateNotification $true -MeetingReminderNotification $true -MeetingReminderSendDuringWorkHour $true -DailyAgendaNotification $true
```

This example configures the calendar in Tony's mailbox to send the following text message notifications to his mobile device:

- Calendar updates.
- Meeting reminders during business hours.
- Daily agendas.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -CalendarUpdateNotification

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CalendarUpdateNotification parameter specifies whether calendar update text message notifications are sent to the user's mobile device. Valid values are:

- $true: Calendar update text message notifications are enabled.
- $false: Calendar update text message notifications aren't enabled. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarUpdateSendDuringWorkHour

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CalendarUpdateSendDuringWorkHour parameter specifies whether calendar update text notifications are sent to the user's mobile device during working hours only. Valid values are:

- $true: Calendar update text message notifications are sent during working hours only.
- $false: Calendar update text message notifications are sent anytime. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -DailyAgendaNotification

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DailyAgendaNotification parameter specifies whether daily agenda text message notifications are sent to the user's mobile device. Valid values are:

- $true: Daily agenda text message notifications are sent.
- $false: Daily agenda text message notifications aren't sent. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DailyAgendaNotificationSendTime

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DailyAgendaNotificationSendTime parameter specifies the time to send daily agenda text message notifications to the user's mobile device.

To specify a value, enter it as a time span: hh:mm:ss where hh = hours, mm = minutes and ss = seconds.

The default value is 08:00:00.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -MeetingReminderNotification

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MeetingReminderNotification parameter specifies whether meeting reminder text message notifications are sent to the user's mobile device. Valid values are:

- $true: Meeting reminder text message notifications are sent.
- $false: Meeting reminder text message notifications aren't sent. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MeetingReminderSendDuringWorkHour

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MeetingReminderSendDuringWorkHour parameter specifies whether meeting reminder text message notifications are sent to the user's mobile device during working hours only. Valid values are:

- $true: Meeting update notifications are sent during working hours only.
- $false: Meeting update notifications are sent anytime. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NextDays

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The NextDays parameter specifies how many days should be sent in the daily agenda text message notification to the user's mobile device. A valid value is an integer between 1 and 7. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
