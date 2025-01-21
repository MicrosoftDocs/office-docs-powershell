---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/remove-vivaorginsightsdelegatedrole
title: Remove-VivaOrgInsightsDelegatedRole
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Remove-VivaOrgInsightsDelegatedRole

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module v3.7.0-Preview1 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Remove-VivaOrgInsightsDelegatedRole cmdlet to remove delegate access from the specified account (the delegate) so they can't view organizational insights like the leader (the delegator).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-VivaOrgInsightsDelegatedRole -Delegate <Guid> -Delegator <Guid>
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Get-VivaOrgInsightsDelegatedRole cmdlet to find the Microsoft Entra ObjectId values of delegate accounts that were given the capabilities of delegator accounts.

To run this cmdlet, you need to be a member of one of the following role groups in Microsoft Entra ID in the destination organization:

- Global Administrator
- Insights Administrator

> [!IMPORTANT]
> Microsoft recommends that you use roles with the fewest permissions. Using lower permissioned accounts helps improve security for your organization. Global Administrator is a highly privileged role that should be limited to emergency scenarios when you can't use an existing role.

## EXAMPLES

### Example 1
```powershell
Remove-VivaOrgInsightsDelegatedRole -Delegate 5eaf7164-f36f-5381-5546-dcaa1792f077 -Delegator 043f6d38-378b-7dcd-7cd8-c1a901881fa9 
```

This example removes the organization insights viewing capability of the specified delegator account from the specified delegate account.

## PARAMETERS

### -Delegate
The Delegate parameter specifies the account that can view organizational insights like the leader (the account specified by the Delegator account).

A valid value for this parameter is the Microsoft Entra ObjectId value of the delegate account. Use the [Get-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/get-mguser) cmdlet in Microsoft Graph PowerShell to find this value.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Delegator
The Delegator parameter specifies the account of the leader that can view organizational insights. This capability is delegated to the account specified by the Delegate parameter.

A valid value for this parameter is the ObjectID value of the delegator account. Use the [Get-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/get-mguser) cmdlet in Microsoft Graph PowerShell to find this value.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
