---
applicable: Exchange Online
schema: 2.0.0
---

# Set-ClientAccessRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-ClientAccessRule cmdlet to modify existing client access rules. Client access rules help you control access to your cloud-based organization based on the properties of the connection.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-ClientAccessRule [-Identity] <ClientAccessRuleIdParameter> [-Action <AllowAccess | DenyAccess>]
 [-AnyOfAuthenticationTypes <MultiValuedProperty>] [-AnyOfClientIPAddressesOrRanges <MultiValuedProperty>]
 [-AnyOfProtocols <MultiValuedProperty>] [-Confirm] [-DatacenterAdminsOnly] [-DomainController <Fqdn>]
 [-Enabled <$true | $false>] [-ExceptAnyOfAuthenticationTypes <MultiValuedProperty>]
 [-ExceptAnyOfClientIPAddressesOrRanges <MultiValuedProperty>] [-ExceptAnyOfProtocols <MultiValuedProperty>]
 [-ExceptUsernameMatchesAnyOfPatterns <MultiValuedProperty>] [-Name <String>] [-Priority <Int32>]
 [-Scope <All | Users>] [-UsernameMatchesAnyOfPatterns <MultiValuedProperty>] [-UserRecipientFilter <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Client access rules are like mail flow rules (also known as transport rules) for client connections to your organization. You use conditions and exceptions to identify the connections based on their properties, and actions that allow or block the connections.

> [!NOTE]  
> Not all authentication types are supported for all protocols. The supported authentication types per protocol are described in this list:

- OutlookWebApp:BasicAuthentication and AdfsAuthentication.

- ExchangeAdminCenter:BasicAuthentication and AdfsAuthentication.

- RemotePowerShell:BasicAuthentication and NonBasicAuthentication.

- ExchangeActiveSync:BasicAuthentication, OAuthAuthentication, and CertificateBasedAuthentication.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-ClientAccessRule "Allow IMAP4" -AnyOfClientIPAddressesOrRanges @{Add="172.17.17.27/16"}
```

This example adds the IP address range 172.17.17.27/16 to the existing client access rule named Allow IMAP4 without affecting the existing IP address values.

## PARAMETERS

### -Identity
The Identity parameter specifies the client access rule that you want to modify. You can use any value that uniquely identifies the client access rule. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: ClientAccessRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Action
The Action parameter specifies the action for the client access rule. Valid values for this parameter are AllowAccess and DenyAccess.

```yaml
Type: AllowAccess | DenyAccess
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfAuthenticationTypes
The AnyOfAuthenticationTypes parameter specifies a condition for the client access rule that's based on the client's authentication type.

Valid values for this parameter are:

- AdfsAuthentication

- BasicAuthentication

- CertificateBasedAuthentication

- NonBasicAuthentication

- OAuthAuthentication

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfClientIPAddressesOrRanges
The AnyOfClientIPAddressesOrRanges parameter specifies a condition for the client access rule that's based on the client's IP address. Valid values for this parameter are:

- A single IP address: For example, 192.168.1.1.

- An IP address range: For example, 192.168.0.1-192.168.0.254.

- Classless Inter-Domain Routing (CIDR) IP: For example, 192.168.3.1/24.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfProtocols
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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
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

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatacenterAdminsOnly
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether the client access rule is enabled or disabled. Valid values for this parameter are $true or $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptAnyOfAuthenticationTypes
The ExceptAnyOfAuthenticationTypes parameter specifies an exception for the client access rule that's based on the client's authentication type.

Valid values for this parameter are:

- AdfsAuthentication

- BasicAuthentication

- CertificateBasedAuthentication

- NonBasicAuthentication

- OAuthAuthentication

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptAnyOfClientIPAddressesOrRanges
The ExceptAnyOfClientIPAddressesOrRanges parameter specifies an exception for the client access rule that's based on the client's IP address. Valid values for this parameter are:

- A single IP address: For example, 192.168.1.1.

- An IP address range: For example, 192.168.0.1-192.168.0.254.

- Classless Inter-Domain Routing (CIDR) IP: For example, 192.168.3.1/24.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptAnyOfProtocols
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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptUsernameMatchesAnyOfPatterns
The ExceptUsernameMatchesAnyOfPatterns parameter specifies an exception for the client access rule that's based on the user's account name in the format \<Domain\>\\\<UserName\> (for example, contoso.com\\jeff). This parameter accepts text and the wildcard character (\*) (for example, \*jeff\*, but not jeff\*). Non-alphanumeric characters don't require an escape character.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the client access rule.

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

### -Priority
The Priority parameter specifies a priority value for the client access rule. A lower integer value indicates a higher priority, and a higher priority rule is evaluated before a lower priority rule. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scope
The Scope parameter specifies the scope of the client access rule. Valid values are:

- Users: The rule only applies to end-user connections.

- All: The rule applies to all connections (end-users and middle-tier apps).

```yaml
Type: All | Users
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UsernameMatchesAnyOfPatterns
The UsernameMatchesAnyOfPatterns parameter specifies a condition for the client access rule that's based on the user's account name in the format \<Domain\>\\\<UserName\> (for example, contoso.com\\jeff). This parameter accepts text and the wildcard character (\*) (for example, \*jeff\*, but not jeff\*). Non-alphanumeric characters don't require an escape character.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserRecipientFilter
The UserRecipientFilter parameter specifies a condition for the client access rule that uses OPath filter syntax to identify the user. For example, {City -eq "Redmond"}. The filterable attributes that you can use with this parameter are:

- City

- Company

- CountryOrRegion

- CustomAttribute1-15

- Department

- Office

- PostalCode

- StateOrProvince

- StreetAddress

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/a4ba8627-b774-460f-9793-3d741c115b2e.aspx)

