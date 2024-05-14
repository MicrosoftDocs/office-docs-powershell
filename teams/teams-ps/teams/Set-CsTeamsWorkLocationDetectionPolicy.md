---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsworklocationdetectionpolicy
schema: 2.0.0
ms.author: arkozlov
manager: prashibadkur
author: artemiykozlov
---

# Set-CsTeamsWorkLocationDetectionPolicy

## SYNOPSIS
This cmdlet is used to update an instance of TeamsWorkLocationDetectionPolicy.

## SYNTAX

```
Set-CsTeamsWorkLocationDetectionPolicy [-EnableWorkLocationDetection <Boolean>] [-Identity] <String> [-Force]
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
[Get-CsTeamsWorkLocationDetectionPolicy](Get-CsTeamsWorkLocationDetectionPolicy.md)

[New-CsTeamsWorkLocationDetectionPolicy](New-CsTeamsWorkLocationDetectionPolicy.md)

[Remove-CsTeamsWorkLocationDetectionPolicy](Remove-CsTeamsWorkLocationDetectionPolicy.md)

[Grant-CsTeamsWorkLocationDetectionPolicy](Grant-CsTeamsWorkLocationDetectionPolicy.md)
