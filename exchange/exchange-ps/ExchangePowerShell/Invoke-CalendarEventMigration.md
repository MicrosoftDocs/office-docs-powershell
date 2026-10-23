---
applicable: Exchange Online
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/invoke-calendareventmigration
schema: 2.0.0
title: Invoke-CalendarEventMigration
---

# Invoke-CalendarEventMigration

## SYNOPSIS

This cmdlet is only available in the cloud-based service.

Use the Invoke-CalendarEventMigration cmdlet to change the time zone of a meeting or appointment.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### TimeZoneMigration (Default)

```
Invoke-CalendarEventMigration [-Identity] <MailboxIdParameter> -FromWindowsTimeZoneId <string>
 -ToWindowsTimeZoneId <string> [-QueryStartDate <DateTime>] -QueryWindowInDays <int> [-Force] [-PreviewOnly] [-WhatIf] [-Confirm]
```

## DESCRIPTION

When a new time zone is released, affected Outlook users need to update their scheduled events to use the new time zone. The Invoke-CalendarEventMigration cmdlet allows IT administrators to automate the calendar event migration by creating a script that loops through affected users. Invoke-CalendarEventMigration operates on one mailbox at a time and migrates meetings from one time zone to another while keeping the same local time. For example, a meeting at 9 AM Pacific Standard Time is migrated to 9 AM British Columbia Standard Time.

**The initial release supports single instance meetings and appointments only.** Support for recurring meetings and appointments will be delivered in the next version. You can safely rerun the cmdlet when support for recurring events is added.

Only meetings where the mailbox is the organizer are migrated. Meetings where the mailbox is an attendee must be migrated by the organizer, either manually or by running the cmdlet on the organizer's mailbox. Migrated meetings generate a meeting update message for attendees, so their calendars reflect the time zone change.

Only events in the default Calendar folder are migrated. Events in secondary calendars are not migrated.

You can safely rerun after a timeout or when additional features are added.

The cmdlet does not change the mailbox time zone, which is the time zone used to display the calendar and schedule new events. To change the mailbox time zone, use [Set-MailboxRegionalConfiguration](https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxregionalconfiguration).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1

```powershell
Invoke-CalendarEventMigration user1@contoso.com -FromWindowsTimeZoneId "Pacific Standard Time" -ToWindowsTimeZoneId "British Columbia Standard Time" -QueryStartDate 2026-11-01 -QueryWindowInDays 365 -Confirm:$false
```

This example migrates single instance meetings and appointments on User1's primary calendar from Pacific Standard Time to British Columbia Standard Time. Only events between November 1, 2026 and November 1, 2027 are migrated.

### Example 2

```powershell
$mailboxes = @(
  "user1@contoso.com"
  "user2@contoso.com"
  "shared@contoso.com"
)

foreach ($mailbox in $mailboxes) {
  Set-MailboxRegionalConfiguration -Identity $mailbox -TimeZone "British Columbia Standard Time"
  Invoke-CalendarEventMigration -Identity $mailbox `
    -FromWindowsTimeZoneId "Pacific Standard Time" `
    -ToWindowsTimeZoneId "British Columbia Standard Time" `
    -QueryStartDate 2026-11-01 -QueryWindowInDays 365 -Confirm:$false
}
```

This example migrates affected mailboxes User1, User2, and Shared to British Columbia Standard Time. Each mailbox time zone is updated to British Columbia Standard Time and single instance meetings and appointments are migrated from Pacific Standard Time to British Columbia Standard Time. Only events between November 1, 2026 and November 1, 2027 are migrated.

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

### -FromWindowsTimeZoneId

> Applicable: Exchange Online

The time zone  currently on events that need to be migrated. Events scheduled in other time zones will not be migrated. 

Run ```Get-TimeZone -ListAvailable | FT -Property Id``` to see the list of supported time zones.

```yaml
Type: System.String
DefaultValue: ''
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: TimeZoneMigration
  Position: Named
  IsRequired: true
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -ToWindowsTimeZoneId

> Applicable: Exchange Online

The time zone  that events will be migrated to.

Run ```Get-TimeZone -ListAvailable | FT -Property Id``` to see the list of supported time zones.

```yaml
Type: System.String
DefaultValue: ''
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: TimeZoneMigration
  Position: Named
  IsRequired: true
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -QueryStartDate

> Applicable: Exchange Online

The start date for the query window. The cmdlet operates on events within the query window. Events before this date will not be migrated. If -QueryStartDate is not provided, the current time is used.

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

### -QueryWindowInDays

> Applicable: Exchange Online

The length in days for the query window. The cmdlet operates on events within the query window. Events beyond the query window will not be migrated. Valid values are between 1 (1 day) and 1825 (5 years), inclusive. 

```yaml
Type: System.Int32
DefaultValue: ''
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: TimeZoneMigration
  Position: Named
  IsRequired: true
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -Force

> Applicable: Exchange Online

Sets whether the migration is allowed when the source and destination time zones have different current local times. This check helps prevent accidentally moving meetings to a new time. Use -Force to bypass the check.

```yaml
Type: System.Management.Automation.SwitchParameter
DefaultValue: ''
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: TimeZoneMigration
  Position: Named
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -Confirm

> Applicable: Exchange Online

Prompts you for confirmation before running the cmdlet.

```yaml
Type: System.Management.Automation.SwitchParameter
DefaultValue: ''
SupportsWildcards: false
Aliases:
- cf
ParameterSets:
- Name: (All)
  Position: Named
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -WhatIf

> Applicable: Exchange Online

Runs the command in a mode that only reports what would happen without performing the actions.

```yaml
Type: System.Management.Automation.SwitchParameter
DefaultValue: ''
SupportsWildcards: false
Aliases:
- wi
ParameterSets:
- Name: (All)
  Position: Named
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### -PreviewOnly

> Applicable: Exchange Online

When used, shows matching events that would be migrated without updating them.

```yaml
Type: System.Management.Automation.SwitchParameter
DefaultValue: ''
SupportsWildcards: false
Aliases: []
ParameterSets:
- Name: TimeZoneMigration
  Position: Named
  IsRequired: false
  ValueFromPipeline: false
  ValueFromPipelineByPropertyName: false
  ValueFromRemainingArguments: false
DontShow: false
AcceptedValues: []
HelpMessage: ''
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutBuffer, -OutVariable, -PipelineVariable,
-ProgressAction, -Verbose, -WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

