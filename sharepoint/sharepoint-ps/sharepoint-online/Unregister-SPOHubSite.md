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
Disables the hub site feature on a site so that it is no longer a hub. 

If the site or hub site doesn’t exist, this cmdlet returns a “File not found” error.

## EXAMPLES

### Example 1

```
Unregister-SPOHubSite https://contoso.sharepoint.com/sites/Marketing
```

This example disables the hub feature on the marketing site.

## PARAMETERS

### -Site

URL of the site to disable the hub site feature.

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
