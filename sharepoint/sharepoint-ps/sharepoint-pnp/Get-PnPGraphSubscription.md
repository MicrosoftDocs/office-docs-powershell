---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpgraphsubscription
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPGraphSubscription
---

# Get-PnPGraphSubscription

## SYNOPSIS
Gets subscriptions from Microsoft Graph. Requires the Azure Active Directory application permission 'Subscription.Read.All'.

## SYNTAX 

### Return by specific ID
```powershell
Get-PnPGraphSubscription [-Identity <String>]
                         [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPGraphSubscription
```

Retrieves all subscriptions from Microsoft Graph

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPGraphSubscription -Identity 328c7693-5524-44ac-a946-73e02d6b0f98
```

Retrieves the subscription from Microsoft Graph with the id 328c7693-5524-44ac-a946-73e02d6b0f98

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

### -Identity
Returns the subscription with the provided subscription id

```yaml
Type: String
Parameter Sets: Return by specific ID

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)