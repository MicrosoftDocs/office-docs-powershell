---
external help file: 
applicable: SharePoint Online
title: Set-SPOSiteScript
schema: 2.0.0
---

# Set-SPOSiteScript

## SYNOPSIS

Updates a previously uploaded site script.

## SYNTAX

```powershell
Set-SPOSiteScript
  -Title <string>
  -Content <string>
  [-Description <string>]
  [<CommonParameters>]
```

## DESCRIPTION

Updates a previously uploaded site script.

## EXAMPLES

### Example 1 

This example updates a previously created site script. Any site designs referencing it execute the updated script. 

```json
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
}
```

Copy the following to the Clipboard.

```powershell
Set-SPOSiteScript -Identity 7647d3d6-1046-41fe-a798-4ff66b099d12 -Content $script -Description "Update site script to change links and apply Contoso Explorers theme"
```

## PARAMETERS

### -Title

The display name of the site design.

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

### -Content

The JSON value that describes the script. For more information, see the [JSON reference](site-design-json-schema.md).

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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS