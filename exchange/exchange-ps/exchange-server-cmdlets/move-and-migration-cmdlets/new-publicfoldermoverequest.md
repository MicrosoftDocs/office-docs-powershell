---
title: "New-PublicFolderMoveRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d046e950-ac45-4cfd-99ae-d09b8d725615

description: "This cmdlet is available only in on-premises Exchange."
---

# New-PublicFolderMoveRequest

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-PublicFolderMoveRequest** cmdlet to begin the process of moving public folder contents between public folder mailboxes. Moving public folders only moves the physical contents of the public folder; it doesn't change the logical hierarchy. When the move request is completed, you must run the **Remove-PublicFolderMoveRequest** cmdlet to remove the request or wait until the time specified in the _CompletedRequestAgeLimit_ parameter has passed. The request must be removed before you can run another move request.
  
> [!NOTE]
> Be aware that the target public folder mailbox will be locked while the move request is active. See the Detailed Description section below for more details. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-PublicFolderMoveRequest -Folders <PublicFolderIdParameter[]> -TargetMailbox <MailboxIdParameter> [-AcceptLargeDataLoss <SwitchParameter>] [-AllowLargeItems <SwitchParameter>] [-BadItemLimit <Unlimited>] [-CompletedRequestAgeLimit <Unlimited>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-InternalFlags <InternalMrsFlag[]>] [-Name <String>] [-Priority <Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency>] [-RequestExpiryInterval <Unlimited>] [-Suspend <SwitchParameter>] [-SuspendComment <String>] [-SuspendWhenReadyToComplete <SwitchParameter>] [-WhatIf [<SwitchParameter>]] [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport | XO1Migration | CrossResourceForest | ShadowSync | XrmSharing | ThirdPartyContactSync>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example begins the move request for the public folder \CustomerEngagements from public folder mailbox DeveloperReports to DeveloperReports01.
  
```
New-PublicFolderMoveRequest -Folders \DeveloperReports\CustomerEngagements -TargetMailbox DeveloperReports01
```

### Example 2

This example begins the move request for public folders under the \Dev public folder branch to the target public folder mailbox DeveloperReports01.
  
> [!NOTE]
> You can also move a branch of public folders by using the **Move-PublicFolderBranch.ps1** script.
  
```
New-PublicFolderMoveRequest -Folders \Dev\CustomerEngagements,\Dev\RequestsforChange,\Dev\Usability -TargetMailbox DeveloperReports01
```

### Example 3

This example moves all public folders from public folder mailbox Pub1 to public folder mailbox Pub2.
  
```
$folders = Get-PublicFolder \ -Recurse -mailbox Pub1 -ResidentFolders | ?{$_.Name -ne "IPM_SUBTREE"} | %{$_.Identity};New-PublicFolderMoveRequest -TargetMailbox Pub2 -Folders $folders
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-PublicFolderMoveRequest** cmdlet moves public folders from a source public folder mailbox to a target public folder mailbox. While the move request is active, the target public folder mailbox will be locked. As a result, public folders already residing in the target public folder mailbox will be inaccessible until the move request is complete. Therefore, before you begin the move request, you should make sure no users are accessing public folder data in that target public folder mailbox.
  
To move the public folder mailbox to another mailbox database, use the [New-MoveRequest](new-moverequest.md) cmdlet. To ensure that this folder is already in the target public folder mailbox, run the **Update-PublicFolderMailbox** cmdlet against the target public folder mailbox. You can only perform one move request at a time. You can also move public folders by using the **Move-PublicFolderBranch.ps1** script.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Folders_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.PublicFolderIdParameter[]  <br/> |The _Folders_ parameter specifies the public folders that you want to move. If the public folder has child public folders, child public folders won't be moved unless you explicitly state them in the command. You can move multiple public folders by separating them with a comma, for example, \Dev\CustomerEngagements,\Dev\RequestsforChange,\Dev\Usability. <br/> |
| _TargetMailbox_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _TargetMailbox_ parameter specifies the target public folder mailbox that you want to move the public folders to. This parameter accepts the following: <br/>  Alias <br/>  Canonical DN <br/>  Display name <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  GUID <br/>  ImmutableId <br/>  SMTP address <br/>  User principal name (UPN) <br/> |
| _AcceptLargeDataLoss_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _AcceptLargeDataLoss_ switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You need to use this switch if you set either the _BadItemLimit_ or _LargeItemLimit_ parameters to a value of 51 or higher. Otherwise, the command will fail. <br/> |
| _AllowLargeItems_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _AllowLargeItems_ parameter specifies that you can move large items only when large items are encountered. Large items are email messages with a maximum of 1,023 attachments. <br/> |
| _BadItemLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _BadItemLimit_ parameter specifies the maximum number of bad items that are allowed before the request fails. Abad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit aremissing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.  <br/> Valid input for this parameter is an integer or the value  `unlimited`. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the **New-MailboxRepairRequest** cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again. <br/> > [!NOTE]> If you set this value to 51 or higher, you also need to use the _AcceptLargeDataLoss_ switch. Otherwise, the command will fail.          |
| _CompletedRequestAgeLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _CompletedRequestAgeLimit_ parameter specifies how long the request will be kept after it has completed before being automatically removed. The default _CompletedRequestAgeLimit_ parameter value is 30 days. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _InternalFlags_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MailboxReplication.RequestBase.InternalMrsFlag[]  <br/> |The _InternalFlags_ parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the public folder move request. If you don't specify a name, the default name is `PublicFolderMove`.  <br/> |
| _Priority_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.RequestPriority  <br/> | The _Priority_ parameter specifies the order in which the request should be processed in the request queue. Requests are processed in order, based on server health, status, priority, and last update time. Valid priority values are: <br/>  `Lowest` <br/>  `Lower` <br/>  `Low` <br/>  `Normal`: This is the default value.  <br/>  `High` <br/>  `Higher` <br/>  `Highest` <br/>  `Emergency` <br/> |
| _RequestExpiryInterval_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _RequestExpiryInterval_ parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter: <br/>  The completed request is automatically removed based on the _CompletedRequestAgeLimit_ parameter value. <br/>  If the request fails, you need to manually remove it by using the corresponding **Remove-\*Request** cmdlet. <br/>  To specify a value, enter it as a time span: `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/>  When you use the value `Unlimited`, the completed request isn't automatically removed.  <br/> |
| _Suspend_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Suspend_ switch specifies whether to suspend the request. If you use this switch, the request is queued, but the request won't reach the status of **InProgress** until you resume the request with the relevant resume cmdlet. You don't have to specify a value with this switch. <br/> |
| _SuspendComment_ <br/> |Optional  <br/> |System.String  <br/> |The _SuspendComment_ parameter specifies a description about why the request was suspended. You can only use this parameter if you specify the _Suspend_ parameter. <br/> |
| _SuspendWhenReadyToComplete_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SuspendWhenReadyToComplete_ switch specifies whether to suspend the request before it reaches the status of **CompletionInProgress**. After the move is suspended, it has a status of **AutoSuspended**. You can then manually complete the move by using the **Resume-PublicFolderMoveRequest** command. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WorkloadType_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.RequestWorkloadType  <br/> |The _WorkloadType_ parameter is reserved for internal Microsoft use. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

