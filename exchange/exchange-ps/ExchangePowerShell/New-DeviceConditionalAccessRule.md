---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-deviceconditionalaccessrule
schema: 2.0.0
title: New-DeviceConditionalAccessRule
---

# New-DeviceConditionalAccessRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-DeviceConditionalAccessRule cmdlet to create device conditional access rules in Basic Mobility and Security in Microsoft 365.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-DeviceConditionalAccessRule -Policy <PolicyIdParameter> -TargetGroups <MultiValuedProperty>
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
In PowerShell, a policy in Basic Mobility and Security contains a device policy (a device conditional access policy or a device configuration policy) and an associated device rule (a device conditional access rule or a device configuration rule). For more information about Basic Mobility and Security, see [Overview of Basic Mobility and Security for Microsoft 365](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/overview).

In device conditional access policies, devices that don't meet the access requirement settings in the policy are prevented from accessing Microsoft 365 resources in supported apps. You specify the policy settings in the associated device conditional access rule. For more information, see [Access control for Microsoft 365 email and documents](https://learn.microsoft.com/microsoft-365/admin/basic-mobility-security/capabilities#access-control-for-microsoft-365-email-and-documents).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Defender portal](https://learn.microsoft.com/defender-office-365/mdo-portal-permissions) or [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
New-DeviceConditionalAccessRule -Policy "Secure Email" -TargetGroups 00000000-0000-0000-0000-000000000000
```

This example creates a new device conditional access rule with the following settings:

- Associated device conditional access policy: Secure Email
- TargetGroups: 00000000-0000-0000-0000-000000000000 (not assigned to any security groups)

## PARAMETERS

### -Policy

> Applicable: Security & Compliance

The Policy parameter specifies the device conditional access policy that this rule is associated with. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetGroups

> Applicable: Security & Compliance

The TargetGroups parameter specifies the security groups that this rule applies to. This parameter uses one or more GUID values to identify the groups:

- The value `00000000-0000-0000-0000-000000000000` means the rule isn't assigned to any security groups.
- Use the output of the **Get-MgGroup** cmdlet in Microsoft Graph PowerShell to find the display name and the associated GUID values of available security groups (Microsoft 365 Groups with the _GroupTypes_ value `Unified` aren't allowed).

You can specify multiple security group GUID values separated by commas.

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

### -AccountUserName

> Applicable: Security & Compliance

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

### -AllowAppStore

> Applicable: Security & Compliance

This setting is supported on the following types of devices:

- iOS/iPadOS
- Samsung Knox
<!---Windows Arm64? Windows Phone 8.1--->

The AllowAppStore parameter specifies whether to allow access to the app store on supported devices. Valid values are:

- $true: Access to the app store is allowed. This is the default value.
- $false: Access to the app store isn't allowed.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- iOS/iPadOS

The AllowAssistantWhileLocked parameter specifies whether to allow the use of Siri while devices are locked. Valid values are:

- $true: Siri can be used while devices are locked. This is the default value.
- $false: Siri can't be used while devices are locked.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- Windows Arm64

The AllowConvenienceLogon parameter specifies whether to allow signing in on supported devices using non-password methods (for example, fingerprints or facial recognition). Valid values are:

- $true: Convenience logons are allowed. This is the default value.
- $false: Convenience logons aren't allowed.

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

This setting is supported on the following types of devices:

- iOS/iPadOS
- Samsung Knox
- Windows Arm64 <!---Windows Phone 8.1, Windows 8.1 RT--->

The AllowDiagnosticSubmission parameter specifies whether to allow sending diagnostic and usage data from supported devices. Valid values are:

- $true: Diagnostic submissions are allowed. This is the default value.
- $false: Diagnostic submissions aren't allowed.

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

This setting is supported on the following types of devices:

- Supervised iOS/iPadOS devices

The AllowiCloudBackup parameter specifies whether to allow iCloud Backup from supervised iOS/iPadOS devices. Valid values are:

- $true: iCloud Backup is allowed. This is the default value.
- $false: iCloud Backup isn't allowed.

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

This setting is supported on the following types of devices:

- Supervised iOS/iPadOS devices

The AllowiCloudDocSync parameter specifies whether to allow iCloud Drive synchronization on supervised iOS/iPadOS devices. Valid values are:

- $true: iCloud Documents & Data sync is allowed. This is the default value.
- $false: iCloud Documents & Data sync isn't allowed.

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

This setting is supported on the following types of devices:

- iOS/iPadOS

The AllowiCloudPhotoSync parameter specifies whether to allow iCloud Photos synchronization on supported devices. Valid values are:

- $true: iCloud Photos sync is allowed. This is the default value.
- $false: iCloud Photo sync isn't allowed.

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

This is an access requirement setting that blocks access to Microsoft 365 resources from supported apps on non-compliant devices.

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- iOS/iPadOS
- Android
- Samsung Knox

The AllowJailbroken parameter specifies whether to allow access to company resources by supported devices that are jailbroken or rooted.

- $true: Jailbroken devices are allowed. This is the default value for rules created in PowerShell.
- $false: Jailbroken devices aren't allowed.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- iOS/iPadOS

The AllowPassbookWhileLocked parameter specifies whether to allow the use of Apple Wallet while iOS/iPadOS devices are locked. Valid values are:

- $true: Apple Wallet is available while devices are locked. This is the default value.
- $false: Apple Wallet isn't available while devices are locked.

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

This setting is supported on the following types of devices:

- iOS/iPadOS
- Samsung Knox
<!--Windows Arm64? Windows Phone 8.1--->

The AllowScreenshot parameter specifies whether to allow screenshots on supported devices. Valid values are:

- $true: Screenshots are allowed. This is the default value.
- $false: Screenshots aren't allowed.

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

This is an access requirement setting that blocks access to Microsoft 365 resources from supported apps on non-compliant devices.

This setting is supported on the following types of devices:

- iOS/iPadOS
<!---Windows Arm64 (applies to local accounts only)? Windows Phone 8.1, Windows 8.1 RT--->

The AllowSimplePassword parameter specifies whether to allow non-complex passwords on supported devices. Valid values are:

- $true: Simple passwords are allowed. This is the default value in PowerShell.
- $false: Simple passwords aren't allowed.

The value of this parameter is meaningful only if the value of the PasswordRequired parameter is $true (the default value is $false in PowerShell).

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

This setting is supported on the following types of devices:

- Supervised iOS/iPadOS devices

The AllowVideoConferencing parameter specifies whether to allow access to FaceTime on supervised iOS/iPadOS devices. Valid values are:

- $true: FaceTime is allowed. This is the default value.
- $false: FaceTime isn't allowed.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- iOS/iPadOS

The AllowVoiceAssistant parameter specifies whether to allow access to Siri on supported devices. Valid values are:

- $true: Siri is allowed. This is the default value.
- $false: Siri isn't allowed.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- iOS/iPadOS

The AllowVoiceDialing parameter specifies whether to allow telephone dialing by Siri on supported devices. Valid values are:

- $true: Voice dialing by Siri is allowed. This is the default value.
- $false: Voice dialing by Siri isn't allowed.

The value of this parameter is meaningful only if the value of the AllowVoiceAssistant parameter is $true (default).

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- Windows Arm64 <!---Windows 8.1 RT--->

The AntiVirusSignatureStatus parameter specifies the required anti-virus signature status on supported devices. Valid values are:

- An integer.
- $null (blank): The setting isn't configured. This value is the default.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- Windows Arm64 <!---Windows 8.1 RT--->

The AntiVirusStatus parameter specifies the required anti-virus status on supported devices. Valid values are:

- An integer.
- $null (blank): The setting isn't configured. This value is the default.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- iOS/iPadOS

The AppsRating parameter species the maximum or most restrictive rating of apps that are allowed on supported devices. Valid values are:

- DontAllow
- Rating4plus
- Rating9plus
- Rating12plus
- Rating17plus
- AllowAll
- $null (blank): The setting isn't configured. This is the default value.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- Windows Arm64 <!---Windows 8.1 RT--->

The AutoUpdateStatus parameter specifies the required update settings on supported devices. Valid values are:

- AutomaticCheckForUpdates
- AutomaticDownloadUpdates
- AutomaticUpdatesRequired
- DeviceDefault
- NeverCheckUpdates
- $null (blank): The setting isn't configured. This value is the default.

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

This setting is supported on the following types of devices:

- Samsung Knox
<!---Windows Arm64? Windows Phone 8.1--->

The BluetoothEnabled parameter specifies whether to enable or disable Bluetooth on supported devices. Valid values are:

- $true: Bluetooth is enabled. This is the default value.
- $false: Bluetooth is disabled.

Technically, wWe can't disable BlueTooth as a setting in Android. Instead, we disable all the transactions that require BlueTooth:

- Advanced Audio Distribution
- Audio/Video Remote Control
- Hands-free devices<
- Headsets
- Phone Book Access
- Serial Port

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- iOS/iPadOS
- Android
- Samsung Knox
<!---Windows Arm64? Windows Phone 8.1--->

The CameraEnabled parameter specifies whether to enable or disable the built-in camera on supported devices. Valid values are:

- $true: The camera is enabled. This is the default value.
- $false: The camera is disabled.

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

### -EnableRemovableStorage

> Applicable: Security & Compliance

This setting is supported on the following types of devices:

- Samsung Knox
<!---Windows Arm64? Windows Phone 8.1--->

The EnableRemovableStorage parameter specifies whether removable storage can be used by supported devices. Valid values are:

- $true: Removable storage can be used. This is the default value.
- $false: Removable storage can't be used.

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

### -FirewallStatus

> Applicable: Security & Compliance

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- Windows Arm64 <!---Windows 8.1 RT--->

The FirewallStatus parameter specifies the acceptable firewall status values on supported devices. Valid values are:

- Required
- $null (blank): The setting isn't configured. This value is the default.

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

This setting is supported on the following types of devices:

- iOS/iPadOS

The ForceAppStorePassword parameter specifies whether to require a password to use the app store on supported devices. Valid values are:

- $true: A password is required to use the app store.
- $false: A password isn't required to use the app store. This is the default value.

This setting is meaningful only if the value of the AllowAppStore parameter is $true (default).

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

This setting is supported on the following types of devices:

- iOS/iPadOS

The ForceEncryptedBackup parameter specifies whether to force encrypted backups for supported devices. Valid values are:

- $true: Encrypted backups are required.
- $false: Encrypted backups aren't required. This is the default value.

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

This is an access requirement setting that blocks access to Microsoft 365 resources from supported apps on non-compliant devices.

This setting is supported on the following types of devices:

- iOS/iPadOS
- Android
- Samsung Knox
- Windows Arm64 <!---Windows Phone 8.1, Windows 8.1 RT--->

The MaxPasswordAttemptsBeforeWipe parameter specifies the number of incorrect password attempts that cause supported devices to be automatically wiped. Valid values are:

- An integer. Reasonable values are from 4 to 11.
- $null (blank): The setting isn't configured. This is the default value.

The value of this parameter is meaningful only if the value of the PasswordRequired parameter is $true (the default value is $false in PowerShell).

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- iOS/iPadOS

The MaxPasswordGracePeriod parameter specifies the length of time that users are allowed to reset expired passwords on supported devices.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is blank ($null).

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- iOS/iPadOS

The MoviesRating parameter species the maximum or most restrictive rating of movies that are allowed on supported devices. You specify the country/region rating system to use with the RegionRatings parameter.

Valid values for the MoviesRating parameter are:

- AllowAll: All movies are allowed, regardless of their rating.
- DontAllow: No movies are allowed, regardless of their rating.
- $null (blank): The setting isn't configured. This value is the default.

Valid country/region specific ratings values:

- AURatingG (Australia)
- AURatingPG (Australia)
- AURatingM (Australia)
- AURatingMA15plus (Australia)
- AURatingR18plus (Australia)
- CARatingG (Canada)
- CARatingPG (Canada)
- CARating14A (Canada)
- CARating18A (Canada)
- CARatingR (Canada)
- DERatingab0Jahren (Germany)
- DERatingab6Jahren (Germany)
- DERatingab12Jahren (Germany)
- DERatingab16Jahren (Germany)
- DERatingab18Jahren (Germany)
- FRRating10minus (France)
- FRRating12minus (France)
- FRRating16minus (France)
- FRRating18minus (France)
- GBRatingU (United Kingdom)
- GBRatingUc (United Kingdom)
- GBRatingPG (United Kingdom)
- GBRating12 (United Kingdom)
- GBRating12A (United Kingdom)
- GBRating15 (United Kingdom)
- GBRating18 (United Kingdom)
- IERatingG (Ireland)
- IERatingPG (Ireland)
- IERating12 (Ireland)
- IERating15 (Ireland)
- IERating16 (Ireland)
- IERating18 (Ireland)
- JPRatingG (Japan)
- JPRatingPG12 (Japan)
- JPRatingRdash15 (Japan)
- JPRatingRdash18 (Japan)
- NZRatingG (New Zealand)
- NZRatingPG (New Zealand)
- NZRatingM (New Zealand)
- NZRatingR13 (New Zealand)
- NZRatingR15 (New Zealand)
- NZRatingR16 (New Zealand)
- NZRatingR18 (New Zealand)
- NZRatingR (New Zealand)
- NZRatingRP16 (New Zealand)
- USRatingG (United States)
- USRatingPG (United States)
- USRatingPG13 (United States)
- USRatingR (United States)
- USRatingNC17 (United States)

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

<!--- Not described in article or correlated to UI setting --->

The PasswordComplexity parameter specifies the required password complexity on supported devices. Valid values are:

- An integer.
- $null (blank): The setting isn't configured. This value is the default.

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

This is an access requirement setting that blocks access to Microsoft 365 resources from supported apps on non-compliant devices.

This setting is supported on the following types of devices:

- iOS/iPadOS
- Android
- Samsung Knox
- Windows Arm64 (applies to local accounts only) <!---Windows Phone 8.1, Windows 8.1 RT--->

The PasswordExpirationDays parameter specifies the number of days that the same password can be used on supported devices before users are required to change their passwords. Valid values are:

- An integer. Reasonable values are from 1 to 255.
- $null (blank): The setting isn't configured. This is the default value.

The value of this parameter is meaningful only if the value of the PasswordRequired parameter is $true (the default value is $false in PowerShell).

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

This is an access requirement setting that blocks access to Microsoft 365 resources from supported apps on non-compliant devices.

This setting is supported on the following types of devices:

- iOS/iPadOS
- Android
- Samsung Knox
- Windows Arm64 (applies to local accounts only) <!---Windows Phone 8.1, Windows 8.1 RT--->

The PasswordHistoryCount parameter specifies the minimum number of unique new passwords that are required on supported devices before an old password can be reused. Valid values are:

- An integer. Reasonable values are from 1 to 24.
- $null (blank): The setting isn't configured. This is the default value.

The value of this parameter is meaningful only if the value of the PasswordRequired parameter is $true (the default value is $false in PowerShell).

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

This is an access requirement setting that blocks access to Microsoft 365 resources from supported apps on non-compliant devices.

This setting is supported on the following types of devices:

- iOS/iPadOS
- Windows Arm64 (applies to local accounts only)

The PasswordMinComplexChars parameter specifies the minimum number of characters set that are required for device passwords on supported devices. Valid values are:

- An integer. Reasonable values are are 1 to 4.
- $null (blank): The setting isn't configured. This is the default value.

The value of this parameter is meaningful only if the value of the PasswordRequired parameter is $true (the default value is $false in PowerShell).

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

This is an access requirement setting that blocks access to Microsoft 365 resources from supported apps on non-compliant devices.

This setting is supported on the following types of devices:

- iOS/iPadOS
- Android
- Samsung Knox
- Windows Arm64 (applies to local accounts only) <!---Windows Phone 8.1, Windows 8.1 RT--->

The PasswordMinimumLength parameter specifies the minimum number of characters that are required for device passwords on supported devices. Valid values are:

- An integer. Reasonable values are from 4 to 14.
- $null (blank): The setting isn't configured. This is the default value.

The value of this parameter is meaningful only if the value of the PasswordRequired parameter is $true (the default value is $false in PowerShell).

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- Android
- Samsung Knox

The PasswordQuality parameter specifies the minimum password quality rating that's required for device passwords on supported devices. Password quality is a numeric scale that indicates the security and complexity of the password. A higher quality value indicates a more secure password.

Valid values are:

- An integer.
- $null (blank): The setting isn't configured. This value is the default.

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

This is an access requirement setting that blocks access to Microsoft 365 resources from supported apps on non-compliant devices.

This setting is supported on the following types of devices:

- iOS/iPadOS
- Windows Arm64 <!---Windows Phone 8.1--->

The PasswordRequired parameter specifies whether a password is required to access supported devices. Valid values are:

- $true: Device passwords are required.
- $false: Device passwords aren't required. This is the default value in PowerShell.

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

This is an access requirement setting that blocks access to Microsoft 365 resources from supported apps on non-compliant devices.

This setting is supported on the following types of devices:

- iOS/iPadOS
- Windows Arm64 <!---Windows Phone 8.1, Windows 8.1 RT--->

The PasswordTimeout parameter specifies the length of time that supported devices can be inactive before a password is required to reactivate them.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds. Reasonable values are 00:01:00 (one minute) to 01:00:00 (one hour).

The default value is $null (blank).

The value of this parameter is meaningful only if the value of the PasswordRequired parameter is $true (the default value is $false in PowerShell).

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

This is an access requirement setting that blocks access to Microsoft 365 resources from supported apps on non-compliant devices.

This setting is supported on the following types of devices:

- Android
- Samsung Knox
<!---Windows Phone 8.1 (already encrypted and can't be unencrypted)--->

The PhoneMemoryEncrypted parameter specifies whether to encrypt the memory on supported devices. Valid values are:

- $true: Memory is encrypted.
- $false: Memory isn't encrypted. This is the default value.

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

This setting is supported on the following types of devices:

- iOS/iPadOS

The RegionRatings parameter specifies the rating system (country/region) to use for movie and television ratings on supported devices with the MoviesRating and TVShowsRating parameters.

Valid values for the RegionRating parameter are:

- au: Australia
- ca: Canada
- de: Germany
- fr: France
- gb: United Kingdom
- ie: Ireland
- jp: Japan
- nz: New Zealand
- us: United States
- $null (blank): The setting isn't configured. This is the default value.

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

This is an access requirement setting that blocks access to Microsoft 365 resources from supported apps on non-compliant devices.

This setting is supported on the following types of devices:

- iOS/iPadOS

The RequireEmailProfile parameter specifies whether an email profile is required on supported devices. Valid values are:

- $true: An email profile is required. This value is required for selective wipe.
- $false: An email profile isn't required. This is the default value.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- Windows Arm64 <!---Windows 8.1 RT--->

The SmartScreenEnabled parameter specifies whether to requireWindows SmartScreen on supported devices. Valid values are:

- $true: SmartScreen is enabled.
- $false: SmartScreen is disabled. This is the default value.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- iOS/iPadOS

The SystemSecurityTLS parameter specifies whether TLS encryption is required on supported devices. Valid values are:

- $true: TLS encryption is required.
- $false: TLS encryption isn't required. This is the default value.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- iOS/iPadOS

The TVShowsRating parameter species the maximum or most restrictive rating of television shows that are allowed on supported devices. You specify the country/region rating system to use with the RegionRatings parameter.

Valid values for the TVShowsRating parameter are:

- AllowAll: All television shows are allowed, regardless of their rating.
- DontAllow: No televisions shows are allowed, regardless of their rating.
- $null (blank): The setting isn't configured. This value is the default.

Valid country/region specific ratings values:

- AURatingP (Australia)
- AURatingC (Australia)
- AURatingG (Australia)
- AURatingPG (Australia)
- AURatingM (Australia)
- AURatingMA15plus (Australia)
- AURatingAv15plus (Australia)
- CARatingC (Canada)
- CARatingC8 (Canada)
- CARatingG (Canada)
- CARatingPG (Canada)
- CARating14plus (Canada)
- CARating18plus (Canada)
- DERatingab0Jahren (Germany)
- DERatingab6Jahren (Germany)
- DERatingab12Jahren (Germany)
- DERatingab16Jahren (Germany)
- DERatingab18Jahren (Germany)
- FRRating10minus (France)
- FRRating12minus (France)
- FRRating16minus (France)
- FRRating18minus (France)
- GBRatingCaution (United Kingdom)
- IERatingGA (Ireland)
- IERatingCh (Ireland)
- IERatingYA (Ireland)
- IERatingPS (Ireland)
- IERatingMA (Ireland)
- JPRatingExplicitAllowed (Japan)
- NZRatingG (New Zealand)
- NZRatingPGR (New Zealand)
- NZRatingAO (New Zealand)
- USRatingTVG (United States)
- USRatingTVY (United States)
- USRatingTVY7 (United States)
- USRatingTVPG (United States)
- USRatingTV14 (United States)
- USRatingTVMA (United States)

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- Windows Arm64 <!---Windows 8.1 RT--->

The UserAccountControlStatus parameter specifies how User Account Control messages are presented on supported devices. Valid values are:

- AlwaysNotify
- NeverNotify
- NotifyAppChanges
- NotifyAppChangesDoNotDimDesktop
- $null (blank): The setting isn't configured. This is the default value.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- Windows Arm64 <!---Windows Phone 8.1--->

The WLANEnabled parameter specifies whether Wi-Fi is enabled on supported devices. Valid values are:

- $true: Wi-Fi is enabled. This is the default value.
- $false: Wi-Fi is disabled.

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

This setting is available only in PowerShell.

This setting is supported on the following types of devices:

- Windows Arm64 <!---Windows 8.1 RT--->

The WorkFoldersSyncUrl parameter specifies the Work Folders URL on a Windows Server that's used to synchronize company data on supported devices. Valid values are:

- A URL. For example, `https://workfolders.contoso.com`.
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
