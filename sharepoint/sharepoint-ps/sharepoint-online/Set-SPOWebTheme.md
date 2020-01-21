---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Set-SPOWebTheme
schema: 2.0.0
author: 
ms.author: 
ms.reviewer:
---

# Set-SPOWebTheme

## SYNOPSIS

Sets the theme for a SharePoint site.

## SYNTAX

```powershell
Set-SPOWebTheme [-Theme] <SpoThemePipeBind> [-Web] <SpoSitePipeBind> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to set the custom theme for a Site

## EXAMPLES

### Example 1

```
 Set-SPOWebTheme -Theme "Custom cyan" -Web https://contoso.sharepoint.com/sites/Contoso1
```

This example sets the "Custom Cyan" theme to the https://contoso.sharepoint.com/sites/Contoso1 site

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Theme
Name of the theme or SPOTheme object

```yaml
Type: SpoThemePipeBind
Parameter Sets: (All)
Aliases: Identity, Name

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Web
Url of the site

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Online.SharePoint.PowerShell.SpoThemePipeBind

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
