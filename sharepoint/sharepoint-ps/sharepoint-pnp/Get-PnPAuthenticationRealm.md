---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpauthenticationrealm
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPAuthenticationRealm
---

# Get-PnPAuthenticationRealm

## SYNOPSIS
Returns the authentication realm

## SYNTAX 

```powershell
Get-PnPAuthenticationRealm [-Url <String>]
                           [-Connection <PnPConnection>]
```

## DESCRIPTION
Gets the authentication realm for the current web

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPAuthenticationRealm
```

This will get the authentication realm for the current connected site

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPAuthenticationRealm -Url https://contoso.sharepoint.com
```

This will get the authentication realm for https://contoso.sharepoint.com

## PARAMETERS

### -Url
Specifies the URL of the site

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### System.String

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)