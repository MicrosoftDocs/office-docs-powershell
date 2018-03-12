---
title: "Get-EcpVirtualDirectory"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: afa04216-965d-4a6c-949c-170f916e8f4c
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-EcpVirtualDirectory

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-EcpVirtualDirectory** cmdlet to view Exchange Control Panel (ECP) virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers. The Exchange admin center (EAC) uses the ECP virtual directories.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
> [!NOTE]
> The ECP web management interface was introduced in MicrosoftExchange Server 2010. In Exchange Server 2013 and Exchange Server 2016, the EAC virtual directories and the corresponding management cmdlets still use ECP in the name. You can use these cmdlets to manage ECP virtual directories on Exchange 2010, Exchange 2013, and Exchange 2016 servers. 
  
```
Get-EcpVirtualDirectory [-Identity <VirtualDirectoryIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all Exchange Control Panel virtual directories on the server named Server01.
  
```
Get-EcpVirtualDirectory -Server Server01
```

### Example 2

This example returns detailed information for the Exchange Control Panel virtual directory named "ecp (Default Web Site)" on the server named Server01.
  
```
Get-EcpVirtualDirectory -Identity "Server01\ecp*" | Format-List
```

### Example 3

This example returns a summary list of all Exchange Control Panel virtual directories in the client access services on all Mailbox servers in the organization.
  
```
Get-EcpVirtualDirectory
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server that hosts the virtual directory. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/>  You can't use the _Server_ and _Identity_ parameters in the same command. <br/> |
| _ADPropertiesOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ADPropertiesOnly_ switch specifies whether to return only the properties about the virtual directory stored in Active Directory. The properties stored in the Internet Information Services (IIS) metabase aren't returned. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.VirtualDirectoryIdParameter  <br/> | The _Identity_ parameter specifies the virtual directory that you want to view. <br/>  You can use any value that uniquely identifies the virtual directory. For example: <br/>  Name or `<Server>\Name` <br/>  Distinguished name (DN) <br/>  GUID <br/>  The **Name** value uses the syntax " `<VirtualDirectoryName> (<WebsiteName>)`" from the properties of the virtual directory. You can specify the wildcard character (*) instead of the default website by using the syntax  `<VirtualDirectoryName>*`.  <br/>  You can't use the _Identity_ and _Server_ parameters in the same command. <br/> |
| _ShowMailboxVirtualDirectories_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ShowMailboxVirtualDirectories_ switch shows information about backend virtual directories on Mailbox servers. You don't need to specify a value with this switch. <br/> By default, this cmdlet shows information about virtual directories in the Client Access services on Mailbox servers. Client connections are proxied from the Client Access services on Mailbox servers to the backend services on Mailbox servers. Clients don't connect directly to the backend services.  <br/> We recommend that you use this parameter only under the direction of Microsoft Customer Service and Support.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

