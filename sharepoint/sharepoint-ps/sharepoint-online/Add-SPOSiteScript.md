---
external help file: 
applicable: SharePoint Online
title: Add-SPOSiteScript
schema: 2.0.0
---

# Add-SPOSiteScript

## SYNOPSIS

Uploads a new site script for use either directly or in a site design.

## SYNTAX

```powershell
Add-SPOSiteScript
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


### -Title
The display name of the site design.

```yaml
Type: 
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online
Required: 
Position: 
Default value: 
Accept pipeline input: 
Accept wildcard characters: 
```

### -Content
JSON value that describes the script. For more information, see [JSON reference](site-design-json-schema.md).

```yaml
Type: 
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online
Required: 
Position: 
Default value: 
Accept pipeline input: 
Accept wildcard characters: 
```

### -Description
A description of the script.

```yaml
Type: 
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online
Required: 
Position: 
Default value: 
Accept pipeline input: 
Accept wildcard characters: 
```


## EXAMPLES

### Example 1

The following example adds a new site logo from the following script in a file.

```json
{
  "verb": "setSiteLogo",
  "url": "https://contoso.sharepoint.com/SiteAssets/company-logo.png"
},
```

```powershell
C:\> Get-Content 'c:\scripts\site-script.json' -Raw | Add-SPOSiteScript -Title "Customer logo" -Description "Applies customer logo for customer sites"
```