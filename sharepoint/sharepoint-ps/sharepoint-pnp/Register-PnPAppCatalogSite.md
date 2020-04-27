---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/register-pnpappcatalogsite
applicable: SharePoint Online
schema: 2.0.0
title: Register-PnPAppCatalogSite
---

# Register-PnPAppCatalogSite

## SYNOPSIS
Creates a new App Catalog Site and sets this site as the Tenant App Catalog

## SYNTAX 

```powershell
Register-PnPAppCatalogSite -Url <String>
                           -Owner <String>
                           -TimeZoneId <Int>
                           [-Force [<SwitchParameter>]]
                           [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Register-PnPAppCatalogSite -Url https://yourtenant.sharepoint.com/sites/appcatalog -Owner admin@domain.com -TimeZoneId 4
```

This will create a new appcatalog site if no app catalog is already present. Use -Force to create a new appcatalog site if one has already been registered. If using the same URL as an existing one and Force is present, the current/existing appcatalog site will be deleted.

## PARAMETERS

### -Force
If specified, and an app catalog is already present, a new app catalog site will be created. If the same URL is used the existing/current app catalog site will be deleted first.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Owner
The login account of the user designated to be the admin for the site, e.g. user@domain.com

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -TimeZoneId
Use Get-PnPTimeZoneId to retrieve possible timezone values

```yaml
Type: Int
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Url
The full url of the app catalog site to be created, e.g. https://yourtenant.sharepoint.com/sites/appcatalog

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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)