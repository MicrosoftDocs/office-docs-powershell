---
title: "Remove-App"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: cfd1245f-dcd2-48c1-b753-a7ebedd2803f
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Remove-App

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Remove-App** cmdlet to uninstall an app.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-App -Identity <AppIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Mailbox <MailboxIdParameter>] [-OrganizationApp <SwitchParameter>] [-PrivateCatalog <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the Finance Test app installed for user Tony.
  
```
Remove-App -Identity <GUID for FinanceTestApp> -Mailbox Tony
```

For more information, see [Install and Remove Apps for Outlook for Your Organization](https://technet.microsoft.com/library/112f3ef7-9943-4a1e-8a42-e08e8e9f67f4.aspx).
  
## Detailed Description
<a name="DetailedDescription"> </a>

The **Remove-App** cmdlet requires that the specified app has already been installed (for example, that the app has been installed with the **New-App** cmdlet. Apps installed by default can't be uninstalled, but they can be disabled.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AppIdParameter  <br/> |The _Identity_ parameter specifies the **AppID** (GUID value) of the app that you want to remove. To find the GUID value of an app, run the command `Get-App | Format-Table -Auto DisplayName,AppId`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the identity of the mailbox or mail user. You can use the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  User principal name (UPN) <br/>  Legacy Exchange DN <br/>  SMTP address <br/>  Alias <br/> |
| _OrganizationApp_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _OrganizationApp_ parameter specifies that the scope of the app is organizational. This is set to `$false` by default. This parameter is required if the targeted app is installed for the organization. <br/> |
| _PrivateCatalog_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _PrivateCatalog_ switch specifies that the app you want to remove is located in a private catalog. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

