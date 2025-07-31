---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/import-csautoattendantholidays
schema: 2.0.0
title: Import-CsAutoAttendantHolidays
---

# Import-CsAutoAttendantHolidays

## SYNOPSIS
Use Import-CsAutoAttendantHolidays cmdlet to import holiday schedules of an existing Auto Attendant (AA) that were previously exported using the Export-CsAutoAttendantHolidays cmdlet.

## SYNTAX

```
Import-CsAutoAttendantHolidays -Identity <String> -Input <byte[]> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Export-CsAutoAttendantHolidays cmdlet and the Import-CsAutoAttendantHolidays cmdlet enable you to export holiday schedules in your auto attendant and then later import that information. This can be extremely useful in a situation where you need to configure same holiday sets in multiple auto attendants.

The Export-CsAutoAttendantHolidays cmdlet returns the holiday schedule information in serialized form (as a byte array). The caller can then write the bytes to the disk to obtain a CSV file. Similarly, the Import-CsAutoAttendantHolidays cmdlet accepts the holiday schedule information as a byte array, which can be read from the aforementioned CSV file. The first line of the CSV file is considered a header record and is always ignored.

**NOTES**:

Each line in the CSV file used by Export-CsAutoAttendantHolidays and Import-CsAutoAttendantHolidays cmdlet should be of the following format:

   `HolidayName,StartDateTime1,EndDateTime1,StartDateTime2,EndDateTime2,...,StartDateTime10,EndDateTime10`

where

- HolidayName is the name of the holiday to be imported.
- StartDateTimeX and EndDateTimeX specify a date/time range for the holiday and are optional. If no date-time ranges are defined, then the holiday is imported without any date/time ranges. They follow the same format as New-CsOnlineDateTimeRange cmdlet.
- EndDateTimeX is optional. If it is not specified, the end bound of the date time range is set to 00:00 of the day after the start date.

- The first line of the CSV file is considered a header record and is always ignored by Import-CsAutoAttendantHolidays cmdlet.
- If the destination auto attendant for the import already contains a call flow or schedule by the same name as one of the holidays being imported, the corresponding CSV record is skipped.
- For holidays that are successfully imported, a default call flow is created which is configured without any greeting and simply disconnects the call on being executed.

## EXAMPLES

### Example 1
```
$bytes = [System.IO.File]::ReadAllBytes("C:\Imports\Holidays.csv")
Import-CsAutoAttendantHolidays -Identity 6abea1cd-904b-520b-be96-1092cc096432 -Input $bytes
```

In this example, the Import-CsAutoAttendantHolidays cmdlet is used to import holiday schedule information from a file at path "C:\Imports\Holidays.csv" to an auto attendant with Identity of 6abea1cd-904b-520b-be96-1092cc096432.

### Example 2
```
$bytes = [System.IO.File]::ReadAllBytes("C:\Imports\Holidays.csv")
Import-CsAutoAttendantHolidays -Identity 6abea1cd-904b-520b-be96-1092cc096432 -Input $bytes | Format-Table -Wrap -AutoSize
```

In this example, the Import-CsAutoAttendantHolidays cmdlet is used to import holiday schedule information from a file at path "C:\Imports\Holidays.csv" to an auto attendant with Identity of 6abea1cd-904b-520b-be96-1092cc096432. The result of the import process is formatted as a table.

## PARAMETERS

### -Identity
The identity for the AA whose holiday schedules are to be imported.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Input
The Input parameter specifies the holiday schedule information that is to be imported.

```yaml
Type: System.Byte[]
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
The Import-CsAutoAttendantHolidays cmdlet accepts a string as the Identity parameter.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.HolidayImportResult

## NOTES

## RELATED LINKS

[Export-CsAutoAttendantHolidays](https://learn.microsoft.com/powershell/module/teams/export-csautoattendantholidays)

[Get-CsAutoAttendantHolidays](https://learn.microsoft.com/powershell/module/teams/get-csautoattendantholidays)
