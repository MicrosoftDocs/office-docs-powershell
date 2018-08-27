---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Install-PnPApp

## SYNOPSIS
Installs an available app from the app catalog

## SYNTAX 

```powershell
Install-PnPApp -Identity <AppMetadataPipeBind>
               [-Scope <AppCatalogScope>]
               [-Wait [<SwitchParameter>]]
               [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Install-PnPApp -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe
```

This will install an app that is available in the tenant scoped app catalog, specified by the id, to the current site.

### ------------------EXAMPLE 2------------------
```powershell
Install-PnPApp -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe -Scope Site
```

This will install an app that is available in the site collection scoped app catalog, specified by the id, to the current site.

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPAvailableApp -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe | Install-PnPApp
```

This will install the given app from the tenant scoped app catalog into the site.

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPAvailableApp -Identity 99a00f6e-fb81-4dc7-8eac-e09c6f9132fe -Scope Site | Install-PnPApp
```

This will install the given app from the site collection scoped app catalog into the site.

## PARAMETERS

### -Identity
Specifies the Id or an actual app metadata instance

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

### -Wait
If specified the execution will pause until the app has been installed in the site.

```yaml
Type: SwitchParameter
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