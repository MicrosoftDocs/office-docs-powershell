---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# set-InboxRule

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-InboxRule cmdlet to modify an existing Inbox rule. Inbox rules are used to process messages in the Inbox based on conditions specified and take actions such as moving a message to a specified folder or deleting a message.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-InboxRule cmdlet to modify an existing Inbox rule. Inbox rules are used to process messages in the Inbox based on conditions specified and take actions such as moving a message to a specified folder or deleting a message.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-InboxRule cmdlet to modify existing Inbox rules in mailboxes. Inbox rules process messages in the Inbox based on conditions specified and take actions such as moving a message to a specified folder or deleting a message.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
set-InboxRule [-Identity] <InboxRuleIdParameter> [-AlwaysDeleteOutlookRulesBlob]
 [-ApplyCategory <MultiValuedProperty>] [-BodyContainsWords <MultiValuedProperty>] [-Confirm]
 [-CopyToFolder <MailboxFolderIdParameter>] [-DeleteMessage <$true | $false>] [-DomainController <Fqdn>]
 [-ExceptIfBodyContainsWords <MultiValuedProperty>] [-ExceptIfFlaggedForAction <String>]
 [-ExceptIfFrom <RecipientIdParameter[]>] [-ExceptIfFromAddressContainsWords <MultiValuedProperty>]
 [-ExceptIfFromSubscription <AggregationSubscriptionIdentity[]>] [-ExceptIfHasAttachment <$true | $false>]
 [-ExceptIfHasClassification <MessageClassificationIdParameter[]>]
 [-ExceptIfHeaderContainsWords <MultiValuedProperty>]
 [-ExceptIfMessageTypeMatches <AutomaticReply | AutomaticForward | Encrypted | Calendaring | CalendaringResponse | PermissionControlled | Voicemail | Signed | ApprovalRequest | ReadReceipt | NonDeliveryReport>]
 [-ExceptIfMyNameInCcBox <$true | $false>] [-ExceptIfMyNameInToBox <$true | $false>]
 [-ExceptIfMyNameInToOrCcBox <$true | $false>] [-ExceptIfMyNameNotInToBox <$true | $false>]
 [-ExceptIfReceivedAfterDate <ExDateTime>] [-ExceptIfReceivedBeforeDate <ExDateTime>]
 [-ExceptIfRecipientAddressContainsWords <MultiValuedProperty>] [-ExceptIfSentOnlyToMe <$true | $false>]
 [-ExceptIfSentTo <RecipientIdParameter[]>] [-ExceptIfSubjectContainsWords <MultiValuedProperty>]
 [-ExceptIfSubjectOrBodyContainsWords <MultiValuedProperty>] [-ExceptIfWithImportance <Low | Normal | High>]
 [-ExceptIfWithinSizeRangeMaximum <ByteQuantifiedSize>] [-ExceptIfWithinSizeRangeMinimum <ByteQuantifiedSize>]
 [-ExceptIfWithSensitivity <Normal | Personal | Private | CompanyConfidential>] [-FlaggedForAction <String>]
 [-Force] [-ForwardAsAttachmentTo <RecipientIdParameter[]>] [-ForwardTo <RecipientIdParameter[]>]
 [-From <RecipientIdParameter[]>] [-FromAddressContainsWords <MultiValuedProperty>]
 [-FromSubscription <AggregationSubscriptionIdentity[]>] [-HasAttachment <$true | $false>]
 [-HasClassification <MessageClassificationIdParameter[]>] [-HeaderContainsWords <MultiValuedProperty>]
 [-Mailbox <MailboxIdParameter>] [-MarkAsRead <$true | $false>] [-MarkImportance <Low | Normal | High>]
 [-MessageTypeMatches <AutomaticReply | AutomaticForward | Encrypted | Calendaring | CalendaringResponse | PermissionControlled | Voicemail | Signed | ApprovalRequest | ReadReceipt | NonDeliveryReport>]
 [-MoveToFolder <MailboxFolderIdParameter>] [-MyNameInCcBox <$true | $false>] [-MyNameInToBox <$true | $false>]
 [-MyNameInToOrCcBox <$true | $false>] [-MyNameNotInToBox <$true | $false>] [-Name <String>]
 [-Priority <Int32>] [-ReceivedAfterDate <ExDateTime>] [-ReceivedBeforeDate <ExDateTime>]
 [-RecipientAddressContainsWords <MultiValuedProperty>] [-RedirectTo <RecipientIdParameter[]>]
 [-SendTextMessageNotificationTo <MultiValuedProperty>] [-SentOnlyToMe <$true | $false>]
 [-SentTo <RecipientIdParameter[]>] [-StopProcessingRules <$true | $false>]
 [-SubjectContainsWords <MultiValuedProperty>] [-SubjectOrBodyContainsWords <MultiValuedProperty>] [-WhatIf]
 [-WithImportance <Low | Normal | High>] [-WithinSizeRangeMaximum <ByteQuantifiedSize>]
 [-WithinSizeRangeMinimum <ByteQuantifiedSize>]
 [-WithSensitivity <Normal | Personal | Private | CompanyConfidential>]
 [-ApplySystemCategory <MultiValuedProperty>] [-DeleteSystemCategory <MultiValuedProperty>]
 [-PinMessage <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Set-InboxRule cmdlet exposes rule predicates and actions, in addition to the parameters such as a rule name and the mailbox identity, required to create an Inbox rule.

When you create, modify, remove, enable, or disable an Inbox rule on Microsoft Exchange Server 2010, some client-side rules including disabled client-side rules and outbound rules that were created by Microsoft Outlook are removed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Inbox rules" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

The Set-InboxRule cmdlet exposes rule predicates and actions, in addition to the parameters such as a rule name and the mailbox identity, required to create an Inbox rule.

When you create, modify, remove, enable, or disable an Inbox rule on Microsoft Exchange Server 2013, some client-side rules including disabled client-side rules and outbound rules that were created by Microsoft Outlook are removed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Inbox rules" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

The Set-InboxRule cmdlet allows you to modify the rule conditions, exceptions, and actions.

When you create, modify, remove, enable, or disable an Inbox rule in Exchange PowerShell, any client-side rules created by MicrosoftOutlook are removed.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-InboxRule ProjectContoso -MarkImportance "High"
```

This example modifies the action of the existing Inbox rule ProjectContoso. The MarkImportance parameter is used to mark the message with high importance.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-InboxRule ProjectContoso -MarkImportance "High"
```

This example modifies the action of the existing Inbox rule ProjectContoso. The MarkImportance parameter is used to mark the message with high importance.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-InboxRule ProjectContoso -MarkImportance "High"
```

This example modifies the action of the existing Inbox rule ProjectContoso. The MarkImportance parameter is used to mark the message with high importance.

### Example 1 -------------------------- (Exchange Online)
```
Set-InboxRule ProjectContoso -MarkImportance "High"
```

This example modifies the action of the existing Inbox rule ProjectContoso. The MarkImportance parameter is used to mark the message with high importance.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the name of the Inbox rule to be modified.



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the Inbox rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- Name

- RuleIdentity property (for example, 16752869479666417665).

- Exchange Online: \<mailbox alias\>\\\<RuleIdentity\> (for example, rzaher\\16752869479666417665.

- On-premises Exchange: \<mailbox canonical name\>\\\<RuleIdentity\> (for example, contoso.com/Users/Rick Zaher\\16752869479666417665.



```yaml
Type: InboxRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AlwaysDeleteOutlookRulesBlob
The AlwaysDeleteOutlookRulesBlob parameter suppresses a warning that end users or administrators get if they use Outlook Web App or Windows PowerShell to modify Inbox rules.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyCategory
!!! Exchange Server 2010, Exchange Server 2013

The ApplyCategory parameter specifies one or more categories to apply to a message.



!!! Exchange Server 2016, Exchange Online

The ApplyCategory parameter specifies an action for the Inbox rule that applies the specified category to messages. A valid value is any text value that you want to define as a category. You can specify multiple categories separated by commas. If the value contains spaces, enclose the value in quotation marks (").

The categories that you specify for this parameter are defined in the mailbox (they aren't shared between mailboxes).



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

### -BodyContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The BodyContainsWords parameter specifies one or more words or phrases to check the message body for. If phrases contain a space, you must enclose it in quotation marks ("). Use a comma to separate phrases.



!!! Exchange Server 2016, Exchange Online

The BodyContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the body of messages.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding exception parameter to this condition is ExceptIfBodyContainsWords.



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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CopyToFolder
!!! Exchange Server 2010, Exchange Server 2013

The CopyToFolder parameter specifies the name of an existing mailbox folder to copy the message to.



!!! Exchange Server 2016, Exchange Online

The CopyToFolder parameter specifies an action for the Inbox rule that copies messages to the specified mailbox folder. You can specify the existing folder by name, or by the store object ID and a path string (for example, \\Inbox\\Personal).



```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteMessage
!!! Exchange Server 2010, Exchange Server 2013

The DeleteMessage parameter specifies whether the message is sent to the Deleted Items folder. If set to $true, the DeleteMessage parameter specifies that the message is sent to the Deleted Items folder.



!!! Exchange Server 2016, Exchange Online

The DeleteMessage parameter specifies an action for the Inbox rule that sends messages to the Deleted Items folder. Valid values are:

- $true: Messages that match the conditions of the rule are moved to the Deleted Items folder.

- $false: The action isn't used.



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

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfBodyContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfBodyContainsWords parameter specifies one or more words or phrases to check the message body for. If the message body contains the specified words or phrases, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfBodyContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the body of messages.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding condition parameter to this exception is BodyContainsWords.



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

### -ExceptIfFlaggedForAction
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfFlaggedForAction parameter specifies one or more message flags to check the message for. Valid values include:

- Any

- Call

- DoNotForward

- FollowUp

- ForYourInformation

- Forward

- NoResponseNecessary

- Read

- Reply

- ReplyToAll

- Review

If the requested action in the message matches the requested action specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfFlaggedForAction parameter specifies an exception for the Inbox rule that looks messages with the specified message flag. Valid values are:

- Any

- Call

- DoNotForward

- FollowUp

- ForYourInformation

- Forward

- NoResponseNecessary

- Read

- Reply

- ReplyToAll

- Review

The corresponding condition parameter to this exception is FlaggedForAction.



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

### -ExceptIfFrom
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfFrom parameter specifies one or more senders. If the message sender matches the senders specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfFrom parameter specifies an exception for the Inbox rule that looks for the specified sender in messages. You can use any value that uniquely identifies the sender. For example:

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can specify multiple senders separated by commas

The corresponding condition parameter to this exception is From.



```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfFromAddressContainsWords parameter specifies one or more words to check the sender's address for. If the sender's address contains the specified words, the Inbox rule action isn't applied to the message.



!!! Exchange Server 2016, Exchange Online

The ExceptIfFromAddressContainsWords parameter specifies an exception for the Inbox rule that looks for messages where the specified words are in the sender's email address.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding condition parameter to this exception is FromAddressContainsWords.



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

### -ExceptIfFromSubscription
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

The ExceptIfFromSubscription parameter specifies an exception when a message is received from a POP, IMAP, or Hotmail subscription.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The ExceptIfFromSubscription parameter specifies an exception when a message is received from a POP, IMAP, or Hotmail subscription.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The ExceptIfFromSubscription parameter specifies an exception for the Inbox rule that looks for messages received from subscriptions (for example, POP or IMAP subscriptions). You can identify the subscription by using the Get-Subscription cmdlet.

The corresponding condition parameter to this exception is FromSubscription.



```yaml
Type: AggregationSubscriptionIdentity[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasAttachment
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfHasAttachment parameter specifies whether the message has attachments. Valid values include $true and $false. We recommend you set the value to $true.

If the message has an attachment, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfHasAttachment parameter specifies an exception for the Inbox rule that looks for messages with attachments. Valid values are:

- $true: The rule action isn't applied to messages that have attachments.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is HasAttachment.



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

### -ExceptIfHasClassification
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfHasClassification parameter checks the message for the specified classification name. Use the Get-MessageClassification cmdlet to retrieve a list of classifications defined in the organization.

If the message classification matches the classification specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfHasClassification parameter specifies an exception for the Inbox rule that looks for messages with the specified message classification. You can find message classifications by using the Get-MessageClassification cmdlet. You can specify multiple message classifications separated by commas.

The corresponding condition parameter to this exception is HasClassification.



```yaml
Type: MessageClassificationIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfHeaderContainsWords parameter specifies one or more values for a header.

If the message header contains the words specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The HeaderContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the header fields of messages.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding condition parameter to this exception is HeaderContainsWords.



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

### -ExceptIfMessageTypeMatches
!!! Exchange Server 2010

The ExceptIfMessageTypeMatches parameter specifies a message type. Valid values include one of the following:

- AutomaticReply

- AutomaticForward

- Encrypted

- Calendaring

- CalendaringResponse

- PermissionControlled

- Voicemail

- Signed

- ApprovalRequest

- ReadReceipt

- NonDeliveryReport

If the message type equals one of the above values, the Inbox rule action isn't applied.



!!! Exchange Server 2013

The ExceptIfMessageTypeMatches parameter specifies a message type. Valid values include one of the following:

- AutomaticReply

- AutomaticForward

- Encrypted

- Calendaring

- CalendaringResponse

- PermissionControlled

- Voicemail

- Signed

- ApprovalRequest

- ReadReceipt

- NonDeliveryReport

If the message type equals one of the preceding values, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfMessageTypeMatches parameter specifies an exception for the Inbox rule that looks for messages of the specified type. Valid values are:

- AutomaticReply

- AutomaticForward

- Encrypted

- Calendaring

- CalendaringResponse

- PermissionControlled

- Voicemail

- Signed

- ApprovalRequest

- ReadReceipt

- NonDeliveryReport

The corresponding condition parameter to this exception is MessageTypeMatches.



```yaml
Type: AutomaticReply | AutomaticForward | Encrypted | Calendaring | CalendaringResponse | PermissionControlled | Voicemail | Signed | ApprovalRequest | ReadReceipt | NonDeliveryReport
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMyNameInCcBox
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfMyNameInCcBox parameter specifies that the Cc field of messages is checked for the mailbox owner's address.

If the name of the recipient whose Inbox is being edited is in the Cc box, the Inbox rule action isn't applied.

This parameter accepts $true or $false.



!!! Exchange Server 2016, Exchange Online

The ExceptIfMyNameInCcBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner is in the Cc field. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner is in the Cc field.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameInCcBox.



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

### -ExceptIfMyNameInToBox
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfMyNameInToBox parameter specifies that the To field of messages is checked for the mailbox owner's address.

If the name of the recipient whose Inbox is being edited is in the To box, the Inbox rule action isn't applied.

This parameter accepts $true or $false.



!!! Exchange Server 2016, Exchange Online

The ExceptIfMyNameInToBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner is in the To field. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner is in the To field.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameInToBox.



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

### -ExceptIfMyNameInToOrCcBox
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfMyNameInToOrCcBox parameter specifies that the To or Cc field of messages is checked for the mailbox owner's address.

If the name of the recipient whose Inbox is being edited is in the To or Cc box, the Inbox rule action isn't applied.

This parameter accepts $true or $false.



!!! Exchange Server 2016, Exchange Online

The ExceptIfMyNameInToOrCcBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner is in the To or Cc fields Valid values are.

- $true: The rule action isn't applied to messages where the mailbox owner is in the To or Cc fields.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameInToOrCcBox.



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

### -ExceptIfMyNameNotInToBox
!!! Exchange Server 2010

The ExceptIfMyNameNoteInToBox parameter matches messages where the mailbox owner isn't addressed in the To field of the message.

If the name of the recipient whose Inbox is being edited isn't in the To box, the Inbox rule action isn't applied.

This parameter accepts $true or $false.



!!! Exchange Server 2013

The ExceptIfMyNameNotInToBox parameter matches messages where the mailbox owner isn't addressed in the To field of the message.

If the name of the recipient whose Inbox is being edited isn't in the To box, the Inbox rule action isn't applied.

This parameter accepts $true or $false.



!!! Exchange Server 2016, Exchange Online

The ExceptIfMyNameNotInToBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner isn't in the To field. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner isn't in the To field.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameNotInToBox.



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

### -ExceptIfReceivedAfterDate
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfReceivedAfterDate parameter specifies to check for messages received after the specified date.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".

If the message was received after the date specified, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfReceivedAfterDate parameter specifies an exception for the Inbox rule that looks for messages received after the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

The corresponding condition parameter to this exception is ReceivedAfterDate.



```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfReceivedBeforeDate
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfReceivedBeforeDate parameter specifies to check for messages received before the specified date.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".

If the message was received before the time specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfReceivedBeforeDate parameter specifies an exception for the Inbox rule that looks for messages received before the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

The corresponding condition parameter to this exception is ReceivedBeforeDate.



```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientAddressContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfRecipientAddressContainsWords parameter specifies one or more words to check in the message recipient's address.

If the recipient address contains one or more words specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfRecipientAddressContainsWords parameter specifies an exception for the Inbox rule that looks for messages where the specified words are in recipient email addresses.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding condition parameter to this exception is RecipientAddressContainsWords.



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

### -ExceptIfSentOnlyToMe
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfSentOnlyToMe parameter specifies to check for messages where the mailbox owner is the only recipient.

This parameter accepts $true or $false.

If the message is only sent to the recipient whose Inbox rule is being edited, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfSentOnlyToMe parameter specifies an exception for the Inbox rule that looks for messages where the only recipient is the mailbox owner. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner is the only recipient.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is SentOnlyToMe.



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

### -ExceptIfSentTo
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfSentTo parameter specifies to check message recipients for the recipient specified.

If the message is sent to the recipient specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfSentTo parameter specifies an exception that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

- Name

- Distinguished name (DN)

- Display name

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

The corresponding condition parameter to this exception is SentTo.



```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfSubjectContainsWords parameter specifies one or more words or phrases to check in the message subject.

If the message subject contains one or more words or phrases specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfSubjectContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the Subject field of messages.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding condition parameter to this exception is SubjectContainsWords.



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

### -ExceptIfSubjectOrBodyContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfSubjectOrBodyContainsWords parameter specifies one or more words or phrases to check in the message subject or body.

If the message subject or body contains one or more of the words or phrases specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfSubjectOrBodyContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the Subject field or body of messages.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding condition parameter to this exception is ExceptIfSubjectOrBodyContainsWords.



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

### -ExceptIfWithImportance
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfWithImportance parameter checks the message for the specified importance level. Valid values include:

- High

- Normal

- Low

If the message importance matches the importance specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfWithImportance parameter specifies an exception for the Inbox rule that looks for messages with the specified importance level. Valid values are:

- High

- Normal

- Low

The corresponding condition parameter to this exception is WithImportance.



```yaml
Type: Low | Normal | High
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithinSizeRangeMaximum
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfWithinSizeRangeMaximum parameter specifies a maximum message size. When using this parameter, you must also specify the minimum message size using the ExceptIfWithinSizeRangeMinimum parameter.

If the message size exceeds the maximum value specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfWithinSizeRangeMaximum parameter specifies part of an exception for the Inbox rule that looks for messages that smaller than specified maximum size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

You need to use this parameter with the ExceptIfWithinSizeRangeMainimum parameter, and the value of this parameter must be greater than the value of ExceptIfWithinSizeRangeMinimum.

The corresponding condition parameter to this exception is WithinSizeRangeMaximum.



```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithinSizeRangeMinimum
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfWithinSizeRangeMinimum parameter specifies a minimum message size. When using this parameter, you must also specify the maximum message size using the ExceptIfWithinSizeRangeMaximum parameter.

If the message size is smaller than the minimum value specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfWithinSizeRangeMinimum parameter specifies part of an exception for the Inbox rule that looks for messages that are larger than the specified minimum size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

You need to use this parameter with the ExceptIfWithinSizeRangeMaximum parameter, and the value of this parameter must be less than the value of ExceptIfWithinSizeRangeMaximum.

The corresponding condition parameter to this exception is WithinSizeRangeMinimum.



```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithSensitivity
!!! Exchange Server 2010, Exchange Server 2013

The ExceptIfWithSensitivity parameter checks messages for the specified sensitivity level. Valid values include:

- Normal

- Personal

- Private

- CompanyConfidential

If the sensitivity matches the sensitivity value specified in this parameter, the Inbox rule action isn't applied.



!!! Exchange Server 2016, Exchange Online

The ExceptIfWithSensitivity parameter specifies an exception for the Inbox rule that looks for messages with the specified sensitivity level. Valid values are:

- Normal

- Personal

- Private

- CompanyConfidential

The corresponding condition parameter to this exception is WithSensitivity.



```yaml
Type: Normal | Personal | Private | CompanyConfidential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FlaggedForAction
!!! Exchange Server 2010, Exchange Server 2013

The FlaggedForAction parameter specifies one or more message flags to check the message for. Valid values include:

- Any

- Call

- DoNotForward

- FollowUp

- ForYourInformation

- Forward

- NoResponseNecessary

- Read

- Reply

- ReplyToAll

- Review



!!! Exchange Server 2016, Exchange Online

The FlaggedForAction parameter specifies a condition for the Inbox rule that looks for messages with the specified message flag. Valid values are:

- Any

- Call

- DoNotForward

- FollowUp

- ForYourInformation

- Forward

- NoResponseNecessary

- Read

- Reply

- ReplyToAll

- Review



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

### -Force
!!! Exchange Server 2010

The Force switch specifies whether to suppress the confirmation prompt produced if rules created by Outlook exist on the mailbox. When taking an action using Inbox rules on Exchange 2010, any client-side rules are removed.



!!! Exchange Server 2013

The Force switch specifies whether to suppress the confirmation prompt produced if rules created by Outlook exist on the mailbox. When taking an action using Inbox rules on Exchange 2013, any client-side rules are removed.



!!! Exchange Server 2016, Exchange Online

The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

A confirmation prompt warns you if the mailbox contains rules that were created by Outlook, because any client-side rules will be removed by the actions of this cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardAsAttachmentTo
!!! Exchange Server 2010, Exchange Server 2013

The ForwardAsAttachmentTo parameter specifies a recipient to forward the message to as an attachment.



!!! Exchange Server 2016, Exchange Online

The ForwardAsAttachmentTo parameter specifies an action for the Inbox rule that forwards the message to the specified recipient as an attachment. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can specify multiple recipients separated by commas.



```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardTo
!!! Exchange Server 2010, Exchange Server 2013

The ForwardTo parameter specifies the identity of a recipient to forward the message to.



!!! Exchange Server 2016, Exchange Online

The ForwardTo parameter specifies an action for the Inbox rule that forwards the message to the specified recipient. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can specify multiple recipients separated by commas.



```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From
!!! Exchange Server 2010, Exchange Server 2013

The From parameter specifies the identity of the sender as a rule condition.



!!! Exchange Server 2016, Exchange Online

The From parameter specifies a condition for the Inbox rule that looks for the specified sender in messages. You can use any value that uniquely identifies the sender.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can specify multiple senders separated by commas.

The corresponding exception parameter to this condition is ExceptIfFrom.



```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The FromAddressContainsWords parameter specifies one or more words to check in the From address of the message.



!!! Exchange Server 2016, Exchange Online

The FromAddressContainsWords parameter specifies a condition for the Inbox rule that looks for messages where the specified words are in the sender's email address.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding exception parameter to this condition is ExceptIfFromAddressContainsWords.



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

### -FromSubscription
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

The FromSubscription parameter specifies the condition when a message is received from a POP, IMAP, or Hotmail, subscription.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The FromSubscription parameter specifies the condition when a message is received from a POP, IMAP, or Hotmail, subscription.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The FromSubscription parameter specifies a condition for the Inbox rule that looks for messages received from subscriptions (for example, POP or IMAP subscriptions). You can identify the subscription by using the Get-Subscription cmdlet.

The corresponding exception parameter to this condition is ExceptIfFromSubscription.



```yaml
Type: AggregationSubscriptionIdentity[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasAttachment
!!! Exchange Server 2010, Exchange Server 2013

The HasAttachment parameter specifies whether to check for messages with attachments.



!!! Exchange Server 2016, Exchange Online

The HasAttachment parameter specifies a condition for the Inbox rule that looks for messages with attachments. Valid values are:

- $true: The rule action is applied to messages that have attachments.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfHasAttachment.



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

### -HasClassification
!!! Exchange Server 2010, Exchange Server 2013

The HasClassification parameter checks messages for the specified message classification.



!!! Exchange Server 2016, Exchange Online

The HasClassification parameter specifies a condition for the Inbox rule that looks for messages with the specified message classification. You can find message classifications by using the Get-MessageClassification cmdlet. You can specify multiple message classifications separated by commas.

The corresponding exception parameter to this condition is ExceptIfHasClassification.



```yaml
Type: MessageClassificationIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The HeaderContainsWords parameter specifies one or more words to match in the specified message header.



!!! Exchange Server 2016, Exchange Online

The HeaderContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the header fields of messages.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding exception parameter to this condition is ExceptIfHeaderContainsWords.



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

### -Mailbox
!!! Exchange Server 2010, Exchange Server 2013

The Mailbox parameter specifies the identity of the mailbox for which the new rule is being created. You can use the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2016, Exchange Online

The Mailbox parameter specifies the mailbox that contains the Inbox rule. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)



```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsRead
!!! Exchange Server 2010, Exchange Server 2013

The MarkAsRead parameter specifies whether to mark the message as read. When set to $true, the MarkAsRead parameter marks the message as read.



!!! Exchange Server 2016, Exchange Online

The MarkAsRead parameter specifies an action for the Inbox rule that marks messages as read. Valid values are:

- $true: Messages that match the conditions of the rule are marked as read.

- $false: The action isn't used.



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

### -MarkImportance
!!! Exchange Server 2010, Exchange Server 2013

The MarkImportance parameter specifies that the message importance be marked with one of the following values:

- Low

- Normal

- High



!!! Exchange Server 2016, Exchange Online

The MarkImportance parameter specifies an action for the Inbox rule that marks messages with the specified importance flag. Valid values are:

- Low

- Normal

- High



```yaml
Type: Low | Normal | High
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTypeMatches
!!! Exchange Server 2010, Exchange Server 2013

The MessageTypeMatches parameter specifies a message type to apply the rule to. Valid values include:

- AutomaticReply

- AutomaticForward

- Encrypted

- Calendaring

- CalendaringResponse

- PermissionControlled

- Voicemail

- Signed

- ApprovalRequest

- ReadReceipt

- NonDeliveryReport



!!! Exchange Server 2016, Exchange Online

The MessageTypeMatches parameter specifies a condition for the Inbox rule that looks for messages of the specified type. Valid values are:

- AutomaticReply

- AutomaticForward

- Encrypted

- Calendaring

- CalendaringResponse

- PermissionControlled

- Voicemail

- Signed

- ApprovalRequest

- ReadReceipt

- NonDeliveryReport

The corresponding exception parameter to this condition is ExceptIfMessageTypeMatches.



```yaml
Type: AutomaticReply | AutomaticForward | Encrypted | Calendaring | CalendaringResponse | PermissionControlled | Voicemail | Signed | ApprovalRequest | ReadReceipt | NonDeliveryReport
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveToFolder
!!! Exchange Server 2010, Exchange Server 2013

The MoveToFolder parameter specifies an existing mailbox folder to which the message is copied.



!!! Exchange Server 2016, Exchange Online

The MoveToFolder parameter specifies an action for the Inbox rule that moves messages to the specified mailbox folder. You can specify the existing folder by name, or by the store object ID and a path string (for example, \\Inbox\\Personal).



```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MyNameInCcBox
!!! Exchange Server 2010, Exchange Server 2013

The MyNameInCcBox parameter specifies that the mailbox for which the rule is being created should appear in the Cc field of the message. To use this predicate, set the value to $true.



!!! Exchange Server 2016, Exchange Online

The MyNameInCcBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner is in the Cc field. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner is in the Cc field.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameInCcBox.



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

### -MyNameInToBox
!!! Exchange Server 2010, Exchange Server 2013

The MyNameInToBox parameter specifies that the mailbox for which the rule is being created should appear in the To field of the message. To use this predicate, set the value to $true.



!!! Exchange Server 2016, Exchange Online

The MyNameInToBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner is in the To field. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner is in the To field.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameInToBox.



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

### -MyNameInToOrCcBox
!!! Exchange Server 2010, Exchange Server 2013

The MyNameInToOrCcBox parameter specifies that the mailbox for which the rule is being created should appear in the To or Cc fields of the message. To add this condition, set the value to $true.



!!! Exchange Server 2016, Exchange Online

The MyNameInToOrCcBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner is in the To or Cc fields Valid values are.

- $true: The rule action is applied to messages where the mailbox owner is in the To or Cc fields.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameInToOrCcBox.



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

### -MyNameNotInToBox
!!! Exchange Server 2010, Exchange Server 2013

The MyNameNotInToBox parameter specifies that the mailbox for which the rule is being created should not appear in the To field of the message. To use this predicate, set the value to $true.



!!! Exchange Server 2016, Exchange Online

The MyNameNotInToBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner isn't in the To field. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner isn't in the To field.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameNotInToBox.



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

### -Name
!!! Exchange Server 2010, Exchange Server 2013

The Name parameter specifies a name for the Inbox rule.



!!! Exchange Server 2016, Exchange Online

The Name parameter specifies a name for the Inbox rule. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").



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

### -Priority
!!! Exchange Server 2010, Exchange Server 2013

The Priority parameter specifies a priority for the Inbox rule.



!!! Exchange Server 2016, Exchange Online

The Priority parameter specifies a priority for the Inbox rule that determines the order of rule processing. A lower integer value indicates a higher priority,



```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceivedAfterDate
!!! Exchange Server 2010, Exchange Server 2013

The ReceivedAfterDate parameter specifies a date. The rule is applied to messages received after the specified date.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".



!!! Exchange Server 2016, Exchange Online

The ReceivedAfterDate parameter specifies a condition for the Inbox rule that looks for messages received after the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

The corresponding exception parameter to this condition is ExceptIfReceivedAfterDate.



```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceivedBeforeDate
!!! Exchange Server 2010, Exchange Server 2013

The ReceivedBeforeDate parameter specifies a date. The rule is applied only to messages received before the specified date.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".



!!! Exchange Server 2016, Exchange Online

The ReceivedBeforeDate parameter specifies a condition for the Inbox rule that looks for messages received before the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

The corresponding exception parameter to this condition is ExceptIfReceivedBeforeDate.



```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddressContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The RecipientAddressContainsWords parameter specifies one or more words to check for in the recipient address.



!!! Exchange Server 2016, Exchange Online

The RecipientAddressContainsWords parameter specifies a condition for the Inbox rule that looks for messages where the specified words are in recipient email addresses.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding exception parameter to this condition is ExceptIfRecipientAddressContainsWords.



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

### -RedirectTo
!!! Exchange Server 2010, Exchange Server 2013

The RedirectTo parameter specifies a recipient to redirect the message to.



!!! Exchange Server 2016, Exchange Online

The RedirectTo parameter specifies an action for the Inbox rule that recdirects the message to the specified recipient. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

You can specify multiple recipients separated by commas.



```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendTextMessageNotificationTo
!!! Exchange Server 2010, Exchange Server 2013

The SendTextMessageNotificationTo parameter specifies one or more text message recipients to send a notification to.



!!! Exchange Server 2016, Exchange Online

The SendTextMessageNotificationTo parameter specifies an action for the Inbox rule that send a text message notification to the specified telephone number.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.



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

### -SentOnlyToMe
!!! Exchange Server 2010, Exchange Server 2013

The SentOnlyToMe parameter specifies whether a message is sent only to the mailbox owner.



!!! Exchange Server 2016, Exchange Online

The SentOnlyToMe parameter specifies a condition for the Inbox rule that looks for messages where the only recipient is the mailbox owner. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner is the only recipient.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfSentOnlyToMe.



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

### -SentTo
!!! Exchange Server 2010, Exchange Server 2013

The SentTo parameter specifies the identity of a recipient as a condition.



!!! Exchange Server 2016, Exchange Online

The SentTo parameter specifies a condition for the Inbox rule that looks for messages with the specified recipients. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

You can specify multiple recipients separated by commas.

The corresponding exception parameter to this condition is ExceptIfSentTo.



```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StopProcessingRules
!!! Exchange Server 2010, Exchange Server 2013

The StopProcessingRules parameter specifies whether Exchange stops processing additional rules if the conditions of this Inbox rule are met. If set to $true, the StopProcessingRules parameter instructs Exchange to stop processing additional rules if the conditions of this Inbox rule are met.



!!! Exchange Server 2016, Exchange Online

The StopProcessingRules parameter specifies an action for the Inbox rule that stops processing additional rules if the conditions of this Inbox rule are met. Valid values are:If set to $true, the StopProcessingRules parameter instructs Exchange to stop processing additional rules if the conditions of this Inbox rule are met.

- $true: Stop processing more rules.

- $false: The action isn't used (continue processing more rules after this one).



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

### -SubjectContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The SubjectContainsWords parameter specifies one or more keywords to be matched in the subject field of a message.



!!! Exchange Server 2016, Exchange Online

The SubjectContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the Subject field of messages.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding exception parameter to this condition is ExceptIfSubjectContainsWords.



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

### -SubjectOrBodyContainsWords
!!! Exchange Server 2010, Exchange Server 2013

The SubjectOrBodyContainsWords parameter specifies one or more words to be matched in the message subject or body.



!!! Exchange Server 2016, Exchange Online

The SubjectOrBodyContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the Subject field or body of messages.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The corresponding exception parameter to this condition is ExceptIfSubjectOrBodyContainsWords.



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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithImportance
!!! Exchange Server 2010, Exchange Server 2013

The WithImportance parameter specifies that messages with the specified importance level are checked. Valid values include:

- High

- Normal

- Low



!!! Exchange Server 2016, Exchange Online

The WithImportance parameter specifies a condition for the Inbox rule that looks for messages with the specified importance level. Valid values are:

- High

- Normal

- Low

The corresponding exception parameter to this condition is ExceptIfWithImportance.



```yaml
Type: Low | Normal | High
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithinSizeRangeMaximum
!!! Exchange Server 2010, Exchange Server 2013

The WithinSizeRangeMaximum parameter specifies the maximum message size. When using this parameter, you must also specify a minimum message size value using the WithinSizeRangeMinimum parameter.



!!! Exchange Server 2016, Exchange Online

The WithinSizeRangeMaximum parameter specifies part of a condition for the Inbox rule that looks for messages that are smaller than specified maximum size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

You need to use this parameter with the WithinSizeRangeMinimum parameter, and the value of this parameter must be greater than the value of WithinSizeRangeMinimum.

The corresponding exception parameter to this condition is ExceptIfWithinSizeRangeMaximum.



```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithinSizeRangeMinimum
!!! Exchange Server 2010

The WithinSizeRangeMinimum parameter specifies the minimum size range. When using this parameter, you must also specify a maximum message size value using the WithinSizeRangeMaximum parameter.



!!! Exchange Server 2013

The WithinSizeRangeMinimum parameter specifies the minimum message size. When using this parameter, you must also specify a maximum message size value using the WithinSizeRangeMaximum parameter.



!!! Exchange Server 2016, Exchange Online

The WithinSizeRangeMinimum parameter specifies part of a condition for the Inbox rule that looks for messages that are larger than the specified minimum size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

You need to use this parameter with the WithinSizeRangeMaximum parameter, and the value of this parameter must be less than the value of WithinSizeRangeMaximum.

The corresponding exception parameter to this condition is ExceptIfWithinSizeRangeMinimum.



```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithSensitivity
!!! Exchange Server 2010, Exchange Server 2013

The WithSensitivity parameter specifies a message sensitivity level. Valid values include one of the following:

- Normal

- Personal

- Private

- CompanyConfidential



!!! Exchange Server 2016, Exchange Online

The WithSensitivity parameter specifies a condition for the Inbox rule that looks for messages with the specified sensitivity level. Valid values are:

- Normal

- Personal

- Private

- CompanyConfidential

The corresponding exception parameter to this condition is ExceptIfWithSensitivity.



```yaml
Type: Normal | Personal | Private | CompanyConfidential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplySystemCategory
The ApplySystemCategory parameter specifies an action for the Inbox rule that applies the specified system category to messages. System categories are available to all mailboxes in the organization. Valid values are:

- NotDefined

- Bills

- Document

- DocumentPlus

- Event

- Family

- File

- Flight

- FromContact

- Important

- LiveView

- Lodging

- MailingList

- Newsletter

- Photo

- Purchase

- RentalCar

- RestaurantReservation

- RetiredPromotion

- ShippingNotification

- Shopping

- SocialUpdate

- Travel

- Video

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteSystemCategory
The DeleteSystemCategory parameter specifies an action for the Inbox rule that deletes the specified system category from messages. System categories are available to all mailboxes in the organization. Valid values are:

- NotDefined

- Bills

- Document

- DocumentPlus

- Event

- Family

- File

- Flight

- FromContact

- Important

- LiveView

- Lodging

- MailingList

- Newsletter

- Photo

- Purchase

- RentalCar

- RestaurantReservation

- RetiredPromotion

- ShippingNotification

- Shopping

- SocialUpdate

- Travel

- Video

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PinMessage
The PinMessage parameter specifies an action for the Inbox rule that pins messages to the top of the Inbox. Valid values are:

- $true: Message that match the conditions of the rule are pinned to the top of the Inbox.

- $false: The action isn't used.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/baef3e69-ff01-4e00-a4bb-e8826bbbf38b.aspx)

