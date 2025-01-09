---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsworklocationdetectionpolicy
schema: 2.0.0
ms.author: arkozlov
manager: prashibadkur
author: artemiykozlov
---

# New-CsTeamsWorkLocationDetectionPolicy

## SYNOPSIS
This cmdlet is used to create a new instance of the TeamsWorkLocationDetectionPolicy. The end user experience utilizing this policy has rolled out to the general public. You can see updates at [Microsoft 365 Roadmap | Microsoft 365](https://www.microsoft.com/en-us/microsoft-365/roadmap?msockid=287ab43847c06d0008cca05b46076c18&filters=&searchterms=automatically%2Cset%2Cwork%2Clocation%22https://www.microsoft.com/en-us/microsoft-365/roadmap?msockid=287ab43847c06d0008cca05b46076c18&filters=&searchterms=automatically%2cset%2cwork%2clocation%22) and to learn more on how to enable the end user experience, please see [Setting up Bookable Desks in Microsoft Teams - Microsoft Teams | Microsoft Learn.](https://learn.microsoft.com/microsoftteams/rooms/bookable-desks)

## SYNTAX

```
New-CsTeamsWorkLocationDetectionPolicy [-EnableWorkLocationDetection <Boolean>] [-Identity] <String> [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Creates a new instance of the TeamsWorkLocationDetectionPolicy. This policy can be used to tailor the work location detection experience. The parameter `EnableWorkLocationDetection` allows your organization to collect the work location of users when they connect, interact, or are detected near your organization's networks and devices. It also captures the geographic location information users share from personal and mobile devices.
This gives users the ability to consent to the use of this location data to set their current work location.Microsoft collects this information to provide users with a consistent location-based experience and to improve the hybrid work experience in Microsoft 365 according to the [Microsoft Privacy Statement](https://go.microsoft.com/fwlink/?LinkId=521839).

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsWorkLocationDetectionPolicy -Identity wld-enabled -EnableWorkLocationDetection $true
```
```output
Identity                 EnableWorkLocationDetection
--------                 ----------------------
Tag:wld-enabled                            True
```
Creates a new policy instance with the identity wld-enabled. `EnableWorkLocationDetection` is set to the value specified in the command.

### Example 2
```powershell
PS C:\> New-CsTeamsWorkLocationDetectionPolicy -Identity wld-disable
```
```output
Identity                 EnableWorkLocationDetection
--------                 ----------------------
Tag:wld-disable                            False
```
Creates a new policy instance with the identity wld-disable. `EnableWorkLocationDetection` will default to false if it is not specified.

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
[Get-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsworklocationdetectionpolicy)

[Remove-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsworklocationdetectionpolicy)

[Set-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsworklocationdetectionpolicy)

[Grant-CsTeamsWorkLocationDetectionPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsworklocationdetectionpolicy)
