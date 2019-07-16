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
This command starts a rename of a site on a SharePoint Online site into a new title, name and url. Also allows you to simulate the run using the -WhatIf parameter as well as -SuppressWorkflow2013Check and SuppressMarketplaceAppCheck switch parameters.

When the swap is initiated, the target site is moved to the archive location and the source site is moved to the target location. 

You must use the SharePoint Admin PowerShell version 16.0.8812.1200 or later.

Use of this cmdlet is subject to the rollout of this capability.

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
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewSiteUrl
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: Default
Applicable: SharePoint Online

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewSiteTitle
URL of the source site. The site at this location must exist before performing the swap.
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetUrl
URL of the target site that the source site will be swapped to. The site at this location must exist before performing the swap.
PARAMVALUE: SwitchParameter


```yaml
Type: String
Parameter Sets: 
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
PARAMVALUE: SwitchParameter


```yaml
Type: SwitchParameter
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

