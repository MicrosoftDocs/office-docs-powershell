---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-antiphishrule
schema: 2.0.0
title: Get-AntiPhishRule
---

# Get-AntiPhishRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-AntiPhishRule cmdlet to view antiphish rules in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AntiPhishRule [[-Identity] <RuleIdParameter>]
 [-State <RuleState>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AntiPhishRule | Format-Table Name,Priority,State
```

This example returns a summary list of all antiphish rules in your organization.

### Example 2
```powershell
Get-AntiPhishRule -Identity "Research Department Phishing Rule"
```

This example returns detailed information about the antiphish rule named Research Department Phishing Rule.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the antiphish rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -State

> Applicable: Exchange Online, Exchange Online Protection

The State parameter filters the results by the state of the rule. Valid values are Enabled and Disabled.

```yaml
Type: RuleState
Parameter Sets: (All)
Aliases:

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
