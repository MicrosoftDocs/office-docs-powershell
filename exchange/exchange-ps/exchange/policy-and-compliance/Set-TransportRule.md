---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Set-TransportRule
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps || eop-ps"
---

# Set-TransportRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-TransportRule cmdlet to modify existing transport rules (mail flow rules) in your organization.

If you delete all conditions and exceptions from a rule, the rule action is applied to all messages. This can have unintended consequences. For example, if the rule action is to delete the message, removing the conditions and exceptions could cause the rule to delete all inbound and outbound messages for the entire organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-TransportRule [-Identity] <RuleIdParameter>
 [-ADComparisonAttribute <DisplayName | FirstName | Initials | LastName | Office | PhoneNumber | OtherPhoneNumber | Email | Street | POBox | City | State | ZipCode | Country | UserLogonName | HomePhoneNumber | OtherHomePhoneNumber | PagerNumber | MobileNumber | FaxNumber | OtherFaxNumber | Notes | Title | Department | Company | Manager | CustomAttribute1 | CustomAttribute2 | CustomAttribute3 | CustomAttribute4 | CustomAttribute5 | CustomAttribute6 | CustomAttribute7 | CustomAttribute8 | CustomAttribute9 | CustomAttribute10 | CustomAttribute11 | CustomAttribute12 | CustomAttribute13 | CustomAttribute14 | CustomAttribute15>]
 [-ADComparisonOperator <Equal | NotEqual>] [-AddManagerAsRecipientType <To | Cc | Bcc | Redirect>]
 [-AddToRecipients <RecipientIdParameter[]>] [-AnyOfCcHeader <RecipientIdParameter[]>]
 [-AnyOfCcHeaderMemberOf <RecipientIdParameter[]>] [-AnyOfRecipientAddressContainsWords <Word[]>]
 [-AnyOfRecipientAddressMatchesPatterns <Pattern[]>] [-AnyOfToCcHeader <RecipientIdParameter[]>]
 [-AnyOfToCcHeaderMemberOf <RecipientIdParameter[]>] [-AnyOfToHeader <RecipientIdParameter[]>]
 [-AnyOfToHeaderMemberOf <RecipientIdParameter[]>] [-ApplyClassification <String>]
 [-ApplyHtmlDisclaimerFallbackAction <Wrap | Ignore | Reject>]
 [-ApplyHtmlDisclaimerLocation <Append | Prepend>] [-ApplyHtmlDisclaimerText <DisclaimerText>]
 [-ApplyRightsProtectionTemplate <RmsTemplateIdParameter>] [-AttachmentContainsWords <Word[]>]
 [-AttachmentIsUnsupported <$true | $false>] [-AttachmentMatchesPatterns <Pattern[]>]
 [-AttachmentNameMatchesPatterns <Pattern[]>] [-AttachmentSizeOver <ByteQuantifiedSize>]
 [-BetweenMemberOf1 <RecipientIdParameter[]>] [-BetweenMemberOf2 <RecipientIdParameter[]>]
 [-BlindCopyTo <RecipientIdParameter[]>] [-Comments <String>] [-Confirm] [-CopyTo <RecipientIdParameter[]>]
 [-DeleteMessage <$true | $false>] [-Disconnect <$true | $false>] [-DomainController <Fqdn>]
 [-ExceptIfADComparisonAttribute <DisplayName | FirstName | Initials | LastName | Office | PhoneNumber | OtherPhoneNumber | Email | Street | POBox | City | State | ZipCode | Country | UserLogonName | HomePhoneNumber | OtherHomePhoneNumber | PagerNumber | MobileNumber | FaxNumber | OtherFaxNumber | Notes | Title | Department | Company | Manager | CustomAttribute1 | CustomAttribute2 | CustomAttribute3 | CustomAttribute4 | CustomAttribute5 | CustomAttribute6 | CustomAttribute7 | CustomAttribute8 | CustomAttribute9 | CustomAttribute10 | CustomAttribute11 | CustomAttribute12 | CustomAttribute13 | CustomAttribute14 | CustomAttribute15>]
 [-ExceptIfADComparisonOperator <Equal | NotEqual>] [-ExceptIfAnyOfCcHeader <RecipientIdParameter[]>]
 [-ExceptIfAnyOfCcHeaderMemberOf <RecipientIdParameter[]>]
 [-ExceptIfAnyOfRecipientAddressContainsWords <Word[]>]
 [-ExceptIfAnyOfRecipientAddressMatchesPatterns <Pattern[]>]
 [-ExceptIfAnyOfToCcHeader <RecipientIdParameter[]>]
 [-ExceptIfAnyOfToCcHeaderMemberOf <RecipientIdParameter[]>] [-ExceptIfAnyOfToHeader <RecipientIdParameter[]>]
 [-ExceptIfAnyOfToHeaderMemberOf <RecipientIdParameter[]>] [-ExceptIfAttachmentContainsWords <Word[]>]
 [-ExceptIfAttachmentIsUnsupported <$true | $false>] [-ExceptIfAttachmentMatchesPatterns <Pattern[]>]
 [-ExceptIfAttachmentNameMatchesPatterns <Pattern[]>] [-ExceptIfAttachmentSizeOver <ByteQuantifiedSize>]
 [-ExceptIfBetweenMemberOf1 <RecipientIdParameter[]>] [-ExceptIfBetweenMemberOf2 <RecipientIdParameter[]>]
 [-ExceptIfFrom <RecipientIdParameter[]>] [-ExceptIfFromAddressContainsWords <Word[]>]
 [-ExceptIfFromAddressMatchesPatterns <Pattern[]>] [-ExceptIfFromMemberOf <RecipientIdParameter[]>]
 [-ExceptIfFromScope <InOrganization | NotInOrganization>] [-ExceptIfHasClassification <String>]
 [-ExceptIfHasNoClassification <$true | $false>] [-ExceptIfHeaderContainsMessageHeader <HeaderName>]
 [-ExceptIfHeaderContainsWords <Word[]>] [-ExceptIfHeaderMatchesMessageHeader <HeaderName>]
 [-ExceptIfHeaderMatchesPatterns <Pattern[]>] [-ExceptIfManagerAddresses <RecipientIdParameter[]>]
 [-ExceptIfManagerForEvaluatedUser <Sender | Recipient>]
 [-ExceptIfMessageTypeMatches <OOF | AutoForward | Encrypted | Calendaring | PermissionControlled | Voicemail | Signed | ApprovalRequest | ReadReceipt>]
 [-ExceptIfRecipientADAttributeContainsWords <Word[]>]
 [-ExceptIfRecipientADAttributeMatchesPatterns <Pattern[]>] [-ExceptIfRecipientAddressContainsWords <Word[]>]
 [-ExceptIfRecipientAddressMatchesPatterns <Pattern[]>] [-ExceptIfRecipientInSenderList <Word[]>]
 [-ExceptIfSCLOver <SclValue>] [-ExceptIfSenderADAttributeContainsWords <Word[]>]
 [-ExceptIfSenderADAttributeMatchesPatterns <Pattern[]>] [-ExceptIfSenderInRecipientList <Word[]>]
 [-ExceptIfSenderManagementRelationship <Manager | DirectReport>] [-ExceptIfSentTo <RecipientIdParameter[]>]
 [-ExceptIfSentToMemberOf <RecipientIdParameter[]>]
 [-ExceptIfSentToScope <InOrganization | NotInOrganization | ExternalPartner | ExternalNonPartner>]
 [-ExceptIfSubjectContainsWords <Word[]>] [-ExceptIfSubjectMatchesPatterns <Pattern[]>]
 [-ExceptIfSubjectOrBodyContainsWords <Word[]>] [-ExceptIfSubjectOrBodyMatchesPatterns <Pattern[]>]
 [-ExceptIfWithImportance <Low | Normal | High>] [-From <RecipientIdParameter[]>]
 [-FromAddressContainsWords <Word[]>] [-FromAddressMatchesPatterns <Pattern[]>]
 [-FromMemberOf <RecipientIdParameter[]>] [-FromScope <InOrganization | NotInOrganization>]
 [-HasClassification <String>] [-HasNoClassification <$true | $false>]
 [-HeaderContainsMessageHeader <HeaderName>] [-HeaderContainsWords <Word[]>]
 [-HeaderMatchesMessageHeader <HeaderName>] [-HeaderMatchesPatterns <Pattern[]>] [-LogEventText <EventLogText>]
 [-ManagerAddresses <RecipientIdParameter[]>] [-ManagerForEvaluatedUser <Sender | Recipient>]
 [-MessageTypeMatches <OOF | AutoForward | Encrypted | Calendaring | PermissionControlled | Voicemail | Signed | ApprovalRequest | ReadReceipt>]
 [-ModerateMessageByManager <$true | $false>] [-ModerateMessageByUser <RecipientIdParameter[]>]
 [-Name <String>] [-PrependSubject <SubjectPrefix>] [-Priority <Int32>] [-Quarantine <$true | $false>]
 [-RecipientADAttributeContainsWords <Word[]>] [-RecipientADAttributeMatchesPatterns <Pattern[]>]
 [-RecipientAddressContainsWords <Word[]>] [-RecipientAddressMatchesPatterns <Pattern[]>]
 [-RecipientInSenderList <Word[]>] [-RedirectMessageTo <RecipientIdParameter[]>]
 [-RejectMessageEnhancedStatusCode <RejectEnhancedStatus>] [-RejectMessageReasonText <RejectText>]
 [-RemoveHeader <HeaderName>] [-SCLOver <SclValue>] [-SenderADAttributeContainsWords <Word[]>]
 [-SenderADAttributeMatchesPatterns <Pattern[]>] [-SenderInRecipientList <Word[]>]
 [-SenderManagementRelationship <Manager | DirectReport>] [-SentTo <RecipientIdParameter[]>]
 [-SentToMemberOf <RecipientIdParameter[]>]
 [-SentToScope <InOrganization | NotInOrganization | ExternalPartner | ExternalNonPartner>]
 [-SetHeaderName <HeaderName>] [-SetHeaderValue <HeaderValue>] [-SetSCL <SclValue>]
 [-SmtpRejectMessageRejectStatusCode <RejectStatusCode>] [-SmtpRejectMessageRejectText <RejectText>]
 [-SubjectContainsWords <Word[]>] [-SubjectMatchesPatterns <Pattern[]>] [-SubjectOrBodyContainsWords <Word[]>]
 [-SubjectOrBodyMatchesPatterns <Pattern[]>] [-WhatIf] [-WithImportance <Low | Normal | High>]
 [-ActivationDate <DateTime>] [-ApplyOME <$true | $false>] [-AttachmentExtensionMatchesWords <Word[]>]
 [-AttachmentHasExecutableContent <$true | $false>] [-AttachmentIsPasswordProtected <$true | $false>]
 [-AttachmentProcessingLimitExceeded <$true | $false>] [-AttachmentPropertyContainsWords <Word[]>]
 [-ContentCharacterSetContainsWords <Word[]>] [-DlpPolicy <String>]
 [-ExceptIfAttachmentExtensionMatchesWords <Word[]>] [-ExceptIfAttachmentHasExecutableContent <$true | $false>]
 [-ExceptIfAttachmentIsPasswordProtected <$true | $false>]
 [-ExceptIfAttachmentProcessingLimitExceeded <$true | $false>]
 [-ExceptIfAttachmentPropertyContainsWords <Word[]>] [-ExceptIfContentCharacterSetContainsWords <Word[]>]
 [-ExceptIfHasSenderOverride <$true | $false>] [-ExceptIfMessageContainsDataClassifications <Hashtable[]>]
 [-ExceptIfMessageSizeOver <ByteQuantifiedSize>] [-ExceptIfRecipientDomainIs <Word[]>]
 [-ExceptIfSenderDomainIs <Word[]>] [-ExceptIfSenderIpRanges <MultiValuedProperty>] [-ExpiryDate <DateTime>]
 [-GenerateIncidentReport <RecipientIdParameter>] [-GenerateNotification <DisclaimerText>]
 [-HasSenderOverride <$true | $false>] [-IncidentReportContent <IncidentReportContent[]>]
 [-IncidentReportOriginalMail <IncludeOriginalMail | DoNotIncludeOriginalMail>]
 [-MessageContainsDataClassifications <Hashtable[]>] [-MessageSizeOver <ByteQuantifiedSize>]
 [-Mode <Audit | AuditAndNotify | Enforce>]
 [-NotifySender <NotifyOnly | RejectMessage | RejectUnlessFalsePositiveOverride | RejectUnlessSilentOverride | RejectUnlessExplicitOverride>]
 [-RecipientDomainIs <Word[]>] [-RemoveOME <$true | $false>]
 [-RouteMessageOutboundConnector <OutboundConnectorIdParameter>]
 [-RouteMessageOutboundRequireTls <$true | $false>] [-RuleErrorAction <Ignore | Defer>]
 [-RuleSubType <None | Dlp>] [-SenderAddressLocation <Header | Envelope | HeaderOrEnvelope>]
 [-SenderDomainIs <Word[]>] [-SenderIpRanges <MultiValuedProperty>] [-SetAuditSeverity <String>]
 [-StopRuleProcessing <$true | $false>] [-ExceptIfMessageContainsAllDataClassifications <Hashtable[]>]
 [-MessageContainsAllDataClassifications <Hashtable[]>] [<CommonParameters>]
