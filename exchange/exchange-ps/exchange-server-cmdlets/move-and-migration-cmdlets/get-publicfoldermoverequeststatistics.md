---
title: "Get-PublicFolderMoveRequestStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 71358f53-8827-4405-94cd-dc6841fd93d2
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-PublicFolderMoveRequestStatistics

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-PublicFolderMoveRequestStatistics** cmdlet to view detailed information about public folder move requests.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PublicFolderMoveRequestStatistics -Identity <PublicFolderMoveRequestIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the default statistics for the public folder move request \PublicFolderMove.
  
```
Get-PublicFolderMoveRequestStatistics -Identity \PublicFolderMove
```

### Example 2

This example returns the detailed statistics for the move request \PublicFolderMove by pipelining the results to the **Format-List** command.
  
```
Get-PublicFolderMoveRequestStatistics -Identity \PublicFolderMove | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

The _RequestQueue_ parameter is for debugging purposes only.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.MailboxReplicationService.PublicFolderMoveRequestIdParameter  <br/> |The _Identity_ parameter specifies the identity of the public folder move request. The default public folder move request identity is \PublicFolderMove. <br/> This parameter can't be used with the _RequestQueue_ parameter. <br/> |
| _RequestQueue_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _RequestQueue_ parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example: <br/>  Database GUID <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Diagnostic_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Diagnostic_ switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DiagnosticArgument_ <br/> |Optional  <br/> |System.String  <br/> |The _DiagnosticArgument_ parameter modifies the results that are returned by using the _Diagnostic_ switch. Typically, you use the _Diagnostic_ switch and the _DiagnosticArgument_ parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IncludeReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeReport_ switch specifies whether to return additional details, which can be used for troubleshooting. <br/> |
| _ReportOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ReportOnly_ switch returns the results as an array of report entries. You don't need to specify a value with this switch. <br/> |
| _RequestGuid_ <br/> |Optional  <br/> |System.Guid  <br/> |The _RequestGuid_ parameter specifies the GUID of the public folder move request for which you want to view the request statistics. <br/> This parameter can't be used with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

