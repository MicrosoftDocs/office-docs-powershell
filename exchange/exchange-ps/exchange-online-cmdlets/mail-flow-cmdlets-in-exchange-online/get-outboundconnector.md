---
title: "Get-OutboundConnector"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: f9140086-9f74-4446-b1e7-b195300da122
description: "This cmdlet is available only in the cloud-based service."
---

# Get-OutboundConnector

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-OutboundConnector** cmdlet to view the configuration information for an Outbound connector in your cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-OutboundConnector [-Identity <OutboundConnectorIdParameter>] [-IncludeTestModeConnectors <$true | $false>] [-IsTransportRuleScoped <$true | $false>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays detailed information about the Outbound connector named Contoso Outbound Connector.
  
```
Get-OutboundConnector "Contoso Outbound Connector" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

Outbound connectors send email messages to remote domains that require specific configuration options.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OutboundConnectorIdParameter  <br/> | The _Identity_ parameter specifies the Outbound connector that you want to view. You can use any value that uniquely identifies the connector. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _IncludeTestModeConnectors_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _IncludeTestModeConnectors_ parameter filters the results by Outbound connectors that are in test mode. Valid values are: <br/>  `$true`: Only Outbound connectors that are in test mode are returned in the results.  <br/>  `$false`: All Outbound connectors that aren't in test mode are returned in the results.. This is the default value.  <br/>  You configure an Outbound connector in test mode by using the _TestMode_ parameter on the **New-OutboundConnector** or **Set-OutboundConnector** cmdlets. <br/> |
| _IsTransportRuleScoped_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _IsTransportRuleScoped_ parameter filters the results by Outbound connectors that are scoped to transport rules (also known as mail flow rules). Valid values are: <br/>  `$true`: Only Outbound connectors that are scoped to transport rules are returned in the results.  <br/>  `$false`: All Outbound connectors that aren't scoped to transport rules are returned in the results.. This is the default value.  <br/>  You scope a transport rule to a specific Outbound connector by using the _RouteMessageOutboundConnector_ parameter on the **New-TransportRule** or **Set-TransportRule** cmdlets. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