```

## DESCRIPTION
In on-premises Exchange organizations, rules created on Mailbox servers are stored in Active Directory. All Mailbox servers in the organization have access to the same set of rules. On Edge Transport servers, rules are saved in the local copy of Active Directory Lightweight Directory Services (AD LDS). Rules aren't shared or replicated between Edge Transport servers or between Mailbox servers and Edge Transport servers. Also, some conditions and actions are exclusive to each server role.

The search for words or text patterns in the subject or other header fields in the message occurs after the message has been decoded from the MIME content transfer encoding method that was used to transmit the binary message between SMTP servers in ASCII text. You can't use conditions or exceptions to search for the raw (typically, Base64) encoded values of the subject or other header fields in messages.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-TransportRule "Sales Team Disclaimer" -FromMemberOf "Sales Department"
```

This example modifies the existing rule named Sales Team Disclaimer transport rule by adding the condition that the sender of the message is a member of the Sales Department group.

This example sets the FromMemberOf parameter to a value of Sales-Group, which specifies that the rule is applied if the sender of the message is a member of the Sales-Group distribution group.

## PARAMETERS

### -Identity
The Identity parameter specifies the rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ADComparisonAttribute
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The ADComparisonAttribute parameter specifies a condition that compares an Active Directory attribute between the sender and all recipients of the message. This parameter works when the recipients are individual users. This parameter doesn't work with distribution groups.

You can check against any of the following Active Directory attributes:

- City

- Company

- Country

- CustomAttribute1 - CustomAttribute15

- Department

- DisplayName

- Email

- FaxNumber

- FirstName

- HomePhoneNumber

- Initials

- LastName

- Manager

- MobileNumber

- Notes

- Office

- OtherFaxNumber

- OtherHomePhoneNumber

- OtherPhoneNumber

- PagerNumber

- PhoneNumber

- POBox

- State

- Street

- Title

- UserLogonName

- ZipCode

If you don't use the ADComparisonOperator parameter, the default comparison operator Equal is used.

```yaml
Type: DisplayName | FirstName | Initials | LastName | Office | PhoneNumber | OtherPhoneNumber | Email | Street | POBox | City | State | ZipCode | Country | UserLogonName | HomePhoneNumber | OtherHomePhoneNumber | PagerNumber | MobileNumber | FaxNumber | OtherFaxNumber | Notes | Title | Department | Company | Manager | CustomAttribute1 | CustomAttribute2 | CustomAttribute3 | CustomAttribute4 | CustomAttribute5 | CustomAttribute6 | CustomAttribute7 | CustomAttribute8 | CustomAttribute9 | CustomAttribute10 | CustomAttribute11 | CustomAttribute12 | CustomAttribute13 | CustomAttribute14 | CustomAttribute15
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ADComparisonOperator
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The ADComparisonOperator parameter specifies the comparison operator for the ADComparisonAttribute parameter. Valid values are:

- Equal (This is the default value)

- NotEqual

```yaml
Type: Equal | NotEqual
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddManagerAsRecipientType
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The AddManagerAsRecipientType parameter specifies an action that delivers or redirects messages to the user that's defined in the sender's Manager attribute. Valid values are:

- To: Add the sender's manager to the To field of the message.

- Cc: Add the sender's manager to the Cco field of the message.

- Bcc: Add the sender's manager to the Bcc field of the message.

- Redirect: Redirect the message to the sender's manager without notifying the sender or the recipients.

This action only works if the sender's Manager attribute is defined.

