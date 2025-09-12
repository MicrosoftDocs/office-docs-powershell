---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-vivamodulefeaturepolicy
schema: 2.0.0
title: Remove-VivaModuleFeaturePolicy
---

# Remove-VivaModuleFeaturePolicy

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module version 3.2.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Remove-VivaModuleFeaturePolicy cmdlet to delete an access policy for a feature in a Viva module in Viva. Once you delete a policy, the policy is permanently deleted. You can't undo the deletion.

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
Use the Remove-VivaModuleFeaturePolicy cmdlet to delete an access policy for a feature in a Viva module in Viva.

You need to use the Connect-ExchangeOnline cmdlet to authenticate.

This cmdlet requires the .NET Framework 4.7.2 or later.

Currently, you need to be a member of the Global Administrators role or the roles that have been assigned at the feature level to run this cmdlet.

To learn more about assigned roles at the feature level, see [Features Available for Feature Access Management](https://learn.microsoft.com/viva/feature-access-management#features-available-for-feature-access-management).

To learn more about administrator role permissions in Microsoft Entra ID, see [Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids).

> [!IMPORTANT]
> Microsoft strongly advocates for the principle of least privilege. Assigning accounts only the minimum permissions necessary to perform their tasks helps reduce security risks and strengthens your organization's overall protection. Global Administrator is a highly privileged role that you typically limit to emergency scenarios or when you can't use a different role.

## EXAMPLES

### Example 1
```powershell
Remove-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Reflection -PolicyId 3db38dfa-02a3-4039-b33a-42b0b3da029b
```

This example deletes the specified policy for the Reflection feature in Viva Insights.

## PARAMETERS

### -FeatureId

> Applicable: Exchange Online

The FeatureId parameter specifies the feature in the Viva module that you want to remove the policy from.

To view details about the features in a Viva module that support feature access controls, use the Get-VivaModuleFeature cmdlet. The FeatureId value is returned in the output of the cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModuleId

> Applicable: Exchange Online

The ModuleId parameter specifies the Viva module of the feature that you want to remove the policy from.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyId

> Applicable: Exchange Online

The PolicyId parameter specifies the policy for the feature in the Viva module that you want to remove.

To view details about the added policies for a feature in a Viva module, refer to the Get-VivaModuleFeaturePolicy cmdlet. The details provided by the Get-VivaModuleFeaturePolicy cmdlet include the policy identifier.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -WhatIf

> Applicable: Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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

[About the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2)

[Role template IDs](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#role-template-ids)
