---
external help file: 
applicable: SharePoint Online
title: Add-SPOTenantCdnOrigin
schema: 2.0.0
---

# Add-SPOTenantCdnOrigin

## SYNOPSIS
Configures a new origin to public or private content delivery network (CDN).

## SYNTAX

```
Add-SPOTenantCdnOrigin -CdnType <SPOTenantCdnType> [-Confirm] -OriginUrl <String> [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Configures a new origin to public or private CDN, on either Tenant level or on a single Site level. Effectively, a tenant admin points out to a document library, or a folder in the document library and requests that content in that library should be retrievable by using a CDN. 

You must be a SharePoint Online global administrator and a site collection administrator to run the cmdlet.

## EXAMPLES

### Example 1 
```
--------EXAMPLE 1--------

Add-SPOTenantCdnOrigin -CdnType public -OriginUrl */subfolder

This example configures a public CDN on a tenant level.

--------EXAMPLE 2--------

Add-SPOTenantCdnOrigin -CdnType public -OriginUrl /sites/site/subfolder

This example configures a public CDN on a site level.
```


## PARAMETERS

### -CdnType
Specifies the CDN type. The valid values are:  public or private.

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

Relative-Relative path depends on the OriginScope.  If the originScope is Tenant, a path must be a relative path under the tenant root. If the originScope is Site, a path must be a relative path under the given Site.  The path must point to the valid Document Library or a folder with a document library. 


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
