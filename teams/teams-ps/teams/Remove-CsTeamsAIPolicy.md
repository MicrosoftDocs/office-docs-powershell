---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Remove-CsTeamsAIPolicy
online version: https://learn.microsoft.com/powershell/module/teams/Remove-CsTeamsAIPolicy
schema: 2.0.0
author: Andy447
ms.author: andywang
---

# Remove-CsTeamsAIPolicy

## SYNOPSIS

This cmdlet deletes a Teams AI policy.

## SYNTAX

```
Remove-CsTeamsAIPolicy  -Identity <String>
```

## DESCRIPTION

This cmdlet deletes a Teams AI policy with the specified identity string.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsAIPolicy -Identity "Test"
```

Deletes a Teams AI policy with the identify of "Test".

## PARAMETERS

### -Identity
Identity of the Teams AI policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## RELATED LINKS

[New-CsTeamsAIPolicy](New-CsTeamsAIPolicy.md)

[Get-CsTeamsAIPolicy](Get-CsTeamsAIPolicy.yml)

[Grant-CsTeamsAIPolicy](Grant-CsTeamsAIPolicy.yml)

[Set-CsTeamsAIPolicy](Set-CsTeamsAIPolicy.yml)
