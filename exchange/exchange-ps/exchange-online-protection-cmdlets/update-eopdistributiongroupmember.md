---
title: "Update-EOPDistributionGroupMember"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/27/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: a6d4f790-1b94-42f8-af6f-fa79c504d8ec
description: "This cmdlet is available only in Exchange Online Protection."
---

# Update-EOPDistributionGroupMember

This cmdlet is available only in Exchange Online Protection. 
  
Use the **Update-EOPDistributionGroupMember** cmdlet to add or remove members from distribution groups and mail-enabled security groups in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the **Update-DistributionGroupMember** cmdlet.
  
> [!NOTE]
> Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP. 
  
> [!IMPORTANT]
> This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Update-EOPDistributionGroupMember [-ExternalDirectoryObjectId <String>] [-Identity <DistributionGroupIdParameter>] [-Members <String[]>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example replaces the current members of the Security Team distribution group with Kitty Petersen and Tyson Fawcett.
  
```
Update-EOPDistributionGroupMember -Identity "Security Team" -Members @("Kitty Petersen","Tyson Fawcett")
```

### Example 2

This example adds a new user named Tyson Fawcett to the distribution group named Security Team while preserving the current members of the group. The current member objects are retrieved in a collection, the collection is filtered to extract the names, the user "Tyson Fawcett" is added, and the updated name list replaces the current membership of the distribution group.
  
```
$CurrentMemberObjects = Get-DistributionGroupMember "Security Team"; $CurrentMemberNames = $CurrentMemberObjects | % {$_.name}; $CurrentMemberNames += "Tyson Fawcett"; Update-EOPDistributionGroupMember -Identity "Security Team" -Members $CurrentMemberNames
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ExternalDirectoryObjectId_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DistributionGroupIdParameter  <br/> | The _Identity_ parameter specifies the distribution group or mail-enabled security group that you want to update. You can use any value that uniquely identifies the group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _Members_ <br/> |Optional  <br/> |System.String[]  <br/> | The _Members_ parameter specifies the list of recipients (mail-enabled objects) in the distribution group or mail-enabled security group. In Exchange Online Protection, the valid recipient types are: <br/>  Mail users <br/>  Distribution groups <br/>  Mail-enabled security groups <br/>  You can use any value that uniquely identifies the recipient. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/>  To replace the current members of the group with the recipients that you specify, use the syntax `@("<recipient1>","<recipient2>"...)`. To add new group members without affecting the existing members, see Example 2 in the Examples section.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

