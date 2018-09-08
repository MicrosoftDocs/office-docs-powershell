---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-MailboxCalendarConfiguration
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Set-MailboxCalendarConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MailboxCalendarConfiguration cmdlet to modify mailbox calendar settings for Outlook on the web. This affects how the user's calendar looks and how reminders work in Outlook on the web. This also affects settings that define how meeting invitations, responses, and notifications are sent to the user.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-MailboxCalendarConfiguration [-Identity] <MailboxIdParameter> [-Confirm] [-DefaultReminderTime <TimeSpan>]
 [-DomainController <Fqdn>] [-RemindersEnabled <$true | $false>] [-ReminderSoundEnabled <$true | $false>]
 [-ShowWeekNumbers <$true | $false>] [-TimeIncrement <FifteenMinutes | ThirtyMinutes>]
 [-WeekStartDay <Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday>] [-WhatIf]
 [-WorkDays <None | Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Weekdays | WeekendDays | AllDays>]
 [-WorkingHoursEndTime <TimeSpan>] [-WorkingHoursStartTime <TimeSpan>]
 [-WorkingHoursTimeZone <ExTimeZoneValue>]
 [-FirstWeekOfYear <LegacyNotSet | FirstDay | FirstFourDayWeek | FirstFullWeek>]
 [-WeatherEnabled <$true | $false>] [-WeatherLocations <MultiValuedProperty>]
 [-WeatherUnit <Default | Celsius | Fahrenheit>] [-AgendaMailEnabled <$true | $false>]
 [-AgendaPaneEnabled <$true | $false>] [-CalendarFeedsPreferredLanguage <String>]
 [-CalendarFeedsPreferredRegion <String>] [-CalendarFeedsRootPageId <String>]
 [-ConversationalSchedulingEnabled <$true | $false>] [-CreateEventsFromEmailAsPrivate <$true | $false>]
 [-DailyAgendaMailSchedule <Default | AM | PM>] [-DefaultMeetingDuration <Int32>]
 [-DiningEventsFromEmailEnabled <$true | $false>] [-EntertainmentEventsFromEmailEnabled <$true | $false>]
 [-EventsFromEmailEnabled <$true | $false>] [-FlightEventsFromEmailEnabled <$true | $false>]
 [-HotelEventsFromEmailEnabled <$true | $false>] [-InvoiceEventsFromEmailEnabled <$true | $false>]
 [-LocalEventsEnabled <FirstRun | Disabled | Enabled>] [-LocalEventsLocation <LocalEventsLocation>]
 [-PackageDeliveryEventsFromEmailEnabled <$true | $false>] [-RentalCarEventsFromEmailEnabled <$true | $false>]
 [-SkipAgendaMailOnFreeDays <$true | $false>] [-UseBrightCalendarColorThemeInOwa <$true | $false>]
 [-WeatherLocationBookmark <Int32>] [<CommonParameters>]
```

## DESCRIPTION
The Set-MailboxCalendarConfiguration cmdlet primarily allows users to manage their own calendar settings in Outlook on the web Options. However, administrators who have the Organization Management or Recipient Management management roles may configure the calendar settings for users by using this cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-MailboxCalendarConfiguration -Identity peter@contoso.com -RemindersEnabled $false
```

This example disables the calendar reminders for the calendar of the user peter@contoso.com.

### -------------------------- Example 2 --------------------------
```
Set-MailboxCalendarConfiguration -Identity peter@contoso.com -WorkingHoursTimeZone "Pacific Standard Time"
```

This example sets the time zone of the work hours' start and end times to Pacific Standard Time for the calendar of the user peter@contoso.com.

### -------------------------- Example 3 --------------------------
```
Set-MailboxCalendarConfiguration -Identity Tony -WorkingHoursStartTime 07:00:00
```

This example sets the working day's starting hour to 7 A.M. for the calendar of the user Tony.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Domain\Account

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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -DefaultReminderTime
The DefaultReminderTime parameter specifies the length of time before a meeting or appointment whenthe reminder is first displayed.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

