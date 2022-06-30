---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-csteamstranslationrule
applicable: Microsoft Teams
title: New-CsTeamsTranslationRule
schema: 2.0.0
manager: nmurav
author: jenstrier
ms.author: jenstr
ms.reviewer:
---

# New-CsTeamsTranslationRule

## SYNOPSIS
Cmdlet to create a new telephone number manipulation rule.

## SYNTAX

### Identity (Default)
```
New-CsTeamsTranslationRule [-Identity] <string> [-Description <string>] [-Pattern <string>] [-Translation <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsTeamsTranslationRule -Name <string> [-Description <string>] [-Pattern <string>] [-Translation <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to create a new number manipulation rule. The rule can be used, for example, in the settings of your SBC (Set-CSOnlinePSTNGateway) to convert a callee or caller number to a desired format before entering or leaving Microsoft Phone System

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsTranslationRule -Identity 'AddPlus1' -Pattern '^(\d{10})$' -Translation '+1$1'
```

This example creates a rule that adds +1 to any ten digits number. For example, 2065555555 will be translated to +1206555555

### Example 2
```powershell
PS C:\> New-CsTeamsTranslationRule -Identity 'StripPlus1' -Pattern '^\+1(\d{10})$' -Translation '$1'
```

This example creates a rule that strips +1 from any E.164 eleven digits number. For example, +12065555555 will be translated to 206555555

### Example 3
```powershell
PS C:\> New-CsTeamsTranslationRule -Identity 'AddE164SeattleAreaCode' -Pattern '^(\d{4})$' -Translation '+120655$1'
```

This example creates a rule that adds +1206555 to any four digits number (converts it to E.164number). For example, 5555 will be translated to +1206555555

### Example 4
```powershell
PS C:\> New-CsTeamsTranslationRule -Identity 'AddSeattleAreaCode' -Pattern '^(\d{4})$' -Translation '425555$1'
```

This example creates a rule that adds 425555 to any four digits number (converts to non-E.164 ten digits number). For example, 5555 will be translated to 4255555555

### Example 5
```powershell
PS C:\> New-CsTeamsTranslationRule -Identity 'StripE164SeattleAreaCode' -Pattern  '^\+1206555(\d{4})$' -Translation '$1'
```

This example creates a rule that strips +1206555 from any E.164 ten digits number. For example, +12065555555 will be translated to 5555


## PARAMETERS

### -Identity
The Identifier of the rule. This parameter is required and later used to assign the rule to Inbound or Outbound Trunk Normalization policy.

```yaml
Type: String
Parameter Sets: (Identity)
Aliases:
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A friendly description of the normalization rule.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pattern
A regular expression that caller or callee number must match in order for this rule to be applied.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Translation
The regular expression pattern that will be applied to the number to convert it.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The name of the rule.

```yaml
Type: String
Parameter Sets: (ParentAndRelativeKey)
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
[Test-CsTeamsTranslationRule](Test-CsTeamsTranslationRule.md)

[Get-CsTeamsTranslationRule](Get-CsTeamsTranslationRule.md)

[Set-CsTeamsTranslationRule](Set-CsTeamsTranslationRule.md)

[Remove-CsTeamsTranslationRule](Remove-CsTeamsTranslationRule.md)

