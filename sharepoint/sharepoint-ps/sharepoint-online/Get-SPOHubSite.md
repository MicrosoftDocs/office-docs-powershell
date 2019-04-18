---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Get-SPOHubSite
schema: 2.0.0
author: vesajuvonen
ms.author: vesaj
ms.reviewer:
---

# Get-SPOHubSite

## SYNOPSIS
Lists hub sites or hub site information.

## SYNTAX

```
Get-SPOHubSite [-Identity] <SpoHubSitePipeBind>
[<CommonParameters>]
```

## DESCRIPTION
Lists all hub sites found on the SharePoint tenant. If you provide **-Identity** the cmdlet returns detailed information about the specific hub. You can find which hub a site is associated with by providing the site's identity with this cmdlet.

If the hub site doesn’t exist, this cmdlet returns a “File not found” error.

> [!NOTE]
> If a deleted hub site appears in the output of this cmdlet you may not have run [Unregister-SPOHubSite](https://docs.microsoft.com/powershell/module/sharepoint-online/unregister-spohubsite) on the deleted hub site.

## EXAMPLES

### Example 1

```
Get-SPOHubSite
```

This example lists all hub sites in the tenant.

### Example 2

```
Get-SPOHubSite https://contoso.sharepoint.com/sites/online-marketing

ID                   : 44252d09-62c4-4913-9eb0-a2a8b8d7f863
Title                : Marketing Hub
SiteId               : 44252d09-62c4-4913-9eb0-a2a8b8d7f863
SiteUrl              : https://contoso.sharepoint.com/sites/Marketing
LogoUrl              : https://contoso.sharepoint.com/sites/Marketing/SiteAssets/hublogo.png
Description          : Hub for the Marketing division
Permissions          : {Wilke, Nestor}
SiteDesignId         : 00000000-0000-0000-0000-000000000000
RequiresJoinApproval : False
```

This example begins with the online-marketing site. The cmdlet finds the associated hub site, which is marketing. Then it lists all the details about the marketing hub site.

## PARAMETERS

### -Identity

URL of the hub site. If not specified, the cmdlet lists all hub sites in the tenant.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
