---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Set-CsTeamsAIPolicy
online version: https://learn.microsoft.com/powershell/module/teams/Set-CsTeamsAIPolicy
schema: 2.0.0
author: Andy447
ms.author: andywang
---

# Set-CsTeamsAIPolicy

## SYNOPSIS

This cmdlet Set Teams AI policy value for current tenant.

## SYNTAX

```
Set-CsTeamsAIPolicy 
    [[-Identity] <string>] 
    [-EnrollFace <Enabled/Disabled>]
    [-EnrollVoice <Enabled/Disabled>]
```

## DESCRIPTION

This cmdlet sets the Teams AI policy EnrollFace and EnrollVoice value for the tenant. The values of EnrollFace and EnrollVoice can be set to "Enabled" or "Disabled"

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Test -EnrollFace Enabled
```

Set Teams AI policy "EnrollFace" value to "Enabled" for identity "Test".

```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Test -EnrollVoice Enabled
```

Set Teams AI policy "EnrollVoice" value to "Enabled" for identity "Test".


### Example 2
```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Test -EnrollFace Disabled
```

Set Teams AI policy "EnrollFace" value to "Disabled" for identity "Test".

```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Test -EnrollVoice Disabled
```

Set Teams AI policy "EnrollVoice" value to "Disabled" for identity "Test".

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
### -EnrollFace
Policy value of the Teams AI EnrollFace policy.

```yaml
Type: Boolean
Parameter Sets: ("Enabled","Disabled")
Aliases:

Required: True
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnrollVoice
Policy value of the Teams AI EnrollVoice policy.

```yaml
Type: Boolean
Parameter Sets: ("Enabled","Disabled")
Aliases:

Required: True
Position: Named
Default value: Enabled
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

[Get-CsTeamsAIPolicy](Get-CsTeamsAIPolicy.yml)

[Grant-CsTeamsAIPolicy](Grant-CsTeamsAIPolicy.yml)