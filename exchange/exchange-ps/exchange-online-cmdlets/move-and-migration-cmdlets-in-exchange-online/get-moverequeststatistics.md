---
title: "Get-MoveRequestStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 1baf0fd7-40e1-4d91-bab7-beff28b89e99
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MoveRequestStatistics

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MoveRequestStatistics** cmdlet to view detailed information about move requests.
  
> [!NOTE]
> Some of the failure messages that are returned by this cmdlet are temporary and don't indicate that a request has actually failed. If the **Status** value is `Queued` or `InProgress`, then the request is proceeding normally. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MoveRequestStatistics -Identity <MoveRequestIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the default statistics for Tony Smith's mailbox, which include the status, mailbox size, archive mailbox size, and the percentage complete.
  
```
Get-MoveRequestStatistics -Identity Tony@contoso.com
```

### Example 2

This example returns the detailed statistics for Tony Smith's mailbox by pipelining the results to the **Format-List** command.
  
```
Get-MoveRequestStatistics -Identity "contoso\tony" | Format-List
```

### Example 3

This example returns additional information about the mailbox move for Tony Smith's mailbox and exports the report to a .csv file.
  
```
Get-MoveRequestStatistics -Identity Tony@contoso.com -IncludeReport | Export-CSV C:\MRStats.csv
```

### Example 4

This example returns default statistics for all mailboxes whose move requests are in progress or haven't been cleared for the database MBXDB02.
  
```
Get-MoveRequestStatistics -MoveRequestQueue "MBXDB02"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The  _MoveRequestQueue_ parameter syntax set is for debugging purposes only.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.MailboxReplicationService.MoveRequestIdParameter  <br/> | The _Identity_ parameter specifies the identity of the mailbox or mail user. You can use one of the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/>  _Domain\Account_ <br/>  User principal name (UPN) <br/>  Legacy Exchange DN <br/>  SMTP address <br/>  Alias <br/>  You can use this parameter with the _MoveRequestQueue_ or _MailboxGuid_ parameters. <br/> |
| _MoveRequestQueue_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _MoveRequestQueue_ parameter specifies the mailbox database on which the move request resides. You can use one of the following values: <br/>  GUID of the database <br/>  Database name <br/>  You can't use this parameter can't be used with the _Identity_ or _MRSInstance_ parameters. <br/> |
| _Diagnostic_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Diagnostic_ switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DiagnosticArgument_ <br/> |Optional  <br/> |System.String  <br/> |The  _DiagnosticArgument_ parameter modifies the results that are returned by using the _Diagnostic_ switch. Typically, you use the _Diagnostic_ switch and the _DiagnosticArgument_ parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IncludeReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeReport_ switch specifies whether to return additional details, which can be used for troubleshooting. <br/> |
| _MailboxGuid_ <br/> |Optional  <br/> |System.Guid  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _MailboxGuid_ parameter specifies the GUID of a mailbox for which you want to view the move request statistics. <br/> This parameter can't be used with the  _Identity_ parameter. <br/> |
| _ProxyToMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | This parameter is available only in the cloud-based service. <br/>  The _ProxyToMailbox_ parameter filters the results by the location of the specified mailbox (also known asproxying). You can use any value that uniquely identifies the mailbox.  <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _ReportOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ReportOnly_ switch returns the results as an array of report entries. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

