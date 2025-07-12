---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-teamsprotectionpolicyrule
applicable: Exchange Online
title: Set-TeamsProtectionPolicyRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-TeamsProtectionPolicyRule

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-TeamsProtectionPolicyRule cmdlet to modify Microsoft Teams protection policy rules.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-TeamsProtectionPolicyRule [-Identity] <RuleIdParameter>
 [-Comments <String>]
 [-Confirm]
 [-ExceptIfRecipientDomainIs <Word[]>]
 [-ExceptIfSentTo <RecipientIdParameter[]>]
 [-ExceptIfSentToMemberOf <RecipientIdParameter[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
> [!IMPORTANT]
> Different types of recipient exceptions use OR logic (the recipient must satisfy **any** of the specified exceptions). For more information, see [Configure ZAP for Teams protection in Defender for Office 365 Plan 2](https://learn.microsoft.com/defender-office-365/mdo-support-teams-about#configure-zap-for-teams-protection-in-defender-for-office-365-plan-2).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule" -ExceptIfRecipientDomainIs research.contoso.com
```

This example modifies the existing Teams protection policy rule by excluding recipients in the domain research.contoso.com from ZAP for Teams protection.

## PARAMETERS

### -Identity
The Identity parameter specifies the Teams protection policy rule that you want to modify. There's only one Teams protection policy rule in an organization named Teams Protection Policy Rule.

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -ExceptIfRecipientDomainIs
The ExceptIfRecipientDomainIs parameter specifies an exception to ZAP for Teams protection that looks for recipients of Teams messages with email addresses in the specified domains.

To replace all existing domains with the values you specify, use the following syntax: `Domain1,Domain2,...DomainN`.

To add domains without affecting other existing values, use the following syntax:

`$DomainsAdd = Get-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule" | select -Expand ExceptIfRecipientDomainIs`

`$DomainsAdd += "Domain1","Domain2",..."DomainN"`

`Set-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule" -ExceptIfRecipientDomainIs $DomainsAdd`

To remove domains without affecting other existing values, use the following syntax:

- Run the following commands to see the existing list of values in order:

  `$x = Get-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule"`

  `$d = [System.Collections.ArrayList]($x.ExceptIfRecipientDomainIs)`

  `$d`

  The first value in the list has the index number 0, the second has the index number 1, and so on.

- Use the index number to specify the value to remove. For example, to remove the seventh value in the list, run the following commands:

  `$d.RemoveAt(6)`

  `Set-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule" -ExceptIfRecipientDomainIs $d`

To empty the list, use the value $null for this parameter.

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
The ExceptIfSentTo parameter specifies an exception to ZAP for Teams protection that looks for recipients of Teams messages. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

To replace all existing recipients with the values you specify, use the following syntax: `"User1","User2",..."UserN"`.

To add recipients without affecting other existing values, use the following syntax:

`$UsersAdd = Get-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule" | select -Expand ExceptIfSentTo`

`$UsersAdd += "User1","User2",..."UserN"`

`Set-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule" -ExceptIfSentTo $UsersAdd`

To remove recipients without affecting other existing values, use the following syntax:

- Run the following commands to see the existing list of values in order:

  `$x = Get-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule"`

  `$u = [System.Collections.ArrayList]($x.ExceptIfSentTo)`

  `$u`

  The first value in the list has the index number 0, the second has the index number 1, and so on.

- Use the index number to specify the value to remove. For example, to remove the seventh value in the list, run the following commands:

  `$u.RemoveAt(6)`

  `Set-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule" -ExceptIfSentTo $u`

To empty the list, use the value $null for this parameter.

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
The ExceptIfSentToMemberOf parameter specifies an exception to ZAP for Teams protection that looks for Teams messages sent to members of distribution groups or mail-enabled security groups. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

To add groups without affecting other existing values, use the following syntax:

`$GroupsAdd = Get-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule" | select -Expand ExceptIfSentToMemberOf`

`$GroupsAdd += "Group1","Group2",..."GroupN"`

`Set-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule" -ExceptIfSentToMemberOf $GroupsAdd`

To remove groups without affecting other existing values, use the following syntax:

- Run the following commands to see the existing list of values in order:

  `$x = Get-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule"`

  `$g = [System.Collections.ArrayList]($x.ExceptIfSentToMemberOf)`

  `$g`

  The first value in the list has the index number 0, the second has the index number 1, and so on.

- Use the index number to specify the value to remove. For example, to remove the seventh value in the list, run the following commands:

  `$g.RemoveAt(6)`

  `Set-TeamsProtectionPolicyRule -Identity "Teams Protection Policy Rule" -ExceptIfSentTo $g`

If you remove the group after you create the rule, no exception is made for ZAP for Teams for messages that are sent to members of the group.

To empty the list, use the value $null for this parameter.

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
