---
title: "New-DlpPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 6fac5dca-be09-4296-aebf-b12bb55ce4d3
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-DlpPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-DlpPolicy** cmdlet to create data loss prevention (DLP) policies in your Exchange organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-DlpPolicy [-Confirm [<SwitchParameter>]] [-Description <String>] [-DomainController <Fqdn>] [-Mode <Audit | AuditAndNotify | Enforce>] [-Name <String>] [-Parameters <Hashtable>] [-State <Enabled | Disabled>] [-Template <String>] [-TemplateData <Byte[]>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a new DLP policy named Contoso PII with the following values:
  
- The DLP policy is enabled and set to audit only.
    
- The DLP policy is based on the existing "U.S. Personally Identifiable Information (PII) Data" DLP policy template.
    
```
New-DlpPolicy -Name "Contoso PII" -Template "U.S. Personally Identifiable Information (PII) Data"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies an optional description for the DLP policy. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Mode_ <br/> |Optional  <br/> |Microsoft.Exchange.MessagingPolicies.Rules.RuleMode  <br/> | The _Mode_ parameter specifies the action and notification level of the DLP policy. Valid values for this parameter are: <br/>  `Audit`: The actions specified by the DLP policy aren't enforced when a message matches the conditions specified by the policy, and the Policy Tip isn't displayed to the user.  <br/>  `AuditAndNotify`: The actions specified by the DLP policy aren't enforced when a message matches the conditions specified by the policy, but the Policy Tip is displayed to the user in a supported email client.  <br/>  `Enforce`: The actions specified by the DLP policy are enforced when a message matches the conditions specified by the policy, and the Policy Tip is displayed to the user in a supported email client.  <br/>  By default, the value of this parameter is set to `Audit` when you create a new DLP policy. If the _State_ parameter is set to `Disabled`, the value of the  _Mode_ parameter is irrelevant. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies a descriptive name for the DLP policy. <br/> |
| _Parameters_ <br/> |Optional  <br/> |System.Collections.Hashtable  <br/> |The  _Parameters_ parameter specifies the parameter values that are required by the DLP policy template that you specify using the _Template_ or _TemplateData_ parameters. DLP policy templates may contain parameters that need to be populated with values from your organization. For example, a DLP policy template may include an exception group that defines users who are exempt from the DLP policy. <br/> Valid input for this parameter is in the format:  `@{<parameter1>="<value1>";<parameter2>="<value2>"...}`.  <br/> |
| _State_ <br/> |Optional  <br/> |Microsoft.Exchange.MessagingPolicies.Rules.RuleState  <br/> |The  _State_ parameter enables or disables the DLP policy. Valid input for this parameter is `Enabled` or `Disabled`. By default, a new DLP policy that you create is enabled. If you want to create a disabled DLP policy, specify the value  `Disabled` for this parameter. <br/> |
| _Template_ <br/> |Optional  <br/> |System.String  <br/> |The  _Template_ parameter specifies the existing DLP policy template from which you can create a new DLP policy. You can't use the _Template_ and _TemplateData_ parameters in the same command. <br/> |
| _TemplateData_ <br/> |Optional  <br/> |System.Byte[]  <br/> |The  _TemplateData_ parameter specifies an external DLP policy template file from which you can create a new DLP policy. You can't use the _TemplateData_ and _Template_ parameters in the same command. <br/> A valid value for this parameter requires you to read the file to a byte-encoded object using the **Get-Content** cmdlet. For example, `([Byte[]](Get-Content -Encoding Byte -Path "C:\My Documents\<filename>" -ReadCount 0))`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

