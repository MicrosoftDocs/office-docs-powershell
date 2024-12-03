---
external help file: Microsoft.Teams.PowerShell.TeamsCmdlets.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/Get-ALLM365TeamsApps
applicable: Microsoft Teams
title: Get-ALLM365TeamsApps
author: lkueter
ms.author: sribagchi
manager: rahulrgupta
ms.date: 04/24/2024
schema: 2.0.0
---

# Get-AllM365TeamsApps

## SYNOPSIS

This cmdlet returns all Microsoft Teams apps in the app catalog, including Microsoft, custom, and non-Microsoft apps.

## SYNTAX

```powershell
Get-AllM365TeamsApps [<CommonParameters>]
```

## DESCRIPTION

Get-AllM365TeamsApps retrieves a complete list of all Teams apps in an organization, their statuses, and their availability information.

## EXAMPLES

### Example 1

```powershell
PS C:\> Get-AllM365TeamsApps
```

Returns a complete list of all Teams apps in an organization, their statuses, and their availability information.

### Example 2

```powershell
PS C:\> Get-AllM365TeamsApps | Select-Object -Property Id, IsBlocked, AvailableTo -ExpandProperty AvailableTo
```

Returns a complete list of all Teams apps in an organization, their statuses, and their availability information in expanded format.

### Example 3

```powershell
PS C:\> Get-AllM365TeamsApps | Select-Object -Property Id, IsBlocked, AvailableTo, InstalledFor -ExpandProperty InstalledFor
```

Returns a complete list of all Teams apps in an organization, their statuses, their availability and their installation information in expanded format.

## PARAMETERS

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

**Id**
Application ID of the Teams app.

**IsBlocked**
The state of the app in the tenant.
Values:

- Blocked
- Unblocked

**AvailableTo**
Provides available to properties for the app.
Properties:

- AssignmentType: App availability type.
  Values:
  - Everyone
  - UsersandGroups
  - Noone
- LastUpdatedTimestamp: Time and date when the app AvailableTo value was last updated.
- AssignedBy: UserID of the last user who updated the app available to value.

**InstalledFor**
Provides installation status for the app.
Properties:

- AppInstallType: App availability type.
  Values:
  - Everyone
  - UsersandGroups
  - Noone
- LastUpdatedTimestamp: Time and date when the app AvailableTo value was last updated.
- InstalledBy: UserID of the last user who installed the app available to value.
- InstalledSource: Source of Installation
- Version: Version of the app installed

## NOTES

## RELATED LINKS

[Get-M365TeamsApp](https://learn.microsoft.com/powershell/module/teams/get-m365teamsapp)
[Update-M365TeamsApp](https://learn.microsoft.com/powershell/module/teams/get-m365teamsapp)
