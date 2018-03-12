---
title: "Get-RecipientPermission"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: a80d1ec7-2504-44f1-b6b4-2e65310b4c6e
description: "This cmdlet is available only in the cloud-based service."
---

# Get-RecipientPermission

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-RecipientPermission** cmdlet to view information about SendAs permissions that are configured for users in a cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-RecipientPermission [-Identity <RecipientIdParameter>] [-AccessRights <MultiValuedProperty>] [-ReadFromDomainController <SwitchParameter>] [-ResultSize <Unlimited>] [-Trustee <SecurityPrincipalIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example lists the recipients for whom the user Kim Akers has SendAs permission. Kim can send messages that appear to come directly from the recipients.
  
```
Get-RecipientPermission -Trustee "Kim Akers"
```

### Example 2

This example lists the users who have SendAs permission on the mailbox Help Desk. The users listed can send messages that appear to come directly from the Help Desk mailbox.
  
```
Get-RecipientPermission "Help Desk"
```

## Detailed Description
<a name="DetailedDescription"> </a>

When a user is given SendAs permission to another user or group, the user can send messages that appear to come from the other user or group.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccessRights_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AccessRights_ parameter filters the results by permission. <br/> Valid input for this parameter is  `SendAs`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> | The _Identity_ parameter filters the results by the target recipient. The user or group specified by the _Trustee_ parameter can operate on this recipient. <br/>  You can specify any type of recipient, for example: <br/>  Mailboxes <br/>  Mail users <br/>  External contacts <br/>  Distribution groups <br/>  Dynamic distribution groups <br/>  You can use any value that uniquely identifies the recipient. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ReadFromDomainController_ parameter specifies that the user information is read from a domain controller in the user's domain. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _Trustee_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.SecurityPrincipalIdParameter  <br/> | The _Trustee_ parameter filters the results by the user or group to whom you're granting the permission. The user or group can operate on the recipient specified by the _Identity_ parameter. <br/>  You can specify the following types of users or groups: <br/>  Mailbox users <br/>  Mail users with a Microsoft account (formerly known as a Windows Live ID) <br/>  Security groups <br/>  You can use any value that uniquely identifies the user or group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

