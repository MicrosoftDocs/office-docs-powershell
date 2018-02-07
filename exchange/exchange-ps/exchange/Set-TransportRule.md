---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Set-TransportRule

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-TransportRule cmdlet to modify an existing transport rule on a Hub Transport server or an Edge Transport server.

Transport rules created on Hub Transport servers are stored in Active Directory. All Hub Transport servers in an organization have access to the same set of transport rules. On Edge Transport servers, transport rules are saved in the local copy of Active Directory Lightweight Directory Services (AD LDS). Transport rules aren't shared or replicated between two Edge Transport servers, and they aren't shared or replicated between Hub Transport servers and Edge Transport servers.

In Microsoft Exchange Server 2010, the transport rule cmdlets have been changed to allow easier creation of rules using the Exchange Management Shell. All rule predicates and actions are available for use directly with the New-TransportRule and Set-TransportRule cmdlets. In Exchange 2010, the Get-TransportRulePredicate and Get-TransportRuleAction cmdlets are only used to enumerate the predicates and actions available for use on Hub Transport and Edge Transport servers.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-TransportRule cmdlet to modify existing transport rules in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
 [-MessageContainsAllDataClassifications <Hashtable[]>] [-OMEExpiryDays <Int32>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Set-TransportRule cmdlet modifies an existing transport rule on a Hub Transport server or an Edge Transport server.

Transport rule conditions and exceptions use one or more predicates along with the corresponding values to test for. For a list of supported transport rule predicates, see Transport Rule Predicates.

Transport rules apply actions to messages, some with corresponding action values. For a list of supported transport rule actions, see Transport Rule Actions.

Although the Hub Transport server role and Edge Transport server role share a set of common predicates and actions, some predicates and actions are exclusive to each server role.

For detailed information about how to create a new transport rule, see Create a Transport Rule. For information about transport rules and the Transport Rules agent, see Overview of Transport Rules.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport rules" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

Transport rule conditions and exceptions include corresponding values to test for. For a list of supported transport rule conditions, see Mail flow rule conditions and exceptions (predicates) in Exchange 2013.

Transport rules apply actions to messages, some with corresponding action values. For a list of supported transport rule actions, see Mail flow rule actions in Exchange 2013.

For detailed information about how to create a transport rule, see Manage mail flow rules. To learn more about transport rules, see Mail flow rules (transport rules) in Exchange 2013.

In on-premises Exchange organizations, Transport rules created on Mailbox servers are stored in Active Directory. All Mailbox servers in the organization have access to the same set of transport rules. On Edge Transport servers, transport rules are saved in the local copy of Active Directory Lightweight Directory Services (AD LDS). Transport rules aren't shared or replicated between Edge Transport servers or between Mailbox servers and Edge Transport servers. Also, Mailbox servers and Edge Transport servers share a set of common conditions and actions, but some conditions and actions are exclusive to each server role.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport rules" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

In on-premises Exchange organizations, rules created on Mailbox servers are stored in Active Directory. All Mailbox servers in the organization have access to the same set of rules. On Edge Transport servers, rules are saved in the local copy of Active Directory Lightweight Directory Services (AD LDS). Rules aren't shared or replicated between Edge Transport servers or between Mailbox servers and Edge Transport servers. Also, some conditions and actions are exclusive to each server role.

The search for words or text patterns in the subject or other header fields in the message occurs after the message has been decoded from the MIME content transfer encoding method that was used to transmit the binary message between SMTP servers in ASCII text. You can't use conditions or exceptions to search for the raw (typically, Base64) encoded values of the subject or other header fields in messages.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-TransportRule "Sales Team Disclaimer" -FromMemberOf "Sales-Group"
```

This example modifies the Sales Team Disclaimer transport rule on a Hub Transport server. Modifying the value of one predicate doesn't affect other predicates used in the rule's conditions or exceptions, and doesn't affect actions on the same rule.


This rule will be modified to apply the following condition:


From member of distribution list The value for this condition is set to the Sales-Group distribution group.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-TransportRule "Sales Team Disclaimer" -FromMemberOf "Sales-Group"
```

This example modifies the Sales Team Disclaimer transport rule. Modifying the value of one condition doesn't affect other conditions, exceptions, or actions used in the rule.


This example sets the FromMemberOf parameter to a value of Sales-Group, which specifies that the rule is applied if the sender of the message is a member of the Sales-Group distribution group.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-TransportRule "Sales Team Disclaimer" -FromMemberOf "Sales Department"
```

This example modifies the existing rule named Sales Team Disclaimer transport rule by adding the condition that the sender of the message is a member of the Sales Department group.


This example sets

### Example 1 -------------------------- (Exchange Online)
```
Set-TransportRule "Sales Team Disclaimer" -FromMemberOf "Sales Department"
```

This example modifies the existing rule named Sales Team Disclaimer transport rule by adding the condition that the sender of the message is a member of the Sales Department group.


This example sets

### Example 1 -------------------------- (Exchange Online Protection)
```
Set-TransportRule "Sales Team Disclaimer" -FromMemberOf "Sales Department"
```

This example modifies the existing rule named Sales Team Disclaimer transport rule by adding the condition that the sender of the message is a member of the Sales Department group.


This example sets

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the transport rule to be modified. Use the GUID of the transport rule or the rule name.



!!! Exchange Server 2013

The Identity parameter specifies the transport rule you want to modify. Use the name or GUID of the transport rule.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Identity parameter specifies the rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ADComparisonAttribute
!!! Exchange Server 2010

The ADComparisonAttribute parameter specifies an Active Directory attribute to compare. Specify one of the following Active Directory attributes:

- DisplayName

- FirstName

- Initials

- LastName

- Office

- PhoneNumber

- OtherPhoneNumber

- Email

- Street

- POBox

- City

- State

- ZipCode

- Country

- UserLogonName

- HomePhoneNumber

- OtherHomePhoneNumber

- PagerNumber

- MobileNumber

- FaxNumber

- OtherFaxNumber

- Notes

- Title

- Department

- Company

- Manager

- CustomAttribute1 - CustomAttribute15

When specifying the ADComparisonAttribute parameter, if you don't specify a value for the ADComparisonOperator parameter, the default comparison operator Equal is used.



!!! Exchange Server 2013

The ADComparisonAttribute parameter specifies an Active Directory attribute to compare between the sender and recipients. When you use this parameter, the specified Active Directory attribute of the sender is compared to the same Active Directory attribute of all the recipients of the message. This parameter works when the recipients are individual users. This parameter doesn't work with distribution groups.

You can use one of the following Active Directory attributes:

- DisplayName

- FirstName

- Initials

- LastName

- Office

- PhoneNumber

- OtherPhoneNumber

- Email

- Street

- POBox

- City

- State

- ZipCode

- Country

- UserLogonName

- HomePhoneNumber

- OtherHomePhoneNumber

- PagerNumber

- MobileNumber

- FaxNumber

- OtherFaxNumber

- Notes

- Title

- Department

- Company

- Manager

- CustomAttribute1 - CustomAttribute15

When specifying the ADComparisonAttribute parameter, if you don't specify a value for the ADComparisonOperator parameter, the default comparison operator Equal is used.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ADComparisonOperator
!!! Exchange Server 2010

The ADComparisonOperator parameter specifies a comparison operator for the ADAttributeComparison parameter. Valid values include:

- Equal

- NotEqual

When specifying the ADComparisonOperator parameter, you must also specify the ADComparisonAttribute parameter.



!!! Exchange Server 2013

The ADComparisonOperator parameter specifies a comparison operator for the ADComparisonAttribute parameter. Valid values include:

- Equal

- NotEqual

If you use the ADComparisonOperator parameter, you must also use the ADComparisonAttribute parameter.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The ADComparisonOperator parameter specifies the comparison operator for the ADComparisonAttribute parameter. Valid values are:

- Equal (This is the default value)

- NotEqual



```yaml
Type: Equal | NotEqual
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddManagerAsRecipientType
!!! Exchange Server 2010

The AddManagerAsRecipientType parameter adds the manager of the specified sender or recipient as an additional recipient of the message.



!!! Exchange Server 2013

The AddManagerAsRecipientType parameter specifies how the message is relayed to the manager of the sender or recipient. You can use any of the following values:

- To The manager is added to the recipients in the To line of the message.

- Cc The manager is added to the recipients in the carbon copy (Cc) line of the message.

- Bcc The manager is added to the recipients in the blind carbon copy (Bcc) line of the message.

- Redirect The message is redirected to the manager instead of being delivered to the original recipients.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddToRecipients
!!! Exchange Server 2010

The AddToRecipients parameter specifies an additional recipient for the message.



!!! Exchange Server 2013

The AddToRecipients parameter specifies one or more additional recipients for the message. Separate multiple recipients with commas. The specified recipients are added as To recipients.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfCcHeader
!!! Exchange Server 2010

The AnyOfCcHeader parameter specifies a recipient to match the Cc SMTP message header. The rule is applied if the recipient specified is present as a carbon copy (cc) recipient.



!!! Exchange Server 2013

The AnyOfCcHeader parameter specifies one or more recipients. The rule is applied if any of these recipients are present as a Cc recipient.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfCcHeaderMemberOf
!!! Exchange Server 2010

The AnyOfCcHeaderMemberOf parameter specifies a distribution group. The rule is applied if a member of the specified distribution group is present as a Cc recipient.



!!! Exchange Server 2013

The AnyOfCcHeaderMemberOf parameter specifies a distribution group. The rule is applied if a member of the specified distribution group is present as a Cc recipient.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressContainsWords
!!! Exchange Server 2010

The AnyOfRecipientAddressContainsWords parameter specifies one or more words to check in a recipient address.



!!! Exchange Server 2013

The AnyOfRecipientAddressContainsWords parameter specifies one or more words to check in a recipient address. The rule is applied if a recipient's address includes any of these words.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The AnyOfRecipientAddressContainsWords parameter specifies a condition that looks for words in recipient email addresses. You can specify multiple words separated by commas.

A match for this condition applies the rule action to all recipients of the message. For example, if the action is to reject the message, the message is rejected for all recipients of the message, not just for the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressMatchesPatterns
!!! Exchange Server 2010

The AnyOfRecipientAddressMatchesPatterns parameter specifies one or more regular expressions to match in a recipient address.



!!! Exchange Server 2013

The AnyOfRecipientAddressMatchesPatterns parameter specifies one or more regular expressions to match in a recipient address. The rule is applied if any of the recipients' addresses matches the pattern you specify.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The AnyOfRecipientAddressMatchesPatterns parameter specifies a condition that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....

A match for this condition applies the rule action to all recipients of the message. For example, if the action is to reject the message, the message is rejected for all recipients of the message, not just for the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfToCcHeader
!!! Exchange Server 2010

The AnyOfToCcHeader parameter specifies a recipient to match in the To or Cc SMTP message headers. The rule is applied if the recipient specified is present as a To or Cc recipient.



!!! Exchange Server 2013

The AnyOfToCcHeader parameter specifies one or more recipients. The rule is applied if any of the recipients specified are present as a To or Cc recipient.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfToCcHeaderMemberOf
!!! Exchange Server 2010

The AnyOfToCcHeaderMemberOf parameter specifies a distribution group. The rule is applied if a member of the specified distribution group is present as a To or Cc recipient.



!!! Exchange Server 2013

The AnyOfToCcHeaderMemberOf parameter specifies a distribution group. The rule is applied if a member of the specified distribution group is present as a To or Cc recipient.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfToHeader
!!! Exchange Server 2010

The AnyOfToHeader parameter specifies a recipient to match the To SMTP message header. The rule is applied if the specified recipient is present in the To header.



!!! Exchange Server 2013

The AnyOfToHeader parameter specifies one or more recipients. The rule is applied if any of the specified recipients are present as a To recipient.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfToHeaderMemberOf
!!! Exchange Server 2010

The AnyOfToHeaderMemberOf parameter specifies a distribution group. The rule is applied if a member of the specified distribution group is present in the To header.



!!! Exchange Server 2013

The AnyOfToHeaderMemberOf parameter specifies a distribution group. The rule is applied if a member of the specified distribution group is present as a To recipient.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyClassification
!!! Exchange Server 2010

The ApplyClassification parameter specifies a message classification to apply to the message.



!!! Exchange Server 2013

The ApplyClassification parameter specifies a message classification to apply to the message.

The message classification referred to in this parameter is the custom message classification that you can create in your organization. It isn't related to the data loss prevention (DLP) classification.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The ApplyClassification parameter specifies an action that applies a message classification to messages. Use the Get-MessageClassification cmdlet to see the message classification objects that are available.

The message classification referred to in this parameter is the custom message classification that you can create in your organization by using the New-MessageClassification cmdlet. It isn't related to the data loss prevention (DLP) data classification.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyHtmlDisclaimerFallbackAction
!!! Exchange Server 2010

The ApplyHtmlDisclaimerFallbackAction parameter specifies an action to fall back to if the HTML disclaimer can't be applied to a message. Valid fallback actions include the following:

- Wrap

- Ignore

- Reject

This parameter is used with the ApplyHtmlDisclaimerText parameter. If not specified, the default fallback action is set to Wrap.



!!! Exchange Server 2013

The ApplyHtmlDisclaimerFallbackAction parameter specifies an action to fall back to if the HTML disclaimer can't be applied to a message. Valid fallback actions include the following:

- Wrap The original message is wrapped as an attachment in a new message, and the disclaimer is used as the message body for the new message.

- Ignore The rule is ignored, and the message is delivered without the disclaimer.

- Reject The message is rejected.

This parameter is used with the ApplyHtmlDisclaimerText parameter. If you use the ApplyHtmlDisclaimerText parameter without specifying a value for this parameter, the default fallback action, Wrap, is used.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyHtmlDisclaimerLocation
!!! Exchange Server 2010

The ApplyHtmlDisclaimerLocation parameter specifies a location within the message where the HTML disclaimer text is inserted. The following values can be used:

- Append

- Prepend

This parameter is used with the ApplyHtmlDisclaimer parameter. If not specified, the default value of Append is used.



!!! Exchange Server 2013

The ApplyHtmlDisclaimerLocation parameter specifies the location within the message where the HTML disclaimer text is inserted. You can use either of the following two values:

- Append The disclaimer is added to the end of the message body.

- Prepend The disclaimer is inserted to the beginning of the message body.

This parameter is used with the ApplyHtmlDisclaimerText parameter. If you use the ApplyHtmlDisclaimerText parameter without specifying a value for this parameter, the default value, Append, is used.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyHtmlDisclaimerText
!!! Exchange Server 2010

The ApplyHtmlDisclaimerText parameter specifies disclaimer text to be inserted in the message. Disclaimer text can include HTML tags and inline cascading style sheet (CSS) tags. You can add images using the IMG tag. For more information about disclaimers, see Understanding Disclaimers.



!!! Exchange Server 2013

The ApplyHtmlDisclaimerText parameter specifies disclaimer text to be inserted in the message. Disclaimer text can include HTML tags and inline cascading style sheet (CSS) tags. You can add images using the IMG tag.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The ApplyHtmlDisclaimerText parameter specifies an action that adds the disclaimer text to messages. Disclaimer text can include HTML tags and inline cascading style sheet (CSS) tags. You can add images using the IMG tag.

You use the ApplyHtmlDisclaimerLocation parameter to specify where to insert the text in the message body (the default value is Append), and the ApplyHtmlDisclaimerFallbackAction parameter to specify what to do if the disclaimer can't be added to the message (the default value is Wrap).



```yaml
Type: DisclaimerText
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyRightsProtectionTemplate
!!! Exchange Server 2010

The ApplyRightsProtectionTemplate specifies the name of a rights management service (RMS) template to apply to the message. This action adds rights protection to a message. To use this action, an Active Directory Rights Management Services (AD RMS) server should exist in the topology or the organization should be configured to use the ILS.

For more information, see Understanding Transport Protection Rules.



!!! Exchange Server 2013

The ApplyRightsProtectionTemplate parameter specifies the name of a rights management service (RMS) template to apply to the message. This action adds rights protection to the messages that meet the conditions of this rule. To use this action, an Active Directory Rights Management Services (AD RMS) server should exist in the topology or the organization should be configured to use the ILS service.

For more information, see Transport protection rules.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The ApplyRightsProtectionTemplate parameter specifies an action that applies rights management service (RMS) templates to messages. You identify the RMS template by name. If the name contains spaces, enclose the name in quotation marks (").

To use this action, you need to have an Active Directory Rights Management Services (AD RMS) server in your organization, or your organization needs to use the ILS service.

Use the Get-RMSTemplate cmdlet to see the RMS templates that are available.

For more information, see Transport protection rules.



```yaml
Type: RmsTemplateIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentContainsWords
!!! Exchange Server 2010

The AttachmentContainsWords parameter specifies one or more words to check in an attachment. Only supported attachment types are checked.



!!! Exchange Server 2013

The AttachmentContainsWords parameter specifies one or more words to check in attachments. Only supported attachment types are checked. The rule is applied if any of the attachments contain any of the words you specify.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentContainsWords parameter specifies a condition that looks for words in message attachments. Only supported attachment types are checked.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,.... Don't use leading or trailing spaces.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentIsUnsupported
!!! Exchange Server 2010

The AttachmentIsUnsupported parameter instructs the rules agent to check for unsupported attachment types. Unsupported attachments are attachments for which an IFilter isn't installed on the Hub Transport server.



!!! Exchange Server 2013

The AttachmentIsUnsupported parameter specifies whether the rule is applied when any attachments in the message are of an unsupported type. Unsupported attachments are attachments for which an IFilter isn't installed on the servers. If you set this parameter to $true, the rule is applied if any of the attachments is an unsupported type.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentIsUnsupported parameter specifies a condition that looks for unsupported file types in messages. Unsupported file types are message attachments that aren't natively recognized by Exchange, and the required IFilter isn't installed. Valid values are:

- $true: Look for unsupported file types in messages.

- $false: Don't look for unsupported file types in messages.

For more information, see Register Filter Pack IFilters with Exchange 2016.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentMatchesPatterns
!!! Exchange Server 2010

The AttachmentMatchesPatterns parameter specifies one or more regular expressions to match in message attachments. Only supported attachment types are checked for the specified pattern.



!!! Exchange Server 2013

The AttachmentMatchesPatterns parameter specifies one or more regular expressions to match in message attachment content. Only supported attachment types are checked for the specified pattern.

Only the first 150 kilobytes (KB) of the attachment is scanned when trying to match a pattern.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentMatchesPatterns parameter specifies a condition that looks for text patterns in the content of message attachments by using regular expressions. Only supported attachment types are checked.

You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....

Only the first 150 kilobytes (KB) of the attachment is scanned when trying to match a text pattern.



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentNameMatchesPatterns
!!! Exchange Server 2010

The AttachmentNameMatchesPatterns parameter specifies a pattern to match attachment names with. The rule is applied if the name matches the specified pattern.



!!! Exchange Server 2013

The AttachmentNameMatchesPatterns parameter specifies one or more word patterns to check in attachment names. The rule is applied if the name of any attachment matches the patterns you specify.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentNameMatchesPatterns parameter specifies a condition that looks for text patterns in the file name of message attachments by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentSizeOver
!!! Exchange Server 2010

The AttachmentSizeOver parameter specifies an attachment size. The rule is applied if the attachment size of a single attachment exceeds the specified size.



!!! Exchange Server 2013

The AttachmentSizeOver parameter specifies an attachment size. The rule is applied if the size of any of the attachments exceeds the specified size.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BetweenMemberOf1
!!! Exchange Server 2010

The BetweenMemberOf1 parameter specifies a distribution group. The rule is applied if the message is sent or received by a member of the specified distribution group.

This parameter is used with the BetweenMemberOf2 parameter.



!!! Exchange Server 2013

The BetweenMemberOf1 parameter specifies a distribution group and must be used together with the BetweenMemberOf2 parameter. The rule is applied if the message is sent between members of the distribution groups specified in these parameters.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BetweenMemberOf2
!!! Exchange Server 2010

The BetweenMemberOf2 parameter specifies a distribution group. The rule is applied if the message is sent or received by a member of the specified distribution group.

This parameter is used with the BetweenMemberOf1 parameter.



!!! Exchange Server 2013

The BetweenMemberOf2 parameter specifies a distribution group and must be used together with the BetweenMemberOf1 parameter. The rule is applied if the message is sent between members of the distribution groups specified in these parameters.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlindCopyTo
!!! Exchange Server 2010

The BlindCopyTo parameter specifies a recipient to add to the message as a blind carbon copy (bcc) recipient.



!!! Exchange Server 2013

The BlindCopyTo parameter specifies one or more recipients to add to the message as Bcc recipients.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comments
!!! Exchange Server 2010

The Comments parameter specifies informative comments for the transport rule, such as what the rule is used for or how it has changed over time. The length of the comment can't exceed 512 characters.



!!! Exchange Server 2013

The Comments parameter specifies informative comments for the transport rule, such as what the rule is used for or how it has changed over time. The length of the comment can't exceed 1024 characters.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Comments parameter specifies optional descriptive text for the rule (for example, what the rule is used for, or how it has changed over time). The length of the comment can't exceed 1024 characters. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CopyTo
!!! Exchange Server 2010

The CopyTo parameter specifies a recipient to add to the message as a Cc recipient.



!!! Exchange Server 2013

The CopyTo parameter specifies one or more recipients to add to the message as Cc recipients.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteMessage
!!! Exchange Server 2010

The DeleteMessage parameter specifies that the message is to be deleted.



!!! Exchange Server 2013

The DeleteMessage parameter specifies that the rule deletes any message that matches the conditions specified.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The DeleteMessage parameter specifies an action that silently drops messages without an NDR. Valid values are:

- $true: Silently drop the message without an NDR.

- $false: Don't silently drop the message.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disconnect
!!! Exchange Server 2010

The Disconnect parameter specifies whether the rules agent disconnects the SMTP session. This action is only available on the Edge Transport server.



!!! Exchange Server 2013

The Disconnect parameter specifies whether the rules agent disconnects the SMTP session.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Edge Transport servers.

The Disconnect parameter specifies an action that ends the SMTP connection between the sending server and the Edge Transport server without generating an NDR.

- $true: Silently end the SMTP session without generating an NDR.

- $false: Don't silently end the SMTP session.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfADComparisonAttribute
!!! Exchange Server 2010

The ExceptIfADComparisonAttribute parameter specifies an Active Directory attribute to compare. Specify one of the Active Directory attributes listed in the ADComparisonAttribute parameter description.



!!! Exchange Server 2013

The ExceptIfADComparisonAttribute parameter specifies an Active Directory attribute to compare between the sender and recipients. When you use this parameter, the specified Active Directory attribute of the sender is compared to the same Active Directory attribute of all the recipients of the message. This parameter works when the recipients are individual users. This parameter doesn't work with distribution groups.

You can use one of the following Active Directory attributes:

- DisplayName

- FirstName

- Initials

- LastName

- Office

- PhoneNumber

- OtherPhoneNumber

- Email

- Street

- POBox

- City

- State

- ZipCode

- Country

- UserLogonName

- HomePhoneNumber

- OtherHomePhoneNumber

- PagerNumber

- MobileNumber

- FaxNumber

- OtherFaxNumber

- Notes

- Title

- Department

- Company

- Manager

- CustomAttribute1 - CustomAttribute15

When specifying the ExceptIfADComparisonAttribute parameter, if you don't specify a value for the ExceptIfADComparisonOperator parameter, the default comparison operator Equal is used.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfADComparisonOperator
!!! Exchange Server 2010

The ExceptIfADComparisonOperator parameter specifies a comparison operator. Valid values include:

- Equal

- NotEqual

When specifying the ExceptIfADComparisonOperator parameter, you must also specify the ExceptIfADComparisonAttribute parameter.



!!! Exchange Server 2013

The ExceptIfADComparisonOperator parameter specifies a comparison operator for the ExceptIfADComparisonAttribute parameter. Valid values are:

- Equal

- NotEqual

If you use the ExceptIfADComparisonOperator parameter, you must also use the ExceptIfADComparisonAttribute parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfADComparisonOperator parameter specifies the comparison operator for the ExceptIfADComparisonAttribute parameter. Valid values are:

- Equal (This is the default value)

- NotEqual



```yaml
Type: Equal | NotEqual
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfCcHeader
!!! Exchange Server 2010

The ExceptIfAnyOfCcHeader parameter specifies one or more recipients to match in the Cc header of a message.



!!! Exchange Server 2013

The ExceptIfAnyOfCcHeader parameter specifies one or more recipients. The rule isn't applied if any of these recipients are present as a Cc recipient.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfCcHeaderMemberOf
!!! Exchange Server 2010

The ExceptIfAnyOfCcHeaderMemberOf parameter specifies a distribution list.



!!! Exchange Server 2013

The ExceptIfAnyOfCcHeaderMemberOf parameter specifies a distribution group. The rule isn't applied if a member of the specified distribution group is present as a Cc recipient.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressContainsWords
!!! Exchange Server 2010

The ExceptIfAnyOfRecipientAddressContainsWords parameter specifies one or more words to check in a recipient address.



!!! Exchange Server 2013

The ExceptIfAnyOfRecipientAddressContainsWords parameter specifies one or more words to check in a recipient address. The rule isn't applied if a recipient's address includes any of these words.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfAnyOfRecipientAddressContainsWords parameter specifies an exception that looks for words in recipient email addresses. You can specify multiple words separated by commas.

A match for this exception prevents the rule action from being applied to all recipients of the message. For example, if the action is to reject the message, the message is delivered to all recipients of the message, not just to the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressMatchesPatterns
!!! Exchange Server 2010

The ExceptIfAnyOfRecipientAddressMatchesPatterns parameter specifies one or more regular expressions to match in a recipient address.



!!! Exchange Server 2013

The ExceptIfAnyOfRecipientAddressMatchesPatterns parameter specifies one or more regular expressions to match in a recipient address. The rule isn't applied if any of the recipient addresses matches the pattern you specify.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfAnyOfRecipientAddressMatchesPatterns parameter specifies an exception that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....

A match for this exception prevents the rule action from being applied to all recipients of the message. For example, if the action is to reject the message, the message is delivered to all recipients of the message, not just to the specified recipients.

Note: This condition or exception doesn't consider messages that are sent to recipient proxy addresses. It only matches messages that are sent to the recipient's primary email address.



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfToCcHeader
!!! Exchange Server 2010

The ExceptIfAnyOfToCcHeader parameter specifies one or more recipients to match in the To or Cc headers of a message.



!!! Exchange Server 2013

The ExceptIfAnyOfToCcHeader parameter specifies one or more recipients. The rule isn't applied if any of the recipients specified are present as a To or Cc recipient.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfToCcHeaderMemberOf
!!! Exchange Server 2010

The ExceptIfAnyOfToCcHeaderMemberOf parameter specifies a distribution group name. Recipients in the To and Cc headers are checked for membership of the specified group.



!!! Exchange Server 2013

The ExceptIfAnyOfToCcHeaderMemberOf parameter specifies a distribution group. The rule isn't applied if a member of the specified distribution group is present as a To or Cc recipient.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfToHeader
!!! Exchange Server 2010

The ExceptIfAnyOfToHeader parameter specifies one or more recipients to match in the To header of a message.



!!! Exchange Server 2013

The ExceptIfAnyOfToHeader parameter specifies one or more recipients. The rule isn't applied if any of the specified recipients are present as a To recipient.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfToHeaderMemberOf
!!! Exchange Server 2010

The ExceptIfAnyOfToHeaderMemberOf parameter specifies one or more distribution groups. Recipients in the To header are checked for membership of the specified group.



!!! Exchange Server 2013

The ExceptIfAnyOfToHeaderMemberOf parameter specifies a distribution group. The rule isn't applied if a member of the specified distribution group is present as a To recipient.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentContainsWords
!!! Exchange Server 2010

The ExceptIfAttachmentContainsWords parameter specifies one or more words to check in an attachment. Only supported attachment types are checked.



!!! Exchange Server 2013

The ExceptIfAttachmentContainsWords parameter specifies one or more words to check in attachments. Only supported attachment types are checked. The rule isn't applied if any of the attachments contain any of the words you specify.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentContainsWords parameter specifies an exception that looks for words in message attachments. Only supported attachment types are checked.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,.... Don't use leading or trailing spaces.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentIsUnsupported
!!! Exchange Server 2010

The ExceptIfAttachmentIsUnsupported parameter specifies an exception for unsupported attachment types. Unsupported attachments are attachments for which an IFilter isn't installed on the Hub Transport server.



!!! Exchange Server 2013

The ExceptIfAttachmentIsUnsupported parameter specifies whether the rule is applied when any attachments in the message are of an unsupported type. Unsupported attachments are attachments for which an IFilter isn't installed on your servers. If you set this parameter to $true the rule isn't applied if any of the attachments is an unsupported type.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentIsUnsupported parameter specifies an exception that looks for unsupported file types in messages. Unsupported file types are message attachments that aren't natively recognized by Exchange, and the required IFilter isn't installed. Valid values are:

- $true: Look for unsupported file types in messages.

- $false: Don't look for unsupported file types in messages.

For more information, see Register Filter Pack IFilters with Exchange 2016.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentMatchesPatterns
!!! Exchange Server 2010

The ExceptIfAttachmentMatchesPatterns parameter specifies one or more regular expressions to match in a message attachment. Only supported attachment types are checked for the specified pattern.



!!! Exchange Server 2013

The ExceptIfAttachmentMatchesPatterns parameter specifies one or more regular expressions to match in message attachment content. Only supported attachment types are checked for the specified pattern.

Only the first 150 KB of the attachment is scanned when trying to match a pattern.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentMatchesPatterns parameter specifies an exception that looks for text patterns in the content of message attachments by using regular expressions. Only supported attachment types are checked.

You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....

Only the first 150 KB of the attachment is scanned when trying to match a text pattern.



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentNameMatchesPatterns
!!! Exchange Server 2010

The ExceptIfAttachmentNameMatchesPatterns parameter specifies one or more regular expressions to match attachment names with.



!!! Exchange Server 2013

The ExceptIfAttachmentNameMatchesPatterns parameter specifies one or more word patterns to check in attachment names. The rule isn't applied if the name of any attachment matches the patterns you specify.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentNameMatchesPatterns parameter specifies an exception that looks for text patterns in the file name of message attachments by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentSizeOver
!!! Exchange Server 2010

The ExceptIfAttachmentSizeOver parameter specifies a byte-quantified size. Messages with attachments over the specified size are matched.



!!! Exchange Server 2013

The ExceptIfAttachmentSizeOver parameter specifies an attachment size. The rule isn't applied if the size of any of the attachments exceeds the specified size.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfBetweenMemberOf1
!!! Exchange Server 2010

The ExceptIfBetweenMemberOf1 parameter specifies a distribution group to detect communication between members of two distribution groups. You must use this parameter with the ExceptIfBetweenMemberOf2 parameter.



!!! Exchange Server 2013

The ExceptIfBetweenMemberOf1 parameter specifies a distribution group and must be used together with the ExceptIfBetweenMemberOf2 parameter. The rule isn't applied if the message is sent between members of the distribution groups specified in these parameters.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfBetweenMemberOf2
!!! Exchange Server 2010

The ExceptIfBetweenMemberOf2 parameter specifies a distribution group to detect communication between members of two distribution groups. You must use this parameter with the ExceptIfBetweenMemberOf1 parameter.



!!! Exchange Server 2013

The ExceptIfBetweenMemberOf2 parameter specifies a distribution group and must be used together with the ExceptIfBetweenMemberOf1 parameter. The rule isn't applied if the message is sent between members of the distribution groups specified in these parameters.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFrom
!!! Exchange Server 2010

The ExceptIfFrom parameter specifies one or more recipients. Messages sent by the specified recipient are matched.



!!! Exchange Server 2013

The ExceptIfFrom parameter specifies the sender. The rule isn't applied to messages received from this sender.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressContainsWords
!!! Exchange Server 2010

The ExceptIfFromAddressContainsWords parameter specifies one or more words. If the From address contains a specified word, the rule doesn't apply.



!!! Exchange Server 2013

The ExceptIfFromAddressContainsWords parameters specifies one or more words to check for in the From address. The rule isn't applied if the sender's address includes any of these words.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfFromAddressContainsWords parameter specifies an exception that looks for words in the sender's email address. You can specify multiple words separated by commas.

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressMatchesPatterns
!!! Exchange Server 2010

The ExceptIfFromAddressMatchesPatterns parameter specifies one or more regular expressions to match in the sender's address.



!!! Exchange Server 2013

The ExceptIfFromAddressMatchesPatterns parameter specifies one or more regular expressions to match in the sender's address. The rule isn't applied if the sender's address matches the pattern you specify.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfFromAddressMatchesPatterns parameter specifies an exception that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromMemberOf
!!! Exchange Server 2010

The ExceptIfFromMemberOf parameter specifies one or more distribution groups. Messages sent by members of the specified distribution group are matched.



!!! Exchange Server 2013

The ExceptIfFromMemberOf parameter specifies a distribution group. The rule isn't applied if the sender of the message is a member of this distribution group.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromScope
!!! Exchange Server 2010

The ExceptIfFromScope parameter specifies one of the following scopes:

- InOrganization

- NotInOrganization

For more information, see Transport Rule Predicates.



!!! Exchange Server 2013

The ExceptIfFromScope parameter specifies whether the sender is inside or outside your organization. Valid values for this parameter are:

- InOrganization

- NotInOrganization



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfFromScope parameter specifies an exception that looks for the location of message senders. Valid values are:

- InOrganization: The sender is a mailbox, mail user, group, or mail-enabled public folder in your organization or The sender's email address is in an accepted domain that's configured as an authoritative domain or an internal relay domain, and the message was sent or received over an authenticated connection.

- NotInOrganization: The sender's email address isn't in an accepted domain or the sender's email address is in an accepted domain that's configured as an external relay domain.



```yaml
Type: InOrganization | NotInOrganization
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasClassification
!!! Exchange Server 2010

The ExceptIfHasClassification parameter specifies a message classification to check the message for.



!!! Exchange Server 2013

The ExceptIfHasClassification parameter specifies a message classification. The rule isn't applied to messages that have the specified classification.

The message classification referred to in this parameter is the custom message classification that you can create in your organization. It isn't related to the DLP classification.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasNoClassification
!!! Exchange Server 2010

The ExceptIfHasNoClassification parameter specifies an exception for messages without a message classification.



!!! Exchange Server 2013

The ExceptIfHasNoClassification parameter specifies that the rule isn't applied to messages that don't have a message classification.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfHasNoClassification parameter specifies an exception that looks for messages with or without any message classifications. Valid values are:

- $true: Look for messages that don't have a message classification.

- $false: Look for messages that have one or more message classifications.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderContainsMessageHeader
!!! Exchange Server 2010

The ExceptIfHeaderContainsMessageHeader parameter specifies an SMTP header name. The specified header of a message is checked for the value specified in the ExceptIfHeaderContainsWords parameter.



!!! Exchange Server 2013

The ExceptIfHeaderContainsMessageHeader parameter specifies the SMTP message header to inspect for specific words or patterns. This parameter is used together with the ExceptIfHeaderContainsWords parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfHeaderContainsMessageHeader parameter specifies the name of header field in the message header when searching for the words specified by the ExceptIfHeaderContainsWords parameter.



```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderContainsWords
!!! Exchange Server 2010

The ExceptIfHeaderContainsWords parameter specifies one or more words. The header specified in the ExceptIfHeaderContainsMessageHeader parameter is inspected for the specified words.



!!! Exchange Server 2013

The ExceptIfHeaderContainsWords parameter specifies one or more words to look for in the message header specified in the ExceptIfHeaderContainsMessageHeader parameter. The rule isn't applied to messages where the header value of the specified header matches any of the words specified.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfHeaderContainsWords parameter specifies an exception that looks for words in a header field.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,.... Don't use leading or trailing spaces.

You specify the header field to search by using the ExceptIfHeaderContainsMessageHeader parameter.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderMatchesMessageHeader
!!! Exchange Server 2010

The ExceptIfHeaderMatchesMessageHeader parameter specifies a header name to check for a regular expression specified in the ExceptIfHeaderMatchesPatterns parameter.



!!! Exchange Server 2013

The ExceptIfHeaderMatchesMessageHeader parameter specifies an SMTP message header to inspect. This parameter is used together with the ExceptIfHeaderMatchesPatterns parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfHeaderMatchesMessageHeader parameter specifies the name of header field in the message header when searching for the text patterns specified by the ExceptIfHeaderMatchesPatterns parameter.



```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderMatchesPatterns
!!! Exchange Server 2010

The ExceptIfHeaderMatchesPatterns parameter specifies one or more regular expressions to match in the header value of the header specified in the ExceptIfHeaderMatchesHeader parameter.



!!! Exchange Server 2013

The ExceptIfHeaderMatchesPatterns parameter specifies a pattern to match in the header specified in the ExceptIfHeaderMatchesMessageHeader parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfHeaderMatchesPatterns parameter specifies an exception that looks for text patterns in a header field by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....

You specify the header field to search by using the ExceptIfHeaderMatchesMessageHeader parameter.



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfManagerAddresses
!!! Exchange Server 2010

The ExceptIfManagerAddresses parameter specifies one or more recipients. The manager attribute of the evaluated user (sender or recipient, as specified in the ExceptIfManagerForEvaluatedUser parameter) is matched with the specified recipients.



!!! Exchange Server 2013

The ExceptIfManagerAddresses parameter specifies a recipient. The rule isn't applied to messages where the specified recipient is the manager of the sender or the recipient. Whether it's the manager for the sender or the recipient is defined in the ExceptIfManagerForEvaluatedUser parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfManagerForEvaluatedUser
!!! Exchange Server 2010

The ExceptIfManagerForEvaluatedUser parameter specifies whether the sender or recipient's manager attribute should be matched with recipients specified in the ExceptIfManagerAddresses parameter.



!!! Exchange Server 2013

The ExceptIfManagerForEvaluatedUser parameter specifies whether the sender or the recipient's manager should be evaluated. The specified user's manager attribute is compared with users specified in the ExceptIfManagerAddresses parameter. Valid values include:

- Recipient

- Sender

Use this parameter together with the ExceptIfManagerAddresses parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMessageTypeMatches
!!! Exchange Server 2010

The ExceptIfMessageTypeMatches parameter specifies a message type. Valid values are listed in the MessageTypeMatches parameter.



!!! Exchange Server 2013

The ExceptIfMessageTypeMatches parameter specifies a message type. The rule isn't applied to any messages that match the message type you specify. Valid values include:

- OOF Auto-reply messages configured by the user

- AutoForward Messages automatically forwarded to an alternative recipient

- Encrypted Encrypted messages

- Calendaring Meeting requests and responses

- PermissionControlled Messages that have specific permissions configured

- Voicemail Voice mail messages forwarded by Unified Messaging service

- Signed Digitally signed messages

- ApprovalRequest Moderation request messages sent to moderators

- ReadReceipt Read receipts



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientADAttributeContainsWords
!!! Exchange Server 2010

The ExceptIfRecipientADAttributeContainsWords parameter specifies one or more words to match in the specified Active Directory attribute of any recipient.



!!! Exchange Server 2013

The ExceptIfRecipientADAttributeContainsWords parameter specifies one or more words to check for in specific Active Directory attributes of the recipient. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

You can check against any of the following Active Directory attributes:

- DisplayName

- FirstName

- Initials

- LastName

- Office

- PhoneNumber

- OtherPhoneNumber

- Email

- Street

- POBox

- City

- State

- ZipCode

- Country

- UserLogonName

- HomePhoneNumber

- OtherHomePhoneNumber

- PagerNumber

- MobileNumber

- FaxNumber

- OtherFaxNumber

- Notes

- Title

- Department

- Company

- Manager

- CustomAttribute1 - CustomAttribute15

To specify a value for an Active Directory attribute, use the name of the Active Directory attribute followed by a colon and the words. For example, to look for the word Sales in the Department attribute, set this parameter to Department:Sales. If you want to specify multiple values for multiple attributes, separate them with commas. The rule isn't applied if any of the specified attributes have the value specified.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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

This parameter uses the syntax: "AttributeName:Word". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Word1,Phrase with spaces,word2...","AttributeName2:Word3,Phrase with spaces,word4.... Don't use words with leading or trailing spaces.

For example, "City:San Francisco,Palo Alto" or "City:San Francisco,Palo Alto","Department:Sales,Finance".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientADAttributeMatchesPatterns
!!! Exchange Server 2010

The ExceptIfRecipientADAttributeMatchesPatterns parameter specifies one or more text patterns to match in the recipient's Active Directory attribute. You must use this parameter with the ExceptIfADComparisonAttribute parameter to specify the attribute.



!!! Exchange Server 2013

The ExceptIfRecipientADAttributeMatchesPatterns parameter specifies one or more patterns to check for in the specified Active Directory attribute of the recipient. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

You can check against any of the following Active Directory attributes:

- DisplayName

- FirstName

- Initials

- LastName

- Office

- PhoneNumber

- OtherPhoneNumber

- Email

- Street

- POBox

- City

- State

- ZipCode

- Country

- UserLogonName

- HomePhoneNumber

- OtherHomePhoneNumber

- PagerNumber

- MobileNumber

- FaxNumber

- OtherFaxNumber

- Notes

- Title

- Department

- Company

- Manager

- CustomAttribute1 - CustomAttribute15

To specify a value for an Active Directory attribute, use the name of the Active Directory attribute followed by a colon and the pattern. If you want to specify multiple patterns for multiple attributes, separate them with commas. The rule isn't applied if the values of any of the specified attributes match the specified patterns for that attribute.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientAddressContainsWords
!!! Exchange Server 2010

The ExceptIfRecipientAddressContainsWords specifies one or more words to be matched in a recipient address.



!!! Exchange Server 2013

The ExceptIfRecipientAddressContainsWords parameter specifies words to check for in the recipient address. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfRecipientAddressContainsWords parameter specifies an exception that looks for words in recipient email addresses. You can specify multiple words separated by commas. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientAddressMatchesPatterns
!!! Exchange Server 2010

The ExceptIfRecipientAddressMatchesPatterns parameter specifies one or more text patterns to match in the recipient address.



!!! Exchange Server 2013

The ExceptIfRecipientAddressMatchesPatterns parameter specifies one or more text patterns to match in the recipient address. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfRecipientAddressMatchesPatterns parameter specifies an exception that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....

This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientInSenderList
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The ExceptIfRecipientInSenderList parameter specifies an exception when a recipient is defined in a supervision list entry on the sender's mailbox. Supervision list entries perform the following functions:

- They specify individual exceptions for the user in the closed campus supervision policy.

- They identify the user as a victim in the anti-bullying policy.

To view the supervision list entries that are configured on a user's mailbox, run the Get-SupervisionListEntry command and specify the user's mailbox.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The ExceptIfRecipientInSenderList parameter specifies an exception when a recipient is defined in a supervision list entry on the sender's mailbox. Supervision list entries perform the following functions:

- They specify individual exceptions for the user in the closed campus supervision policy.

- They identify the user as a victim in the anti-bullying policy.

To view the supervision list entries that are configured on a user's mailbox, run the Get-SupervisionListEntry command and specify the user's mailbox.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSCLOver
!!! Exchange Server 2010

The ExceptIfSCLOver parameter specifies a spam confidence level (SCL) value. The parameter matches messages with an SCL that's equal to or greater than the specified value. Valid values include a single integer from 0 through 9, or -1.



!!! Exchange Server 2013

The ExceptIfSCLOver parameter specifies a spam confidence level (SCL) value. The rule isn't applied to messages with an SCL equal to or higher than the value specified. Valid SCL values are integers from 0 through 9, and -1. The value -1 specifies that the message is from a trusted source.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderADAttributeContainsWords
!!! Exchange Server 2010

The ExceptIfSenderADAttributeContainsWords parameter specifies one or more words to match in the specified Active Directory attribute of the sender.



!!! Exchange Server 2013

The ExceptIfSenderADAttributeContainsWords parameter specifies one or more words to check for in specific Active Directory attributes of the sender. You can check against any of the following Active Directory attributes:

- DisplayName

- FirstName

- Initials

- LastName

- Office

- PhoneNumber

- OtherPhoneNumber

- Email

- Street

- POBox

- City

- State

- ZipCode

- Country

- UserLogonName

- HomePhoneNumber

- OtherHomePhoneNumber

- PagerNumber

- MobileNumber

- FaxNumber

- OtherFaxNumber

- Notes

- Title

- Department

- Company

- Manager

- CustomAttribute1 - CustomAttribute15

To specify a value for an Active Directory attribute, use the name of the Active Directory attribute followed by a colon and the words. For example, to look for the word Sales in the Department attribute, set this parameter to Department:Sales. If you want to specify multiple values for multiple attributes, separate them with commas. The rule isn't applied if any of the specified attributes have the value specified.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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

This parameter uses the syntax: "AttributeName:Word". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Word1,Phrase with spaces,word2...","AttributeName2:Word3,Phrase with spaces,word4.... Don't use words with leading or trailing spaces.

For example, "City:San Francisco,Palo Alto" or "City:San Francisco,Palo Alto","Department:Sales,Finance".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderADAttributeMatchesPatterns
!!! Exchange Server 2010

The ExceptIfSenderADAttributeMatchesPatterns parameter specifies one or more text patterns to match in the specified Active Directory attribute of the sender.



!!! Exchange Server 2013

The ExceptIfSenderADAttributeMatchesPatterns parameter specifies one or more patterns to check for in the specified Active Directory attribute of the sender. You can check against any of the following Active Directory attributes:

- DisplayName

- FirstName

- Initials

- LastName

- Office

- PhoneNumber

- OtherPhoneNumber

- Email

- Street

- POBox

- City

- State

- ZipCode

- Country

- UserLogonName

- HomePhoneNumber

- OtherHomePhoneNumber

- PagerNumber

- MobileNumber

- FaxNumber

- OtherFaxNumber

- Notes

- Title

- Department

- Company

- Manager

- CustomAttribute1 - CustomAttribute15

To specify a value for an Active Directory attribute, use the name of the Active Directory attribute followed by a colon and the pattern. If you want to specify multiple patterns for multiple attributes, separate them with commas. The rule isn't applied if the values of any of the specified attributes match the specified patterns for that attribute.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderInRecipientList
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The ExceptIfSenderInRecipientList parameter specifies an exception when the sender is defined in a supervision list entry on a recipient's mailbox. Supervision list entries perform the following functions:

- They specify individual exceptions for the user in the closed campus supervision policy.

- They identify the user as a victim in the anti-bullying policy.

To view the supervision list entries that are configured on a user's mailbox, run the Get-SupervisionListEntry command and specify the user's mailbox.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The ExceptIfSenderInRecipientList parameter specifies an exception when the sender is defined in a supervision list entry on a recipient's mailbox. Supervision list entries perform the following functions:

- They specify individual exceptions for the user in the closed campus supervision policy.

- They identify the user as a victim in the anti-bullying policy.

To view the supervision list entries that are configured on a user's mailbox, run the Get-SupervisionListEntry command and specify the user's mailbox.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderManagementRelationship
!!! Exchange Server 2010

The ExceptIfSenderManagementRelationship parameter specifies the relationship to check for between the sender and the recipients. You can use the following values:

- Manager

- DirectReport



!!! Exchange Server 2013

The ExceptIfSenderManagementRelationship parameter specifies a relationship between the sender and the recipient. Valid values are:

- Manager The rule isn't applied if the sender is the manager of the recipient.

- DirectReport The rule isn't applied if the sender is a direct report of the recipient.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfSenderManagementRelationship parameter specifies an exception that looks for the relationship between the sender and recipients in messages. Valid values are:

- Manager: The sender is the manager of a recipient.

- DirectReport: A recipient is the manager of the sender.



```yaml
Type: Manager | DirectReport
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentTo
!!! Exchange Server 2010

The ExceptIfSentTo parameter specifies a recipient identity.



!!! Exchange Server 2013

The ExceptIfSentTo parameter specifies a recipient. The rule isn't applied to messages sent to the specified recipient.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentToMemberOf
!!! Exchange Server 2010

The ExceptIfSentToMemberOf parameter specifies a distribution group address.



!!! Exchange Server 2013

The ExceptIfSentToMemberOf parameter specifies a distribution group. The rule isn't applied to messages where any recipient is a member of the specified group.

If the distribution group is removed after creation of the rule, no exception is made.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentToScope
!!! Exchange Server 2010

The ExceptIfSentToScope parameter specifies a message scope. Valid values include one of the following:

- InOrganization

- NotInOrganization

- ExternalPartner

- ExternalNonPartner



!!! Exchange Server 2013

The ExceptIfSentToScope parameter specifies whether the message is sent to internal, external, or partner recipients. Valid values are:

- InOrganization The recipients are internal to your organization.

- NotInOrganization The recipients are outside your organization.

- ExternalPartner The recipients are in a partner organization.

- ExternalNonPartner The recipients are external to your organization which isn't a partner organization.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectContainsWords
!!! Exchange Server 2010

The ExceptIfSubjectContainsWords parameter specifies one or more words to check for in the message subject.



!!! Exchange Server 2013

The ExceptIfSubjectContainsWords parameter specifies words to look for in the message subject.

You can specify one or more words or phrases. When specifying more than one word or phrase, each word or phrase should be separated by a comma (,). When specifying a phrase that contains one or more spaces, you must enclose the phrase in quotation marks ("), for example:

Word1,"Phrase with spaces",word2.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfSubjectContainsWords parameter specifies an exception that looks for words in the Subject field of messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,.... Don't use leading or trailing spaces.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectMatchesPatterns
!!! Exchange Server 2010

The ExceptIfSubjectMatchesPatterns parameter specifies one or more regular expressions to match in the message subject.



!!! Exchange Server 2013

The ExceptIfSubjectMatchesPatterns parameter specifies text patterns to check the message subject for.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfSubjectMatchesPatterns parameter specifies an exception that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectOrBodyContainsWords
!!! Exchange Server 2010

The ExceptIfSubjectOrBodyContainsWords parameter specifies one or more words to check for in the message subject or body.



!!! Exchange Server 2013

The ExceptIfSubjectOrBodyContainsWords parameter specifies words to look for in the message subject and body. The rule isn't applied if any of the words or phrases specified is found in the message subject or body.

You can specify one or more words or phrases. When specifying more than one word or phrase, each word or phrase should be separated by a comma (,). When specifying a phrase with one or more spaces, you must enclose the phrase in quotation marks ("), for example:

Word1,"Phrase with spaces",word2.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfSubjectOrBodyContainsWords parameter specifies an exception that looks for words in the Subject field or body of messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,.... Don't use leading or trailing spaces.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectOrBodyMatchesPatterns
!!! Exchange Server 2010

The ExceptIfSubjectOrBodyMatchesPatterns parameter specifies one or more regular expressions to match in the message subject or the message body.



!!! Exchange Server 2013

The ExceptIfSubjectOrBodyMatchesPatterns parameter specifies text patterns to look for in the message subject and body. The rule isn't applied if the word specified is found in the message subject or body.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is available on Mailbox servers and Edge Transport servers.

The ExceptIfSubjectOrBodyMatchesPatterns parameter specifies an exception that looks for text patterns in the Subject field or body of messages. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfWithImportance
!!! Exchange Server 2010

The ExceptIfWithImportance parameter specifies message importance. Valid values include the following:

- High

- Low

- Normal



!!! Exchange Server 2013

The ExceptIfWithImportance parameter specifies message importance. The rule isn't applied to messages matching the specified importance. Valid values are:

- High

- Low

- Normal



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From
!!! Exchange Server 2010

The From parameter specifies a sender. The rule is applied to messages received from the sender.



!!! Exchange Server 2013

The From parameter specifies the sender. The rule is applied to messages received from this sender.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressContainsWords
!!! Exchange Server 2010

The FromAddressContainsWords parameters specifies one or more words to check for in the From address.



!!! Exchange Server 2013

The FromAddressContainsWords parameter specifies one or more words to check for in the From address. The rule is applied if the sender's address includes any of these words.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The FromAddressContainsWords parameter specifies a condition that looks for words in the sender's email address. You can specify multiple words separated by commas.

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressMatchesPatterns
!!! Exchange Server 2010

The FromAddressMatchesPatterns parameter specifies a pattern to match the From address with.



!!! Exchange Server 2013

The FromAddressMatchesPatterns parameter specifies one or more regular expressions to match in the sender's address. The rule is applied if the sender's address matches the pattern you specify.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The FromAddressMatchesPatterns parameter specifies a condition that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromMemberOf
!!! Exchange Server 2010

The FromMemberOf parameter specifies a distribution group. The rule is applied to messages sent by members of the specified distribution group.



!!! Exchange Server 2013

The FromMemberOf parameter specifies a distribution group. The rule is applied if the sender of the message is a member of this distribution group.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromScope
!!! Exchange Server 2010

The FromScope parameter specifies a message scope to include. Valid values include the following:

- InOrganization

- NotInOrganization



!!! Exchange Server 2013

The FromScope parameter specifies whether the sender is inside or outside your organization. Valid values for this parameter are:

- InOrganization

- NotInOrganization

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The FromScope parameter specifies a condition that looks for the location of message senders. Valid values are:

- InOrganization: The sender is a mailbox, mail user, group, or mail-enabled public folder in your organization or The sender's email address is in an accepted domain that's configured as an authoritative domain or an internal relay domain, and the message was sent or received over an authenticated connection.

- NotInOrganization: The sender's email address isn't in an accepted domain or the sender's email address is in an accepted domain that's configured as an external relay domain.



```yaml
Type: InOrganization | NotInOrganization
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasClassification
!!! Exchange Server 2010

The HasClassification parameter specifies a message classification. The rule is applied to messages with the specified classification.



!!! Exchange Server 2013

The HasClassification parameter specifies a message classification. The rule is applied to messages that have the specified classification.

The message classification referred to in this parameter is the custom message classification that you can create in your organization. It isn't related to the DLP classification.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasNoClassification
!!! Exchange Server 2010

The HasNoClassification parameter specifies that the rule be applied to messages which don't have a message classification. The value should be set to $true.



!!! Exchange Server 2013

The HasNoClassification parameter specifies whether the rule is applied to messages that don't have a message classification.

If you set this parameter to $true, the rule is applied to all messages that don't have a message classification.

If you set this parameter to $false, the rule is applied to all messages that have one or more message classifications.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The HasNoClassification parameter specifies a condition that looks for messages with or without any message classifications. Valid values are:

- $true: Look for messages that don't have a message classification.

- $false: Look for messages that have one or more message classifications.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderContainsMessageHeader
!!! Exchange Server 2010

The HeaderContainsMessageHeader parameter specifies the SMTP message header to inspect.



!!! Exchange Server 2013

The HeaderContainsMessageHeader parameter specifies the SMTP message header to inspect for specific words or patterns. This parameter is used together with the HeaderContainsWords parameter.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The HeaderContainsMessageHeader parameter specifies the name of header field in the message header when searching for the words specified by the HeaderContainsWords parameter.



```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderContainsWords
!!! Exchange Server 2010

The HeaderContainsWords parameter specifies a word to check the header specified in the HeaderContainsMessageHeader parameter for. The rule is applied to messages where the header value of the specified header matches the words specified.



!!! Exchange Server 2013

The HeaderContainsWords parameter specifies one or more words to look for in the message header specified in the HeaderContainsMessageHeader parameter. The rule is applied to messages where the header value of the specified header matches any of the words specified.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The HeaderContainsWords parameter specifies a condition that looks for words in a header field.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,.... Don't use leading or trailing spaces.

You specify the header field to search by using the HeaderContainsMessageHeader parameter.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderMatchesMessageHeader
!!! Exchange Server 2010

The HeaderMatchesMessageHeader parameter specifies an SMTP message header to inspect. Use this parameter with the HeaderMatchesPatterns parameter.



!!! Exchange Server 2013

The HeaderMatchesMessageHeader parameter specifies an SMTP message header to inspect. This parameter is used together with the HeaderMatchesPatterns parameter.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The HeaderMatchesMessageHeader parameter specifies the name of header field in the message header when searching for the text patterns specified by the HeaderMatchesPatterns parameter.



```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderMatchesPatterns
!!! Exchange Server 2010

The HeaderMatchesPatterns parameter specifies a pattern to match in the header specified by the HeaderMatchesMessageHeader parameter.



!!! Exchange Server 2013

The HeaderMatchesPatterns parameter specifies a pattern to match in the header specified in the HeaderMatchesMessageHeader parameter.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The HeaderMatchesPatterns parameter specifies a condition that looks for text patterns in a header field by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....

You specify the header field to search by using the HeaderMatchesMessageHeader parameter.



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogEventText
!!! Exchange Server 2010

The LogEventText parameter specifies a message string to add to the event log entry created by the log event action. This action is only available on Edge Transport servers.



!!! Exchange Server 2013

The LogEventText parameter specifies a message string to add to the event log entry for this rule.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagerAddresses
!!! Exchange Server 2010

The ManagerAddresses parameter specifies a recipient. The rule is applied to messages where the specified recipient is the manager of the sender or the recipient (as specified in the ManagerForEvaluatedUser parameter).



!!! Exchange Server 2013

The ManagerAddresses parameter specifies a recipient. The rule is applied to messages where the specified recipient is the manager of the sender or the recipient. Whether it's the manager for the sender or the recipient is defined in the ManagerForEvaluatedUser parameter.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagerForEvaluatedUser
!!! Exchange Server 2010

The ManagerForEvaluatedUser parameter specifies whether the sender or the recipient's manager should be evaluated. The specified user's manager attribute is compared with users specified in the ManagerAddresses parameter. Valid values include:

- Recipient

- Sender

Use this parameter with the ManagerAddresses parameter.



!!! Exchange Server 2013

The ManagerForEvaluatedUser parameter specifies whether the sender or the recipient's manager should be evaluated. The specified user's manager attribute is compared with users specified in the ManagerAddresses parameter. Valid values include:

- Recipient

- Sender

Use this parameter together with the ManagerAddresses parameter.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTypeMatches
!!! Exchange Server 2010

The MessageTypeMatches parameter specifies a message type. Valid values include:

- OOF

- AutoForward

- Encrypted

- Calendaring

- PermissionControlled

- Voicemail

- Signed

- ApprovalRequest

- ReadReceipt



!!! Exchange Server 2013

The MessageTypeMatches parameter specifies a message type. The rule is applied to all messages that match the message type you specify. Valid values include:

- OOF Auto-reply messages configured by the user

- AutoForward Messages automatically forwarded to an alternative recipient

- Encrypted Encrypted messages

- Calendaring Meeting requests and responses

- PermissionControlled Messages that have specific permissions configured

- Voicemail Voice mail messages forwarded by Unified Messaging service

- Signed Digitally signed messages

- ApprovalRequest Moderation request messages sent to moderators

- ReadReceipt Read receipts

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerateMessageByManager
!!! Exchange Server 2010

The ModerateMessageByManager parameter specifies whether the message should be forwarded to the sender's manager for moderation. The default is $false. To enable moderation by the sender's manager, set the value to $true.



!!! Exchange Server 2013

The ModerateMessageByManager parameter specifies whether the message should be forwarded to the sender's manager for approval. To enable moderation by the sender's manager, set the value to $true.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerateMessageByUser
!!! Exchange Server 2010

The ModerateMessageByUser parameter specifies a recipient to forward the message to for moderation.



!!! Exchange Server 2013

The ModerateMessageByUser parameter specifies a recipient to forward the message to for approval.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2010, Exchange Server 2013

The Name parameter specifies the display name of the transport rule to be created. The length of the name can't exceed 64 characters.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Name parameter specifies the display name of the transport rule to be created. The length of the name canThe Name parameter specifies the unique name of the rule. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrependSubject
!!! Exchange Server 2010

The PrependSubject parameter specifies a string to add as a prefix to the message subject.

No spaces or other characters are added automatically before the original subject. The message prefix added by the rules agent is exactly as entered in this parameter. Consider ending the prefix string with a colon (:) and a space, or at least a space, to separate it from the original subject.



!!! Exchange Server 2013

The PrependSubject parameter specifies a word or phrase to add to the beginning of the message subject.

The rule will add the text as you specify in this parameter without adding spaces or other characters to separate it from the original subject. Consider ending the value you specify in this parameter with a colon (:) and a space, or at least a space, to separate it from the original subject.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The PrependSubject parameter specifies an action that adds text to add to the beginning of the Subject field of messages. The value for this parameter is the text that you want to add. If the text contains spaces, enclose the value in quotation marks (")\>

Consider ending the value for this parameter with a colon (:) and a space, or at least a space, to separate it from the original subject.



```yaml
Type: SubjectPrefix
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
!!! Exchange Server 2010

The Priority parameter specifies the order in which the transport rules are applied. Rules with a lower priority value are processed first. If you modify the priority of the rule, the position of the rule in the rule list changes to match the priority that you specified, and the Transport Rules agent increments all rules with a higher priority value. The value of this parameter must be greater than or equal to 0, and not exceed n-1, where n is the total number of transport rules in the Exchange organization, or in the case of an Edge Transport server, the total number of rules on the server.



!!! Exchange Server 2013

The Priority parameter specifies the priority for this transport rule. Rules with a lower priority value are processed first. If you modify the priority of the rule, the position of the rule in the rule list changes to match the priority that you specified, and the Transport Rules agent increments all rules with a higher priority value. The value of this parameter must be greater than or equal to 0, and must be one less than the total number of transport rules in your organization. For example, if you configured 8 transport rules, you can set this parameter to any value from 0 through 7.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Quarantine
!!! Exchange Server 2010

The Quarantine parameter specifies whether the rules agent delivers the message to the quarantine mailbox specified in the Content Filtering configuration. This action is only available on Edge Transport servers.



!!! Exchange Server 2013

The Quarantine parameter specifies whether the rules agent delivers the message to the quarantine mailbox specified in the Content Filtering configuration.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Edge Transport servers.

The Quarantine parameter specifies an action that quarantines messages.

- In on-premises Exchange, messages are delivered to the quarantine mailbox that you've configured as part of Content filtering. If the quarantine mailbox isn't configured, the message is returned to the sender in an NDR.

- In Office 365, messages are delivered to the hosted quarantine.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientADAttributeContainsWords
!!! Exchange Server 2010

The RecipientADAttributeContainsWords parameter specifies one or more words to check for in the specified Active Directory attribute of the recipient.



!!! Exchange Server 2013

The RecipientADAttributeContainsWords parameter specifies one or more words to check for in specific Active Directory attributes of the recipient. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

You can check against any of the following Active Directory attributes:

- DisplayName

- FirstName

- Initials

- LastName

- Office

- PhoneNumber

- OtherPhoneNumber

- Email

- Street

- POBox

- City

- State

- ZipCode

- Country

- UserLogonName

- HomePhoneNumber

- OtherHomePhoneNumber

- PagerNumber

- MobileNumber

- FaxNumber

- OtherFaxNumber

- Notes

- Title

- Department

- Company

- Manager

- CustomAttribute1 - CustomAttribute15

To specify a value for an Active Directory attribute, use the name of the Active Directory attribute followed by a colon and the words. For example, to look for the word Sales in the Department attribute, set this parameter to Department:Sales. If you want to specify multiple values for multiple attributes, separate them with commas. The rule will be applied if any of the specified attributes have the value specified.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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

This parameter uses the syntax: "AttributeName:Word". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Word1,Phrase with spaces,word2...","AttributeName2:Word3,Phrase with spaces,word4.... Don't use words with leading or trailing spaces.

For example, "City:San Francisco,Palo Alto" or "City:San Francisco,Palo Alto","Department:Sales,Finance".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientADAttributeMatchesPatterns
!!! Exchange Server 2010

The RecipientADAttributeMatchesPatterns parameter specifies one or more patterns to match the value of the specified Active Directory attribute of the recipient with.



!!! Exchange Server 2013

The RecipientADAttributeMatchesPatterns parameter specifies one or more patterns to check for in the specified Active Directory attribute of the recipient. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

You can check against any of the following Active Directory attributes:

- DisplayName

- FirstName

- Initials

- LastName

- Office

- PhoneNumber

- OtherPhoneNumber

- Email

- Street

- POBox

- City

- State

- ZipCode

- Country

- UserLogonName

- HomePhoneNumber

- OtherHomePhoneNumber

- PagerNumber

- MobileNumber

- FaxNumber

- OtherFaxNumber

- Notes

- Title

- Department

- Company

- Manager

- CustomAttribute1 - CustomAttribute15

To specify a value for an Active Directory attribute, use the name of the Active Directory attribute followed by a colon and the pattern. If you want to specify multiple patterns for multiple attributes, separate them with commas. The rule will be applied if the values of any of the specified attributes match the specified patterns for that attribute.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddressContainsWords
!!! Exchange Server 2010

The RecipientAddressContainsWords parameter specifies words to check for in the recipient address.



!!! Exchange Server 2013

The RecipientAddressContainsWords parameter specifies one or more words to check for in the recipient's email address. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The RecipientAddressContainsWords parameter specifies a condition that looks for words in recipient email addresses. You can specify multiple words separated by commas. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddressMatchesPatterns
!!! Exchange Server 2010

The RecipientAddressMatchesPatterns specifies a pattern to check the recipient address for.



!!! Exchange Server 2013

The RecipientAddressMatchesPatterns parameter specifies a pattern to check the recipient address for. This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The RecipientAddressMatchesPatterns parameter specifies a condition that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....

This parameter works when the recipient is an individual user. This parameter doesn't work with distribution groups.



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientInSenderList
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The RecipientInSenderList parameter specifies the condition when a recipient is defined in a supervision list entry on the sender's mailbox. Supervision list entries perform the following functions:

- They specify individual exceptions for the user in the closed campus supervision policy.

- They identify the user as a victim in the anti-bullying policy.

To view the supervision list entries that are configured on a user's mailbox, run the Get-SupervisionListEntry command and specify the user's mailbox.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The RecipientInSenderList parameter specifies the condition when a recipient is defined in a supervision list entry on the sender's mailbox. Supervision list entries perform the following functions:

- They specify individual exceptions for the user in the closed campus supervision policy.

- They identify the user as a victim in the anti-bullying policy.

To view the supervision list entries that are configured on a user's mailbox, run the Get-SupervisionListEntry command and specify the user's mailbox.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RedirectMessageTo
!!! Exchange Server 2010

The RedirectMessageTo parameter specifies that the message be redirected to the recipient specified as the value for this parameter.



!!! Exchange Server 2013

The RedirectMessageTo parameter specifies that the rule redirects the message to the specified recipient.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessageEnhancedStatusCode
!!! Exchange Server 2010

The RejectMessageEnhancedStatusCode parameter specifies an enhanced status code provided when rejecting messages. Valid values include 5.7.1 or between 5.7.1 and 5.7.999.

The transport rule can add a custom rejection message. To further customize the delivery status notification (DSN), you need to create a custom DSN message using the New-SystemMessage cmdlet. For more information, see Associate a DSN Message with a Transport Rule.

If an enhanced status code isn't specified, and only the RejectMessageReasonText parameter is used, the enhanced status code 5.7.1 is used.



!!! Exchange Server 2013

The RejectMessageEnhancedStatusCode parameter specifies an enhanced status code to provide when rejecting messages. Valid values are 5.7.1 or between 5.7.10 and 5.7.999.

The transport rule can add a custom rejection message. To further customize the delivery status notification (DSN), you need to create a custom DSN message using the New-SystemMessage cmdlet.

If an enhanced status code isn't specified, and only the RejectMessageReasonText parameter is used, the enhanced status code 5.7.1 is used.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The RejectMessageEnhancedStatusCode parameter specifies the enhanced status code that's used when the rule rejects messages. Valid values are 5.7.1 or between 5.7.900 and 5.7.999.

You can use this parameter with the NotifySender and RejectMessageReasonText parameters to specify the custom enhanced status code that's used. If you don't use this parameter, the default value 5.7.1 is used.

To further customize the NDR (for example, multiple languages), you need to create a custom message by using the New-SystemMessage cmdlet.



```yaml
Type: RejectEnhancedStatus
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessageReasonText
!!! Exchange Server 2010

The RejectMessageReasonText parameter specifies the rejection message provided upon message rejection.

The transport rule can add a custom rejection message. To further customize the DSN, you need to create a custom DSN message using the New-SystemMessage cmdlet. For more information, see Associate a DSN Message with a Transport Rule.

If a RejectMessageReasonText parameter value isn't specified, and an enhanced status code is specified by using the RejectMessageEnchancedStatusCode parameter, the default reason text "Delivery not authorized, message refused" is used.



!!! Exchange Server 2013

The RejectMessageReasonText parameter specifies a reason that explains why the message was rejected.

The transport rule can add a custom rejection message. To further customize the DSN, you need to create a custom DSN message using the New-SystemMessage cmdlet.

If a RejectMessageReasonText parameter value isn't specified, and an enhanced status code is specified by using the RejectMessageEnhancedStatusCode parameter, the default reason text "Delivery not authorized, message refused" is used.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The RejectMessageReasonText parameter specifies the explanation text that's used when the rule rejects messages. If the value contains spaces, enclose the value in quotation marks (").

You can use this parameter with the NotifySender and RejectMessageEnhancedStatusCode parameters to specify the custom explanation text that's used. If you don't use this parameter, the default value Delivery not authorized, message refused is used.

To further customize the NDR (for example, multiple languages), you need to create a custom message by using the New-SystemMessage cmdlet.



```yaml
Type: RejectText
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveHeader
!!! Exchange Server 2010

The RemoveHeader parameter specifies an SMTP header name to be removed from the message.



!!! Exchange Server 2013

The RemoveHeader parameter specifies an SMTP header name to be removed from the message.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The RemoveHeader parameter specifies an action that removes a header field from the message header. The value of this parameter specifies the name of the header field to remove.



```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLOver
!!! Exchange Server 2010

The SCLOver parameter specifies an SCL value. The rule is applied to messages with an SCL equal to or higher than the value specified. Valid SCL values are an integer from 0 through 9, and -1.



!!! Exchange Server 2013

The SCLOver parameter specifies an SCL value. The rule is applied to messages with an SCL equal to or higher than the value specified. Valid SCL values are integers from 0 through 9, and -1. The value -1 specifies that the message is from a trusted source.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderADAttributeContainsWords
!!! Exchange Server 2010

The SenderADAttributeContainsWords parameter specifies one or more words to match the sender's specified Active Directory attribute with.



!!! Exchange Server 2013

The SenderADAttributeContainsWords parameter specifies one or more words to check for in specific Active Directory attributes of the sender. You can check against any of the following Active Directory attributes:

- DisplayName

- FirstName

- Initials

- LastName

- Office

- PhoneNumber

- OtherPhoneNumber

- Email

- Street

- POBox

- City

- State

- ZipCode

- Country

- UserLogonName

- HomePhoneNumber

- OtherHomePhoneNumber

- PagerNumber

- MobileNumber

- FaxNumber

- OtherFaxNumber

- Notes

- Title

- Department

- Company

- Manager

- CustomAttribute1 - CustomAttribute15

To specify a value for an Active Directory attribute, use the name of the Active Directory attribute followed by a colon and the words. For example, to look for the word Sales in the Department attribute, set this parameter to Department:Sales. If you want to specify multiple values for multiple attributes, separate them with commas. The rule will be applied if any of the specified attributes have the value specified.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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

This parameter uses the syntax: "AttributeName:Word". To specify multiple attributes, or multiple words for the same attribute, use the following syntax: "AttributeName1:Word1,Phrase with spaces,word2...","AttributeName2:Word3,Phrase with spaces,word4.... Don't use words with leading or trailing spaces.

For example, "City:San Francisco,Palo Alto" or "City:San Francisco,Palo Alto","Department:Sales,Finance".

When you specify multiple attributes, or multiple values for the same attribute, the or operator is used.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderADAttributeMatchesPatterns
!!! Exchange Server 2010

The SenderADAttributeMatchesPatterns parameter specifies one or more patterns to match the sender's specified Active Directory attribute with.



!!! Exchange Server 2013

The SenderADAttributeMatchesPatterns parameter specifies one or more patterns to check for in the specified Active Directory attribute of the sender. You can check against any of the following Active Directory attributes:

- DisplayName

- FirstName

- Initials

- LastName

- Office

- PhoneNumber

- OtherPhoneNumber

- Email

- Street

- POBox

- City

- State

- ZipCode

- Country

- UserLogonName

- HomePhoneNumber

- OtherHomePhoneNumber

- PagerNumber

- MobileNumber

- FaxNumber

- OtherFaxNumber

- Notes

- Title

- Department

- Company

- Manager

- CustomAttribute1 - CustomAttribute15

To specify a value for an Active Directory attribute, use the name of the Active Directory attribute followed by a colon and the pattern. If you want to specify multiple patterns for multiple attributes, separate them with commas. The rule will be applied if the values of any of the specified attributes match the specified patterns for that attribute.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderInRecipientList
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The SenderInRecipientList parameter specifies the condition when the sender is defined in a supervision list entry on a recipient's mailbox. Supervision list entries perform the following functions:

- They specify individual exceptions for the user in the closed campus supervision policy.

- They identify the user as a victim in the anti-bullying policy.

To view the supervision list entries that are configured on a user's mailbox, run the Get-SupervisionListEntry command and specify the user's mailbox.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The SenderInRecipientList parameter specifies the condition when the sender is defined in a supervision list entry on a recipient's mailbox. Supervision list entries perform the following functions:

- They specify individual exceptions for the user in the closed campus supervision policy.

- They identify the user as a victim in the anti-bullying policy.

To view the supervision list entries that are configured on a user's mailbox, run the Get-SupervisionListEntry command and specify the user's mailbox.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderManagementRelationship
!!! Exchange Server 2010

The SenderManagementRelationship parameter specifies a relationship between the sender and the recipient. Valid values include:

- Manager

- DirectReport



!!! Exchange Server 2013

The SenderManagementRelationship parameter specifies a relationship between the sender and the recipient. Valid values are:

- Manager The rule is applied if the sender is the manager of the recipient.

- DirectReport The rule is applied if the sender is a direct report of the recipient.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The SenderManagementRelationship parameter specifies a condition that looks for the relationship between the sender and recipients in messages. Valid values are:

- Manager: The sender is the manager of a recipient.

- DirectReport: A recipient is the manager of the sender.



```yaml
Type: Manager | DirectReport
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo
!!! Exchange Server 2010

The SentTo parameter specifies a recipient. The rule is applied to messages matching the specified recipient.



!!! Exchange Server 2013

The SentTo parameter specifies a recipient. The rule is applied to messages sent to the specified recipient.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToMemberOf
!!! Exchange Server 2010

The SentToMemberOf parameter specifies a distribution group. The rule is applied to messages where any recipient is a member of the specified group.

If the specified recipient isn't a distribution group, including conditions where the distribution group may have been removed after creation of the rule, no action is taken.



!!! Exchange Server 2013

The SentToMemberOf parameter specifies a distribution group. The rule is applied to messages where any recipient is a member of the specified group.

If the distribution group is removed after creation of the rule, no action is taken.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToScope
!!! Exchange Server 2010

The SentToScope parameter specifies a message scope. Valid values include:

- InOrganization

- NotInOrganization

- ExternalPartner

- ExternalNonPartner

For more information, see Transport Rule Predicates.



!!! Exchange Server 2013

The SentToScope parameter specifies whether the message is sent to internal, external, or partner recipients. Valid values are:

- InOrganization The recipients are internal to your organization.

- NotInOrganization The recipients are outside your organization.

- ExternalPartner The recipients are in a partner organization.

- ExternalNonPartner The recipients are external to your organization, which isn't a partner organization.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The SentToScope parameter specifies a condition that looks for the location of recipients. Valid values are:

- InOrganization: The recipient is a mailbox, mail user, group, or mail-enabled public folder in your organization or the recipient's email address is in an accepted domain that's configured as an authoritative domain or an internal relay domain, and the message was sent or received over an authenticated connection.

- NotInOrganization: The recipients are outside your organization. The recipient's email address isn't in an accepted domain or the recipient's email address is in an accepted domain that's configured as an external relay domain.

- ExternalPartner: The recipients are in a partner organization where you've configured Domain Security (mutual TLS authentication) to send mail. This value is only available in on-premises Exchange.

- ExternalNonPartner: The recipients are external to your organization, and the organization isn't a partner organization. This value is only available in on-premises Exchange.



```yaml
Type: InOrganization | NotInOrganization | ExternalPartner | ExternalNonPartner
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetHeaderName
!!! Exchange Server 2010

The SetHeaderName parameter specifies the SMTP header name to add or modify. When the SetHeaderName parameter is used to specify a header, you must also use the SetHeaderValue parameter to specify a value for the header.



!!! Exchange Server 2013

The SetHeaderName parameter specifies the SMTP header name to add or modify when the rule is applied. When the SetHeaderName parameter is used, you must also use the SetHeaderValue parameter to specify a value for the header.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The SetHeaderName parameter specifies an action that adds or modifies a header field in the message header. The value of this parameter is the name of the header field that you want to add or modify. When you use this parameter, you also need to use the SetHeaderValue parameter to specify a value for the header.



```yaml
Type: HeaderName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetHeaderValue
!!! Exchange Server 2010

The SetHeaderValue parameter specifies a value for the header specified in the SetHeaderName parameter.



!!! Exchange Server 2013

The SetHeaderValue parameter specifies a value for the header specified in the SetHeaderName parameter.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The SetHeaderValue parameter specifies an action that adds or modifies a header field in the message header. The value of this parameter is the value that you want to apply to the header field. When you use this parameter, you also need to use the SetHeaderName parameter to specify the name of the header field that you want to add or modify..



```yaml
Type: HeaderValue
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetSCL
!!! Exchange Server 2010

The SetSCL parameter modifies the SCL value of the message to the value specified. The SCL value can be a number from 0 through 9, or -1.



!!! Exchange Server 2013

The SetSCL parameter modifies the SCL value of the message to the value specified. The SCL value can be a number from 0 through 9, or -1. The value -1 specifies that the message is from a trusted source.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The SetSCL parameter specifies an action that adds or modifies the SCL value of messages. Valid values are:

- -1: The message is from a trusted sender, so the message bypasses spam filtering.

- Integers 0 through 9: A higher value indicates that a message is more likely to be spam.



```yaml
Type: SclValue
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmtpRejectMessageRejectStatusCode
!!! Exchange Server 2010

The SmtpRejectMessageRejectStatusCode parameter specifies an enhanced status code to provide when rejecting a message.



!!! Exchange Server 2013

The SmtpRejectMessageRejectStatusCode parameter specifies an enhanced status code to provide when rejecting a message.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Edge Transport servers.

The SmtpRejectMessageRejectStatusCode parameter specifies an action that disconnects the sending server from the Edge Transport server. The value of this parameter is the SMTP code that's used. Valid values are the integers 400 through 500.

You can use this parameter with the SmtpRejectMessageRejectText parameter. If you don't use this parameter, the default SMTP code 550 is used.



```yaml
Type: RejectStatusCode
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmtpRejectMessageRejectText
!!! Exchange Server 2010

The SmtpRejectMessageRejectText parameter specifies a text string to add to the rejection message. You must use this parameter with the SmtpRejectMessageRejectStatusCode parameter.



!!! Exchange Server 2013

The SmtpRejectMessageRejectText parameter specifies a text string to add to the rejection message. You must use this parameter with the SmtpRejectMessageRejectStatusCode parameter.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Edge Transport servers.

The SmtpRejectMessageRejectText parameter specifies an action that disconnects the sending server from the Edge Transport server. The value of this parameter is the explanation text that's used. If the value contains spaces, enclose the value in quotation marks (").

You can use this parameter with the SmtpRejectMessageRejectStatusCode parameter. If you don't use this parameter, the default text Delivery not authorized, message refused is used.



```yaml
Type: RejectText
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectContainsWords
!!! Exchange Server 2010

The SubjectContainsWord parameter specifies words to check the message subject for.

You can specify one or more words or phrases. When specifying more than one word or phrase, each word or phrase should be separated by a comma (,). When specifying a phrase that contains one or more spaces, you must enclose the phrase in quotation marks ("), for example:

Word1,"Phrase with spaces",word2.



!!! Exchange Server 2013

The SubjectContainsWords parameter specifies words to look for in the message subject.

You can specify one or more words or phrases. When specifying more than one word or phrase, each word or phrase should be separated by a comma (,). When specifying a phrase that contains one or more spaces, you must enclose the phrase in quotation marks ("), for example:

Word1,"Phrase with spaces",word2.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The SubjectContainsWords parameter specifies a condition that looks for words in the Subject field of messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,.... Don't use leading or trailing spaces.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectMatchesPatterns
!!! Exchange Server 2010

The SubjectMatchesPatterns parameter specifies text patterns to check the message subject for. For more details, see Regular Expressions in Transport Rules.



!!! Exchange Server 2013

The SubjectMatchesPatterns parameter specifies text patterns to check for in the message subject.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The SubjectMatchesPatterns parameter specifies a condition that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectOrBodyContainsWords
!!! Exchange Server 2010

The SubjectOrBodyContainsWords parameter specifies words to check the message subject and body for. The rule is applied if any of the words or phrases specified is found in the message subject or body.

You can specify one or more words or phrases. When specifying more than one word or phrase, each word or phrase should be separated by a comma (,). When specifying a phrase with one or more spaces, you must enclose the phrase in quotation marks ("), for example:

Word1,"Phrase with spaces",word2.



!!! Exchange Server 2013

The SubjectOrBodyContainsWords parameter specifies words to look for in the message subject or body. The rule is applied if any of the words or phrases specified is found in the message subject or body.

You can specify one or more words or phrases. When specifying more than one word or phrase, each word or phrase should be separated by a comma (,). When specifying a phrase with one or more spaces, you must enclose the phrase in quotation marks ("), for example:

Word1,"Phrase with spaces",word2.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The SubjectOrBodyContainsWords parameter specifies a condition that looks for words in the Subject field or body of messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,.... Don't use leading or trailing spaces.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectOrBodyMatchesPatterns
!!! Exchange Server 2010

The SubjectOrBodyMatchesPatterns parameter specifies text patterns to check the message subject and body for. The rule is applied if the word specified is found in the message subject or body. For more details, see Regular Expressions in Transport Rules.



!!! Exchange Server 2013

The SubjectOrBodyMatchesPatterns parameter specifies text patterns to look for in the message subject or body. The rule is applied if the word specified is found in the message subject or body.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is available on Mailbox servers and Edge Transport servers.

The SubjectOrBodyMatchesPatterns parameter specifies a condition that looks for text patterns in the Subject field or body of messages. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>","\<regular expression2\>",....



```yaml
Type: Pattern[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WithImportance
!!! Exchange Server 2010

The WithImportance parameter specifies message importance. The rule is applied to messages matching the importance specified. Valid values include one of the following:

- High

- Low

- Normal



!!! Exchange Server 2013

The WithImportance parameter specifies message importance. The rule is applied to messages matching the specified importance. Valid values are:

- High

- Low

- Normal

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActivationDate
!!! Exchange Server 2013

The ActivationDate parameter specifies the date when this rule will become effective. The rule won't take any action on messages until the day you specify for this parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ActivationDate parameter specifies when the rule starts processing messages. The rule won't take any action on messages until the specified date/time.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".



```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyOME
!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The ApplyOME parameter specifies that a message and its attachments will be encrypted if the message matches the conditions of this rule.

Valid input for this parameter is $true or $false. The default is $false.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

This parameter specifies an action or part of an action for the rule.

The ApplyOME parameter specifies an action that encrypts messages and their attachments by using Office 365 Message Encryption. Valid values are:

- $true: The message and attachments are encrypted.

- $false: The message and attachments aren't encrypted.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentExtensionMatchesWords
!!! Exchange Server 2013

The AttachmentExtensionMatchesWords parameter specifies one or more word patterns to check in attachment extensions. The rule is applied if the extensions of any of the attachments match the word patterns you specify.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentExtensionMatchesWords parameter specifies a condition that looks for words in the file name extensions of message attachments. You can specify multiple words separated by commas.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentHasExecutableContent
!!! Exchange Server 2013

The AttachmentHasExecutableContent parameter specifies whether the rule is applied when any attachments in the message contain executable content. If you set this parameter to $true, the rule is applied if any of the attachments contains executable content.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentHasExecutableContent parameter specifies a condition that looks for executable content in message attachments. Valid values are:

- $true: Look for executable content in message attachments.

- $false: Don't look for executable content in message attachments.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentIsPasswordProtected
!!! Exchange Server 2013

The AttachmentIsPasswordProtected parameter specifies whether the attachment is a password protected file whose contents can't be inspected. For example, if a password protected ZIP file is in a message, this condition will be met. The rule is applied if any attachment is password protected.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The AttachmentIsPasswordProtected parameter specifies a condition that looks for password protected files in messages (because the contents of the file can't be inspected). Password detection only works for Office documents and .zip files. Valid values are:

- $true: Look for password protected attachments.

- $false: Don't look for password protected attachments.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentProcessingLimitExceeded
!!! Exchange Server 2013

The AttachmentProcessingLimitExceeded parameter specifies whether the scanning of attachments in the message didn't complete because the processing exceeded built-in limits. This condition is used to create rules that work together with other attachment processing rules and gives you the ability to handle messages whose content couldn't be fully scanned.

Valid values are $true and $false.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentPropertyContainsWords
!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The AttachmentPropertyContainsWords parameter specifies one or more words to check in the specified property of attached Office documents. The rule is applied if the Office document property contains any of the words you specify. This condition helps integrate transport rules with SharePoint, Windows Server 2012 R2 File Classification Infrastructure (FCI), or a third-party classification system.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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

This parameter uses the syntax: "PropertyName:Word". To specify multiple properties, or multiple words for the same property, use the following syntax: "PropertyName1:Word1,Phrase with spaces,word2...","PropertyName2:Word3,Phrase with spaces,word4.... Don't use leading or trailing spaces.

When you specify multiple properties, or multiple values for the same property, the or operator is used.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentCharacterSetContainsWords
!!! Exchange Server 2013

The ContentCharacterSetContainsWords parameter specifies one or more character set names to check for in the message. The rule is applied if the message contains any of the character sets specified.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The ContentCharacterSetContainsWords parameter specifies a condition that looks for character set names in messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,.... Don't use leading or trailing spaces.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpPolicy
!!! Exchange Server 2013

The DlpPolicy parameter specifies the data loss prevention (DLP) policy associated with this rule. Each DLP policy is enforced using a set of transport rules. To learn more about DLP, see Data loss prevention.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The DlpPolicy parameter specifies the data loss prevention (DLP) policy that's associated with the rule. Each DLP policy is enforced using a set of mail flow rules (transport rules). To learn more about DLP, see Data loss prevention in Exchange 2016.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentExtensionMatchesWords
!!! Exchange Server 2013

The ExceptIfAttachmentExtensionMatchesWords parameter specifies one or more word patterns to check in attachment extensions. The rule isn't applied if the extensions of any of the attachments match the word patterns you specify.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentExtensionMatchesWords parameter specifies an exception that looks for words in the file name extensions of message attachments. You can specify multiple words separated by commas.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentHasExecutableContent
!!! Exchange Server 2013

The ExceptIfAttachmentHasExecutableContent parameter specifies whether the rule is applied when any attachments in the message contain executable content. If you set this parameter to $true, the rule isn't applied if any of the attachments contains executable content.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentHasExecutableContent parameter specifies an exception that looks for executable content in message attachments. Valid values are:

- $true: Look for executable content in message attachments.

- $false: Don't look for executable content in message attachments.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentIsPasswordProtected
!!! Exchange Server 2013

The ExceptIfAttachmentIsPasswordProtected parameter specifies whether the attachment is a password protected file whose contents can't be inspected. For example, if a password protected ZIP file is in a message, this exception will be met. The rule isn't applied if any attachment is password protected.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfAttachmentIsPasswordProtected parameter specifies an exception that looks for password protected files in messages (because the contents of the file can't be inspected). Password detection only works for Office documents and .zip files. Valid values are:

- $true: Look for password protected attachments.

- $false: Don't look for password protected attachments.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentProcessingLimitExceeded
!!! Exchange Server 2013

The ExceptIfAttachmentProcessingLimitExceeded parameter specifies whether the scanning of attachments in the message didn't complete because the processing exceeded built-in limits. This condition is used to create rules that work together with other attachment processing rules and gives you the ability to handle messages whose content couldn't be fully scanned.

Valid values are $true and $false.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAttachmentPropertyContainsWords
!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The ExceptIfAttachmentPropertyContainsWords parameter specifies one or more words to check in the specified property of attached Office documents. The rule isn't applied if the Office document property contains any of the words you specify. This exception helps integrate transport rules with SharePoint, Windows Server 2012 R2 File Classification Infrastructure (FCI), or a third-party classification system.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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

The syntax for this parameter is "PropertyName:Word". To specify multiple properties, or multiple words for the same property, use the following syntax: "PropertyName1:Word1,Phrase with spaces,word2...","PropertyName2:Word3,Phrase with spaces,word4.... Don't use values with leading or trailing spaces.

When you specify multiple properties, or multiple values for the same property, the or operator is used.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentCharacterSetContainsWords
!!! Exchange Server 2013

The ExceptIfContentCharacterSetContainsWords parameter specifies one or more character set names to check for in the message. The rule isn't applied if the message contains any of the character sets specified.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfContentCharacterSetContainsWords parameter specifies an exception that looks for character set names in messages.

To specify multiple words or phrases, this parameter uses the syntax: Word1,"Phrase with spaces",word2,.... Don't use leading or trailing spaces.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHasSenderOverride
!!! Exchange Server 2013

The ExceptIfHasSenderOverride parameter specifies the rule to check if the sender has chosen to override a DLP policy. Set this parameter to $true to prevent this rule from applying to messages where the sender took action to override a DLP policy restriction.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfHasSenderOverride parameter specifies an exception that looks for messages where the sender chose to override a DLP policy. Valid values are:

- $true: Look for messages where the sender took action to override a DLP policy.

- $false: Don't look for messages where the sender took action to override a DLP policy.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMessageContainsDataClassifications
!!! Exchange Server 2013

The ExceptIfMessageContainsDataClassifications parameter specifies the sensitive information types to look for in the message body and any of the attachments. For a list of sensitive information types available, see What the sensitive information types in Exchange look for.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfMessageContainsDataClassifications parameter specifies an exception that looks for sensitive information types in the body of messages, and in any attachments.

This parameter uses the syntax @{\<SensitiveInformationType1\>},@{\<SensitiveInformationType2\>},.... For example, to look for content that contains at least two credit card numbers, and at least one ABA routing number, use the value @{Name="Credit Card Number"; minCount="2"},@{Name="ABA Routing Number"; minCount="1"}.

For a list of sensitive information types available, see Sensitive information types in Exchange 2016.



```yaml
Type: Hashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfMessageSizeOver
!!! Exchange Server 2013

The ExceptIfMessageSizeOver parameter specifies a message size. The rule isn't applied to any messages that exceed the message size you specify for this parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientDomainIs
!!! Exchange Server 2013

The ExceptIfRecipientDomainIs parameter specifies the recipient's domain. The rule isn't applied to messages sent to recipients whose email addresses are in the specified domain.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfRecipientDomainIs parameter specifies an exception that looks for recipients with email address in the specified domains. You can specify multiple domains separated by commas.

If you want to look for recipient email addresses that contain the specified domain (for example, any subdomain of a domain), use the ExceptIfRecipientAddressMatchesPatterns parameter, and specify the domain by using the syntax '@domain\\.com$'.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderDomainIs
!!! Exchange Server 2013

The ExceptIfSenderDomainIs parameter specifies the sender's domain. The rule isn't applied to messages received from senders whose email addresses are in the specified domain.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

In on-premises Exchange, this exception is only available on Mailbox servers.

The ExceptIfSenderDomainIs parameter specifies an exception that looks for senders with email address in the specified domains. You can specify multiple domains separated by commas.

If you want to look for sender email addresses that contain the specified domain (for example, any subdomain of a domain), use the FromAddressMatchesPatterns parameter, and specify the domain by using the syntax '@domain\\.com$'.

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderIpRanges
!!! Exchange Server 2013

The ExceptIfSenderIpRanges parameter specifies the IP ranges to compare with the sender's IP address. The rule isn't applied if the IP address of the sender falls within one of the IP ranges specified in this parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpiryDate
!!! Exchange Server 2013

The ExpiryDate parameter specifies the date when this rule will stop processing. The rule won't take any action on messages past the date you specify for this parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an exception or part of an exception for the rule. The name of the corresponding condition doesn't include the ExceptIf prefix.

The ExpiryDate parameter specifies when this rule will stop processing messages. The rule won't take any action on messages after the specified date/time.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".



```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateIncidentReport
!!! Exchange Server 2013

The GenerateIncidentReport parameter specifies the recipient to whom incident reports will be sent. An incident report is generated for messages that violate a DLP policy in your organization.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateNotification
!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The GenerateNotification parameter specifies the text to use in a recipient notification message. When a message matches the conditions defined by the rule, the notification message you specify with this parameter is sent to the recipients. For example, you can use this parameter to notify recipients that a message was rejected by the rule, or marked as spam and delivered to their Junk Email folder.

This parameter supports plain text, HTML tags and the following keywords to use values from the original message:

- %%From%%

- %%To%%

- %%Cc%%

- %%Subject%%

- %%Headers%%

- %%MessageDate%%

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasSenderOverride
!!! Exchange Server 2013

The HasSenderOverride parameter specifies the rule to check if the sender has chosen to override a DLP policy. Set this parameter to $true to apply this rule to messages where the sender took action to override a DLP policy restriction.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The HasSenderOverride parameter specifies a condition that looks for messages where the sender chose to override a DLP policy. Valid values are:

- $true: Look for messages where the sender took action to override a DLP policy.

- $false: Don't look for messages where the sender took action to override a DLP policy.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncidentReportContent
!!! Exchange Server 2013

The IncidentReportContent parameter specifies the message properties that are included in incident reports. This parameter is used together with the GenerateIncidentReport parameter.

The valid values are:

- Sender Includes the sender of the message.

- Recipients Includes the recipients in the To: box of the message. Only the first 10 recipients are displayed in the incident report. If there are more than 10 recipients, the remaining number of recipients will be displayed.

- Subject Includes the message subject.

- CC Includes the recipients in the Cc: box of the message. Only the first 10 recipients are displayed in the incident report. If there are more than 10 recipients, the remaining number of recipients will be displayed.

- BCC Includes the recipients in the Bcc: box of the message. Only the first 10 recipients are displayed in the incident report. If there are more than 10 recipients, the remaining number of recipients will be displayed.

- Severity Includes the audit severity of the rule that was triggered. If the message was processed by more than one rule, the highest severity is displayed.

- Override Includes the override if the sender has chosen to override a PolicyTip. If the sender has provided a justification, the first 100 characters of the justification is also included.

- RuleDetections Includes the list of rules that the message triggered.

- FalsePositive Includes the false positive if the sender marked the message as a false positive for a PolicyTip.

- DataClassifications Includes the list of sensitive information types detected in the message.

- IdMatch Includes the sensitive information type that is detected, the exact matched content from the message, and the 150 characters before and after the matched sensitive information.

- AttachOriginalMail Includes the entire original message.

The message ID is always included in the incident report.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncidentReportOriginalMail
The IncidentReportOriginalMail parameter specifies whether to include the original message with the incident report. This parameter is used together with the GenerateIncidentReport parameter. Valid values are:

- IncludeOriginalMail

- DoNotIncludeOriginalMail

The default value is DoNotIncludeOriginalMail.

This parameter is used to define a rule action.

The functionality of this parameter is now managed by the IncidentReportContent parameter, and this parameter will be deprecated in the future. Adding the value AttachOriginalMail to the IncidentReportContent parameter is equivalent to setting this parameter to IncludeOriginalMail value. Even though this parameter is still functional, we recommend you use the IncidentReportContent parameter instead.

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
!!! Exchange Server 2013

The MessageContainsDataClassifications parameter specifies the sensitive information types to look for in the message body and any of the attachments. For a list of sensitive information types available, see What the sensitive information types in Exchange look for.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The MessageContainsDataClassifications parameter specifies a condition that looks for sensitive information types in the body of messages, and in any attachments.

This parameter uses the syntax @{\<SensitiveInformationType1\>},@{\<SensitiveInformationType2\>},.... For example, to look for content that contains at least two credit card numbers, and at least one ABA routing number, use the value @{Name="Credit Card Number"; minCount="2"},@{Name="ABA Routing Number"; minCount="1"}.

For a list of sensitive information types available, see Sensitive information types in Exchange 2016.

You can specify the notification options by using the NotifySender parameter.



```yaml
Type: Hashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageSizeOver
!!! Exchange Server 2013

The MessageSizeOver parameter specifies a message size. The rule is applied to all messages that exceed the message size you specify for this parameter.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mode
!!! Exchange Server 2013

The Mode parameter specifies in which mode this rule will operate. Valid values include:

- Audit The rule is turned on, and what would have happened if the rule was enforced is logged in message tracking logs. Exchange doesn't take any action that impacts the delivery of the message.

- AuditAndNotify The rule is turned on, and it operates the same way it would in Audit mode, but notifications are also enabled.

- Enforce The rule is turned on, and all actions specified in the rule are taken.

The default value is Enforce.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Mode parameter specifies how the rule operates. Valid values are:

- Audit: The actions that the rule would have taken are written to the message tracking log, but no any action is taken on the message that would impact delivery.

- AuditAndNotify: The rule operates the same as in Audit mode, but notifications are also enabled.

- Enforce: All actions specified in the rule are taken. This is the default value.



```yaml
Type: Audit | AuditAndNotify | Enforce
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifySender
!!! Exchange Server 2013

The NotifySender parameter specifies how the sender of a message that goes against a DLP policy is notified. Valid values are:

- NotifyOnly Sender is notified, but the message is delivered normally.

- RejectMessage Message is rejected, and the sender is notified.

- RejectUnlessFalsePositiveOverride Message is rejected unless it's marked as a false positive by the sender.

- RejectUnlessSilentOverride Message is rejected unless the sender has chosen to override the policy restriction.

- RejectUnlessExplicitOverride This is the same as RejectUnlessSilentOverride, but the sender can also provide a justification for overriding the policy restriction.

If you specify any value other than NotifyOnly, you can provide a specific rejection status code and reason using the RejectMessageEnhancedStatusCode and RejectMessageReasonText parameters.

This action is used together with the MessageContainsDataClassifications condition. If you use this parameter, you must also specify the sensitive information types you want to check against using the MessageContainsDataClassifications parameter.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDomainIs
!!! Exchange Server 2013

The RecipientDomainIs parameter specifies the recipient's domain. The rule is applied to messages sent to recipients whose email addresses are in the specified domain.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The RecipientDomainIs parameter specifies a condition that looks for recipients with email address in the specified domains. You can specify multiple domains separated by commas.

If you want to look for recipient email addresses that contain the specified domain (for example, any subdomain of a domain), use the RecipientAddressMatchesPatterns parameter, and specify the domain by using the syntax '@domain\\.com$'.



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOME
!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The RemoveOME parameter specifies that a message and its attachments will be decrypted if they match the identified transport rule.

The default is $false.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

This parameter specifies an action or part of an action for the rule.

The RemoveOME parameter specifies an action that removes Office 365 Message Encryption from messages and their attachments. Valid values are:

- $true: The message and attachments are decrypted.

- $false: The message and attachments aren't decrypted.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RouteMessageOutboundConnector
!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The RouteMessageOutboundConnector parameter specifies the connector to use for routing this message.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RouteMessageOutboundRequireTls
!!! Exchange Server 2013

The RouteMessageOutboundRequireTls parameter specifies that Transport Layer Security (TLS) encryption is required when routing this message outside your organization. Set this parameter to $true to require TLS.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is only available on Mailbox servers.

The RouteMessageOutboundRequireTls parameter specifies an action that uses Transport Layer Security (TLS) encryption to deliver messages outside your organization. Valid values are:

- $true: The messages must be delivered over a TLS encrypted channel.

- $false: A TLS encrypted channel isn't required to deliver the messages.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RuleErrorAction
!!! Exchange Server 2013

The RuleErrorAction parameter specifies how the message should be handled if the rule processing can't be completed. Valid values are:

- Ignore The message is sent without completing the rule processing.

- Defer The message is deferred so the rules engine can attempt to process the message again.

The default value is Ignore.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The RuleErrorAction parameter specifies what to do if rule processing can't be completed on messages. Valid values are:

- Ignore: The message is sent anyway. This is the default value.

- Defer: The message is deferred so the rules engine can attempt to process the message again.



```yaml
Type: Ignore | Defer
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RuleSubType
!!! Exchange Server 2013

The RuleSubType parameter specifies the type of this transport rule. Valid values are:

- Dlp Specifies that this rule is associated with a DLP policy.

- None Specifies that this is a regular transport rule.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The RuleSubType parameter specifies the rule type. Valid values are:

- Dlp: The rule is associated with a DLP policy.

- None: The rule is a regular rule that isn't associated with a DLP policy.



```yaml
Type: None | Dlp
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderAddressLocation
!!! Exchange Server 2013

The SenderAddressLocation parameter specifies the fields to look in when evaluating sender addresses. Prior to Exchange Server 2013 Cumulative Update 1, transport rules only processed message headers when evaluating senders. With the addition of the SenderAddressLocation parameter, you can configure the rules to also examine the message envelope (the sender information sent with the MAIL FROM command in the SMTP transmission) when evaluating senders.

Valid values are:

- Header Only message headers are examined when evaluating senders.

- Envelope Only the message envelope is examined when evaluating senders.

- HeaderOrEnvelope Both message headers and the message envelope are examined when evaluating senders.

The default value is Header.

By configuring this parameter, you can evaluate the message envelope for the following conditions and exceptions):

- From

- FromAddressContainsWords

- FromAddressMatchesPatterns

- FromMemberOf

- SenderDomainIs



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderDomainIs
!!! Exchange Server 2013

The SenderDomainIs parameter specifies the sender's domain. The rule is applied to messages received from senders whose email addresses are in the specified domain.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies a condition or part of a condition for the rule. The name of the corresponding exception parameter starts with ExceptIf.

In on-premises Exchange, this condition is only available on Mailbox servers.

The SenderDomainIs parameter specifies a condition that looks for senders with email address in the specified domains. You can specify multiple domains separated by commas.

If you want to look for sender email addresses that contain the specified domain (for example, any subdomain of a domain), use the FromAddressMatchesPatterns parameter, and specify the domain by using the syntax '@domain\\.com$'.

You can use SenderAddressLocation parameter to specify where to look for the sender's email address (message header, message envelope, or both).



```yaml
Type: Word[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderIpRanges
!!! Exchange Server 2013

The SenderIpRanges parameter specifies the IP ranges to compare with the sender's IP address. The rule is applied if the IP address of the sender falls within one of the IP ranges specified in this parameter.

This parameter is used to define a rule condition.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetAuditSeverity
!!! Exchange Server 2013

The SetAuditSeverity parameter specifies the severity level assigned to an incident report that's generated and the corresponding entry logged in the message tracking logs. You can specify one of the following values:

- DoNotAudit No audit entry is logged.

- Low The audit entry is assigned low severity.

- Medium The audit entry is assigned medium severity.

- High The audit entry is assigned high severity.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StopRuleProcessing
!!! Exchange Server 2013

The StopRuleProcessing parameter specifies whether the processing of subsequent rules should be stopped for this message.

This parameter is used to define a rule action.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter specifies an action or part of an action for the rule.

In on-premises Exchange, this action is available on Mailbox servers and Edge Transport servers.

The StopRuleProcessing parameter specifies an action that stops processing more rules. Valid values are:

- $true: Stop processing more rules.

- $false: Continue processing more rules after this one.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OMEExpiryDays
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online, Exchange Online Protection

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

