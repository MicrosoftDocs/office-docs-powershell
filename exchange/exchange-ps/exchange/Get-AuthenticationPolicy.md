---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-authenticationpolicy
applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Get-AuthenticationPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
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
The Identity parameter specifies the authentication policy you want to view. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: AuthPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLegacyExchangeTokens
This parameter is available only in the cloud-based service.

The AllowLegacyExchangeTokens switch specifies whether legacy Exchange tokens are allowed for Outlook add-ins in your organization. You don't need to specify a value with this switch.

Legacy Exchange tokens include Exchange user identity and callback tokens.

**Important**:

- Currently, the AllowLegacyExchangeTokens switch only specifies whether legacy Exchange tokens are allowed in your organization. For now, disregard the empty Allowed and Blocked arrays returned by the switch.
- Legacy Exchange tokens will eventually be blocked by default in all cloud-based organizations. For more information, see [Nested app authentication and Outlook legacy tokens deprecation FAQ](https://learn.microsoft.com/office/dev/add-ins/outlook/faq-nested-app-auth-outlook-legacy-tokens#what-is-the-timeline-for-shutting-down-legacy-exchange-online-tokens).

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
