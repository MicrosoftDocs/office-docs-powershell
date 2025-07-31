---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/get-csautoattendantsupportedlanguage
schema: 2.0.0
title: Get-CsAutoAttendantSupportedLanguage
---

# Get-CsAutoAttendantSupportedLanguage

## SYNOPSIS
The Get-CsAutoAttendantSupportedLanguage cmdlet gets languages that are supported by the Auto Attendant (AA) service.

## SYNTAX

```
Get-CsAutoAttendantSupportedLanguage [-Identity <String>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsAutoAttendantSupportedLanguage cmdlet gets all languages (and their corresponding voices/speakers) that are supported by the AA service, or a specific language if its Identity is provided.

## EXAMPLES

### Example 1
```
Get-CsAutoAttendantSupportedLanguage
```

This example gets all supported languages.

### Example 2
```
Get-CsAutoAttendantSupportedLanguage -Identity "en-US"
```

This example gets the language that the Identity parameter specifies (en-US).

## PARAMETERS

### -Identity
The Identity parameter designates a specific language to be retrieved. If this parameter is not specified, then all supported languages are returned.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
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
The Get-CsAutoAttendantSupportedLanguage cmdlet accepts a string as the Identity parameter.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.Language

## NOTES

## RELATED LINKS
