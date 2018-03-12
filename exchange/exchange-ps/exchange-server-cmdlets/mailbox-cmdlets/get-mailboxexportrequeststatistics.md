---
title: "Get-MailboxExportRequestStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 73c79d8c-d8c0-4389-a5ad-520c2c94909e
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-MailboxExportRequestStatistics

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-MailboxExportRequestStatistics** cmdlet to view detailed information about export requests.
  
> [!NOTE]
> This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in [Manage role groups](https://technet.microsoft.com/library/jj657480.aspx). 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxExportRequestStatistics -Identity <MailboxExportRequestIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the default statistics for the second export request for Tony Smith. The type of information returned by default includes name, mailbox, and status.
  
```
Get-MailboxExportRequestStatistics -Identity Tony\MailboxExport1
```

### Example 2

This example returns statistics for Tony Smith's mailbox and exports the report to a .csv file.
  
```
Get-MailboxExportRequestStatistics -Identity Tony\MailboxExport | Export-CSV \\SERVER01\ExportRequest_Reports\Tony_Exportstats.csv
```

### Example 3

This example returns additional information about the export request for Tony Smith's mailbox by using the _IncludeReport_ parameter and by pipelining the results to the **Format-List** command. (The export request was created using the **New-MailboxExportRequest**.)
  
```
Get-MailboxExportRequestStatistics -Identity Tony\LegalHold -IncludeReport | Format-List
```

### Example 4

This example returns default statistics for an export request being processed by the instance of MRS running on the server CAS01. This command only returns information for export requests currently being processed by an instance of MRS. If the request is already finished, it won't be returned.
  
```
Get-MailboxExportRequestStatistics -RequestQueue MailboxDatabase01
```

### Example 5

This example returns additional information for all the export requests that have a status of  `Failed` by using the _IncludeReport_ parameter, and then saves the information to the text file AllExportReports.txt.
  
```
Get-MailboxExportRequest -Status Failed | Get-MailboxExportRequestStatistics -IncludeReport | Format-List > AllExportReports.txt
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can pipeline the **Get-MailboxExportRequestStatistics** cmdlet from the[Get-MailboxExportRequest](get-mailboxexportrequest.md) cmdlet.
  
The _RequestQueue_ parameter syntax set is for debugging purposes only.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.MailboxReplicationService.MailboxExportRequestIdParameter  <br/> |The _Identity_ parameter specifies the identity of the export request. By default, export requests are named < _alias_>\MailboxExport _X_ (where _X_ = 0-9). If you specified a name for the export request when it was created by using the[New-MailboxExportRequest](new-mailboxexportrequest.md) cmdlet, use the following syntax: < _alias_>\< _name_>.  <br/> This parameter can't be used with the _RequestGuid_, or _RequestQueue_ parameters. <br/> |
| _RequestQueue_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _RequestQueue_ parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example: <br/>  Database GUID <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Diagnostic_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Diagnostic_ switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DiagnosticArgument_ <br/> |Optional  <br/> |System.String  <br/> |The _DiagnosticArgument_ parameter modifies the results that are returned by using the _Diagnostic_ switch. Typically, you use the _Diagnostic_ switch and the _DiagnosticArgument_ parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IncludeReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeReport_ switch specifies whether to return additional details, which can be used for troubleshooting. <br/> |
| _ReportOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ReportOnly_ switch returns the results as an array of report entries. You don't need to specify a value with this switch. <br/> |
| _RequestGuid_ <br/> |Optional  <br/> |System.Guid  <br/> |The _RequestGuid_ parameter specifies the unique identifier for the export request. To find the export request GUID, use the[Get-MailboxExportRequest](get-mailboxexportrequest.md) cmdlet. If you specify the _RequestGuid_ parameter, you must also specify the _RequestQueue_ parameter. You can't use this parameter in conjunction with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

