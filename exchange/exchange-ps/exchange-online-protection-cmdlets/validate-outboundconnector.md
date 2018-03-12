---
title: "Validate-OutboundConnector"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 5/23/2016
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 49bbc944-c55d-4c85-bf6b-63669a601621
description: "This cmdlet is available only in the cloud-based service."
---

# Validate-OutboundConnector

This cmdlet is available only in the cloud-based service.
  
Use the **Validate-OutboundConnector** cmdlet to test the settings of Outbound connectors in Office 365.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Validate-OutboundConnector -Identity <OutboundConnectorIdParameter> -Recipients <MultiValuedProperty> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests the Outbound connector named Contoso.com Outbound Connector.
  
```
Validate-OutboundConnector -Identity "Contoso.com Outbound Connector" -Recipients laura@contoso.com,julia@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Validate-OutboundConnector** cmdlet performs two tests on the specified connector:
  
- SMTP connectivity to each smart host that's defined on the connector.
    
- Send test email messages to one or more recipients in the domain that's configured on the connector.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.OutboundConnectorIdParameter  <br/> | The _Identity_ parameter specifies the Outbound connector that you want to test. You can use any value that uniquely identifies the connector. For example: <br/>  Name <br/>  Distinguished name <br/>  GUID <br/> |
| _Recipients_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Recipients_parameter specifies one or more email addresses to send a test message to. The email addresses need to be in the domain that's configured on the connector.  <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

