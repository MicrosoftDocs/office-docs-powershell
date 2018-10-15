---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: New-InboxRule
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# New-InboxRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-InboxRule cmdlet to create Inbox rules in mailboxes. Inbox rules process messages in the Inbox based on conditions and take actions such as moving a message to a specified folder or deleting a message.

You must have adequate permissions on the mailbox to create an Inbox rule.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
New-InboxRule [-Name] <String> [-AlwaysDeleteOutlookRulesBlob] [-ApplyCategory <MultiValuedProperty>]
 [-BodyContainsWords <MultiValuedProperty>] [-Confirm] [-CopyToFolder <MailboxFolderIdParameter>]
 [-DeleteMessage <$true | $false>] [-DomainController <Fqdn>]
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
 [-MyNameInToOrCcBox <$true | $false>] [-MyNameNotInToBox <$true | $false>]
 [-Priority <Int32>] [-ReceivedAfterDate <ExDateTime>]
 [-ReceivedBeforeDate <ExDateTime>] [-RecipientAddressContainsWords <MultiValuedProperty>]
 [-RedirectTo <RecipientIdParameter[]>] [-SendTextMessageNotificationTo <MultiValuedProperty>]
 [-SentOnlyToMe <$true | $false>] [-SentTo <RecipientIdParameter[]>] [-StopProcessingRules <$true | $false>]
 [-SubjectContainsWords <MultiValuedProperty>] [-SubjectOrBodyContainsWords <MultiValuedProperty>] [-WhatIf]
 [-WithImportance <Low | Normal | High>] [-WithinSizeRangeMaximum <ByteQuantifiedSize>]
 [-WithinSizeRangeMinimum <ByteQuantifiedSize>]
 [-WithSensitivity <Normal | Personal | Private | CompanyConfidential>]
 [-ApplySystemCategory <MultiValuedProperty>] [-DeleteSystemCategory <MultiValuedProperty>]
 [-PinMessage <$true | $false>] [<CommonParameters>]
