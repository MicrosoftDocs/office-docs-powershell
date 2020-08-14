---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpaccesstoken
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPAccessToken
---

# Get-PnPAccessToken

## SYNOPSIS
Returns the current OAuth Access token

## SYNTAX 

```powershell
Get-PnPAccessToken [-Decoded [<SwitchParameter>]]
                   [-ByPassPermissionCheck [<SwitchParameter>]]
```

## DESCRIPTION
Gets the OAuth 2.0 Access Token to consume the Microsoft Graph API. Doesn't work with all Connect-PnPOnline options.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPAccessToken
```

Gets the OAuth 2.0 Access Token to consume the Microsoft Graph API

## PARAMETERS

### -ByPassPermissionCheck
Allows the check for required permissions in the access token to be bypassed when set to $true

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Decoded
Returns the details from the access token in a decoded manner

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)