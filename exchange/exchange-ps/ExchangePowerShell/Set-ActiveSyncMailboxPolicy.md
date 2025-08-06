---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-activesyncmailboxpolicy
schema: 2.0.0
title: Set-ActiveSyncMailboxPolicy
---

# Set-ActiveSyncMailboxPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-ActiveSyncMailboxPolicy cmdlet to apply a variety of Mobile Device mailbox policy settings to a server. You can set any of the parameters by using one command.

**Note**: In Exchange 2013 or later, use the Set-MobileDeviceMailboxPolicy cmdlet instead. If you have scripts that use Set-ActiveSyncMailboxPolicy, update them to use Set-MobileDeviceMailboxPolicy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ActiveSyncMailboxPolicy [-Identity] <MailboxPolicyIdParameter>
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
 [-AllowSimpleDevicePassword <Boolean>]
 [-AllowSMIMEEncryptionAlgorithmNegotiation <SMIMEEncryptionAlgorithmNegotiationType>]
 [-AllowSMIMESoftCerts <Boolean>]
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
 [-Name <String>]
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
With the Set-ActiveSyncMailboxPolicy cmdlet, you can set each parameter in a mailbox policy.

Some Microsoft Mobile Device mailbox policy settings require the mobile device to have specific built-in features that enforce these security and device management settings. If your organization allows all devices, you must set the AllowNonProvisionableDevices parameter to $true. This applies to devices that can't enforce all policy settings.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ActiveSyncMailboxPolicy -Identity:SalesPolicy -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -AttachmentsEnabled:$true -MaxInactivityTimeDeviceLock:15:00 -IsDefault:$false
```

This example sets several policy settings for the Mobile Device mailbox policy SalesPolicy.

### Example 2
```powershell
Set-ActiveSyncMailboxPolicy -Identity:Management -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -AllowCamera:$true -AllowWiFi:$false -AllowStorageCard:$true -AllowPOPIMAPEmail:$false
```

This example sets several policy settings for the Mobile Device mailbox policy Management.

### Example 3
```powershell
Set-ActiveSyncMailboxPolicy -Identity:Default -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -MaxEmailAgeFilter:ThreeDays -AllowWiFi:$false -AllowStorageCard:$true -AllowPOPIMAPEmail:$false -IsDefault:$true -AllowTextMessaging:$true -Confirm:$true
```

This example sets several policy settings for the Mobile Device mailbox policy Default and requires confirmation before applying the settings.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the Mobile Device mailbox policy.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AllowApplePushNotifications

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The AllowApplePushNotifications parameter specifies whether push notifications are allowed to Apple mobile devices.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowBluetooth parameter specifies whether the Bluetooth capabilities are allowed on the mobile phone. The available options are Disable, HandsfreeOnly, and Allow. The default value is Allow.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowBrowser parameter indicates whether Microsoft Pocket Internet Explorer is allowed on the mobile phone. The default value is $true. This parameter doesn't affect non-Microsoft browsers.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowConsumerEmail parameter specifies whether the mobile phone user can configure a personal email account on the mobile phone. The default value is $true. This parameter doesn't control access to emails using non-Microsoft mobile phone email programs.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowExternalDeviceManagement parameter specifies whether an external device management program is allowed to manage the mobile phone.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowHTMLEmail parameter specifies whether HTML email is enabled on the mobile phone. The default value is $true. If set to $false, all email is converted to plain text before synchronization occurs.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowMobileOTAUpdate parameter specifies whether the Exchange ActiveSync mailbox policy can be sent to the mobile phone over a cellular data connection.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowNonProvisionableDevices parameter specifies whether all mobile phones can synchronize with the server running Exchange. When set to $true, the AllowNonProvisionableDevices parameter enables all mobile phones to synchronize with the Exchange server, regardless of whether the phone can enforce all the specific settings established in the Mobile Device mailbox policy. This also includes mobile phones managed by a separate device management system. When set to $false, this parameter blocks mobile phones that aren't provisioned from synchronizing with the Exchange server. The default value is $false.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowPOPIMAPEmail parameter specifies whether the user can configure a POP3 or IMAP4 email account on the mobile phone. The default value is $true. This parameter doesn't control access by non-Microsoft email programs.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowSMIMEEncryptionAlgorithmNegotiation parameter specifies whether the messaging application on the mobile phone can negotiate the encryption algorithm if a recipient's certificate doesn't support the specified encryption algorithm.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowStorageCard parameter specifies whether the mobile phone can access information stored on a storage card. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowTextMessaging parameter specifies whether text messaging is allowed from the mobile phone. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowUnsignedApplications parameter specifies whether unsigned applications can be installed on the mobile phone. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowUnsignedInstallationPackages parameter specifies whether unsigned installation packages can be executed on the mobile phone. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowWiFi parameter specifies whether wireless Internet access is allowed on the mobile phone. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AlphanumericDevicePasswordRequired parameter specifies whether the password for the mobile phone must be alphanumeric. The default value is $false.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ApprovedApplicationList parameter specifies a list of approved applications for the mobile phone.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AttachmentsEnabled parameter specifies whether attachments can be downloaded. When set to $false, the AttachmentsEnabled parameter blocks the user from downloading attachments. The default value is $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DeviceEncryptionEnabled parameter specifies whether encryption is enabled. The DeviceEncryptionEnabled parameter, when set to $true, enables device encryption on the mobile phone. The default value is $false.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DevicePasswordEnabled parameter specifies whether a password is required. When set to $true, the DevicePasswordEnabled parameter requires that the user set a password for the mobile phone. The default value is $false.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DevicePolicyRefreshInterval parameter specifies how often the policy is sent from the server to the mobile phone.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MaxCalendarAgeFilter parameter specifies the maximum range of calendar days that can be synchronized to the device. The value is specified by entering one of the following values:

- All
- OneDay
- ThreeDays
- OneWeek
- TwoWeeks
- OneMonth

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MaxDevicePasswordFailedAttempts parameter specifies the number of attempts a user can make to enter the correct password for the mobile phone. You can enter any number from 4 through 16. The default value is 8.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MaxEmailAgeFilter parameter specifies the maximum number of days of email items to synchronize to the mobile phone. The value is specified by entering one of the following values.

- All
- OneDay
- ThreeDays
- OneWeek
- TwoWeeks
- OneMonth

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MaxEmailBodyTruncationSize parameter specifies the maximum size at which email messages are truncated when synchronized to the mobile phone. The value is specified in kilobytes (KB).

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MaxEmailHTMLBodyTruncationSize parameter specifies the maximum size at which HTML-formatted email messages are synchronized to the mobile phone. The value is specified in KB.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MaxInactivityTimeDeviceLock parameter specifies the length of time that the mobile phone can be inactive before the password is required to reactivate it. You can enter any interval between 30 seconds and 1 hour. The default value is 15 minutes. The format of the parameter is hh.mm:ss, for example, 15:00 = 15 minutes.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MinDevicePasswordComplexCharacters parameter specifies the minimum number of complex characters required in a mobile phone password. A complex character isn't a letter.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies the friendly name of the Mobile Device mailbox policy.

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

### -PasswordRecoveryEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The PasswordRecoveryEnabled parameter specifies whether the recovery password for the mobile phone is stored on an Exchange server. When set to $true, the PasswordRecoveryEnabled parameter enables you to store the recovery password for the mobile phone on an Exchange server. The default value is $false. The recovery password can be viewed from either Outlook on the web or the Exchange admin center.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RequireManualSyncWhenRoaming parameter specifies whether the mobile phone must synchronize manually while roaming. The default value is $false.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RequireSignedSMIMEMessages parameter specifies whether the mobile phone must send signed S/MIME messages.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RequireStorageCardEncryption parameter specifies whether storage card encryption is enabled for the mailbox policy. Setting this parameter to $true also sets the DeviceEncryptionEnabled parameter to $true.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The UnapprovedInROMApplicationList parameter contains a list of applications that can't be run in ROM.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The UNCAccessEnabled parameter specifies whether access to Microsoft Windows file shares is enabled. Access to specific shares is configured on the Exchange ActiveSync virtual directory.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
