---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-mailbox
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Set-Mailbox
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-Mailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-Mailbox cmdlet to modify the settings of existing mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Set-Mailbox [-Identity] <MailboxIdParameter>
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-AccountDisabled <Boolean>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-AntispamBypassEnabled <Boolean>]
 [-ApplyMandatoryProperties]
 [-Arbitration]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-ArchiveDomain <SmtpDomain>]
 [-ArchiveName <MultiValuedProperty>]
 [-ArchiveQuota <Unlimited>]
 [-ArchiveStatus <ArchiveStatusFlags>]
 [-ArchiveWarningQuota <Unlimited>]
 [-AttributesToClear <SetMailbox+ClearableADAttributes[]>]
 [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>]
 [-AuditEnabled <Boolean>]
 [-AuditLog]
 [-AuditLogAgeLimit <EnhancedTimeSpan>]
 [-AuditOwner <MultiValuedProperty>]
 [-AuxAuditLog]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-CalendarLoggingQuota <Unlimited>]
 [-CalendarRepairDisabled <Boolean>]
 [-CalendarVersionStoreDisabled <Boolean>]
 [-ClientExtensions <Boolean>]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-Database <DatabaseIdParameter>]
 [-DefaultAuditSet <MultiValuedProperty>]
 [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <Boolean>]
 [-DisableThrottling <Boolean>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-DowngradeHighPriorityMessagesEnabled <Boolean>]
 [-DumpsterMessagesPerFolderCountReceiveQuota <Int32>]
 [-DumpsterMessagesPerFolderCountWarningQuota <Int32>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-EmailAddressPolicyEnabled <Boolean>]
 [-EnableRoomMailboxAccount <Boolean>]
 [-EndDateForRetentionHold <DateTime>]
 [-ExtendedPropertiesCountQuota <Int32>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <ExternalOofOptions>]
 [-FolderHierarchyChildrenCountReceiveQuota <Int32>]
 [-FolderHierarchyChildrenCountWarningQuota <Int32>]
 [-FolderHierarchyDepthReceiveQuota <Int32>]
 [-FolderHierarchyDepthWarningQuota <Int32>]
 [-FoldersCountReceiveQuota <Int32>]
 [-FoldersCountWarningQuota <Int32>]
 [-Force]
 [-ForwardingAddress <RecipientIdParameter>]
 [-ForwardingSmtpAddress <ProxyAddress>]
 [-GMGen <Boolean>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-IgnoreDefaultScope]
 [-ImListMigrationCompleted <Boolean>]
 [-ImmutableId <String>]
 [-IsExcludedFromServingHierarchy <Boolean>]
 [-IsHierarchyReady <Boolean>]
 [-IsHierarchySyncEnabled <Boolean>]
 [-IssueWarningQuota <Unlimited>]
 [-Languages <MultiValuedProperty>]
 [-LinkedCredential <PSCredential>]
 [-LinkedDomainController <String>]
 [-LinkedMasterAccount <UserIdParameter>]
 [-LitigationHoldDate <DateTime>]
 [-LitigationHoldDuration <Unlimited>]
 [-LitigationHoldEnabled <Boolean>]
 [-LitigationHoldOwner <String>]
 [-MailboxMessagesPerFolderCountReceiveQuota <Int32>]
 [-MailboxMessagesPerFolderCountWarningQuota <Int32>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-Management <Boolean>]
 [-MaxBlockedSenders <Int32>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSafeSenders <Int32>]
 [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <Boolean>]
 [-MessageCopyForSentAsEnabled <Boolean>]
 [-MessageTracking <Boolean>]
 [-MessageTrackingReadStatusEnabled <Boolean>]
 [-Migration <Boolean>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-NewPassword <SecureString>]
 [-OABGen <Boolean>]
 [-Office <String>]
 [-OfflineAddressBook <OfflineAddressBookIdParameter>]
 [-OldPassword <SecureString>]
 [-OMEncryption <Boolean>]
 [-OMEncryptionStore <Boolean>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-ProhibitSendQuota <Unlimited>]
 [-ProhibitSendReceiveQuota <Unlimited>]
 [-PstProvider <Boolean>]
 [-PublicFolder]
 [-QueryBaseDN <OrganizationalUnitIdParameter>]
 [-RecipientLimits <Unlimited>]
 [-RecoverableItemsQuota <Unlimited>]
 [-RecoverableItemsWarningQuota <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoteRecipientType <RemoteRecipientType>]
 [-RemoveManagedFolderAndPolicy]
 [-RemovePicture]
 [-RemoveSpokenName]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-ResourceCapacity <Int32>]
 [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>]
 [-RetainDeletedItemsUntilBackup <Boolean>]
 [-RetentionComment <String>]
 [-RetentionHoldEnabled <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>]
 [-SamAccountName <String>]
 [-SCLDeleteEnabled <Boolean>]
 [-SCLDeleteThreshold <Int32>]
 [-SCLJunkEnabled <Boolean>]
 [-SCLJunkThreshold <Int32>]
 [-SCLQuarantineEnabled <Boolean>]
 [-SCLQuarantineThreshold <Int32>]
 [-SCLRejectEnabled <Boolean>]
 [-SCLRejectThreshold <Int32>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <Boolean>]
 [-StartDateForRetentionHold <DateTime>]
 [-StsRefreshTokensValidFrom <DateTime>]
 [-SystemMessageSizeShutoffQuota <Int64>]
 [-SystemMessageSizeWarningQuota <Int64>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-Type <ConvertibleMailboxSubType>]
 [-UMDataStorage <Boolean>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UMGrammar <Boolean>]
 [-UseDatabaseQuotaDefaults <Boolean>]
 [-UseDatabaseRetentionDefaults <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserPrincipalName <String>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### ExcludeFromAllOrgHolds
```
Set-Mailbox [-Identity] <MailboxIdParameter>
 [-ExcludeFromAllOrgHolds]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-AccountDisabled <Boolean>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ApplyMandatoryProperties]
 [-ArchiveName <MultiValuedProperty>]
 [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>]
 [-AuditEnabled <Boolean>]
 [-AuditLogAgeLimit <EnhancedTimeSpan>]
 [-AuditOwner <MultiValuedProperty>]
 [-AuxAuditLog]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-CalendarRepairDisabled <Boolean>]
 [-CalendarVersionStoreDisabled <Boolean>]
 [-ClearThrottlingPolicyAssignment]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DefaultAuditSet <MultiValuedProperty>]
 [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <Boolean>]
 [-DisplayName <String>]
 [-ElcProcessingDisabled <Boolean>]
 [-EmailAddressDisplayNames <MultiValuedProperty>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-EnableRoomMailboxAccount <Boolean>]
 [-EndDateForRetentionHold <DateTime>]
 [-EnforcedTimestamps <String>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <ExternalOofOptions>]
 [-Force]
 [-ForwardingAddress <RecipientIdParameter>]
 [-ForwardingSmtpAddress <ProxyAddress>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-GroupMailbox <MailboxIdParameter>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-ImListMigrationCompleted <Boolean>]
 [-ImmutableId <String>]
 [-InactiveMailbox]
 [-IsExcludedFromServingHierarchy <Boolean>]
 [-IssueWarningQuota <Unlimited>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-Languages <MultiValuedProperty>]
 [-LitigationHoldDate <DateTime>]
 [-LitigationHoldDuration <Unlimited>]
 [-LitigationHoldEnabled <Boolean>]
 [-LitigationHoldOwner <String>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <Boolean>]
 [-MessageCopyForSentAsEnabled <Boolean>]
 [-MessageCopyForSMTPClientSubmissionEnabled <Boolean>]
 [-MessageTracking <Boolean>]
 [-MessageTrackingReadStatusEnabled <Boolean>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-NonCompliantDevices <MultiValuedProperty>]
 [-Office <String>]
 [-Password <SecureString>]
 [-ProhibitSendQuota <Unlimited>]
 [-ProhibitSendReceiveQuota <Unlimited>]
 [-ProvisionedForOfficeGraph]
 [-PublicFolder]
 [-RecipientLimits <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResourceCapacity <Int32>]
 [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>]
 [-RetentionComment <String>]
 [-RetentionHoldEnabled <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>]
 [-SchedulerAssistant <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <Boolean>]
 [-SkipDualWrite]
 [-StartDateForRetentionHold <DateTime>]
 [-Type <ConvertibleMailboxSubType>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UpdateEnforcedTimestamp]
 [-UseDatabaseQuotaDefaults <Boolean>]
 [-UseDatabaseRetentionDefaults <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### ExcludeFromOrgHolds
```
Set-Mailbox [-Identity] <MailboxIdParameter>
 [-ExcludeFromOrgHolds <String>]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-AccountDisabled <Boolean>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ApplyMandatoryProperties]
 [-ArchiveName <MultiValuedProperty>]
 [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>]
 [-AuditEnabled <Boolean>]
 [-AuditLogAgeLimit <EnhancedTimeSpan>]
 [-AuditOwner <MultiValuedProperty>]
 [-AuxAuditLog]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-CalendarRepairDisabled <Boolean>]
 [-CalendarVersionStoreDisabled <Boolean>]
 [-ClearThrottlingPolicyAssignment]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DefaultAuditSet <MultiValuedProperty>]
 [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <Boolean>]
 [-DisplayName <String>]
 [-ElcProcessingDisabled <Boolean>]
 [-EmailAddressDisplayNames <MultiValuedProperty>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-EnableRoomMailboxAccount <Boolean>]
 [-EndDateForRetentionHold <DateTime>]
 [-EnforcedTimestamps <String>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <ExternalOofOptions>]
 [-Force]
 [-ForwardingAddress <RecipientIdParameter>]
 [-ForwardingSmtpAddress <ProxyAddress>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-GroupMailbox <MailboxIdParameter>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-ImListMigrationCompleted <Boolean>]
 [-ImmutableId <String>]
 [-InactiveMailbox]
 [-IsExcludedFromServingHierarchy <Boolean>]
 [-IssueWarningQuota <Unlimited>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-Languages <MultiValuedProperty>]
 [-LitigationHoldDate <DateTime>]
 [-LitigationHoldDuration <Unlimited>]
 [-LitigationHoldEnabled <Boolean>]
 [-LitigationHoldOwner <String>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <Boolean>]
 [-MessageCopyForSentAsEnabled <Boolean>]
 [-MessageCopyForSMTPClientSubmissionEnabled <Boolean>]
 [-MessageTracking <Boolean>]
 [-MessageTrackingReadStatusEnabled <Boolean>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-NonCompliantDevices <MultiValuedProperty>]
 [-Office <String>]
 [-Password <SecureString>]
 [-ProhibitSendQuota <Unlimited>]
 [-ProhibitSendReceiveQuota <Unlimited>]
 [-ProvisionedForOfficeGraph]
 [-PublicFolder]
 [-RecipientLimits <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResourceCapacity <Int32>]
 [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>]
 [-RetentionComment <String>]
 [-RetentionHoldEnabled <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>]
 [-SchedulerAssistant <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <Boolean>]
 [-SkipDualWrite]
 [-StartDateForRetentionHold <DateTime>]
 [-Type <ConvertibleMailboxSubType>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UpdateEnforcedTimestamp]
 [-UseDatabaseQuotaDefaults <Boolean>]
 [-UseDatabaseRetentionDefaults <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### RecalculateInactiveMailbox
```
Set-Mailbox [-Identity] <MailboxIdParameter>
 [-RecalculateInactiveMailbox]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-AccountDisabled <Boolean>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ApplyMandatoryProperties]
 [-ArchiveName <MultiValuedProperty>]
 [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>]
 [-AuditEnabled <Boolean>]
 [-AuditLogAgeLimit <EnhancedTimeSpan>]
 [-AuditOwner <MultiValuedProperty>]
 [-AuxAuditLog]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-CalendarRepairDisabled <Boolean>]
 [-CalendarVersionStoreDisabled <Boolean>]
 [-ClearThrottlingPolicyAssignment]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DefaultAuditSet <MultiValuedProperty>]
 [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <Boolean>]
 [-DisplayName <String>]
 [-ElcProcessingDisabled <Boolean>]
 [-EmailAddressDisplayNames <MultiValuedProperty>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-EnableRoomMailboxAccount <Boolean>]
 [-EndDateForRetentionHold <DateTime>]
 [-EnforcedTimestamps <String>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <ExternalOofOptions>]
 [-Force]
 [-ForwardingAddress <RecipientIdParameter>]
 [-ForwardingSmtpAddress <ProxyAddress>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-GroupMailbox <MailboxIdParameter>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-ImListMigrationCompleted <Boolean>]
 [-ImmutableId <String>]
 [-InactiveMailbox]
 [-IsExcludedFromServingHierarchy <Boolean>]
 [-IssueWarningQuota <Unlimited>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-Languages <MultiValuedProperty>]
 [-LitigationHoldDate <DateTime>]
 [-LitigationHoldDuration <Unlimited>]
 [-LitigationHoldEnabled <Boolean>]
 [-LitigationHoldOwner <String>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <Boolean>]
 [-MessageCopyForSentAsEnabled <Boolean>]
 [-MessageCopyForSMTPClientSubmissionEnabled <Boolean>]
 [-MessageTracking <Boolean>]
 [-MessageTrackingReadStatusEnabled <Boolean>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-NonCompliantDevices <MultiValuedProperty>]
 [-Office <String>]
 [-Password <SecureString>]
 [-ProhibitSendQuota <Unlimited>]
 [-ProhibitSendReceiveQuota <Unlimited>]
 [-ProvisionedForOfficeGraph]
 [-PublicFolder]
 [-RecipientLimits <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResourceCapacity <Int32>]
 [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>]
 [-RetentionComment <String>]
 [-RetentionHoldEnabled <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>]
 [-SchedulerAssistant <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <Boolean>]
 [-SkipDualWrite]
 [-StartDateForRetentionHold <DateTime>]
 [-Type <ConvertibleMailboxSubType>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UpdateEnforcedTimestamp]
 [-UseDatabaseQuotaDefaults <Boolean>]
 [-UseDatabaseRetentionDefaults <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### RemoveDelayHoldApplied
```
Set-Mailbox [-Identity] <MailboxIdParameter>
 [-RemoveDelayHoldApplied]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-AccountDisabled <Boolean>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ApplyMandatoryProperties]
 [-ArchiveName <MultiValuedProperty>]
 [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>]
 [-AuditEnabled <Boolean>]
 [-AuditLogAgeLimit <EnhancedTimeSpan>]
 [-AuditOwner <MultiValuedProperty>]
 [-AuxAuditLog]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-CalendarRepairDisabled <Boolean>]
 [-CalendarVersionStoreDisabled <Boolean>]
 [-ClearThrottlingPolicyAssignment]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DefaultAuditSet <MultiValuedProperty>]
 [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <Boolean>]
 [-DisplayName <String>]
 [-ElcProcessingDisabled <Boolean>]
 [-EmailAddressDisplayNames <MultiValuedProperty>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-EnableRoomMailboxAccount <Boolean>]
 [-EndDateForRetentionHold <DateTime>]
 [-EnforcedTimestamps <String>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <ExternalOofOptions>]
 [-Force]
 [-ForwardingAddress <RecipientIdParameter>]
 [-ForwardingSmtpAddress <ProxyAddress>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-GroupMailbox <MailboxIdParameter>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-ImListMigrationCompleted <Boolean>]
 [-ImmutableId <String>]
 [-InactiveMailbox]
 [-IsExcludedFromServingHierarchy <Boolean>]
 [-IssueWarningQuota <Unlimited>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-Languages <MultiValuedProperty>]
 [-LitigationHoldDate <DateTime>]
 [-LitigationHoldDuration <Unlimited>]
 [-LitigationHoldEnabled <Boolean>]
 [-LitigationHoldOwner <String>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <Boolean>]
 [-MessageCopyForSentAsEnabled <Boolean>]
 [-MessageCopyForSMTPClientSubmissionEnabled <Boolean>]
 [-MessageTracking <Boolean>]
 [-MessageTrackingReadStatusEnabled <Boolean>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-NonCompliantDevices <MultiValuedProperty>]
 [-Office <String>]
 [-Password <SecureString>]
 [-ProhibitSendQuota <Unlimited>]
 [-ProhibitSendReceiveQuota <Unlimited>]
 [-ProvisionedForOfficeGraph]
 [-PublicFolder]
 [-RecipientLimits <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResourceCapacity <Int32>]
 [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>]
 [-RetentionComment <String>]
 [-RetentionHoldEnabled <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>]
 [-SchedulerAssistant <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <Boolean>]
 [-SkipDualWrite]
 [-StartDateForRetentionHold <DateTime>]
 [-Type <ConvertibleMailboxSubType>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UpdateEnforcedTimestamp]
 [-UseDatabaseQuotaDefaults <Boolean>]
 [-UseDatabaseRetentionDefaults <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### RemoveDelayReleaseHoldApplied
```
Set-Mailbox [-Identity] <MailboxIdParameter>
 [-RemoveDelayReleaseHoldApplied]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-AccountDisabled <Boolean>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ApplyMandatoryProperties]
 [-ArchiveName <MultiValuedProperty>]
 [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>]
 [-AuditEnabled <Boolean>]
 [-AuditLogAgeLimit <EnhancedTimeSpan>]
 [-AuditOwner <MultiValuedProperty>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-CalendarRepairDisabled <Boolean>]
 [-CalendarVersionStoreDisabled <Boolean>]
 [-ClearThrottlingPolicyAssignment]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DefaultAuditSet <MultiValuedProperty>]
 [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <Boolean>]
 [-DisplayName <String>]
 [-ElcProcessingDisabled <Boolean>]
 [-EmailAddressDisplayNames <MultiValuedProperty>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-EnableRoomMailboxAccount <Boolean>]
 [-EndDateForRetentionHold <System.DateTime>]
 [-EnforcedTimestamps <String>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <ExternalOofOptions>]
 [-Force]
 [-ForwardingAddress <RecipientIdParameter>]
 [-ForwardingSmtpAddress <ProxyAddress>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-GroupMailbox <MailboxIdParameter>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-ImListMigrationCompleted <Boolean>]
 [-ImmutableId <String>]
 [-InactiveMailbox]
 [-IsExcludedFromServingHierarchy <Boolean>]
 [-IssueWarningQuota <Unlimited>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-Languages <MultiValuedProperty>]
 [-LitigationHoldDate <System.DateTime>]
 [-LitigationHoldDuration <Unlimited>]
 [-LitigationHoldEnabled <Boolean>]
 [-LitigationHoldOwner <String>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <Boolean>]
 [-MessageCopyForSentAsEnabled <Boolean>]
 [-MessageCopyForSMTPClientSubmissionEnabled <Boolean>]
 [-MessageTrackingReadStatusEnabled <Boolean>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-NonCompliantDevices <MultiValuedProperty>]
 [-Office <String>]
 [-Password <SecureString>]
 [-ProhibitSendQuota <Unlimited>]
 [-ProhibitSendReceiveQuota <Unlimited>]
 [-ProvisionedForOfficeGraph]
 [-PublicFolder]
 [-RecipientLimits <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResourceCapacity <System.Int32>]
 [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>]
 [-RetentionComment <String>]
 [-RetentionHoldEnabled <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>]
 [-SchedulerAssistant <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <Boolean>]
 [-StartDateForRetentionHold <System.DateTime>]
 [-StsRefreshTokensValidFrom <System.DateTime>]
 [-Type <ConvertibleMailboxSubType>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UpdateEnforcedTimestamp]
 [-UseDatabaseQuotaDefaults <Boolean>]
 [-UseDatabaseRetentionDefaults <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WindowsEmailAddress <SmtpAddress>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
 ```

### RemoveDisabledArchive
```
Set-Mailbox [-Identity] <MailboxIdParameter>
 [-RemoveDisabledArchive]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-AccountDisabled <Boolean>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ApplyMandatoryProperties]
 [-ArchiveName <MultiValuedProperty>]
 [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>]
 [-AuditEnabled <Boolean>]
 [-AuditLogAgeLimit <EnhancedTimeSpan>]
 [-AuditOwner <MultiValuedProperty>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-CalendarRepairDisabled <Boolean>]
 [-CalendarVersionStoreDisabled <Boolean>]
 [-ClearThrottlingPolicyAssignment]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DefaultAuditSet <MultiValuedProperty>]
 [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <Boolean>]
 [-DisplayName <String>]
 [-ElcProcessingDisabled <Boolean>]
 [-EmailAddressDisplayNames <MultiValuedProperty>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-EnableRoomMailboxAccount <Boolean>]
 [-EndDateForRetentionHold <DateTime>]
 [-EnforcedTimestamps <String>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <ExternalOofOptions>]
 [-Force]
 [-ForwardingAddress <RecipientIdParameter>]
 [-ForwardingSmtpAddress <ProxyAddress>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-GroupMailbox <MailboxIdParameter>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-ImListMigrationCompleted <Boolean>]
 [-ImmutableId <String>]
 [-InactiveMailbox]
 [-IsExcludedFromServingHierarchy <Boolean>]
 [-IssueWarningQuota <Unlimited>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-Languages <MultiValuedProperty>]
 [-LitigationHoldDate <DateTime>]
 [-LitigationHoldDuration <Unlimited>]
 [-LitigationHoldEnabled <Boolean>]
 [-LitigationHoldOwner <String>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <Boolean>]
 [-MessageCopyForSentAsEnabled <Boolean>]
 [-MessageCopyForSMTPClientSubmissionEnabled <Boolean>]
 [-MessageTrackingReadStatusEnabled <Boolean>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-NonCompliantDevices <MultiValuedProperty>]
 [-Office <String>]
 [-Password <SecureString>]
 [-ProhibitSendQuota <Unlimited>]
 [-ProhibitSendReceiveQuota <Unlimited>]
 [-ProvisionedForOfficeGraph]
 [-PublicFolder]
 [-RecipientLimits <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResourceCapacity <Int32>]
 [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>]
 [-RetentionComment <String>]
 [-RetentionHoldEnabled <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>]
 [-SchedulerAssistant <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <Boolean>]
 [-SkipDualWrite]
 [-StartDateForRetentionHold <DateTime>]
 [-StsRefreshTokensValidFrom <DateTime>]
 [-Type <ConvertibleMailboxSubType>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UpdateEnforcedTimestamp]
 [-UseDatabaseQuotaDefaults <Boolean>]
 [-UseDatabaseRetentionDefaults <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### RemoveOrphanedHolds
```
Set-Mailbox [-Identity] <MailboxIdParameter>
 [-RemoveOrphanedHolds <String[]>]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-AccountDisabled <Boolean>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ApplyMandatoryProperties]
 [-ArchiveName <MultiValuedProperty>]
 [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>]
 [-AuditEnabled <Boolean>]
 [-AuditLogAgeLimit <EnhancedTimeSpan>]
 [-AuditOwner <MultiValuedProperty>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-CalendarRepairDisabled <Boolean>]
 [-CalendarVersionStoreDisabled <Boolean>]
 [-ClearThrottlingPolicyAssignment]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DefaultAuditSet <MultiValuedProperty>]
 [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <Boolean>]
 [-DisplayName <String>]
 [-ElcProcessingDisabled <Boolean>]
 [-EmailAddressDisplayNames <MultiValuedProperty>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-EnableRoomMailboxAccount <Boolean>]
 [-EndDateForRetentionHold <DateTime>]
 [-EnforcedTimestamps <String>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <ExternalOofOptions>]
 [-Force]
 [-ForwardingAddress <RecipientIdParameter>]
 [-ForwardingSmtpAddress <ProxyAddress>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-GroupMailbox <MailboxIdParameter>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-ImListMigrationCompleted <Boolean>]
 [-ImmutableId <String>]
 [-InactiveMailbox]
 [-IsExcludedFromServingHierarchy <Boolean>]
 [-IssueWarningQuota <Unlimited>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-Languages <MultiValuedProperty>]
 [-LitigationHoldDate <DateTime>]
 [-LitigationHoldDuration <Unlimited>]
 [-LitigationHoldEnabled <Boolean>]
 [-LitigationHoldOwner <String>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <Boolean>]
 [-MessageCopyForSentAsEnabled <Boolean>]
 [-MessageCopyForSMTPClientSubmissionEnabled <Boolean>]
 [-MessageRecallProcessingEnabled <Boolean>]
 [-MessageTrackingReadStatusEnabled <Boolean>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-NonCompliantDevices <MultiValuedProperty>]
 [-Office <String>]
 [-Password <SecureString>]
 [-ProhibitSendQuota <Unlimited>]
 [-ProhibitSendReceiveQuota <Unlimited>]
 [-ProvisionedForOfficeGraph]
 [-PublicFolder]
 [-RecipientLimits <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResourceCapacity <System.Int32>]
 [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>]
 [-RetentionComment <String>]
 [-RetentionHoldEnabled <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>]
 [-SchedulerAssistant <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <Boolean>]
 [-SkipDualWrite]
 [-StartDateForRetentionHold <DateTime>]
 [-StsRefreshTokensValidFrom <DateTime>]
 [-Type <ConvertibleMailboxSubType>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UpdateEnforcedTimestamp]
 [-UseDatabaseQuotaDefaults <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet for one mailbox at a time. To perform bulk management, you can pipeline the output of various Get- cmdlets (for example, the Get-Mailbox or Get-User cmdlets) and configure several mailboxes in a single-line command. You can also use the Set-Mailbox cmdlet in scripts.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-Mailbox -Identity "John Woods" -DeliverToMailboxAndForward $true -ForwardingSMTPAddress manuel@contoso.com
```

This example delivers John Woods's email messages to John's mailbox and also forwards them to Manuel Oliveira's (manuel@contoso.com) mailbox.

### Example 2
```powershell
Get-Mailbox -OrganizationalUnit "Marketing" | Set-Mailbox -UseDatabaseQuotaDefaults $false -IssueWarningQuota 200MB -ProhibitSendQuota 250MB -ProhibitSendReceiveQuota 280MB
```

This example uses the Get-Mailbox cmdlet to find all the mailboxes in the Marketing organizational unit, and then uses the Set-Mailbox cmdlet to configure these mailboxes. The custom warning, prohibit send, and prohibit send and receive limits are set to 200 megabytes (MB), 250 MB, and 280 MB respectively, and the mailbox database's default limits are ignored.

### Example 3
```powershell
Get-User -Filter "Department -eq 'Customer Service'" | Set-Mailbox -MaxSendSize 2MB
```

This example uses the Get-User command to find all users in the Customer Service department, and then uses the Set-Mailbox command to change the maximum message size for sending messages to 2 MB.

### Example 4
```powershell
Set-Mailbox John@contoso.com -MailTipTranslations ("FR: C'est la langue française", "CHT: 這是漢語語言")
```

This example sets the MailTip translation in French and Chinese.

### Example 5
```powershell
$password = Read-Host "Enter password" -AsSecureString

Set-Mailbox florencef -Password $password -ResetPasswordOnNextLogon $true
```

In on-premises Exchange, this example resets the password for Florence Flipo's mailbox. The next time she signs in to her mailbox, she'll have to change her password.

### Example 6
```powershell
Set-Mailbox -Arbitration -Identity "SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}" -MessageTracking $false

Set-Mailbox -Arbitration -Identity "SystemMailbox{1f05a927-b864-48a7-984d-95b1adfbfe2d}" -MessageTracking $true
```

This example removes the message tracking organization capability from the arbitration mailbox named SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c} and assigns it to an arbitration mailbox named SystemMailbox{1f05a927-b864-48a7-984d-95b1adfbfe2d}.

### Example 7
```powershell
Set-Mailbox -Identity "John Woods" -EmailAddresses @{add="Jwoods@contoso.com"}
```

This example adds a secondary email address to John's mailbox.

### Example 8
```powershell
Set-Mailbox -Identity asraf@contoso.com -RemoveDelayReleaseHoldApplied
```

In Exchange Online, this example removes the delay hold that's applied to Asraf's mailbox so an offboarding migration (that is, a mailbox migration from Exchange Online back to on-premises Exchange) can continue successfully. For more information about delay holds, see [Managing mailboxes on delay hold](https://learn.microsoft.com/purview/ediscovery-identify-a-hold-on-an-exchange-online-mailbox#managing-mailboxes-on-delay-hold).

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AcceptMessagesOnlyFrom
The AcceptMessagesOnlyFrom parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are individual senders in your organization (mailboxes, mail users, and mail contacts). You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove senders without affecting other existing entries, use the following syntax: `@{Add="Sender1","Sender2"...; Remove="Sender3","Sender4"...}`.

The senders you specify for this parameter are automatically copied to the AcceptMessagesOnlyFromSendersOrMembers property. Therefore, you can't use the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptMessagesOnlyFromDLMembers
The AcceptMessagesOnlyFromDLMembers parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are groups in your organization (distribution groups, mail-enabled security groups, and dynamic distribution groups). Specifying a group means all members of the group are allowed to send messages to this recipient. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple groups separated by commas. To overwrite any existing entries, use the following syntax: `Group1,Group2,...GroupN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Group1","Group2",..."GroupN"`.

To add or remove groups without affecting other existing entries, use the following syntax: `@{Add="Group1","Group2"...; Remove="Group3","Group4"...}`.

The groups you specify for this parameter are automatically copied to the AcceptMessagesOnlyFromSendersOrMembers property. Therefore, you can't use the AcceptMessagesOnlyFromDLMembers and AcceptMessagesOnlyFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all groups.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptMessagesOnlyFromSendersOrMembers
The AcceptMessagesOnlyFromSendersOrMembers parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are individual senders and groups in your organization. Individual senders are mailboxes, mail users, and mail contacts. Groups are distribution groups, mail-enabled security groups, and dynamic distribution groups. Specifying a group means all members of the group are allowed to send messages to this recipient.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove individual senders or groups without affecting other existing entries, use the AcceptMessagesOnlyFrom and AcceptMessageOnlyFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromDLMembers properties, respectively. Therefore, you can't use the AcceptMessagesOnlyFromSendersOrMembers parameter and the AcceptMessagesOnlyFrom or AcceptMessagesOnlyFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccountDisabled
This parameter is functional only in the cloud-based service.

The AccountDisabled parameter specifies whether to disable the account that's associated with the mailbox. Valid values are:

- $true: The associated account is disabled. The user can't log in to the mailbox.
- $false: The associated account is enabled. The user can log in to the mailbox.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddressBookPolicy
The AddressBookPolicy parameter specifies the address book policy that's applied to the mailbox. You can use any value that uniquely identifies the address book policy. For example:

- Name
- Distinguished name (DN)
- GUID

For more information about address book policies, see [Address book policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/address-book-policies/address-book-policies) or [Address book policies in Exchange Online](https://learn.microsoft.com/exchange/address-books/address-book-policies/address-book-policies).

```yaml
Type: AddressBookMailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value. The maximum length is 64 characters.

The Alias value can contain letters, numbers and the following characters:

- !, #, %, \*, +, -, /, =, ?, ^, \_, and ~.
- $, &, ', \`, {, }, and \| need to be escaped (for example ``-Alias what`'snew``) or the entire value enclosed in single quotation marks (for example, `-Alias 'what'snew'`). The & character is not supported in the Alias value for Microsoft Entra Connect synchronization.
- Periods (.) must be surrounded by other valid characters (for example, `help.desk`).
- Unicode characters U+00A1 to U+00FF.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (`alias@domain`). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to `oe` in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.onmicrosoft.com results in the Alias property value `helpdesk`.
- Recipients without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AntispamBypassEnabled
This parameter is available only in on-premises Exchange.

The AntispamBypassEnabled parameter specifies whether to skip anti-spam processing on the mailbox. Valid values are:

- $true: Anti-spam processing is skipped on the mailbox.
- $false: Anti-spam processing occurs on the mailbox. This is the default value

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyMandatoryProperties
The ApplyMandatoryProperties switch specifies whether to update the msExchVersion attribute of the mailbox. You don't need to specify a value with this switch.

You might need to use this switch to fix inaccessible mailboxes or mailboxes that were created in previous versions of Exchange.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Arbitration
This parameter is available only in on-premises Exchange.

The Arbitration switch is required to modify arbitration mailboxes. You don't need to specify a value with this switch.

Arbitration mailboxes are system mailbox that are used for storing different types of system data and for managing messaging approval workflow.

To modify arbitration mailboxes that are used to store audit log settings or data, don't use this switch. Instead, use the AuditLog or AuxAuditLog switches.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArbitrationMailbox
This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the arbitration mailbox that's used to manage the moderation process for this recipient. You can use any value that uniquely identifies the arbitration mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveDatabase
This parameter is available only in on-premises Exchange.

The ArchiveDatabase parameter specifies the Exchange database that contains the archive that's associated with this mailbox. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveDomain
This parameter is available only in on-premises Exchange.

The ArchiveDomain parameter specifies the domain in the cloud-based service where the archive that's associated with this mailbox exists. For example, if the SMTP email address of the user is tony@contoso.com, the SMTP domain could be archive.contoso.com.

Only use this parameter if the archive is hosted in the cloud-based service.

```yaml
Type: SmtpDomain
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveName
The ArchiveName parameter specifies the name of the archive mailbox. This is the name displayed to users in Outlook on the web (formerly known as Outlook Web App). If the value contains spaces, enclose the value in quotation marks (").

In on-premises Exchange, the following default values are used based on the version of Exchange:

- Exchange 2016 or later: `In-Place Archive -<Display Name>`
- Exchange 2013: `In-Place Archive - <Display Name>`
- Exchange 2010: `Personal Archive - <Display Name>`

In Exchange Online, the default value is `In-Place Archive -<Display Name>`.

In Outlook in Exchange Online, the value of this parameter is ignored. The name of the archive mailbox that's shown in the folder list is `Online Archive - <PrimarySMTPAddress>`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveQuota
This parameter is available only in on-premises Exchange.

The ArchiveQuota parameter specifies the maximum size for the user's archive mailbox. If the archive mailbox reaches or exceeds this size, it no longer accepts messages.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. When you enter a number, you can qualify it with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The ArchiveQuota value must be greater than or equal to the ArchiveWarningQuota value.

```yaml
Type: Unlimited
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveStatus
This cmdlet is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: ArchiveStatusFlags
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveWarningQuota
This parameter is available only in on-premises Exchange.

The ArchiveWarningQuota parameter specifies the warning threshold for the size of the user's archive mailbox. If the archive mailbox reaches or exceeds this size, the user receives a descriptive warning message.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. When you enter a number, you can qualify it with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The ArchiveWarningQuota value must be less than or equal to the ArchiveQuota value.

```yaml
Type: Unlimited
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttributesToClear
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SetMailbox+ClearableADAttributes[]
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditAdmin
The AuditAdmin parameter specifies the mailbox operations to log for administrators as part of mailbox audit logging. Valid values are:

- None
- AddFolderPermissions (Available only in Exchange 2019 and the cloud-based service.)
- ApplyRecord (Available only in the cloud-based service.)
- Copy
- Create (Enabled by default.)
- FolderBind (Enabled by default in on-premises Exchange 2010 or later.)
- HardDelete (Enabled by default.)
- MessageBind (This has been deprecated in the cloud-based service.)
- ModifyFolderPermissions (Available only in Exchange 2019 and the cloud-based service.)
- Move (Enabled by default in on-premises Exchange 2010 or later.)
- MoveToDeletedItems (Enabled by default.)
- RecordDelete (Available only in the cloud-based service.)
- RemoveFolderPermissions (Available only in Exchange 2019 and the cloud-based service.)
- SendAs (Enabled by default.)
- SendOnBehalf (Enabled by default.)
- SoftDelete (Enabled by default.)
- Update (Enabled by default.)
- UpdateFolderPermissions (Available only in Exchange 2019 and the cloud-based service; enabled by default.)
- UpdateCalendarDelegation (Available only in Exchange 2019 and the cloud-based service; enabled by default.)
- UpdateInboxRules (Available only in Exchange 2019 and the cloud-based service; enabled by default.)

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The AuditEnabled parameter must be set to $true to enable mailbox audit logging.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditDelegate
The AuditDelegate parameter specifies the mailbox operations to log for delegate users as part of mailbox audit logging. Valid values are:

- None
- AddFolderPermissions (Available only in Exchange 2019 and the cloud-based service.)
- ApplyRecord (Available only in the cloud-based service.)
- Create (Enabled by default.)
- FolderBind
- HardDelete (Enabled by default.)
- ModifyFolderPermissions (Available only in Exchange 2019 and the cloud-based service.)
- Move
- MoveToDeletedItems (Enabled by default only in the cloud-based service.)
- RecordDelete (Available only in the cloud-based service.)
- RemoveFolderPermissions (Available only in Exchange 2019 and the cloud-based service.)
- SendAs (Enabled by default.)
- SendOnBehalf (Enabled by default only in the cloud-based service.)
- SoftDelete (Enabled by default only in the cloud-based service.)
- Update (Enabled by default only in the cloud-based service.)
- UpdateFolderPermissions (Available only in Exchange 2019 and the cloud-based service; enabled by default.)
- UpdateInboxRules (Available only in Exchange 2019 and the cloud-based service; enabled by default.)

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The AuditEnabled parameter must be set to $true to enable mailbox audit logging.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditEnabled
The AuditEnabled parameter specifies whether to enable or disable mailbox audit logging for the mailbox. If auditing is enabled, actions specified in the AuditAdmin, AuditDelegate, and AuditOwner parameters are logged. Valid values are:

- $true: Mailbox audit logging is enabled.
- $false: Mailbox audit logging is disabled. This is the default value.

**Note**: In Exchange Online, mailbox auditing on by default was enabled for all organizations in January, 2019. For more information, see [Manage mailbox auditing](https://learn.microsoft.com/purview/audit-mailboxes).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditLog
This parameter is available only in on-premises Exchange.

The AuditLog switch is required to modify audit log mailboxes. You don't need to specify a value with this switch.

Audit log mailboxes are arbitration mailboxes that are used to store audit log settings.

To modify other types of arbitration mailboxes, don't use this switch. Instead, use the Arbitration switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditLogAgeLimit
The AuditLogAgeLimit parameter specifies the maximum age of audit log entries for the mailbox. Log entries older than the specified value are removed. The default value is 90 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 60 days for this parameter, use 60.00:00:00. Setting this parameter to the value 00:00:00 removes all audit log entries for the mailbox. The entries are removed the next time the Managed Folder Assistant processes the mailbox (automatically or manually by running the Start-ManagedFolderAssistant cmdlet).

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditOwner
The AuditOwner parameter specifies the mailbox operations to log for mailbox owners as part of mailbox audit logging. Valid values include:

- None (This is the default value in Exchange 2010, Exchange 2013, and Exchange 2016.)
- AddFolderPermissions (Available only in Exchange 2019 and the cloud-based service.)
- ApplyRecord (Available only in the cloud-based service.)
- Create
- FolderBind (Available only in Exchange 2013.)
- HardDelete (Enabled by default in the cloud-based service.)
- MailboxLogin (Available only in Exchange 2016, Exchange 2019, and the cloud-based service.)
- MessageBind (Available only in Exchange 2013.)
- ModifyFolderPermissions (Available only in Exchange 2019 and the cloud-based service.)
- Move
- MoveToDeletedItems (Enabled by default in the cloud-based service.)
- RecordDelete (Available only in the cloud-based service.)
- RemoveFolderPermissions (Available only in Exchange 2019 and the cloud-based service.)
- SoftDelete (Enabled by default in the cloud-based service.)
- Update (Enabled by default in the cloud-based service.)
- UpdateFolderPermissions (Available only in the cloud-based service; enabled by default.)
- UpdateCalendarDelegation (Available only in the cloud-based service; enabled by default.)
- UpdateInboxRules (Available only in the cloud-based service; enabled by default.)

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

The AuditEnabled parameter must be set to $true to enable mailbox audit logging.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuxAuditLog
This parameter is available only in on-premises Exchange.

The AuxAuditLog switch is required to modify auxiliary audit log mailboxes. You don't need to specify a value with this switch.

Audit log mailboxes are arbitration mailboxes that are used to store audit log settings.

To modify other types of arbitration mailboxes, don't use this switch. Instead, use the Arbitration switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassModerationFromSendersOrMembers
The BypassModerationFromSendersOrMembers parameter specifies who is allowed to send messages to this moderated recipient without approval from a moderator. Valid values for this parameter are individual senders and groups in your organization. Specifying a group means all members of the group are allowed to send messages to this recipient without approval from a moderator.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

To enter multiple senders and overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove one or more senders without affecting any existing entries, use the following syntax: `@{Add="Sender1","Sender2"...; Remove="Sender3","Sender4"...}`.

This parameter is meaningful only when moderation is enabled for the recipient. By default, this parameter is blank ($null), which means messages from all senders other than the designated moderators are moderated. When a moderator sends a message to this recipient, the message is isn't moderated. In other words, you don't need to use this parameter to include the moderators.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarLoggingQuota
This parameter is available only in on-premises Exchange.

The CalendarLoggingQuota parameter specifies the maximum size of the log in the Recoverable Items folder of the mailbox that stores changes to calendar items. When the log exceeds this size, calendar logging is disabled until messaging records management (MRM) removes older calendar logs to free up more space.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. The default value is 6 gigabytes (6442450944 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of this parameter must be less than or equal to the value of the RecoverableItemsQuota parameter.

When the UseDatabaseQuotaDefaults parameter on the mailbox is set to the value $true (the default value), the value of the this parameter is ignored, and the mailbox uses the CalendarLoggingQuota value from the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

```yaml
Type: Unlimited
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarRepairDisabled
The CalendarRepairDisabled parameter specifies whether to prevent calendar items in the mailbox from being repaired by the Calendar Repair Assistant. Valid values are:

- $true: The Calendar Repair Assistant doesn't repair calendar items in the mailbox.
- $false: The Calendar Repair Assistant repairs calendars items in the mailbox. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarVersionStoreDisabled
The CalendarVersionStoreDisabled parameter specifies whether to prevent calendar changes in the mailbox from being logged. Valid values are:

- $true: Changes to a calendar item aren't recorded.
- $false: Changes to a calendar item are recorded. This keeps older versions of meetings and appointments. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClearThrottlingPolicyAssignment
This parameter is available only in the cloud-based service.

The ClearThrottlingPolicyAssignment switch specifies whether to clear any throttling policy assignments for the mailbox. You don't need to specify a value with this switch.

Admins can contact Microsoft Support to assign a throttling policy to a mailbox, which changes the default throttling limits for various protocols. To revert those changes, use this switch.

```yaml
Type: SwitchParameter
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientExtensions
This parameter is available only in on-premises Exchange.

The ClientExtensions parameter specifies whether the organization-wide client extensions (also called Apps for Outlook) will be installed in the arbitration mailbox (also called the organization mailbox). Only one arbitration mailbox in the organization can be configured to store client extensions. You can use this parameter only on an arbitration mailbox.

Valid values are $true or $false.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
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

### -CreateDTMFMap
This parameter is available only in on-premises Exchange.

The CreateDTMFMap parameter specifies whether to create a dual-tone multiple-frequency (DTMF) map for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Valid values are:

- $true: A DTMF map is created for the recipient. This is the default value.
- $false: A DTMF map isn't created for the recipient.

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

### -CustomAttribute1
This parameter specifies a value for the CustomAttribute1 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute10
This parameter specifies a value for the CustomAttribute10 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute11
This parameter specifies a value for the CustomAttribute11 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute12
This parameter specifies a value for the CustomAttribute12 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute13
This parameter specifies a value for the CustomAttribute13 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute14
This parameter specifies a value for the CustomAttribute14 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute15
This parameter specifies a value for the CustomAttribute15 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute2
This parameter specifies a value for the CustomAttribute2 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute3
This parameter specifies a value for the CustomAttribute3 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute4
This parameter specifies a value for the CustomAttribute4 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute5
This parameter specifies a value for the CustomAttribute5 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute6
This parameter specifies a value for the CustomAttribute6 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute7
This parameter specifies a value for the CustomAttribute7 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute8
This parameter specifies a value for the CustomAttribute8 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute9
This parameter specifies a value for the CustomAttribute9 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
This parameter is available only in on-premises Exchange.

The Database parameter specifies the mailbox database that contains the mailbox. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

Use the Get-MailboxDatabase cmdlet to see the available mailbox databases.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DataEncryptionPolicy
This parameter is available only in the cloud-based service.

The DataEncryptionPolicy parameter specifies the data encryption policy that's applied to the mailbox. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

You can use the Get-DataEncryptionPolicy cmdlet to view the available policies.

```yaml
Type: DataEncryptionPolicyIdParameter
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultAuditSet
This parameter is available only in the cloud-based service.

The DefaultAuditSet parameter specifies whether to revert the mailbox operations that are logged in the mailbox audit log back to the set of default operations for the specified logon type. Valid values are:

- Admin: Reverts the mailbox operations to log for administrators back to the default list of operations.
- Delegate: Reverts the mailbox operations to log for delegate users back to the default list of operations.
- Owner: Reverts the mailbox operations to log for mailbox owners back to the default list of operations.

With on-by-default mailbox auditing in the cloud-based service, a set of mailbox operations are logged by default for each logon type. This list of operations is managed by Microsoft, who will automatically add new operations to be audited when they are released. If you change the list of mailbox operations for any logon type (by using the AuditAdmin, AuditDelegate, or AuditOwner parameters), any new mailbox operation released by Microsoft will not be audited; you'll need to explicitly add new mailbox operations to the list of operations for a logon type. Use this parameter to revert the mailbox back to the Microsoft-managed list of mailbox operations that are audited for a logon type. For more information about on-by-default mailbox auditing, see [Manage mailbox auditing](https://learn.microsoft.com/purview/audit-mailboxes).

```yaml
Type: MultiValuedProperty
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderMailbox
The DefaultPublicFolderMailbox parameter assigns a specific public folder mailbox to the user. You can use any value that uniquely identifies the public folder mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

By default, the public folder mailbox used by a user is automatically selected by an algorithm that load-balances users across all public folder mailboxes.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeliverToMailboxAndForward
The DeliverToMailboxAndForward parameter specifies the message delivery behavior when a forwarding address is specified by the ForwardingAddress or ForwardingSmtpAddress parameters. Valid values are:

- $true: Messages are delivered to this mailbox and forwarded to the specified recipient or email address.
- $false: If a forwarding recipient or email address is configured, messages are delivered only to the specified recipient or email address, and messages aren't delivered to this mailbox. If no forwarding recipient or email address is configured, messages are delivered only to this mailbox.

The default value is $false. The value of this parameter is meaningful only if you configure a forwarding recipient or email address.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableThrottling
This parameter is available only in on-premises Exchange.

The DisableThrottling parameter enables or disables sender rate throttling for the mailbox. Valid values are:

- $true: Messages sent by this mailbox will not be throttled by Sender Rate Control. We only recommend this value for moderation mailboxes.
- $false: Messages will be throttled after the threshold is exceeded. This is the default value.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the display name of the mailbox. The display name is visible in the Exchange admin center, in address lists, and in Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DowngradeHighPriorityMessagesEnabled
This parameter is available only in on-premises Exchange.

The DowngradeHighPriorityMessagesEnabled parameter specifies whether to prevent the mailbox from sending high priority messages to an X.400 mail system. Valid values are:

- $true: High priority messages sent to X.400 recipients are changed to normal priority.
- $false: High priority messages set to X.400 recipients remain high priority. This is the default value.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DumpsterMessagesPerFolderCountReceiveQuota
This parameter is available only in on-premises Exchange.

The DumpsterMessagesPerFolderCountReceiveQuota parameter specifies the maximum number of messages that can be contained in each folder in the Recoverable Items folder (called the dumpster in previous versions of Exchange). When a folder exceeds this limit, it can't store new messages. For example, if the Deletions folder in the Recoverable Items folder has exceeded the message count limit and the mailbox owner attempts to permanently delete items from their mailbox, the deletion will fail.

To see the current value of this property, run the command `Get-MailboxStatistics <MailboxIdentity> | Format-List DumpsterMessagesPerFolderCountReceiveQuota`.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DumpsterMessagesPerFolderCountWarningQuota
This parameter is available only in on-premises Exchange.

The DumpsterMessagesPerFolderCountWarningQuota parameters specifies the number of messages that each folder in the Recoverable Items folder (called the dumpster in previous versions of Exchange) can hold before Exchange sends a warning message to the mailbox owner and logs an event to the application event log. When this quota is reached, warning messages and logged events occur once a day.

To see the current value of this property, run the command `Get-MailboxStatistics <MailboxIdentity> | Format-List DumpsterMessagesPerFolderCountWarningQuota`.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ElcProcessingDisabled
This parameter is available only in the cloud-based service.

The ElcProcessingDisabled parameter specifies whether to prevent the Managed Folder Assistant from processing the mailbox. Valid values are:

- $true: The Managed Folder Assistant isn't allowed to process the mailbox. Note that this setting will be ignored if a retention policy that has Preservation Lock enabled is applied to the mailbox.
- $false: The Managed Folder Assistant is allowed to process the mailbox. This is the default value.

```yaml
Type: Boolean
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddressDisplayNames
This parameter is available only in the cloud-based service.

{{ Fill EmailAddressDisplayNames Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddresses
The EmailAddresses parameter specifies all email addresses (proxy addresses) for the recipient, including the primary SMTP address. In on-premises Exchange organizations, the primary SMTP address and other proxy addresses are typically set by email address policies. However, you can use this parameter to configure other proxy addresses for the recipient. For more information, see [Email address policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/email-address-policies/email-address-policies).

Valid syntax for this parameter is `"Type:EmailAddress1","Type:EmailAddress2",..."Type:EmailAddressN"`. The optional `Type` value specifies the type of email address. Examples of valid values include:

- SMTP: The primary SMTP address. You can use this value only once in a command.
- smtp: Other SMTP email addresses.
- X400: X.400 addresses in on-premises Exchange.
- X500: X.500 addresses in on-premises Exchange.

If you don't include a Type value for an email address, the address is assumed to be an SMTP email address. The syntax of SMTP email addresses is validated, but the syntax of other email address types isn't validated. Therefore, you need to verify that any custom addresses are formatted correctly.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the Type value SMTP on the address.
- The first email address when you don't use any Type values, or when you use multiple lowercase smtp Type values.
- Use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

The PrimarySmtpAddress parameter updates the primary email address and WindowsEmailAddress property to the same value.

To replace all existing proxy email addresses with the values you specify, use the following syntax: `"Type:EmailAddress1","Type:EmailAddress2",..."Type:EmailAddressN"`.

To add or remove specify proxy addresses without affecting other existing values, use the following syntax: `@{Add="Type:EmailAddress1","Type:EmailAddress2",...; Remove="Type:EmailAddress3","Type:EmailAddress4",...}`.

```yaml
Type: ProxyAddressCollection
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddressPolicyEnabled
This parameter is available only in on-premises Exchange.

The EmailAddressPolicyEnabled parameter specifies whether to apply email address policies to this recipient. Valid values are:

- $true: Email address policies are applied to this recipient. This is the default value.
- $false: Email address policies aren't applied to this recipient.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableRoomMailboxAccount
This parameter is functional only in on-premises Exchange.

The EnableRoomMailboxAccount parameter specifies whether to enable the disabled user account that's associated with this room mailbox. Valid values are:

- $true: The disabled account that's associated with the room mailbox is enabled. You also need to use the RoomMailboxPassword with this value. The account is able to log in and access the room mailbox or other resources.
- $false: The account that's associated with the room mailbox is disabled. The account is not able to log in and access the room mailbox or other resources. In on-premises Exchange, this is the default value.

You need to enable the account for features like the Skype for Business Room System or Microsoft Teams Rooms.

A room mailbox in Exchange Online is created with associated an account that has a random, unknown password. This account is active and visible in Microsoft Graph PowerShell and the Microsoft 365 admin center just like a regular user account, but it consumes no licenses. To prevent this account from being able to log in after you create the mailbox, use the AccountEnabled parameter on the [Update-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser) cmdlet in Microsoft Graph PowerShell.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDateForRetentionHold
The EndDateForRetentionHold parameter specifies the end date for retention hold for messaging records management (MRM). To use this parameter, you need to set the RetentionHoldEnabled parameter to the value $true.

**Important**: Using this parameter does not change the _RetentionHoldEnabled_ value to $false after the specified date. The _RentionHoldEnabled_ will still be $true on the mailbox after the specified date, but MRM will start processing mailbox items as normal.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnforcedTimestamps
This parameter is available only in the cloud-based service.

{{ Fill EnforcedTimestamps Description }}

```yaml
Type: String
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeFromAllOrgHolds
This parameter is available only in Exchange Online.

The ExcludeFromAllOrgHolds switch excludes the mailbox from all organization-wide Microsoft 365 retention policies. This switch can only be used for inactive mailboxes. You don't need to specify a value with this switch.

When you use this switch, use the DistinguishedName or ExchangeGuid property value for the identity of the inactive mailbox (those are the only values that guarantee uniqueness).

```yaml
Type: SwitchParameter
Parameter Sets: ExcludeFromAllOrgHolds
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeFromOrgHolds
This parameter is available only in Exchange Online.

The ExcludeFromOrgHolds parameter excludes the mailbox from one or more organization-wide Microsoft 365 retention policies. This parameter can only be used for inactive mailboxes. A valid value for this parameter is the GUID of the organization-wide Microsoft 365 retention policy that the inactive mailbox is excluded from. To find the GUID values of organization-wide Microsoft 365 retention policies, run the command Get-OrganizationConfig | Format-List InplaceHolds. Note that retention policies assigned to mailboxes are prefaced by 'mbx'.

You can specify multiple values by using the syntax: "GUID1","GUID2",..."GUIDX".

When you use this parameter, use the DistinguishedName or ExchangeGuid property value for the identity of the inactive mailbox (those are the values that guarantee uniqueness).

```yaml
Type: String[]
Parameter Sets: ExcludeFromOrgHolds
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedPropertiesCountQuota
This parameter is available only in on-premises Exchange.

The ExtendedPropertiesCountQuota property is used to configure the Named Properties and NonMAPI Named Properties quotas for a mailbox. This should typically only be done if you are experiencing QuotaExceededException or MapiExceptionNamedPropsQuotaExceeded errors.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute1
This parameter specifies a value for the ExtensionCustomAttribute1 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute1 -eq 'Value'"` will return a match if the property _contains_ the specified value.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute2
This parameter specifies a value for the ExtensionCustomAttribute2 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute2 -eq 'Value'"` will return a match if the property _contains_ the specified value.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute3
This parameter specifies a value for the ExtensionCustomAttribute3 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute3 -eq 'Value'"` will return a match if the property _contains_ the specified value.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute4
This parameter specifies a value for the ExtensionCustomAttribute4 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute4 -eq 'Value'"` will return a match if the property _contains_ the specified value.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute5
This parameter specifies a value for the ExtensionCustomAttribute5 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute5 -eq 'Value'"` will return a match if the property _contains_ the specified value.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalOofOptions
The ExternalOofOptions parameter specifies the automatic replies or Out of Office (also known OOF) message options that are available for the mailbox. Valid values are:

- External: Automatic replies can be configured for external senders. This is the default value.
- InternalOnly: Automatic replies can be configured only for internal senders.

```yaml
Type: ExternalOofOptions
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderHierarchyChildrenCountReceiveQuota
This parameter is available only in on-premises Exchange.

The FolderHierarchyChildrenCountReceiveQuota parameter specifies the maximum number of subfolders that can be created in a mailbox folder. The mailbox owner won't be able to create a new subfolder when this limit is reached.

To see the current value of this property, run the command `Get-MailboxStatistics <MailboxIdentity> | Format-List FolderHierarchyChildrenCountReceiveQuota`.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderHierarchyChildrenCountWarningQuota
This parameter is available only in on-premises Exchange.

The FolderHierarchyChildrenCountWarningQuota parameter specifies the number of subfolders that can be created in a mailbox folder before Exchange sends a warning message to the mailbox owner and logs an event to the application event log. When this quota is reached, warning messages and logged events occur once a day.

To see the current value of this property, run the command `Get-MailboxStatistics <MailboxIdentity> | Format-List FolderHierarchyChildrenCountWarningQuota`.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderHierarchyDepthReceiveQuota
This parameter is available only in on-premises Exchange.

The FolderHierarchyDepthReceiveQuota parameter specifies the maximum number of levels in the folder hierarchy of a mailbox folder. The mailbox owner won't be able to create another level in the folder hierarchy of the mailbox folder when this limit is reached.

To see the current value of this property, run the command `Get-MailboxStatistics <MailboxIdentity> | Format-List FolderHierarchyDepthReceiveQuota`.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderHierarchyDepthWarningQuota
This parameter is available only in on-premises Exchange.

The FolderHierarchyDepthWarningQuota parameter specifies the number of levels in the folder hierarchy of a mailbox folder that can be created before Exchange sends a warning message to the mailbox owner and logs an event to the application event log. When this quota is reached, warning messages and logged events occur once a day.

To see the current value of this property, run the command `Get-MailboxStatistics <MailboxIdentity> | Format-List FolderHierarchyDepthWarningQuota`.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FoldersCountReceiveQuota
This parameter is available only in on-premises Exchange.

The FoldersCountReceiveQuota parameter is used to specify a maximum number of folders within a mailbox, typically a public folder mailbox. If this value is configured and the limit is reached, no new folders will be able to be created.

To see the current value of this property, run the command `Get-MailboxStatistics <MailboxIdentity> | Format-List FoldersCountReceiveQuota`.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FoldersCountWarningQuota
This parameter is available only in on-premises Exchange.

The FoldersCountWarningQuota parameter is used to display a warning message that the folder hierarchy is full when the value specified for this parameter is reached. This parameter is typically used for public folder mailboxes.

To see the current value of this property, run the command `Get-MailboxStatistics <MailboxIdentity> | Format-List FoldersCountReceiveQuota`.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardingAddress
The ForwardingAddress parameter specifies a forwarding address in your organization for messages that are sent to this mailbox. You can use any value that uniquely identifies the internal recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

How messages are delivered and forwarded is controlled by the DeliverToMailboxAndForward parameter.

- DeliverToMailboxAndForward is $true: Messages are delivered to this mailbox and forwarded to the specified recipient.
- DeliverToMailboxAndForward is $false: Messages are only forwarded to the specified recipient. Messages aren't delivered to this mailbox.

The default value is blank ($null), which means no forwarding recipient is configured.

If you configure values for both the ForwardingAddress and ForwardingSmtpAddress parameters, the value of ForwardingSmtpAddress is ignored. Messages are forwarded to the recipient specified by the ForwardingAddress parameter.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardingSmtpAddress
The ForwardingSmtpAddress parameter specifies a forwarding SMTP address for messages that are sent to this mailbox. Typically, you use this parameter to specify external email addresses that aren't validated.

How messages are delivered and forwarded is controlled by the DeliverToMailboxAndForward parameter.

- DeliverToMailboxAndForward is $true: Messages are delivered to this mailbox and forwarded to the specified email address.
- DeliverToMailboxAndForward is $false: Messages are only forwarded to the specified email address. Messages aren't delivered to this mailbox.

The default value is blank ($null), which means no forwarding email address is configured.

If you configure values for both the ForwardingAddress and ForwardingSmtpAddress parameters, the value of ForwardingSmtpAddress is ignored. Messages are forwarded to the recipient specified by the ForwardingAddress parameter.

```yaml
Type: ProxyAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GMGen
This parameter is available only in on-premises Exchange.

The GMGen parameter specifies whether the arbitration mailbox (also called an organization mailbox) is used for group metrics generation for the organization. In MailTips, group metrics information is used to indicate the number of recipients in a message or whether recipients are outside your organization. You can use this parameter only on an arbitration mailbox.

Valid values are $true or $false.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GrantSendOnBehalfTo
The GrantSendOnBehalfTo parameter specifies who can send on behalf of this mailbox. Although messages send on behalf of the mailbox clearly show the sender in the From field (`<Sender> on behalf of <Mailbox>`), replies to these messages are delivered to the mailbox, not the sender.

The sender you specify for this parameter must a mailbox, mail user or mail-enabled security group (a mail-enabled security principal that can have permissions assigned). You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

By default, this parameter is blank, which means no one else has permission to send on behalf of this mailbox.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupMailbox
This parameter is available only in the cloud-based service.

The GroupMailbox switch is required to modify Microsoft 365 Groups. You don't need to specify a value with this switch.

```yaml
Type: MailboxIdParameter
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HiddenFromAddressListsEnabled
The HiddenFromAddressListsEnabled parameter specifies whether this recipient is visible in address lists. Valid values are:

- $true: The recipient isn't visible in address lists.
- $false: The recipient is visible in address lists. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImListMigrationCompleted
This parameter is available only in on-premises Exchange.

The ImListMigrationCompleted parameter specifies whether a user's Lync or Skype for Business contact list is stored in their mailbox.

Valid values are:

- $true: The user's Lync or Skype for Business contact list is stored in their Exchange 2016 mailbox. This prevents you from migrating the mailbox back to an Exchange 2010 server.
- $false: The user's Lync or Skype for Business contact list is stored on a Lync or Skype for Business server. This doesn't prevent you from migrating the mailbox back to an Exchange 2010 server. This is the default value.

Lync Server 2013 and Skype for Business Server 2015 support storing the user's contact list in their Exchange 2016 mailbox. This feature is known as the unified contact store (UCS), and it allows applications to show a consistent, up-to-date contact list. However, Exchange 2010 doesn't support the unified contact store. Therefore, before you migrate a user's Exchange 2016 mailbox back to Exchange 2010, you need to move the user's Lync or Skype for Business contact list from the unified contact store back to a Lync 2013 or Skype for Business server. For more information, see [Configuring Microsoft Lync Server 2013 to use the unified contact store](https://learn.microsoft.com/lyncserver/lync-server-2013-configuring-lync-server-to-use-the-unified-contact-store).

If you migrate an Exchange 2013 mailbox back to Exchange 2010 while the user's Lync or Skype for Business contact list is stored in the unified contact store, the user could permanently lose access to those contacts. After you verify the user's Lync or Skype for Business contact list has been moved back to a Lync 2013 or Skype for Business server, you should be able to complete the mailbox migration. If you need to migrate the mailbox despite the potential for data loss, you can manually set the ImListMigrationCompleted parameter to $false.

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

### -ImmutableId
The ImmutableId parameter is used by GAL synchronization (GALSync) and specifies a unique and immutable identifier in the form of an SMTP address for an Exchange mailbox used for federated delegation when requesting Security Assertion Markup Language (SAML) tokens. If federation is configured for this mailbox and you don't set this parameter when you create the mailbox, Exchange creates the value for the immutable ID based upon the mailbox's ExchangeGUID and the federated account namespace, for example, 7a78e7c8-620e-4d85-99d3-c90d90f29699@mail.contoso.com.

You need to set the ImmutableId parameter if Active Directory Federation Services (AD FS) is deployed to allow single sign-on into an off-premises mailbox and AD FS is configured to use a different attribute than ExchangeGUID for sign-on token requests. Both, Exchange and AD FS must request the same token for the same user to ensure proper functionality for a cross-premises Exchange deployment scenario.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InactiveMailbox
This parameter is available only in the cloud-based service.

The InactiveMailbox switch specifies that the mailbox is an inactive mailbox. You don't need to specify a value with this switch.

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted.

To find inactive mailboxes, run the command `Get-Mailbox -InactiveMailboxOnly | Format-List Name,PrimarySmtpAddress,DistinguishedName,ExchangeGuid` and then use the DistinguishedName or ExchangeGuid property values for the Identity parameter (values guaranteed to be unique).

This switch is required to use the LitigationHoldEnabled and LitigationHoldDuration parameters on inactive mailboxes.

You can't use this switch to modify other properties on inactive mailboxes.

```yaml
Type: SwitchParameter
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromServingHierarchy
The IsExcludedFromServingHierarchy parameter prevents users from accessing the public folder hierarchy on this public folder mailbox. For load-balancing purposes, users are equally distributed across public folder mailboxes by default. When this parameter is set on a public folder mailbox, that mailbox isn't included in this automatic load-balancing and won't be accessed by users to retrieve the public folder hierarchy. However, if an administrator has set the DefaultPublicFolderMailbox property on a user mailbox to a specific public folder mailbox, the user will still access the specified public folder mailbox even if the IsExcludedFromServingHierarchy parameter is set for that public folder mailbox.

You should use this parameter only during public folder migrations. Don't use this parameter once the initial migration validation is complete.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsHierarchyReady
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsHierarchySyncEnabled
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IssueWarningQuota
The IssueWarningQuota parameter specifies the warning threshold for the size of the mailbox. If the mailbox reaches or exceeds this size, the user receives a descriptive warning message.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. When you enter a number, you can qualify it with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The IssueWarningQuota value must be less than or equal to the ProhibitSendReceiveQuota value.

In Exchange Online, the quota value is determined by the subscriptions and licenses that administrators purchase and assign in the Microsoft 365 admin center. You can lower the quota value, and you may be able to raise the quota, but you can't exceed the maximum value that's allowed by the subscription or license. In Exchange Online, you can't use this parameter on public folder mailboxes.

In on-premises Exchange, the default value of this parameter is unlimited. When the UseDatabaseQuotaDefaults parameter on the mailbox is set to $true (the default value), the value of the this parameter is ignored, and the mailbox uses the IssueWarningQuota value from the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JournalArchiveAddress
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SmtpAddress
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Languages
The Languages parameter specifies the language preferences for this mailbox, in order of preference. Several Exchange components display information to a mailbox user in the preferred language, if that language is supported. Some of those components include quota messages, non-delivery reports (NDRs), the Outlook on the web user interface, and Unified Messaging (UM) voice prompts.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedCredential
This parameter is available only in on-premises Exchange.

The LinkedCredential parameter specifies the credentials used to access the domain controller specified by the LinkedDomainController parameter.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedDomainController
This parameter is available only in on-premises Exchange.

The LinkedDomainController parameter specifies the domain controller in the forest where the user account resides, if the mailbox is a linked mailbox. The domain controller in the forest where the user account resides is used to get security information for the account specified by the LinkedMasterAccount parameter. Use the fully qualified domain name (FQDN) of the domain controller that you want to use as the value for this parameter.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedMasterAccount
This parameter is available only in on-premises Exchange.

The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides, if the mailbox is a linked mailbox. The master account is the account that the mailbox is linked to. The master account grants access to the mailbox. You can use any value that uniquely identifies the master account. For example:

- Name
- Distinguished name (DN)
- Canonical DN
- GUID

```yaml
Type: UserIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LitigationHoldDate
The LitigationHoldDate parameter specifies the date that the mailbox is placed on litigation hold. The parameter is populated automatically when you place a mailbox on litigation hold. The date you specify can be used for informational or reporting purposes.

When you use the LitigationHoldEnabled parameter to place the mailbox on litigation hold, you can specify any date using the LitigationHoldDate parameter. However, the mailbox is actually placed on litigation hold when you run the command to place the mailbox on litigation hold.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LitigationHoldDuration
The LitigationHoldDuration parameter specifies how long mailbox items are held if the mailbox is placed on litigation hold. The duration is calculated from the date a mailbox item is received or created.

A valid value is an integer that represents the number of days, or the value unlimited. The default value is unlimited, which means items are held indefinitely or until the hold is removed.

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

### -LitigationHoldEnabled
The LitigationHoldEnabled parameter specifies whether to place the mailbox on litigation hold. Valid values are:

- $true: The mailbox is on litigation hold.
- $false: The mailbox isn't on litigation hold. This is the default value.

After a mailbox is placed on litigation hold, messages can't be deleted from the mailbox. Deleted items and all versions of changed items are retained in the Recoverable Items folder. Items that are purged from the dumpster are also retained and the items are held indefinitely. If you enable litigation hold, single-item recovery quotas aren't applied.

Placing public folder mailboxes on Litigation Hold isn't supported. To place public folder mailboxes on hold, create an In-Place Hold by using the New-MailboxSearch cmdlet with the InPlaceHoldEnabled parameter.

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

### -LitigationHoldOwner
The LitigationHoldOwner parameter specifies the user who placed the mailbox on litigation hold. If you don't use this parameter when you place the mailbox on litigation hold, the value is populated automatically. If you use this parameter when you place the mailbox on litigation hold, you can specify a text value. If the value contains spaces, include the value in quotation marks ("). You can use this value for informational and reporting purposes.

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

### -MailboxMessagesPerFolderCountReceiveQuota
This parameter is an available only in on-premises Exchange.

The MailboxMessagesPerFolderCountReceiveQuota parameter specifies the maximum number of messages for a mailbox folder. When this limit is reached, the folder can't receive new messages.

The MailboxMessagesPerFolderCountReceiveQuota value must be greater than or equal to the MailboxMessagesPerFolderCountWarningQuota value.

To see the current value of this property, run the command `Get-MailboxStatistics <MailboxIdentity> | Format-List MailboxMessagesPerFolderCountReceiveQuota`.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxMessagesPerFolderCountWarningQuota
This parameter is an available only in on-premises Exchange.

The MailboxMessagesPerFolderCountWarningQuota parameter specifies the number of messages that a mailbox folder can hold before Exchange sends a warning message to the mailbox owner and logs an event to the application event log. When this quota is reached, warning messages and logged events occur once a day.

The MailboxMessagesPerFolderCountReceiveQuota value must be greater than or equal to the MailboxMessagesPerFolderCountWarningQuota value.

To see the current value of this property, run the command `Get-MailboxStatistics <MailboxIdentity> | Format-List MailboxMessagesPerFolderCountWarningQuota`.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxRegion
This parameter is available only in the cloud-based service.

The MailboxRegion parameter specifies the geo location for the mailbox in multi-geo environments.

To see the list of configured geo locations in Microsoft 365 Multi-Geo, run the following command: `Get-OrganizationConfig | Select -ExpandProperty AllowedMailboxRegions | Format-Table`. To view your central geo location, run the following command: `Get-OrganizationConfig | Select DefaultMailboxRegion`.

 For more information, see [Administering Exchange Online mailboxes in a multi-geo environment](https://learn.microsoft.com/microsoft-365/enterprise/administering-exchange-online-multi-geo).

```yaml
Type: String
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTip
The MailTip parameter specifies the custom MailTip text for this recipient. The MailTip is shown to senders when they start drafting an email message to this recipient. If the value contains spaces, enclose the value in quotation marks (").

When you add a MailTip to a recipient, two things happen:

- HTML tags are automatically added to the text. For example, if you enter the text: "This mailbox is not monitored", the MailTip automatically becomes: `<html><body>This mailbox is not monitored</body></html>`. Additional HTML tags aren't supported, and the length of the MailTip can't exceed 175 displayed characters.
- The text is automatically added to the MailTipTranslations property of the recipient as the default value: `default:<MailTip text>`. If you modify the MailTip text, the default value is automatically updated in the MailTipTranslations property, and vice-versa.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTipTranslations
The MailTipTranslations parameter specifies additional languages for the custom MailTip text that's defined by the MailTip parameter. HTML tags are automatically added to the MailTip translation, additional HTML tags aren't supported, and the length of the MailTip translation can't exceed 175 displayed characters.

To add or remove MailTip translations without affecting the default MailTip or other MailTip translations, use the following syntax:

`@{Add="Culture1:Localized text 1","\Culture2:Localized text 2"...; Remove="Culture3:Localized text 3","Culture4:Localized text 4"...}`.

CultureN is a valid ISO 639 two-letter culture code that's associated with the language.

For example, suppose this recipient currently has the MailTip text: "This mailbox is not monitored." To add the Spanish translation, use the following value for this parameter: `@{Add="ES:Esta caja no se supervisa."}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicy
This parameter is functional only in Exchange Server 2010.

The ManagedFolderMailboxPolicy parameter specifies a managed folder mailbox policy that controls MRM for the mailbox. If the parameter is set to $null, Exchange removes the managed folder mailbox policy from the mailbox but any managed folders in the mailbox remain.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicyAllowed
This parameter is functional only in Exchange Server 2010.

The ManagedFolderMailboxPolicyAllowed switch bypasses the warning that MRM features aren't supported for clients running versions of Outlook earlier than Outlook 2007. You don't need to specify a value with this switch.

When a managed folder mailbox policy is assigned to a mailbox by using the ManagedFolderMailboxPolicy parameter, the warning appears by default unless you also use the ManagedFolderMailboxPolicyAllowed switch.

Although Outlook 2003 Service Pack 3 clients are supported, they have limited MRM functionality.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Management
This parameter is available only in on-premises Exchange.

The Management parameter specifies whether the arbitration mailbox (also call an organization mailbox) is used to manage mailbox moves and mailbox migrations. You can use this parameter only on an arbitration mailbox.

Valid values are $true or $false.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxBlockedSenders
This parameter is available only in on-premises Exchange.

The MaxBlockedSenders parameter specifies the maximum number of senders that can be included in the blocked senders list. Blocked senders are senders that are considered junk senders by the mailbox and are used in junk email rules. This parameter is validated only when the junk email rules are updated using Outlook on the web or Exchange Web Services.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxReceiveSize
The MaxReceiveSize parameter specifies the maximum size of a message that can be sent to the mailbox. Messages larger than the maximum size are rejected.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 1.999999 gigabytes (2147483647 bytes) or the value unlimited.

In Exchange Online, the value is determined by the subscriptions and licenses that administrators purchase and assign in the Microsoft 365 admin center. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's allowed by the subscription or license.

In Exchange Online, you use this parameter to configure the MaxReceiveSize value on existing mailboxes. Use the Set-MailboxPlan cmdlet to change the MaxReceiveSize value for all new mailboxes that you create in the future.

In on-premises Exchange, the default value unlimited indicates the maximum receive size for the mailbox is imposed elsewhere (for example, organization, server, or connector limits).

Base64 encoding increases the size of messages by approximately 33%, so specify a value that's 33% larger than the actual maximum message size that you want to enforce. For example, the value 64 MB results in a maximum message size of approximately 48 MB.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSafeSenders
This parameter is available only in on-premises Exchange.

The MaxSafeSenders parameter specifies the maximum number of senders that can be included in the safe senders list. Safe senders are senders that are trusted by the mailbox and are used in junk email rules. This parameter is validated only when the junk email rules are updated using cloud-based organizations or services.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSendSize
The MaxSendSize parameter specifies the maximum size of a message that can be sent by the mailbox.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 1.999999 gigabytes (2147483647 bytes) or the value unlimited.

In Exchange Online, the value is determined by the subscriptions and licenses that administrators purchase and assign in the Microsoft 365 admin center. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's allowed by the subscription or license.

In Exchange Online, you use this parameter to configure the MaxSendSize value on existing mailboxes. Use the Set-MailboxPlan cmdlet to change the MaxSendSize value for all new mailboxes that you create in the future.

In on-premises Exchange, the default value unlimited indicates the maximum send size for the mailbox is imposed elsewhere (for example, organization, server, or connector limits).

Base64 encoding increases the size of messages by approximately 33%, so specify a value that's 33% larger than the actual maximum message size that you want to enforce. For example, the value 64 MB results in a maximum message size of approximately 48 MB.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageCopyForSendOnBehalfEnabled
**Note**: Previously, this parameter was available only for shared mailboxes. In Exchange Online or Exchange 2016 CU6 or later, this parameter is also available for user mailboxes. This parameter is not available for linked user mailboxes.

The MessageCopyForSendOnBehalfEnabled parameter specifies whether to copy the sender for messages that are sent from a mailbox by users that have the "send on behalf of" permission. Valid values are:

- $true: When a user sends a message from the mailbox by using the "send on behalf of" permission, a copy of the message is sent to the sender's mailbox.
- $false: When a user sends a message from the mailbox by using the "send on behalf of" permission, a copy of the message isn't sent to the sender's mailbox. This is the default value.

You give users permission to send on behalf of a mailbox by using the GrantSendOnBehalfTo parameter on the mailbox.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageCopyForSentAsEnabled
**Note**: Previously, this parameter was available only for shared mailboxes. In Exchange Online or Exchange 2016 CU6 or later, this parameter is also available for user mailboxes. This parameter is not available for linked user mailboxes.

The MessageCopyForSentAsEnabled parameter specifies whether to copy the sender for messages that are sent from a mailbox by users that have the "send as" permission. Valid values are:

- $true: When a user sends a message from the mailbox by using the "send as" permission, a copy of the message is sent to the sender's mailbox.
- $false: When a user sends a message from the mailbox by using the "send as" permission, a copy of the message isn't sent to the sender's mailbox. This is the default value.

In Exchange Online, you give a user permission to send as a mailbox by running this command: `Add-RecipientPermission <Mailbox> -AccessRights SendAs -Trustee <User>`.

In on-premises Exchange, you give a user permission to send as a mailbox by running this command: `Add-ADPermission <Mailbox> -ExtendedRights "Send As" -User <User>`.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageCopyForSMTPClientSubmissionEnabled
This parameter is available only in the cloud-based service.

The MessageCopyForSMTPClientSubmissionEnabled parameter specifies whether to copy the sender for messages that are sent using SMTP client submission (SMTP AUTH). Valid values are:

- $true: When the user's account sends messages using SMTP AUTH, a copy of the message is sent to the users's mailbox. This is the default value.
- $false: When the user's account sends messages using SMTP AUTH, a copy of the message isn't sent to the users's mailbox.

```yaml
Type: Boolean
Parameter Sets: RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDisabledArchive, ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RemoveDelayReleaseHoldApplied, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTracking
This parameter is available only in on-premises Exchange.

The MessageTracking parameter specifies whether the arbitration mailbox (also called an organization mailbox) is the anchor mailbox that's used for cross-organizational message tracking scenarios. By default, the message tracking organizational capability is assigned to the arbitration mailbox named SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}. You can use this parameter only on an arbitration mailbox.

Valid values are$true or $false.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: FalseNamed
Position:
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTrackingReadStatusEnabled
The MessageTrackingReadStatusEnabled parameter specifies whether to include detailed information in delivery reports for messages sent to the mailbox. Valid values are:

- $true: The read status of the message and the date-time that the message was delivered is shown in the delivery report for messages sent to this mailbox. This is the default value.
- $false: The read status of the message isn't displayed in the delivery report for messages sent to this mailbox. Only the date-time that the message was delivered is shown in the delivery report.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftOnlineServicesID
This parameter is available only in the cloud-based service.

The MicrosoftOnlineServicesID parameter specifies the Microsoft work or school account for the mailbox (for example, lila@contoso.onmicrosoft.com).

```yaml
Type: SmtpAddress
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Migration
This parameter is available only in on-premises Exchange.

The Migration switch is required to modify migration mailboxes. You don't need to specify a value with this switch.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModeratedBy
The ModeratedBy parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

You need to use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerationEnabled
The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.
- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.

You use the ModeratedBy parameter to specify the moderators.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name of the mailbox. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

In the cloud-based service, many special characters aren't allowed in the Name value (for example, ö, ü, or ä). For more information, see [Error when you try to create a username that contains a special character in Microsoft 365](https://learn.microsoft.com/office/troubleshoot/office-suite-issues/username-contains-special-character).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewPassword
This parameter is available only in on-premises Exchange.

The NewPassword parameter is used with the OldPassword parameter when a user changes their own password in Outlook on the web. By default, the NewPassword and OldPassword parameters are also available to members of the Help Desk and Organization Management role groups via the User Options role. However, administrators use the Password parameter to reset a user's password, because that parameter doesn't require the user's current password.

You can use the following methods as a value for this parameter:

- `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.
- Before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable (`$password`) for the value.
- `(Get-Credential).password` to be prompted to enter the password securely when you run this command.

```yaml
Type: SecureString
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NonCompliantDevices
This parameter is available only in the cloud-based service.

{{ Fill NonCompliantDevices Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDisabledArchive, ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RemoveDelayReleaseHoldApplied, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OABGen
This parameter is available only in on-premises Exchange.

The OABGen parameter specifies whether the arbitration mailbox (also called an organization mailbox) is used for offline address book (OAB) file generation and storage for the organization. OAB requests are sent to the server where this arbitration mailbox is located. You can use this parameter only on an arbitration mailbox.

Valid values are $true or $false.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Office
The Office parameter specifies the user's physical office name or number.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OfflineAddressBook
This parameter is available only in on-premises Exchange.

The OfflineAddressBook parameter specifies the offline address book (OAB) that's associated with the mailbox. You can use any value that uniquely identifies the OAB. For example:

- Name
- Distinguished name (DN)
- GUID

Use the Get-OfflineAddressBook cmdlet to see the available offline address books.

```yaml
Type: OfflineAddressBookIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OldPassword
This parameter is available only in on-premises Exchange.

The OldPassword parameter is used with the NewPassword parameter when a user changes their own password in Outlook on the web. By default, the NewPassword and OldPassword parameters are also available to members of the Help Desk and Organization Management role groups via the User Options role. However, administrators typically use the Password parameter to reset a user's password, because that parameter doesn't require the user's current password.

You can use the following methods as a value for this parameter:

- `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.
- Before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable (`$password`) for the value.
- `(Get-Credential).password` to be prompted to enter the password securely when you run this command.

```yaml
Type: SecureString
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OMEncryption
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OMEncryptionStore
This parameter is available only in on-premises Exchange.

PARAMVALUE: Boolean

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
The Password parameter resets the password of the user account that's associated with the mailbox to the value you specify. To use this parameter on a mailbox other than your own, consider the following options:

- Exchange Online: You can't use this parameter to change another user's password. Use the PasswordProfile parameter on the [Update-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser) cmdlet in Microsoft Graph PowerShell.
- On-premises Exchange: You need the User Options or Reset Password role. The User Options role is assigned to the Organization Management or Help Desk role groups. The Reset Password role it isn't assigned to any role groups by default.

You can use the following methods as a value for this parameter:

- `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.
- Before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable (`$password`) for the value.
- `(Get-Credential).password` to be prompted to enter the password securely when you run this command.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
This parameter is available only in on-premises Exchange.

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. You can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

If you set the EmailAddressPolicyEnabled parameter to $false, you can specify the primary address using the PrimarySmtpAddress parameter, but the email addresses of the mailbox are no longer automatically updated by email address policies.

The PrimarySmtpAddress parameter updates the primary email address and WindowsEmailAddress property to the same value.

```yaml
Type: SmtpAddress
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProhibitSendQuota
The ProhibitSendQuota parameter specifies a size limit for the mailbox. If the mailbox reaches or exceeds this size, the mailbox can't send new messages, and the user receives a descriptive warning message.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. When you enter a number, you can qualify it with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The ProhibitSendQuota value must be less than or equal to the ProhibitSendReceiveQuota value.

In Exchange Online, the quota value is determined by the subscriptions and licenses that administrators purchase and assign in the Microsoft 365 admin center. You can lower the quota value, and you may be able to raise the quota, but you can't exceed the maximum value that's allowed by the subscription or license. In Exchange Online, you can't use this parameter on public folder mailboxes.

In on-premises Exchange, the default value of this parameter is unlimited. When the UseDatabaseQuotaDefaults parameter on the mailbox is set to the value $true (the default value), the value of the this parameter is ignored, and the mailbox uses the ProhibitSendQuota value from the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProhibitSendReceiveQuota
The ProhibitSendReceiveQuota parameter specifies a size limit for the mailbox. If the mailbox reaches or exceeds this size, the mailbox can't send or receive new messages. Messages sent to the mailbox are returned to the sender with a descriptive error message. This value effectively determines the maximum size of the mailbox.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. When you enter a number, you can qualify it with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value must be greater than or equal to the ProhibitSendQuota or IssueWarningQuota values.

In Exchange Online, the quota value is determined by the subscriptions and licenses that administrators purchase and assign in the Microsoft 365 admin center. You can lower the quota value, but you can't exceed the maximum value that's allowed by the subscription or license. In Exchange Online, you can't use this parameter on public folder mailboxes.

In on-premises Exchange, the default value of this parameter is unlimited. When the UseDatabaseQuotaDefaults parameter on the mailbox is set to the value $true (the default value), the value of the this parameter is ignored, and the mailbox uses the ProhibitSendReceiveQuota value from the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProvisionedForOfficeGraph
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PstProvider
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder
The PublicFolder switch is required to modify public folder mailboxes. You don't need to specify a value with this switch.

Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueryBaseDN
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecalculateInactiveMailbox
This parameter is available only in the cloud-based service.

The RecalculateInactiveMailbox switch specifies whether to recalculate the hold status of an inactive mailbox. You don't need to specify a value with this switch.

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted.

You use this switch with the InactiveMailbox switch and the Identity parameter (with DistinguishedName or ExchangeGuid property values) to force the recalculation of the hold status for the inactive mailbox, which might lead to the soft-deletion of the mailbox if all holds on the mailbox have expired.

```yaml
Type: SwitchParameter
Parameter Sets: RecalculateInactiveMailbox
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientLimits
The RecipientLimits parameter specifies the maximum number of recipients allowed in messages sent by the mailbox.

In on-premises Exchange, a valid value is an integer or the value unlimited. The default value is unlimited, which indicates the maximum number of recipients per message for the mailbox is controlled elsewhere (for example, organization, server, or connector limits).

In the cloud-based service, a valid value is an integer from 1 to 1000. The default value is 500. This value does not apply to meeting messages.

```yaml
Type: Unlimited
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecoverableItemsQuota
This parameter is available only in on-premises Exchange.

The RecoverableItemsQuota parameter specifies the maximum size for the Recoverable Items folder of the mailbox. If the Recoverable Items folder reaches or exceeds this size, it no longer accepts messages.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. The default value is 30 gigabytes (32212254720 bytes).

When you enter a number, you can qualify it with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The RecoverableItemsQuota value must be greater than or equal to the RecoverableItemsWarningQuota value.

When the UseDatabaseQuotaDefaults parameter is set to the value $true (the default value), the value of the this parameter is ignored, and the mailbox uses the RecoverableItemsQuota value from the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

```yaml
Type: Unlimited
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecoverableItemsWarningQuota
This parameter is available only in on-premises Exchange.

The RecoverableItemsWarningQuota parameter specifies the warning threshold for the size of the Recoverable Items folder for the mailbox. If the Recoverable Items folder reaches or exceeds this size, Exchange logs an event to the application event log.

A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. The default value is 20 gigabytes (21474836480 bytes).

When you enter a number, you can qualify it with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The RecoverableItemsWarningQuota value must be less than or equal to the RecoverableItemsQuota value.

When the UseDatabaseQuotaDefaults parameter is set to the value $true (the default value), the value of the this parameter is ignored, and the mailbox uses the RecoverableItemsWarningQuota value from the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

```yaml
Type: Unlimited
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessagesFrom
The RejectMessagesFrom parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are individual senders in your organization (mailboxes, mail users, and mail contacts). You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove senders without affecting other existing entries, use the following syntax: `@{Add="Sender1","Sender2"...; Remove="Sender3","Sender4"...}`.

The senders you specify for this parameter are automatically copied to the RejectMessagesFromSendersOrMembers property. Therefore, you can't use the RejectMessagesFrom and RejectMessagesFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessagesFromDLMembers
The RejectMessagesFromDLMembers parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are groups in your organization (distribution groups, mail-enabled security groups, and dynamic distribution groups). Specifying a group means all members of the group aren't allowed to send messages to this recipient. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple groups separated by commas. To overwrite any existing entries, use the following syntax: `Group1,Group2,...GroupN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Group1","Group2",..."GroupN"`.

To add or remove groups without affecting other existing entries, use the following syntax: `@{Add="Group1","Group2"...; Remove="Group3","Group4"...}`.

The groups you specify for this parameter are automatically copied to the RejectMessagesFromSendersOrMembers property. Therefore, you can't use the RejectMessagesFromDLMembers and RejectMessagesFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all groups.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessagesFromSendersOrMembers
The RejectMessagesFromSendersOrMembers parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are individual senders and groups in your organization. Individual senders are mailboxes, mail users, and mail contacts. Groups are distribution groups, mail-enabled security groups, and dynamic distribution groups. Specifying a group means all members of the group aren't allowed to send messages to this recipient.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove individual senders or groups without affecting other existing entries, use the RejectMessagesFrom and RejectMessagesFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the RejectMessagesFrom and RejectMessagesFromDLMembers properties, respectively. Therefore, you can't use the RejectMessagesFromSendersOrMembers parameter and the RejectMessagesFrom or RejectMessagesFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteRecipientType
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: RemoteRecipientType
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveDelayHoldApplied
This parameter is available only in the cloud-based service.

The RemoveDelayHoldApplied switch specifies whether to remove delay holds on email-related data (generated by Outlook or Outlook on the web) from the mailbox. You don't need to specify a value with this switch.

The removal of a hold from a mailbox is temporarily delayed to prevent the accidental purge of content that's no longer affected by the hold. This temporary delay in the removal of the hold is known as a delay hold. To see the hold history on a mailbox, replace `<MailboxIdentity>` with the name, email address, or alias of the mailbox, and run this command: `Export-MailboxDiagnosticLogs -Identity <MailboxIdentity> -ComponentName HoldTracking`.

You can use this switch with the GroupMailbox or InactiveMailbox switch to remove delay holds from group mailboxes or inactive mailboxes.
For more information, see [Managing mailboxes on delay hold](https://learn.microsoft.com/purview/ediscovery-identify-a-hold-on-an-exchange-online-mailbox#managing-mailboxes-on-delay-hold).

```yaml
Type: SwitchParameter
Parameter Sets: RemoveDelayHoldApplied
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveDelayReleaseHoldApplied
This parameter is available only in the cloud-based service.

The RemoveDelayReleaseHoldApplied switch specifies whether to remove delay holds on cloud data generated by non-Exchange apps (such as Teams, Forms, and Viva Engage) from the mailbox. Data generated by a non-Exchange cloud-based app is typically stored in a hidden folder in the mailbox. You don't need to specify a value with this switch.

The removal of a hold from a mailbox is temporarily delayed to prevent the accidental purge of content that's no longer affected by the hold. This temporary delay in the removal of the hold is known as a delay hold. To see the hold history on a mailbox, replace `<MailboxIdentity>` with the name, email address, or alias of the mailbox, and run this command: `Export-MailboxDiagnosticLogs -Identity <MailboxIdentity> -ComponentName SubstrateHoldTracking`.

You can use this switch with the GroupMailbox or InactiveMailbox switch to remove delay holds from group mailboxes or inactive mailboxes.

For more information, see [Managing mailboxes on delay hold](https://learn.microsoft.com/purview/ediscovery-identify-a-hold-on-an-exchange-online-mailbox#managing-mailboxes-on-delay-hold).

```yaml
Type: SwitchParameter
Parameter Sets: RemoveDelayReleaseHoldApplied
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveDisabledArchive
This parameter is available only in the cloud-based service.

The RemoveDisabledArchive switch specifies whether to remove the disabled archive that's associated with the mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: RemoveDisabledArchive
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveMailboxProvisioningConstraint
This parameter is available only in the cloud-based service.

{{ Fill RemoveMailboxProvisioningConstraint Description }}

```yaml
Type: SwitchParameter
Parameter Sets: RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDisabledArchive, ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RemoveDelayReleaseHoldApplied, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveManagedFolderAndPolicy
This parameter is available only in on-premises Exchange.

The RemoveManagedFolderAndPolicy switch specifies whether to remove all MRM policies and attributes from a mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOrphanedHolds
This parameter is available only in the cloud-based service.

The RemoveOrphanedHolds parameter is used to remove the mailbox (typically, an inactive mailbox) from In-Place Holds that no longer exist, but are still applied to the mailbox. You identify the In-Place Hold by using its GUID value. You can specify multiple GUID values separated by commas.

If you use the GUID value of an In-Place Hold that still exists as a value for this parameter, the command will return an error. If that happens, you'll need to remove the mailbox (or inactive mailbox) from the In-Place Hold.

In an Exchange hybrid deployment, In-Place Holds that are created in the on-premises organization can be applied to cloud-based mailboxes. In this scenario, it's possible that the hold object hasn't been synced to the cloud-based organization, and using this parameter will remove the specified hold from the cloud-based mailbox even though the hold may still exist. To prevent this from happening, make sure the hold doesn't exist in the on-premises organization before you use this parameter.

```yaml
Type: String[]
Parameter Sets: RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovePicture
This parameter is available only in on-premises Exchange.

The RemovePicture switch specifies whether to remove the picture from the mailbox. You don't need to specify a value with this switch.

You can add a picture to a mailbox by using the Import-RecipientDataProperty cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSpokenName
This parameter is available only in on-premises Exchange.

The RemoveSpokenName parameter specifies whether to remove the spoken name from the mailbox. You don't need to specify a value with this switch.

You can add a sound file to a mailbox by using the Import-RecipientDataProperty cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSenderAuthenticationEnabled
The RequireSenderAuthenticationEnabled parameter specifies whether to accept messages only from authenticated (internal) senders. Valid values are:

- $true: Messages are accepted only from authenticated (internal) senders. Messages from unauthenticated (external) senders are rejected.
- $false: Messages are accepted from authenticated (internal) and unauthenticated (external) senders.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetPasswordOnNextLogon
This parameter is available only in on-premises Exchange.

The ResetPasswordOnNextLogon parameter specifies whether the user is required to change their password the next time they log on to their mailbox. Valid values are:

- $true: The user is required to change their password the next time they log on to their mailbox.
- $false: The user isn't required to change their password the next time they log on to their mailbox. This is the default value.

In Exchange Online, administrators can require users to reset their password the next time they log on by using the ResetPasswordOnNextLogon parameter on the Set-User cmdlet.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceCapacity
The ResourceCapacity parameter specifies the capacity of the resource mailbox. For example, you can use this parameter to identify the number of seats in a conference room (room mailbox) or in a vehicle (equipment mailbox). A valid value is an integer.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceCustom
The ResourceCustom parameter specifies one or more custom resource properties to add to the resource mailbox. You can use this parameter only on resource mailboxes.

You use the Set-ResourceConfig and Get-ResourceConfig cmdlets to create and view custom resource properties.

After you create custom resource properties, you use this parameter to assign one or more of those properties to a resource mailbox. Properties that begin with the prefix Room/ are available only on room mailboxes, and properties that begin with the prefix Equipment/ are available only on equipment mailboxes. When you specify a property value for this parameter, don't include the prefix.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetainDeletedItemsFor
The RetainDeletedItemsFor parameter specifies the length of time to keep soft-deleted items for the mailbox. Soft-deleted items are items that have been deleted by using any of these methods:

- Deleting items from the Deleted Items folder.
- Selecting the Empty Deleted Items Folder action.
- Deleting items using Shift + Delete.

These actions move the items into the Recoverable Items\\Deletions folder.

Before the deleted item retention period expires, users can recover soft-deleted items in Outlook and Outlook on the web by using the Recover Deleted Items feature. For more information, see [Recoverable Items folder in Exchange Server](https://learn.microsoft.com/Exchange/policy-and-compliance/recoverable-items-folder/recoverable-items-folder).

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 14 days (14.00:00:00). In Exchange Online, you can increase the value to a maximum of 30 days.

In Exchange Online, you use this parameter to configure the deleted item retention on existing mailboxes. Use the Set-MailboxPlan cmdlet to change the RetainDeletedItemsFor value for all new mailboxes that you create in the future.

In on-premises Exchange, when the UseDatabaseQuotaDefaults parameter on the mailbox is set to the value $true (the default value), the value of the this parameter is ignored, and the mailbox uses the DeletedItemRetention value from the mailbox database. To use the RetainDeletedItemsFor parameter on the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetainDeletedItemsUntilBackup
This parameter is available only in on-premises Exchange.

The RetainDeletedItemsUntilBackup parameter specifies whether to keep items in the Recoverable Items\\Deletions folder of the mailbox until the next database backup occurs. Valid values are:

- $true: Deleted items are kept until the next mailbox database backup. This value could effectively override the DeletedItemRetention and RecoverableItemsQuota parameter values.
- $false: This is the default value. Retention of deleted items in mailboxes is controlled by the DeletedItemRetention and RecoverableItemsQuota parameter values.

When the UseDatabaseRetentionDefaults parameter on the mailbox is set to the value $true (the default value), the value of the this parameter is ignored, and the mailbox uses the RetainDeletedItemsUntilBackup parameter value from the mailbox database. To use the RetainDeletedItemsUntilBackup parameter on the mailbox, you need to set the UseDatabaseRetentionDefaults parameter to the value $false.

For more information, see [Recoverable Items folder in Exchange Server](https://learn.microsoft.com/Exchange/policy-and-compliance/recoverable-items-folder/recoverable-items-folder).

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionComment
The RetentionComment parameter specifies a comment that's displayed in Outlook regarding the user's retention hold status.

In on-premises Exchange, you can only use this parameter if the RetentionHoldEnabled parameter is set to $true.

In Exchange Online, this parameter is associated with Litigation Hold (the LitigationHoldEnabled parameter), so you don't need to set the RetentionHoldEnabled parameter to $true when you use this parameter.

This comment should be localized to the user's preferred language. If the comment contains spaces, enclose the comment in quotation marks (").

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

### -RetentionHoldEnabled
The RetentionHoldEnabled parameter specifies whether the mailbox is placed on retention hold. Placing the mailbox on retention hold temporarily suspends the processing of retention policies or managed folder mailbox policies for the mailbox (for example, when the user is on vacation). Valid values are:

- $true: The mailbox is placed on retention hold. Retention policies and managed folder policies are suspended for the mailbox, and purging items from the mailbox isn't possible (even using MFCMapi).
- $false: The retention hold is removed from the mailbox. The mailbox is subject to retention policies and managed folder policies. This is the default value.

To set the start date for retention hold, use the StartDateForRetentionHold parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionPolicy
The RetentionPolicy parameter specifies the retention policy that you want applied to this mailbox. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished Name (DN)
- GUID

Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained.

Use the Get-RetentionPolicy cmdlet to see the available retention policies.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionUrl
The RetentionUrl parameter specifies the URL or an external web page with additional details about the organization's messaging retention policies.

This URL can be used to expose details regarding retention policies in general, which is usually a customized legal or IT website for the company.

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

### -RoleAssignmentPolicy
The RoleAssignmentPolicy parameter specifies the role assignment policy that's assigned to the mailbox. You can use any value that uniquely identifies the role assignment policy. For example:

- Name
- Distinguished name (DN)
- GUID

In Exchange Online, a role assignment policy must be assigned to the mailbox. In on-premises Exchange, to configure the mailbox so there's no role assignment policy assigned, use the value $null.

Use the Get-RoleAssignmentPolicy cmdlet to see the available role assignment policies. For more information, see [Understanding management role assignment policies](https://learn.microsoft.com/exchange/understanding-management-role-assignment-policies-exchange-2013-help).

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoomMailboxPassword
This parameter is functional only in on-premises Exchange.

Use the RoomMailboxPassword parameter to configure the password for the account that's associated with the room mailbox when that account is enabled and able to log in (the EnableRoomMailboxAccount parameter is set to the value $true).

To use this parameter in on-premises Exchange, you need to be a member of one of the following role groups:

- The Organization Management role group via the Mail Recipients and User Options roles.
- The Recipient Management role group via the Mail Recipients role.
- The Help Desk role group via the User Options role.

The Reset Password role also allows you to use this parameter, but it isn't assigned to any role groups by default.

You can use the following methods as a value for this parameter:

- `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.
- Before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable (`$password`) for the value.
- `(Get-Credential).password` to be prompted to enter the password securely when you run this command.

To configure the password for a room mailbox account in Exchange Online, use the PasswordProfile parameter on the [Update-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser) cmdlet in Microsoft Graph PowerShell.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RulesQuota
The RulesQuota parameter specifies the limit for the size of Inbox rules for the mailbox. When you enter a value, qualify the value with one of the following:

A valid value is a number from 32 to 256 kilobytes (32768 to 262144 bytes). When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

In Exchange Online, Exchange 2019, Exchange 2016, and Exchange 2013, the default value is 256 kilobytes (262,144 bytes).

In Exchange 2010, the default value is 64 kilobytes (65,536 bytes).

The quota for Inbox rules applies only to enabled rules. There is no restriction on the number of disabled rules a mailbox can have. However, the total size of rules that are enabled or active can't exceed the value specified for this parameter.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SamAccountName
This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the following characters: !, #, $, %, ^, &, -, \_, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match). The maximum length is 20 characters.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SchedulerAssistant
This parameter is available only in the cloud-based service.

{{ Fill SchedulerAssistant Description }}

```yaml
Type: Boolean
Parameter Sets: ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLDeleteEnabled
This parameter is available only in on-premises Exchange.

The SCLDeleteEnabled parameter specifies whether to silently delete messages that meet or exceed the spam confidence level (SCL) specified by the SCLDeleteThreshold parameter. Valid values are:

- $true: Messages that meet or exceed the SCLDeleteThreshold value are silently deleted without sending a non-delivery report (NDR).
- $false: Messages that meet or exceed the SCLDeleteThreshold value aren't deleted.
- $null (blank): The value isn't configured. This is the default value.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLDeleteThreshold
This parameter is available only in on-premises Exchange.

The SCLDeleteThreshold parameter specifies the SCL delete threshold. When the SCLDeleteEnabled parameter is set to $true, messages with an SCL greater than or equal to the specified value are silently deleted.

A valid value is an integer from 0 through 9. This value should be greater than the other SCL\*Threshold values.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLJunkEnabled
This parameter is available only in on-premises Exchange.

The SCLJunkEnabled parameter specifies whether messages that exceed(not meet) the SCL specified by the SCLJunkThreshold parameter are moved to the Junk Email folder. Valid values are:

- $true: Messages that exceed the SCLJunkThreshold value are moved to the Junk Email folder. Messages that meet the SCLJunkThreshold value aren't moved to the Junk Email folder.
- $false: Messages that meet or exceed the SCLJunkThreshold value aren't moved to the Junk Email folder.
- $null (blank): The value isn't configured. This is the default value.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLJunkThreshold
This parameter is available only in on-premises Exchange.

The SCLJunkThreshold parameter specifies the SCL Junk Email folder threshold. When the SCLJunkEnabled parameter is set to $true, messages with an SCL greater than (not equal to) the specified value are moved to the Junk Email folder.

A valid value is an integer from 0 through 9. This value should be less than the other SCL\*Threshold values.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLQuarantineEnabled
This parameter is available only in on-premises Exchange.

The SCLQuarantineEnabled parameter specifies whether messages that meet or exceed the SCL specified by the SCLQuarantineThreshold parameter are quarantined. If a message is quarantined, it's sent to the quarantine mailbox where administrators can review it. Valid values are:

- $true: Messages that meet or exceed the SCLQuarantineThreshold value are sent to the quarantine mailbox.
- $false: Messages that meet or exceed the SCLQuarantineThreshold value aren't sent to the quarantine mailbox.
- $null (blank): The value isn't configured. This is the default value.

To configure the quarantine mailbox, see [Configure a spam quarantine mailbox](https://learn.microsoft.com/Exchange/antispam-and-antimalware/antispam-protection/configure-quarantine-mailboxes).

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLQuarantineThreshold
This parameter is available only in on-premises Exchange.

The SCLQuarantineThreshold parameter specifies the SCL quarantine threshold. When the SCLQuarantineEnabled parameter is set to $true, messages with an SCL greater than or equal to the specified value are quarantined.

A valid value is an integer from 0 through 9. This value should be less than the SCLRejectThreshold value, but greater than the SCLJunkThreshold value.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLRejectEnabled
This parameter is available only in on-premises Exchange.

The SCLRejectEnabled parameter specifies whether messages that meet or exceed the SCL specified by the SCLRejectThreshold parameter are rejected. Valid values are:

- $true: Messages that meet or exceed the SCLRejectThreshold value are rejected, and an NDR is sent to the sender.
- $false: Messages that meet or exceed the SCLRejectThreshold value aren't rejected.
- $null (blank): The value isn't configured. This is the default value.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLRejectThreshold
This parameter is available only in on-premises Exchange.

The SCLRejectThreshold parameter specifies the SCL reject threshold. When the SCLRejectEnabled parameter is set to $true, messages with an SCL greater than or equal to the specified value are rejected, and an NDR is sent to the sender.

A valid value is an integer from 0 through 9. This value should be less than the SCLDeleteThreshold value, but greater than the SCLQuarantineThreshold value.

```yaml
Type: Int32
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryAddress
This parameter is available only in on-premises Exchange.

The SecondaryAddress parameter specifies the secondary address used by the UM-enabled user.

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

### -SecondaryDialPlan
This parameter is available only in on-premises Exchange.

The SecondaryDialPlan parameter specifies a secondary UM dial plan to use. This parameter is provided to create a secondary proxy address.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendModerationNotifications
The SendModerationNotifications parameter specifies when moderation notification messages are sent. Valid values are:

- Always: Notify all senders when their messages aren't approved. This is the default value.
- Internal: Notify senders in the organization when their messages aren't approved.
- Never: Don't notify anyone when a message isn't approved.

This parameter is only meaningful when moderation is enabled (the ModerationEnabled parameter has the value $true).

```yaml
Type: TransportModerationNotificationFlags
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharingPolicy
The SharingPolicy parameter specifies the sharing policy that's assigned to the mailbox. You can use any value that uniquely identifies the sharing policy. For example:

- Name
- Distinguished name (DN)
- GUID

Use the Get-SharingPolicy cmdlet to see the available sharing policies.

```yaml
Type: SharingPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimpleDisplayName
The SimpleDisplayName parameter is used to display an alternative description of the object when only a limited set of characters is permitted. Valid characters are:

- a - z
- A - Z
- 0 - 9
- space
- `" ' ( ) + , - . / : ?`

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SingleItemRecoveryEnabled
The SingleItemRecoveryEnabled parameter specifies whether to prevent the Recoverable Items folder from being purged. Valid values are:

- $true: Single item recovery is enabled. The Recoverable Items folder can't be purged, and deleted or edited items can't be removed. This is the default value in Exchange Online. For more information, see [Enable or disable single item recovery for a mailbox in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-user-mailboxes/enable-or-disable-single-item-recovery).
- $false: Single item recovery isn't enabled. The Recoverable Items folder can be purged, and deleted or edited items can be removed. This is the default value in Exchange Server. For more information, see [Enable or disable single item recovery for a mailbox](https://learn.microsoft.com/exchange/recipients/user-mailboxes/single-item-recovery).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipDualWrite
This parameter is available only in on-premises Exchange

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDateForRetentionHold
The StartDateForRetentionHold parameter specifies the start date for the retention hold that's placed on the mailbox.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

To use this parameter, you need to set the RetentionHoldEnabled parameter to value $true.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StsRefreshTokensValidFrom
This parameter is reserved for internal Microsoft use.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SystemMessageSizeShutoffQuota
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Int64
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SystemMessageSizeWarningQuota
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Int64
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThrottlingPolicy
This parameter is available only in on-premises Exchange.

The ThrottlingPolicy parameter specifies the throttling policy that's assigned to the mailbox. You can use any value that uniquely identifies the throttling policy. For example:

- Name
- Distinguished name (DN)
- GUID

Use the Get-ThrottlingPolicy cmdlet to see the available throttling policies.

```yaml
Type: ThrottlingPolicyIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter specifies the mailbox type for the mailbox. Valid values are:

- Equipment
- Regular
- Room
- Shared
- Workspace (cloud-only)
- Desk (cloud-only): This value doesn't result in a desk that's available for booking. Instead, create the desk in Places PowerShell using the [New-Place](https://learn.microsoft.com/microsoft-365/places/powershell/new-place) cmdlet, and then link the desk to this mailbox using the [Set-PlaceV3](/microsoft-365/places/powershell/set-placev3) cmdlet.

```yaml
Type: ConvertibleMailboxSubType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDataStorage
This parameter is available only in on-premises Exchange.

The UMDataStorage parameter specifies whether the arbitration mailbox (also called an organization mailbox) is used to store UM call data records and UM custom prompts. This capability can be assigned to only one arbitration mailbox for the organization. You can use this parameter only on an arbitration mailbox.

Valid values are $true or $false.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDtmfMap
This parameter is available only in on-premises Exchange.

The UMDtmfMap parameter specifies the dual-tone multiple-frequency (DTMF) map values for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Typically, these DTMF values are automatically created and updated, but you can use this parameter to make changes manually. This parameter uses the following syntax:

- `emailAddress:<integers>`
- `lastNameFirstName:<integers>`
- `firstNameLastName:<integers>`

To enter values that overwrite all existing entries, use the following syntax: `emailAddress:<integers>,lastNameFirstName:<integers>,firstNameLastName:<integers>`.

If you use this syntax and you omit any of the DTMF map values, those values are removed from the recipient. For example, if you specify only `emailAddress:<integers>`, all existing lastNameFirstName and firstNameLastName values are removed.

To add or remove values without affecting other existing entries, use the following syntax: `@{Add="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"; Remove="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"}`.

If you use this syntax, you don't need to specify all of the DTMF map values, and you can specify multiple DTMF map values. For example, you can use `@{Add="emailAddress:<integers1>","emailAddress:<integers2>}` to add two new values for emailAddress without affecting the existing lastNameFirstName and firstNameLastName values.

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

### -UMGrammar
This parameter is available only in on-premises Exchange.

The UMGrammar parameter specifies whether the arbitration mailbox (also called an organization mailbox) is used for UM directory speech grammar generation for the organization. UM directory speech grammars will be generated and used on the Mailbox server of this arbitration mailbox. UM directory speech grammars are used in speech-enabled directory search features, such as UM auto attendants. You can use this parameter only on an arbitration mailbox.

Valid values are $true or $false.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UpdateEnforcedTimestamp
This parameter is available only in the cloud-based service.

{{ Fill UpdateEnforcedTimestamp Description }}

```yaml
Type: SwitchParameter
Parameter Sets: RecalculateInactiveMailbox, RemoveDelayHoldApplied, RemoveDisabledArchive, ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RemoveDelayReleaseHoldApplied, RemoveOrphanedHolds
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDatabaseQuotaDefaults
The UseDatabaseQuotaDefaults parameter specifies whether applicable quotas for the mailbox are determined by the quota values on the mailbox or the corresponding quota values on the mailbox database (not all mailbox quotas are configurable on the mailbox database). Valid values are:

- $true: The mailbox uses the applicable quota values that are configured on the mailbox database. Any corresponding quotas that are configured on the mailbox are ignored. In on-premises Exchange, this is the default value.
- $false: The mailbox uses its own values for the applicable quotas. Any corresponding quotas that are configured on the mailbox database are ignored. In Exchange Online, this is the default value.

The following quotas are affected by this parameter:

- CalendarLoggingQuota
- IssueWarningQuota
- ProhibitSendQuota
- ProhibitSendReceiveQuota
- RecoverableItemsQuota
- RecoverableItemsWarningQuota

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDatabaseRetentionDefaults
This parameter is functional only in on-premises Exchange.

The UseDatabaseRetentionDefaults parameter specifies whether the retention settings for items in the Recoverable Items folder in the mailbox are determined by the settings on the mailbox or the corresponding settings on the mailbox database. Valid values are:

- $true: The mailbox uses the applicable retention settings that are configured on the mailbox database. Any corresponding settings that are configured on the mailbox are ignored. This is the default value.
- $false: The mailbox uses its own values for the applicable retention settings. Any corresponding settings that are configured on the mailbox database are ignored.

The following retention settings are affected by this parameter:

- DeletedItemRetention
- RetainDeletedItemsUntilBackup

**Note**: If you set the RetainDeletedItemsUntilBackup parameter on the mailbox database to the value $true when the value of the UseDatabaseRetentionDefaults parameter on a mailbox is also $true (the default value), the value of the UseDatabaseRetentionDefaults property in the output of the Get-Mailbox cmdlet will erroneously appear as False. To verify the value of the UseDatabaseRetentionDefaults property on the mailbox, do the following steps in the Exchange Management Shell:

- Run the following command: `Import-Module ActiveDirectory`.
- Replace \<Alias\> with the Alias value of the mailbox, and run the following command: `Get-ADUser <Alias> -Properties mDBUseDefaults | Format-List mDBUseDefaults`.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserCertificate
The UserCertificate parameter specifies the digital certificate used to sign a user's email messages.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
This parameter is available only in on-premises Exchange.

The UserPrincipalName parameter specifies the logon name for the user account. The UPN uses an email address format: `username@domain`. Typically, the domain value is the domain where the user account resides.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSMimeCertificate
The UserSMimeCertificate parameter specifies the S/MIME certificate that's used to sign a user's email messages.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowsEmailAddress
The WindowsEmailAddress parameter specifies the Windows email address for this recipient. This is a common Active Directory attribute that's present in all environments, including environments without Exchange. Using the WindowsEmailAddress parameter on a recipient has one of the following results:

- In environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is set to the value True for the recipient), the WindowsEmailAddress parameter has no effect on the WindowsEmailAddress property or the primary email address value.
- In environments where the recipient isn't subject to email address policies (the EmailAddressPolicyEnabled property is set to the value False for the recipient), the WindowsEmailAddress parameter updates the WindowsEmailAddress property and the primary email address to the same value.

The WindowsEmailAddress property is visible for the recipient in Active Directory Users and Computers in the E-mail attribute. The attribute common name is E-mail-Addresses, and the Ldap-Display-Name is mail. If you modify this attribute in Active Directory, the recipient's primary email address is not updated to the same value.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
