---
title: "Get-MailboxDatabase"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: e12bd6d3-3793-49cb-9ab6-948d42dd409e
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-MailboxDatabase

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-MailboxDatabase** cmdlet to retrieve one or more mailbox database objects from a server or organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxDatabase [-Identity <DatabaseIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves information about all the mailbox databases in the Exchange organization, including Exchange 2010 mailbox databases.
  
```
Get-MailboxDatabase -IncludePreExchange2013
```

### Example 2

This example retrieves information about MailboxDatabase01 on Server01. This example also retrieves the status information, and pipes the output to the **Format-List** cmdlet so that you can view all the information about the mailbox database.
  
```
Get-MailboxDatabase -Identity MailboxDatabase01 -Server Server01 -Status | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

If you use the **Get-MailboxDatabase** cmdlet with no parameters, it retrieves information about all mailbox databases in the Exchange organization. If you use the **Get-MailboxDatabase** cmdlet with the _Server_ parameter, it retrieves information about all mailbox databases on the server that you specify.
  
The following list describes the properties that are returned in the results.
  
- **Name**: Name of the database.
    
- **Server**: Server hosting the database.
    
- **Recovery**: Specifies whether the new database is designated as a recovery database.
    
- **ReplicationType**: Replication type of the database.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _Server_ parameter specifies the name of the server from which to retrieve mailbox database information. If you specify this parameter, the command retrieves information about all of the mailbox databases on the server that you specify. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _DumpsterStatistics_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DumpsterStatistics_ switch specifies that transport dumpster statistics be returned with the database status. You don't need to specify a value with this switch. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Identity_ parameter specifies a mailbox database. You can use the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/>  Database name <br/>  If you have multiple databases with the same name, the command retrieves all databases with the same name in the specified scope. <br/> |
| _IncludeCorrupted_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _IncludePreExchange2013_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludePreExchange2013_ switch parameter specifies whether to return information about Exchange 2010 mailbox databases. You don't need to specify a value with this switch. <br/> |
| _Status_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Status_ switch specifies whether to retrieve the available free space in the database root and information about the following attributes: <br/> **BackupInProgress** <br/> **Mounted** <br/> **OnlineMaintenanceInProgress** <br/>  You don't need to specify a value with this switch. <br/>  If you specify this switch, you should format the output in such a way that you can view the additional attributes, for example, pipe the output to the **Format-List** cmdlet. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

