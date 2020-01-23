---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/disable-spotenantserviceprincipal
applicable: SharePoint Online
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Disable-SPOTenantServicePrincipal

## SYNOPSIS

Disables the current tenant's "SharePoint Online Client" service principal.

## SYNTAX

```powershell
Disable-SPOTenantServicePrincipal
```

## DESCRIPTION
Disables the current tenant's "SharePoint Online Client" service principal.

When the service principal's account is disabled, clients and components that use this service principal
will not be able to request an access token for this service principal.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Disable-SPOTenantServicePrincipal
```

Disables the current tenant's "SharePoint Online Client" service principal.
