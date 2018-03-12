---
title: "Test-SiteMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: a0b6ebfd-f424-44a3-a971-1790f8e5d643
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Test-SiteMailbox

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Test-SiteMailbox** cmdlet to test the site mailbox to Microsoft SharePoint connectivity and to test whether users have the correct permissions to use a site mailbox. This cmdlet should be used for troubleshooting and diagnostic purposes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-SiteMailbox [-BypassOwnerCheck <SwitchParameter>] [-SharePointUrl <Uri>] [-Confirm [<SwitchParameter>]] [-Identity <RecipientIdParameter>] [-RequestorIdentity <RecipientIdParameter>] [-UseAppTokenOnly <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

The example tests a SharePoint site's connectivity only. You can use this command before creating a site mailbox or if you're having a problem creating a site mailbox.
  
```
Test-SiteMailbox -BypassOwnerCheck -SharePointUrl "https://myserver/teams/edu"
```

### Example 2

This example tests the Exchange server connectivity with an existing site mailbox using the  _Identity_ and _UseAppTokenOnly_ parameters. The _Identity_ parameter specifies the site mailbox, and the _UseAppTokenOnly_ parameter specifies that you want to test under the identity of the Exchange server. Run this command for troubleshooting documentation synchronization issues.
  
```
Test-SiteMailbox -BypassOwnerCheck -Identity mysitemailbox@contoso.com -UseAppTokenOnly
```

### Example 3

This example tests a specific user's ability to access a SharePoint site by using the  _RequestorIdentity_ parameter.
  
```
Test-SiteMailbox -BypassOwnerCheck -RequestorIdentity "kweku@contoso.com" -SharePointUrl "https://myserver/teams/edu"
```

## Detailed Description
<a name="DetailedDescription"> </a>

If you don't specify the  _RequestorIdentity_ parameter, the command uses the identification of the user running this command.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _BypassOwnerCheck_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _BypassOwnerCheck_ parameter is used when the account that's running the command isn't a member or owner of the site mailbox. You don't need to specify a value with this switch. <br/> If you run the command without this parameter, and you aren't a member or owner of the site mailbox, then the command will fail.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> | The _Identity_ parameter specifies the identity of the site mailbox. You can use any of the following values: <br/>  Distinguished name (DN) <br/>  GUID <br/>  Name <br/>  Display name <br/>  Alias <br/>  Primary SMTP address <br/>  You can't use this parameter with the _SharePointUrl_ parameter. <br/> |
| _RequestorIdentity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> | The _RequestorIdentity_ parameter specifies the identity of a user for whom you want to test to make sure that they have the correct permissions to connect to the SharePoint site mailbox. If you don't specify this parameter, the command uses the identification of the user running this command. You can use any of the following values: <br/>  DN <br/>  GUID <br/>  Name <br/>  Display name <br/>  Alias <br/>  Primary SMTP address <br/>  You can't use this parameter with the _UseAppTokenOnly_ parameter. <br/> |
| _SharePointUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _SharePointUrl_ parameter specifies the SharePoint URL where the site mailbox is hosted, for example, `"https://myserver/teams/edu"`.  <br/> You can't use this parameter with the  _Identity_ parameter. <br/> |
| _UseAppTokenOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _UseAppTokenOnly_switch specifies that you want to test the site mailbox by using the identity of the Exchange server. You don't need to specify a value with this switch.  <br/> You can't use this parameter with the  _RequestorIdentity_ parameter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

