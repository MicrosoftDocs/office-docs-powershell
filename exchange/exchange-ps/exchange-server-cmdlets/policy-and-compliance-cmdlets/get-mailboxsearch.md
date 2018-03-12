---
title: "Get-MailboxSearch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a2f3ab70-6ec6-4c06-b862-f32d498c3ef8
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxSearch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxSearch** cmdlet to view mailbox searches that are in progress, complete, or stopped.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxSearch [-Identity <EwsStoreObjectIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves a list of all mailbox searches.
  
```
Get-MailboxSearch -ResultSize "unlimited"
```

### Example 2

This example retrieves all properties for the mailbox search Project Hamilton.
  
```
Get-MailboxSearch "Project Hamilton" | Format-List
```

> [!NOTE]
> The _Identity_ parameter is a positional parameter. Positional parameters can be used without the label (Identity). For more information about positional parameters, see[Parameters](https://technet.microsoft.com/library/bc81f639-c822-4b2b-a692-694c43f5f57e.aspx). 
  
### Example 3

This example retrieves the In-Place Holds that a user is placed on. The first command outputs GUIDs of In-Place Holds. The last command retrieves a mailbox search based on the GUID of the In-Place Hold that the user is placed on.
  
```
(Get-Mailbox Mark).InPlaceHolds; Get-MailboxSearch -InPlaceHoldIdentity 9953d0f0fd03415e949d4b41c5a28cbb
```

## Detailed Description
<a name="DetailedDescription"> </a>

In on-premises Exchange and Exchange Online, a mailbox search is used to perform an In-Place eDiscovery or to place users on an In-Place Hold. Use the **Get-MailboxSearch** cmdlet to retrieve details of either type of mailbox search.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _InPlaceHoldIdentity_ <br/> |Required  <br/> |System.String  <br/> |The _InPlaceHoldIdentity_ parameter specifies the GUID of an In-Place Hold. Use this parameter to search for an In-Place Hold that a user is placed on. GUIDs of all In-Place Holds that a user is placed on are added to the user's **InPlaceHolds** property. You can retrieve the property by using the **Get-Mailbox** cmdlet. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.EwsStoreObjectIdParameter  <br/> | The _Identity_ parameter specifies the name of the search query. If a name isn't provided, all mailbox search queries are returned. <br/>  To improve the performance of this cmdlet in Exchange Online, some mailbox search properties aren't returned if you don't specify the name of a mailbox search. These properties are: <br/>  SourceMailboxes <br/>  Sources <br/>  SearchQuery <br/>  ResultsLink <br/>  PreviewResultsLink <br/>  Errors <br/>  To view these properties, you have to provide the name of a mailbox search. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _ShowDeletionInProgressSearches_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

