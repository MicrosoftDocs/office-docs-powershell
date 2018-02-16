---
external help file: 
applicable: SharePoint Online
title: Remove-SPOTenantCdnOrigin
schema: 2.0.0
---

# Remove-SPOTenantCdnOrigin

## SYNOPSIS
Removes a new origin from the Public or Private content delivery network (CDN).


## SYNTAX

```
Remove-SPOTenantCdnOrigin -CdnType <SPOTenantCdnType> [-Confirm] -OriginUrl <String> [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Removes a new origin from the Public or Private content delivery network (CDN).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Remove-SPOTenantCdnOrigin -CdnType Public -OriginScope Tenant -OriginUrl sites/pubsite/siteassets/subfolder
```

The example removes a CDN from a tenant level.

### -----------------------EXAMPLE 2-----------------------------
```
Remove-SPOTenantCdnOrigin -CdnType Public -OriginScope Site  -Site https://contoso.sharepoint.com/sites/pubsite -OriginUrl siteassets/subfolder
```

The example removes a CDN from a site level.


## PARAMETERS

### -CdnType
Specifies the CDN type. The valuid values are: Public or Private.


```yaml
Type: SPOTenantCdnType
Parameter Sets: (All)
Aliases: 
Accepted values: Public, Private
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -OriginUrl
Specifies a path to the doc library to be configured. It can be provided in two ways: relative path, or a mask. 

Relative-Relative path depends on the OriginScope. If the originScope is Tenant, a path must be a relative path under the tenant root. If the originScope is Site, a path must be a relative path under the given Site. The path must point to the valid Document Library or a folder with a document library. 

Any asset stored under the path provided (in the container itself or any of its subfolders) will be exposed via CDN

Mask - Mask allows to configure a partial URL match. It must start with */, and must not include * anywhere else. I.e. an origin “*/masterpates” will expose all the assets under all the masterpages libraries, either under the tenant root (means, anywhere in the tenancy) or in the given site collection, depends on the OriginScope parameter. Equally, */masterpages/subfolder will enable items in “subfolder” and below.


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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
