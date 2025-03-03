---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-reportsubmissionpolicy
applicable: Exchange Online
title: Set-ReportSubmissionPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-ReportSubmissionPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-ReportSubmissionPolicy cmdlet to modify the report submission policy in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ReportSubmissionPolicy [-Identity] <ReportSubmissionPolicyIdParameter>
 [-Confirm]
 [-DisableQuarantineReportingOption <Boolean>]
 [-DisableUserSubmissionOptions <Boolean>]
 [-EnableCustomizedMsg <Boolean>]
 [-EnableCustomNotificationSender <Boolean>]
 [-EnableOrganizationBranding <Boolean>]
 [-EnableReportToMicrosoft <Boolean>]
 [-EnableThirdPartyAddress <Boolean>]
 [-EnableUserEmailNotification <Boolean>]
 [-JunkReviewResultMessage <String>]
 [-NotJunkReviewResultMessage <String>]
 [-NotificationFooterMessage <String>]
 [-NotificationSenderAddress <MultiValuedProperty>]
 [-NotificationsForCleanSubmissionAirInvestigationsEnabled <Boolean>]
 [-NotificationsForPhishMalwareSubmissionAirInvestigationsEnabled <Boolean>]
 [-NotificationsForSpamSubmissionAirInvestigationsEnabled <Boolean>]
 [-NotificationsForSubmissionAirInvestigationsEnabled <Boolean>]
 [-OnlyShowPhishingDisclaimer <Boolean>]
 [-PhishingReviewResultMessage <String>]
 [-PostSubmitMessage <String>]
 [-PostSubmitMessageEnabled <Boolean>]
 [-PostSubmitMessageForJunk <String>]
 [-PostSubmitMessageForNotJunk <String>]
 [-PostSubmitMessageForPhishing <String>]
 [-PostSubmitMessageTitle <String>]
 [-PostSubmitMessageTitleForJunk <String>]
 [-PostSubmitMessageTitleForNotJunk <String>]
 [-PostSubmitMessageTitleForPhishing <String>]
 [-PreSubmitMessage <String>]
 [-PreSubmitMessageEnabled <Boolean>]
 [-PreSubmitMessageForJunk <String>]
 [-PreSubmitMessageForNotJunk <String>]
 [-PreSubmitMessageForPhishing <String>]
 [-PreSubmitMessageTitle <String>]
 [-PreSubmitMessageTitleForJunk <String>]
 [-PreSubmitMessageTitleForNotJunk <String>]
 [-PreSubmitMessageTitleForPhishing <String>]
 [-ReportChatMessageEnabled <Boolean>]
 [-ReportChatMessageToCustomizedAddressEnabled <Boolean>]
 [-ReportJunkAddresses <MultiValuedProperty>]
 [-ReportJunkToCustomizedAddress <Boolean>]
 [-ReportNotJunkAddresses <MultiValuedProperty>]
 [-ReportNotJunkToCustomizedAddress <Boolean>]
 [-ReportPhishAddresses <MultiValuedProperty>]
 [-ReportPhishToCustomizedAddress <Boolean>]
 [-ThirdPartyReportAddresses <MultiValuedProperty>]
 [-UserSubmissionOptions <Int32>]
 [-UserSubmissionOptionsMessage <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The report submission policy controls most of the settings for user submissions in the Microsoft Defender portal at <https://security.microsoft.com/securitysettings/userSubmission>.

The report submission rule (the SentTo parameter \*-ReportSubmissionRule cmdlets) controls the email address of the reporting mailbox where user reported messages are sent.

When you set the email address of the reporting mailbox in the Microsoft Defender portal, the same email address is also set in the following parameters in the \*-ReportSubmissionPolicy cmdlets:

- Microsoft integrated reporting using Microsoft reporting tools in Outlook: The ReportJunkAddresses, ReportNotJunkAddresses, and ReportPhishAddresses parameters.
- Microsoft integrated reporting using third-party tools in Outlook: The ThirdPartyReportAddresses parameter.

Although it's not absolutely required, it makes sense to keep the email address consistent in the related parameters in the \*-ReportSubmissionPolicy and \*-ReportSubmissionRule cmdlets.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ReportSubmissionPolicy -Identity DefaultReportSubmissionPolicy -EnableReportToMicrosoft $true -EnableThirdPartyAddress $false -ThirdPartyReportAddresses $null -ReportJunkToCustomizedAddress $false -ReportJunkAddresses $null -ReportNotJunkToCustomizedAddress $false -ReportNotJunkAddresses $null -ReportPhishToCustomizedAddress $false -ReportPhishAddresses $null

Get-ReportSubmissionRule | Remove-ReportSubmissionRule
```

This example turns on reporting in Outlook, uses Microsoft reporting tools in Outlook, but allows users to report messages to Microsoft only. The reporting mailbox is not used.

**Notes**:

- You can use this example (and the other examples) without concern for the existing values of the specified parameters. Depending on your current configuration, some of the parameters might already be set to the required values and therefore might not be required.
- If the report submission rule doesn't already exist (the Get-ReportSubmissionRule command returns no output), you don't need to run the second command to remove it.

### Example 2
```powershell
$usersub = "reportedmessages@contoso.com"

Set-ReportSubmissionPolicy -Identity DefaultReportSubmissionPolicy -EnableReportToMicrosoft $true -EnableThirdPartyAddress $false -ThirdPartyReportAddresses $null -ReportJunkToCustomizedAddress $true -ReportJunkAddresses $usersub -ReportNotJunkToCustomizedAddress $true -ReportNotJunkAddresses $usersub -ReportPhishToCustomizedAddress $true -ReportPhishAddresses $usersub

New-ReportSubmissionRule -Name DefaultReportSubmissionRule -ReportSubmissionPolicy DefaultReportSubmissionPolicy -SentTo $usersub
```

This example turns on reporting in Outlook, uses Microsoft reporting tools in Outlook, allows users to report messages to Microsoft, and sends reported messages to the specified reporting mailbox.

The required third command is different based on whether you already have a report submission rule:

- If you don't already have a report submission rule (the Get-ReportSubmissionRule cmdlet returns nothing), run the New-ReportSubmissionRule command as described.
- If you already have a report submission rule (the Get-ReportSubmissionRule cmdlet returns output), run the following command instead: `Set-ReportSubmissionRule -Name DefaultReportSubmissionRule -SentTo $usersub`.

### Example 3
```powershell
$usersub = "userreportedmessages@fabrikam.com"

Set-ReportSubmissionPolicy -Identity DefaultReportSubmissionPolicy -EnableReportToMicrosoft $false -EnableThirdPartyAddress $false -ThirdPartyReportAddresses $null -ReportJunkToCustomizedAddress $true -ReportJunkAddresses $usersub -ReportNotJunkToCustomizedAddress $true -ReportNotJunkAddresses $usersub -ReportPhishToCustomizedAddress $true -ReportPhishAddresses $usersub

New-ReportSubmissionRule -Name DefaultReportSubmissionRule -ReportSubmissionPolicy DefaultReportSubmissionPolicy -SentTo $usersub
```

This example turns on reporting in Outlook, uses Microsoft reporting tools in Outlook, and sends reported messages to the specified reporting mailbox only (users can't report messages to Microsoft).

The required third command is different based on whether you already have a report submission rule:

- If you don't already have a report submission rule (the Get-ReportSubmissionRule cmdlet returns nothing), run the New-ReportSubmissionRule command as described.
- If you already have a report submission rule (the Get-ReportSubmissionRule cmdlet returns output), run the following command instead: `Set-ReportSubmissionRule -Name DefaultReportSubmissionRule -SentTo $usersub`.

### Example 4
```powershell
$usersub = "thirdpartyreporting@wingtiptoys.com"

Set-ReportSubmissionPolicy -Identity DefaultReportSubmissionPolicy -EnableReportToMicrosoft $false -EnableThirdPartyAddress $true -ThirdPartyReportAddresses $usersub -ReportJunkToCustomizedAddress $false -ReportJunkAddresses $null -ReportNotJunkToCustomizedAddress $false -ReportNotJunkAddresses $null -ReportPhishToCustomizedAddress $false -ReportPhishAddresses $null

New-ReportSubmissionRule -Name DefaultReportSubmissionRule -ReportSubmissionPolicy DefaultReportSubmissionPolicy -SentTo $usersub
```

This example turns on reporting in Outlook, but uses third-party reporting tools in Outlook to send reported messages to the specified reporting mailbox in Exchange Online.

The required third command is different based on whether you already have a report submission rule:

- If you don't already have a report submission rule (the Get-ReportSubmissionRule cmdlet returns nothing), run the New-ReportSubmissionRule command as described.
- If you already have a report submission rule (the Get-ReportSubmissionRule cmdlet returns output), run the following command instead: `Set-ReportSubmissionRule -Name DefaultReportSubmissionRule -SentTo $usersub`.

### Example 5
```powershell
Set-ReportSubmissionPolicy -Identity DefaultReportSubmissionPolicy -EnableReportToMicrosoft $false -EnableThirdPartyAddress $true -ThirdPartyReportAddresses $usersub -ReportJunkToCustomizedAddress $false -ReportJunkAddresses $null -ReportNotJunkToCustomizedAddress $false -ReportNotJunkAddresses $null -ReportPhishToCustomizedAddress $false -ReportPhishAddresses $null

Get-ReportSubmissionRule | Remove-ReportSubmissionRule
```

This example turns off the Microsoft integrated reporting. Microsoft reporting tools in Outlook are not available to users and messages reported by third-party tools in Outlook are not available on the Submissions page in the Microsoft Defender portal.

If the report submission rule doesn't already exist (the Get-ReportSubmissionRule command returns no output), you don't need to run the second command to remove it.

## PARAMETERS

### -Identity
The Identity parameter specifies the report submission policy that you want to modify. The only available policy is named DefaultReportSubmissionPolicy.

```yaml
Type: ReportSubmissionPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableQuarantineReportingOption
The DisableQuarantineReportingOption parameter allows or prevents users from reporting messages in quarantine. Valid values are:

- $true: Users can't report quarantined messages from quarantine.
- $false: Users can report quarantined messages from quarantine. This is the default value.

This parameter is meaningful only reporting in Outlook is enabled as described in the EnableReportToMicrosoft parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableUserSubmissionOptions
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableCustomizedMsg
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableCustomNotificationSender
The EnableCustomNotificationSender parameter specifies whether a custom sender email address is used for result messages after an admin reviews and marks the reported messages as junk, not junk, or phishing. Valid values are:

- $true: Use a custom Microsoft 365 sender email address.
- $false: Use the default sender email address. This is the default value.

You specify the sender email address using the NotificationSenderAddress parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOrganizationBranding
The EnableOrganizationBranding parameter specifies whether to show the company logo in the footer of result messages that users receive after an admin reviews and marks the reported messages as junk, not junk, or phishing. Valid values are:

- $true: Use the company logo in the footer text instead of the Microsoft logo.
- $false: Don't use the company logo in the footer text. Use the Microsoft logo.

This parameter is meaningful only when reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableReportToMicrosoft
The EnableReportToMicrosoft parameter specifies whether Microsoft integrated reporting experience is enabled or disabled. Valid values are $true or $false.

The value $true for this parameter enables reporting in Outlook. The following configurations are possible:

- **Microsoft reporting tools are available in Outlook for users to report messages to Microsoft only (the reporting mailbox isn't used)**: The ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameter values are $false.
- **Microsoft reporting tools are available in Outlook for users to report messages to Microsoft and reporting mailbox (reported messages are sent to the specified mailbox)**: The ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameter values are $true. To create the policy, use the same email address in the ReportJunkAddresses, ReportNotJunkAddresses, and ReportPhisAddresses parameters, and also in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlet. This is the default configuration.
- **Using a third party add-in in Outlook for users to report to Microsoft and reporting mailbox**: The ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameter values are $false. The EnableThirdPartyAddress parameter value is $true. To create the policy, use the same email address in the ThirdPartyReportAddresses parameter and also in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlets.

The value $false for this parameter disables reporting in Outlook. The following configurations are possible:

- **Microsoft reporting tools are available in Outlook, but reported messages are sent only to the reporting mailbox**: The ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameter values are $true. To create the policy, use the same email address in the ReportJunkAddresses, ReportNotJunkAddresses, and ReportPhisAddresses parameters, and also in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlet.
- **Reporting in Outlook is disabled. Microsoft reporting tools are not available in Outlook. Any messages reported by users in Outlook with third-party reporting tools aren't visible on the Submissions page in the Microsoft Defender portal**: The EnableThirdPartyAddress, ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameter values are $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableThirdPartyAddress
The EnableThirdPartyAddress parameter specifies whether you're using third-party reporting tools in Outlook instead of Microsoft tools to send messages to the reporting mailbox in Exchange Online. Valid values are $true or $false.


The value $true enables Microsoft to capture email information from the third-party reporting mailbox. The following configurations are possible:

- **Reported messages are sent only to the reporting mailbox**: Microsoft pulls metadata from messages sent to the Exchange Online reporting mailbox by third-party tools. Microsoft uses the metadata to populate the submissions page in the Microsoft Defender Portal and fire alerts. You also need to set the EnableReportToMicrosoft parameter value to $false. Use the same email address in the ThirdPartyReportAddresses parameter and also in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlets.
- **Reported messages are sent to both Microsoft and reporting mailbox**: Microsoft pulls the metadata and message content from messages sent to the Exchange Online reporting mailbox by third-party tools. Microsoft uses the metadata to populate the submissions page in the Microsoft Defender Portal and fire alerts. The email is used to generate result for the submissions. You also need to set the EnableReportToMicrosoft parameter value to $true. Use the same email address in the ThirdPartyReportAddresses parameter and also in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlets.

The value $false means third-party reporting tools in Outlook aren't used.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableUserEmailNotification
The EnableUserEmailNotification parameter species whether users receive result messages after an admin reviews and marks the reported messages as junk, not junk, or phishing. Valid values are:

- $true: Customized admin review result messages are sent. This value is required when user reported messages go only to the reporting mailbox (the value of the EnableReportToMicrosoft parameter is $false).
- $false: Customized admin review result messages are not sent.

Use the JunkReviewResultMessage, NotJunkReviewResultMessage, PhishingReviewResultMessage parameters to configure the message body text that's used for each verdict.

Use the NotificationFooterMessage parameter for the footer that's used for all verdicts (junk, not junk, and phishing).

This parameter is meaningful only when reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JunkReviewResultMessage
The JunkReviewResultMessage parameter specifies the custom text to use in result messages after an admin reviews and marks the reported messages as junk. If the value contains spaces, enclose the value in quotation marks (").

This parameter is meaningful only when the value of the EnableUserEmailNotification parameter is $true and reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

Use the NotificationFooterMessage parameter to customize the footer text of result messages.

Use the NotificationSenderAddress parameter to customize the sender email address of result messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotJunkReviewResultMessage
The NotJunkReviewResultMessage parameter specifies the custom text to use in result messages after an admin reviews and marks the reported messages as not junk. If the value contains spaces, enclose the value in quotation marks (").

This parameter is meaningful only when the value of the EnableUserEmailNotification parameter is $true and reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

Use the NotificationFooterMessage parameter to customize the footer text of result messages.

Use the NotificationSenderAddress parameter to customize the sender email address of result messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationFooterMessage
The NotificationFooterMessage parameter specifies the custom footer text to use in email notifications after an admin reviews and marks the reported messages as junk, not junk, or phishing. If the value contains spaces, enclose the value in quotation marks.

You can use the EnableOrganizationBranding parameter to include your company logo in the message footer.

This parameter is meaningful only when the value of the EnableUserEmailNotification parameter is $true and reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationSenderAddress
The NotificationSenderAddress parameter specifies the sender email address to use in result messages after an admin reviews and marks the reported messages as junk, not junk, or phishing. The email address must be in Exchange Online.

This parameter is meaningful only when reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationsForCleanSubmissionAirInvestigationsEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationsForPhishMalwareSubmissionAirInvestigationsEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationsForSpamSubmissionAirInvestigationsEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationsForSubmissionAirInvestigationsEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnlyShowPhishingDisclaimer
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhishingReviewResultMessage
The PhishingReviewResultMessage parameter specifies the custom text to use in result messages after an admin reviews and marks the reported messages as phishing. If the value contains spaces, enclose the value in quotation marks (").

This parameter is meaningful only when the value of the EnableUserEmailNotification parameter is $true and reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

Use the NotificationFooterMessage parameter to customize the footer text of result messages.

Use the NotificationSenderAddress parameter to customize the sender email address of result messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostSubmitMessage
The PostSubmitMessage parameter specifies the custom pop-up message text to use in Outlook notifications after users report messages. If the value contains spaces, enclose the value in quotation marks (").

You specify the custom pop-up message title using the PostSubmitMessageTitle parameter.

This parameter is meaningful only when the value of the PostSubmitMessageEnabled parameter is $true and reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostSubmitMessageEnabled
The PostSubmitMessageEnabled parameter enables or disables the pop-up Outlook notifications that users see after they report messages using Microsoft reporting tools. Valid values are:

- $true: Users receive pop-up notifications in Outlook after they report messages. This is the default value.
- $false: Users don't receive pop-up notifications in Outlook after they report messages.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostSubmitMessageForJunk
Don't use this parameter. Use the PostSubmitMessage parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostSubmitMessageForNotJunk
Don't use this parameter. Use the PostSubmitMessage parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostSubmitMessageForPhishing
Don't use this parameter. Use the PostSubmitMessage parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostSubmitMessageTitle
The PostSubmitMessage parameter parameter specifies the custom pop-up message title to use in Outlook notifications after users report messages. If the value contains spaces, enclose the value in quotation marks (").

You specify the custom pop-up message text using the PostSubmitMessage parameter.

This parameter is meaningful only when the value of the PostSubmitMessageEnabled parameter is $true and reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostSubmitMessageTitleForJunk
Don't use this parameter. Use the PostSubmitMessageTitle parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostSubmitMessageTitleForNotJunk
Don't use this parameter. Use the PostSubmitMessageTitle parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostSubmitMessageTitleForPhishing
Don't use this parameter. Use the PostSubmitMessageTitle parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreSubmitMessage
The PreSubmitMessage parameter specifies the custom pop-up message text to use in Outlook notifications before users report messages. If the value contains spaces, enclose the value in quotation marks (").

You specify the custom pop-up message title using the PreSubmitMessageTitle parameter.

This parameter is meaningful only when the value of the PreSubmitMessageEnabled parameter is $true and reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreSubmitMessageEnabled
The PreSubmitMessageEnabled parameter enables or disables the pop-up Outlook notifications that users see before they report messages using Microsoft reporting tools. Valid values are:

- $true: Users receive pop-up notifications in Outlook before they report messages. This is the default value.
- $false: Users don't receive pop-up notifications in Outlook before they report messages.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreSubmitMessageForJunk
Don't use this parameter. Use the PreSubmitMessage parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreSubmitMessageForNotJunk
Don't use this parameter. Use the PreSubmitMessage parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreSubmitMessageForPhishing
Don't use this parameter. Use the PreSubmitMessage parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreSubmitMessageTitle
The PreSubmitMessage parameter parameter specifies the custom pop-up message title to use in Outlook notifications before users report messages. If the value contains spaces, enclose the value in quotation marks (").

You specify the pop-up message text using the PreSubmitMessage parameter.

This parameter is meaningful only when the value of the PreSubmitMessageEnabled parameter is $true and reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreSubmitMessageTitleForJunk
Don't use this parameter. Use the PreSubmitMessageTitle parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreSubmitMessageTitleForNotJunk
Don't use this parameter. Use the PreSubmitMessageTitle parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreSubmitMessageTitleForPhishing
Don't use this parameter. Use the PreSubmitMessageTitle parameter instead.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportChatMessageEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportChatMessageToCustomizedAddressEnabled
{{ Fill ReportChatMessageToCustomizedAddressEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportJunkAddresses
**Note**: You aren't absolutely required to use this parameter. You specify the email address of the reporting mailbox using the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlet. To reduce confusion, set this parameter to the same value.

The ReportJunkAddresses parameter specifies the email address of the reporting mailbox in Exchange Online to receive user reported messages in reporting in Outlook using Microsoft or third-party reporting tools in Outlook.

If you change the ReportJunkToCustomizedAddress parameter value to $false, you should set the value $null (blank) for this parameter.

You can't use this parameter by itself. You need to specify the same value for the ReportJunkAddresses, ReportNotJunkAddresses and ReportPhishAddresses parameters.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportJunkToCustomizedAddress
The ReportJunkToCustomizedAddress parameter specifies whether to send user reported messages from Outlook (using Microsoft or third-party reporting tools) to the reporting mailbox as part of reporting in Outlook. Valid values are:

- $true: User reported messages are sent to the reporting mailbox.
- $false: User reported messages are not sent to the reporting mailbox.

You can't use this parameter by itself. You need to specify the same value for the ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameters in the same command.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportNotJunkAddresses
**Note**: You aren't absolutely required to use this parameter. You specify the email address of the reporting mailbox using the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlet. To reduce confusion, set this parameter to the same value.

The ReportNotJunkAddresses parameter specifies the email address of the reporting mailbox in Exchange Online to receive user reported messages in reporting in Outlook using Microsoft or third-party reporting tools in Outlook.

If you change the ReportNotJunkToCustomizedAddress parameter value to $false, you should set the value $null (blank) for this parameter.

You can't use this parameter by itself. You need to specify the same value for the ReportJunkAddresses, ReportNotJunkAddresses and ReportPhishAddresses parameters.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportNotJunkToCustomizedAddress
The ReportNotJunkToCustomizedAddress parameter specifies whether to send user reported messages from Outlook (using Microsoft or third-party reporting tools) to the reporting mailbox as part of reporting in Outlook. Valid values are:

- $true: User reported messages are sent to the reporting mailbox.
- $false: User reported messages are not sent to the reporting mailbox.

You can't use this parameter by itself. You need to specify the same value for the ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameters.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportPhishAddresses
**Note**: You aren't absolutely required to use this parameter. You specify the email address of the reporting mailbox using the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlet. To reduce confusion, set this parameter to the same value.

The ReportPhishAddresses parameter specifies the email address of the reporting mailbox in Exchange Online to receive user reported messages in reporting in Outlook using Microsoft or third-party reporting tools in Outlook.

If you change the ReportPhishToCustomizedAddress parameter value to $false, you should set the value $null (blank) for this parameter.

You can't use this parameter by itself. You need to specify the same value for the ReportJunkAddresses, ReportNotJunkAddresses and ReportPhishAddresses parameters.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportPhishToCustomizedAddress
The ReportPhishToCustomizedAddress parameter specifies whether to send user reported messages from Outlook (using Microsoft or third-party reporting tools) to the reporting mailbox as part of reporting in Outlook. Valid values are:

- $true: User reported messages are sent to the reporting mailbox.
- $false: User reported messages are not sent to the reporting mailbox.

You can't use this parameter by itself. You need to specify the same value for the ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameters.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThirdPartyReportAddresses
**Note**: You aren't absolutely required to use this parameter. You specify the email address of the reporting mailbox using the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlet. To reduce confusion, set this parameter to the same value.

Use the ThirdPartyReportAddresses parameter to specify the email address of the reporting mailbox when you're using a third-party product for user submissions instead of reporting in Outlook.

If you change the EnableThirdPartyAddress parameter value to $false, you should set the value $null (blank) for this parameter.

For more information about using third-party reporting tools with or without reporting in Outlook in favor of a third-party product, see the EnableThirdPartyAddress parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSubmissionOptions
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSubmissionOptionsMessage
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online

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
