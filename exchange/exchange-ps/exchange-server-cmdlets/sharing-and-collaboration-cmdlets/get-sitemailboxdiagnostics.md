---
title: "Get-SiteMailboxDiagnostics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4d6c7fb2-8b5c-44c8-add2-f862240b9da0
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-SiteMailboxDiagnostics

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-SiteMailboxDiagnostics** cmdlet to view important event-related data for each site mailbox. This information can be used to troubleshoot site mailbox issues.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-SiteMailboxDiagnostics -Identity <RecipientIdParameter> [-BypassOwnerCheck <SwitchParameter>] [-Confirm [<SwitchParameter>]] [-SendMeEmail <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the event information for the site mailbox by using its display name Marketing Events 2015.
  
```
Get-SiteMailboxDiagnostics -BypassOwnerCheck -Identity "Marketing Events 2015"
```

### Example 2

This example returns the event information for the Marketing Events 2015 site mailbox and sends an email to the primary SMTP address of the user running this command.
  
```
Get-SiteMailboxDiagnostics -BypassOwnerCheck -Identity events2015@contoso.com -SendMeEmail
```

## Detailed Description
<a name="DetailedDescription"> </a>

If you aren't a member or owner of the site mailbox that you want to view the diagnostics information for, you must use the _BypassOwnerCheck_ parameter when running this cmdlet. If you aren't a member or owner of the site mailbox and you run this cmdlet without using the _BypassOwnerCheck_ parameter, the command fails with an "object not found" error.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> | The _Identity_ parameter specifies the site mailbox. You can use the following values: <br/>  Alias <br/>  Display name <br/> _Domain\Account_ <br/>  SMTP address <br/>  Distinguished name (DN) <br/>  Object GUID <br/>  User principal name (UPN) <br/>  LegacyExchangeDN <br/> |
| _BypassOwnerCheck_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _BypassOwnerCheck_ parameter is used when the account that's running the command isn't a member or owner of the site mailbox. You don't need to specify a value with this switch. <br/> If you run the command without this parameter, and you aren't a member or owner of the site mailbox, then the command will fail.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _SendMeEmail_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SendMeEmail_switch specifies that the diagnostic information is sent to the primary SMTP email address of the user account that's running the command. You don't need to specify a value with this switch.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

