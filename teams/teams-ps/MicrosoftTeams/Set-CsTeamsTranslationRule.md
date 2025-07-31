---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: nmurav
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamstranslationrule
schema: 2.0.0
title: Set-CsTeamsTranslationRule
---

# Set-CsTeamsTranslationRule

## SYNOPSIS
Cmdlet to modify an existing normalization rule.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsTranslationRule [[-Identity] <string>] [-Description <string>] [-Pattern <string>] [-Translation <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to modify an existing number manipulation rule. The rule can be used, for example, in the settings of your SBC (Set-CsOnlinePSTNGateway) to convert a callee or caller number to a desired format before entering or leaving Microsoft Phone System

## EXAMPLES

### Example 1
```powershell
Set-CsTeamsTranslationRule -Identity StripE164SeattleAreaCode -Pattern ^+12065555(\d{3})$ -Translation $1
```

This example modifies the rule that initially configured to strip +1206555 from any E.164 ten digits number. For example, +12065555555 translated to 5555 to a new pattern. Modified rule now only applies to three digit number (initially to four digits number) and adds one more number in prefix (+120655555 instead of +1206555)

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
Identifier of the rule. This parameter is required and later used to assign the rule to the Inbound or Outbound Trunk Normalization policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
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
[New-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/new-csteamstranslationrule)

[Get-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/get-csteamstranslationrule)

[Test-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/test-csteamstranslationrule)

[Remove-CsTeamsTranslationRule](https://learn.microsoft.com/powershell/module/teams/remove-csteamstranslationrule)
