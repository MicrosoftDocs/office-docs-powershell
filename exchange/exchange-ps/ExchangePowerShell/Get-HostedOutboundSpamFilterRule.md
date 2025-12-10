---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-hostedoutboundspamfilterrule
schema: 2.0.0
title: Get-HostedOutboundSpamFilterRule
---

# Get-HostedOutboundSpamFilterRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-HostedOutboundSpamFilterRule cmdlet to view outbound spam filter rules in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-HostedOutboundSpamFilterRule [[-Identity] <RuleIdParameter>]
 [-State <RuleState>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-HostedOutboundSpamFilterRule | Format-Table Name,Priority,State,HostedOutboundSpamFilterPolicy
```

This example returns a summary list of all outbound spam filter rules.

### Example 2
```powershell
Get-HostedOutboundSpamFilterRule -Identity "Contoso Executives"
```

This example returns detailed information for the outbound spam filter rule named "Contoso Executives"

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the outbound spam filter rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

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

The State parameter filters the results by enabled or disabled rules. Valid values are:

- Enabled: Only enabled rules are returned.
- Disabled: Only disabled rules are returned.

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
