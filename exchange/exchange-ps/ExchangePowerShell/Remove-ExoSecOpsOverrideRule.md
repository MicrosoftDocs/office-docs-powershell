---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-exosecopsoverriderule
schema: 2.0.0
title: Remove-ExoSecOpsOverrideRule
---

# Remove-ExoSecOpsOverrideRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-ExoSecOpsOverrideRule cmdlet to remove SecOps mailbox override rules that bypass filtering. For more information, see [Configure the advanced delivery policy for non-Microsoft phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-ExoSecOpsOverrideRule [-Identity] <ComplianceRuleIdParameter>
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
Get-ExoSecOpsOverrideRule| Remove-ExoSecOpsOverrideRule
```

This example removes any SecOps mailbox override rules.

### Example 2
```powershell
Remove-ExoSecOpsOverrideRule -Identity "_Exe:SecOpsOverrid:312c23cf-0377-4162-b93d-6548a9977efb"
```

This example removes the specified SecOps mailbox override rule.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the SecOps override rule that you want to remove. You can use any value that uniquely identifies the rule. For example:

- Name
- Id
- Distinguished name (DN)
- GUID

Use the Get-ExoSecOpsMailboxRule cmdlet to find these values. The name of the rule uses the following syntax: `_Exe:SecOpsOverrid:<GUID\>` \[sic\] where \<GUID\> is a unique GUID value (for example, 312c23cf-0377-4162-b93d-6548a9977efb).

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -DomainController

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
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

This parameter is reserved for internal Microsoft use.

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
