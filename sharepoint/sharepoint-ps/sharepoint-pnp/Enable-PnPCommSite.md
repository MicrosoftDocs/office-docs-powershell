---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/enable-pnpcommsite
applicable: SharePoint Online
schema: 2.0.0
---
# Enable-PnPCommSite

## SYNOPSIS
Enable communication site on the root site of a tenant

## SYNTAX

```powershell
Enable-PnPCommSite [-SiteUrl <String>]
                   [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
The Enable-PnPCommSite cmdlet converts the root site of a tenant to be a communication site. This action is not reversible.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Enable-PnPCommSite
```

This will convert the root site collection to become a communication site

### ------------------EXAMPLE 2------------------
```powershell
Enable-PnPCommSite -SiteUrl https://tenant.sharepoint.com
```

This will convert the root site collection to become a communication site

## PARAMETERS

### -SiteUrl
Specifies the full URL of the new site collection. It must be in a valid managed path in the company's site. For example, for company contoso, valid managed paths are https://contoso.sharepoint.com/sites and https://contoso.sharepoint.com/teams.

```yaml
Type: String
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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
