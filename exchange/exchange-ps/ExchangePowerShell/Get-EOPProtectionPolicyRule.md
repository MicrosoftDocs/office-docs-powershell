---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-eopprotectionpolicyrule
schema: 2.0.0
title: Get-EOPProtectionPolicyRule
---

# Get-EOPProtectionPolicyRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-EOPProtectionPolicyRule cmdlet to view rules for default email protections for all cloud mailboxes in preset security policies. The rules specify recipient conditions and exceptions for the protection, and also allow you to turn on and turn off the associated preset security policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-EOPProtectionPolicyRule [[-Identity] <RuleIdParameter>]
 [-State <RuleState>]
 [<CommonParameters>]
```

## DESCRIPTION
For more information about preset security policies in PowerShell, see [Preset security policies in Exchange Online PowerShell](https://learn.microsoft.com/defender-office-365/preset-security-policies#preset-security-policies-in-exchange-online-powershell).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-EOPProtectionPolicyRule | Format-Table Name,State
```

This example returns a summary list of the rules for EOP protections in preset security policies.

### Example 2
```powershell
Get-EOPProtectionPolicyRule -Identity "Strict Preset Security Policy"
```

This example returns detailed information about the rule named Strict Preset Security Policy.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

By default, the available rules (if they exist) are named Standard Preset Security Policy and Strict Preset Security Policy.

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -State

> Applicable: Exchange Online, Exchange Online Protection

The State parameter filters the results by the state of the rule. Valid values are:

- Enabled
- Disabled.

```yaml
Type: RuleState
Parameter Sets: (All)
Aliases:
Accepted values: Enabled, Disabled

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
