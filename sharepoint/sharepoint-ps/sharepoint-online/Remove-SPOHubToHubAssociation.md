---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Remove-SPOHubToHubAssociation
schema: 2.0.0
author: 
ms.author: 
ms.reviewer:
---

# Remove-SPOHubToHubAssociation

## SYNOPSIS

Removes the selected hub site from its parent hub.

## SYNTAX

```powershell
Remove-SPOHubToHubAssociation [-HubSite] <SpoHubSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to remove the selected hub site from its parent hub.

## EXAMPLES

### Example 1

```powershell
Remove-SPOHubToHubAssociation -HubSite https://contoso.sharepoint.com/sites/Research
```

This example removes <https://contoso.sharepoint.com/sites/Research> from its parent Hub.

## PARAMETERS

### -Hubsite

Url of the Hub site to be removed from its parent Hub.

```yaml
Type: SpoHubSitePipeBind
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES
