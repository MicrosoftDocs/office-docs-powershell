---
applicable: Microsoft Teams
author: Andy447
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: andywang
online version: https://learn.microsoft.com/powershell/module/teams/Remove-CsTeamsAIPolicy
schema: 2.0.0
title: Remove-CsTeamsAIPolicy
---

# Remove-CsTeamsAIPolicy

## SYNOPSIS

This cmdlet deletes a Teams AI policy.

## SYNTAX

```
Remove-CsTeamsAIPolicy -Identity <String> [<CommonParameters>]
```

## DESCRIPTION

The new csTeamsAIPolicy will replace the existing enrollment settings in csTeamsMeetingPolicy, providing enhanced flexibility and control for Teams meeting administrators. Unlike the current single setting, EnrollUserOverride, which applies to both face and voice enrollment, the new policy introduces two distinct settings: EnrollFace and EnrollVoice. These can be individually set to Enabled or Disabled, offering more granular control over biometric enrollments. A new setting, SpeakerAttributionBYOD, is also being added to csTeamsAIPolicy. This allows IT admins to turn off speaker attribution in BYOD scenarios, giving them greater control over how voice data is managed in such environments. This setting can be set to Enabled or Disabled, and will be Enabled by default. In addition to improving the management of face and voice data, the csTeamsAIPolicy is designed to support future AI-related settings in Teams, making it a scalable solution for evolving needs.

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

## NOTES

## RELATED LINKS

[New-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsaipolicy)

[Get-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsaipolicy)

[Grant-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsaipolicy)

[Set-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsaipolicy)
