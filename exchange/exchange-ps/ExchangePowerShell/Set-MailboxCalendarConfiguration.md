---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-mailboxcalendarconfiguration
schema: 2.0.0
title: Set-MailboxCalendarConfiguration
---

# Set-MailboxCalendarConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MailboxCalendarConfiguration cmdlet to modify mailbox calendar settings for Outlook on the web. This affects how the user's calendar looks and how reminders work in Outlook on the web. This also affects settings that define how meeting invitations, responses, and notifications are sent to the user.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
Set-MailboxCalendarConfiguration [-Identity] <MailboxIdParameter>
 [-AgendaMailEnabled <Boolean>]
 [-Confirm]
 [-ConversationalSchedulingEnabled <Boolean>]
 [-DailyAgendaMailSchedule <AgendaMailSchedule>]
 [-DefaultMeetingDuration <Int32>]
 [-DefaultReminderTime <TimeSpan>]
 [-DomainController <Fqdn>]
 [-FirstWeekOfYear <FirstWeekRules>]
 [-RemindersEnabled <Boolean>]
 [-ReminderSoundEnabled <Boolean>]
 [-ShowWeekNumbers <Boolean>]
 [-SkipAgendaMailOnFreeDays <Boolean>]
 [-TimeIncrement <HourIncrement>]
 [-UseBrightCalendarColorThemeInOwa <Boolean>]
 [-WeekStartDay <DayOfWeek>]
 [-WhatIf]
 [-WorkDays <DaysOfWeek>]
 [-WorkingHoursEndTime <TimeSpan>]
 [-WorkingHoursStartTime <TimeSpan>]
 [-WorkingHoursTimeZone <ExTimeZoneValue>]
 [<CommonParameters>]
```

### Identity
```
Set-MailboxCalendarConfiguration [-Identity] <MailboxIdParameter>
 [-AgendaMailEnabled <Boolean>]
 [-AgendaMailIntroductionEnabled <Boolean>]
 [-AgendaPaneEnabled <Boolean>]
 [-AutoDeclineWhenBusy <Boolean>]
 [-CalendarFeedsPreferredLanguage <String>]
 [-CalendarFeedsPreferredRegion <String>]
 [-CalendarFeedsRootPageId <String>]
 [-Confirm]
 [-ConversationalSchedulingEnabled <Boolean>]
 [-CreateEventsFromEmailAsPrivate <Boolean>]
 [-DailyAgendaMailSchedule <AgendaMailSchedule>]
 [-DefaultMeetingDuration <Int32>]
 [-DefaultMinutesToReduceLongEventsBy <Int32>]
 [-DefaultMinutesToReduceShortEventsBy <Int32>]
 [-DefaultOnlineMeetingProvider <OnlineMeetingProviderType>]
 [-DefaultReminderTime <TimeSpan>]
 [-DeleteMeetingRequestOnRespond <Boolean>]
 [-DiningEventsFromEmailEnabled <Boolean>]
 [-EntertainmentEventsFromEmailEnabled <Boolean>]
 [-EventsFromEmailEnabled <Boolean>]
 [-FirstWeekOfYear <FirstWeekRules>]
 [-FlightEventsFromEmailEnabled <Boolean>]
 [-HotelEventsFromEmailEnabled <Boolean>]
 [-InvoiceEventsFromEmailEnabled <Boolean>]
 [-LocationDetailsInFreeBusy <LocationDetailsPermissionInFreeBusy>]
 [-OnlineMeetingsByDefaultEnabled <System.Boolean>]
 [-PackageDeliveryEventsFromEmailEnabled <Boolean>]
 [-PreserveDeclinedMeetings <Boolean>]
 [-RemindersEnabled <Boolean>]
 [-ReminderSoundEnabled <Boolean>]
 [-RentalCarEventsFromEmailEnabled <Boolean>]
 [-ServiceAppointmentEventsFromEmailEnabled <Boolean>]
 [-ShortenEventScopeDefault <ShortenEventScopeOption>]
 [-ShowWeekNumbers <Boolean>]
 [-SkipAgendaMailOnFreeDays <Boolean>]
 [-TimeIncrement <HourIncrement>]
 [-UseBrightCalendarColorThemeInOwa <Boolean>]
 [-WeatherEnabled <WeatherEnabledStatus>]
 [-WeatherLocationBookmark <Int32>]
 [-WeatherLocations <MultiValuedProperty>]
 [-WeatherUnit <WeatherTemperatureUnit>]
 [-WeekStartDay <DayOfWeek>]
 [-WhatIf]
 [-WorkDays <DaysOfWeek>]
 [-WorkingHoursEndTime <TimeSpan>]
 [-WorkingHoursStartTime <TimeSpan>]
 [-WorkingHoursTimeZone <ExTimeZoneValue>]
 [-WorkspaceUserEnabled <System.Boolean>]
 [<CommonParameters>]
