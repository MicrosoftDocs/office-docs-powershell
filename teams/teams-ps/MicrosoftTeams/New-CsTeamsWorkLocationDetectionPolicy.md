---
author: artemiykozlov
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: prashibadkur
Module Name: MicrosoftTeams
ms.author: arkozlov
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsworklocationdetectionpolicy
schema: 2.0.0
title: New-CsTeamsWorkLocationDetectionPolicy
---

# New-CsTeamsWorkLocationDetectionPolicy

## SYNOPSIS
This cmdlet is used to create a new instance of the TeamsWorkLocationDetectionPolicy.

## SYNTAX

```
New-CsTeamsWorkLocationDetectionPolicy [-EnableWorkLocationDetection <Boolean>] [-UserSettingsDefault <String>] [-Identity] <String> [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Creates a new instance of the TeamsWorkLocationDetectionPolicy. This policy can be used to tailor the work location detection experience.

- `EnableWorkLocationDetection`: specifies whether Microsoft Teams determines a user’s work location based on interaction with organization‑managed networks and devices. When enabled, Teams sets the user’s current work location using signals from administrator‑configured resources, such as desks or peripherals managed by the organization. This parameter does not collect or use geographic location data from users’ personal or mobile devices. Location information is used to support consistent location‑based experiences in Microsoft Teams and Microsoft 365 and is processed in accordance with the [Microsoft Privacy Statement](https://go.microsoft.com/fwlink/?LinkId=521839).

- `UserSettingsDefault`: specifies the default user consent behavior when automatic detection is enabled.
  - `Disabled` (default): Users must explicitly opt in (Ask mode).
  - `Enabled`: Automatic detection is enabled by default, and users can opt out (Inform mode).

Learn more about the [admin configuration modes](https://learn.microsoft.com/en-us/microsoft-365/places/configure-auto-detect-work-location) 

The combination of these settings determines whether automatic detection runs, which signals are active, and how users are informed.

### Behavior matrix

| EnableWorkLocationDetection | UserSettingsDefault | Automatic detection behavior |
|----------------------------|---------------------|------------------------------|
| False | Disabled | Peripheral check‑in is disabled. Wi‑Fi check‑in is disabled. |
| False | Enabled | Peripheral check‑in is disabled. Wi‑Fi check‑in is disabled. UserSettingsDefault is ignored when EnableWorkLocationDetection is set to False. |
| True | Disabled | Peripheral check‑in is enabled. Wi‑Fi check‑in is enabled and runs in **Ask mode**, meaning users must explicitly opt in before detection activates. |
| True | Enabled | Peripheral check‑in is enabled. Wi‑Fi check‑in is enabled and runs in **Inform mode**, meaning users are opted in by default and can opt out. |

### Notes on behavior

- When **EnableWorkLocationDetection** is set to **False**, automatic detection is fully disabled regardless of user defaults.
- When **EnableWorkLocationDetection** is set to **True**, **UserSettingsDefault** determines whether users experience **Ask (opt‑in)** or **Inform (opt‑out)** behavior.
- Peripheral and Wi‑Fi signals follow the same consent model and are not independently configured.
- Automatic detection applies only to **actual location** for the current working day and is cleared at the end of a user’s working hours.

The end user experience utilizing this policy has rolled out to the general public. You can see updates at [Microsoft 365 Roadmap | Microsoft 365](https://www.microsoft.com/en-us/microsoft-365/roadmap?msockid=287ab43847c06d0008cca05b46076c18&filters=&searchterms=automatically%2Cset%2Cwork%2Clocation) and to learn more on how to enable the end user experience, please see [Setting up Bookable Desks in Microsoft Teams - Microsoft Teams | Microsoft Learn.](https://learn.microsoft.com/microsoftteams/rooms/bookable-desks).

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsWorkLocationDetectionPolicy -Identity wld-policy -EnableWorkLocationDetection $true
```
```output
Identity       EnableWorkLocationDetection UserSettingsDefault
--------       --------------------------- -------------------
Tag:wld-policy                        True            Disabled
```
Creates a new policy instance with the identity wld-policy. `EnableWorkLocationDetection` is set to the value specified in the command, and `UserSettingsDefault` defaults to `Disabled`.

### Example 2
```powershell
PS C:\> New-CsTeamsWorkLocationDetectionPolicy -Identity wld-policy -UserSettingsDefault Enabled
```
```output
Identity       EnableWorkLocationDetection UserSettingsDefault
--------       --------------------------- -------------------
Tag:wld-policy                       False             Enabled
```
Creates a new policy instance with the identity wld-policy. `EnableWorkLocationDetection` defaults to `False` and `UserSettingsDefault` is set to `Enabled`.

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

### -EnableWorkLocationDetection
This setting allows your organization to collect the work location of users when they connect, interact, or are detected near your organization's networks and devices. It also captures the geographic location information users share from personal and mobile devices.
This gives users the ability to consent to the use of this location data to set their current work location.Microsoft collects this information to provide users with a consistent location-based experience and to improve the hybrid work experience in Microsoft 365 according to the [Microsoft Privacy Statement](https://go.microsoft.com/fwlink/?LinkId=521839).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSettingsDefault
Specifies the default user settings behavior for work location detection. Possible values are:

- `Enabled`: Enables the default user settings for work location detection.
- `Disabled`: Disables the default user settings for work location detection.

The default value is `Disabled`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Disabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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
Name of the new policy instance to be created.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### TeamsWorkLocationDetectionPolicy.Cmdlets.TeamsWorkLocationDetectionPolicy

## NOTES

## RELATED LINKS
[Get-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsworklocationdetectionpolicy)

[Remove-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsworklocationdetectionpolicy)

[Set-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsworklocationdetectionpolicy)

[Grant-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsworklocationdetectionpolicy)
