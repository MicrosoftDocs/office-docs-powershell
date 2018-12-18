---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Revoke-SPOHubSiteRights
schema: 2.0.0
---

# Revoke-SPOHubSiteRights

## SYNOPSIS
Revokes rights for specified principals to a hub.

## SYNTAX

```
Revoke-SPOHubSiteRights [-Identity] <SpoHubSitePipeBind> -Principals
    <string[]>  [<CommonParameters>]
```

## DESCRIPTION
Revokes rights for specified principals to the given hub site. The specified principals will no longer be able to associate sites with the hub. To find which principals have access to a hub site, use the [Get-SPOHubSite](Get-SPOHubSite.md) cmdlet.

If the hub site doesn’t exist, this cmdlet returns a “File not found” error.

## EXAMPLES

### Example 1

```
Revoke-SPOHubSiteRights https://contoso.sharepoint.com/sites/Marketing `
-Principals "nestorw@contoso.onmicrosoft.com"
```

This example shows how to revoke rights so that Nestor can no longer join sites to the Marketing hub site.

## PARAMETERS

### -Identity

URL of the hub site.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: HubSite
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Principals

One or more principles to add permissions for.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
