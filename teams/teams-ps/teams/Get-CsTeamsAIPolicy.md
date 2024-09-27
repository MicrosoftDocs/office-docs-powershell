---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Get-CsTeamsAIPolicy
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsTeamsAIPolicy
schema: 2.0.0
author: Andy447
ms.author: andywang
---

# Get-CsTeamsAIPolicy

## SYNOPSIS

This cmdlet retrieves all Teams AI policies for current tenant.

## SYNTAX

```
Get-CsTeamsAIPolicy
```

## DESCRIPTION

This cmdlet retrieves all Teams AI policies for current tenant.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsAIPolicy
```

Retrieves Teams AI policies, shows "EnrollFace" and "EnrollVoice" values.

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

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
To return a collection of all the per-user policies, use this syntax: -Filter "tag:*".

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## RELATED LINKS

[New-CsTeamsAIPolicy](New-CsTeamsAIPolicy.md)

[Remove-CsTeamsAIPolicy](Remove-CsTeamsAIPolicy.yml)

[Set-CsTeamsAIPolicy](Set-CsTeamsAIPolicy.yml)

[Grant-CsTeamsAIPolicy](Grant-CsTeamsAIPolicy.yml)