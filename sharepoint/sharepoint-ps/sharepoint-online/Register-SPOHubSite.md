---
external help file: 
applicable: SharePoint Online
title: Register-SPOHubSite
schema: 2.0.0
---

# Register-SPOHubSite

## SYNOPSIS
Enables the hub site feature on a site to make it a hub site.


## SYNTAX

```
Register-SPOHubSite [-Site] <SpoSitePipeBind>  [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to register an existing site collection as a hub site. If the site doesn’t exist, the cmdlet returns a "File not found" error.

If the site doesn’t exist, this cmdlet returns a “File not found” error.

## EXAMPLES

### Example 1

```
Register-SPOHubSite https://contoso.sharepoint.com/sites/Marketing
```

This example registers the marketing site on Contoso as hub site.

## PARAMETERS

### -Site
Specifies the URL of the site collection to which to enable the hub site features.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
