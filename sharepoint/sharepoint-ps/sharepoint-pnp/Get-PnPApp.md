---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpapp
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
---

# Get-PnPApp

## SYNOPSIS
Returns the available apps from the app catalog

## SYNTAX

```powershell
Get-PnPApp [-Identity <AppMetadataPipeBind>]
           [-Scope <AppCatalogScope>]
           [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPApp
```

This will return all available apps from the tenant app catalog. It will list the installed version in the current site.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPApp -Scope Site
```

This will return all available apps from the site collection scoped app catalog. It will list the installed version in the current site.

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPApp -Identity 2646ccc3-6a2b-46ef-9273-81411cbbb60f
```

This will retrieve the specific app from the app catalog.

## PARAMETERS

### -Identity
Specifies the Id of an app which is available in the app catalog

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: AppMetadataPipeBind
Parameter Sets: (All)

Required: False
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

### List<OfficeDevPnP.Core.ALM.AppMetadata>

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
