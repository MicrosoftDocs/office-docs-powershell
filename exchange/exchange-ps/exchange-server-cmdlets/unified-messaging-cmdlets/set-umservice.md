---
title: "Set-UMService"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: daa3a3f4-fff6-407e-b83e-496728f0f1e4
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-UMService

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-UMService** cmdlet to modify the properties of the Microsoft Exchange Unified Messaging service on Exchange servers in your organization. The Unified Messaging service exists on Exchange Server 2016 and Exchange Server 2013 Mailbox servers, and on Exchange Server 2010 Unified Messaging servers.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-UMService -Identity <UMServerIdParameter> [-Confirm [<SwitchParameter>]] [-DialPlans <MultiValuedProperty>] [-DomainController <Fqdn>] [-GrammarGenerationSchedule <ScheduleInterval[]>] [-IPAddressFamily <IPv4Only | IPv6Only | Any>] [-IPAddressFamilyConfigurable <$true | $false>] [-IrmLogEnabled <$true | $false>] [-IrmLogMaxAge <EnhancedTimeSpan>] [-IrmLogMaxDirectorySize <Unlimited>] [-IrmLogMaxFileSize <ByteQuantifiedSize>] [-IrmLogPath <LocalLongFullPath>] [-MaxCallsAllowed <Int32>] [-SIPAccessService <ProtocolConnectionSettings>] [-Status <Enabled | Disabled | NoNewCalls>] [-UMStartupMode <TCP | TLS | Dual>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example performs the following actions:
  
- Enables the Microsoft Exchange Unified Messaging service on the Mailbox server MyUMServer to accept both IPv4 and IPv6 data packets.
    
- Enables the Microsoft Exchange Unified Messaging service on the Mailbox server MyUMServer to start up using both TCP and TLS mode.
    
```
Set-UMService -Identity MyUMServer -IPAddressFamily Any -UMStartupMode Dual
```

### Example 2

This example removes the Mailbox server MyUMServer from all UM dial plans.
  
```
Set-UMService -Identity MyUMServer -DialPlans $null
```

### Example 3

This example performs the following actions: 
  
- Adds the Mailbox server MyUMServer to the UM dial plan MySIPDialPlan.
    
- Sets the maximum number of incoming calls to 50.
    
- Sets northamerica.lyncpoolna.contoso.com as the FQDN for the SIP access service that is used by Microsoft Lync Server or Skype for Business Server for inbound and outbound calling from remote Lync or Skype for Business clients.
    
- Enables the Microsoft Exchange Unified Messaging service on the Mailbox server MyUMServer to start up in TLS mode.
    
```
Set-UMService -Identity MyUMServer -DialPlans MySIPDialPlan -MaxCallsAllowed 50 -SipAccessService northamerica.lyncpoolna.contoso.com -UMStartupMode TLS
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMServerIdParameter  <br/> | The _Identity_ parameter specifies the Exchange server that hosts the Unified Messaging service that you want to modify. For example: <br/>  You can use any value that uniquely identifies the Exchange server. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  `ExchangeLegacyDN` <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DialPlans_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _DialPlans_ parameter specifies all dial plans that the Unified Messaging service handles incoming calls for. <br/> Exchange 2016 and Exchange 2013 servers can't be associated with a TelExt or E.164 UM dial plan, but can be associated or added to SIP dial plans. If you're integrating Unified Messaging with Lync Server 2010, Lync Server 2013, or Skype for Business Server 2015, you need to associate or add all Exchange 2016 and Exchange 2013 servers to SIP dial plans.  <br/> You can also use this parameter to associate Exchange 2010 Unified Messaging servers to a UM dial plan.  <br/> To enter multiple values and overwrite any existing entries, use the following syntax:  `<value1>,<value2>...`. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax:  `"<value1>","<value2>"...`.  <br/> To add or remove one or more values without affecting any existing entries, use the following syntax:  `@{Add="<value1>","<value2>"...; Remove="<value1>","<value2>"...}`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _GrammarGenerationSchedule_ <br/> |Optional  <br/> |Microsoft.Exchange.Common.ScheduleInterval[]  <br/> |The _GrammarGenerationSchedule_ parameter specifies the scheduled times to start speech grammar generation. This parameter allows only one start time per day. The default scheduled time for grammar generation is 02:00-02:30 local time each day. <br/> |
| _IPAddressFamily_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.IPAddressFamily  <br/> | The _IPAddressFamily_ parameter specifies whether the UM IP gateway will use IPv4, IPv6, or both to communicate. Valid values are: <br/>  `IPv4` <br/>  `IPv6` <br/>  `Any`: IPv6 is used first, and if necessary, the UM IP gateway falls back to IPv4. This is the default value.  <br/> |
| _IPAddressFamilyConfigurable_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IPAddressFamilyConfigurable_ parameter specifies whether you're able to set the _IPAddressFamily_ parameter to `IPv6Only` or `Any`. The default is  `$true`.  <br/> |
| _IrmLogEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _IrmLogEnabled_ parameter specifies whether to enable logging of Information Rights Management (IRM) transactions. IRM logging is enabled by default. Valid values are: <br/>  `$true`: Enable IRM logging  <br/>  `$false`: Disable IRM logging  <br/> |
| _IrmLogMaxAge_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _IrmLogMaxAge_ parameter specifies the maximum age for the IRM log file. Log files that are older than the specified value are deleted. The default value is 30 days. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> The valid input range for this parameter is from 00:00:00 through 24855.03:14:07. Setting the value of the _IrmLogMaxAge_ parameter to 00:00:00 prevents the automatic removal of IRM log files because of their age. <br/> |
| _IrmLogMaxDirectorySize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _IrmLogMaxDirectorySize_ parameter specifies the maximum size of all IRM logs in the connectivity log directory. When a directory reaches its maximum file size, the server deletes the oldest log files first. The default value is 250 megabytes (MB). <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The value of the _IrmLogMaxFileSize_ parameter must be less than or equal to the value of the _IrmLogMaxDirectorySize_ parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of `unlimited`, no size limit is imposed on the connectivity log directory.  <br/> |
| _IrmLogMaxFileSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ByteQuantifiedSize  <br/> | The _IrmLogMaxFileSize_ parameter specifies the maximum size of each IRM log file. When a log file reaches its maximum file size, a new log file is created. The default value is 10 MB. <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The value of the _IrmLogMaxFileSize_ parameter must be less than or equal to the value of the _IrmLogMaxDirectorySize_ parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of `unlimited`, no size limit is imposed on the IRM log files.  <br/> |
| _IrmLogPath_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.LocalLongFullPath  <br/> |The _IrmLogPath_ parameter specifies the default IRM log directory location. The default location is `%ExchangeInstallPath%IRMLogs`.  <br/> If you set the value of this parameter to  `$null`, you effectively disable IRM logging. However, setting this parameter to  `$null` when the value of the _IrmLogEnabled_parameter is  `$true`, generates errors in the Application event log. The preferred way to disable IRM logging is to set the _IrmLogEnabled_ parameter to `$false`.  <br/> |
| _MaxCallsAllowed_ <br/> |Optional  <br/> |System.Int32  <br/> |The _MaxCallsAllowed_ parameter specifies the maximum number of concurrent voice calls that the Unified Messaging service allows. The default value is 100. <br/> |
| _SIPAccessService_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ProtocolConnectionSettings  <br/> |The _SIPAccessService_ parameter specifies the FQDN and TCP port of the nearest Lync Server pool or Skype for Business Server pool location for inbound and outbound calls from remote Lync or Skype for Business users located outside of the network. When this parameter isn't set, the Microsoft Exchange Unified Messaging service may select a Lync Server pool or Skype for Business Server pool for Real-Time Transport Protocol (RTP) media traffic that isn't the closest geographically to the remote user. <br/> This parameter is optional when you're configuring Unified Messaging with single Lync Server pool or Skype for Business Server pool deployments. However, for Lync Server or Skype for Business Server deployments that span multiple geographic regions, it's recommended that you specify this parameter. This parameter is set on a per-Unfined Messaging service basis and must point to the Lync Server pool or Skype for Business Server pool that is located the closest geographically to the Exchange server.  <br/> |
| _Status_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ServerStatus  <br/> |The _Status_ parameter will be removed in future versions of the product. <br/> |
| _UMStartupMode_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.UMStartupMode  <br/> | The _UMStartupMode_ parameter specifies the startup mode for the Unified Messaging service. Valid values are: <br/>  `TCP` (This is the default value) <br/>  `TLS` <br/>  `Dual`: The service can listen on ports 5060 and 5061 at the same time. If you add the Exchange server to UM dial plans that have different security settings, you should use this value.  <br/>  If you change the value of this parameter, you need to restart the Unified Messaging service. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

