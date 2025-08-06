---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-atpbuiltinprotectionrule
schema: 2.0.0
title: Get-ATPBuiltInProtectionRule
---

# Get-ATPBuiltInProtectionRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ATPBuiltInProtectionRule cmdlet to view the rule for the Built-in protection preset security policy that effectively provides default policies for Safe Links and Safe Attachments in Microsoft Defender for Office 365. The rule specifies exceptions to the policy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ATPBuiltInProtectionRule [[-Identity] <DehydrateableRuleIdParameter>] [-State <RuleState>] [<CommonParameters>]
```

## DESCRIPTION
For more information about preset security policies, see [Preset security policies in EOP and Microsoft Defender for Office 365](https://learn.microsoft.com/defender-office-365/preset-security-policies).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ATPBuiltInProtectionRule
```

This example shows the rule for the Built-in protection preset security policy.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

The name of the only rule is ATP Built-In Protection Rule.

```yaml
Type: DehydrateableRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -State

> Applicable: Exchange Online

The State parameter filters the results by the state of the rule. Valid values are:

- Disabled
- Enabled

The only rule is always enabled.

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
