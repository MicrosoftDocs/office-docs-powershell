---
title: "New-ForeignConnector"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 111b71d0-75f2-45b2-a9c9-b4ff51af57b7
description: "This cmdlet is available only in on-premises Exchange."
---

# New-ForeignConnector

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-ForeignConnector** cmdlet to create a new Foreign connector in the Transport service of a Mailbox server.
  
```
New-ForeignConnector -AddressSpaces <MultiValuedProperty> -Name <String> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-IsScopedConnector <$true | $false>] [-SourceTransportServers <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a Foreign connector with the following properties:
  
- Connector name: Contoso Foreign Connector
    
- Address space: "c=US;a=Fabrikam;P=Contoso"
    
- Address space type: X.400
    
- Address space cost: 5
    
- Source transport servers: Hub01 and Hub02
    
```
New-ForeignConnector -Name "Contoso Foreign Connector" -AddressSpaces "X400:c=US;a=Fabrikam;P=Contoso;5" -SourceTransportServers Hub01,Hub02
```

## Detailed Description
<a name="DetailedDescription"> </a>

A Foreign connector uses a Drop directory in the Transport service of a Mailbox server to send messages to a local messaging server that doesn't use SMTP as its primary transport mechanism. These messaging servers are known as foreign gateway servers. Third-party fax gateway servers are examples of foreign gateway servers. The address spaces assigned to a Foreign connector can be SMTP or non-SMTP.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AddressSpaces_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _AddressSpaces_ parameter specifies the domain names to which the Foreign connector sends messages. The complete syntax for entering each address space is as follows: < _AddressSpaceType_>:< _AddressSpace_>;< _AddressSpaceCost_>  <br/> **AddressSpaceType**: The address space type may be  `SMTP`,  `X400`, or any other text string. If you omit the address space type, an SMTP address space type is assumed.  <br/> **AddressSpace**: For SMTP address space types, the address space that you enter must be RFC 1035-compliant. For example,  `*`,  `*.com`, and  `*.contoso.com` are permitted, but `*contoso.com` isn't permitted. For X.400 address space types, the address space that you enter must be RFC 1685-compliant, such aso=MySite;p=MyOrg;a=adatum;c=us. For all other values of an address type, you can enter any text for the address space.  <br/> **AddressSpaceCost**: The valid input range for the cost is from 1 through 100. A lower cost indicates a better route. If you omit the address space cost, a cost of 1 is assumed. If you enter a non-SMTP address space that contains the semicolon character (;), you must specify the address space cost.  <br/>  If you specify the address space type or the address space cost, you must enclose the address space in quotation marks ("). For example, the following address space entries are equivalent: <br/>  `"SMTP:contoso.com;1"` <br/>  `"contoso.com;1"` <br/>  `"SMTP:contoso.com"` <br/>  `contoso.com` <br/>  You may specify multiple address spaces by separating the address spaces with commas, for example: `contoso.com,fabrikam.com`. If you specify the address space type or the address space cost, you must enclose the address space in quotation marks ("), for example:  `"contoso.com;2","fabrikam.com;3"`.  <br/>  To add or remove one or more address space values without affecting any existing entries, use the following syntax: `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the name for the Foreign connector. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _IsScopedConnector_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IsScopedConnector_ parameter specifies the availability of the connector to other Mailbox servers. When the value of this parameter is `$false`, the connector can be used by all Mailbox servers in the Exchange organization. When the value of this parameter is  `$true`, the connector can be used only by Mailbox servers in the same Active Directory site. The default value is  `$false`.  <br/> |
| _SourceTransportServers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _SourceTransportServers_ parameter specifies the names of the Mailbox servers that use this Foreign connector. Having a single Foreign connector homed on multiple servers provides fault tolerance and high availability if one of the Mailbox servers fails. The default value of this parameter is the name of the server on which this Foreign connector is first installed. <br/> To enter multiple values and overwrite any existing entries, use the following syntax:  `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/> To add or remove one or more values without affecting any existing entries, use the following syntax:  `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

