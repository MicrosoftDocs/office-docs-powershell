---
title: "Get-PublicFolderItemStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b978c72d-6c0d-428f-a4ea-b17e39aef408
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-PublicFolderItemStatistics

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-PublicFolderItemStatistics** cmdlet to view information about items within a specified public folder. Information returned includes subject, last modification time, last access time, creation time, attachments, message size, and the type of item. You can use this raw information to better understand the distribution of items and item characteristics across public folders.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PublicFolderItemStatistics -Identity <PublicFolderIdParameter> [-DomainController <Fqdn>] [-Mailbox <MailboxIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns default statistics for all items in the Pamphlets public folder under the \Marketing\2013 path. Default information includes item identity, creation time, and subject.
  
```
Get-PublicFolderItemStatistics -Identity "\Marketing\2013\Pamphlets"
```

### Example 2

This example returns additional information about the items within the public folder, such as subject, last modification time, creation time, attachments, message size, and the type of item by piping the results of the **Get-PublicFolderItemStatistics** command to the **Format-List** command.
  
```
Get-PublicFolderItemStatistics -Identity "\Marketing\2013\Pamphlets" | Format-List
```

### Example 3

This example exports the output of the **Get-PublicFolderItemStatistics** command to the PFItemStats.csv file that includes the following information for all items within the public folder \Marketing\Reports:
  
- Subject of the message ( _Subject_)
    
- Date and time when the item was last modified ( _LastModificationTime_)
    
- If the item has attachments ( _HasAttachments_)
    
- Type of item ( _ItemType_)
    
- Size of the item ( _MessageSize_)
    
```
Get-PublicFolderItemStatistics -Identity "\Marketing\Reports" | Select Subject,LastModificationTime,HasAttachments,ItemType,MessageSize | Export-CSV C:\PFItemStats.csv
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.PublicFolderIdParameter  <br/> |The _Identity_ parameter specifies the GUID or public folder name that represents a specific public folder. You can also include the path using the following format: \ _TopLevelPublicFolder\PublicFolder_ <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The _Mailbox_ parameter specifies the identity of the hierarchy public folder mailbox. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

