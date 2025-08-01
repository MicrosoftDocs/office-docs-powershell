---
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-vivaorginsightsdelegatedrole
schema: 2.0.0
title: Get-VivaOrgInsightsDelegatedRole
---

# Get-VivaOrgInsightsDelegatedRole

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module v3.7.1 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-VivaOrgInsightsDelegatedRole cmdlet to view all delegates of the specified delegator. Delegate accounts can view organizational insights like the specified delegator.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-VivaOrgInsightsDelegatedRole -Delegator <Guid>
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Typically, you use this cmdlet with the Remove-VivaOrgInsightsDelegatedRole cmdlet to find the Microsoft Entra ObjectId values of the delegate accounts.

To run this cmdlet, you need to be a member of one of the following role groups in Microsoft Entra ID in the destination organization:

- Global Administrator
- Insights Administrator

> [!IMPORTANT]
> Microsoft recommends that you use roles with the fewest permissions. Using lower permissioned accounts helps improve security for your organization. Global Administrator is a highly privileged role that should be limited to emergency scenarios when you can't use an existing role.

## EXAMPLES

### Example 1
```powershell
Get-VivaOrgInsightsDelegatedRole -Delegator 043f6d38-378b-7dcd-7cd8-c1a901881fa9
```

This example filters the results by the specified delegator.

## PARAMETERS

### -Delegator

> Applicable: Exchange Online

The Delegator parameter specifies the account of the leader that can view organizational insights. This capability is given to delegates.

A valid value for this parameter is the ObjectID value of the delegator account. Use the [Get-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/get-mguser) cmdlet in Microsoft Graph PowerShell to find this value.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
