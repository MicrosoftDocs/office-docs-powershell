---
external help file: 
applicable: SharePoint Online
title: Get-SPOPublicCdnOrigins
schema: 2.0.0
---

# Get-SPOPublicCdnOrigins

## SYNOPSIS
This cmdlet returns a list of CDN Origins in your SharePoint Online Tenant

## SYNTAX

```powershell
Get-SPOPublicCdnOrigins [<CommonParameters>]
```

## DESCRIPTION
List CDN Origins in your Tenant by id or url.

## EXAMPLES

### Example 1 
```powershell
PS C:\WINDOWS\system32> Get-SPOPublicCdnOrigins | Fl

Id  : 16530053476cf3efe88b499076356d0205504b2451688c20a65d561c951783e0859ac590
Url : HTTPS:/CONTOSO.SHAREPOINT.COM/SITES/CDN/CDNFILESLIBRARY
```

This example return a list of CDN Origins.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## RELATED LINKS
[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[New-SPOPublicCdnOrigin](New-SPOPublicCdnOrigin.md)

[Remove-SPOPublicCdnOrigin](Remove-SPOPublicCdnOrigin.md)
