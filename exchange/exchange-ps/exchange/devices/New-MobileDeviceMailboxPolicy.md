---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: New-MobileDeviceMailboxPolicy
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# New-MobileDeviceMailboxPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MobileDeviceMailboxPolicy cmdlet to create mobile device mailbox policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-MobileDeviceMailboxPolicy [-Name] <String> [-AllowApplePushNotifications <$true | $false>]
 [-AllowBluetooth <Disable | HandsfreeOnly | Allow>] [-AllowBrowser <$true | $false>]
 [-AllowCamera <$true | $false>] [-AllowConsumerEmail <$true | $false>] [-AllowDesktopSync <$true | $false>]
 [-AllowExternalDeviceManagement <$true | $false>] [-AllowGooglePushNotifications <$true | $false>]
 [-AllowHTMLEmail <$true | $false>] [-AllowInternetSharing <$true | $false>] [-AllowIrDA <$true | $false>]
 [-AllowMicrosoftPushNotifications <$true | $false>] [-AllowMobileOTAUpdate <$true | $false>]
 [-AllowNonProvisionableDevices <$true | $false>] [-AllowPOPIMAPEmail <$true | $false>]
 [-AllowRemoteDesktop <$true | $false>] [-AllowSimplePassword <$true | $false>]
 [-AllowSMIMEEncryptionAlgorithmNegotiation <BlockNegotiation | OnlyStrongAlgorithmNegotiation | AllowAnyAlgorithmNegotiation>]
 [-AllowSMIMESoftCerts <$true | $false>] [-AllowStorageCard <$true | $false>]
 [-AllowTextMessaging <$true | $false>] [-AllowUnsignedApplications <$true | $false>]
 [-AllowUnsignedInstallationPackages <$true | $false>] [-AllowWiFi <$true | $false>]
 [-AlphanumericPasswordRequired <$true | $false>] [-ApprovedApplicationList <ApprovedApplicationCollection>]
 [-AttachmentsEnabled <$true | $false>] [-Confirm] [-DeviceEncryptionEnabled <$true | $false>]
 [-DevicePolicyRefreshInterval <Unlimited>] [-DomainController <Fqdn>] [-IrmEnabled <$true | $false>]
 [-IsDefault <$true | $false>] [-MaxAttachmentSize <Unlimited>]
 [-MaxCalendarAgeFilter <All | TwoWeeks | OneMonth | ThreeMonths | SixMonths>]
 [-MaxEmailAgeFilter <All | OneDay | ThreeDays | OneWeek | TwoWeeks | OneMonth>]
 [-MaxEmailBodyTruncationSize <Unlimited>] [-MaxEmailHTMLBodyTruncationSize <Unlimited>]
 [-MaxInactivityTimeLock <Unlimited>] [-MaxPasswordFailedAttempts <Unlimited>]
 [-MinPasswordComplexCharacters <Int32>] [-MinPasswordLength <Int32>] [-PasswordEnabled <$true | $false>]
 [-PasswordExpiration <Unlimited>] [-PasswordHistory <Int32>] [-PasswordRecoveryEnabled <$true | $false>]
 [-RequireDeviceEncryption <$true | $false>] [-RequireEncryptedSMIMEMessages <$true | $false>]
 [-RequireEncryptionSMIMEAlgorithm <TripleDES | DES | RC2128bit | RC264bit | RC240bit>]
 [-RequireManualSyncWhenRoaming <$true | $false>] [-RequireSignedSMIMEAlgorithm <SHA1 | MD5>]
 [-RequireSignedSMIMEMessages <$true | $false>] [-RequireStorageCardEncryption <$true | $false>]
 [-UnapprovedInROMApplicationList <MultiValuedProperty>] [-UNCAccessEnabled <$true | $false>] [-WhatIf]
 [-WSSAccessEnabled <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
Mobile device mailbox policies define settings for mobile devices that are used to access mailboxes in your organization. The default mobile device mailbox policy is applied to all new mailboxes that you create. You can assign a mobile device mailbox policy to existing mailboxes by using the Set-CASMailbox cmdlet, or by editing the mailbox properties in the Exchange admin center (EAC).

Some mobile device mailbox policy settings require the mobile device to have certain built-in features that enforce these security and device management settings. If your organization allows all devices, you need to set the AllowNonProvisionableDevices parameter to $true. This allows devices that can't enforce all policy settings to synchronize with your server.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-MobileDeviceMailboxPolicy -Name "Sales Policy" -PasswordEnabled $true -AlphanumericPasswordRequired $true -PasswordRecoveryEnabled $true -IsDefault $false -AttachmentsEnabled $false -AllowStorageCard $true
```

This example creates the mobile device mailbox policy Sales Policy that has several preconfigured values.

### -------------------------- Example 2 --------------------------
```
New-MobileDeviceMailboxPolicy -Name Management -AllowBluetooth $true -AllowBrowser $true -AllowCamera $true -AllowPOPIMAPEmail $false -PasswordEnabled $true -AlphanumericPasswordRequired $true -PasswordRecoveryEnabled $true -MaxEmailAgeFilter TwoWeeks -AllowWiFi $true -AllowStorageCard $true
```

This example creates the mobile device mailbox policy Management that has several preconfigured values. Users assigned to this policy should have an Enterprise client access license (CAL) to use many of these features.

### -------------------------- Example 3 --------------------------
```
New-MobileDeviceMailboxPolicy -Name "Contoso Policy" -PasswordEnabled $true -AlphanumericPasswordRequired $true -PasswordRecoveryEnabled $true -MinPasswordComplexCharacters 3 -IsDefault $true -PasswordHistory 10
```

This example creates the mobile device mailbox policy Contoso Policy that has several preconfigured values. This policy is configured to be the default policy for the organization. The default policy is assigned to all new users.

## PARAMETERS

### -Name
The Name parameter specifies the name of the mobile device mailbox policy. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

The name of the built-in mobile device mailbox policy is Default.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowApplePushNotifications
This parameter is available only in the cloud-based service.

The AllowApplePushNotifications parameter specifies whether push notifications are allowed for Apple mobile devices. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBluetooth
The AllowBluetooth parameter specifies whether the Bluetooth capabilities of the mobile device are allowed. The available options are Disable, HandsfreeOnly, and Allow. The default value is Allow.

```yaml
Type: Disable | HandsfreeOnly | Allow
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBrowser
The AllowBrowser parameter specifies whether Microsoft Pocket Internet Explorer is allowed on the mobile device. Valid input for this parameter is $true or $false. The default value is $true. This parameter doesn't affect third-party browsers.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCamera
The AllowCamera parameter specifies whether the mobile device's camera is allowed. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowConsumerEmail
The AllowConsumerEmail parameter specifies whether the user can configure a personal email account on the mobile device. Valid input for this parameter is $true or $false. The default value is $true. This parameter doesn't control access to email accounts using third-party mobile device email programs.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDesktopSync
The AllowDesktopSync parameter specifies whether the mobile device can synchronize with a desktop computer through a cable. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExternalDeviceManagement
The AllowExternalDeviceManagement parameter specifies whether an external device management program is allowed to manage the mobile device. Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowGooglePushNotifications
This parameter is available only in the cloud-based service.

The AllowGooglePushNotifications parameter controls whether the user can receive push notifications from Google for Outlook on the web for devices. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowHTMLEmail
The AllowHTMLEmail parameter specifies whether HTML-formatted email is enabled on the mobile device. Valid input for this parameter is $true or $false. The default value is $true. If set to $false, all email is converted to plain text before synchronization occurs.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowInternetSharing
The AllowInternetSharing parameter specifies whether the mobile device can be used as a modem to connect a computer to the Internet. This process is also known as tethering. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowIrDA
The AllowIrDA parameter specifies whether infrared connections are allowed to the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowMicrosoftPushNotifications
This parameter is available only in the cloud-based service.

The AllowMicrosoftPushNotifications parameter specifies whether push notifications are enabled on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowMobileOTAUpdate
The AllowMobileOTAUpdate parameter specifies whether the policy can be sent to the mobile device over a cellular data connection. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowNonProvisionableDevices
The AllowNonProvisionableDevices parameter specifies whether all mobile devices can synchronize with Exchange. Valid input for this parameter is $true or $false. The default value is $true.

When set to $true, this parameter enables all mobile devices to synchronize with Exchange, regardless of whether the device can enforce all settings that are defined by the policy. This also includes mobile devices managed by a separate device management system. When set to $false, this parameter blocks mobile devices that aren't provisioned from synchronizing with Exchange.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPOPIMAPEmail
The AllowPOPIMAPEmail parameter specifies whether the user can configure a POP3 or IMAP4 email account on the mobile device. Valid input for this parameter is $true or $false. The default value is $true. This parameter doesn't control access by third-party email programs.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowRemoteDesktop
The AllowRemoteDesktop parameter specifies whether the mobile device can initiate a remote desktop connection. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSimplePassword
The AllowSimplePassword parameter specifies whether a simple password is allowed on the mobile device. A simple password is a password that has a specific pattern, such as 1111 or 1234. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSMIMEEncryptionAlgorithmNegotiation
The AllowSMIMEEncryptionAlgorithmNegotiation parameter specifies whether the messaging application on the mobile device can negotiate the encryption algorithm if a recipient's certificate doesn't support the specified encryption algorithm. Valid values for this parameter are:

- AllowAnyAlgorithmNegotiation

- BlockNegotiation

- OnlyStrongAlgorithmNegotiation

The default value is AllowAnyAlgorithmNegotiation.

```yaml
Type: BlockNegotiation | OnlyStrongAlgorithmNegotiation | AllowAnyAlgorithmNegotiation
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSMIMESoftCerts
The AllowSMIMESoftCerts parameter specifies whether S/MIME software certificates are allowed on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowStorageCard
The AllowStorageCard parameter specifies whether the mobile device can access information stored on a storage card. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowTextMessaging
The AllowTextMessaging parameter specifies whether text messaging is allowed from the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUnsignedApplications
The AllowUnsignedApplications parameter specifies whether unsigned applications can be installed on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUnsignedInstallationPackages
The AllowUnsignedInstallationPackages parameter specifies whether unsigned installation packages are allowed to run on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowWiFi
The AllowWiFi parameter specifies whether wireless Internet access is allowed on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlphanumericPasswordRequired
The AlphanumericPasswordRequired parameter specifies whether the password for the mobile device must be alphanumeric. Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApprovedApplicationList
The ApprovedApplicationList parameter specifies a configured list of approved applications for the device.

```yaml
Type: ApprovedApplicationCollection
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentsEnabled
The AttachmentsEnabled parameter specifies whether attachments can be downloaded on the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

When set to $false, this parameter blocks the user from downloading attachments on the mobile device.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeviceEncryptionEnabled
The DeviceEncryptionEnabled parameter specifies whether encryption is enabled on the mobile device. Valid input for this parameter is $true or $false. The default value is $false.

When this parameter is set to $true, device encryption is enabled on the mobile device.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DevicePolicyRefreshInterval
The DevicePolicyRefreshInterval parameter specifies how often the policy is sent to the mobile device.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is Unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmEnabled
The IrmEnabled parameter specifies whether Information Rights Management (IRM) is enabled for the mobile device. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefault
The IsDefault parameter specifies whether this policy is the default mobile device mailbox policy. Valid input for this parameter is $true or $false. The default value for the built-in mobile device mailbox policy named Default is $true. The default value for new mobile device mailbox policies that you create is $false.

There can be only one default policy. If another policy is currently set as the default, and you set this parameter to $true, this policy becomes the default policy. The value of this parameter on the other policy is automatically changed to $false, and that policy is no longer the default policy.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxAttachmentSize
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxCalendarAgeFilter
The MaxCalendarAgeFilter parameter specifies the maximum range of calendar days that can be synchronized to the mobile device. Valid values for this parameter are:

- All

- TwoWeeks

- OneMonth

- ThreeMonths

- SixMonths

The default value is All.

```yaml
Type: All | TwoWeeks | OneMonth | ThreeMonths | SixMonths
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxEmailAgeFilter
The MaxEmailAgeFilter parameter specifies the maximum number of days of email items to synchronize to the mobile device. Valid values for this parameter are:

- All

- OneDay

- ThreeDays

- OneWeek

- TwoWeeks

- OneMonth

The default value is All.

```yaml
Type: All | OneDay | ThreeDays | OneWeek | TwoWeeks | OneMonth
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxEmailBodyTruncationSize
The MaxEmailBodyTruncationSize parameter specifies the maximum size at which email messages are truncated when synchronized to the mobile device. Valid input for this parameter is an integer between 0 and 2147483647 (Int32) or the value Unlimited. The default value is Unlimited.

Unqualified values are treated as bytes. You can qualify the value with KB (kilobytes), MB (megabytes) or GB (gigabytes). For example, to set the limit to 4 kilobytes, enter the value 4KB or 4096.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxEmailHTMLBodyTruncationSize
The MaxEmailHTMLBodyTruncationSize parameter specifies the maximum size at which HTML-formatted email messages are truncated when synchronized to the mobile device. Valid input for this parameter is an integer between 0 and 2147483647 (Int32) or the value Unlimited. The default value is Unlimited.

Unqualified values are treated as bytes. You can qualify the value with KB (kilobytes), MB (megabytes) or GB (gigabytes). For example, to set the limit to 4 kilobytes, enter the value 4KB or 4096.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxInactivityTimeLock
The MaxInactivityTimeLock parameter specifies the length of time that the mobile device can be inactive before the password is required to reactivate it. Valid values are:

- A timespan: hh:mm:ss, where hh = hours, mm = minutes and ss= seconds. The valid input range is 00:01:00 to 01:00:00 (one minute to one hour).

- The value Unlimited. This is the default value.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxPasswordFailedAttempts
The MaxPasswordFailedAttempts parameter specifies the number of attempts a user can make to enter the correct password for the mobile device.

You can enter any number from 4 through 16 or the value Unlimited. The default value is Unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinPasswordComplexCharacters
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinPasswordLength
The MinPasswordLength parameter specifies the minimum number of characters in the mobile device password.

You can enter any number from 1 through 16 or the value $null. The default value is blank. The maximum password length is 16 characters.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordEnabled
The PasswordEnabled parameter specifies whether a password is required on the mobile device. Valid input for this parameter is $true or $false. The default value is $false.

When set to $true, this parameter requires the user to set a password on the mobile device.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordExpiration
The PasswordExpiration parameter specifies how long a password can be used on a mobile device before the user is forced to change the password. Valid values are:

- A timespan: ddd.hh:mm:ss, where ddd = days, hh = hours, mm = minutes and ss= seconds. The valid input range is 1.00:00:00 to 730.00:00:00 (one day to two years).

- The value Unlimited. This is the default value

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordHistory
The PasswordHistory parameter specifies the number of unique new passwords that need to be created on the mobile device before an old password can be reused.

You can enter any number from 0 through 50. The default value is 0.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordRecoveryEnabled
The PasswordRecoveryEnabled parameter specifies whether the recovery password for the mobile device is stored in Exchange. Valid input for this parameter is $true or $false. The default value is $false.

When set to $true, this parameter enables you to store the recovery password for the mobile device in Exchange. The recovery password can be viewed from Outlook on the web or the Exchange admin center.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireDeviceEncryption
The RequireDeviceEncryption parameter specifies whether encryption is required on the mobile device. Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireEncryptedSMIMEMessages
The RequireEncryptedSMIMEMessages parameter specifies whether the mobile device must send encrypted S/MIME messages. Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireEncryptionSMIMEAlgorithm
The RequireEncryptionSMIMEAlgorithm parameter specifies the algorithm that's required to encrypt S/MIME messages on a mobile device. The valid values for this parameter are:

- DES

- TripleDES

- RC240bit

- RC264bit

- RC2128bit

The default value is TripleDES.

```yaml
Type: TripleDES | DES | RC2128bit | RC264bit | RC240bit
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireManualSyncWhenRoaming
The RequireManualSyncWhenRoaming parameter specifies whether the mobile device must synchronize manually while roaming. Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSignedSMIMEAlgorithm
The RequireSignedSMIMEAlgorithm parameter specifies the algorithm that's used to sign S/MIME messages on the mobile device.

Valid values for this parameter are SHA1 or MD5. The default value is SHA1.

```yaml
Type: SHA1 | MD5
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSignedSMIMEMessages
The RequireSignedSMIMEMessages parameter specifies whether the mobile device must send signed S/MIME messages. Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireStorageCardEncryption
The RequireStorageCardEncryption parameter specifies whether storage card encryption is required on the mobile device. Valid input for this parameter is $true or $false. The default value is $false.

Setting this parameter to $true also sets the DeviceEncryptionEnabled parameter to $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnapprovedInROMApplicationList
The UnapprovedInROMApplicationList parameter specifies a list of applications that can't be run in ROM on the mobile device.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UNCAccessEnabled
The UNCAccessEnabled parameter specifies whether access to Microsoft Windows file shares is enabled from the mobile device. In on-premises Exchange organizations, access to specific shares is configured on the Exchange ActiveSync virtual directory.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WSSAccessEnabled
The WSSAccessEnabled parameter specifies whether access to Microsoft Windows SharePoint Services is enabled from the mobile device. In on-premises Exchange organizations, access to specific shares is configured on the Exchange ActiveSync virtual directory.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/06b6aca8-46a3-4609-821e-d28df1bd2846.aspx)
