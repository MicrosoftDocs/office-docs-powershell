---
title: "New-HybridConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 1992d120-5c0f-4191-9d94-ecd58ebdff9d
description: "This cmdlet is available only in on-premises Exchange."
---

# New-HybridConfiguration

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-HybridConfiguration** cmdlet to create the HybridConfiguration object and set up a hybrid deployment between your on-premises Exchange organization and a Microsoft Office 365 for enterprises organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-HybridConfiguration [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Domains <MultiValuedProperty>] [-EdgeTransportServers <MultiValuedProperty>] [-ExternalIPAddresses <MultiValuedProperty>] [-Features <MultiValuedProperty>] [-OnPremisesSmartHost <SmtpDomain>] [-ReceivingTransportServers <MultiValuedProperty>] [-SendingTransportServers <MultiValuedProperty>] [-ServiceInstance <Int32>] [-TlsCertificateName <SmtpX509Identifier>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the hybrid configuration  `Hybrid Configuration` with the default hybrid configuration settings.
  
```
New-HybridConfiguration
```

## Detailed Description
<a name="DetailedDescription"> </a>

A hybrid deployment offers organizations the ability to extend the feature-rich experience and administrative control they have with their existing on-premises Microsoft Exchange organization to the cloud. The **New-HybridConfiguration** cmdlet is used with the Hybrid Configuration wizard and is typically configured when the hybrid deployment is initially created by the wizard. We strongly recommend that you use the Hybrid Configuration wizard to create the HybridConfiguration object and configure your hybrid deployment with the Exchange Online organization.
  
For more information, see [Exchange Server 2013 Hybrid Deployments](https://technet.microsoft.com/library/59e32000-4fcf-417f-a491-f1d8f9aeef9b.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Domains_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Domains_ parameter specifies the domain namespaces that are used in the hybrid deployment. These domains must be configured as accepted domains in either the on-premises Exchange organization or the Exchange Online service. The domains are used in configuring the organization relationships and Send and Receive connectors used by the hybrid configuration. <br/> |
| _EdgeTransportServers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _EdgeTransportServers_ parameter specifies the Edge Transport servers that are configured to support the hybrid deployment features. The Edge Transport server must be externally accessible from the Internet on port 25. The accepted values for the _EdgeTransportServers_ parameter are either the full or short computer name of an Edge Transport server, for example, either edge.corp.contoso.com or EDGE. Separate server names with a comma if defining more than one Edge Transport server. <br/> When configuring the _EdgeTransportServers_ parameter, you must configure the _ReceivingTransportServers_ and _SendingTransportServers_ parameter values to `$null`.  <br/> |
| _ExternalIPAddresses_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _ExternalIPAddresses_ parameter is a legacy parameter that specifies the publicly accessible inbound IP address of Microsoft Exchange Server 2010 Hub Transport servers. The only configuration change that should be made with this parameter is to change or clear the legacy Exchange 2010 Hub Transport server IP address value. The IP address must be Internet Protocol version 4 (IPv4) based only. <br/> |
| _Features_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Features_ parameter specifies the features that are enabled for the hybrid configuration. One or more of the following values separated by commas can be entered. When using the Hybrid Configuration wizard, all features are enabled by default. <br/>  `OnlineArchive`: Enables the Exchange Online archive for on-premises Exchange and Exchange Online organization users.  <br/>  `FreeBusy`: Enables free/busy calendar information to be shared between on-premises Exchange and Exchange Online organization users.  <br/>  `MailTips`: Enables MailTips information to be shared between on-premises Exchange and Exchange Online organization users.  <br/>  `MessageTracking`: Enables message tracking information to be shared between on-premises Exchange and Exchange Online organization users.  <br/>  `OWARedirection`: Enables automatic Microsoft Outlook on the web redirection to either the on-premises Exchange or Exchange Online organizations depending on where the user mailbox is located.  <br/>  `SecureMail`: Enables secure message transport via Transport Layer Security (TLS) between the on-premises Exchange and Exchange Online organizations.  <br/>  `Centralized`: Enables the on-premises servers to handle all message transport between the on-premises Exchange and Exchange Online organizations, including message delivering to the Internet for both organizations. If this value is  `$false`, the on-premises server and Exchange Online organization are each responsible for their own Internet message delivery.  <br/>  `Photos`: Enables the sharing of user photo data between the on-premises Exchange and Exchange Online organizations. This feature works in tandem with the _PhotosEnabled_ parameter in the **OrganizationRelationship** cmdlets in a hybrid deployment. If the _Photos_ parameter is `$true`, the _PhotosEnabled_ parameter is automatically set to `$true`. If the _Photos_ parameter is `$false`, the _PhotosEnabled_ parameter is automatically set to `$false`. When running the Hybrid Configuration wizard for the first time, the default value is  `$true`.  <br/> |
| _OnPremisesSmartHost_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpDomain  <br/> |The _OnPremisesSmartHost_ parameter specifies the FQDN of the on-premises Mailbox server used for secure mail transport for messages sent between the on-premises Exchange and Exchange Online organizations. <br/> |
| _ReceivingTransportServers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _ReceivingTransportServers_ parameter specifies the Mailbox servers that are defined in the outbound connector configuration of the Microsoft Exchange Online Protection (EOP) service included as part of the Office 365 for enterprises tenant. The servers defined in the _ReceivingTransportServers_ parameter are designated as the receiving servers for secure mail messages sent from the Exchange Online organization to the on-premises Exchange organization in a hybrid deployment. At least one Mailbox server must be defined and be externally accessible from the Internet for secure mail to be enabled between the on-premises Exchange and Exchange Online organizations. The accepted values for the _ReceivingTransportServers_ parameter are either the full or short computer name of a Mailbox server, for example, either mbx.corp.contoso.com or MBX. Separate server names with a comma if defining more than one Mailbox server. <br/> If configuring the _EdgeTransportServers_ parameter in the hybrid deployment, the _ReceivingTransportServers_ parameter value must be `$null`.  <br/> |
| _SendingTransportServers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _SendingTransportServers_ parameter specifies the Exchange Mailbox servers that are defined in the inbound connector configuration of the EOP service included as part of the Office 365 for enterprises tenant. The servers defined in the _SendingTransportServers_ parameter are designated as the receiving servers for secure mail messages sent from the on-premises Exchange organization to the Exchange Online organization in a hybrid deployment. At least one Mailbox server must be defined and be externally accessible from the Internet for secure mail to be enabled between the on-premises Exchange and Exchange Online organizations. The accepted values for the _SendingTransportServers_ parameter are either the full or short computer name of a Mailbox server, for example, either mbx.corp.contoso.com or MBX. Separate server names with a comma if defining more than one Mailbox server. <br/> If configuring the _EdgeTransportServers_ parameter in the hybrid deployment, the _SendingTransportServers_ parameter value must be `$null`.  <br/> |
| _ServiceInstance_ <br/> |Optional  <br/> |System.Int32  <br/> |The _ServiceInstance_ parameter should only be used by organizations manually configuring hybrid deployments with Office 365 operated by 21Vianet in China. All other organizations should use the Hybrid Configuration wizard to configure a hybrid deployment with Office 365. The valid values for this parameter are 0 (null) or 1. The default value is 0 (null).For organizations connecting with Office 365 operated by 21Vianet in China, set this value to 1 when manually configuring your hybrid deployment. <br/> |
| _TlsCertificateName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpX509Identifier  <br/> |The _TlsCertificateName_ parameter specifies the X.509 certificate to use for TLS encryption. A valid value for this parameter is `"<I>X.500Issuer<S>X.500Subject"`. The _X.500Issuer_ value is found in the certificate's `Issuer` field, and the _X.500Subject_ value is found in the certificate's `Subject` field. You can find these values by running the **Get-ExchangeCertificate** cmdlet. Or, after you run **Get-ExchangeCertificate** to find the thumbprint value of the certificate, run the command `$TLSCert = Get-ExchangeCertificate -Thumbprint <Thumbprint>`, run the command  `$TLSCertName = "<I>$($TLSCert.Issuer)<S>$($TLSCert.Subject)"`, and then use the value  `$TLSCertName` for this parameter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

