---
author: artemiykozlov
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: prashibadkur
Module Name: MicrosoftTeams
ms.author: arkozlov
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsworklocationdetectionpolicy
schema: 2.0.0
title: Set-CsTeamsWorkLocationDetectionPolicy
---

# Set-CsTeamsWorkLocationDetectionPolicy

## SYNOPSIS
This cmdlet is used to update an instance of TeamsWorkLocationDetectionPolicy. This policy can be used to tailor the [Automatic Update of work location](https://learn.microsoft.com/en-us/microsoft-365/places/configure-auto-detect-work-location) experience in Microsoft Teams. When the EnableWorkLocationDetection parameter is enabled, a user’s work location is updated based on their interaction with organization‑managed networks and devices, such as desks or peripherals configured by IT administrators. To learn how to configure desks to certain work location, please see [Configure buildings and floors - Microsoft Places | Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-365/places/get-started/quick-setup-buildings-floors).

Microsoft processes this information in accordance with the [Microsoft Privacy Statement](https://go.microsoft.com/fwlink/?LinkId=521839) to provide a consistent location‑based experience and support hybrid work scenarios in Microsoft 365.

## SYNTAX

```
Set-CsTeamsWorkLocationDetectionPolicy [-EnableWorkLocationDetection <Boolean>] [-UserSettingsDefault <String>] [-Identity] <String> [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Updates any of the properties of an existing instance of TeamsWorkLocationDetectionPolicy.

## EXAMPLES

### Example 1

```powershell
PS> Set-CsTeamsWorkLocationDetectionPolicy -Identity ExistingPolicyInstance -EnableWorkLocationDetection $true
```

Updates the `EnableWorkLocationDetection` field of a given policy.

### Example 2

```powershell
PS> Set-CsTeamsWorkLocationDetectionPolicy -Identity ExistingPolicyInstance -UserSettingsDefault Enabled
```

Updates the `UserSettingsDefault` field of a given policy to `Enabled`.

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
This parameter specifies whether Microsoft Teams determines a user’s work location based on interaction with organization‑managed networks and devices. When enabled, users' work location gets updated using signals from administrator‑configured resources, such as desks or peripherals managed by the organization. This parameter does not collect or use geographic location data from users’ personal or mobile devices. Location information is used to support consistent location‑based experiences in Microsoft Teams and Microsoft 365 and is processed in accordance with the [Microsoft Privacy Statement](https://go.microsoft.com/fwlink/?LinkId=521839).
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
This parameter specifies the default user consent behavior when automatic update of work location is enabled and only applies to WiFi, and has no impact on device-based detection.
  - `Disabled` (default): Users must explicitly opt in (Ask mode).
  - `Enabled`: Automatic update is enabled by default, and users can opt out (Inform mode).

Learn more about the [admin configuration modes](https://learn.microsoft.com/en-us/microsoft-365/places/configure-auto-detect-work-location).

The combination of these settings determines whether automatic update runs, which signals are active, and how users are informed.

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
Name of the new policy instance to be updated.

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

### System.Void

## NOTES

## RELATED LINKS
[Get-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsworklocationdetectionpolicy)

[New-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsworklocationdetectionpolicy)

[Remove-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsworklocationdetectionpolicy)

[Grant-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsworklocationdetectionpolicy)
