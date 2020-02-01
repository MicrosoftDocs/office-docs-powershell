---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/set-spomultigeocompanyalloweddatalocation
applicable: SharePoint Online
title: Set-SPOMultiGeoCompanyAllowedDataLocation
schema: 2.0.0
author:
ms.author:
ms.reviewer:
---

# Set-SPOMultiGeoCompanyAllowedDataLocation

## SYNOPSIS

Adds a multi-geo allowed location.

## SYNTAX

```powershell
Set-SPOMultiGeoCompanyAllowedDataLocation [-Location] <string> [-InitialDomain] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to set the multi-geo allowed locations.

## EXAMPLES

### Example 1

```powershell
Set-SPOMultiGeoCompanyAllowedDataLocation -Location AUS -Domain contoso.com
```

Sets AUS (Australia) as an allowed multi-geo location for the domain contoso.com.

## PARAMETERS

### -Location

The Preferred Data Location (PDL) to allow.

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

### -InitialDomain

Sets the initial domain to assocate with the specified data location.

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

[Remove-SPOMultiGeoCompanyAllowedDataLocation](Remove-SPOMultiGeoCompanyAllowedDataLocation.md)
