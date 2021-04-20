---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spopubliccdnorigin
applicable: SharePoint Online
title: Remove-SPOPublicCdnOrigin
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Remove-SPOPublicCdnOrigin

## SYNOPSIS

Removes a given public CDN origin based on its identity (id) in your SharePoint Online Tenant

## SYNTAX

```powershell
Remove-SPOPublicCdnOrigin [-Identity] <String> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet will remove a Public CDN Origin based on its identity.

## EXAMPLES

### EXAMPLE 1

```powershell
#Get a list of CDN origins

Get-SPOPublicCdnOrigins
Id                                                                       Url
--                                                                       ---
11270051ee79e73829f6e7a3ee5d900d49c4fc5901645c642b799ecb62787a5069ca80fb HTTPS://CONTOSO.SHAREPOINT.COM/SITES/CDN...
#then remove the CDN by Identity id GUID.
Remove-SPOPublicCdnOrigin -Identity 11270051ee79e73829f6e7a3ee5d900d49c4fc5901645c642b799ecb62787a5069ca80fb
```

This example returns a list of CDN origins and then removes an origin based on the identity.

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

### -Identity

It's the unique identifier of the Public CDN path, it can be queried using the Cmdlet Get-SpoPublicCdnOrigins

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Add-SPOGeoAdministrator](Add-SPOGeoAdministrator.md)

[New-SPOPublicCdnOrigin](New-SPOPublicCdnOrigin.md)
