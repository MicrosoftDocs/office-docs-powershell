---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-authenticationpolicy
applicable: Exchange Online
title: Set-AuthenticationPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2019 || exchonline-ps"
---

# Set-AuthenticationPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-AuthenticationPolicy cmdlet to modify authentication policies in your organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

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
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

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

## PARAMETERS

### -Identity
The Identity parameter specifies the authentication policy you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: AuthPolicyIdParameter
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

The AllowBasicAuthActiveSync switch specifies whether to allow Basic authentication with Exchange Active Sync.

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAuthActiveSync:$false.

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

The AllowBasicAuthAutodiscover switch specifies whether to allow Basic authentication with Autodiscover.

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAuthAutodiscover:$false.

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

The AllowBasicAuthImap switch specifies whether to allow Basic authentication with IMAP.

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAuthImap:$false.

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

The AllowBasicAuthMapi switch specifies whether to allow Basic authentication with MAPI.

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAutMapi:$false.

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

The AllowBasicAuthOfflineAddressBook switch specifies whether to allow Basic authentication with Offline Address Books.

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAuthOfflineAddressBook:$false.

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

The AllowBasicAuthOutlookService switch specifies whether to allow Basic authentication with the Outlook service.

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAuthOutlookService:$false.

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

The AllowBasicAuthPop switch specifies whether to allow Basic authentication with POP.

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAuthPop:$false.

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

The AllowBasicAuthPowerShell switch specifies whether to allow Basic authentication with PowerShell.

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAuthPowershell:$false.

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

The AllowBasicAuthReporting Web Services switch specifies whether to allow Basic authentication with reporting web services.

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAuthReportingWebServices:$false.

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

The AllowBasicAuthRpc switch specifies whether to allow Basic authentication with RPC.

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAuthRpc:$false.

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

The AllowBasicAuthSmtp switch specifies whether to allow Basic authentication with SMTP.

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAuthSmtp:$false.

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

The AllowBasicAuthWebServices switch specifies whether to allow Basic authentication with Exchange Web Services (EWS).

- To allow Basic authentication for the protocol, use this switch without a value.

- To block Basic authentication for the protocol, use this exact syntax: -AllowBasicAuthWebServices:$false.

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

The BlockLegacyAuthActiveSync switch specifies whether to allow only Modern authentication with Exchange ActiveSync in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for ActiveSync, use this switch without a value.

- To allow legacy authentication methods for ActiveSync, use this exact syntax: -BlockLegacyAuthActiveSync:$false.

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

The BlockLegacyAuthAutodiscover switch specifies whether to allow only Modern authentication with Autodiscover in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for Autodiscover, use this switch without a value.

- To allow legacy authentication methods for Autodiscover, use this exact syntax: -BlockLegacyAuthAutodiscover:$false.

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

The BlockLegacyAuthImap switch specifies whether to allow only Modern authentication with IMAP in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for IMAP, use this switch without a value.

- To allow legacy authentication methods for IMAP, use this exact syntax: -BlockLegacyAuthImap:$false.

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

The BlockLegacyAuthMapi switch specifies whether to allow only Modern authentication with MAPI in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for MAPI, use this switch without a value.

- To allow legacy authentication methods for MAPI, use this exact syntax: -BlockLegacyAuthMapi:$false.

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

The BlockLegacyAuthOfflineAddressBook switch specifies whether to allow only Modern authentication with Offline Address Books in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for Offline Address Books, use this switch without a value.

- To allow legacy authentication methods for OfflineAddressBooks, use this exact syntax: -BlockLegacyAuthOfflineAddressBook:$false.

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

The BlockLegacyAuthPop switch specifies whether to allow only Modern authentication with POP in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for POP, use this switch without a value.

- To allow legacy authentication methods for POP, use this exact syntax: -BlockLegacyAuthPop:$false.

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

The BlockLegacyAuthRpc switch specifies whether to allow only Modern authentication with RPC in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for RPC, use this switch without a value.

- To allow legacy authentication methods for RPC, use this exact syntax: -BlockLegacyAuthRpc:$false.

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

The BlockLegacyAuthWebServices switch specifies whether to allow only Modern authentication with Exchange Web Services (EWS) in Exchange 2019 CU2 or later hybrid environments.

- To block Basic authentication, Digest authentication, and Windows authentication (NTLM and Kerberos) for EWS, use this switch without a value.

- To allow legacy authentication methods for EWS, use this exact syntax: -BlockLegacyAuthWebServices:$false.

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
Applicable: Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2019, Exchange Online

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
