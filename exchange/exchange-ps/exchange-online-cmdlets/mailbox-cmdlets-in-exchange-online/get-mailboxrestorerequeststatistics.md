---
title: "Get-MailboxRestoreRequestStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 3/17/2017
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: b28d5835-1f8f-4cd9-8f72-9d592adef3d9
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxRestoreRequestStatistics

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxRestoreRequestStatistics** cmdlet to view detailed information about restore requests.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxRestoreRequestStatistics -Identity <MailboxRestoreRequestIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the default statistics for the restore request with the identity Tony\MailboxRestore1. The type of information returned by default includes name, mailbox, status, and percent complete.
  
```
Get-MailboxRestoreRequestStatistics -Identity "Tony\MailboxRestore1"
```

### Example 2

This example returns the statistics for Tony Smith's mailbox and exports the report to a CSV file.
  
```
Get-MailboxRestoreRequestStatistics -Identity Tony\MailboxRestore | Export-CSV \\SERVER01\RestoreRequest_Reports\Tony_Restorestats.csv
```

### Example 3

This example returns additional information about the restore request for Tony Smith's mailbox by using the  _IncludeReport_ parameter and by pipelining the results to the **Format-List** command.
  
```
Get-MailboxRestoreRequestStatistics -Identity Tony\MailboxRestore -IncludeReport | Format-List
```

### Example 4

This example returns additional information for all the restore requests that have a status of  `Failed` by using the _IncludeReport_ parameter, and then saves the information to the text file C:\Reports\AllRestoreReports.txt.
  
```
Get-MailboxRestoreRequest -Status Failed | Get-MailboxRestoreRequestStatistics -IncludeReport | Format-List > C:\Reports\AllRestoreReports.txt
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.MailboxReplicationService.MailboxRestoreRequestIdParameter  <br/> |The  _Identity_ parameter specifies the identity of the restore request. The _Identity_ parameter consists of the alias of the mailbox to be restored and the name that was specified when the restore request was created. The identity of the restore request uses the following syntax: < _alias_>\< _name_>.  <br/> If you didn't specify a name for the restore request when it was created, Exchange automatically generated the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestore _X_ (where _X_ = 1-9). <br/> This parameter can't be used in conjunction with the  _MRSInstance_ or _RequestQueue_ parameters. <br/> |
| _RequestQueue_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _RequestQueue_ parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example: <br/>  Database GUID <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Diagnostic_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Diagnostic_ switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DiagnosticArgument_ <br/> |Optional  <br/> |System.String  <br/> |The  _DiagnosticArgument_ parameter modifies the results that are returned by using the _Diagnostic_ switch. Typically, you use the _Diagnostic_ switch and the _DiagnosticArgument_ parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IncludeReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeReport_ switch specifies whether to return additional details, which can be used for troubleshooting. <br/> |
| _ReportOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ReportOnly_ switch returns the results as an array of report entries. You don't need to specify a value with this switch. <br/> |
| _RequestGuid_ <br/> |Optional  <br/> |System.Guid  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _RequestGuid_ parameter specifies the unique identifier for the restore request. To find the GUID, use the **Get-MailboxRestoreRequest** cmdlet. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

