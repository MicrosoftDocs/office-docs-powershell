---
title: "Get-MailboxDatabaseCopyStatus"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 6ad690fb-3a23-41d4-b19d-666b34e62b26
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-MailboxDatabaseCopyStatus

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-MailboxDatabaseCopyStatus** cmdlet to view health and status information about one or more mailbox database copies.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxDatabaseCopyStatus [-Identity <DatabaseCopyIdParameter>] [-Local <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns status information for all copies of the database DB1. The status results are displayed in a list format.
  
```
Get-MailboxDatabaseCopyStatus -Identity DB1 | Format-List
```

### Example 2

This example returns the status for all database copies on the Mailbox server MBX1. The status results are also displayed in a list format.
  
```
Get-MailboxDatabaseCopyStatus -Server MBX1 | Format-List
```

### Example 3

This example returns the status for the copy of database DB1 on the Mailbox server MBX2. The status results are also displayed in a list format.
  
```
Get-MailboxDatabaseCopyStatus -Identity DB1\MBX2 | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

If a database is specified by using the _Identity_ parameter with the command, the status of all copies of the database is returned. If a server is specified by using the _Server_ parameter with the command, information about all database copies on the server is returned. If neither parameter is specified with the command, information about all database copies in the organization is returned.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxServerIdParameter  <br/> |The _Server_ parameter specifies that a Mailbox server returns status information for all of its mailbox database copies. This parameter can't be combined with the _Identity_ parameter. <br/> |
| _Active_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Active_ switch specifies whether to return mailbox database copy status for the active mailbox database copy only. <br/> |
| _ConnectionStatus_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ConnectionStatus_ switch is obsolete and in the process of being deprecated. Use of this switch will be ignored by the task. The information previously provided by this switch is now provided through an internal caching mechanism and, as such, the switch is no longer needed. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExtendedErrorInfo_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ExtendedErrorInfo_ switch specifies whether to return an output object containing any exception details. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseCopyIdParameter  <br/> |The _Identity_ parameter specifies the name of the database copy for which the command should gather information. The Identity parameter can be specified in the form of < _database_>\< _server_>. Specifying just < _database_> returns information for all copies of the database. This parameter can't be combined with the _Server_ parameter. <br/> |
| _Local_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Local_ switch specifies whether to return mailbox database copy status information from only the local Mailbox server. <br/> |
| _UseServerCache_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _UseServerCache_ switch specifies whether to enable a server-side remote procedure call (RPC) caching of status information for 5 seconds. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

