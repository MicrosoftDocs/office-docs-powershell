---
title: "Enable-MailContact"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 0accff85-3a03-4068-81e2-0508a4df21ec

description: "This cmdlet is available only in on-premises Exchange."
---

# Enable-MailContact

This cmdlet is available only in on-premises Exchange. 
  
Use the **Enable-MailContact** cmdlet to add email capabilities to existing contacts that aren't already mail-enabled.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Enable-MailContact -Identity <ContactIdParameter> -ExternalEmailAddress <ProxyAddress> [-Alias <String>] [-Confirm [<SwitchParameter>]] [-DisplayName <String>] [-DomainController <Fqdn>] [-MacAttachmentFormat <BinHex | UuEncode | AppleSingle | AppleDouble>] [-MessageBodyFormat <Text | Html | TextAndHtml>] [-MessageFormat <Text | Mime>] [-PrimarySmtpAddress <SmtpAddress>] [-UsePreferMessageFormat <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example mail-enables an existing contact that isn't mail-enabled.
  
```
Enable-MailContact -Identity Roland -ExternalEmailAddress "roland@tailspintoys.com"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Enable-MailContact** cmdlet mail-enables existing contacts by adding the email attributes that are required by Exchange. Mail contacts are visible to the other **\*-MailContact** cmdlets.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ExternalEmailAddress_ <br/> |Required  <br/> |Microsoft.Exchange.Data.ProxyAddress  <br/> |The _ExternalEmailAddress_ parameter specifies the target email address of the mail contact or mail user. By default, this value is used as the primary email address of the mail contact or mail user. <br/> In on-premises environments, you can use the _PrimarySMTPAddress_ parameter to set the primary email address to a different value. However, we recommend this only in cross-forest environments. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ContactIdParameter  <br/> | The _Identity_ parameter specifies the non-mail-enabled contact that you want to mail-enable. You can use any value that uniquely identifies the contact. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _Alias_ <br/> |Optional  <br/> |System.String  <br/> | The _Alias_ parameter specifies the Exchange alias (also known as themail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one _Alias_ value. <br/>  The value of _Alias_ can contain letters, numbers and the characters !, #, $, %, &amp;, ', *, +, -, /, =, ?, ^, _, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, `help.desk`). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the _Alias_ value is 64 characters. <br/>  When you create a recipient without specifying an email address, the _Alias_ value you specify is used to generate the primary email address ( _\<alias\>_@ _\<domain\>_). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.  <br/>  If you don't use the _Alias_ parameter when you create a recipient, the value of a different required parameter is used for the **Alias** property value: <br/> **Recipients with user accounts (for example, user mailboxes, and mail users)**: The left side of the _MicrosoftOnlineServicesID_ or _UserPrincipalName_ parameter is used. For example, `helpdesk@contoso.com` results in the **Alias** property value `helpdesk`.  <br/> **Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups)**: The value of the _Name_ parameter is used. Spaces are removed and unsupported characters are converted to question marks (?). <br/>  If you modify the _Alias_ value of an existing recipient, the primary email address is automatically updated only in on-premises environments where the recipient is subject to email address policies (the **EmailAddressPolicyEnabled** property is `True` for the recipient). <br/> > [!NOTE]>  The _Alias_ parameter never generates or updates the primary email address of a mail contact or a mail user.          |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The _DisplayName_ parameter specifies the display name of the mail contact. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _MacAttachmentFormat_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.MacAttachmentFormat  <br/> | The _MacAttachmentFormat_ parameter specifies the Apple Macintosh operating system attachment format to use for messages sent to the mail contact or mail user. Valid values are: <br/>  `BinHex` (This is the default value) <br/>  `UuEncode` <br/>  `AppleSingle` <br/>  `AppleDouble` <br/>  The _MacAttachmentFormat_ and _MessageFormat_ parameters are interdependent: <br/> _MessageFormat_ is `Text`: _MacAttachmentFormat_ can be `BinHex` or `UuEncode`.  <br/> _MessageFormat_ is `Mime`: _MacAttachmentFormat_ can be `BinHex`,  `AppleSingle`, or  `AppleDouble`.  <br/> |
| _MessageBodyFormat_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.MessageBodyFormat  <br/> | The _MessageBodyFormat_ parameter specifies the message body format for messages sent to the mail contact or mail user. Valid values are: <br/>  `Text` <br/>  `Html` <br/>  `TextAndHtml` (This is the default value) <br/>  The _MessageFormat_ and _MessageBodyFormat_ parameters are interdependent: <br/> _MessageFormat_ is `Mime`: _MessageBodyFormat_ can be `Text`,  `Html`, or  `TextAndHtml`.  <br/> _MessageFormat_ is `Text`: _MessageBodyFormat_ can only be `Text`.  <br/> |
| _MessageFormat_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.MessageFormat  <br/> | The _MessageFormat_ parameter specifies the message format for messages sent to the mail contact or mail user. Valid values are: <br/>  `Text` <br/>  `Mime` (This is the default value) <br/>  The _MessageFormat_ and _MessageBodyFormat_ parameters are interdependent: <br/> _MessageFormat_ is `Mime`: _MessageBodyFormat_ can be `Text`,  `Html`, or  `TextAndHtml`.  <br/> _MessageFormat_ is `Text`: _MessageBodyFormat_ can only be `Text`.  <br/>  Therefore, if you want to change the _MessageFormat_ parameter from `Mime` to `Text`, you must also change the _MessageBodyFormat_ parameter to `Text`.  <br/> |
| _PrimarySmtpAddress_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The _PrimarySmtpAddress_ parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the _EmailAddresses_ and _PrimarySmtpAddress_ parameters in the same command. <br/> By default, the primary address is the same as the _ExternalEmailAddress_ parameter value. <br/> If you use the _PrimarySmtpAddress_ parameter to specify the primary email address, the command sets the **EmailAddressPolicyEnabled** property of the mail contact to `False`, which means the email addresses of the mail contact aren't automatically updated by email address policies. We recommend that you don't set the primary email address to a value other than the _ExternalEmailAddress_ unless you're in a cross-forest scenario. <br/> |
| _UsePreferMessageFormat_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _UsePreferMessageFormat_ specifies whether the message format settings configured for the mail user or mail contact override the global settings configured for the remote domain or configured by the message sender. Valid value are: <br/>  `$true`: Messages sent to the mail user or mail contact use the message format that's configured for the mail user or mail contact.  <br/>  `$false`: Messages sent to the mail user or mail contact use the message format that's configured for the remote domain (the default remote domain or a specific remote domain) or configured by the message sender. This is the default value.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

