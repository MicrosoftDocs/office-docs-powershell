---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://learn.microsoft.com/powershell/module/exchange/remove-vivamodulefeaturepolicy
applicable: Exchange Online
title: Remove-VivaModuleFeaturePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Remove-VivaModuleFeaturePolicy

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-VivaModuleFeaturePolicy cmdlet to remove feature policies from Viva modules.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-VivaModuleFeaturePolicy -FeatureId <String> -ModuleId <String> -PolicyId <String>
 [-Confirm]
 [-ResultSize <Unlimited>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to use the Connect-ExchangeOnline cmdlet to authenticate with Viva Feature Access Management Service.

This cmdlet requires the .NET Framework 4.7.2 or later.

To run this cmdlet, you need to be a member of one of the following directory role groups in the destination organization:

- Global Administrator
- Insights Administrator

To learn more about administrator role permissions in Azure Active Directory, see [Role template IDs](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids).

## EXAMPLES

### Example 1
```powershell
Remove-VivaModuleFeaturePolicy -ModuleId TestModule -FeatureId TestFeature2 -PolicyId 8c4cfd84-400d-4e17-9d64-e78bbbe2f5f6
```

This example removes the specified feature policy from the specified Viva module.

## PARAMETERS

### -FeatureId
The FeatureId parameter specifies the feature policy that contains the feature policy to remove from the Viva module.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModuleId
The ModuleId parameter specifies the Viva module that contains the feature policies that you want to remove.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyId
The PolicyId parameter specifies the feature policy in the Viva module that you want to remove.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

[Exchange PowerShell](https://learn.microsoft.com/powershell/module/exchange)

[About the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2#updates-for-the-exo-v3-module)

[Role template IDs](https://learn.microsoft.com/azure/active-directory/roles/permissions-reference#role-template-ids)
