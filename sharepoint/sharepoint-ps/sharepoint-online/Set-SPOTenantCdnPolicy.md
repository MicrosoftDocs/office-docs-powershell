---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/set-spotenantcdnpolicy
applicable: SharePoint Online
title: Set-SPOTenantCdnPolicy
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Set-SPOTenantCdnPolicy

## SYNOPSIS

Sets the content delivery network (CDN) policies at the tenant level.

## SYNTAX

```powershell
Set-SPOTenantCdnPolicy -CdnType <SPOTenantCdnType> -PolicyType <SPOTenantCdnPolicyType> -PolicyValue <String> [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to set the content delivery network (CDN) policies at the tenant level.

## EXAMPLES

### --------------------EXAMPLE 1---------------------

```powershell
Set-SPOTenantCdnPolicy -CdnType Public -PolicyType IncludeFileExtensions -PolicyValue "CSS,EOT,GIF,ICO,JPEG,JPG,JS,MAP,PNG,SVG,TTF,WOFF,BMP"
```

This example sets a CDN to a public type with a policy value of listed extensions.

### --------------------EXAMPLE 2---------------------

```powershell
Set-SPOTenantCdnPolicy -CdnType Public -PolicyType ExcludeRestrictedSiteClassifications -PolicyValue "Confidential,Restricted"
```

This example sets a CDN to a public type with a policy value of valid site classifications.

## PARAMETERS

### -CdnType

The CdnType parameter specifies the CDN type. The valid values are Public or Private.

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

The PolicyType specifies the type of policy to set.

Valid values:

- IncludeFileExtensions
- ExcludeRestrictedSiteClassifications
- ExcludeIfNoScriptDisabled

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

A String representing the value of the policy type defined by the PolicyType parameter.

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
