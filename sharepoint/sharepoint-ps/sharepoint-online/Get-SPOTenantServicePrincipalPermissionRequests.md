---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spotenantserviceprincipalpermissionrequests
applicable: SharePoint Online
title: Get-SPOTenantServicePrincipalPermissionRequests
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOTenantServicePrincipalPermissionRequests

## SYNOPSIS

Gets the collection of permission requests for the "SharePoint Online Client" service principal

## SYNTAX

### Default

```powershell
Get-SPOTenantServicePrincipalPermissionRequests
```

## DESCRIPTION

Gets the collection of permission requests for the "SharePoint Online Client" service principal.

Permission request object

A permission request contains the following properties:

- Id: The identifier of the request.

- Resource: The resource that the application requires access to.

- Scope: The value of the scope claim that the resource application should expect in the OAuth 2.0 access token.

## EXAMPLES

### ------------------EXAMPLE 1------------------

```powershell
Get-SPOTenantServicePrincipalPermissionRequests
```

Gets the collection of permission requests for the "SharePoint Online Client" service principal.
