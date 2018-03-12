---
title: "New-RoleGroup"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: c59f596d-cbdd-459e-b31f-99d03e684299
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-RoleGroup

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-RoleGroup** cmdlet to create management role groups.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-RoleGroup <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a role group. The Mail Recipients and Mail Enabled Public Folders roles are assigned to the role group, and the users Kim and Martin are added as members. Because no scopes were provided, Kim and Martin can manage any recipient and reset passwords for any users in the organization.
  
```
New-RoleGroup -Name "Limited Recipient Management" -Roles "Mail Recipients", "Mail Enabled Public Folders" -Members Kim, Martin
```

### Example 2

This example creates a role group with a custom recipient scope. The custom recipient scope, Seattle Recipients, limits the scope of the roles assigned to the role group to recipients who have their **City** property set to Seattle. The Mail Recipients and Mail Enabled Public Folders roles are assigned to the role group, and the users John and Carol are added as members.
  
```
New-RoleGroup -Name "Seattle Limited Recipient Management" -Roles "Mail Recipients", "Mail Enabled Public Folders" -Members John, Carol -CustomRecipientWriteScope "Seattle Recipients"
```

### Example 3

This example creates a role group and enables Isabel to add or remove members to or from the role group by adding her to the **ManagedBy** property. The Transport Rules role is assigned to the role group, and the Compliance Group USG is added as a member.
  
```
New-RoleGroup -Name "Transport Rules Management" -Roles "Transport Rules" -Members "Compliance Group" -ManagedBy Isabel
```

### Example 4

This example creates a linked role group that enables the members of the Toronto Administrators USG in the Contoso user forest to manage recipients located in the Toronto office. The custom recipient scope, Toronto Recipients, limits the scope of the roles assigned to the role group to recipients who have their **City** property set to Toronto. The Mail Recipients role is assigned to the role group.
  
The first command retrieves the credentials using the **Get-Credential** cmdlet and stores them in the `$Credentials` variable. Then the linked role group is created using the second command.
  
```
$Credentials = Get-Credential; New-RoleGroup -Name "ContosoUsers: Toronto Recipient Admins" -LinkedDomainController dc02.contosousers.contoso.com -LinkedCredential $Credentials -LinkedForeignGroup "Toronto Administrators" -CustomRecipientWriteScope "Toronto Recipients" -Roles "Mail Recipients"
```

### Example 5

This example takes an existing role group and copies the roles from that role group into a new custom role group. This can be useful if you want to create a role group similar to an existing role group but don't want to manually create all the role assignments. For example, you might want to create a role group that has most, but not all, of the management roles assigned to the Recipient Management role group.
  
The first command stores the existing role group in a variable, and the second command creates the custom role group.
  
```
$RoleGroup = Get-RoleGroup "Recipient Management"; New-RoleGroup "Limited Recipient Management" -Roles $RoleGroup.Roles
```

