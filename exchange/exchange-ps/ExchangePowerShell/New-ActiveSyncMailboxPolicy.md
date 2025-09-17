---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-activesyncmailboxpolicy
schema: 2.0.0
title: New-ActiveSyncMailboxPolicy
---

# New-ActiveSyncMailboxPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the New-ActiveSyncMailboxPolicy cmdlet to create a Microsoft Mobile Device mailbox policy object.

**Note**: In Exchange 2013 or later, use the New-MobileDeviceMailboxPolicy cmdlet instead. If you have scripts that use New-ActiveSyncMailboxPolicy, update them to use New-MobileDeviceMailboxPolicy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-ActiveSyncMailboxPolicy [-Name] <String>
 [-AllowApplePushNotifications <Boolean>]
 [-AllowBluetooth <BluetoothType>]
 [-AllowBrowser <Boolean>]
 [-AllowCamera <Boolean>]
 [-AllowConsumerEmail <Boolean>]
 [-AllowDesktopSync <Boolean>]
 [-AllowExternalDeviceManagement <Boolean>]
 [-AllowHTMLEmail <Boolean>]
 [-AllowInternetSharing <Boolean>]
 [-AllowIrDA <Boolean>]
 [-AllowMobileOTAUpdate <Boolean>]
 [-AllowNonProvisionableDevices <Boolean>]
 [-AllowPOPIMAPEmail <Boolean>]
 [-AllowRemoteDesktop <Boolean>]
 [-AllowSMIMEEncryptionAlgorithmNegotiation <SMIMEEncryptionAlgorithmNegotiationType>]
 [-AllowSMIMESoftCerts <Boolean>]
 [-AllowSimpleDevicePassword <Boolean>]
 [-AllowStorageCard <Boolean>]
 [-AllowTextMessaging <Boolean>]
 [-AllowUnsignedApplications <Boolean>]
 [-AllowUnsignedInstallationPackages <Boolean>]
 [-AllowWiFi <Boolean>]
 [-AlphanumericDevicePasswordRequired <Boolean>]
 [-ApprovedApplicationList <ApprovedApplicationCollection>]
 [-AttachmentsEnabled <Boolean>]
 [-Confirm]
 [-DeviceEncryptionEnabled <Boolean>]
 [-DevicePasswordEnabled <Boolean>]
 [-DevicePasswordExpiration <Unlimited>]
 [-DevicePasswordHistory <Int32>]
 [-DevicePolicyRefreshInterval <Unlimited>]
 [-DomainController <Fqdn>]
 [-IrmEnabled <Boolean>]
 [-IsDefault <Boolean>]
 [-IsDefaultPolicy <Boolean>]
 [-MaxAttachmentSize <Unlimited>]
 [-MaxCalendarAgeFilter <CalendarAgeFilterType>]
 [-MaxDevicePasswordFailedAttempts <Unlimited>]
 [-MaxEmailAgeFilter <EmailAgeFilterType>]
 [-MaxEmailBodyTruncationSize <Unlimited>]
 [-MaxEmailHTMLBodyTruncationSize <Unlimited>]
 [-MaxInactivityTimeDeviceLock <Unlimited>]
 [-MinDevicePasswordComplexCharacters <Int32>]
 [-MinDevicePasswordLength <Int32>]
 [-PasswordRecoveryEnabled <Boolean>]
 [-RequireDeviceEncryption <Boolean>]
 [-RequireEncryptedSMIMEMessages <Boolean>]
 [-RequireEncryptionSMIMEAlgorithm <EncryptionSMIMEAlgorithmType>]
 [-RequireManualSyncWhenRoaming <Boolean>]
 [-RequireSignedSMIMEAlgorithm <SignedSMIMEAlgorithmType>]
 [-RequireSignedSMIMEMessages <Boolean>]
 [-RequireStorageCardEncryption <Boolean>]
 [-UNCAccessEnabled <Boolean>]
 [-UnapprovedInROMApplicationList <MultiValuedProperty>]
 [-WSSAccessEnabled <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The New-ActiveSyncMailboxPolicy cmdlet creates a Mobile Device mailbox policy for mailboxes accessed by mobile devices.

Some Mobile Device mailbox policy settings require the mobile device to have certain built-in features that enforce these security and device management settings. If your organization allows all devices, you must set the AllowNonProvisionableDevices parameter to $true. This allows devices that can't enforce all policy settings to synchronize with your server.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ActiveSyncMailboxPolicy -Name:"SalesPolicy" -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -IsDefault:$false -AttachmentsEnabled:$false -AllowStorageCard:$true
```

This example creates the Mobile Device mailbox policy SalesPolicy that has several preconfigured values.

### Example 2
```powershell
New-ActiveSyncMailboxPolicy -Name:"Management" -AllowBluetooth:Allow -AllowBrowser:$true -AllowCamera:$true -AllowPOPIMAPEmail:$false -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -MaxEmailAgeFilter:OneWeek -AllowWiFi:$true -AllowStorageCard:$true
```

This example creates the Mobile Device mailbox policy Management that has several preconfigured values. Users assigned to this policy should have an Enterprise client access license (CAL) to use many of these features.

### Example 3
```powershell
New-ActiveSyncMailboxPolicy -Name:"Contoso" -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -MinDevicePasswordComplexCharacters:3 -IsDefault:$true -DevicePasswordHistory:10
```

This example creates the Mobile Device mailbox policy Contoso that has several preconfigured values. This policy is configured to be the default policy for the organization. The default policy is assigned to all new users.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Name parameter specifies the name of the policy.

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

The AllowApplePushNotifications parameter specifies whether push notifications are allowed for Apple mobile devices. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowBluetooth parameter specifies whether the Bluetooth capabilities of the mobile phone are allowed. The available options are Disable, HandsfreeOnly, and Allow. The default value is Allow.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowBrowser parameter specifies whether Microsoft Pocket Internet Explorer is allowed on the mobile phone. The default value is $true. This parameter doesn't affect non-Microsoft browsers.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowCamera parameter specifies whether the mobile phone's camera is allowed. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowConsumerEmail parameter specifies whether the mobile phone user can configure a personal email account on the device. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowDesktopSync parameter specifies whether the mobile phone can synchronize with a desktop computer through a cable. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowExternalDeviceManagement parameter specifies whether an external device management program is allowed to manage the device.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowHTMLEmail parameter specifies whether HTML email is enabled on the device. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowInternetSharing parameter specifies whether the mobile phone can be used as a modem to connect a computer to the Internet. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowIrDA parameter specifies whether infrared connections are allowed to the mobile phone. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowMobileOTAUpdate parameter specifies whether certain updates are seen by devices that implemented support for this restricting functionality. Further control can be specified via the MobileOTAUpdateMode parameter.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

When set to $true, the AllowNonProvisionableDevices parameter enables all devices to synchronize with the computer running Exchange, regardless of whether the device can enforce all the specific settings established in the Mobile Device mailbox policy. This also includes devices managed by a separate device management system. When set to $false, this parameter blocks these devices that aren't provisioned from synchronizing with the server running Exchange. The default value is $false.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowPOPIMAPEmail parameter specifies whether the user can configure a POP3 or IMAP4 email account on the device. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowRemoteDesktop parameter specifies whether the mobile phone can initiate a remote desktop connection. The default value is $true.

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

### -AllowSimpleDevicePassword

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowSimpleDevicePassword parameter specifies whether a simple device password is allowed. A simple device password is a password that has a specific pattern, such as 1111 or 1234. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowSMIMEEncryptionAlgorithmNegotiation parameter specifies whether the messaging application on the device can negotiate the encryption algorithm in case a recipient's certificate doesn't support the specified encryption algorithm.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowSMIMESoftCerts parameter specifies whether S/MIME software certificates are allowed. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowStorageCard parameter specifies whether the device can access information stored on a storage card. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowTextMessaging parameter specifies whether text messaging is allowed from the device. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowUnsignedApplications parameter specifies whether unsigned applications can be installed on the device. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowUnsignedInstallationPackages parameter specifies whether unsigned installation packages can be run on the device. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AllowWiFi parameter specifies whether wireless Internet access is allowed on the device. The default value is $true.

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

### -AlphanumericDevicePasswordRequired

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AlphanumericDevicePasswordRequired parameter specifies whether the device password must be alphanumeric. The default value is $false.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ApprovedApplicationList parameter specifies a list of approved applications for the device.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AttachmentsEnabled parameter specifies whether the user can download attachments. When set to $false, the user is blocked from downloading attachments. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DeviceEncryptionEnabled parameter, when set to $true, enables device encryption on the mobile phone. The default value is $false. Currently, only the storage card can be encrypted on devices running Windows Mobile 6.0 or later. We recommend that you don't use this setting and use the RequireStorageCardEncryption parameter instead.

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

### -DevicePasswordEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

When set to $true, the DevicePasswordEnabled parameter specifies that the user set a password for the device. The default value is $false.

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

### -DevicePasswordExpiration

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DevicePasswordExpiration parameter specifies the length of time, in days, that a password can be used. After this length of time, a new password must be created. The format of the parameter is dd.hh.mm:ss, for example, 24.00:00 = 24 hours.

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

### -DevicePasswordHistory

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DevicePasswordHistory parameter specifies the number of previously used passwords to store. When a user creates a password, the user can't reuse a stored password that was previously used.

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

### -DevicePolicyRefreshInterval

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DevicePolicyRefreshInterval parameter specifies how often the policy is sent from the server to the mobile phone

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IrmEnabled parameter specifies whether Information Rights Management (IRM) is enabled for the mailbox policy.

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

The IsDefault parameter specifies whether this policy is the default Mobile Device mailbox policy. The default value is $false. If another policy is currently set as the default, setting this parameter replaces the old default policy with this policy.

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

### -IsDefaultPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IsDefault parameter specifies whether this policy is the default Mobile Device mailbox policy. The default value is $false. If another policy is currently set as the default, setting this parameter replaces the old default policy with this policy.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxAttachmentSize parameter specifies the maximum size of attachments that can be downloaded to the mobile phone. The default value is Unlimited.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxCalendarAgeFilter parameter specifies the maximum range of calendar days that can be synchronized to the device. Valid values are:

- All
- TwoWeeks
- OneMonth
- ThreeMonths
- SixMonths

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

### -MaxDevicePasswordFailedAttempts

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxDevicePasswordFailedAttempts parameter specifies the number of attempts a user can make to enter the correct password for the device. You can enter any number from 4 through 16. The default value is 8.

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

### -MaxEmailAgeFilter

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxEmailAgeFilter parameter specifies the maximum number of days of email items to synchronize to the device.

Possible values are:

- All
- OneDay
- ThreeDays
- OneWeek
- TwoWeeks
- OneMonth
- ThreeMonths
- SixMonths

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxEmailBodyTruncationSize parameter specifies the maximum size at which email messages are truncated when synchronized to the device. The value is specified in kilobytes (KB).

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxEmailHTMLBodyTruncationSize parameter specifies the maximum size at which HTML-formatted email messages are synchronized to the device. The value is specified in KB.

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

### -MaxInactivityTimeDeviceLock

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxInactivityTimeDeviceLock parameter specifies the length of time that the device can be inactive before the password is required to reactivate the device. You can enter any interval between 30 seconds and 1 hour. The default value is 15 minutes. The format of the parameter is hh.mm:ss, for example, 15:00 = 15 minutes.

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

### -MinDevicePasswordComplexCharacters

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MinDevicePasswordComplexCharacters parameter specifies the minimum number of complex characters required in a device password. A complex character isn't a letter.

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

### -MinDevicePasswordLength

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MinDevicePasswordLength parameter specifies the minimum number of characters in the device password. You can enter any number from 1 through 16. The maximum length a password can be is 16 characters. The default value is 4.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PasswordRecoveryEnabled parameter specifies whether you can store the recovery password for the device on an Exchange server. When set to $true, you can store the recovery password for the device on an Exchange server. The default value is $false. The recovery password can be viewed from either Outlook on the web or the Exchange admin center.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireDeviceEncryption parameter specifies whether encryption is required on the device. The default value is $false.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireEncryptedSMIMEMessages parameter specifies whether you must encrypt S/MIME messages. The default value is $false.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireEncryptionSMIMEAlgorithm parameter specifies what required algorithm must be used when encrypting a message.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireManualSyncWhenRoaming parameter specifies whether the device must synchronize manually while roaming. The default value is $false.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireSignedSMIMEAlgorithm parameter specifies what required algorithm must be used when signing a message.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireSignedSMIMEMessages parameter specifies whether the device must send signed S/MIME messages.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RequireStorageCardEncryption parameter specifies whether encryption of a storage card is required. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The UnapprovedInROMApplicationList parameter specifies a list of applications that can't be run in ROM.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The UNCAccessEnabled parameter specifies whether access to Microsoft Windows file shares is enabled. Access to specific shares is configured on the Microsoft Exchange ActiveSync virtual directory.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The WSSAccessEnabled parameter specifies whether access to Microsoft Windows SharePoint Services is enabled. Access to specific shares is configured on the Exchange ActiveSync virtual directory.

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
