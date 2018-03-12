---
title: "Set-RMSTrustedPublishingDomain"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 89af98c7-b6cb-4aa5-8ffa-d438579b7aa2
description: "This cmdlet is available only in the cloud-based service."
---

# Set-RMSTrustedPublishingDomain

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-RMSTrustedPublishingDomain** cmdlet to configure a trusted publishing domain (TPD) in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-RMSTrustedPublishingDomain -Identity <RmsTrustedPublishingDomainIdParameter> [-Confirm [<SwitchParameter>]] [-Default <SwitchParameter>] [-DomainController <Fqdn>] [-ExtranetCertificationUrl <Uri>] [-ExtranetLicensingUrl <Uri>] [-IntranetCertificationUrl <Uri>] [-IntranetLicensingUrl <Uri>] [-Name <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example makes the following changes to the existing TPD Contoso TPD:
  
- Sets Contoso TPD as the default TPD for the organization.
    
- Sets the external licensing URL to https://rms.contoso.com/_wmcs/licensing.
    
- Sets the external certification URL to https://rms.contoso.com/_wmcs/certification/servercertification.asmx
    
```
Set-RMSTrustedPublishingDomain "Contoso TPD" -Default -ExtranetLicensingUrl https://rms.contoso.com/_wmcs/licensing -ExtranetCertificationUrl https://rms.contoso.com/_wmcs/certification/servercertification.asmx
```

## Detailed Description
<a name="DetailedDescription"> </a>

A TPD contains the settings needed to use RMS features in your organization. For example, users can apply RMS templates to email messages.
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RmsTrustedPublishingDomainIdParameter  <br/> | The _Identity_ parameter specifies the TPD. You can use any value that uniquely identifies the TPD, for example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Default_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Default_ parameter specifies this is the default TPD. The default TPD displays RMS templates and provides rights protection to all new content. There can be only one default TPD in an organization. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExtranetCertificationUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The  _ExtranetCertificationUrl_ parameter specifies the external certification URL of the on-premises AD RMS server that's stamped into the Rights Account Certificate (RAC). The RAC establishes a user's identity in the AD RMS system and is used to decrypt content. <br/> |
| _ExtranetLicensingUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The  _ExtranetLicensingUrl_ parameter specifies the external licensing URL of the on-premises AD RMS server that's stamped into the publishing license. The publishing license specifies the users that can open the rights-protected content, under which conditions the content may be opened by the user, and the rights that each user will have to the rights-protected content. <br/> |
| _IntranetCertificationUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The  _IntranetCertificationUrl_ parameter specifies the internal certification URL of the on-premises AD RMS server that's stamped into the RAC. The RAC establishes a user's identity in the AD RMS system and is used to decrypt content. <br/> |
| _IntranetLicensingUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The  _IntranetLicensingUrl_ parameter specifies the internal licensing URL of the on-premises AD RMS server that's stamped into the publishing license. The publishing license specifies the users that can open the rights-protected content, under which conditions the content may be opened by the user, and the rights that each user will have to the rights-protected content. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the TPD. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

