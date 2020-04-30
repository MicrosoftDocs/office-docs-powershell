---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnporgnewssite
applicable: SharePoint Online
schema: 2.0.0
title: Add-PnPOrgNewsSite
---

# Add-PnPOrgNewsSite

## SYNOPSIS
Adds the site as an organization news source in your tenant

## SYNTAX 

```powershell
Add-PnPOrgNewsSite -OrgNewsSiteUrl <SitePipeBind>
                   [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPOrgNewsSite -OrgNewsSiteUrl https://yourtenant.sharepoint.com/sites/news
```

Adds the site as one of multiple possible tenant's organizational news sites

## PARAMETERS

### -OrgNewsSiteUrl
The url of the site to be marked as one of organization's news sites

```yaml
Type: SitePipeBind
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