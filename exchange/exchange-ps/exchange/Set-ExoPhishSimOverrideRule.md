---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-exophishsimoverriderule
applicable: Exchange Online
title: Set-ExoPhishSimOverrideRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-ExoPhishSimOverrideRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-ExoPhishSimOverrideRule cmdlet to modify third-party phishing simulation override rules that bypass filtering. For more information, see [Configure the advanced delivery policy for third-party phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ExoPhishSimOverrideRule [-Identity] <ComplianceRuleIdParameter>
 [-AddDomains <MultiValuedProperty>]
 [-AddSenderIpRanges <MultiValuedProperty>]
 [-Comment <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-RemoveDomains <MultiValuedProperty>]
 [-RemoveSenderIpRanges <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExoPhishSimOverrideRule | Set-ExoPhishSimOverrideRule -AddDomains blueyonderairlines.com -RemoveSenderIpRanges 192.168.1.55
```

This example modifies the (presumably only) phishing simulation override rule with the specified settings.

This example modifies the phishing simulation override rule with the specified settings.

### Example 2
```powershell
Set-ExoPhishSimOverrideRule -Identity "_Exe:PhishSimOverr:6fed4b63-3563-495d-a481-b24a311f8329" -AddDomains blueyonderairlines.com -RemoveSenderIpRanges 192.168.1.55
```

This example modifies the specified phishing simulation override rule with the specified settings.

## PARAMETERS

### -Identity
The Identity parameter specifies the phishing simulation override rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- Name
- Id
- Distinguished name (DN)
- GUID

Use the Get-ExoPhishSimOverrideRule cmdlet to find the values. The name of the rule uses the following syntax: `_Exe:PhishSimOverr:<GUID\>` \[sic\] where \<GUID\> is a unique GUID value (for example, 6fed4b63-3563-495d-a481-b24a311f8329).

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

### -AddDomains
The AddDomains parameter specifies an existing entry to add to the list of email domains that are used by the third-party phishing simulation.

You can specify multiple values separated by commas. A maximum of 20 entries are allowed in the list.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSenderIpRanges
The AddSenderIpRanges parameter specifies an existing entry to add to the list of source IP addresses that are used by the third-party phishing simulation. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify multiple values separated by commas.

A maximum of 10 entries are allowed in the list.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -RemoveDomains
The RemoveDomains parameter specifies an existing entry to remove from the list of email domains that are used by the third-party phishing simulation.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSenderIpRanges
The RemoveSenderIpRanges parameter specifies an existing entry to remove from the list of source IP addresses that are used by the third-party phishing simulation. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
