---
Module Name: PnP.PowerShell
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPGraphSubscription.html
external help file: PnP.PowerShell.dll-Help.xml
title: Get-PnPGraphSubscription
---
  
# Get-PnPGraphSubscription

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPGraphSubscription.md to change this file.


**Required Permissions**

  * Microsoft Graph API : Subscription.Read.All

Gets subscriptions from Microsoft Graph.

## SYNTAX

### Return a list (Default)
```powershell
Get-PnPGraphSubscription [<CommonParameters>]
```

### Return by specific ID
```powershell
Get-PnPGraphSubscription [-Identity <String>] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Get-PnPGraphSubscription
```

Retrieves all subscriptions from Microsoft Graph

### EXAMPLE 2
```powershell
Get-PnPGraphSubscription -Identity 328c7693-5524-44ac-a946-73e02d6b0f98
```

Retrieves the subscription from Microsoft Graph with the id 328c7693-5524-44ac-a946-73e02d6b0f98

## PARAMETERS

### -Identity
Returns the subscription with the provided subscription id

```yaml
Type: String
Parameter Sets: Return by specific ID

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)


