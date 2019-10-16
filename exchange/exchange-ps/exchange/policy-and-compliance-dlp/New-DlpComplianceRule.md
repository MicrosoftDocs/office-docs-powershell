---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: New-DlpComplianceRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# New-DlpComplianceRule

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-DlpComplianceRule to create Data Loss Prevention (DLP) rules in the Security & Compliance Center. DLP rules define sensitive information to be protected and the actions to take on rule matches.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-DlpComplianceRule [-Name] <String> -Policy <PolicyIdParameter>
 [-AccessScope <AccessScope>]
 [-ActivationDate <DateTime>]
 [-AnyOfRecipientAddressContainsWords <MultiValuedProperty>]
 [-AnyOfRecipientAddressMatchesPatterns <MultiValuedProperty>]
 [-BlockAccess <$true | $false>]
 [-BlockAccessScope <BlockAccessScope>]
 [-Comment <String>]
 [-Confirm]
 [-ContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ContentExtensionMatchesWords <MultiValuedProperty>]
 [-ContentPropertyContainsWords <MultiValuedProperty>]
 [-Disabled <$true | $false>]
 [-DocumentIsPasswordProtected <$true | $false>
 [-DocumentIsUnsupported <$true | $false>]
 [-DocumentNameMatchesPatterns <MultiValuedProperty>]
 [-DocumentNameMatchesWords <MultiValuedProperty>]
 [-EncryptRMSTemplate <RmsTemplateIdParameter>]
 [-ExceptIfAccessScope <AccessScope>]
 [-ExceptIfAnyOfRecipientAddressContainsWords <MultiValuedProperty>]
 [-ExceptIfAnyOfRecipientAddressMatchesPatterns <MultiValuedProperty>]
 [-ExceptIfContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ExceptIfContentExtensionMatchesWords <MultiValuedProperty>]
 [-ExceptIfContentPropertyContainsWords <MultiValuedProperty>]
 [-ExceptIfDocumentIsPasswordProtected <$true | $false>]
 [-ExceptIfDocumentIsUnsupported <$true | $false>]
 [-ExceptIfDocumentNameMatchesPatterns <MultiValuedProperty>]
 [-ExceptIfDocumentNameMatchesWords <MultiValuedProperty>]
 [-ExceptIfFromAddressContainsWords <MultiValuedProperty>]
 [-ExceptIfFromAddressMatchesPatterns <MultiValuedProperty>]
 [-ExceptIfProcessingLimitExceeded <$true | $false>]
 [-ExceptIfRecipientDomainIs <MultiValuedProperty>]
 [-ExceptIfSenderIPRanges <MultiValuedProperty>]
 [-ExceptIfSentTo <MultiValuedProperty>]
 [-ExceptIfSubjectContainsWords <MultiValuedProperty>]
 [-ExceptIfSubjectMatchesPatterns <MultiValuedProperty>]
 [-ExpiryDate <DateTime>]
 [-From <SmtpAddress[]>]
 [-FromAddressContainsWords <MultiValuedProperty>]
 [-FromAddressMatchesPatterns <MultiValuedProperty>]
 [-FromMemberOf <SmtpAddress[]>]
 [-GenerateAlert <MultiValuedProperty>]
 [-GenerateIncidentReport <MultiValuedProperty>]
 [-ImmutableId <Guid>]
 [-IncidentReportContent <ReportContentOption[]>]
 [-NotifyAllowOverride <OverrideOption[]>]
 [-NotifyEmailCustomText <String>]
 [-NotifyPolicyTipCustomText <String>]
 [-NotifyPolicyTipCustomTextTranslations <MultiValuedProperty>]
 [-NotifyUser <MultiValuedProperty>]
 [-Priority <Int32>]
 [-ProcessingLimitExceeded <$true | $false>]
 [-RecipientDomainIs <MultiValuedProperty>]
 [-RemoveHeader <MultiValuedProperty>]
 [-ReportSeverityLevel <RuleSeverity>]
 [-RuleErrorAction <PolicyRuleErrorAction>]
 [-SenderIPRanges <MultiValuedProperty>]
 [-SentTo <MultiValuedProperty>]
 [-SetHeader <PswsHashtable>]
 [-StopPolicyProcessing <$true | $false>]
 [-SubjectContainsWords <MultiValuedProperty>]
 [-SubjectMatchesPatterns <MultiValuedProperty>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Each new rule must contain one condition filter or test, and one associated action.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-DlpComplianceRule -Name "SocialSecurityRule" -Policy "USFinancialChecks" -ContentContainsSensitiveInformation @{Name="U.S. Social Security Number (SSN)"} -BlockAccess $True
```

This example create a new DLP compliance rule named "SocialSecurityRule" that is assigned to the "USFinancialChecks" policy. The rule checks for social security numbers and blocks access if it finds them.

## PARAMETERS

### -Name
The Name parameter specifies the unique name of the new DLP rule. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy
The Policy parameter specifies the existing DLP policy that will contain the DLP rule. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

- Id

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessScope
The AccessScope parameter specifies a condition for the DLP rule that's based on the access scope of the content. The rule is applied to content that matches the specified access scope. Valid values are:

- InOrganization: The rule is applied to content that's accessible inside the organization.

- NotInOrganization: The rule is applied to content that's accessible outside the organization.

- None: The condition isn't used.

```yaml
Type: AccessScope
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActivationDate
This parameter is reserved for internal Microsoft use.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressContainsWords
The AnyOfRecipientAddressContainsWords parameter specifies a condition for the DLP rule that looks for words or phrases in recipient email addresses. You can specify multiple words or phrases separated by commas.

- Single word: "no_reply"

- Multiple words: no_reply,urgent,...

- Multiple words and phrases: "phrase 1",word1,"phrase with , or spaces",word2,...

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressMatchesPatterns
The AnyOfRecipientAddressMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>"\|"\<regular expression2\>"\|..."\<regular expressionN\>".

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockAccess
The BlockAccess parameter specifies an action for the DLP rule that blocks access to the source item when the conditions of the rule are met. Valid values are:

- $true: Blocks further access to the source item that matched the rule. The owner, author, and site owner can still access the item.

- $false: Allows access to the source item that matched the rule. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockAccessScope
The BlockAccessScope parameter specifies the scope of the block access action. Valid values are:

- All: Block access to everyone except the owner and the last modifier.

- PerUser: Block access to external users.

```yaml
Type: BlockAccessScope
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
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
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentContainsSensitiveInformation
The ContentContainsSensitiveInformation parameter specifies a condition for the rule that's based on a sensitive information type match in content. The rule is applied to content that contains the specified sensitive information type.

This parameter uses the basic syntax @(@{Name="\<SensitiveInformationType1\>";[minCount="\<Value\>"],@{Name="\<SensitiveInformationType2\>";[minCount="\<Value\>"],...). For example, @(@{Name="U.S. Social Security Number (SSN)"; minCount="2"},@{Name="Credit Card Number"}).

Use the Get-DLPSensitiveInformationType cmdlet to list the sensitive information types for your organization. For more information on sensitive information types, see Sensitive information types inventory (https://go.microsoft.com/fwlink/p/?LinkId=529420).

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentExtensionMatchesWords
{{ Fill ContentExtensionMatchesWords Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentPropertyContainsWords
The ContentPropertyContainsWords parameter specifies a condition for the DLP rule that's based on a property match in content. The rule is applied to content that contains the specified property.

This parameter accepts values in the format: "\<Property1\>:\<Value1\>,\<Value2\>","\<Property2\>:\<Value3\>,\<Value4\>",..."\<PropertyN\>:\<ValueN\>,\<ValueN\>".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disabled
The Disabled parameter specifies whether the DLP rule is disabled. Valid values are:

- $true: The rule is disabled.

- $false: The rule is enabled. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentIsPasswordProtected
{{ Fill DocumentIsPasswordProtected Description }}

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentIsUnsupported
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentNameMatchesPatterns
The DocumentNameMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in the file name of message attachments by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>"\|"\<regular expression2\>"\|..."\<regular expressionN\>".

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentNameMatchesWords
The DocumentNameMatchesWords parameter specifies a condition for the DLP rule that looks for words or phrases in the file name of message attachments. You can specify multiple words or phrases separated by commas.

- Single word: "no_reply"

- Multiple words: no_reply,urgent,...

- Multiple words and phrases: "phrase 1",word1,"phrase with , or spaces",word2,...

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptRMSTemplate
{{ Fill EncryptRMSTemplate Description }}

```yaml
Type: RmsTemplateIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAccessScope
This parameter is reserved for internal Microsoft use.

```yaml
Type: AccessScope
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressContainsWords
The ExceptIfAnyOfRecipientAddressContainsWords parameter specifies an exception for the DLP rule that looks for words or phrases in recipient email addresses. You can specify multiple words separated by commas.

- Single word: "no_reply"

- Multiple words: no_reply,urgent,...

- Multiple words and phrases: "phrase 1",word1,"phrase with , or spaces",word2,...

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressMatchesPatterns
The ExceptIfAnyOfRecipientAddressMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>"\|"\<regular expression2\>"\|..."\<regular expressionN\>".

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentContainsSensitiveInformation
This parameter is reserved for internal Microsoft use.

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentExtensionMatchesWords
{{ Fill ExceptIfContentExtensionMatchesWords Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentPropertyContainsWords
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentIsPasswordProtected
{{ Fill ExceptIfDocumentIsPasswordProtected Description }}

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentIsUnsupported
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentNameMatchesPatterns
The ExceptIfDocumentNameMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in the file name of message attachments by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>"\|"\<regular expression2\>"\|..."\<regular expressionN\>".

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentNameMatchesWords
The ExceptIfDocumentNameMatchesWords parameter specifies an exception for the DLP rule that looks for words or phrases in the file name of message attachments. You can specify multiple words or phrases separated by commas.

- Single word: "no_reply"

- Multiple words: no_reply,urgent,...

- Multiple words and phrases: "phrase 1",word1,"phrase with , or spaces",word2,...

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressContainsWords
The ExceptIfFromAddressContainsWords parameter specifies a condition for the DLP rule that looks for words or phrases in the sender's email address. You can specify multiple words or phrases separated by commas.

- Single word: "no_reply"

- Multiple words: no_reply,urgent,...

- Multiple words and phrases: "phrase 1",word1,"phrase with , or spaces",word2,...

The maximum individual word length is 128 characters. The maximum number of words or phrases is 50.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressMatchesPatterns
The ExceptIfFromAddressMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>"\|"\<regular expression2\>"\|..."\<regular expressionN\>".

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfProcessingLimitExceeded
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientDomainIs
{{ Fill ExceptIfRecipientDomainIs Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderIPRanges
{{ Fill ExceptIfSenderIPRanges Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentTo
{{ Fill ExceptIfSentTo Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectContainsWords
The ExceptIfSubjectContainsWords parameter specifies an exception for the DLP rule that looks for words or phrases in the Subject field of messages. You can specify multiple words or phrases separated by commas.

- Single word: "no_reply"

- Multiple words: no_reply,urgent,...

- Multiple words and phrases: "phrase 1",word1,"phrase with , or spaces",word2,...

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectMatchesPatterns
The ExceptIfSubjectMatchesPatterns parameter specifies an exception for the DLP rule that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>"\|"\<regular expression2\>"\|..."\<regular expressionN\>".

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpiryDate
This parameter is reserved for internal Microsoft use.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From
This parameter is reserved for internal Microsoft use.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressContainsWords
The FromAddressContainsWords parameter specifies a condition for the DLP rule that looks for words or phrases in the sender's email address. You can specify multiple words or phrases separated by commas.

- Single word: "no_reply"

- Multiple words: no_reply,urgent,...

- Multiple words and phrases: "phrase 1",word1,"phrase with , or spaces",word2,...

The maximum individual word length is 128 characters. The maximum number of words or phrases is 50.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressMatchesPatterns
The FromAddressMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>"\|"\<regular expression2\>"\|..."\<regular expressionN\>".

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromMemberOf
This parameter is reserved for internal Microsoft use.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateAlert
The GenerateAlert parameter specifies an action for the DLP rule that notifies the specified users when the conditions of the rule are met. Valid values are:

- An email address.

- SiteAdmin

You can specify multiple values separated by commas.

The email message that's generated by this action contains a link to detailed information in the Security & Compliance Center (the details aren't in the email message itself).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateIncidentReport
The GenerateIncidentReport parameter specifies an action for the DLP rule that sends an incident report to the specified users when the conditions of the rule are met. Valid values are:

- An email address.

- SiteAdmin

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImmutableId
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncidentReportContent
The IncidentReportContent parameter specifies the content to include in the report when you use the GenerateIncidentReport parameter. Valid values are:

- All

- Default

- DetectionDetails

- Detections

- DocumentAuthor

- DocumentLastModifier

- MatchedItem

- OriginalContent

- RulesMatched

- Service

- Severity

- Title

You can specify multiple values separated by commas. You can only use the value All by itself. If you use the value Default, the report includes the following content:

- DocumentAuthor

- MatchedItem

- RulesMatched

- Service

- Title

Therefore, if you use any of these redundant values with the value Default, they will be ignored.

```yaml
Type: ReportContentOption[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyAllowOverride
The NotifyAllowOverride parameter specifies the notification override options when the conditions of the rule are met. Valid values are:

- FalsePositive: Allows overrides in the case of false positives.

- WithoutJustification: Allows overrides without justification.

- WithJustification: Allows overrides with justification.

You can specify multiple values separated by commas. The values WithoutJustification and WithJustification are mutually exclusive.

```yaml
Type: OverrideOption[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyEmailCustomText
The NotifyEmailCustomText parameter specifies the custom text in the email notification message that's sent to recipients when the conditions of the rule are met.

This parameter has a 5000 character limit, and supports plain text, HTML tags and the following tokens (variables):

- %%AppliedActions%%: The actions applied to the content.

- %%ContentURL%%: The URL of the document on the SharePoint site or OneDrive for Business site.

- %%MatchedConditions%%: The conditions that were matched by the content. Use this token to inform people of possible issues with the content.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyPolicyTipCustomText
The NotifyPolicyTipCustomText parameter specifies the custom text in the Policy Tip notification message that's shown to recipients when the conditions of the rule are met. The maximum length is 256 characters. HTML tags and tokens (variables) aren't supported.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyPolicyTipCustomTextTranslations
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyUser
The NotifyUser parameter specifies an action for the DLP rule that notifies the specified users when the conditions of the rule are met. Valid values are:

- An email address.

- LastModifier

- Owner

- SiteAdmin

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
{{ Fill Priority Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProcessingLimitExceeded
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDomainIs
{{ Fill RecipientDomainIs Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveHeader
The RemoveHeader parameter specifies an action for the DLP rule that removes a header field from the message header. This parameter uses the syntax HeaderName or "HeaderName:HeaderValue".You can specify multiple header names or header name and value pairs separated by commas: HeaderName1,"HeaderName2:HeaderValue2",HeaderName3,..."HeaderNameN:HeaderValueN".

The maximum header name length is 64 characters, and header names can't contains spaces or colons ( : ). The maximum header value length is 128 characters.

You can use this action in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportSeverityLevel
The ReportSeverityLevel parameter specifies the severity level of the incident report for content detections based on the rule. Valid values are:

- None: You can't select this value if the rule has no actions configured.

- Low: This is the default value.

- Medium

- High

```yaml
Type: RuleSeverity
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RuleErrorAction
The RuleErrorAction parameter specifies what to do if an error is encountered during the evaluation of the rule. Valid values are:

- Ignore

- RetryThenBlock

- Blank (the value $null): This is the default value.

```yaml
Type: PolicyRuleErrorAction
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderIPRanges
{{ Fill SenderIPRanges Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo
{{ Fill SentTo Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetHeader
The SetHeader parameter specifies an action for the DLP rule that adds or modifies a header field and value in the message header. This parameter uses the syntax "HeaderName:HeaderValue".You can specify multiple header name and value pairs separated by commas: "HeaderName1:HeaderValue1",HeaderName2:HeaderValue2",..."HeaderNameN:HeaderValueN".

The maximum header name length is 64 characters, and header names can't contains spaces or colons ( : ). The maximum header value length is 128 characters.

You can use this action in DLP policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StopPolicyProcessing
{{ Fill StopPolicyProcessing Description }}

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectContainsWords
The SubjectContainsWords parameter specifies a condition for the DLP rule that looks for words or phrases in the Subject field of messages. You can specify multiple words or phrases separated by commas.

- Single word: "no_reply"

- Multiple words: no_reply,urgent,...

- Multiple words and phrases: "phrase 1",word1,"phrase with , or spaces",word2,...

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

You can use this exception in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectMatchesPatterns
The SubjectMatchesPatterns parameter specifies a condition for the DLP rule that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: "\<regular expression1\>"\|"\<regular expression2\>"\|..."\<regular expressionN\>".

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this condition in DLP policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in the Office 365 Security & Compliance Center.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Office 365 Security & Compliance Center
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/57238e53-a9d8-495a-9b47-ef5020ec18a3.aspx)
