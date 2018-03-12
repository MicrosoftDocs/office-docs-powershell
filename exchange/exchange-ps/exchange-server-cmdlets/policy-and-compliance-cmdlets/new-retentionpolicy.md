---
title: "New-RetentionPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4cdd6f20-5bca-4269-ac21-0a4cde0d54d6
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-RetentionPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-RetentionPolicy** cmdlet to create a retention policy.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-RetentionPolicy -Name <String> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-IsDefault <SwitchParameter>] [-IsDefaultArbitrationMailbox <SwitchParameter>] [-RetentionId <Guid>] [-RetentionPolicyTagLinks <RetentionPolicyTagIdParameter[]>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the retention policy Business General without associating any retention policy tags.
  
```
New-RetentionPolicy "Business General"
```

### Example 2

This example creates the retention policy Business General and uses the _RetentionPolicyTagLinks_ parameter to associate two retention policy tags with this policy. You can enter multiple retention policy tags, separated by commas. If a tag name includes a space, enclose the name in quotation marks.
  
```
New-RetentionPolicy "Business General" -RetentionPolicyTagLinks "General Business","Legal"
```

> [!NOTE]
> The second retention tag, which is named Legal, is also enclosed in quotation marks for consistency. Values that don't include a space can be enclosed in quotation marks without any change to how the command is interpreted. 
  
## Detailed Description
<a name="DetailedDescription"> </a>

Retention policy tags are associated with a retention policy. When a retention policy is applied to a mailbox, tags associated with the policy are available to the mailbox user.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the policy name. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IsDefault_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> To set the default retention policy for new mailboxes, use the _RetentionPolicy_ parameter on the **Set-MailboxPlan** cmdlet. <br/> |
| _IsDefaultArbitrationMailbox_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The _IsDefaultArbitrationMailbox_ switch configures this policy as the default retention policy for arbitration mailboxes in your Exchange Online organization. <br/> |
| _RetentionId_ <br/> |Optional  <br/> |System.Guid  <br/> |The _RetentionId_ parameter specifies the identity of the retention policy to ensure mailboxes moved from an on-premises Exchange deployment to the cloud continue to have the same retention policy applied to them. The _RetentionId_ parameter is used in cross-premises deployments. You don't need to specify this parameter in on-premises-only deployments. <br/> |
| _RetentionPolicyTagLinks_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RetentionPolicyTagIdParameter[]  <br/> |The _RetentionPolicyTagLinks_ parameter specifies the names of retention policy tags to be associated with this policy. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