```yaml
Type: To | Cc | Bcc | Redirect
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddToRecipients
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The AddToRecipients parameter specifies an action that adds recipients to the To field of messages. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfCcHeader
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AnyOfCcHeader parameter specifies a condition that looks for recipients in the Cc field of messages. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this condition applies the rule action to all recipients of the message. For example, if the action is to reject the message, the message is rejected for all recipients of the message, not just for the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfCcHeaderMemberOf
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AnyOfCcHeaderMemberOf parameter specifies a condition that looks for group members in the Cc field of messages. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this condition applies the rule action to all recipients of the message. For example, if the action is to reject the message, the message is rejected for all recipients of the message, not just for the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressContainsWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The AnyOfRecipientAddressContainsWords parameter specifies a condition that looks for words in recipient email addresses. You can specify multiple words separated by commas.

A match for this condition applies the rule action to all recipients of the message. For example, if the action is to reject the message, the message is rejected for all recipients of the message, not just for the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressMatchesPatterns
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The AnyOfRecipientAddressMatchesPatterns parameter specifies a condition that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

A match for this condition applies the rule action to all recipients of the message. For example, if the action is to reject the message, the message is rejected for all recipients of the message, not just for the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfToCcHeader
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AnyOfToCcHeader parameter specifies a condition that looks for recipients in the To or Cc fields of messages. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this condition applies the rule action to all recipients of the message. For example, if the action is to reject the message, the message is rejected for all recipients of the message, not just for the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfToCcHeaderMemberOf
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AnyOfToCcHeaderMemberOf parameter specifies a condition that looks for group members in the To and Cc fields of messages. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this condition applies the rule action to all recipients of the message. For example, if the action is to reject the message, the message is rejected for all recipients of the message, not just for the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfToHeader
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AnyOfToHeader parameter specifies a condition that looks for recipients in the To field of messages. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this condition applies the rule action to all recipients of the message. For example, if the action is to reject the message, the message is rejected for all recipients of the message, not just for the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfToHeaderMemberOf
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AnyOfToHeaderMemberOf parameter specifies a condition that looks for group members in the To field of messages. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this condition applies the rule action to all recipients of the message. For example, if the action is to reject the message, the message is rejected for all recipients of the message, not just for the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyClassification
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The ApplyClassification parameter specifies an action that applies a message classification to messages. Use the Get-MessageClassification cmdlet to see the message classification objects that are available.

The message classification referred to in this parameter is the custom message classification that you can create in your organization by using the New-MessageClassification cmdlet. It isn't related to the data loss prevention (DLP) data classification.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyHtmlDisclaimerFallbackAction
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The ApplyHtmlDisclaimerFallbackAction parameter specifies what to do if the HTML disclaimer can't be added to a message. Valid values are:

- Wrap: The original message is wrapped in a new message envelope, and the disclaimer is used as the message body for the new message. This is the default value. Subsequent mail flow rules are applied to the new message envelope, not to the original message. Therefore, configure a rule with this action at a lower priority (a higher priority number) than other rules. If the original message can't be wrapped in a new message envelope, the original message isn't delivered. The message is returned to the sender in an non-delivery report (also known as an NDR or bounce message).

- Ignore: The rule is ignored and the message is delivered without the disclaimer.

- Reject: The message is rejected.

If you don't use this parameter with the ApplyHtmlDisclaimerText parameter, the default value Wrap is used.

```yaml
Type: Wrap | Ignore | Reject
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyHtmlDisclaimerLocation
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The ApplyHtmlDisclaimerLocation parameter specifies where to insert the HTML disclaimer text in the body of messages. Valid values are:

- Append: The disclaimer is added to the end of the message body. This is the default value.

- Prepend: The disclaimer is inserted to the beginning of the message body.

If you don't use this parameter with the ApplyHtmlDisclaimerText parameter, the default value Append is used.

