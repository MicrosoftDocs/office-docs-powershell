---
title: "Get-StoreUsageStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 0fd00fe0-de0e-48d2-b9fd-44220455cb8e

description: "This cmdlet is available only in on-premises Exchange."
---

# Get-StoreUsageStatistics

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-StoreUsageStatistics** cmdlet to aid in diagnosing performance issues with your servers or databases.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-StoreUsageStatistics -Identity <GeneralMailboxOrMailUserIdParameter> [-CopyOnServer <ServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

Below are some examples of how to use the **Get-StoreUsageStatistics** cmdlet.
  
### Example 1

This example retrieves store usage statistics for all active databases on server EX1.
  
```
Get-StoreUsageStatistics -Server EX1 | ft -auto
```

### Example 2

This example retrieves store usage statistics for all active and passive databases on server EX1.
  
```
Get-StoreUsageStatistics -Server EX1 -IncludePassive | ft -auto
```

### Example 3

This example retrieves store usage statistics for database DB1, and sorts the output by the 10 highest log file generators.
  
```
Get-StoreUsageStatistics -Database DB1 | Sort-Object LogRecordBytes -desc | Select-Object -First 10 | ft DigestCategory, *guid, LogRecordBytes, *time* -auto
```

## Detailed Description
<a name="DetailedDescription"> </a>

The Microsoft Exchange Information Store collects per-user information on latency, input/output (I/O), page counts, processor usage, and _TimeInServer_. The _TimeInServer_ metric represents the total time that synchronous and asynchronous requests spend in the Microsoft Exchange Information Store for a user's mailbox. You can retrieve this resource information in the Microsoft Exchange Information Store for the 25 highest usage accounts on a specified database. Usage of a mailbox is defined as the amount of server time spent in performing operations for that mailbox. The cmdlet reports the top 25 users for every one-minute period for the last 10 minutes (250 objects per ten-minute interval). The resource usage is an indicator of the load that different users are placing on the server.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Database_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Database_ parameter specifies the name of the mailbox database. When you specify a value for the _Database_ parameter, the Exchange Management Shell returns usage statistics for the top 25 mailboxes on the database specified. <br/>  You can use the following value: <br/> _Database_ <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.GeneralMailboxOrMailUserIdParameter  <br/> | The _Identity_ parameter specifies a mailbox. When you specify a value for the _Identity_ parameter, the command looks up the mailbox specified in the _Identity_ parameter, connects to the server where the mailbox resides, and returns the statistics for the mailbox. You can use one of the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  User principal name (UPN) <br/>  Legacy Exchange DN <br/>  SMTP address <br/>  Alias <br/> > [!NOTE]>  Results are returned for the mailbox only if it's one of the top 25 users of store resources.          |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the server from which you want to obtain mailbox statistics. You can use one of the following values: <br/>  Fully qualified domain name (FQDN) <br/>  NetBIOS name <br/>  When you specify a value for the _Server_ parameter, the command returns usage statistics for the top 25 mailboxes on all the active databases on the specified server. If you don't specify this parameter, the command returns logon statistics for the local server. <br/> |
| _CopyOnServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _CopyOnServer_ parameter is used to retrieve statistics from a specific database copy from the server specified with the _Server_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> |The _Filter_ parameter indicates the OPath filter used to filter recipients. <br/> |
| _IncludePassive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |Without the _IncludePassive_ parameter, the cmdlet retrieves statistics from active database copies only. Using the _IncludePassive_ parameter, you can have the cmdlet return statistics from all active and passive database copies. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

