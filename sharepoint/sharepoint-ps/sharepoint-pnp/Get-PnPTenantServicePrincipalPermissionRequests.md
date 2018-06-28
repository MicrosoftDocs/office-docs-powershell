---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Get-PnPTenantServicePrincipalPermissionRequests

## SYNOPSIS
Gets the collection of permission requests for the "SharePoint Online Client" service principal

## SYNTAX 

```powershell
Get-PnPTenantServicePrincipalPermissionRequests [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Gets the collection of permission requests for the "SharePoint Online Client" service principal.

Permission request object

A permission request contains the following properties:

* Id: The identifier of the request.
* Resource: The resource that the application requires access to.
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