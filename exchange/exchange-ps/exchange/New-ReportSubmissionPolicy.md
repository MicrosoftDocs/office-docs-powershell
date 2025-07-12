---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-reportsubmissionpolicy
applicable: Exchange Online
title: New-ReportSubmissionPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-ReportSubmissionPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-ReportSubmissionPolicy cmdlet to create the report submission policy in your cloud-based organization. The report submission policy controls most of the user reported message settings in the organization.

**Note**: If the policy already exists (the Get-ReportSubmissionPolicy cmdlet returns output), you can't use this cmdlet. To delete the existing policy and start over with the default settings, use the Remove-ReportSubmissionPolicy cmdlet first.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-ReportSubmissionPolicy
 [-DisableQuarantineReportingOption <Boolean>]
 [-DisableUserSubmissionOptions <Boolean>]
 [-EnableCustomizedMsg <Boolean>]
 [-EnableCustomNotificationSender <Boolean>]
 [-EnableOrganizationBranding <Boolean>]
 [-EnableReportToMicrosoft <Boolean>]
 [-EnableThirdPartyAddress <Boolean>]
 [-EnableUserEmailNotification <Boolean>]
 [-JunkReviewResultMessage <String>]
 [-NotificationFooterMessage <String>]
 [-NotificationSenderAddress <MultiValuedProperty>]
 [-NotificationsForCleanSubmissionAirInvestigationsEnabled <Boolean>]
 [-NotificationsForPhishMalwareSubmissionAirInvestigationsEnabled <Boolean>]
 [-NotificationsForSpamSubmissionAirInvestigationsEnabled <Boolean>]
 [-NotificationsForSubmissionAirInvestigationsEnabled <Boolean>]
 [-NotJunkReviewResultMessage <String>]
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
 [<CommonParameters>]
```

## DESCRIPTION
The report submission policy controls most of the settings for user submissions in the Microsoft Defender portal at <https://security.microsoft.com/securitysettings/userSubmission>.

The report submission rule (\*-ReportSubmissionRule cmdlets) controls the email address of the reporting mailbox where user reported messages are delivered.

When you set the email address of the reporting mailbox in the Microsoft Defender portal at <https://security.microsoft.com/securitysettings/userSubmission>, the same email address is also set in the following parameters in the \*-ReportSubmissionPolicy cmdlets:

- Microsoft integrated reporting using Microsoft reporting tools in Outlook: The ReportJunkAddresses, ReportNotJunkAddresses, and ReportPhishAddresses parameters.
- Microsoft integrated reporting using third-party tools in Outlook: The ThirdPartyReportAddresses parameter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ReportSubmissionPolicy
```

