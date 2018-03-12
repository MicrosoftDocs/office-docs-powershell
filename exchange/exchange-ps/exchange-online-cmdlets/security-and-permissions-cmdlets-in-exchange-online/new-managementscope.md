---
title: "New-ManagementScope"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 1ea1f474-69d6-48c0-9beb-bfa4442c5dab

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-ManagementScope

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-ManagementScope** cmdlet to create a regular or exclusive management scope.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-ManagementScope -RecipientRestrictionFilter <String> [-Exclusive <SwitchParameter>] [-Force <SwitchParameter>] [-RecipientRoot <OrganizationalUnitIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a scope that includes only the servers MailboxServer1, MailboxServer2, and MailboxServer3. Users assigned roles using management role assignments that have the scope in this example can only perform against the servers included in the scope.
  
```
New-ManagementScope -Name "Mailbox Servers 1 through 3" -ServerList MailboxServer1, MailboxServer2, MailboxServer3
```

### Example 2

This example creates the Redmond Site Scope scope and sets a server restriction filter that matches only the servers located in the "CN=Redmond,CN=Sites,CN=Configuration,DC=contoso,DC=com" Active Directory Domain Services (AD DS) site.
  
```
New-ManagementScope -Name "Redmond Site Scope" -ServerRestrictionFilter {ServerSite -eq "CN=Redmond,CN=Sites,CN=Configuration,DC=contoso,DC=com"}
```

### Example 3

This example creates the Executive Mailboxes scope. Only mailboxes located within the Executives OU in the contoso.com domain match the recipient restriction filter.
  
```
New-ManagementScope -Name "Executive Mailboxes" -RecipientRoot "contoso.com/Executives" -RecipientRestrictionFilter {RecipientType -eq "UserMailbox"}
```

### Example 4

This example creates the Protected Exec Users exclusive scope. Users that contain the string "VP" in their title match the recipient filter for the scope. When the exclusive scope is created, all users are immediately blocked from modifying the recipients that match the exclusive scope until the scope is associated with a management role assignment. If other role assignments are associated with other exclusive scopes that match the same recipients, those assignments can still modify the recipients.
  
The exclusive scope is then associated with a management role assignment that assigns the Mail Recipients management role to the Executive Administrators role group. This role group contains administrators who are allowed to modify the mailboxes of high-profile executives. Only the administrators of the Executive Administrators role group can modify users with the string "VP" in their title.
  
```
New-ManagementScope -Name "Protected Exec Users" -RecipientRestrictionFilter { Title -Like "*VP*" } -Exclusive; New-ManagementRoleAssignment -SecurityGroup "Executive Administrators" -Role "Mail Recipients" -CustomRecipientWriteScope "Protected Exec Users"
```

### Example 5

This example creates the Seattle Databases scope and sets a database restriction filter that matches only the databases that begin with the string "SEA".
  
```
New-ManagementScope -Name "Seattle Databases" -DatabaseRestrictionFilter {Name -Like "SEA*" }
```

## Detailed Description
<a name="DetailedDescription"> </a>

After you create a regular or exclusive scope, you need to associate the scope with a management role assignment. To associate a scope with a role assignment, use the [New-ManagementRoleAssignment](new-managementroleassignment.md) cmdlet. For more information about adding new management scopes, see[Add a Management Role Scope](http://technet.microsoft.com/library/b97a5be3-15cc-4954-ba30-a824a95e21be.aspx).
  
For more information about regular and exclusive scopes, see [Understanding Management Scopes](http://technet.microsoft.com/library/24ed4a38-438a-4223-9f9c-5d4dea4b046b.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DatabaseList_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter[]  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DatabaseList_ parameter specifies a list of databases to which the scope should be applied. Multiple databases can be specified, separated by commas. If you use the _DatabaseList_ parameter, you can't use the _DatabaseRestrictionFilter_,  _ServerList_,  _RecipientRestrictionFilter_,  _RecipientRoot_, or  _ServerRestrictionFilter_ parameters. <br/> |
| _DatabaseRestrictionFilter_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DatabaseRestrictionFilter_ parameter specifies the filter to apply to database objects. Only database objects that match the filter are included in the scope. If you use the _DatabaseRestrictionFilter_ parameter, you can't use the _RecipientRestrictionFilter_,  _ServerRestrictionFilter_,  _RecipientRoot_,  _DatabaseList_, or  _ServerList_ parameters. For a list of filterable database properties, see[Understanding Management Role Scopes](http://technet.microsoft.com/library/24ed4a38-438a-4223-9f9c-5d4dea4b046b.aspx).  <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the management scope. The name can be up to 64 characters. If the name contains spaces, enclose the name in quotation marks ("). <br/> |
| _RecipientRestrictionFilter_ <br/> |Required  <br/> |System.String  <br/> |The  _RecipientRestrictionFilter_ parameter specifies the filter to apply to recipient objects. Only recipient objects that match the filter are included in the scope. If you use the _RecipientRestrictionFilter_ parameter, you can't use the _DatabaseRestrictionFilter_,  _DatabaseList_,  _ServerList_, or  _ServerRestrictionFilter_ parameters. <br/> |
| _ServerList_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter[]  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _ServerList_ parameter specifies a list of servers to which the scope should be applied. Multiple servers can be specified, separated by commas. If you use the _ServerList_ parameter, you can't use the _RecipientRestrictionFilter_,  _RecipientRoot_,  _DatabaseRestrictionFilter_,  _DatabaseList_, or  _ServerRestrictionFilter_ parameters. <br/> |
| _ServerRestrictionFilter_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _ServerRestrictionFilter_ parameter specifies the filter to apply to server objects. Only server objects that match the filter are included in the scope. If you use the _ServerRestrictionFilter_ parameter, you can't use the _RecipientRestrictionFilter_,  _RecipientRoot_,  _DatabaseRestrictionFilter_,  _DatabaseList_, or  _ServerList_ parameters. For a list of filterable server properties, see[Understanding Management Role Scopes](http://technet.microsoft.com/library/24ed4a38-438a-4223-9f9c-5d4dea4b046b.aspx).  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Exclusive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Exclusive_ switch specifies that the role should be an exclusive scope. <br/> > [!CAUTION]> When you create exclusive management scopes, only users or universal security groups (USG) assigned exclusive scopes that contain objects to be modified can access those objects. Users or USGs that aren't assigned an exclusive scope that contains the objects immediately lose access to those objects.           |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies that an exclusive scope should be created without showing the warning that the exclusive scope takes effect immediately. <br/> |
| _RecipientRoot_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> |The  _RecipientRoot_ parameter specifies the organizational unit (OU) under which the filter specified with the _RecipientRestrictionFilter_ parameter should be applied. If you use the _RecipientRoot_ parameter, you can't use the _DatabaseRestrictionFilter_,  _DatabaseList_,  _ServerList_, or  _ServerRestrictionFilter_ parameters. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

