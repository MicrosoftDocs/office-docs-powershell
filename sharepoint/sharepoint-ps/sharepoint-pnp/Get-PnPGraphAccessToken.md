---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpgraphaccesstoken
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPGraphAccessToken
---

# Get-PnPGraphAccessToken

## SYNOPSIS
Returns the current OAuth Access token for the Microsoft Graph API

## SYNTAX 

```powershell
Get-PnPGraphAccessToken [-Decoded [<SwitchParameter>]]
                        [-ByPassPermissionCheck [<SwitchParameter>]]
```

## DESCRIPTION
Gets the OAuth 2.0 Access Token to consume the Microsoft Graph API

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPAccessToken
```

Gets the OAuth 2.0 Access Token to consume the Microsoft Graph API

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPAccessToken -Decoded
```

Gets the full OAuth 2.0 Token to consume the Microsoft Graph API

## PARAMETERS

### -ByPassPermissionCheck
Allows the check for required permissions in the access token to be bypassed when set to $true

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)