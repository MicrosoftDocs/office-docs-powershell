---
applicable: Office 365 Security & Compliance Center
schema: 2.0.0
---

# New-DeviceConfigurationRule

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-DeviceConfigurationRule cmdlet to create mobile device configuration rules in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-DeviceConfigurationRule -Policy <PolicyIdParameter> -TargetGroups <MultiValuedProperty>
 [-AccountName <String>] [-AccountUserName <String>] [-AllowAppStore <$true | $false>]
 [-AllowAssistantWhileLocked <$true | $false>] [-AllowConvenienceLogon <$true | $false>]
 [-AllowDiagnosticSubmission <$true | $false>] [-AllowiCloudBackup <$true | $false>]
 [-AllowiCloudDocSync <$true | $false>] [-AllowiCloudPhotoSync <$true | $false>]
 [-AllowPassbookWhileLocked <$true | $false>] [-AllowScreenshot <$true | $false>]
 [-AllowSimplePassword <$true | $false>] [-AllowVideoConferencing <$true | $false>]
 [-AllowVoiceAssistant <$true | $false>] [-AllowVoiceDialing <$true | $false>]
 [-AntiVirusSignatureStatus <Int64>] [-AntiVirusStatus <Int64>]
 [-AppsRating <DontAllow | Rating4plus | Rating9plus | Rating12plus | Rating17plus | AllowAll>]
 [-AutoUpdateStatus <AutomaticUpdatesRequired | AutomaticCheckForUpdates | AutomaticDownloadUpdates | NeverCheckUpdates | DeviceDefault>]
 [-BluetoothEnabled <$true | $false>] [-CameraEnabled <$true | $false>] [-Confirm] [-DomainController <Fqdn>]
 [-EmailAddress <String>] [-EnableRemovableStorage <$true | $false>] [-ExchangeActiveSyncHost <String>]
 [-FirewallStatus <Required>] [-ForceAppStorePassword <$true | $false>]
 [-ForceEncryptedBackup <$true | $false>] [-MaxPasswordAttemptsBeforeWipe <Int32>]
 [-MaxPasswordGracePeriod <TimeSpan>]
 [-MoviesRating <DontAllow | AllowAll | USRatingG | USRatingPG | USRatingPG13 | USRatingR | USRatingNC17 | AURatingG | AURatingPG | AURatingM | AURatingMA15plus | AURatingR18plus | CARatingG | CARatingPG | CARating14A | CARating18A | CARatingR | DERatingab0Jahren | DERatingab6Jahren | DERatingab12Jahren | DERatingab16Jahren | DERatingab18Jahren | FRRating10minus | FRRating12minus | FRRating16minus | FRRating18minus | IERatingG | IERatingPG | IERating12 | IERating15 | IERating16 | IERating18 | JPRatingG | JPRatingPG12 | JPRatingRdash15 | JPRatingRdash18 | NZRatingG | NZRatingPG | NZRatingM | NZRatingR13 | NZRatingR15 | NZRatingR16 | NZRatingR18 | NZRatingR | NZRatingRP16 | GBRatingU | GBRatingUc | GBRatingPG | GBRating12 | GBRating12A | GBRating15 | GBRating18>]
 [-PasswordComplexity <Int64>] [-PasswordExpirationDays <Int32>] [-PasswordHistoryCount <Int32>]
 [-PasswordMinComplexChars <Int32>] [-PasswordMinimumLength <Int32>] [-PasswordQuality <Int32>]
 [-PasswordRequired <$true | $false>] [-PasswordTimeout <TimeSpan>] [-PhoneMemoryEncrypted <$true | $false>]
 [-RegionRatings <us | au | ca | de | fr | ie | jp | nz | gb>] [-RequireEmailProfile <$true | $false>]
 [-SmartScreenEnabled <$true | $false>] [-SystemSecurityTLS <$true | $false>]
 [-TVShowsRating <DontAllow | AllowAll | USRatingTVY | USRatingTVY7 | USRatingTVG | USRatingTVPG | USRatingTV14 | USRatingTVMA | AURatingP | AURatingC | AURatingG | AURatingPG | AURatingM | AURatingMA15plus | AURatingAv15plus | CARatingC | CARatingC8 | CARatingG | CARatingPG | CARating14plus | CARating18plus | DERatingab0Jahren | DERatingab6Jahren | DERatingab12Jahren | DERatingab16Jahren | DERatingab18Jahren | FRRating10minus | FRRating12minus | FRRating16minus | FRRating18minus | IERatingGA | IERatingCh | IERatingYA | IERatingPS | IERatingMA | JPRatingExplicitAllowed | NZRatingG | NZRatingPGR | NZRatingAO | GBRatingCaution>]
 [-UserAccountControlStatus <AlwaysNotify | NotifyAppChanges | NotifyAppChangesDoNotDimdesktop | NeverNotify>]
 [-WhatIf] [-WLANEnabled <$true | $false>] [-WorkFoldersSyncUrl <String>] [<CommonParameters>]
