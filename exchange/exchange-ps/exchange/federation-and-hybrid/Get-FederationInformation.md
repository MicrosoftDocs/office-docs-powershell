---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-FederationInformation
schema: 2.0.0
---

# Get-FederationInformation

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-FederationInformation cmdlet to get federation information, including federated domain names and target URLs, from an external Exchange organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-FederationInformation -DomainName <SmtpDomain> [-BypassAdditionalDomainValidation] [-Force]
 [-TrustedHostnames <MultiValuedProperty>] [<CommonParameters>]
```

## DESCRIPTION
The Get-FederationInformation cmdlet retrieves federation information from the domain specified. Results from the cmdlet can be piped to the New-OrganizationRelationship cmdlet to establish an organization relationship with the Exchange organization being queried.

The domain specified should have federation enabled.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-FederationInformation -DomainName contoso.com
```

This example gets federation information from the domain contoso.com.

## PARAMETERS

### -DomainName
The DomainName parameter specifies the domain name for which federation information is to be retrieved.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassAdditionalDomainValidation
The BypassAdditionalDomainValidation switch specifies that the command skip validation of domains from the external Exchange organization. You don't need to specify a value with this switch.

We recommend that you only use this switch to retrieve federation information in a hybrid deployment between on-premises and Exchange Online organizations. Don't use this switch to retrieve federation information for on-premises Exchange organizations in a cross-organization arrangement.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

A confirmation prompt warns you if the host name in the Autodiscover endpoint of the domain doesn't match the Secure Sockets Layer (SSL) certificate presented by the endpoint and the host name isn't specified in the TrustedHostnames parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedHostnames
The TrustedHostnames parameter specifies the fully qualified domain name (FQDN) of federation endpoints. Federation endpoints are the client access (frontend) services on Mailbox servers in an organization with federation enabled. Explicitly specifying the TrustedHostnames parameter allows the cmdlet to bypass prompting if the certificate presented by the endpoint doesn't match the domain name specified in the DomainName parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/e7e948c8-453d-49e2-97da-45fd2a7853ba.aspx)
