---
external help file: 
applicable: SharePoint Online
title: Set-SPOTenantCdnPolicy
schema: 2.0.0
---

# Set-SPOTenantCdnPolicy

## SYNOPSIS
Sets the content delivery network (CDN) policies from the tenant level.


## SYNTAX

```
Set-SPOTenantCdnPolicy -CdnType <SPOTenantCdnType> -PolicyType <SPOTenantCdnPolicyType> -PolicyValue <String>
 [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}


## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
PS C:\> Set-SPOTenantCdnPolicy -CdnType Public -PolicyType IncludeFileExtensions -PolicyValue "CSS,EOT,GIF,ICO,JPEG,JPG,JS,MAP,PNG,SVG,TTF,WOFF,BMP"
```

This example sets a CDN to a public type with a policy value of listed extensions.

### --------------------EXAMPLE 2---------------------
```
PS C:\> Set-SPOTenantCdnPolicy -CdnType Public -PolicyType ExcludeRestrictedSiteClassifications -PolicyValue "Confidential,Restricted"
```

This example sets a CDN to a public type with a policy value of valid site classifications.

## PARAMETERS

### -CdnType
{{Fill CdnType Description}}

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

### -PolicyType
{{Fill PolicyType Description}}

```yaml
Type: SPOTenantCdnPolicyType
Parameter Sets: (All)
Aliases: 
Accepted values: IncludeFileExtensions, ExcludeRestrictedSiteClassifications, ExcludeIfNoScriptDisabled
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyValue
{{Fill PolicyValue Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
