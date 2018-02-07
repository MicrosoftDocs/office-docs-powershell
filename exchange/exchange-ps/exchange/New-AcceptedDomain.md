---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# New-AcceptedDomain

## SYNOPSIS
!!! Exchange Server 2010

Use the New-AcceptedDomain cmdlet to create an accepted domain in your organization. An accepted domain is any SMTP namespace for which an Exchange organization sends and receives e-mail.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the New-AcceptedDomain cmdlet to create an accepted domain in your organization. An accepted domain is any SMTP namespace for which an Exchange organization sends and receives email.

## SYNTAX

```
New-AcceptedDomain [-Name] <String> -DomainName <SmtpDomainWithSubdomains>
 [-AuthenticationType <Managed | Federated>] [-Confirm] [-DomainController <Fqdn>]
 [-DomainType <Authoritative | ExternalRelay | InternalRelay>] [-LiveIdInstanceType <Consumer | Business>]
 [-MailFlowPartner <MailFlowPartnerIdParameter>] [-Organization <OrganizationIdParameter>]
 [-OutboundOnly <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Accepted domains" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Accepted domains" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
New-AcceptedDomain -DomainName Contoso.com -DomainType Authoritative -Name Contoso
```

This example creates the new authoritative accepted domain Contoso.

### Example 1 -------------------------- (Exchange Server 2013)
```
New-AcceptedDomain -DomainName Contoso.com -DomainType Authoritative -Name Contoso
```

This example creates the new authoritative accepted domain Contoso.

### Example 1 -------------------------- (Exchange Server 2016)
```
New-AcceptedDomain -DomainName Contoso.com -DomainType Authoritative -Name Contoso
```

This example creates the new authoritative accepted domain Contoso.

## PARAMETERS

### -DomainName
The DomainName parameter specifies the SMTP domain that you want to establish as an accepted domain. Valid input for the DomainName parameter is an SMTP domain. You can use a wildcard character to specify all subdomains of a specified domain, as shown in the following example: \*.contoso.com.

However, you can't embed a wildcard character, as shown in the following example: domain.\*.contoso.com. The domain name string may not contain more than 256 characters.

```yaml
Type: SmtpDomainWithSubdomains
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the accepted domain object.

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

### -DomainType
!!! Exchange Server 2010

The DomainType parameter specifies the type of accepted domain that you want to configure. Valid values are Authoritative, InternalRelay, or ExternalRelay. You must set at least one value.

In an authoritative domain, messages are delivered to a recipient that has a domain account in your Exchange organization. In an internal relay domain, messages are relayed to a server outside your Exchange organization, but still under the authority of your company or IT department. Use the internal relay domain if you want to treat the messages to this domain as internal messages. In an external relay domain, messages are relayed to an e-mail server, outside your organization, which you don't control.

The default value is Authoritative.



!!! Exchange Server 2013, Exchange Server 2016

The DomainType parameter specifies the type of accepted domain that you want to configure. Valid values are Authoritative, InternalRelay, or ExternalRelay. You must set at least one value.

In an authoritative domain, messages are delivered to a recipient that has a domain account in your Exchange organization. In an internal relay domain, messages are relayed to a server outside your Exchange organization, but still under the authority of your company or IT department. Use the internal relay domain if you want to treat the messages to this domain as internal messages. In an external relay domain, messages are relayed to an email server, outside your organization, which you don't control.

The default value is Authoritative.



```yaml
Type: Authoritative | ExternalRelay | InternalRelay
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutboundOnly
The OutboundOnly parameter specifies whether this accepted domain is an internal relay domain for the on-premises deployment for organizations that have coexistence with a cloud-based organization.

The authoritative accepted domain for the on-premises deployment is configured as an internal relay accepted domain on the cloud side. If the on-premises deployment is using Microsoft Forefront Online Protection for Exchange, you must set this parameter to $true for the accepted domain that represents your on-premises deployment. This parameter is used only if the DomainType parameter is set to Authoritative or InternalRelay. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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

[Online Version](https://technet.microsoft.com/library/08bcaaec-51e3-447d-b3bf-406a705c64b4.aspx)