Note that the value can't contain seconds. Valid values are:

- 00:00:00

- 00:05:00 (5 minutes)

- 00:10:00 (10 minutes)

- 00:15:00 (15 minutes) This is the default value.

- 00:30:00 (30 minutes)

- 01:00:00 (1 hour)

- 02:00:00 (2 hours)

- 03:00:00 (3 hours)

- 04:00:00 (4 hours)

- 08:00:00 (8 hours)

- 12:00:00 (12 hours)

- 1.00:00:00 (1 day)

- 2.00:00:00 (2 days)

- 3.00:00:00 (3 days)

- 7.00:00:00 (7 days)

- 14.00:00:00 (14 days)

This parameter is ignored when the RemindersEnabled parameter is set to $false.

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

### -FirstWeekOfYear
The FirstWeekOfYear parameter specifies the first week of the year. Valid values are:

- FirstDay: Week numbers start on the first day of the year. This is the default value.

- FirstFourDayWeek: Week numbers start on the first week that has at least four days.

- FirstFullWeek: Week numbers start on the first week that has seven days.

- LegacyNotSet: You can't set this value. This is a null value that appears only when the mailbox has been moved from an earlier version of Exchange.

You configure the first day of the week by using the WeekStartDay parameter.

```yaml
Type:
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -RemindersEnabled
The RemindersEnabled parameter enables or disables reminders for calendar items. Valid values are:

- $true: Reminders are enabled. This is the default value.

- $false: Reminders are disabled.

When the reminder is first displayed is controlled by the DefaultReminderTime parameter.

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

### -ReminderSoundEnabled
The ReminderSoundEnabled parameter specifies whether a sound is played along with the reminder. Valid values are:

- $true: A sound is played with the reminder. This is the default value.

- $false: No sound is played with the reminder.

This parameter is ignored when the RemindersEnabled parameter is set to $false.

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

### -ShowWeekNumbers
The ShowWeekNumbers parameter specifies whether the week number is displayed in the Outlook on the web calendar. Valid values are:

- $true: The week number is displayed.

- $false: The week number isn't displayed. This is the default value.

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

### -TimeIncrement
The TimeIncrement parameter specifies the scale that the Outlook on the web calendar uses to show time. Valid values are:

- FifteenMinutes

- ThirtyMinutes (This is the default value)

```yaml
Type: FifteenMinutes | ThirtyMinutes
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeekStartDay
The WeekStartDay parameter specifies the first day of the week. Valid values are:

- Sunday (This is the default value)

- Monday

- Tuesday

- Wednesday

- Thursday

- Friday

- Saturday

```yaml
Type: Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday
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

### -WorkDays
The WorkDays parameter specifies the work days in the calendar. Valid values are:

- None

- AllDays

- Weekdays (This is the default value)

- WeekEndDays

- Sunday

- Monday

- Tuesday

- Wednesday

- Thursday

- Friday

- Saturday

You can specify multiple values separated by commas, but redundant values are ignored. For example, entering Weekdays,Monday results in the value Weekdays.

```yaml
Type: None | Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Weekdays | WeekendDays | AllDays
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkingHoursEndTime
The WorkingHoursEndTime parameter specifies the time that the work day ends.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 17:00:00 (5:00 P.M.).

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

### -WorkingHoursStartTime
The WorkingHoursStartTime parameter specifies the time that the work day starts.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 08:00:00(8:00 A.M.).

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

### -WorkingHoursTimeZone
The WorkingHoursTimeZone parameter specifies the time zone that's used by the WorkingHoursStartTime and WorkingHoursEndTime parameters.

A valid value for this parameter is a supported time zone key name (for example, "Pacific Standard Time").

To see the available values, run the following command: `$TimeZone = Get-ChildItem "HKLM:\Software\Microsoft\Windows NT\CurrentVersion\Time zones" | foreach {Get-ItemProperty $_.PSPath}; $TimeZone | sort Display | Format-Table -Auto PSChildname,Display`.

