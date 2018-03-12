---
title: "Test-OrganizationRelationship"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 80be049b-61f2-4751-906a-7de5fb63e4f3
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Test-OrganizationRelationship

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Test-OrganizationRelationship** cmdlet to verify that the organization relationship is properly configured and functioning as expected.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-OrganizationRelationship -UserIdentity <RecipientIdParameter> [-Identity <OrganizationRelationshipIdParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example validates the organization relationship deployed in the Exchange organization and checks whether a delegation token can be retrieved for a mailbox for the external organization domain contoso.com.
  
```
Test-OrganizationRelationship -UserIdentity katherine@contoso.com -Identity contoso.com -Confirm
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Test-OrganizationRelationship** cmdlet doesn't include any functional tests of federated sharing features, such as accessing user free/busy information or moving mailboxes between organizations. It only verifies that the configuration will allow these features to work correctly.
  
Before you can test an organization relationship, you must first create an organization relationship. For more information, see [Create an Organization Relationship](https://technet.microsoft.com/library/5ea61b96-c8ca-44fc-b8b5-ca4341af36a6.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _UserIdentity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> | The _UserIdentity_ parameter specifies the mailbox for which a delegation token is requested to access the external organization's configuration information. You can use any of the following values: <br/>  Distinguished name (DN) <br/>  Canonical name <br/>  GUID <br/>  Name <br/>  Display name <br/>  Alias <br/>  Exchange DN <br/>  Primary SMTP email address <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationRelationshipIdParameter  <br/> | The _Identity_ parameter specifies the organization relationship to be tested. You can use the following values: <br/>  Canonical name <br/>  GUID <br/>  Name <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

