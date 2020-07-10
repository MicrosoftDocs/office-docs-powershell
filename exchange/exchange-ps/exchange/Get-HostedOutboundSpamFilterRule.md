---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-hostedoutboundspamfilterrule
applicable: Exchange Online, Exchange Online Protection
title: Get-HostedOutboundSpamFilterRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Get-HostedOutboundSpamFilterRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-HostedOutboundSpamFilterRule cmdlet to view outbound spam filter rules in your cloud-based organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-HostedOutboundSpamFilterRule [[-Identity] <RuleIdParameter>] [-State <RuleState>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

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
The Identity parameter specifies the outbound spam filter rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name

- Distinguished name (DN)

- GUID

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
The State parameter filters the results by enabled or disabled rules. Valid values are:

- Enabled: Only enabled rules are returned.

- Disabled: Only disabled rules are returned.

```yaml
Type: RuleState
Parameter Sets: (All)
Aliases:
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

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
