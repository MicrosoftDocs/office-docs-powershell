---
title: "Set-ActiveSyncOrganizationSettings"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a447bf51-fcdc-4f8d-8d06-533d299c11fe
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-ActiveSyncOrganizationSettings

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-ActiveSyncOrganizationSettings** cmdlet to set the Exchange ActiveSync settings for the organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ActiveSyncOrganizationSettings [-Identity <ActiveSyncOrganizationSettingsIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the default access level to quarantine and sets two administrative email addresses.
  
```
Set-ActiveSyncOrganizationSettings -DefaultAccessLevel Quarantine -AdminMailRecipients will@contoso.com,roger@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AdminMailRecipients_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _AdminMailRecipients_ parameter specifies the email addresses of the administrators for reporting purposes. <br/> To enter multiple values and overwrite any existing entries, use the following syntax:  `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/> To add or remove one or more values without affecting any existing entries, use the following syntax:  `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _AllowAccessForUnSupportedPlatform_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AllowRMSSupportForUnenlightenedApps_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AllowRMSSupportForUnenlightenedApps_ parameter specifies whether to allow Rights Management Services (RMS) protected messages for ActiveSync clients that don't support RMS. Valid values are: <br/>  `$true` <br/>  `$false` (This is the default value) <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DefaultAccessLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DeviceAccessLevel  <br/> |The _DefaultAccessLevel_ parameter specifies the access level for new devices. Valid values are `Allow,` `Block` or `Quarantine`. The default value is  `Allow`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ActiveSyncOrganizationSettingsIdParameter  <br/> |The _Identity_ parameter specifies the ActiveSync organization settings object that you want to modify. The default name of this object is `Mobile Mailbox Settings`.  <br/> |
| _OtaNotificationMailInsert_ <br/> |Optional  <br/> |System.String  <br/> |The _OtaNotificationMailInsert_ parameter specifies thetext to include in an email message that's sent to users who need to update their older devices to use the new Exchange ActiveSync features in Microsoft Exchange. <br/> The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").  <br/> |
| _UserMailInsert_ <br/> |Optional  <br/> |System.String  <br/> |The _UserMailInsert_ parameter specifies an informational footer that's added to the email message sent to users when their mobile device isn't synchronized because the device is quarantined. <br/> The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

