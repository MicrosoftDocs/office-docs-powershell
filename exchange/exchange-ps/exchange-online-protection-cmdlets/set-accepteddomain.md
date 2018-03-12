---
title: "Set-AcceptedDomain"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 2/1/2018
ms.audience: Admin
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 2ef9a20b-0974-45d0-9dae-23bab22d736e
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-AcceptedDomain

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-AcceptedDomain** cmdlet to modify existing accepted domains in your organization. Anaccepted domain is any SMTP namespace for which an Exchange organization sends and receives email.
  
```
Set-AcceptedDomain -Identity <AcceptedDomainIdParameter> [-AddressBookEnabled <$true | $false>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-DomainType <Authoritative | ExternalRelay | InternalRelay>] [-EnableNego2Authentication <$true | $false>] [-MakeDefault <$true | $false>] [-MatchSubDomains <$true | $false>] [-Name <String>] [-OutboundOnly <$true | $false>] [-PendingCompletion <$true | $false>] [-PendingRemoval <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example makes the accepted domain Contoso the default accepted domain.
  
```
Set-AcceptedDomain -Identity Contoso -MakeDefault $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AcceptedDomainIdParameter  <br/> |The  _Identity_ parameter specifies the accepted domain you want to modify. You can use any value that uniquely identifies the accepted domain object. For example, you can use the name, GUID or distinguished name (DN) of the accepted domain. <br/> |
| _AddressBookEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _AddressBookEnabled_ parameter specifies whether to enable recipient filtering for this accepted domain. The default values are: <br/>  `$true`for authoritative domains.  <br/>  `$false`for internal relay domains.  <br/>  `$false`for external relay domains.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The  _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _DomainType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AcceptedDomainType  <br/> | The _DomainType_ parameter specifies the accepted domain type. Valid values are: <br/>  `Authoritative`: This is the default value. Your organization is completely responsible for delivering email to recipients in the domain, and for generating non-delivery reports (also known as an NDRs, delivery system notifications, DSNs, or bounce messages) for unresolved recipients.  <br/>  `InternalRelay`: This is a type of non-authoritative domain. Your organization receives email that's sent to recipients in the domain, but the messages are relayed to an external messaging system that's under your control. The external messaging system is responsible for generating NDRs for unresolved recipients. Use this value to treat messages that are sent to the domain as internal messages.  <br/>  `ExternalRelay`: This is a type of non-authoritative domain that's available only in on-premises Exchange organizations. Your organization receives email that's sent to recipients in the domain, but the messages are relayed to an external messaging system that's completely outside of your control. The external messaging system is responsible for generating NDRs for unresolved recipients.  <br/> **Note**:  <br/>  For the value `InternalRelay` or `ExternalRelay` you typically use mail users or mail contacts to relay the messages to the external messaging system. Address rewriting is also available on Edge Transport servers in on-premises Exchange organizations. <br/> |
| _EnableNego2Authentication_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MakeDefault_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _MakeDefault_ parameter specifies whether the accepted domain is the default domain. Valid values are: `$true` or $false. <br/>  `$true`: The accepted domain is the default domain. This is the default value for first accepted domain that's created in the organization.  <br/>  `$false`: The accepted domain isn't the default domain. This the default value for subsequent accepted domains.  <br/>  The default accepted domain is used in sender email addresses when the senders have only non-SMTP email addresses (for example, X.400 addresses). Non-SMTP email addresses are encapsulated in SMTP email addresses by using the Internet Mail Connector Encapsulated Address (IMCEA) encapsulation method. IMCEA encapsulation uses the default domain value in the SMTP email address. <br/>  If you don't use non-SMTP email addresses in your organization, you don't need to worry about the value of this parameter. <br/> |
| _MatchSubDomains_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _MatchSubDomains_ parameter enables mail to be sent by and received from users on any subdomain of this accepted domain. The default value is `$false`.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Name_ parameter specifies a unique name for the accepted domain object. The default value is the **DomainName** property value. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _OutboundOnly_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _OutboundOnly_ parameter specifies whether this accepted domain is an internal relay domain for the on-premises deployment for organizations that have coexistence with a cloud-based organization. <br/> The authoritative accepted domain for the on-premises deployment is configured as an internal relay accepted domain on the cloud side. If the on-premises deployment is using Exchange Online Protection, you need to set this parameter to  `$true` for the accepted domain that represents your on-premises deployment. This parameter is used only if the _DomainType_ parameter is set to `Authoritative` or `InternalRelay`. The default value is  `$false`.  <br/> |
| _PendingCompletion_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PendingRemoval_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

