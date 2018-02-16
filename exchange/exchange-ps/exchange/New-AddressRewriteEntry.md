---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# new-AddressRewriteEntry

## SYNOPSIS
!!! Exchange Server 2010

Use the New-AddressRewriteEntry cmdlet to create an address rewrite entry that rewrites sender and recipient e-mail addresses in e-mail messages sent to or from an Exchange organization.

!!! Exchange Server 2013

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange Server 2013.

Use the New-AddressRewriteEntry cmdlet to create an address rewrite entry that rewrites sender and recipient email addresses in messages sent to or sent from your organization through an Edge Transport server.

!!! Exchange Server 2016

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the New-AddressRewriteEntry cmdlet to create an address rewrite entry that rewrites sender and recipient email addresses in messages sent to or sent from your organization through an Edge Transport server.

## SYNTAX

```
new-AddressRewriteEntry [-Name] <String> -ExternalAddress <String> -InternalAddress <String> [-Confirm]
 [-DomainController <Fqdn>] [-ExceptionList <MultiValuedProperty>] [-OutboundOnly <$true | $false>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

With address rewriting in Microsoft Exchange Server 2010, you can modify the addresses of senders and recipients on messages that enter or leave an Exchange 2010 organization. You configure Address Rewriting agents on the Receive connector and Send connector on a computer that has the Edge Transport server role installed.

You can only modify the e-mail message addresses of senders and recipients with a single replacement e-mail address. You can't modify their e-mail address to use multiple replacement e-mail addresses.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Address Rewriting agent" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Address Rewriting - Edge Transport" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
New-AddressRewriteEntry -Name "Address rewrite entry for david@contoso.com" -InternalAddress david@contoso.com -ExternalAddress david@northwindtraders.com
```

This example creates an address rewrite entry for the e-mail address david@contoso.com. The address is rewritten for e-mail messages in both directions.

### Example 1 -------------------------- (Exchange Server 2013)
```
New-AddressRewriteEntry -Name "Address rewrite entry for david@contoso.com" -InternalAddress david@contoso.com -ExternalAddress david@northwindtraders.com
```

This example creates an address rewrite entry that rewrites the email address david@contoso.com to david@northwindtraders.com in outbound mail. Because the OutboundOnly parameter is not set to $true, inbound mail sent to david@northwindtraders.com is rewritten back to david@contoso.com.

### Example 1 -------------------------- (Exchange Server 2016)
```
New-AddressRewriteEntry -Name "Address rewrite entry for david@contoso.com" -InternalAddress david@contoso.com -ExternalAddress david@northwindtraders.com
```

This example creates an address rewrite entry that rewrites the email address david@contoso.com to david@northwindtraders.com in outbound mail. Because the OutboundOnly parameter is not set to $true, inbound mail sent to david@northwindtraders.com is rewritten back to david@contoso.com.

### Example 2 -------------------------- (Exchange Server 2010)
```
New-AddressRewriteEntry -Name "Address rewrite entry for all contoso.com e-mail addresses" -InternalAddress contoso.com -ExternalAddress northwindtraders.com
```

This example creates an address rewrite entry for the contoso.com domain. All e-mail addresses in both directions are rewritten.

### Example 2 -------------------------- (Exchange Server 2013)
```
New-AddressRewriteEntry -Name "Address rewrite entry for all contoso.com email addresses" -InternalAddress contoso.com -ExternalAddress northwindtraders.com
```

