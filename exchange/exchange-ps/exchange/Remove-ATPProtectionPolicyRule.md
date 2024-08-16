---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/remove-atpprotectionpolicyrule
applicable: Exchange Online
title: Remove-ATPProtectionPolicyRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Remove-ATPProtectionPolicyRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-ATPProtectionPolicyRule cmdlet to remove rules from Microsoft Defender for Office 365 protections in preset security policies. The rules specify recipient conditions and exceptions for the protection, and also allow you to turn on and turn off the associated preset security policies.

**Note**: Use this cmdlet to remove a rule only if you plan to immediately recreate the rule using the New-ATPProtectionPolicyRule cmdlet. The affected preset security policy won't function without a corresponding rule.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-ATPProtectionPolicyRule [-Identity] <RuleIdParameter>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
For more information about preset security policies in PowerShell, see [Preset security policies in Exchange Online PowerShell](https://learn.microsoft.com/defender-office-365/preset-security-policies#preset-security-policies-in-exchange-online-powershell).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-ATPProtectionPolicyRule -Identity "Standard Preset Security Policy"
```

This example removes the existing rule for Defender for Office 365 protections in the Standard preset security policy.

## PARAMETERS

### -Identity
The Identity parameter specifies the rule that you want to remove. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

By default, the available rules (if they exist) are named Standard Preset Security Policy and Strict Preset Security Policy.

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.
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
