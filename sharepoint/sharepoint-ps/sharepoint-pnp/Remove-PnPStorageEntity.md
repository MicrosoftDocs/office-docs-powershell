---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Remove-PnPStorageEntity

## SYNOPSIS
Remove Storage Entities / Farm Properties from either the tenant scoped app catalog or the current site collection if the site has a site collection scoped app catalog

## SYNTAX 

```powershell
Remove-PnPStorageEntity -Key <String>
                        [-Scope <StorageEntityScope>]
                        [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPStorageEntity -Key MyKey 
```

Removes an existing storage entity / farm property

### ------------------EXAMPLE 2------------------
```powershell
Remove-PnPStorageEntity -Key MyKey -Scope Site
```

Removes an existing storage entity from the current site collection

## PARAMETERS

### -Key
The key of the value to remove.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Scope
Defines the scope of the storage entity. Defaults to Tenant.

```yaml
Type: StorageEntityScope
Parameter Sets: (All)

Required: False
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