---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpcontenttypepublishinghuburl
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPContentTypePublishingHubUrl
---

# Get-PnPContentTypePublishingHubUrl

## SYNOPSIS
Returns the url to Content Type Publishing Hub

## SYNTAX 

```powershell
Get-PnPContentTypePublishingHubUrl [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$url = Get-PnPContentTypePublishingHubUrl
Connect-PnPOnline -Url $url
Get-PnPContentType

```

This will retrieve the url to the content type hub, connect to it, and then retrieve the content types form that site

## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)