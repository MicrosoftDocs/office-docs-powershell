---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-CalendarNotification
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Set-CalendarNotification

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-CalendarNotification cmdlet to set text message notifications for calendar events for a user.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-CalendarNotification [-Identity] <MailboxIdParameter> [-CalendarUpdateNotification <$true | $false>]
 [-CalendarUpdateSendDuringWorkHour <$true | $false>] [-Confirm] [-DailyAgendaNotification <$true | $false>]
 [-DailyAgendaNotificationSendTime <TimeSpan>] [-DomainController <Fqdn>] [-IgnoreDefaultScope]
 [-MeetingReminderNotification <$true | $false>] [-MeetingReminderSendDuringWorkHour <$true | $false>]
 [-NextDays <Int32>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Users can receive text message notifications of changes to calendar events and daily agendas. Use the Set-CalendarNotification cmdlet to configure these notifications for a user.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CalendarNotification -Identity "tony@contoso.com" -CalendarUpdateNotification $true
```

This example enables calendar updates to be sent in text messages to the user Tony Smith.

### -------------------------- Example 2 --------------------------
```
Set-CalendarNotification -Identity "TonySmith" -CalendarUpdateNotification $true -MeetingReminderNotification $true -MeetingReminderSendDuringWorkHour $true
```

This example enables calendar updates and meeting reminders to be sent in text messages to the user Tony Smith.

### -------------------------- Example 3 --------------------------
```
Set-CalendarNotification -Identity contoso\tonysmith -DailyAgendaNotification $true
```

This example enables a daily agenda to be sent in text messages to the user Tony Smith.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox ID for the user.

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

### -CalendarUpdateNotification
The CalendarUpdateNotification parameter specifies whether calendar notifications are enabled for the user.

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

### -CalendarUpdateSendDuringWorkHour
The CalendarUpdateSendDuringWorkHour parameter specifies whether calendar notifications are sent during working hours.

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

### -DailyAgendaNotification
The DailyAgendaNotification parameter specifies whether a daily agenda should be sent to the user's mobile phone.

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

### -DailyAgendaNotificationSendTime
The DailyAgendaNotificationSendTime parameter specifies the time to send the daily agenda.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

For example, a time span of 2 days and 8 hours is shown: 02.08:00:00.

```yaml
Type: TimeSpan
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

### -IgnoreDefaultScope
The IgnoreDefaultScope parameter isn't implemented yet.

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

### -MeetingReminderNotification
The MeetingReminderNotification parameter specifies whether meeting reminders are sent to the user's mobile phone.

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

### -MeetingReminderSendDuringWorkHour
The MeetingReminderSendDuringWorkHour parameter specifies whether meeting reminders are only sent during working hours.

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

### -NextDays
The NextDays parameter specifies how many days should be sent in the daily agenda.

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

[Online Version](https://technet.microsoft.com/library/fc595e4d-abaa-450e-8803-6982b8a039ac.aspx)
