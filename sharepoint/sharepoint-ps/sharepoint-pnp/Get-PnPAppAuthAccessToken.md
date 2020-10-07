---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpappauthaccesstoken
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPAppAuthAccessToken
---

# Get-PnPAppAuthAccessToken

## SYNOPSIS
Returns the access token

## SYNTAX 

```powershell
Get-PnPAppAuthAccessToken [-Connection <PnPConnection>]
```

## DESCRIPTION
Returns the access token from the current client context (only works with App-Only authentication)

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$accessToken = Get-PnPAppAuthAccessToken
```

This will put the access token from current context in the $accessToken variable. Will only work in App authentication flow (App+user or App-Only)

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

## OUTPUTS

### System.String

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)