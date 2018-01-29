---
external help file: 
applicable: SharePoint Online
title: Get-SPOTenantCdnOrigins
schema: 2.0.0
---

# Get-SPOTenantCdnOrigins

## SYNOPSIS
Lists all the configured origins under the tenancy or under a given site.


## SYNTAX

```
Get-SPOTenantCdnOrigins -CdnType <SPOTenantCdnType> [<CommonParameters>]
```

## DESCRIPTION
Lists all the configured origins under the tenancy or under a given site.


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Get-SPOTenantCdnOrigins -CdnType Public 
```

The example returns a list of origins from the Tenant.


## PARAMETERS

### -CdnType
Specifies the CDN type. The valid values are: Public or Private.


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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