```

### Set2
```
New-InboxRule -FromMessageId <MailboxStoreObjectIdParameter> [-ValidateOnly] [-AlwaysDeleteOutlookRulesBlob]
 [-Confirm] [-DomainController <Fqdn>] [-ExceptIfFromSubscription <AggregationSubscriptionIdentity[]>] [-Force]
 [-FromSubscription <AggregationSubscriptionIdentity[]>] [-Mailbox <MailboxIdParameter>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
When you create, modify, remove, enable, or disable an Inbox rule in Exchange PowerShell, any client-side rules disabled by Microsoft Outlook and outbound rules are removed.

Parameters that are used for conditions also have corresponding exception parameters. When conditions specified in an exception are matched, the rule isn't applied to the message. Exception parameters begin with ExceptIf. For example, the exception parameter for SubjectOrBodyContainsWords is ExceptIfSubjectOrBodyContainsWords.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-InboxRule "CheckActionRequired" -MyNameInToBox $true -FlaggedForAction Any -MarkImportance "High"
```

This example raises the message importance to High if the mailbox owner is in the To field. In addition, the message is flagged for action.

## PARAMETERS

### -Name
The Name parameter specifies the name of the Inbox rule. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromMessageId
The FromMessageId parameter specifies the message that's used to create the Inbox rule. The rule is based on the properties of the message. You identify the message by its Base64-encoded StoreObjectId property value. For example:

- MailboxId\\StoreObjectId

- StoreObjectId

When you use this parameter to create an Inbox rule, the following message properties are used in the rule:

- Subject: The message subject is added to the SubjectContainsWords condition.

- From: The message sender is added to the From condition.

- To and Cc: Recipients in the To and Cc fields are added to the SentTo condition.

```yaml
Type: MailboxStoreObjectIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidateOnly
The ValidateOnly switch tells the cmdlet to evaluate the conditions and requirements necessary to perform the operation and then reports whether the operation will succeed or fail. No changes are made when the ValidateOnly switch is used.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlwaysDeleteOutlookRulesBlob
The AlwaysDeleteOutlookRulesBlob parameter suppresses a warning that end users or administrators get if they use Outlook Web App or Windows PowerShell to modify Inbox rules.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyCategory
The ApplyCategory parameter specifies an action for the Inbox rule that applies the specified category to messages. A valid value is any text value that you want to define as a category. You can specify multiple categories separated by commas. If the value contains spaces, enclose the value in quotation marks (").

The categories that you specify for this parameter are defined in the mailbox (they aren't shared between mailboxes).

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BodyContainsWords
The BodyContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the body of messages.

If the phrase contains spaces, you need to enclose the value in quotation marks. You can specify multiple values separated by commas.

The corresponding exception parameter to this condition is ExceptIfBodyContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CopyToFolder
The CopyToFolder parameter specifies an action for the Inbox rule that copies messages to the specified mailbox folder. You can specify the existing folder by name, or by the store object ID and a path string (for example, \\Inbox\\Personal).

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteMessage
The DeleteMessage parameter specifies an action for the Inbox rule that sends messages to the Deleted Items folder. Valid values are:

- $true: Messages that match the conditions of the rule are moved to the Deleted Items folder.

- $false: The action isn't used.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfBodyContainsWords
The ExceptIfBodyContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the body of messages.

If the phrase contains spaces, you need to enclose the value in quotation marks. You can specify multiple values separated by commas.

The corresponding condition parameter to this exception is BodyContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFlaggedForAction
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFrom
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressContainsWords
The ExceptIfFromAddressContainsWords parameter specifies an exception for the Inbox rule that looks for messages where the specified words are in the sender's email address.

You can specify multiple values separated by commas.

The corresponding condition parameter to this exception is FromAddressContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromSubscription
This parameter is available only in the cloud-based service.

The ExceptIfFromSubscription parameter specifies an exception for the Inbox rule that looks for messages received from subscriptions (for example, POP or IMAP subscriptions). You can identify the subscription by using the Get-Subscription cmdlet.

The corresponding condition parameter to this exception is FromSubscription.

```yaml
Type: AggregationSubscriptionIdentity[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasAttachment
The ExceptIfHasAttachment parameter specifies an exception for the Inbox rule that looks for messages with attachments. Valid values are:

- $true: The rule action isn't applied to messages that have attachments.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is HasAttachment.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasClassification
The ExceptIfHasClassification parameter specifies an exception for the Inbox rule that looks for messages with the specified message classification. You can find message classifications by using the Get-MessageClassification cmdlet. You can specify multiple message classifications separated by commas.

The corresponding condition parameter to this exception is HasClassification.

```yaml
Type: MessageClassificationIdParameter[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderContainsWords
The HeaderContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the header fields of messages.

If the phrase contains spaces, you need to enclose the value in quotation marks. You can specify multiple values separated by commas.

The corresponding condition parameter to this exception is HeaderContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMessageTypeMatches
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMyNameInCcBox
The ExceptIfMyNameInCcBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner is in the Cc field. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner is in the Cc field.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameInCcBox.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMyNameInToBox
The ExceptIfMyNameInToBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner is in the To field. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner is in the To field.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameInToBox.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMyNameInToOrCcBox
The ExceptIfMyNameInToOrCcBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner is in the To or Cc fields Valid values are.

- $true: The rule action isn't applied to messages where the mailbox owner is in the To or Cc fields.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameInToOrCcBox.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMyNameNotInToBox
The ExceptIfMyNameNotInToBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner isn't in the To field. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner isn't in the To field.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameNotInToBox.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfReceivedAfterDate
The ExceptIfReceivedAfterDate parameter specifies an exception for the Inbox rule that looks for messages received after the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

The corresponding condition parameter to this exception is ReceivedAfterDate.

```yaml
Type: ExDateTime
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfReceivedBeforeDate
The ExceptIfReceivedBeforeDate parameter specifies an exception for the Inbox rule that looks for messages received before the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

The corresponding condition parameter to this exception is ReceivedBeforeDate.

```yaml
Type: ExDateTime
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientAddressContainsWords
The ExceptIfRecipientAddressContainsWords parameter specifies an exception for the Inbox rule that looks for messages where the specified words are in recipient email addresses.

You can specify multiple values separated by commas.

The corresponding condition parameter to this exception is RecipientAddressContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentOnlyToMe
The ExceptIfSentOnlyToMe parameter specifies an exception for the Inbox rule that looks for messages where the only recipient is the mailbox owner. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner is the only recipient.

- $false: The exception isn't used.

The corresponding condition parameter to this exception is SentOnlyToMe.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentTo
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectContainsWords
The ExceptIfSubjectContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the Subject field of messages.

If the phrase contains spaces, you need to enclose the value in quotation marks. You can specify multiple values separated by commas.

The corresponding condition parameter to this exception is SubjectContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectOrBodyContainsWords
The ExceptIfSubjectOrBodyContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the Subject field or body of messages.

If the phrase contains spaces, you need to enclose the value in quotation marks. You can specify multiple values separated by commas.

The corresponding condition parameter to this exception is ExceptIfSubjectOrBodyContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithImportance
The ExceptIfWithImportance parameter specifies an exception for the Inbox rule that looks for messages with the specified importance level. Valid values are:

- High

- Normal

- Low

The corresponding condition parameter to this exception is WithImportance.

```yaml
Type: Low | Normal | High
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithinSizeRangeMaximum
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithinSizeRangeMinimum
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithSensitivity
The ExceptIfWithSensitivity parameter specifies an exception for the Inbox rule that looks for messages with the specified sensitivity level. Valid values are:

- Normal

- Personal

- Private

- CompanyConfidential

The corresponding condition parameter to this exception is WithSensitivity.

```yaml
Type: Normal | Personal | Private | CompanyConfidential
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FlaggedForAction
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

A confirmation prompt warns you if the mailbox contains rules that were created by Outlook, because any client-side rules will be removed by the actions of this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardAsAttachmentTo
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardTo
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressContainsWords
The FromAddressContainsWords parameter specifies a condition for the Inbox rule that looks for messages where the specified words are in the sender's email address.

You can specify multiple values separated by commas.

The corresponding exception parameter to this condition is ExceptIfFromAddressContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromSubscription
This parameter is available only in the cloud-based service.

The FromSubscription parameter specifies a condition for the Inbox rule that looks for messages received from subscriptions (for example, POP or IMAP subscriptions). You can identify the subscription by using the Get-Subscription cmdlet.

The corresponding exception parameter to this condition is ExceptIfFromSubscription.

```yaml
Type: AggregationSubscriptionIdentity[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasAttachment
The HasAttachment parameter specifies a condition for the Inbox rule that looks for messages with attachments. Valid values are:

- $true: The rule action is applied to messages that have attachments.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfHasAttachment.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasClassification
The HasClassification parameter specifies a condition for the Inbox rule that looks for messages with the specified message classification. You can find message classifications by using the Get-MessageClassification cmdlet. You can specify multiple message classifications separated by commas.

The corresponding exception parameter to this condition is ExceptIfHasClassification.

```yaml
Type: MessageClassificationIdParameter[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderContainsWords
The HeaderContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the header fields of messages.

If the phrase contains spaces, you need to enclose the value in quotation marks. You can specify multiple values separated by commas.

The corresponding exception parameter to this condition is ExceptIfHeaderContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsRead
The MarkAsRead parameter specifies an action for the Inbox rule that marks messages as read. Valid values are:

- $true: Messages that match the conditions of the rule are marked as read.

- $false: The action isn't used.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkImportance
The MarkImportance parameter specifies an action for the Inbox rule that marks messages with the specified importance flag. Valid values are:

- Low

- Normal

- High

```yaml
Type: Low | Normal | High
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTypeMatches
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveToFolder
The MoveToFolder parameter specifies an action for the Inbox rule that moves messages to the specified mailbox folder. You can specify the existing folder by name, or by the store object ID and a path string (for example, \\Inbox\\Personal).

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MyNameInCcBox
The MyNameInCcBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner is in the Cc field. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner is in the Cc field.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameInCcBox.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MyNameInToBox
The MyNameInToBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner is in the To field. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner is in the To field.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameInToBox.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MyNameInToOrCcBox
The MyNameInToOrCcBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner is in the To or Cc fields Valid values are.

- $true: The rule action is applied to messages where the mailbox owner is in the To or Cc fields.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameInToOrCcBox.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MyNameNotInToBox
The MyNameNotInToBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner isn't in the To field. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner isn't in the To field.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameNotInToBox.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specifies a priority for the Inbox rule that determines the order of rule processing. A lower integer value indicates a higher priority,

```yaml
Type: Int32
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceivedAfterDate
The ReceivedAfterDate parameter specifies a condition for the Inbox rule that looks for messages received after the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

The corresponding exception parameter to this condition is ExceptIfReceivedAfterDate.

```yaml
Type: ExDateTime
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceivedBeforeDate
The ReceivedBeforeDate parameter specifies a condition for the Inbox rule that looks for messages received before the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

The corresponding exception parameter to this condition is ExceptIfReceivedBeforeDate.

```yaml
Type: ExDateTime
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddressContainsWords
The RecipientAddressContainsWords parameter specifies a condition for the Inbox rule that looks for messages where the specified words are in recipient email addresses.

You can specify multiple values separated by commas.

The corresponding exception parameter to this condition is ExceptIfRecipientAddressContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RedirectTo
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendTextMessageNotificationTo
The SendTextMessageNotificationTo parameter specifies an action for the Inbox rule that send a text message notification to the specified telephone number.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentOnlyToMe
The SentOnlyToMe parameter specifies a condition for the Inbox rule that looks for messages where the only recipient is the mailbox owner. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner is the only recipient.

- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfSentOnlyToMe.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StopProcessingRules
The StopProcessingRules parameter specifies an action for the Inbox rule that stops processing additional rules if the conditions of this Inbox rule are met. Valid values are:If set to $true, the StopProcessingRules parameter instructs Exchange to stop processing additional rules if the conditions of this Inbox rule are met.

- $true: Stop processing more rules.

- $false: The action isn't used (continue processing more rules after this one).

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectContainsWords
The SubjectContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the Subject field of messages.

If the phrase contains spaces, you need to enclose the value in quotation marks. You can specify multiple values separated by commas.

The corresponding exception parameter to this condition is ExceptIfSubjectContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectOrBodyContainsWords
The SubjectOrBodyContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the Subject field or body of messages.

If the phrase contains spaces, you need to enclose the value in quotation marks. You can specify multiple values separated by commas.

The corresponding exception parameter to this condition is ExceptIfSubjectOrBodyContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithImportance
The WithImportance parameter specifies a condition for the Inbox rule that looks for messages with the specified importance level. Valid values are:

- High

- Normal

- Low

The corresponding exception parameter to this condition is ExceptIfWithImportance.

```yaml
Type: Low | Normal | High
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithinSizeRangeMaximum
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithinSizeRangeMinimum
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithSensitivity
The WithSensitivity parameter specifies a condition for the Inbox rule that looks for messages with the specified sensitivity level. Valid values are:

- Normal

- Personal

- Private

- CompanyConfidential

The corresponding exception parameter to this condition is ExceptIfWithSensitivity.

```yaml
Type: Normal | Personal | Private | CompanyConfidential
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/2c6b8ee8-1ff0-4353-845c-f3ea9778abc3.aspx)
