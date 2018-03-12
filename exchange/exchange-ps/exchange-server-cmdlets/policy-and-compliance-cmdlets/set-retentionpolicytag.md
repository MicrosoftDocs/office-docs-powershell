---
title: "Set-RetentionPolicyTag"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 2/10/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 6ab21a02-7283-456a-a1c7-1a09b1722981

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-RetentionPolicyTag

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-RetentionPolicyTag** cmdlet to modify the properties of a retention tag.
  
For more information about retention tags, see [Understanding Retention Tags](https://technet.microsoft.com/library/48c13be5-3f01-4849-a089-766210e54f89.aspx).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-RetentionPolicyTag -Identity <RetentionPolicyTagIdParameter> [-AgeLimitForRetention <EnhancedTimeSpan>] [-MessageClass <String>] [-RetentionAction <MoveToDeletedItems | MoveToFolder | DeleteAndAllowRecovery | PermanentlyDelete | MarkAsPastRetentionLimit | MoveToArchive>] [-RetentionEnabled <$true | $false>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the comment for the AllUsers-DeletedItems retention policy tag.
  
```
Set-RetentionPolicyTag "AllUsers-DeletedItems" -Comment "Items in the Deleted Items folder will be automatically deleted in 120 days"
```

### Example 2

This example makes optional retention tags available to user Terry Adams using the _Mailbox_ and _OptionalInMailbox_ parameters.
  
```
Set-RetentionPolicyTag -Mailbox "Terry Adams" -OptionalInMailbox "ProjectA","ProjectB"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Retention tags are used to apply message retention settings to folders and items in a mailbox.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RetentionPolicyTagIdParameter  <br/> |The _Identity_ parameter specifies the name, distinguished name (DN), or GUID of the retention policy tag to be modified. <br/> |
| _Mailbox_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The _Mailbox_ parameter specifies a mailbox for assigning opt-in tags. <br/> > [!IMPORTANT]> You must use this parameter with the _OptionalInMailbox_ parameter.          |
| _AgeLimitForRetention_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |The _AgeLimitForRetention_ parameter specifies the age at which retention is enforced on an item. The age limit corresponds to the number of days from the date the item was delivered, or the date an item was created if it wasn't delivered. If this parameter isn't present and the _RetentionEnabled_ parameter is set to `$true`, an error is returned.  <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> Valid values are  `1.00:00:00` to `24855.03:14:07`.  <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The _Comment_ parameter specifies a comment for the retention policy tag. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch overrides the confirmation prompt displayed by the cmdlet when you use the _RetentionId_ parameter. <br/> |
| _LegacyManagedFolder_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ELCFolderIdParameter  <br/> |The _LegacyManagedFolder_ parameter specifies the name of a managed folder. The retention tag is created by using retention settings from the managed folder and its managed content settings. You can use this parameter to create retention tags based on existing managed folders to migrate users from managed folder mailbox policies to retention policies. <br/> |
| _LocalizedComment_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _LocalizedComment_ parameter specifies the localized comment and language for the retention policy tag. This comment is displayed in Microsoft Outlook based on the user's locale. <br/> |
| _LocalizedRetentionPolicyTagName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _LocalizedRetentionPolicyTagName_ parameter specifies a localized name for the retention policy tag. This name is displayed in Outlook based on the user's locale. <br/> |
| _MessageClass_ <br/> |Optional  <br/> |System.String  <br/> |The _MessageClass_ parameter specifies the message type to which the tag applies. If not specified, the default value is set to `*`.  <br/> With the exception of a default policy tag (DPT) for  `voicemail`, Exchange doesn't support retention tags for different message types. Only tags with a _MessageClass_ of `*` are supported, and they apply to all message types. <br/> To create a DPT for voice mail messages, set the _MessageClass_ parameter to `voicemail` and the _Type_ parameter to `All`.  <br/> > [!NOTE]> A DPT for voice mail messages applies only to Microsoft Exchange Unified Messaging voice mail messages (identified by the  `PR_MESSAGE_CLASS` MAPI property value `IPM.Note.Microsoft.Voicemail*`).           |
| _MustDisplayCommentEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _MustDisplayCommentEnabled_ parameter specifies whether the comment can be hidden. The default value is `$true`.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the retention policy tag. <br/> |
| _OptionalInMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RetentionPolicyTagIdParameter[]  <br/> |The _OptionalInMailbox_ parameter is used with the _Mailbox_ parameter to specify opt-in retention tags available to the mailbox. <br/> |
| _RetentionAction_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.RetentionActionType  <br/> | The _RetentionAction_ parameter specifies the action for the retention policy. Valid values are: <br/>  `DeleteAndAllowRecovery`: Deletes a message and allows recovery from the Recoverable Items folder.  <br/>  `MarkAsPastRetentionLimit`: Messages are marked as past the retention limit.  <br/>  `MoveToArchive`: Moves a message to the user's archive mailbox. You can use this action for retention tags of type  `All`,  `Personal`, and  `RecoverableItems`.  <br/>  `PermanentlyDelete`: Permanently deletes a message. A message that has been permanently deleted can't be recovered using the Recoverable Items folder. Permanently deleted messages aren't returned in a Discovery search, unless litigation hold is enabled for the mailbox.  <br/> > [!NOTE]>  The `MoveToDeletedItems` and `MoveToFolder` actions are available, but don't work. These actions are available for upgrades from messaging records management (MRM) 1.0 (managed folders) to MRM 2.0 (retention policies). MRM 2.0 was introduced in Exchange 2010 Service Pack 1 (SP1).           If this parameter isn't present and the _RetentionEnabled_ parameter is set to `$true`, an error is returned.  <br/> |
| _RetentionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _RetentionEnabled_ parameter specifies whether the tag is enabled. When set to `$false`, the tag is disabled, and no retention action is taken on messages that have the tag applied.  <br/> > [!NOTE]> Messages with a disabled tag are still considered tagged, so any default policy tags in the user's retention policy aren't applied to such messages.           When you set the _RetentionEnabled_ parameter to `$false`, the retention period for the tag is shown as **Never**. Users may apply this tag to items that they want to indicate should never be deleted or should never be moved to the archive. Enabling the tag later may result in unintentional deletion or archiving of items. To avoid this situation, if a retention policy is disabled temporarily, it may be advisable to change the name of that tag so that users are discouraged from using it, such as  `DISABLED_<Original Name>`.  <br/> |
| _RetentionId_ <br/> |Optional  <br/> |System.Guid  <br/> |The _RetentionId_ parameter specifies an alternate tag ID to ensure the retention tag found on mailbox items tagged in one Exchange organization matches the tag when the mailbox is moved to another Exchange organization (for example, in a cross-forest deployment or in a cross-premises deployment, when a mailbox is moved from an on-premises Exchange server to the cloud, or a cloud-based mailbox is moved to an on-premises Exchange server). <br/> > [!IMPORTANT]> It's not ordinarily required to specify or modify the _RetentionId_ parameter for a retention tag. The parameter is populated automatically by < _scriptname_> when importing retention tags in a cross-forest or cross-premises deployment.           |
| _SystemTag_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _SystemTag_ parameter specifies whether the retention policy tag is created for internal Exchange functionality. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

