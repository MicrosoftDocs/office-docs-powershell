---
title: "Set-EOPDistributionGroup"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: Admin
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 689a66c5-a524-4870-88f3-091fd6eae3b7
description: "This cmdlet is available only in Exchange Online Protection."
---

# Set-EOPDistributionGroup

This cmdlet is available only in Exchange Online Protection. 
  
Use the **Set-EOPDistributionGroup** cmdlet to modify the settings of distribution groups or mail-enabled security groups in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the **Set-DistributionGroup** cmdlet.
  
> [!NOTE]
> Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP. 
  
> [!IMPORTANT]
> This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-EOPDistributionGroup [-Alias <String>] [-DisplayName <String>] [-ExternalDirectoryObjectId <String>] [-Identity <DistributionGroupIdParameter>] [-ManagedBy <String[]>] [-PrimarySmtpAddress <SmtpAddress>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the current SMTP address of the Security Team EOP distribution group to "NewSecTeamId@Contoso.com".
  
```
Set-EOPDistributionGroup -Identity "Security Team" -PrimarySmtpAddress NewSecTeamId@Contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Alias_ <br/> |Optional  <br/> |System.String  <br/> |The  _Alias_ parameter specifies the alias of the distribution group. <br/> The value of  _Alias_ can contain letters, numbers and the characters !, #, $, %, &amp;, ', *, +, -, /, =, ?, ^, _, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, `help.desk`). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the  _Alias_ value is 64 characters. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the name of the distribution group in the Exchange admin center (EAC). <br/> |
| _ExternalDirectoryObjectId_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DistributionGroupIdParameter  <br/> | The _Identity_ parameter specifies the distribution group or mail-enabled security group that you want to modify. You can use any value that uniquely identifies the group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _ManagedBy_ <br/> |Optional  <br/> |System.String[]  <br/> | The _ManagedBy_ parameter specifies one or more group owners. A group must have at least one owner. You can use any value that uniquely identifies the owner. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  You can specify multiple owners by using the following syntax: `@("<user1>","<user2>"...)`. The values that you specify will overwrite the current list of owners.  <br/>  The users specified with the _ManagedBy_ parameter aren't automatically members of the distribution group. If you want any of the owners to be added as members of the distribution group, you need to add them by using the **Update-EOPDistributionGroupMember** cmdlet. <br/> |
| _PrimarySmtpAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The  _PrimarySmtpAddress_ parameter specifies the primary return SMTP email address for the distribution group. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

