---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Set-AcceptedDomain

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-AcceptedDomain cmdlet to configure an existing accepted domain in your organization. An accepted domain is any SMTP namespace for which an Exchange organization sends and receives e-mail.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-AcceptedDomain cmdlet to configure an existing accepted domain in your organization. An accepted domain is any SMTP namespace for which an Exchange organization sends and receives email.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-AcceptedDomain cmdlet to modify existing accepted domains in your organization. An accepted domain is any SMTP namespace for which an Exchange organization sends and receives email.

## SYNTAX

```
Set-AcceptedDomain [-Identity] <AcceptedDomainIdParameter> [-AddressBookEnabled <$true | $false>]
 [-AuthenticationType <Managed | Federated>] [-Confirm] [-DomainController <Fqdn>]
 [-DomainType <Authoritative | ExternalRelay | InternalRelay>] [-LiveIdInstanceType <Consumer | Business>]
 [-MailFlowPartner <MailFlowPartnerIdParameter>] [-MakeDefault <$true | $false>] [-Name <String>]
 [-OutboundOnly <$true | $false>] [-PendingRemoval <$true | $false>] [-WhatIf]
 [-EnableNego2Authentication <$true | $false>] [-MatchSubDomains <$true | $false>]
 [-PendingCompletion <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Accepted domains" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Accepted domains" entry in the Mail flow permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-AcceptedDomain -Identity Contoso -MakeDefault $true
```

This example makes the accepted domain Contoso the default accepted domain.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-AcceptedDomain -Identity Contoso -MakeDefault $true
```

This example makes the accepted domain Contoso the default accepted domain.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-AcceptedDomain -Identity Contoso -MakeDefault $true
```

This example makes the accepted domain Contoso the default accepted domain.

### Example 1 -------------------------- (Exchange Online)
```
Set-AcceptedDomain -Identity Contoso -MakeDefault $true
```

This example makes the accepted domain Contoso the default accepted domain.

### Example 1 -------------------------- (Exchange Online Protection)
```
Set-AcceptedDomain -Identity Contoso -MakeDefault $true
```

This example makes the accepted domain Contoso the default accepted domain.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies a string value for the accepted domain. Enter either the GUID or unique name that you set with the Name parameter of the accepted domain object.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

The Identity parameter specifies the accepted domain you want to modify. You can use any value that uniquely identifies the accepted domain object. For example, you can use the name, GUID or distinguished name (DN) of the accepted domain.



```yaml
Type: AcceptedDomainIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddressBookEnabled
!!! Exchange Server 2010

The AddressBookEnabled parameter specifies whether to enable recipient filtering on the Edge Transport server role that accepts mail for this accepted domain. You should set this parameter to $true only if all the recipients in this accepted domain are replicated to the Edge Active Directory Lightweight Directory Services (AD LDS) instance where recipient filtering is run for this accepted domain. The default values for this parameter are as follows:

- For authoritative domains $true

- For internal relay domains $false

- For external relay domains $false



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The AddressBookEnabled parameter specifies whether to enable recipient filtering on the server that accepts mail for this accepted domain. The default values for this parameter are as follows:

- For authoritative domains $true

- For internal relay domains $false

- For external relay domains $false



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The AddressBookEnabled parameter specifies whether to enable recipient filtering for this accepted domain. The default values are:

- $true for authoritative domains.

- $false for internal relay domains.

- $false for external relay domains.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthenticationType
The AuthenticationType parameter is reserved for internal Microsoft use.

```yaml
Type: Managed | Federated
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainType
!!! Exchange Server 2010

The DomainType parameter specifies the type of accepted domain that you want to configure. Valid values are Authoritative, InternalRelay, and ExternalRelay. You must set at least one value.

In an authoritative domain, messages are delivered to a recipient that has a domain account in your Exchange organization. In an internal relay domain, messages are relayed to a server outside your Exchange organization, but still under the authority of your company or IT department. Use the internal relay domain if you want to treat messages to this domain as internal messages. In an external relay domain, messages are relayed to an e-mail server outside your organization, which you don't control.

The default value is Authoritative.



!!! Exchange Server 2013

The DomainType parameter specifies the type of accepted domain that you want to configure. Valid values are Authoritative, InternalRelay, and ExternalRelay. You must set at least one value.

In an authoritative domain, messages are delivered to a recipient that has a domain account in your Exchange organization. In an internal relay domain, messages are relayed to a server outside your Exchange organization, but still under the authority of your company or IT department. Use the internal relay domain if you want to treat messages to this domain as internal messages. In an external relay domain, messages are relayed to an email server outside your organization, which you don't control.

The default value is Authoritative.

ExternalRelay is only available in on-premises Exchange 2013.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The DomainType parameter specifies the accepted domain type. Valid values are:

- Authoritative: This is the default value. Your organization is completely responsible for delivering email to recipients in the domain, and for generating non-delivery reports (also known as an NDRs, delivery system notifications, DSNs, or bounce messages) for unresolved recipients.

