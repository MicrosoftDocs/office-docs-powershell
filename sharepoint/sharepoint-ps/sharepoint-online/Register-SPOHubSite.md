---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Register-SPOHubSite
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Register-SPOHubSite

## SYNOPSIS

Enables the hub site feature on a site to make it a hub site. For more information visit [SharePoint hub sites overview](https://docs.microsoft.com/sharepoint/dev/features/hub-site/hub-site-overview).

## SYNTAX

```powershell
Register-SPOHubSite
  -Site <SpoSitePipeBind>  
  -Principals <string[]>
  [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to register an existing site collection as a hub site.

> [!IMPORTANT]
> A maximum of 2000 hub sites may be created per tenant, with 'unlimited' number of site collections associated to a hub site.
> [!NOTE]
> It can take up to 2-4 hours for the changes to appear.

## EXAMPLES

### Example 1

```powershell
Register-SPOHubSite https://contoso.sharepoint.com/sites/Marketing  -Principals $null
```

This example registers the marketing site on Contoso as hub site without setting any principals for it.

## PARAMETERS

### -Site

Specifies the URL of the site collection to which to enable the hub site features.

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

### -Principals

Specifies One or more principles (user or group) to be granted rights to the specified HubSite. Can be used to filter who can associate sites to this hub site.

```yaml
Type: string[]
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

If the site doesn’t exist, this cmdlet returns a “File not found” error.

If the site is already a hub site, this cmdlet returns a "This site is already a HubSite" error.

If the site is already associated with another hub site, this cmdlet returns a "This site is currently associated with a HubSite" error. You'll need to run the [Remove-SPOHubSiteAssociation](Remove-SPOHubSiteAssociation.md) cmdlet first before you can make the site a hub site.
