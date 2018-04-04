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
Get-Content 'c:\scripts\site-script.json' -Raw | Add-SPOSiteScript -Title "Customer logo" -Description "Applies customer logo for customer sites"
```

### Example 2

This example sets the external sharing capabilities of the site to the ExternalUserAndGuestSharing option. We also add a site design for a Communication site (68) which uses this script.

```powershell
PS C:\> $script = @'
>> {
>>     "$schema": "schema.json",
>>         "actions": [
>> {
>>    "verb": "setSiteExternalSharingCapability",
>>    "capability": "ExternalUserAndGuestSharing"
>> }
>>         ],
>>         "bindata": { },
>>         "version": 1
>> };
>> '@

PS C:\> Add-SPOSiteScript -Title "External User and Guest Sharing site script" -Description "A site script to manage the
guest access of a site" -Content $script

Id          : ea9e3a52-7c12-4da8-a901-4912be8a76bc
Title       : External User and Guest Sharing site script
Description : A site script to manage theguest access of a site
Content     :
Version     : 0

PS C:\> Add-SPOSiteDesign -Title "Communication Site with External Users and Guest Sharing" -WebTemplate "68" -SiteScripts "ea9e3a52-7c12-4da8-a901-4912be8a76bc"
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
The JSON value that describes the script. For more information, see the [JSON reference](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-json-schema).

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
