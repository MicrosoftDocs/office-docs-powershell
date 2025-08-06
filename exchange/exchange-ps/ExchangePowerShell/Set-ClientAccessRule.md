---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-clientaccessrule
schema: 2.0.0
title: Set-ClientAccessRule
---

# Set-ClientAccessRule

## SYNOPSIS
> [!NOTE]
> Beginning in October 2022, client access rules were deprecated for all Exchange Online organizations that weren't using them. Client access rules will be deprecated for all remaining organizations on September 1, 2025. If you choose to turn off client access rules before the deadline, the feature will be disabled in your organization. For more information, see [Update on Client Access Rules Deprecation in Exchange Online](https://techcommunity.microsoft.com/blog/exchange/update-on-client-access-rules-deprecation-in-exchange-online/4354809).

This cmdlet is functional only in Exchange Server 2019 and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-ClientAccessRule cmdlet to modify existing client access rules. Client access rules help you control access to your organization based on the properties of the connection.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ClientAccessRule [-Identity] <ClientAccessRuleIdParameter>
 [-Action <ClientAccessRulesAction>]
 [-AnyOfAuthenticationTypes <MultiValuedProperty>]
 [-AnyOfClientIPAddressesOrRanges <MultiValuedProperty>]
 [-AnyOfProtocols <MultiValuedProperty>]
 [-AnyOfSourceTcpPortNumbers <MultiValuedProperty>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-ExceptAnyOfAuthenticationTypes <MultiValuedProperty>]
 [-ExceptAnyOfClientIPAddressesOrRanges <MultiValuedProperty>]
 [-ExceptAnyOfProtocols <MultiValuedProperty>]
 [-ExceptAnyOfSourceTcpPortNumbers <MultiValuedProperty>]
 [-ExceptUserIsMemberOf <MultiValuedProperty>]
 [-ExceptUsernameMatchesAnyOfPatterns <MultiValuedProperty>]
 [-Name <String>]
 [-Priority <Int32>]
 [-Scope <ClientAccessRulesScope>]
 [-UserIsMemberOf <MultiValuedProperty>]
 [-UsernameMatchesAnyOfPatterns <MultiValuedProperty>]
 [-UserRecipientFilter <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Client access rules are like mail flow rules (also known as transport rules) for client connections to your organization. You use conditions and exceptions to identify the connections based on their properties, and actions that allow or block the connections.

**Note**: Not all protocols support authentication type filters, and even protocols that support authentication type filters don't support all authentication types. The supported combinations are described in the following lists. Use caution when mixing protocols and authentication types in the same rule.

Protocols that support authentication type filters:

- ExchangeActiveSync: BasicAuthentication, OAuthAuthentication, and CertificateBasedAuthentication.
- ExchangeAdminCenter: BasicAuthentication and AdfsAuthentication.
- IMAP4: BasicAuthentication and OAuthAuthentication.
- OutlookWebApp: BasicAuthentication and AdfsAuthentication.
- POP3: BasicAuthentication and OAuthAuthentication.
- RemotePowerShell: BasicAuthentication and NonBasicAuthentication.

Protocols that don't support authentication type filters:

- ExchangeWebServices
- OfflineAddressBook
- OutlookAnywhere
- PowerShellWebServices
- REST
- UniversalOutlook

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ClientAccessRule "Allow IMAP4" -AnyOfClientIPAddressesOrRanges @{Add="172.17.17.27/16"}
```

This example adds the IP address range 172.17.17.27/16 to the existing client access rule named Allow IMAP4 without affecting the existing IP address values.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Identity parameter specifies the client access rule that you want to modify. You can use any value that uniquely identifies the client access rule. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ClientAccessRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Action

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Action parameter specifies the action for the client access rule. Valid values for this parameter are AllowAccess and DenyAccess.

```yaml
Type: ClientAccessRulesAction
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfAuthenticationTypes

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is functional only in the cloud-based service.

The AnyOfAuthenticationTypes parameter specifies a condition for the client access rule that's based on the client's authentication type.

Valid values for this parameter are:

- AdfsAuthentication
- BasicAuthentication
- CertificateBasedAuthentication
- NonBasicAuthentication
- OAuthAuthentication

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

**Note**: Refer to the Description section to see which authentication types can be used with what protocols.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfClientIPAddressesOrRanges

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The AnyOfClientIPAddressesOrRanges parameter specifies a condition for the client access rule that's based on the client's IPv4 or IPv6 address. Valid values are:

- Single IP address: For example, 192.168.1.1 or 2001:DB8::2AA:FF:C0A8:640A.
- IP address range: For example, 192.168.0.1-192.168.0.254 or 2001:DB8::2AA:FF:C0A8:640A-2001:DB8::2AA:FF:C0A8:6414.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.3.1/24 or 2001:DB8::2AA:FF:C0A8:640A/64.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

For more information about IPv6 addresses and syntax, see this Exchange 2013 topic: [IPv6 address basics](https://learn.microsoft.com/exchange/ipv6-support-in-exchange-2013-exchange-2013-help#ipv6-address-basics).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfProtocols

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The AnyOfProtocols parameter specifies a condition for the client access rule that's based on the client's protocol.

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
- UniversalOutlook (Mail and Calendar app)

**Note**: In Exchange 2019, the only supported values are ExchangeAdminCenter and RemotePowerShell.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfSourceTcpPortNumbers

> Applicable: Exchange Server 2013

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Enabled parameter specifies whether the client access rule is enabled or disabled. Valid values for this parameter are $true or $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptAnyOfAuthenticationTypes

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is functional only in the cloud-based service.

The ExceptAnyOfAuthenticationTypes parameter specifies an exception for the client access rule that's based on the client's authentication type.

Valid values for this parameter are:

- AdfsAuthentication
- BasicAuthentication
- CertificateBasedAuthentication
- NonBasicAuthentication
- OAuthAuthentication

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

**Note**: Refer to the Description section to see which authentication types can be used with what protocols.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptAnyOfClientIPAddressesOrRanges

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ExceptAnyOfClientIPAddressesOrRanges parameter specifies an exception for the client access rule that's based on the client's IPv4 or IPv6 address. Valid values are:

- Single IP address: For example, 192.168.1.1 or 2001:DB8::2AA:FF:C0A8:640A.
- IP address range: For example, 192.168.0.1-192.168.0.254 or 2001:DB8::2AA:FF:C0A8:640A-2001:DB8::2AA:FF:C0A8:6414.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.3.1/24 or 2001:DB8::2AA:FF:C0A8:640A/64.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

For more information about IPv6 addresses and syntax, see this Exchange 2013 topic: [IPv6 address basics](https://learn.microsoft.com/exchange/ipv6-support-in-exchange-2013-exchange-2013-help#ipv6-address-basics).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptAnyOfProtocols

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is functional only in the cloud-based service.

The ExceptAnyOfProtocols parameter specifies an exception for the client access rule that's based on the client's protocol.

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
- UniversalOutlook (Mail and Calendar app)

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptAnyOfSourceTcpPortNumbers

> Applicable: Exchange Server 2013

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptUserIsMemberOf

> Applicable: Exchange Server 2013

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptUsernameMatchesAnyOfPatterns

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter is functional only in the cloud-based service.

The ExceptUsernameMatchesAnyOfPatterns parameter specifies an exception for the client access rule that's based on the user's account name in the format `<Domain>\<UserName>` (for example, `contoso.com\jeff`). This parameter accepts text and the wildcard character (\*) (for example, `*jeff*`, but not `jeff*`). Non-alphanumeric characters don't require an escape character.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Name parameter specifies a unique name for the client access rule.

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

### -Priority

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Priority parameter specifies a priority value for the client access rule. A lower integer value indicates a higher priority, and a higher priority rule is evaluated before a lower priority rule. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scope

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Scope parameter specifies the scope of the client access rule. Valid values are:

- Users: The rule only applies to end-user connections.
- All: The rule applies to all connections (end-users and middle-tier apps).

```yaml
Type: ClientAccessRulesScope
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserIsMemberOf

> Applicable: Exchange Server 2013

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UsernameMatchesAnyOfPatterns

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter is functional only in the cloud-based service.

The UsernameMatchesAnyOfPatterns parameter specifies a condition for the client access rule that's based on the user's account name in the format `<Domain>\<UserName>` (for example, `contoso.com\jeff`). This parameter accepts text and the wildcard character (\*) (for example, `*jeff*`, but not `jeff*`). Non-alphanumeric characters don't require an escape character.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserRecipientFilter

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter is functional only in the cloud-based service.

The UserRecipientFilter parameter specifies a condition for the client access rule that uses OPATH filter syntax to identify the user based on a limited set of recipient properties. Client Access Rules don't support the full list of available recipient properties.

You can use the following properties with this parameter:

- City
- Company
- CountryOrRegion (ISO 3166-1 alpha-2 country code.)
- CustomAttribute1 to CustomAttribute15
- Department
- Office
- PostalCode
- StateOrProvince
- StreetAddress

The basic syntax for this parameter is `"Property -ComparisonOperator 'Value'"`:

- Property is one of the filterable properties in the list above (for example `City` or `CustomAttribute1`).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).
- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.

For example:

- `"City -eq 'Redmond'"`
- `"CountryOrRegion -eq 'SG'"`.

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example:

- `"CustomAttribute1 -eq 'AllowOWA' -and CountryOrRegion -eq AU'"`
- `"(CountryOrRegion -eq 'US' -and Department -eq 'Sales') -or Department -eq 'Research'"`.

For detailed information about OPATH filter syntax in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

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

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
