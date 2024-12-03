---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-calendardiagnosticobjects
applicable: Exchange Online
title: Get-CalendarDiagnosticObjects
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-CalendarDiagnosticObjects

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-CalendarDiagnosticObjects cmdlet to collect a range of calendar logs. The calendar diagnostic logs track important calendar-related event data for each mailbox, and can be used to troubleshoot calendar issues that occur in mailboxes. The logs track all calendar items and meeting messages.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-CalendarDiagnosticObjects [-Identity] <UnifiedGroupOrUserMailboxIdParameter>
 [-AnalyzeExceptionWithOriginalStartDate <ExDateTime>]
 [-AutoRequeryOnMeetingId <Boolean>]
 [-ConfigurationName <String>]
 [-CustomPropertyNames <String[]>]
 [-EndDate <ExDateTime>]
 [-EntryId <String>]
 [-EwsId <String>]
 [-ExactMatch <Boolean>]
 [-ItemClass <String[]>]
 [-ItemIds <String[]>]
 [-MaxResults <Int32>]
 [-MeetingId <String>]
 [-ODataId <String>]
 [-ResultSize <Unlimited>]
 [-ShouldBindToItem <Boolean>]
 [-ShouldDecodeEnums <Boolean>]
 [-ShouldFetchAttendeeCollection <Boolean>]
 [-ShouldFetchRecurrenceExceptions <Boolean>]
 [-StartDate <ExDateTime>]
 [-Subject <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Some of the more interesting properties that are returned in the results are:

- AppointmentState: 1 = The appointment is a meeting, 2 = The appointment has been received, 4 = The appointment has been cancelled, and 8 = the appointment is a forwarded appointment.
- CalendarLogTriggerAction: The action that's taken on the item (for example, Create or Update).
- ClientInfoString: The entity that made the change (for example, `Client=OWA;<AdditionalDetails>`, `Client=WebServices;<AdditionalDetails>`;, or `Client=TBA;Service=MSExchangeMailboxAssistants;Action=ELCAssistant;`).
- MeetingRequestType: 1 = The meeting message is a meeting request, 65536 = The meeting message is a full update to an existing meeting, 131072 = The meeting message is an informational update to an existing meeting, 262144 = The meeting message is a silent update, 524288 = The update is outdated, or 1048576 = The meeting message is forwarded to a delegate, and the copy is marked as informational.
- OriginalLastModifiedTime: Used as the primary sort field to order the events.
- ResponseType: 0 = The organizer hasn't received a response, 1 = The organizer's copy of the meeting, 2 = Tentative, 3 = Accept, 4 = Decline, or 5 = The attendee hasn't responded.
- ResponsibleUserName: The LegacyExchangeDN value of the user who made the change (for example, `/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=BN6PR11MB1587/cn=Microsoft System Attendant` or `/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=696eea97d3c449eab648920d03385efb-admin`).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -Subject "Team Meeting" -ExactMatch $true
```

This example retrieves the calendar diagnostic logs from Pedro Pizarro's mailbox for all items where the Subject is an exact match for Team Meeting.

### Example 2
```powershell
$A = Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -Subject "Team Meeting" -ExactMatch $true

$A | Select-Object *,@{n='OLMT'; e={[DateTime]::Parse($_.OriginalLastModifiedTime.ToString())}} | sort OLMT | Format-Table OriginalLastModifiedTime,CalendarLogTriggerAction,ItemClass,ClientInfoString
```

This is the same as the previous example, but now the results are sorted by original last modified time.

### Example 3
```powershell
Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -MeetingID 40000008200E00074C5B7101A82E00800000000693ADAA3B5FCD201000000000000000010000000FF760A70460EAA4096B879872DF24F49
```

This example retrieves the calendar diagnostic logs for Pedro Pizarro's mailbox for a meeting with the specified unique global object ID (GOID).

### Example 4
```powershell
Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -Subject "Team Lunch" -StartDate 7/1/2018 -EndDate 7/31/2018 | Export-Csv "C:\My Documents\Team Lunch Meeting.csv" -NoTypeInformation
```

This example returns diagnostic information for meetings with the subject Team Lunch in Pedro Pizarro's mailbox that were modified in the month of July, 2018, and exports the results to the file C:\\My Documents\\Team Lunch Meeting.csv.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox or Microsoft 365 Group whose calendar you want to view. You can use any value that uniquely identifies the mailbox or Microsoft 365 Group. For example:

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
Type: UnifiedGroupOrUserMailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AnalyzeExceptionWithOriginalStartDate
{{ Fill AnalyzeExceptionWithOriginalStartDate Description }}

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

### -AutoRequeryOnMeetingId
{{ Fill AutoRequeryOnMeetingId Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfigurationName
{{ Fill ConfigurationName Description }}

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

### -CustomPropertyNames
The CustomPropertyNames parameter returns the specified calendar item custom property in the results. For valid values, see [Values for the CustomPropertyNames parameter in Exchange Online PowerShell](https://learn.microsoft.com/powershell/exchange/values-for-custompropertynames-parameter).

You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range for the OriginalLastModifiedTime property (when the meeting was last modified, not created).

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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

### -EntryId
The EntryID parameter filters the results by the specified EntryID property value, which corresponds to the MAPI property PR\_ENTRYID.

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

### -EwsId
{{ Fill EwsId Description }}

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

### -ExactMatch
The ExactMatch parameter specifies whether to use an exact match or a partial match for text values that you specify for the Subject parameter. Valid values are:

- $true: The subject search uses an exact match and searches all calendar items in the mailbox. For example, if you search for "budget", the search looks for items that have "budget" anywhere in the subject, but not "budgeting".
- $false: The subject search uses a partial match and searches a maximum of 1000 calendar items in the mailbox. For example, if you search for "budget", the search looks for items that have "budget" and "budgeting" anywhere in the subject. This is the default value.

A partial subject match search may not return all of the relevant calendar items. Try using an exact subject match search for more accurate results.

You only use this parameter with the Subject parameter.

The value of this parameter is ignored when you use the MeetingId parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemClass
The ItemClass parameter filters the results by the specified MessageClass property value of the calendar item (for example, IPM.Appointment). You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemIds
The ItemIds parameter filters the results by item ID. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxResults
{{ Fill MaxResults Description }}

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

### -MeetingId
The MeetingId parameter filters the results by the globally unique identifier of the calendar item. The value is the CleanGlobalObjectId property of the calendar item that's available in the output of this cmdlet, or by using other MAPI examination tools. An example value is 040000008200E00074C5B7101A82E00800000000B0225ABF0710C80100000000000000001000000005B27C05AA7C4646B0835D5EB4E41C55. This value is constant throughout the lifetime of the calendar item.

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

### -ODataId
{{ Fill ODataId Description }}

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

### -ResultSize
This parameter determines the number of results returned by the cmdlet. The maximum value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShouldBindToItem
The ShouldBindToItem parameter specifies whether to truncate large streamable property values (for example, AppointmentRecurrenceBlob). Valid values are:

- $true: The values of large streamable properties aren't truncated, so the full value is returned.
- $false: The values of large streamable properties are truncated. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShouldDecodeEnums
{{ Fill ShouldDecodeEnums Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShouldFetchAttendeeCollection
{{ Fill ShouldFetchAttendeeCollection Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShouldFetchRecurrenceExceptions
The ShouldFetchRecurrenceExceptions parameter specifies whether to include exceptions to recurring meetings. Valid values are:

- $true: Include exceptions to recurring meetings. When you use this value, you also need to use the ItemIds parameter.
- $false: Don't Include exceptions to recurring meetings. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range for the OriginalLastModifiedTime property (when the meeting was last modified, not created).

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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

### -Subject
The Subject parameter identifies the calendar items by the specified text in the Subject field. The text values that you specify aren't case sensitive. If the value contains spaces, enclose the value in quotation marks. You can control whether to use exact matching by using the ExactMatch parameter

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
