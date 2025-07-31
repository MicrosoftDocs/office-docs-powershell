---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-deviceconditionalaccessrule
schema: 2.0.0
title: Set-DeviceConditionalAccessRule
---

# Set-DeviceConditionalAccessRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-DeviceConditionalAccessRule cmdlet to modify mobile device conditional access rules in Basic Mobility and Security in Microsoft 365.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-DeviceConditionalAccessRule [-Identity] <ComplianceRuleIdParameter> -TargetGroups <MultiValuedProperty>
 [-AccountName <String>]
 [-AccountUserName <String>]
 [-AllowAppStore <Boolean>]
 [-AllowAssistantWhileLocked <Boolean>]
 [-AllowConvenienceLogon <Boolean>]
 [-AllowDiagnosticSubmission <Boolean>]
 [-AllowiCloudBackup <Boolean>]
 [-AllowiCloudDocSync <Boolean>]
 [-AllowiCloudPhotoSync <Boolean>]
 [-AllowJailbroken <Boolean>]
 [-AllowPassbookWhileLocked <Boolean>]
 [-AllowScreenshot <Boolean>]
 [-AllowSimplePassword <Boolean>]
 [-AllowVideoConferencing <Boolean>]
 [-AllowVoiceAssistant <Boolean>]
 [-AllowVoiceDialing <Boolean>]
 [-AntiVirusSignatureStatus <Int64>]
 [-AntiVirusStatus <Int64>]
 [-AppsRating <CARatingAppsEntry>]
 [-AutoUpdateStatus <CAAutoUpdateStatusEntry>]
 [-BluetoothEnabled <Boolean>]
 [-CameraEnabled <Boolean>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-EmailAddress <String>]
 [-EnableRemovableStorage <Boolean>]
 [-ExchangeActiveSyncHost <String>]
 [-FirewallStatus <Required>]
 [-ForceAppStorePassword <Boolean>]
 [-ForceEncryptedBackup <Boolean>]
 [-MaxPasswordAttemptsBeforeWipe <Int32>]
 [-MaxPasswordGracePeriod <TimeSpan>]
 [-MoviesRating <CARatingMovieEntry>]
 [-PasswordComplexity <Int64>]
 [-PasswordExpirationDays <Int32>]
 [-PasswordHistoryCount <Int32>]
 [-PasswordMinComplexChars <Int32>]
 [-PasswordMinimumLength <Int32>]
 [-PasswordQuality <Int32>]
 [-PasswordRequired <Boolean>]
 [-PasswordTimeout <TimeSpan>]
 [-PhoneMemoryEncrypted <Boolean>]
 [-RegionRatings <CARatingRegionEntry>]
 [-RequireEmailProfile <Boolean>]
 [-SmartScreenEnabled <Boolean>]
 [-SystemSecurityTLS <Boolean>]
 [-TVShowsRating <CARatingTvShowEntry>]
 [-UserAccountControlStatus <CAUserAccountControlStatusEntry>]
 [-WhatIf]
 [-WLANEnabled <Boolean>]
 [-WorkFoldersSyncUrl <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The cmdlets in Basic Mobility and Security are described in the following list:

- DeviceTenantPolicy and DeviceTenantRule cmdlets: A policy that defines whether to block or allow mobile device access to Exchange Online email by unsupported devices that use Exchange ActiveSync only. This setting applies to all users in your organization. Both allow and block scenarios allow reporting for unsupported devices, and you can specify exceptions to the policy based on security groups.
- DeviceConditionalAccessPolicy and DeviceConditionalAccessRule cmdlets: Policies that control mobile device access to Microsoft 365 for supported devices. These policies are applied to security groups. Unsupported devices are not allowed to enroll in Basic Mobility and Security.
- DeviceConfigurationPolicy and DeviceConfigurationRule cmdlets: Policies that control mobile device settings for supported devices. These policies are applied to security groups.
- Get-DevicePolicy: Returns all Basic Mobility and Security policies regardless of type (DeviceTenantPolicy, DeviceConditionalAccessPolicy or DeviceConfigurationPolicy).

For more information about Basic Mobility and Security, see [Overview of Basic Mobility and Security for Microsoft 365](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/overview).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Defender portal](https://learn.microsoft.com/defender-office-365/mdo-portal-permissions) or [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Set-DeviceConditionalAccessRule -Identity "Secure Email{914f151c-394b-4da9-9422-f5a2f65dec30}" -AllowJailbroken $false -TargetGroups 95386852-1c11-4302-8733-b9e1058333e3
```

This example modifies the specified mobile device conditional access rule to block jailbroken devices.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the mobile device conditional access rule that you want to modify. The name of the rule uses the syntax `<Mobile device conditional access policy name>{<GUID value>}`. For example, `Secure Email{914f151c-394b-4da9-9422-f5a2f65dec30}`. You can find the name value by running the command: Get-DeviceConfigurationRule | Format-List Name.

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -TargetGroups

> Applicable: Security & Compliance

The TargetGroups parameter specifies the security groups that this rule applies to. This parameter uses the GUID value of the group. To find this GUID value, run the command Get-Group | Format-Table Name,GUID.

You can specify multiple groups separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountName

> Applicable: Security & Compliance

The AccountName parameter specifies the account name. Valid values for this parameter are:

- A text value.
- $null (blank): The setting isn't configured. This is the default value.

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

### -AccountUserName

> Applicable: Security & Compliance

The AccountUserName parameter specifies the account user name. Valid values for this parameter are:

- A text value.
- $null (blank): The setting isn't configured. This is the default value.

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

### -AllowAppStore

> Applicable: Security & Compliance

The AllowAppStore parameter specifies whether to allow access to the app store on devices. Valid values for this parameter are:

- $true: Access to the app store is allowed.
- $false: Access to the app store isn't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1
- Apple iOS 6+

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

### -AllowAssistantWhileLocked

> Applicable: Security & Compliance

The AllowAssistantWhileLocked parameter specifies whether to allow the use of the voice assistant while devices are locked. Valid values for this parameter are:

- $true: The voice assistant can be used while devices are locked.
- $false: The voice assistant can't be used while devices are locked.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

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

### -AllowConvenienceLogon

> Applicable: Security & Compliance

The AllowConvenienceLogon parameter specifies whether to allow convenience logons on devices. Valid values for this parameter are:

- $true: Convenience logons are allowed.
- $false: Convenience logons aren't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

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

### -AllowDiagnosticSubmission

> Applicable: Security & Compliance

The AllowDiagnosticSubmission parameter specifies whether to allow diagnostic submissions from devices. Valid values for this parameter are:

- $true: Diagnostic submissions are allowed.
- $false: Diagnostic submissions aren't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1
- Windows 8.1 RT
- Apple iOS 6+

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

### -AllowiCloudBackup

> Applicable: Security & Compliance

The AllowiCloudBackup parameter specifies whether to allow Apple iCloud Backup from devices. Valid values for this parameter are:

- $true: iCloud Backup is allowed.
- $false: iCloud Backup isn't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Apple iOS 6+
- Android 4+

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

### -AllowiCloudDocSync

> Applicable: Security & Compliance

The AllowiCloudDocSync parameter specifies whether to allow Apple iCloud Documents & Data sync on devices. Valid values for this parameter are:

- $true: iCloud Documents & Data sync is allowed.
- $false: iCloud Documents & Data sync isn't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Apple iOS 6+
- Android 4+

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

### -AllowiCloudPhotoSync

> Applicable: Security & Compliance

The AllowiCloudPhotoSync parameter specifies whether to allow Apple iCloud Photos sync on devices. Valid values for this parameter are:

- $true: iCloud Photos sync is allowed.
- $false: iCloud Photo sync isn't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Apple iOS 6+
- Android 4+

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

### -AllowJailbroken

> Applicable: Security & Compliance

The AllowJailbroken parameter specifies whether to allow access to your organization by jailbroken or rooted devices.

- $true: Jailbroken devices are allowed.
- $false: Jailbroken devices aren't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Apple iOS 6+
- Android 4+

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

### -AllowPassbookWhileLocked

> Applicable: Security & Compliance

The AllowPassbookWhileLocked parameter specifies whether to allow the use of Apple Passbook while devices are locked. Valid values for this parameter are:

- $true: Passbook is available while devices are locked.
- $false: Passbook isn't available while devices are locked.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

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

### -AllowScreenshot

> Applicable: Security & Compliance

The AllowScreenshot parameter specifies whether to allow screenshots on devices. Valid values for this parameter are:

- $true: Screenshots are allowed.
- $false: Screenshots aren't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1
- Apple iOS 6+

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

### -AllowSimplePassword

> Applicable: Security & Compliance

The AllowSimplePassword parameter specifies whether to allow simple or non-complex passwords on devices. Valid values for this parameter are:

- $true: Simple passwords are allowed.
- $false: Simple passwords aren't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1
- Windows 8.1 RT
- Apple iOS 6+

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

### -AllowVideoConferencing

> Applicable: Security & Compliance

The AllowVideoConferencing parameter specifies whether to allow video conferencing on devices. Valid values for this parameter are:

- $true: Video conferencing is allowed.
- $false: Video conferencing isn't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

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

### -AllowVoiceAssistant

> Applicable: Security & Compliance

The AllowVoiceAssistant parameter specifies whether to allow using the voice assistant on devices. Valid values for this parameter are:

- $true: The voice assistant is allowed.
- $false: The voice assistant isn't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

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

### -AllowVoiceDialing

> Applicable: Security & Compliance

The AllowVoiceDialing parameter specifies whether to allow voice-activated telephone dialing. Valid values for this parameter are:

- $true: Voice dialing is allowed.
- $false: Voice dialing isn't allowed.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

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

### -AntiVirusSignatureStatus

> Applicable: Security & Compliance

The AntiVirusSignatureStatus parameter specifies the antivirus signature status. Valid values for this parameter are:

- An integer.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AntiVirusStatus

> Applicable: Security & Compliance

The AntiVirusStatus parameter specifies antivirus status. Valid values for this parameter are:

- An integer.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppsRating

> Applicable: Security & Compliance

The AppsRating parameter species the maximum or most restrictive rating of apps that are allowed on devices. Valid values for this parameter are:

- AllowAll
- DontAllow
- Rating9plus
- Rating12plus
- Rating17plus
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: CARatingAppsEntry
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoUpdateStatus

> Applicable: Security & Compliance

The AutoUpdateStatus parameter specifies the update settings for devices. Valid values for this parameter are:

- AutomaticCheckForUpdates
- AutomaticDownloadUpdates
- AutomaticUpdatesRequired
- DeviceDefault
- NeverCheckUpdates
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: CAAutoUpdateStatusEntry
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BluetoothEnabled

> Applicable: Security & Compliance

The BluetoothEnabled parameter specifies whether to enable or disable Bluetooth on devices. Valid values for this parameter are:

- $true: Bluetooth is enabled.
- $false: Bluetooth is disabled.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows Phone 8.1 devices.

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

### -CameraEnabled

> Applicable: Security & Compliance

The CameraEnabled parameter specifies whether to enable or disable cameras on devices. Valid values for this parameter are:

- $true: Cameras are enabled.
- $false: Cameras are disabled.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1
- Apple iOS 6+
- Android 4+

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

### -DomainController

> Applicable: Security & Compliance

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

### -EmailAddress

> Applicable: Security & Compliance

The EmailAddress parameter specifies the email address. Valid values are:

- An email address: For example, julia@contoso.com.
- $null (blank): The setting isn't configured. This is the default value.

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

### -EnableRemovableStorage

> Applicable: Security & Compliance

The EnableRemovableStorage parameter specifies whether removable storage can be used by devices. Valid values for this parameter are:

- $true: Removable storage can be used.
- $false: Removable storage can't be used.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows Phone 8.1 devices.

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

### -ExchangeActiveSyncHost

> Applicable: Security & Compliance

The ExchangeActiveSyncHost parameter specifies the Exchange ActiveSync host. Valid values for this parameter are:

- A text value.
- $null (blank): The setting isn't configured. This is the default value.

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

### -FirewallStatus

> Applicable: Security & Compliance

The FirewallStatus parameter specifies the acceptable firewall status values on devices. Valid values for this parameter are:

- Required
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: Required
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceAppStorePassword

> Applicable: Security & Compliance

The ForceAppStorePassword parameter specifies whether to require a password to use the app store on devices. Valid values for this parameter are:

- $true: App store passwords are required.
- $false: App store passwords aren't required.
- $null (blank): The feature isn't allowed or blocked by the rule. This is the default value.

This setting is available only on Apple iOS 6+ devices.

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

### -ForceEncryptedBackup

> Applicable: Security & Compliance

The ForceEncryptedBackup parameter specifies whether to force encrypted backups for devices. Valid values for this parameter are:

- $true: Encrypted backups are required.
- $false: Encrypted backups aren't required.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Apple iOS 6+
- Android 4+

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

### -MaxPasswordAttemptsBeforeWipe

> Applicable: Security & Compliance

The MaxPasswordAttemptsBeforeWipe parameter specifies the number of incorrect password attempts that cause devices to be automatically wiped. Valid values for this parameter are:

- An integer.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1
- Windows 8.1 RT
- Apple iOS 6+
- Android 4+

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

### -MaxPasswordGracePeriod

> Applicable: Security & Compliance

The MaxPasswordGracePeriod parameter specifies the length of time users are allowed to reset expired passwords on devices.

This setting is available only on Apple iOS 6+ devices.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

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

### -MoviesRating

> Applicable: Security & Compliance

The MoviesRating parameter species the maximum or most restrictive rating of movies that are allowed on devices. You specify the country/region rating system to use with the RegionRatings parameter.

Valid values for the MoviesRating parameter are:

- AllowAll: All movies are allowed, regardless of their rating.
- DontAllow: No movies are allowed, regardless of their rating.
- $null (blank): The setting isn't configured. This is the default value.

Australia

- AURatingG
- AURatingPG
- AURatingM
- AURatingMA15plus
- AURatingR18plus

Canada

- CARatingG
- CARatingPG
- CARating14A
- CARating18A
- CARatingR

Germany

- DERatingab0Jahren
- DERatingab6Jahren
- DERatingab12Jahren
- DERatingab16Jahren
- DERatingab18Jahren

France

- FRRating10minus
- FRRating12minus
- FRRating16minus
- FRRating18minus

United Kingdom

- GBRatingU
- GBRatingUc
- GBRatingPG
- GBRating12
- GBRating12A
- GBRating15
- GBRating18

Ireland

- IERatingG
- IERatingPG
- IERating12
- IERating15
- IERating16
- IERating18

Japan

- JPRatingG
- JPRatingPG12
- JPRatingRdash15
- JPRatingRdash18

New Zealand

- NZRatingG
- NZRatingPG
- NZRatingM
- NZRatingR13
- NZRatingR15
- NZRatingR16
- NZRatingR18
- NZRatingR

United States

- USRatingG
- USRatingPG
- USRatingPG13
- USRatingR
- USRatingNC17

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: CARatingMovieEntry
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordComplexity

> Applicable: Security & Compliance

The PasswordComplexity parameter specifies the password complexity. Valid values for this parameter are:

- An integer.
- $null (blank): The setting isn't configured. This is the default value.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordExpirationDays

> Applicable: Security & Compliance

The PasswordExpirationDays parameter specifies the number of days that the same password can be used on devices before users are required to change their passwords . Valid values for this parameter are:

- An integer.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1
- Windows 8.1 RT
- Apple iOS 6+
- Android 4+

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

### -PasswordHistoryCount

> Applicable: Security & Compliance

The PasswordHistoryCount parameter specifies the minimum number of unique new passwords that are required on devices before an old password can be reused. Valid values for this parameter are:

- An integer.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1
- Windows 8.1 RT
- Apple iOS 6+
- Android 4+

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

### -PasswordMinComplexChars

> Applicable: Security & Compliance

The PasswordMinComplexChars parameter specifies the minimum number of complex characters that are required for device passwords. A complex character isn't a letter. Valid values for this parameter are:

- An integer.
- $null (blank): The setting isn't configured. This is the default value.

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

### -PasswordMinimumLength

> Applicable: Security & Compliance

The PasswordMinimumLength parameter specifies the minimum number of characters that are required for device passwords. Valid values for this parameter are:

- An integer.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1
- Windows 8.1 RT
- Apple iOS 6+
- Android 4+

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

### -PasswordQuality

> Applicable: Security & Compliance

The PasswordQuality parameter specifies the minimum password quality rating that's required for device passwords. Password quality is a numeric scale that indicates the security and complexity of the password. A higher quality value indicates a more secure password.

Valid values for this parameter are:

- An integer.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Android 4+ devices.

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

### -PasswordRequired

> Applicable: Security & Compliance

The PasswordRequired parameter specifies whether a password is required to access devices. Valid values for this parameter are:

- $true: Device passwords are required.
- $false: Device passwords aren't required.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1
- Apple iOS 6+
- Android 4+

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

### -PasswordTimeout

> Applicable: Security & Compliance

The PasswordTimeout parameter specifies the length of time that devices can be inactive before a password is required to reactivate them.

This setting is available on the following types of devices:

- Windows Phone 8.1
- Windows 8.1 RT
- Apple iOS 6+
- Android 4+

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

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

### -PhoneMemoryEncrypted

> Applicable: Security & Compliance

The PhoneMemoryEncrypted parameter specifies whether to encrypt the memory on devices. Valid values for this parameter are:

- $true: Memory is encrypted.
- $false: Memory isn't encrypted.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1 (already encrypted and can't be unencrypted)
- Android 4+

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

### -RegionRatings

> Applicable: Security & Compliance

The RegionRatings parameter specifies the rating system (country/region) to use for movie and television ratings with the MoviesRating and TVShowsRating parameters.

Valid values for the RegionRating parameter are:

- $null (blank): The setting isn't configured. This is the default value.
- au: Australia
- ca: Canada
- de: Germany
- fr: France
- gb: United Kingdom
- ie: Ireland
- jp: Japan
- nz: New Zealand
- us: United States

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: CARatingRegionEntry
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireEmailProfile

> Applicable: Security & Compliance

The RequireEmailProfile parameter specifies whether an email profile is required on devices. Valid values for this parameter are:

- $true: An email profile is required. This value is required for selective wipe on iOS devices.
- $false: An email profile isn't required.
- $null (blank): The setting isn't configured. This is the default value.

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

### -SmartScreenEnabled

> Applicable: Security & Compliance

The SmartScreenEnabled parameter specifies whether to requireWindows SmartScreen on devices. Valid values for this parameter are:

- $true: SmartScreen is enabled.
- $false: SmartScreen is disabled.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

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

### -SystemSecurityTLS

> Applicable: Security & Compliance

The SystemSecurityTLS parameter specifies whether TLS encryption is used on devices. Valid values for this parameter are:

- $true: TLS encryption is used.
- $false: TLS encryption isn't used.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

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

### -TVShowsRating

> Applicable: Security & Compliance

The TVShowsRating parameter species the maximum or most restrictive rating of television shows that are allowed on devices. You specify the country/region rating system to use with the RegionRatings parameter.

Valid values for the TVShowsRating parameter are:

- AllowAll: All television shows are allowed, regardless of their rating.
- DontAllow: No televisions shows are allowed, regardless of their rating.
- $null (blank): The setting isn't configured. This is the default value.

Australia

- AURatingP
- AURatingC
- AURatingG
- AURatingPG
- AURatingM
- AURatingMA15plus
- AURatingAv15plus

Canada

- CARatingC
- CARatingC8
- CARatingG
- CARatingPG
- CARating14plus
- CARating18plus

Germany

- DERatingab0Jahren
- DERatingab6Jahren
- DERatingab12Jahren
- DERatingab16Jahren
- DERatingab18Jahren

France

- FRRating10minus
- FRRating12minus
- FRRating16minus
- FRRating18minus

United Kingdom

- GBRatingCaution

Ireland

- IERatingGA
- IERatingCh
- IERatingYA
- IERatingPS
- IERatingMA

Japan

- JPRatingExplicitAllowed

New Zealand

- NZRatingG
- NZRatingPGR
- NZRatingAO

United States

- USRatingTVY
- USRatingTVY7
- USRatingTVG
- USRatingTVPG
- USRatingTV14
- USRatingTVMA

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: CARatingTvShowEntry
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserAccountControlStatus

> Applicable: Security & Compliance

The UserAccountControlStatus parameter specifies how User Account Control messages are presented on devices. Valid values for this parameter are:

- $null (blank): The setting isn't configured. This is the default value.
- AlwaysNotify
- NeverNotify
- NotifyAppChanges
- NotifyAppChangesDoNotDimdesktop

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: CAUserAccountControlStatusEntry
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

### -WLANEnabled

> Applicable: Security & Compliance

The WLANEnabled parameter specifies whether Wi-Fi is enabled devices. Valid values for this parameter are:

- $true: Wi-Fi is enabled.
- $false: Wi-Fi is disabled.
- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Microsoft Windows Phone 8.1 devices.

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

### -WorkFoldersSyncUrl

> Applicable: Security & Compliance

The WorkFoldersSyncUrl parameter specifies the URL that's used to synchronize company data on devices.

Valid input for this parameter a URL. For example, `https://workfolders.contoso.com`.

This setting is available only on Windows 8.1 RT devices.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