```

### MailboxLocation
```
Set-MailboxCalendarConfiguration [-MailboxLocation <MailboxLocationIdParameter>]
 [-AgendaMailEnabled <Boolean>]
 [-AgendaMailIntroductionEnabled <Boolean>]
 [-AgendaPaneEnabled <Boolean>]
 [-AutoDeclineWhenBusy <Boolean>]
 [-CalendarFeedsPreferredLanguage <String>]
 [-CalendarFeedsPreferredRegion <String>]
 [-CalendarFeedsRootPageId <String>]
 [-Confirm]
 [-ConversationalSchedulingEnabled <Boolean>]
 [-CreateEventsFromEmailAsPrivate <Boolean>]
 [-DailyAgendaMailSchedule <AgendaMailSchedule>]
 [-DefaultMeetingDuration <Int32>]
 [-DefaultMinutesToReduceLongEventsBy <Int32>]
 [-DefaultMinutesToReduceShortEventsBy <Int32>]
 [-DefaultOnlineMeetingProvider <OnlineMeetingProviderType>]
 [-DefaultReminderTime <TimeSpan>]
 [-DeleteMeetingRequestOnRespond <Boolean>]
 [-DiningEventsFromEmailEnabled <Boolean>]
 [-EntertainmentEventsFromEmailEnabled <Boolean>]
 [-EventsFromEmailEnabled <Boolean>]
 [-FirstWeekOfYear <FirstWeekRules>]
 [-FlightEventsFromEmailEnabled <Boolean>]
 [-HotelEventsFromEmailEnabled <Boolean>]
 [-InvoiceEventsFromEmailEnabled <Boolean>]
 [-LocationDetailsInFreeBusy <LocationDetailsPermissionInFreeBusy>]
 [-OnlineMeetingsByDefaultEnabled <System.Boolean>]
 [-PackageDeliveryEventsFromEmailEnabled <Boolean>]
 [-PreserveDeclinedMeetings <Boolean>]
 [-RemindersEnabled <Boolean>]
 [-ReminderSoundEnabled <Boolean>]
 [-RentalCarEventsFromEmailEnabled <Boolean>]
 [-ServiceAppointmentEventsFromEmailEnabled <Boolean>]
 [-ShortenEventScopeDefault <ShortenEventScopeOption>]
 [-ShowWeekNumbers <Boolean>]
 [-SkipAgendaMailOnFreeDays <Boolean>]
 [-TimeIncrement <HourIncrement>]
 [-UseBrightCalendarColorThemeInOwa <Boolean>]
 [-WeatherEnabled <WeatherEnabledStatus>]
 [-WeatherLocationBookmark <Int32>]
 [-WeatherLocations <MultiValuedProperty>]
 [-WeatherUnit <WeatherTemperatureUnit>]
 [-WeekStartDay <DayOfWeek>]
 [-WhatIf]
 [-WorkDays <DaysOfWeek>]
 [-WorkingHoursEndTime <TimeSpan>]
 [-WorkingHoursStartTime <TimeSpan>]
 [-WorkingHoursTimeZone <ExTimeZoneValue>]
 [-WorkspaceUserEnabled <System.Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-MailboxCalendarConfiguration cmdlet primarily allows users to manage their own calendar settings in Outlook on the web Options. However, administrators who are members of the Organization Management or Recipient Management role groups can configure the calendar settings for users by using this cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MailboxCalendarConfiguration -Identity peter@contoso.com -RemindersEnabled $false
```

This example disables the calendar reminders for the calendar of the user peter@contoso.com.

### Example 2
```powershell
Set-MailboxCalendarConfiguration -Identity peter@contoso.com -WorkingHoursTimeZone "Pacific Standard Time"
```

This example sets the time zone of the work hours' start and end times to Pacific Standard Time for the calendar of the user peter@contoso.com.

### Example 3
```powershell
Set-MailboxCalendarConfiguration -Identity Tony -WorkingHoursStartTime 07:00:00
```

This example sets the working day's starting hour to 7 A.M. for the calendar of the user Tony.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
Parameter Sets: Default, Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AgendaMailEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -AgendaMailIntroductionEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill AgendaMailIntroductionEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgendaPaneEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDeclineWhenBusy

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill AutoDeclineWhenBusy Description }}

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarFeedsPreferredLanguage

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The CalendarFeedsPreferredLanguage parameter specifies the preferred language for calendar feeds. A valid value is an ISO 639-1 lowercase two-letter language code (for example, en for English).

```yaml
Type: String
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarFeedsPreferredRegion

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The CalendarFeedsPreferredRegion specifies the preferred region for calendar feeds. A valid value is an ISO 3166-1 two-letter country code (for example, AU for Australia).

A reference for two-letter country codes is available at [Country Codes List](https://www.nationsonline.org/oneworld/country_code_list.htm).

```yaml
Type: String
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarFeedsRootPageId

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The CalendarFeedsRootPageId parameter specifies the root page ID for calendar feeds.

```yaml
Type: String
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

### -ConversationalSchedulingEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The ConversationalSchedulingEnabled parameter specifies whether to enable or disable conversational scheduling. Valid values are:

- $true: Conversational scheduling is enabled. This is the default value.
- $false: Conversational scheduling is disabled.

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

### -CreateEventsFromEmailAsPrivate

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The CreateEventsFromEmailAsPrivate parameter specifies whether to create events from email messages as Normal or Private. Valid values are:

- $true: Events from email are created as Private. This is the default value.
- $false: Events from email are created as Normal (public).

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DailyAgendaMailSchedule

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: AgendaMailSchedule
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultMeetingDuration

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -DefaultMinutesToReduceLongEventsBy

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill DefaultMinutesToReduceLongEventsBy Description }}

