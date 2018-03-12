---
title: "Set-UMCallRouterSettings"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d7436ccb-4efd-465f-981a-f487e158cbf3
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-UMCallRouterSettings

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-UMCallRouterSettings** cmdlet to modify the configuration of the Microsoft Exchange Unified Messaging Call Router service. This service exists on Exchange servers that have the Client Access server role installed, and is used by telephony clients to connect to Exchange.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-UMCallRouterSettings [-Confirm [<SwitchParameter>]] [-DialPlans <MultiValuedProperty>] [-DomainController <Fqdn>] [-IPAddressFamily <IPv4Only | IPv6Only | Any>] [-IPAddressFamilyConfigurable <$true | $false>] [-MaxCallsAllowed <Int32>] [-Server <ServerIdParameter>] [-SipTcpListeningPort <Int32>] [-SipTlsListeningPort <Int32>] [-UMStartupMode <TCP | TLS | Dual>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the following configuration on the Exchange server named MyUMCallRouter: 
  
- Adds the server to the UM SIP dial plan MySIPDialPlan.
    
- Enables the Microsoft Exchange Unified Messaging Call Router service to accept both IPv4 and IPv6 data packets.
    
- Sets the maximum number of incoming voice, fax, auto attendant, and Outlook Voice Access calls to 150.
    
- Enables the Microsoft Exchange Unified Messaging Call Router service to start up using TLS mode.
    
```
Set-UMCallRouterSettings -DialPlans MySIPDialPlan -IPAddressFamily Any -Server MyUMCallRouter.northwindtraders.com -UMStartupMode TLS
```

### Example 2

This example removes the Exchange server named UMCallRouter001 from all UM SIP dial plans.
  
```
Set-UMCallRouterSettings -DialPlans $null -Server UMCallRouter001.contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DialPlans_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _DialPlans_ parameter specifies the dial plan used by the Microsoft Exchange Unified Messaging Call Router service. The Exchange server only needs to be associated with a UM dial plan if Lync Server 2010, Lync Server 2013, or Skype for Business Server 2015 is used in your organization. To remove an Exchange server from a dial plan, use `$null`. The default is no dial plans assigned.  <br/> To enter multiple values and overwrite any existing entries, use the following syntax:  `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/> To add or remove one or more values without affecting any existing entries, use the following syntax:  `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IPAddressFamily_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.IPAddressFamily  <br/> |The _IPAddressFamily_ parameter specifies whether the UM IP gateway will use Internet Protocol version 4 (IPv4), IPv6, or both to communicate. If set to `IPv4Only`, the UM IP gateway only uses IPv4 to communicate. If set to  `IPv6Only`, the UM IP gateway only uses IPv6. If set to  `Any`, IPv6 is used first, and then if necessary, it falls back to IPv4. The default is  `Any`.  <br/> |
| _IPAddressFamilyConfigurable_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IPAddressFamilyConfigurable_ parameter specifies whether you're able to set the _IPAddressFamily_ parameter to `IPv6Only` or `Any`. The default is  `$true`.  <br/> |
| _MaxCallsAllowed_ <br/> |Optional  <br/> |System.Int32  <br/> |The _MaxCallsAllowed_ parameter will be removed in future versions of the product. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/> |
| _SipTcpListeningPort_ <br/> |Optional  <br/> |System.Int32  <br/> |The _SipTcpListeningPort_ parameter specifies the TCP port that's used by the Microsoft Exchange Unified Messaging Call Router service to receive incoming calls. This TCP port is used when a UM dial plan isn't configured to use SIP Secured or Secured mode. The default is port `5060`.  <br/> |
| _SipTlsListeningPort_ <br/> |Optional  <br/> |System.Int32  <br/> |The _SipTlsListeningPort_ parameter specifies the Transport Layer Security (TLS) port that's used by the Microsoft Exchange Unified Messaging Call Router service to receive incoming calls. This TLS port is used when a UM dial plan is configured to use SIP Secured or Secured mode. The default is port `5061`.  <br/> |
| _UMStartupMode_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.UMStartupMode  <br/> |The _UMStartupMode_ parameter specifies whether the Microsoft Exchange Unified Messaging Call Router service starts up in `TCP`,  `TLS`, or  `Dual` mode. If the Exchange server isn't associated with any UM dial plans or is being added to UM dial plans that have different security settings, you should choose `Dual` mode. In `Dual` mode, the Microsoft server can listen on ports 5060 and 5061 at the same time. If the startup mode is changed, the Microsoft Exchange Unified Messaging Call Router service must be restarted. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

