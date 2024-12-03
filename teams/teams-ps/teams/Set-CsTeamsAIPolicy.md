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
Set-CsTeamsAIPolicy [[-Identity] <String>]
 [-EnrollFace <Boolean>]
 [-EnrollVoice <Boolean>]
 [-SpeakerAttributionForBYOD <String>]
 [<CommonParameters>]
```

## DESCRIPTION

The new csTeamsAIPolicy will replace the existing enrollment settings in csTeamsMeetingPolicy, providing enhanced flexibility and control for Teams meeting administrators. Unlike the current single setting, EnrollUserOverride, which applies to both face and voice enrollment, the new policy introduces two distinct settings: EnrollFace and EnrollVoice. These can be individually set to Enabled or Disabled, offering more granular control over biometric enrollments. In addition to improving the management of face and voice data, the csTeamsAIPolicy is designed to support future AI-related settings in Teams, making it a scalable solution for evolving needs.

This cmdlet sets the Teams AI policy values for the tenant.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Global -EnrollFace Disabled
```

Set Teams AI policy "EnrollFace" value to "Disabled" for global as default.

### Example 2
```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Global -EnrollVoice Disabled
```

Set Teams AI policy "EnrollVoice" value to "Disabled" for global as default.

### Example 3
```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Global -SpeakerAttributionForBYOD Disabled
```

Set Teams AI policy "SpeakerAttributionForBYOD" value to "Disabled" global as default.

### Example 4
```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Test -EnrollFace Enabled
```

Set Teams AI policy "EnrollFace" value to "Enabled" for identity "Test".

### Example 5
```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Test -EnrollVoice Enabled
```

Set Teams AI policy "EnrollVoice" value to "Enabled" for identity "Test".

### Example 6
```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Test -EnrollFace Disabled
```

Set Teams AI policy "EnrollFace" value to "Disabled" for identity "Test".

### Example 7
```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Test -EnrollVoice Disabled
```

Set Teams AI policy "EnrollVoice" value to "Disabled" for identity "Test".

### Example 8
```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Test -SpeakerAttributionForBYOD Attribute
```

Set Teams AI policy "SpeakerAttributionForBYOD" value to "Attribute" for identity "Test".

### Example 9
```powershell
PS C:\> Set-CsTeamsAIPolicy -Identity Test -SpeakerAttributionForBYOD Distinguish
```

Set Teams AI policy "SpeakerAttributionForBYOD" value to "Distinguish" for identity "Test".

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
Policy value of the Teams AI EnrollVoice policy. EnrollVoice controls user access to user voice enrollment in the Teams app settings.

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

### -SpeakerAttributionForBYOD
This setting allows tenant admins to enable or disable speaker attribution in BYOD environments.

```yaml
Type: String
Parameter Sets: ("Attribute","Disabled","Distinguish")
Aliases:

Required: True
Position: Named
Default value: Disabled
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

[New-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsaipolicy)

[Remove-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsaipolicy)

[Get-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsaipolicy)

[Grant-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsaipolicy)