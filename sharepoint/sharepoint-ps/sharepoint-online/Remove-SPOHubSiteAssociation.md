---
external help file: 
applicable: SharePoint Online
title: Remove-SPOHubSiteAssociation
schema: 2.0.0
---

# Remove-SPOHubSiteAssociation

## SYNOPSIS
Removes a site from its associated hub site.

## SYNTAX

```
Remove-SPOHubSiteAssociation [-Site] <SpoSitePipeBind>
[<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to remove an association between a site and a hub site.

If the site or hub site doesn’t exist, this cmdlet returns a “File not found” error.

## EXAMPLES

### Example 1

```
Remove-SPOHubSiteAssociation https://contoso.sharepoint.com/sites/Research
```

This example removes the research site from the marketing hub site.

## PARAMETERS

### -Site

URL of the site to remove from the hub site.

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
