---
title: "Add-ServerMonitoringOverride"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 350eb7e0-3181-4de9-9934-6c8467b920c3
description: "This cmdlet is available only in on-premises Exchange."
---

# Add-ServerMonitoringOverride

This cmdlet is available only in on-premises Exchange. 
  
Use the **Add-ServerMonitoringOverride** cmdlet to override the thresholds and parameters of managed availability probes, monitors, and responders on Exchange servers.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Add-ServerMonitoringOverride [-Duration <EnhancedTimeSpan>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds a server monitoring override that disables the responder  `ActiveDirectoryConnectivityConfigDCServerReboot` on the server named EXCH03 for 20 days. Note that the value of _Identity_ is case-sensitive.
  
```
Add-ServerMonitoringOverride -Identity "AD\ActiveDirectoryConnectivityConfigDCServerReboot" -Server EXCH03 -ItemType Responder -PropertyName Enabled -PropertyValue 0 -Duration 20.00:00:00
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ApplyVersion_ <br/> |Required  <br/> |System.Version  <br/> |The _ApplyVersion_ parameter specifies the version of Exchange that gets the override. If you update Exchange to a newer version (for example, you apply a Cumulative Update or Service Pack), the override is no longer applied to the server. <br/> Valid input for this parameter is an Exchange version number in the format  `15.01.xxxx.xxx`.  <br/> You can't use this parameter with the _Duration_ parameter. <br/> |
| _Identity_ <br/> |Required  <br/> |System.String  <br/> |The _Identity_ parameter specifies the identity of the monitoring item that you want to override. This parameter uses the syntax `<HealthSet>\<MonitoringItemName>[\<TargetResource>]`. Note that the values are case sensitive. For example, use  `"AD\ActiveDirectoryConnectivityConfigDCServerReboot"`, not  `"ad\activedirectoryconnectivityconfigdcserverreboot"`.  <br/> You can use **Get-ServerHealth** to find the correct object for the monitoring item you want to override. <br/> |
| _ItemType_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MonitoringItemTypeEnum  <br/> | The _ItemType_ parameter specifies the server item type for the property that you want to override. Valid value are: <br/>  `Probe` <br/>  `Monitor` <br/>  `Responder` <br/> |
| _PropertyName_ <br/> |Required  <br/> |System.String  <br/> |The _PropertyName_ parameter specifies the server property that you want to override. <br/> |
| _PropertyValue_ <br/> |Required  <br/> |System.String  <br/> |The _PropertyValue_ parameter specifies the new value for the server property that you want to override. <br/> |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to add the monitoring override. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  You can't use this parameter to configure other Edge Transport servers remotely. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Duration_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _Duration_ parameter specifies the length of time that the override is active. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> For example,  `30.10:00:00` specifies 30 days and 10 hours. <br/> You can't use this parameter with the _ApplyVersion_ parameter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

