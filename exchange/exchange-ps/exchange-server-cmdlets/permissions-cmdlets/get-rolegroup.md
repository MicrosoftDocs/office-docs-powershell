---
title: "Get-RoleGroup"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 369800ff-fced-4d1c-adb0-1ddbe798670d

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-RoleGroup

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-RoleGroup** cmdlet to retrieve a list of management role groups.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-RoleGroup [-Identity <RoleGroupIdParameter>] [-DomainController <Fqdn>] [-Filter <String>] [-ReadFromDomainController <SwitchParameter>] [-ResultSize <Unlimited>] [-ShowPartnerLinked <SwitchParameter>] [-SortBy <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves a list of role groups.
  
```
Get-RoleGroup
```

### Example 2

This example retrieves the details for the Recipient Administrators role group.
  
```
Get-RoleGroup "Recipient Administrators" | Format-List
```

### Example 3

This example retrieves a list of role groups as seen by the domain controller closest to the user.
  
```
Get-RoleGroup -ReadFromDomainController
```

### Example 4

This example retrieves a list of all linked role groups and the Active Directory security identifier (SID) of the foreign universal security groups (USG) that are linked to each of them. You can then use the SIDs to find the USGs so you can modify their members.
  
```
Get-RoleGroup -Filter { RoleGroupType -Eq "Linked" } | Format-Table Name, LinkedGroup
```

## Detailed Description
<a name="DetailedDescription"> </a>

For more information about role groups, see [Understanding Management Role Groups](https://technet.microsoft.com/library/2a92e06c-523e-4fd4-a937-152562b7741d.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> |The _Filter_ parameter specifies the property to be used to filter the role groups. Only the role groups that match the criteria you specify are returned. <br/> You can filter on the  `LinkedGroup`,  `ManagedBy`,  `Members`,  `Name`,  `RoleGroupType`, and  `DisplayName` properties. If you create a filter using the `RoleGroupType` property, the only values you can use in the filter are `Standard` and `Linked`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleGroupIdParameter  <br/> |The _Identity_ parameter specifies the role group to retrieve. If the name of the role group contains spaces, enclose the name in quotation marks ("). <br/> If the _Identity_ parameter isn't specified, all role groups are returned. <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _ReadFromDomainController_ switch specifies that information should be read from a domain controller in the user's domain. If you run the command `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest and you don't use the _ReadFromDomainController_ switch, it's possible that information will be read from a global catalog that has outdated information. When you use the _ReadFromDomainController_ switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch. <br/> > [!NOTE]> By default, the recipient scope is set to the domain that hosts your Exchange servers.           |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _ShowPartnerLinked_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> This _ShowPartnerLinked_ switch specifies whether to return built-in role groups that are of type `PartnerRoleGroup`. Role groups of this type are used in the cloud-based services to allow partner service providers to manage their customer organizations. These role groups can't be edited and are therefore not shown by default.  <br/> |
| _SortBy_ <br/> |Optional  <br/> |System.String  <br/> | The _SortBy_ parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order. <br/>  If the default view doesn't include the property you're sorting by, you can append the command with `| Format-Table -Auto <Property1>,<Property2>...` to create a new view that contains all of the properties that you want to see. Wildcards (*) in the property names are supported. <br/>  You can sort by the following properties: <br/> **Name** <br/> **DisplayName** <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

