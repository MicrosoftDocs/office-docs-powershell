---
external help file: 
applicable: Skype for Business Online
title: Get-CsOrganizationalAutoAttendantSupportedLanguage
schema: 2.0.0
---

# Get-CsOrganizationalAutoAttendantSupportedLanguage

## SYNOPSIS
The Get-CsOrganizationalAutoAttendantSupportedLanguage cmdlet gets languages that are supported by the Organizational Auto Attendant (OAA) service.

## SYNTAX

```
Get-CsOrganizationalAutoAttendantSupportedLanguage [[-Identity] <Object>] [-BypassDualWrite <Object>]
 [-DomainController <Object>] [-Force] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
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

The Get-CsOrganizationalAutoAttendantSupportedLanguage cmdlet gets all languages (and their corresponding voices/speakers) that are supported by the OAA service.

## PARAMETERS

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
PARAMVALUE: Fqdn

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter designates a specific language to be retrieved. If this parameter is not specified, then all supported languages are returned.

PARAMVALUE: String

```yaml
Type: Object
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
PARAMVALUE: Guid

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
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
