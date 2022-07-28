---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/disable-eopprotectionpolicyrule
applicable: Exchange Online, Exchange Online Protection
title: Disable-EOPProtectionPolicyRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Disable-EOPProtectionPolicyRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Disable-EOPProtectionPolicyRule cmdlet to turn off the Standard preset security policy or the Strict preset security policy. If your organization has Defender for Office 365, you also need to use the Disable-ATPProtectionPolicyRule cmdlet to turn off the policy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Disable-EOPProtectionPolicyRule [-Identity] <RuleIdParameter>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
All Microsoft 365 organizations can have up to two rules that are associated with Exchange Online Protection (EOP) protections in preset security policies. The rule for the Standard Preset security policy and the rule for the Strict preset security policy controls who the EOP protections in the policy (anti-malware, anti-spam, and anti-phishing) apply to (the recipient conditions and exceptions for EOP protections).

In organizations that don't have Defender for Office 365, if the command `Get-EOPProtectionPolicyRule | Format-Table Name,State` returns a rule where the State property value is Enabled, you can use this cmdlet to disable the rule. This action also turns off the corresponding preset security policy.

But, if your organization has Defender for Office 365, there are two more rules that are associated with Defender for Office 365 protections in preset security policies. The rule for the Standard Preset security policy and the rule for the Strict preset security policy control who the Defender for Office 365 protections in the policy (Safe Links and Safe Attachments) apply to (the recipient conditions and exceptions for Defender for Office 365 protections). The corresponding preset security policy isn't turned off until you also use the Disable-AtPProtectionPolicyRule cmdlet to disable the corresponding rule for Defender for Office 365 protections.

A rule that's associated with EOP protections in the Standard preset security policy or the Strict preset security policy already exists if either of the following statements are true:

- You previously turned on the Standard preset security policy or the Strict preset security policy in the Microsoft 365 Defender portal. Whether it's currently turned on after you initially turned it on doesn't matter (turning off the policy doesn't delete the).
- You previously removed the rule using the Remove-EOPProtectionPolicyRule cmdlet, and then you recreated the rule using the New-EOPProtectionPolicyRule cmdlet.

For more information about preset security policies, see [Preset security policies in EOP and Microsoft Defender for Office 365](https://docs.microsoft.com/microsoft-365/security/office-365-security/preset-security-policies).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Disable-EOPProtectionPolicyRule -Identity "Standard Preset Security Policy"
```

In organizations without Defender for Office 365, this example turns off the Standard preset security policy. The State value of the rule is now Disabled.

### Example 2
```powershell
Disable-EOPProtectionPolicyRule -Identity "Standard Preset Security Policy"; Disable-ATPProtectionPolicyRule -Identity "Standard Preset Security Policy"
```

In organizations with Defender for Office 365, this example turns off the Standard preset security policy. The State value of both rules is now Disabled.

## PARAMETERS

### -Identity
The Identity parameter specifies the rule that you want to disable. You can use any value that uniquely identifies the rule. For example:

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
