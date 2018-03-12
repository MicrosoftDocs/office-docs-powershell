---
title: "Set-RoleGroup"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: c66ee1a2-cec7-4b76-a592-a5e626f4f9d3
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-RoleGroup

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-RoleGroup** cmdlet to modify who can add or remove members to or from management role groups or change the name of the role group.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-RoleGroup <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the role group managers list to David and Christine on the London Recipient Administrators role group.
  
```
Set-RoleGroup "London Recipient Administrators" -ManagedBy "David", "Christine"
```

### Example 2

This example sets the role group managers list to the Seattle Role Administrators USG on the Seattle Administrators role group. Because the user running the command wasn't added to the **ManagedBy** property of the role group, the _BypassSecurityGroupManagerCheck_ switch must be used. The user is assigned the Role Management role, which enables the user to bypass the security group manager check.
  
```
Set-RoleGroup "Seattle Administrators" -ManagedBy "Seattle Role Administrators" -BypassSecurityGroupManagerCheck
```

### Example 3

This example modifies the linked foreign USG on the existing linked role group ContosoUsers: Toronto Recipient Admins. The foreign USG that should be linked is Toronto Tier 2 Administrators.
  
The first command retrieves the credentials using the **Get-Credential** cmdlet and stores them in the `$Credentials` variable. The second command modifies the foreign USG on the ContosoUsers: Toronto Recipient Admins linked role group.
  
```
$Credentials = Get-Credential; Set-RoleGroup "ContosoUsers: Toronto Recipient Admins" -LinkedDomainController dc02.contosousers.contoso.com -LinkedCredential $Credentials -LinkedForeignGroup "Toronto Tier 2 Administrators"
```

## Detailed Description
<a name="DetailedDescription"> </a>

If you want to add or remove members to or from an existing role group, use the **Add-RoleGroupMember** or **Remove-RoleGroupMember** cmdlets. If you want to add or remove management role assignments to or from a role group, use the **New-ManagementRoleAssignment** or **Remove-ManagementRoleAssignment** cmdlets. If you want to add or remove members to or from a linked role group, you must add or remove the members to or from the foreign universal security group (USG) in the foreign forest. To find the foreign USG, use the **Get-RoleGroup** cmdlet.
  
If the **ManagedBy** property is populated with role group managers, the user configuring a role group must be a role group manager. Alternately, if the user is a member of the Organization Management role group or is directly or indirectly assigned the Role Management role, the _BypassSecurityGroupManagerCheck_ switch can be used to override the security group management check.
  
For more information about role groups, see [Understanding Management Role Groups](http://technet.microsoft.com/library/2a92e06c-523e-4fd4-a937-152562b7741d.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleGroupIdParameter  <br/> |The  _Identity_ parameter specifies the name of the role group to modify. If the name contains spaces, enclose the name in quotation marks ("). <br/> |
| _LinkedDomainController_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _LinkedDomainController_ parameter specifies the fully qualified domain name (FQDN) or IP address of the domain controller in the forest where the foreign USG resides. The domain controller you specify is used to get security information for the foreign USG specified by the _LinkedForeignGroup_ parameter. <br/> You can only use the  _LinkedDomainController_ parameter with a linked role group. <br/> |
| _LinkedForeignGroup_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UniversalSecurityGroupIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _LinkedForeignGroup_ parameter specifies the name of the foreign USG you want to link this role group to. If the foreign USG name contains spaces, enclose the name in quotation marks ("). <br/> You can only use the  _LinkedForeignGroup_ parameter to change the foreign USG linked to an existing linked role group. You can't change a standard role group to a linked role group by using the **Set-RoleGroup** cmdlet. You must create a role group using the **New-RoleGroup** cmdlet. <br/> If you use the  _LinkedForeignGroup_ parameter, you must specify a domain controller in the _LinkedDomainController_ parameter. <br/> |
| _BypassSecurityGroupManagerCheck_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _BypassSecurityGroupManagerCheck_ switch enables a user who hasn't been added to the **ManagedBy** property to modify a role group. The user must be a member of the Organization Management role group or be assigned, either directly or indirectly, the Role Management role. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies the description displayed when the role group is viewed using the **Get-RoleGroup** cmdlet. Enclose the description in quotation marks ("). <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the friendly name of the role group. If the name contains spaces, enclose the name in quotation marks ("). This parameter can have a maximum length of 256 characters. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _LinkedCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _LinkedCredential_ parameter specifies credentials to use to access the domain controller specified by the _LinkedDomainController_ parameter. <br/> You can only use the  _LinkedCredential_ parameter with a linked role group. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _ManagedBy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _ManagedBy_ parameter specifies the users or USG who can modify the configuration of a role group or add or remove members to or from a role group. The list you specify with this parameter overwrites the existing `ManagedBy` list. To add or remove individual role group managers, and for more information about modifying multivalued properties, see[Modifying Multivalued Properties](http://technet.microsoft.com/library/dc2c1062-ad79-404b-8da3-5b5798dbb73b.aspx).  <br/> You can use the name, distinguished name (DN), or primary SMTP address of the user or USG you want to add. If the name of the user or USG contains spaces, enclose the name in quotation marks (").  <br/> If you want to add more than one user or USG, separate them using commas.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the role group. The name can contain up to 64 characters. If the name contains spaces, enclose the name in quotation marks ("). <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter doesn't work in the Office 365 Security &amp; Compliance Center.  <br/> The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

