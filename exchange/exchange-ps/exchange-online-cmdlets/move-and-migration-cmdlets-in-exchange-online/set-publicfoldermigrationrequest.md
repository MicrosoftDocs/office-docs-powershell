---
title: "Set-PublicFolderMigrationRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 44fbc2af-e9a4-4fa7-9b04-709ab1bdda2c

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-PublicFolderMigrationRequest

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-PublicFolderMigrationRequest** cmdlet to change migration request options after the request has been created. You can use the **Set-PublicFolderMigrationRequest** cmdlet to recover from failed migration requests.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-PublicFolderMigrationRequest [-AcceptLargeDataLoss <SwitchParameter>] [-BadItemLimit <Unlimited>] [-BatchName <String>] [-CompletedRequestAgeLimit <Unlimited>] [-InternalFlags <InternalMrsFlag[]>] [-LargeItemLimit <Unlimited>] [-Priority <Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency>] [-SkipMerging <SkippableMergeComponent[]>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the setting of the PublicFolderMigration migration request to accept up to five corrupted public folder items.
  
```
Set-PublicFolderMigrationRequest -Identity PublicFolderMigration -BadItemLimit 5
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can pipeline the **Set-PublicFolderMigrationRequest** cmdlet from the **Get-PublicFolderMigrationRequestStatistics**, **Get-PublicFolderMigrationRequst**, or the **Get-PublicFolder** cmdlets.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.MailboxReplicationService.PublicFolderMigrationRequestIdParameter  <br/> |The  _Identity_ parameter specifies the identity of the public folder migration request. <br/> |
| _RehomeRequest_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _RehomeRequest_ parameter specifies to the Microsoft Exchange Mailbox Replication service (MRS) that the request needs to be moved to the same database as the public folder being migrated. This parameter is used primarily for debugging purposes. <br/> |
| _RemoteCredential_ <br/> |Required  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _RemoteCredential_ parameter specifies an administrator who has permission to perform the migration request, for example, Administrator@humongousinsurance.com. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _AcceptLargeDataLoss_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _AcceptLargeDataLoss_ switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You need to use this switch if you set either the _BadItemLimit_ or _LargeItemLimit_ parameters to a value of 51 or higher. Otherwise, the command will fail. <br/> |
| _AuthenticationMethod_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AuthenticationMethod  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _BadItemLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _BadItemLimit_ parameter specifies the maximum number of bad items that are allowed before the request fails. Abad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit aremissing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.  <br/> Valid input for this parameter is an integer or the value  `unlimited`. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the **New-MailboxRepairRequest** cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again. <br/> > [!NOTE]> If you set this value to 51 or higher, you also need to use the  _AcceptLargeDataLoss_ switch. Otherwise, the command will fail.          |
| _BatchName_ <br/> |Optional  <br/> |System.String  <br/> |The  _BatchName_ parameter specifies a descriptive name for the public folder batch migration. You can use the _BatchName_ parameter as a search string when you use the **Get-PublicFolderMigrationRequest** cmdlet. <br/> |
| _CompletedRequestAgeLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _CompletedRequestAgeLimit_ parameter specifies how long the request is kept after it has completed before being automatically removed. The default _CompletedRequestAgeLimit_ parameter value is 30 days. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _InternalFlags_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MailboxReplication.RequestBase.InternalMrsFlag[]  <br/> |The  _InternalFlags_ parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes. <br/> |
| _LargeItemLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _LargeItemLimit_ parameter specifies the maximum number of large items that are allowed before the request fails. Alarge item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used. <br/>  For more information about maximum message size values, see the following topics: <br/>  Exchange 2016:[Message size limits in Exchange 2016](https://technet.microsoft.com/library/bb124345.aspx) <br/>  Exchange Online:[Exchange Online Limits](https://go.microsoft.com/fwlink/p/?LinkId=524926) <br/>  Valid input for this parameter is an integer or the value `unlimited`. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.  <br/> > [!NOTE]>  If you set this value to 51 or higher, you also need to use the _AcceptLargeDataLoss_ switch. Otherwise, the command will fail.          |
| _OutlookAnywhereHostName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PreventCompletion_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _PreventCompletion_ parameter specifies whether to run the migration request, but not allow it to complete. Valid values are: <br/>  `$true`: The migration request is run, but is not allowed to complete. To complete the migration request, set this parameter to  `$false` before you run the `Resume-PublicFolderMigrationRequest` cmdlet. <br/>  `$false`: The migration request is run and allowed to complete. This is the default value.  <br/> |
| _Priority_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.RequestPriority  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _Priority_ parameter specifies the order in which the request should be processed in the request queue. Requests are processed in order, based on server health, status, priority, and last update time. Valid priority values are: <br/>  `Lowest` <br/>  `Lower` <br/>  `Low` <br/>  `Normal`: This is the default value.  <br/>  `High` <br/>  `Higher` <br/>  `Highest` <br/>  `Emergency` <br/> |
| _RemoteMailboxLegacyDN_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _RemoteMailboxLegacyDN_ parameter specifies the **ExchangeLegacyDN** of the remote mailbox. <br/> |
| _RemoteMailboxServerLegacyDN_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _RemoteMailboxServerLegacyDN_ parameter specifies the server legacy DN of the back-end server. To find the **LegacyExchangeServerDN** value, run the following command: `Get-ExchangeServer <Identity> | Format-List LegacyExchangeServerDN`.  <br/> |
| _RequestExpiryInterval_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _RequestExpiryInterval_ parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter: <br/>  The completed request is automatically removed based on the _CompletedRequestAgeLimit_ parameter value. <br/>  If the request fails, you need to manually remove it by using the corresponding **Remove-\*Request** cmdlet. <br/>  To specify a value, enter it as a time span: `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/>  When you use the value `Unlimited`, the completed request isn't automatically removed.  <br/> |
| _SkipMerging_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.SkippableMergeComponent[]  <br/> |The  _SkipMerging_ parameter specifies whether certain stages of a migration are to be skipped for debugging purposes. Don't use this parameter unless directed to do so by Microsoft Customer Service and Support or specific documentation. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

