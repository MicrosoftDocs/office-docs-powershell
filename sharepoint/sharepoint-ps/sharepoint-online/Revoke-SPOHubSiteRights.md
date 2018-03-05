---
external help file: 
applicable: SharePoint Online
title: Revoke-SPOHubSiteRights
schema: 2.0.0
---

# Revoke-SPOHubSiteRights

## SYNOPSIS
Revokes rights for specified principals to a hub.

## SYNTAX

```
Revoke-SPOHubSiteRights [-Identity] <SpoHubSitePipeBind> -Principals
    <string[]>  [<CommonParameters>]
```

## DESCRIPTION
Revokes rights for specified principals to the given hub site. The specified principals will no longer be able to associate sites with the hub. To find which principals have access to a hub site, use the [Get-SPOHubSite](Get-SPOHubSite.md) cmdlet.

> [!IMPORTANT] This cmdlet is currently in preview and is subject to change. It is not currently supported for use in production environments.

If the hub site doesn’t exist, this cmdlet returns a “File not found” error.

## EXAMPLES

### Example 1

```
Revoke-SPOHubSiteRights https://contoso.sharepoint.com/sites/Marketing `
-Principals "nestorw@contoso.onmicrosoft.com"
```

This example shows how to revoke rights so that Nestor can no longer join sites to the Marketing hub site.

## PARAMETERS

### -SiteUrl

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

### -Principals

One or more principles to add permissions for.

```yaml
Type: String[]
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
