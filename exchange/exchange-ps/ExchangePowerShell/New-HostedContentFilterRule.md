---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-hostedcontentfilterrule
schema: 2.0.0
title: New-HostedContentFilterRule
---

# New-HostedContentFilterRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-HostedContentFilterRule cmdlet to create spam filter rules (content filter rules) in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-HostedContentFilterRule [-Name] <String> -HostedContentFilterPolicy <HostedContentFilterPolicyIdParameter>
 [-Comments <String>]
 [-Confirm]
 [-Enabled <Boolean>]
 [-ExceptIfRecipientDomainIs <Word[]>]
 [-ExceptIfSentTo <RecipientIdParameter[]>]
 [-ExceptIfSentToMemberOf <RecipientIdParameter[]>]
 [-Priority <Int32>]
 [-RecipientDomainIs <Word[]>]
 [-SentTo <RecipientIdParameter[]>]
 [-SentToMemberOf <RecipientIdParameter[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
> [!IMPORTANT]
> Different types of recipient conditions use AND logic (the recipient must satisfy **all** specified conditions). Different types of recipient exceptions use OR logic (the recipient must satisfy **any** of the specified exceptions). For more information, see [Use the Microsoft Defender portal to create anti-spam policies](https://learn.microsoft.com/defender-office-365/anti-spam-policies-configure#use-the-microsoft-defender-portal-to-create-anti-spam-policies).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-HostedContentFilterRule -Name "Contoso Recipients" -HostedContentFilterPolicy "Contoso Spam Filter Policy" -RecipientDomainIs contoso.com
```

This example creates a new spam filter rule named Contoso Recipients with the following settings: If the recipient is in the domain contoso.com, apply the spam filter policy named Contoso Spam Filter Policy.

## PARAMETERS

### -Name

> Applicable: Exchange Online, Exchange Online Protection

The Name parameter specifies a unique name for the spam filter rule. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

Don't use the following characters in the name value: `\ % & * + / = ? { } | < > ( ) ; : [ ] , "`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostedContentFilterPolicy

> Applicable: Exchange Online, Exchange Online Protection

The HostedContentFilterPolicy parameter specifies the spam filter policy (content filter policy) that's associated with the rule.

You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

You can't specify the default spam filter policy, and you can't specify a spam filter policy that's already associated with another spam filter rule.

```yaml
Type: HostedContentFilterPolicyIdParameter
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

The Enabled parameter enables or disables the rule. Valid input for this parameter is $true or $false. The default value is $true.

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

### -ExceptIfRecipientDomainIs

> Applicable: Exchange Online, Exchange Online Protection

The ExceptIfRecipientDomainIs parameter specifies an exception for the rule that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

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

### -ExceptIfSentTo

> Applicable: Exchange Online, Exchange Online Protection

The ExceptIfSentTo parameter specifies an exception for the rule that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

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

### -ExceptIfSentToMemberOf

> Applicable: Exchange Online, Exchange Online Protection

The ExceptIfSentToMemberOf parameter specifies an exception for the rule that looks for messages sent to members of distribution groups, mail-enabled security groups, or sent to Microsoft 365 Groups. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

If you remove the group after you create the rule, no exception is made for messages that are sent to members of the group.

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
- Valid priority values for a 9th new rule are from 0 through 8.
- The default value for the new 9th rule is 8.

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

### -RecipientDomainIs

> Applicable: Exchange Online, Exchange Online Protection

The RecipientDomainIs parameter specifies a condition for the rule that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

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

### -SentTo

> Applicable: Exchange Online, Exchange Online Protection

The SentTo parameter specifies a condition for the rule that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

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

### -SentToMemberOf

> Applicable: Exchange Online, Exchange Online Protection

The SentToMemberOf parameter specifies a condition that looks for messages sent to members of distribution groups, mail-enabled security groups, or sent to Microsoft 365 Groups. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

If you remove the group after you create the rule, no action is taken on messages that are sent to members of the group.

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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
