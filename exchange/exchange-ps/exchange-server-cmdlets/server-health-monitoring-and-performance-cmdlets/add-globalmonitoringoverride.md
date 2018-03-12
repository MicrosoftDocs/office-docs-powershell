---
title: "Add-GlobalMonitoringOverride"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 9d5ec0ec-a7bc-4bea-a62e-6252407ed7e8
description: "This cmdlet is available only in on-premises Exchange."
---

# Add-GlobalMonitoringOverride

This cmdlet is available only in on-premises Exchange. 
  
Use the **Add-GlobalMonitoringOverride** cmdlet to override the thresholds and parameters of the managed availability probes, monitors, and responders on all Exchange 2013or later servers in your organization. The cmdlet enables monitoring changes and threshold tuning to the environment.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Add-GlobalMonitoringOverride [-BuildRange <String>] [-Duration <EnhancedTimeSpan>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds a global monitoring override that disables the  `OnPremisesInboundProxy` probe for 30 days. Note that the value of _Identity_ is case-sensitive.
  
```
Add-GlobalMonitoringOverride -Identity "FrontendTransport\OnPremisesInboundProxy" -PropertyName Enabled -PropertyValue 0 -Duration 30.00:00:00 -ItemType Probe
```

### Example 2

This example adds a global monitoring override that disables the  `StorageLogicalDriveSpaceEscalate` responder for all Exchange 2016servers running version 15.01.0225.0422. Note that the value of _Identity_ is case-sensitive.
  
```
Add-GlobalMonitoringOverride -Identity "MailboxSpace\StorageLogicalDriveSpaceEscalate" -PropertyName Enabled -PropertyValue 0 -ItemType Responder -ApplyVersion "15.01.0225.0422"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ApplyVersion_ <br/> |Required  <br/> |System.Version  <br/> |The _ApplyVersion_ parameter specifies the version of Exchange that gets the override. If an Exchange server is older or newer than the version you specify, the override isn't applied to the server. Typically, you increase the Exchange version by applying Cumulative Updates or Service Packs. <br/> Valid input for this parameter is an Exchange version number in the format  `15.0x.xxxx.xxx`.  <br/> You can't use this parameter with the _Duration_ parameter. <br/> |
| _Identity_ <br/> |Required  <br/> |System.String  <br/> |The _Identity_ parameter specifies the identity of the probe, monitor, or responder. This parameter uses the syntax `<HealthSetName>\<MonitoringItemName>[\<TargetResource>]`. Note that the values are case sensitive. For example, use  `"AD\ActiveDirectoryConnectivityServerReboot"`, not  `"ad\activedirectoryconnectivityserverreboot"`.  <br/> |
| _ItemType_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MonitoringItemTypeEnum  <br/> | The _ItemType_ parameter specifies the item type for the property that you want to override. Valid values are: <br/>  `Probe` <br/>  `Monitor` <br/>  `Responder` <br/> |
| _PropertyName_ <br/> |Required  <br/> |System.String  <br/> |The _PropertyName_ parameter specifies the property that you want to override. <br/> |
| _PropertyValue_ <br/> |Required  <br/> |System.String  <br/> |The _PropertyValue_ parameter specifies the new value for the property that you want to override. <br/> |
| _BuildRange_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Duration_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _Duration_ parameter specifies the length of time that the override is active. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> For example,  `30.10:00:00` specifies 30 days and 10 hours. <br/> You can't use this parameter with the _ApplyVersion_ parameter. <br/> |
| _Roles_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

