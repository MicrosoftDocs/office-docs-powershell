---
title: "New-AddressRewriteEntry"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b75fa347-ae84-4fe8-90be-2fe1bc6bc8d4

description: "This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange."
---

# New-AddressRewriteEntry

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.
  
Use the **New-AddressRewriteEntry** cmdlet to create an address rewrite entry that rewrites sender and recipient email addresses in messages sent to or sent from your organization through an Edge Transport server.
  
```
New-AddressRewriteEntry -ExternalAddress <String> -InternalAddress <String> -Name <String> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-ExceptionList <MultiValuedProperty>] [-OutboundOnly <$true | $false>] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates an address rewrite entry that rewrites the email address david@contoso.com to david@northwindtraders.com in outbound mail. Because the _OutboundOnly_ parameter is not set to `$true`, inbound mail sent to david@northwindtraders.com is rewritten back to david@contoso.com.
  
```
New-AddressRewriteEntry -Name "Address rewrite entry for david@contoso.com" -InternalAddress david@contoso.com -ExternalAddress david@northwindtraders.com
```

### Example 2

This example creates an address rewrite entry that rewrites all email addresses in the contoso.com domain to northwindtraders.com in outbound mail. Because the _OutboundOnly_ parameter is not set to `$true`, inbound mail sent to northwindtraders.com recipients is rewritten back to contoso.com.
  
```
New-AddressRewriteEntry -Name "Address rewrite entry for all contoso.com email addresses" -InternalAddress contoso.com -ExternalAddress northwindtraders.com
```

### Example 3

This example creates an address rewrite entry that rewrites all email addresses in the contoso.com domain and all subdomains to northwindtraders.com. However, email addresses in research.contoso.com and corp.contoso.com are not rewritten. Because this address rewrite entry affects a domain and all subdomains (\*.contoso.com), address rewriting occurs on outbound mail only.
  
```
New-AddressRewriteEntry -Name "Address rewrite entry for contoso.com and all subdomain email addresses" -InternalAddress *.contoso.com -ExternalAddress northwindtraders.com -ExceptionList research.contoso.com,corp.contoso.com -OutboundOnly $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ExternalAddress_ <br/> |Required  <br/> |System.String  <br/> |The _ExternalAddress_ parameter specifies the final email addresses that you want. If the _InternalAddress_ parameter specifies a single email address (chris@contoso.com), the _ExternalAddress_ parameter must also specify a single email address (support@contoso.com). If the _InternalAddress_ parameter specifies a single domain (contoso.com) or a domain and all subdomains (*.contoso.com), the _ExternalAddress_ parameter must specify a single domain (fabrikam.com). <br/> > [!NOTE]> You can't use the wildcard character (*) with the _ExternalAddress_ parameter.          |
| _InternalAddress_ <br/> |Required  <br/> |System.String  <br/> | The _InternalAddress_ parameter specifies the original email addresses that you want to change. You can use the following values: <br/> **Single email address**: david@contoso.com  <br/> **Single domain**: contoso.com or sales.contoso.com  <br/> **Domain and all subdomains**: \*.contoso.com  <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies a unique name for this address rewrite entry. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _ExceptionList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _ExceptionList_ parameter specifies the email address domains that shouldn't be rewritten when the _InternalAddress_ parameter contains the wildcard character to rewrite addresses in a domain and all subdomains ( `*.contoso.com`). You can enter multiple domain values in the _ExceptionList_ parameter separated by commas. <br/> |
| _OutboundOnly_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _OutboundOnly_ parameter enables or disables outbound-only address rewriting. Valid input for this parameter is `$true` or `$false`. The value  `$true` means address rewriting occurs in outbound mail only. The value `$false` means address rewriting occurs on outbound mail and also on inbound mail (rewritten email addresses are changed back to the original email addresses in inbound mail). The default value is `$false`.  <br/> > [!NOTE]> You must set this parameter to  `$true` if the _InternalAddress_ parameter contains the wildcard character to rewrite addresses in a domain and all subdomains (*.contoso.com).> Also, when you configure outbound-only address rewriting, you need to configure the rewritten email address as a proxy address on the affected recipients. For example, if laura@sales.contoso.com is rewritten to laura@contoso.com, the proxy address laura@contoso.com must be configured on Laura's mailbox. This allows replies and inbound messages to be delivered correctly.           |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

