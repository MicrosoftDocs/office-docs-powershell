---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Remove-PnPApp

## SYNOPSIS
Removes an app from the app catalog

## SYNTAX 

```powershell
Remove-PnPApp -Identity <AppMetadataPipeBind>
              [-Scope <AppCatalogScope>]
              [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPApp -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe
```

This will remove the specified app from the tenant scoped app catalog

### ------------------EXAMPLE 2------------------
```powershell
Remove-PnPApp -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe -Scope Site
```

This will remove the specified app from the site collection scoped app catalog

## PARAMETERS

### -Identity
Specifies the Id of the Addin Instance

```yaml
Type: AppMetadataPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Scope
Defines which app catalog to use. Defaults to Tenant

```yaml
Type: AppCatalogScope
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