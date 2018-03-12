---
title: "Set-ExchangeServer"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 8e8d3fca-59b3-4355-a637-28bf5e5ca4cf
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-ExchangeServer

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-ExchangeServer** cmdlet to set Exchange attributes in Active Directory for a specified server.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ExchangeServer -Identity <ServerIdParameter> [-Confirm [<SwitchParameter>]] [-CustomerFeedbackEnabled <$true | $false>] [-DomainController <Fqdn>] [-ErrorReportingEnabled <$true | $false>] [-InternetWebProxy <Uri>] [-MailboxProvisioningAttributes <MailboxProvisioningAttributes>] [-MonitoringGroup <String>] [-ProductKey <ProductKey>] [-StaticConfigDomainController <String>] [-StaticDomainControllers <MultiValuedProperty>] [-StaticExcludedDomainControllers <MultiValuedProperty>] [-StaticGlobalCatalogs <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example disables error reporting on the specified server.
  
```
Set-ExchangeServer -Identity TestServer.Contoso.com -ErrorReportingEnabled $false
```

### Example 2

This example enrolls an Exchange server into the Customer Experience Improvement Program. In this example, the server name is SERVER01.
  
```
Set-ExchangeServer -Identity 'SERVER01' -CustomerFeedbackEnabled $true
```

### Example 3

This example removes an Exchange server from the Customer Experience Improvement Program. In this example, the server name is SERVER01.
  
```
Set-ExchangeServer -Identity 'SERVER01' -CustomerFeedbackEnabled $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-ExchangeServer** cmdlet sets generic Exchange attributes in Active Directory for a specified computer. You can only use this task on one server at a time. If you want to bulk manage your servers running Microsoft Exchange, add this task to a script.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _Identity_ parameter specifies the GUID, distinguished name (DN), or name of the server. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CustomerFeedbackEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _CustomerFeedbackEnabled_ parameter specifies whether the Exchange server is enrolled in the Microsoft Customer Experience Improvement Program (CEIP). The CEIP collects anonymous information about how you use Exchange and problems that you might encounter. If you decide not to participate in the CEIP, the servers are opted-out automatically. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _ErrorReportingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _ErrorReportingEnabled_ parameter specifies whether error reporting is enabled. <br/> |
| _InternetWebProxy_ <br/> |Optional  <br/> |System.Uri  <br/> |The _InternetWebProxy_ parameter specifies which web proxy servers, such as computers running Forefront Threat Management Gateway, Exchange should use to reach the Internet. <br/> |
| _MailboxProvisioningAttributes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.MailboxProvisioningAttributes  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MonitoringGroup_ <br/> |Optional  <br/> |System.String  <br/> |The _MonitoringGroup_ parameter specifies how to add your Exchange servers to monitoring groups. You can add your servers to an existing group or create a monitoring group based on location or deployment, or to partition monitoring responsibility among your servers. <br/> |
| _ProductKey_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.SystemConfigurationTasks.ProductKey  <br/> |The _ProductKey_ parameter specifies the server product key. <br/> |
| _StaticConfigDomainController_ <br/> |Optional  <br/> |System.String  <br/> |The _StaticConfigDomainController_ parameter specifies whether to configure a domain controller to be used by the server via Directory Service Access (DSAccess). <br/> |
| _StaticDomainControllers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _StaticDomainControllers_ parameter specifies whether to configure a list of domain controllers to be used by the server via DSAccess. <br/> |
| _StaticExcludedDomainControllers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _StaticExcludedDomainControllers_ parameter specifies whether to exclude a list of domain controllers from being used by the server. <br/> |
| _StaticGlobalCatalogs_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _StaticGlobalCatalogs_ parameter specifies whether to configure a list of global catalogs to be used by the server via DSAccess. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