This example uses variables to store information. For more information about variables, see [User-Defined Variables](https://technet.microsoft.com/library/8af62634-2e0b-4da0-ae94-a890f6f24d8a.aspx).
  
### Example 6

This example removes the role assignment between the Distribution Groups management role and the Limited Recipient Management role group that you created in the previous example.
  
```
Remove-ManagementRoleAssignment "Distribution Groups-Limited Recipient Management"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You don't have to add members or assign management roles to the role group when you create it. However, until you add members or assign roles to the role group, the role group grants no permissions to users. You can also specify custom configuration or recipient scopes when you create a role group. These scopes are applied to the management role assignments created when the role group is created.
  
When you create a role group, you can create the group and add members to it directly, or you can create a linked role group. A linked role group links the role group to a universal security group (USG) in another forest. Creating a linked role group is useful if your servers running Exchange reside in a resource forest and your users and administrators reside in a separate user forest. If you create a linked role group, you can't add members directly to it. You must add the members to the USG in the foreign forest.
  
For more information about role groups, see [Understanding Management Role Groups](https://technet.microsoft.com/library/2a92e06c-523e-4fd4-a937-152562b7741d.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _LinkedDomainController_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _LinkedDomainController_ parameter specifies the fully qualified domain name (FQDN) or IP address of the domain controller in the forest where the foreign USG resides. The domain controller you specify is used to get security information for the foreign USG specified by the _LinkedForeignGroup_ parameter. <br/> If you use the _LinkedDomainController_ parameter, you must specify a foreign USG with the _LinkedForeignGroup_ parameter, and you can't use the _Members_ parameter. <br/> |
| _LinkedForeignGroup_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UniversalSecurityGroupIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _LinkedForeignGroup_ parameter specifies the name of the foreign USG you want to link this role group to. If the foreign USG name contains spaces, enclose the name in quotation marks ("). <br/> If you use the _LinkedForeignGroup_ parameter, you must specify a domain controller in the _LinkedDomainController_ parameter, and you can't use the _Members_ parameter. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the new role group. The name can have a maximum of 64 characters. If the name contains spaces, enclose the name in quotation marks ("). <br/> **Note**: If you create a linked role group, we recommend that you include the name of the foreign forest in the name of the role group so that you can more easily associate the linked role group and the associated foreign forest. This is especially important if you have multiple forests.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CustomConfigWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _CustomConfigWriteScope_ parameter specifies the existing configuration-based management scope to associate with management role assignments created with this role group. If the management scope name contains spaces, enclose the name in quotation marks ("). Use the[Get-ManagementScope](get-managementscope.md) cmdlet to retrieve a list of existing management scopes. <br/> |
| _CustomRecipientWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |The _CustomRecipientWriteScope_ parameter specifies the existing recipient-based management scope to associate with management role assignments created with this role group. If the management scope name contains spaces, enclose the name in quotation marks ("). <br/> Use the [Get-ManagementScope](get-managementscope.md) cmdlet to retrieve a list of existing management scopes. <br/> If you use the _CustomRecipientWriteScope_ parameter, you can't use the _RecipientOrganizationalUnitScope_ parameter. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The _Description_ parameter specifies the description that's displayed when the role group is viewed using the **Get-RoleGroup** cmdlet. Enclose the description in quotation marks ("). <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The _DisplayName_ parameter specifies the friendly name of the role group. If the name contains spaces, enclose the name in quotation marks ("). This parameter can have a maximum length of 256 characters. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _LinkedCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _LinkedCredential_ parameter specifies credentials to use to access the domain controller specified by the _LinkedDomainController_ parameter. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _ManagedBy_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _ManagedBy_ parameter specifies the users or USGs who can modify the configuration of a role group or add and remove members to or from a role group. <br/> You can use the name, distinguished name (DN), or primary SMTP address of the user or USG that you want to add. If the name of the user or USG contains spaces, enclose the name in quotation marks (").  <br/> If you want to add more than one user or USG, separate them using commas.  <br/> |
| _Members_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Members_ parameter specifies the mailboxes or USGs to add as a member of the role group. You can use the name, DN, or primary SMTP address of the user or USG you want to add. If the name of the user or USG contains spaces, enclose the name in quotation marks ("). If you want to add more than one user or USG, separate them using commas. <br/> If you use the _Members_ parameter, you can't use the _LinkedForeignGroup_, _LinkedDomainController_, or _LinkedCredential_ parameters. <br/> |
| _RecipientOrganizationalUnitScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _RecipientOrganizationalUnitScope_ parameter specifies the organizational unit (OU) scope added to the role assignments created when the role group is created. If you use the _RecipientOrganizationalUnitScope_ parameter, you can't use the _CustomRecipientWriteScope_ parameter. To specify an OU, use the syntax: _domain/ou_. If the OU name contains spaces, enclose the domain and OU in quotation marks (").  <br/> |
| _Roles_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleIdParameter[]  <br/> |The _Roles_ parameter specifies the management roles to assign to the role group when it's created. If a role name contains spaces, enclose the name in quotation marks ("). If you want to assign more that one role, separate the role names with commas. <br/> For a list of built-in management roles that you can assign to a role group, see [Built-in Management Roles](https://technet.microsoft.com/library/023f379a-40f6-43ef-b388-979f6dd85ec5.aspx).  <br/> |
| _SamAccountName_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _SamAccountName_ parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the characters !, #, $, %, ^, &amp;, -, _, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match). The maximum length is 20 characters. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter doesn't work in the Office 365 Security &amp; Compliance Center.  <br/> The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

