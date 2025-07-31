---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-atpprotectionpolicyrule
schema: 2.0.0
title: New-ATPProtectionPolicyRule
---

# New-ATPProtectionPolicyRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-ATPProtectionPolicyRule cmdlet to create rules for Microsoft Defender for Office 365 protections in preset security policies. The rules specify recipient conditions and exceptions for the protection, and also allow you to turn on and turn off the associated preset security policies.

**Note**: Unless you manually removed a rule using the Remove-ATPProtectionPolicyRule cmdlet, we don't recommend using this cmdlet to create rules. To create the rule, you need to specify the existing individual security policies that are associated with the preset security policy. We never recommend creating these required individual security policies manually. Turning on the preset security policy for the first time in the Microsoft Defender portal automatically creates the required individual security policies, but also creates the associated rules using this cmdlet. So, if the rules already exist, you don't need to use this cmdlet to create them.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-ATPProtectionPolicyRule [-Name] <String> -SafeAttachmentPolicy <SafeAttachmentPolicyIdParameter> -SafeLinksPolicy <SafeLinksPolicyIdParameter>
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
For more information about preset security policies in PowerShell, see [Preset security policies in Exchange Online PowerShell](https://learn.microsoft.com/defender-office-365/preset-security-policies#preset-security-policies-in-exchange-online-powershell).

> [!IMPORTANT]
> Different types of recipient conditions use AND logic (the recipient must satisfy **all** specified conditions). Different types of recipient exceptions use OR logic (the recipient must satisfy **any** of the specified exceptions). For more information, see [Profiles in preset security policies](https://learn.microsoft.com/defender-office-365/preset-security-policies#profiles-in-preset-security-policies).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ATPProtectionPolicyRule -Name "Standard Preset Security Policy" -SafeAttachmentPolicy "Standard Preset Security Policy1622650008019" -SafeLinksRule "Standard Preset Security Policy1622650008534" Priority 1
```

This example creates the rule for the Standard preset security policy. No restrictions are placed on who the Defender for Office 365 protections apply to. If the rule already exists, the command will fail.

## PARAMETERS

### -Name

> Applicable: Exchange Online

The Name parameter specifies a unique name for the rule. The maximum length is 64 characters.

By default, the rules are named Standard Preset Security Policy or Strict Preset Security Policy. Since you don't need to create rules other than those used by the Standard preset security policy or the Strict preset security policy, we highly recommend that you use the default rule names for clarity and consistency.

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

### -SafeAttachmentPolicy

> Applicable: Exchange Online

The SafeAttachmentPolicy parameter specifies the existing Safe Attachments policy that's associated with the preset security policy.

If you ever turned on the preset security policy in the Microsoft Defender portal, the name of the Safe Attachments policy will be one of the following values:

- Standard Preset Security Policy\<13-digit number\>. For example, `Standard Preset Security Policy1622650008019`.
- Strict Preset Security Policy\<13-digit number\>. For example, `Strict Preset Security Policy1642034872546`.

You can find the Safe Attachments policy that's used by the Standard or Strict preset security policies by running the following commands: `Get-SafeAttachmentPolicy | Where-Object -Property RecommendedPolicyType -eq -Value "Standard"` or `Get-SafeAttachmentPolicy | Where-Object -Property RecommendedPolicyType -eq -Value "Strict"`.

```yaml
Type: SafeAttachmentPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SafeLinksPolicy

> Applicable: Exchange Online

The SafeLinksPolicy parameter specifies the existing Safe Links policy that's associated with the preset security policy.

If you ever turned on the preset security policy in the Microsoft Defender portal, the name of the Safe Attachments policy will be one of the following values:

- Standard Preset Security Policy\<13-digit number\>. For example, `Standard Preset Security Policy1622650008534`.
- Strict Preset Security Policy\<13-digit number\>. For example, `Strict Preset Security Policy1642034873192`.

You can find the Safe Links policy that's used by the Standard or Strict preset security policies by running the following commands: `Get-SafeLinksPolicy | Where-Object -Property RecommendedPolicyType -eq -Value "Standard"` or `Get-SafeLinksPolicy | Where-Object -Property RecommendedPolicyType -eq -Value "Strict"`.

```yaml
Type: SafeLinksPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comments

> Applicable: Exchange Online

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

> Applicable: Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.
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

> Applicable: Exchange Online

The Enabled parameter specifies whether the rule is enabled. Valid values are:

- $true: The rule is enabled. The State value of the rule is Enabled. This is the default value.
- $false: The rule is disabled. The State value of the rule is Disabled.

After you create the rule, you turn on or turn off the preset security policy using one of the following commands:

- Turn off: Disable-ATPProtectionPolicyRule and Disable-EOPProtectionPolicyRule.
- Turn on: Enable-ATPProtectionPolicyRule and Enable-EOPProtectionPolicyRule.

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

> Applicable: Exchange Online

The ExceptIfRecipientDomainIs parameter specifies an exception that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

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

> Applicable: Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentToMemberOf

> Applicable: Exchange Online,

The ExceptIfSentToMemberOf parameter specifies an exception that looks for messages sent to members of groups. You can use any value that uniquely identifies the group. For example:

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

> Applicable: Exchange Online

The Priority parameter specifies a priority value for the rule that determines the order of rule processing. A lower integer value indicates a higher priority, the value 0 is the highest priority, and rules can't have the same priority value.

The default value for the rule that's associated with the Strict preset security policy is 0, and the default value for the rule that's associated with the Standard preset security policy is 1.

When you create the policy, you must use the default value.

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

> Applicable: Exchange Online

The RecipientDomainIs parameter specifies a condition that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

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

> Applicable: Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToMemberOf

> Applicable: Exchange Online

The SentToMemberOf parameter specifies a condition that looks for messages sent to members of distribution groups, dynamic distribution groups, or mail-enabled security groups. You can use any value that uniquely identifies the group. For example:

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

> Applicable: Exchange Online

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
