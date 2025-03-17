---
external help file: Microsoft.Exchange.WebClient-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/test-clientaccessrule
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Test-ClientAccessRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Test-ClientAccessRule

## SYNOPSIS
> [!NOTE]
> Beginning in October 2022, client access rules were deprecated for all Exchange Online organizations that weren't using them. Client access rules will be deprecated for all remaining organizations on September 1, 2025. If you choose to turn off client access rules before the deadline, the feature will be disabled in your organization. For more information, see [Update on Client Access Rules Deprecation in Exchange Online](https://techcommunity.microsoft.com/blog/exchange/update-on-client-access-rules-deprecation-in-exchange-online/4354809).

This cmdlet is functional only in Exchange Server 2019 and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Test-ClientAccessRule cmdlet to test how client access rules affect access to your organization. If any of the client properties you specify for this cmdlet match any client access rules, the rules are returned in the results.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Test-ClientAccessRule -AuthenticationType <ClientAccessAuthenticationMethod> -Protocol <ClientAccessProtocol> -RemoteAddress <IPAddress> -RemotePort <Int32> -User <MailboxIdParameter>
 [-Confirm]
 [-OAuthClaims <Hashtable>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Client access rules are like mail flow rules (also known as transport rules) for client connections to your organization. You use conditions and exceptions to identify the connections based on their properties, and actions that allow or block the connections.

**Note**: Currently, not all authentication types are supported for all protocols. The supported authentication types per protocol are described in this list:

- OutlookWebApp:BasicAuthentication and AdfsAuthentication.
- ExchangeAdminCenter:BasicAuthentication and AdfsAuthentication.
- RemotePowerShell:BasicAuthentication and NonBasicAuthentication.
- ExchangeActiveSync:BasicAuthentication, OAuthAuthentication, and CertificateBasedAuthentication.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Test-ClientAccessRule -AuthenticationType BasicAuthentication -Protocol OutlookWebApp -RemoteAddress 172.17.17.26 -RemotePort 443 -User julia@contoso.com
```

This example tests client access by using the following client properties:

- Authentication type: Basic
- Protocol:OutlookWebApp
- Remote address: 172.17.17.26
- Remote port: 443
- User: julia@contoso.com

## PARAMETERS

### -AuthenticationType
The AuthenticationType parameter specifies the client authentication type to test.

Valid values for this parameter are:

- AdfsAuthentication
- BasicAuthentication
- CertificateBasedAuthentication
- NonBasicAuthentication
- OAuthAuthentication

In client access rules, authentication types are defined by the AnyOfAuthenticationTypes and ExceptAnyOfAuthenticationTypes parameters.

```yaml
Type: ClientAccessAuthenticationMethod
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Protocol
The Protocol parameter specifies the client protocol to test.

Valid values for this parameter are:

- ExchangeActiveSync
- ExchangeAdminCenter
- ExchangeWebServices
- IMAP4
- OfflineAddressBook
- OutlookAnywhere
- OutlookWebApp
- POP3
- PowerShellWebServices
- RemotePowerShell
- REST

In client access rules, protocol types are defined by the AnyOfProtocols and ExceptAnyOfProtocols parameters.

```yaml
Type: ClientAccessProtocol
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteAddress
The RemoteAddress parameter specifies the client IP address to test. Valid input for this parameter is an IP address. For example, 192.168.1.50.

In client access rules, IP addresses are defined by the AnyOfClientIPAddressesOrRanges and ExceptAnyOfClientIPAddressesOrRanges parameters.

```yaml
Type: IPAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemotePort
The RemotePort parameter specifies the client TCP port to test. Valid input for this parameter is an integer from 1 to 65535.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter specifies the user account to test.

For the best results, we recommend using the following values:

- UPN: For example, `user@contoso.com` (users only).
- Domain\\SamAccountName: For example, `contoso\user`.

Otherwise, you can use any value that uniquely identifies the user. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

In client access rules, users are defined by the UsernameMatchesAnyOfPatterns, UserRecipientFilter, and ExceptUsernameMatchesAnyOfPatterns parameters.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: True
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OAuthClaims
The OAuthClaims parameter specifies the OAuth claims token of a middle-tier app.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
