---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/publish-pnpapp
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Publish-PnPApp
---

# Publish-PnPApp

## SYNOPSIS
Publishes/Deploys/Trusts an available app in the app catalog

## SYNTAX 

```powershell
Publish-PnPApp -Identity <AppMetadataPipeBind>
               [-SkipFeatureDeployment [<SwitchParameter>]]
               [-Scope <AppCatalogScope>]
               [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Publish-PnPApp -Identity 2646ccc3-6a2b-46ef-9273-81411cbbb60f
```

This will deploy/trust an app into the app catalog. Notice that the app needs to be available in the tenant scoped app catalog

### ------------------EXAMPLE 2------------------
```powershell
Publish-PnPApp -Identity 2646ccc3-6a2b-46ef-9273-81411cbbb60f -Scope Site
```

This will deploy/trust an app into the app catalog. Notice that the app needs to be available in the site collection scoped app catalog

## PARAMETERS

### -Identity
Specifies the Id of the app

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: AppMetadataPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Scope
Defines which app catalog to use. Defaults to Tenant

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: AppCatalogScope
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -SkipFeatureDeployment


Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)