---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/enable-atpprotectionpolicyrule
applicable: Exchange Online, Exchange Online Protection
title: Enable-ATPProtectionPolicyRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Enable-ATPProtectionPolicyRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Enable-ATPProtectionPolicyRule and Enable-EOPProtectionPolicyRule cmdlets together to turn on the Standard preset security policy or the Strict preset security policy in organizations with Microsoft Defender for Office 365.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Enable-ATPProtectionPolicyRule [-Identity] <RuleIdParameter>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Organizations with Defender for Office 365 have up to four rules that are associated with the Standard preset security policy and the Strict preset security policy:

- Two rules for Exchange Online Protection (EOP) protections: The rule for the Standard Preset security policy and the rule for the Strict preset security policy control who the EOP protections in the policy (anti-malware, anti-spam, and anti-phishing) apply to (the recipient conditions and exceptions for EOP protections).
- Two rules for Defender for Office 365 protections: The rule for the Standard Preset security policy and the rule for the Strict preset security policy control who the Defender for Office 365 protections in the policy (Safe Links and Safe Attachments) apply to (the recipient conditions and exceptions for Defender for Office 365 protections).

If the command `Get-ATPProtectionPolicyRule | Format-Table Name,State` returns a rule where the State value is Disabled, you can use this cmdlet to enable the rule. However, the corresponding preset security policy isn't turned on until you also use the Enable-EOPProtectionPolicyRule cmdlet to enable the corresponding rule.

A rule that's associated with the Defender for Office 365 protections in the Standard preset security policy or the Strict preset security policy exists in organizations with Defender for Office 365 if either of the following statements are true:

- You previously turned on the Standard preset security policy or the Strict preset security policy in the Microsoft 365 Defender portal. Whether it's currently turned on after you initially turned it on doesn't matter.
- You previously removed the rule using the Remove-ATPProtectionPolicyRule cmdlet, and then you recreated the rule using the New-ATPProtectionPolicyRule cmdlet.

For more information about preset security policies, see [Preset security policies in EOP and Microsoft Defender for Office 365](https://docs.microsoft.com/microsoft-365/security/office-365-security/preset-security-policies).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Enable-ATPProtectionPolicyRule -Identity "Standard Preset Security Policy"; Enable-EOPProtectionPolicyRule -Identity "Standard Preset Security Policy"
```

This example turns on the Standard preset security policy in the Microsoft 365 Defender portal. The State value of both rules is now Enabled.

## PARAMETERS

### -Identity
The Identity parameter specifies the rule that you want to enable. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

By default, the available rules (if they exist) are named Standard Preset Security Policy and Strict Preset Security Policy.

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

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
