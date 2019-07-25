---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Invoke-SPOSiteSwap
schema: 2.0.0
author: WayneEwington
ms.author: waynewin
ms.reviewer:
---

# Invoke-SPOSiteSwap

## SYNOPSIS
Invokes a job to swap the location of a site with another site while archiving the original site.


## SYNTAX
```Powershell
Invoke-SPOSiteSwap
    -SourceUrl <string>
    -TargetUrl <string>
    -ArchiveUrl <string>
    [<CommonParameters>]
```


## DESCRIPTION
Swaps the location of a source site with a target site while archiving the original target site.

When the swap is initiated, the target site is moved to the archive location and the source site is moved to the target location. 

You must use the SharePoint Admin PowerShell version 16.0.8812.1200 or later.

Use of this cmdlet is subject to the rollout of this capability.

If the target is the root site at https://tenant-name.sharepoint.com, then the following preparation activities should be performed prior to performing the swap:
1. Any Featured links defined in SharePoint Start Page at https://tenant-name.sharepoint.com/_layouts/15/sharepoint.aspx will not be displayed after performing the swap. If required, the Featured links should be documented so they can be manually recreated after the swap. 
2. Functionality such as external sharing and application interfaces are dependent on the policies and permissions defined at the root site. Review the source site to ensure that it has the required policies and permissions as per the existing root site. This includes external sharing settings as well as site permissions.

The source or target sites cannot be "associated" with an Office 365 Group or a Hub Site.
- If the site is "associated" to a Hub Site, then the association can be removed, the swap performed, and the Hub Site re-associated after performing the swap.

    

## EXAMPLES

### EXAMPLE 1
```powershell
Invoke-SPOSiteSwap -SourceUrl https://contoso.sharepoint.com/sites/CommunicationSite -TargetUrl https://contoso.sharepoint.com -ArchiveUrl https://contoso.sharepoint.com/sites/Archive
```
Archives the existing site at https://contoso.sharepoint.com to https://contoso.sharepoint.com/sites/Archive and moves https://contoso.sharepoint.com/sites/CommunicationSite to https://contoso.sharepoint.com.

### EXAMPLE 2
```powershell
Invoke-SPOSiteSwap -SourceUrl https://contoso.sharepoint.com/sites/SearchSite -TargetUrl https://contoso.sharepoint.com/search -ArchiveUrl https://contoso.sharepoint.com/sites/Archive
```
Archives the existing Search Center site at https://contoso.sharepoint.com/search to https://contoso.sharepoint.com/sites/Archive and moves the https://contoso.sharepoint.com/sites/SearchSite to https://contoso.sharepoint.com/search.


## PARAMETERS

### -SourceUrl
URL of the source site. The site at this location must exist before performing the swap.

If the target is the root site at https://tenant-name.sharepoint.com then the source site must be either a Team Site (STS#0), a Modern Team Site (STS#3), or a Communication Site (SITEPAGEPUBLISHING#0).

If the target is the search center site at https://tenant-name.sharepoint.com/search then the source site must be either a Search Center Site (SRCHCEN#0) or a Basic Search Center Site (SRCHCENTERLITE#0).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetUrl
URL of the target site that the source site will be swapped to. The site at this location must exist before performing the swap.

The target site must be the either:
- The root site at https://tenant-name.sharepoint.com; or
- The search center site at https://tenant-name.sharepoint.com/search.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveUrl
URL that the target site will be archived to. There should be no existing site, including a deleted site in the Recycle Bin, at this location before performing the swap.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).



## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

