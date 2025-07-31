---
applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-authenticationpolicy
schema: 2.0.0
title: New-AuthenticationPolicy
---

# New-AuthenticationPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-AuthenticationPolicy cmdlet to create authentication policies in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-AuthenticationPolicy [[-Name] <String>]
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
 [-BlockLegacyAuthActiveSync]
 [-BlockLegacyAuthAutodiscover]
 [-BlockLegacyAuthImap]
 [-BlockLegacyAuthMapi]
 [-BlockLegacyAuthOfflineAddressBook]
 [-BlockLegacyAuthPop]
 [-BlockLegacyAuthRpc]
 [-BlockLegacyAuthWebServices]
 [-BlockModernAuthActiveSync]
 [-BlockModernAuthAutodiscover]
 [-BlockModernAuthImap]
 [-BlockModernAuthMapi]
 [-BlockModernAuthOfflineAddressBook]
 [-BlockModernAuthPop]
 [-BlockModernAuthRpc]
 [-BlockModernAuthWebServices]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-AuthenticationPolicy -Name "Engineering Group" -AllowBasicAuthImap
```

In Exchange Online, this example creates a new authentication policy named Engineering Group that allows Basic authentication with IMAP.

### Example 2
```powershell
New-AuthenticationPolicy -Name "Research and Development Group" -BlockLegacyAuthActiveSync -BlockLegacyAuthAutodiscover -BlockLegacyAuthImap -BlockLegacyAuthMapi -BlockLegacyAuthOfflineAddressBook -BlockLegacyAuthPop -BlockLegacyAuthRpc -BlockLegacyAuthWebServices
```

In Exchange 2019, this example creates a new authentication policy named Research and Development Group that blocks legacy authentication for the specified protocols.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

The Name parameter specifies the unique name for the authentication policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -AllowBasicAuthActiveSync

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowBasicAuthActiveSync switch specifies whether to allow Basic authentication with Exchange ActiveSync. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

The AllowBasicAuthAutodiscover switch specifies whether to allow Basic authentication with Autodiscover. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

The AllowBasicAuthImap switch specifies whether to allow Basic authentication with IMAP. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

The AllowBasicAuthMapi switch specifies whether to allow Basic authentication with MAPI. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

The AllowBasicAuthOfflineAddressBook switch specifies whether to allow Basic authentication with Offline Address Books. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

The AllowBasicAuthOutlookService switch specifies whether to allow Basic authentication with the Outlook service. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

The AllowBasicAuthPop switch specifies whether to allow Basic authentication with POP. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

The AllowBasicAuthPowerShell switch specifies whether to allow Basic authentication with PowerShell. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

The AllowBasicAuthReporting Web Services switch specifies whether to allow Basic authentication with reporting web services. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

The AllowBasicAuthRpc switch specifies whether to allow Basic authentication with RPC. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

The AllowBasicAuthSmtp switch specifies whether to allow Basic authentication with SMTP. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

The AllowBasicAuthWebServices switch specifies whether to allow Basic authentication with Exchange Web Services (EWS). You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

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

### -BlockLegacyAuthActiveSync

> Applicable: Exchange Server 2019

This parameter is available only in on-premises Exchange.

The BlockLegacyAuthActiveSync switch specifies whether to allow only modern authentication with Exchange ActiveSync in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with Exchange ActiveSync:

- Basic authentication
- Digest authentication
- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support modern authentication.

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

The BlockLegacyAuthAutodiscover switch specifies whether to allow only modern authentication with Autodiscover in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with Autodiscover:

- Basic authentication
- Digest authentication
- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support modern authentication.

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

The BlockLegacyAuthImap switch specifies whether to allow only modern authentication with IMAP in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with IMAP:

- Basic authentication
- Digest authentication
- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support modern authentication.

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

The BlockLegacyAuthMapi switch specifies whether to allow only modern authentication with MAPI in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with MAPI:

- Basic authentication
- Digest authentication
- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support modern authentication.

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

The BlockLegacyAuthOfflineAddressBook switch specifies whether to allow only modern authentication with Offline Address Books in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with Offline Address Books:

- Basic authentication
- Digest authentication
- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support modern authentication.

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

The BlockLegacyAuthPop switch specifies whether to allow only modern authentication with POP in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with POP:

- Basic authentication
- Digest authentication
- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support modern authentication.

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

The BlockLegacyAuthRpc switch specifies whether to allow only modern authentication with RPC in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with RPC:

- Basic authentication
- Digest authentication
- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support modern authentication.

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

The BlockLegacyAuthWebServices switch specifies whether to allow only modern authentication with Exchange Web Services (EWS) in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with EWS:

- Basic authentication
- Digest authentication
- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support modern authentication.

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

> Applicable: Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

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

### -WhatIf

> Applicable: Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

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
