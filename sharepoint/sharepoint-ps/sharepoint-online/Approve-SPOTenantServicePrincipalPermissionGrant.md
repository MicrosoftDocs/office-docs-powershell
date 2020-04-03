---
external help file:
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/approve-spotenantserviceprincipalpermissiongrant
applicable: SharePoint Online
title: Approve-SPOTenantServicePrincipalPermissionGrant
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Approve-SPOTenantServicePrincipalPermissionGrant

## SYNOPSIS

Approves a permission request for the current tenant's "SharePoint Online Client" service principal.

## SYNTAX

### Default

```powershell
Approve-SPOTenantServicePrincipalPermissionGrant -Resource <string> -Scope <string>
```

## DESCRIPTION

Adds a permission for the current tenant's "SharePoint Online Client" service principal. Can be used to add needed permissions to the service principal without specifically requesting them in the SharePoint Framework solution file (sppkg).

## EXAMPLES

### ------------------EXAMPLE 1------------------

```powershell
    Approve-SPOTenantServicePrincipalPermissionGrant -Resource "Microsoft Graph" -Scope "Mail.Read"
```

Adds a permission scope for the 'Microsoft Graph' resource with scope claim 'Mail.Read'.

## PARAMETERS

### -Resource

Resource of the permission request to add.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scope

Scope of the permission request to add.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
