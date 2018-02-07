---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-HybridConfiguration

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-HybridConfiguration cmdlet to modify the hybrid deployment between your on-premises Exchange organization and a Microsoft Office 365 for enterprises organization.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Set-HybridConfiguration cmdlet to modify the hybrid deployment between your on-premises Microsoft Exchange organization and Exchange Online in a Microsoft Office 365 for enterprises organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Set-HybridConfiguration cmdlet to modify the hybrid deployment between your on-premises Exchange organization and Exchange Online in a Microsoft Office 365 for enterprises organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-HybridConfiguration [-ClientAccessServers <MultiValuedProperty>] [-Confirm] [-DomainController <Fqdn>]
 [-Domains <MultiValuedProperty>] [-ExternalIPAddresses <MultiValuedProperty>]
 [-Features <MultiValuedProperty>] [-Name <String>] [-OnPremisesSmartHost <SmtpDomain>]
 [-SecureMailCertificateThumbprint <String>] [-TransportServers <MultiValuedProperty>] [-WhatIf]
 [-EdgeTransportServers <MultiValuedProperty>] [-ReceivingTransportServers <MultiValuedProperty>]
 [-SendingTransportServers <MultiValuedProperty>] [-ServiceInstance <Int32>]
 [-TlsCertificateName <SmtpX509Identifier>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can use the Set-HybridConfiguration cmdlet to modify the hybrid configuration features, such as designating a specific Client Access server for hybrid functionality or enabling or disabling free/busy information sharing and message tracking between the on-premises and cloud-based organizations.

You need to be assigned permissions before you can perform this procedure. To see what permissions you need, see the "Hybrid configuration" entry in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

The Set-HybridConfiguration cmdlet modifies the hybrid configuration features, such as enabling secure mail, designating a specific Client Access server for hybrid functionality, or enabling or disabling free/busy information sharing and message tracking between the on-premises Exchange and Exchange Online organizations.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Hybrid deployment configuration" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016

The Set-HybridConfiguration cmdlet modifies the hybrid configuration features, such as enabling secure mail, designating a specific Mailbox server for hybrid functionality, or enabling or disabling free/busy information sharing and message tracking between the on-premises Exchange and Exchange Online organizations.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-HybridConfiguration -SecureMailCertificateThumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17
```

This example specifies that the hybrid configuration will use the certificate with the thumbprint AC00F35CBA8359953F4126E0984B5CCAFA2F4F17 as the certificate for Secure Mail messaging.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-HybridConfiguration -Features OnlineArchive,MailTips,OWARedirection,FreeBusy,MessageTracking
```

This example disables the secure mail and centralized transport hybrid deployment features, but keeps the Exchange Online Archive, MailTips, Outlook Web App redirection, free/busy, and message tracking features enabled between the on-premises Exchange and Exchange Online organizations.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-HybridConfiguration -Features OnlineArchive,MailTips,OWARedirection,FreeBusy,MessageTracking
```

This example disables the secure mail and centralized transport hybrid deployment features, but keeps the Exchange Online Archive, MailTips, Outlook on the web redirection, free/busy, and message tracking features enabled between the on-premises Exchange and Exchange Online organizations.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-HybridConfiguration -Features MoveMailbox,OnlineArchive,MailTips,OWARedirection,SecureMail
```

This example disables free/busy sharing and message tracking from the default hybrid deployment configuration, but keeps the Move Mailbox, Exchange Online Archive, MailTips, Outlook Web App redirection, and Secure Mail features enabled between the on-premises and cloud-based organizations.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-HybridConfiguration -TlsCertificateName "<I>CN=A. Datum Corporation CA-3, OU=www.adatum.com, O=A.Datum Corp, C=US<S>CN=mail.contoso.com, O=Barbara Zighetti, L=Seattle, S=WA, C=US"
```

This example specifies that the hybrid deployment uses a defined TLS certificate, referenced by the combination of the Issuer and Subject attributes of the CA issued X.509 certificate.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-HybridConfiguration -TlsCertificateName "<I>CN=A. Datum Corporation CA-3, OU=www.adatum.com, O=A.Datum Corp, C=US<S>CN=mail.contoso.com, O=Barbara Zighetti, L=Seattle, S=WA, C=US"
```

This example specifies that the hybrid deployment uses a defined TLS certificate, referenced by the combination of the Issuer and Subject attributes of the CA issued X.509 certificate.

## PARAMETERS

### -ClientAccessServers
!!! Exchange Server 2010

The ClientAccessServers parameter specifies the Exchange Server 2010 SP2 servers with the Client Access server role installed that will be configured to support the hybrid deployment features. At least one Client Access server must be defined and be externally accessible from the Internet on ports 80 and 443. The servers will be configured to enable the following:

- Mailbox Replication Service (MRS) Proxy The MRS Proxy service configuration on the Client Access servers will be enabled.

- Virtual Directories The Client Access servers will host the default Web sites for the Exchange Web Services (EWS), offline address books, and ActiveSync services.

- Outlook Anywhere The Client Access servers will have Outlook Anywhere enabled.



!!! Exchange Server 2013

The ClientAccessServers parameter is deprecated and will be removed from Microsoft Exchange Server 2013.



!!! Exchange Server 2016

This parameter has been deprecated and is no longer used.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
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

### -Domains
!!! Exchange Server 2010

The Domains parameter specifies the domain namespaces that will be used in the hybrid deployment. These domains must be configured as accepted domains in either the on-premises Exchange organization or cloud-based service. The domains will be used in configuring the organization relationships and Send and Receive connectors used by the hybrid configuration.



!!! Exchange Server 2013, Exchange Server 2016

The Domains parameter specifies the domain namespaces that will be used in the hybrid deployment. These domains must be configured as accepted domains in either the on-premises Exchange organization or the Exchange Online organization. The domains will be used in configuring the organization relationships and Send and Receive connectors used by the hybrid configuration.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ExternalIPAddresses
!!! Exchange Server 2010

The ExternalIPAddress parameter specifies the publicly accessible inbound IP address of the hybrid Hub Transport servers. The IP address must be Internet Protocol version 4 (IPv4) based only.



!!! Exchange Server 2013

The ExternalIPAddresses parameter is a legacy parameter that specifies the publicly accessible inbound IP address of Exchange 2010 Hub Transport servers. The only configuration change that should be made with this parameter is to change or clear the legacy Exchange 2010 Hub Transport server IP address value. The IP address must be Internet Protocol version 4 (IPv4) based only.



!!! Exchange Server 2016

The ExternalIPAddresses parameter is a legacy parameter that specifies the publicly accessible inbound IP address of Microsoft Exchange Server 2010 Hub Transport servers. The only configuration change that should be made with this parameter is to change or clear the legacy Exchange 2010 Hub Transport server IP address value. The IP address must be Internet Protocol version 4 (IPv4) based only.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Features
!!! Exchange Server 2010

The Features parameter specifies the features enabled for the hybrid configuration. One or more of the following values separated by commas can be entered. When using the Hybrid Configuration Wizard, all features are enabled by default.

- CentralizedTransport Enables the coexistence server to handle all message transport between the on-premises and cloud-based organizations, including message delivering to the Internet for both organizations. If this value is $false, the on-premises coexistence server and cloud-based organization are responsible for their own Internet message delivery.

- FreeBusy Enables free/busy calendar information to be shared between on-premises and cloud-based organization users.

- MoveMailbox Enables the Mailbox Replication Service Proxy.

- MailTips Enables MailTips information to be shared between on-premises and cloud-based organization users.

- MessageTracking Enables message tracking information to be shared between on-premises and cloud-based organization users.

- OnlineArchive Enables the Exchange Online archive for on-premises and cloud-based organization users.

- OWARedirection Enables automatic Outlook Web App redirection to either the on-premises or cloud-based organizations depending on where the user mailbox is located.

- SecureMail Enables secure message transport via Transport Layer Security between the on-premises and cloud-based organizations.



!!! Exchange Server 2013

The Features parameter specifies the features enabled for the hybrid configuration. One or more of the following values separated by commas can be entered. When using the Hybrid Configuration wizard, all features are enabled by default.

- Centralized Enables transport servers to handle all message transport between the on-premises Exchange and Exchange Online organizations, including external message delivery to the Internet for both organizations. If this value is $false, the on-premises transport servers and Exchange Online organization are each responsible for their own Internet message delivery.

- FreeBusy Enables free/busy calendar information to be shared between on-premises Exchange and Exchange Online organization users.

- MailTips Enables MailTips information to be shared between on-premises Exchange and Exchange Online organization users.

- MessageTracking Enables message tracking information to be shared between on-premises Exchange and Exchange Online organization users.

- OnlineArchive Enables the Exchange Online archive feature so that Exchange Online supports hosting archive mailboxes for on-premises users.

- OWARedirection Enables automatic Microsoft Office Outlook Web App redirection to either the on-premises Exchange or Exchange Online organizations depending on where the user mailbox is located.

- SecureMail Enables secure message transport via Transport Layer Security (TLS) between the on-premises Exchange and Exchange Online organizations.

- Photos Enables the sharing of user photo data between the on-premises Exchange and Exchange Online organizations. This feature works in tandem with the PhotosEnabled parameter in the OrganizationRelationship cmdlets in a hybrid deployment. If the Photos parameter is $true, the PhotosEnabled parameter is automatically set to $true. If the Photos parameter is $false, the PhotosEnabled parameter is automatically set to $false. When running the Hybrid Configuration wizard for the first time, the default value is $true.



!!! Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2010

The Name parameter is not used and will be deprecated from the Set-HybridConfiguration cmdlet in a future release. There can be only one HybridConfiguration object in an Exchange organization.



!!! Exchange Server 2013, Exchange Server 2016

The Name parameter isn't used and will be deprecated from the Set-HybridConfiguration cmdlet in a future release. There can be only one HybridConfiguration object in an Exchange organization.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnPremisesSmartHost
!!! Exchange Server 2010

The OnPremisesSmartHost parameter specifies the FQDN of the on-premises Hub Transport server used for secure mail transport for messages sent between the on-premises and cloud-based organizations.



!!! Exchange Server 2013, Exchange Server 2016

The OnPremisesSmartHost parameter specifies the FQDN of the on-premises Mailbox servers used for secure mail transport for messages sent between the on-premises Exchange and Exchange Online organizations.



```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SecureMailCertificateThumbprint
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

### -TransportServers
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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EdgeTransportServers
!!! Exchange Server 2013

The EdgeTransportServers parameter specifies the Exchange servers with the Microsoft Exchange Server 2010 Service Pack 2 (SP2) Edge Transport server role installed that are configured to support the hybrid deployment features. The Edge Transport server must be externally accessible from the Internet on port 25. The accepted values for the EdgeTransportServers parameter are either the full or short computer name of an Edge Transport server, for example, either edge.corp.contoso.com or edge. Separate server names with a comma if defining more than one Edge Transport server.

When configuring the EdgeTransportServers parameter, you must configure the ReceivingTransportServers and SendingTransportServers parameter values to $null.



!!! Exchange Server 2016

The EdgeTransportServers parameter specifies the Edge Transport servers that are configured to support the hybrid deployment features. The Edge Transport server must be externally accessible from the Internet on port 25. The accepted values for the EdgeTransportServers parameter are either the full or short computer name of an Edge Transport server, for example, either edge.corp.contoso.com or EDGE. Separate server names with a comma if defining more than one Edge Transport server.

When configuring the EdgeTransportServers parameter, you must configure the ReceivingTransportServers and SendingTransportServers parameter values to $null.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ReceivingTransportServers
!!! Exchange Server 2013

The ReceivingTransportServers parameter specifies the Exchange servers with the Client Access server role installed that are defined in the outbound connector configuration of the Microsoft Exchange Online Protection (EOP) service included as part of the Office 365 for enterprises tenant. The servers defined in the ReceivingTransportServers parameter are designated as the receiving servers for secure mail messages sent from the Exchange Online organization to the on-premises Exchange organization in a hybrid deployment. At least one Client Access server must be defined and be externally accessible from the Internet for secure mail to be enabled between the on-premises Exchange and Exchange Online organizations. The accepted values for the ReceivingTransportServers parameter are either the full or short computer name of a Client Access server, for example, either CAS.corp.contoso.com or CAS. Separate server names with a comma if defining more than one Client Access server.

If configuring the EdgeTransportServers parameter in the hybrid deployment, the ReceivingTransportServers parameter value must be $null.



!!! Exchange Server 2016

The ReceivingTransportServers parameter specifies the Mailbox servers that are defined in the outbound connector configuration of the Microsoft Exchange Online Protection (EOP) service included as part of the Office 365 for enterprises tenant. The servers defined in the ReceivingTransportServers parameter are designated as the receiving servers for secure mail messages sent from the Exchange Online organization to the on-premises Exchange organization in a hybrid deployment. At least one Mailbox server must be defined and be externally accessible from the Internet for secure mail to be enabled between the on-premises Exchange and Exchange Online organizations. The accepted values for the ReceivingTransportServers parameter are either the full or short computer name of a Mailbox server, for example, either mbx.corp.contoso.com or MBX. Separate server names with a comma if defining more than one Mailbox server.

If configuring the EdgeTransportServers parameter in the hybrid deployment, the ReceivingTransportServers parameter value must be $null.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SendingTransportServers
!!! Exchange Server 2013

The SendingTransportServers parameter specifies the Exchange servers with the Mailbox server role installed that are defined in the inbound connector configuration of the EOP service included as part of the Office 365 for enterprises tenant. The servers defined in the SendingTransportServers parameter are designated as the receiving servers for secure mail messages sent from the on-premise organization to the Exchange Online organization in a hybrid deployment. At least one Mailbox server must be defined and be externally accessible from the Internet for secure mail to be enabled between the on-premises Exchange and Exchange Online organizations. The accepted values for the SendingTransportServers parameter are either the full or short computer name of a Mailbox server, for example, either MBX.corp.contoso.com or MBX. Separate server names with a comma if defining more than one Mailbox server.

If configuring the EdgeTransportServers parameter in the hybrid deployment, the SendingTransportServers parameter value must be $null.



!!! Exchange Server 2016

The SendingTransportServers parameter specifies the Mailbox servers that are defined in the inbound connector configuration of the EOP service included as part of the Office 365 for enterprises tenant. The servers defined in the SendingTransportServers parameter are designated as the receiving servers for secure mail messages sent from the on-premise organization to the Exchange Online organization in a hybrid deployment. At least one Mailbox server must be defined and be externally accessible from the Internet for secure mail to be enabled between the on-premises Exchange and Exchange Online organizations. The accepted values for the SendingTransportServers parameter are either the full or short computer name of a Mailbox server, for example, either mbx.corp.contoso.com or MBX. Separate server names with a comma if defining more than one Mailbox server.

If configuring the EdgeTransportServers parameter in the hybrid deployment, the SendingTransportServers parameter value must be $null.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ServiceInstance
!!! Exchange Server 2013

The ServiceInstance parameter should only be used by organizations manually configuring hybrid deployments with Office 365 operated by 21Vianet in China. All other organizations should use the Hybrid Configuration wizard to configure a hybrid deployment with Office 365. The valid values for this parameter are 0 (null) or 1. The default value is 0 (null).For organizations connecting with Office 365 operated by 21Vianet in China, set this value to 1 when manually configuring your hybrid deployment.



!!! Exchange Server 2016

The ServiceInstance parameter should only be used by organizations manually configuring hybrid deployments with Office 365 operated by 21Vianet in China. All other organizations should use the Hybrid Configuration wizard to configure a hybrid deployment with Office 365. The valid values for this parameter are 0 (null) or 1. The default value is 0 (null). For organizations connecting with Office 365 operated by 21Vianet in China, set this value to 1 when manually configuring your hybrid deployment.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -TlsCertificateName
!!! Exchange Server 2013

The TlsCertificateName parameter specifies the X.509 certificate to use with TLS sessions and secure mail. Valid input for this parameter is [I]Issuer[S]Subject. The Issuer value is found in the certificate's Issuer field, and the Subject value is found in the certificate's Subject field. You can find these values by running the Get-ExchangeCertificate cmdlet.



!!! Exchange Server 2016

The TlsCertificateName parameter specifies the X.509 certificate to use for TLS encryption. A valid value for this parameter is "\<I\>X.500Issuer\<S\>X.500Subject". The X.500Issuer value is found in the certificate's Issuer field, and the X.500Subject value is found in the certificate's Subject field. You can find these values by running the Get-ExchangeCertificate cmdlet. Or, after you run Get-ExchangeCertificate to find the thumbprint value of the certificate, run the command $TLSCert = Get-ExchangeCertificate -Thumbprint \<Thumbprint\>, run the command $TLSCertName = "\<I\>$($TLSCert.Issuer)\<S\>$($TLSCert.Subject)", and then use the value $TLSCertName for this parameter.



```yaml
Type: SmtpX509Identifier
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/64bd673d-0f1c-4ed5-91dc-f19328942d71.aspx)

