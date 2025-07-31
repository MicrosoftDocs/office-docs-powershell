---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/connect-microsoftteams
schema: 2.0.0
title: Remove-TeamTargetingHierarchy
---
# Remove-TeamTargetingHierarchy

## SYNOPSIS

Removes the tenant's hierarchy.

## SYNTAX

### Remove (Default)
```
Remove-TeamTargetingHierarchy [-ApiVersion <String>] [<CommonParameters>]
```

## DESCRIPTION
Removes the tenant's hierarchy.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-TeamTargetingHierarchy
```

## PARAMETERS

### -ApiVersion
The version of the Hierarchy APIs to use. Valid values are: 1 or 2.

Currently only available in preview from version 6.6.1-preview. Specifying "-ApiVersion 2" will direct cmdlet requests to the newer version of the Hierarchy APIs. This integration is currently in preview/beta mode so customers should not try it on their production workloads but are welcome to try it on test workloads. This is an optional parameter and not specifying it will be interpreted as specifying "-ApiVersion 1", which will continue to direct cmdlet requests to the original version of the Hierarchy APIs until we upgrade production to v2, at which time we will set the default to 2. We do not expect this to have any impact on your cmdlet usage or existing scripts.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 1
Accept pipeline input: false
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-TeamTargetingHierarchy](https://learn.microsoft.com/powershell/module/teams/set-teamtargetinghierarchy)
