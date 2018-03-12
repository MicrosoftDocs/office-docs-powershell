---
title: "Set-HybridMailflow"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 69d01866-50ff-4ddf-9e7c-d448ff24da69
description: "This cmdlet is available only in the cloud-based service."
---

# Set-HybridMailflow

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-HybridMailflow** cmdlet to configure the message transport settings for the Microsoft Exchange Online Protection (EOP) service in a hybrid deployment.
  
> [!IMPORTANT]
> The **Set-HybridMailflow** cmdlet is only used to support hybrid deployments configured with the Hybrid Configuration wizard offered in Microsoft Exchange Server 2010 Service Pack 2 (SP2).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-HybridMailflow [-CentralizedTransportEnabled <$true | $false>] [-CertificateSubject <String>] [-Confirm [<SwitchParameter>]] [-InboundIPs <IPRange[]>] [-OnPremisesFQDN <Fqdn>] [-OutboundDomains <SmtpDomainWithSubdomains[]>] [-SecureMailEnabled <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures the message transport settings in the EOP service for a hybrid deployment.
  
```
Set-HybridMailflow
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-HybridMailflow** cmdlet supports the configuration of message transport settings for hybrid deployments created with the Hybrid Configuration wizard offered in Exchange 2010 SP2. This cmdlet isn't typically used by administrators; therefore, we strongly recommend that it only be used as part of the hybrid configuration process using the Hybrid Configuration wizard.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _CentralizedTransportEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _CentralizedTransportEnabled_ parameter specifies that the Exchange Online organization routes all outbound mail messages to external recipients to the on-premises Exchange organization. The on-premises Exchange organization then routes the messages to the external recipients. The valid input for the _CentralizedTransportEnabled_ parameter is `$true` or `$false`. The default value is  `$true`.  <br/> |
| _CertificateSubject_ <br/> |Optional  <br/> |System.String  <br/> |The  _CertificateSubject_ parameter specifies the principal name of the certificate used for secure mail flow between the on-premises Exchange and Exchange Online organizations. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _InboundIPs_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.IPRange[]  <br/> |The  _InboundIPs_ parameter specifies the IP addresses of the on-premises mail transport servers configured as part of the hybrid deployment. These must point to either Exchange 2010 SP2 Hub Transport or Edge Transport servers. <br/> |
| _OnPremisesFQDN_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The  _OnPremisesFQDN_ parameter specifies the fully qualified domain name (FQDN) of the outbound smart host in the on-premises Exchange organization to use for centralized transport. This is either an on-premises Exchange 2010 SP2 Hub Transport or Edge Transport server. <br/> |
| _OutboundDomains_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpDomainWithSubdomains[]  <br/> |The  _OutboundDomains_ parameter specifies SMTP domains configured for the hybrid deployment. <br/> |
| _SecureMailEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _SecureMailEnabled_ parameter specifies that all messages sent between the on-premises Exchange and the Exchange Online organizations must use the Transport Layer Security (TLS) protocol and the assigned digital certificate. The valid input for the _SecureMailEnabled_ parameter is `$true` or `$false`. The default value is  `$true`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

