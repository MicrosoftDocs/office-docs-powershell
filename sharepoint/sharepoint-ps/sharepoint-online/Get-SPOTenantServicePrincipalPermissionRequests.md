---
external help file: sharepointonline.xml
applicable: SharePoint Online
schema: 2.0.0
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

