---
title: "New-RoleAssignmentPolicy"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 25a56027-2e25-4f98-842f-c671a1bf56f9

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-RoleAssignmentPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-RoleAssignmentPolicy** cmdlet to create management role assignment policies in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-RoleAssignmentPolicy -Name <String> [-Confirm [<SwitchParameter>]] [-Description <String>] [-DomainController <Fqdn>] [-IsDefault <SwitchParameter>] [-Roles <RoleIdParameter[]>] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates an assignment policy. After the assignment policy is created, you can assign the assignment policy to a mailbox using the **Set-Mailbox** cmdlet.
  
```
New-RoleAssignmentPolicy -Name "End User Policy"; Set-Mailbox -Identity Joe -RoleAssignmentPolicy "End User Policy"
```

### Example 2

This example creates an assignment policy using the  _IsDefault_ switch.
  
```
New-RoleAssignmentPolicy -Name "Default End User Policy" -IsDefault
```

### Example 3

This example creates an assignment policy that enables users to modify their personal information, manage their distribution group membership, and manage their voice mail. The new assignment policy is created as the new default assignment policy. Then, all existing mailboxes are configured to use the new assignment policy.
  
First, the new assignment policy is created and set as the new default assignment policy.
  
Because setting the new role assignment as default applies only to new mailboxes or mailboxes moved from previous versions of Exchange, the **Set-Mailbox** cmdlet is used to configure the new assignment policy on all existing mailboxes.
  
```
New-RoleAssignmentPolicy -Name "Limited End User Policy" -Roles "MyPersonalInformation", "MyDistributionGroupMembership", "MyVoiceMail" -IsDefault; Get-Mailbox -ResultSize Unlimited | Set-Mailbox -RoleAssignmentPolicy "Limited End User Policy"
```

## Detailed Description
<a name="DetailedDescription"> </a>

When you create an assignment policy, you can assign it to users using the **New-Mailbox**, **Set-Mailbox**, or **Enable-Mailbox** cmdlets. If you make the new assignment policy the default assignment policy, it's assigned to all new mailboxes that don't have an explicit assignment policy assigned to them.
  
You can add management roles to the new assignment policy when you create it, or you can create the assignment policy and add roles later. You must assign at least one management role to the new assignment policy for it to apply permissions to a mailbox. Without any roles assigned to the new assignment policy, users assigned to it won't be able to manage their mailbox configuration. To assign a management role after the assignment policy has been created, use the **New-ManagementRoleAssignment** cmdlet. For more information, see[Manage Role Assignment Policies](http://technet.microsoft.com/library/f93d502e-5df4-4ba0-b68d-01a17ccffb4d.aspx).
  
For more information about assignment policies, see [Understanding End User Role Assignment and Policies](http://technet.microsoft.com/library/25913e43-326a-4371-90b5-021a35f100fe.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the new assignment policy. If the assignment policy name contains spaces, enclose the name in quotation marks ("). The maximum length of the name is 64 characters. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies the description that's displayed when the role assignment policy is viewed using the **Get-RoleAssignmentPolicy** cmdlet. Enclose the description in quotation marks ("). <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The  _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _IsDefault_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IsDefault_ switch makes the assignment policy the default assignment policy. You don't have to specify a value with this switch. <br/> New mailboxes or mailboxes moved from previous versions of Exchange are assigned the default assignment policy when an explicit assignment policy isn't provided.  <br/> > [!NOTE]> Setting an assignment policy as default doesn't change the role assignment on existing mailboxes. To change the assignment policies on existing mailboxes, use the **Set-Mailbox** cmdlet.          |
| _Roles_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleIdParameter[]  <br/> |The  _Roles_ parameter specifies the management roles to assign to the role assignment policy when it's created. If a role name contains spaces, enclose the name in quotation marks ("). If you want to assign more that one role, separate the role names with commas. <br/> For a list of built-in management roles that you can assign to a role group, see [Built-in Management Roles](http://technet.microsoft.com/library/023f379a-40f6-43ef-b388-979f6dd85ec5.aspx).  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