This example creates an address rewrite entry that rewrites all email addresses in the contoso.com domain to northwindtraders.com in outbound mail. Because the OutboundOnly parameter is not set to $true, inbound mail sent to northwindtraders.com recipients is rewritten back to contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
New-AddressRewriteEntry -Name "Address rewrite entry for all contoso.com email addresses" -InternalAddress contoso.com -ExternalAddress northwindtraders.com
```

This example creates an address rewrite entry that rewrites all email addresses in the contoso.com domain to northwindtraders.com in outbound mail. Because the OutboundOnly parameter is not set to $true, inbound mail sent to northwindtraders.com recipients is rewritten back to contoso.com.

### Example 3 -------------------------- (Exchange Server 2010)
```
New-AddressRewriteEntry -Name "Address rewrite entry for all contoso.com and subdomain e-mail addresses" -InternalAddress *.contoso.com -ExternalAddress northwindtraders.com -ExceptionList research.contoso.com,corp.contoso.com -OutboundOnly $true
```

This example creates an address rewrite entry with the following configuration:


All e-mail addresses for the contoso.com domain and all subdomains, except research.contoso.com and corp.contoso.com, are rewritten.

Only outbound e-mail messages are rewritten.

### Example 3 -------------------------- (Exchange Server 2013)
```
New-AddressRewriteEntry -Name "Address rewrite entry for contoso.com and all subdomain email addresses" -InternalAddress *.contoso.com -ExternalAddress northwindtraders.com -ExceptionList research.contoso.com,corp.contoso.com -OutboundOnly $true
```

This example creates an address rewrite entry that rewrites all email addresses in the contoso.com domain and all subdomains to northwindtraders.com. However, email addresses in research.contoso.com and corp.contoso.com are not rewritten. Because this address rewrite entry affects a domain and all subdomains (\*.contoso.com), address rewriting occurs on outbound mail only.

### Example 3 -------------------------- (Exchange Server 2016)
```
New-AddressRewriteEntry -Name "Address rewrite entry for contoso.com and all subdomain email addresses" -InternalAddress *.contoso.com -ExternalAddress northwindtraders.com -ExceptionList research.contoso.com,corp.contoso.com -OutboundOnly $true
```

This example creates an address rewrite entry that rewrites all email addresses in the contoso.com domain and all subdomains to northwindtraders.com. However, email addresses in research.contoso.com and corp.contoso.com are not rewritten. Because this address rewrite entry affects a domain and all subdomains (\*.contoso.com), address rewriting occurs on outbound mail only.

## PARAMETERS

### -Name
!!! Exchange Server 2010

The Name parameter specifies the unique name for this address rewrite entry.



!!! Exchange Server 2013, Exchange Server 2016

The Name parameter specifies a unique name for this address rewrite entry.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAddress
!!! Exchange Server 2010

The ExternalAddress parameter specifies the external e-mail address or domain name used when you rewrite an internal e-mail address or domain name. If an e-mail address is specified in the InternalAddress parameter, the value specified in the ExternalAddress parameter must also be an e-mail address. If a domain name or domain name with a wildcard character is specified in the InternalAddress parameter, a domain name must be specified in the ExternalAddress parameter. Addresses or domain names can be entered in the following formats:

- Single e-mail address Rewrite a single internal e-mail address by using the specified address, for example, david@northwindtraders.com.

- Domain name Rewrite all internal e-mail addresses included in the InternalAddress parameter by using the specified external domain name, for example, northwindtraders.com.

The asterisk character (\*) can't be used with the ExternalAddress parameter.



!!! Exchange Server 2013, Exchange Server 2016

The ExternalAddress parameter specifies the final email addresses that you want. If the InternalAddress parameter specifies a single email address (chris@contoso.com), the ExternalAddress parameter must also specify a single email address (support@contoso.com). If the InternalAddress parameter specifies a single domain (contoso.com) or a domain and all subdomains (\*.contoso.com), the ExternalAddress parameter must specify a single domain (fabrikam.com).

You can't use the wildcard character (\*) with the ExternalAddress parameter.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalAddress
!!! Exchange Server 2010

The InternalAddress parameter specifies the internal e-mail address or domain name to be rewritten. Addresses or domain names can be entered in the following formats:

- Single e-mail address Rewrite only the specified address, for example, david@contoso.com.

- Domain name Rewrite all e-mail addresses associated with the specified domain name, for example, contoso.com.

- Domain name with asterisk Rewrite all e-mail addresses associated with the specified domain name and all subdomains, for example, \*.contoso.com.



!!! Exchange Server 2013

The InternalAddress parameter specifies the original email addresses that you want to change. You can use the following values:

- Single email address david@contoso.com

- Single domain contoso.com or sales.contoso.com

- Domain and all subdomains \*.contoso.com



!!! Exchange Server 2016

The InternalAddress parameter specifies the original email addresses that you want to change. You can use the following values:

- Single email address: david@contoso.com

- Single domain: contoso.com or sales.contoso.com

- Domain and all subdomains: \*.contoso.com



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptionList
!!! Exchange Server 2010

The ExceptionList parameter specifies the domain names that shouldn't be rewritten when the InternalAddress parameter contains a value that specifies multiple domain names. You can separate multiple domain names that are included with the ExceptionList parameter with commas. For more information about how to add values to or remove values from multivalued properties, see Modifying Multivalued Properties.



!!! Exchange Server 2013, Exchange Server 2016

The ExceptionList parameter specifies the email address domains that shouldn't be rewritten when the InternalAddress parameter contains the wildcard character to rewrite addresses in a domain and all subdomains (\*.contoso.com). You can enter multiple domain values in the ExceptionList parameter separated by commas.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutboundOnly
!!! Exchange Server 2010

The OutboundOnly parameter specifies whether e-mail addresses should be rewritten only when e-mail messages leave the Exchange 2010 organization, or if addresses should be rewritten when messages are sent in both directions. The two possible values for this parameter are $true or $false. The default value is $false.

This parameter can't be set to $false if the value specified in the InternalAddress parameter contains a wildcard character.



!!! Exchange Server 2013, Exchange Server 2016

The OutboundOnly parameter enables or disables outbound-only address rewriting. Valid input for this parameter is $true or $false. The value $true means address rewriting occurs in outbound mail only. The value $false means address rewriting occurs on outbound mail and also on inbound mail (rewritten email addresses are changed back to the original email addresses in inbound mail). The default value is $false.

You must set this parameter to $true if the InternalAddress parameter contains the wildcard character to rewrite addresses in a domain and all subdomains (\*.contoso.com).

Also, when you configure outbound-only address rewriting, you need to configure the rewritten email address as a proxy address on the affected recipients. For example, if laura@sales.contoso.com is rewritten to laura@contoso.com, the proxy address laura@contoso.com must be configured on Laura's mailbox. This allows replies and inbound messages to be delivered correctly.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/b75fa347-ae84-4fe8-90be-2fe1bc6bc8d4.aspx)

