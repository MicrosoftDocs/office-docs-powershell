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
 [-EnrollFace <string>]
 [-EnrollVoice <string>]
 [-SpeakerAttributionForBYOD <string>]
 [-Description <string>]
 [<CommonParameters>]
```

## DESCRIPTION

The new csTeamsAIPolicy will replace the existing enrollment settings in csTeamsMeetingPolicy, providing enhanced flexibility and control for Teams meeting administrators. Unlike the current single setting, EnrollUserOverride, which applies to both face and voice enrollment, the new policy introduces two distinct settings: EnrollFace and EnrollVoice. These can be individually set to Enabled or Disabled, offering more granular control over biometric enrollments. A new setting, SpeakerAttributionForBYOD, is also being added to csTeamsAIPolicy. This allows IT admins to turn off speaker attribution in BYOD scenarios, giving them greater control over how voice data is managed in such environments. This setting can be set to Enabled or Disabled, and will be Enabled by default. In addition to improving the management of face and voice data, the csTeamsAIPolicy is designed to support future AI-related settings in Teams, making it a scalable solution for evolving needs.

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

### -EnrollFace
Policy value of the Teams AI EnrollFace policy. EnrollFace controls user access to user face enrollment in the Teams app settings.

```yaml
Type: String
Parameter Sets: ("Enabled","Disabled")
Aliases:

Required: True
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnrollVoice
Policy value of the Teams AI EnrollVoice policy. EnrollVoice controls user access to user voice enrollment in the Teams app settings.

```yaml
Type: String
Parameter Sets: ("Enabled","Disabled")
Aliases:

Required: True
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpeakerAttributionForBYOD
Policy value of the Teams AI SpeakerAttributionForBYOD policy. Setting to "Enabled" turns on speaker attribution in BYOD scenarios while "Disabled" will turn off the function. 

```yaml
Type: String
Parameter Sets: ("Enabled","Disabled")
Aliases:

Required: True
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide explanatory text about the Teams AI policy.
For example, the Description might indicate the users the policy should be assigned to.
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

## NOTES

## RELATED LINKS
[Remove-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsaipolicy)

[Get-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsaipolicy)

[Set-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsaipolicy)

[Grant-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsaipolicy)
