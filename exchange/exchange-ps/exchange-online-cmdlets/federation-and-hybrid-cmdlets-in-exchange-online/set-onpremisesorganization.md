---
title: "Set-OnPremisesOrganization"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 71b1d984-c710-4898-843b-bb21b8a194c4
description: "This cmdlet is available only in the cloud-based service."
---

# Set-OnPremisesOrganization

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-OnPremisesOrganization** cmdlet to modify the parameters of the **OnPremisesOrganization** object on the Microsoft Office 365 tenant.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-OnPremisesOrganization -Identity <OnPremisesOrganizationIdParameter> [-Comment <String>] [-Confirm [<SwitchParameter>]] [-HybridDomains <MultiValuedProperty>] [-InboundConnector <InboundConnectorIdParameter>] [-OrganizationName <String>] [-OrganizationRelationship <OrganizationRelationshipIdParameter>] [-OutboundConnector <OutboundConnectorIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds a third domain legal.contoso.com to the ExchangeMail OnPremisesOrganization object on the Office 365 tenant, which already has the contoso.com and sales.contoso.com domains.
  
```
Set-OnPremisesOrganization -Identity "ExchangeMail" -HybridDomains contoso.com, sales.contoso.com, legal.contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **OnPremisesOrganization** object represents an on-premises Exchange organization configured for hybrid deployment with an Office 365 tenant organization. It's used in conjunction with the Hybrid Configuration wizard and is typically only modified and updated by the wizard. Manual modification of this object may result in hybrid deployment misconfiguration; therefore, we strongly recommend that you use the Hybrid Configuration wizard to update this object in the Office 365 tenant.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.OnPremisesOrganizationIdParameter  <br/> | The _Identity_ parameter specifies the identity of the on-premises organization object. You can use the following values: <br/>  Canonical name <br/>  GUID <br/>  Name <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The  _Comment_ parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: `"This is an admin note"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _HybridDomains_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _HybridDomains_ parameter specifies the domains that are configured in the hybrid deployment between an Office 365 tenant and an on-premises Exchange organization. The domains specified in this parameter must match the domains listed in the HybridConfiguration Active Directory object for the on-premises Exchange organization configured by the Hybrid Configuration wizard. Multiple domains may be listed and must be separated by a comma, for example, "contoso.com, sales.contoso.com". <br/> |
| _InboundConnector_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.InboundConnectorIdParameter  <br/> |The  _InboundConnector_ parameter specifies the name of the inbound connector configured on the Microsoft Exchange Online Protection (EOP) service for a hybrid deployment configured with an on-premises Exchange organization. <br/> |
| _OrganizationName_ <br/> |Optional  <br/> |System.String  <br/> |The  _OrganizationName_ parameter specifies the Active Directory object name of the on-premises Exchange organization. <br/> |
| _OrganizationRelationship_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationRelationshipIdParameter  <br/> |The  _OrganizationRelationship_ parameter specifies the organization relationship configured by the Hybrid Configuration wizard on the Office 365 tenant as part of a hybrid deployment with an on-premises Exchange organization. This organization relationship defines the federated sharing features enabled on the Office 365 tenant. <br/> |
| _OutboundConnector_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OutboundConnectorIdParameter  <br/> |The  _OutboundConnector_ parameter specifies the name of the outbound connector configured on the EOP service for a hybrid deployment configured with an on-premises Exchange organization. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

