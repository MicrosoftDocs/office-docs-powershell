---
applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-authenticationpolicy
schema: 2.0.0
title: Get-AuthenticationPolicy
---

# Get-AuthenticationPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-AuthenticationPolicy cmdlet to view authentication policies in your organization.
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AuthenticationPolicy [[-Identity] <AuthPolicyIdParameter>]
 [-AllowLegacyExchangeTokens]
 [-TenantId <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AuthenticationPolicy | Format-Table -Auto Name
```

This example returns a summary list of all authentication policies.

### Example 2
```powershell
Get-AuthenticationPolicy -Identity "Engineering Group"
```

This example returns detailed information for the authentication policy named Engineering Group.

### Example 3
```powershell
Get-AuthenticationPolicy -AllowLegacyExchangeTokens
```

In Exchange Online, this example specifies whether legacy Exchange tokens for Outlook add-ins are allowed in the organization.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

The Identity parameter specifies the authentication policy you want to view. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: AuthPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLegacyExchangeTokens

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowLegacyExchangeTokens switch specifies whether legacy Exchange tokens are allowed for Outlook add-ins in your organization. You don't need to specify a value with this switch.

Legacy Exchange tokens include Exchange user identity and callback tokens.

**Important**:

- Beginning August 1 2025 through September 2025, legacy Exchange Online tokens will be turned off for all organizations. Once turned off, you can no longer use the _AllowLegacyExchangeTokens_ parameter on the **Set-AuthenticationPolicy** cmdlet to turn on these tokens. To determine if legacy tokens have been turned off for your organization, run `Get-AuthenticationPolicy -AllowLegacyExchangeTokens`. If legacy tokens have been turned off, the "Legacy Exchange Online tokens are disabled" warning is shown. To request an exception, [create a request through Microsoft Support](https://aka.ms/LegacyTokensByOctober). For more information, see [Nested app authentication and Outlook legacy tokens deprecation FAQ](https://learn.microsoft.com/office/dev/add-ins/outlook/faq-nested-app-auth-outlook-legacy-tokens#what-is-the-timeline-for-shutting-down-legacy-exchange-online-tokens).
- The AllowLegacyExchangeTokens switch returns `Not Set` if tokens haven't been explicitly allowed or blocked in your organization using the _AllowLegacyExchangeTokens_ or _BlockLegacyExchangeTokens_ parameters on the **Set-AuthenticationPolicy** cmdlet. For more information, see [Get the status of legacy Exchange Online tokens and add-ins that use them](https://learn.microsoft.com/office/dev/add-ins/outlook/turn-exchange-tokens-on-off#get-the-status-of-legacy-exchange-online-tokens-and-add-ins-that-use-them).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill TenantId Description }}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
