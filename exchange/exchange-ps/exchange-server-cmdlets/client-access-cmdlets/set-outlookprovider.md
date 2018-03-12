---
title: "Set-OutlookProvider"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 8a3d7245-528d-4501-9fc4-92ce0616cff9
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-OutlookProvider

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-OutlookProvider** cmdlet to set specific global settings using the **msExchOutlookProvider** attribute on the **msExchAutoDiscoverConfig** object in Active Directory.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-OutlookProvider -Identity <OutlookProviderIdParameter> [-CertPrincipalName <String>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Name <String>] [-OutlookProviderFlags <None | ServerExclusiveConnect>] [-RequiredClientVersions <String[]>] [-Server <String>] [-TTL <Int32>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the duration that the Autodiscover service settings are valid for the Microsoft Outlook provider **msExchAutoDiscoverConfig**.
  
```
Set-OutlookProvider -Identity msExchAutoDiscoverConfig -TTL 2
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-OutlookProvider** cmdlet creates the global settings for the Autodiscover service. It sets the **AutoDiscoverConfig** object under the **Global Settings** object in Active Directory and sets the attributes specified in the parameters listed in the Parameters section.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.OutlookProviderIdParameter  <br/> |The _Identity_ parameter specifies the ADIDParameter value of the MAPI protocol for which you want to set global settings. <br/> |
| _CertPrincipalName_ <br/> |Optional  <br/> |System.String  <br/> |The _CertPrincipalName_ parameter specifies the Secure Sockets Layer (SSL) certificate principal name required for connecting to Exchange from an external location. <br/> This parameter is only used for Outlook Anywhere clients.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies a common name for the **Outlook Provider Configuration** object. This can be a user-friendly name for identification. <br/> |
| _OutlookProviderFlags_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.OutlookProviderFlags  <br/> |The _OutlookProviderFlags_ parameter specifies how Outlook clients should connect to the Exchange server. The value can be set to `ServerExclusiveConnect`,  `ExternalClientsRequireSSL`,  `InternalClientsRequireSSL`, or to  `None` to clear the flags. The recommended value is `None`, which is also the default setting.  <br/> |
| _RequiredClientVersions_ <br/> |Optional  <br/> |System.String[]  <br/> |The _RequiredClientVersions_ parameter specifies the minimum version of Microsoft Outlook that's allowed to connect to the Exchange server. This information is in the Autodiscover response to the client connection request. Valid input for this parameter is " _\<MinimumVersion\>_, _\<ExpirationDate\>_".  <br/> _\<MinimumVersion\>_ is the version of Outlook in the format _xx.x.xxxx.xxxx_. For example, to specify Outlook 2010 Service Pack 2 (SP2), use the value  `14.0.7012.1000`.  <br/> _\<ExpirationDate\>_ is the UTC date-time when connections by older versions of Outlook will be blocked. The UTC date-time is represented in the ISO 8601 date-time format: _yyyy-mm-dd_T _hh:mm:ss.fff_Z, where _yyyy_ = year, _mm_ = month, _dd_ = day, T indicates the beginning of the time component, _hh_ = hour, _mm_ = minute, _ss_ = second, _fff_ = fractions of a second, and Z signifies Zulu, which is another way to denote UTC. <br/> An example of a valid value for this parameter is  `"14.0.7012.1000, 2014-01-01T12:00:00Z"`.  <br/> |
| _Server_ <br/> |Optional  <br/> |System.String  <br/> |The _Server_ parameter specifies the Mailbox server to use for Outlook Anywhere clients. <br/> |
| _TTL_ <br/> |Optional  <br/> |System.Int32  <br/> |The _TTL_ parameter specifies the duration (in hours) that the specified settings are valid. <br/> If a value is specified, the settings are rediscovered via the Autodiscover service after the duration specified with this parameter. A value of 0 indicates that no rediscovery is required. The default value is 1 hour.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

