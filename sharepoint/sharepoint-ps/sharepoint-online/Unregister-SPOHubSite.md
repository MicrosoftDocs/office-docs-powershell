---
external help file: 
applicable: SharePoint Online
title: Unregister-SPOHubSite
schema: 2.0.0
---

# Unregister-SPOHubSite

## SYNOPSIS
Disables the hub site feature on a site.

## SYNTAX

```
Unregister-SPOHubSite [-Identity] <SpoHubSitePipeBind>
[-WhatIf] [-Confirm]
[<CommonParameters>]
```

## DESCRIPTION
Disables the hub site feature on a site so that it is no longer a hub site. Associated sites may still appear associated for up to an hour. If you want to speed up the process, use the Remove-SPOHubSiteAssociation cmdlet to remove the associates sites first.

> [!IMPORTANT]
> This cmdlet is currently in preview and is subject to change. It is not currently supported for use in production environments.

If the site doesn’t exist, this cmdlet returns a “File not found” error.

## EXAMPLES

### Example 1

```
Unregister-SPOHubSite https://contoso.sharepoint.com/sites/Marketing
```

This example disables the hub feature on the marketing site.

## PARAMETERS

### -Identity

URL of the site to disable the hub site feature.

```yaml
Type: SpoHubSitePipeBind
Parameter Sets: (All)
Aliases: HubSite
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

Shows what would happen if the cmdlet runs. The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
