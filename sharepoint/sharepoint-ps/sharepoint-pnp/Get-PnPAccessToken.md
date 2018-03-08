---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPAccessToken

## SYNOPSIS
Returns the current OAuth Access token

## SYNTAX 

```powershell
Get-PnPAccessToken [-Decoded [<SwitchParameter>]]
```

## DESCRIPTION
Gets the OAuth 2.0 Access Token to consume the Microsoft Graph API

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPAccessToken
```

Gets the OAuth 2.0 Access Token to consume the Microsoft Graph API

## PARAMETERS

### -Decoded
Returns the access token in a decoded manner

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)