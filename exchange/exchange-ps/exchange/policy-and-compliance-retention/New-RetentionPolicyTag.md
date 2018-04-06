---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: New-RetentionPolicyTag
schema: 2.0.0
---

# New-RetentionPolicyTag

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-RetentionPolicyTag cmdlet to create a retention tag.

For more information about retention tags, see Retention tags and retention policies (https://technet.microsoft.com/library/dd297955.aspx).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
New-RetentionPolicyTag [-Name] <String> [-AgeLimitForRetention <EnhancedTimeSpan>] 
 [-Comment <String>] [-Confirm] [-DomainController <Fqdn>]
 [-LocalizedComment <MultiValuedProperty>]
 [-LocalizedRetentionPolicyTagName <MultiValuedProperty>] [-MessageClass <String>]
 [-MustDisplayCommentEnabled <$true | $false>]
 [-RetentionAction <MoveToDeletedItems | MoveToFolder | DeleteAndAllowRecovery | PermanentlyDelete | MarkAsPastRetentionLimit | MoveToArchive>]
 [-RetentionEnabled <$true | $false>] [-RetentionId <Guid>] [-SystemTag <$true | $false>]
 [-Type <Calendar | Contacts | DeletedItems | Drafts | Inbox | JunkEmail | Journal | Notes | Outbox | SentItems | Tasks | All | ManagedCustomFolder | RssSubscriptions | SyncIssues | ConversationHistory | Personal | RecoverableItems>]
 [-WhatIf] [-IsDefaultAutoGroupPolicyTag] [-IsDefaultModeratedRecipientsPolicyTag] [<CommonParameters>]
```

### Set2
```
New-RetentionPolicyTag [-Name] <String> [-Comment <String>] [-Confirm] [-DomainController <Fqdn>]
 [-LocalizedComment <MultiValuedProperty>] [-LocalizedRetentionPolicyTagName <MultiValuedProperty>]
 [-ManagedFolderToUpgrade <ELCFolderIdParameter>] [-MustDisplayCommentEnabled <$true | $false>]
 [-SystemTag <$true | $false>] [-Type <Calendar | Contacts | DeletedItems | Drafts | Inbox | JunkEmail | Journal | Notes | Outbox | SentItems | Tasks | All | ManagedCustomFolder | RssSubscriptions | SyncIssues | ConversationHistory | Personal | RecoverableItems>]
 [-WhatIf] [-IsDefaultAutoGroupPolicyTag] [-IsDefaultModeratedRecipientsPolicyTag] [<CommonParameters>]
```

## DESCRIPTION
Retention tags are used to apply message retention settings to folders and items in a mailbox.

Retention tags support a display of the tag name and an optional comment in localized languages. Language culture codes from the CultureInfo class are used for this purpose.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-RetentionPolicyTag "Finance-DeletedItems" -Type DeletedItems -RetentionEnabled $true -AgeLimitForRetention 30 -RetentionAction PermanentlyDelete
```

This example creates the retention policy tag Finance-DeletedItems for the Deleted Items default folder. When applied to a mailbox as a part of a retention policy, the tag permanently deletes items of all types in the Deleted Items folder in 30 days.

### -------------------------- Example 2 --------------------------
```
New-RetentionPolicyTag "Finance-Default" -Type All -RetentionEnabled $true -AgeLimitForRetention 365 -RetentionAction PermanentlyDelete
```

This example creates the default policy tag Finance-Default. When applied to a mailbox as part of a retention policy, the tag permanently deletes all items without a retention tag within 365 days. Items of a particular message class such as Voicemail, for which a default tag (a retention tag of type All) exists, aren't impacted.

### -------------------------- Example 3 --------------------------
```
New-RetentionPolicyTag "Business Critical" -Type Personal -Comment "Use this tag for all business critical mail" -RetentionEnabled $true -AgeLimitForRetention 2556 -RetentionAction PermanentlyDelete
```

This example creates the retention tag Business Critical of type Personal. When applied to mailbox items as part of a retention policy, the items are permanently deleted in approximately seven years.

## PARAMETERS

### -Name
The Name parameter specifies the name of the tag.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgeLimitForRetention
The AgeLimitForRetention parameter specifies the age at which retention is enforced on an item. The age limit corresponds to the number of days from the date the item was delivered, or the date an item was created if it wasn't delivered. If this parameter isn't present and the RetentionEnabled parameter is set to $true, an error is returned.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies a comment for the tag.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalizedComment
The LocalizedComment parameter specifies localized comments and their languages. When the user's language setting matches a language specified for this parameter, Microsoft Outlook and Outlook on the web display the corresponding localized comment. Comments are specified in the form of ISO Language Code:Comment, for example, LocalizedComment EN-US:"This is a localized comment in U.S. English".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalizedRetentionPolicyTagName
The LocalizedRetentionPolicyTagName parameter specifies localized tag names and their languages. When the user's language setting matches a language specified for this parameter, Outlook and Outlook on the web display the corresponding localized tag name. Names are specified in the form of ISO Language Code:Name, for example, LocalizedRetentionPolicyTagName EN-US:"Business Critical".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderToUpgrade
This parameter is available only in on-premises Exchange.

The ManagedFolderToUpgrade parameter specifies the name of a managed folder to use as a template for a retention tag.

```yaml
Type: ELCFolderIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageClass
The MessageClass parameter specifies the message type to which the tag applies. If not specified, the default value is set to \*.

With the exception of a default policy tag (DPT) for voicemail, Exchange doesn't support retention tags for different message types. Only tags with a MessageClass of \* are supported, and they apply to all message types.

To create a DPT for voice mail messages, set the MessageClass parameter to voicemail and the Type parameter to All.

A DPT for voice mail messages applies only to Microsoft Exchange Unified Messaging voice mail messages (identified by the PR\_MESSAGE\_CLASS MAPI property value IPM.Note.Microsoft.Voicemail\*).

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MustDisplayCommentEnabled
The MustDisplayCommentEnabled parameter specifies whether the comment can be hidden. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionAction
The RetentionAction parameter specifies the action for the retention policy. Valid values are:

- DeleteAndAllowRecovery: Deletes a message and allows recovery from the Recoverable Items folder.

- MarkAsPastRetentionLimit: Messages are marked as past the retention limit.

- MoveToArchive: Moves a message to the user's archive mailbox. You can use this action for retention tags of type All, Personal and RecoverableItems.

- PermanentlyDelete: Permanently deletes a message. A message that has been permanently deleted can't be recovered using the Recoverable Items folder. Permanently deleted messages aren't returned in a Discovery search, unless litigation hold is enabled for the mailbox.

The MoveToDeletedItems and MoveToFolder actions are available, but don't work. These actions are available for upgrades from messaging records management (MRM) 1.0 (managed folders) to MRM 2.0 (retention policies). MRM 2.0 was introduced in Exchange 2010 Service Pack 1 (SP1).

If this parameter isn't present and the RetentionEnabled parameter is set to $true, an error is returned.

```yaml
Type: MoveToDeletedItems | MoveToFolder | DeleteAndAllowRecovery | PermanentlyDelete | MarkAsPastRetentionLimit | MoveToArchive
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionEnabled
The RetentionEnabled parameter specifies whether the tag is enabled. When set to $false, the tag is disabled, and no retention action is taken on messages that have the tag applied.

Messages with a disabled tag are still considered tagged, so any default policy tags in the user's retention policy aren't applied to such messages.

When you set the RetentionEnabled parameter to $false, the retention period for the tag is shown as Never. Users may apply this tag to items they want to indicate should never be deleted or should never be moved to the archive. Enabling the tag later may result in unintentional deletion or archiving of items. To avoid this situation, if a retention policy is disabled temporarily, it may be advisable to change the name of that tag so that users are discouraged from using it, such as DISABLED\_\<Original Name\>.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionId
The RetentionId parameter specifies an alternate tag ID to make sure the retention tag found on mailbox items tagged in an on-premises deployment matches the tag when the mailbox is moved to the cloud, or mailbox items tagged in the cloud match the tag when the mailbox is moved to an on-premises Exchange server. The parameter is used in cross-premises deployments. You don't need to specify this parameter in on-premises-only deployments.

```yaml
Type: Guid
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SystemTag
The SystemTag parameter specifies that the tag is created for internal Exchange functionality.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter specifies the type of retention tag being created. Valid values include:

- All

- Archive

- Calendar

- Clutter: Available in Exchange Online only.

- Contacts

- ConversationHistory

- DeletedItems

- Drafts

- Inbox

- Journal

- JunkEmail

- LegacyArchiveJournals

- ManagedCustomFolder

- Notes

- Outbox

- Personal

- RecoverableItems

- RssSubscriptions

- SentItems

- SyncIssues

- Tasks

To create a default policy tag (DPT), specify type All. For tags of type RecoverableItems, the only valid retention action is MoveToArchive.

```yaml
Type: Calendar | Contacts | DeletedItems | Drafts | Inbox | JunkEmail | Journal | Notes | Outbox | SentItems | Tasks | All | ManagedCustomFolder | RssSubscriptions | SyncIssues | ConversationHistory | Personal | RecoverableItems
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefaultAutoGroupPolicyTag
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefaultModeratedRecipientsPolicyTag
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/3f047d2e-1171-4f53-9b7e-e1625c954325.aspx)
