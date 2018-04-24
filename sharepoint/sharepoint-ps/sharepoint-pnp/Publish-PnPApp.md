---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Publish-PnPApp

## SYNOPSIS
Publishes/Deploys/Trusts an available app in the app catalog

## SYNTAX 

```powershell
Publish-PnPApp -Identity <AppMetadataPipeBind>
               [-SkipFeatureDeployment [<SwitchParameter>]]
               [-Scope <AppCatalogScope>]
               [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Publish-PnPApp -Identity -Identity 2646ccc3-6a2b-46ef-9273-81411cbbb60f
```

This will deploy/trust an app into the app catalog. Notice that the app needs to be available in the tenant scoped app catalog

### ------------------EXAMPLE 2------------------
```powershell
Publish-PnPApp -Identity -Identity 2646ccc3-6a2b-46ef-9273-81411cbbb60f -Scope Site
```

This will deploy/trust an app into the app catalog. Notice that the app needs to be available in the site collection scoped app catalog

## PARAMETERS

### -Identity
Specifies the Id of the app

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

### -SkipFeatureDeployment


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