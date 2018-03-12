---
title: "Get-RetentionPolicyTag"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 5cddcfea-6f67-4481-9c00-5b13c11d5ced
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-RetentionPolicyTag

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-RetentionPolicyTag** cmdlet to retrieve settings for a retention tag.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-RetentionPolicyTag [-Identity <RetentionPolicyTagIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns all retention tags.
  
```
Get-RetentionPolicyTag
```

### Example 2

This example returns system tags in addition to personal and default tags.
  
```
Get-RetentionPolicyTag -IncludeSystemTags
```

### Example 3

This example returns the settings for the tag Consolidated Messenger.
  
```
Get-RetentionPolicyTag "Consolidated Messenger"
```

### Example 4

This example returns all retention tags of  `Inbox` and `All` types and pipes the results to the **Format-Table** command to display the **Name**, **Type**, **RetentionEnabled**, **AgeLimitForRetention**, and **RetentionAction** properties.
  
```
Get-RetentionPolicyTag -Types Inbox,All | Format-Table Name,Type,RetentionEnabled,AgeLimitForRetention,RetentionAction -AutoSize
```

## Detailed Description
<a name="DetailedDescription"> </a>

Retention tags are used to apply message retention settings to messages or folders. There are three types of retention tags: 
  
- Retention policy tags
    
- Default policy tags
    
- Personal tags
    
Retention policy tags are applied to default folders such as Inbox and Deleted Items. Personal tags are available to users to tag items and folders. The default policy tag is applied to all items that don't have a tag applied by the user or aren't inherited from the folder they're located in. The **Get-RetentionPolicyTag** cmdlet displays all the settings for the specified tag.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RetentionPolicyTagIdParameter  <br/> |The _Identity_ parameter specifies the name of the tag. <br/> |
| _IncludeSystemTags_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeSystemTags_ switch specifies whether to return any system tags. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The _Mailbox_ parameter isn't available in this release. <br/> |
| _OptionalInMailbox_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _OptionalInMailbox_ parameter isn't available in this release. <br/> |
| _Types_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ElcFolderType[]  <br/> | The _Types_ parameter specifies the type of retention tag to return. Valid values include: <br/>  `Calendar` <br/>  `Contacts` <br/>  `DeletedItems` <br/>  `Drafts` <br/>  `Inbox` <br/>  `JunkEmail` <br/>  `Journal` <br/>  `Notes` <br/>  `Outbox` <br/>  `SentItems` <br/>  `Tasks` <br/>  `All` <br/>  `RssSubscriptions` <br/>  `ConversationHistory` <br/>  `Personal` <br/>  The parameter accepts multiple values separated by a comma. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

