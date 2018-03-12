---
title: "New-RetentionPolicyTag"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 2/10/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3f047d2e-1171-4f53-9b7e-e1625c954325

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-RetentionPolicyTag

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-RetentionPolicyTag** cmdlet to create a retention tag.
  
For more information about retention tags, see [Understanding Retention Tags](https://technet.microsoft.com/library/48c13be5-3f01-4849-a089-766210e54f89.aspx).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-RetentionPolicyTag [-AgeLimitForRetention <EnhancedTimeSpan>] [-MessageClass <String>] [-RetentionAction <MoveToDeletedItems | MoveToFolder | DeleteAndAllowRecovery | PermanentlyDelete | MarkAsPastRetentionLimit | MoveToArchive>] [-RetentionEnabled <$true | $false>] [-RetentionId <Guid>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the retention policy tag Finance-DeletedItems for the Deleted Items default folder. When applied to a mailbox as a part of a retention policy, the tag permanently deletes items of all types in the Deleted Items folder in 30 days.
  
```
New-RetentionPolicyTag "Finance-DeletedItems" -Type DeletedItems -RetentionEnabled $true -AgeLimitForRetention 30 -RetentionAction PermanentlyDelete
```

### Example 2

This example creates the default policy tag Finance-Default. When applied to a mailbox as part of a retention policy, the tag permanently deletes all items without a retention tag within 365 days. Items of a particular message class such as Voicemail, for which a default tag (a retention tag of type All) exists, aren't impacted.
  
```
New-RetentionPolicyTag "Finance-Default" -Type All -RetentionEnabled $true -AgeLimitForRetention 365 -RetentionAction PermanentlyDelete
```

### Example 3

This example creates the retention tag Business Critical of type Personal. When applied to mailbox items as part of a retention policy, the items are permanently deleted in approximately seven years.
  
```
New-RetentionPolicyTag "Business Critical" -Type Personal -Comment "Use this tag for all business critical mail" -RetentionEnabled $true -AgeLimitForRetention 2556 -RetentionAction PermanentlyDelete
```

## Detailed Description
<a name="DetailedDescription"> </a>

Retention tags are used to apply message retention settings to folders and items in a mailbox.
  
Retention tags support a display of the tag name and an optional comment in localized languages. Language culture codes from the **CultureInfo** class are used for this purpose.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the tag. <br/> |
| _AgeLimitForRetention_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _AgeLimitForRetention_ parameter specifies the age at which retention is enforced on an item. The age limit corresponds to the number of days from the date the item was delivered, or the date an item was created if it wasn't delivered. If this parameter isn't present and the _RetentionEnabled_ parameter is set to `$true`, an error is returned.  <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> Valid values are  `1.00:00:00` to `24855.03:14:07`.  <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The _Comment_ parameter specifies a comment for the tag. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IsDefaultAutoGroupPolicyTag_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _IsDefaultModeratedRecipientsPolicyTag_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _LocalizedComment_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _LocalizedComment_ parameter specifies localized comments and their languages. When the user's language setting matches a language specified for this parameter, MicrosoftOutlook and Outlook on the web display the corresponding localized comment. Comments are specified in the form of _ISO Language Code:Comment_, for example,  `LocalizedComment EN-US:"This is a localized comment in U.S. English"`.  <br/> |
| _LocalizedRetentionPolicyTagName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _LocalizedRetentionPolicyTagName_ parameter specifies localized tag names and their languages. When the user's language setting matches a language specified for this parameter, Outlook and Outlook on the web display the corresponding localized tag name. Names are specified in the form of _ISO Language Code:Name_, for example,  `LocalizedRetentionPolicyTagName EN-US:"Business Critical"`.  <br/> |
| _ManagedFolderToUpgrade_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ELCFolderIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _ManagedFolderToUpgrade_ parameter specifies the name of a managed folder to use as a template for a retention tag. <br/> |
| _MessageClass_ <br/> |Optional  <br/> |System.String  <br/> |The _MessageClass_ parameter specifies the message type to which the tag applies. If not specified, the default value is set to `*`.  <br/> With the exception of a default policy tag (DPT) for  `voicemail`, Exchange doesn't support retention tags for different message types. Only tags with a _MessageClass_ of `*` are supported, and they apply to all message types. <br/> To create a DPT for voice mail messages, set the _MessageClass_ parameter to `voicemail` and the _Type_ parameter to `All`.  <br/> > [!NOTE]> A DPT for voice mail messages applies only to Microsoft Exchange Unified Messaging voice mail messages (identified by the  `PR_MESSAGE_CLASS` MAPI property value `IPM.Note.Microsoft.Voicemail*`).           |
| _MustDisplayCommentEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MustDisplayCommentEnabled_ parameter specifies whether the comment can be hidden. The default value is `$true`.  <br/> |
| _RetentionAction_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.RetentionActionType  <br/> | The _RetentionAction_ parameter specifies the action for the retention policy. Valid values are: <br/>  `DeleteAndAllowRecovery`: Deletes a message and allows recovery from the Recoverable Items folder.  <br/>  `MarkAsPastRetentionLimit`: Messages are marked as past the retention limit.  <br/>  `MoveToArchive`: Moves a message to the user's archive mailbox. You can use this action for retention tags of type  `All`,  `Personal`, and  `RecoverableItems`.  <br/>  `PermanentlyDelete`: Permanently deletes a message. A message that has been permanently deleted can't be recovered using the Recoverable Items folder. Permanently deleted messages aren't returned in a Discovery search, unless litigation hold is enabled for the mailbox.  <br/> > [!NOTE]>  The `MoveToDeletedItems` and `MoveToFolder` actions are available, but don't work. These actions are available for upgrades from messaging records management (MRM) 1.0 (managed folders) to MRM 2.0 (retention policies). MRM 2.0 was introduced in Exchange 2010 Service Pack 1 (SP1).           If this parameter isn't present and the _RetentionEnabled_ parameter is set to `$true`, an error is returned.  <br/> |
| _RetentionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _RetentionEnabled_ parameter specifies whether the tag is enabled. When set to `$false`, the tag is disabled, and no retention action is taken on messages that have the tag applied.  <br/> > [!NOTE]> Messages with a disabled tag are still considered tagged, so any default policy tags in the user's retention policy aren't applied to such messages.           When you set the _RetentionEnabled_ parameter to `$false`, the retention period for the tag is shown as **Never**. Users may apply this tag to items they want to indicate should never be deleted or should never be moved to the archive. Enabling the tag later may result in unintentional deletion or archiving of items. To avoid this situation, if a retention policy is disabled temporarily, it may be advisable to change the name of that tag so that users are discouraged from using it, such as  `DISABLED_<Original Name>`.  <br/> |
| _RetentionId_ <br/> |Optional  <br/> |System.Guid  <br/> |The _RetentionId_ parameter specifies an alternate tag ID to make sure the retention tag found on mailbox items tagged in an on-premises deployment matches the tag when the mailbox is moved to the cloud, or mailbox items tagged in the cloud match the tag when the mailbox is moved to an on-premises Exchange server. The parameter is used in cross-premises deployments. You don't need to specify this parameter in on-premises-only deployments. <br/> |
| _SystemTag_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _SystemTag_ parameter specifies that the tag is created for internal Exchange functionality. <br/> |
| _Type_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ElcFolderType  <br/> | The _Type_ parameter specifies the type of retention tag being created. Valid values include: <br/>  `All` <br/>  `Archive` <br/>  `Calendar` <br/>  `Clutter`: Available in Exchange Online only.  <br/>  `Contacts` <br/>  `ConversationHistory` <br/>  `DeletedItems` <br/>  `Drafts` <br/>  `Inbox` <br/>  `Journal` <br/>  `JunkEmail` <br/>  `LegacyArchiveJournals` <br/>  `ManagedCustomFolder` <br/>  `Notes` <br/>  `Outbox` <br/>  `Personal` <br/>  `RecoverableItems` <br/>  `RssSubscriptions` <br/>  `SentItems` <br/>  `SyncIssues` <br/>  `Tasks` <br/> > [!NOTE]>  To create a default policy tag (DPT), specify type `All`. For tags of type  `RecoverableItems`, the only valid retention action is  `MoveToArchive`.           |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

