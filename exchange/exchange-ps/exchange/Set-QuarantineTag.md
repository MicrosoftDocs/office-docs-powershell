---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-quarantinetag
applicable: Exchange Online
title: Set-QuarantineTag
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-QuarantineTag

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-QuarantineTag cmdlet to modify custom quarantine tags in your cloud-based organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-QuarantineTag [-Identity] <QuarantineTagIdParameter>
 [-AdminNotificationFrequencyInDays <Int32>]
 [-AdminNotificationLanguage <EsnLanguage>]
 [-AdminNotificationsEnabled <Boolean>]
 [-AdminQuarantinePermissionsList <MultiValuedProperty>]
 [-Confirm]
 [-CustomDisclaimer <String>]
 [-DomainController <Fqdn>]
 [-ESNEnabled <Boolean>]
 [-EndUserQuarantinePermissions <QuarantinePermissions>]
 [-EndUserQuarantinePermissionsValue <Int32>]
 [-EndUserSpamNotificationFrequencyInDays <Int32>]
 [-EndUserSpamNotificationLanguage <EsnLanguage>]
 [-IgnoreDehydratedFlag]
 [-MultiLanguageCustomDisclaimer <MultiValuedProperty>]
 [-MultiLanguageSenderName <MultiValuedProperty>]
 [-MultiLanguageSetting <MultiValuedProperty>]
 [-OrganizationBrandingEnabled <Boolean>]
 [-QuarantineRetentionDays <Int32>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You can't modify built-in quarantine tags that start with "Default" in the name.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Identity
The Identity parameter specifies the quarantine tag you want to modify. You can use any value that uniquely identifies the quarantine tag. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: QuarantineTagIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AdminNotificationFrequencyInDays
{{ Fill AdminNotificationFrequencyInDays Description }}

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
{{ Fill AdminNotificationLanguage Description }}

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
{{ Fill AdminNotificationsEnabled Description }}

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

### -Confirm
Prompts you for confirmation before running the cmdlet.

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
{{ Fill ESNEnabled Description }}

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
The EndUserQuarantinePermissionsValue parameter specifies the end-user permissions for the quarantine tag by using a decimal value that's converted from a binary value. The binary value corresponds to the list of available permissions in a specific order. For each permission, the value 1 equals True and the value 0 equals False. The required order is described in the following list:

- PermissionToAllowSender
- PermissionToBlockSender
- PermissionToDelete
- PermissionToDownload: Currently, this value is always 0.
- PermissionToPreview
- PermissionToRelease: Don't set this value and PermissionToRequestRelease to 1. Set one to 1 and the other to 0, or set both to 0.
- PermissionToRequestRelease: Don't set this value and PermissionToRelease to 1. Set one to 1 and the other to 0, or set both to 0.
- PermissionToViewHeader: Currently, this value is always 0, and doesn't hide the **View message header** button in the details of the quarantined message.

The values for the available preset end-user permissions are described in the following list:

- No access: Binary = 0000000, so use the decimal value 0.
- Limited access: Binary = 01101010, so use the decimal value 106.
- Full access: Binary = 11101100, so use the decimal value 236.

For custom permissions, get the binary value that corresponds to the permissions you want. Convert the binary value to a decimal value to use.

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
{{ Fill EndUserSpamNotificationFrequencyInDays Description }}

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDehydratedFlag
{{ Fill IgnoreDehydratedFlag Description }}

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

### -MultiLanguageCustomDisclaimer
{{ Fill MultiLanguageCustomDisclaimer Description }}

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
{{ Fill MultiLanguageSenderName Description }}

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
{{ Fill MultiLanguageSetting Description }}

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
The OrganizationBrandingEnabled parameter enables or disables organization branding in the end-user quarantine notification messages. Valid values are:

- $true:
- $false: Organization branding is disabled.

This setting is meaningful only on the built-in quarantine tag named GlobalDefaultTag (global settings).

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
{{ Fill QuarantineRetentionDays Description }}

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
