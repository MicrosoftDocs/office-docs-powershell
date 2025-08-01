---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: nmurav
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamstranslationrule
schema: 2.0.0
title: Get-CsTeamsTranslationRule
---

# Get-CsTeamsTranslationRule

## SYNOPSIS
Cmdlet to get an existing number manipulation rule (or list of rules).

## SYNTAX

### Identity (Default)
```
Get-CsTeamsTranslationRule [[-Identity] <String>] [-MsftInternalProcessingMode <String>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsTranslationRule [-MsftInternalProcessingMode <String>] [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to get an existing number manipulation rule (or list of rules). The rule can be used, for example, in the settings of your SBC (Set-CSOnlinePSTNGateway) to convert a callee or caller number to a desired format before entering or leaving Microsoft Phone System.

## EXAMPLES

### Example 1
```powershell
Get-CsTeamsTranslationRule
```

This command will show all translation rules that exist in the tenant. Identity, Name, Description, Pattern, and Translation parameters are listed for each rule.

### Example 2
```powershell
Get-CsTeamsTranslationRule -Identity AddPlus1
```

This command will show Identity, Name, Description, Pattern, and Translation parameters for the "AddPlus1" rule.

### Example 3
```powershell
Get-CsTeamsTranslationRule -Filter 'Add*'
```

This command will show Identity, Name, Description, Pattern, and Translation parameters for all rules with Identity starting with Add.

## PARAMETERS

### -Filter

> Applicable: Microsoft Teams

The filter to use against the Identity of translation rules.

```yaml
Type: System.String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Microsoft Teams

Identifier of the specific translation rule to display.

```yaml
Type: System.String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MsftInternalProcessingMode
{{ Fill MsftInternalProcessingMode Description }}

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamstranslationrule)

[Test-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/microsoftteams/test-csteamstranslationrule)

[Set-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamstranslationrule)

[Remove-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamstranslationrule)
