---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Set-SPOHomeSite
schema: 2.0.0
author: 
ms.author: 
ms.reviewer:
---

# Set-SPOHomeSite

## SYNOPSIS

Sets the SharePoint Online Home Site.

## SYNTAX

```powershell
Set-SPOHomeSite -HomeSiteUrl <string> [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to set the SharePoint Online Home Site.

## EXAMPLES

### Example 1

```powershell
Set-SPOHomeSite -HomeSiteUrl "https://contoso.sharepoint.com/sites/homesite"
```

This example set the site collection at *<https://contoso.sharepoint.com/sites/homesite>* as SharePoint Online Home Site.

## PARAMETERS

### -HomeSiteUrl

The Url of the site collection to be the home site.

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES
