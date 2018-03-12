---
title: "Set-ClientAccessServer"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: ee636e80-7111-4d99-8d48-db200d1f78d3
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-ClientAccessServer

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-ClientAccessServer** cmdlet to modify the client access configuration settings on Mailbox servers.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ClientAccessServer [-Array <ClientAccessArrayIdParameter>] [-AutoDiscoverServiceInternalUri <Uri>] [-AutoDiscoverSiteScope <MultiValuedProperty>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures the internal Autodiscover URL for the Active Directory site named Mail in the client access services on the server named MBX-01.
  
```
Set-ClientAccessServer -Identity "MBX-01" -AutoDiscoverServiceInternalUri "https://mbx01.contoso.com/autodiscover/autodiscover.xml" -AutoDiscoverSiteScope "Mail"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-ClientAccessServer** cmdlet will be removed in a future version of Exchange. You should use the **Set-ClientAccessService** cmdlet instead.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ClientAccessServerIdParameter  <br/> | The _Identity_ parameter specifies the server that you want to modify. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  FQDN <br/>  GUID <br/> |
| _AlternateServiceAccountCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential[]  <br/> |The _AlternateServiceAccountCredential_ parameter specifies a credential an alternative service account that's typically used for Kerberos authentication in Exchange Server 2010 coexistence environments. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _Array_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ClientAccessArrayIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AutoDiscoverServiceInternalUri_ <br/> |Optional  <br/> |System.Uri  <br/> |The _AutoDiscoverServiceInternalUri_ parameter specifies the internal URL of the Autodiscover service. <br/> |
| _AutoDiscoverSiteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _AutoDiscoverSiteScope_ parameter specifies the Active Directory site that the Autodiscover service is authoritative for. Clients that connect to the Autodiscover service by using the internal URL need to exist in the specified site. <br/> To see the available Active Directory sites, use the **Get-ADSite** cmdlet. <br/> To enter multiple values and overwrite any existing entries, use the following syntax:  `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/> To add or remove one or more values without affecting any existing entries, use the following syntax:  `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _CleanUpInvalidAlternateServiceAccountCredentials_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _CleanUpInvalidAlternateServiceAccountCredentials_switch specifies whether to remove a previously configured alternate service account that's no longer valid. You don't need to specify a value with this switch.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _RemoveAlternateServiceAccountCredentials_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _RemoveAlternateServiceAccountCredentials_switch specifies whether to remove a previously distributed alternate service account. You don't need to specify a value with this switch.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