```yaml
Type: Append | Prepend
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyHtmlDisclaimerText
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The ApplyHtmlDisclaimerText parameter specifies an action that adds the disclaimer text to messages. Disclaimer text can include HTML tags and inline cascading style sheet (CSS) tags. You can add images using the IMG tag.

You use the ApplyHtmlDisclaimerLocation parameter to specify where to insert the text in the message body (the default value is Append) and the ApplyHtmlDisclaimerFallbackAction parameter to specify what to do if the disclaimer can't be added to the message (the default value is Wrap).

```yaml
Type: DisclaimerText
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyRightsProtectionTemplate
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The ApplyRightsProtectionTemplate parameter specifies an action that applies rights management service (RMS) templates to messages. You identify the RMS template by name. If the name contains spaces, enclose the name in quotation marks (").

To use this action, you need to have an Active Directory Rights Management Services (AD RMS) server in your organization, or your organization needs to use the ILS service.

Use the Get-RMSTemplate cmdlet to see the RMS templates that are available.

For more information, see Transport protection rules (https://technet.microsoft.com/library/dd298166.aspx).

```yaml
Type: RmsTemplateIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentContainsWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentContainsWords parameter specifies a condition that looks for words in message attachments. Only supported attachment types are checked.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,...wordN. Don't use leading or trailing spaces.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentIsUnsupported
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentIsUnsupported parameter specifies a condition that looks for unsupported file types in messages. Unsupported file types are message attachments that aren't natively recognized by Exchange and the required IFilter isn't installed. Valid values are:

- $true: Look for unsupported file types in messages.

- $false: Don't look for unsupported file types in messages.

For more information, see Register Filter Pack IFilters with Exchange (https://technet.microsoft.com/library/jj837174.aspx).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentMatchesPatterns
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentMatchesPatterns parameter specifies a condition that looks for text patterns in the content of message attachments by using regular expressions. Only supported attachment types are checked.

You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

Only the first 150 kilobytes (KB) of the attachment is scanned when trying to match a text pattern.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentNameMatchesPatterns
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentNameMatchesPatterns parameter specifies a condition that looks for text patterns in the file name of message attachments by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentSizeOver
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The AttachmentSizeOver parameter specifies a condition that looks for messages where any attachment is greater than the specified size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BetweenMemberOf1
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The BetweenMemberOf1 parameter specifies a condition that looks for messages that are sent between group members. You need to use this parameter with the BetweenMemberOf2 parameter. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BetweenMemberOf2
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The BetweenMemberOf2 parameter specifies a condition that looks for messages that are sent between group members. You need to use this parameter with the BetweenMemberOf1 parameter. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlindCopyTo
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The BlindCopyTo parameter specifies an action that adds recipients to the Bcc field of messages. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comments
The Comments parameter specifies optional descriptive text for the rule (for example, what the rule is used for, or how it has changed over time). The length of the comment can't exceed 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CopyTo
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The CopyTo parameter specifies an action that adds recipients to the Cc field of messages. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteMessage
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The DeleteMessage parameter specifies an action that silently drops messages without an NDR. Valid values are:

- $true: Silently drop the message without an NDR.

- $false: Don't silently drop the message.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disconnect
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Edge Transport servers.

The Disconnect parameter specifies an action that ends the SMTP connection between the sending server and the Edge Transport server without generating an NDR.

- $true: Silently end the SMTP session without generating an NDR.

- $false: Don't silently end the SMTP session.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -ExceptIfADComparisonAttribute
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfADComparisonAttribute parameter specifies an exception that compares an Active Directory attribute between the sender and all recipients of the message. This parameter works when the recipients are individual users. This parameter doesn't work with distribution groups.

You can check against any of the following Active Directory attributes:

- City

- Company

- Country

- CustomAttribute1 - CustomAttribute15

- Department

- DisplayName

- Email

- FaxNumber

- FirstName

- HomePhoneNumber

- Initials

- LastName

- Manager

- MobileNumber

- Notes

- Office

- OtherFaxNumber

- OtherHomePhoneNumber

- OtherPhoneNumber

- PagerNumber

- PhoneNumber

- POBox

- State

- Street

- Title

- UserLogonName

- ZipCode

If you don't use the ExceptIfADComparisonOperator parameter, the default comparison operator Equal is used.

```yaml
Type: DisplayName | FirstName | Initials | LastName | Office | PhoneNumber | OtherPhoneNumber | Email | Street | POBox | City | State | ZipCode | Country | UserLogonName | HomePhoneNumber | OtherHomePhoneNumber | PagerNumber | MobileNumber | FaxNumber | OtherFaxNumber | Notes | Title | Department | Company | Manager | CustomAttribute1 | CustomAttribute2 | CustomAttribute3 | CustomAttribute4 | CustomAttribute5 | CustomAttribute6 | CustomAttribute7 | CustomAttribute8 | CustomAttribute9 | CustomAttribute10 | CustomAttribute11 | CustomAttribute12 | CustomAttribute13 | CustomAttribute14 | CustomAttribute15
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfADComparisonOperator
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfADComparisonOperator parameter specifies the comparison operator for the ExceptIfADComparisonAttribute parameter. Valid values are:

- Equal (This is the default value)

- NotEqual

```yaml
Type: Equal | NotEqual
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfCcHeader
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAnyOfCcHeader parameter specifies an exception that looks for recipients in the Cc field of messages. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this exception prevents the rule action from being applied to all recipients of the message. For example, if the action is to reject the message, the message is delivered to all recipients of the message, not just to the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfCcHeaderMemberOf
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAnyOfCcHeaderMemberOf parameter specifies an exception that looks for group members in the Cc field of messages. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this exception prevents the rule action from being applied to all recipients of the message. For example, if the action is to reject the message, the message is delivered to all recipients of the message, not just to the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressContainsWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfAnyOfRecipientAddressContainsWords parameter specifies an exception that looks for words in recipient email addresses. You can specify multiple words separated by commas.

A match for this exception prevents the rule action from being applied to all recipients of the message. For example, if the action is to reject the message, the message is delivered to all recipients of the message, not just to the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressMatchesPatterns
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfAnyOfRecipientAddressMatchesPatterns parameter specifies an exception that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

A match for this exception prevents the rule action from being applied to all recipients of the message. For example, if the action is to reject the message, the message is delivered to all recipients of the message, not just to the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfToCcHeader
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAnyOfToCcHeader parameter specifies an exception that looks for recipients in the To or Cc fields of messages. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this exception prevents the rule action from being applied to all recipients of the message. For example, if the action is to reject the message, the message is delivered to all recipients of the message, not just to the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfToCcHeaderMemberOf
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAnyOfToCcHeaderMemberOf parameter specifies an exception that looks for group members in the To and Cc fields of messages. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this exception prevents the rule action from being applied to all recipients of the message. For example, if the action is to reject the message, the message is delivered to all recipients of the message, not just to the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfToHeader
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAnyOfToHeader parameter specifies an exception that looks for recipients in the To field of messages. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this exception prevents the rule action from being applied to all recipients of the message. For example, if the action is to reject the message, the message is delivered to all recipients of the message, not just to the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfToHeaderMemberOf
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAnyOfToHeaderMemberOf parameter specifies an exception that looks for group members in the To field of messages. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

A match for this exception prevents the rule action from being applied to all recipients of the message. For example, if the action is to reject the message, the message is delivered to all recipients of the message, not just to the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentContainsWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentContainsWords parameter specifies an exception that looks for words in message attachments. Only supported attachment types are checked.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,...wordN. Don't use leading or trailing spaces.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentIsUnsupported
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentIsUnsupported parameter specifies an exception that looks for unsupported file types in messages. Unsupported file types are message attachments that aren't natively recognized by Exchange, and the required IFilter isn't installed. Valid values are:

- $true: Look for unsupported file types in messages.

- $false: Don't look for unsupported file types in messages.

For more information, see Register Filter Pack IFilters with Exchange (https://technet.microsoft.com/library/jj837174.aspx).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentMatchesPatterns
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentMatchesPatterns parameter specifies an exception that looks for text patterns in the content of message attachments by using regular expressions. Only supported attachment types are checked.

You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

Only the first 150 KB of the attachment is scanned when trying to match a text pattern.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentNameMatchesPatterns
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentNameMatchesPatterns parameter specifies an exception that looks for text patterns in the file name of message attachments by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentSizeOver
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfAttachmentSizeOver parameter specifies an exception that looks for messages where any attachment is greater than the specified size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfBetweenMemberOf1
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfBetweenMemberOf1 parameter specifies an exception that looks for messages that are sent between group members. You need to use this parameter with the ExceptIfBetweenMemberOf2 parameter. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfBetweenMemberOf2
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfBetweenMemberOf2 parameter specifies an exception that looks for messages that are sent between group members. You need to use this parameter with the ExceptIfBetweenMemberOf1 parameter. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFrom
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfFrom parameter specifies an exception that looks for messages from specific senders. You can use any value that uniquely identifies the sender.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressContainsWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfFromAddressContainsWords parameter specifies an exception that looks for words in the sender's email address. You can specify multiple words separated by commas.

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressMatchesPatterns
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfFromAddressMatchesPatterns parameter specifies an exception that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromMemberOf
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfFromMemberOf parameter specifies an exception that looks for messages sent by group members. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromScope
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfFromScope parameter specifies an exception that looks for the location of message senders. Valid values are:

- InOrganization: The sender is a mailbox, mail user, group, or mail-enabled public folder in your organization or The sender's email address is in an accepted domain that's configured as an authoritative domain or an internal relay domain, and the message was sent or received over an authenticated connection.

- NotInOrganization: The sender's email address isn't in an accepted domain or the sender's email address is in an accepted domain that's configured as an external relay domain.

```yaml
Type: InOrganization | NotInOrganization
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasClassification
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfHasClassification parameter specifies an exception that looks for messages with the specified message classification.

You use the Get-MessageClassification cmdlet to identify the message classification. For example, to find messages with the Company Internal classification, use the following syntax:

-ExceptIfHasClassification @(Get-MessageClassification "Company Internal").Identity

The message classification referred to in this parameter is the custom message classification that you can create in your organization by using the New-MessageClassification cmdlet. It isn't related to the DLP data classification.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasNoClassification
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfHasNoClassification parameter specifies an exception that looks for messages with or without any message classifications. Valid values are:

- $true: Look for messages that don't have a message classification.

- $false: Look for messages that have one or more message classifications.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderContainsMessageHeader
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfHeaderContainsMessageHeader parameter specifies the name of header field in the message header when searching for the words specified by the ExceptIfHeaderContainsWords parameter.

```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderContainsWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfHeaderContainsWords parameter specifies an exception that looks for words in a header field.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,...wordN. Don't use leading or trailing spaces.

You specify the header field to search by using the ExceptIfHeaderContainsMessageHeader parameter.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderMatchesMessageHeader
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfHeaderMatchesMessageHeader parameter specifies the name of header field in the message header when searching for the text patterns specified by the ExceptIfHeaderMatchesPatterns parameter.

```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderMatchesPatterns
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfHeaderMatchesPatterns parameter specifies an exception that looks for text patterns in a header field by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

You specify the header field to search by using the ExceptIfHeaderMatchesMessageHeader parameter.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfManagerAddresses
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfManagerAddresses parameter specifies the users (managers) for the ExceptIfManagerForEvaluatedUser parameter. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You specify if you want to look for these users as managers of senders or recipients by using the ExceptIfManagerForEvaluatedUser parameter.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfManagerForEvaluatedUser
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfManagerForEvaluatedUser parameter specifies an exception that looks for users in the Manager attribute of senders or recipients. Valid values are:

- Recipient: The user is the manager of a recipient.

- Sender: The user is the manager of the sender.

You specify the users to look for by using the ExceptIfManagerAddresses parameter.

```yaml
Type: Sender | Recipient
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMessageTypeMatches
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfMessageTypeMatches parameter specifies an exception that looks for messages of the specified type. Valid values are:

- OOF: Auto-reply messages configured by the user.

- AutoForward: Messages automatically forwarded to an alternative recipient (by Exchange, not by auto-forwarding rules that users configure in Outlook or Outlook).

- Encrypted: Encrypted messages.

- Calendaring: Meeting requests and responses.

- PermissionControlled: Messages that have specific permissions configured.

- Voicemail: Voice mail messages forwarded by Unified Messaging service.

- Signed: Digitally signed messages.

- ApprovalRequest: Moderations request messages sent to moderators.

- ReadReceipt: Read receipts.

```yaml
Type: OOF | AutoForward | Encrypted | Calendaring | PermissionControlled | Voicemail | Signed | ApprovalRequest | ReadReceipt
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientADAttributeContainsWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfRecipientADAttributeContainsWords parameter specifies an exception that looks for words in the Active Directory attributes of recipients. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

You can check against any of the following Active Directory attributes:

- City

- Company

- Country

- CustomAttribute1 - CustomAttribute15

- Department

- DisplayName

- Email

- FaxNumber

- FirstName

- HomePhoneNumber

- Initials

- LastName

- Manager

- MobileNumber

- Notes

- Office

- OtherFaxNumber

- OtherHomePhoneNumber

- OtherPhoneNumber

- PagerNumber

- PhoneNumber

- POBox

- State

- Street

- Title

- UserLogonName

- ZipCode

This parameter uses the syntax: "AttributeName:Word". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Word1,Phrase with spaces,word2...","AttributeName2:Word3,Phrase with spaces,word4...". Don't use words with leading or trailing spaces.

For example, "City:San Francisco,Palo Alto" or "City:San Francisco,Palo Alto","Department:Sales,Finance".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientADAttributeMatchesPatterns
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfRecipientADAttributeMatchesPatterns parameter specifies an exception that looks for text patterns in the Active Directory attributes of recipients by using regular expressions. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

You can check against any of the following Active Directory attributes:

- City

- Company

- Country

- CustomAttribute1 - CustomAttribute15

- Department

- DisplayName

- Email

- FaxNumber

- FirstName

- HomePhoneNumber

- Initials

- LastName

- Manager

- MobileNumber

- Notes

- Office

- OtherFaxNumber

- OtherHomePhoneNumber

- OtherPhoneNumber

- PagerNumber

- PhoneNumber

- POBox

- State

- Street

- Title

- UserLogonName

- ZipCode

This parameter uses the syntax: "AttributeName:Regular Expression". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Regular Expression1,Regular Expression2...","AttributeName2:Regular Expression3,Regular Expression4...".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientAddressContainsWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfRecipientAddressContainsWords parameter specifies an exception that looks for words in recipient email addresses. You can specify multiple words separated by commas. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientAddressMatchesPatterns
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfRecipientAddressMatchesPatterns parameter specifies an exception that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientInSenderList
This parameter is reserved for internal Microsoft use.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSCLOver
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfSCLOver parameter specifies an exception that looks for the SCL value of messages. Valid values are:

- -1: The message is from a trusted sender, so the message bypasses spam filtering.

- Integers 0 through 9: A higher value indicates that a message is more likely to be spam.

The rule looks for messages with an SCL value that's greater than or equal to the specified value.

```yaml
Type: SclValue
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderADAttributeContainsWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfSenderADAttributeContainsWords parameter specifies an exception that looks for words in Active Directory attributes of message senders.

You can check against any of the following Active Directory attributes:

- City

- Company

- Country

- CustomAttribute1 - CustomAttribute15

- Department

- DisplayName

- Email

- FaxNumber

- FirstName

- HomePhoneNumber

- Initials

- LastName

- Manager

- MobileNumber

- Notes

- Office

- OtherFaxNumber

- OtherHomePhoneNumber

- OtherPhoneNumber

- PagerNumber

- PhoneNumber

- POBox

- State

- Street

- Title

- UserLogonName

- ZipCode

This parameter uses the syntax: "AttributeName:Word". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Word1,Phrase with spaces,word2...","AttributeName2:Word3,Phrase with spaces,word4...". Don't use words with leading or trailing spaces.

For example, "City:San Francisco,Palo Alto" or "City:San Francisco,Palo Alto","Department:Sales,Finance".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderADAttributeMatchesPatterns
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfSenderADAttributeMatchesPatterns parameter specifies an exception that looks for text patterns in Active Directory attributes of message senders by using regular expressions.

You can check against any of the following Active Directory attributes:

- City

- Company

- Country

- CustomAttribute1 - CustomAttribute15

- Department

- DisplayName

- Email

- FaxNumber

- FirstName

- HomePhoneNumber

- Initials

- LastName

- Manager

- MobileNumber

- Notes

- Office

- OtherFaxNumber

- OtherHomePhoneNumber

- OtherPhoneNumber

- PagerNumber

- PhoneNumber

- POBox

- State

- Street

- Title

- UserLogonName

- ZipCode

This parameter uses the syntax: "AttributeName:Regular Expression". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Regular Expression1,Regular Expression2...","AttributeName2:Regular Expression3,Regular Expression4...".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderInRecipientList
This parameter is reserved for internal Microsoft use.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderManagementRelationship
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfSenderManagementRelationship parameter specifies an exception that looks for the relationship between the sender and recipients in messages. Valid values are:

- Manager: The sender is the manager of a recipient.

- DirectReport: A recipient is the manager of the sender.

```yaml
Type: Manager | DirectReport
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentTo
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfSentTo parameter specifies an exception that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

- Name

- Distinguished name (DN)

- Display name

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentToMemberOf
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

The ExceptIfSentToMemberOf parameter specifies an exception that looks for messages sent to members of groups. You can use any value that uniquely identifies the group. For example:

- Name

- Distinguished name (DN)

- Display name

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

If you remove the group after you create the rule, no exception is made for messages that are sent to members of the group.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentToScope
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfSentToScope parameter specifies an exception that looks for the location of a recipient. Valid values are:

- InOrganization: The recipient is a mailbox, mail user, group, or mail-enabled public folder in your organization or the recipient's email address is in an accepted domain that's configured as an authoritative domain or an internal relay domain, and the message was sent or received over an authenticated connection.

- NotInOrganization: The recipients are outside your organization. The recipient's email address isn't in an accepted domain or the recipient's email address is in an accepted domain that's configured as an external relay domain.

- ExternalPartner: The recipients are in a partner organization where you've configured Domain Security (mutual TLS authentication) to send mail. This value is only available in on-premises Exchange.

- ExternalNonPartner: The recipients are external to your organization, and the organization isn't a partner organization. This value is only available in on-premises Exchange.

```yaml
Type: InOrganization | NotInOrganization | ExternalPartner | ExternalNonPartner
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectContainsWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfSubjectContainsWords parameter specifies an exception that looks for words in the Subject field of messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,...wordN. Don't use leading or trailing spaces.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectMatchesPatterns
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfSubjectMatchesPatterns parameter specifies an exception that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectOrBodyContainsWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfSubjectOrBodyContainsWords parameter specifies an exception that looks for words in the Subject field or body of messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,...wordN. Don't use leading or trailing spaces.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectOrBodyMatchesPatterns
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfSubjectOrBodyMatchesPatterns parameter specifies an exception that looks for text patterns in the Subject field or body of messages. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithImportance
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfWithImportance parameter specifies an exception that looks for messages with the specified importance level. Valid values are:

- Low

- Normal

- High

```yaml
Type: Low | Normal | High
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The From parameter specifies a condition that looks for messages from specific senders. You can use any value that uniquely identifies the sender.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressContainsWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The FromAddressContainsWords parameter specifies a condition that looks for words in the sender's email address. You can specify multiple words separated by commas.

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressMatchesPatterns
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The FromAddressMatchesPatterns parameter specifies a condition that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromMemberOf
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The FromMemberOf parameter specifies a condition that looks for messages sent by group members. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromScope
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The FromScope parameter specifies a condition that looks for the location of message senders. Valid values are:

- InOrganization: The sender is a mailbox, mail user, group, or mail-enabled public folder in your organization or The sender's email address is in an accepted domain that's configured as an authoritative domain or an internal relay domain, and the message was sent or received over an authenticated connection.

- NotInOrganization: The sender's email address isn't in an accepted domain or the sender's email address is in an accepted domain that's configured as an external relay domain.

```yaml
Type: InOrganization | NotInOrganization
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasClassification
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The HasClassification parameter specifies a condition that looks for messages with the specified message classification.

You use the Get-MessageClassification cmdlet to identify the message classification. For example, to find messages with the Company Internal classification, use the following syntax:

-HasClassification @(Get-MessageClassification "Company Internal").Identity

The message classification referred to in this parameter is the custom message classification that you can create in your organization by using the New-MessageClassification cmdlet. It isn't related to the DLP classification.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasNoClassification
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The HasNoClassification parameter specifies a condition that looks for messages with or without any message classifications. Valid values are:

- $true: Look for messages that don't have a message classification.

- $false: Look for messages that have one or more message classifications.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderContainsMessageHeader
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The HeaderContainsMessageHeader parameter specifies the name of header field in the message header when searching for the words specified by the HeaderContainsWords parameter.

```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderContainsWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The HeaderContainsWords parameter specifies a condition that looks for words in a header field.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,...wordN. Don't use leading or trailing spaces.

You specify the header field to search by using the HeaderContainsMessageHeader parameter.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderMatchesMessageHeader
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The HeaderMatchesMessageHeader parameter specifies the name of header field in the message header when searching for the text patterns specified by the HeaderMatchesPatterns parameter.

```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderMatchesPatterns
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The HeaderMatchesPatterns parameter specifies a condition that looks for text patterns in a header field by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

You specify the header field to search by using the HeaderMatchesMessageHeader parameter.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogEventText
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Edge Transport servers.

The LogEventText parameter specifies an action that creates an entry in the Application log on the local Edge Transport server. The value for this parameter specifies the text that you want to include in the event log entry. If the text contains spaces, enclose the value in quotation marks (").

The entry contains the following information:

- Level: Information

- Source: MSExchange Messaging Policies

- Event ID: 4000

- Task Category: Rules

- EventData: The following message is logged by an action in the rules: \<text you specify\>

```yaml
Type: EventLogText
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagerAddresses
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The ManagerAddresses parameter specifies the users (managers) for the ExceptIfManagerForEvaluatedUser parameter. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You specify if you want to look for these users as managers of senders or recipients by using the ManagerForEvaluatedUser parameter.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagerForEvaluatedUser
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The ManagerForEvaluatedUser parameter specifies a condition that looks for users in the Manager attribute of senders or recipients. Valid values are:

- Recipient: The user is the manager of a recipient.

- Sender: The user is the manager of the sender.

You specify the users to look for by using the ManagerAddresses parameter.

```yaml
Type: Sender | Recipient
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTypeMatches
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The MessageTypeMatches parameter specifies a condition that looks for messages of the specified type. Valid values are:

- OOF: Auto-reply messages configured by the user.

- AutoForward: Messages automatically forwarded to an alternative recipient (by Exchange, not by auto-forwarding rules that users configure in Outlook or Outlook).

- Encrypted: Encrypted messages.

- Calendaring: Meeting requests and responses.

- PermissionControlled: Messages that have specific permissions configured.

- Voicemail: Voice mail messages forwarded by Unified Messaging service.

- Signed: Digitally signed messages.

- ApprovalRequest: Moderations request messages sent to moderators.

- ReadReceipt: Read receipts.

```yaml
Type: OOF | AutoForward | Encrypted | Calendaring | PermissionControlled | Voicemail | Signed | ApprovalRequest | ReadReceipt
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerateMessageByManager
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The ModerateMessageByManager parameter specifies an action that forwards messages for approval to the user that's specified in the sender's Manager attribute. After the manager approves the message, it's delivered to the recipients. Valid values are:

- $true: Moderation by the sender's manager is enabled.

- $false: Moderation by the sender's manager is disabled.

This action only works if the sender's Manager attribute is defined.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerateMessageByUser
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The ModerateMessageByUser parameter specifies an action that forwards messages for approval to the specified users. After one of the users approves the message, it's delivered to the recipients. You can use ay value that uniquely identifies the user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You can't use a distribution group as a moderator.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the display name of the transport rule to be created. The length of the name canThe Name parameter specifies the unique name of the rule. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrependSubject
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The PrependSubject parameter specifies an action that adds text to add to the beginning of the Subject field of messages. The value for this parameter is the text that you want to add. If the text contains spaces, enclose the value in quotation marks (")\>

Consider ending the value for this parameter with a colon (:) and a space, or at least a space, to separate it from the original subject.

```yaml
Type: SubjectPrefix
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specifies a priority value for the rule that determines the order of rule processing. A lower integer value indicates a higher priority, the value 0 is the highest priority, and rules can't have the same priority value.

Valid values and the default value for this parameter depend on the number of existing rules. For example, if there are 8 existing rules:

- Valid priority values for the existing 8 rules are from 0 through 7.

- Valid priority values for a new rule (the 9th rule) are from 0 through 8.

- The default value for a new rule (the 9th rule) is 8.

If you modify the priority value of a rule, the position of the rule in the list changes to match the priority value you specify. In other words, if you set the priority value of a rule to the same value as an existing rule, the priority value of the existing rule and all other lower priority rules after it is increased by 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Quarantine
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Edge Transport servers.

The Quarantine parameter specifies an action that quarantines messages.

- In on-premises Exchange, messages are delivered to the quarantine mailbox that you've configured as part of Content filtering. If the quarantine mailbox isn't configured, the message is returned to the sender in an NDR.

- In Office 365, messages are delivered to the hosted quarantine.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientADAttributeContainsWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The RecipientADAttributeContainsWords parameter specifies a condition that looks for words in the Active Directory attributes of recipients. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

You can check against any of the following Active Directory attributes:

- City

- Company

- Country

- CustomAttribute1 - CustomAttribute15

- Department

- DisplayName

- Email

- FaxNumber

- FirstName

- HomePhoneNumber

- Initials

- LastName

- Manager

- MobileNumber

- Notes

- Office

- OtherFaxNumber

- OtherHomePhoneNumber

- OtherPhoneNumber

- PagerNumber

- PhoneNumber

- POBox

- State

- Street

- Title

- UserLogonName

- ZipCode

This parameter uses the syntax: "AttributeName:Word". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Word1,Phrase with spaces,word2...","AttributeName2:Word3,Phrase with spaces,word4...". Don't use words with leading or trailing spaces.

For example, "City:San Francisco,Palo Alto" or "City:San Francisco,Palo Alto","Department:Sales,Finance".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientADAttributeMatchesPatterns
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The RecipientADAttributeMatchesPatterns parameter specifies a condition that looks for text patterns in the Active Directory attributes of recipients by using regular expressions. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

You can check against any of the following Active Directory attributes:

- City

- Company

- Country

- CustomAttribute1 - CustomAttribute15

- Department

- DisplayName

- Email

- FaxNumber

- FirstName

- HomePhoneNumber

- Initials

- LastName

- Manager

- MobileNumber

- Notes

- Office

- OtherFaxNumber

- OtherHomePhoneNumber

- OtherPhoneNumber

- PagerNumber

- PhoneNumber

- POBox

- State

- Street

- Title

- UserLogonName

- ZipCode

This parameter uses the syntax: "AttributeName:Regular Expression". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Regular Expression1,Regular Expression2...","AttributeName2:Regular Expression3,Regular Expression4...".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddressContainsWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The RecipientAddressContainsWords parameter specifies a condition that looks for words in recipient email addresses. You can specify multiple words separated by commas. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddressMatchesPatterns
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The RecipientAddressMatchesPatterns parameter specifies a condition that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientInSenderList
This parameter is reserved for internal Microsoft use.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RedirectMessageTo
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The RedirectMessageTo parameter specifies a rule action that redirects messages to the specified recipients. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessageEnhancedStatusCode
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The RejectMessageEnhancedStatusCode parameter specifies the enhanced status code that's used when the rule rejects messages. Valid values are 5.7.1 or between 5.7.900 and 5.7.999.

You can use this parameter with the NotifySender and RejectMessageReasonText parameters to specify the custom enhanced status code that's used. If you don't use this parameter, the default value 5.7.1 is used.

To further customize the NDR (for example, multiple languages), you need to create a custom message by using the New-SystemMessage cmdlet.

```yaml
Type: RejectEnhancedStatus
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessageReasonText
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The RejectMessageReasonText parameter specifies the explanation text that's used when the rule rejects messages. If the value contains spaces, enclose the value in quotation marks (").

You can use this parameter with the NotifySender and RejectMessageEnhancedStatusCode parameters to specify the custom explanation text that's used. If you don't use this parameter, the default value Delivery not authorized, message refused is used.

To further customize the NDR (for example, multiple languages), you need to create a custom message by using the New-SystemMessage cmdlet.

```yaml
Type: RejectText
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveHeader
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The RemoveHeader parameter specifies an action that removes a header field from the message header. The value of this parameter specifies the name of the header field to remove.

```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLOver
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The SCLOver parameter specifies a condition that looks for the SCL value of messages. Valid values are:

- -1: The message is from a trusted sender, so the message bypasses spam filtering.

- Integers 0 through 9: A higher value indicates that a message is more likely to be spam.

The rule looks for messages with an SCL value that's greater than or equal to the specified value.

```yaml
Type: SclValue
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderADAttributeContainsWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The SenderADAttributeContainsWords parameter specifies a condition that looks for words in Active Directory attributes of message senders.

You can check against any of the following Active Directory attributes:

- City

- Company

- Country

- CustomAttribute1 - CustomAttribute15

- Department

- DisplayName

- Email

- FaxNumber

- FirstName

- HomePhoneNumber

- Initials

- LastName

- Manager

- MobileNumber

- Notes

- Office

- OtherFaxNumber

- OtherHomePhoneNumber

- OtherPhoneNumber

- PagerNumber

- PhoneNumber

- POBox

- State

- Street

- Title

- UserLogonName

- ZipCode

This parameter uses the syntax: "AttributeName:Word". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Word1,Phrase with spaces,word2...","AttributeName2:Word3,Phrase with spaces,word4...". Don't use words with leading or trailing spaces.

For example, "City:San Francisco,Palo Alto" or "City:San Francisco,Palo Alto","Department:Sales,Finance".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderADAttributeMatchesPatterns
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The SenderADAttributeMatchesPatterns parameter specifies a condition that looks for text patterns in Active Directory attributes of message senders by using regular expressions.

You can check against any of the following Active Directory attributes:

- City

- Company

- Country

- CustomAttribute1 - CustomAttribute15

- Department

- DisplayName

- Email

- FaxNumber

- FirstName

- HomePhoneNumber

- Initials

- LastName

- Manager

- MobileNumber

- Notes

- Office

- OtherFaxNumber

- OtherHomePhoneNumber

- OtherPhoneNumber

- PagerNumber

- PhoneNumber

- POBox

- State

- Street

- Title

- UserLogonName

- ZipCode

This parameter uses the syntax: "AttributeName:Regular Expression". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Regular Expression1,Regular Expression2...","AttributeName2:Regular Expression3,Regular Expression4...".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderInRecipientList
This parameter is reserved for internal Microsoft use.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderManagementRelationship
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The SenderManagementRelationship parameter specifies a condition that looks for the relationship between the sender and recipients in messages. Valid values are:

- Manager: The sender is the manager of a recipient.

- DirectReport: A recipient is the manager of the sender.

```yaml
Type: Manager | DirectReport
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The SentTo parameter specifies a condition that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

- Name

- Distinguished name (DN)

- Display name

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToMemberOf
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The SentToMemberOf parameter specifies a condition that looks for messages sent to members of groups. You can use any value that uniquely identifies the group. For example:

- Name

- Distinguished name (DN)

- Display name

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

If you remove the group after you create the rule, no action is taken on messages that are sent to members of the group.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToScope
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The SentToScope parameter specifies a condition that looks for the location of recipients. Valid values are:

- InOrganization: The recipient is a mailbox, mail user, group, or mail-enabled public folder in your organization or the recipient's email address is in an accepted domain that's configured as an authoritative domain or an internal relay domain, and the message was sent or received over an authenticated connection.

- NotInOrganization: The recipients are outside your organization. The recipient's email address isn't in an accepted domain or the recipient's email address is in an accepted domain that's configured as an external relay domain.

- ExternalPartner: The recipients are in a partner organization where you've configured Domain Security (mutual TLS authentication) to send mail. This value is only available in on-premises Exchange.

- ExternalNonPartner: The recipients are external to your organization and the organization isn't a partner organization. This value is only available in on-premises Exchange.

```yaml
Type: InOrganization | NotInOrganization | ExternalPartner | ExternalNonPartner
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetHeaderName
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The SetHeaderName parameter specifies an action that adds or modifies a header field in the message header. The value of this parameter is the name of the header field that you want to add or modify. When you use this parameter, you also need to use the SetHeaderValue parameter to specify a value for the header.

```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetHeaderValue
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The SetHeaderValue parameter specifies an action that adds or modifies a header field in the message header. The value of this parameter is the value that you want to apply to the header field. When you use this parameter, you also need to use the SetHeaderName parameter to specify the name of the header field that you want to add or modify..

```yaml
Type: HeaderValue
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetSCL
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The SetSCL parameter specifies an action that adds or modifies the SCL value of messages. Valid values are:

- -1: The message is from a trusted sender, so the message bypasses spam filtering.

- Integers 0 through 9: A higher value indicates that a message is more likely to be spam.

```yaml
Type: SclValue
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmtpRejectMessageRejectStatusCode
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Edge Transport servers.

The SmtpRejectMessageRejectStatusCode parameter specifies an action that disconnects the sending server from the Edge Transport server. The value of this parameter is the SMTP code that's used. Valid values are the integers 400 through 500.

You can use this parameter with the SmtpRejectMessageRejectText parameter. If you don't use this parameter, the default SMTP code 550 is used.

```yaml
Type: RejectStatusCode
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmtpRejectMessageRejectText
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Edge Transport servers.

The SmtpRejectMessageRejectText parameter specifies an action that disconnects the sending server from the Edge Transport server. The value of this parameter is the explanation text that's used. If the value contains spaces, enclose the value in quotation marks (").

You can use this parameter with the SmtpRejectMessageRejectStatusCode parameter. If you don't use this parameter, the default text Delivery not authorized, message refused is used.

```yaml
Type: RejectText
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectContainsWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The SubjectContainsWords parameter specifies a condition that looks for words in the Subject field of messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,...wordN. Don't use leading or trailing spaces.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectMatchesPatterns
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The SubjectMatchesPatterns parameter specifies a condition that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectOrBodyContainsWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The SubjectOrBodyContainsWords parameter specifies a condition that looks for words in the Subject field or body of messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,...wordN. Don't use leading or trailing spaces.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectOrBodyMatchesPatterns
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The SubjectOrBodyMatchesPatterns parameter specifies a condition that looks for text patterns in the Subject field or body of messages. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",..."\<regular expressionN\>".

```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithImportance
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The WithImportance parameter specifies a condition that looks for messages with the specified importance level. Valid values are:

- Low

- Normal

- High

```yaml
Type: Low | Normal | High
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActivationDate
The ActivationDate parameter specifies when the rule starts processing messages. The rule won't take any action on messages until the specified date/time.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyOME
This parameter is available only in the cloud-based service.

This parameter specifies an action or part of an action for the rule.

The ApplyOME parameter specifies an action that encrypts messages and their attachments by using Office 365 Message Encryption. Valid values are:

- $true: The message and attachments are encrypted.

- $false: The message and attachments aren't encrypted.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentExtensionMatchesWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentExtensionMatchesWords parameter specifies a condition that looks for words in the file name extensions of message attachments. You can specify multiple words separated by commas.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentHasExecutableContent
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentHasExecutableContent parameter specifies a condition that looks for executable content in message attachments. Valid values are:

- $true: Look for executable content in message attachments.

- $false: Don't look for executable content in message attachments.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentIsPasswordProtected
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentIsPasswordProtected parameter specifies a condition that looks for password protected files in messages (because the contents of the file can't be inspected). Password detection only works for Office documents and .zip files. Valid values are:

- $true: Look for password protected attachments.

- $false: Don't look for password protected attachments.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentProcessingLimitExceeded
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentProcessingLimitExceeded parameter specifies a condition that looks for messages where attachment scanning didn't complete. Valid values are:

- $true: Look for messages where attachment scanning didn't complete.

- $false: Don't look for messages where attachment scanning didn't complete.

You use this condition to create rules that work together with other attachment processing rules to handle messages where the content can't be fully scanned.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentPropertyContainsWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentPropertyContainsWords parameter specifies a condition that looks for words in the properties of attached Office documents. This condition helps integrate mail flow rules (transport rules) with the File Classification Infrastructure (FCI) in Windows Server 2012 R2 or later, SharePoint, or a third-party classification system. Valid values are a built-in document property, or a custom property. The built-in document properties are:

- Business Impact

- Compliancy

- Confidentiality

- Department

- Impact

- Intellectual Property

- Personally Identifiable Information

- Personal Information

- Personal Use

- Required Clearance

- PHI

- PII

- Project

- Protected Health Information

The syntax for this parameter is "PropertyName:Word". To specify multiple properties, or multiple words for the same property, use the following syntax: "PropertyName1:Word1,Phrase with spaces,word2,...","PropertyName2:Word3,Phrase with spaces,word4,...". Don't use leading or trailing spaces.

When you specify multiple properties, or multiple values for the same property, the or operator is used.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentCharacterSetContainsWords
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The ContentCharacterSetContainsWords parameter specifies a condition that looks for character set names in messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,...wordN. Don't use leading or trailing spaces.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpPolicy
The DlpPolicy parameter specifies the data loss prevention (DLP) policy that's associated with the rule. Each DLP policy is enforced using a set of mail flow rules (transport rules). To learn more about DLP, see Data loss prevention (https://technet.microsoft.com/library/jj150527.aspx).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentExtensionMatchesWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentExtensionMatchesWords parameter specifies an exception that looks for words in the file name extensions of message attachments. You can specify multiple words separated by commas.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentHasExecutableContent
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentHasExecutableContent parameter specifies an exception that looks for executable content in message attachments. Valid values are:

- $true: Look for executable content in message attachments.

- $false: Don't look for executable content in message attachments.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentIsPasswordProtected
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentIsPasswordProtected parameter specifies an exception that looks for password protected files in messages (because the contents of the file can't be inspected). Password detection only works for Office documents and .zip files. Valid values are:

- $true: Look for password protected attachments.

- $false: Don't look for password protected attachments.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentProcessingLimitExceeded
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentProcessingLimitExceeded parameter specifies an exception that looks for messages where attachment scanning didn't complete. Valid values are:

- $true: Look for messages where attachment scanning didn't complete.

- $false: Don't look for messages where attachment scanning didn't complete.

You use this exception to create rules that work together with other attachment processing rules to handle messages where the content can't be fully scanned.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentPropertyContainsWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentPropertyContainsWords parameter specifies an exception that looks for words in the properties of attached Office documents. This condition helps integrate rules with the File Classification Infrastructure (FCI) in Windows Server 2012 R2 or later, SharePoint, or a third-party classification system. Valid values are a built-in document property, or a custom property. The built-in document properties are:

- Business Impact

- Compliancy

- Confidentiality

- Department

- Impact

- Intellectual Property

- Personally Identifiable Information

- Personal Information

- Personal Use

- Required Clearance

- PHI

- PII

- Project

- Protected Health Information

The syntax for this parameter is "PropertyName:Word". To specify multiple properties, or multiple words for the same property, use the following syntax: "PropertyName1:Word1,Phrase with spaces,word2,...","PropertyName2:Word3,Phrase with spaces,word4,...". Don't use values with leading or trailing spaces.

When you specify multiple properties, or multiple values for the same property, the or operator is used.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentCharacterSetContainsWords
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfContentCharacterSetContainsWords parameter specifies an exception that looks for character set names in messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,...wordN. Don't use leading or trailing spaces.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasSenderOverride
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfHasSenderOverride parameter specifies an exception that looks for messages where the sender chose to override a DLP policy. Valid values are:

- $true: Look for messages where the sender took action to override a DLP policy.

- $false: Don't look for messages where the sender took action to override a DLP policy.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMessageContainsDataClassifications
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfMessageContainsDataClassifications parameter specifies an exception that looks for sensitive information types in the body of messages, and in any attachments.

This parameter uses the syntax @{\<SensitiveInformationType1\>},@{\<SensitiveInformationType2\>},...@{\<SensitiveInformationTypeN\>}. For example, to look for content that contains at least two credit card numbers, and at least one ABA routing number, use the value @{Name="Credit Card Number"; minCount="2"},@{Name="ABA Routing Number"; minCount="1"}.

For a list of sensitive information types available, see Sensitive information types (https://technet.microsoft.com/library/jj150541.aspx).

```yaml
Type: Hashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMessageSizeOver
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfMessageSizeOver parameter specifies an exception that looks for messages larger than the specified size. The size includes the message and all attachments.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientDomainIs
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfRecipientDomainIs parameter specifies an exception that looks for recipients with email address in the specified domains. You can specify multiple domains separated by commas.

If you want to look for recipient email addresses that contain the specified domain (for example, any subdomain of a domain), use the ExceptIfRecipientAddressMatchesPatterns parameter, and specify the domain by using the syntax '@domain\\.com$'.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderDomainIs
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfSenderDomainIs parameter specifies an exception that looks for senders with email address in the specified domains. You can specify multiple domains separated by commas.

If you want to look for sender email addresses that contain the specified domain (for example, any subdomain of a domain), use the FromAddressMatchesPatterns parameter, and specify the domain by using the syntax '@domain\\.com$'.

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderIpRanges
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfSenderIpRanges parameter specifies an exception that looks for senders whose IP addresses matches the specified value, or fall within the specified ranges. Valid values are:

- Single IP address: For example, 192.168.1.1.

- IP address range: For example, 192.168.0.1-192.168.0.254.

- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify multiple IP addresses or ranges separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpiryDate
This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

The ExpiryDate parameter specifies when this rule will stop processing messages. The rule won't take any action on messages after the specified date/time.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateIncidentReport
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The GenerateIncidentReport parameter specifies where to send the incident report that's defined by the IncidentReportContent parameter. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

An incident report is generated for messages that violate a DLP policy in your organization.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateNotification
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The GenerateNotification parameter specifies an action that sends a notification message to recipients. For example, you can use this parameter to notify recipients that a message was rejected by the rule, or marked as spam and delivered to their Junk Email folder.

This parameter supports plain text, HTML tags and the following keywords that use values from the original message:

- %%From%%

- %%To%%

- %%Cc%%

- %%Subject%%

- %%Headers%%

- %%MessageDate%%

```yaml
Type: DisclaimerText
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasSenderOverride
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The HasSenderOverride parameter specifies a condition that looks for messages where the sender chose to override a DLP policy. Valid values are:

- $true: Look for messages where the sender took action to override a DLP policy.

- $false: Don't look for messages where the sender took action to override a DLP policy.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncidentReportContent
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The IncidentReportContent parameter specifies the message properties that are included in the incident report that's generated when a message violates a DLP policy. Valid values are:

- Sender: The sender of the message.

- Recipients: The recipients in the To field of the message. Only the first 10 recipients are displayed in the incident report. If there are more than 10 recipients, the remaining number of recipients will be displayed.

- Subject: The Subject field of the message.

- CC: The recipients in the Cc field of the message. Only the first 10 recipients are displayed in the incident report. If there are more than 10 recipients, the remaining number of recipients will be displayed.

- BCC: The recipients in the Bcc field of the message. Only the first 10 recipients are displayed in the incident report. If there are more than 10 recipients, the remaining number of recipients will be displayed.

- Severity: The audit severity of the rule that was triggered. If the message was processed by more than one rule, the highest severity is displayed.

- Override: The override if the sender chose to override a PolicyTip. If the sender provided a justification, the first 100 characters of the justification is also included.

- RuleDetections: The list of rules that the message triggered.

- FalsePositive: The false positive if the sender marked the message as a false positive for a PolicyTip.

- DataClassifications: The list of sensitive information types that were detected in the message.

- IdMatch: The sensitive information type that was detected, the exact matched content from the message, and the 150 characters before and after the matched sensitive information.

- AttachOriginalMail: The entire original message as an attachment.

The message ID is always included in the incident report.

You can specify multiple values separated by commas.

You use this parameter with the GenerateIncidentReport parameter.

```yaml
Type: IncidentReportContent[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncidentReportOriginalMail
This parameter is available or functional only in Exchange Server 2013.

This parameter has been deprecated and is no longer used. Use the IncidentReportContent parameter instead. The value AttachOriginalMail on the IncidentReportContent parameter is equivalent to setting this parameter to the value IncludeOriginalMail.

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The IncidentReportOriginalMail parameter specifies whether to include the original message with the incident report. This parameter is used together with the GenerateIncidentReport parameter. Valid values are:

- IncludeOriginalMail

- DoNotIncludeOriginalMail (this is the default value)

```yaml
Type: IncludeOriginalMail | DoNotIncludeOriginalMail
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageContainsDataClassifications
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The MessageContainsDataClassifications parameter specifies a condition that looks for sensitive information types in the body of messages, and in any attachments.

This parameter uses the syntax @{\<SensitiveInformationType1\>},@{\<SensitiveInformationType2\>},...@{\<SensitiveInformationTypeN\>}. For example, to look for content that contains at least two credit card numbers, and at least one ABA routing number, use the value @{Name="Credit Card Number"; minCount="2"},@{Name="ABA Routing Number"; minCount="1"}.

For a list of sensitive information types available, see Sensitive information types (https://technet.microsoft.com/library/jj150541.aspx).

You can specify the notification options by using the NotifySender parameter.

```yaml
Type: Hashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageSizeOver
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The MessageSizeOver parameter specifies a condition that looks for messages larger than the specified size. The size includes the message and all attachments.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mode
The Mode parameter specifies how the rule operates. Valid values are:

- Audit: The actions that the rule would have taken are written to the message tracking log, but no any action is taken on the message that would impact delivery.

- AuditAndNotify: The rule operates the same as in Audit mode, but notifications are also enabled.

- Enforce: All actions specified in the rule are taken. This is the default value.

```yaml
Type: Audit | AuditAndNotify | Enforce
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifySender
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The NotifySender parameter specifies an action that notifies the sender when messages violate DLP policies. Valid values are:

- NotifyOnly: The sender is notified, but the message is delivered normally.

- RejectMessage: The message is rejected, and the sender is notified.

- RejectUnlessFalsePositiveOverride: The message is rejected unless it's marked as a false positive by the sender.

- RejectUnlessSilentOverride: The message is rejected unless the sender has chosen to override the policy restriction.

- RejectUnlessExplicitOverride: This is the same as RejectUnlessSilentOverride, but the sender can also provide a justification for overriding the policy restriction.

For all values except NotifyOnly, you can specify an enhanced status code and a rejection reason by using the RejectMessageEnhancedStatusCode and RejectMessageReasonText parameters. The default enhanced status code is 5.7.1, and the default rejection reason is Delivery not authorized, message refused.

If you use this parameter, you also need to specify a condition that looks for sensitive information types in messages by using the MessageContainsDataClassifications parameter.

```yaml
Type: NotifyOnly | RejectMessage | RejectUnlessFalsePositiveOverride | RejectUnlessSilentOverride | RejectUnlessExplicitOverride
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDomainIs
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The RecipientDomainIs parameter specifies a condition that looks for recipients with email address in the specified domains. You can specify multiple domains separated by commas.

If you want to look for recipient email addresses that contain the specified domain (for example, any subdomain of a domain), use the RecipientAddressMatchesPatterns parameter, and specify the domain by using the syntax '@domain\\.com$'.

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOME
This parameter is available only in the cloud-based service.

This parameter specifies an action or part of an action for the rule.

The RemoveOME parameter specifies an action that removes Office 365 Message Encryption from messages and their attachments. Valid values are:

- $true: The message and attachments are decrypted.

- $false: The message and attachments aren't decrypted.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RouteMessageOutboundConnector
This parameter is available only in the cloud-based service.

This parameter specifies an action or part of an action for the rule.

The RouteMessageOutboundConnector parameter specifies an action that routes messages through the specified Outbound connector in Office 365. You can use any value that uniquely identifies the connector. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: OutboundConnectorIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RouteMessageOutboundRequireTls
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The RouteMessageOutboundRequireTls parameter specifies an action that uses Transport Layer Security (TLS) encryption to deliver messages outside your organization. Valid values are:

- $true: The messages must be delivered over a TLS encrypted channel.

- $false: A TLS encrypted channel isn't required to deliver the messages.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RuleErrorAction
The RuleErrorAction parameter specifies what to do if rule processing can't be completed on messages. Valid values are:

- Ignore: The message is sent anyway. This is the default value.

- Defer: The message is deferred so the rules engine can attempt to process the message again.

```yaml
Type: Ignore | Defer
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RuleSubType
The RuleSubType parameter specifies the rule type. Valid values are:

- Dlp: The rule is associated with a DLP policy.

- None: The rule is a regular rule that isn't associated with a DLP policy.

```yaml
Type: None | Dlp
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderAddressLocation
The SenderAddressLocation parameter specifies where to look for sender addresses in conditions and exceptions that examine sender email addresses. Valid values are:

- Header: Only examine senders in the message headers (for example, the From, Sender, or Reply-To fields). This is the default value, and is the way rules worked before Exchange 2013 Cumulative Update 1 (CU1).

- Envelope: Only examine senders from the message envelope (the MAIL FROM value that was used in the SMTP transmission, which is typically stored in the Return-Path field).

- HeaderOrEnvelope: Examine senders in the message header and the message envelope.

Note that message envelope searching is only available for the following conditions and exceptions:

- From and ExceptIfFrom

- FromAddressContainsWords and ExceptIfFromAddressContainsWords

- FromAddressMatchesPatterns and ExceptIfFromAddressMatchesPatterns

- FromMemberOf and ExceptIfFromMemberOf

- SenderDomainIs and ExceptIfSenderDomainIs

```yaml
Type: Header | Envelope | HeaderOrEnvelope
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderDomainIs
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The SenderDomainIs parameter specifies a condition that looks for senders with email address in the specified domains. You can specify multiple domains separated by commas.

If you want to look for sender email addresses that contain the specified domain (for example, any subdomain of a domain), use the FromAddressMatchesPatterns parameter, and specify the domain by using the syntax '@domain\\.com$'.

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).

```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderIpRanges
This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The SenderIpRanges parameter specifies a condition that looks for senders whose IP addresses matches the specified value, or fall within the specified ranges. Valid values are:

- Single IP address: For example, 192.168.1.1.

- IP address range: For example, 192.168.0.1-192.168.0.254.

- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify multiple IP addresses or ranges separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetAuditSeverity
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The SetAuditSeverity parameter specifies an action that sets the severity level of the incident report and the corresponding entry that's written to the message tracking log when messages violate DLP policies. Valid values are:

- DoNotAudit: No audit entry is logged.

- Low: The audit entry is assigned low severity.

- Medium: The audit entry is assigned medium severity.

- High: The audit entry is assigned high severity.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StopRuleProcessing
This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The StopRuleProcessing parameter specifies an action that stops processing more rules. Valid values are:

- $true: Stop processing more rules.

- $false: Continue processing more rules after this one.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMessageContainsAllDataClassifications
This parameter is reserved for internal Microsoft use.

```yaml
Type: Hashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageContainsAllDataClassifications
This parameter is reserved for internal Microsoft use.

```yaml
Type: Hashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/8328125b-e166-436f-95e6-1afafdbdb89a.aspx)
