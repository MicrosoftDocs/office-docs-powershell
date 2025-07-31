---
applicable: Microsoft Teams
author: michelle-paradis
external help file: Microsoft.Teams.PowerShell.TeamsCmdlets.dll-Help.xml
Locale: en-US
manager: swmerchant
Module Name: MicrosoftTeams
ms.author: mparadis
ms.date: 01/14/2025
online version: https://docs.microsoft.com/powershell/module/teams/Get-M365UnifiedCustomPendingApps
schema: 2.0.0
title: Get-M365UnifiedCustomPendingApps
---

# Get-M365UnifiedCustomPendingApps

## SYNOPSIS

This cmdlet returns all custom Microsoft Teams apps that are pending review from an IT Admin.

## SYNTAX

```
Get-M365UnifiedCustomPendingApps [<CommonParameters>]
```

## DESCRIPTION

Get-M365UnifiedCustomPendingApps retrieves a complete list of all custom Microsoft Teams apps that are pending review, and their review statuses.

## EXAMPLES

### Example 1

```powershell
PS C:\> Get-M365UnifiedCustomPendingApps
```

Returns a complete list of all custom Microsoft Teams apps that are pending review, and their review statuses.

## PARAMETERS

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

- **Id**: Application ID of the Teams app.
- **ExternalId**: External ID of the Teams app.
- **Iteration**: The Staged App Definition Etag of the app. This is a unique tag created every time
  the staged app is updated, to help track changes.
- **CreatedBy**: The User ID of the user that created the app.
- **LastUpdateDateTime**: The date and time the app was last updated.
- **ReviewStatus**: The review status of the app. Values:
  - PendingPublishing: A new custom app was requested that hasn't been published before.
  - PendingUpdate: An existing custom app that was previously published and now has an update.
- **Metadata**: The metadata of the app.

## NOTES

## RELATED LINKS
