---
title: "Get-MailboxStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: cec76f70-941f-4bc9-b949-35dcc7671146

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxStatistics

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxStatistics** cmdlet to obtain information about a mailbox, such as the size of the mailbox, the number of messages it contains, and the last time it was accessed. In addition, you can get the move history or a move report of a completed move request.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxStatistics -Identity <GeneralMailboxOrMailUserIdParameter> [-Archive <SwitchParameter>] [-CopyOnServer <ServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the mailbox statistics for the mailbox of the user Ayla Kol by using its associated alias AylaKol.
  
```
Get-MailboxStatistics -Identity AylaKol
```

### Example 2

This example retrieves the mailbox statistics for all mailboxes on the server MailboxServer01.
  
```
Get-MailboxStatistics -Server MailboxServer01
```

### Example 3

This example retrieves the mailbox statistics for the specified mailbox.
  
```
Get-MailboxStatistics -Identity contoso\chris
```

### Example 4

This example retrieves the mailbox statistics for all mailboxes in the specified mailbox database.
  
```
Get-MailboxStatistics -Database "Mailbox Database"
```

### Example 5

This example retrieves the mailbox statistics for the disconnected mailboxes for all mailbox databases in the organization. The **-ne** operator means not equal.
  
```
Get-MailboxDatabase | Get-MailboxStatistics -Filter 'DisconnectDate -ne $null'
```

### Example 6

This example retrieves the mailbox statistics for a single disconnected mailbox. The value for the _StoreMailboxIdentity_ parameter is the mailbox GUID of the disconnected mailbox. You can also use the LegacyDN.
  
```
Get-MailboxStatistics -Database "Mailbox Database" -StoreMailboxIdentity 3b475034-303d-49b2-9403-ae022b43742d
```

### Example 7

This example returns the summary move history for the completed move request for Ayla Kol's mailbox. If you don't pipeline the output to the **Format-List** cmdlet, the move history doesn't display.
  
```
Get-MailboxStatistics -Identity AylaKol -IncludeMoveHistory | Format-List
```

### Example 8

This example returns the detailed move history for the completed move request for Ayla Kol's mailbox. This example uses a temporary variable to store the mailbox statistics object. If the mailbox has been moved multiple times, there are multiple move reports. The last move report is always  `MoveReport[0]`.
  
```
$temp=Get-MailboxStatistics -Identity AylaKol -IncludeMoveHistory; $temp.MoveHistory[0]
```

### Example 9

This example returns the detailed move history and a verbose detailed move report for Ayla Kol's mailbox. This example uses a temporary variable to store the move request statistics object and outputs the move report to a CSV file.
  
```
$temp=Get-MailboxStatistics -Identity AylaKol -IncludeMoveReport; $temp.MoveHistory[0] | Export-CSV C:\MoveReport_AylaKol.csv
```

## Detailed Description
<a name="DetailedDescription"> </a>

On Mailbox servers only, you can use the **Get-MailboxStatistics** cmdlet without parameters. In this case, the cmdlet returns the statistics for all mailboxes on all databases on the local server.
  
> [!NOTE]
> The **Get-MailboxStatistics** cmdlet requires at least one of the following parameters to complete successfully: _Server_, _Database_, or _Identity_. 
  
You can use the **Get-MailboxStatistics** cmdlet to return detailed move history and a move report for completed move requests to troubleshoot a move request. To view the move history, you must pass this cmdlet as an object. Move histories are retained in the mailbox database and are numbered incrementally, and the last executed move request is always numbered 0. For more information, see "Example 7," "Example 8," and "Example 9" in this topic.
  
> [!NOTE]
> You can only see move reports and move history for completed move requests. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Database_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _Database_ parameter specifies the name of the mailbox database. When you specify a value for the _Database_ parameter, the Exchange Management Shell returns statistics for all the mailboxes on the database specified. <br/>  You can use the following values: <br/>  GUID <br/>  Database <br/>  This parameter accepts pipeline input from the **Get-MailboxDatabase** cmdlet. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.GeneralMailboxOrMailUserIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to return statistics for. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _Server_ parameter specifies the server from which you want to obtain mailbox statistics. You can use one of the following values: <br/>  Fully qualified domain name (FQDN) <br/>  NetBIOS name <br/>  When you specify a value for the _Server_ parameter, the command returns statistics for all the mailboxes on all the databases, including recovery databases, on the specified server. If you don't specify this parameter, the command returns logon statistics for the local server. <br/> |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Archive_ switch parameter specifies whether to return mailbox statistics for the archive mailbox associated with the specified mailbox. <br/> You don't have to specify a value with this parameter.  <br/> |
| _AuditLog_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _CopyOnServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _CopyOnServer_ parameter is used to retrieve statistics from a specific database copy on the server specified with the _Server_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Filter_ parameter specifies a filter to filter the results of the **Get-MailboxStatistics** cmdlet. For example, to display all disconnected mailboxes on a specific mailbox database, use the following syntax for this parameter: `-Filter 'DisconnectDate -ne $null'` <br/> |
| _IncludeMoveHistory_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeMoveHistory_ switch specifies whether to return additional information about the mailbox that includes the history of a completed move request, such as status, flags, target database, bad items, start times, end times, duration that the move request was in various stages, and failure codes. <br/> |
| _IncludeMoveReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeMoveReport_ switch specifies whether to return a verbose detailed move report for a completed move request, such as server connections and move stages. <br/> > [!NOTE]> Because the output of this command is verbose, you should send the output to a .CSV file for easier analysis.           |
| _IncludePassive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> Without the _IncludePassive_ parameter, the cmdlet retrieves statistics from active database copies only. Using the _IncludePassive_ parameter, you can have the cmdlet return statistics from all active and passive database copies. <br/> |
| _IncludeQuarantineDetails_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _IncludeQuarantineDetails_ switch specifies whether to return additional quarantine details about the mailbox that aren't otherwise included in the results. You can use these details to determine when and why the mailbox was quarantined. <br/> Specifically, this switch returns the values of the **QuarantineDescription**, **QuarantineLastCrash** and **QuarantineEnd** properties on the mailbox. To see these values, you need use a formatting cmdlet. For example, `Get-MailboxStatistics <MailboxIdentity> -IncludeQuarantineDetails | Format-List Quarantine*`.  <br/> |
| _NoADLookup_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _NoADLookup_ switch specifies that information is retrieved from the mailbox database, and not from Active Directory. This helps improve cmdlet performance when querying a mailbox database that contains a large number of mailboxes. <br/> |
| _StoreMailboxIdentity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.StoreMailboxIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _StoreMailboxIdentity_ parameter specifies the mailbox identity when used with the _Database_ parameter to return statistics for a single mailbox on the specified database. You can use one of the following values: <br/>  MailboxGuid <br/>  LegacyDN <br/>  Use this syntax to retrieve information about disconnected mailboxes, which don't have a corresponding Active Directory object or that has a corresponding Active Directory object that doesn't point to the disconnected mailbox in the mailbox database. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

