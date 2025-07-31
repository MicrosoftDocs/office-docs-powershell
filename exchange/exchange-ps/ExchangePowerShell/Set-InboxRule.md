---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-inboxrule
schema: 2.0.0
title: Set-InboxRule
---

# Set-InboxRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-InboxRule cmdlet to modify existing Inbox rules in mailboxes. Inbox rules process messages in the Inbox based on conditions specified and take actions such as moving a message to a specified folder or deleting a message.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-InboxRule [-Identity] <InboxRuleIdParameter>
 [-AlwaysDeleteOutlookRulesBlob]
 [-ApplyCategory <MultiValuedProperty>]
 [-ApplySystemCategory <MultiValuedProperty>]
 [-BodyContainsWords <MultiValuedProperty>]
 [-Confirm]
 [-CopyToFolder <MailboxFolderIdParameter>]
 [-DeleteMessage <Boolean>]
 [-DeleteSystemCategory <MultiValuedProperty>]
 [-DomainController <Fqdn>]
 [-ExceptIfBodyContainsWords <MultiValuedProperty>]
 [-ExceptIfFlaggedForAction <String>]
 [-ExceptIfFrom <RecipientIdParameter[]>]
 [-ExceptIfFromAddressContainsWords <MultiValuedProperty>]
 [-ExceptIfHasAttachment <Boolean>]
 [-ExceptIfHasClassification <MessageClassificationIdParameter[]>]
 [-ExceptIfHeaderContainsWords <MultiValuedProperty>]
 [-ExceptIfMessageTypeMatches <InboxRuleMessageType>]
 [-ExceptIfMyNameInCcBox <Boolean>]
 [-ExceptIfMyNameInToBox <Boolean>]
 [-ExceptIfMyNameInToOrCcBox <Boolean>]
 [-ExceptIfMyNameNotInToBox <Boolean>]
 [-ExceptIfReceivedAfterDate <ExDateTime>]
 [-ExceptIfReceivedBeforeDate <ExDateTime>]
 [-ExceptIfRecipientAddressContainsWords <MultiValuedProperty>]
 [-ExceptIfSentOnlyToMe <Boolean>]
 [-ExceptIfSentTo <RecipientIdParameter[]>]
 [-ExceptIfSubjectContainsWords <MultiValuedProperty>]
 [-ExceptIfSubjectOrBodyContainsWords <MultiValuedProperty>]
 [-ExceptIfWithImportance <Importance>]
 [-ExceptIfWithinSizeRangeMaximum <ByteQuantifiedSize>]
 [-ExceptIfWithinSizeRangeMinimum <ByteQuantifiedSize>]
 [-ExceptIfWithSensitivity <Sensitivity>]
 [-FlaggedForAction <String>]
 [-Force]
 [-ForwardAsAttachmentTo <RecipientIdParameter[]>]
 [-ForwardTo <RecipientIdParameter[]>]
 [-From <RecipientIdParameter[]>]
 [-FromAddressContainsWords <MultiValuedProperty>]
 [-HasAttachment <Boolean>]
 [-HasClassification <MessageClassificationIdParameter[]>]
 [-HeaderContainsWords <MultiValuedProperty>]
 [-Mailbox <MailboxIdParameter>]
 [-MarkAsRead <Boolean>]
 [-MarkImportance <Importance>]
 [-MessageTypeMatches <InboxRuleMessageType>]
 [-MoveToFolder <MailboxFolderIdParameter>]
 [-MyNameInCcBox <Boolean>]
 [-MyNameInToBox <Boolean>]
 [-MyNameInToOrCcBox <Boolean>]
 [-MyNameNotInToBox <Boolean>]
 [-Name <String>]
 [-PinMessage <Boolean>]
 [-Priority <Int32>]
 [-ReceivedAfterDate <ExDateTime>]
 [-ReceivedBeforeDate <ExDateTime>]
 [-RecipientAddressContainsWords <MultiValuedProperty>]
 [-RedirectTo <RecipientIdParameter[]>]
 [-SendTextMessageNotificationTo <MultiValuedProperty>]
 [-SentOnlyToMe <Boolean>]
 [-SentTo <RecipientIdParameter[]>]
 [-SoftDeleteMessage <Boolean>]
 [-StopProcessingRules <Boolean>]
 [-SubjectContainsWords <MultiValuedProperty>]
 [-SubjectOrBodyContainsWords <MultiValuedProperty>]
 [-WhatIf]
 [-WithImportance <Importance>]
 [-WithinSizeRangeMaximum <ByteQuantifiedSize>]
 [-WithinSizeRangeMinimum <ByteQuantifiedSize>]
 [-WithSensitivity <Sensitivity>]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-InboxRule cmdlet allows you to modify the rule conditions, exceptions, and actions.

