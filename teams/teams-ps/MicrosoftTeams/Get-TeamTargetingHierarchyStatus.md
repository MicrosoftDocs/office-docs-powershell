---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/get-teamtargetinghierarchystatus
schema: 2.0.0
title: Get-TeamTargetingHierarchyStatus
---
# Get-TeamTargetingHierarchyStatus

## SYNOPSIS

Get the status of a hierarchy upload (see [Set-TeamTargetingHierarchy](https://learn.microsoft.com/powershell/module/teams/set-teamtargetinghierarchy))

## SYNTAX

### Get (Default)
```
Get-TeamTargetingHierarchyStatus [-RequestId <String>] [-ApiVersion <String>] [<CommonParameters>]
```

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-TeamTargetingHierarchy -FilePath d:\hier.csv

Key       Value
---       -----
requestId c67e86109d88479e9708c3b7e8ff7217

PS C:\> Get-TeamTargetingHierarchyStatus -RequestId c67e86109d88479e9708c3b7e8ff7217

# When an error occurs, you will see the details in the ErrorMessage field.

Id              : c67e86109d88479e9708c3b7e8ff7217
Status          : Failed
LastKnownStatus : Validating
ErrorMessage    : 1 error(s) were found.
                  Error: InvalidTeamId
                  Descriptions:
                  TeamID in row 2 doesn't match a valid Group ID. Please view our documentation to learn how to get the proper Group ID for each team.
                  TeamID in row 3 doesn't match a valid Group ID. Please view our documentation to learn how to get the proper Group ID for each team.
                  TeamID in row 4 doesn't match a valid Group ID. Please view our documentation to learn how to get the proper Group ID for each team.
                  TeamID in row 5 doesn't match a valid Group ID. Please view our documentation to learn how to get the proper Group ID for each team.
                  TeamID in row 6 doesn't match a valid Group ID. Please view our documentation to learn how to get the proper Group ID for each team.
                  TeamID in row 7 doesn't match a valid Group ID. Please view our documentation to learn how to get the proper Group ID for each team.

LastUpdatedAt   : 2021-02-17T22:28:08.7832795+00:00
LastModifiedBy  : a145d7eb-b70d-4591-9455-6c87382a22b7
FileName        : hier1.csv

# When the hierarchy uploads and parses successfully, you will see this status.

Id              : c67e86109d88479e9708c3b7e8ff7217
Status          : Successful
LastKnownStatus :
ErrorMessage    :
LastUpdatedAt   : 2021-02-17T22:48:41.6664097+00:00
LastModifiedBy  : a145d7eb-b70d-4591-9455-6c87382a22b7
FileName        : hier.csv
```

Prompts for user credentials to connect and manage a Microsoft Teams environment.

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

### -RequestId
Specifies the ID returned by the Set-TeamTargetingHierarchy cmdlet. This parameter is optional and the status of the most recent upload will be retrieved.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-TeamTargetingHierarchy](https://learn.microsoft.com/powershell/module/teams/set-teamtargetinghierarchy)