```

## DESCRIPTION
These are the cmdlets that are used for mobile device management in the Security & Compliance Center:

- DeviceTenantPolicy and DeviceTenantRule cmdlets: A policy that defines whether to block or allow mobile device access to Office 365 email by unsupported devices that use Exchange ActiveSync only. This setting applies to all users in your organization. Both allow and block scenarios allow reporting for unsupported devices, and you can specify exceptions to the policy based on security groups.

- DeviceConditionalAccessPolicy and DeviceConditionalAccessRule cmdlets: Policies that control mobile device access to Office 365 for supported devices. These policies are applied to security groups. Unsupported devices are not allowed to enroll in mobile device management.

- DeviceConfigurationPolicy and DeviceConfigurationRule cmdlets: Policies that control mobile device settings for supported devices. These policies are applied to security groups.

- Get-DevicePolicy: Returns all mobile device management policies regardless of type (DeviceTenantPolicy, DeviceConditionalAccessPolicy or DeviceConfigurationPolicy).

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```
New-DeviceConfigurationRule -Policy "Engineering Group" -TargetGroups 5bff73eb-0ba7-461b-b7c9-9b4c173cc266
```

This example creates a new mobile device configuration rule with the following settings:


Policy: Engineering Group

TargetGroups:5bff73eb-0ba7-461b-b7c9-9b4c173cc266

## PARAMETERS

### -Policy
The Policy parameter specifies the mobile device configuration policy that this rule is associated with. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetGroups
The TargetGroups parameter specifies the security groups that this rule applies to. This parameter uses the GUID value of the group. To find this GUID value, run the command Get-Group | Format-Table Name,GUID.

You can specify multiple groups separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountName
The AccountName parameter ???. Valid values for this parameter are:

- A text value.

- $null (blank): The setting isn't configured. This is the default value.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountUserName
The AccountUserName parameter specifies ???. Valid values for this parameter are:

- A text value.

- $null (blank): The setting isn't configured. This is the default value.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAppStore
The AllowAppStore parameter specifies whether to allow access to the app store on devices. Valid values for this parameter are:

- $true: Access to the app store is allowed.

- $false: Access to the app store isn't allowed.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1

- Apple iOS 6+

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAssistantWhileLocked
The AllowAssistantWhileLocked parameter specifies whether to allow the use of the voice assistant while devices are locked. Valid values for this parameter are:

- $true: The voice assistant can be used while devices are locked.

- $false: The voice assistant can't be used while devices are locked.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowConvenienceLogon
The AllowConvenienceLogon parameter specifies whether to allow convenience logons on devices. Valid values for this parameter are:

- $true: Convenience logons are allowed.

- $false: Convenience logons aren't allowed.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDiagnosticSubmission
The AllowDiagnosticSubmission parameter specifies whether to allow diagnostic submissions from devices. Valid values for this parameter are:

- $true: Diagnostic submissions are allowed.

- $false: Diagnostic submissions aren't allowed.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1

- Windows 8.1 RT

- Apple iOS 6+

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowiCloudBackup
The AllowiCloudBackup parameter specifies whether to allow Apple iCloud Backup from devices. Valid values for this parameter are:

- $true: iCloud Backup is allowed.

- $false: iCloud Backup isn't allowed.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Apple iOS 6+

- Android 4+

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowiCloudDocSync
The AllowiCloudDocSync parameter specifies whether to allow Apple iCloud Documents & Data sync on devices. Valid values for this parameter are:

- $true: iCloud Documents & Data sync is allowed.

- $false: iCloud Documents & Data sync isn't allowed.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Apple iOS 6+

- Android 4+

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowiCloudPhotoSync
The AllowiCloudPhotoSync parameter specifies whether to allow Apple iCloud Photos sync on devices. Valid values for this parameter are:

- $true: iCloud Photos sync is allowed.

- $false: iCloud Photo sync isn't allowed.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Apple iOS 6+

- Android 4+

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPassbookWhileLocked
The AllowPassbookWhileLocked parameter specifies whether to allow the use of Apple Passbook while devices are locked. Valid values for this parameter are:

- $true: Passbook is available while devices are locked.

- $false: Passbook isn't available while devices are locked.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowScreenshot
The AllowScreenshot parameter specifies whether to allow screenshots on devices. Valid values for this parameter are:

- $true: Screenshots are allowed.

- $false: Screenshots aren't allowed.$null

- (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1

- Apple iOS 6+

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSimplePassword
The AllowSimplePassword parameter specifies whether to allow simple or non-complex passwords on devices. Valid values for this parameter are:

- $true: Simple passwords are allowed.

- $false: Simple passwords aren't allowed.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1

- Windows 8.1 RT

- Apple iOS 6+

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowVideoConferencing
The AllowVideoConferencing parameter specifies whether to allow video conferencing on devices. Valid values for this parameter are:

- $true: Video conferencing is allowed.

- $false: Video conferencing isn't allowed.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowVoiceAssistant
The AllowVoiceAssistant parameter specifies whether to allow using the voice assistant on devices. Valid values for this parameter are:

- $true: The voice assistant is allowed.

- $false: The voice assistant isn't allowed.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowVoiceDialing
The AllowVoiceDialing parameter specifies whether to allow voice-activated telephone dialing. Valid values for this parameter are:

- $true: Voice dialing is allowed.

- $false: Voice dialing isn't allowed.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AntiVirusSignatureStatus
The AntiVirusSignatureStatus parameter specifies ???. Valid values for this parameter are:

- An integer.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AntiVirusStatus
The AntiVirusStatus parameter specifies ???. Valid values for this parameter are:

- An integer.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppsRating
The AppsRating parameter species the maximum or most restrictive rating of apps that are allowed on devices. Valid values for this parameter are:

- AllowAll

- DontAllow

- Rating9plus

- Rating12plus

- Rating17plus

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: DontAllow | Rating4plus | Rating9plus | Rating12plus | Rating17plus | AllowAll
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoUpdateStatus
The AutoUpdateStatus parameter specifies the update settings for devices. Valid values for this parameter are:

- AutomaticCheckForUpdates

- AutomaticDownloadUpdates

- AutomaticUpdatesRequired

- DeviceDefault

- NeverCheckUpdates

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: AutomaticUpdatesRequired | AutomaticCheckForUpdates | AutomaticDownloadUpdates | NeverCheckUpdates | DeviceDefault
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BluetoothEnabled
The BluetoothEnabled parameter specifies whether to enable or disable Bluetooth on devices. Valid values for this parameter are:

- $true: Bluetooth is enabled.

- $false: Bluetooth is disabled.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows Phone 8.1 devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CameraEnabled
The CameraEnabled parameter specifies whether to enable or disable cameras on devices. Valid values for this parameter are:

- $true: Cameras are enabled.

- $false: Cameras are disabled.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1

- Apple iOS 6+

- Android 4+

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddress
The EmailAddress parameter specifies the email address. Valid values are:

- An email address: For example, julia@contoso.com.

- $null (blank): The setting isn't configured. This is the default value.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableRemovableStorage
The EnableRemovableStorage parameter specifies whether removable storage can be used by devices. Valid values for this parameter are:

- $true: Removable storage can be used.

- $false: Removable storage can't be used.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows Phone 8.1 devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeActiveSyncHost
The ExchangeActiveSyncHost parameter specifies ???. Valid values for this parameter are:

- A text value.

- $null (blank): The setting isn't configured. This is the default value.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FirewallStatus
The FirewallStatus parameter specifies the acceptable firewall status values on devices. Valid values for this parameter are:

- Required

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: Required
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceAppStorePassword
The ForceAppStorePassword parameter specifies whether to require a password to use the app store on devices. Valid values for this parameter are:

- $true: App store passwords are required.

- $false: App store passwords aren't required.

- $null (blank): The feature isn't allowed or blocked by the rule. This is the default value.

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceEncryptedBackup
The ForceEncryptedBackup parameter specifies whether to force encrypted backups for devices. Valid values for this parameter are:

- $true: Encrypted backups are required.

- $false: Encrypted backups aren't required.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Apple iOS 6+

- Android 4+

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxPasswordAttemptsBeforeWipe
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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxPasswordGracePeriod
The MaxPasswordGracePeriod parameter specifies the length of time users are allowed to reset expired passwords on devices.

This setting is available only on Apple iOS 6+ devices.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoviesRating
The MoviesRating parameter species the maximum or most restrictive rating of movies that are allowed on devices. You specify the country rating system to use with the RegionRatings parameter.

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

- 

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
Type: DontAllow | AllowAll | USRatingG | USRatingPG | USRatingPG13 | USRatingR | USRatingNC17 | AURatingG | AURatingPG | AURatingM | AURatingMA15plus | AURatingR18plus | CARatingG | CARatingPG | CARating14A | CARating18A | CARatingR | DERatingab0Jahren | DERatingab6Jahren | DERatingab12Jahren | DERatingab16Jahren | DERatingab18Jahren | FRRating10minus | FRRating12minus | FRRating16minus | FRRating18minus | IERatingG | IERatingPG | IERating12 | IERating15 | IERating16 | IERating18 | JPRatingG | JPRatingPG12 | JPRatingRdash15 | JPRatingRdash18 | NZRatingG | NZRatingPG | NZRatingM | NZRatingR13 | NZRatingR15 | NZRatingR16 | NZRatingR18 | NZRatingR | NZRatingRP16 | GBRatingU | GBRatingUc | GBRatingPG | GBRating12 | GBRating12A | GBRating15 | GBRating18
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordComplexity
The PasswordComplexity parameter specifies ???. Valid values for this parameter are:

- An integer.

- $null (blank): The setting isn't configured. This is the default value.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordExpirationDays
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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordHistoryCount
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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordMinComplexChars
The PasswordMinComplexChars parameter specifies the minimum number of complex characters that are required for device passwords. A complex character isn't a letter. Valid values for this parameter are:

- An integer.

- $null (blank): The setting isn't configured. This is the default value.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordMinimumLength
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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordQuality
The PasswordQuality parameter specifies the minimum password quality rating that's required for device passwords. Password quality is a numeric scale that indicates the security and complexity of the password. A higher quality value indicates a more secure password.

Valid values for this parameter are:

- An integer.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Android 4+ devices.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordRequired
The PasswordRequired parameter specifies whether a password is required to access devices. Valid values for this parameter are:

- $true: Device passwords are required.

- $false: Device passwords aren't required.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1

- Apple iOS 6+

- Android 4+

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordTimeout
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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneMemoryEncrypted
The PhoneMemoryEncrypted parameter specifies whether to encrypt the memory on devices. Valid values for this parameter are:

- $true: Memory is encrypted.

- $false: Memory isn't encrypted.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available on the following types of devices:

- Windows Phone 8.1 (already encrypted and can't be unencrypted)

- Android 4+

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegionRatings
The RegionRatings parameter specifies the rating system (country) to use for movie and television ratings with the MoviesRating and TVShowsRating parameters.

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
Type: us | au | ca | de | fr | ie | jp | nz | gb
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireEmailProfile
The RequireEmailProfile parameter specifies whether an email profile is required on devices. Valid values for this parameter are:

- $true: An email profile is required. This value is required for selective wipe on iOS devices.

- $false: An email profile isn't required.

- $null (blank): The setting isn't configured. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmartScreenEnabled
The SmartScreenEnabled parameter specifies whether to requireWindows SmartScreen on devices. Valid values for this parameter are:

- $true: SmartScreen is enabled.

- $false: SmartScreen is disabled.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SystemSecurityTLS
The SystemSecurityTLS parameter specifies whether TLS encryption is used on devices. Valid values for this parameter are:

- $true: TLS encryption is used.

- $false: TLS encryption isn't used.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Apple iOS 6+ devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TVShowsRating
The TVShowsRating parameter species the maximum or most restrictive rating of television shows that are allowed on devices. You specify the country rating system to use with the RegionRatings parameter.

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

- 

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
Type: DontAllow | AllowAll | USRatingTVY | USRatingTVY7 | USRatingTVG | USRatingTVPG | USRatingTV14 | USRatingTVMA | AURatingP | AURatingC | AURatingG | AURatingPG | AURatingM | AURatingMA15plus | AURatingAv15plus | CARatingC | CARatingC8 | CARatingG | CARatingPG | CARating14plus | CARating18plus | DERatingab0Jahren | DERatingab6Jahren | DERatingab12Jahren | DERatingab16Jahren | DERatingab18Jahren | FRRating10minus | FRRating12minus | FRRating16minus | FRRating18minus | IERatingGA | IERatingCh | IERatingYA | IERatingPS | IERatingMA | JPRatingExplicitAllowed | NZRatingG | NZRatingPGR | NZRatingAO | GBRatingCaution
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserAccountControlStatus
The UserAccountControlStatus parameter specifies how User Account Control messages are presented on devices. Valid values for this parameter are:

- $null (blank): The setting isn't configured. This is the default value.

- AlwaysNotify

- NeverNotify

- NotifyAppChanges

- NotifyAppChangesDoNotDimdesktop

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: AlwaysNotify | NotifyAppChanges | NotifyAppChangesDoNotDimdesktop | NeverNotify
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WLANEnabled
The WLANEnabled parameter specifies whether Wi-Fi is enabled devices. Valid values for this parameter are:

- $true: Wi-Fi is enabled.

- $false: Wi-Fi is disabled.

- $null (blank): The setting isn't configured. This is the default value.

This setting is available only on Microsoft Windows Phone 8.1 devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkFoldersSyncUrl
The WorkFoldersSyncUrl parameter specifies the URL that's used to synchronize company data on devices.

Valid input for this parameter a URL. For example, https://workfolders.contoso.com.

This setting is available only on Windows 8.1 RT devices.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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

[Online Version](https://technet.microsoft.com/library/426ab6b0-8c66-4ec0-9120-0128c8ca5232.aspx)

