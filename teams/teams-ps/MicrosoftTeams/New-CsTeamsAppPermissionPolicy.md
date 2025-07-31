---
applicable: Microsoft Teams
author: ashishguptaiitb
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: prkosh
Module Name: MicrosoftTeams
ms.author: prkosh
ms.reviewer: mhayrapetyan
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsapppermissionpolicy
schema: 2.0.0
title: New-CsTeamsAppPermissionPolicy
---

# New-CsTeamsAppPermissionPolicy

## SYNOPSIS
As an admin, you can use app permission policies to allow or block apps for your users.

## SYNTAX

```
New-CsTeamsAppPermissionPolicy [[-Identity] <String>]
 [-Confirm]
 [-DefaultCatalogApps <DefaultCatalogApp[]>]
 [-DefaultCatalogAppsType <String>]
 [-Description <String>]
 [-Force]
 [-GlobalCatalogApps <GlobalCatalogApp[]>]
 [-GlobalCatalogAppsType <String>]
 [-InMemory]
 [-PrivateCatalogApps <PrivateCatalogApp[]>]
 [-PrivateCatalogAppsType <String>]
 [-Tenant <Object>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
**NOTE**: The existence of this cmdlet is being documented for completeness, but do not use this cmdlet. We require that all creation and modification of app permission polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience.
While the cmdlet may succeed, the changes aren't applied to the tenant.

As an admin, you can use app permission policies to enable or block specific apps for your users. Learn more about the App Setup Policies: <https://learn.microsoft.com/microsoftteams/teams-app-permission-policies>.

**This is only applicable for tenants who have not been migrated to ACM or UAM.**

## EXAMPLES

### Example 1
Intentionally omitted.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
