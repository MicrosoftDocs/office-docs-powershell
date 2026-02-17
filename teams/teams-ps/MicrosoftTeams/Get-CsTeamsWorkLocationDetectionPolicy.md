---
author: artemiykozlov
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: prashibadkur
Module Name: MicrosoftTeams
ms.author: arkozlov
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsworklocationdetectionpolicy
schema: 2.0.0
title: Get-CsTeamsWorkLocationDetectionPolicy
---

# Get-CsTeamsWorkLocationDetectionPolicy

## SYNOPSIS
This cmdlet is used to fetch policy instances of TeamsWorkLocationDetectionPolicy.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsWorkLocationDetectionPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsWorkLocationDetectionPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
Fetches instances of TeamsWorkLocationDetectionPolicy. Each policy object contains the following properties:

-  `EnableWorkLocationDetection`: specifies whether Microsoft Teams determines a user’s work location based on interaction with organization‑managed networks and devices. When enabled, Teams sets the user’s current work location using signals from administrator‑configured resources, such as desks or peripherals managed by the organization. This parameter does not collect or use geographic location data from users’ personal or mobile devices. Location information is used to support consistent location‑based experiences in Microsoft Teams and Microsoft 365 and is processed in accordance with the [Microsoft Privacy Statement](https://go.microsoft.com/fwlink/?LinkId=521839). 

- `UserSettingsDefault`: Specifies the default user consent behavior when automatic detection is enabled and only applies to WiFi, and has no impact on device-based detection.
  - `Disabled` (default): Users must explicitly opt in (Ask mode).
  - `Enabled`: Automatic detection is enabled by default, and users can opt out (Inform mode).

Learn more about the [admin configuration modes](https://learn.microsoft.com/en-us/microsoft-365/places/configure-auto-detect-work-location) 

The combination of these settings determines whether automatic detection runs, which signals are active, and how users are informed.

### Behavior matrix

| EnableWorkLocationDetection | UserSettingsDefault | Automatic detection behavior |
|----------------------------|---------------------|------------------------------|
| False | (ignored) | Peripheral and Wi-Fi check-in are disabled. UserSettingsDefault is ignored. |
| True | Disabled | Peripheral and Wi-Fi check‑in are enabled. Wi‑Fi check‑in runs in **Ask mode**, meaning users will be asked to opt in before detection activates. |
| True | Enabled | Peripheral and Wi‑Fi check‑in are enabled. Wi-Fi check-in runs in **Inform mode**, meaning Wi-Fi based detection is on by default and users can opt out. |
| False | Enabled | Peripheral check‑in is disabled. Wi‑Fi check‑in is disabled. UserSettingsDefault is ignored when EnableWorkLocationDetection is set to False. |

### Notes on behavior

- When **EnableWorkLocationDetection** is set to **False**, automatic detection is fully disabled regardless of user defaults.
- When **EnableWorkLocationDetection** is set to **True**, **UserSettingsDefault** determines whether users experience **Ask (opt‑in)** or **Inform (opt‑out)** behavior.
- Peripheral and Wi‑Fi signals follow the same consent model and are not independently configured.
- Automatic detection applies only to **actual location** for the current working day and is cleared at the end of a user’s working hours.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsWorkLocationDetectionPolicy
```
```output
Identity            EnableWorkLocationDetection UserSettingsDefault
--------            --------------------------- -------------------
Global                                    False            Disabled
Tag:wld-policy1                            True             Enabled
Tag:wld-policy2                           False            Disabled
```
Fetches all the policy instances currently available.

### Example 2
```powershell
PS C:\> Get-CsTeamsWorkLocationDetectionPolicy -Identity wld-policy1
```
```output
Identity            EnableWorkLocationDetection UserSettingsDefault
--------            --------------------------- -------------------
Tag:wld-policy1                            True             Enabled
```
Fetches an instance of a policy with a known identity.

### Example 3
```powershell
PS C:\> Get-CsTeamsWorkLocationDetectionPolicy -Filter *wld*
```
```output
Identity            EnableWorkLocationDetection UserSettingsDefault
--------            --------------------------- -------------------
Tag:wld-policy1                            True             Enabled
Tag:wld-policy2                           False            Disabled
```
The `Filter` parameter can be used to fetch policy instances based on partial matches on Identity.

Note: _The "Tag:" prefix can be ignored when specifying the identity._

## PARAMETERS

### -Filter
This parameter can be used to fetch policy instances based on partial matches on the Identity field.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
This parameter can be used to fetch a specific instance of the policy.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
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
[New-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsworklocationdetectionpolicy)

[Remove-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsworklocationdetectionpolicy)

[Set-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsworklocationdetectionpolicy)

[Grant-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsworklocationdetectionpolicy)
