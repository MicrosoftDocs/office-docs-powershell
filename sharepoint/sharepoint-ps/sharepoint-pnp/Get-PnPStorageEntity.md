---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Get-PnPStorageEntity

## SYNOPSIS
Retrieve Storage Entities / Farm Properties from either the Tenant App Catalog or from the current site if it has a site scope app catalog.

## SYNTAX 

```powershell
Get-PnPStorageEntity [-Key <String>]
                     [-Scope <StorageEntityScope>]
                     [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPStorageEntity
```

Returns all site storage entities/farm properties

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPStorageEntity -Key MyKey
```

Returns the storage entity/farm property with the given key.

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPStorageEntity -Scope Site
```

Returns all site collection scoped storage entities

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPStorageEntity -Key MyKey -Scope Site
```

Returns the storage entity from the site collection with the given key

## PARAMETERS

### -Key
The key of the value to retrieve.

```yaml
Type: String
Parameter Sets: (All)

Required: False
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