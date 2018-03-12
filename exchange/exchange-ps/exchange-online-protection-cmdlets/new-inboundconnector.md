---
title: "New-InboundConnector"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: c8d0cba8-a8cb-41dc-b3fe-11d5882e425b
description: "This cmdlet is available only in the cloud-based service."
---

# New-InboundConnector

This cmdlet is available only in the cloud-based service. 
  
Use the **New-InboundConnector** cmdlet to create a new Inbound connector in your cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-InboundConnector -Name <String> -SenderDomains <MultiValuedProperty> [-AssociatedAcceptedDomains <MultiValuedProperty>] [-CloudServicesMailEnabled <$true | $false>] [-Comment <String>] [-Confirm [<SwitchParameter>]] [-ConnectorSource <Default | Migrated | HybridWizard | AdminUI>] [-ConnectorType <OnPremises | Partner>] [-Enabled <$true | $false>] [-RequireTls <$true | $false>] [-RestrictDomainsToCertificate <$true | $false>] [-RestrictDomainsToIPAddresses <$true | $false>] [-SenderIPAddresses <MultiValuedProperty>] [-TlsSenderCertificateName <TlsCertificate>] [-TreatMessagesAsInternal <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the Inbound connector named Contoso Inbound Connector with the following properties:
  
- It listens for incoming connections from the domain contoso.com and all subdomains.
    
- It only accepts mail from contoso.com, and from the IP range 192.168.0.1/25. It rejects mail from contoso.com if it originates from any other IP address.
    
```
New-InboundConnector -Name "Contoso Inbound Connector" -SenderDomains *.contoso.com -SenderIPAddresses 192.168.0.1/25 -RestrictDomainstoIPAddresses $true
```

### Example 2

This example creates the Inbound connector named Contoso Inbound Secure Connector and requires TLS transmission for all messages.
  
```
New-InboundConnector -Name "Contoso Inbound Secure Connector" -SenderDomains *.contoso.com -SenderIPAddresses 192.168.0.1/25 -RestrictDomainstoIPAddresses $true -RequireTLS $true -TlsSenderCertificateName *.contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

Inbound connectors accept email messages from remote domains that require specific configuration options.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies a descriptive name for the connector. <br/> |
| _SenderDomains_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _SenderDomains_ parameter specifies the remote domains from which this connector accepts messages, thereby limiting its scope. You can use a wildcard character to specify all subdomains of a specified domain, as shown in the following example: `*.contoso.com`. However, you can't embed a wildcard character, as shown in the following example:  `domain.*.contoso.com`. You can specify multiple domains separated by commas.  <br/> |
| _AssociatedAcceptedDomains_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AssociatedAcceptedDomains_ parameter specifies the accepted domains that the connector applies to, thereby limiting its scope. For example, you can apply the connector to a specific accepted domain in your organization, such as contoso.com. <br/> |
| _CloudServicesMailEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |**Note:**: We recommend that you don't use this parameter unless you are directed to do so by Microsoft Customer Service and Support, or by specific product documentation. Instead, use the Hybrid Configuration wizard to configure mail flow between your on-premises and cloud organizations. For more information, see [Hybrid Configuration wizard](https://technet.microsoft.com/library/hh529921.aspx).  <br/>  The _CloudServicesMailEnabled_ parameter specifies whether the connector is used for hybrid mail flow between an on-premises Exchange environment and Microsoft Office 365. Specifically, this parameter controls how certain internal **X-MS-Exchange-Organization-\*** message headers are handled in messages that are sent between accepted domains in the on-premises and cloud organizations. These headers are collectively known ascross-premises headers.  <br/>  Valid values are: <br/>  `$true`: The connector is used for mail flow in hybrid organizations, so cross-premises headers are preserved or promoted in messages that flow through the connector. This is the default value for connectors that are created by the Hybrid Configuration wizard. Certain **X-MS-Exchange-Organization-\*** headers in outbound messages that are sent from one side of the hybrid organization to the other are converted to **X-MS-Exchange-CrossPremises-\*** headers and are thereby preserved in messages. **X-MS-Exchange-CrossPremises-\*** headers in inbound messages that are received on one side of the hybrid organization from the other are promoted to **X-MS-Exchange-Organization-\*** headers. These promoted headers replace any instances of the same **X-MS-Exchange-Organization-\*** headers that already exist in messages. <br/>  `$false`: The connector isn't used for mail flow in hybrid organizations, so any cross-premises headers are removed from messages that flow through the connector.  <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The  _Comment_ parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: `"This is an admin note"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ConnectorSource_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.TenantConnectorSource  <br/> | The _ConnectorSource_ parameter specifies how the connector is created. Valid input for this parameter includes the following values: <br/>  `Default`: The connector is manually created.  <br/>  `HybridWizard`: The connector is automatically created by the Hybrid Configuration Wizard.  <br/>  `Migrated`: The connector was originally created in Microsoft Forefront Online Protection for Exchange.  <br/>  The default value for connectors you create yourself is `Default`. It isn't recommended that you change this value.  <br/> |
| _ConnectorType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.TenantConnectorType  <br/> | The _ConnectorType_ parameter specifies a category for the domains that are serviced by the connector. Valid input for this parameter includes the following values: <br/>  `Partner`: The connector services domains that are external to your organization.  <br/>  `OnPremises`: The connector services domains that are used by your on-premises organization. Use this value for accepted domains in your cloud-based organization that are also specified by the  _SenderDomains_ parameter. <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Enabled_ parameter enables or disables the connector. Valid input for this parameter is `$true` or `$false`. The default value is  `$true`.  <br/> |
| _RequireTls_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RequireTLS_ parameter specifies that all messages received by this connector require TLS transmission. Valid values for this parameter are `$true` or `$false`. The default value is  `$false`.  <br/> |
| _RestrictDomainsToCertificate_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RestrictDomainsToCertificate_ parameter, when set to `$true`, causes the connector to reject mail that originates from a namespace not specified by the  _SenderDomains_ parameter. <br/> |
| _RestrictDomainsToIPAddresses_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RestrictDomainsToIPAddresses_ parameter, when set to `$true`, automatically rejects mail from the domains specified by the  _SenderDomains_ parameter if the mail originates from an IP address that isn't specified by the _SenderIPAddresses_ parameter. <br/> Valid input for this parameter is  `$true` or `$false`. The default value is  `$false`.  <br/> |
| _SenderIPAddresses_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _SenderIPAddresses_ parameter specifies the remote IP addresses from which this connector accepts messages. You enter the IP addresses using the following syntax: <br/> **Single IP**: For example,  `192.168.1.1`.  <br/> **CIDR IP**: You can use Classless InterDomain Routing (CIDR), for example,  `192.168.0.1/25`.  <br/>  You can specify multiple IP addresses separated by commas. <br/> |
| _TlsSenderCertificateName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.TlsCertificate  <br/> |The  _TlsSenderCertificateName_ parameter specifies the certificate used by the sender's domain when the _RequireTls_ parameter is set to `$true`. Valid input for the  _TlsSenderCertificateName_ parameter is an SMTP domain. You can use a wildcard character to specify all subdomains of a specified domain, as shown in the following example: `*.contoso.com`.  <br/> You can't embed a wildcard character, as shown in the following example:  `domain.*.contoso.com`.  <br/> |
| _TreatMessagesAsInternal_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _TreatMessagesAsInternal_ parameter specifies an alternative method to identify messages sent from an on-premises organization as internal messages. You should only consider using this parameter when your on-premises organization doesn't use Exchange. Valid values are: <br/>  `$true`: Messages are considered internal if the sender's domain matches a domain that's configured in Office 365. This setting allows internal mail flow between Office 365 and on-premises organizations that don't have Exchange Server 2010 or later installed. However, this setting has potential security risks (for example, internal messages bypass antispam filtering), so use caution when configuring this setting.  <br/>  `$false`: Messages aren't considered internal. This is the default value.  <br/>  In hybrid environments, you don't need to use this parameter, because the Hybrid Configuration wizard automatically configures the required settings on the Inbound connector in Office 365 and the Send connector in the on-premises Exchange organization (the _CloudServicesMailEnabled_ parameter). <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

