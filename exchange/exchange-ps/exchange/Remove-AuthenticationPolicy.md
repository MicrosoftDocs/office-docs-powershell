---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/remove-authenticationpolicy
applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Remove-AuthenticationPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Remove-AuthenticationPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-AuthenticationPolicy cmdlet to remove authentication policies from your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-AuthenticationPolicy [-Identity] <AuthPolicyIdParameter>
 [-Confirm]
 [-AllowLegacyExchangeTokens]
 [-TenantId <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-AuthenticationPolicy -Identity "Engineering Group"
```

This example removes the authentication policy named "Engineering Group".

### Example 2
```powershell
Remove-AuthenticationPolicy -Identity "LegacyExchangeTokens" -AllowLegacyExchangeTokens
```

In Exchange Online, this example enables legacy Exchange tokens to be issued to Outlook add-ins. This switch applies to the entire organization. The Identity parameter is required, and its value must be set to "LegacyExchangeTokens". Specific authentication policies can't be applied.

## PARAMETERS

### -Identity
The Identity parameter specifies the authentication policy you want to remove. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: AuthPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLegacyExchangeTokens
This parameter is available only in the cloud-based service.

The AllowLegacyExchangeTokens switch enables legacy Exchange tokens to be issued to Outlook add-ins for your organization. You don't need to specify a value with this switch.

Legacy Exchange tokens include Exchange user identity and callback tokens.

This switch applies to the entire organization. The Identity parameter is required, and its value must be set to "LegacyExchangeTokens". Specific authentication policies can't be applied.

**Important**:

- Apart from the Identity parameter, this switch disregards other authentication policy parameters used in the same command. We recommend running separate commands for other authentication policy changes.
- It might take up to 24 hours for the change to take effect across your entire organization.
- Legacy Exchange tokens issued to Outlook add-ins before token blocking was implemented in your organization will remain valid until they expire.
- As of February 17 2025, legacy Exchange tokens are blocked by default in all cloud-based organizations. For more information, see [Nested app authentication and Outlook legacy tokens deprecation FAQ](https://learn.microsoft.com/office/dev/add-ins/outlook/faq-nested-app-auth-outlook-legacy-tokens#what-is-the-timeline-for-shutting-down-legacy-exchange-online-tokens).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: True
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
Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId
This parameter is available only in the cloud-based service.

{{ Fill TenantId Description }}

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

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
