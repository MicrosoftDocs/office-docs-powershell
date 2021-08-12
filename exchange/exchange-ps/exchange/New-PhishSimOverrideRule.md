---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-phishsimoverriderule
applicable: Security & Compliance Center
title: New-PhishSimOverrideRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-PhishSimOverrideRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the New-PhishSimOverrideRule cmdlet to create third-party phishing simulation override rules to bypass Exchange Online Protection filtering. For more information, see [Configure the delivery of third-party phishing simulations to users and unfiltered messages to SecOps mailboxes](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-advanced-delivery).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-PhishSimOverrideRule [-Name] <String> -Policy <PolicyIdParameter> -SenderDomainIs <MultiValuedProperty> -SenderIpRanges <MultiValuedProperty>
 [-Comment <String>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

## EXAMPLES

### Example 1
```powershell
New-PhishSimOverrideRule -Name PhishSimOverrideRule -Policy PhishSimOverridePolicy -SenderDomainIs fabrikam.com,wingtiptoys.com -SenderIpRanges 192.168.1.55
```

This example creates a new phishing simulation override rule with the specified settings.

## PARAMETERS

### -Name
The Name parameter specifies the name for the policy. Regardless of the value you specify, the name will be PhishSimOverrideRule\<GUID\> where \<GUID\> is a unique GUID value (for example, a0eae53e-d755-4a42-9320-b9c6b55c5011).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance Center

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy
The Policy parameter specifies the phishing simulation override policy that's associated with the rule. You can use any value that uniquely identifies the policy. For example:

- Name
- Id
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All))
Aliases:
Applicable: Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderDomainIs
The SenderDomainIs parameter specifies the email domain that's used by the third-party phishing simulation.

You can specify up to 10 values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderIpRanges
The SenderIpRanges parameter specifies the source IP address that's used by the third-party phishing simulation. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify up to 10 entries separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance Center

Required: True
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
Applicable: Security & Compliance Center

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
Applicable: Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance Center PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Security & Compliance Center

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
