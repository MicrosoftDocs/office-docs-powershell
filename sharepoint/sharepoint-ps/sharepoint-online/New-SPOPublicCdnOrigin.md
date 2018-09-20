---
external help file: 
applicable: SharePoint Online
title: New-SPOPublicCdnOrigin
schema: 2.0.0
---

# New-SPOPublicCdnOrigin

## SYNOPSIS
Creates a new public CDN on a document library in your Sharepoint Online Tenant


## SYNTAX

```
New-SPOPublicCdnOrigin [-Url] <String> [-Confirm] [-WhatIf] [<CommonParameters>]
```


## DESCRIPTION
This Cmdlet creates a new Public CDN Origin in your SPO Tenant


## EXAMPLES

### ------------------EXAMPLE------------------
```
New-SPOPublicCdnOrigin –URL https://contoso.sharepoint.com/sites/CDN/CDNFilesLibrary/
```

This example shows how to you can setup a new Public CDN on a document library in your SharePoint online tenant.



## PARAMETERS

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

### -Url
Specify the URL that will be enabled for Public CDN in your tenant

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
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



## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Get-SPOPublicCdnOrigins](Get-SPOPublicCdnOrigins.md)

[Remove-SPOPublicCdnOrigin](Remove-SPOPublicCdnOrigin.md)