If the value contains spaces, enclose the value in quotation marks ("). The default value is the time zone setting of the Exchange server.

```yaml
Type: ExTimeZoneValue
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeatherEnabled
This parameter is available only in the cloud-based service.

The WeatherEnabled specifies whether weather is displayed in the calendar in Outlook on the web. Valid values are:

- FirstRun (This is the default value)

- Disabled: Hide weather on the calendar.

- Enabled: Show weather on the calendar.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeatherLocations
This parameter is available only in the cloud-based service.

The WeatherLocations parameter specifies one or more locations to display the weather for in the calendar in Outlook on the web.

This parameter uses the syntax: `LocationId:<LocationID>;Name:<Name>;Latitude:<Latitude>;Longitude:<Longitude>`. For example, `LocationId:105808079;Name:Redmond, WA;Latitude:47.679;Longitude:-122.132`.

To enter multiple values and overwrite any existing entries, use the following syntax: `<value1>,<value2>,...<valueN>`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: `"<value1>","<value2>",..."<valueN">`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.

For this parameter, `"<value1>"` is `"LocationId:<LocationID1>;Name:\Name1>;Latitude:\Latitude1>;Longitude:<Longitude1>"`, and `"<value2>"` is `"LocationId:<LocationID2>;Name:<Name2>;Latitude:<Latitude2>;Longitude:<Longitude2>"`.

You can configure a maximum of 5 weather locations.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeatherUnit
This parameter is available only in the cloud-based service.

The WeatherUnit parameter specifies the temperature scale that's used to display the weather in the calendar in Outlook on the web. Valid values are:

- Default (This is the default value)

- Celsius

- Fahrenheit

```yaml
Type: Default | Celsius | Fahrenheit
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgendaMailEnabled
This parameter is available only in the cloud-based service.

The AgendaMailEnabled parameter specifies whether to enable or disable the daily agenda email message. Valid values are:

- $true: Agenda mail is enabled.

- $false: Agenda mail is disabled. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgendaPaneEnabled
This parameter is available only in the cloud-based service.

The AgendaPaneEnabled parameter specifies whether to enable the agenda pane in Outlook on the web. Valid values are:

- $true: The Agenda pane enabled.

- $false: The Agenda pane is disabled. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarFeedsPreferredLanguage
This parameter is available only in the cloud-based service.

The CalendarFeedsPreferredLanguage parameter specifies the preferred language for calendar feeds. A valid value is an ISO 639-1 lowercase two-letter language code (for example, en for English).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarFeedsPreferredRegion
This parameter is available only in the cloud-based service.

The CalendarFeedsPreferredRegion specifies the preferred region for calendar feeds. A valid value is an ISO 3166-1 uppercase two-letter country code (for example, US for the United States).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarFeedsRootPageId
This parameter is available only in the cloud-based service.

The CalendarFeedsRootPageId parameter specifies the root page ID for calendar feeds.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConversationalSchedulingEnabled
The ConversationalSchedulingEnabled parameter specifies whether to enable or disable conversational scheduling. Valid values are:

- $true: Conversational scheduling is enabled. This is the default value.

- $false: Conversational scheduling is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateEventsFromEmailAsPrivate
This parameter is available only in the cloud-based service.

The CreateEventsFromEmailAsPrivate parameter specifies whether to create events from email messages as Normal or Private. Valid values are:

- $true: Events from email are created as Private. This is the default value.

- $false: Events from email are created as Normal (public).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DailyAgendaMailSchedule
The DailyAgendaMailSchedule parameter specifies whether to receive a daily or nightly edition of the daily agenda message. Valid values are:

- Default: The agenda email message is delivered at 03:00 (3:00 AM). This is the default value.

- AM

- PM

```yaml
Type: Default | AM | PM
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultMeetingDuration
The DefaultMeetingDuration parameter specifies the default duration in minutes for new meetings. The default value is 30 minutes.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiningEventsFromEmailEnabled
This parameter is available only in the cloud-based service.

The DiningEventsFromEmailEnabled parameter specifies whether to create dining reservation events from email messages. Valid values are:

- $true: Create dining reservation events from email messages. This is the default value.

- $false: Don't create dining reservation events from email messages.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntertainmentEventsFromEmailEnabled
This parameter is available only in the cloud-based service.

The EntertainmentEventsFromEmailEnabled parameter specifies whether to create entertainment reservation events from email messages. Valid values are:

- $true: Create entertainment reservation events from email messages. This is the default value.

- $false: Don't create entertainment reservation events from email messages.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventsFromEmailEnabled
This parameter is available only in the cloud-based service.

The EventsFromEmailEnabled parameter specifies whether to enable events to be created from email messages. Valid values are:

- $true: Creating events from email messages is enabled. This is the default value.

- $false: Creating events from email messages is disabled.

When this setting is enabled, you can enable or disable creating specific types of events from email messages by using the following parameters:

- DiningEventsFromEmailEnabled

- EntertainmentEventsFromEmailEnabled

- FlightEventsFromEmailEnabled

- HotelEventsFromEmailEnabled

- PackageDeliveryEventsFromEmailEnabled

- RentalCarEventsFromEmailEnabled

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -FlightEventsFromEmailEnabled
This parameter is available only in the cloud-based service.

The FlightEventsFromEmailEnabled parameter specifies whether to create flight reservation events from email messages. Valid values are:

- $true: Create flight reservation events from email messages. This is the default value.

- $false: Don't create flight reservation events from email messages.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HotelEventsFromEmailEnabled
This parameter is available only in the cloud-based service.

The HotelEventsFromEmailEnabled parameter specifies whether to create hotel reservation events from email messages. Valid values are:

- $true: Create hotel reservation events from email messages. This is the default value.

- $false: Don't create hotel reservation events from email messages.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InvoiceEventsFromEmailEnabled
This parameter is available only in the cloud-based service.

The InvoiceEventsFromEmailEnabled parameter specifies whether to allow creating invoices from email messages. Valid values are:

- $true: Creating invoices from messages is enabled. This is the default value.

- $false: Creating invoices from messages is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalEventsEnabled
PARAMVALUE: FirstRun | Disabled | Enabled

```yaml
Type: FirstRun | Disabled | Enabled
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalEventsLocation
PARAMVALUE: LocalEventsLocation

```yaml
Type: LocalEventsLocation
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PackageDeliveryEventsFromEmailEnabled
This parameter is available only in the cloud-based service.

The PackageDeliveryEventsFromEmailEnabled parameter specifies whether to create package delivery events from email messages. Valid values are:

- $true: Create package delivery events from email messages.

- $false: Don't create package delivery events from email messages. This is the default value.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RentalCarEventsFromEmailEnabled
This parameter is available only in the cloud-based service.

The RentalCarEventsFromEmailEnabled parameter specifies whether to create rental car reservation events from email messages. Valid values are:

- $true: Create rental car reservation events from email messages. This is the default value.

- $false: Don't create rental car reservation events from email messages.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipAgendaMailOnFreeDays
The SkipAgendaMailOnFreeDays parameter specifies whether to skip sending the daily agenda email message on days with no events or tasks. Valid values are:

- $true: Don't send the daily agenda email message on free days. This is the default value.

- $false: Send the daily agenda email message every day.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseBrightCalendarColorThemeInOwa
The UseBrightCalendarColorThemeInOwa parameter specifies whether to use light colors or bright colors for the calendar in Outlook on the web. Valid values are:

- $true: Use bright colors in the calendar.

- $false: Use light colors in the calendar. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeatherLocationBookmark
This parameter is available only in the cloud-based service.

The WeatherLocationBookmark parameter specifies the default weather information that's displayed in the calendar in Outlook on the web. This parameter is based on an index value of the configured weather locations. The first weather location has the index value 0, the second weather location has the index value 1, and so on.

A valid value for this parameter depends on the number of weather locations that are configured for the mailbox. For example, if there are 3 weather locations configured, you can specify the value 0, 1, or 2 for this parameter.

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

[Online Version](https://technet.microsoft.com/library/092aa4db-3f0f-4b17-b7b1-1987a8268760.aspx)
