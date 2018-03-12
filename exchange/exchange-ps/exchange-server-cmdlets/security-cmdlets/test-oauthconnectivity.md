---
title: "Test-OAuthConnectivity"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 26aa9772-aa31-4765-b2a4-d0dd78d77fc8
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Test-OAuthConnectivity

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Test-OAuthConnectivity** cmdlet to test OAuth authentication to partner applications for a user.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-OAuthConnectivity -Service <EWS | AutoD | Generic> -TargetUri <Uri> [-AppOnly <SwitchParameter>] [-Confirm [<SwitchParameter>]] [-Mailbox <MailboxIdParameter>] [-OrganizationDomain <String>] [-ReloadConfig <SwitchParameter>] [-UseCachedToken <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests OAuth connectivity with Exchange for Gurinder Singh.
  
```
Test-OAuthConnectivity -Service EWS -TargetUri https://cas.contoso.com/ews/ -Mailbox "Gurinder Singh"
```

## Detailed Description
<a name="DetailedDescription"> </a>

> [!IMPORTANT]
> SharePoint, Lync, and Skype for Business partner applications are automatically created in on-premises Exchange deployments. For the **Test-OAuthConnectivity** cmdlet to succeed for other partner applications, you first need to create the partner application by using the `Configure-EnterpriseApplication.ps1` script.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Service_ <br/> |Required  <br/> |Microsoft.Exchange.Monitoring.ModServiceType  <br/> | The _Service_ parameter specifies the partner application. Valid values for this parameter are: <br/>  `EWS` <br/>  `AutoD` <br/>  `Generic` <br/> |
| _TargetUri_ <br/> |Required  <br/> |System.Uri  <br/> |The _TargetUri_ parameter specifies the URL for the service you want to test OAuth connectivity with. <br/> |
| _AppOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _AppOnly_ switch specifies the cmdlet will authenticate to the specified service as Exchange without any user context. You don't need to specify a value with this switch. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The _Mailbox_ parameter specifies the mailbox for which you want to test OAuth connectivity to the specified partner application. <br/> |
| _OrganizationDomain_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The _OrganizationDomain_ parameter specifies the domain name of the Office 365 organization. For example, `contoso.com`.  <br/> |
| _ReloadConfig_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ReloadConfig_ switch reloads all the configuration settings from the Exchange configuration objects. You don't need to specify a value with this switch. If you don't use this switch, the cached configuration settings are used. <br/> |
| _UseCachedToken_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _UseCachedToken_ switch specifies that OAuth will try to use an existing, cached authorization token. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

