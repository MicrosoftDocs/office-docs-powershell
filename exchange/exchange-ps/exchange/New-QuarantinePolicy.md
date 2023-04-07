---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-quarantinepolicy
applicable: Exchange Online, Exchange Online Protection
title: New-QuarantinePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-QuarantinePolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-QuarantinePolicy cmdlet to create quarantine policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-QuarantinePolicy [-Name] <String>
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
 [-QuarantinePolicyType <QuarantinePolicyType>]
 [<CommonParameters>]
```

## DESCRIPTION
Quarantine policies define what users are allowed to do to quarantined messages based on why the message was quarantined (for supported features) and quarantine notification settings. For more information, see [Quarantine policies](https://learn.microsoft.com/microsoft-365/security/office-365-security/quarantine-policies).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-QuarantinePolicy -Name ContosoTag -EndUserQuarantinePermissionsValue 0
```

This example creates a new quarantine policy named ContosoTag with the same permissions as the No access preset permissions group.

To assign Limited access permissions, use the value 27. To assign Full access permissions, use the value 23.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the quarantine policy. If the value contains spaces, enclose the value in quotation marks (").

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
The AdminDisplayName parameter specifies a description for the quarantine policy. If the value contains spaces, enclose the value in quotation marks (").

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

### -AdminNotificationLanguage
This parameter is reserved for internal Microsoft use.

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

### -AdminQuarantinePermissionsList
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

### -CustomDisclaimer
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

### -EndUserQuarantinePermissions
This parameter is reserved for internal Microsoft use.

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
The EndUserQuarantinePermissionsValue parameter specifies the end-user permissions for the quarantine policy.

This parameter uses a decimal value that's converted from a binary value. The binary value corresponds to the list of available permissions in a specific order. For each permission, the value 1 equals True and the value 0 equals False. The required order is described in the following list from highest (1000000 or 128) to lowest (00000001 or 1):

- PermissionToViewHeader: The value 0 doesn't hide the **View message header** button in the details of the quarantined message.
- PermissionToDownload: This setting is not used (the value 0 or 1 does nothing).
- PermissionToAllowSender: This setting is not used (the value 0 or 1 does nothing).
- PermissionToBlockSender
- PermissionToRequestRelease: Don't set this permission and PermissionToRelease to 1. Set one to 1 and the other to 0, or set both to 0.
- PermissionToRelease: Don't set this permission and PermissionToRequestRelease to 1. Set one to 1 and the other to 0, or set both to 0.
- PermissionToPreview
- PermissionToDelete

The values for the preset end-user permission groups are described in the following list:

- No access: Binary = 0000000, so use the decimal value 0.
- Limited access: Binary = 00011011, so use the decimal value 27.
- Full access: Binary = 00010111, so use the decimal value 23.

For custom permissions, get the binary value that corresponds to the permissions you want. Convert the binary value to a decimal value to use. Don't use the binary value for this parameter.

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

### -EndUserSpamNotificationLanguage
This parameter is reserved for internal Microsoft use.

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

### -ESNEnabled
The ESNEnabled parameter specifies whether to enable quarantine notifications (formerly known as end-user spam notifications) for the policy. Valid values are:

- $true: Quarantine notifications are enabled.
- $false: Quarantine notifications are disabled. User can only access quarantined messages in quarantine, not in email notifications. This is the default value.S

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

### -QuarantinePolicyType
This parameter is reserved for internal Microsoft use.

```yaml
Type: QuarantinePolicyType
Parameter Sets: (All)
Aliases:
Accepted values: QuarantinePolicy, GlobalQuarantinePolicy
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

## OUTPUTS

## NOTES

## RELATED LINKS
