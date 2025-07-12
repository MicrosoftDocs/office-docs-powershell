---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-tenantallowblocklistspoofitems
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
title: New-TenantAllowBlockListSpoofItems
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-TenantAllowBlockListSpoofItems

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-TenantAllowBlockListSpoofItems cmdlet to create spoofed sender entries in the Tenant Allow/Block List.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-TenantAllowBlockListSpoofItems [-Identity] <HostedConnectionFilterPolicyIdParameter> -Action <String> -SendingInfrastructure <String> -SpoofedUser <String> -SpoofType <String>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet adds a spoof pair (the combination of the spoofed user and the sending infrastructure) to the Tenant Allow/Block List.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-TenantAllowBlockListSpoofItems -Identity Default -Action Allow -SendingInfrastructure contoso.com -SpoofedUser bob@contoso.com -SpoofType External
```

This example creates an allow entry for the sender bob@contoso.com from the source contoso.com.

## PARAMETERS

### -Identity
The Identity parameter uses the value Default.

```yaml
Type: HostedConnectionFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -SendingInfrastructure
The SendingInfrastructure parameter specifies the source of the messages sent by the spoofed sender that's defined in the SpoofedUser parameter. Valid values are:

- An email domain (for example contoso.com). The domain is found in the reverse DNS lookup (PTR record) of the source email server's IP address.
- An IP address using the syntax: \<source IP\>/24 (for example, 192.168.100.100/24). Use the IP address if the source IP address has no PTR record. /24 is the only available and maximum subnet depth.
- A verified DKIM domain.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: True
```

### -SpoofedUser
The SpoofedUser parameter specifies the email address or domain for the spoofed sender entry.

- For domains outside your organization (cross-org), use the domain of the email address that appears in the From field of the message.
- For domains inside your organization (intra-org), use the full email address that appears in the From field of the message.

For spoofed senders, the maximum number of entries is 1024.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: True
```

### -SpoofType
The SpoofType parameter specifies whether this is an internal or external spoofed sender entry. Valid values are:

- External
- Internal

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Action
The Action parameter specifies whether is an allowed or blocked spoofed sender entry. Valid values are:

- Allow
- Block

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
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
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

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
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

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
