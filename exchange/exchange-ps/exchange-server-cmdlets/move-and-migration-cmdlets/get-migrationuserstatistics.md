---
title: "Get-MigrationUserStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b771bb31-7f5a-462f-b5e2-ce49fde9bfe5
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MigrationUserStatistics

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MigrationUserStatistics** cmdlet to view detailed information about the migration requested for a specific user.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MigrationUserStatistics -Identity <MigrationUserIdParameter> [-Diagnostic <SwitchParameter>] [-DiagnosticArgument <String>] [-DomainController <Fqdn>] [-IncludeReport <SwitchParameter>] [-IncludeSkippedItems <SwitchParameter>] [-LimitSkippedItemsTo <Int32>] [-Partition <MailboxIdParameter>] [-SkipSubscription <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example uses the _IncludeReport_ parameter to display detailed information about the migration status for the user.
  
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -IncludeReport | FL Status,Error,Report
```

### Example 2

This example displays the number of mailbox items that failed to migrate, which are called skipped items, and information about each skipped item.
  
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com | FL SkippedItemCount,SkippedItems
```

### Example 3

This example displays results information in the _SkippedItems_ property for a maximum of 20 skipped items.
  
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -LimitSkippedItemsTo 20 | FL SkippedItemCount,SkippedItems
```

### Example 4

This example displays detailed information about users in the migration batch named StagedBatch1.
  
```
Get-MigrationUser -BatchId StagedBatch1 | Get-MigrationUserStatistics
```

### Example 5

This example displays detailed information about users from all current migration batches.
  
```
Get-MigrationUser | Get-MigrationUserStatistics
```

### Example 6

This example uses the _Diagnostic_ parameter to display detailed troubleshooting information about the migration for the user.
  
```
Get-MigrationUserStatistics -Identity davidp@corp.contoso.com -Diagnostic | FL Status,Error,DiagnosticInfo
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.User.MigrationUserIdParameter  <br/> |The _Identity_ parameter specifies the user that you want to retrieve migration information about. Use an email address as the value for this parameter. <br/> |
| _Diagnostic_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Diagnostic_ switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DiagnosticArgument_ <br/> |Optional  <br/> |System.String  <br/> |The _DiagnosticArgument_ parameter modifies the results that are returned by using the _Diagnostic_ switch. Typically, you use the _Diagnostic_ switch and the _DiagnosticArgument_ parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IncludeReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeReport_ switch specifies whether to return additional details, which can be used for troubleshooting. <br/> |
| _IncludeSkippedItems_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeSkippedItems_ switch specifies whether to include skipped items for the user. You don't need to specify a value with this switch. <br/> |
| _LimitSkippedItemsTo_ <br/> |Optional  <br/> |System.Int32  <br/> |The _LimitSkippedItemsTo_ parameter specifies the maximum number of skipped items to display information about in the _SkippedItems_ property in command output. For example, if this parameter is set to `5`, the cmdlet returns information for up to five skipped items for the specified user, even if there are more than five skipped items.  <br/> |
| _Partition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SkipSubscription_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipSubscription_ switch specifies whether to skip loading the subscription for the user. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

