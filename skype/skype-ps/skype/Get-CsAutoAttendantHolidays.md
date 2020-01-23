---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsAutoAttendantHolidays
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsAutoAttendantHolidays

## SYNOPSIS
Use Get-CsAutoAttendantHolidays cmdlet to get the holiday information for an existing Auto Attendant (AA).

## SYNTAX

```
Get-CsAutoAttendantHolidays -Identity <String> [-Years <List>] [-Names <List>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsAutoAttendantHolidays provides a convenient way to visualize the information of all the holidays contained within an auto attendant.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAutoAttendantHolidays -Identity "f7a821dc-2d69-5ae8-8525-bcb4a4556093"
```

In this example, the Get-CsAutoAttendantHolidays cmdlet is used to get all holidays in an auto attendant with Identity of f7a821dc-2d69-5ae8-8525-bcb4a4556093.

### -------------------------- Example 2 --------------------------
```
Get-CsAutoAttendantHolidays -Identity "f7a821dc-2d69-5ae8-8525-bcb4a4556093" -Years @(2017)
```

In this example, the Get-CsAutoAttendantHolidays cmdlet is used to get all holidays in year 2017 in an auto attendant with Identity of f7a821dc-2d69-5ae8-8525-bcb4a4556093.

### -------------------------- Example 3 --------------------------
```
Get-CsAutoAttendantHolidays -Identity "f7a821dc-2d69-5ae8-8525-bcb4a4556093" -Years @(2017) -Name @("Christmas")
```

In this example, the Get-CsAutoAttendantHolidays cmdlet is used to get holiday named Christmas in the year 2017 in an auto attendant with Identity of f7a821dc-2d69-5ae8-8525-bcb4a4556093.

### -------------------------- Example 4 --------------------------
```
Get-CsAutoAttendantHolidays -Identity "f7a821dc-2d69-5ae8-8525-bcb4a4556093" | Format-Table -Wrap -AutoSize
```

In this example, the Get-CsAutoAttendantHolidays cmdlet is used to retrieve all holidays in an auto attendant with Identity of f7a821dc-2d69-5ae8-8525-bcb4a4556093 and the result is formatted as a table.


## PARAMETERS

### -Identity
Represents the identifier for the auto attendant whose holidays are to be retrieved.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Years
The Years parameter represents the years for the holidays to be retrieved. If this parameter is not specified, then holidays for all years in the AA are returned.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Names
The Names parameter represents the names for the holidays to be retrieved. If this parameter is not specified, then all holidays in the AA are returned.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### System.String
The Get-CsAutoAttendantHolidays cmdlet accepts a string as the Identity parameter.


## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.HolidayVisRecord


## NOTES


## RELATED LINKS

[Import-CsAutoAttendantHolidays](Import-CsAutoAttendantHolidays.md)

[Export-CsAutoAttendantHolidays](Export-CsAutoAttendantHolidays.md)

