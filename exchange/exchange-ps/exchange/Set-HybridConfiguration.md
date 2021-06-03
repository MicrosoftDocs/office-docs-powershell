---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-hybridconfiguration
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-HybridConfiguration
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-HybridConfiguration

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-HybridConfiguration cmdlet to modify the hybrid deployment between your on-premises Exchange organization and Exchange Online in a Microsoft 365 for enterprises organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

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
The Set-HybridConfiguration cmdlet modifies the hybrid configuration features, such as enabling secure mail, designating a specific Mailbox server for hybrid functionality, or enabling or disabling free/busy information sharing and message tracking between the on-premises Exchange and Exchange Online organizations.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-HybridConfiguration -SecureMailCertificateThumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17
```

In Exchange Server 2010, this example specifies that the hybrid configuration will use the certificate with the thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17 as the certificate for Secure Mail messaging.

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
This parameter is available or functional only in Exchange Server 2010.

The ClientAccessServers parameter specifies the Exchange 2010 SP2 or later servers with the Client Access server role installed that will be configured to support the hybrid deployment features. At least one Client Access server must be defined and be externally accessible from the Internet on ports 80 and 443. The servers will be configured to enable the following:

- Mailbox Replication Service (MRS) Proxy The MRS Proxy service configuration on the Client Access servers will be enabled.
- Virtual Directories The Client Access servers will host the default Web sites for the Exchange Web Services (EWS), offline address books, and ActiveSync services.
- Outlook Anywhere The Client Access servers will have Outlook Anywhere enabled.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domains
The Domains parameter specifies the domain namespaces that will be used in the hybrid deployment. These domains must be configured as accepted domains in either the on-premises Exchange organization or the Exchange Online organization. The domains will be used in configuring the organization relationships and Send and Receive connectors used by the hybrid configuration.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ExternalIPAddresses
The ExternalIPAddresses parameter is a legacy parameter that specifies the publicly accessible inbound IP address of Microsoft Exchange Server 2010 Hub Transport servers. The only configuration change that should be made with this parameter is to change or clear the legacy Exchange 2010 Hub Transport server IP address value. The IP address must be Internet Protocol version 4 (IPv4) based only.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Features
The Features parameter specifies the features enabled for the hybrid configuration. One or more of the following values separated by commas can be entered. When using the Hybrid Configuration wizard, all features are enabled by default.

- Centralized: Enables transport servers to handle all message transport between the on-premises Exchange and Exchange Online organizations, including external message delivery to the Internet for both organizations. If this value is $false, the on-premises transport servers and Exchange Online organization are each responsible for their own Internet message delivery.
- FreeBusy: Enables free/busy calendar information to be shared between on-premises Exchange and Exchange Online organization users.
- MailTips: Enables MailTips information to be shared between on-premises Exchange and Exchange Online organization users.
- MessageTracking: Enables message tracking information to be shared between on-premises Exchange and Exchange Online organization users.
- OnlineArchive: Enables the Exchange Online archive feature so that Exchange Online supports hosting archive mailboxes for on-premises users.
- OWARedirection: Enables automatic Microsoft Outlook on the web redirection to either the on-premises Exchange or Exchange Online organizations depending on where the user mailbox is located.
- SecureMail: Enables secure message transport via Transport Layer Security (TLS) between the on-premises Exchange and Exchange Online organizations.
- Photos: Enables the sharing of user photo data between the on-premises Exchange and Exchange Online organizations. This feature works in tandem with the PhotosEnabled parameter in the OrganizationRelationship cmdlets in a hybrid deployment. If the Photos parameter is $true, the PhotosEnabled parameter is automatically set to $true. If the Photos parameter is $false, the PhotosEnabled parameter is automatically set to $false. When running the Hybrid Configuration wizard for the first time, the default value is $true.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Name
This parameter has been deprecated and is no longer used.

There can be only one HybridConfiguration object in an Exchange organization.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnPremisesSmartHost
The OnPremisesSmartHost parameter specifies the FQDN of the on-premises Mailbox servers used for secure mail transport for messages sent between the on-premises Exchange and Exchange Online organizations.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ReceivingTransportServers
The ReceivingTransportServers parameter specifies the Mailbox servers that are defined in the outbound connector configuration of the Microsoft Exchange Online Protection (EOP) service included as part of the Microsoft 365 tenant. The servers defined in the ReceivingTransportServers parameter are designated as the receiving servers for secure mail messages sent from the Exchange Online organization to the on-premises Exchange organization in a hybrid deployment. At least one Mailbox server must be defined and be externally accessible from the Internet for secure mail to be enabled between the on-premises Exchange and Exchange Online organizations. The accepted values for the ReceivingTransportServers parameter are either the full or short computer name of a Mailbox server, for example, either mbx.corp.contoso.com or MBX. Separate server names with a comma if defining more than one Mailbox server.

If configuring the EdgeTransportServers parameter in the hybrid deployment, the ReceivingTransportServers parameter value must be $null.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SecureMailCertificateThumbprint
This parameter is available only in Exchange Server 2010.

The SecureMailCertificateThumbprint parameter specifies the thumbprint of the X.509 certificate to be used as the certificate for hybrid deployment secure message transport. This certificate cannot be self-signed, must be obtained from a trusted certificate authority (CA), and must be installed on all Hub Transport servers defined in the TransportServers parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SendingTransportServers
The SendingTransportServers parameter specifies the Mailbox servers that are defined in the inbound connector configuration of the EOP service included as part of the Microsoft 365 tenant. The servers defined in the SendingTransportServers parameter are designated as the receiving servers for secure mail messages sent from the on-premise organization to the Exchange Online organization in a hybrid deployment. At least one Mailbox server must be defined and be externally accessible from the Internet for secure mail to be enabled between the on-premises Exchange and Exchange Online organizations. The accepted values for the SendingTransportServers parameter are either the full or short computer name of a Mailbox server, for example, either mbx.corp.contoso.com or MBX. Separate server names with a comma if defining more than one Mailbox server.

If configuring the EdgeTransportServers parameter in the hybrid deployment, the SendingTransportServers parameter value must be $null.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ServiceInstance
The ServiceInstance parameter should only be used by organizations manually configuring hybrid deployments with Office 365 operated by 21Vianet in China. All other organizations should use the Hybrid Configuration wizard to configure a hybrid deployment with Microsoft 365. The valid values for this parameter are 0 (null) or 1. The default value is 0 (null). For organizations connecting with Office 365 operated by 21Vianet in China, set this value to 1 when manually configuring your hybrid deployment.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -TlsCertificateName
The TlsCertificateName parameter specifies the X.509 certificate to use for TLS encryption. A valid value for this parameter is `"<I>X.500Issuer<S>X.500Subject"`. The X.500Issuer value is found in the certificate's Issuer field, and the X.500Subject value is found in the certificate's Subject field. You can find these values by running the Get-ExchangeCertificate cmdlet. Or, after you run Get-ExchangeCertificate to find the thumbprint value of the certificate, run the command `$TLSCert = Get-ExchangeCertificate -Thumbprint <Thumbprint>`, run the command `$TLSCertName = "<I>$($TLSCert.Issuer)<S>$($TLSCert.Subject)"`, and then use the value $TLSCertName for this parameter.

```yaml
Type: SmtpX509Identifier
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -TransportServers
This parameter is available only in Exchange Server 2010.

The TransportServers parameter specifies the Exchange Server 2010 SP2 servers with the Hub Transport server role installed that will be configured to support the hybrid deployment features. At least one Hub Transport server must be defined and be externally accessible from the Internet for secure mail to be enabled between the on-premises and cloud-based organizations.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EdgeTransportServers
The EdgeTransportServers parameter specifies the Edge Transport servers that are configured to support the hybrid deployment features. The Edge Transport server must be externally accessible from the Internet on port 25. The accepted values for the EdgeTransportServers parameter are either the full or short computer name of an Edge Transport server, for example, either edge.corp.contoso.com or EDGE. Separate server names with a comma if defining more than one Edge Transport server.

When configuring the EdgeTransportServers parameter, you must configure the ReceivingTransportServers and SendingTransportServers parameter values to $null.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
