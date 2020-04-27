---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spotheme
applicable: SharePoint Online
title: Remove-SPOTheme
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Remove-SPOTheme

## SYNOPSIS

Removes a theme from the theme gallery.

## SYNTAX

```powershell
Remove-SPOTheme [-Identity] <SpoThemePipeBind> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The **Remove-SPOTheme** cmdlet removes a theme from your tenant store.

## EXAMPLES

### Example 1

This example removes the `"Custom Cyan"` theme that was used in the previous examples for the **Add-SPOTheme** and **Get-SPOTheme** cmdlets.

```powershell
Remove-SPOTheme -Name "Custom Cyan"
```

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

### -Identity

{{ Fill Identity Description }}

```yaml
Type: SpoThemePipeBind
Parameter Sets: (All)
Aliases: Name

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
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
