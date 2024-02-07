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
This property lets organizations collect the work location information of users using users plugging into hotdesks (unassigned desks) or rooms using tenant admin managed devices, using M365 in proximity of tenant managed device as MTRs, and sharing geographic geo location of mobile phone. The users can consent to use this information to set their workplace location.  The location information will be stored in the cloud and will be used for M365 hybrid work location scenarios.  This information will also be used by M365 to drive analytics on workplace utilization and enhance the hybrid work experience.

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
