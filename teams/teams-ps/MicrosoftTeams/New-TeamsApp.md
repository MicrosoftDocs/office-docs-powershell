---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-teamsapp
schema: 2.0.0
title: New-TeamsApp
---

# New-TeamsApp

## SYNOPSIS
Creates a new app in the Teams tenant app store.

## SYNTAX

```
New-TeamsApp -DistributionMethod <String> -Path <String> [<CommonParameters>]
```

## DESCRIPTION
Use a Teams app manifest zip file to upload an app to the tenant app store. DistributionMethod specifies that the app should be added to the organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-TeamsApp -DistributionMethod organization -Path c:\Path\SampleApp.zip
```

## PARAMETERS

### -DistributionMethod
The type of app in Teams: global or organization. For LOB apps, use "organization"

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

### -Path
The local path of the app manifest zip file, for use in New and Set

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
