---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendantsupportedtimezone
schema: 2.0.0
title: Get-CsAutoAttendantSupportedTimeZone
---

# Get-CsAutoAttendantSupportedTimeZone

## SYNOPSIS
The Get-CsAutoAttendantSupportedTimeZone cmdlet gets supported time zones for the Auto Attendant (AA) service.

## SYNTAX

```
Get-CsAutoAttendantSupportedTimeZone [-Identity <String>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsAutoAttendantSupportedTimeZone cmdlet gets all the time zones that the AA service supports, or a specific time zone if its Identity is provided.

## EXAMPLES

### Example 1
```
Get-CsAutoAttendantSupportedTimeZone
```

This example gets all supported time zones.

### Example 2
```
Get-CsAutoAttendantSupportedTimeZone -Identity "Pacific Standard Time"
```

This example gets the timezone that the Identity parameter specifies (Pacific Standard Time).

## PARAMETERS

### -Identity

> Applicable: Microsoft Teams

The Identity parameter specifies a time zone to be retrieved. If this parameter is not used, then all supported time zones are returned.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Tenant

> Applicable: Microsoft Teams

{{ Fill Tenant Description }}

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

### System.String
The Get-CsAutoAttendantSupportedTimeZone cmdlet accepts a string as the Identity parameter.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.TimeZone

## NOTES

## RELATED LINKS
