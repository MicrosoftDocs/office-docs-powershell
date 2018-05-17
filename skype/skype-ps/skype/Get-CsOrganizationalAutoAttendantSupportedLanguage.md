---
external help file: Get-CsOrganizationalAutoAttendantSupportedLanguage.xml
applicable: Skype for Business Online
title: Get-CsOrganizationalAutoAttendantSupportedLanguage
schema: 2.0.0
---

# Get-CsOrganizationalAutoAttendantSupportedLanguage

## SYNOPSIS
The Get-CsOrganizationalAutoAttendantSupportedLanguage cmdlet gets languages that are supported by the Auto Attendant (AA) service.

## SYNTAX

```
Get-CsOrganizationalAutoAttendantSupportedLanguage [-Identity] <System.String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOrganizationalAutoAttendantSupportedLanguage cmdlet gets all languages (and their corresponding voices/speakers) that are supported by the OAA service.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOrganizationalAutoAttendantSupportedLanguage
```

This example gets all supported languages.

### -------------------------- Example 2 --------------------------
```
Get-CsOrganizationalAutoAttendantSupportedLanguage -Identity "en-US"
```

This example gets the language that the Identity parameter specifies (en-US).

## PARAMETERS

### -Identity
The Identity parameter designates a specific language to be retrieved. If this parameter is not specified, then all supported languages are returned.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
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

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.Language


## NOTES

## RELATED LINKS

