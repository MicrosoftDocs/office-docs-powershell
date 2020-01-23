---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/set-spositescript
applicable: SharePoint Online
title: Set-SPOSiteScript
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Set-SPOSiteScript

## SYNOPSIS

Updates a previously uploaded site script.

## SYNTAX

```powershell
Set-SPOSiteScript
  -Identity <SPOSiteScriptPipeBind>
  -Title <string>
  -Content <string>
  [-Description <string>]
  [-Version <Int32>]
  [<CommonParameters>]
```

## DESCRIPTION

Updates a previously uploaded site script.

## EXAMPLES

### Example 1

This example updates a previously created site script. Any site designs referencing it execute the updated script.

```powershell
$newnavscript = @'
{
    "$schema": "schema.json",
        "actions": [
            {
                "verb": "addNavLink",
                "url": "/Custom Library",
                "displayName": "Custom Library Updated",
                "isWebRelative": true
            },
            {
                "verb": "addNavLink",
                "url": "/Lists/Custom List",
                "displayName": "Custom List Updated",
                "isWebRelative": true
            },
            {
                "verb": "applyTheme",
                "themeName": "Contoso Explorers"
            }
        ],
            "bindata": { },
    "version": 2
};
'@

Set-SPOSiteScript -Identity edaec4ec-71e2-4026-ac1e-6686bb30190d -Content $newnavscript -Version 2

```

## PARAMETERS

### -Identity

The id of the site design.

```yaml
Type: SPOSiteDesignPipeBind
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title

The display name of the site design.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Content

The JSON value that describes the script. For more information, see the [JSON reference](https://docs.microsoft.com/sharepoint/dev/declarative-customization/site-design-json-schema).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

A description of the script.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Version

A version number of the script.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES
