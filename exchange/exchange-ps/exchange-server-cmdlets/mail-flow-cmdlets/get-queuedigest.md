---
title: "Get-QueueDigest"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 64a6d710-0297-453b-aa35-3ae0a65bd81e
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-QueueDigest

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-QueueDigest** cmdlet to view information about message delivery queues across database availability groups (DAGs) Active Directory sites, or Active Directory forests in your organization.
  
> [!NOTE]
> By default, the **Get-QueueDigest** cmdlet displays delivery queues that contain ten or more messages, and the results are between one and two minutes old. For instructions on how to change these default values, see **Configure Get-QueueDigest**. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-QueueDigest -Dag <MultiValuedProperty> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns information about all queues in the Active Directory forest.
  
```
Get-QueueDigest -Forest
```

### Example 2

This example returns information about all queues in the DAG named DAG01.
  
```
Get-QueueDigest -Dag DAG01
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Dag_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Dag_ parameter filters the delivery queue results by DAG. You can specify any value that uniquely identifies the DAG. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks ("). <br/> You can't use the _Dag_ parameter with the _Server_, _Site_ or _Forest_ parameters. <br/> |
| _Forest_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Forest_ switch filters the delivery queue results by Active Directory forest. You don't need to specify a value with the _Forest_ switch. <br/> You can't use the _Forest_ switch with the _Server_, _Site_ or _Dag_ parameters. <br/> |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Server_ parameter filters the delivery queue results by Exchange server. You can specify any value that uniquely identifies the server. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks ("). <br/> You can't use the _Server_ parameter with the _Dag_, _Site_ or _Forest_ parameters. <br/> |
| _Site_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Site_ parameter filters the delivery queue results by Active Directory site. You can specify any value that uniquely identifies the site. You can specify multiple sites separated by commas. <br/> You can't use the _Site_ parameter with the _Server_, _Dag_ or _Forest_ parameters. <br/> |
| _DetailsLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Net.DiagnosticsAggregation.DetailsLevel  <br/> |The _DetailsLevel_ parameter specifies the level of detail to display in the results. Valid values for this parameter are `None`,  `Normal` and `Verbose`. The default value is  `Normal`.  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> |The _Filter_ parameter specifies one or more queues by using OPath filter syntax. The OPath filter includes a queue property name followed by a comparison operator and value, for example, `{NextHopDomain -eq "contoso.com"}`. For details about filterable queue properties and comparison operators, see [Queue properties](https://technet.microsoft.com/library/bb125237.aspx) and[Find queues and messages in queues in the Exchange Management Shell](https://technet.microsoft.com/library/aa998047.aspx).  <br/> You can specify multiple criteria by using the **and** comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks ("). <br/> |
| _GroupBy_ <br/> |Optional  <br/> |Microsoft.Exchange.Net.DiagnosticsAggregation.QueueDigestGroupBy  <br/> | The _GroupedBy_ parameter sorts the messages in the delivery queue results. Valid values for this parameter are: <br/>  `DeliveryType` <br/>  `LastError` <br/>  `NextHopCategory` <br/>  `NextHopDomain` <br/>  `NextHopKey` <br/>  `RiskLevel` <br/>  `Status` <br/>  `ServerName` <br/>  `OutboundIPPool` <br/>  The default value is `NextHopDomain`.  <br/> |
| _IncludeE14Servers_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter filters the delivery queue results by the number of messages in the queue. Valid input for this parameter is an integer. The default value is 1000. For example, if you specify the value 50, the command displays the 50 queues that contain the most messages. <br/> |
| _Timeout_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _Timeout_ parameter specifies the number of seconds before the operation times out. The default value is 10 seconds. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

