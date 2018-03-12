---
title: "Get-LinkedUser"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 7c425c78-f2eb-4971-b0d7-cfb7f67ddb17
description: "This cmdlet is available only in the cloud-based service."
---

# Get-LinkedUser

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-LinkedUser** cmdlet to view existing linked user accounts.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-LinkedUser [-Identity <UserIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example lists all linked users in the organization.
  
```
Get-LinkedUser
```

### Example 2

This example returns a detailed information for the linked for the user laura@contoso.com.
  
```
Get-RemoteMailbox -Identity laura@contoso.com | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Anr_ <br/> |Optional  <br/> |System.String  <br/> | The _Anr_ parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are: <br/> **CommonName (CN)** <br/> **DisplayName** <br/> **FirstName** <br/> **LastName** <br/> **Alias** <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> | The _Filter_ parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax `{<Property> -<Comparison operator> '<Value>'}`.  <br/>  `<Property>` is a filterable property. <br/>  `-<Comparison Operator>` is an OPATH comparison operator. For example `-eq` for equals and `-like` for string comparison. For more information about comparison operators, see[about_Comparison_Operators](https://go.microsoft.com/fwlink/p/?LinkId=620712).  <br/>  `<Value>` is the property value. Text values with or without spaces need to be enclosed in quotation marks ( `'<Value>'`). Don't use quotation marks with integers or the system values  `$true`,  `$false`, or  `$null`.  <br/>  You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example,  `{<Criteria1>) -and <Criteria2>}` or `{(<Criteria1> -and <Criteria2>) -or <Criteria3>}`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> | The _Identity_ parameter specifies the linked user that you want to view. You can use any value that uniquely identifies the linked user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _OrganizationalUnit_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SortBy_ <br/> |Optional  <br/> |System.String  <br/> | The _SortBy_ parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order. <br/>  If the default view doesn't include the property you're sorting by, you can append the command with `| Format-Table -Auto <Property1>,<Property2>...` to create a new view that contains all of the properties that you want to see. Wildcards (*) in the property names are supported. <br/>  You can sort by the following properties: <br/> **Name** <br/> **DisplayName** <br/> **City** <br/> **FirstName** <br/> **LastName** <br/> **Office** <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

