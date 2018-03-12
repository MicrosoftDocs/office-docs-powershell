---
title: "Test-MapiConnectivity"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 89c5b599-0a92-4857-880c-aea5f1e6c8bd
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Test-MapiConnectivity

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Test-MapiConnectivity** cmdlet to verify server functionality by logging on to the mailbox that you specify. If you don't specify a mailbox, the cmdlet logs on to the SystemMailbox on the database that you specify.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-MAPIConnectivity [-IncludePassive <SwitchParameter>] [-Server <ServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests connectivity to the server Server01.
  
```
Test-MapiConnectivity -Server "Server01"
```

### Example 2

This example tests connectivity to a mailbox, specified as a domain name and user name.
  
```
Test-MapiConnectivity -Identity "midwest\john"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Test-MapiConnectivity** cmdlet verifies server functionality. This cmdlet logs on to the mailbox that you specify (or to the SystemMailbox if you don't specify the _Identity_ parameter) and retrieves a list of items in the Inbox. Logging on to the mailbox tests two critical protocols used when a client connects to a Mailbox server: MAPI and LDAP. During authentication, the **Test-MapiConnectivity** cmdlet indirectly verifies that the MAPI server, Exchange store, and Directory Service Access (DSAccess) are working.
  
The cmdlet logs on to the mailbox that you specify using the credentials of the account with which you're logged on to the local computer. After a successful authentication, the **Test-MapiConnectivity** cmdlet accesses the mailbox to verify that the database is working. If a successful connection to a mailbox is made, the cmdlet also determines the time that the logon attempt occurred.
  
There are three distinct parameters that you can use with the command:  _Database_,  _Identity_, and  _Server_:
  
- The  _Database_ parameter takes a database identity and tests the ability to log on to the system mailbox on the specified database.
    
- The  _Identity_ parameter takes a mailbox identity and tests the ability to log on to a specific mailbox.
    
- The  _Server_ parameter takes a server identity and tests the ability to log on to each system mailbox on the specified server.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Database_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Database_ parameter specifies the database on which to test the connectivity to the system mailbox. If you don't specify this parameter or the _Identity_ parameter, the command tests the SystemMailbox on each active database on the server that you specify, or on the local server if you don't specify the _Server_ parameter. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.GeneralMailboxOrMailUserIdParameter  <br/> | The _Identity_ parameter specifies a mailbox to test. You can use the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/>  _Domain\Account_ <br/>  User principal name (UPN) <br/>  Legacy Exchange DN <br/>  SMTP address <br/>  Alias <br/>  This parameter accepts pipeline input from the **Get-Mailbox** or **Get-Recipient** cmdlet. If an object is piped from the **Get-Mailbox** cmdlet or **Get-Recipient** cmdlet, this parameter isn't required. <br/>  If you don't specify this parameter, the cmdlet tests the SystemMailbox on the database that you specify. <br/> |
| _ActiveDirectoryTimeout_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _ActiveDirectoryTimeout_ parameter specifies the amount of time, in seconds, allowed for each Active Directory operation to complete before the operation times out. The default value is 15 seconds. <br/> |
| _AllConnectionsTimeout_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _AllConnectionsTimeout_ parameter specifies the amount of time, in seconds, allowed for all connections to complete before the cmdlet times out. The time-out countdown doesn't begin until all information necessary to perform the connections is gathered from Active Directory.The default value is 90 seconds. <br/> |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Archive_ parameter specifies whether to test the MAPI connectivity of the personal archive associated with the specified mailbox. If you don't specify this parameter, only the primary mailbox is tested. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CopyOnServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _CopyOnServer_ parameter is used to test MAPI connectivity to a specific database copy on the servers specified with the _Server_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IncludePassive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> Without the  _IncludePassive_ parameter, the cmdlet tests MAPI connectivity from active database copies only. Using the _IncludePassive_ parameter, you can have the cmdlet test MAPI connectivity from all active and passive database copies. <br/> |
| _MonitoringContext_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _MonitoringContext_ parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values for this parameter are `$true` or `$false`. The default value is  `$false`. If you specify the value  `$true`, the monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM).  <br/> |
| _PerConnectionTimeout_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _PerConnectionTimeout_ parameter specifies the amount of time, in seconds, allowed for each connection to complete before the connection times out. The default value is 10 seconds. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Server_ parameter specifies the server on which you will test the MAPI connectivity. The command tests the MAPI connectivity to each system mailbox hosted on active databases on the specified server. <br/> If you don't specify this parameter, the command tests the mailbox on the local server.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

