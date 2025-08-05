---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-quarantinepolicy
schema: 2.0.0
title: Set-QuarantinePolicy
---

# Set-QuarantinePolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-QuarantinePolicy cmdlet to modify quarantine policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-QuarantinePolicy [-Identity] <QuarantineTagIdParameter>
 [-AdminNotificationFrequencyInDays <Int32>]
 [-AdminNotificationLanguage <EsnLanguage>]
 [-AdminNotificationsEnabled <Boolean>]
 [-AdminQuarantinePermissionsList <MultiValuedProperty>]
 [-Confirm]
 [-CustomDisclaimer <String>]
 [-DomainController <Fqdn>]
 [-EndUserQuarantinePermissions <QuarantinePermissions>]
 [-EndUserQuarantinePermissionsValue <Int32>]
 [-EndUserSpamNotificationCustomFromAddress <String>]
 [-EndUserSpamNotificationFrequency <TimeSpan>]
 [-EndUserSpamNotificationFrequencyInDays <Int32>]
 [-EndUserSpamNotificationLanguage <EsnLanguage>]
 [-EsnCustomSubject <MultiValuedProperty>]
 [-ESNEnabled <Boolean>]
 [-IgnoreDehydratedFlag]
 [-IncludeMessagesFromBlockedSenderAddress <Boolean>]
 [-MultiLanguageCustomDisclaimer <MultiValuedProperty>]
 [-MultiLanguageSenderName <MultiValuedProperty>]
 [-MultiLanguageSetting <MultiValuedProperty>]
 [-OrganizationBrandingEnabled <Boolean>]
 [-QuarantineRetentionDays <Int32>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You can't modify the built-in quarantine policies named AdminOnlyAccessPolicy, DefaultFullAccessPolicy, or DefaultFullAccessWithNotificationPolicy.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-QuarantinePolicy -Identity CustomAccess -EndUserQuarantinePermissionsValue 1
```

This example configures the permissions in the quarantine policy named CustomAccess that allows users to delete quarantined messages only.

### Example 2
```powershell
Get-QuarantinePolicy -QuarantinePolicyType GlobalQuarantinePolicy | Set-QuarantinePolicy -MultiLanguageSetting ('English','ChineseSimplified','French') -MultiLanguageCustomDisclaimer ('For more information, contact the Help Desk.','有关更多信息，请联系服务台','Pour plus d''informations, contactez le service d''assistance.') -ESNCustomSubject ('You have quarantined messages','您有隔离邮件','Vous avez des messages en quarantaine') -MultiLanguageSenderName ('Contoso administrator','Contoso管理员','Administrateur Contoso') -EndUserSpamNotificationCustomFromAddress aashutosh@contso.onmicrosoft.com -OrganizationBrandingEnabled $true -EndUserSpamNotificationFrequency 04:00:00
```

This example modifies the global settings for quarantine notifications (formerly known as end-user spam notification settings):

- Quarantine notifications are customized for English, Chinese, and French. Extra quotation marks are required in the French MultiLanguageCustomDisclaimer value as escape characters for the quotation mark characters in the text.
- The existing user aashutosh@contso.onmicrosoft.com is used as the quarantine notification sender.
- The previously configured custom logo replaces the default Microsoft logo.
- The frequency of quarantine notifications is changed to 4 hours.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the quarantine policy you want to modify. You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: QuarantineTagIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AdminNotificationFrequencyInDays

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

### -AdminNotificationLanguage

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

```yaml
Type: EsnLanguage
Parameter Sets: (All)
Aliases:
Accepted values: Default, English, French, German, Italian, Japanese, Spanish, Korean, Portuguese, Russian, ChineseSimplified, ChineseTraditional, Amharic, Arabic, Bulgarian, BengaliIndia, Catalan, Czech, Cyrillic, Danish, Greek, Estonian, Basque, Persian, Finnish, Filipino, Galician, Gujarati, Hebrew, Hindi, Croatian, Hungarian, Indonesian, Icelandic, Kazakh, Kannada, Lithuanian, Latvian, Malayalam, Marathi, Malay, Dutch, NorwegianNynorsk, Norwegian, Odia, Polish, PortuguesePortugal, Romanian, Slovak, Slovenian, SerbianCyrillic, Serbian, Swedish, Swahili, Tamil, Telugu, Thai, Turkish, Ukrainian, Urdu, Vietnamese

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminNotificationsEnabled

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

### -AdminQuarantinePermissionsList

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

> Applicable: Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.
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

### -CustomDisclaimer

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

### -DomainController

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

### -EndUserQuarantinePermissions

> Applicable: Exchange Online, Exchange Online Protection

**Note**: To set permissions in quarantine policies, we recommend using the EndUserQuarantinePermissionsValue parameter.

The EndUserQuarantinePermissions specifies the end-user permissions for the quarantine policy by using a variable from the output of a New-QuarantinePermissions or Set-QuarantinePermissions command.

For example, run the following command to store the required permissions in a variable: `$Perms = New-QuarantinePermissions <permissions>`. In the same PowerShell session, use the value `$Perms` for this parameter.

```yaml
Type: QuarantinePermissions
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserQuarantinePermissionsValue

> Applicable: Exchange Online, Exchange Online Protection

The EndUserQuarantinePermissionsValue parameter specifies the end-user permissions for the quarantine policy.

This parameter uses a decimal value that's converted from a binary value. The binary value corresponds to the list of available permissions in a specific order. For each permission, the value 1 equals True and the value 0 equals False. The required order is described in the following list from highest (1000000 or 128) to lowest (00000001 or 1):

- PermissionToViewHeader: The value 0 doesn't hide the **View message header** action in quarantine. If the message is visible in quarantine, the action is always available for the message.
- PermissionToDownload: This permission is not used (the value 0 or 1 does nothing).
- PermissionToAllowSender
- PermissionToBlockSender
- PermissionToRequestRelease: Don't set this permission and PermissionToRelease to the value 1. Set one value to 1 and the other value to 0, or set both values to 0.
- PermissionToRelease: Don't set this permission and PermissionToRequestRelease to value 1. Set one value to 1 and the other value to 0, or set both values to 0. This permission isn't honored for messages that were quarantined as malware or high confidence phishing. If the quarantine policy gives users this permission, users are allowed to request the release of their quarantined malware or high confidence phishing messages as if PermissionToRequestRelease was selected instead.
- PermissionToPreview
- PermissionToDelete

The values for the preset end-user permission groups are described in the following list:

- No access: Binary = 0000000, so use the decimal value 0.
- Limited access: Binary = 00101011, so use the decimal value 43.
- Full access: Binary = 00100111, so use the decimal value 39.

For custom permissions, get the binary value that corresponds to the permissions you want. Convert the binary value to a decimal value to use. Don't use the binary value for this parameter.

**Note**: If the value of this parameter is 0 (No access) and the value of the ESNEnabled parameter is $true, users can view their messages in quarantine, but the only available action for the messages is **View message header**.

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

### -EndUserSpamNotificationCustomFromAddress

> Applicable: Exchange Online, Exchange Online Protection

The EndUserSpamNotificationCustomFromAddress specifies the email address of an existing internal sender to use as the sender for quarantine notifications. To set this parameter back to the default email address quarantine@messaging.microsoft.com, use the value $null.

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

### -EndUserSpamNotificationFrequency

> Applicable: Exchange Online, Exchange Online Protection

The EndUserSpamNotificationFrequency parameter species how often quarantine notifications are sent to users. Valid values are:

- 04:00:00 (4 hours)
- 1.00:00:00 (1 day)
- 7.00:00:00 (7 days)

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserSpamNotificationFrequencyInDays

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

### -EndUserSpamNotificationLanguage

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

```yaml
Type: EsnLanguage
Parameter Sets: (All)
Aliases:
Accepted values: Default, English, French, German, Italian, Japanese, Spanish, Korean, Portuguese, Russian, ChineseSimplified, ChineseTraditional, Amharic, Arabic, Bulgarian, BengaliIndia, Catalan, Czech, Cyrillic, Danish, Greek, Estonian, Basque, Persian, Finnish, Filipino, Galician, Gujarati, Hebrew, Hindi, Croatian, Hungarian, Indonesian, Icelandic, Kazakh, Kannada, Lithuanian, Latvian, Malayalam, Marathi, Malay, Dutch, NorwegianNynorsk, Norwegian, Odia, Polish, PortuguesePortugal, Romanian, Slovak, Slovenian, SerbianCyrillic, Serbian, Swedish, Swahili, Tamil, Telugu, Thai, Turkish, Ukrainian, Urdu, Vietnamese

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EsnCustomSubject

> Applicable: Exchange Online, Exchange Online Protection

The EsnCustomSubject parameter specifies the text to use in the Subject field of quarantine notifications.

You can specify multiple values separated by commas using the syntax: `('value1',''value2',...'valueN')`. For each language that you specify with the MultiLanguageSetting parameter, you need to specify unique Sender text. Be sure to align the corresponding MultiLanguageSetting, MultiLanguageCustomDisclaimer, EsnCustomSubject, and MultiLanguageSenderName parameter values in the same order.

To modify an existing value and preserve other values, you need to specify all existing values and the new value in the existing order.

This setting is available only in the built-in quarantine policy named DefaultGlobalTag that controls global quarantine policy settings. To access this quarantine policy, start your command with the following syntax: `Get-QuarantinePolicy -QuarantinePolicyType GlobalQuarantinePolicy | Set-QuarantinePolicy ...`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases: MultiValuedProperty

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ESNEnabled

> Applicable: Exchange Online, Exchange Online Protection

The ESNEnabled parameter specifies whether to enable quarantine notifications (formerly known as end-user spam notifications) for the policy. Valid values are:

- $true: Quarantine notifications are enabled.
- $false: Quarantine notifications are disabled. User can only access quarantined messages in quarantine, not in email notifications. This is the default value.

**Note**: If the value of this parameter is $true and the value of the EndUserQuarantinePermissionsValue parameter is 0 (No access where all permissions are turned off), users can view their messages in quarantine, but the only available action for the messages is **View message header**.

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

### -IgnoreDehydratedFlag

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

### -IncludeMessagesFromBlockedSenderAddress

> Applicable: Exchange Online, Exchange Online Protection

The IncludeMessagesFromBlockedSenderAddress parameter specifies whether to send quarantine notifications for quarantined messages from blocked sender addresses. Valid values are:

- $true: Recipients get quarantine notifications for affected messages from blocked senders.
- $false: Recipients don't get quarantine notifications for affected messages from blocked senders. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -MultiLanguageCustomDisclaimer

> Applicable: Exchange Online, Exchange Online Protection

The MultiLanguageCustomDisclaimer parameter specifies the custom disclaimer text to use near the bottom of quarantine notifications. The localized text, **A disclaimer from your organization:** is always included first, followed by the text you specify for this parameter.

You can specify multiple values separated by commas using the syntax: `('value1',''value2',...'valueN')`. For each language that you specify with the MultiLanguageSetting parameter, you need to specify unique custom disclaimer text. Be sure to align the corresponding MultiLanguageSetting, MultiLanguageCustomDisclaimer, EsnCustomSubject, and MultiLanguageSenderName parameter values in the same order.

To modify an existing value and preserve other values, you need to specify all existing values and the new value in the existing order.

This setting is available only in the built-in quarantine policy named DefaultGlobalTag that controls global quarantine policy settings. To access this quarantine policy, start your command with the following syntax: `Get-QuarantinePolicy -QuarantinePolicyType GlobalQuarantinePolicy | Set-QuarantinePolicy ...`.

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

### -MultiLanguageSenderName

> Applicable: Exchange Online, Exchange Online Protection

The MultiLanguageSenderName parameter specifies the email sender's display name to use in quarantine notifications.

You can specify multiple values separated by commas using the syntax: `('value1',''value2',...'valueN')`. For each language that you specify with the MultiLanguageSetting parameter, you can specify a unique sender name. Be sure to align the corresponding MultiLanguageSetting, MultiLanguageCustomDisclaimer, and MultiLanguageSenderName parameter values in the same order.

To modify an existing value and preserve other values, you need to specify all existing values and the new value in the existing order.

This setting is available only in the built-in quarantine policy named DefaultGlobalTag that controls global settings. To access this quarantine policy, start your command with the following syntax: `Get-QuarantinePolicy -QuarantinePolicyType GlobalQuarantinePolicy | Set-QuarantinePolicy ...`.

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

### -MultiLanguageSetting

> Applicable: Exchange Online, Exchange Online Protection

The MultiLanguageSetting parameter specifies the language of quarantine notifications. Valid values are:

Default, Amharic, Arabic, Basque, BengaliIndia, Bulgarian, Catalan, ChineseSimplified, ChineseTraditional, Croatian, Cyrillic, Czech, Danish, Dutch, English, Estonian, Filipino, Finnish, French, Galician, German, Greek, Gujarati, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kannada, Kazakh, Korean, Latvian, Lithuanian, Malay, Malayalam, Marathi, Norwegian, NorwegianNynorsk, Odia, Persian, Polish, Portuguese, PortuguesePortugal, Romanian, Russian, Serbian, SerbianCyrillic, Slovak, Slovenian, Spanish, Swahili, Swedish, Tamil, Telugu, Thai, Turkish, Ukrainian, Urdu, and Vietnamese.

You can specify multiple value separated by commas using the syntax: `('value1',''value2',...'valueN')`. The default value is Default, which means quarantine notifications use the default language of the cloud-based organization.

For each language that you specify, you can specify a unique value for the MultiLanguageCustomDisclaimer and MultiLanguageSenderName parameters. Be sure to align the corresponding MultiLanguageSetting, MultiLanguageCustomDisclaimer, and MultiLanguageSenderName parameter values in the same order.

This setting is available only in the built-in quarantine policy named DefaultGlobalTag that controls global settings. To access this quarantine policy, start your command with the following syntax: `Get-QuarantinePolicy -QuarantinePolicyType GlobalQuarantinePolicy | Set-QuarantinePolicy ...`.

**Note**: The value English maps to every English language code except en-US. If you have users with en-US mailboxes only, use the value Default. If you have a mix of mailboxes with en-US and other English languages codes (en-GB, en-CA, en-AU, etc.), use the value Default in one customized quarantine notification, and the value English in another customized quarantine notification.

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

### -OrganizationBrandingEnabled

> Applicable: Exchange Online, Exchange Online Protection

The OrganizationBrandingEnabled parameter enables or disables organization branding in the end-user quarantine notification messages. Valid values are:

- $true: Organization branding is enabled. The default Microsoft logo that's used in quarantine notifications is replaced by your custom logo. Before you do this, you need to follow the instructions in [Customize the Microsoft 365 theme for your organization](https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme) to upload your custom logo.
- $false: Organization branding is disabled. The default Microsoft logo is used in quarantine notifications. This is the default value.

This setting is available only in the built-in quarantine policy named DefaultGlobalTag that controls global settings. To access this quarantine policy, start your command with the following syntax: `Get-QuarantinePolicy -QuarantinePolicyType GlobalQuarantinePolicy | Set-QuarantinePolicy ...`.

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

### -QuarantineRetentionDays

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

### -WhatIf

> Applicable: Exchange Online, Exchange Online Protection

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