This example creates the one and only report submission policy named DefaultReportSubmissionPolicy with the default values: reporting in Outlook is on, Microsoft reporting tools in Outlook are used, and reported messages are sent only to Microsoft (the reporting mailbox isn't used).

### Example 2
```powershell
$usersub = "reportedmessages@contoso.com"

New-ReportSubmissionPolicy -ReportJunkToCustomizedAddress $true -ReportJunkAddresses $usersub -ReportNotJunkToCustomizedAddress $true -ReportNotJunkAddresses $usersub -ReportPhishToCustomizedAddress $true -ReportPhishAddresses $usersub

New-ReportSubmissionRule -Name DefaultReportSubmissionRule -ReportSubmissionPolicy DefaultReportSubmissionPolicy -SentTo $usersub
```

This example creates the report submission policy with the following values: reporting in Outlook is on, Microsoft reporting tools in Outlook are used, and reported messages are sent to Microsoft and the specified reporting mailbox in Exchange Online.

**Notes**:

- The default value of the EnableReportToMicrosoft parameter is $true and the default value of the EnableThirdPartyAddress parameter is $false, so you don't need to use them.
- To create the policy, you need to specify the same email address in the ReportJunkAddresses, ReportNotJunkAddresses, and ReportPhisAddresses parameters, and also in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlets.
- Like the report submission policy, you can create the report submission rule only if it doesn't already exist. If the rule already exists, you can use Set-ReportSubmissionRule to change the email address of the reporting mailbox, or Remove-ReportSubmissionRule to delete it and recreate it.

### Example 3
```powershell
$usersub = "userreportedmessages@fabrikam.com"

New-ReportSubmissionPolicy -EnableReportToMicrosoft $false -ReportJunkToCustomizedAddress $true -ReportJunkAddresses $usersub -ReportNotJunkToCustomizedAddress $true -ReportNotJunkAddresses $usersub -ReportPhishToCustomizedAddress $true -ReportPhishAddresses $usersub -DisableUserSubmissionOptions $false

New-ReportSubmissionRule -Name DefaultReportSubmissionRule -ReportSubmissionPolicy DefaultReportSubmissionPolicy -SentTo $usersub
```

This example creates the report submission policy with the following values: reporting in Outlook is on, Microsoft reporting tools in Outlook are used, and reported messages are sent only to the specified reporting mailbox in Exchange Online.

### Example 4
```powershell
$usersub = "thirdpartyreporting@wingtiptoys.com"

New-ReportSubmissionPolicy -EnableReportToMicrosoft $false -EnableThirdPartyAddress $true -ThirdPartyReportAddresses $usersub

New-ReportSubmissionRule -Name DefaultReportSubmissionRule -ReportSubmissionPolicy DefaultReportSubmissionPolicy -SentTo $usersub
```

This example creates the report submission policy with the following values: reporting in Outlook is on and third-party reporting tools in Outlook are used to send reported messages to the specified reporting mailbox in Exchange Online.

### Example 5
```powershell
New-ReportSubmissionPolicy -EnableReportToMicrosoft $false
```

This example creates the report submission policy with the following values: reporting in Outlook is off. Microsoft reporting tools in Outlook are not available to users and messages reported by third-party tools in Outlook are not available on the Submissions page in the Microsoft Defender portal.

## PARAMETERS

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

- **Microsoft reporting tools are available in Outlook for users to report messages to Microsoft only (the reporting mailbox isn't used)**: The ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameter values are $false. This is the default result.
- **Microsoft reporting tools are available in Outlook for users to report messages to Microsoft and reported messages are sent to the specified reporting mailbox**: The ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameter values are $true. To create the policy, use the same email address in the ReportJunkAddresses, ReportNotJunkAddresses, and ReportPhisAddresses parameters, and also in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlet.

The value $false for this parameter disables reporting in Outlook. The following configurations are possible:

- **Microsoft reporting tools are available in Outlook, but reported messages are sent only to the reporting mailbox**: The ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameter values are $true. To create the policy, use the same email address in the ReportJunkAddresses, ReportNotJunkAddresses, and ReportPhisAddresses parameters, and also in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlet.
- **Reporting in Outlook is disabled. Microsoft reporting tools are not available in Outlook. Any messages reported by users in Outlook with third-party reporting tools aren't visible on the Submissions page in the Microsoft Defender portal**: The EnableThirdPartyAddress, ReportJunkToCustomizedAddress, ReportNotJunkToCustomizedAddress, and ReportPhishToCustomizedAddress parameter values are $false.

This parameter is required to create the report submission policy only if you set the value to $false (the default value is $true).

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
The EnableThirdPartyAddress parameter specifies whether you're using third-party reporting tools in Outlook instead of Microsoft tools to send messages to the reporting mailbox in Exchange Online. Valid values are:

- $true: Reporting in Outlook is enabled, but third-party tools in Outlook send reported messages to the reporting mailbox in Exchange Online. You also need to set the EnableReportToMicrosoft parameter value to $false. To create the policy, use the same email address in the ThirdPartyReportAddresses parameter and also in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlets.
- $false: Third-party reporting tools in Outlook aren't used.

This parameter is required to create the report submission policy only if you set the value to $true (the default value is $false).

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

- $true: Customized admin review result messages are sent.
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

This parameter is meaningful only when reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

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
{{ Fill PostSubmitMessageEnabled Description }}

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

This parameter is meaningful only when reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

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

This parameter is meaningful only when reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

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
{{ Fill PreSubmitMessageEnabled Description }}

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

This parameter is meaningful only when reporting in Outlook is enabled for Microsoft reporting tools in Outlook as described in the EnableReportToMicrosoft parameter.

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
{{ Fill ReportChatMessageEnabled Description }}

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
The ReportJunkAddresses parameter specifies the email address of the reporting mailbox in Exchange Online to receive user reported messages in reporting in Outlook using Microsoft or third-party reporting tools in Outlook.

This parameter is required to create the report submission policy if the ReportJunkToCustomizedAddress parameter value is $true.

You can't use this parameter by itself. You need to specify the same email address for the ReportJunkAddresses, ReportNotJunkAddresses and ReportPhishAddresses parameters.

You also need to specify the same email address in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlet.

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

This parameter is required to create the report submission policy if you're using reporting in Outlook (see the EnableReportToMicrosoft parameter) and sending reported messages to the reporting mailbox (exclusively or in addition to reporting to Microsoft).

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
The ReportNotJunkAddresses parameter specifies the email address of the reporting mailbox in Exchange Online to receive user reported messages in reporting in Outlook using Microsoft or third-party reporting tools in Outlook.

This parameter is required to create the report submission policy if the ReportNotJunkToCustomizedAddress parameter value is $true.

You can't use this parameter by itself. You need to specify the same email address for the ReportJunkAddresses, ReportNotJunkAddresses and ReportPhishAddresses parameters.

You also need to specify the same email address in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlet.

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

This parameter is required to create the report submission policy if you're using reporting in Outlook (see the EnableReportToMicrosoft parameter) and sending reported messages to the reporting mailbox (exclusively or in addition to reporting to Microsoft).

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
The ReportPhishAddresses parameter specifies the email address of the reporting mailbox in Exchange Online to receive user reported messages in reporting in Outlook using Microsoft or third-party reporting tools in Outlook.

This parameter is required to create the report submission policy if the ReportPhishToCustomizedAddress parameter value is $true.

You can't use this parameter by itself. You need to specify the same email address for the ReportJunkAddresses, ReportNotJunkAddresses and ReportPhishAddresses parameters.

You also need to specify the same email address in the SentTo parameter on the New-ReportSubmissionRule or Set-ReportSubmissionRule cmdlet.

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

This parameter is required to create the report submission policy if you're using reporting in Outlook (see the EnableReportToMicrosoft parameter) and sending reported messages to the reporting mailbox (exclusively or in addition to reporting to Microsoft).

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
Use the ThirdPartyReportAddresses parameter to specify the email address of the reporting mailbox in Exchange Online when you're using a third-party product for user submissions instead of reporting in Outlook.

This parameter is required to create the report submission policy if you've disabled reporting in Outlook (`-EnableReportToMicrosoft $false`) and you're using the reporting mailbox with third-party tools (`-EnableThirdPartyAddress $true`).

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
