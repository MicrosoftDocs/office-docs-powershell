---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpgraphsubscription
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPGraphSubscription
---

# Set-PnPGraphSubscription

## SYNOPSIS
Updates an existing Microsoft Graph subscription. Required Azure Active Directory application permission depends on the resource the subscription exists on, see https://docs.microsoft.com/graph/api/subscription-delete#permissions.

## SYNTAX 

```powershell
Set-PnPGraphSubscription -Identity <GraphSubscriptionPipeBind>
                         -ExpirationDate <DateTime>
                         [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPGraphSubscription -Identity bc204397-1128-4911-9d70-1d8bceee39da -ExpirationDate "2020-11-22T18:23:45.9356913Z"
```

Updates the Microsoft Graph subscription with the id 'bc204397-1128-4911-9d70-1d8bceee39da' to expire at the mentioned date

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

### -ExpirationDate
Date and time to set the expiration to. Take notice of the maximum allowed lifetime of the subscription endponts as documented at https://docs.microsoft.com/graph/api/resources/subscription#maximum-length-of-subscription-per-resource-type

```yaml
Type: DateTime
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Identity
The unique id or an instance of a Microsoft Graph Subscription

```yaml
Type: GraphSubscriptionPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)