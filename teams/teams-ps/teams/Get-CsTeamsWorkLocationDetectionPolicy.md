---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsworklocationdetectionpolicy
schema: 2.0.0
ms.author: arkozlov
manager: prashibadkur
author: artemiykozlov
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
Fetches instances of TeamsWorkLocationDetectionPolicy. Each policy object contains a property called `EnableWorkLocationDetection`. This property lets organizations collect the work location information of users using users plugging into hotdesks (unassigned desks) or rooms using tenant admin managed devices, using M365 in proximity of tenant managed device as MTRs, and sharing geographic geo location of mobile phone. The users can consent to use this information to set their workplace location.  The location information will be stored in the cloud and will be used for M365 hybrid work location scenarios. This information will also be used by M365 to drive analytics on workplace utilization and enhance the hybrid work experience.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsWorkLocationDetectionPolicy
```
```output
Identity            EnableWorkLocationDetection                                                                          
--------                 ----------------------                                                                          
Global                                     False
Tag:wld-enabled                            True
Tag:wld-disabled                           False
```
Fetches all the policy instances currently available.

### Example 2
```powershell
PS C:\> Get-CsTeamsWorkLocationDetectionPolicy -Identity wld-enabled
```
```output
Identity            EnableWorkLocationDetection                                                                          
--------                 ----------------------                                                                          
Tag:wld-enabled                            True
```
Fetches an instance of a policy with a known identity.

### Example 3
```powershell
PS C:\> Get-CsTeamsWorkLocationDetectionPolicy -Filter *wld*
```
```output
Identity            EnableWorkLocationDetection                                                                          
--------                 ----------------------                                                                          
Tag:wld-enabled                            True
Tag:wld-disabled                          False
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
[New-CsTeamsWorkLocationDetectionPolicy](New-CsTeamsWorkLocationDetectionPolicy.md)

[Remove-CsTeamsWorkLocationDetectionPolicy](Remove-CsTeamsWorkLocationDetectionPolicy.md)

[Set-CsTeamsWorkLocationDetectionPolicy](Set-CsTeamsWorkLocationDetectionPolicy.md)

[Grant-CsTeamsWorkLocationDetectionPolicy](Grant-CsTeamsWorkLocationDetectionPolicy.md)
