---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-atpbuiltinprotectionrule
applicable: Exchange Online
title: New-ATPBuiltInProtectionRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-ATPBuiltInProtectionRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

**Note**: Don't use this cmdlet. This cmdlet is used by the system to create the one and only rule for the Built-in protection preset security policy during the creation of the organization. You can't use this cmdlet if a rule for the Built-in protection preset security policy already exists. The Remove-ATPBuiltInProtectionRule cmdlet is not available to remove rules.

Use the New-ATPBuiltInProtectionRule cmdlet to create the rule for the Built-in protection preset security policy that effectively provides default policies for Safe Links and Safe Attachments in Microsoft Defender for Office 365. The rule specifies exceptions to the policy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-ATPBuiltInProtectionRule -SafeAttachmentPolicy <SafeAttachmentPolicyIdParameter> -SafeLinksPolicy <SafeLinksPolicyIdParameter>
 [-Comments <String>]
 [-Confirm]
 [-ExceptIfRecipientDomainIs <Word[]>]
 [-ExceptIfSentTo <RecipientIdParameter[]>]
 [-ExceptIfSentToMemberOf <RecipientIdParameter[]>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
For more information about preset security policies in PowerShell, see [Preset security policies in Exchange Online PowerShell](https://learn.microsoft.com/microsoft-365/security/office-365-security/preset-security-policies#preset-security-policies-in-exchange-online-powershell).

> [!IMPORTANT]
> Different types of recipient conditions or different types of recipient exceptions are not additive; they're inclusive. For more information, see [Profiles in preset security policies](https://learn.microsoft.com/microsoft-365/security/office-365-security/preset-security-policies#profiles-in-preset-security-policies).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ATPBuiltInProtectionRule -SafeAttachmentPolicy "Built-In Protection Policy" -SafeLinksPolicy "Built-In Protection Policy"
```

This cmdlet creates the rule for the Built-in protection preset security policy. This command will fail if the rule already exists.

## PARAMETERS

### -SafeAttachmentPolicy
The SafeAttachmentPolicy parameter specifies the Safe Attachments policy that's associated with the Built-in preset security policy. Use the following command to identify the policy: `Get-SafeAttachmentPolicy | Where-Object -Property IsBuiltInProtection -eq -Value "True"`.

The name of the default Safe Attachments policy that's used for the Built-in protection preset security policy is Built-In Protection Policy.

```yaml
Type: SafeAttachmentPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SafeLinksPolicy
The SafeLinksPolicy parameter specifies the Safe Links policy that's associated with the Built-in preset security policy. Use the following command to identify the policy: `Get-SafeLinksPolicy | Where-Object -Property IsBuiltInProtection -eq -Value "True"`.

The name of the default Safe Links policy that's used for the Built-in protection preset security policy is Built-In Protection Policy.

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

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.
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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the rule. The maximum length is 64 characters.

The name of the only rule is ATP Built-In Protection Rule.

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
