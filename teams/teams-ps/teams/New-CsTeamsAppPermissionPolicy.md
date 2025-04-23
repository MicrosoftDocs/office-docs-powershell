---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsapppermissionpolicy
applicable: Microsoft Teams
title: New-CsTeamsAppPermissionPolicy
schema: 2.0.0
ms.reviewer: mhayrapetyan
manager: prkosh
ms.author: prkosh
author: ashishguptaiitb
---

# New-CsTeamsAppPermissionPolicy

## SYNOPSIS

**NOTE**: The existence of this cmdlet is being documented for completeness, but do not use this cmdlet. We require that all creation and modification of app permission polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience. This cmdlet is not supported for tenants that migrated to app centric management feature as it replaced permission policies. While the cmdlet may succeed, the changes aren't applied to the tenant.

As an admin, you can use app permission policies to allow or block apps for your users. Learn more about the app permission policies at <https://learn.microsoft.com/microsoftteams/teams-app-permission-policies> and about app centric management at <https://learn.microsoft.com/microsoftteams/app-centric-management>.

**This is only applicable for tenants who have not been migrated to ACM or UAM.**

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

As an admin, you can use app permission policies to enable or block specific apps for your users. Learn more about the App Setup Policies: <https://learn.microsoft.com/microsoftteams/teams-app-permission-policies>.

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
