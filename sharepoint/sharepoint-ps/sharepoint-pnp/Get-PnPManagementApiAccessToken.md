---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpmanagementapiaccesstoken
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPManagementApiAccessToken
---

# Get-PnPManagementApiAccessToken

## SYNOPSIS
Gets an access token for the Office 365 Management API

## SYNTAX 

```powershell
Get-PnPManagementApiAccessToken -TenantId <String>
                                -ClientId <String>
                                -ClientSecret <String>
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPManagementApiAccessToken -TenantId $tenantId -ClientId $clientId -ClientSecret $clientSecret)
```

Retrieves access token for the Office 365 Management API

### ------------------EXAMPLE 2------------------
```powershell
Connect-PnPOnline -AccessToken (Get-PnPManagementApiAccessToken -TenantId $tenantId -ClientId $clientId -ClientSecret $clientSecret)
```

Connects to the Office 365 Management API using an access token for the Office 365 Management API

## PARAMETERS

### -ClientId
The App\Client ID of the app which gives you access to the Office 365 Management API

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -ClientSecret
The Client Secret of the app which gives you access to the Office 365 Management API

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -TenantId
The Tenant ID to connect to the Office 365 Management API

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)