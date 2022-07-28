---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-atpprotectionpolicyrule
applicable: Exchange Online, Exchange Online Protection
title: Get-ATPProtectionPolicyRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ATPProtectionPolicyRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ATPProtectionPolicyRule cmdlet to view rules that are associated with Microsoft Defender for Office 365 protections in preset security policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ATPProtectionPolicyRule [[-Identity] <RuleIdParameter>]
 [-State <RuleState>]
 [<CommonParameters>]
```

## DESCRIPTION
In organizations with Microsoft Defender for Office 365, the Standard preset security policy and the Strict preset security policy each have a rule that's associated with Defender for Office 365 protections. These rules are available to this cmdlet and control the following settings:

- Recipient conditions and exceptions that specify who the Defender for Office 365 protections in the policy (Safe Links and Safe Attachments) apply to. If the conditions and exceptions are blank, then no restrictions are placed on who the Defender for Office 365 protections in the policy apply to.
- Whether the preset security policy is turned on or turned off (the State property value). To completely turn on or turn off the preset security policy, the State property value in the corresponding Exchange Online Protection (EOP) rule must match the State value of this rule (Enabled or Disabled).

A rule that's associated with the Defender for Office 365 protections in the Standard preset security policy or the Strict preset security policy exists in organizations with Defender for Office 365 if either of the following statements are true:

- You previously turned on the Standard preset security policy or the Strict preset security policy in the Microsoft 365 Defender portal. Whether it's currently turned on after you initially turned it on doesn't matter.
- You previously removed the rule using the Remove-ATPProtectionPolicyRule cmdlet, and then you recreated the rule using the New-ATPProtectionPolicyRule cmdlet.

For more information about preset security policies, see [Preset security policies in EOP and Microsoft Defender for Office 365](https://docs.microsoft.com/microsoft-365/security/office-365-security/preset-security-policies).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ATPProtectionPolicyRule | Format-Table Name,State
```

This example returns a summary list of the rules that are associated with Defender for Office 365 protections in preset security policies.

### Example 2
```powershell
Get-ATPProtectionPolicyRule -Identity "Strict Preset Security Policy"
```

This example returns detailed information about the rule named Strict Preset Security Policy.

## PARAMETERS

### -Identity
The Identity parameter specifies the rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

By default, the available rules (if they exist) are named Standard Preset Security Policy and Strict Preset Security Policy.

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -State
The State parameter filters the results by the state of the rule. Valid values are:

- Enabled
- Disabled

```yaml
Type: RuleState
Parameter Sets: (All)
Aliases:
Accepted values: Enabled, Disabled
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
