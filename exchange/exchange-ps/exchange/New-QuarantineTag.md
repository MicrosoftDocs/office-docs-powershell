---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-quarantinetag
applicable: Exchange Online
title: New-QuarantineTag
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-QuarantineTag

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-QuarantineTag cmdlet to create quarantine tags in your cloud-based organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-QuarantineTag [-Name] <String>
 [-AdminDisplayName <String>]
 [-AdminNotificationFrequencyInDays <Int32>]
 [-AdminNotificationLanguage <EsnLanguage>]
 [-AdminNotificationsEnabled <Boolean>]
 [-AdminQuarantinePermissionsList <MultiValuedProperty>]
 [-CustomDisclaimer <String>]
 [-DomainController <Fqdn>]
 [-EndUserQuarantinePermissions <QuarantinePermissions>]
 [-EndUserQuarantinePermissionsValue <Int32>]
 [-EndUserSpamNotificationFrequencyInDays <Int32>]
 [-EndUserSpamNotificationLanguage <EsnLanguage>]
 [-ESNEnabled <Boolean>]
 [-MultiLanguageCustomDisclaimer <MultiValuedProperty>]
 [-MultiLanguageSenderName <MultiValuedProperty>]
 [-MultiLanguageSetting <MultiValuedProperty>]
 [-OrganizationBrandingEnabled <Boolean>]
 [-QuarantineRetentionDays <Int32>]
 [-QuarantineTagType <QuarantineTagTypeEnum>]
 [<CommonParameters>]
```

## DESCRIPTION
Quarantine tags allow you to configure the allowed end-user actions on quarantined messages in supported policies or rules that have **Quarantine the message** as an available action.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the quarantine tag. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminDisplayName
The AdminDisplayName parameter specifies a description for the quarantine tag. If the value contains spaces, enclose the value in quotation marks (").

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

### -AdminNotificationFrequencyInDays
The AdminNotificationFrequencyInDays parameter specifies the duration in days that an admin receives notification messages for a quarantine release request by and end-user. A valid value is an integer from 1 to 30. The default value is 3.

This parameter is meaningful only if the AdminNotificationsEnabled parameter is $true, and only if the EndUserQuarantinePermissions contains the value `PermissionToRequestRelease: True`.

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

### -AdminNotificationLanguage
The AdminNotificationLanguage parameter specifies the language of admin quarantine notifications. Valid values are:

Default, Amharic, Arabic, Basque, BengaliIndia, Bulgarian, Catalan, ChineseSimplified, ChineseTraditional, Croatian, Cyrillic, Czech, Danish, Dutch, English, Estonian, Filipino, Finnish, French, Galician, German, Greek, Gujarati, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kannada, Kazakh, Korean, Latvian, Lithuanian, Malay, Malayalam, Marathi, Norwegian, NorwegianNynorsk, Odia, Persian, Polish, Portuguese, PortuguesePortugal, Romanian, Russian, Serbian, SerbianCyrillic, Slovak, Slovenian, Spanish, Swahili, Swedish, Tamil, Telugu, Thai, Turkish, Ukrainian, Urdu, and Vietnamese.

The default value is Default, which means admin quarantine notifications use the default language of the cloud-based organization.

This parameter is meaningful only if the AdminNotificationsEnabled parameter is $true, and only if the AdminQuarantinePermissions contains the value `PermissionToRequestRelease: True`.

```yaml
Type: EsnLanguage
Parameter Sets: (All)
Aliases:
Accepted values: Default, English, French, German, Italian, Japanese, Spanish, Korean, Portuguese, Russian, ChineseSimplified, ChineseTraditional, Amharic, Arabic, Bulgarian, BengaliIndia, Catalan, Czech, Cyrillic, Danish, Greek, Estonian, Basque, Persian, Finnish, Filipino, Galician, Gujarati, Hebrew, Hindi, Croatian, Hungarian, Indonesian, Icelandic, Kazakh, Kannada, Lithuanian, Latvian, Malayalam, Marathi, Malay, Dutch, NorwegianNynorsk, Norwegian, Odia, Polish, PortuguesePortugal, Romanian, Slovak, Slovenian, SerbianCyrillic, Serbian, Swedish, Swahili, Tamil, Telugu, Thai, Turkish, Ukrainian, Urdu, Vietnamese
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminNotificationsEnabled
The AdminNotificationsEnabled parameter enables or disables admin quarantine release request notification messages. Valid values are:

- $true: Admin quarantine notifications are enabled.
- $false: Admin quarantine notifications are disabled. This is the default values.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminQuarantinePermissionsList
{{ Fill AdminQuarantinePermissionsList Description }}

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

### -CustomDisclaimer
{{ Fill CustomDisclaimer Description }}

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

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ESNEnabled
The ESNEnabled parameter enables or disables end-user quarantine notification messages. Valid values are:

- $true: End-user quarantine notifications are enabled.
- $false: End-user quarantine notifications are disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserQuarantinePermissions
{{ Fill EndUserQuarantinePermissions Description }}

```yaml
Type: QuarantinePermissions
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserQuarantinePermissionsValue
{{ Fill EndUserQuarantinePermissionsValue Description }}

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

### -EndUserSpamNotificationFrequencyInDays
The AdminNotificationFrequencyInDays parameter specifies the duration in days that an end-user receives notification messages for a quarantine message. A valid value is an integer from 1 to 30. The default value is 3.

This parameter is meaningful only if the AdminNotificationsEnabled parameter is $true, and only if the EndUserQuarantinePermissions contains the value `PermissionToRequestRelease: True`.

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
The EndUserNotificationLanguage parameter specifies the language of end-user quarantine notifications. Valid values are:

Default, Amharic, Arabic, Basque, BengaliIndia, Bulgarian, Catalan, ChineseSimplified, ChineseTraditional, Croatian, Cyrillic, Czech, Danish, Dutch, English, Estonian, Filipino, Finnish, French, Galician, German, Greek, Gujarati, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kannada, Kazakh, Korean, Latvian, Lithuanian, Malay, Malayalam, Marathi, Norwegian, NorwegianNynorsk, Odia, Persian, Polish, Portuguese, PortuguesePortugal, Romanian, Russian, Serbian, SerbianCyrillic, Slovak, Slovenian, Spanish, Swahili, Swedish, Tamil, Telugu, Thai, Turkish, Ukrainian, Urdu, and Vietnamese.

The default value is Default, which means end-uer quarantine notifications use the default language of the cloud-based organization.

This parameter is meaningful only if the EndUserNotificationsEnabled parameter is $true, and only if the EndUserQuarantinePermissions contains the value `PermissionToRequestRelease: True`.

```yaml
Type: EsnLanguage
Parameter Sets: (All)
Aliases:
Accepted values: Default, English, French, German, Italian, Japanese, Spanish, Korean, Portuguese, Russian, ChineseSimplified, ChineseTraditional, Amharic, Arabic, Bulgarian, BengaliIndia, Catalan, Czech, Cyrillic, Danish, Greek, Estonian, Basque, Persian, Finnish, Filipino, Galician, Gujarati, Hebrew, Hindi, Croatian, Hungarian, Indonesian, Icelandic, Kazakh, Kannada, Lithuanian, Latvian, Malayalam, Marathi, Malay, Dutch, NorwegianNynorsk, Norwegian, Odia, Polish, PortuguesePortugal, Romanian, Slovak, Slovenian, SerbianCyrillic, Serbian, Swedish, Swahili, Tamil, Telugu, Thai, Turkish, Ukrainian, Urdu, Vietnamese
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MultiLanguageCustomDisclaimer
This parameter is reserved for internal Microsoft use.

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

### -MultiLanguageSenderName
This parameter is reserved for internal Microsoft use.

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

### -MultiLanguageSetting
This parameter is reserved for internal Microsoft use.

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

### -OrganizationBrandingEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuarantineRetentionDays
The QuarantineRetentionDays parameter specifies the duration in days that messages that are retained in quarantine by an action that uses the quarantine tag. A valid value is an integer from 1 to 30. The default value is 15.

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

### -QuarantineTagType
This parameter is reserved for internal Microsoft use.

```yaml
Type: QuarantineTagTypeEnum
Parameter Sets: (All)
Aliases:
Accepted values: PolicyQuarantineTag, GlobalQuarantineTag
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
