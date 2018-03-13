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

## DESCRIPTION

Uploads a new site script for use either directly or in a site design.

## EXAMPLES

### Example 1

This example adds a new site logo from the following script in a file.

```json
{
  "verb": "setSiteLogo",
  "url": "https://contoso.sharepoint.com/SiteAssets/company-logo.png"
},
```

```powershell
C:\> Get-Content 'c:\scripts\site-script.json' -Raw | Add-SPOSiteScript -Title "Customer logo" -Description "Applies customer logo for customer sites"
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
