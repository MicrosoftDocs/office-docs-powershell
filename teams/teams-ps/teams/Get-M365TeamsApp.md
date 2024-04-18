---
external help file: Microsoft.Teams.PowerShell.TeamsCmdlets.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/Get-M365TeamsApp
applicable: Microsoft Teams
title: Get-M365TeamsApp
author: satishtimiri
ms.author: satishtimiri
manager: rahulrgupta
schema: 2.0.0
---

# Get-M365TeamsApp

## SYNOPSIS

This cmdlet returns app availability and state for M365 Teams app.

## SYNTAX

```
Get-M365TeamsApp -Id <String> [<CommonParameters>]
```

## DESCRIPTION
Get-M365TeamsApps retrieves information about M365 Teams app. This includes app state, app availability, user who updated app availability and the associated timestamp.  

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-M365TeamsApp -Id b782e2e8-9682-4898-b211-a304714f4f6b
```

Provides information about b782e2e8-9682-4898-b211-a304714f4f6b app which includes app state, app availability, user who updated app availability and the associated timestamp.

## PARAMETERS

### -Id

Application ID of M365 Teams app 

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
- ID – Application ID of M365 Teams app.

- IsBlocked – The state of the app in the tenant. Values are: Blocked or Unblocked.

- AvailableTo - Provides available to properties for the app. 

- Properties of AvailableTo:
    - AssignmentType – App availability type. Values are: Everyone, UsersandGroups, Noone
    - Users:
        - List of all the users for whom the app is enabled:
            -Id – GUID of UserIDs 
            -AssignedBy – UserID of last user who updated the app AvailableTo value
            -LastUpdatedTimeStamp – Time and date when the app AvailableTo value was last updated
    -Groups:
        - List of all the groups for whom the app is enabled:
            -Id – GUID of GroupIDs 
            -AssignedBy – UserID of last user who updated the app available to value
            -LastUpdatedTimeStamp – Time and date when the app AvailableTo value was last updated
## NOTES

## RELATED LINKS

[Get-ALLM365TeamsApps](Get-ALLM365TeamsApps.md)

[Update-M365TeamsApp](Update-M365TeamsApp.md)
