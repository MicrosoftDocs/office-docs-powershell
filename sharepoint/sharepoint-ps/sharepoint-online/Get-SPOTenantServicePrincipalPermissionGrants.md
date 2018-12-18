---
external help file: sharepointonline.xml
applicable: SharePoint Online
schema: 2.0.0
---

# Get-SPOTenantServicePrincipalPermissionGrants

## SYNOPSIS

Gets the collection of permission grants for the "SharePoint Online Client" service principal

## SYNTAX

### Default
```powershell
Get-SPOTenantServicePrincipalPermissionGrants
```

## DESCRIPTION
Gets the collection of permission grants for the "SharePoint Online Client" service principal.

A permission grant contains the following properties:

- ClientId: The objectId of the service principal granted consent to impersonate the user when accessing the resource (represented by the resourceId).

- ConsentType: Whether consent was provided by the administrator on behalf of the organization or whether consent was provided by an individual. The possible values are "AllPrincipals" or "Principal".

- ObjectId: The unique identifier for the permission grant.

- _(Coming soon)_ Resource: The resource to which access has been granted.

- ResourceId: The objectId of the resource service principal to which access has been granted.

- Scope: The value of the scope claim that the resource application should expect in the OAuth 2.0 access token.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-SPOTenantServicePrincipalPermissionGrants
```

Gets the collection of permission grants for the "SharePoint Online Client" service principal.
