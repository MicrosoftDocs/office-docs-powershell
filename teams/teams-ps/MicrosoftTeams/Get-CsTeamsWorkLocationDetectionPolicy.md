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
Fetches instances of TeamsWorkLocationDetectionPolicy. Each policy object contains a property called `EnableWorkLocationDetection`. This setting allows your organization to collect the work location of users when they connect, interact, or are detected near your organization's networks and devices. It also captures the geographic location information users share from personal and mobile devices.
This gives users the ability to consent to the use of this location data to set their current work location.Microsoft collects this information to provide users with a consistent location-based experience and to improve the hybrid work experience in Microsoft 365 according to the [Microsoft Privacy Statement](https://go.microsoft.com/fwlink/?LinkId=521839).

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsWorkLocationDetectionPolicy
```
```output
Identity            EnableWorkLocationDetection
--------                 ----------------------
Global                                     False
Tag:wld-policy1                            True
Tag:wld-policy2                           False
```
Fetches all the policy instances currently available.

### Example 2
```powershell
PS C:\> Get-CsTeamsWorkLocationDetectionPolicy -Identity wld-policy1
```
```output
Identity            EnableWorkLocationDetection
--------                 ----------------------
Tag:wld-policy1                            True
```
Fetches an instance of a policy with a known identity.

### Example 3
```powershell
PS C:\> Get-CsTeamsWorkLocationDetectionPolicy -Filter *wld*
```
```output
Identity            EnableWorkLocationDetection
--------                 ----------------------
Tag:wld-policy1                            True
Tag:wld-policy2                           False
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
