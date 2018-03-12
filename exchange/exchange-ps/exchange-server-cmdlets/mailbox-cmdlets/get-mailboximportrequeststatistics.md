---
title: "Get-MailboxImportRequestStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 3/17/2017
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 678ffbbb-469d-4681-ba2e-33d4e0afe94f
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxImportRequestStatistics

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxImportRequestStatistics** cmdlet to view detailed information about import requests.
  
> [!NOTE]
> This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in [Manage role groups](https://technet.microsoft.com/library/jj657480.aspx). 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxImportRequestStatistics -Identity <MailboxImportRequestIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the default statistics for the second import request for Tony Smith. The type of information returned by default includes name, mailbox, and status.
  
```
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1
```

### Example 2

This example returns the detailed statistics for the second import request for Tony Smith's mailbox and exports the report to a .csv file.
  
```
Get-MailboxImportRequestStatistics -Identity Tony\MailboxImport1 | Export-CSV \\SERVER01\ImportRequest_Reports\Tony_Importstats.csv
```

### Example 3

This example returns additional information about the import request for Tony Smith's mailbox by using the _IncludeReport_ parameter and by pipelining the results to the **Format-List** command.
  
```
Get-MailboxImportRequestStatistics -Identity Tony\LegalHold -IncludeReport | Format-List
```

### Example 4

This example returns additional information for all the import requests that have a status of  `Failed` by using the _IncludeReport_ parameter, and then saves the information to the text file AllImportReports.txt.
  
```
Get-MailboxImportRequest -Status Failed | Get-MailboxImportRequestStatistics -IncludeReport | Format-List > AllImportReports.txt
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can pipeline the **Get-MailboxImportRequestStatistics** cmdlet from the **Get-MailboxImportRequest** cmdlet.
  
The _RequestQueue_ parameter syntax set is for debugging purposes only.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.MailboxReplicationService.MailboxImportRequestIdParameter  <br/> |The _Identity_ parameter specifies the identity of the import request. By default, import requests are named < _alias_>\MailboxImport _X_ (where _X_ = 0-9). If you specified a name when you created the import request, use the following syntax: < _alias_>\< _name_>.  <br/> |
| _RequestQueue_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _RequestQueue_ parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example: <br/>  Database GUID <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Diagnostic_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Diagnostic_ switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DiagnosticArgument_ <br/> |Optional  <br/> |System.String  <br/> |The _DiagnosticArgument_ parameter modifies the results that are returned by using the _Diagnostic_ switch. Typically, you use the _Diagnostic_ switch and the _DiagnosticArgument_ parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IncludeReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeReport_ switch specifies whether to return additional details, which can be used for troubleshooting. <br/> |
| _ReportOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ReportOnly_ switch returns the results as an array of report entries. You don't need to specify a value with this switch. <br/> |
| _RequestGuid_ <br/> |Optional  <br/> |System.Guid  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _RequestGuid_ parameter (together with the _RequestQueue_ parameter) specifies the unique identifier for the import request. To find the import request GUID, use the **Get-MailboxImportRequest** cmdlet. <br/> You can't use this parameter with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

