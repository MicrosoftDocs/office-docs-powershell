---
title: "Set-ActiveSyncMailboxPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 913c04bf-110d-465f-81c3-40887b44bf63
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-ActiveSyncMailboxPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-ActiveSyncMailboxPolicy** cmdlet to apply a variety of Mobile Device mailbox policy settings to a server. You can set any of the parameters by using one command.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
> [!CAUTION]
> The **Set-ActiveSyncMailboxPolicy** cmdlet will be removed in a future version of Exchange. Use the **Set-MobileMailboxPolicy** cmdlet instead. If you have any scripts that use the **Set-ActiveSyncMailboxPolicy** cmdlet, update them to use the **Set-MobileMailboxPolicy** cmdlet.
  
```
Set-ActiveSyncMailboxPolicy -Identity <MailboxPolicyIdParameter> [-AllowApplePushNotifications <$true | $false>] [-AllowBluetooth <Disable | HandsfreeOnly | Allow>] [-AllowBrowser <$true | $false>] [-AllowCamera <$true | $false>] [-AllowConsumerEmail <$true | $false>] [-AllowDesktopSync <$true | $false>] [-AllowExternalDeviceManagement <$true | $false>] [-AllowHTMLEmail <$true | $false>] [-AllowInternetSharing <$true | $false>] [-AllowIrDA <$true | $false>] [-AllowMobileOTAUpdate <$true | $false>] [-AllowNonProvisionableDevices <$true | $false>] [-AllowPOPIMAPEmail <$true | $false>] [-AllowRemoteDesktop <$true | $false>] [-AllowSimpleDevicePassword <$true | $false>] [-AllowSMIMEEncryptionAlgorithmNegotiation <BlockNegotiation | OnlyStrongAlgorithmNegotiation | AllowAnyAlgorithmNegotiation>] [-AllowSMIMESoftCerts <$true | $false>] [-AllowStorageCard <$true | $false>] [-AllowTextMessaging <$true | $false>] [-AllowUnsignedApplications <$true | $false>] [-AllowUnsignedInstallationPackages <$true | $false>] [-AllowWiFi <$true | $false>] [-AlphanumericDevicePasswordRequired <$true | $false>] [-ApprovedApplicationList <ApprovedApplicationCollection>] [-AttachmentsEnabled <$true | $false>] [-Confirm [<SwitchParameter>]] [-DeviceEncryptionEnabled <$true | $false>] [-DevicePasswordEnabled <$true | $false>] [-DevicePasswordExpiration <Unlimited>] [-DevicePasswordHistory <Int32>] [-DevicePolicyRefreshInterval <Unlimited>] [-DomainController <Fqdn>] [-IrmEnabled <$true | $false>] [-IsDefault <$true | $false>] [-IsDefaultPolicy <$true | $false>] [-MaxAttachmentSize <Unlimited>] [-MaxCalendarAgeFilter <All | TwoWeeks | OneMonth | ThreeMonths | SixMonths>] [-MaxDevicePasswordFailedAttempts <Unlimited>] [-MaxEmailAgeFilter <All | OneDay | ThreeDays | OneWeek | TwoWeeks | OneMonth>] [-MaxEmailBodyTruncationSize <Unlimited>] [-MaxEmailHTMLBodyTruncationSize <Unlimited>] [-MaxInactivityTimeDeviceLock <Unlimited>] [-MinDevicePasswordComplexCharacters <Int32>] [-MinDevicePasswordLength <Int32>] [-Name <String>] [-PasswordRecoveryEnabled <$true | $false>] [-RequireDeviceEncryption <$true | $false>] [-RequireEncryptedSMIMEMessages <$true | $false>] [-RequireEncryptionSMIMEAlgorithm <TripleDES | DES | RC2128bit | RC264bit | RC240bit>] [-RequireManualSyncWhenRoaming <$true | $false>] [-RequireSignedSMIMEAlgorithm <SHA1 | MD5>] [-RequireSignedSMIMEMessages <$true | $false>] [-RequireStorageCardEncryption <$true | $false>] [-UnapprovedInROMApplicationList <MultiValuedProperty>] [-UNCAccessEnabled <$true | $false>] [-WhatIf [<SwitchParameter>]] [-WSSAccessEnabled <$true | $false>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets several policy settings for the Mobile Device mailbox policy SalesPolicy.
  
```
Set-ActiveSyncMailboxPolicy -Identity:SalesPolicy -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -AttachmentsEnabled:$true -MaxInactivityTimeDeviceLock:15:00 -IsDefault:$false
```

### Example 2

This example sets several policy settings for the Mobile Device mailbox policy Management.
  
```
Set-ActiveSyncMailboxPolicy -Identity:Management -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -AllowCamera:$true  -AllowWiFi:$false -AllowStorageCard:$true -AllowPOPIMAPEmail:$false
```

### Example 3

This example sets several policy settings for the Mobile Device mailbox policy Default and requires confirmation before applying the settings.
  
```
Set-ActiveSyncMailboxPolicy -Identity:Default -DevicePasswordEnabled:$true -AlphanumericDevicePasswordRequired:$true -PasswordRecoveryEnabled:$true -MaxEmailAgeFilter:ThreeDays -AllowWiFi:$false -AllowStorageCard:$true -AllowPOPIMAPEmail:$false -IsDefault:$true -AllowTextMessaging:$true -Confirm:$true
```

## Detailed Description
<a name="DetailedDescription"> </a>

With the **Set-ActiveSyncMailboxPolicy** cmdlet, you can set each parameter in a mailbox policy.
  
> [!NOTE]
> Some Microsoft Mobile Device mailbox policy settings require the mobile device to have specific built-in features that enforce these security and device management settings. If your organization allows all devices, you must set the  _AllowNonProvisionableDevices_ parameter to `$true`. This applies to devices that can't enforce all policy settings. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |The  _Identity_ parameter specifies the Mobile Device mailbox policy. <br/> |
| _AllowApplePushNotifications_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _AllowApplePushNotifications_ parameter specifies whether push notifications are allowed to Apple mobile devices. <br/> |
| _AllowBluetooth_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.BluetoothType  <br/> |The  _AllowBluetooth_ parameter specifies whether the Bluetooth capabilities are allowed on the mobile phone. The available options are `Disable`,  `HandsfreeOnly`, and  `Allow`. The default value is  `Allow`.  <br/> |
| _AllowBrowser_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowBrowser_ parameter indicates whether Microsoft Pocket Internet Explorer is allowed on the mobile phone. The default value is `$true`. This parameter doesn't affect third-party browsers.  <br/> |
| _AllowCamera_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowCamera_ parameter specifies whether the mobile phone's camera is allowed. The default value is `$true`.  <br/> |
| _AllowConsumerEmail_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowConsumerEmail_ parameter specifies whether the mobile phone user can configure a personal email account on the mobile phone. The default value is `$true`. This parameter doesn't control access to emails using third-party mobile phone email programs.  <br/> |
| _AllowDesktopSync_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowDesktopSync_ parameter specifies whether the mobile phone can synchronize with a desktop computer through a cable. The default value is `$true`.  <br/> |
| _AllowExternalDeviceManagement_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowExternalDeviceManagement_ parameter specifies whether an external device management program is allowed to manage the mobile phone. <br/> |
| _AllowHTMLEmail_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowHTMLEmail_ parameter specifies whether HTML email is enabled on the mobile phone. The default value is `$true`. If set to  `$false`, all email is converted to plain text before synchronization occurs.  <br/> |
| _AllowInternetSharing_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowInternetSharing_ parameter specifies whether the mobile phone can be used as a modem to connect a computer to the Internet. The default value is `$true`.  <br/> |
| _AllowIrDA_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowIrDA_ parameter specifies whether infrared connections are allowed to the mobile phone. The default value is `$true`.  <br/> |
| _AllowMobileOTAUpdate_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowMobileOTAUpdate_ parameter specifies whether the Exchange ActiveSync mailbox policy can be sent to the mobile phone over a cellular data connection. <br/> |
| _AllowNonProvisionableDevices_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowNonProvisionableDevices_ parameter specifies whether all mobile phones can synchronize with the server running Exchange. When set to `$true`, the  _AllowNonProvisionableDevices_ parameter enables all mobile phones to synchronize with the Exchange server, regardless of whether the phone can enforce all the specific settings established in the Mobile Device mailbox policy. This also includes mobile phones managed by a separate device management system. When set to `$false`, this parameter blocks mobile phones that aren't provisioned from synchronizing with the Exchange server. The default value is  `$false`.  <br/> |
| _AllowPOPIMAPEmail_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowPOPIMAPEmail_ parameter specifies whether the user can configure a POP3 or IMAP4 email account on the mobile phone. The default value is `$true`. This parameter doesn't control access by third-party email programs.  <br/> |
| _AllowRemoteDesktop_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowRemoteDesktop_ parameter specifies whether the mobile phone can initiate a remote desktop connection. The default value is `$true`.  <br/> |
| _AllowSimpleDevicePassword_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowSimpleDevicePassword_ parameter specifies whether a simple device password is allowed. A simple device password is a password that has a specific pattern, such as 1111 or 1234. The default value is `$true`.  <br/> |
| _AllowSMIMEEncryptionAlgorithmNegotiation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.SMIMEEncryptionAlgorithmNegotiationType  <br/> |The  _AllowSMIMEEncryptionAlgorithmNegotiation_ parameter specifies whether the messaging application on the mobile phone can negotiate the encryption algorithm if a recipient's certificate doesn't support the specified encryption algorithm. <br/> |
| _AllowSMIMESoftCerts_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowSMIMESoftCerts_ parameter specifies whether S/MIME software certificates are allowed. The default value is `$true`.  <br/> |
| _AllowStorageCard_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowStorageCard_ parameter specifies whether the mobile phone can access information stored on a storage card. The default value is `$true`.  <br/> |
| _AllowTextMessaging_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowTextMessaging_ parameter specifies whether text messaging is allowed from the mobile phone. The default value is `$true`.  <br/> |
| _AllowUnsignedApplications_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowUnsignedApplications_ parameter specifies whether unsigned applications can be installed on the mobile phone. The default value is `$true`.  <br/> |
| _AllowUnsignedInstallationPackages_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowUnsignedInstallationPackages_ parameter specifies whether unsigned installation packages can be executed on the mobile phone. The default value is `$true`.  <br/> |
| _AllowWiFi_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AllowWiFi_ parameter specifies whether wireless Internet access is allowed on the mobile phone. The default value is `$true`.  <br/> |
| _AlphanumericDevicePasswordRequired_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AlphanumericDevicePasswordRequired_ parameter specifies whether the password for the mobile phone must be alphanumeric. The default value is `$false`.  <br/> |
| _ApprovedApplicationList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ApprovedApplicationCollection  <br/> |The  _ApprovedApplicationList_ parameter specifies a list of approved applications for the mobile phone. <br/> |
| _AttachmentsEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _AttachmentsEnabled_ parameter specifies whether attachments can be downloaded. When set to `$false`, the  _AttachmentsEnabled_ parameter blocks the user from downloading attachments. The default value is `$true`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DeviceEncryptionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _DeviceEncryptionEnabled_ parameter specifies whether encryption is enabled. The _DeviceEncryptionEnabled_ parameter, when set to `$true`, enables device encryption on the mobile phone. The default value is  `$false`.  <br/> |
| _DevicePasswordEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _DevicePasswordEnabled_ parameter specifies whether a password is required. When set to `$true`, the  _DevicePasswordEnabled_ parameter requires that the user set a password for the mobile phone. The default value is `$false`.  <br/> |
| _DevicePasswordExpiration_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _DevicePasswordExpiration_ parameter specifies the length of time, in days, that a password can be used. After this length of time, a new password must be created. The format of the parameter is _dd_. _hh_. _mm_: _ss_, for example, 24.00:00 = 24 hours.  <br/> |
| _DevicePasswordHistory_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _DevicePasswordHistory_ parameter specifies the number of previously used passwords to store. When a user creates a password, the user can't reuse a stored password that was previously used. <br/> |
| _DevicePolicyRefreshInterval_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _DevicePolicyRefreshInterval_ parameter specifies how often the policy is sent from the server to the mobile phone. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IrmEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _IrmEnabled_ parameter specifies whether Information Rights Management (IRM) is enabled for the mailbox policy. <br/> |
| _IsDefault_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _IsDefault_ parameter specifies whether this policy is the default Mobile Device mailbox policy. The default value is `$false`. If another policy is currently set as the default, setting this parameter replaces the old default policy with this policy.  <br/> |
| _IsDefaultPolicy_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _IsDefault_ parameter specifies whether this policy is the default Mobile Device mailbox policy. The default value is `$false`. If another policy is currently set as the default, setting this parameter replaces the old default policy with this policy.  <br/> |
| _MaxAttachmentSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _MaxAttachmentSize_ parameter specifies the maximum size of attachments that can be downloaded to the mobile phone. The default value is `Unlimited`.  <br/> |
| _MaxCalendarAgeFilter_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.CalendarAgeFilterType  <br/> | The _MaxCalendarAgeFilter_ parameter specifies the maximum range of calendar days that can be synchronized to the device. The value is specified by entering one of the following values: <br/>  `All` <br/>  `OneDay` <br/>  `ThreeDays` <br/>  `OneWeek` <br/>  `TwoWeeks` <br/>  `OneMonth` <br/> |
| _MaxDevicePasswordFailedAttempts_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _MaxDevicePasswordFailedAttempts_ parameter specifies the number of attempts a user can make to enter the correct password for the mobile phone. You can enter any number from 4 through 16. The default value is `8`.  <br/> |
| _MaxEmailAgeFilter_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.EmailAgeFilterType  <br/> | The _MaxEmailAgeFilter_ parameter specifies the maximum number of days of email items to synchronize to the mobile phone. The value is specified by entering one of the following values. <br/>  `All` <br/>  `OneDay` <br/>  `ThreeDays` <br/>  `OneWeek` <br/>  `TwoWeeks` <br/>  `OneMonth` <br/> |
| _MaxEmailBodyTruncationSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _MaxEmailBodyTruncationSize_ parameter specifies the maximum size at which email messages are truncated when synchronized to the mobile phone. The value is specified in kilobytes (KB). <br/> |
| _MaxEmailHTMLBodyTruncationSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _MaxEmailHTMLBodyTruncationSize_ parameter specifies the maximum size at which HTML-formatted email messages are synchronized to the mobile phone. The value is specified in KB. <br/> |
| _MaxInactivityTimeDeviceLock_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _MaxInactivityTimeDeviceLock_ parameter specifies the length of time that the mobile phone can be inactive before the password is required to reactivate it. You can enter any interval between 30 seconds and 1 hour. The default value is 15 minutes. The format of the parameter is _hh.mm:ss_, for example, 15:00 = 15 minutes.  <br/> |
| _MinDevicePasswordComplexCharacters_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _MinDevicePasswordComplexCharacters_ parameter specifies the minimum number of complex characters required in a mobile phone password. A complex character isn't a letter. <br/> |
| _MinDevicePasswordLength_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _MinDevicePasswordLength_ parameter specifies the minimum number of characters in the device password. You can enter any number from 1 through 16. The maximum length a password can be is 16 characters. The default value is `4`.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the friendly name of the Mobile Device mailbox policy. <br/> |
| _PasswordRecoveryEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _PasswordRecoveryEnabled_ parameter specifies whether the recovery password for the mobile phone is stored on an Exchange server. When set to `$true`, the  _PasswordRecoveryEnabled_ parameter enables you to store the recovery password for the mobile phone on an Exchange server. The default value is `$false`. The recovery password can be viewed from either Outlook on the web or the Exchange admin center.  <br/> |
| _RequireDeviceEncryption_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RequireDeviceEncryption_ parameter specifies whether encryption is required on the device. The default value is `$false`.  <br/> |
| _RequireEncryptedSMIMEMessages_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RequireEncryptedSMIMEMessages_ parameter specifies whether you must encrypt S/MIME messages. The default value is `$false`.  <br/> |
| _RequireEncryptionSMIMEAlgorithm_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.EncryptionSMIMEAlgorithmType  <br/> |The  _RequireEncryptionSMIMEAlgorithm_ parameter specifies what required algorithm must be used when encrypting a message. <br/> |
| _RequireManualSyncWhenRoaming_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RequireManualSyncWhenRoaming_ parameter specifies whether the mobile phone must synchronize manually while roaming. The default value is `$false`.  <br/> |
| _RequireSignedSMIMEAlgorithm_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.SignedSMIMEAlgorithmType  <br/> |The  _RequireSignedSMIMEAlgorithm_ parameter specifies what required algorithm must be used when signing a message. <br/> |
| _RequireSignedSMIMEMessages_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RequireSignedSMIMEMessages_ parameter specifies whether the mobile phone must send signed S/MIME messages. <br/> |
| _RequireStorageCardEncryption_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RequireStorageCardEncryption_ parameter specifies whether storage card encryption is enabled for the mailbox policy. Setting this parameter to `$true` also sets the _DeviceEncryptionEnabled_ parameter to `$true`.  <br/> |
| _UnapprovedInROMApplicationList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _UnapprovedInROMApplicationList_ parameter contains a list of applications that can't be run in ROM. <br/> |
| _UNCAccessEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _UNCAccessEnabled_ parameter specifies whether access to Microsoft Windows file shares is enabled. Access to specific shares is configured on the Exchange ActiveSync virtual directory. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WSSAccessEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _WSSAccessEnabled_ parameter specifies whether access to Microsoft Windows SharePoint Services is enabled. Access to specific shares is configured on the Exchange ActiveSync virtual directory. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

