---
title: "New-UMAutoAttendant"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d439154c-eba7-4783-a7a3-0e73556eedef
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-UMAutoAttendant

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-UMAutoAttendant** cmdlet to create a Unified Messaging (UM) auto attendant.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-UMAutoAttendant -Name <String> -UMDialPlan <UMDialPlanIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-DTMFFallbackAutoAttendant <UMAutoAttendantIdParameter>] [-PilotIdentifierList <MultiValuedProperty>] [-SpeechEnabled <$true | $false>] [-Status <Enabled | Disabled>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the UM auto attendant MyUMAutoAttendant that can accept incoming calls using the extension number 55000 but isn't speech-enabled.
  
```
New-UMAutoAttendant -Name MyUMAutoAttendant -UMDialPlan MyUMDialPlan -PilotIdentifierList 55000 -Status Enabled
```

### Example 2

This example creates the speech-enabled UM auto attendant MyUMAutoAttendant using the extension numbers 56000 and 56100 that can accept incoming calls.
  
```
New-UMAutoAttendant -Name MyUMAutoAttendant -UMDialPlan MyUMDialPlan -PilotIdentifierList 56000,56100 -SpeechEnabled $true -Status Enabled
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-UMAutoAttendant** cmdlet creates one or more UM auto attendants. UM auto attendants have a forest-wide scope in the configuration container in Active Directory. When you create a UM auto attendant, the auto attendant isn't speech-enabled or able to answer incoming calls by default. The auto attendant is linked to a single UM dial plan that contains a list of extension numbers. Linking the UM auto attendant to the UM dial plan enables the associated Mailbox servers to answer incoming calls using the UM auto attendant.
  
After this task is completed, a UM auto attendant is created.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the display name for the UM auto attendant. The display name for the UM auto attendant can contain as many as 64 characters. <br/> |
| _UMDialPlan_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The _UMDialPlan_ parameter specifies the UM dial plan identifier for the UM dial plan to be associated with this UM auto attendant. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _DTMFFallbackAutoAttendant_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMAutoAttendantIdParameter  <br/> |The _DTMFFallbackAutoAttendant_ parameter specifies a secondary UM auto attendant. A secondary UM auto attendant can be used only if the _SpeechEnabled_ parameter is set to `$true`.  <br/> |
| _PilotIdentifierList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _PilotIdentifierList_ parameter specifies a list of one or more pilot numbers. Pilot numbers route incoming calls to Mailbox servers. The calls are then answered by the UM auto attendant. <br/> |
| _SpeechEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _SpeechEnabled_ parameter specifies whether the UM auto attendant is speech-enabled. The default value is `$true`. If this parameter is omitted, or if the value is  `$false`, the UM auto attendant isn't speech-enabled.  <br/> |
| _Status_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.StatusEnum  <br/> |The _Status_ parameter specifies whether the UM auto attendant being created will be enabled. If this parameter isn't supplied, the UM auto attendant is created but left in a disabled state. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

