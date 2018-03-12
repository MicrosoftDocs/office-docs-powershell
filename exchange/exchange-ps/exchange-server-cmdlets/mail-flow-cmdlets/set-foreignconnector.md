---
title: "Set-ForeignConnector"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 93d43160-f34a-418c-86b7-61c25fd9e847
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-ForeignConnector

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-ForeignConnector** cmdlet to modify an existing Foreign connector in the Transport service of a Mailbox server.
  
```
Set-ForeignConnector -Identity <ForeignConnectorIdParameter> [-AddressSpaces <MultiValuedProperty>] [-Comment <String>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-DropDirectory <String>] [-DropDirectoryQuota <Unlimited>] [-Enabled <$true | $false>] [-Force <SwitchParameter>] [-IsScopedConnector <$true | $false>] [-MaxMessageSize <Unlimited>] [-Name <String>] [-RelayDsnRequired <$true | $false>] [-SourceTransportServers <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example configures a 10 MB message size limit on the existing Foreign connector named Fax Connector.
  
```
Set-ForeignConnector "Fax Connector" -MaxMessageSize 10MB
```

## Detailed Description
<a name="DetailedDescription"> </a>

A Foreign connector uses a Drop directory in the Transport service of a Mailbox server to send messages to a local messaging server that doesn't use SMTP as its primary transport mechanism. These messaging servers are known as foreign gateway servers. Third-party fax gateway servers are examples of foreign gateway servers. The address spaces assigned to a Foreign connector can be SMTP or non-SMTP.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ForeignConnectorIdParameter  <br/> | The _Identity_ parameter specifies the Foreign connector that you want to modify. The _Identity_ parameter can take any of the following values for the Foreign connector object: <br/>  GUID <br/>  Connector name <br/> _ServerName\ConnectorName_ <br/> |
| _AddressSpaces_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _AddressSpaces_ parameter specifies the domain names to which the Foreign connector sends messages. The complete syntax for entering each address space is as follows: < _AddressSpaceType_>:< _AddressSpace_>;< _AddressSpaceCost_>  <br/> **AddressSpaceType**: The address space type may be  `SMTP`,  `X400`, or any other text string. If you omit the address space type, an SMTP address space type is assumed.  <br/> **AddressSpace**: For SMTP address space types, the address space that you enter must be RFC 1035-compliant. For example,  `*`,  `*.com`, and  `*.contoso.com` are permitted, but `*contoso.com` isn't permitted. For X.400 address space types, the address space that you enter must be RFC 1685-compliant, such aso=MySite;p=MyOrg;a=adatum;c=us. For all other values of address type, you can enter any text for the address space.  <br/> **AddressSpaceCost**: The valid input range for the cost is from 1 through 100. A lower cost indicates a better route. If you omit the address space cost, a cost of 1 is assumed. If you enter a non-SMTP address space that contains a semicolon (;), you must specify the address space cost. <br/>  If you specify the address space type or the address space cost, you must enclose the address space in quotation marks ("). For example, the following address space entries are equivalent: <br/>  `"SMTP:contoso.com;1"` <br/>  `"contoso.com;1"` <br/>  `"SMTP:contoso.com"` <br/>  `contoso.com` <br/>  You may specify multiple address spaces by separating the address spaces with commas, for example: `contoso.com,fabrikam.com`. If you specify the address space type or the address space cost, you must enclose the address space in quotation marks ("), for example:  `"contoso.com;2","fabrikam.com;3"`.  <br/>  To add or remove one or more address space values without affecting any existing entries, use the following syntax: `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The _Comment_ parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: `"This is an admin note"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _DropDirectory_ <br/> |Optional  <br/> |System.String  <br/> | The _DropDirectory_ parameter specifies the name of the Drop directory used by this Foreign connector. All outbound messages sent to address spaces defined by this Foreign connector are put in the specified Drop directory. The location of the Drop directory for each Foreign connector is controlled by the following two items: <br/> **RootDropDirectoryPath parameter in the Set-TransportService cmdlet**: This option is used for all Foreign connectors that exist on the Mailbox server. The value of the _RootDropDirectoryPath_ parameter may be a local path or a Universal Naming Convention (UNC) path to a remote server. <br/> **DropDirectory parameter in the Set-ForeignConnector cmdlet**: This value is set for each Foreign Connector that exists on the server.  <br/>  By default, the _RootDropDirectoryPath_ parameter is blank. This indicates the value of _RootDropDirectoryPath_ is the Exchange 2010 installation folder. The default Exchange 2010 installation folder is C:\Program Files\Microsoft\Exchange Server\. By default, the value of the _DropDirectory_ parameter is the name of the Foreign connector. <br/>  If the value of the _DropDirectory_ parameter doesn't contain absolute path information, the location of the Drop directory is defined by the combination of the _DropDirectory_ parameter and the _RootDropDirectoryPath_ parameter. If the value of the _DropDirectory_ parameter contains absolute path information, the value of the _RootDropDirectoryPath_ must be unspecified. The location of the Drop directory is defined only by the value of the _DropDirectory_ parameter. <br/>  The Drop directory isn't created for you. Therefore, you have to manually create each Drop directory folder. <br/>  The Drop directory must have the following permissions assigned to it: <br/>  Network Service: Full Control <br/>  System: Full Control <br/>  Administrators: Full Control <br/> |
| _DropDirectoryQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _DropDirectoryQuota_ parameter specifies the maximum size of all message files in the Drop directory. When the specified value is reached, no new message files can be copied into the Drop directory until the existing messages are delivered and deleted. <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The valid input range for this parameter is from 1 through 2147483647 bytes. If you enter a value of `unlimited`, no message size limit is imposed on the Drop directory. The default value is  `unlimited`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Enabled_ parameter specifies whether to enable the Foreign connector. The valid values are `$true` or `$false`. The default value is  `$true`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _IsScopedConnector_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IsScopedConnector_ parameter specifies the availability of the connector to other Mailbox servers. When the value of this parameter is `$false`, the connector can be used by all Mailbox servers in the Exchange organization. When the value of this parameter is  `$true`, the connector can be used only by Mailbox servers in the same Active Directory site. The default value is  `$false`.  <br/> |
| _MaxMessageSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _MaxMessageSize_ parameter specifies the maximum size of a message that can pass through this Foreign connector. <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  If you enter a value of `unlimited`, no message size limit is imposed on this Foreign connector. The default value is  `unlimited`. The valid input range for this parameter is from 0 through 2147483647 kilobytes. If you set the value of the _MaxMessageSize_ parameter to 0, you effectively disable the Foreign connector. However, if you set the value of the _MaxMessageSize_ parameter to 0 when the value of the _Enabled_ attribute is `$true`, you generate event log errors. The preferred method to disable the Foreign connector is to use the _Enabled_ parameter. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies a descriptive name for the Foreign connector. <br/> |
| _RelayDsnRequired_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _RelayDsnRequired_ parameter specifies whether a Relay delivery status notification (DSN) is required by the Foreign connector when messages are written to the Drop directory. The valid input values for this parameter are `$true` or `$false`. The default value is  `$false`.  <br/> |
| _SourceTransportServers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _SourceTransportServers_ parameter specifies the names of the Mailbox servers that use this Foreign connector. Having a single Foreign connector homed on multiple Mailbox servers running the Transport service provides fault tolerance and high availability if one of the servers fails. The default value of this parameter is the name of the Mailbox server on which this Foreign connector was first installed. <br/> To enter multiple values and overwrite any existing entries, use the following syntax:  `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/> To add or remove one or more values without affecting any existing entries, use the following syntax:  `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