```yaml
Type: Int32
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultMinutesToReduceShortEventsBy

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill DefaultMinutesToReduceShortEventsBy Description }}

```yaml
Type: Int32
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultOnlineMeetingProvider

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The DefaultOnlineMeetingProvider parameter specifies the default provider for online meetings. Valid values are:

- AlibabaDingTalk
- AmazonChimePrivate
- AmazonChimePublic
- AppleFacetime
- BlueJeans
- ClaroVideoconferencia
- FacebookWorkplace
- GoogleMeet
- GoToMeeting
- JioMeet
- RingCentral
- SkypeForBusiness
- SkypeForConsumer
- TeamsForBusiness (This is the default value.)
- Webex
- Zoom

```yaml
Type: OnlineMeetingProviderType
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultReminderTime

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DefaultReminderTime parameter specifies the length of time before a meeting or appointment when the reminder is first displayed.

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteMeetingRequestOnRespond

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill DeleteMeetingRequestOnRespond Description }}

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiningEventsFromEmailEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The DiningEventsFromEmailEnabled parameter specifies whether to create dining reservation events from email messages. Valid values are:

- $true: Create dining reservation events from email messages. This is the default value.
- $false: Don't create dining reservation events from email messages.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntertainmentEventsFromEmailEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The EntertainmentEventsFromEmailEnabled parameter specifies whether to create entertainment reservation events from email messages. Valid values are:

- $true: Create entertainment reservation events from email messages. This is the default value.
- $false: Don't create entertainment reservation events from email messages.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventsFromEmailEnabled

> Applicable: Exchange Online

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
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -FirstWeekOfYear

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The FirstWeekOfYear parameter specifies the first week of the year. Valid values are:

- FirstDay: Week numbers start on the first day of the year. This is the default value.
- FirstFourDayWeek: Week numbers start on the first week that has at least four days.
- FirstFullWeek: Week numbers start on the first week that has seven days.
- LegacyNotSet: You can't set this value. This is a null value that appears only when the mailbox has been moved from an earlier version of Exchange.

You configure the first day of the week by using the WeekStartDay parameter.

```yaml
Type: FirstWeekRules
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -FlightEventsFromEmailEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The FlightEventsFromEmailEnabled parameter specifies whether to create flight reservation events from email messages. Valid values are:

- $true: Create flight reservation events from email messages. This is the default value.
- $false: Don't create flight reservation events from email messages.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HotelEventsFromEmailEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The HotelEventsFromEmailEnabled parameter specifies whether to create hotel reservation events from email messages. Valid values are:

- $true: Create hotel reservation events from email messages. This is the default value.
- $false: Don't create hotel reservation events from email messages.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InvoiceEventsFromEmailEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The InvoiceEventsFromEmailEnabled parameter specifies whether to allow creating invoices from email messages. Valid values are:

- $true: Creating invoices from messages is enabled. This is the default value.
- $false: Creating invoices from messages is disabled.

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationDetailsInFreeBusy

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The LocationDetailsInFreeBusy parameter specifies the level of work location information that's returned as part of a user's availability. Work location information is visible across several Microsoft 365 application experiences, and the level of location information that's shown to other users in the organization is controlled by this parameter. Valid values are:

- None: No location information is returned.
- Building: Only Office or Remote are returned as work location information, if provided.
- Desk: All work location information is returned, including Building and Desk, if provided. This is the default value.

```yaml
Type: LocationDetailsPermissionInFreeBusy
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: Desk
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxLocation

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill MailboxLocation Description }}

```yaml
Type: MailboxLocationIdParameter
Parameter Sets: MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnlineMeetingsByDefaultEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The OnlineMeetingsByDefaultEnabled parameter specifies whether to set all meetings as Teams or Skype for Business by default during meeting creation. Currently, this parameter sets the default value, so if the user has already directly interacted with this setting from an Outlook client, this default value will be ignored. Eventually, this parameter will override the Outlook-configured setting.

Valid values are:

- $true: All meetings are online by default.
- $false: All meetings are not online by default.
- $null: The value of the OnlineMeetingsByDefaultEnabled parameter on the Set-OrganizationConfig cmdlet (the organizational setting) is used.

Setting this parameter enables the display of the **Add online meeting to all meetings** option in **Calendar options** in Outlook for Windows. This setting allows users to enable or disable the option when Teams is used for online meetings. It does not override the organization setting that's configured by the OnlineMeetingsByDefaultEnabled parameter on the Set-OrganizationConfig cmdlet.

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PackageDeliveryEventsFromEmailEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The PackageDeliveryEventsFromEmailEnabled parameter specifies whether to create package delivery events from email messages. Valid values are:

- $true: Create package delivery events from email messages.
- $false: Don't create package delivery events from email messages. This is the default value.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreserveDeclinedMeetings

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill PreserveDeclinedMeetings Description }}

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemindersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RemindersEnabled parameter enables or disables reminders for calendar items. Valid values are:

- $true: Reminders are enabled. This is the default value.
- $false: Reminders are disabled.

When the reminder is first displayed is controlled by the DefaultReminderTime parameter.

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

### -ReminderSoundEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ReminderSoundEnabled parameter specifies whether a sound is played along with the reminder. Valid values are:

- $true: A sound is played with the reminder. This is the default value.
- $false: No sound is played with the reminder.

This parameter is ignored when the RemindersEnabled parameter is set to $false.

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

### -RentalCarEventsFromEmailEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The RentalCarEventsFromEmailEnabled parameter specifies whether to create rental car reservation events from email messages. Valid values are:

- $true: Create rental car reservation events from email messages. This is the default value.
- $false: Don't create rental car reservation events from email messages.

