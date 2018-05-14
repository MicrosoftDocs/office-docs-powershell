---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Get-PnPTenantServicePrincipalPermissionGrants

## SYNOPSIS
Gets the collection of permission grants for the "SharePoint Online Client" service principal

## SYNTAX 

```powershell
Get-PnPTenantServicePrincipalPermissionGrants [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Gets the collection of permission grants for the "SharePoint Online Client" service principal.

A permission grant contains the following properties:

* ClientId: The objectId of the service principal granted consent to impersonate the user when accessing the resource(represented by the resourceId).
* ConsentType: Whether consent was provided by the administrator on behalf of the organization or whether consent was provided by an individual.The possible values are "AllPrincipals" or "Principal".
* ObjectId: The unique identifier for the permission grant.
* Resource: The resource to which access has been granted (Coming soon)
* ResourceId: The objectId of the resource service principal to which access has been granted.
* Scope: The value of the scope claim that the resource application should expect in the OAuth 2.0 access token.


## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)