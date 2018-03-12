---
title: "Get-OrganizationalUnit"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: ec2d1cc9-863f-47f1-b235-57f2a2835437
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-OrganizationalUnit

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-OrganizationalUnit** cmdlet to view a list of organizational units (OUs) that exist in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-OrganizationalUnit [-Identity <ExtendedOrganizationalUnitIdParameter>] [-SingleNodeOnly <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves a list of the first level child OUs beneath the North America OU and formats the output so that only the **Name** and **DistinguishedName** properties are displayed.
  
```
Get-OrganizationalUnit "North America" -SingleNodeOnly | Format-Table Name, DistinguishedName
```

For more information about pipelining and the **Format-Table** cmdlet, see[Pipelining](https://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx) and[Working with Command Output](https://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).
  
### Example 2

This example retrieves a list of OUs that match the text string "Executives" and formats the output so that only the **Name** and **DistinguishedName** properties are displayed.
  
```
Get-OrganizationalUnit -SearchText "Executives" | Format-Table Name, DistinguishedName
```

For more information about pipelining and the **Format-Table** cmdlet, see[Pipelining](https://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx) and[Working with Command Output](https://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).
  
## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-OrganizationalUnit** cmdlet is used by the Exchange admin center to populate fields that display OU information.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ExtendedOrganizationalUnitIdParameter  <br/> | The _Identity_ parameter specifies the OU or domain that you want to view. You can use any value that uniquely identifies the OU or domain. For example: <br/>  Name <br/>  Canonical name <br/>  Distinguished name (DN) <br/>  GUID <br/>  You can use this parameter with the _SearchText_ parameter. <br/> |
| _IncludeContainers_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeContainers_ switch instructs the command to return containers in the results. You don't need to specify a value with this switch. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SearchText_ <br/> |Optional  <br/> |System.String  <br/> |The _SearchText_ parameter enables you to search the names of all OUs in your organization for the specified string. Only the OUs that match the string you specify are returned. If the string you specify contains spaces, enclose it in quotation marks ("). <br/> You can't use this parameter with the _Identity_ parameter. <br/> |
| _SingleNodeOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SingleNodeOnly_ switch instructs the command to return only the first level child OUs beneath the OU specified in the _Identity_ parameter. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