This parameter is meaningful only when the EventsFromEmailEnabled parameter is set to $true (which is the default value).

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceAppointmentEventsFromEmailEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill ServiceAppointmentEventsFromEmailEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShortenEventScopeDefault

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill ShortenEventScopeDefault Description }}

```yaml
Type: ShortenEventScopeOption
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowWeekNumbers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ShowWeekNumbers parameter specifies whether the week number is displayed in the Outlook on the web calendar. Valid values are:

- $true: The week number is displayed.
- $false: The week number isn't displayed. This is the default value.

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

### -SkipAgendaMailOnFreeDays

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -TimeIncrement

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The TimeIncrement parameter specifies the scale that the Outlook on the web calendar uses to show time. Valid values are:

- FifteenMinutes
- ThirtyMinutes (This is the default value)

```yaml
Type: HourIncrement
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseBrightCalendarColorThemeInOwa

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The UseBrightCalendarColorThemeInOwa parameter specifies whether to use light colors or bright colors for the calendar in Outlook on the web. Valid values are:

- $true: Use bright colors in the calendar.
- $false: Use light colors in the calendar. This is the default value.

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

### -WeatherEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The WeatherEnabled specifies whether weather is displayed in the calendar in Outlook on the web. Valid values are:

- FirstRun (This is the default value)
- Disabled: Hide weather on the calendar.
- Enabled: Show weather on the calendar.

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeatherLocationBookmark

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The WeatherLocationBookmark parameter specifies the default weather information that's displayed in the calendar in Outlook on the web. This parameter is based on an index value of the configured weather locations. The first weather location has the index value 0, the second weather location has the index value 1, and so on.

A valid value for this parameter depends on the number of weather locations that are configured for the mailbox. For example, if there are 3 weather locations configured, you can specify the value 0, 1, or 2 for this parameter.

```yaml
Type: Int32
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeatherLocations

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The WeatherLocations parameter specifies one or more locations to display the weather for in the calendar in Outlook on the web.

This parameter uses the syntax: `LocationId:<LocationID>;Name:<Name>;Latitude:<Latitude>;Longitude:<Longitude>`. For example, `LocationId:105808079;Name:Redmond, WA;Latitude:47.679;Longitude:-122.132`.

To enter multiple values and overwrite any existing entries, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

For this parameter, each Value is `LocationId:<LocationID>;Name:<Name>;Latitude:<Latitude>;Longitude:<Longitude>`.

You can configure a maximum of 5 weather locations.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeatherUnit

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The WeatherUnit parameter specifies the temperature scale that's used to display the weather in the calendar in Outlook on the web. Valid values are:

- Default (This is the default value)
- Celsius
- Fahrenheit

```yaml
Type: WeatherTemperatureUnit
Parameter Sets: Identity, MailboxLocation
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeekStartDay

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WeekStartDay parameter specifies the first day of the week. Valid values are:

- Sunday (This is the default value)
- Monday
- Tuesday
- Wednesday
- Thursday
- Friday
- Saturday

```yaml
Type: DayOfWeek
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

### -WorkDays

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Type: DaysOfWeek
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkingHoursEndTime

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WorkingHoursEndTime parameter specifies the time that the work day ends.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 17:00:00 (5:00 P.M.).

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

### -WorkingHoursStartTime

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WorkingHoursStartTime parameter specifies the time that the work day starts.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 08:00:00(8:00 A.M.).

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

### -WorkingHoursTimeZone

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WorkingHoursTimeZone parameter specifies the time zone that's used by the WorkingHoursStartTime and WorkingHoursEndTime parameters.

A valid value for this parameter is a supported time zone key name (for example, "Pacific Standard Time").

To see the available values, run the following command: `$TimeZone = Get-ChildItem "HKLM:\Software\Microsoft\Windows NT\CurrentVersion\Time zones" | foreach {Get-ItemProperty $_.PSPath}; $TimeZone | sort Display | Format-Table -Auto PSChildname,Display`.

If the value contains spaces, enclose the value in quotation marks ("). The default value is the time zone setting of the Exchange server.

```yaml
Type: ExTimeZoneValue
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkspaceUserEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill WorkspaceUserEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: Identity, MailboxLocation
Aliases:

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
