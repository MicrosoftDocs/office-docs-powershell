---
external help file: Export-CsOrganizationalAutoAttendantHolidays.xml
applicable: Skype for Business Online
title: Export-CsOrganizationalAutoAttendantHolidays
schema: 2.0.0
---

# Export-CsOrganizationalAutoAttendantHolidays

## SYNOPSIS
Use Export-CsOrganizationalAutoAttendantHolidays cmdlet to export holiday schedules of an existing Auto Attendant (AA). The data is exported as a byte array from the cmdlet, which can be dumped to disk as a CSV file and can later be imported using the Import-CsOrganizationalAutoAttendantHolidays cmdlet.

## SYNTAX

```
Export-CsOrganizationalAutoAttendantHolidays [-PrimaryUri] <Uri> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Export-CsOrganizationalAutoAttendantHolidays cmdlet and the Import-CsOrganizationalAutoAttendantHolidays cmdlet enable you to export holiday schedules in your auto attendant and then later import that information. This can be extremely useful in a situation where you need to configure same holiday sets in multiple auto attendants.

The Export-CsOrganizationalAutoAttendantHolidays cmdlet returns the holiday schedule information in serialized form (as a byte array). The caller can then write the bytes to the disk to obtain a CSV file. Similarly, the Import-CsOrganizationalAutoAttendantHolidays cmdlet accepts the holiday schedule information as a byte array, which can be read from the aforementioned CSV file. The first line of the CSV file is considered a header record and is always ignored.

**NOTE**
- Each line in the CSV file used by Export-CsOrganizationalAutoAttendantHolidays and Import-CsOrganizationalAutoAttendantHolidays cmdlet should be of the following format:

   `HolidayName,StartDateTime1,EndDateTime1,StartDateTime2,EndDateTime2,…,StartDateTime10,EndDateTime10`

    where 
    - HolidayName is the name of the holiday to be imported.
    - StartDateTimeX and EndDateTimeX specify a date/time range for the holiday and are optional. If no date-time ranges are defined, then the holiday is imported without any date/time ranges. They follow the same format as New-CsOnlineDateTimeRange cmdlet.
    - EndDateTimeX is optional. If it is not specified, the end bound of the date time range is set to 00:00 of the day after the start date.
- The first line of the CSV file is considered a header record and is always ignored by Import-CsOrganizationalAutoAttendantHolidays cmdlet.
- If the destination auto attendant for the import already contains a call flow or schedule by the same name as one of the holidays being imported, the corresponding CSV record is skipped.
- For holidays that are successfully imported, a default call flow is created which is configured without any greeting and simply disconnects the call on being executed.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$bytes = Export-CsOrganizationalAutoAttendantHolidays -PrimaryUri sip:mainoaa@contoso.com
[System.IO.File]::WriteAllBytes("C:\Exports\Holidays.csv", $bytes)
```

In this example, the Export-CsOrganizationalAutoAttendantHolidays cmdlet is used to export holiday schedules of an auto attendant with Primary URI of sip:mainoaa@contoso.com. The exported bytes are then written to a file with the path "C:\Exports\Holidays.csv".

## PARAMETERS

### -PrimaryUri
The Primary URI represents the SIP address of the auto attendant whose holiday schedules are to be exported.

```yaml
Type: System.Uri
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### String
The String is used as the PrimaryUri input.


## OUTPUTS

### System.Byte[]


## NOTES


## RELATED LINKS

[Import-CsOrganizationalAutoAttendantHolidays](Import-CsOrganizationalAutoAttendantHolidays.md)

[Get-CsOrganizationalAutoAttendantHolidays](Get-CsOrganizationalAutoAttendantHolidays.md)

