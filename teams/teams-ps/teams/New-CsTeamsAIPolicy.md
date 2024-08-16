---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: New-CsTeamsAIPolicy
online version: https://learn.microsoft.com/powershell/module/teams/New-CsTeamsAIPolicy
schema: 2.0.0
author: Andy447
ms.author: andywang
---


# New-CsTeamsAIPolicy

## SYNOPSIS
This cmdlet creates a Teams AI policy.

## SYNTAX

```powershell
New-CsTeamsAIPolicy -Identity <String>
```

## DESCRIPTION
This cmdlet creates a Teams AI policy. If you get an error that the policy already exists, it means that the policy already exists for your tenant. In this case, run Get-CsTeamsAIPolicy.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsAIPolicy -Identity Test
```
Creates a new Teams AI policy with the specified identity.
The newly created policy with value will be printed on success.


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


## RELATED LINKS
[Remove-CsTeamsAIPolicy](Remove-CsTeamsAIPolicy.yml)

[Get-CsTeamsAIPolicy](Get-CsTeamsAIPolicy.yml)

[Set-CsTeamsAIPolicy](Set-CsTeamsAIPolicy.yml)

[Grant-CsTeamsAIPolicy](Grant-CsTeamsAIPolicy.yml)