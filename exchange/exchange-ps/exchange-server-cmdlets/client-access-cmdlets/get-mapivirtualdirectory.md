---
title: "Get-MapiVirtualDirectory"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/27/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 6837cb55-6734-4a28-9062-7227f57dafb2
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-MapiVirtualDirectory

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-MapiVirtualDirectory** cmdlet to view Message Application Programming Interface (MAPI) virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers. A MAPI virtual directory is used by supported versions of Microsoft Outlook to connect to mailboxes by using the MAPIHTTP protocol.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MapiVirtualDirectory [-Identity <VirtualDirectoryIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of the MAPI virtual directories on the server named ContosoMail.
  
```
Get-MapiVirtualDirectory -Server ContosoMail
```

### Example 2

These examples return detailed information for the MAPI virtual directory named "mapi (Default Web Site)" on the server named ContosoMail. All three commands do the same thing.
  
```
Get-MapiVirtualDirectory -Identity "ContosoMail\mapi (Default Web Site)" | Format-List; Get-MapiVirtualDirectory "ContosoMail\mapi (Default Web Site)" | Format-List; Get-MapiVirtualDirectory ContosoMai\mapi* | Format-List
```

### Example 3

This example returns a summary list of all MAPI virtual directories in the client access services on all Mailbox servers in the organization.
  
```
Get-MapiVirtualDirectory
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
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.VirtualDirectoryIdParameter  <br/> | The _Identity_ parameter specifies the MAPI virtual directory that you want to view. <br/>  You can use any value that uniquely identifies the virtual directory. For example: <br/>  Name or `<Server>\Name` <br/>  Distinguished name (DN) <br/>  GUID <br/>  The **Name** value uses the syntax " `<VirtualDirectoryName> (<WebsiteName>)`" from the properties of the virtual directory. You can specify the wildcard character (*) instead of the default website by using the syntax  `<VirtualDirectoryName>*`.  <br/>  You can't use the _Identity_ and _Server_ parameters in the same command. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

