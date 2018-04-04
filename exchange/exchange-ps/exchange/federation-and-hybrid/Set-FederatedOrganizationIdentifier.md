---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-FederatedOrganizationIdentifier
schema: 2.0.0
---

# Set-FederatedOrganizationIdentifier

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-FederatedOrganizationIdentifier cmdlet to configure the federated organization identifier for the Exchange organization.

For more details, see Federation (https://technet.microsoft.com/library/dd335047.aspx).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-FederatedOrganizationIdentifier [[-Identity] <OrganizationIdParameter>] [-AccountNamespace <SmtpDomain>]
 [-Confirm] [-DelegationFederationTrust <FederationTrustIdParameter>] [-DomainController <Fqdn>]
 [-Enabled <$true | $false>] [-OrganizationContact <SmtpAddress>] [-WhatIf] [-DefaultDomain <SmtpDomain>]
 [<CommonParameters>]
```

## DESCRIPTION
You must configure a federated organization identifier to create an account namespace for your Exchange organization with the Microsoft Federation Gateway and enable federation for the purpose of sharing calendars or contacts, accessing free/busy information across Exchange organizations and securing cross-premises email delivery using federated delivery. When you create a federation trust, a value for the AccountNamespace parameter is automatically created with the Microsoft Federation Gateway. The AccountNamespace parameter is a combination of a pre-defined string and the domain specified. For example, if you specify the federated domain contoso.com as the domain, "FYDIBOHF25SPDLT.contoso.com" is automatically created as the value for the AccountNamespace parameter. You can add and remove Additional domain names later by using the Add-FederatedDomain and Remove-FederatedDomain cmdlets.

You can temporarily disable federation by disabling the organization identifier.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-FederatedOrganizationIdentifier -DelegationFederationTrust "Microsoft Federation Gateway" -AccountNamespace "Contoso.com" -Enabled $true
```

This example configures a federated organization identifier for the Exchange organization.

### Example 2
```
Set-FederatedOrganizationIdentifier -Enabled $false
```

This example temporarily disables federation for the Exchange organization.

### Example 3
```
Set-FederatedOrganizationIdentifier -Enabled $true
```

This example enables the organization identifier. This enables federation for the Exchange organization.

## PARAMETERS

### -AccountNamespace
The AccountNamespace parameter specifies the federated domain to be used to establish the organization identifier with the Microsoft Federation Gateway.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DelegationFederationTrust
The DelegationFederationTrust parameter specifies the identity of the federation trust to be used by the organization identifier.

```yaml
Type: FederationTrustIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether the organization identifier is enabled. Valid values include $true or $false.

Setting the parameter to $false disables federation.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the federated organization identifier.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -OrganizationContact
The OrganizationContact parameter specifies the SMTP address of the federation contact.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultDomain
The DefaultDomain parameter specifies the federated domain used for delegation tokens issued by the Microsoft Federation Gateway for user accounts in the Exchange organization. If the DefaultDomain parameter isn't set, the primary SMTP domain for each user account is used in delegation tokens issued by the Microsoft Federation Gateway. Only a single domain or subdomain for the Exchange organization should be configured, and it applies to all delegation tokens issued for the Exchange organization, for example, contoso.com.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/a7b8c08e-8c8c-4566-b92a-2731cca66ada.aspx)
