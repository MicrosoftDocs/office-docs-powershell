---
title: "New-ClientAccessRule"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/24/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: f397cd16-dcd7-4929-8c9f-35415ca6b009
description: "Use the New-ClientAccessRule cmdlet to create client access rules. Client access rules help you control access to your cloud-based organization based on the properties of the connection."
---

# New-ClientAccessRule

Use the **New-ClientAccessRule** cmdlet to create client access rules. Client access rules help you control access to your cloud-based organization based on the properties of the connection.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-ClientAccessRule -Action <AllowAccess | DenyAccess> -Name <String> [-AnyOfAuthenticationTypes <MultiValuedProperty>] [-AnyOfClientIPAddressesOrRanges <MultiValuedProperty>] [-AnyOfProtocols <MultiValuedProperty>] [-Confirm [<SwitchParameter>]] [-DatacenterAdminsOnly <$true | $false>] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-ExceptAnyOfAuthenticationTypes <MultiValuedProperty>] [-ExceptAnyOfClientIPAddressesOrRanges <MultiValuedProperty>] [-ExceptAnyOfProtocols <MultiValuedProperty>] [-ExceptUsernameMatchesAnyOfPatterns <MultiValuedProperty>] [-Priority <Int32>] [-Scope <All | Users>] [-UsernameMatchesAnyOfPatterns <MultiValuedProperty>] [-UserRecipientFilter <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a highest priority rule that allows access to remote PowerShell. This rule is an important safeguard to preserve access to your organization. Without this rule, if you create rules that block your access to remote PowerShell, or that block all protocols for everyone, you'll lose the ability to fix the rules yourself (you'll need to call Microsoft Customer Service and Support).
  
```
New-ClientAccessRule -Name AllowRemotePS -Action Allow -AnyOfProtocols RemotePowerShell -Priority 1
```

### Example 2

This example creates a new client access rule named Block ActiveSync that blocks access for Exchange ActiveSync clients, except for clients in the IP address range 192.168.10.1/24.
  
