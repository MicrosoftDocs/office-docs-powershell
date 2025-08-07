---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-mobiledevicemailboxpolicy
schema: 2.0.0
title: New-MobileDeviceMailboxPolicy
---

# New-MobileDeviceMailboxPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the New-MobileDeviceMailboxPolicy cmdlet to create mobile device mailbox policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-MobileDeviceMailboxPolicy [-Name] <String>
 [-AllowApplePushNotifications <Boolean>]
 [-AllowBluetooth <BluetoothType>]
 [-AllowBrowser <Boolean>]
 [-AllowCamera <Boolean>]
 [-AllowConsumerEmail <Boolean>]
 [-AllowDesktopSync <Boolean>]
 [-AllowExternalDeviceManagement <Boolean>]
 [-AllowGooglePushNotifications <Boolean>]
 [-AllowHTMLEmail <Boolean>]
 [-AllowInternetSharing <Boolean>]
 [-AllowIrDA <Boolean>]
 [-AllowMicrosoftPushNotifications <Boolean>]
 [-AllowMobileOTAUpdate <Boolean>]
 [-AllowNonProvisionableDevices <Boolean>]
 [-AllowPOPIMAPEmail <Boolean>]
 [-AllowRemoteDesktop <Boolean>]
 [-AllowSimplePassword <Boolean>]
 [-AllowSMIMEEncryptionAlgorithmNegotiation <SMIMEEncryptionAlgorithmNegotiationType>]
 [-AllowSMIMESoftCerts <Boolean>]
 [-AllowStorageCard <Boolean>]
 [-AllowTextMessaging <Boolean>]
 [-AllowUnsignedApplications <Boolean>]
 [-AllowUnsignedInstallationPackages <Boolean>]
 [-AllowWiFi <Boolean>]
 [-AlphanumericPasswordRequired <Boolean>]
 [-ApprovedApplicationList <ApprovedApplicationCollection>]
 [-AttachmentsEnabled <Boolean>]
 [-Confirm]
 [-DeviceEncryptionEnabled <Boolean>]
 [-DevicePolicyRefreshInterval <Unlimited>]
 [-DomainController <Fqdn>]
 [-IrmEnabled <Boolean>]
 [-IsDefault <Boolean>]
 [-MaxAttachmentSize <Unlimited>]
 [-MaxCalendarAgeFilter <CalendarAgeFilterType>]
 [-MaxEmailAgeFilter <EmailAgeFilterType>]
 [-MaxEmailBodyTruncationSize <Unlimited>]
 [-MaxEmailHTMLBodyTruncationSize <Unlimited>]
 [-MaxInactivityTimeLock <Unlimited>]
 [-MaxPasswordFailedAttempts <Unlimited>]
 [-MinPasswordComplexCharacters <Int32>]
 [-MinPasswordLength <Int32>]
 [-PasswordEnabled <Boolean>]
 [-PasswordExpiration <Unlimited>]
 [-PasswordHistory <Int32>]
 [-PasswordRecoveryEnabled <Boolean>]
 [-RequireDeviceEncryption <Boolean>]
 [-RequireEncryptedSMIMEMessages <Boolean>]
 [-RequireEncryptionSMIMEAlgorithm <EncryptionSMIMEAlgorithmType>]
 [-RequireManualSyncWhenRoaming <Boolean>]
 [-RequireSignedSMIMEAlgorithm <SignedSMIMEAlgorithmType>]
 [-RequireSignedSMIMEMessages <Boolean>]
 [-RequireStorageCardEncryption <Boolean>]
 [-UnapprovedInROMApplicationList <MultiValuedProperty>]
 [-UNCAccessEnabled <Boolean>]
 [-WhatIf]
 [-WSSAccessEnabled <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
Mobile device mailbox policies define settings for mobile devices that are used to access mailboxes in your organization. The default mobile device mailbox policy is applied to all new mailboxes that you create. You can assign a mobile device mailbox policy to existing mailboxes by using the Set-CASMailbox cmdlet, or by editing the mailbox properties in the Exchange admin center (EAC).

Some mobile device mailbox policy settings require the mobile device to have certain built-in features that enforce these security and device management settings. If your organization allows all devices, you need to set the AllowNonProvisionableDevices parameter to $true. This allows devices that can't enforce all policy settings to synchronize with your server.

Some settings in this cmdlet are supported by Outlook for iOS and Android. For more information, see [Leveraging Exchange Online mobile device policies](https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/secure-outlook-for-ios-and-android#leveraging-exchange-online-mobile-device-policies).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-MobileDeviceMailboxPolicy -Name "Sales Policy" -PasswordEnabled $true -AlphanumericPasswordRequired $true -PasswordRecoveryEnabled $true -IsDefault $false -AttachmentsEnabled $false -AllowStorageCard $true
```

This example creates the mobile device mailbox policy Sales Policy that has several preconfigured values.

### Example 2
```powershell
New-MobileDeviceMailboxPolicy -Name Management -AllowBluetooth $true -AllowBrowser $true -AllowCamera $true -AllowPOPIMAPEmail $false -PasswordEnabled $true -AlphanumericPasswordRequired $true -PasswordRecoveryEnabled $true -MaxEmailAgeFilter TwoWeeks -AllowWiFi $true -AllowStorageCard $true
```

This example creates the mobile device mailbox policy Management that has several preconfigured values. Users assigned to this policy should have an Enterprise client access license (CAL) to use many of these features.

### Example 3
```powershell
New-MobileDeviceMailboxPolicy -Name "Contoso Policy" -PasswordEnabled $true -AlphanumericPasswordRequired $true -PasswordRecoveryEnabled $true -MinPasswordComplexCharacters 3 -IsDefault $true -PasswordHistory 10
```

This example creates the mobile device mailbox policy Contoso Policy that has several preconfigured values. This policy is configured to be the default policy for the organization. The default policy is assigned to all new users.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Name parameter specifies the name of the mobile device mailbox policy. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

The name of the built-in mobile device mailbox policy is Default.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowApplePushNotifications

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The AllowApplePushNotifications parameter specifies whether push notifications are allowed for Apple mobile devices. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowBluetooth

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowBluetooth parameter specifies whether the Bluetooth capabilities are allowed on the mobile device. Valid values are:

- Allow (this is the default value).
- Disable
- HandsfreeOnly

The values Allow or HandsfreeOnly allow synchronization between Outlook for Android and the Outlook for Android wearable app for the associated Microsoft account.

The value Disable disables synchronization between Outlook for Android and the Outlook for Android wearable app for the associated Microsoft account. Any previously synchronized data is deleted. This value does not disable Bluetooth on the Android device or the wearable device, nor does it affect other Android wearable apps.

```yaml
Type: BluetoothType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBrowser

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowBrowser parameter specifies whether Microsoft Pocket Internet Explorer is allowed on the mobile device. Valid input for this parameter is $true or $false. The default value is $true. This parameter doesn't affect non-Microsoft browsers.

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

### -AllowCamera

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowCamera parameter specifies whether the mobile device's camera is allowed. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowConsumerEmail

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowConsumerEmail parameter specifies whether the user can configure a personal email account on the mobile device. Valid input for this parameter is $true or $false. The default value is $true. This parameter doesn't control access to email accounts using non-Microsoft mobile device email programs.

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

### -AllowDesktopSync

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowDesktopSync parameter specifies whether the mobile device can synchronize with a desktop computer through a cable. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowExternalDeviceManagement

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowExternalDeviceManagement parameter specifies whether an external device management program is allowed to manage the mobile device. Valid input for this parameter is $true or $false. The default value is $false.

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

### -AllowGooglePushNotifications

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowGooglePushNotifications parameter controls whether the user can receive push notifications from Google for Outlook on the web for devices. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowHTMLEmail

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowHTMLEmail parameter specifies whether HTML-formatted email is enabled on the mobile device. Valid input for this parameter is $true or $false. The default value is $true. If set to $false, all email is converted to plain text before synchronization occurs.

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

### -AllowInternetSharing

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowInternetSharing parameter specifies whether the mobile device can be used as a modem to connect a computer to the Internet. This process is also known as tethering. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowIrDA

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowIrDA parameter specifies whether infrared connections are allowed to the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowMicrosoftPushNotifications

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The AllowMicrosoftPushNotifications parameter specifies whether push notifications are enabled on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowMobileOTAUpdate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowMobileOTAUpdate parameter specifies whether the policy can be sent to the mobile device over a cellular data connection. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowNonProvisionableDevices

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowNonProvisionableDevices parameter specifies whether all mobile devices can synchronize with Exchange. Valid input for this parameter is $true or $false. The default value is $true.

When set to $true, this parameter enables all mobile devices to synchronize with Exchange, regardless of whether the device can enforce all settings that are defined by the policy. This also includes mobile devices managed by a separate device management system. When set to $false, this parameter blocks mobile devices that aren't provisioned from synchronizing with Exchange.

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

### -AllowPOPIMAPEmail

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowPOPIMAPEmail parameter specifies whether the user can configure a POP3 or IMAP4 email account on the mobile device. Valid input for this parameter is $true or $false. The default value is $true. This parameter doesn't control access by non-Microsoft email programs.

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

### -AllowRemoteDesktop

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowRemoteDesktop parameter specifies whether the mobile device can initiate a remote desktop connection. Valid input for this parameter is $true or $false. The default value is $true.

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

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowSimplePassword parameter specifies whether a simple password is allowed on the mobile device. A simple password is a password that has a specific pattern, such as 1111 or 1234. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowSMIMEEncryptionAlgorithmNegotiation

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowSMIMEEncryptionAlgorithmNegotiation parameter specifies whether the messaging application on the mobile device can negotiate the encryption algorithm if a recipient's certificate doesn't support the specified encryption algorithm. Valid values for this parameter are:

- AllowAnyAlgorithmNegotiation
- BlockNegotiation
- OnlyStrongAlgorithmNegotiation

The default value is AllowAnyAlgorithmNegotiation.

```yaml
Type: SMIMEEncryptionAlgorithmNegotiationType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSMIMESoftCerts

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowSMIMESoftCerts parameter specifies whether S/MIME software certificates are allowed on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowStorageCard

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowStorageCard parameter specifies whether the mobile device can access information stored on a storage card. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowTextMessaging

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowTextMessaging parameter specifies whether text messaging is allowed from the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowUnsignedApplications

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowUnsignedApplications parameter specifies whether unsigned applications can be installed on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowUnsignedInstallationPackages

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowUnsignedInstallationPackages parameter specifies whether unsigned installation packages are allowed to run on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowWiFi

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowWiFi parameter specifies whether wireless Internet access is allowed on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

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

### -AlphanumericPasswordRequired

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AlphanumericPasswordRequired parameter specifies whether the password for the mobile device must be alphanumeric. Valid input for this parameter is $true or $false. The default value is $false.

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

### -ApprovedApplicationList

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ApprovedApplicationList parameter specifies a configured list of approved applications for the device.

```yaml
Type: ApprovedApplicationCollection
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentsEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AttachmentsEnabled parameter specifies whether attachments can be downloaded on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

When set to $false, this parameter blocks the user from downloading attachments on the mobile device.

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

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

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

### -DeviceEncryptionEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

**Note**: This setting is supported by Outlook for iOS and Android.

The DeviceEncryptionEnabled parameter specifies whether encryption is enabled on the mobile device. Valid input for this parameter is $true or $false. The default value is $false.

When this parameter is set to $true, device encryption is enabled on the mobile device.

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

### -DevicePolicyRefreshInterval

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DevicePolicyRefreshInterval parameter specifies how often the policy is sent to the mobile device.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is Unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

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

### -IrmEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IrmEnabled parameter specifies whether Information Rights Management (IRM) is enabled for the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

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

### -IsDefault

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IsDefault parameter specifies whether this policy is the default mobile device mailbox policy. Valid input for this parameter is $true or $false. The default value for the built-in mobile device mailbox policy named Default is $true. The default value for new mobile device mailbox policies that you create is $false.

There can be only one default policy. If another policy is currently set as the default, and you set this parameter to $true, this policy becomes the default policy. The value of this parameter on the other policy is automatically changed to $false, and that policy is no longer the default policy.

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

### -MaxAttachmentSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxAttachmentSize parameter specifies the maximum size of attachments that can be downloaded to the mobile device. Valid input for this parameter is a size value between 0 and 2147482624 bytes (approximately 2 GB), or the value Unlimited. The default value is Unlimited.

Unqualified values are treated as bytes. You can qualify the value with KB (kilobytes), MB (megabytes) or GB (gigabytes). For example, to set the limit to 4 kilobytes, enter the value 4096 or 4KB.

The maximum value is 1024 bytes (one kilobyte) less than two gigabytes (2\*1024^3), so these are the maximum qualified values you can use with this parameter.

- 2097151KB
- 2047.999024MB
- 1.999999047GB

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxCalendarAgeFilter

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxCalendarAgeFilter parameter specifies the maximum range of calendar days that can be synchronized to the mobile device. Valid values for this parameter are:

- All
- TwoWeeks
- OneMonth
- ThreeMonths
- SixMonths

The default value is All.

```yaml
Type: CalendarAgeFilterType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxEmailAgeFilter

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxEmailAgeFilter parameter specifies the maximum number of days of email items to synchronize to the mobile device. Valid values for this parameter are:

- All
- OneDay
- ThreeDays
- OneWeek
- TwoWeeks
- OneMonth

The default value is All.

```yaml
Type: EmailAgeFilterType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxEmailBodyTruncationSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxEmailBodyTruncationSize parameter specifies the maximum size at which email messages are truncated when synchronized to the mobile device. Valid input for this parameter is an integer between 0 and 2147483647 (Int32) or the value Unlimited. The default value is Unlimited.

Unqualified values are treated as bytes. You can qualify the value with KB (kilobytes), MB (megabytes) or GB (gigabytes). For example, to set the limit to 4 kilobytes, enter the value 4KB or 4096.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxEmailHTMLBodyTruncationSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxEmailHTMLBodyTruncationSize parameter specifies the maximum size at which HTML-formatted email messages are truncated when synchronized to the mobile device. Valid input for this parameter is an integer between 0 and 2147483647 (Int32) or the value Unlimited. The default value is Unlimited.

Unqualified values are treated as bytes. You can qualify the value with KB (kilobytes), MB (megabytes) or GB (gigabytes). For example, to set the limit to 4 kilobytes, enter the value 4KB or 4096.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxInactivityTimeLock

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxInactivityTimeLock parameter specifies the length of time that the mobile device can be inactive before the password is required to reactivate it. Valid values are:

- A timespan: hh:mm:ss, where hh = hours, mm = minutes and ss= seconds. The valid input range is 00:01:00 to 01:00:00 (one minute to one hour).
- The value Unlimited. This value is the default.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxPasswordFailedAttempts

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxPasswordFailedAttempts parameter specifies the number of attempts a user can make to enter the correct password for the mobile device.

You can enter any number from 4 through 16 or the value Unlimited. The default value is Unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinPasswordComplexCharacters

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MinPasswordComplexCharacters parameter specifies the character sets that are required in the password of the mobile device. The character sets are:

- Lower case letters.
- Upper case letters.
- Digits 0 through 9.
- Special characters (for example, exclamation marks).

A valid value for this parameter is an integer from 1 through 4. The default value is 1.

For Windows Phone 8 devices, the value specifies the number of character sets that are required in the password. For example, the value 3 requires at least one character from any three of the character sets.

For Windows Phone 10 devices, the value specifies the following password complexity requirements:

- Digits only.
- Digits and lower case letters.
- Digits, lower case letters, and upper case letters.
- Digits, lower case letters, upper case letters, and special characters.

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

### -MinPasswordLength

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

**Note**: This setting is supported by Outlook for Android.

The MinPasswordLength parameter specifies the minimum number of characters in the mobile device password.

You can enter any number from 1 through 16 or the value $null. The default value is blank. The maximum password length is 16 characters.

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

### -PasswordEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PasswordEnabled parameter specifies whether a password is required on the mobile device. Valid input for this parameter is $true or $false. The default value is $false.

When set to $true, this parameter requires the user to set a password on the mobile device.

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

### -PasswordExpiration

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PasswordExpiration parameter specifies how long a password can be used on a mobile device before the user is forced to change the password. Valid values are:

- A timespan: ddd.hh:mm:ss, where ddd = days, hh = hours, mm = minutes and ss= seconds. The valid input range is 1.00:00:00 to 730.00:00:00 (one day to two years).
- The value Unlimited. This value is the default

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordHistory

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PasswordHistory parameter specifies the number of unique new passwords that need to be created on the mobile device before an old password can be reused.

You can enter any number from 0 through 50. The default value is 0.

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

### -PasswordRecoveryEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PasswordRecoveryEnabled parameter specifies whether the recovery password for the mobile device is stored in Exchange. Valid input for this parameter is $true or $false. The default value is $false.

When set to $true, this parameter enables you to store the recovery password for the mobile device in Exchange. The recovery password can be viewed from Outlook on the web or the Exchange admin center.

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

### -RequireDeviceEncryption

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireDeviceEncryption parameter specifies whether encryption is required on the mobile device. Valid input for this parameter is $true or $false. The default value is $false.

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

### -RequireEncryptedSMIMEMessages

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireEncryptedSMIMEMessages parameter specifies whether the mobile device must send encrypted S/MIME messages. Valid input for this parameter is $true or $false. The default value is $false.

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

### -RequireEncryptionSMIMEAlgorithm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireEncryptionSMIMEAlgorithm parameter specifies the algorithm that's required to encrypt S/MIME messages on a mobile device. The valid values for this parameter are:

- DES
- TripleDES
- RC240bit
- RC264bit
- RC2128bit

The default value is TripleDES.

```yaml
Type: EncryptionSMIMEAlgorithmType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireManualSyncWhenRoaming

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireManualSyncWhenRoaming parameter specifies whether the mobile device must synchronize manually while roaming. Valid input for this parameter is $true or $false. The default value is $false.

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

### -RequireSignedSMIMEAlgorithm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireSignedSMIMEAlgorithm parameter specifies the algorithm that's used to sign S/MIME messages on the mobile device.

Valid values for this parameter are SHA1 or MD5. The default value is SHA1.

```yaml
Type: SignedSMIMEAlgorithmType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSignedSMIMEMessages

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireSignedSMIMEMessages parameter specifies whether the mobile device must send signed S/MIME messages. Valid input for this parameter is $true or $false. The default value is $false.

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

### -RequireStorageCardEncryption

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireStorageCardEncryption parameter specifies whether storage card encryption is required on the mobile device. Valid input for this parameter is $true or $false. The default value is $false.

Setting this parameter to $true also sets the DeviceEncryptionEnabled parameter to $true.

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

### -UnapprovedInROMApplicationList

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The UnapprovedInROMApplicationList parameter specifies a list of applications that can't be run in ROM on the mobile device.

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

### -UNCAccessEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The UNCAccessEnabled parameter specifies whether access to Microsoft Windows file shares is enabled from the mobile device. In on-premises Exchange organizations, access to specific shares is configured on the Exchange ActiveSync virtual directory.

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

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

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

### -WSSAccessEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The WSSAccessEnabled parameter specifies whether access to Microsoft Windows SharePoint Services is enabled from the mobile device. In on-premises Exchange organizations, access to specific shares is configured on the Exchange ActiveSync virtual directory.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
