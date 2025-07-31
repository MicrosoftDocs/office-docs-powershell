---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: nmurav
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamstranslationrule
schema: 2.0.0
title: New-CsTeamsTranslationRule
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
New-CsTeamsTranslationRule -Identity 'AddPlus1' -Pattern '^(\d{10})$' -Translation '+1$1'
```

This example creates a rule that adds +1 to any ten digits number. For example, 2065555555 will be translated to +1206555555

### Example 2
```powershell
New-CsTeamsTranslationRule -Identity 'StripPlus1' -Pattern '^\+1(\d{10})$' -Translation '$1'
```

This example creates a rule that strips +1 from any E.164 eleven digits number. For example, +12065555555 will be translated to 206555555

### Example 3
```powershell
New-CsTeamsTranslationRule -Identity 'AddE164SeattleAreaCode' -Pattern '^(\d{4})$' -Translation '+120655$1'
```

This example creates a rule that adds +1206555 to any four digits number (converts it to E.164number). For example, 5555 will be translated to +1206555555

### Example 4
```powershell
New-CsTeamsTranslationRule -Identity 'AddSeattleAreaCode' -Pattern '^(\d{4})$' -Translation '425555$1'
```

This example creates a rule that adds 425555 to any four digits number (converts to non-E.164 ten digits number). For example, 5555 will be translated to 4255555555

### Example 5
```powershell
New-CsTeamsTranslationRule -Identity 'StripE164SeattleAreaCode' -Pattern  '^\+1206555(\d{4})$' -Translation '$1'
```

This example creates a rule that strips +1206555 from any E.164 ten digits number. For example, +12065555555 will be translated to 5555

### Example 6
```powershell
New-CsTeamsTranslationRule -Identity 'GenerateFullNumber' -Pattern  '^\+1206555(\d{4})$' -Translation '+1206555$1;ext=$1'
```

This example creates a rule that adds the last four digits of a phone number starting with +1206555 as the extension. For example, +12065551234 will be translated to +12065551234;ext=1234.

## PARAMETERS

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

### -Identity
The Identifier of the rule. This parameter is required and later used to assign the rule to the Inbound or Outbound Trunk Normalization policy.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Test-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/test-csteamstranslationrule)

[Get-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/get-csteamstranslationrule)

[Set-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/set-csteamstranslationrule)

[Remove-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/remove-csteamstranslationrule)
