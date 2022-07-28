---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-atpprotectionpolicyrule
applicable: Exchange Online, Exchange Online Protection
title: New-ATPProtectionPolicyRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-ATPProtectionPolicyRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-ATPProtectionPolicyRule cmdlet to create rules that are associated with Microsoft Defender for Office 365 protections in preset security policies.

**Note**: Unless you manually removed a rule using the Remove-ATPProtectionPolicyRule cmdlet, we don't recommend using this cmdlet to create rules. To create the rule, you need to specify the existing individual protection feature policies that are associated with the preset security policy. We never recommend creating these required individual policies manually. Turning on the preset security policy for the first time in the Microsoft 365 Defender portal automatically creates the required individual policies, but also creates the associated rules. So, if the rules already exist, you don't need to use this cmdlet to create them.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

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
In organizations with Microsoft Defender for Office 365, the Standard preset security policy and the Strict preset security policy each have a rule that's associated with Defender for Office 365 protections. These rules control the following settings:

- Recipient conditions and exceptions that specify who the Defender for Office 365 protections in the policy (Safe Links and Safe Attachments) apply to. If the conditions and exceptions are blank, then no restrictions are placed on who the Defender for Office 365 protections in the policy apply to.
- Whether the preset security policy is turned on or turned off (the State property value). To completely turn on or turn off the preset security policy, the State property value in the corresponding Exchange Online Protection (EOP) rule must match the State value of this rule (Enabled or Disabled).

A rule that's associated with the Defender for Office 365 protections in the Standard preset security policy or the Strict preset security policy exists in organizations with Defender for Office 365 if you previously turned on the Standard preset security policy or the Strict preset security policy in the Microsoft 365 Defender portal. Whether it's currently turned on after you initially turned it on doesn't matter.

As previous explained, you should use this cmdlet to create a new rule only if you previously removed the rule using the Remove-ATPProtectionPolicyRule cmdlet.

For more information about preset security policies, see [Preset security policies in EOP and Microsoft Defender for Office 365](https://docs.microsoft.com/microsoft-365/security/office-365-security/preset-security-policies).

> [!IMPORTANT]
> Multiple different conditions or exceptions are not additive; they're inclusive. The conditions or exceptions to Defender for Office 365 protections in preset security policies are applied _only_ to those recipients that match _all_ of the specified recipient filters. For example, you configure a recipient filter condition in the policy with the following values:
>
> - The recipient is: romain@contoso.com
> - The recipient is a member of: Executives
>
> The policy is applied to romain@contoso.com _only_ if he's also a member of the Executives group. If he's not a member of the group, then the policy is not applied to him.
>
> Likewise, if you use the same recipient filter as an exception to the policy, the policy is not applied to romain@contoso.com _only_ if he's also a member of the Executives group. If he's not a member of the group, then the policy still applies to him.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ATPProtectionPolicyRule -Name "Standard Preset Security Policy" -SafeAttachmentPolicy "Standard Preset Security Policy1622650008019" -SafeLinksRule "Standard Preset Security Policy1622650008534" Priority 1
```

This example creates the rule for the Standard preset security policy. No restrictions are placed on who the Defender for Office 365 protections apply to. All recipients who aren't affected by the Strict preset security (if it's turned on) receive the Defender for Office 365 protections in the Standard preset security policy. You find the associated Safe Attachments policy and Safe Links policy using the Get-SafeAttachmentPolicy and Get-SafeLinksPolicy cmdlets. These policies are created only after you turned the Standard preset policy on for the first time in the Microsoft 365 Defender portal.

### Example 1
```powershell
New-ATPProtectionPolicyRule -Name "Standard Preset Security Policy" -SafeAttachmentPolicy "Standard Preset Security Policy1622650008019" -SafeLinksRule "Standard Preset Security Policy1622650008534" -ExceptIfSentToMemberOf std-exclude-mdo@contoso.com Priority 1
```

This example creates the rule for the Standard preset security policy. Members of the specified distribution group are excluded from Defender for Office 365 protections. You find the associated Safe Attachments policy and Safe Links policy using the Get-SafeAttachmentPolicy and Get-SafeLinksPolicy cmdlets. These policies are created only after you turned the Standard preset policy on for the first time in the Microsoft 365 Defender portal.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the rule. The maximum length is 64 characters.

By default, the rules are named Standard Preset Security Policy or Strict Preset Security Policy. Since you don't need to create rules other than those used by the Standard preset security policy or the Strict preset security policy, we highly recommend that you use the default rule names for clarity and consistency.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SafeAttachmentPolicy
The SafeAttachmentPolicy cmdlet specifies the existing Safe Attachments policy that's part of the preset security policy.

If you ever turned on the preset security policy in the Microsoft 365 Defender portal, the name of the Safe Attachments policy will be one of the following values:

- Standard Preset Security Policy\<13-digit number\>. For example, `Standard Preset Security Policy1622650008019`.
- Strict Preset Security Policy\<13-digit number\>. For example, `Strict Preset Security Policy1642034872546`.

You can find the name of the policy that's used by the Standard or Strict preset security policies running the command: `Get-SafeAttachmentPolicy | Format-Table Name,RecommendedPolicyType` and looking for policies where the RecommendedPolicyType property value is Standard or Strict.

```yaml
Type: SafeAttachmentPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SafeLinksPolicy
The SafeLinksPolicy cmdlet specifies the existing Safe Links policy that's part of the preset security policy.

If you ever turned on the preset security policy in the Microsoft 365 Defender portal, the name of the Safe Attachments policy will be one of the following values:

- Standard Preset Security Policy\<13-digit number\>. For example, `Standard Preset Security Policy1622650008534`.
- Strict Preset Security Policy\<13-digit number\>. For example, `Strict Preset Security Policy1642034873192`.

You can find the name of the policy that's used by the Standard or Strict preset security policies running the command: `Get-SafeLinksPolicy | Format-Table Name,RecommendedPolicyType` and looking for policies where the RecommendedPolicyType property value is Standard or Strict.

```yaml
Type: SafeLinksPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether the rule is enabled. Valid values are:

- $true: The rule is enabled. The State value of the rule is Enabled. This is the default value.
- $false: The rule is disabled. The State value of the rule is Disabled.

After you create the rule, you turn on or turn off the preset security policy using both of the following cmdlets (both cmdlets):

- Turn off: Disable-ATPProtectionPolicyRule and Disable-EOPProtectionPolicyRule.
- Turn on: Enable-ATPProtectionPolicyRule and Enable-EOPProtectionPolicyRule.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientDomainIs
The ExceptIfRecipientDomainIs parameter specifies an exception that looks for recipients with email address in the specified domains. You can specify multiple domains separated by commas.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentToMemberOf
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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specifies a priority value for the rule that determines the order of rule processing. A lower integer value indicates a higher priority, the value 0 is the highest priority, and rules can't have the same priority value.

The default value for the rule that's associated with the Strict preset security policy is 0, and the default value for the rule that's associated with the Standard preset security policy is 1.

When you create the policy, you must use the default value.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDomainIs
The RecipientDomainIs parameter specifies a condition that looks for recipients with email address in the specified domains. You can specify multiple domains separated by commas.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToMemberOf
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
Applicable: Exchange Online, Exchange Online Protection

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

## OUTPUTS

## NOTES

## RELATED LINKS
