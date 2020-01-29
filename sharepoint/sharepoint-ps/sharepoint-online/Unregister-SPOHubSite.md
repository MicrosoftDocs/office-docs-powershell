---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/unregister-spohubsite
applicable: SharePoint Online
title: Unregister-SPOHubSite
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Unregister-SPOHubSite

## SYNOPSIS

Disables the hub site feature on a site.

## SYNTAX

```powershell
Unregister-SPOHubSite [-Identity] <SpoHubSitePipeBind> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Disables the hub site feature on a site so that it is no longer a hub site. Associated sites may still appear associated for up to an hour. If you want to speed up the process, use the Remove-SPOHubSiteAssociation cmdlet to remove the associates sites first.

> [!NOTE]
> If the site doesn't exist, this cmdlet returns a "File not found" error.

## EXAMPLES

### Example 1

```powershell
Unregister-SPOHubSite -Identity <guid>
```

This example removes a site from the hub site list based on unique hub identifier (<guid>).

### Example 2

```powershell
Unregister-SPOHubSite -Identity https://contoso.sharepoint.com/sites/Marketing
```

This example disables the hub feature on the marketing site.

## PARAMETERS

### -Identity

Guid based identifier or URL of the site to disable the hub site feature. If hub site has been already deleted, you will need to use a Guid based identifier to remove the site from the list of hub sites.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).
