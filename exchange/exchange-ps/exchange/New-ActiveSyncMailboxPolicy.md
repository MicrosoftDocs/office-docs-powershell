---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# new-ActiveSyncMailboxPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-ActiveSyncMailboxPolicy cmdlet to create a Microsoft Mobile Device mailbox policy object.

The New-ActiveSyncMailboxPolicy cmdlet will be removed in a future version of Microsoft Exchange. Use the New-MobileMailboxPolicy cmdlet instead. If you have any scripts that use the New-ActiveSyncMailboxPolicy cmdlet, update them to use the New-MobileMailboxPolicy cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
new-ActiveSyncMailboxPolicy [-Name] <String> [-AllowBluetooth <Disable | HandsfreeOnly | Allow>]
 [-AllowBrowser <$true | $false>] [-AllowCamera <$true | $false>] [-AllowConsumerEmail <$true | $false>]
 [-AllowDesktopSync <$true | $false>] [-AllowExternalDeviceManagement <$true | $false>]
 [-AllowHTMLEmail <$true | $false>] [-AllowInternetSharing <$true | $false>] [-AllowIrDA <$true | $false>]
 [-AllowMobileOTAUpdate <$true | $false>] [-AllowNonProvisionableDevices <$true | $false>]
 [-AllowPOPIMAPEmail <$true | $false>] [-AllowRemoteDesktop <$true | $false>]
 [-AllowSimpleDevicePassword <$true | $false>]
 [-AllowSMIMEEncryptionAlgorithmNegotiation <BlockNegotiation | OnlyStrongAlgorithmNegotiation | AllowAnyAlgorithmNegotiation>]
 [-AllowSMIMESoftCerts <$true | $false>] [-AllowStorageCard <$true | $false>]
 [-AllowTextMessaging <$true | $false>] [-AllowUnsignedApplications <$true | $false>]
 [-AllowUnsignedInstallationPackages <$true | $false>] [-AllowWiFi <$true | $false>]
 [-AlphanumericDevicePasswordRequired <$true | $false>]
 [-ApprovedApplicationList <ApprovedApplicationCollection>] [-AttachmentsEnabled <$true | $false>] [-Confirm]
 [-DeviceEncryptionEnabled <$true | $false>] [-DevicePasswordEnabled <$true | $false>]
 [-DevicePasswordExpiration <Unlimited>] [-DevicePasswordHistory <Int32>]
 [-DevicePolicyRefreshInterval <Unlimited>] [-DomainController <Fqdn>] [-IrmEnabled <$true | $false>]
 [-IsDefaultPolicy <$true | $false>] [-MaxAttachmentSize <Unlimited>]
 [-MaxCalendarAgeFilter <All | TwoWeeks | OneMonth | ThreeMonths | SixMonths>]
 [-MaxDevicePasswordFailedAttempts <Unlimited>]
 [-MaxEmailAgeFilter <All | OneDay | ThreeDays | OneWeek | TwoWeeks | OneMonth>]
 [-MaxEmailBodyTruncationSize <Unlimited>] [-MaxEmailHTMLBodyTruncationSize <Unlimited>]
 [-MaxInactivityTimeDeviceLock <Unlimited>] [-MinDevicePasswordComplexCharacters <Int32>]
 [-MinDevicePasswordLength <Int32>]
 [-MobileOTAUpdateMode <MajorVersionUpdates | MinorVersionUpdates | BetaVersionUpdates>]
 [-PasswordRecoveryEnabled <$true | $false>]
 [-RequireDeviceEncryption <$true | $false>] [-RequireEncryptedSMIMEMessages <$true | $false>]
 [-RequireEncryptionSMIMEAlgorithm <TripleDES | DES | RC2128bit | RC264bit | RC240bit>]
 [-RequireManualSyncWhenRoaming <$true | $false>] [-RequireSignedSMIMEAlgorithm <SHA1 | MD5>]
 [-RequireSignedSMIMEMessages <$true | $false>] [-RequireStorageCardEncryption <$true | $false>]
 [-UnapprovedInROMApplicationList <MultiValuedProperty>] [-UNCAccessEnabled <$true | $false>] [-WhatIf]
 [-WSSAccessEnabled <$true | $false>] [-AllowApplePushNotifications <$true | $false>]
 [-IsDefault <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
The New-ActiveSyncMailboxPolicy cmdlet creates a Mobile Device mailbox policy for mailboxes accessed by mobile devices.

Some Mobile Device mailbox policy settings require the mobile device to have certain built-in features that enforce these security and device management settings. If your organization allows all devices, you must set the AllowNonProvisionableDevices parameter to $true. This allows devices that can't enforce all policy settings to synchronize with your server.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-ActiveSyncMailboxPolicy -Name:"SalesPolicy" -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -IsDefault:$false -AttachmentsEnabled:$false -AllowStorageCard:$true
```

This example creates the Mobile Device mailbox policy SalesPolicy that has several preconfigured values.

### Example 2
```
New-ActiveSyncMailboxPolicy -Name:"Management" -AllowBluetooth:Allow -AllowBrowser:$true -AllowCamera:$true -AllowPOPIMAPEmail:$false -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -MaxEmailAgeFilter:OneWeek -AllowWiFi:$true -AllowStorageCard:$true
```

This example creates the Mobile Device mailbox policy Management that has several preconfigured values. Users assigned to this policy should have an Enterprise client access license (CAL) to use many of these features.

### Example 3
```
New-ActiveSyncMailboxPolicy -Name:"Contoso" -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -MinDevicePasswordComplexCharacters:3 -IsDefault:$true -DevicePasswordHistory:10
```

This example creates the Mobile Device mailbox policy Contoso that has several preconfigured values. This policy is configured to be the default policy for the organization. The default policy will be assigned to all new users.

## PARAMETERS

### -Name
The Name parameter specifies the name of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBluetooth
The AllowBluetooth parameter specifies whether the Bluetooth capabilities of the mobile phone are allowed. The available options are Disable, HandsfreeOnly, and Allow. The default value is Allow.

```yaml
Type: Disable | HandsfreeOnly | Allow
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowBrowser
The AllowBrowser parameter specifies whether Microsoft Pocket Internet Explorer is allowed on the mobile phone. The default value is $true. This parameter doesn't affect third-party browsers.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCamera
The AllowCamera parameter specifies whether the mobile phone's camera is allowed. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowConsumerEmail
The AllowConsumerEmail parameter specifies whether the mobile phone user can configure a personal email account on the device. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDesktopSync
The AllowDesktopSync parameter specifies whether the mobile phone can synchronize with a desktop computer through a cable. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExternalDeviceManagement
The AllowExternalDeviceManagement parameter specifies whether an external device management program is allowed to manage the device.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowHTMLEmail
The AllowHTMLEmail parameter specifies whether HTML email is enabled on the device. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowInternetSharing
The AllowInternetSharing parameter specifies whether the mobile phone can be used as a modem to connect a computer to the Internet. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowIrDA
The AllowIrDA parameter specifies whether infrared connections are allowed to the mobile phone. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowMobileOTAUpdate
The AllowMobileOTAUpdate parameter specifies whether certain updates are seen by devices that implemented support for this restricting functionality. Further control can be specified via the MobileOTAUpdateMode parameter.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowNonProvisionableDevices
When set to $true, the AllowNonProvisionableDevices parameter enables all devices to synchronize with the computer running Exchange, regardless of whether the device can enforce all the specific settings established in the Mobile Device mailbox policy. This also includes devices managed by a separate device management system. When set to $false, this parameter blocks these devices that aren't provisioned from synchronizing with the server running Exchange. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPOPIMAPEmail
The AllowPOPIMAPEmail parameter specifies whether the user can configure a POP3 or IMAP4 email account on the device. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowRemoteDesktop
The AllowRemoteDesktop parameter specifies whether the mobile phone can initiate a remote desktop connection. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSimpleDevicePassword
The AllowSimpleDevicePassword parameter specifies whether a simple device password is allowed. A simple device password is a password that has a specific pattern, such as 1111 or 1234. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSMIMEEncryptionAlgorithmNegotiation
The AllowSMIMEEncryptionAlgorithmNegotiation parameter specifies whether the messaging application on the device can negotiate the encryption algorithm in case a recipient's certificate doesn't support the specified encryption algorithm.

```yaml
Type: BlockNegotiation | OnlyStrongAlgorithmNegotiation | AllowAnyAlgorithmNegotiation
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSMIMESoftCerts
The AllowSMIMESoftCerts parameter specifies whether S/MIME software certificates are allowed. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowStorageCard
The AllowStorageCard parameter specifies whether the device can access information stored on a storage card. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowTextMessaging
The AllowTextMessaging parameter specifies whether text messaging is allowed from the device. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUnsignedApplications
The AllowUnsignedApplications parameter specifies whether unsigned applications can be installed on the device. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUnsignedInstallationPackages
The AllowUnsignedInstallationPackages parameter specifies whether unsigned installation packages can be run on the device. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowWiFi
The AllowWiFi parameter specifies whether wireless Internet access is allowed on the device. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlphanumericDevicePasswordRequired
The AlphanumericDevicePasswordRequired parameter specifies whether the device password must be alphanumeric. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApprovedApplicationList
The ApprovedApplicationList parameter specifies a list of approved applications for the device.

```yaml
Type: ApprovedApplicationCollection
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttachmentsEnabled
The AttachmentsEnabled parameter specifies whether the user can download attachments. When set to $false, the user is blocked from downloading attachments. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeviceEncryptionEnabled
The DeviceEncryptionEnabled parameter, when set to $true, enables device encryption on the mobile phone. The default value is $false. Currently, only the storage card can be encrypted on devices running Windows Mobile 6.0 or later. We recommend that you don't use this setting and use the RequireStorageCardEncryption parameter instead.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DevicePasswordEnabled
When set to $true, the DevicePasswordEnabled parameter specifies that the user set a password for the device. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DevicePasswordExpiration
The DevicePasswordExpiration parameter specifies the length of time, in days, that a password can be used. After this length of time, a new password must be created. The format of the parameter is dd.hh.mm:ss, for example, 24.00:00 = 24 hours.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DevicePasswordHistory
The DevicePasswordHistory parameter specifies the number of previously used passwords to store. When a user creates a password, the user can't reuse a stored password that was previously used.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DevicePolicyRefreshInterval
The DevicePolicyRefreshInterval parameter specifies how often the policy is sent from the server to the mobile phone

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmEnabled
The IrmEnabled parameter specifies whether Information Rights Management (IRM) is enabled for the mailbox policy.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefaultPolicy
The IsDefault parameter specifies whether this policy is the default Mobile Device mailbox policy. The default value is $false. If another policy is currently set as the default, setting this parameter replaces the old default policy with this policy.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxAttachmentSize
The MaxAttachmentSize parameter specifies the maximum size of attachments that can be downloaded to the mobile phone. The default value is Unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxCalendarAgeFilter
The MaxCalendarAgeFilter parameter specifies the maximum range of calendar days that can be synchronized to the device. Possible values are:

- All

- TwoWeeks

- OneMonth

- ThreeMonths

- SixMonths

```yaml
Type: All | TwoWeeks | OneMonth | ThreeMonths | SixMonths
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDevicePasswordFailedAttempts
The MaxDevicePasswordFailedAttempts parameter specifies the number of attempts a user can make to enter the correct password for the device. You can enter any number from 4 through 16. The default value is 8.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxEmailAgeFilter
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
Type: All | OneDay | ThreeDays | OneWeek | TwoWeeks | OneMonth
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxEmailBodyTruncationSize
The MaxEmailBodyTruncationSize parameter specifies the maximum size at which email messages are truncated when synchronized to the device. The value is specified in kilobytes (KB).

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxEmailHTMLBodyTruncationSize
The MaxEmailHTMLBodyTruncationSize parameter specifies the maximum size at which HTML-formatted email messages are synchronized to the device. The value is specified in KB.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxInactivityTimeDeviceLock
The MaxInactivityTimeDeviceLock parameter specifies the length of time that the device can be inactive before the password is required to reactivate the device. You can enter any interval between 30 seconds and 1 hour. The default value is 15 minutes. The format of the parameter is hh.mm:ss, for example, 15:00 = 15 minutes.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinDevicePasswordComplexCharacters
The MinDevicePasswordComplexCharacters parameter specifies the minimum number of complex characters required in a device password. A complex character isn't a letter.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinDevicePasswordLength
The MinDevicePasswordLength parameter specifies the minimum number of characters in the device password. You can enter any number from 1 through 16. The maximum length a password can be is 16 characters. The default value is 4.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MobileOTAUpdateMode
The MobileOTAUpdateMode parameter specifies which updates can be seen by the devices that implemented support for this restricting functionality. It must be used in conjunction with the AllowMobileOTAUpdate parameter to function properly.

```yaml
Type: MajorVersionUpdates | MinorVersionUpdates | BetaVersionUpdates
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordRecoveryEnabled
The PasswordRecoveryEnabled parameter specifies whether you can store the recovery password for the device on an Exchange server. When set to $true, you can store the recovery password for the device on an Exchange server. The default value is $false. The recovery password can be viewed from either Outlook on the web or the Exchange admin center.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireDeviceEncryption
The RequireDeviceEncryption parameter specifies whether encryption is required on the device. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireEncryptedSMIMEMessages
The RequireEncryptedSMIMEMessages parameter specifies whether you must encrypt S/MIME messages. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireEncryptionSMIMEAlgorithm
The RequireEncryptionSMIMEAlgorithm parameter specifies what required algorithm must be used when encrypting a message.

```yaml
Type: TripleDES | DES | RC2128bit | RC264bit | RC240bit
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireManualSyncWhenRoaming
The RequireManualSyncWhenRoaming parameter specifies whether the device must synchronize manually while roaming. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSignedSMIMEAlgorithm
The RequireSignedSMIMEAlgorithm parameter specifies what required algorithm must be used when signing a message.

```yaml
Type: SHA1 | MD5
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSignedSMIMEMessages
The RequireSignedSMIMEMessages parameter specifies whether the device must send signed S/MIME messages.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireStorageCardEncryption
The RequireStorageCardEncryption parameter specifies whether encryption of a storage card is required. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnapprovedInROMApplicationList
The UnapprovedInROMApplicationList parameter specifies a list of applications that can't be run in ROM.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UNCAccessEnabled
The UNCAccessEnabled parameter specifies whether access to Microsoft Windows file shares is enabled. Access to specific shares is configured on the Microsoft Exchange ActiveSync virtual directory.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WSSAccessEnabled
The WSSAccessEnabled parameter specifies whether access to Microsoft Windows SharePoint Services is enabled. Access to specific shares is configured on the Exchange ActiveSync virtual directory.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowApplePushNotifications
This parameter is available only in the cloud-based service.

The AllowApplePushNotifications parameter specifies whether push notifications are allowed for Apple mobile devices. The default value is $true.

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
The IsDefault parameter specifies whether this policy is the default Mobile Device mailbox policy. The default value is $false. If another policy is currently set as the default, setting this parameter replaces the old default policy with this policy.

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/90d6872e-8e2b-4e53-9554-a2120e99cc20.aspx)
