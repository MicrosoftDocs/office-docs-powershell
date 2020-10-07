---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spomultigeocompanyalloweddatalocation
applicable: SharePoint Online
title: Remove-SPOMultiGeoCompanyAllowedDataLocation
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Remove-SPOMultiGeoCompanyAllowedDataLocation

## SYNOPSIS

Use this cmdlet to remove a multi geo allowed location.

## SYNTAX

```powershell
Remove-SPOMultiGeoCompanyAllowedDataLocation [-Location] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Removes a specified multi-geo location that was previously allowed by [Set-SPOMultiGeoCompanyAllowedDataLocation](Set-SPOMultiGeoCompanyAllowedDataLocation.md).

## EXAMPLES

### Example 1

```powershell
Remove-SPOMultiGeoCompanyAllowedDataLocation -Location AUS
```
Removes AUS (Australia) as an allowed mutli-geo location.

## PARAMETERS

### -Location

The Preferred Data Location (PDL) to remove.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## NOTES

## RELATED LINKS

[Set-SPOMultiGeoCompanyAllowedDataLocation](Set-SPOMultiGeoCompanyAllowedDataLocation.md)
