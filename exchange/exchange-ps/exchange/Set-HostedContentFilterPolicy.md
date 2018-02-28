---
applicable: Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Set-HostedContentFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-HostedContentFilterPolicy cmdlet to modify the settings of content filter policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-HostedContentFilterPolicy [-Identity] <HostedContentFilterPolicyIdParameter> [-AddXHeaderValue <String>]
 [-AdminDisplayName <String>] [-AllowedSenderDomains <MultiValuedProperty>]
 [-AllowedSenders <MultiValuedProperty>] [-BlockedSenderDomains <MultiValuedProperty>]
 [-BlockedSenders <MultiValuedProperty>]
 [-BulkSpamAction <MoveToJmf | AddXHeader | ModifySubject | Redirect | Delete | Quarantine | NoAction>]
 [-BulkThreshold <Int32>] [-Confirm] [-DownloadLink <$true | $false>]
 [-EnableEndUserSpamNotifications <$true | $false>] [-EnableLanguageBlockList <$true | $false>]
 [-EnableRegionBlockList <$true | $false>] [-EndUserSpamNotificationCustomFromAddress <SmtpAddress>]
 [-EndUserSpamNotificationCustomFromName <String>] [-EndUserSpamNotificationCustomSubject <String>]
 [-EndUserSpamNotificationFrequency <Int32>]
 [-EndUserSpamNotificationLanguage <Default | English | French | German | Italian | Japanese | Spanish | Korean | Portuguese | Russian | ChineseSimplified | ChineseTraditional | Amharic | Arabic | Bulgarian | BengaliIndia | Catalan | Czech | Cyrillic | Danish | Greek | Estonian | Basque | Farsi | Finnish | Filipino | Galician | Gujarati | Hebrew | Hindi | Croatian | Hungarian | Indonesian | Icelandic | Kazakh | Kannada | Lithuanian | Latvian | Malayalam | Marathi | Malay | Dutch | NorwegianNynorsk | Norwegian | Oriya | Polish | PortuguesePortugal | Romanian | Slovak | Slovenian | SerbianCyrillic | Serbian | Swedish | Swahili | Tamil | Telugu | Thai | Turkish | Ukrainian | Urdu | Vietnamese>]
 [-EndUserSpamNotificationLimit <Int32>] [-Group <String>]
 [-HighConfidenceSpamAction <MoveToJmf | AddXHeader | ModifySubject | Redirect | Delete | Quarantine | NoAction>]
 [-IncreaseScoreWithBizOrInfoUrls <Off | On | Test>] [-IncreaseScoreWithImageLinks <Off | On | Test>]
 [-IncreaseScoreWithNumericIps <Off | On | Test>] [-IncreaseScoreWithRedirectToOtherPort <Off | On | Test>]
 [-InlineSafetyTipsEnabled <$true | $false>] [-LanguageBlockList <MultiValuedProperty>] [-MakeDefault]
 [-MarkAsSpamBulkMail <Off | On | Test>] [-MarkAsSpamEmbedTagsInHtml <Off | On | Test>]
 [-MarkAsSpamEmptyMessages <Off | On | Test>] [-MarkAsSpamFormTagsInHtml <Off | On | Test>]
 [-MarkAsSpamFramesInHtml <Off | On | Test>] [-MarkAsSpamFromAddressAuthFail <Off | On | Test>]
 [-MarkAsSpamJavaScriptInHtml <Off | On | Test>] [-MarkAsSpamNdrBackscatter <Off | On | Test>]
 [-MarkAsSpamObjectTagsInHtml <Off | On | Test>] [-MarkAsSpamSensitiveWordList <Off | On | Test>]
 [-MarkAsSpamSpfRecordHardFail <Off | On | Test>] [-MarkAsSpamWebBugsInHtml <Off | On | Test>]
 [-MatchSubDomains] [-ModifySubjectValue <String>]
 [-PhishSpamAction <MoveToJmf | AddXHeader | ModifySubject | Redirect | Delete | Quarantine | NoAction>]
 [-QuarantineRetentionPeriod <Int32>] [-RedirectToRecipients <MultiValuedProperty>]
 [-RegionBlockList <MultiValuedProperty>]
 [-SpamAction <MoveToJmf | AddXHeader | ModifySubject | Redirect | Delete | Quarantine | NoAction>]
 [-TestModeAction <None | AddXHeader | BccMessage>] [-TestModeBccToRecipients <MultiValuedProperty>] [-WhatIf]
 [-ZapEnabled <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-HostedContentFilterPolicy -Identity "Contoso Content Filter Policy" -HighConfidenceSpamAction Redirect -SpamAction Redirect -RedirectToRecipients chris@contoso.com -FalsePositiveAdditionalRecipients michelle@contoso.com
```

This example modifies the content filter policy named Contoso Content Filter Policy with the following settings:

Redirect messages that are definitely spam or that may be spam to chris@contoso.com.

Send copies of spam quarantine false positive submissions to michelle@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the content filter policy you want to modify. You can use any value that uniquely identifies the policy. For example, you can specify the name, GUID or distinguished name (DN) of the content filter policy.

```yaml
Type: HostedContentFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddXHeaderValue
The AddXHeaderValue parameter specifies the X-header value to add to spam messages when an action parameter is set to the value AddXHeader. The action parameters that use the value of this parameter are:

- BulkSpamAction

- HighConfidenceSpamAction

- PhishSpamAction

- SpamAction

The value that you specify for this parameter must contain less than 256 characters, and can't contain spaces.

Note that when the TestModeAction parameter is set to AddXHeader, the following X-header value is automatically added to the message: X-CustomSpam: This message was filtered by the custom spam filter option.

An X-header is a user-defined, unofficial header field that exists in the message header. X-headers aren't specifically mentioned in RFC 2822, but the use of an undefined header field starting with X- has become an accepted way to add unofficial header fields to a message.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminDisplayName
The AdminDisplayName parameter specifies a description for the policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedSenderDomains
The AllowedSenderDomains parameter specifies trusted domains that aren't processed by the spam filter. Messages from senders in these domains are stamped with SFV:SKA in the X-Forefront-Antispam-Report header and receive a spam confidence level (SCL) of -1, so the messages are delivered to the recipient's inbox. Valid values are one or more SMTP domains.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedSenders
The AllowedSenders parameter specifies a list of trusted senders that aren't processed by the spam filter. Messages from these senders are stamped with SFV:SKA in the X-Forefront-Antispam-Report header and receive an SCL of -1, so the messages are delivered to the recipient's inbox. Valid values are one or more SMTP email addresses.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedSenderDomains
The BlockedSenderDomains parameter specifies domains that are always marked as spam sources. Messages from senders in these domains are stamped with SFV:SKB in the X-Forefront-Antispam-Report header and receive an SCL of 9 (high confidence spam). Valid values are one or more SMTP domains.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedSenders
The BlockedSenders parameter specifies senders that are always marked as spam sources. Messages from these senders are stamped with SFV:SKB in the X-Forefront-Antispam-Report header and receive an SCL of 9 (high confidence spam). Valid values are one or more SMTP email addresses.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BulkSpamAction
The BulkSpamAction parameter specifies the action to take on messages that are classified as bulk email (also known as gray mail). Valid values are:

- AddXHeader: The value specified by the AddXHeaderValue parameter is added to the message.

- Delete

- ModifySubject: The value specified by the ModifySubjectValue parameter is prepended to the subject of the message.

- MoveToJmf: Move the message to the user's Junk Email folder. This is the default value, and is required by zero-hour auto purge (ZAP) for spam.

- Quarantine

- Redirect: Redirect the message to the recipients specified by the RedirectToRecipients parameter.

```yaml
Type: MoveToJmf | AddXHeader | ModifySubject | Redirect | Delete | Quarantine | NoAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BulkThreshold
The BulkThreshold parameter allows you to configure a bulk email threshold setting. You can choose a threshold setting, based on the bulk complaint levels, from 1 - 9, where 1 marks most bulk email as spam, and 9 allows the most bulk email to be delivered. The default value is 7. For more information, check out Configure your content filter policies.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DownloadLink
The DownloadLink parameter shows or hides a link in end-user spam notification messages to download the Junk Email Reporting Tool plugin for Outlook. Valid input for this parameter is $true or $false. The default value is $false.

This parameter is only useful if the EnableEndUserSpamNotifications parameter is set to $true.

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

### -EnableEndUserSpamNotifications
The EnableEndUserSpamNotification parameter enables for disables sending end-user spam quarantine notification messages. Valid input for this parameter is $true or $false. The default value is $false.

End-user spam notification messages periodically alert users when they have messages in the quarantine. When you enable end-user spam notifications, you may also specify values for the EndUserSpamNotificationCustomFromAddress, EndUserSpamNotificationCustomFromName, and EndUserSpamNotificationCustomSubject parameters.

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

### -EnableLanguageBlockList
The EnableLanguageBlockList parameter enables or disables blocking email messages that are written in specific languages, regardless of the message contents. Valid input for this parameter is $true or $false. The default value is $false.

When you enable the language block list, you may specify one or more languages by using the LanguageBlockList parameter.

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

### -EnableRegionBlockList
The EnableRegionBlockList parameter enables or disables blocking email messages that are sent from specific countries or regions, regardless of the message contents. Valid input for this parameter is $true or $false. The default value is $false.

When you enable the region block list, you may specify one or more regions by using the RegionBlockList parameter.

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

### -EndUserSpamNotificationCustomFromAddress
The EndUserSpamNotificationCustomFromAddress parameter specifies a custom From address for end-user spam notification messages. Valid input for this parameter is an SMTP email address.

This parameter is visible but not active, and may be deprecated in a future version of Exchange Online Protection.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserSpamNotificationCustomFromName
The EndUserSpamNotificationCustomFromName parameter specifies a custom display name in the From field for end-user spam notification messages. If the value includes spaces, enclose the value in quotation marks (").

This parameter is visible but not active, and may be deprecated in a future version of Exchange Online Protection.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserSpamNotificationCustomSubject
The EndUserSpamNotificationCustomSubject parameter specifies a custom subject for end-user spam notification messages. If the value includes spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserSpamNotificationFrequency
The EndUserSpamNotificationFrequency parameter specifies the repeat interval in days that end-user spam notification messages are sent. Valid input for this parameter is an integer between 1 and 15. The default value is 3.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserSpamNotificationLanguage
The EndUserSpamNotificationLanguage parameter specifies the language of end-user spam notification messages. The default value is Default. This means the default language of end-user spam notification messages is the default language of the cloud-based organization.

```yaml
Type: Default | English | French | German | Italian | Japanese | Spanish | Korean | Portuguese | Russian | ChineseSimplified | ChineseTraditional | Amharic | Arabic | Bulgarian | BengaliIndia | Catalan | Czech | Cyrillic | Danish | Greek | Estonian | Basque | Farsi | Finnish | Filipino | Galician | Gujarati | Hebrew | Hindi | Croatian | Hungarian | Indonesian | Icelandic | Kazakh | Kannada | Lithuanian | Latvian | Malayalam | Marathi | Malay | Dutch | NorwegianNynorsk | Norwegian | Oriya | Polish | PortuguesePortugal | Romanian | Slovak | Slovenian | SerbianCyrillic | Serbian | Swedish | Swahili | Tamil | Telugu | Thai | Turkish | Ukrainian | Urdu | Vietnamese
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserSpamNotificationLimit
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HighConfidenceSpamAction
The HighConfidenceSpamAction parameter specifies the action to take on messages that are classified as high confidence spam (not spam, bulk email, or phishing). Valid values are:

- AddXHeader: The value specified by the AddXHeaderValue parameter is added to the message.

- Delete

- ModifySubject: The value specified by the ModifySubjectValue parameter is prepended to the subject of the message.

- MoveToJmf: Move the message to the user's Junk Email folder. This is the default value, and is required by zero-hour auto purge (ZAP) for spam.

- Quarantine: Move the message to the quarantine.

- Redirect: Redirect the message to the recipients specified by the RedirectToRecipients parameter.

```yaml
Type: MoveToJmf | AddXHeader | ModifySubject | Redirect | Delete | Quarantine | NoAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncreaseScoreWithBizOrInfoUrls
The IncreaseScoreWithBizOrInfoUrls parameter increases the spam score of messages that contain links to .biz or .info domains. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncreaseScoreWithImageLinks
The IncreaseScoreWithImageLinks parameter increases the spam score of messages that contain image links to remote websites. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncreaseScoreWithNumericIps
The IncreaseScoreWithNumericIps parameter increases the spam score of messages that contain links to IP addresses. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncreaseScoreWithRedirectToOtherPort
The IncreaseScoreWithRedirectToOtherPort parameter increases the spam score of messages that contain links that redirect to other TCP ports. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InlineSafetyTipsEnabled
The InlineSafetyTipsEnabled parameter specifies whether to enable or disable safety tips that are shown to recipients in messages. Valid values are:

- $true: Safety tips are enabled. This is the default value.

- $false: Safety tips are disabled.

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

### -LanguageBlockList
The LanguageBlockList parameter specifies the languages to block when messages are blocked based on their language. Valid input for this parameter is a supported ISO 639-1 lowercase two-letter language code. You can specify multiple values separated by commas. This parameter is only used when the EnableRegionBlockList parameter is set to $true.

A reference for two-letter language codes is available at the Library of Congress website: ISO 639-2 Code (https://www.loc.gov/standards/iso639-2/php/code\_list.php). Note that not all possible language codes are available as input for this parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MakeDefault
The MakeDefault switch makes the specified content filter policy the default content filter policy. You don't have to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamBulkMail
The MarkAsSpamBulkMail parameter classifies the message as spam when the message is identified as a bulk email message (also known as gray mail). Valid values for this parameter are Off, On or Test. The default value is On.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamEmbedTagsInHtml
The MarkAsSpamEmbedTagsInHtml parameter classifies the message as spam when the message contains HTML \<embed\> tags. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamEmptyMessages
The MarkAsSpamEmptyMessages parameter classifies the message as spam when the message is empty. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamFormTagsInHtml
The MarkAsSpamFormTagsInHtml parameter classifies the message as spam when the message contains HTML \<form\> tags. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamFramesInHtml
The MarkAsSpamFramesInHtml parameter classifies the message as spam when the message contains HTML \<frame\> or \<iframe\> tags. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamFromAddressAuthFail
The MarkAsSpamFromAddressAuthFail parameter classifies the message as spam when Sender ID filtering encounters a hard fail. Valid values for this parameter are Off or On. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamJavaScriptInHtml
The MarkAsSpamJavaScriptInHtml parameter classifies the message as spam when the message contains JavaScript or VBScript. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamNdrBackscatter
The MarkAsSpamNdrBackscatter parameter classifies the message as spam when the message is a non-delivery report (NDR) to a forged sender. Valid values for this parameter are Off or On. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamObjectTagsInHtml
The MarkAsSpamObjectTagsInHtml parameter classifies the message as spam when the message contains HTML \<object\> tags. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamSensitiveWordList
The MarkAsSpamSensitiveWordList parameter classifies the message as spam when the message contains words from the sensitive words list. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamSpfRecordHardFail
The MarkAsSpamSpfRecordHardFail parameter classifies the message as spam when Sender Policy Framework (SPF) record checking encounters a hard fail. Valid values for this parameter are Off or On. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MarkAsSpamWebBugsInHtml
The MarkAsSpamWebBugsInHtml parameter classifies the message as spam when the message contains web bugs. Valid values for this parameter are Off, On or Test. The default value is Off.

```yaml
Type: Off | On | Test
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MatchSubDomains
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModifySubjectValue
The ModifySubjectValue parameter specifies the text to prepend to the existing subject of messages when an action parameter is set to the value ModifySubject. The action parameters that use the value of this parameter are:

- BulkSpamAction

- HighConfidenceSpamAction

- PhishSpamAction

- SpamAction

The value you specify must contain less than 256 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhishSpamAction
The PhishSpamAction parameter specifies the action to take on messages that are classified as phishing (messages that use fraudulent links or spoofed domains to get personal information). Valid values are:

- AddXHeader: The value specified by the AddXHeaderValue parameter is added to the message.

- Delete

- ModifySubject: The value specified by the ModifySubjectValue parameter is prepended to the subject of the message.

- MoveToJmf: Move the message to the user's Junk Email folder. This is the default value, and is required by zero-hour auto purge (ZAP) for spam.

- Quarantine

- Redirect: Redirect the message to the recipients specified by the RedirectToRecipients parameter.

```yaml
Type: MoveToJmf | AddXHeader | ModifySubject | Redirect | Delete | Quarantine | NoAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuarantineRetentionPeriod
The QuarantineRetentionPeriod parameter specifies the length of time in days that spam messages remain in the quarantine. Valid input for this parameter is an integer between 1 and 15. The default value is 15.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RedirectToRecipients
The RedirectToRecipients parameter specifies the email addresses of replacement recipients when an action parameter is set to the value Redirect. The action parameters that use the email addresses in this parameter are:

- BulkSpamAction

- HighConfidenceSpamAction

- PhishSpamAction

- SpamAction

You can specify multiple email addresses separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegionBlockList
The RegionBlockList parameter specifies the region to block when messages are blocked based on their source region. Valid input for this parameter is a supported ISO 3166-1 uppercase two-letter country code. You can specify multiple values separated by commas. This parameter is only used when the EnableRegionBlockList parameter is set to $true.

A reference for two-letter country codes is available at the International Organization for Standardization (ISO) website: ISO 3166-1 decoding table (https://www.iso.org/iso/country\_codes/iso-3166-1\_decoding\_table.htm). Note that not all possible country codes are available as input for this parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpamAction
The SpamAction parameter specifies the action to take on messages that are classified as spam (not high confidence spam, bulk email, or phishing)). Valid values are:

- AddXHeader: The value specified by the AddXHeaderValue parameter is added to the message.

- Delete

- ModifySubject: The value specified by the ModifySubjectValue parameter is prepended to the subject of the message.

- MoveToJmf: Move the message to the user's Junk Email folder. This is the default value, and is required by zero-hour auto purge (ZAP) for spam.

- Quarantine

- Redirect: Redirect the message to the recipients specified by the RedirectToRecipients parameter.

```yaml
Type: MoveToJmf | AddXHeader | ModifySubject | Redirect | Delete | Quarantine | NoAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestModeAction
The TestModeAction parameter specifies the additional action to take on messages when the IncreaseScoreWith or MarkAsSpam parameters that are set to the value Test. Valid values are:

- None (This is the default value)

- AddXHeader: The X-header value X-CustomSpam: This message was filtered by the custom spam filter option is added to the message.

- BccMessage: Redirect the message to the recipients specified by the TestModeBccToRecipients parameter.

```yaml
Type: None | AddXHeader | BccMessage
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestModeBccToRecipients
The TestModeBccToRecipients parameter specifies the blind carbon copy recipients to add to spam messages when the TestModeAction action parameter is set to the value BccMessage.

Valid input for this parameter is an email address. Separate multiple email addresses with commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ZapEnabled
The ZapEnabled parameter specifies whether to enable zero-hour auto purge (ZAP) for spam. ZAP detects unread spam messages that have already been delivered to the user's Inbox. Valid values are:

- $true: ZAP for spam is enabled. Unread spam messages that are detected in the user's Inbox are automatically moved to the Junk Email folder. This is the default value.

- $false: ZAP for spam is disabled.

Note: ZAP for spam requires that the following action parameters are set to the value MoveToJmf:

- BulkSpamAction

- HighConfidenceSpamAction

- PhishSpamAction

- SpamAction

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/f597aa65-baa7-49d0-8832-2a300073f211.aspx)