- InternalRelay: This is a type of non-authoritative domain. Your organization receives email that's sent to recipients in the domain, but the messages are relayed to an external messaging system that's under your control. The external messaging system is responsible for generating NDRs for unresolved recipients. Use this value to treat messages that are sent to the domain as internal messages.

- ExternalRelay: This is a type of non-authoritative domain that's available only in on-premises Exchange organizations. Your organization receives email that's sent to recipients in the domain, but the messages are relayed to an external messaging system that's completely outside of your control. The external messaging system is responsible for generating NDRs for unresolved recipients.

Note:

For the value InternalRelay or ExternalRelay you typically use mail users or mail contacts to relay the messages to the external messaging system. Address rewriting is also available on Edge Transport servers in on-premises Exchange organizations.



```yaml
Type: Authoritative | ExternalRelay | InternalRelay
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LiveIdInstanceType
The LiveIdInstanceType parameter is reserved for internal Microsoft use.

```yaml
Type: Consumer | Business
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailFlowPartner
The MailFlowPartner parameter is reserved for internal Microsoft use.

```yaml
Type: MailFlowPartnerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MakeDefault
!!! Exchange Server 2010

The MakeDefault parameter specifies whether the accepted domain is the default domain. The default accepted domain is the domain name associated with outbound messages that have encapsulated addresses, such as IMCEANOTES-user+40OtherSystem@contoso.com, for non-Exchange e-mail system interoperability. If you don't interoperate with a non-Exchange e-mail system in your organization, you don't have to set this parameter. For the first accepted domain created in the organization, the default value is $true. For subsequent accepted domains, the default value is $false.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The MakeDefault parameter specifies whether the accepted domain is the default domain. The default accepted domain is the domain name associated with outbound messages that have encapsulated addresses, such as IMCEANOTES-user+40OtherSystem@contoso.com, for non-Exchange email system interoperability. If you don't interoperate with a non-Exchange email system in your organization, you don't have to set this parameter. For the first accepted domain created in the organization, the default value is $true. For subsequent accepted domains, the default value is $false.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The MakeDefault parameter specifies whether the accepted domain is the default domain. Valid values are: $true or $false.

- $true: The accepted domain is the default domain. This is the default value for first accepted domain that's created in the organization.

- $false: The accepted domain isn't the default domain. This the default value for subsequent accepted domains.

The default accepted domain is used in sender email addresses when the senders have only non-SMTP email addresses (for example, X.400 addresses). Non-SMTP email addresses are encapsulated in SMTP email addresses by using the Internet Mail Connector Encapsulated Address (IMCEA) encapsulation method. IMCEA encapsulation uses the default domain value in the SMTP email address.

If you don't use non-SMTP email addresses in your organization, you don't need to worry about the value of this parameter.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2010

The Name parameter specifies a unique name for a remote domain object.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Name parameter specifies a unique name for the accepted domain object.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The Name parameter specifies a unique name for the accepted domain object. The default value is the DomainName property value. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutboundOnly
!!! Exchange Server 2010

The OutboundOnly parameter specifies whether this accepted domain is an internal relay domain for the on-premises deployment for organizations that have coexistence with a cloud-based organization.

The authoritative accepted domain for the on-premises deployment is configured as an internal relay accepted domain on the cloud side. If the on-premises deployment is using Microsoft Forefront Online Protection for Exchange, you must set this parameter to $true for the accepted domain that represents your on-premises deployment. This parameter is used only if the DomainType parameter is set to Authoritative or InternalRelay. The default value is $false.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The OutboundOnly parameter specifies whether this accepted domain is an internal relay domain for the on-premises deployment for organizations that have coexistence with a cloud-based organization.

The authoritative accepted domain for the on-premises deployment is configured as an internal relay accepted domain on the cloud side. If the on-premises deployment is using Microsoft Forefront Online Protection for Exchange, you must set this parameter to $true for the accepted domain that represents your on-premises deployment. This parameter is used only if the DomainType parameter is set to Authoritative or InternalRelay. The default value is $false.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The OutboundOnly parameter specifies whether this accepted domain is an internal relay domain for the on-premises deployment for organizations that have coexistence with a cloud-based organization.

The authoritative accepted domain for the on-premises deployment is configured as an internal relay accepted domain on the cloud side. If the on-premises deployment is using Exchange Online Protection, you need to set this parameter to $true for the accepted domain that represents your on-premises deployment. This parameter is used only if the DomainType parameter is set to Authoritative or InternalRelay. The default value is $false.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PendingRemoval
!!! Exchange Server 2010

The PendingRemoval parameter is reserved for internal Microsoft use.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableNego2Authentication
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MatchSubDomains
The MatchSubDomains parameter enables mail to be sent by and received from users on any subdomain of this accepted domain. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PendingCompletion
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/2ef9a20b-0974-45d0-9dae-23bab22d736e.aspx)

