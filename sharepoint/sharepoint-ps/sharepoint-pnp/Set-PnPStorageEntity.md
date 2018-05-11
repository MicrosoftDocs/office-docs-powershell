---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Set-PnPStorageEntity

## SYNOPSIS
Set Storage Entities / Farm Properties in either the tenant scoped app catalog or the site collection app catalog.

## SYNTAX 

```powershell
Set-PnPStorageEntity -Key <String>
                     -Value <String>
                     [-Comment <String>]
                     [-Description <String>]
                     [-Scope <StorageEntityScope>]
                     [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPStorageEntity -Key MyKey -Value "MyValue" -Comment "My Comment" -Description "My Description"
```

Sets an existing or adds a new storage entity / farm property at tenant level.

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPStorageEntity -Scope Site -Key MyKey -Value "MyValue" -Comment "My Comment" -Description "My Description"
```

Sets an existing or adds a new storage entity site collection level.

## PARAMETERS

### -Comment
The comment to set.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Description
The description to set.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Key
The key of the value to set.

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

### -Value
The value to set.

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