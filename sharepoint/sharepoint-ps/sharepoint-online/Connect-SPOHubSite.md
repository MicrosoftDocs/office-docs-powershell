---
external help file: 
applicable: SharePoint Online
title: Connect-SPOHubSite
schema: 2.0.0
---

# Connect-SPOHubSite

## SYNOPSIS
Connects a site to a hub site.

## SYNTAX

```
Connect-SPOHubSite [-Site] <SpoSitePipeBind> `
-HubSite <SpoHubSitePipeBind> `
[<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to connect a site to a hub site.

If the site or hub site doesn’t exist, this cmdlet returns a “File not found” error.

## EXAMPLES

### Example 1

```
Connect-SPOHubSite https://contoso.sharepoint.com/sites/Research `
-HubSite https://contoso.sharepoint.com/sites/Marketing 
```

This example connects the research site with the marketing hub.

## PARAMETERS

### -Site

URL of the site to join to the hub.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
