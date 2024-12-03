---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/export-csautoattendantholidays
applicable: Microsoft Teams
title: Export-CsAutoAttendantHolidays
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Export-CsAutoAttendantHolidays

## SYNOPSIS
Use Export-CsAutoAttendantHolidays cmdlet to export holiday schedules of an existing Auto Attendant (AA). The data is exported as a byte array from the cmdlet, which can be dumped to disk as a CSV file and can later be imported using the Import-CsAutoAttendantHolidays cmdlet.

## SYNTAX

```
Export-CsAutoAttendantHolidays -Identity <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Export-CsAutoAttendantHolidays cmdlet and the Import-CsAutoAttendantHolidays cmdlet enable you to export holiday schedules in your auto attendant and then later import that information. This can be extremely useful in a situation where you need to configure same holiday sets in multiple tenants.

The Export-CsAutoAttendantHolidays cmdlet returns the holiday schedule information in serialized form (as a byte array). The caller can then write the bytes to the disk to obtain a CSV file. Similarly, the Import-CsAutoAttendantHolidays cmdlet accepts the holiday schedule information as a byte array, which can be read from the aforementioned CSV file. The first line of the CSV file is considered a header record and is always ignored.

**NOTE**: Each line in the CSV file used by Export-CsAutoAttendantHolidays and Import-CsAutoAttendantHolidays cmdlet should be of the following format:

`HolidayName,StartDateTime1,EndDateTime1,StartDateTime2,EndDateTime2,...,StartDateTime10,EndDateTime10`

where

- HolidayName is the name of the holiday to be imported.
- StartDateTimeX and EndDateTimeX specify a date/time range for the holiday and are optional. If no date-time ranges are defined, then the holiday is imported without any date/time ranges. They follow the same format as New-CsOnlineDateTimeRange cmdlet.
- EndDateTimeX is optional. If it is not specified, the end bound of the date time range is set to 00:00 of the day after the start date.

- The first line of the CSV file is considered a header record and is always ignored by Import-CsAutoAttendantHolidays cmdlet.
- If the destination auto attendant for the import already contains a call flow or schedule by the same name as one of the holidays being imported, the corresponding CSV record is skipped.
- For holidays that are successfully imported, a default call flow is created which is configured without any greeting and simply disconnects the call on being executed.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$bytes = Export-CsAutoAttendantHolidays -Identity 6abea1cd-904b-520b-be96-1092cc096432
[System.IO.File]::WriteAllBytes("C:\Exports\Holidays.csv", $bytes)
```

In this example, the Export-CsAutoAttendantHolidays cmdlet is used to export holiday schedules of an auto attendant with Identity of 6abea1cd-904b-520b-be96-1092cc096432. The exported bytes are then written to a file with the path "C:\Exports\Holidays.csv".

## PARAMETERS

### -Identity
The identity for the AA whose holiday schedules are to be exported.

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
The Export-CsAutoAttendantHolidays cmdlet accepts a string as the Identity parameter.

## OUTPUTS

### System.Byte[]

## NOTES

## RELATED LINKS

[Import-CsAutoAttendantHolidays](https://learn.microsoft.com/powershell/module/teams/import-csautoattendantholidays)

[Get-CsAutoAttendantHolidays](https://learn.microsoft.com/powershell/module/teams/get-csautoattendantholidays)
