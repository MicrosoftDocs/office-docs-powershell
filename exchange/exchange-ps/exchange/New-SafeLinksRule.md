---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-safelinksrule
applicable: Exchange Online
title: New-SafeLinksRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-SafeLinksRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-SafeLinksRule cmdlet to create Safe Links rules in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-SafeLinksRule [-Name] <String> -SafeLinksPolicy <SafeLinksPolicyIdParameter>
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
You need to specify at least one condition for the rule.

Safe Links is a feature in Microsoft Defender for Office 365 that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites. Safe Links includes the URL trace reporting feature to help determine who has clicked through to a malicious web site.

> [!IMPORTANT]
> Different types of recipient conditions use AND logic (the recipient must satisfy **all** specified conditions). Different types of recipient exceptions use OR logic (the recipient must satisfy **any** of the specified exceptions). For more information, see [Recipient filters in Safe Links policies](https://learn.microsoft.com/microsoft-365/security/office-365-security/safe-links-about#recipient-filters-in-safe-links-policies).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-SafeLinksRule -Name "Research Department URL Rule" -SafeLinksPolicy "Research Block URL" -SentToMemberOf "Research Department" -ExceptIfSentToMemberOf "Research Department Managers"
```

This example creates a new Safe Links rule named Research Department URL Rule with the following conditions:

- The rule is associated with the Safe Links policy named Research Block URL.
- The rule applies to members of the group named Research Department.
- Because we aren't using the Priority parameter, the default priority is used.
- The rule doesn't apply to members of the group named Research Department Managers.
- The rule is enabled (we aren't using the Enabled parameter, and the default value is `$true`).

### Example 2
```powershell
New-SafeLinksRule -Name "Contoso All" -SafeLinksPolicy "Contoso All" -RecipientDomainIs (Get-AcceptedDomain).Name
```

This example creates a Safe Links rule named Contoso All with the following conditions:

- The rule is associated with the Safe Links policy named Contoso All.
- The rule applies to recipients in all accepted domains in the organization.
- Because we aren't using the Priority parameter, the default priority is used.
- The rule is enabled (we aren't using the Enabled parameter, and the default value is `$true`).

### Example 3
```powershell
$Data = Import-Csv -Path "C:\Data\SafeLinksDomains.csv"

$SLDomains = $Data.Domains

New-SafeLinksRule -Name "Contoso All" -SafeLinksPolicy "Contoso All" -RecipientDomainIs $SLDomains
```

This example is similar to Example 2, but in this example, the rule applies to recipients in the domains specified in a .csv file.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the Safe Links rule. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SafeLinksPolicy
The SafeLinksPolicy parameter specifies the Safe Links policy that's associated with this Safe Links rule. The rule defines the conditions and the policy defines the actions.

You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

You can't specify a Safe Links policy that's already associated with another Safe Links rule.

```yaml
Type: SafeLinksPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comments
The Comments parameter specifies informative comments for the rule, such as what the rule is used for or how it has changed over time. The length of the comment can't exceed 1024 characters.

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

### -Enabled
The Enabled parameter specifies whether the rule is enabled. Valid values are:

- $true: The rule is enabled. This is the default value.
- $false: The rule is disabled.

In the properties of the rule, the value of this parameter is visible in the State property.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientDomainIs
The ExceptIfRecipientDomainIs parameter specifies an exception that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentTo
The ExceptIfSentTo parameter specifies an exception that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentToMemberOf
The ExceptIfSentToMemberOf parameter specifies an exception that looks for messages sent to members of distribution groups, mail-enabled security groups, or sent to Microsoft 365 Groups. You can use any value that uniquely identifies the group. For example:

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDomainIs
The RecipientDomainIs parameter specifies a condition that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo
The SentTo parameter specifies a condition that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToMemberOf
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
