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
This cmdlet is used to create a new instance of the TeamsWorkLocationDetectionPolicy.

## SYNTAX

```
New-CsTeamsWorkLocationDetectionPolicy [-EnableWorkLocationDetection <Boolean>] [-Identity] <String> [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Creates a new instance of the TeamsWorkLocationDetectionPolicy. This policy can be used to tailor the work location detection experience. The parameter `EnableWorkLocationDetection` lets organizations collect the work location information of users using users plugging into hotdesks (unassigned desks) or rooms using tenant admin managed devices, using M365 in proximity of tenant managed device as MTRs, and sharing geographic geo location of mobile phone. The users can consent to use this information to set their workplace location.  The location information will be stored in the cloud and will be used for M365 hybrid work location scenarios. This information will also be used by M365 to drive analytics on workplace utilization and enhance the hybrid work experience.

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
This property lets organizations collect the work location information of users using users plugging into hotdesks (unassigned desks) or rooms using tenant admin managed devices, using M365 in proximity of tenant managed device as MTRs, and sharing geographic geo location of mobile phone. The users can consent to use this information to set their workplace location.  The location information will be stored in the cloud and will be used for M365 hybrid work location scenarios. This information will also be used by M365 to drive analytics on workplace utilization and enhance the hybrid work experience.

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
[Get-CsTeamsWorkLocationDetectionPolicy](Get-CsTeamsWorkLocationDetectionPolicy.md)

[Remove-CsTeamsWorkLocationDetectionPolicy](Remove-CsTeamsWorkLocationDetectionPolicy.md)

[Set-CsTeamsWorkLocationDetectionPolicy](Set-CsTeamsWorkLocationDetectionPolicy.md)

[Grant-CsTeamsWorkLocationDetectionPolicy](Grant-CsTeamsWorkLocationDetectionPolicy.md)
