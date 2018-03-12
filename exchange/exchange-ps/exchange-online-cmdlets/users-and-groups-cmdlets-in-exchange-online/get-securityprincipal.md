---
title: "Get-SecurityPrincipal"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 98d70e10-6972-4317-88d0-59f99845cf15
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-SecurityPrincipal

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-SecurityPrincipal** cmdlet to return a list of security principals. Security principals are entities, such as users or security groups, which can be assigned permissions and user rights.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-SecurityPrincipal [-Identity <ExtendedSecurityPrincipalIdParameter>] [-DomainController <Fqdn>] [-Filter <String>] [-IncludeDomainLocalFrom <SmtpDomain>] [-OrganizationalUnit <ExtendedOrganizationalUnitIdParameter>] [-ResultSize <Unlimited>] [-RoleGroupAssignable <SwitchParameter>] [-Types <MultiValuedProperty>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves security principals from the People OU.
  
```
Get-SecurityPrincipal -OrganizationalUnit OU=People,DC=Contoso,DC=com
```

### Example 2

This example retrieves security principals from the Legal department by using the  _Filter_ parameter. Only security principals matching the filter condition are retrieved.
  
```
Get-SecurityPrincipal -Filter {Department -eq "Legal"}
```

### Example 3

This example retrieves a single security principal explicitly specified by using the  _Identity_ parameter.
  
```
Get-SecurityPrincipal -Identity Administrator
```

### Example 4

This example retrieves well-known security principals and displays only the **Name** and **SID** properties in the results.
  
```
Get-SecurityPrincipal -Types WellKnownSecurityPrincipal | Format-Table Name,SID -AutoSize
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-SecurityPrincipal** cmdlet is used by the Exchange admin center to populate fields that display recipient information.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> | The _Filter_ parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax `{<Property> -<Comparison operator> '<Value>'}`.  <br/>  `<Property>` is a filterable property. <br/>  `-<Comparison Operator>` is an OPATH comparison operator. For example `-eq` for equals and `-like` for string comparison. For more information about comparison operators, see[about_Comparison_Operators](https://go.microsoft.com/fwlink/p/?LinkId=620712).  <br/>  `<Value>` is the property value. Text values with or without spaces need to be enclosed in quotation marks ( `'<Value>'`). Don't use quotation marks with integers or the system values  `$true`,  `$false`, or  `$null`.  <br/>  You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example,  `{<Criteria1>) -and <Criteria2>}` or `{(<Criteria1> -and <Criteria2>) -or <Criteria3>}`.  <br/>  You can filter by the following properties: <br/> **AdminDisplayName** <br/> **DisplayName** <br/> **DistinguishedName** <br/> **ExchangeVersion** <br/> **Guid** <br/> **Id** <br/> **Name** <br/> **ObjectCategory** <br/> **ObjectClass** <br/> **RecipientType** <br/> **RecipientTypeDetails** <br/> **Sid** <br/> **WhenChanged** <br/> **WhenChangedUTC** <br/> **WhenCreated** <br/> **WhenCreatedUTC** <br/>  For more information, see[Filterable Properties for the -Filter Parameter](http://technet.microsoft.com/library/b02b0005-2fb6-4bc2-8815-305259fa5432.aspx).  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ExtendedSecurityPrincipalIdParameter  <br/> |The  _Identity_ parameter specifies the security principal. When the security principal is explicitly specified by using this parameter, no additional security principals are returned. <br/> |
| _IncludeDomainLocalFrom_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpDomain  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _IncludeDomainLocalFrom_ parameter specifies whether to return domain local groups from the FQDN of the specified Active Directory domain (for example, `contoso.com`) in the results.  <br/> Don't use this parameter with the  _Filter_ or _Identity_ parameters. <br/> |
| _OrganizationalUnit_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ExtendedOrganizationalUnitIdParameter  <br/> | The _OrganizationalUnit_ parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the **Get-OrganizationalUnit** cmdlet. You can use any value that uniquely identifies the OU or domain. For example: <br/>  Name <br/>  Canonical name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _RoleGroupAssignable_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _RoleGroupAssignable_ switch filters security principals by returning only objects that can be assigned to an RBAC role group. You don't need to specify a value with this switch. <br/> |
| _Types_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Types_ parameter filters the results by object type. Valid values are: <br/>  `Computer` <br/>  `GlobalSecurityGroup` <br/>  `Group` <br/>  `UniversalSecurityGroup` <br/>  `User` <br/>  `WellknownSecurityPrincipal` <br/>  You can specify multiple values separated by commas. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

