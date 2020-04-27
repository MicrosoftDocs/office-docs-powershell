---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpapp
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Add-PnPApp
---

# Add-PnPApp

## SYNOPSIS
Add/uploads an available app to the app catalog

## SYNTAX 

### Add only
```powershell
Add-PnPApp -Path <String>
           [-Scope <AppCatalogScope>]
           [-Overwrite [<SwitchParameter>]]
           [-Timeout <Int>]
           [-Connection <SPOnlineConnection>]
```

### Add and Publish
```powershell
Add-PnPApp -Path <String>
           -Publish [<SwitchParameter>]
           [-SkipFeatureDeployment [<SwitchParameter>]]
           [-Scope <AppCatalogScope>]
           [-Overwrite [<SwitchParameter>]]
           [-Timeout <Int>]
           [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPApp -Path ./myapp.sppkg
```

This will upload the specified app package to the app catalog

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPApp -Path ./myapp.sppkg -Publish
```

This will upload the specified app package to the app catalog and deploy/trust it at the same time.

### ------------------EXAMPLE 3------------------
```powershell
Add-PnPApp -Path ./myapp.sppkg -Scope Site -Publish
```

This will upload the specified app package to the site collection app catalog and deploy/trust it at the same time.

## PARAMETERS

### -Overwrite
Overwrites the existing app package if it already exists

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Path
Specifies the Id or an actual app metadata instance

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: Add only, Add and Publish

Required: True
Position: 0
Accept pipeline input: True
```

### -Publish
This will deploy/trust an app into the app catalog

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SwitchParameter
Parameter Sets: Add and Publish

Required: True
Position: Named
Accept pipeline input: False
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
Parameter Sets: Add and Publish

Required: False
Position: Named
Accept pipeline input: False
```

### -Timeout
Specifies the timeout in seconds. Defaults to 200.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)