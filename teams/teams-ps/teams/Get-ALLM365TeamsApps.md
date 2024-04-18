---
external help file: Microsoft.Teams.PowerShell.TeamsCmdlets.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/Get-ALLM365TeamsApps
applicable: Microsoft Teams
title: Get-ALLM365TeamsApps
author: satishtimiri
ms.author: satishtimiri
manager: rahulrgupta
schema: 2.0.0
---

# Get-AllM365TeamsApps

## SYNOPSIS

This cmdlet returns all M365 Teams apps in the app catalog, including Microsoft, custom and third-party apps. 

## SYNTAX

```
Get-AllM365TeamsApps [<CommonParameters>]
```

## DESCRIPTION
Get-AllM365TeamsApps retrieves a complete list of all M365 Teams apps in an organization, its status and availability information. 

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-AllM365TeamsApps
```
Returns a complete list of all M365 Teams apps in an organization, its status and availability information. 

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
- Id – Application ID of M365 Teams app 
- IsBlocked – The state of the app in the tenant. Values are: Blocked or Unblocked
- AvailableTo: Provides available to properties for the app. 
- Properties of AvailableTo:
    - AssignmentType – App availability type. Values are: Everyone, UsersandGroups, Noone
    - LastUpdatedTimestamp: Time and date when the app AvailableTo value was last updated
    - AssignedBy: UserID of last user who updated the app available to value. 
## NOTES

## RELATED LINKS
[Get-M365TeamsApps](Get-M365TeamsApps.md)

[Update-M365TeamsApp](Update-M365TeamsApp.md)
