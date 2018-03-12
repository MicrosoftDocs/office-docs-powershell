---
title: "Test-ClientAccessRule"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/18/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: d17ee6d8-e5f4-4b5d-977c-85e8dadeaf48
description: "Use the Test-ClientAccessRule cmdlet to test how client access rules affect access to your cloud-based organization. If any of the client properties you specify for this cmdlet match any client access rules, the rules are returned in the results."
---

# Test-ClientAccessRule

Use the **Test-ClientAccessRule** cmdlet to test how client access rules affect access to your cloud-based organization. If any of the client properties you specify for this cmdlet match any client access rules, the rules are returned in the results.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-ClientAccessRule -AuthenticationType <BasicAuthentication | NonBasicAuthentication | AdfsAuthentication | CertificateBasedAuthentication | OAuthAuthentication> -Protocol <ExchangeWebServices | RemotePowerShell | OutlookAnywhere | POP3 | IMAP4 | OutlookWebApp | ExchangeAdminCenter | ExchangeActiveSync | OfflineAddressBook | PowerShellWebServices | REST> -RemoteAddress <IPAddress> -RemotePort <Int32> -User <MailboxIdParameter> [-Confirm [<SwitchParameter>]] [-OAuthClaims <Hashtable>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example tests client access by using the following client properties:
  
- **Authentication type**: Basic
    
- **Protocol**:  `OutlookWebApp`
    
- **Remote address**: 172.17.17.26
    
- **Remote port**: 443
    
- **User**: julia@contoso.com
    
```
Test-ClientAccessRule -AuthenticationType BasicAuthentication -Protocol OutlookWebApp -RemoteAddress 172.17.17.26 -RemotePort 443 -User julia@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

Client access rules are like transport rules for client connections to your organization. You use conditions and exceptions to identify the connections based on the user or properties of the client or the connection, and actions that define what to do with those connections.
  
 **Note**: Currently, not all authentication types are supported for all protocols. The supported authentication types per protocol are described in this list:
  
- **OutlookWebApp**:  `BasicAuthentication` and `AdfsAuthentication`.
    
- **ExchangeAdminCenter**:  `BasicAuthentication` and `AdfsAuthentication`.
    
- **RemotePowerShell**:  `BasicAuthentication` and `NonBasicAuthentication`.
    
- **ExchangeActiveSync**:  `BasicAuthentication`,  `OAuthAuthentication`, and  `CertificateBasedAuthentication`.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AuthenticationType_ <br/> |Required  <br/> |Microsoft.Exchange.Data.ClientAccessAuthenticationMethod  <br/> | The _AuthenticationType_ parameter specifies the client authentication type to test. <br/>  Valid values for this parameter are: <br/>  `AdfsAuthentication` <br/>  `BasicAuthentication` <br/>  `CertificateBasedAuthentication` <br/>  `NonBasicAuthentication` <br/>  `OAuthAuthentication` <br/>  In client access rules, authentication types are defined by the _AnyOfAuthenticationTypes_ and _ExceptAnyOfAuthenticationTypes_ parameters. <br/> |
| _Protocol_ <br/> |Required  <br/> |Microsoft.Exchange.Data.ClientAccessProtocol  <br/> | The _Protocol_ parameter specifies the client protocol to test. <br/>  Valid values for this parameter are: <br/>  `ExchangeActiveSync` <br/>  `ExchangeAdminCenter` <br/>  `ExchangeWebServices` <br/>  `IMAP4` <br/>  `OfflineAddressBook` <br/>  `OutlookAnywhere` <br/>  `OutlookWebApp` <br/>  `POP3` <br/>  `PowerShellWebServices` <br/>  `RemotePowerShell` <br/>  `REST` <br/>  In client access rules, protocol types are defined by the _AnyOfProtocols_ and _ExceptAnyOfProtocols_ parameters. <br/> |
| _RemoteAddress_ <br/> |Required  <br/> |System.Net.IPAddress  <br/> |The  _RemoteAddress_ parameter specifies the client IP address to test. Valid input for this parameter is an IP address. For example, 192.168.1.50. <br/> In client access rules, IP addresses are defined by the  _AnyOfClientIPAddressesOrRanges_ and _ExceptAnyOfClientIPAddressesOrRanges_ parameters. <br/> |
| _RemotePort_ <br/> |Required  <br/> |System.Int32  <br/> |The  _RemotePort_ parameter specifies the client TCP port to test. Valid input for this parameter is an integer from 1 to 65535. <br/> |
| _User_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _User_ parameter specifies the user account to test. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  In client access rules, users are defined by the _UsernameMatchesAnyOfPatterns_,  _UserRecipientFilter_, and  _ExceptUsernameMatchesAnyOfPatterns_ parameters. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _OAuthClaims_ <br/> |Optional  <br/> |System.Collections.Hashtable  <br/> |The  _OAuthClaims_parameter specifies the OAuth claims token of a middle-tier app.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