When you create, modify, remove, enable, or disable an Inbox rule in Exchange PowerShell, any client-side rules created by Microsoft Outlook are removed.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-InboxRule -Mailbox chris@contoso.com -Name ProjectContoso -MarkImportance "High"
```

This example modifies the action of the existing Inbox rule ProjectContoso. The MarkImportance parameter is used to mark the message with high importance.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the Inbox rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- Name
- RuleIdentity property (for example, 16752869479666417665).
- Exchange Online: `MailboxAlias\RuleIdentity` (for example, `rzaher\16752869479666417665`).
- On-premises Exchange: `MailboxCanonicalName\RuleIdentity` (for example, `contoso.com/Users/Rick Zaher\16752869479666417665`).

```yaml
Type: InboxRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AlwaysDeleteOutlookRulesBlob

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AlwaysDeleteOutlookRulesBlob switch hides a warning message when you use Outlook on the web (formerly known as Outlook Web App) or Exchange PowerShell to modify Inbox rules. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyCategory

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ApplyCategory parameter specifies an action for the Inbox rule that applies the specified category to messages. A valid value is any text value that you want to define as a category. You can specify multiple categories separated by commas. If the value contains spaces, enclose the value in quotation marks (").

The categories that you specify for this parameter are defined in the mailbox (they aren't shared between mailboxes).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplySystemCategory

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BodyContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The BodyContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the body of messages.

To specify multiple words or phrases that overwrite any existing entries, use the following syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding exception parameter to this condition is ExceptIfBodyContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CopyToFolder

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The CopyToFolder parameter specifies an action for the Inbox rule that copies messages to the specified mailbox folder. The syntax is `MailboxID:\ParentFolder[\SubFolder]`.

For the value of `MailboxID`, you can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

Example values for this parameter are `john@contoso.com:\Marketing` or `John:\Inbox\Reports`.

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteSystemCategory

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteMessage

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DeleteMessage parameter specifies an action for the Inbox rule that sends messages to the Deleted Items folder. Valid values are:

- $true: Messages that match the conditions of the rule are moved to the Deleted Items folder.
- $false: The action isn't used.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfBodyContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfBodyContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the body of messages.

To specify multiple words or phrases that overwrite any existing entries, use the following syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding condition parameter to this exception is BodyContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFlaggedForAction

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFrom

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfFrom parameter specifies an exception for the Inbox rule that looks for the specified sender in messages. You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

The corresponding condition parameter to this exception is From.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfFromAddressContainsWords parameter specifies an exception for the Inbox rule that looks for messages where the specified words are in the sender's email address.

To specify multiple words or phrases that overwrite any existing entries, use the following syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding condition parameter to this exception is FromAddressContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasAttachment

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfHasAttachment parameter specifies an exception for the Inbox rule that looks for messages with attachments. Valid values are:

- $true: The rule action isn't applied to messages that have attachments.
- $false: The exception isn't used.

The corresponding condition parameter to this exception is HasAttachment.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasClassification

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfHasClassification parameter specifies an exception for the Inbox rule that looks for messages with the specified message classification. You can find message classifications by using the Get-MessageClassification cmdlet. You can specify multiple message classifications separated by commas.

The corresponding condition parameter to this exception is HasClassification.

```yaml
Type: MessageClassificationIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The HeaderContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the header fields of messages.

To specify multiple words or phrases that overwrite any existing entries, use the following syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding condition parameter to this exception is HeaderContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMessageTypeMatches

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Type: InboxRuleMessageType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMyNameInCcBox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfMyNameInCcBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner is in the Cc field. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner is in the Cc field.
- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameInCcBox.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMyNameInToBox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfMyNameInToBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner is in the To field. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner is in the To field.
- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameInToBox.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMyNameInToOrCcBox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfMyNameInToOrCcBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner is in the To or Cc fields Valid values are.

- $true: The rule action isn't applied to messages where the mailbox owner is in the To or Cc fields.
- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameInToOrCcBox.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMyNameNotInToBox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfMyNameNotInToBox parameter specifies an exception for the Inbox rule that looks for messages where the mailbox owner isn't in the To field. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner isn't in the To field.
- $false: The exception isn't used.

The corresponding condition parameter to this exception is MyNameNotInToBox.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfReceivedAfterDate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfReceivedAfterDate parameter specifies an exception for the Inbox rule that looks for messages received after the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

The corresponding condition parameter to this exception is ReceivedAfterDate.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfReceivedBeforeDate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfReceivedBeforeDate parameter specifies an exception for the Inbox rule that looks for messages received before the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

The corresponding condition parameter to this exception is ReceivedBeforeDate.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientAddressContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfRecipientAddressContainsWords parameter specifies an exception for the Inbox rule that looks for messages where the specified words are in recipient email addresses.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding condition parameter to this exception is RecipientAddressContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentOnlyToMe

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfSentOnlyToMe parameter specifies an exception for the Inbox rule that looks for messages where the only recipient is the mailbox owner. Valid values are:

- $true: The rule action isn't applied to messages where the mailbox owner is the only recipient.
- $false: The exception isn't used.

The corresponding condition parameter to this exception is SentOnlyToMe.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentTo

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfSentTo parameter specifies an exception that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

The corresponding condition parameter to this exception is SentTo.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfSubjectContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the Subject field of messages.

To specify multiple words or phrases that overwrite any existing entries, use the following syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding condition parameter to this exception is SubjectContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectOrBodyContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfSubjectOrBodyContainsWords parameter specifies an exception for the Inbox rule that looks for the specified words or phrases in the Subject field or body of messages.

To specify multiple words or phrases that overwrite any existing entries, use the following syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding condition parameter to this exception is SubjectOrBodyContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithImportance

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfWithImportance parameter specifies an exception for the Inbox rule that looks for messages with the specified importance level. Valid values are:

- High
- Normal
- Low

The corresponding condition parameter to this exception is WithImportance.

```yaml
Type: Importance
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithinSizeRangeMaximum

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfWithinSizeRangeMaximum parameter specifies part of an exception for the Inbox rule that looks for messages that smaller than specified maximum size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

You need to use this parameter with the ExceptIfWithinSizeRangeMinimum parameter, and the value of this parameter must be greater than the value of ExceptIfWithinSizeRangeMinimum.

The corresponding condition parameter to this exception is WithinSizeRangeMaximum.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithinSizeRangeMinimum

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithSensitivity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExceptIfWithSensitivity parameter specifies an exception for the Inbox rule that looks for messages with the specified sensitivity level. Valid values are:

- Normal
- Personal
- Private
- CompanyConfidential

The corresponding condition parameter to this exception is WithSensitivity.

```yaml
Type: Sensitivity
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FlaggedForAction

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

A confirmation prompt warns you if the mailbox contains rules that were created by Outlook, because any client-side rules will be removed by the actions of this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardAsAttachmentTo

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ForwardAsAttachmentTo parameter specifies an action for the Inbox rule that forwards the message to the specified recipient as an attachment. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardTo

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ForwardTo parameter specifies an action for the Inbox rule that forwards the message to the specified recipient. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The From parameter specifies a condition for the Inbox rule that looks for the specified sender in messages. You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

The corresponding exception parameter to this condition is ExceptIfFrom.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The FromAddressContainsWords parameter specifies a condition for the Inbox rule that looks for messages where the specified words are in the sender's email address.

To specify multiple words or phrases that overwrite any existing entries, use the following syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding exception parameter to this condition is ExceptIfFromAddressContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasAttachment

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The HasAttachment parameter specifies a condition for the Inbox rule that looks for messages with attachments. Valid values are:

- $true: The rule action is applied to messages that have attachments.
- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfHasAttachment.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasClassification

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The HasClassification parameter specifies a condition for the Inbox rule that looks for messages with the specified message classification. You can find message classifications by using the Get-MessageClassification cmdlet. You can specify multiple message classifications separated by commas.

The corresponding exception parameter to this condition is ExceptIfHasClassification.

```yaml
Type: MessageClassificationIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The HeaderContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the header fields of messages.

To specify multiple words or phrases that overwrite any existing entries, use the following syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding exception parameter to this condition is ExceptIfHeaderContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Mailbox parameter specifies the mailbox that contains the Inbox rule. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsRead

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MarkAsRead parameter specifies an action for the Inbox rule that marks messages as read. Valid values are:

- $true: Messages that match the conditions of the rule are marked as read.
- $false: The action isn't used.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkImportance

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MarkImportance parameter specifies an action for the Inbox rule that marks messages with the specified importance flag. Valid values are:

- Low
- Normal
- High

```yaml
Type: Importance
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTypeMatches

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Type: InboxRuleMessageType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveToFolder

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MoveToFolder parameter specifies an action for the Inbox rule that moves messages to the specified mailbox folder. The syntax is `MailboxID:\ParentFolder[\SubFolder]`.

For the value of `MailboxID`, you can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

Example values for this parameter are `john@contoso.com:\Marketing` or `John:\Inbox\Reports`.

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MyNameInCcBox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MyNameInCcBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner is in the Cc field. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner is in the Cc field.
- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameInCcBox.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MyNameInToBox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MyNameInToBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner is in the To field. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner is in the To field.
- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameInToBox.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MyNameInToOrCcBox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MyNameInToOrCcBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner is in the To or Cc fields Valid values are.

- $true: The rule action is applied to messages where the mailbox owner is in the To or Cc fields.
- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameInToOrCcBox.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MyNameNotInToBox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MyNameNotInToBox parameter specifies a condition for the Inbox rule that looks for messages where the mailbox owner isn't in the To field. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner isn't in the To field.
- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfMyNameNotInToBox.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies a name for the Inbox rule. The maximum length is 512 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PinMessage

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The PinMessage parameter specifies an action for the Inbox rule that pins messages to the top of the Inbox. Valid values are:

- $true: Message that match the conditions of the rule are pinned to the top of the Inbox.
- $false: The action isn't used.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Priority parameter specifies a priority for the Inbox rule that determines the order of rule processing. A lower integer value indicates a higher priority,

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceivedAfterDate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ReceivedAfterDate parameter specifies a condition for the Inbox rule that looks for messages received after the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

The corresponding exception parameter to this condition is ExceptIfReceivedAfterDate.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceivedBeforeDate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ReceivedBeforeDate parameter specifies a condition for the Inbox rule that looks for messages received before the specified date.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

The corresponding exception parameter to this condition is ExceptIfReceivedBeforeDate.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddressContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RecipientAddressContainsWords parameter specifies a condition for the Inbox rule that looks for messages where the specified words are in recipient email addresses.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding exception parameter to this condition is ExceptIfRecipientAddressContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RedirectTo

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RedirectTo parameter specifies an action for the Inbox rule that redirects the message to the specified recipient. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendTextMessageNotificationTo

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The SendTextMessageNotificationTo parameter specifies an action for the Inbox rule that send a text message notification to the specified telephone number.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentOnlyToMe

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SentOnlyToMe parameter specifies a condition for the Inbox rule that looks for messages where the only recipient is the mailbox owner. Valid values are:

- $true: The rule action is applied to messages where the mailbox owner is the only recipient.
- $false: The condition isn't used.

The corresponding exception parameter to this condition is ExceptIfSentOnlyToMe.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SentTo parameter specifies a condition for the Inbox rule that looks for messages with the specified recipients. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

The corresponding exception parameter to this condition is ExceptIfSentTo.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SoftDeleteMessage

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SoftDeleteMessage Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StopProcessingRules

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The StopProcessingRules parameter specifies an action for the Inbox rule that stops processing additional rules if the conditions of this Inbox rule are met. Valid values are:If set to $true, the StopProcessingRules parameter instructs Exchange to stop processing additional rules if the conditions of this Inbox rule are met.

- $true: Stop processing more rules.
- $false: The action isn't used (continue processing more rules after this one).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SubjectContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the Subject field of messages.

To specify multiple words or phrases that overwrite any existing entries, use the following syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding exception parameter to this condition is ExceptIfSubjectContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectOrBodyContainsWords

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SubjectOrBodyContainsWords parameter specifies a condition for the Inbox rule that looks for the specified words or phrases in the Subject field or body of messages.

To specify multiple words or phrases that overwrite any existing entries, use the following syntax: `Word1,"Phrase with spaces",word2,...wordN`. Don't use leading or trailing spaces.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The maximum length of this parameter is 255 characters.

The corresponding exception parameter to this condition is ExceptIfSubjectOrBodyContainsWords.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithImportance

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WithImportance parameter specifies a condition for the Inbox rule that looks for messages with the specified importance level. Valid values are:

- High
- Normal
- Low

The corresponding exception parameter to this condition is ExceptIfWithImportance.

```yaml
Type: Importance
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithinSizeRangeMaximum

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithinSizeRangeMinimum

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithSensitivity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WithSensitivity parameter specifies a condition for the Inbox rule that looks for messages with the specified sensitivity level. Valid values are:

- Normal
- Personal
- Private
- CompanyConfidential

The corresponding exception parameter to this condition is ExceptIfWithSensitivity.

```yaml
Type: Sensitivity
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
