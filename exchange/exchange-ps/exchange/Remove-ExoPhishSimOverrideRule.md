---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/remove-exophishsimoverriderule
applicable: Exchange Online
title: Remove-ExoPhishSimOverrideRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Remove-ExoPhishSimOverrideRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-ExoPhishSimOverrideRule cmdlet to remove third-party phishing simulation override rules to bypass Exchange Online Protection filtering. For more information, see [Configure the advanced delivery policy for third-party phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-ExoPhishSimOverrideRule [-Identity] <ComplianceRuleIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExoPhishSimOverrideRule | Remove-ExoPhishSimOverrideRule
```

This example removes any phishing simulation override rules.

### Example 2
```powershell
Remove-ExoPhishSimOverrideRule -Identity "_Exe:PhishSimOverr:6fed4b63-3563-495d-a481-b24a311f8329"
```

This example removes the specified phishing simulation override rule.

## PARAMETERS

### -Identity
The Identity parameter specifies the phishing simulation override rule that you want to remove. You can use any value that uniquely identifies the rule. For example:

- Name
- Id
- Distinguished name (DN)
- GUID

Use the Get-ExoPhishSimOverrideRule cmdlet to find the values. The rule name syntax is `_Exe:PhishSimOverr:<GUID\>` \[sic\] where \<GUID\> is a unique GUID value (for example, 6fed4b63-3563-495d-a481-b24a311f8329).

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
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
