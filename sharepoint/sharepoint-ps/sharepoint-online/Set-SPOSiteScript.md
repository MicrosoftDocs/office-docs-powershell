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

## PARAMETERS

|Parameter     | Description  |
|--------------|--------------|
| -Title       | The display name of the site design. |
| -Content     | JSON value that describes the script. For more information, see [JSON reference](site-design-json-schema.md).|
| -Description | A description of the script. |

## EXAMPLES

### Example 1 

The following example updates a previously created site script. Any site designs referencing it will execute the updated script. 

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
                themeName: "Contoso Explorers"
            }
        ],
            "bindata": { },
    "version": 2
}
```

Copy to clipboard

```powershell
C:\> $script = Get-Clipboard -Raw
C:\> Set-SPOSiteScript -Identity 7647d3d6-1046-41fe-a798-4ff66b099d12 -Content $script -Description "Update site script to change links and apply Contoso Explorers theme"
```