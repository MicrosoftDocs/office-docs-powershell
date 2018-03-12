---
title: "Set-RetentionPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 34fbc099-4f41-4f57-867c-ad1e08513c51

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-RetentionPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-RetentionPolicy** cmdlet to change the properties of an existing retention policy.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-RetentionPolicy -Identity <MailboxPolicyIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Force <SwitchParameter>] [-IsDefault <SwitchParameter>] [-IsDefaultArbitrationMailbox <SwitchParameter>] [-Name <String>] [-RetentionId <Guid>] [-RetentionPolicyTagLinks <RetentionPolicyTagIdParameter[]>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the policy MyPolicy to link the retention policy tag MyRetentionPolicyTag with it.
  
```
Set-RetentionPolicy "MyPolicy" -RetentionPolicyTagLinks "MyRetentionPolicyTag"
```

> [!NOTE]
> The _Identity_ parameter is a positional parameter. Positional parameters can be used without the label (Identity). For more information about positional parameters, see[Parameters](https://technet.microsoft.com/library/bc81f639-c822-4b2b-a692-694c43f5f57e.aspx). 
  
## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |The _Identity_ parameter specifies the name, distinguished name (DN), or GUID of the retention policy. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch overrides the confirmation prompt displayed by the cmdlet when you use the _RetentionId_ parameter. <br/> |
| _IsDefault_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> To set the default retention policy for new mailboxes, use the _RetentionPolicy_ parameter on the **Set-MailboxPlan** cmdlet. <br/> |
| _IsDefaultArbitrationMailbox_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The _IsDefaultArbitrationMailbox_ switch configures this policy as the default retention policy for arbitration mailboxes in your Exchange Online organization. <br/> > [!NOTE]> This parameter isn't available in on-premises deployments.           |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies a unique name for the retention policy. <br/> |
| _RetentionId_ <br/> |Optional  <br/> |System.Guid  <br/> |The _RetentionId_ parameter specifies the identity of the retention policy to make sure mailboxes moved between two Exchange organizations continue to have the same retention policy applied to them. For example, in a cross-forest deployment or in a cross-premises deployment, when a mailbox is moved from an on-premises Exchange server to the cloud, or a cloud-based mailbox is moved to an on-premises Exchange server, this parameter is used to make sure the same retention policy is applied to the mailbox. <br/> > [!IMPORTANT]> It's not normally required to specify or modify the _RetentionId_ parameter for a retention tag. The parameter is populated automatically when importing retention tags using the Import-RetentionTags.ps1 script.          |
| _RetentionPolicyTagLinks_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RetentionPolicyTagIdParameter[]  <br/> |The _RetentionPolicyTagLinks_ parameter specifies the identity of retention policy tags to associate with the retention policy. Mailboxes that get a retention policy applied have retention tags linked with that retention policy. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

