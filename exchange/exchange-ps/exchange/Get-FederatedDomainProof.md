---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-federateddomainproof
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-FederatedDomainProof
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-FederatedDomainProof

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-FederatedDomainProof cmdlet to generate a cryptographically secure string for the domain used for federated sharing in your Exchange organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-FederatedDomainProof -DomainName <SmtpDomain>
 [-DomainController <Fqdn>]
 [-Thumbprint <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-FederatedDomainProof cmdlet generates a cryptographically secure string for the domain used for federated sharing. The resulting string is used to manually configure a text (TXT) record in the Domain Name System (DNS) zone for the domain used by the administrator when running the cmdlet. A TXT record needs to be added to DNS for all accepted domains used for federated sharing. If the thumbprint of a certificate isn't provided, the task generates strings for all the certificates currently configured for the federation trust. Upon initial configuration of federated sharing, the proof string generated for the current certificate needs to be put into the TXT record for the federated domain in DNS. We recommend you update the TXT records whenever a new certificate is configured for the federation trust.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-FederatedDomainProof -DomainName "contoso.com"
```

This example generates a cryptographically secure string for the domain contoso.com.

### Example 2
```powershell
Get-FederatedDomainProof -DomainName "contoso.com" -Thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17
```

This example uses a specific certificate for the domain contoso.com.

## PARAMETERS

### -DomainName
The DomainName parameter specifies the domain name for which the cryptographically secure string is generated.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController
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

### -Thumbprint
The Thumbprint parameter specifies the thumbprint of an existing certificate.

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
