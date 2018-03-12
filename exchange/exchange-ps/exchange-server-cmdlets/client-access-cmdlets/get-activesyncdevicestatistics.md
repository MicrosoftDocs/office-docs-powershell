---
title: "Get-ActiveSyncDeviceStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 2b6160ef-ab82-49e7-a5be-fd7cae92dabb
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-ActiveSyncDeviceStatistics

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-ActiveSyncDeviceStatistics** cmdlet to retrieve the list of mobile devices configured to synchronize with a specified user's mailbox and return a list of statistics about the mobile devices.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
> [!CAUTION]
> The **Get-ActiveSyncDeviceStatistics** cmdlet will be removed in a future version of Exchange. Use the **Get-MobileDeviceStatistics** cmdlet instead. If you have any scripts that use the **Get-ActiveSyncDeviceStatistics** cmdlet, update them to use the **Get-MobileDeviceStatistics** cmdlet.
  
```
Get-ActiveSyncDeviceStatistics -Identity <ActiveSyncDeviceIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith.
  
```
Get-ActiveSyncDeviceStatistics -Identity TonySmith
```

### Example 2

This example uses the **Get-CASMailbox** cmdlet to determine who in the organization has an Exchange ActiveSync mobile device. For each mobile device, the Exchange ActiveSync device statistics are retrieved.
  
```
$UserList = Get-CASMailbox -Filter {HasActiveSyncDevicePartnership -eq $true -and -not DisplayName -like "CAS_{*"} | Get-Mailbox $UserList | foreach {Get-ActiveSyncDeviceStatistics -Mailbox $_} 
```

### Example 3

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith. It also outputs the Exchange ActiveSync log file and sends it to the System Administrator at admin@contoso.com.
  
```
Get-ActiveSyncDeviceStatistics -Mailbox TonySmith -GetMailboxLog $true -NotificationEmailAddresses "admin@contoso.com"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-ActiveSyncDeviceStatistics** cmdlet returns a list of statistics about each mobile device. Additionally, it allows you to retrieve logs and send those logs to a recipient for troubleshooting purposes.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ActiveSyncDeviceIdParameter  <br/> |The _Identity_ parameter specifies the user's device ID. If the _Mailbox_ parameter is specified, the _Identity_ parameter is disabled. <br/> |
| _Mailbox_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The _Mailbox_ parameter specifies the user mailbox for which you want to retrieve the mobile phone statistics. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _GetMailboxLog_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _GetMailboxLog_ parameter specifies whether to send the mailbox logs via email to the administrator running the task. If the parameter is set to `$true`, the command sends the mailbox logs via email to the administrator running the task. The default value of this parameter is  `$false`.  <br/> |
| _NotificationEmailAddresses_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _NotificationEmailAddresses_ parameter specifies an optional list of comma-separated aliases or email addresses where the mailbox logs are sent. If the _GetMailboxLog_ parameter is set to `$false`, this parameter is ignored.  <br/> |
| _ShowRecoveryPassword_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ShowRecoveryPassword_ parameter specifies whether to return the recovery password for the mobile phone as one of the displayed statistics. If this parameter is set to `$true`, the command returns the recovery password for the mobile phone as one of the displayed statistics.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

