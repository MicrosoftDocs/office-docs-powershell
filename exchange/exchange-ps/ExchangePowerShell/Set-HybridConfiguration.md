---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-hybridconfiguration
schema: 2.0.0
title: Set-HybridConfiguration
---

# Set-HybridConfiguration

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-HybridConfiguration cmdlet to modify the hybrid deployment between your on-premises Exchange organization and Exchange Online in Microsoft 365 for enterprises.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-HybridConfiguration
 [-ClientAccessServers <MultiValuedProperty>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Domains <MultiValuedProperty>]
 [-EdgeTransportServers <MultiValuedProperty>]
 [-ExternalIPAddresses <MultiValuedProperty>]
 [-Features <MultiValuedProperty>]
 [-Name <String>]
 [-OnPremisesSmartHost <SmtpDomain>]
 [-ReceivingTransportServers <MultiValuedProperty>]
 [-SecureMailCertificateThumbprint <String>]
 [-SendingTransportServers <MultiValuedProperty>]
 [-ServiceInstance <Int32>]
 [-TlsCertificateName <SmtpX509Identifier>]
 [-TransportServers <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-HybridConfiguration cmdlet modifies the hybrid configuration features, such as enabling secure mail, designating a specific Mailbox server for hybrid functionality, or enabling or disabling free/busy sharing between on-premises Exchange and Exchange Online.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-HybridConfiguration -SecureMailCertificateThumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17
```

In Exchange Server 2010, this example specifies the hybrid configuration uses the certificate with the thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17 as the certificate for Secure Mail messaging.

### Example 2
```powershell
Set-HybridConfiguration -Features OnlineArchive,MailTips,OWARedirection,FreeBusy,MessageTracking
```

This example disables the secure mail and centralized transport hybrid deployment features, but keeps the Exchange Online Archive, MailTips, Outlook on the web redirection, free/busy and message tracking features enabled between the on-premises Exchange and Exchange Online organizations.

### Example 3
```powershell
Set-HybridConfiguration -TlsCertificateName "<I>CN=A. Datum Corporation CA-3, OU=www.adatum.com, O=A.Datum Corp, C=US<S>CN=mail.contoso.com, O=Barbara Zighetti, L=Seattle, S=WA, C=US"
```

This example specifies that the hybrid deployment uses a defined TLS certificate, referenced by the combination of the Issuer and Subject attributes of the CA issued X.509 certificate.

## PARAMETERS

### -ClientAccessServers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in Exchange Server 2010.

The ClientAccessServers parameter specifies the Hub Transport servers in Exchange Server 2010 SP2 or later that are configured to support hybrid deployment features. You need to specify at least one Client Access server that's accessible from the internet on TCP ports 80 and 443. The servers are configured to enable the following features:

- Mailbox Replication Service (MRS) Proxy: Enable the MRS Proxy service configuration.
- Virtual Directories: Host the default web sites for Exchange Web Services (EWS), offline address books, and ActiveSync services.
- Outlook Anywhere: Enabled.

You can specify multiple servers separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -Domains

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Domains parameter specifies the domain namespaces used in the hybrid deployment. These domains must be configured as accepted domains in either on-premises Exchange or Exchange Online. The domains are used in configuring the organization relationships and Send and Receive connectors used by the hybrid configuration.

You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ExternalIPAddresses

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalIPAddresses parameter is a legacy parameter that specifies the publicly accessible inbound IP address of Microsoft Exchange Server 2010 Hub Transport servers.

You should use this parameter to change or clear legacy Exchange 2010 Hub Transport server IP address values only. IPv6 addresses aren't supported.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Features

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Features parameter specifies the features that are enabled for the hybrid configuration. Valid values are:

- OnlineArchive: Enables the Exchange Online archive for on-premises Exchange and Exchange Online users.
- FreeBusy: Enables calendar free/busy sharing between on-premises Exchange and Exchange Online users.
- MailTips: Enables MailTips between on-premises Exchange and Exchange Online users.
- MessageTracking: Enables message tracking between on-premises Exchange and Exchange Online.
- OWARedirection: Enables automatic Outlook on the web (formerly known as Outlook Web App or OWA) redirection to on-premises Exchange or Exchange Online, depending on where the user mailbox is located.
- SecureMail: Enables secure message transport via Transport Layer Security (TLS) between on-premises Exchange and Exchange Online.
- Centralized: Enables the on-premises Exchange servers to handle all message transport between on-premises Exchange and Exchange Online, including message delivery to the internet for both organizations. If you don't use this value, on-premises Exchange and Exchange Online are each responsible for their own internet message delivery.
- Photos: Enables the sharing of user photo data between the on-premises Exchange and Exchange Online. This feature works in tandem with the PhotosEnabled parameter in the OrganizationRelationship cmdlets in a hybrid deployment. If you use this value, the PhotosEnabled parameter is automatically set to $true. If you don't use this value, the PhotosEnabled parameter is automatically set to $false.

You can specify multiple values separated by commas. When you use the Hybrid Configuration wizard, all features are enabled by default.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is deprecated and no longer used.

There can be only one HybridConfiguration object in an Exchange organization.

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

### -OnPremisesSmartHost

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The OnPremisesSmartHost parameter specifies the FQDN of the on-premises Exchange Mailbox server used for secure mail transport between on-premises Exchange and Exchange Online.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ReceivingTransportServers

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ReceivingTransportServers parameter specifies the Mailbox servers defined in the outbound connector configuration in Exchange Online. Valid values are:

- The Mailbox server FQDN (for example, mbx.corp.contoso.com).
- The Mailbox server host name (for example, MBX).

You can specify multiple servers specified by commas.

The specified servers receive secure email messages from Exchange Online to on-premises Exchange in a hybrid deployment. You need to specify at least one publicly accessible Mailbox server to enable secure mail.

The value of this parameter must be blank ($null) when you use the EdgeTransportServers parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SecureMailCertificateThumbprint

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The SecureMailCertificateThumbprint parameter specifies the thumbprint of the X.509 certificate to be used as the certificate for hybrid deployment secure message transport. This certificate can't be self-signed, must be obtained from a trusted certificate authority (CA), and must be installed on all Hub Transport servers defined in the TransportServers parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SendingTransportServers

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SendingTransportServers parameter specifies the Mailbox servers defined in the inbound connector configuration in Exchange Online. Valid values are:

- The Mailbox server FQDN (for example, mbx.corp.contoso.com).
- The Mailbox server host name (for example, MBX).

You can specify multiple servers specified by commas.

The specified servers send secure email messages from on-premises Exchange to Exchange Online in a hybrid deployment. You need to specify at least one publicly accessible Mailbox server to enable secure mail.

The value of this parameter must be blank ($null) when you use the EdgeTransportServers parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ServiceInstance

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is meaningful only in Office 365 operated by 21Vianet in China.

To manually configure a hybrid deployment with Office 365 operated by 21Vianet in China, set the value of this parameter to 1. Otherwise, the default value is 0.

All other Microsoft 365 organizations should use the Hybrid Configuration wizard to configure a hybrid deployment.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -TlsCertificateName

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The TlsCertificateName parameter specifies the X.509 certificate to use for TLS encryption. Valid syntax for this parameter is `"<I>X.500Issuer<S>X.500Subject"`:

- `X.500Issuer`: The value in the certificate's Issuer field.
- `X.500Subject`: The value in the certificate's Subject field.

You can find these values by running the Get-ExchangeCertificate cmdlet.

Or, after you run Get-ExchangeCertificate to find the thumbprint value of the certificate, use the thumbprint value in the command `$TLSCert = Get-ExchangeCertificate -Thumbprint <Thumbprint>`, run the command `$TLSCertName = "<I>$($TLSCert.Issuer)<S>$($TLSCert.Subject)"`, and then use the value `$TLSCertName` for this parameter.

```yaml
Type: SmtpX509Identifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -TransportServers

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The TransportServers parameter specifies the Hub Transport servers in Exchange Server 2010 SP2 or later that are configured to support hybrid deployment features.

You need to specify at least one Hub Transport server that's accessible from the internet for secure mail between on-premises Exchange and Exchange Online.

You can specify multiple servers separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -EdgeTransportServers

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The EdgeTransportServers parameter specifies the Edge Transport servers that are configured to support the hybrid deployment features. The Edge Transport server must be externally accessible from the Internet on port 25. The accepted values for the EdgeTransportServers parameter are either the full or short computer name of an Edge Transport server, for example, either edge.corp.contoso.com or EDGE. Separate server names with a comma if defining more than one Edge Transport server.

When configuring the EdgeTransportServers parameter, you must configure the ReceivingTransportServers and SendingTransportServers parameter values to $null.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
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
