---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-hostedoutboundspamfilterrule
schema: 2.0.0
title: New-HostedOutboundSpamFilterRule
---

# New-HostedOutboundSpamFilterRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-HostedOutboundSpamFilterRule cmdlet to create outbound spam filter rules in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-HostedOutboundSpamFilterRule [-Name] <String> -HostedOutboundSpamFilterPolicy <HostedOutboundSpamFilterPolicyIdParameter>
 [-Comments <String>]
 [-Confirm]
 [-Enabled <Boolean>]
 [-ExceptIfFrom <RecipientIdParameter[]>]
 [-ExceptIfFromMemberOf <RecipientIdParameter[]>]
 [-ExceptIfSenderDomainIs <Word[]>]
 [-From <RecipientIdParameter[]>]
 [-FromMemberOf <RecipientIdParameter[]>]
 [-Priority <Int32>]
 [-SenderDomainIs <Word[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-HostedOutboundSpamFilterRule -Name "Contoso Executives" -HostedOutboundSpamFilterPolicy "Contoso Executives" -FromMemberOf Executives
```

This example creates a new outbound spam filter rule named Contoso Executives that's associated with the outbound spam filter policy name Contoso Executives that applies to the members of the Executives group.

## PARAMETERS

### -Name

> Applicable: Exchange Online, Exchange Online Protection

The Name parameter specifies a unique name for the outbound spam filter rule. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

Don't use the following characters: `\ % & * + / = ? { } | < > ( ) ; : [ ] , "`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostedOutboundSpamFilterPolicy

> Applicable: Exchange Online, Exchange Online Protection

The HostedOutboundSpamFilterPolicy parameter specifies the outbound spam filter policy that's associated with the outbound spam filter rule.

You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID.

You can't specify the default outbound spam filter policy, and you can't specify a policy that's already associated with another outbound spam filter rule.

```yaml
Type: HostedOutboundSpamFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comments

> Applicable: Exchange Online, Exchange Online Protection

The Comments parameter specifies informative comments for the rule, such as what the rule is used for or how it has changed over time. The length of the comment can't exceed 1024 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -Enabled

> Applicable: Exchange Online, Exchange Online Protection

The Enabled parameter specifies whether the rule is enabled. Valid values are:

- $true: The rule is enabled. This is the default value.
- $false: The rule is disabled.

In the properties of the rule, the value of this parameter is visible in the State property.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFrom

> Applicable: Exchange Online, Exchange Online Protection

The ExceptIfFrom parameter specifies an exception that looks for messages from specific senders. You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromMemberOf

> Applicable: Exchange Online, Exchange Online Protection

The ExceptIfFromMemberOf parameter specifies an exception that looks for messages sent by group members. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderDomainIs

> Applicable: Exchange Online, Exchange Online Protection

The ExceptIfSenderDomainIs parameter specifies an exception that looks for senders with email address in the specified domains. You can specify multiple domains separated by commas.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From

> Applicable: Exchange Online, Exchange Online Protection

The From parameter specifies a condition that looks for messages from specific senders. You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromMemberOf

> Applicable: Exchange Online, Exchange Online Protection

The FromMemberOf parameter specifies a condition that looks for messages sent by group members. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority

> Applicable: Exchange Online, Exchange Online Protection

The Priority parameter specifies a priority value for the rule that determines the order of rule processing. A lower integer value indicates a higher priority, the value 0 is the highest priority, and rules can't have the same priority value.

Valid values and the default value for this parameter depend on the number of existing rules. For example, if there are 8 existing rules:

- Valid priority values for the existing 8 rules are from 0 through 7.
- Valid priority values for a new rule (the 9th rule) are from 0 through 8.
- The default value for a new rule (the 9th rule) is 8.

If you modify the priority value of a rule, the position of the rule in the list changes to match the priority value you specify. In other words, if you set the priority value of a rule to the same value as an existing rule, the priority value of the existing rule and all other lower priority rules after it is increased by 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderDomainIs

> Applicable: Exchange Online, Exchange Online Protection

The SenderDomainIs parameter specifies a condition that looks for senders with email address in the specified domains. You can specify multiple domains separated by commas.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Online, Exchange Online Protection

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
