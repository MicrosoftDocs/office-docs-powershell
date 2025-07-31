---
applicable: Microsoft Teams
author: ashishguptaiitb
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: prkosh
Module Name: MicrosoftTeams
ms.author: prkosh
ms.reviewer: mhayrapetyan
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsapppermissionpolicy
schema: 2.0.0
title: Get-CsTeamsAppPermissionPolicy
---

# Get-CsTeamsAppPermissionPolicy

## SYNOPSIS
As an admin, you can use app permission policies to allow or block apps for your users.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsAppPermissionPolicy [-Tenant <System.Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsAppPermissionPolicy [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION

**NOTE**: The existence of this cmdlet is being documented for completeness, but do not use this cmdlet. We require that all creation and modification of app permission polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience.

As an admin, you can use app permission policies to enable or block specific apps for your users.  Learn more about the App Setup Policies: <https://learn.microsoft.com/microsoftteams/teams-app-permission-policies>.

**This is only applicable for tenants who have not been migrated to ACM or UAM.**

## EXAMPLES

### Example 1

```powershell
Get-CsTeamsAppPermissionPolicy -Identity Global
```

```Output
Identity               : Global
DefaultCatalogApps     : {Id=26bc2873-6023-480c-a11b-76b66605ce8c, Id=0d820ecd-def2-4297-adad-78056cde7c78, Id=com.microsoft.teamspace.tab.planner}
GlobalCatalogApps      : {}
PrivateCatalogApps     : {}
Description            :
DefaultCatalogAppsType : AllowedAppList
GlobalCatalogAppsType  : AllowedAppList
PrivateCatalogAppsType : AllowedAppList
```
Get the global Teams app permission policy.

### Example 2

```powershell
Get-CsTeamsAppPermissionPolicy
```

```Output
Identity               : Global
DefaultCatalogApps     : {Id=26bc2873-6023-480c-a11b-76b66605ce8c, Id=0d820ecd-def2-4297-adad-78056cde7c78, Id=com.microsoft.teamspace.tab.planner}
GlobalCatalogApps      : {}
PrivateCatalogApps     : {}
Description            :
DefaultCatalogAppsType : AllowedAppList
GlobalCatalogAppsType  : AllowedAppList
PrivateCatalogAppsType : AllowedAppList

Identity               : Tag:test
DefaultCatalogApps     : {Id=26bc2873-6023-480c-a11b-76b66605ce8c, Id=0d820ecd-def2-4297-adad-78056cde7c78, Id=com.microsoft.teamspace.tab.planner}
GlobalCatalogApps      : {}
PrivateCatalogApps     : {}
Description            :
DefaultCatalogAppsType : AllowedAppList
GlobalCatalogAppsType  : AllowedAppList
PrivateCatalogAppsType : AllowedAppList
```
Get all the Teams app permission policies.

## PARAMETERS

### -Filter
Do not use

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Name of the app setup permission policy. If empty, all identities will be used by default.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Do not use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
