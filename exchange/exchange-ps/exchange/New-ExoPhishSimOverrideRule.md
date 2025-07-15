---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-exophishsimoverriderule
applicable: Exchange Online
title: New-ExoPhishSimOverrideRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-ExoPhishSimOverrideRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-ExoPhishSimOverrideRule cmdlet to create third-party phishing simulation override rules that bypass filtering. For more information, see [Configure the advanced delivery policy for third-party phishing simulations and email delivery to SecOps mailboxes](https://learn.microsoft.com/defender-office-365/advanced-delivery-policy-configure).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
New-ExoPhishSimOverrideRule -Policy <PolicyIdParameter> -SenderIpRanges <MultiValuedProperty>
 [-Comment <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Domains <Fqdn>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ExoPhishSimOverrideRule -Policy PhishSimOverridePolicy -Domains fabrikam.com,wingtiptoys.com -SenderIpRanges 192.168.1.55
```

This example creates a new phishing simulation override rule with the specified settings. Regardless of the Name value specified, the rule name will be `_Exe:PhishSimOverr:<GUID\>` \[sic\] where \<GUID\> is a unique GUID value (for example, 6fed4b63-3563-495d-a481-b24a311f8329).

## PARAMETERS

### -Policy
The Policy parameter specifies the phishing simulation override policy that's associated with the rule. You can use any value that uniquely identifies the policy. For example:

- Name
- Id
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: Default, PublishComplianceTag, ComplianceTag, SetRawXml
Aliases:
Applicable: Exchange Online

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

A phishing simulation entry requires at least one IP address in this parameter and at least one domain in the Domains parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Exchange Online

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
Parameter Sets: Default
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

### -Domains
The Domains parameter specifies the email domain that's used by the third-party phishing simulation. You can use either of the following values:

- The `5321.MailFrom` address (also known as the MAIL FROM address, P1 sender, or envelope sender).
- The DKIM domain.

You can specify up to 20 values separated by commas.

A phishing simulation requires at least one domain from this parameter and at least one IP address in the SenderIPRanges parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name for the policy. Regardless of the value you specify, the name will be `_Exe:PhishSimOverr:<GUID\>` \[sic\] where \<GUID\> is a unique GUID value (for example, 6fed4b63-3563-495d-a481-b24a311f8329).

```yaml
Type: String
Parameter Sets: Default
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
