---
external help file: 
applicable: SharePoint Online
title: Get-SPOHubSite
schema: 2.0.0
---

# Get-SPOHubSite

## SYNOPSIS
Lists hub sites or hub site information.

## SYNTAX

```
Set-SPOHubSite [-Identity] <SpoHubSitePipeBind>
[-Title <string>]
[-LogoUrl <string>]
[-Description <string>]
[<CommonParameters>]
```

## DESCRIPTION
Lists all hub sites found on the SharePoint tenant. If you provide **-Identity** the cmdlet returns detailed information about the specific hub.

If the hub site doesn’t exist, this cmdlet returns a “File not found” error.

## EXAMPLES

### Example 1

```
Get-SPOHubSite
```

This example lists all hub sites in the tenant.

### Example 2

```
Get-SPOHubSite https://contoso.sharepoint.com/sites/Research

ID          : 44252d09-62c4-4913-9eb0-a2a8b8d7f863
Title       : Marketing Hub
SiteId      : 44252d09-62c4-4913-9eb0-a2a8b8d7f863
SiteUrl     : https://contoso.sharepoint.com/sites/Marketing
LogoUrl     : https://contoso.sharepoint.com/sites/Marketing/SiteAssets/hublogo.png
Description : Hub for the Marketing division
Rights     : nestorw@contoso.onmicrosoft.com
```

This example provides property information about the research hub site.

## PARAMETERS

### -Identity

URL of the hub site. If not specified, the cmdlet lists all site hubs in the tenant.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