```
New-ClientAccessRule -Name "Block ActiveSync" -Action DenyAccess -AnyOfProtocols ExchangeActiveSync -ExceptAnyOfClientIPAddressesOrRanges 192.168.10.1/24
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
| _Action_ <br/> |Required  <br/> |Microsoft.Exchange.Data.ClientAccessRulesAction  <br/> |The  _Action_ parameter specifies the action for the client access rule. Valid values for this parameter are `AllowAccess` and `DenyAccess`.  <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies a unique name for the client access rule. <br/> |
| _AnyOfAuthenticationTypes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _AnyOfAuthenticationTypes_ parameter specifies a condition for the client access rule that's based on the client's authentication type. <br/>  Valid values for this parameter are: <br/>  `AdfsAuthentication` <br/>  `BasicAuthentication` <br/>  `CertificateBasedAuthentication` <br/>  `NonBasicAuthentication` <br/>  `OAuthAuthentication` <br/>  You can enter multiple values separated by commas. Don't use quotation marks. <br/> |
| _AnyOfClientIPAddressesOrRanges_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _AnyOfClientIPAddressesOrRanges_ parameter specifies a condition for the client access rule that's based on the client's IP address. Valid values for this parameter are: <br/> **A single IP address**: For example,  `192.168.1.1`.  <br/> **An IP address range**: For example,  `192.168.0.1-192.168.0.254`.  <br/> **Classless Inter-Domain Routing (CIDR) IP**: For example,  `192.168.3.1/24`.  <br/>  You can enter multiple values separated by commas. <br/> |
| _AnyOfProtocols_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _AnyOfProtocols_ parameter specifies a condition for the client access rule that's based on the client's protocol. <br/>  Valid values for this parameter are: <br/>  `ExchangeActiveSync` <br/>  `ExchangeAdminCenter` <br/>  `ExchangeWebServices` <br/>  `IMAP4` <br/>  `OfflineAddressBook` <br/>  `OutlookAnywhere` <br/>  `OutlookWebApp` <br/>  `POP3` <br/>  `PowerShellWebServices` <br/>  `RemotePowerShell` <br/>  `REST` <br/>  You can enter multiple values separated by commas. Don't use quotation marks. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DatacenterAdminsOnly_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Enabled_ parameter specifies whether the client access rule is enabled or disabled. Valid values for this parameter are `$true` or `$false`. The default value is  `$true`.  <br/> |
| _ExceptAnyOfAuthenticationTypes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ExceptAnyOfAuthenticationTypes_ parameter specifies an exception for the client access rule that's based on the client's authentication type. <br/>  Valid values for this parameter are: <br/>  `AdfsAuthentication` <br/>  `BasicAuthentication` <br/>  `CertificateBasedAuthentication` <br/>  `NonBasicAuthentication` <br/>  `OAuthAuthentication` <br/>  You can enter multiple values separated by commas. Don't use quotation marks. <br/> |
| _ExceptAnyOfClientIPAddressesOrRanges_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ExceptAnyOfClientIPAddressesOrRanges_ parameter specifies an exception for the client access rule that's based on the client's IP address. Valid values for this parameter are: <br/> **A single IP address**: For example,  `192.168.1.1`.  <br/> **An IP address range**: For example,  `192.168.0.1-192.168.0.254`.  <br/> **Classless Inter-Domain Routing (CIDR) IP**: For example,  `192.168.3.1/24`.  <br/>  You can enter multiple values separated by commas. <br/> |
| _ExceptAnyOfProtocols_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ExceptAnyOfProtocols_ parameter specifies an exception for the client access rule that's based on the client's protocol. <br/>  Valid values for this parameter are: <br/>  `ExchangeActiveSync` <br/>  `ExchangeAdminCenter` <br/>  `ExchangeWebServices` <br/>  `IMAP4` <br/>  `OfflineAddressBook` <br/>  `OutlookAnywhere` <br/>  `OutlookWebApp` <br/>  `POP3` <br/>  `PowerShellWebServices` <br/>  `RemotePowerShell` <br/>  `REST` <br/>  You can enter multiple values separated by commas. Don't use quotation marks. <br/> |
| _ExceptUsernameMatchesAnyOfPatterns_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _ExceptUsernameMatchesAnyOfPatterns_ parameter specifies an exception for the client access rule that's based on the user's account name in the format `<Domain>\<UserName>` (for example, `contoso.com\jeff`). This parameter accepts text and the wildcard character (*) (for example,  `*jeff*`, but not  `jeff*`). Non-alphanumeric characters don't require an escape character.  <br/> You can enter multiple values separated by commas.  <br/> |
| _Priority_ <br/> |Optional  <br/> |System.Int32  <br/> | The _Priority_ parameter specifies a priority value for the rule that determines the order of rule processing. A lower integer value indicates a higher priority, the value 0 is the highest priority, and rules can't have the same priority value. <br/>  Valid values and the default value for this parameter depend on the number of existing rules. For example, if there are 8 existing rules: <br/>  Valid priority values for the existing 8 rules are from 0 through 7. <br/>  Valid priority values for a new rule (the 9th rule) are from 0 through 8. <br/>  The default value for a new rule (the 9th rule) is 8. <br/>  If you modify the priority value of a rule, the position of the rule in the list changes to match the priority value you specify. In other words, if you set the priority value of a rule to the same value as an existing rule, the priority value of the existing rule and all other lower priority rules after it is increased by 1. <br/> |
| _Scope_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ClientAccessRulesScope  <br/> | The _Scope_parameter specifies the scope of the client access rule. Valid values are:  <br/>  `Users`: The rule only applies to end-user connections.  <br/>  `All`: The rule applies to all connections (end-users and middle-tier apps).  <br/> |
| _UsernameMatchesAnyOfPatterns_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _UsernameMatchesAnyOfPatterns_ parameter specifies a condition for the client access rule that's based on the user's account name in the format `<Domain>\<UserName>` (for example, `contoso.com\jeff`). This parameter accepts text and the wildcard character (*) (for example,  `*jeff*`, but not  `jeff*`). Non-alphanumeric characters don't require an escape character.  <br/> You can enter multiple values separated by commas.  <br/> |
| _UserRecipientFilter_ <br/> |Optional  <br/> |System.String  <br/> | The _UserRecipientFilter_ parameter specifies a condition for the client access rule that uses OPath filter syntax to identify the user. For example, `{City -eq "Redmond"}`. The filterable attributes that you can use with this parameter are:  <br/>  `City` <br/>  `Company` <br/>  `CountryOrRegion` <br/>  `CustomAttribute1-15` <br/>  `Department` <br/>  `Office` <br/>  `PostalCode` <br/>  `StateOrProvince` <br/>  `StreetAddress` <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

