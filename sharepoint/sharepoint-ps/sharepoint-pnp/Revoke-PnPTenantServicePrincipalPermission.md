---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Revoke-PnPTenantServicePrincipalPermission

## SYNOPSIS
Revokes a permission that was previously granted to the "SharePoint Online Client" service principal.

## SYNTAX 

```powershell
Revoke-PnPTenantServicePrincipalPermission -ObjectId <String>
                                           [-Force [<SwitchParameter>]]
                                           [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Revokes a permission that was previously granted to the "SharePoint Online Client" service principal.

## PARAMETERS

### -Force
Specifying the Force parameter will skip the confirmation question.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ObjectId


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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)