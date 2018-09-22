 ---
external help file: 
applicable: SharePoint Online
title: Add-SPOHubSiteAssociation
schema: 2.0.0
---

# Add-SPOHubSiteAssociation

## SYNOPSIS
Associates a site with a hub site.

## SYNTAX

```
Add-SPOHubSiteAssociation [-Site] <SpoSitePipeBind> `
-HubSite <SpoHubSitePipeBind> `
[<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to associate a site with a hub site.

## EXAMPLES

### Example 1

```
Add-SPOHubSiteAssociation https://contoso.sharepoint.com/sites/Research `
-HubSite https://contoso.sharepoint.com/sites/Marketing 
```

This example associates the research site with the marketing hub site.

## PARAMETERS

### -Site

URL of the site to join to the hub site.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HubSite

URL of the hub site.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## NOTES

If the site or hub site doesn’t exist, this cmdlet returns a “File not found” error.

If the site is already a hub site, this cmdlet returns a "This site is already a HubSite" error.
