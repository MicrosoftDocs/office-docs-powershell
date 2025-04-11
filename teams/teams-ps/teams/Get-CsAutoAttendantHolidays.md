---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csautoattendantholidays
applicable: Microsoft Teams
title: Get-CsAutoAttendantHolidays
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsAutoAttendantHolidays

## SYNOPSIS
Use Get-CsAutoAttendantHolidays cmdlet to get the holiday information for an existing Auto Attendant (AA).

## SYNTAX

```
Get-CsAutoAttendantHolidays [-Identity] <string> [-Force] [-Names <List[string]>] [-Years <List[int]>] [<CommonParameters>]
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
Get-CsAutoAttendantHolidays -Identity "f7a821dc-2d69-5ae8-8525-bcb4a4556093" -Years @(2017) -Names @("Christmas")
```

In this example, the Get-CsAutoAttendantHolidays cmdlet is used to get holiday named Christmas in the year 2017 in an auto attendant with Identity of f7a821dc-2d69-5ae8-8525-bcb4a4556093.

### -------------------------- Example 4 --------------------------
```
(Get-CsAutoAttendantHolidays -Identity "f7a821dc-2d69-5ae8-8525-bcb4a4556093" -Years @(2017) -Names @("Christmas")).DateTimeRanges
```

In this example, the Get-CsAutoAttendantHolidays cmdlet is used to retrieve the DateTimeRanges for the holiday named Christmas in the year 2017 in an auto attendant with Identity of f7a821dc-2d69-5ae8-8525-bcb4a4556093.

## PARAMETERS

### -Identity
Represents the identifier for the auto attendant whose holidays are to be retrieved.

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

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Years
The Years parameter represents the years for the holidays to be retrieved. If this parameter is not specified, then holidays for all years in the AA are returned.

```yaml
Type: System.Collections.Generic.List[System.String]
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Names
The Names parameter represents the names for the holidays to be retrieved. If this parameter is not specified, then all holidays in the AA are returned.

```yaml
Type: System.Collections.Generic.List[System.Int32]
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
The Get-CsAutoAttendantHolidays cmdlet accepts a string as the Identity parameter.

## OUTPUTS

### Microsoft.Rtc.Management.OAA.Models.HolidayVisRecord

## NOTES
The DateTimeRanges parameter in the output needs to be explicitly referenced to show the value. See Example 4 for one way of doing it.

## RELATED LINKS

[Import-CsAutoAttendantHolidays](https://learn.microsoft.com/powershell/module/teams/import-csautoattendantholidays)

[Export-CsAutoAttendantHolidays](https://learn.microsoft.com/powershell/module/teams/export-csautoattendantholidays)
