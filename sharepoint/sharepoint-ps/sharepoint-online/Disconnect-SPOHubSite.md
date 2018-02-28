---
external help file: 
applicable: SharePoint Online
title: Disconnect-SPOHubSite
schema: 2.0.0
---

# Disconnect-SPOHubSite

## SYNOPSIS
Disconnects a site from a hub site.

## SYNTAX

```
Disconnect-SPOHubSite [-Site] <SpoSitePipeBind>
[<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to disconnect a site from a hub site. The site will no longer be associated with the hub site.

If the site or hub site doesn’t exist, this cmdlet returns a “File not found” error.

## EXAMPLES

### Example 1

```
Disconnect-SPOHubSite https://contoso.sharepoint.com/sites/Research
```

This example disconnects the research site from the marketing hub site.

## PARAMETERS

### -Site

URL of the site to disconnect from the hub site.

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
