---
title: "Add-AvailabilityAddressSpace"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: abbd48f3-adf6-40ed-9a52-36800d8429ef
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Add-AvailabilityAddressSpace

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Add-AvailabilityAddressSpace** cmdlet to create availability address space objects that are used to share free/busy data across Exchange organizations.
  
> [!NOTE]
> The maximum number off Availability address spaces returned by Active Directory to Exchange is 100. We recommend using 100 or fewer address spaces in order for Availability lookups to work properly. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Add-AvailabilityAddressSpace -AccessMethod <PerUserFB | OrgWideFB | PublicFolder | InternalProxy | OrgWideFBBasic> -ForestName <String> [-Confirm [<SwitchParameter>]] [-Credentials <PSCredential>] [-DomainController <Fqdn>] [-ProxyUrl <Uri>] [-TargetAutodiscoverEpr <Uri>] [-UseServiceAccount <$true | $false>] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example is useful with an untrusted cross-forest Availability service, or if detailed cross-forest free/busy service isn't desired. Enter a user name and password when you're prompted by the command. For an untrusted cross-forest configuration, make sure that the user doesn't have a mailbox.
  
```
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod OrgWideFB -Credentials (Get-Credential)
```

### Example 2

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest, and the specified account connects to the contoso.com forest. The specified account must be an existing account in the contoso.com forest.
  
```
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod PerUserFB -Credentials (Get-Credential)
```

### Example 3

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest and uses the service account (typically the local system account or the computer account) to connect to the contoso.com forest. Because the service is trusted, there is no issue with authorization when the current forest tries to retrieve free/busy information from contoso.com.
  
```
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod PerUserFB -UseServiceAccount $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

In Exchange Online, you need to run the **Add-AvailabilityConfig** cmdlet before you run the **Add-AvailabilityAddressSpace** cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccessMethod_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AvailabilityAccessMethod  <br/> | The _AccessMethod_ parameter specifies how the free/busy data is accessed. Valid values are: <br/>  `PerUserFB`: Per-user free/busy information can be requested. The free/busy data is accessed in the defined per-user free/busy proxy account or group, or in the All Exchange Servers group. This value requires a trust between the two forests, and requires you to use either the  _UseServiceAccount_ parameter or _Credentials_ parameter. <br/>  `OrgWideFB`: Only default free/busy for each user can be requested. The free/busy data is accessed in the per-user free/busy proxy account or group in the target forest. This value requires you to use either the  _UseServiceAccount_ parameter or _Credentials_ parameter. <br/>  `OrgWideFBBasic`: This value is reserved for internal Microsoft use.  <br/>  `InternalProxy`: The request is proxied to an Exchange in the site that has a later version of Exchange.  <br/>  `PublicFolder`: This value was used to access free/busy data on Exchange Server 2003 servers.  <br/> |
| _ForestName_ <br/> |Required  <br/> |System.String  <br/> |The  _ForestName_ parameter specifies the SMTP domain name of the target forest for users whose free/busy data must be retrieved. If your users are distributed among multiple SMTP domains in the target forest, run the **Add-AvailabilityAddressSpace** command once for each SMTP domain. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Credentials_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The  _Credentials_ parameter specifies the credentials for an account that has permission to access the Availability services in the target forest. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ProxyUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _ProxyUrl_ parameter was used to specify the URL that directed an Exchange 2007 Client Access server to proxy its free/busy requests through an Exchange 2010 or Exchange 2013 Client Access server when requesting federated free/busy data for a user in another organization. When you used this parameter, you needed to set the value of the _AccessMethod_ parameter to `InternalProxy`.  <br/> This parameter required that you created the proper trust relationships and sharing relationships between the Exchange organizations. For more information, see [New-FederationTrust](http://technet.microsoft.com/library/ab3bb2d0-c346-480d-93b2-be563aebc261.aspx).  <br/> |
| _TargetAutodiscoverEpr_ <br/> |Optional  <br/> |System.Uri  <br/> |The  _TargetAutodiscoverEpr_ parameter specifies the Autodiscover URL of Exchange Web Services for the external organization, for example, https://contoso.com/autodiscover/autodiscover.xml. Exchange uses Autodiscover to automatically detect the correct server endpoint for external requests. <br/> |
| _UseServiceAccount_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _UseServiceAccount_ parameter specifies whether to use the local Availability service account for authorization. Valid values <br/>  `$true`: The local Availability service account is used for authorization.  <br/>  `$false`: The local Availability service account isn't used for authorization. You need to use the  _Credentials_ parameter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

