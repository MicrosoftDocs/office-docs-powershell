---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/add-spohubtohubassociation
applicable: SharePoint Online
title: Add-SPOHubToHubAssociation
schema: 2.0.0
author:
ms.author:
ms.reviewer:
---

# Add-SPOHubToHubAssociation

## SYNOPSIS

Associates a hub site to a hub site.

## SYNTAX

```powershell
Add-SPOHubToHubAssociation [-Source] <SpoHubSitePipeBind> -Target <SpoHubSitePipeBind> [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to associate a hub site to a hub site.

## EXAMPLES

### Example 1

```powershell
Add-SPOHubToHubAssociation -Source https://contoso.sharepoint.com/sites/Research -Target https://contoso.sharepoint.com/sites/ResearchAndDevelopment
```

This example associates the source hub site 'Research' with the target hub site 'ResearchAndDevelopment'.

## PARAMETERS

### -Source

Source Hub site to be associated with the Target Hub Site.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Target

Target Hub to associate the source Hub to.

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES
