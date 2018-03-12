---
title: "New-EdgeSyncServiceConfig"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 721a0666-1830-4072-9aff-1b54ee53080b
description: "This cmdlet is available only in on-premises Exchange."
---

# New-EdgeSyncServiceConfig

This cmdlet is available only in on-premises Exchange.
  
Use the **New-EdgeSyncServiceConfig** cmdlet to create edge synchronization service settings that control the general synchronization behavior shared by all EdgeSync services.
  
```
New-EdgeSyncServiceConfig [-ConfigurationSyncInterval <EnhancedTimeSpan>] [-Confirm [<SwitchParameter>]] [-CookieValidDuration <EnhancedTimeSpan>] [-DomainController <Fqdn>] [-FailoverDCInterval <EnhancedTimeSpan>] [-LockDuration <EnhancedTimeSpan>] [-LockRenewalDuration <EnhancedTimeSpan>] [-LogEnabled <$true | $false>] [-LogLevel <None | Low | Medium | High>] [-LogMaxAge <EnhancedTimeSpan>] [-LogMaxDirectorySize <Unlimited>] [-LogMaxFileSize <Unlimited>] [-LogPath <String>] [-OptionDuration <EnhancedTimeSpan>] [-RecipientSyncInterval <EnhancedTimeSpan>] [-Site <AdSiteIdParameter>] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates EdgeSync service settings with the following configuration:
  
- EdgeSync logging is enabled.
    
- The log files are stored in the EdgeSyncLog share on Server01.
    
- The maximum individual log file size is 5 megabytes (MB).
    
- The log files are kept for 3 days.
    
```
New-EdgeSyncServiceConfig -LogEnabled $true -LogPath "\\Server01\EdgeSyncLog" -LogMaxFileSize 5MB -LogMaxAge 3
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ConfigurationSyncInterval_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _ConfigurationSyncInterval_ parameter specifies how frequently the EdgeSync service synchronizes configuration data. The default value is 3 minutes. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CookieValidDuration_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _CookieValidDuration_ parameter specifies how long a cookie record is valid. The default value is 21 days. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _FailoverDCInterval_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _FailoverDCInterval_ parameter specifies how long EdgeSync waits before failing over to another domain controller if it can't read configuration data from Active Directory. The default value is 5 minutes. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _LockDuration_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _LockDuration_ parameter specifies how long an instance of the EdgeSync service can maintain an exclusive lock on the synchronization rights. While an EdgeSync service maintains an exclusive lock on synchronization rights, no other EdgeSync service can take over synchronization. The default value is 6 minutes. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _LockRenewalDuration_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _LockRenewalDuration_ parameter specifies how long before the expiry of an exclusive lock an EdgeSync service can renew the lock. The default value is 4 minutes. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _LogEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _LogEnabled_ parameter enables or disables the EdgeSync log. Valid input for this parameter is `$true` or `$false`. The default value is  `$true`.  <br/> |
| _LogLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.EdgeSyncLoggingLevel  <br/> |The _LogLevel_ parameter specifies the EdgeSync logging level. Valid values for this parameter are `None`,  `Low`,  `Medium` and `High`. The default value is  `None`.  <br/> |
| _LogMaxAge_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _LogMaxAge_ parameter specifies the maximum duration in days to keep the EdgeSyncLog files. Log files older than the specified value can be overwritten. The default value is 30 days. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _LogMaxDirectorySize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _LogMaxDirectorySize_ parameter specifies the maximum amount of disk space the EdgeSyncLog directory can use. The default value is 250 MB. <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The value of the _LogMaxFileSize_ parameter must be less than or equal to the value of the _LogMaxDirectorySize_ parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of `unlimited`, no size limit is imposed on the EdgeSyncLLog directory.  <br/> |
| _LogMaxFileSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _LogMaxFileSize_ parameter specifies the maximum log file size for the EdgeSyncLog files. The default value is 10 MB. <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The value of the _LogMaxFileSize_ parameter must be less than or equal to the value of the _LogMaxDirectorySize_ parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of `unlimited`, no size limit is imposed on the EdgeSyncLog files.  <br/> |
| _LogPath_ <br/> |Optional  <br/> |System.String  <br/> |The _LogPath_ parameter specifies the default location for the EdgeSyncLog files. The default value is `TransportRoles\Logs\EdgeSync\`.  <br/> |
| _OptionDuration_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _OptionDuration_ parameter specifies how long an instance of the EdgeSync service can maintain an optional lock on synchronization rights. While an EdgeSync service maintains an optional lock on synchronization rights, another EdgeSync service can take over synchronization after the optional lock has expired if it's initiated using the **Start-EdgeSynchronization** command. The default value is 30 minutes. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _RecipientSyncInterval_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _RecipientSyncInterval_ parameter specifies how frequently the EdgeSync service synchronizes recipient data from the global catalog. The default value is 5 minutes. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _Site_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AdSiteIdParameter  <br/> |The _Site_ parameter specifies the Active Directory site that EdgeSync connects to for synchronizing configuration and recipient data. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

