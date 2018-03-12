---
title: "Get-MoveRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 2/1/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 3f8aa1a6-ed8c-4220-9cc7-dd615203f5c5
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MoveRequest

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MoveRequest** cmdlet to view the detailed status of an ongoing asynchronous mailbox move that was initiated by using the **New-MoveRequest** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MoveRequest [-Identity <MoveRequestIdParameter>] [-IncludeSoftDeletedObjects <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the status of the ongoing mailbox move for Tony Smith's mailbox (tony@contoso.com).
  
```
Get-MoveRequest -Identity 'tony@contoso.com'
```

### Example 2

This example retrieves the status of ongoing mailbox moves to the target database DB05.
  
```
Get-MoveRequest -MoveStatus InProgress -TargetDatabase DB05
```

### Example 3

This example retrieves the status of move requests in the FromDB01ToDB02 batch that completed, but had warnings.
  
```
Get-MoveRequest -BatchName "FromDB01ToDB02" -MoveStatus CompletedWithWarning
```

## Detailed Description
<a name="DetailedDescription"> </a>

The search criteria for the **Get-MoveRequest** cmdlet is a Boolean **And** statement. If you use multiple parameters, it narrows your search and reduces your search results.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _BatchName_ <br/> |Optional  <br/> |System.String  <br/> |The  _BatchName_ parameter specifies the name that was given to a batch move request. <br/> You can't use this parameter with the  _Identity_ parameter. <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Credential_ parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. <br/> This parameter requires the creation and passing of a credential object. This credential object is created by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Flags_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.RequestFlags  <br/> | The _Flags_ parameter specifies the move type to retrieve information for. The following values may be used: <br/>  `CrossOrg` <br/>  `HighPriority` <br/>  `IntraOrg` <br/>  `Join` <br/>  `MoveOnlyArchiveMailbox` <br/>  `MoveOnlyPrimaryMailbox` <br/>  `None` <br/>  `Offline` <br/>  `Protected` <br/>  `Pull` <br/>  `Push` <br/>  `RemoteLegacy` <br/>  `Split` <br/>  `Suspend` <br/>  `SuspendWhenReadyToComplete` <br/>  `TargetIsAggregatedMailbox` <br/> |
| _HighPriority_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _HighPriority_ parameter specifies that the cmdlet returns requests that were created with the _HighPriority_ flag. The _HighPriority_ flag indicates that the request should be processed before other lower priority requests in the queue. <br/> You can't use this parameter with the  _Identity_ parameter. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.MoveRequestIdParameter  <br/> | The _Identity_ parameter specifies the identity of the move request, which is the identity of the mailbox or mail user. You can use any value that uniquely identifies the mailbox or mail user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  You can use this parameter with the following parameters: <br/>  _BatchName_ <br/>  _HighPriority_ <br/>  _MoveStatus_ <br/>  _Offline_ <br/>  _Protect_ <br/>  _RemoteHostName_ <br/>  _SourceDatabase_ <br/>  _Suspend_ <br/>  _SuspendWhenReadyToComplete_ <br/>  _TargetDatabase_ <br/> |
| _IncludeSoftDeletedObjects_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _IncludeSoftDeletedObjects_ parameter specifies whether to return mailboxes that have been soft deleted. This parameter accepts `$true` or `$false`.  <br/> |
| _MoveStatus_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.RequestStatus  <br/> | The _MoveStatus_ parameter returns move requests in the specified status. You can use the following values: <br/>  `AutoSuspended` <br/>  `Completed` <br/>  `CompletedWithWarning` <br/>  `CompletionInProgress` <br/>  `Failed` <br/>  `InProgress` <br/>  `None` <br/>  `Queued` <br/>  `Suspended` <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Offline_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Offline_ parameter specifies whether to return mailboxes that are being moved in offline mode. This parameter accepts `$true` or `$false`.  <br/> You can't use this parameter with the  _Identity_ parameter. <br/> |
| _OrganizationalUnit_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> | The _OrganizationalUnit_ parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the **Get-OrganizationalUnit** cmdlet. You can use any value that uniquely identifies the OU or domain. For example: <br/>  Name <br/>  Canonical name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Protect_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Protect_ parameter returns mailboxes being moved in protected mode. This parameter accepts `$true` or `$false`.  <br/> You can't use this parameter with the  _Identity_ parameter. <br/> |
| _ProxyToMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | This parameter is available only in the cloud-based service. <br/>  The _ProxyToMailbox_ parameter filters the results by the location of the specified mailbox (also known asproxying). You can use any value that uniquely identifies the mailbox.  <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _RemoteHostName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The  _RemoteHostName_ parameter specifies the FQDN of the cross-forest organization from which you're moving the mailbox. <br/> You can't use this parameter with the  _Identity_ parameter. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SortBy_ <br/> |Optional  <br/> |System.String  <br/> | The _SortBy_ parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order. <br/>  If the default view doesn't include the property you're sorting by, you can append the command with `| Format-Table -Auto <Property1>,<Property2>...` to create a new view that contains all of the properties that you want to see. Wildcards (*) in the property names are supported. <br/>  You can sort by the following properties: <br/> **Name** <br/> **DisplayName** <br/> **Alias** <br/> |
| _SourceDatabase_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _SourceDatabase_ parameter specifies that all mailboxes being moved from the specified source database are returned. You can use the following values: <br/>  GUID of the database <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Suspend_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Suspend_ parameter specifies whether to return mailboxes with moves that have been suspended. This parameter accepts `$true` or `$false`.  <br/> You can't use this parameter with the  _Identity_ parameter. <br/> |
| _SuspendWhenReadyToComplete_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _SuspendWhenReadytoComplete_ parameter specifies whether to return mailboxes that have been moved with the **New-MoveRequest** command and its _SuspendWhenReadyToComplete_ switch. This parameter accepts `$true` or `$false`.  <br/> You can't use this parameter with the  _Identity_ parameter. <br/> |
| _TargetDatabase_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _TargetDatabase_ parameter specifies whether to return all mailboxes that are being moved to the specified target database. You can use the following values: <br/>  GUID of the database <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

