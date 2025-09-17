---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-teamsprotectionpolicyrule
schema: 2.0.0
title: New-TeamsProtectionPolicyRule
---

# New-TeamsProtectionPolicyRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-TeamsProtectionPolicyRule cmdlet to create Microsoft Teams protection policy rules.

**Note**: If the rule already exists (the Get-TeamsProtectionPolicyRule cmdlet returns output), you can't use this cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-TeamsProtectionPolicyRule [-Name] <String> -TeamsProtectionPolicy <TeamsProtectionPolicyIdParameter>
 [-Comments <String>]
 [-Confirm]
 [-Enabled <Boolean>]
 [-ExceptIfRecipientDomainIs <Word[]>]
 [-ExceptIfSentTo <RecipientIdParameter[]>]
 [-ExceptIfSentToMemberOf <RecipientIdParameter[]>]
 [-Organization <OrganizationIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet only if the following statements are true:

- The Teams protection policy rule doesn't exist (the Get-TeamsProtectionPolicyRule cmdlet returns no output).
- The Teams protection policy exists (the Get-TeamsProtectionPolicy cmdlet returns output).

> [!IMPORTANT]
> Different types of recipient exceptions use OR logic (the recipient must satisfy **any** of the specified exceptions). For more information, see [Configure ZAP for Teams protection in Defender for Office 365 Plan 2](https://learn.microsoft.com/defender-office-365/mdo-support-teams-about#configure-zap-for-teams-protection-in-defender-for-office-365-plan-2).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-TeamsProtectionPolicyRule -Name "Teams Protection Policy Rule" -TeamsProtectionPolicy "Teams Protection Policy" -ExceptIfSentToMemberOf research@contoso.onmicrosoft.com
```

This example creates the Teams protection policy rule with members of the group named Research excluded from ZAP for Teams protection.

## PARAMETERS

### -Name

> Applicable: Exchange Online

The Name parameter specifies the unique name of the Teams protection policy rule. If the value contains spaces, enclose the value in quotation marks. The default name of the Teams protection policy rule in an organization is Teams Protection Policy Rule. We recommend using this value.

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

### -TeamsProtectionPolicy

> Applicable: Exchange Online

The TeamsProtectionPolicy parameter specifies the Teams protection policy that's associated with this rule. The only available policy is named Teams Protection Policy.

```yaml
Type: TeamsProtectionPolicyIdParameter
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

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientDomainIs

> Applicable: Exchange Online

The ExceptIfRecipientDomainIs parameter specifies an exception to ZAP for Teams protection that looks for recipients of Teams messages with email addresses in the specified domains. You can specify multiple domains separated by commas.

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

The ExceptIfSentTo parameter specifies an exception to ZAP for Teams protection that looks for recipients of Teams messages. You can use any value that uniquely identifies the recipient. For example:

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

> Applicable: Exchange Online

The ExceptIfSentToMemberOf parameter specifies an exception to ZAP for Teams protection that looks for Teams messages sent to members of distribution groups or mail-enabled security groups. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

If you remove the group after you create the rule, no exception is made for Teams messages that are sent to members of the group.

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

### -Organization

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
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
