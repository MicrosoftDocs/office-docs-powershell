---
title: "Set-ClientAccessRule"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 2/1/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: a4ba8627-b774-460f-9793-3d741c115b2e
description: "Use the Set-ClientAccessRule cmdlet to modify existing client access rules. Client access rules help you control access to your cloud-based organization based on the properties of the connection."
---

# Set-ClientAccessRule

Use the **Set-ClientAccessRule** cmdlet to modify existing client access rules. Client access rules help you control access to your cloud-based organization based on the properties of the connection.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Set-ClientAccessRule -Identity <ClientAccessRuleIdParameter> [-Action <AllowAccess | DenyAccess>] [-AnyOfAuthenticationTypes <MultiValuedProperty>] [-AnyOfClientIPAddressesOrRanges <MultiValuedProperty>] [-AnyOfProtocols <MultiValuedProperty>] [-Confirm [<SwitchParameter>]] [-DatacenterAdminsOnly <SwitchParameter>] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-ExceptAnyOfAuthenticationTypes <MultiValuedProperty>] [-ExceptAnyOfClientIPAddressesOrRanges <MultiValuedProperty>] [-ExceptAnyOfProtocols <MultiValuedProperty>] [-ExceptUsernameMatchesAnyOfPatterns <MultiValuedProperty>] [-Name <String>] [-Priority <Int32>] [-Scope <All | Users>] [-UsernameMatchesAnyOfPatterns <MultiValuedProperty>] [-UserRecipientFilter <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds the IP address range 172.17.17.27/16 to the existing client access rule named Allow IMAP4 without affecting the existing IP address values.
  
```
Set-ClientAccessRule "Allow IMAP4" -AnyOfClientIPAddressesOrRanges @{Add="172.17.17.27/16"}
```

## Detailed Description
<a name="DetailedDescription"> </a>

Client access rules are like transport rules for client connections to your organization. You use conditions and exceptions to identify the connections based on the user or properties of the client or the connection, and actions that define what to do with those connections.
  
 **Note**: Not all authentication types are supported for all protocols. The supported authentication types per protocol are described in this list:
  
- **OutlookWebApp**:  `BasicAuthentication` and `AdfsAuthentication`.
    
- **ExchangeAdminCenter**:  `BasicAuthentication` and `AdfsAuthentication`.
    
- **RemotePowerShell**:  `BasicAuthentication` and `NonBasicAuthentication`.
    
- **ExchangeActiveSync**:  `BasicAuthentication`,  `OAuthAuthentication`, and  `CertificateBasedAuthentication`.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ClientAccessRuleIdParameter  <br/> | The _Identity_ parameter specifies the client access rule that you want to modify. You can use any value that uniquely identifies the client access rule. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Action_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ClientAccessRulesAction  <br/> |The  _Action_ parameter specifies the action for the client access rule. Valid values for this parameter are `AllowAccess` and `DenyAccess`.  <br/> |
| _AnyOfAuthenticationTypes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _AnyOfAuthenticationTypes_ parameter specifies a condition for the client access rule that's based on the client's authentication type. <br/>  Valid values for this parameter are: <br/>  `AdfsAuthentication` <br/>  `BasicAuthentication` <br/>  `CertificateBasedAuthentication` <br/>  `NonBasicAuthentication` <br/>  `OAuthAuthentication` <br/>  To enter multiple values and overwrite any existing entries, use the following syntax: `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/>  To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _AnyOfClientIPAddressesOrRanges_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _AnyOfClientIPAddressesOrRanges_ parameter specifies a condition for the client access rule that's based on the client's IP address. Valid values for this parameter are: <br/> **A single IP address**: For example,  `192.168.1.1`.  <br/> **An IP address range**: For example,  `192.168.0.1-192.168.0.254`.  <br/> **Classless Inter-Domain Routing (CIDR) IP**: For example,  `192.168.3.1/24`.  <br/>  To enter multiple values and overwrite any existing entries, use the following syntax: `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/>  To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _AnyOfProtocols_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _AnyOfProtocols_ parameter specifies a condition for the client access rule that's based on the client's protocol. <br/>  Valid values for this parameter are: <br/>  `ExchangeActiveSync` <br/>  `ExchangeAdminCenter` <br/>  `ExchangeWebServices` <br/>  `IMAP4` <br/>  `OfflineAddressBook` <br/>  `OutlookAnywhere` <br/>  `OutlookWebApp` <br/>  `POP3` <br/>  `PowerShellWebServices` <br/>  `RemotePowerShell` <br/>  `REST` <br/>  To enter multiple values and overwrite any existing entries, use the following syntax: `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/>  To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DatacenterAdminsOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Enabled_ parameter specifies whether the client access rule is enabled or disabled. Valid values for this parameter are `$true` or `$false`.  <br/> |
| _ExceptAnyOfAuthenticationTypes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ExceptAnyOfAuthenticationTypes_ parameter specifies an exception for the client access rule that's based on the client's authentication type. <br/>  Valid values for this parameter are: <br/>  `AdfsAuthentication` <br/>  `BasicAuthentication` <br/>  `CertificateBasedAuthentication` <br/>  `NonBasicAuthentication` <br/>  `OAuthAuthentication` <br/>  To enter multiple values and overwrite any existing entries, use the following syntax: `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/>  To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _ExceptAnyOfClientIPAddressesOrRanges_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ExceptAnyOfClientIPAddressesOrRanges_ parameter specifies an exception for the client access rule that's based on the client's IP address. Valid values for this parameter are: <br/> **A single IP address**: For example,  `192.168.1.1`.  <br/> **An IP address range**: For example,  `192.168.0.1-192.168.0.254`.  <br/> **Classless Inter-Domain Routing (CIDR) IP**: For example,  `192.168.3.1/24`.  <br/>  To enter multiple values and overwrite any existing entries, use the following syntax: `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/>  To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _ExceptAnyOfProtocols_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ExceptAnyOfProtocols_ parameter specifies an exception for the client access rule that's based on the client's protocol. <br/>  Valid values for this parameter are: <br/>  `ExchangeActiveSync` <br/>  `ExchangeAdminCenter` <br/>  `ExchangeWebServices` <br/>  `IMAP4` <br/>  `OfflineAddressBook` <br/>  `OutlookAnywhere` <br/>  `OutlookWebApp` <br/>  `POP3` <br/>  `PowerShellWebServices` <br/>  `RemotePowerShell` <br/>  `REST` <br/>  To enter multiple values and overwrite any existing entries, use the following syntax: `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/>  To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _ExceptUsernameMatchesAnyOfPatterns_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _ExceptUsernameMatchesAnyOfPatterns_ parameter specifies an exception for the client access rule that's based on the user's account name in the format `<Domain>\<UserName>` (for example, `contoso.com\jeff`). This parameter accepts text and the wildcard character (*) (for example,  `*jeff*`, but not  `jeff*`). Non-alphanumeric characters don't require an escape character.  <br/> To enter multiple values and overwrite any existing entries, use the following syntax:  `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/> To add or remove one or more values without affecting any existing entries, use the following syntax:  `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies a unique name for the client access rule. <br/> |
| _Priority_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _Priority_ parameter specifies a priority value for the client access rule. A lower integer value indicates a higher priority, and a higher priority rule is evaluated before a lower priority rule. The default value is 1. <br/> |
| _Scope_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ClientAccessRulesScope  <br/> | The _Scope_parameter specifies the scope of the client access rule. Valid values are:  <br/>  `Users`: The rule only applies to end-user connections.  <br/>  `All`: The rule applies to all connections (end-users and middle-tier apps).  <br/> |
| _UsernameMatchesAnyOfPatterns_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _UsernameMatchesAnyOfPatterns_ parameter specifies a condition for the client access rule that's based on the user's account name in the format `<Domain>\<UserName>` (for example, `contoso.com\jeff`). This parameter accepts text and the wildcard character (*) (for example,  `*jeff*`, but not  `jeff*`). Non-alphanumeric characters don't require an escape character.  <br/> To enter multiple values and overwrite any existing entries, use the following syntax:  `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/> To add or remove one or more values without affecting any existing entries, use the following syntax:  `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _UserRecipientFilter_ <br/> |Optional  <br/> |System.String  <br/> | The _UserRecipientFilter_ parameter specifies a condition for the client access rule that uses OPath filter syntax to identify the user. For example, `{City -eq "Redmond"}`. The filterable attributes that you can use with this parameter are:  <br/>  `City` <br/>  `Company` <br/>  `CountryOrRegion` <br/>  `CustomAttribute1-15` <br/>  `Department` <br/>  `Office` <br/>  `PostalCode` <br/>  `StateOrProvince` <br/>  `StreetAddress` <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

