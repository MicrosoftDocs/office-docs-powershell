---
title: "Get-UnifiedGroup"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 9/25/2017
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 9ff9204a-cc18-4e39-9159-1d16314217cd
description: "This cmdlet is available only in the cloud-based service."
---

# Get-UnifiedGroup

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-UnifiedGroup** cmdlet to view Office 365 groups in your cloud-based organization. To view members, owners and subscribers for Office 365 groups, use the **Get-UnifiedGroupLinks** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-UnifiedGroup [-Identity <UnifiedGroupIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all Office 365 groups.
  
```
Get-UnifiedGroup
```

### Example 2

This example returns the following information about all Office 365 groups:
  
- Display name
    
- Email address
    
- Description
    
- Owners
    
- Privacy
    
```
Get-UnifiedGroup | Format-List DisplayName,EmailAddresses,Notes,ManagedBy,AccessType
```

### Example 3

This example returns detailed information about the Office 365 Group named Marketing Department.
  
```
Get-UnifiedGroup -Identity "Marketing Department" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

Office 365 groups are group objects that are available across Office 365 services. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Anr_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> | The _Filter_ parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax `{<Property> -<Comparison operator> '<Value>'}`.  <br/>  `<Property>` is a filterable property. <br/>  `-<Comparison Operator>` is an OPATH comparison operator. For example `-eq` for equals and `-like` for string comparison. For more information about comparison operators, see[about_Comparison_Operators](https://go.microsoft.com/fwlink/p/?LinkId=620712).  <br/>  `<Value>` is the property value. Text values with or without spaces need to be enclosed in quotation marks ( `'<Value>'`). Don't use quotation marks with integers or the system values  `$true`,  `$false`, or  `$null`.  <br/>  You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example,  `{<Criteria1>) -and <Criteria2>}` or `{(<Criteria1> -and <Criteria2>) -or <Criteria3>}`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UnifiedGroupIdParameter  <br/> | The _Identity_ parameter specifies the Office 365 Group that you want to view. You can use any value that uniquely identifies the Office 365 Group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _IncludeAllProperties_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeAllProperties_ switch specifies whether to include the values of all properties in the results. You don't need to specify a value with this switch. <br/> If you don't use this switch, the values of some properties (for example, **CalendarMemeberReadOnly**, **CalendarUrl**, **InboxUrl**, **PeopleUrl**, and **PhotoUrl** ) might appear blank. <br/> |
| _IncludeSoftDeletedGroups_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeSoftDeletedGroups_ switch specifies whether to include soft-deleted Office 365 groups in the results. You don't need to specify a value with this switch. <br/> This switch is required to return soft-deleted Office 365 groups.  <br/> Soft-deleted Office 365 groups are deleted groups that are still recoverable.  <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SortBy_ <br/> |Optional  <br/> |System.String  <br/> | The _SortBy_ parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order. <br/>  If the default view doesn't include the property you're sorting by, you can append the command with `| Format-Table -Auto <Property1>,<Property2>...` to create a new view that contains all of the properties that you want to see. Wildcards (*) in the property names are supported. <br/>  You can sort by the following properties: <br/> **Name** <br/> **DisplayName** <br/> **Alias** <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

