---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/set-spomultigeoexperience
applicable: SharePoint Online
title: Set-SPOMultiGeoExperience
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Set-SPOMultiGeoExperience

## SYNOPSIS

.

## SYNTAX

```powershell
 Set-SPOMultiGeoExperience [-AllInstances] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to set a get location into SPO mode. This upgrade action is not reversible. For more information see [Enabling SharePoint Multi-Geo in your satellite geo location](https://docs.microsoft.com/office365/enterprise/enabling-sp-multigeo-satellite-geolocation)

## EXAMPLES

### Example 1

```powershell
Set-SPOMultiGeoExperience
```

This example will upgrade your instance's multi-geo experience to include SharePoint Online Multi-Geo. This operation usually takes about an hour while we perform various publish backs in the service and re-stamp your tenant.

## PARAMETERS

### -AllInstances

.

```yaml
Type: SwitchParameter
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
