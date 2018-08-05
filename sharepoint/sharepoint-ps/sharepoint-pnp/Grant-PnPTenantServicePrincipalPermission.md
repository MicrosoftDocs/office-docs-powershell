---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Grant-PnPTenantServicePrincipalPermission

## SYNOPSIS
Explicitely grants a specified permission to the "SharePoint Online Client" service principal

## SYNTAX 

```powershell
Grant-PnPTenantServicePrincipalPermission -Scope <String>
                                          -Resource <String>
                                          [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Grant-PnPTenantServicePrincipalPermission -Scope "Group.Read.All" -Resource "Microsoft Graph"
```

This will explicitely grant the Group.Read.All permission on the Microsoft Graph resource

## PARAMETERS

### -Resource
The resource to grant the permission for

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Scope
The scope to grant the permission for

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### OfficeDevPnP.Core.ALM.AppMetadata

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)