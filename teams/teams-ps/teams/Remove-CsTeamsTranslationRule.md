---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamstranslationrule
applicable: Microsoft Teams
title: Remove-CsTeamsTranslationRule
schema: 2.0.0
manager: nmurav
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Remove-CsTeamsTranslationRule

## SYNOPSIS
Cmdlet to remove an existing number manipulation rule (or list of rules).

## SYNTAX

```
Remove-CsTeamsTranslationRule [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to remove an existing number manipulation rule (or list of rules). The rule can be used, for example, in the settings of your SBC (Set-CsOnlinePSTNGateway) to convert a callee or caller number to a desired format before entering or leaving Microsoft Phone System.

## EXAMPLES

### Example 1
```powershell
Remove-CsTeamsTranslationRule -Identity AddPlus1 
```

This example removes the "AddPlus1" translation rule. As the rule can be used in some places, integrity check is preformed to ensure that the rule is not in use. If the rule is in use an error thrown with specifying which SBC use this rule.

### Example 2
```powershell
Get-CsTeamsTranslationRule -Filter 'tst*' | Remove-CsTeamsTranslationRule
```

This example removes all translation rules with Identifier starting with tst.

## PARAMETERS

### -Identity
Identifier of the rule. This parameter is required.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command. The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
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

[Get-CsTeamsTranslationRule](Get-CsTeamsTranslationRule.md)

[Set-CsTeamsTranslationRule](Set-CsTeamsTranslationRule.md)

[Test-CsTeamsTranslationRule](Test-CsTeamsTranslationRule.md)
