---
title: "Set-RpcClientAccess"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: b606d241-aecd-4bb9-a34f-6dd6b02a712c

description: "This cmdlet is available only in on-premises Exchange."
---

# Set-RpcClientAccess

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-RpcClientAccess** cmdlet to modify the settings of the Microsoft Exchange RPC Client Access service on Exchange servers that have the Client Access server role installed. These settings affect Outlook clients that connect by using Outlook Anywhere (RPC over HTTP).
  
```
Set-RpcClientAccess -Server <ServerIdParameter> [-BlockedClientVersions <String>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-EncryptionRequired <$true | $false>] [-MaximumConnections <Int32>] [-Name <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example prevents Outlook Anywhere connections by Outlook 2010 clients on the server named MBX01.
  
```
Set-RpcClientAccess -Server MBX01 -BlockedClientVersions 14.0.0-14.32767.65535
```

### Example 2

This example prevents Outlook Anywhere connections by Outlook 2013 clients that don't have KB3054940 installed (version 15.0.4737.1000) on the server named MBX01.
  
 **Note**: You can determine specific client software versions by parsing the RPC Client Access log files located at  `%ExchangeInstallPath%Logging\RPC Client Access`.
  
```
Set-RpcClientAccess -Server MBX01 -BlockedClientVersions 15.0.0-15.4737.999
```

## Detailed Description
<a name="DetailedDescription"> </a>

Outlook 2007 isn't supported in Exchange 2016, so you shouldn't see Outlook connections at or below version 12. _Y_. _Z_. However, you should monitor the RPC Client Access log to see the client versions that are connecting to your Exchange servers before you block any client versions.
  
To block Outlook versions for specific mailboxes, use the **Set-CASMailbox** cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server that you want to modify. <br/>  You can use any value that uniquely identifies the server. For example: <br/>  Name (for example, Exchange01) <br/>  Distinguished name (DN) (for example, `CN=Exchange01,CN=Servers,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=First Organization,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com`)  <br/>  Exchange Legacy DN (for example, `/o=First Organization/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Exchange01`)  <br/>  GUID (for example, `bc014a0d-1509-4ecc-b569-f077eec54942`)  <br/> |
| _BlockedClientVersions_ <br/> |Optional  <br/> |System.String  <br/> | The _BlockedClientVersions_ parameter specifies the RPC client versions that aren't allowed to connect to the specified Exchange server. For example, the Microsoft Exchange RPC Client Access service rejects an Outlook Anywhere connection if the version of Outlook is the specified value, or is in the specified range. <br/>  Valid version values are in the format _X_. _Y_. _Z_. RPC client versions are typically reported in format _X_.0. _Y_. _Z_ format, but for this parameter, you need to specify the value as _X_. _Y_. _Z_.  <br/> _X_ is the major version number. For example, Outlook 2016 is 16, Outlook 2013 is 15, and Outlook 2010 is 14. <br/> _Y_ is the minor revision number, and must be less than or equal to 32767. <br/> _Z_ is the build number, and must be less than or equal to 65535. <br/>  You can specify ranges. For example, `-13.32767.65535`,  `14.0.0-14.32767.65535`, or  `15.0.0-`.  <br/>  You can specify multiple individual values or range values separated by semicolons (;). <br/> > [!CAUTION]>  Be careful when you restrict client access, because Exchange server components might also use RPC to log on. Some components may report their client version as a text string, while others may report the Exchange build number. Monitor the RPC Client Access log to see the client versions that are connecting to your Exchange server before you block any client versions.          |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EncryptionRequired_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _EncryptionRequired_ parameter specifies whether encryption is required for RPC client connections. Valid values are: <br/>  `$true`: Unencrypted RPC client connections are rejected. This is the default value.  <br/>  `$false`: Unencrypted RPC client connections are allowed.  <br/> |
| _MaximumConnections_ <br/> |Optional  <br/> |System.Int32  <br/> |The _MaximumConnections_ parameter specifies the maximum number of concurrent client connections that are allowed by the Microsoft Exchange RPC Client Access service. The default value is 65536. <br/> **Note**: Although you can configure a non-default value for this parameter, changes to this setting aren't enforced.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the configuration object in Active Directory. By default, this parameter is set to `RpcClientAccess`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

