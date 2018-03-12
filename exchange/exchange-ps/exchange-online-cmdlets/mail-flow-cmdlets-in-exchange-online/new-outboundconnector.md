---
title: "New-OutboundConnector"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: ca73d195-542f-4acf-b2ff-84275e26a79a
description: "This cmdlet is available only in the cloud-based service."
---

# New-OutboundConnector

This cmdlet is available only in the cloud-based service. 
  
Use the **New-OutboundConnector** cmdlet to create a new Outbound connector in your cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-OutboundConnector -Name <String> [-AllAcceptedDomains <$true | $false>] [-CloudServicesMailEnabled <$true | $false>] [-Comment <String>] [-Confirm [<SwitchParameter>]] [-ConnectorSource <Default | Migrated | HybridWizard | AdminUI>] [-ConnectorType <OnPremises | Partner>] [-Enabled <$true | $false>] [-IsTransportRuleScoped <$true | $false>] [-LinkForModifiedConnector <Guid>] [-RecipientDomains <MultiValuedProperty>] [-RouteAllMessagesViaOnPremises <$true | $false>] [-SmartHosts <MultiValuedProperty>] [-TestMode <$true | $false>] [-TlsDomain <SmtpDomainWithSubdomains>] [-TlsSettings <EncryptionOnly | CertificateValidation | DomainValidation>] [-UseMXRecord <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the Outbound connector named Contoso Outbound Connector with the following properties:
  
- It sends messages to recipients in the contoso.com domain and all subdomains.
    
- It uses TLS encryption and certificate verification for mail routed to the contoso.com domain and all subdomains
    
```
New-OutboundConnector -Name "Contoso Outbound Connector" -RecipientDomains *.contoso.com -TlsSettings DomainValidation -TlsDomain *.contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

Outbound connectors send email messages to remote domains that require specific configuration options.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the unique name for the connector. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _AllAcceptedDomains_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AllAcceptedDomains_parameter specifies whether the Outbound connector is used in hybrid organizations where message recipients are in accepted domains of the cloud-based organization. Valid values are:  <br/>  `$true`: The Outbound connector is used in hybrid organizations when message recipients are in an accepted domain of the cloud-based organization. You can only use this value when the  _ConnectorType_ parameter value is `OnPremises`.  <br/>  `$false`: The Outbound connector isn't used in hybrid organizations. This is the default value.  <br/> |
| _CloudServicesMailEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |**Note:**: We recommend that you don't use this parameter unless you are directed to do so by Microsoft Customer Service and Support, or by specific product documentation. Instead, use the Hybrid Configuration wizard to configure mail flow between your on-premises and cloud organizations. For more information, see [Hybrid Configuration wizard](https://technet.microsoft.com/library/hh529921.aspx).  <br/>  The _CloudServicesMailEnabled_ parameter specifies whether the connector is used for hybrid mail flow between an on-premises Exchange environment and Microsoft Office 365. Specifically, this parameter controls how certain internal **X-MS-Exchange-Organization-\*** message headers are handled in messages that are sent between accepted domains in the on-premises and cloud organizations. These headers are collectively known ascross-premises headers.  <br/>  Valid values are: <br/>  `$true`: The connector is used for mail flow in hybrid organizations, so cross-premises headers are preserved or promoted in messages that flow through the connector. This is the default value for connectors that are created by the Hybrid Configuration wizard. Certain **X-MS-Exchange-Organization-\*** headers in outbound messages that are sent from one side of the hybrid organization to the other are converted to **X-MS-Exchange-CrossPremises-\*** headers and are thereby preserved in messages. **X-MS-Exchange-CrossPremises-\*** headers in inbound messages that are received on one side of the hybrid organization from the other are promoted to **X-MS-Exchange-Organization-\*** headers. These promoted headers replace any instances of the same **X-MS-Exchange-Organization-\*** headers that already exist in messages. <br/>  `$false`: The connector isn't used for mail flow in hybrid organizations, so any cross-premises headers are removed from messages that flow through the connector.  <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The  _Comment_ parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: `"This is an admin note"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ConnectorSource_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.TenantConnectorSource  <br/> | The _ConnectorSource_ parameter specifies how the connector is created. Valid values are: <br/>  `Default`: The connector is manually created. This is the default value when you use this cmdlet, and we recommend that you don't change this value.  <br/>  `HybridWizard`: The connector is automatically created by the Hybrid Configuration Wizard.  <br/>  `Migrated`: The connector was originally created in Microsoft Forefront Online Protection for Exchange.  <br/> |
| _ConnectorType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.TenantConnectorType  <br/> | The _ConnectorType_ parameter specifies a category for the domains that are serviced by the connector. Valid values are: <br/>  `Partner`: The connector services domains that are external to your organization.  <br/>  `OnPremises`: The connector services domains that are used by your on-premises organization.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Enabled_ parameter specifies whether to enable or disable the Outbound connector. Valid values are: <br/>  `$true`: The connector is enabled. This is the default value.  <br/>  `$false`: The connector is disabled.  <br/> |
| _IsTransportRuleScoped_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _IsTransportRuleScoped_ parameter specifies whether the Outbound connector is associated with a transport rule (also known as a mail flow rule). Valid values are: <br/>  `$true`: The connector is associated with a transport rule.  <br/>  `$false`: The connector isn't associated with a transport rule. This is the default value.  <br/>  You scope a transport rule to an Outbound connector by using the _RouteMessageOutboundConnector_ parameter on the **New-TransportRule** or **Set-TransportRule** cmdlets. Messages that match the conditions of the transport rule are routed to their destinations by using the specified Outbound connector. <br/> |
| _LinkForModifiedConnector_ <br/> |Optional  <br/> |System.Guid  <br/> |The  _LinkForModifiedConnector_ parameter specifies the GUID of the existing Send connector that's been modified to create this test connector. <br/> |
| _RecipientDomains_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _RecipientDomains_ parameter specifies the domains that the Outbound connector routes mail to. You can specify multiple domains separated by commas. <br/> You can use a wildcard character to specify all subdomains of a specified domain, as shown in the following example:  `*.contoso.com`. However, you can't embed a wildcard character, as shown in the following example:  `domain.*.contoso.com`.  <br/> |
| _RouteAllMessagesViaOnPremises_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _RouteAllMessagesViaOnPremises_ parameter specifies that all messages serviced by this connector are first routed through the on-premises messaging system in hybrid organizations. Valid values are: <br/>  `$true`: Messages are routed through the on-premises messaging system. This setting requires you to set the  _ConnectorType_ parameter to the value `OnPremises` in the same command. <br/>  `$false`: Messages aren't routed through the on-premises messaging system. This is the default value.  <br/> |
| _SmartHosts_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _SmartHosts_ parameter specifies the smart hosts the Outbound connector uses to route mail. This parameter is required if you set the _UseMxRecord_ parameter to `$false` and must be specified on the same command line. The _SmartHosts_ parameter takes one or more FQDNs, such as `server.contoso.com`, or one or more IP addresses, or a combination of both FQDNs and IP addresses. Separate each value by using a comma. If you enter an IP address, you may enter the IP address as a literal, for example:  `10.10.1.1`, or using Classless InterDomain Routing (CIDR), for example,  `192.168.0.1/25`. The smart host identity can be the FQDN of a smart host server, a mail exchange (MX) record, or an address (A) record.  <br/> |
| _TestMode_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _TestMode_ parameter specifies whether you want to enabled or disable test mode for the Outbound connector. Valid values are: <br/>  `$true`: Test mode is enabled.  <br/>  `$false`: Test mode is disabled. This is the default value.  <br/> |
| _TlsDomain_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpDomainWithSubdomains  <br/> |The  _TlsDomain_ parameter specifies the domain name that the Outbound connector uses to verify the FQDN of the target certificate when establishing a TLS secured connection. This parameter is only used if the _TlsSettings_ parameter is set to `DomainValidation`. Valid input for the  _TlsDomain_ parameter is an SMTP domain. You can use a wildcard character to specify all subdomains of a specified domain, as shown in the following example: `*.contoso.com`. However, you can't embed a wildcard character, as shown in the following example:  `domain.*.contoso.com` <br/> |
| _TlsSettings_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.TlsAuthLevel  <br/> | The _TlsSettings_ parameter specifies the TLS authentication level that's used for outbound TLS connections established by this Outbound connector. Valid values are: <br/>  `EncryptionOnly`: TLS is used only to encrypt the communication channel. No certificate authentication is performed.  <br/>  `CertificateValidation`: TLS is used to encrypt the channel and certificate chain validation and revocation lists checks are performed.  <br/>  `DomainValidation`: In addition to channel encryption and certificate validation, the Outbound connector also verifies that the FQDN of the target certificate matches the domain specified in the  _TlsDomain_ parameter. <br/>  `$null` (blank): This is the default value. <br/> |
| _UseMXRecord_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _UseMXRecord_ parameter enables or disables DNS routing for the connector. Valid values are: <br/>  `$true`: The connector uses DNS routing (MX records in DNS) to deliver email. This is the default value.  <br/>  `$false`: The connector delivers email to one or more smart hosts. When you use this value, you also need to specifiy the smart hosts by using the  _SmartHosts_ parameter in the same command. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

