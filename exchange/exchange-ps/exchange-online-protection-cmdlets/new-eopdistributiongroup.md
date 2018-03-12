---
title: "New-EOPDistributionGroup"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 4610dfe5-fca8-4ba8-be3c-535d1753e0f4
description: "This cmdlet is available only in Exchange Online Protection."
---

# New-EOPDistributionGroup

This cmdlet is available only in Exchange Online Protection. 
  
Use the **New-EOPDistributionGroup** cmdlet to create distribution groups or mail-enabled security groups in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the **New-DistributionGroup** cmdlet.
  
> [!NOTE]
> Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP. 
  
> [!IMPORTANT]
> This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-EOPDistributionGroup -Name <String> [-Alias <String>] [-DisplayName <String>] [-ManagedBy <String[]>] [-Members <String[]>] [-Notes <String>] [-PrimarySmtpAddress <SmtpAddress>] [-Type <Distribution | Security>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a mail-enabled universal security group named Managers that's managed by Kitty Petersen.
  
```
New-EOPDistributionGroup -Name Managers -Type Security -ManagedBy "Kitty Petersen"
```

### Example 2

This example creates a distribution group named "Security Team" and adds two users to the group.
  
```
New-EOPDistributionGroup -Name "Security Team" -ManagedBy "Tyson Fawcett" -Alias SecurityTeamThree -DisplayName "Security Team" -Notes "Security leads from each division" -PrimarySmtpAddress SecTeamThree@contoso.com -Type Distribution -Members @("Tyson Fawcett","Kitty Petersen")
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can use the **New-EOPDistributionGroup** cmdlet to create the following types of groups:
  
- Mail-enabled universal security group (USG)
    
- Universal distribution group
    
Distribution groups are used to consolidate groups of recipients into a single point of contact for email messages. Security groups are used to grant permissions to multiple users.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the distribution group object. The value specified in the _Name_ parameter is also used for the _DisplayName_ parameter if the _DisplayName_ parameter isn't specified. <br/> The  _Name_ parameter value can't exceed 64 characters. <br/> |
| _Alias_ <br/> |Optional  <br/> |System.String  <br/> |The  _Alias_ parameter specifies the email alias of the distribution group. The _Alias_ parameter value is used to generate the primary SMTP email address if you don't use the _PrimarySmtpAddress_ parameter. <br/> The value of  _Alias_ can contain letters, numbers and the characters !, #, $, %, &amp;, ', *, +, -, /, =, ?, ^, _, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, `help.desk`). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the  _Alias_ value is 64 characters. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the name of the distribution group in the Exchange admin center (EAC). If the _DisplayName_ parameter isn't specified, the value of the _Name_ parameter is used for the _DisplayName_ parameter. <br/> |
| _ManagedBy_ <br/> |Optional  <br/> |System.String[]  <br/> | The _ManagedBy_ parameter specifies a user who owns the group. In Exchange Online Protection, you need to use this parameter to specify at least one group owner. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/>  You can specify multiple owners by using the following syntax: `@("<user1>","<user2>"...)`.  <br/>  The users you specify with this parameter aren't automatically added to the group. To add members to the group, use the **Update-EOPDistributionGroupMember** cmdlet. <br/> |
| _Members_ <br/> |Optional  <br/> |System.String[]  <br/> | The _Members_ parameter specifies the initial list of recipients (mail-enabled objects) in the distribution group. In Exchange Online Protection, the valid recipient types are: <br/>  Mail users <br/>  Distribution groups <br/>  Mail-enabled security groups <br/>  You can use any value that uniquely identifies the recipient. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/>  You can specify multiple recipients by using the following syntax: `@("<recipient1>","<recipient2>"...)`.  <br/> |
| _Notes_ <br/> |Optional  <br/> |System.String  <br/> |The  _Notes_ parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _PrimarySmtpAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The  _PrimarySmtpAddress_ parameter specifies the primary return SMTP email address for the distribution group. <br/> |
| _Type_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.RecipientTasks.GroupType  <br/> |The  _Type_ parameter specifies the group type. Valid values are `Distribution` or `Security`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

