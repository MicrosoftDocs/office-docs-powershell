---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/connect-microsoftteams
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---
# Set-TeamTargetingHierarchy

## SYNOPSIS

Upload a hierarchy to the tenant. A tenant may only have 1 active hierarchy. Each Set-TeamTargetingHierarchy cmdlet call will overwrite the previous one.

## SYNTAX

### Get (Default)
```
Set-TeamTargetingHierarchyStatus [-FilePath <String>] [-ApiVersion <String>] [<CommonParameters>]
```

## DESCRIPTION

A sample CSV file uses the following format:

`TargetName,ParentName,TeamId,Location:Clothing,Location:Jewelry,#Bucket1,#Bucket2`<br>`Apogee,,A8A6626F-87B3-4B8A-9469-47BCD1174673,0,0`<br>`New Jersey,Apogee,06763207-4F56-4DFE-96AE-4C7F9ADCFB43,0,0`<br>`Basking Ridge,NewJersey,5F44CC65-9521-4F7F-9099-64320153CA07,1,0`<br>`Mountain Lakes,NewJersey,58A21379-8E4D-4DA5-AA35-9CC188D8A998,0,1`

Based on the CSV file, the following hierarchy is created:

- Apogee
- &nbsp;&nbsp;&nbsp;New Jersey
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Basking Ridge
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mountain Lakes

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-TeamTargetingHierarchy -FilePath d:\hier.csv

Key       Value
---       -----
requestId c67e86109d88479e9708c3b7e8ff7217
```

## PARAMETERS

### -FilePath
Specifies the path to a CSV file that defines the hierarchy.

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

[Get-TeamTargetingHierarchyStatus](https://learn.microsoft.com/powershell/module/teams/get-teamtargetinghierarchystatus)
