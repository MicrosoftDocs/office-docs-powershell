---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-csteamstranslationrule
applicable: Skype for Business Online
title: New-CsTeamsTranslationRule
schema: 2.0.0
manager: nmurav
author: filippse
ms.author: filippse
ms.reviewer:
---

# New-CsTeamsTranslationRule

## SYNOPSIS
Cmdlet to create a new telephone number manipulation rule.

## SYNTAX

```
New-CsTeamsTranslationRule [-Identity <string>] [-Tenant <guid>] [-Description <string>] [-Pattern <string>] [-Translation <string>] [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to create a new number manipulation rule. The rule can be used, for example, in the settings of your SBC (Set-CSOnlinePSTNGateway) to convert a callee or caller number to a desired format before entering or leaving Microsoft Phone System

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsTranslationRule -Identity AddPlus1 -Pattern ^(\d{10})$ -Translation +$1
```

This example creates a rule that adds +1 to any ten digits number. For example, 2065555555 will be translated to +1206555555

### Example 2
```powershell
PS C:\> New-CsTeamsTranslationRule -Identity StripPlus1 -Pattern ^+1(\d{10})$ -Translation $1
```

This example creates a rule that strips +1 from any E.164 eleven digits number. For example, +12065555555 will be translated to 206555555

### Example 3
```powershell
PS C:\> New-CsTeamsTranslationRule -Identity AddE164SeattleAreaCode -Pattern ^(\d{4})$ -Translation +120655$1
```

This example creates a rule that adds +1206555 to any four digits number (converts it to E.164number). For example, 5555 will be translated to +1206555555

### Example 4
```powershell
PS C:\> New-CsTeamsTranslationRule -Identity AddSeattleAreaCode -Pattern ^(\d{4})$ -Translation 425555$1
```

This example creates a rule that adds 425555 to any four digits number (converts to non-E.164 ten digits number). For example, 5555 will be translated to 4255555555

### Example 5
```powershell
PS C:\> New-CsTeamsTranslationRule -Identity StripE164SeattleAreaCode -Pattern ^+1206555(\d{4})$ -Translation $1
```

This example creates a rule that strips +1206555 from any E.164 ten digits number. For example, +12065555555 will be translated to 5555


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
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes and suppresses the display of any non-fatal error message that might arise when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Identifier of the rule. This parameter is required and later used to assign the rule to Inbound or Outbound Trunk Normalization policy.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-<cmdlet>.

```yaml
Type: SwitchParameter
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
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose number manipulation rule is being created.

```yaml
Type: Object
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
Type: Object
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
