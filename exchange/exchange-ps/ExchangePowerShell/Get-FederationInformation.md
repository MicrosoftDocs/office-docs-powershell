---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-federationinformation
schema: 2.0.0
title: Get-FederationInformation
---

# Get-FederationInformation

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-FederationInformation cmdlet to get federation information from an external Exchange organization.

> [!TIP]
> For information about changes made to the Get-FederationInformation cmdlet to improve security and privacy, see [Important Update to the Get-FederationInformation Cmdlet in Exchange Online](https://techcommunity.microsoft.com/blog/exchange/important-update-to-the-get-federationinformation-cmdlet-in-exchange-online/4410095).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-FederationInformation -DomainName <SmtpDomain>
 [-BypassAdditionalDomainValidation]
 [-Force]
 [-TrustedHostnames <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-FederationInformation cmdlet retrieves federation information from the specified domain, which should have federation enabled.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-FederationInformation -DomainName contoso.com
```

This example gets federation information from the domain contoso.com.

## PARAMETERS

### -DomainName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The DomainName parameter specifies the domain name for which federation information is to be retrieved.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassAdditionalDomainValidation

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The BypassAdditionalDomainValidation switch specifies that the command skip validation of domains from the external Exchange organization. You don't need to specify a value with this switch.

We recommend that you only use this switch to retrieve federation information in a hybrid deployment between on-premises and Exchange Online organizations. Don't use this switch to retrieve federation information for on-premises Exchange organizations in a cross-organization arrangement.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

A confirmation prompt warns you if the host name in the Autodiscover endpoint of the domain doesn't match the Secure Sockets Layer (SSL) certificate presented by the endpoint and the host name isn't specified in the TrustedHostnames parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedHostnames

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The TrustedHostnames parameter specifies the fully qualified domain name (FQDN) of federation endpoints. Federation endpoints are the client access (frontend) services on Mailbox servers in an organization with federation enabled. Explicitly specifying the TrustedHostnames parameter allows the cmdlet to bypass prompting if the certificate presented by the endpoint doesn't match the domain name specified in the DomainName parameter.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
