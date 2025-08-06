---
applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-authenticationpolicy
schema: 2.0.0
title: Set-AuthenticationPolicy
---

# Set-AuthenticationPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-AuthenticationPolicy cmdlet to modify authentication policies in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-AuthenticationPolicy [-Identity] <AuthPolicyIdParameter>
 [-AllowBasicAuthActiveSync]
 [-AllowBasicAuthAutodiscover]
 [-AllowBasicAuthImap]
 [-AllowBasicAuthMapi]
 [-AllowBasicAuthOfflineAddressBook]
 [-AllowBasicAuthOutlookService]
 [-AllowBasicAuthPop]
 [-AllowBasicAuthPowershell]
 [-AllowBasicAuthReportingWebServices]
 [-AllowBasicAuthRpc]
 [-AllowBasicAuthSmtp]
 [-AllowBasicAuthWebServices]
 [-AllowLegacyExchangeTokens]
 [-BlockLegacyAuthActiveSync]
 [-BlockLegacyAuthAutodiscover]
 [-BlockLegacyAuthImap]
 [-BlockLegacyAuthMapi]
 [-BlockLegacyAuthOfflineAddressBook]
 [-BlockLegacyAuthPop]
 [-BlockLegacyAuthRpc]
 [-BlockLegacyAuthWebServices]
 [-BlockLegacyExchangeTokens]
 [-BlockModernAuthActiveSync]
 [-BlockModernAuthAutodiscover]
 [-BlockModernAuthImap]
 [-BlockModernAuthMapi]
 [-BlockModernAuthOfflineAddressBook]
 [-BlockModernAuthPop]
 [-BlockModernAuthRpc]
 [-BlockModernAuthWebServices]
 [-Confirm]
 [-TenantId <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AuthenticationPolicy -Identity "Engineering Group" -AllowBasicAuthReportingWebServices
```

In Exchange Online, this example modifies the authentication policy named Engineering Group to allow Basic authentication for Exchange Reporting Web Services.

### Example 2
```powershell
Set-AuthenticationPolicy -Identity "Research and Development Group" -BlockLegacyAuthReportingWebServices:$false
```

In Exchange 2019, this example re-enables Basic authentication for Exchange Reporting Web Services in the authentication policy named Research and Development Group.

### Example 3
```powershell
Set-AuthenticationPolicy -Identity "LegacyExchangeTokens" -BlockLegacyExchangeTokens
```

In Exchange Online, this example blocks legacy Exchange tokens from being issued to Outlook add-ins. The switch applies to the entire organization, and the Identity parameter must be set to the value "LegacyExchangeTokens". Specific authentication policies can't be applied.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

The Identity parameter specifies the authentication policy you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: AuthPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthActiveSync

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthActiveSync switch specifies whether to allow Basic authentication with Exchange Active Sync.

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAuthActiveSync:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthAutodiscover

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthAutodiscover switch specifies whether to allow Basic authentication with Autodiscover.

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAuthAutodiscover:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthImap

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthImap switch specifies whether to allow Basic authentication with IMAP.

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAuthImap:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthMapi

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthMapi switch specifies whether to allow Basic authentication with MAPI.

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAutMapi:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthOfflineAddressBook

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthOfflineAddressBook switch specifies whether to allow Basic authentication with Offline Address Books.

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAuthOfflineAddressBook:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthOutlookService

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthOutlookService switch specifies whether to allow Basic authentication with the Outlook service.

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAuthOutlookService:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthPop

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthPop switch specifies whether to allow Basic authentication with POP.

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAuthPop:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthPowershell

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthPowerShell switch specifies whether to allow Basic authentication with PowerShell.

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAuthPowershell:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthReportingWebServices

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthReporting Web Services switch specifies whether to allow Basic authentication with reporting web services.

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAuthReportingWebServices:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthRpc

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthRpc switch specifies whether to allow Basic authentication with RPC.

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAuthRpc:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthSmtp

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthSmtp switch specifies whether to allow Basic authentication with SMTP.

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAuthSmtp:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthWebServices

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthWebServices switch specifies whether to allow Basic authentication with Exchange Web Services (EWS).

- To allow Basic authentication for the protocol, use this switch without a value.
- To block Basic authentication for the protocol, use this exact syntax: `-AllowBasicAuthWebServices:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLegacyExchangeTokens

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowLegacyExchangeTokens switch specifies to allow legacy Exchange tokens to be issued to Outlook add-ins. You don't need to specify a value with this switch.

Legacy Exchange tokens include Exchange user identity and callback tokens.

The switch applies to the entire organization. The Identity parameter is required and must be set to the value "LegacyExchangeTokens". Specific authentication policies can't be applied.

**Important**:

- Legacy Exchange Online tokens will be turned off for all organizations from August 2025 through September 2025. Once turned off, you can't use the _AllowLegacyExchangeTokens_ switch on the **Set-AuthenticationPolicy** cmdlet to turn on these tokens. You get the warning "Legacy Exchange Online tokens are disabled" when you run the command `Get-AuthenticationPolicy -AllowLegacyExchangeTokens`. You can [contact Microsoft Support to request an exception](https://aka.ms/LegacyTokensByOctober). For more information, see [Nested app authentication and Outlook legacy tokens deprecation FAQ](https://learn.microsoft.com/office/dev/add-ins/outlook/faq-nested-app-auth-outlook-legacy-tokens).
- Apart from the Identity parameter, this switch disregards other authentication policy parameters used in the same command. We recommend running separate commands for other authentication policy changes.
- It might take up to 24 hours for the change to take effect across your entire organization.

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

### -BlockLegacyAuthActiveSync

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockLegacyAuthActiveSync switch specifies whether to allow only modern authentication with Exchange ActiveSync in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for ActiveSync, use this switch without a value.
- To allow legacy authentication methods for ActiveSync, use this exact syntax: `-BlockLegacyAuthActiveSync:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthAutodiscover

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockLegacyAuthAutodiscover switch specifies whether to allow only modern authentication with Autodiscover in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for Autodiscover, use this switch without a value.
- To allow legacy authentication methods for Autodiscover, use this exact syntax: `-BlockLegacyAuthAutodiscover:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthImap

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockLegacyAuthImap switch specifies whether to allow only modern authentication with IMAP in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for IMAP, use this switch without a value.
- To allow legacy authentication methods for IMAP, use this exact syntax: `-BlockLegacyAuthImap:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthMapi

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockLegacyAuthMapi switch specifies whether to allow only modern authentication with MAPI in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for MAPI, use this switch without a value.
- To allow legacy authentication methods for MAPI, use this exact syntax: `-BlockLegacyAuthMapi:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthOfflineAddressBook

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockLegacyAuthOfflineAddressBook switch specifies whether to allow only modern authentication with Offline Address Books in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for Offline Address Books, use this switch without a value.
- To allow legacy authentication methods for OfflineAddressBooks, use this exact syntax: `-BlockLegacyAuthOfflineAddressBook:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthPop

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockLegacyAuthPop switch specifies whether to allow only modern authentication with POP in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for POP, use this switch without a value.
- To allow legacy authentication methods for POP, use this exact syntax: `-BlockLegacyAuthPop:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthRpc

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockLegacyAuthRpc switch specifies whether to allow only modern authentication with RPC in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for RPC, use this switch without a value.
- To allow legacy authentication methods for RPC, use this exact syntax: `-BlockLegacyAuthRpc:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthWebServices

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockLegacyAuthWebServices switch specifies whether to allow only modern authentication with Exchange Web Services (EWS) in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for EWS, use this switch without a value.
- To allow legacy authentication methods for EWS, use this exact syntax: `-BlockLegacyAuthWebServices:$false`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyExchangeTokens

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The BlockLegacyExchangeTokens switch specifies to block legacy Exchange tokens being issued to Outlook add-ins. You don't need to specify a value with this switch.

Legacy Exchange tokens include Exchange user identity and callback tokens.

The switch applies to the entire organization. The Identity parameter is required and must be set to the value "LegacyExchangeTokens". Specific authentication policies can't be applied.

**Important**:

- Legacy Exchange Online tokens will be turned off for all organizations from August 2025 through September 2025. Once turned off, you can't use the _AllowLegacyExchangeTokens_ switch on the **Set-AuthenticationPolicy** cmdlet to turn on these tokens. You get the warning "Legacy Exchange Online tokens are disabled" when you run the command `Get-AuthenticationPolicy -AllowLegacyExchangeTokens`. You can [contact Microsoft Support to request an exception](https://aka.ms/LegacyTokensByOctober). For more information, see [Nested app authentication and Outlook legacy tokens deprecation FAQ](https://learn.microsoft.com/office/dev/add-ins/outlook/faq-nested-app-auth-outlook-legacy-tokens).
- Apart from the Identity parameter, this switch disregards other authentication policy parameters used in the same command. We recommend running separate commands for other authentication policy changes.
- It might take up to 24 hours for the change to take effect across your entire organization.
- Legacy Exchange tokens issued to Outlook add-ins before token blocking was implemented in your organization remain valid until they expire.
- Blocking legacy Exchange tokens might cause some Microsoft add-ins to stop working. These add-ins are being updated to no longer use legacy tokens.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockModernAuthActiveSync

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockModernAuthActiveSync switch specifies whether to block modern authentication with Exchange ActiveSync in Exchange 2019 CU13 or later. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockModernAuthAutodiscover

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockModernAuthAutodiscover switch specifies whether to block modern authentication with Autodiscover in Exchange 2019 CU13 or later. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockModernAuthImap

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockModernAuthImap switch specifies whether to block modern authentication with IMAP in Exchange 2019 CU13 or later. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockModernAuthMapi

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockModernAuthMapi switch specifies whether to block modern authentication with MAPI in Exchange 2019 CU13 or later. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockModernAuthOfflineAddressBook

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockModernAuthOfflineAddressBook switch specifies whether to block modern authentication with Offline Address Books in Exchange 2019 CU13 or later. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockModernAuthPop

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockModernAuthPop switch specifies whether to block modern authentication with POP in Exchange 2019 CU13 or later. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockModernAuthRpc

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockModernAuthRpc switch specifies whether to block modern authentication with RPC in Exchange 2019 CU13 or later. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockModernAuthWebServices

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockModernAuthWebServices switch specifies whether to block modern authentication with Exchange Web Services (EWS) in Exchange 2019 CU13 or later. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

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

### -WhatIf

> Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

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
