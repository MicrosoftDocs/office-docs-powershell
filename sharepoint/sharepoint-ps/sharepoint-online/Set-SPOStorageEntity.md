---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Set-SPOStorageEntity
schema: 2.0.0
author: 
ms.author: 
ms.reviewer:
---

# Set-SPOStorageEntity

## SYNOPSIS

Tenant properties allow tenant administrators to add properties in the app catalog that can be read by various SharePoint Framework components. Because tenant properties are stored in the tenant app catalog, you must provide the tenant app catalog site collection URL or the site collection app catalog URL in the following cmdlets.
This cmdLet is used to set a value in the property bag.

## SYNTAX

```powershell
Set-SPOStorageEntity -Site <SpoSitePipeBind> -Key <string> -Value <string> -Comments <string> -Description <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to .

## EXAMPLES

### Example 1

```powershell
Set-SPOStorageEntity -Site "https://tenant-name.sharepoint.com/sites/app-catalog"  -Key "MyCustomKey" -Value "{'MyKey':1234}" -Comments "This is an example" -Description "This is an example"
```

This example adds an entry to the property bag.

## PARAMETERS

### -Site

URL to the tenant or site collection app catalog.

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

### -Key

The key in the property bag that should be removed.

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

### -Value

Value to be set.

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

### -Comments

Comment for this property bag entry.

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

### -Description

Description of the property.

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
