---
title: "Get-ComplianceSearchAction"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: d28d2ac9-4c15-4813-9c63-385533d64e99
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-ComplianceSearchAction

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-ComplianceSearchAction** cmdlet to view information about compliance search actions in Exchange Server 2016 and in the Office 365 Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ComplianceSearchAction [-Identity <ComplianceSearchActionIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example shows a summary list of all compliance search actions.
  
```
Get-ComplianceSearchAction
```

### Example 2

This example shows details about the compliance search action named "Case 1234_Preview"
  
```
Get-ComplianceSearchAction -Identity "Case 1234_Preview" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

 After you create and run a compliance search using the **New-ComplianceSearch** cmdlet, and start the search using the **Start-ComplianceSearch** cmdlet, you assign a search action using the **New-ComplianceSearchAction** cmdlet. You use the **Get-ComplianceSearchAction** cmdlet to track the progress of the compliance search action.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group. 
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Case_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Details_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Details_ switch specifies whether to include detailed information in the results. You don't need to specify a value with this switch. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Export_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Export_ switch filters the results by **Export** compliance search actions. You don't need to specify a value with this switch. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.ComplianceJob.Tasks.ComplianceSearchActionIdParameter  <br/> | The _Identity_ parameter specifies the compliance search action that you want to view. You can use any value that uniquely identifies the compliance search action. For example: <br/>  `Name`: The compliance search action name uses the syntax  _\<Compliance Search Name\>__ _\<Action\>_. For example, `Case 1234_Preview`.  <br/>  `JobRunId` (GUID) <br/> |
| _IncludeCredential_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeCredential_switch specifies whether to include the credential in the results. You don't need to specify a value with this switch.  <br/> |
| _Preview_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Preview_ switch filters the results by **Preview** compliance search actions. <br/> |
| _Purge_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Purge_ switch filters the results by **Purge** compliance search actions. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

