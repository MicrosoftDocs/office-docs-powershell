---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelrule
schema: 2.0.0
title: Set-AutoSensitivityLabelRule
---

# Set-AutoSensitivityLabelRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-AutoSensitivityLabelPolicy cmdlet to modify auto-labeling policy rules in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-AutoSensitivityLabelRule [-Identity] <ComplianceRuleIdParameter>
 [-AccessScope <AccessScope>]
 [-ActivationDate <System.DateTime>]
 [-AnyOfRecipientAddressContainsWords <MultiValuedProperty>]
 [-AnyOfRecipientAddressMatchesPatterns <MultiValuedProperty>]
 [-Comment <String>]
 [-Confirm]
 [-ContentContainsSensitiveInformation <PswsHashtable[]>]
 [-ContentExtensionMatchesWords <MultiValuedProperty>]
 [-ContentPropertyContainsWords <MultiValuedProperty>]
 [-DefaultSpoDocLibraryHasLabel <Boolean>]
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
 [-Workload <Workload>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AutoSensitivityLabelRule -Identity "SocialSecurityRule1" -Comment "Example"
```

This example changes the rule property "Comment" with the rule name "SocialSecurityRule1" to the text "Example".

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the auto-labeling policy rule that you want to modify. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AccessScope

> Applicable: Security & Compliance

The AccessScope parameter specifies a condition for the auto-labeling policy rule that's based on the access scope of the content. The rule is applied to content that matches the specified access scope. Valid values are:

- InOrganization: The rule is applied to content that's accessible inside the organization.
- NotInOrganization: The rule is applied to content that's accessible outside the organization.
- None: The condition isn't used.

```yaml
Type: AccessScope
Parameter Sets: (All)
Aliases:
Accepted values: InOrganization, NotInOrganization, None

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActivationDate

> Applicable: Security & Compliance

{{ Fill ActivationDate Description }}

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressContainsWords

> Applicable: Security & Compliance

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnyOfRecipientAddressMatchesPatterns

> Applicable: Security & Compliance

The AnyOfRecipientAddressMatchesPatterns parameter specifies a condition for the auto-labeling policy rule that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

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

### -Comment

> Applicable: Security & Compliance

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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

### -Confirm

> Applicable: Security & Compliance

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

### -ContentContainsSensitiveInformation

> Applicable: Security & Compliance

The ContentContainsSensitiveInformation parameter specifies a condition for the rule that's based on a sensitive information type match in content. The rule is applied to content that contains the specified sensitive information type.

This parameter uses the basic syntax `@(@{Name="SensitiveInformationType1";[minCount="Value"],@{Name="SensitiveInformationType2";[minCount="Value"],...)`. For example, `@(@{Name="U.S. Social Security Number (SSN)"; minCount="2"},@{Name="Credit Card Number"; minCount="1"; minConfidence="85"})`.

Exact Data Match sensitive types are not supported outside of Groups.

To use groups: `@(@{operator="And"; groups=@(@{name="Default"; operator="Or"; sensitivetypes=@(@{id="<<EDM SIT Id>>"; name="<<EDM SIT name>>"; maxcount="-1"; classifiertype="ExactMatch"; mincount="100"; confidencelevel="Medium"})})})`

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentExtensionMatchesWords

> Applicable: Security & Compliance

The ContentExtensionMatchesWords parameter specifies a condition for the auto-labeling policy rule that looks for words in file name extensions. You can specify multiple words separated by commas.

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

### -ContentPropertyContainsWords

> Applicable: Security & Compliance

The ContentPropertyContainsWords parameter specifies a condition for the auto-labeling policy rule that's based on a property match in content. The rule is applied to content that contains the specified property.

This parameter accepts values in the format: `"Property1:Value1,Value2","Property2:Value3,Value4",..."PropertyN:ValueN,ValueN"`.

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

### -DefaultSpoDocLibraryHasLabel

> Applicable: Security & Compliance

{{ Fill DefaultSpoDocLibraryHasLabel Description }}

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

### -Disabled

> Applicable: Security & Compliance

The Disabled parameter specifies whether the case hold rule is enabled or disabled. Valid values are:

- $true: The rule is disabled.
- $false: The rule is enabled. This value is the default.

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

### -DocumentCreatedBy

> Applicable: Security & Compliance

{{ Fill DocumentCreatedBy Description }}

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

### -DocumentIsPasswordProtected

> Applicable: Security & Compliance

The DocumentIsPasswordProtected parameter specifies a condition for the auto-labeling policy rule that looks for password protected files (because the contents of the file can't be inspected). Password detection works for Office documents, compressed files (.zip, .7z, .rar, .tar, etc.), and .pdf files. Valid values are:

- $true: Look for password protected files.
- $false: Don't look for password protected files.

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

### -DocumentIsUnsupported

> Applicable: Security & Compliance

The DocumentIsUnsupported parameter specifies a condition for the auto-labeling policy rule that looks for files that can't be scanned. Valid values are:

- $true: Look for unsupported files that can't be scanned.
- $false: Don't look for unsupported files that can't be scanned.

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

### -DocumentNameMatchesWords

> Applicable: Security & Compliance

The DocumentNameMatchesWords parameter specifies a condition for the auto-labeling policy rule that looks for whole word matches in the name of message attachments. You can specify multiple words separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`

The maximum individual word length is 128 characters. The maximum number of words is 50.

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

### -DocumentSizeOver

> Applicable: Security & Compliance

The DocumentSizeOver parameter specifies a condition for the auto-labeling policy rule that looks for messages where any attachment is greater than the specified size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

You can use this condition in auto-labeling policy rules that are scoped only to Exchange.

```yaml
Type: Microsoft.Exchange.Data.ByteQuantifiedSize
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAccessScope

> Applicable: Security & Compliance

The ExceptIfAccessScopeAccessScope parameter specifies an exception for the auto-labeling policy rule that's based on the access scope of the content. The rule isn't applied to content that matches the specified access scope. Valid values are:

- InOrganization: The rule isn't applied to content that's accessible inside the organization.
- NotInOrganization: The rule isn't applied to content that's accessible outside the organization.
- None: The exception isn't used.

```yaml
Type: AccessScope
Parameter Sets: (All)
Aliases:
Accepted values: InOrganization, NotInOrganization, None

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressContainsWords

> Applicable: Security & Compliance

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfAnyOfRecipientAddressMatchesPatterns

> Applicable: Security & Compliance

The ExceptIfAnyOfRecipientAddressMatchesPatterns parameter specifies an exception for the auto-labeling policy rule that looks for text patterns in recipient email addresses by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

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

### -ExceptIfContentContainsSensitiveInformation

> Applicable: Security & Compliance

The ExceptIfContentContainsSensitiveInformation parameter specifies an exception for the auto-labeling policy rule that's based on a sensitive information type match in content. The rule isn't applied to content that contains the specified sensitive information type.

This parameter uses the basic syntax `@(@{Name="SensitiveInformationType1";[minCount="Value"],@{Name="SensitiveInformationType2";[minCount="Value"],...)`. For example, `@(@{Name="U.S. Social Security Number (SSN)"; minCount="2"},@{Name="Credit Card Number"})`.

```yaml
Type: PswsHashtable[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfContentExtensionMatchesWords

> Applicable: Security & Compliance

The ExceptIfContentExtensionMatchesWords parameter specifies an exception for the auto-labeling policy rule that looks for words in file name extensions. You can specify multiple words separated by commas.

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

### -ExceptIfContentPropertyContainsWords

> Applicable: Security & Compliance

The ExceptIfContentPropertyContainsWords parameter specifies an exception for the auto-labeling policy rule that's based on a property match in content. The rule is not applied to content that contains the specified property.

This parameter accepts values in the format: `"Property1:Value1,Value2","Property2:Value3,Value4",..."PropertyN:ValueN,ValueN"`.

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

### -ExceptIfDocumentCreatedBy

> Applicable: Security & Compliance

{{ Fill ExceptIfDocumentCreatedBy Description }}

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

### -ExceptIfDocumentIsPasswordProtected

> Applicable: Security & Compliance

The ExceptIfDocumentIsPasswordProtected parameter specifies an exception for the auto-labeling policy rule that looks for password protected files (because the contents of the file can't be inspected). Password detection works for Office documents, compressed files (.zip, .7z, .rar, .tar, etc.), and .pdf files. Valid values are:

- $true: Look for password protected files.
- $false: Don't look for password protected files.

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

### -ExceptIfDocumentIsUnsupported

> Applicable: Security & Compliance

The ExceptIfDocumentIsUnsupported parameter specifies an exception for the auto-labeling policy rule that looks for files that can't be scanned. Valid values are:

- $true: Look for unsupported files that can't be scanned.
- $false: Don't look for unsupported files that can't be scanned.

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

### -ExceptIfDocumentNameMatchesWords

> Applicable: Security & Compliance

The ExceptIfDocumentNameMatchesWords parameter specifies an exception for the auto-labeling policy rule that looks for words or phrases in the name of message attachments. You can specify multiple words or phrases separated by commas.

- Single word: `"no_reply"`
- Multiple words: `no_reply,urgent,...`
- Multiple words and phrases: `"phrase 1",word1,"phrase with , or spaces",word2,...`

The maximum individual word or phrase length is 128 characters. The maximum number of words or phrases is 50.

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

### -ExceptIfDocumentSizeOver

> Applicable: Security & Compliance

The ExceptIfDocumentSizeOver parameter specifies an exception for the auto-labeling policy rule that looks for messages where any attachment is greater than the specified size.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

You can use this exception in auto-labeling policy rules that are scoped only to Exchange.

```yaml
Type: Microsoft.Exchange.Data.ByteQuantifiedSize
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFrom

> Applicable: Security & Compliance

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressContainsWords

> Applicable: Security & Compliance

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfFromAddressMatchesPatterns

> Applicable: Security & Compliance

The ExceptIfFromAddressMatchesPatterns parameter specifies an exception for the auto-labeling policy rule that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

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

### -ExceptIfFromMemberOf

> Applicable: Security & Compliance

The ExceptIfFromMemberOf parameter specifies an exception for the auto-labeling policy rule that looks for messages sent by group members. You identify the group members by their email addresses.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfHeaderMatchesPatterns

> Applicable: Security & Compliance

The HeaderMatchesPatterns parameter specifies an exception for the auto-labeling policy rule that looks for text patterns in a header field by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1","regular expression2",..."regular expressionN"`.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfProcessingLimitExceeded

> Applicable: Security & Compliance

The ExceptIfProcessingLimitExceeded parameter specifies an exception for the auto-labeling policy rule that looks for files where scanning couldn't complete. Valid values are:

- $true: Look for files where scanning couldn't complete.
- $false: Don't look for files where scanning couldn't complete.

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

### -ExceptIfRecipientDomainIs

> Applicable: Security & Compliance

The ExceptIfRecipientDomainIs parameter specifies an exception for the auto-labeling policy rule that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

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

### -ExceptIfSenderDomainIs

> Applicable: Security & Compliance

The ExceptIfSenderDomainIs parameter specifies an exception for the auto-labeling policy rule that looks for messages from senders with email address in the specified domains. You can specify multiple values separated by commas.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

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

### -ExceptIfSenderIPRanges

> Applicable: Security & Compliance

The ExceptIfSenderIpRanges parameter specifies an exception for the auto-labeling policy rule that looks for senders whose IP addresses matches the specified value, or fall within the specified ranges. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

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

### -ExceptIfSentTo

> Applicable: Security & Compliance

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExceptIfSentToMemberOf

> Applicable: Security & Compliance

The ExceptIfSentToMemberOf parameter specifies an exception for the auto-labeling policy rule that looks for messages sent to members of distribution groups, dynamic distribution groups, or mail-enabled security groups. You identify the groups by email address. You can specify multiple values separated by commas.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

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

### -ExceptIfSubjectMatchesPatterns

> Applicable: Security & Compliance

The ExceptIfSubjectMatchesPatterns parameter specifies an exception for the auto-labeling policy rule that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this exception in auto-labeling policies that are scoped only to Exchange.

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

### -ExpiryDate

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

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

> Applicable: Security & Compliance

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromAddressMatchesPatterns

> Applicable: Security & Compliance

The FromAddressMatchesPatterns parameter specifies a condition for the auto-labeling policy rule that looks for text patterns in the sender's email address by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

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

### -FromMemberOf

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: SmtpAddress[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeaderMatchesPatterns

> Applicable: Security & Compliance

The HeaderMatchesPatterns parameter specifies a condition for the auto-labeling policy rule that looks for text patterns in a header field by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1","regular expression2",..."regular expressionN"`.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProcessingLimitExceeded

> Applicable: Security & Compliance

The ProcessingLimitExceeded parameter specifies a condition for the auto-labeling policy rule that looks for files where scanning couldn't complete. You can use this condition to create rules that work together to identify and process messages where the content couldn't be fully scanned. Valid values are:

- $true: Look for files where scanning couldn't complete.
- $false: Don't look for files where scanning couldn't complete.

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

### -RecipientDomainIs

> Applicable: Security & Compliance

The RecipientDomainIs parameter specifies a condition for the auto-labeling policy rule that looks for recipients with email addresses in the specified domains. You can specify multiple domains separated by commas.

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

### -ReportSeverityLevel

> Applicable: Security & Compliance

The ReportSeverityLevel parameter specifies the severity level of the incident report for content detections based on the rule. Valid values are:

- None: You can't select this value if the rule has no actions configured.
- Low: This value is the default.
- Medium
- High

```yaml
Type: RuleSeverity
Parameter Sets: (All)
Aliases:
Accepted values: Low, Medium, High, None, Informational, Information

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RuleErrorAction

> Applicable: Security & Compliance

The RuleErrorAction parameter specifies what to do if an error is encountered during the evaluation of the rule. Valid values are:

- Ignore
- RetryThenBlock
- Blank (the value $null): This value is the default.

```yaml
Type: PolicyRuleErrorAction
Parameter Sets: (All)
Aliases:
Accepted values: Ignore, RetryThenBlock

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderDomainIs

> Applicable: Security & Compliance

The SenderDomainIs parameter specifies a condition for the auto-labeling policy rule that looks for messages from senders with email address in the specified domains. You can specify multiple values separated by commas.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

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

### -SenderIPRanges

> Applicable: Security & Compliance

The SenderIpRanges parameter specifies a condition for the auto-sensitivity policy rule that looks for senders whose IP addresses matches the specified value, or fall within the specified ranges. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: For example, 192.168.0.1-192.168.0.254.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25.

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

### -SentTo

> Applicable: Security & Compliance

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToMemberOf

> Applicable: Security & Compliance

The SentToMemberOf parameter specifies a condition for the auto-labeling policy rule that looks for messages sent to members of distribution groups, dynamic distribution groups, or mail-enabled security groups. You identify the groups by email address. You can specify multiple values separated by commas.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

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

### -SourceType

> Applicable: Security & Compliance

{{ Fill SourceType Description }}

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

### -SubjectMatchesPatterns

> Applicable: Security & Compliance

The SubjectMatchesPatterns parameter specifies a condition for the auto-labeling policy rule that looks for text patterns in the Subject field of messages by using regular expressions. You can specify multiple text patterns by using the following syntax: `"regular expression1"|"regular expression2"|..."regular expressionN"`.

The maximum individual regular expression length is 128 characters. The maximum number of regular expressions is 10.

You can use this condition in auto-labeling policies that are scoped only to Exchange.

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

> Applicable: Security & Compliance

The WhatIf switch doesn't work in Security & Compliance PowerShell.

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

### -Workload

> Applicable: Security & Compliance

The Workload parameter specifies the workload. Valid values are:

- Exchange
- OneDriveForBusiness
- SharePoint

```yaml
Type: Workload
Parameter Sets: (All)
Aliases:
Accepted values: Exchange, SharePoint, OneDriveForBusiness

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
