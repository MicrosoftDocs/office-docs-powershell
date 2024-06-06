---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsupdatemanagementpolicy
applicable: Microsoft Teams
title: Get-CsTeamsUpdateManagementPolicy
schema: 2.0.0
author: vargasj-ms
ms.author: vargasj
manager: gnamun
---

# Get-CsTeamsUpdateManagementPolicy

## SYNOPSIS
Use this cmdlet to retrieve the current Teams Update Management policies in the organization.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsUpdateManagementPolicy [[-Identity] <String>] [-ProgressAction <ActionPreference>]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsUpdateManagementPolicy [-Filter <String>] [-ProgressAction <ActionPreference>] [<CommonParameters>]
```

## DESCRIPTION
Retrieves the current Teams Update Management policies in the organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsUpdateManagementPolicy
```

In this example, we retrieve all the existing Teams Update Management policies in the organization.

## PARAMETERS

### -Identity
The unique identifier of the policy.

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

### None

## OUTPUTS

### TeamsUpdateManagementPolicy.Cmdlets.TeamsUpdateManagementPolicy

## NOTES

## RELATED LINKS
