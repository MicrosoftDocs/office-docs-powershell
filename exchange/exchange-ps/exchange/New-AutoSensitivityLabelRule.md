---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-autosensitivitylabelrule
applicable: Security & Compliance
title: New-AutoSensitivityLabelRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-AutoSensitivityLabelRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-AutoSensitivityLabelRule cmdlet to create auto-labeling rules and associate then with auto-labeling policies in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-AutoSensitivityLabelRule [-Name] <String> -Policy <PolicyIdParameter> -Workload <Workload>
 [-AccessScope <AccessScope>]
 [-ActivationDate <System.DateTime>]
 [-AnyOfRecipientAddressContainsWords <MultiValuedProperty>]
 [-AnyOfRecipientAddressMatchesPatterns <MultiValuedProperty>]
 [-Comment <String>]
 [-Confirm]
 [-ContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ContentExtensionMatchesWords <MultiValuedProperty>]
 [-ContentPropertyContainsWords <MultiValuedProperty>]
 [-Disabled <Boolean>]
 [-DocumentCreatedBy <MultiValuedProperty>]
 [-DocumentIsPasswordProtected <Boolean>]
 [-DocumentIsUnsupported <Boolean>]
 [-DocumentNameMatchesWords <MultiValuedProperty>]
 [-DocumentSizeOver <Microsoft.Exchange.Data.ByteQuantifiedSize>]
 [-ExceptIfAccessScope <AccessScope>]
 [-ExceptIfAnyOfRecipientAddressContainsWords <MultiValuedProperty>]
 [-ExceptIfAnyOfRecipientAddressMatchesPatterns <MultiValuedProperty>]
 [-ExceptIfContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ExceptIfContentExtensionMatchesWords <MultiValuedProperty>]
 [-ExceptIfContentPropertyContainsWords <MultiValuedProperty>]
 [-ExceptIfDocumentCreatedBy <MultiValuedProperty>]
 [-ExceptIfDocumentIsPasswordProtected <Boolean>]
 [-ExceptIfDocumentIsUnsupported <Boolean>]
 [-ExceptIfDocumentNameMatchesWords <MultiValuedProperty>]
 [-ExceptIfDocumentSizeOver <Microsoft.Exchange.Data.ByteQuantifiedSize>]
 [-ExceptIfFrom <RecipientIdParameter[]>]
 [-ExceptIfFromAddressContainsWords <MultiValuedProperty>]
 [-ExceptIfFromAddressMatchesPatterns <MultiValuedProperty>]
 [-ExceptIfFromMemberOf <SmtpAddress[]>]
 [-ExceptIfHeaderMatchesPatterns <PswsHashtable>]
 [-ExceptIfProcessingLimitExceeded <Boolean>]
 [-ExceptIfRecipientDomainIs <MultiValuedProperty>]
 [-ExceptIfSenderDomainIs <MultiValuedProperty>]
 [-ExceptIfSenderIPRanges <MultiValuedProperty>]
 [-ExceptIfSentTo <MultiValuedProperty>]
 [-ExceptIfSentToMemberOf <RecipientIdParameter[]>]
 [-ExceptIfSubjectMatchesPatterns <MultiValuedProperty>]
 [-ExpiryDate <System.DateTime>]
 [-From <RecipientIdParameter[]>]
 [-FromAddressContainsWords <MultiValuedProperty>]
 [-FromAddressMatchesPatterns <MultiValuedProperty>]
 [-FromMemberOf <SmtpAddress[]>]
 [-HeaderMatchesPatterns <PswsHashtable>]
 [-ImmutableId <System.Guid>]
 [-Priority <System.Int32>]
 [-ProcessingLimitExceeded <Boolean>]
 [-RecipientDomainIs <MultiValuedProperty>]
 [-ReportSeverityLevel <RuleSeverity>]
 [-RuleErrorAction <PolicyRuleErrorAction>]
 [-SenderDomainIs <MultiValuedProperty>]
 [-SenderIPRanges <MultiValuedProperty>]
 [-SentTo <MultiValuedProperty>]
 [-SentToMemberOf <RecipientIdParameter[]>]
 [-SourceType <String>]
 [-SubjectMatchesPatterns <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-AutoSensitivityLabelRule -Name "SocialSecurityRule" -Policy "SSNPolicy" -ContentContainsSensitiveInformation @{"name"="U.S. Social Security Number (SSN)";"mincount"="1"} -Workload SharePoint
```

This example creates an autolabeling rule named "SocialSecurityRule" that is assigned to the policy "SSNPolicy." This rule looks for Social Security Numbers on documents with a minimum count of 1 on SharePoint sites.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the auto-labeling policy rule. If the value contains spaces, enclose the value with quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Workload
The Workload parameter specifies the workload. Valid values are:

- Exchange
- OneDriveForBusiness
- SharePoint

```yaml
Type: Workload
Parameter Sets: (All)
Aliases:
Accepted values: Exchange, SharePoint, OneDriveForBusiness
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessScope
The AccessScope parameter specifies a condition for the auto-labeling policy rule that's based on the access scope of the content. The rule is applied to content that matches the specified access scope. Valid values are:

- InOrganization: The rule is applied to content that's accessible inside the organization.
- NotInOrganization: The rule is applied to content that's accessible outside the organization.
- None: The condition isn't used.

```yaml
Type: AccessScope
Parameter Sets: (All)
Aliases:
Accepted values: InOrganization, NotInOrganization, None
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActivationDate
This parameter is reserved for internal Microsoft use.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressContainsWords
The AnyOfRecipientAddressContainsWords parameter specifies a condition for the auto-labeling policy rule that looks for words or phrases in recipient email addresses. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 600.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressMatchesPatterns
The AnyOfRecipientAddressMatchesPatterns parameter specifies a condition for the auto-labeling policy rule that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

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
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentContainsSensitiveInformation
The ContentContainsSensitiveInformation parameter specifies a condition for the rule that's based on a sensitive information type match in content. The rule is applied to content that contains the specified sensitive information type.

This parameter uses the basic syntax `@(@{Name="SensitiveInformationType1";[minCount="Value"],@{Name="SensitiveInformationType2";[minCount="Value"],...)`. For example, `@(@{Name="U.S. Social Security Number (SSN)"; minCount="2"},@{Name="Credit Card Number"; minCount="1"; minConfidence="85"})`.

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentExtensionMatchesWords
The ContentExtensionMatchesWords parameter specifies a condition for the auto-labeling policy rule that looks for words in file name extensions. You can specify multiple words separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentPropertyContainsWords
The ContentPropertyContainsWords parameter specifies a condition for the auto-labeling policy rule that's based on a property match in content. The rule is applied to content that contains the specified property.

This parameter accepts values in the format: `"Property1:Value1,Value2","Property2:Value3,Value4",..."PropertyN:ValueN,ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disabled
The Disabled parameter specifies whether the auto-labeling policy rule is enabled or disabled. Valid values are:

- $true: The rule is disabled.
- $false: The rule is enabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentCreatedBy
{{ Fill DocumentCreatedBy Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentIsPasswordProtected
The DocumentIsPasswordProtected parameter specifies a condition for the auto-labeling policy rule that looks for password protected files (because the contents of the file can't be inspected). Password detection works for Office documents, compressed files (.zip, .7z, .rar, .tar, etc.), and .pdf files. Valid values are:

- $true: Look for password protected files.
- $false: Don't look for password protected files.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentIsUnsupported
The DocumentIsUnsupported parameter specifies a condition for the auto-labeling policy rule that looks for files that can't be scanned. Valid values are:

- $true: Look for unsupported files that can't be scanned.
- $false: Don't look for unsupported files that can't be scanned.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentNameMatchesWords
The DocumentNameMatchesWords parameter specifies a condition for the auto-labeling policy rule that looks for words or phrases in the name of message attachments. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentSizeOver
The DocumentSizeOver parameter specifies a condition for the auto-labeling policy rule that looks for messages where any attachment is greater than the specified size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

You can use this condition in auto-labeling policy rules that are scoped only to Exchange.

```yaml
Type: Microsoft.Exchange.Data.ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAccessScope
The ExceptIfAccessScopeAccessScope parameter specifies an exception for the auto-labeling policy rule that's based on the access scope of the content. The rule isn't applied to content that matches the specified access scope. Valid values are:

- InOrganization: The rule isn't applied to content that's accessible inside the organization.
- NotInOrganization: The rule isn't applied to content that's accessible outside the organization.
- None: The exception isn't used.

```yaml
Type: AccessScope
Parameter Sets: (All)
Aliases:
Accepted values: InOrganization, NotInOrganization, None
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressContainsWords
The ExceptIfAnyOfRecipientAddressContainsWords parameter specifies an exception for the auto-labeling policy rule that looks for words or phrases in recipient email addresses. You can specify multiple words separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 600.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressMatchesPatterns
The ExceptIfAnyOfRecipientAddressMatchesPatterns parameter specifies an exception for the auto-labeling policy rule that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentContainsSensitiveInformation
The ExceptIfContentContainsSensitiveInformation parameter specifies an exception for the auto-labeling policy rule that's based on a sensitive information type match in content. The rule isn't applied to content that contains the specified sensitive information type.

This parameter uses the basic syntax `@(@{Name="SensitiveInformationType1";[minCount="Value"],@{Name="SensitiveInformationType2";[minCount="Value"],...)`. For example, `@(@{Name="U.S. Social Security Number (SSN)"; minCount="2"},@{Name="Credit Card Number"})`.

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentExtensionMatchesWords
The ExceptIfContentExtensionMatchesWords parameter specifies an exception for the auto-labeling policy rule that looks for words in file name extensions. You can specify multiple words separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentPropertyContainsWords
The ExceptIfContentPropertyContainsWords parameter specifies an exception for the auto-labeling policy rule that's based on a property match in content. The rule is not applied to content that contains the specified property.

This parameter accepts values in the format: `"Property1:Value1,Value2","Property2:Value3,Value4",..."PropertyN:ValueN,ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentCreatedBy
{{ Fill ExceptIfDocumentCreatedBy Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentIsPasswordProtected
The ExceptIfDocumentIsPasswordProtected parameter specifies an exception for the auto-labeling policy rule that looks for password protected files (because the contents of the file can't be inspected). Password detection works for Office documents, compressed files (.zip, .7z, .rar, .tar, etc.), and .pdf files. Valid values are:

- $true: Look for password protected files.
- $false: Don't look for password protected files.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentIsUnsupported
The ExceptIfDocumentIsUnsupported parameter specifies an exception for the auto-labeling policy rule that looks for files that can't be scanned. Valid values are:

- $true: Look for unsupported files that can't be scanned.
- $false: Don't look for unsupported files that can't be scanned.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentNameMatchesWords
The ExceptIfDocumentNameMatchesWords parameter specifies an exception for the auto-labeling policy rule that looks for words or phrases in the name of message attachments. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfDocumentSizeOver
The ExceptIfDocumentSizeOver parameter specifies an exception for the auto-labeling policy rule that looks for messages where any attachment is greater than the specified size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

You can use this exception in auto-labeling policy rules that are scoped only to Exchange.

```yaml
Type: Microsoft.Exchange.Data.ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFrom
The ExceptIfFrom parameter specifies an exception for the auto-labeling policy rule that looks for messages from specific senders. You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressContainsWords
The ExceptIfFromAddressContainsWords parameter specifies an exception for the auto-labeling policy rule that looks for words or phrases in the sender's email address. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word length is 128 characters. The maximum number of words or phrases is 50.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressMatchesPatterns
The ExceptIfFromAddressMatchesPatterns parameter specifies an exception for the auto-labeling policy rule that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromMemberOf
The ExceptIfFromMemberOf parameter specifies an exception for the auto-labeling policy rule that looks for messages sent by group members. You identify the group members by their email addresses.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderMatchesPatterns
The HeaderMatchesPatterns parameter specifies an exception for the auto-labeling policy rule that looks for text patterns in a header field by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1","regular expression2",..."regular expressionN"`.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfProcessingLimitExceeded
The ExceptIfProcessingLimitExceeded parameter specifies an exception for the auto-labeling policy rule that looks for files where scanning couldn't complete. Valid values are:

- $true: Look for files where scanning couldn't complete.
- $false: Don't look for files where scanning couldn't complete.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfRecipientDomainIs
The ExceptIfRecipientDomainIs parameter specifies an exception for the auto-labeling policy rule that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderDomainIs
The ExceptIfSenderDomainIs parameter specifies an exception for the auto-labeling policy rule that looks for messages from senders with email address in the specified domains. You can specify multiple values separated by commas.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSenderIPRanges
The ExceptIfSenderIpRanges parameter specifies an exception for the auto-labeling policy rule that looks for senders whose IP addresses matches the specified value, or fall within the specified ranges. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless Inter-Domain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentTo
The ExceptIfSentTo parameter specifies an exception for the auto-labeling policy rule that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentToMemberOf
The ExceptIfSentToMemberOf parameter specifies an exception for the auto-labeling policy rule that looks for messages sent to members of distribution groups, dynamic distribution groups, or mail-enabled security groups. You identify the groups by email address. You can specify multiple values separated by commas.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSubjectMatchesPatterns
The ExceptIfSubjectMatchesPatterns parameter specifies an exception for the auto-labeling policy rule that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpiryDate
This parameter is reserved for internal Microsoft use.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From
This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressContainsWords
The FromAddressContainsWords parameter specifies a condition for the auto-labeling policy rule that looks for words or phrases in the sender's email address. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word length is 128 characters. The maximum number of words or phrases is 50.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressMatchesPatterns
The FromAddressMatchesPatterns parameter specifies a condition for the auto-labeling policy rule that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

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
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderMatchesPatterns
The HeaderMatchesPatterns parameter specifies a condition for the auto-labeling policy rule that looks for text patterns in a header field by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1","regular expression2",..."regular expressionN"`.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImmutableId
This parameter is reserved for internal Microsoft use.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy
The Policy parameter specifies the auto-labeling policy that contains the auto-labeling policy rule. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
This parameter is reserved for internal Microsoft use.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProcessingLimitExceeded
The ProcessingLimitExceeded parameter specifies a condition for the auto-labeling policy rule that looks for files where scanning couldn't complete. You can use this condition to create rules that work together to identify and process messages where the content couldn't be fully scanned. Valid values are:

- $true: Look for files where scanning couldn't complete.
- $false: Don't look for files where scanning couldn't complete.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientDomainIs
The RecipientDomainIs parameter specifies a condition for the auto-labeling policy rule that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

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
Accepted values: Low, Medium, High, None, Informational, Information
Applicable: Security & Compliance

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
Accepted values: Ignore, RetryThenBlock
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderDomainIs
The SenderDomainIs parameter specifies a condition for the auto-labeling policy rule that looks for messages from senders with email address in the specified domains. You can specify multiple values separated by commas.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderIPRanges
The SenderIpRanges parameter specifies a condition for the auto-sensitivity policy rule that looks for senders whose IP addresses matches the specified value, or fall within the specified ranges. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless Inter-Domain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo
The SentTo parameter specifies a condition for the auto-sensitivity policy rule that looks for recipients in messages. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

You can use this condition in auto-sensitivity policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToMemberOf
The SentToMemberOf parameter specifies a condition for the auto-labeling policy rule that looks for messages sent to members of distribution groups, dynamic distribution groups, or mail-enabled security groups. You identify the groups by email address. You can specify multiple values separated by commas.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceType
{{ Fill SourceType Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectMatchesPatterns
The SubjectMatchesPatterns parameter specifies a condition for the auto-labeling policy rule that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
