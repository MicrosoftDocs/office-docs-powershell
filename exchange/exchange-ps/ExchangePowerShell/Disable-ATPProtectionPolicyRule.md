---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/disable-atpprotectionpolicyrule
schema: 2.0.0
title: Disable-ATPProtectionPolicyRule
---

# Disable-ATPProtectionPolicyRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Disable-ATPProtectionPolicyRule and Disable-EOPProtectionPolicyRule cmdlets together to turn off the Standard preset security policy or the Strict preset security policy in organizations with Microsoft Defender for Office 365.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Disable-ATPProtectionPolicyRule [-Identity] <RuleIdParameter>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The State property in rules that are associated with preset security policies indicates whether the rule is Enabled or Disabled.

For more information about preset security policies in PowerShell, see [Preset security policies in Exchange Online PowerShell](https://learn.microsoft.com/defender-office-365/preset-security-policies#preset-security-policies-in-exchange-online-powershell).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Disable-ATPProtectionPolicyRule -Identity "Standard Preset Security Policy"; Disable-EOPProtectionPolicyRule -Identity "Standard Preset Security Policy"
```

In organizations with Defender for Office 365, this example turns off the Standard preset security policy. The State property value of both rules is now Disabled.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the rule that you want to disable. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

By default, the available rules (if they exist) are named Standard Preset Security Policy and Strict Preset Security Policy.

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.
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
