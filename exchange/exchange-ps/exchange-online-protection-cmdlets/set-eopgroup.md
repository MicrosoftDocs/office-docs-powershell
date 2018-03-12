---
title: "Set-EOPGroup"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: Admin
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: bed90147-4ff9-4b9d-b9fc-3e7843397818
description: "This cmdlet is available only in Exchange Online Protection."
---

# Set-EOPGroup

This cmdlet is available only in Exchange Online Protection. 
  
Use the **Set-EOPGroup** cmdlet to modify general group object attributes in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the **Set-Group** cmdlet.
  
> [!NOTE]
> Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP. 
  
> [!IMPORTANT]
> This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-EOPGroup [-ExternalDirectoryObjectId <String>] [-Identity <GroupIdParameter>] [-ManagedBy <String[]>] [-Notes <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the  _Notes_ property to indicate the last time that the group was updated.
  
```
Set-Group -Identity "Legal Department" -Notes "Group members updated June 1, 2014"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ExternalDirectoryObjectId_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.GroupIdParameter  <br/> | The _Identity_ parameter specifies the distribution group or mail-enabled security group that you want to modify. You can use any value that uniquely identifies the group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _ManagedBy_ <br/> |Optional  <br/> |System.String[]  <br/> | The _ManagedBy_ parameter specifies a user who owns the group. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/>  You can specify multiple owners by using the following syntax: `@("<user1>","<user2>"...)`. The values that you specify will overwrite the current list of owners.  <br/>  The users you specify with this parameter aren't automatically added to the group. To add members to the group, use the **Update-EOPDistributionGroupMember** cmdlet. <br/> |
| _Notes_ <br/> |Optional  <br/> |System.String  <br/> |The  _Notes_ parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

