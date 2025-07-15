---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-exophishsimoverriderule
applicable: Exchange Online
title: Get-ExoPhishSimOverrideRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ExoPhishSimOverrideRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ExoPhishSimOverrideRule cmdlet to view third-party phishing simulation override rules that bypass filtering. For more information, see [Configure the advanced delivery policy for third-party phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ExoPhishSimOverrideRule [[-Identity] <ComplianceRuleIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Policy <PolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExoPhishSimOverrideRule
```

This example returns detailed information about the phishing simulation override (there should be only one).

### Example 2
```powershell
Get-ExoPhishSimOverrideRule | Format-Table Name,Mode
```

This example identifies the valid rule (one) and any invalid rules.

Although the previous command should return only one rule, a rule that's pending deletion might also be included in the results.

## PARAMETERS

### -Identity
The Identity parameter specifies the phishing simulation override rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name
- Id
- Distinguished name (DN)
- GUID

The name of the rule uses the following syntax: `_Exe:PhishSimOverr:<GUID\>` \[sic\] where \<GUID\> is a unique GUID value (for example, 6fed4b63-3563-495d-a481-b24a311f8329).

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
This parameter is reserved for internal Microsoft use.

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

### -Policy
The Policy parameter filters the results by phishing simulator override policy. You can use any value that uniquely identifies the policy. For example:

- Name
- Id
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
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
This parameter is reserved for internal Microsoft use.

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
