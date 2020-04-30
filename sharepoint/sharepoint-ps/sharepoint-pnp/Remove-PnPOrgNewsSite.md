---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnporgnewssite
applicable: SharePoint Online
schema: 2.0.0
title: Remove-PnPOrgNewsSite
---

# Remove-PnPOrgNewsSite

## SYNOPSIS
Removes a given site from the list of organizational news sites.

## SYNTAX 

```powershell
Remove-PnPOrgNewsSite -OrgNewsSiteUrl <SitePipeBind>
                      [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Removes a given site from the list of organizational news sites based on its URL in your Sharepoint Online Tenant.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPOrgNewsSite -OrgNewsSiteUrl https://tenant.sharepoint.com/sites/mysite
```

This example removes the specified site from list of organization's news sites.

## PARAMETERS

### -OrgNewsSiteUrl
The site to be removed from list of organization's news sites

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