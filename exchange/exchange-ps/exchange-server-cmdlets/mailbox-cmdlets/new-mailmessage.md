---
title: "New-MailMessage"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3a3fbff6-a202-4d3e-b1df-dfd16ae95a44
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-MailMessage

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-MailMessage** cmdlet to create an email message for the specified user mailbox and place the email message in the Drafts folder of the user's mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-MailMessage [-Body <String>] [-BodyFormat <PlainText | Html | Rtf>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Subject <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates an email message in the Drafts folder with the subject and body specified by the _Subject_ and _Body_ parameters. The message body is rendered in plain text because no format for the message body is specified.
  
```
New-MailMessage -Subject "Delivery Report" -Body "Click here to view this report"
```

### Example 2

This example creates an empty email message in the Drafts folder because no subject or message body is specified.
  
```
New-MailMessage
```

### Example 3

This example creates an email message in the Drafts folder with the subject and body specified by the _Subject_ and _Body_ parameters. The message body is rendered in HTML format.
  
```
New-MailMessage -Subject "Delivery Information" -Body "Click here to see details" -BodyFormat Html
```

## Detailed Description
<a name="DetailedDescription"> </a>

If the cmdlet is run without specifying the _Subject_ or _Body_ parameters, an empty email message is placed in the user's Drafts folder.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Body_ <br/> |Optional  <br/> |System.String  <br/> |The _Body_ parameter specifies the content of the body section of the new email message. <br/> |
| _BodyFormat_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Providers.MailBodyFormat  <br/> |The _BodyFormat_ parameter specifies the format of the message body. The values can be `PlainText`,  `Rtf` (Rich Text Format), or `Html`. By default, if the _BodyFormat_ parameter isn't specified when the _Body_ parameter is used, the message body is rendered in plain text. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Subject_ <br/> |Optional  <br/> |System.String  <br/> |The _Subject_ parameter specifies the content of the subject field of the new email message. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

