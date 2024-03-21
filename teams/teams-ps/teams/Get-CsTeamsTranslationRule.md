---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamstranslationrule
applicable: Microsoft Teams
title: Get-CsTeamsTranslationRule
schema: 2.0.0
manager: nmurav
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Get-CsTeamsTranslationRule

## SYNOPSIS
Cmdlet to get an existing number manipulation rule (or list of rules).

## SYNTAX

### Identity (Default)
```
Get-CsTeamsTranslationRule [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsTranslationRule [-Filter <string>] [<CommonParameters>]
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

### -Identity
Identifier of the specific translation rule to display.

```yaml
Type: String
Parameter Sets: (Identity)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The filter to use against the Identity of translation rules.

```yaml
Type: String
Parameter Sets: (Filter)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[New-CsTeamsTranslationRule](New-CsTeamsTranslationRule.md)

[Test-CsTeamsTranslationRule](Test-CsTeamsTranslationRule.md)

[Set-CsTeamsTranslationRule](Set-CsTeamsTranslationRule.md)

[Remove-CsTeamsTranslationRule](Remove-CsTeamsTranslationRule.md)
