---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/organization/new-authenticationpolicy
applicable: Exchange Online
title: New-AuthenticationPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2019 || exchonline-ps"
---

# New-AuthenticationPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-AuthenticationPolicy cmdlet to create authentication policies in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

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
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

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
The Name parameter specifies the unique name for the authentication policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019, Exchange Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthActiveSync
This parameter is available only in the cloud-based service.

The AllowBasicAuthActiveSync switch specifies whether to allow Basic authentication with Exchange ActiveSync. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthAutodiscover
This parameter is available only in the cloud-based service.

The AllowBasicAuthAutodiscover switch specifies whether to allow Basic authentication with Autodiscover. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthImap
This parameter is available only in the cloud-based service.

The AllowBasicAuthImap switch specifies whether to allow Basic authentication with IMAP. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthMapi
This parameter is available only in the cloud-based service.

The AllowBasicAuthMapi switch specifies whether to allow Basic authentication with MAPI. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthOfflineAddressBook
This parameter is available only in the cloud-based service.

The AllowBasicAuthOfflineAddressBook switch specifies whether to allow Basic authentication with Offline Address Books. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthOutlookService
This parameter is available only in the cloud-based service.

The AllowBasicAuthOutlookService switch specifies whether to allow Basic authentication with the Outlook service. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthPop
This parameter is available only in the cloud-based service.

The AllowBasicAuthPop switch specifies whether to allow Basic authentication with POP. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthPowershell
This parameter is available only in the cloud-based service.

The AllowBasicAuthPowerShell switch specifies whether to allow Basic authentication with PowerShell. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthReportingWebServices
This parameter is available only in the cloud-based service.

The AllowBasicAuthReporting Web Services switch specifies whether to allow Basic authentication with reporting web services. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthRpc
This parameter is available only in the cloud-based service.

The AllowBasicAuthRpc switch specifies whether to allow Basic authentication with RPC. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthSmtp
This parameter is available only in the cloud-based service.

The AllowBasicAuthSmtp switch specifies whether to allow Basic authentication with SMTP. You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBasicAuthWebServices
This parameter is available only in the cloud-based service.

The AllowBasicAuthWebServices switch specifies whether to allow Basic authentication with Exchange Web Services (EWS). You don't need to specify a value with this switch.

By default, Basic authentication is blocked for the protocol. Use this switch to allow Basic authentication for the protocol.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthActiveSync
This parameter is available only in on-premises Exchange.

The BlockLegacyAuthActiveSync switch specifies whether to allow only Modern authentication with Exchange ActiveSync in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with Exchange ActiveSync:

- Basic authentication

- Digest authentication

- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid Modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support Modern authentication.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthAutodiscover
This parameter is available only in on-premises Exchange.

The BlockLegacyAuthAutodiscover switch specifies whether to allow only Modern authentication with Autodiscover in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with Autodiscover:

- Basic authentication

- Digest authentication

- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid Modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support Modern authentication.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthImap
This parameter is available only in on-premises Exchange.

The BlockLegacyAuthImap switch specifies whether to allow only Modern authentication with IMAP in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with IMAP:

- Basic authentication

- Digest authentication

- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid Modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support Modern authentication.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthMapi
This parameter is available only in on-premises Exchange.

The BlockLegacyAuthMapi switch specifies whether to allow only Modern authentication with MAPI in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with MAPI:

- Basic authentication

- Digest authentication

- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid Modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support Modern authentication.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthOfflineAddressBook
This parameter is available only in on-premises Exchange.

The BlockLegacyAuthOfflineAddressBook switch specifies whether to allow only Modern authentication with Offline Address Books in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with Offline Address Books:

- Basic authentication

- Digest authentication

- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid Modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support Modern authentication.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthPop
This parameter is available only in on-premises Exchange.

The BlockLegacyAuthPop switch specifies whether to allow only Modern authentication with POP in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with POP:

- Basic authentication

- Digest authentication

- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid Modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support Modern authentication.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthRpc
This parameter is available only in on-premises Exchange.

The BlockLegacyAuthRpc switch specifies whether to allow only Modern authentication with RPC in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with RPC:

- Basic authentication

- Digest authentication

- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid Modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support Modern authentication.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockLegacyAuthWebServices
This parameter is available only in on-premises Exchange.

The BlockLegacyAuthWebServices switch specifies whether to allow only Modern authentication with Exchange Web Services (EWS) in Exchange 2019 CU2 or later hybrid environments. You don't need to specify a value with this switch.

This switch disables the following legacy authentication methods with EWS:

- Basic authentication

- Digest authentication

- Windows authentication (NTLM and Kerberos)

Before you disable the legacy authentication methods for this protocol, verify that hybrid Modern authentication is enabled and working in your Exchange hybrid environment, and that your email clients support Modern authentication.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019

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
Applicable: Applicable: Exchange Server 2019, Exchange Online

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
Applicable: Applicable: Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
