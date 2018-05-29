---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-Mailbox
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Set-Mailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-Mailbox cmdlet to modify the settings of existing mailboxes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Set-Mailbox [-Identity] <MailboxIdParameter> [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-AntispamBypassEnabled <$true | $false>] [-ApplyMandatoryProperties] [-Arbitration]
 [-ArbitrationMailbox <MailboxIdParameter>] [-ArchiveDatabase <DatabaseIdParameter>]
 [-ArchiveDomain <SmtpDomain>] [-ArchiveName <MultiValuedProperty>] [-ArchiveQuota <Unlimited>]
 [-ArchiveStatus <None | Active>] [-ArchiveWarningQuota <Unlimited>] [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>] [-AuditEnabled <$true | $false>] [-AuditLogAgeLimit <EnhancedTimeSpan>]
 [-AuditOwner <MultiValuedProperty>] [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-CalendarRepairDisabled <$true | $false>] [-CalendarVersionStoreDisabled <$true | $false>] [-Confirm]
 [-CreateDTMFMap <$true | $false>] [-CustomAttribute1 <String>] [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>] [-CustomAttribute12 <String>] [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>] [-CustomAttribute15 <String>] [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>] [-CustomAttribute4 <String>] [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>] [-CustomAttribute7 <String>] [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>] [-Database <DatabaseIdParameter>] [-DeliverToMailboxAndForward <$true | $false>]
 [-DisplayName <String>] [-DomainController <Fqdn>] [-DowngradeHighPriorityMessagesEnabled <$true | $false>]
 [-EmailAddresses <ProxyAddressCollection>] [-EmailAddressPolicyEnabled <$true | $false>]
 [-EndDateForRetentionHold <DateTime>] [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>] [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>] [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <InternalOnly | External>] [-FederatedIdentity <String>] [-Force]
 [-ForwardingAddress <RecipientIdParameter>] [-ForwardingSmtpAddress <ProxyAddress>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>] [-HiddenFromAddressListsEnabled <$true | $false>]
 [-IgnoreDefaultScope] [-ImmutableId <String>] [-IssueWarningQuota <Unlimited>]
 [-Languages <MultiValuedProperty>] [-LinkedCredential <PSCredential>] [-LinkedDomainController <String>]
 [-LinkedMasterAccount <UserIdParameter>] [-LitigationHoldDate <DateTime>]
 [-LitigationHoldEnabled <$true | $false>] [-LitigationHoldOwner <String>]
 [-MailboxPlan <MailboxPlanIdParameter>] [-MailTip <String>] [-MailTipTranslations <MultiValuedProperty>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed]
 [-MaxBlockedSenders <Int32>] [-MaxReceiveSize <Unlimited>] [-MaxSafeSenders <Int32>]
 [-MaxSendSize <Unlimited>] [-MessageTrackingReadStatusEnabled <$true | $false>]
 [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>] [-Name <String>] [-Office <String>]
 [-OfflineAddressBook <OfflineAddressBookIdParameter>] [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>] [-ProhibitSendQuota <Unlimited>] [-ProhibitSendReceiveQuota <Unlimited>]
 [-RecipientLimits <Unlimited>] [-RecoverableItemsQuota <Unlimited>] 
 [-RecoverableItemsWarningQuota <Unlimited>] [-RejectMessagesFrom <MultiValuedProperty>] [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoteRecipientType <None | ProvisionMailbox | ProvisionArchive | Migrated | DeprovisionMailbox | DeprovisionArchive | RoomMailbox | EquipmentMailbox | SharedMailbox>]
 [-RemoveManagedFolderAndPolicy] [-RemovePicture] [-RemoveSpokenName]
 [-RequireSenderAuthenticationEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-ResourceCapacity <Int32>] [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>] [-RetainDeletedItemsUntilBackup <$true | $false>]
 [-RetentionComment <String>] [-RetentionHoldEnabled <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-RulesQuota <ByteQuantifiedSize>]
 [-SamAccountName <String>] [-SCLDeleteEnabled <$true | $false>] [-SCLDeleteThreshold <Int32>]
 [-SCLJunkEnabled <$true | $false>] [-SCLJunkThreshold <Int32>] [-SCLQuarantineEnabled <$true | $false>]
 [-SCLQuarantineThreshold <Int32>] [-SCLRejectEnabled <$true | $false>] [-SCLRejectThreshold <Int32>]
 [-SecondaryAddress <String>] [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-SimpleDisplayName <String>] [-SingleItemRecoveryEnabled <$true | $false>]
 [-StartDateForRetentionHold <DateTime>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-Type <Regular | Room | Equipment | Shared>] [-UMDtmfMap <MultiValuedProperty>]
 [-UseDatabaseQuotaDefaults <$true | $false>] [-UseDatabaseRetentionDefaults <$true | $false>]
 [-UserCertificate <MultiValuedProperty>] [-UserPrincipalName <String>]
 [-UserSMimeCertificate <MultiValuedProperty>] [-WhatIf] [-WindowsEmailAddress <SmtpAddress>]
 [-WindowsLiveID <SmtpAddress>] [-AuditLog] [-CalendarLoggingQuota <Unlimited>]
 [-ClientExtensions <$true | $false>] [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DumpsterMessagesPerFolderCountReceiveQuota <Int32>] [-DumpsterMessagesPerFolderCountWarningQuota <Int32>]
 [-EnableRoomMailboxAccount <$true | $false>] [-ExtendedPropertiesCountQuota <Int32>]
 [-FolderHierarchyChildrenCountReceiveQuota <Int32>] [-FolderHierarchyChildrenCountWarningQuota <Int32>]
 [-FolderHierarchyDepthReceiveQuota <Int32>] [-FolderHierarchyDepthWarningQuota <Int32>]
 [-FoldersCountReceiveQuota <Int32>] [-FoldersCountWarningQuota <Int32>] [-GMGen <$true | $false>]
 [-ImListMigrationCompleted <$true | $false>] [-IsExcludedFromServingHierarchy <$true | $false>]
 [-IsHierarchyReady <$true | $false>] [-JournalArchiveAddress <SmtpAddress>]
 [-LitigationHoldDuration <Unlimited>] [-MailboxMessagesPerFolderCountReceiveQuota <Int32>]
 [-MailboxMessagesPerFolderCountWarningQuota <Int32>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-Management <$true | $false>]
 [-MessageCopyForSendOnBehalfEnabled <$true | $false>] [-MessageCopyForSentAsEnabled <$true | $false>]
 [-MessageTracking <$true | $false>] [-MicrosoftOnlineServicesID <SmtpAddress>] [-Migration <$true | $false>]
 [-NewPassword <SecureString>] [-OABGen <$true | $false>] [-OldPassword <SecureString>]
 [-OMEncryption <$true | $false>] [-PstProvider <$true | $false>] [-PublicFolder]
 [-QueryBaseDN <OrganizationalUnitIdParameter>] [-RoomMailboxPassword <SecureString>]
 [-SkipMailboxProvisioningConstraintValidation] [-UMDataStorage <$true | $false>] [-UMGrammar <$true | $false>]
 [<CommonParameters>]
```

### Set4
```
Set-Mailbox [-Identity] <MailboxIdParameter> [-RecalculateInactiveMailbox]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>] [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>] [-AccountDisabled <$true | $false>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-AntispamBypassEnabled <$true | $false>] [-ApplyMandatoryProperties] [-Arbitration]
 [-ArbitrationMailbox <MailboxIdParameter>] [-ArchiveDatabase <DatabaseIdParameter>]
 [-ArchiveDomain <SmtpDomain>] [-ArchiveName <MultiValuedProperty>] [-ArchiveQuota <Unlimited>]
 [-ArchiveStatus <None | Active>] [-ArchiveWarningQuota <Unlimited>]
 [-AttributesToClear <SetMailbox+ClearableADAttributes[]>] [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>] [-AuditEnabled <$true | $false>] [-AuditLog]
 [-AuditLogAgeLimit <EnhancedTimeSpan>] [-AuditOwner <MultiValuedProperty>]
 [-AuditStorageEndTimeUTC <DateTime>] [-AuditStorageStartTimeUTC <DateTime>]
 [-AuditStorageState <None | Online | Offline>] [-AuxAuditLog]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>] [-CalendarLoggingQuota <Unlimited>]
 [-CalendarRepairDisabled <$true | $false>] [-CalendarVersionStoreDisabled <$true | $false>]
 [-ClientExtensions <$true | $false>] [-Confirm] [-CreateDTMFMap <$true | $false>] [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>] [-CustomAttribute11 <String>] [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>] [-CustomAttribute14 <String>] [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>] [-CustomAttribute3 <String>] [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>] [-CustomAttribute6 <String>] [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>] [-CustomAttribute9 <String>] [-Database <DatabaseIdParameter>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>] [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <$true | $false>] [-DisplayName <String>] [-DomainController <Fqdn>]
 [-DowngradeHighPriorityMessagesEnabled <$true | $false>] [-DumpsterMessagesPerFolderCountReceiveQuota <Int32>]
 [-DumpsterMessagesPerFolderCountWarningQuota <Int32>] [-ElcProcessingDisabled <$true | $false>]
 [-EmailAddresses <ProxyAddressCollection>] [-EmailAddressPolicyEnabled <$true | $false>]
 [-EnableRoomMailboxAccount <$true | $false>] [-EndDateForRetentionHold <DateTime>]
 [-ExtendedPropertiesCountQuota <Int32>] [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>] [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>] [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <InternalOnly | External>] [-FederatedIdentity <String>]
 [-FolderHierarchyChildrenCountReceiveQuota <Int32>] [-FolderHierarchyChildrenCountWarningQuota <Int32>]
 [-FolderHierarchyDepthReceiveQuota <Int32>] [-FolderHierarchyDepthWarningQuota <Int32>]
 [-FoldersCountReceiveQuota <Int32>] [-FoldersCountWarningQuota <Int32>] [-Force]
 [-ForwardingAddress <RecipientIdParameter>] [-ForwardingSmtpAddress <ProxyAddress>] [-GMGen <$true | $false>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>] [-HiddenFromAddressListsEnabled <$true | $false>]
 [-IgnoreDefaultScope] [-ImListMigrationCompleted <$true | $false>] [-ImmutableId <String>] [-InactiveMailbox]
 [-IsExcludedFromServingHierarchy <$true | $false>] [-IsHierarchyReady <$true | $false>]
 [-IsHierarchySyncEnabled <$true | $false>] [-IssueWarningQuota <Unlimited>]
 [-JournalArchiveAddress <SmtpAddress>] [-Languages <MultiValuedProperty>] [-LinkedCredential <PSCredential>]
 [-LinkedDomainController <String>] [-LinkedMasterAccount <UserIdParameter>] [-LitigationHoldDate <DateTime>]
 [-LitigationHoldDuration <Unlimited>] [-LitigationHoldEnabled <$true | $false>]
 [-LitigationHoldOwner <String>] [-MailboxMessagesPerFolderCountReceiveQuota <Int32>]
 [-MailboxMessagesPerFolderCountWarningQuota <Int32>] [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-MailboxRegion <String>] [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>] [-Management <$true | $false>] [-MaxBlockedSenders <Int32>]
 [-MaxReceiveSize <Unlimited>] [-MaxSafeSenders <Int32>] [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <$true | $false>] [-MessageCopyForSentAsEnabled <$true | $false>]
 [-MessageTracking <$true | $false>] [-MessageTrackingReadStatusEnabled <$true | $false>]
 [-MicrosoftOnlineServicesID <SmtpAddress>] [-Migration <$true | $false>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Name <String>] [-NewPassword <SecureString>]
 [-OABGen <$true | $false>] [-OABReplica <$true | $false>] [-Office <String>]
 [-OfflineAddressBook <OfflineAddressBookIdParameter>] [-OldPassword <SecureString>]
 [-OMEncryption <$true | $false>] [-OMEncryptionStore <$true | $false>] [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>] [-ProhibitSendQuota <Unlimited>] [-ProhibitSendReceiveQuota <Unlimited>]
 [-ProvisionedForOfficeGraph] [-PstProvider <$true | $false>] [-PublicFolder]
 [-QueryBaseDN <OrganizationalUnitIdParameter>] [-RecipientLimits <Unlimited>]
 [-RecoverableItemsQuota <Unlimited>] [-RecoverableItemsWarningQuota <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>] [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoteRecipientType <None | ProvisionMailbox | ProvisionArchive | Migrated | DeprovisionMailbox | DeprovisionArchive | RoomMailbox | EquipmentMailbox | SharedMailbox | TeamMailbox>]
 [-RemoveManagedFolderAndPolicy] [-RemovePicture] [-RemoveSpokenName]
 [-RequireSenderAuthenticationEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-ResourceCapacity <Int32>] [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>] [-RetainDeletedItemsUntilBackup <$true | $false>]
 [-RetentionComment <String>] [-RetentionHoldEnabled <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>] [-SamAccountName <String>] [-SCLDeleteEnabled <$true | $false>]
 [-SCLDeleteThreshold <Int32>] [-SCLJunkEnabled <$true | $false>] [-SCLJunkThreshold <Int32>]
 [-SCLQuarantineEnabled <$true | $false>] [-SCLQuarantineThreshold <Int32>]
 [-SCLRejectEnabled <$true | $false>] [-SCLRejectThreshold <Int32>] [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-SiloName <String>] [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <$true | $false>] [-SkipDualWrite] [-SkipMailboxProvisioningConstraintValidation]
 [-StartDateForRetentionHold <DateTime>] [-StsRefreshTokensValidFrom <DateTime>]
 [-SystemMessageSizeShutoffQuota <Int64>] [-SystemMessageSizeWarningQuota <Int64>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-Type <Regular | Room | Equipment | Shared>]
 [-UMDataStorage <$true | $false>] [-UMDtmfMap <MultiValuedProperty>] [-UMGrammar <$true | $false>]
 [-UseDatabaseQuotaDefaults <$true | $false>] [-UseDatabaseRetentionDefaults <$true | $false>]
 [-UserCertificate <MultiValuedProperty>] [-UserPrincipalName <String>]
 [-UserSMimeCertificate <MultiValuedProperty>] [-WhatIf] [-WindowsEmailAddress <SmtpAddress>]
 [-WindowsLiveID <SmtpAddress>] [<CommonParameters>]
```

### Set5
```
Set-Mailbox [-Identity] <MailboxIdParameter> [-RemoveDelayHoldApplied]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>] [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>] [-AccountDisabled <$true | $false>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-AntispamBypassEnabled <$true | $false>] [-ApplyMandatoryProperties] [-Arbitration]
 [-ArbitrationMailbox <MailboxIdParameter>] [-ArchiveDatabase <DatabaseIdParameter>]
 [-ArchiveDomain <SmtpDomain>] [-ArchiveName <MultiValuedProperty>] [-ArchiveQuota <Unlimited>]
 [-ArchiveStatus <None | Active>] [-ArchiveWarningQuota <Unlimited>]
 [-AttributesToClear <SetMailbox+ClearableADAttributes[]>] [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>] [-AuditEnabled <$true | $false>] [-AuditLog]
 [-AuditLogAgeLimit <EnhancedTimeSpan>] [-AuditOwner <MultiValuedProperty>]
 [-AuditStorageEndTimeUTC <DateTime>] [-AuditStorageStartTimeUTC <DateTime>]
 [-AuditStorageState <None | Online | Offline>] [-AuxAuditLog]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>] [-CalendarLoggingQuota <Unlimited>]
 [-CalendarRepairDisabled <$true | $false>] [-CalendarVersionStoreDisabled <$true | $false>]
 [-ClientExtensions <$true | $false>] [-Confirm] [-CreateDTMFMap <$true | $false>] [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>] [-CustomAttribute11 <String>] [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>] [-CustomAttribute14 <String>] [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>] [-CustomAttribute3 <String>] [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>] [-CustomAttribute6 <String>] [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>] [-CustomAttribute9 <String>] [-Database <DatabaseIdParameter>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>] [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <$true | $false>] [-DisplayName <String>] [-DomainController <Fqdn>]
 [-DowngradeHighPriorityMessagesEnabled <$true | $false>] [-DumpsterMessagesPerFolderCountReceiveQuota <Int32>]
 [-DumpsterMessagesPerFolderCountWarningQuota <Int32>] [-ElcProcessingDisabled <$true | $false>]
 [-EmailAddresses <ProxyAddressCollection>] [-EmailAddressPolicyEnabled <$true | $false>]
 [-EnableRoomMailboxAccount <$true | $false>] [-EndDateForRetentionHold <DateTime>]
 [-ExtendedPropertiesCountQuota <Int32>] [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>] [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>] [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <InternalOnly | External>] [-FederatedIdentity <String>]
 [-FolderHierarchyChildrenCountReceiveQuota <Int32>] [-FolderHierarchyChildrenCountWarningQuota <Int32>]
 [-FolderHierarchyDepthReceiveQuota <Int32>] [-FolderHierarchyDepthWarningQuota <Int32>]
 [-FoldersCountReceiveQuota <Int32>] [-FoldersCountWarningQuota <Int32>] [-Force]
 [-ForwardingAddress <RecipientIdParameter>] [-ForwardingSmtpAddress <ProxyAddress>] [-GMGen <$true | $false>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>] [-HiddenFromAddressListsEnabled <$true | $false>]
 [-IgnoreDefaultScope] [-ImListMigrationCompleted <$true | $false>] [-ImmutableId <String>] [-InactiveMailbox]
 [-IsExcludedFromServingHierarchy <$true | $false>] [-IsHierarchyReady <$true | $false>]
 [-IsHierarchySyncEnabled <$true | $false>] [-IssueWarningQuota <Unlimited>]
 [-JournalArchiveAddress <SmtpAddress>] [-Languages <MultiValuedProperty>] [-LinkedCredential <PSCredential>]
 [-LinkedDomainController <String>] [-LinkedMasterAccount <UserIdParameter>] [-LitigationHoldDate <DateTime>]
 [-LitigationHoldDuration <Unlimited>] [-LitigationHoldEnabled <$true | $false>]
 [-LitigationHoldOwner <String>] [-MailboxMessagesPerFolderCountReceiveQuota <Int32>]
 [-MailboxMessagesPerFolderCountWarningQuota <Int32>] [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-MailboxRegion <String>] [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>] [-Management <$true | $false>] [-MaxBlockedSenders <Int32>]
 [-MaxReceiveSize <Unlimited>] [-MaxSafeSenders <Int32>] [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <$true | $false>] [-MessageCopyForSentAsEnabled <$true | $false>]
 [-MessageTracking <$true | $false>] [-MessageTrackingReadStatusEnabled <$true | $false>]
 [-MicrosoftOnlineServicesID <SmtpAddress>] [-Migration <$true | $false>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Name <String>] [-NewPassword <SecureString>]
 [-OABGen <$true | $false>] [-OABReplica <$true | $false>] [-Office <String>]
 [-OfflineAddressBook <OfflineAddressBookIdParameter>] [-OldPassword <SecureString>]
 [-OMEncryption <$true | $false>] [-OMEncryptionStore <$true | $false>] [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>] [-ProhibitSendQuota <Unlimited>] [-ProhibitSendReceiveQuota <Unlimited>]
 [-ProvisionedForOfficeGraph] [-PstProvider <$true | $false>] [-PublicFolder]
 [-QueryBaseDN <OrganizationalUnitIdParameter>] [-RecipientLimits <Unlimited>]
 [-RecoverableItemsQuota <Unlimited>] [-RecoverableItemsWarningQuota <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>] [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoteRecipientType <None | ProvisionMailbox | ProvisionArchive | Migrated | DeprovisionMailbox | DeprovisionArchive | RoomMailbox | EquipmentMailbox | SharedMailbox | TeamMailbox>]
 [-RemoveManagedFolderAndPolicy] [-RemovePicture] [-RemoveSpokenName]
 [-RequireSenderAuthenticationEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-ResourceCapacity <Int32>] [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>] [-RetainDeletedItemsUntilBackup <$true | $false>]
 [-RetentionComment <String>] [-RetentionHoldEnabled <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>] [-SamAccountName <String>] [-SCLDeleteEnabled <$true | $false>]
 [-SCLDeleteThreshold <Int32>] [-SCLJunkEnabled <$true | $false>] [-SCLJunkThreshold <Int32>]
 [-SCLQuarantineEnabled <$true | $false>] [-SCLQuarantineThreshold <Int32>]
 [-SCLRejectEnabled <$true | $false>] [-SCLRejectThreshold <Int32>] [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-SiloName <String>] [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <$true | $false>] [-SkipDualWrite] [-SkipMailboxProvisioningConstraintValidation]
 [-StartDateForRetentionHold <DateTime>] [-StsRefreshTokensValidFrom <DateTime>]
 [-SystemMessageSizeShutoffQuota <Int64>] [-SystemMessageSizeWarningQuota <Int64>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-Type <Regular | Room | Equipment | Shared>]
 [-UMDataStorage <$true | $false>] [-UMDtmfMap <MultiValuedProperty>] [-UMGrammar <$true | $false>]
 [-UseDatabaseQuotaDefaults <$true | $false>] [-UseDatabaseRetentionDefaults <$true | $false>]
 [-UserCertificate <MultiValuedProperty>] [-UserPrincipalName <String>]
 [-UserSMimeCertificate <MultiValuedProperty>] [-WhatIf] [-WindowsEmailAddress <SmtpAddress>]
 [-WindowsLiveID <SmtpAddress>] [<CommonParameters>]
```

### Set6
```
Set-Mailbox [-Identity] <MailboxIdParameter> [-ExcludeFromAllOrgHolds]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>] [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>] [-AccountDisabled <$true | $false>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-AntispamBypassEnabled <$true | $false>] [-ApplyMandatoryProperties] [-Arbitration]
 [-ArbitrationMailbox <MailboxIdParameter>] [-ArchiveDatabase <DatabaseIdParameter>]
 [-ArchiveDomain <SmtpDomain>] [-ArchiveName <MultiValuedProperty>] [-ArchiveQuota <Unlimited>]
 [-ArchiveStatus <None | Active>] [-ArchiveWarningQuota <Unlimited>]
 [-AttributesToClear <SetMailbox+ClearableADAttributes[]>] [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>] [-AuditEnabled <$true | $false>] [-AuditLog]
 [-AuditLogAgeLimit <EnhancedTimeSpan>] [-AuditOwner <MultiValuedProperty>]
 [-AuditStorageEndTimeUTC <DateTime>] [-AuditStorageStartTimeUTC <DateTime>]
 [-AuditStorageState <None | Online | Offline>] [-AuxAuditLog]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>] [-CalendarLoggingQuota <Unlimited>]
 [-CalendarRepairDisabled <$true | $false>] [-CalendarVersionStoreDisabled <$true | $false>]
 [-ClientExtensions <$true | $false>] [-Confirm] [-CreateDTMFMap <$true | $false>] [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>] [-CustomAttribute11 <String>] [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>] [-CustomAttribute14 <String>] [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>] [-CustomAttribute3 <String>] [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>] [-CustomAttribute6 <String>] [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>] [-CustomAttribute9 <String>] [-Database <DatabaseIdParameter>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>] [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <$true | $false>] [-DisplayName <String>] [-DomainController <Fqdn>]
 [-DowngradeHighPriorityMessagesEnabled <$true | $false>] [-DumpsterMessagesPerFolderCountReceiveQuota <Int32>]
 [-DumpsterMessagesPerFolderCountWarningQuota <Int32>] [-ElcProcessingDisabled <$true | $false>]
 [-EmailAddresses <ProxyAddressCollection>] [-EmailAddressPolicyEnabled <$true | $false>]
 [-EnableRoomMailboxAccount <$true | $false>] [-EndDateForRetentionHold <DateTime>]
 [-ExtendedPropertiesCountQuota <Int32>] [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>] [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>] [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <InternalOnly | External>] [-FederatedIdentity <String>]
 [-FolderHierarchyChildrenCountReceiveQuota <Int32>] [-FolderHierarchyChildrenCountWarningQuota <Int32>]
 [-FolderHierarchyDepthReceiveQuota <Int32>] [-FolderHierarchyDepthWarningQuota <Int32>]
 [-FoldersCountReceiveQuota <Int32>] [-FoldersCountWarningQuota <Int32>] [-Force]
 [-ForwardingAddress <RecipientIdParameter>] [-ForwardingSmtpAddress <ProxyAddress>] [-GMGen <$true | $false>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>] [-HiddenFromAddressListsEnabled <$true | $false>]
 [-IgnoreDefaultScope] [-ImListMigrationCompleted <$true | $false>] [-ImmutableId <String>] [-InactiveMailbox]
 [-IsExcludedFromServingHierarchy <$true | $false>] [-IsHierarchyReady <$true | $false>]
 [-IsHierarchySyncEnabled <$true | $false>] [-IssueWarningQuota <Unlimited>]
 [-JournalArchiveAddress <SmtpAddress>] [-Languages <MultiValuedProperty>] [-LinkedCredential <PSCredential>]
 [-LinkedDomainController <String>] [-LinkedMasterAccount <UserIdParameter>] [-LitigationHoldDate <DateTime>]
 [-LitigationHoldDuration <Unlimited>] [-LitigationHoldEnabled <$true | $false>]
 [-LitigationHoldOwner <String>] [-MailboxMessagesPerFolderCountReceiveQuota <Int32>]
 [-MailboxMessagesPerFolderCountWarningQuota <Int32>] [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-MailboxRegion <String>] [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>] [-Management <$true | $false>] [-MaxBlockedSenders <Int32>]
 [-MaxReceiveSize <Unlimited>] [-MaxSafeSenders <Int32>] [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <$true | $false>] [-MessageCopyForSentAsEnabled <$true | $false>]
 [-MessageTracking <$true | $false>] [-MessageTrackingReadStatusEnabled <$true | $false>]
 [-MicrosoftOnlineServicesID <SmtpAddress>] [-Migration <$true | $false>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Name <String>] [-NewPassword <SecureString>]
 [-OABGen <$true | $false>] [-OABReplica <$true | $false>] [-Office <String>]
 [-OfflineAddressBook <OfflineAddressBookIdParameter>] [-OldPassword <SecureString>]
 [-OMEncryption <$true | $false>] [-OMEncryptionStore <$true | $false>] [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>] [-ProhibitSendQuota <Unlimited>] [-ProhibitSendReceiveQuota <Unlimited>]
 [-ProvisionedForOfficeGraph] [-PstProvider <$true | $false>] [-PublicFolder]
 [-QueryBaseDN <OrganizationalUnitIdParameter>] [-RecipientLimits <Unlimited>]
 [-RecoverableItemsQuota <Unlimited>] [-RecoverableItemsWarningQuota <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>] [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoteRecipientType <None | ProvisionMailbox | ProvisionArchive | Migrated | DeprovisionMailbox | DeprovisionArchive | RoomMailbox | EquipmentMailbox | SharedMailbox | TeamMailbox>]
 [-RemoveManagedFolderAndPolicy] [-RemovePicture] [-RemoveSpokenName]
 [-RequireSenderAuthenticationEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-ResourceCapacity <Int32>] [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>] [-RetainDeletedItemsUntilBackup <$true | $false>]
 [-RetentionComment <String>] [-RetentionHoldEnabled <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>] [-SamAccountName <String>] [-SCLDeleteEnabled <$true | $false>]
 [-SCLDeleteThreshold <Int32>] [-SCLJunkEnabled <$true | $false>] [-SCLJunkThreshold <Int32>]
 [-SCLQuarantineEnabled <$true | $false>] [-SCLQuarantineThreshold <Int32>]
 [-SCLRejectEnabled <$true | $false>] [-SCLRejectThreshold <Int32>] [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-SiloName <String>] [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <$true | $false>] [-SkipDualWrite] [-SkipMailboxProvisioningConstraintValidation]
 [-StartDateForRetentionHold <DateTime>] [-StsRefreshTokensValidFrom <DateTime>]
 [-SystemMessageSizeShutoffQuota <Int64>] [-SystemMessageSizeWarningQuota <Int64>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-Type <Regular | Room | Equipment | Shared>]
 [-UMDataStorage <$true | $false>] [-UMDtmfMap <MultiValuedProperty>] [-UMGrammar <$true | $false>]
 [-UseDatabaseQuotaDefaults <$true | $false>] [-UseDatabaseRetentionDefaults <$true | $false>]
 [-UserCertificate <MultiValuedProperty>] [-UserPrincipalName <String>]
 [-UserSMimeCertificate <MultiValuedProperty>] [-WhatIf] [-WindowsEmailAddress <SmtpAddress>]
 [-WindowsLiveID <SmtpAddress>] [<CommonParameters>]
```

### Set7
```
Set-Mailbox [-Identity] <MailboxIdParameter> [-ExcludeFromOrgHolds <String>]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>] [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>] [-AccountDisabled <$true | $false>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-AntispamBypassEnabled <$true | $false>] [-ApplyMandatoryProperties] [-Arbitration]
 [-ArbitrationMailbox <MailboxIdParameter>] [-ArchiveDatabase <DatabaseIdParameter>]
 [-ArchiveDomain <SmtpDomain>] [-ArchiveName <MultiValuedProperty>] [-ArchiveQuota <Unlimited>]
 [-ArchiveStatus <None | Active>] [-ArchiveWarningQuota <Unlimited>]
 [-AttributesToClear <SetMailbox+ClearableADAttributes[]>] [-AuditAdmin <MultiValuedProperty>]
 [-AuditDelegate <MultiValuedProperty>] [-AuditEnabled <$true | $false>] [-AuditLog]
 [-AuditLogAgeLimit <EnhancedTimeSpan>] [-AuditOwner <MultiValuedProperty>]
 [-AuditStorageEndTimeUTC <DateTime>] [-AuditStorageStartTimeUTC <DateTime>]
 [-AuditStorageState <None | Online | Offline>] [-AuxAuditLog]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>] [-CalendarLoggingQuota <Unlimited>]
 [-CalendarRepairDisabled <$true | $false>] [-CalendarVersionStoreDisabled <$true | $false>]
 [-ClientExtensions <$true | $false>] [-Confirm] [-CreateDTMFMap <$true | $false>] [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>] [-CustomAttribute11 <String>] [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>] [-CustomAttribute14 <String>] [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>] [-CustomAttribute3 <String>] [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>] [-CustomAttribute6 <String>] [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>] [-CustomAttribute9 <String>] [-Database <DatabaseIdParameter>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>] [-DefaultPublicFolderMailbox <RecipientIdParameter>]
 [-DeliverToMailboxAndForward <$true | $false>] [-DisplayName <String>] [-DomainController <Fqdn>]
 [-DowngradeHighPriorityMessagesEnabled <$true | $false>] [-DumpsterMessagesPerFolderCountReceiveQuota <Int32>]
 [-DumpsterMessagesPerFolderCountWarningQuota <Int32>] [-ElcProcessingDisabled <$true | $false>]
 [-EmailAddresses <ProxyAddressCollection>] [-EmailAddressPolicyEnabled <$true | $false>]
 [-EnableRoomMailboxAccount <$true | $false>] [-EndDateForRetentionHold <DateTime>]
 [-ExtendedPropertiesCountQuota <Int32>] [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>] [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>] [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalOofOptions <InternalOnly | External>] [-FederatedIdentity <String>]
 [-FolderHierarchyChildrenCountReceiveQuota <Int32>] [-FolderHierarchyChildrenCountWarningQuota <Int32>]
 [-FolderHierarchyDepthReceiveQuota <Int32>] [-FolderHierarchyDepthWarningQuota <Int32>]
 [-FoldersCountReceiveQuota <Int32>] [-FoldersCountWarningQuota <Int32>] [-Force]
 [-ForwardingAddress <RecipientIdParameter>] [-ForwardingSmtpAddress <ProxyAddress>] [-GMGen <$true | $false>]
 [-GrantSendOnBehalfTo <MultiValuedProperty>] [-HiddenFromAddressListsEnabled <$true | $false>]
 [-IgnoreDefaultScope] [-ImListMigrationCompleted <$true | $false>] [-ImmutableId <String>] [-InactiveMailbox]
 [-IsExcludedFromServingHierarchy <$true | $false>] [-IsHierarchyReady <$true | $false>]
 [-IsHierarchySyncEnabled <$true | $false>] [-IssueWarningQuota <Unlimited>]
 [-JournalArchiveAddress <SmtpAddress>] [-Languages <MultiValuedProperty>] [-LinkedCredential <PSCredential>]
 [-LinkedDomainController <String>] [-LinkedMasterAccount <UserIdParameter>] [-LitigationHoldDate <DateTime>]
 [-LitigationHoldDuration <Unlimited>] [-LitigationHoldEnabled <$true | $false>]
 [-LitigationHoldOwner <String>] [-MailboxMessagesPerFolderCountReceiveQuota <Int32>]
 [-MailboxMessagesPerFolderCountWarningQuota <Int32>] [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-MailboxRegion <String>] [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>] [-Management <$true | $false>] [-MaxBlockedSenders <Int32>]
 [-MaxReceiveSize <Unlimited>] [-MaxSafeSenders <Int32>] [-MaxSendSize <Unlimited>]
 [-MessageCopyForSendOnBehalfEnabled <$true | $false>] [-MessageCopyForSentAsEnabled <$true | $false>]
 [-MessageTracking <$true | $false>] [-MessageTrackingReadStatusEnabled <$true | $false>]
 [-MicrosoftOnlineServicesID <SmtpAddress>] [-Migration <$true | $false>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Name <String>] [-NewPassword <SecureString>]
 [-OABGen <$true | $false>] [-OABReplica <$true | $false>] [-Office <String>]
 [-OfflineAddressBook <OfflineAddressBookIdParameter>] [-OldPassword <SecureString>]
 [-OMEncryption <$true | $false>] [-OMEncryptionStore <$true | $false>] [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>] [-ProhibitSendQuota <Unlimited>] [-ProhibitSendReceiveQuota <Unlimited>]
 [-ProvisionedForOfficeGraph] [-PstProvider <$true | $false>] [-PublicFolder]
 [-QueryBaseDN <OrganizationalUnitIdParameter>] [-RecipientLimits <Unlimited>]
 [-RecoverableItemsQuota <Unlimited>] [-RecoverableItemsWarningQuota <Unlimited>]
 [-RejectMessagesFrom <MultiValuedProperty>] [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoteRecipientType <None | ProvisionMailbox | ProvisionArchive | Migrated | DeprovisionMailbox | DeprovisionArchive | RoomMailbox | EquipmentMailbox | SharedMailbox | TeamMailbox>]
 [-RemoveManagedFolderAndPolicy] [-RemovePicture] [-RemoveSpokenName]
 [-RequireSenderAuthenticationEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-ResourceCapacity <Int32>] [-ResourceCustom <MultiValuedProperty>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>] [-RetainDeletedItemsUntilBackup <$true | $false>]
 [-RetentionComment <String>] [-RetentionHoldEnabled <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RetentionUrl <String>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-RoomMailboxPassword <SecureString>]
 [-RulesQuota <ByteQuantifiedSize>] [-SamAccountName <String>] [-SCLDeleteEnabled <$true | $false>]
 [-SCLDeleteThreshold <Int32>] [-SCLJunkEnabled <$true | $false>] [-SCLJunkThreshold <Int32>]
 [-SCLQuarantineEnabled <$true | $false>] [-SCLQuarantineThreshold <Int32>]
 [-SCLRejectEnabled <$true | $false>] [-SCLRejectThreshold <Int32>] [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-SiloName <String>] [-SimpleDisplayName <String>]
 [-SingleItemRecoveryEnabled <$true | $false>] [-SkipDualWrite] [-SkipMailboxProvisioningConstraintValidation]
 [-StartDateForRetentionHold <DateTime>] [-StsRefreshTokensValidFrom <DateTime>]
 [-SystemMessageSizeShutoffQuota <Int64>] [-SystemMessageSizeWarningQuota <Int64>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-Type <Regular | Room | Equipment | Shared>]
 [-UMDataStorage <$true | $false>] [-UMDtmfMap <MultiValuedProperty>] [-UMGrammar <$true | $false>]
 [-UseDatabaseQuotaDefaults <$true | $false>] [-UseDatabaseRetentionDefaults <$true | $false>]
 [-UserCertificate <MultiValuedProperty>] [-UserPrincipalName <String>]
 [-UserSMimeCertificate <MultiValuedProperty>] [-WhatIf] [-WindowsEmailAddress <SmtpAddress>]
 [-WindowsLiveID <SmtpAddress>] [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet for one mailbox at a time. To perform bulk management, you can pipeline the output of various Get- cmdlets (for example, the Get-Mailbox or Get-User cmdlets) and configure several mailboxes in a single-line command. You can also use the Set-Mailbox cmdlet in scripts.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-Mailbox -Identity "John Woods" -DeliverToMailboxAndForward $true -ForwardingSMTPAddress manuel@contoso.com
```

This example delivers John Woods's email messages to John's mailbox and also forwards them to Manuel Oliveira's (manuel@contoso.com) mailbox.

### -------------------------- Example 2 --------------------------
```
Get-Mailbox -OrganizationalUnit "Marketing" | Set-Mailbox -UseDatabaseQuotaDefaults $false -IssueWarningQuota 200MB -ProhibitSendQuota 250MB -ProhibitSendReceiveQuota 280MB
```

This example uses the Get-Mailbox cmdlet to find all the mailboxes in the Marketing organizational unit, and then uses the Set-Mailbox cmdlet to configure these mailboxes. The custom warning, prohibit send, and prohibit send and receive limits are set to 200 megabytes (MB), 250 MB, and 280 MB respectively, and the mailbox database's default limits are ignored.

### -------------------------- Example 3 --------------------------
```
Get-User -Filter "Department -eq 'Customer Service'" | Set-Mailbox -MaxSendSize 2MB
```

This example uses the Get-User command to find all users in the Customer Service department, and then uses the Set-Mailbox command to change the maximum message size for sending messages to 2 MB.

### -------------------------- Example 4 --------------------------
```
Set-Mailbox John@contoso.com -MailTipTranslations ("FR: C'est la langue française", "CHT: 這是漢語語言")
```

This example sets the MailTip translation in French and Chinese.

### -------------------------- Example 5 --------------------------
```
$password = Read-Host "Enter password" -AsSecureString; Set-Mailbox florencef -Password $password -ResetPasswordOnNextLogon $true
```

In on-premises Exchange, this example resets the password for Florence Flipo's mailbox. The next time she signs in to her mailbox, she'll have to change her password.

### -------------------------- Example 6 --------------------------
```
Set-Mailbox -Arbitration -Identity "SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}" -MessageTracking $false; Set-Mailbox -Arbitration -Identity "SystemMailbox{1f05a927-b864-48a7-984d-95b1adfbfe2d}" -MessageTracking $true
```

This example removes the message tracking organization capability from the arbitration mailbox named SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c} and assigns it to an arbitration mailbox named SystemMailbox{1f05a927-b864-48a7-984d-95b1adfbfe2d}.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>,...\<senderN\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>",..."\<senderN\>".

To add or remove senders without affecting other existing entries, use the following syntax: @{Add="\<sender1\>","\<sender2\>"...; Remove="\<sender1\>","\<sender2\>"...}.

The senders you specify for this parameter are automatically copied to the AcceptMessagesOnlyFromSendersOrMembers property. Therefore, you can't use the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -AcceptMessagesOnlyFromDLMembers
The AcceptMessagesOnlyFromDLMembers parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are groups in your organization (distribution groups, mail-enabled security groups, and dynamic distribution groups). Specifying a group means all members of the group are allowed to send messages to this recipient. You can use any value that uniquely identifies the group. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple groups separated by commas. To overwrite any existing entries, use the following syntax: \<group1\>,\<group2\>,...\<groupN\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<group1\>","\<group2\>",..."\<groupN\>".

To add or remove groups without affecting other existing entries, use the following syntax: @{Add="\<group1\>","\<group2\>"...; Remove="\<group1\>","\<group2\>"...}.

The groups you specify for this parameter are automatically copied to the AcceptMessagesOnlyFromSendersOrMembers property. Therefore, you can't use the AcceptMessagesOnlyFromDLMembers and AcceptMessagesOnlyFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all groups.

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

### -AcceptMessagesOnlyFromSendersOrMembers
The AcceptMessagesOnlyFromSendersOrMembers parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are individual senders and groups in your organization. Individual senders are mailboxes, mail users, and mail contacts. Groups are distribution groups, mail-enabled security groups, and dynamic distribution groups. Specifying a group means all members of the group are allowed to send messages to this recipient.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>,...\<senderN\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>",..."\<senderN\>".

To add or remove individual senders or groups without affecting other existing entries, use the AcceptMessagesOnlyFrom and AcceptMessageOnlyFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromDLMembers properties, respectively. Therefore, you can't use the AcceptMessagesOnlyFromSendersOrMembers parameter and the AcceptMessagesOnlyFrom or AcceptMessagesOnlyFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -AddressBookPolicy
The AddressBookPolicy parameter specifies the address book policy that's applied to the mailbox. You can use any value that uniquely identifies the address book policy. For example:

- Name

- Distinguished name (DN)

- GUID

For more information about address book policies, see Address book policies (https://technet.microsoft.com/library/hh529948.aspx).

```yaml
Type: AddressBookMailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (\<alias\>@\<domain\>). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.com results in the Alias property value helpdesk.

- Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplyMandatoryProperties
The ApplyMandatoryProperties switch specifies whether to update the msExchVersion attribute of the mailbox. You may need to use this switch to fix inaccessible mailboxes or mailboxes that were created in previous versions of Exchange. You don't need to specify a value with this switch.

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

### -Arbitration
This parameter is available only in on-premises Exchange.

The Arbitration switch specifies that the mailbox you're modifying is an arbitration mailbox. You don't need to specify a value with this switch.

Arbitration mailboxes are system mailbox that are used for storing different types of system data and for managing messaging approval workflow.

Notes:

- If you don't use this switch, the command can't find the arbitration mailbox to modify.

- To modify an arbitration mailbox that's used to store audit log settings or data, you need to use the AuditLog or AuxAuditLog switches instead of the Arbitration switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArbitrationMailbox
This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the arbitration mailbox that's used to manage the moderation process for this recipient. You can use any value that uniquely identifies the arbitration mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveName
The ArchiveName parameter specifies the name of the archive mailbox. This is the name displayed to users in Outlook and Outlook Web App.

If you don't use this parameter, the default value is In-Place Archive - \<Mailbox User's Display Name\>.

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveStatus
This parameter is reserved for internal Microsoft use.

```yaml
Type: None | Active
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditAdmin
The AuditAdmin parameter specifies the mailbox operations to log for administrators as part of mailbox audit logging. Valid values are:

- None

- Copy

- Create

- FolderBind

- HardDelete

- MessageBind

- Move

- MoveToDeletedItems

- SendAs

- SendOnBehalf

- SoftDelete

- Update

- UpdateFolderPermissions (cloud-based service only)

- UpdateCalendarDelegation (cloud-based service only)

By default, the Update, Move, MoveToDeletedItems, SoftDelete, HardDelete, FolderBind, SendAs, SendOnBehalf, Create, UpdateFolderPermissions, and UpdateCalendarDelegation actions performed by administrators are logged.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The AuditEnabled parameter must be set to $true to enable mailbox audit logging.

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

### -AuditDelegate
The AuditDelegate parameter specifies the mailbox operations to log for delegate users as part of mailbox audit logging. Valid values are:

- None

- Create

- FolderBind

- HardDelete

- Move

- MoveToDeletedItems

- SendAs

- SendOnBehalf

- SoftDelete

- Update

- UpdateFolderPermissions (cloud-based service only)

By default, the Update, SoftDelete, HardDelete, SendAs, Create, and UpdateFolderPermissions actions performed by delegates are logged.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The AuditEnabled parameter must be set to $true to enable mailbox audit logging.

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

### -AuditEnabled
The AuditEnabled parameter specifies whether to enable or disable mailbox audit logging for the mailbox. If auditing is enabled, actions specified in the AuditAdmin, AuditDelegate, and AuditOwner parameters are logged. Valid values are:

- $true: Mailbox audit logging is enabled.

- $false: Mailbox audit logging is disabled. This is the default value.

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

### -AuditLogAgeLimit
The AuditLogAgeLimit parameter specifies the maximum age of audit log entries for the mailbox. Log entries older than the specified value are removed. The default value is 90 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 60 days for this parameter, use 60.00:00:00. Setting this parameter to the value 00:00:00 removes all audit log entries for the mailbox. The entries are removed the next time the Managed Folder Assistant processes the mailbox (automatically or manually by running the Start-ManagedFolderAssistant cmdlet).

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditOwner
The AuditOwner parameter specifies the mailbox operations to log for mailbox owners as part of mailbox audit logging. Valid values include:

- None

- Create

- HardDelete

- MailboxLogin

- Move

- MoveToDeletedItems

- SoftDelete

- Update

- UpdateFolderPermissions (cloud-based service only)

- UpdateCalendarDelegation (cloud-based service only)

In on-premises Exchange, mailbox access by the owner isn't logged by default. In the cloud-based service, only the UpdateFolderPermissions and UpdateCalendarDelegation action performed by the owner is logged by default.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The AuditEnabled parameter must be set to $true to enable mailbox audit logging.

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

### -BypassModerationFromSendersOrMembers
The BypassModerationFromSendersOrMembers parameter specifies who is allowed to send messages to this moderated recipient without approval from a moderator. Valid values for this parameter are individual senders and groups in your organization. Specifying a group means all members of the group are allowed to send messages to this recipient without approval from a moderator.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple senders and overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>,...\<senderN\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>",..."\<senderN\>".

To add or remove one or more senders without affecting any existing entries, use the following syntax: @{Add="\<sender1\>","\<sender2\>"...; Remove="\<sender3\>","\<sender4\>"...}.

This parameter is meaningful only when moderation is enabled for the recipient. By default, this parameter is blank ($null), which means messages from all senders other than the designated moderators are moderated. When a moderator sends a message to this recipient, the message is isn't moderated. In other words, you don't need to use this parameter to include the moderators.

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

### -CalendarRepairDisabled
The CalendarRepairDisabled parameter specifies whetherto prevent calendar items in the mailbox from being repaired by the Calendar Repair Assistant. Valid values are:

- $true: The Calendar Repair Assistant doesn't repair calendar items in the mailbox.

- $false: The Calendar Repair Assistant repairs calendars items in the mailbox. This is the default value.

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

### -CalendarVersionStoreDisabled
The CalendarVersionStoreDisabled parameter specifies whether to prevent calendar changes in the mailbox from being logged. Valid values are:

- $true: Changes to a calendar item aren't recorded.

- $false: Changes to a calendar item are recorded. This keeps older versions of meetings and appointments. This is the default value.

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
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateDTMFMap
The CreateDTMFMap parameter specifies whether to create a dual-tone multiple-frequency (DTMF) map for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Valid values are:

- $true: A DTMF map is created for the recipient. This is the default value.

- $false: A DTMF map isn't created for the recipient.

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

### -CustomAttribute1
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute10
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute11
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute12
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute13
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute14
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute15
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute2
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute3
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute4
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute5
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute6
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute7
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute8
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute9
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

### -DisplayName
The DisplayName parameter specifies the display name of the mailbox. The display name is visible in the Exchange admin center, in address lists, and in Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
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

### -DowngradeHighPriorityMessagesEnabled
This parameter is available only in on-premises Exchange.

The DowngradeHighPriorityMessagesEnabled parameter specifies whether to prevent the mailbox from sending high priority messages to an X.400 mail system. Valid values are:

- $true: High priority messages sent to X.400 recipients are changed to normal priority.

- $false: High priority messages set to X.400 recipients remain high priority. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddresses
The EmailAddresses parameter specifies all the email addresses (proxy addresses) for the recipient, including the primary SMTP address. In on-premises Exchange organizations, the primary SMTP address and other proxy addresses are typically set by email address policies. However, you can use this parameter to configure other proxy addresses for the recipient. For more information, see Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx).

Valid syntax for this parameter is \<Type\>:\<emailaddress1\>,\<Type\>:\<emailaddress2\>,...\<Type\>:\<emailaddressN\>. The optional \<Type\> value specifies the type of email address. Some examples of valid values include:

- SMTP: The primary SMTP address. You can use this value only once in a command.

- smtp: Other SMTP email addresses.

- X400: X.400 addresses in on-premises Exchange.

- X500: X.500 addresses in on-premises Exchange.

If you don't include a \<Type\> value for an email address, the value smtp is assumed. Note that Exchange doesn't validate the syntax of custom address types (including X.400 addresses). Therefore, you need to verify that any custom addresses are formatted correctly.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the \<Type\> value SMTP on the address.

- The first email address when you don't use any \<Type\> values, or when you use multiple \<Type\> values of smtp.

- If it's available, use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

To replace all existing proxy email addresses with the values you specify, use the following syntax: "\<Type\>:\<emailaddress1\>","\<Type\>:\<emailaddress2\>",..."\<Type\>:\<emailaddressN\>".

To add or remove specify proxy addresses without affecting other existing values, use the following syntax: @{Add="\<Type\>:\<emailaddress1\>","\<Type\>:\<emailaddress2\>",...; Remove="\<Type\>:\<emailaddress2\>","\<Type\>:\<emailaddress2\>",...}.

```yaml
Type: ProxyAddressCollection
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDateForRetentionHold
The EndDateForRetentionHold parameter specifies the end date for retention hold for messaging records management (MRM). To use this parameter, you need to set the RetentionHoldEnabled parameter to the value $true.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeFromAllOrgHolds
This parameter is available only in Exchange Online.

The ExcludeFromAllOrgHolds switch excludes the mailbox from all organization-wide Office 365 retention policies. This switch can only be used for inactive mailboxes. You don't need to specify a value with this switch.

When you use this switch, use the DistinguishedName or ExchangeGuid property value for the identity of the inactive mailbox (those are the only values that guarantee uniqueness).

```yaml
Type: SwitchParameter
Parameter Sets: Set6
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeFromOrgHolds
This parameter is available only in Exchange Online.

The ExcludeFromOrgHolds parameter excludes the mailbox from one or more organization-wide Office 365 retention policies. This parameter can only be used for inactive mailboxes. A valid value for this parameter is the GUID of the organization-wide Office 365 retention policy that the inactive mailbox is excluded from. To find the GUID values of organization-wide Office 365 retention policies, run the command Get-OrganizationConfig | Format-List InplaceHolds. Note that retention policies assigned to mailboxes are prefaced by 'mbx'.

You can specify multiple values for this parameter by using the syntax “GUID1”,”GUID2”,…”GUIDX”.

When you use this parameter, use the DistinguishedName or ExchangeGuid property value for the identity of the inactive mailbox (those are the values that guarantee uniqueness).

```yaml
Type: String[]
Parameter Sets: Set7
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute1
The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).

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

### -ExtensionCustomAttribute2
The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).

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

### -ExtensionCustomAttribute3
The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).

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

### -ExtensionCustomAttribute4
The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).

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

### -ExtensionCustomAttribute5
The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).

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

### -ExternalOofOptions
The ExternalOofOptions parameter specifies the Out of Office (also known OOF) message options that are available for the mailbox. Valid values are:

- External: OOF messages can be configured for external senders. This is the default value.

- InternalOnly: OOF messages can be configured only for internal senders.

```yaml
Type: InternalOnly | External
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FederatedIdentity
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

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

### -ForwardingAddress
The ForwardingAddress parameter specifies a forwarding address for messages that are sent to this mailbox. A valid value for this parameter is a recipient in your organization. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GrantSendOnBehalfTo
The GrantSendOnBehalfTo parameter specifies who can send on behalf of this mailbox. Although messages send on behalf of the mailbox clearly show the sender in the From field (\<Sender\> on behalf of \<Mailbox\>), replies to these messages are delivered to the mailbox, not the sender.

The sender you specify for this parameter must a mailbox, mail user or mail-enabled security group (a mail-enabled security principal that can have permissions assigned). You can use any value that uniquely identifies the sender.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

By default, this parameter is blank, which means no one else has permission to send on behalf of this mailbox.

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

### -HiddenFromAddressListsEnabled
The HiddenFromAddressListsEnabled parameter specifies whether this recipient is visible in address lists. Valid values are:

- $true: The recipient isn't visible in address lists.

- $false: The recipient is visible in address lists. This is the default value.

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

### -IgnoreDefaultScope
This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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

In Office 365, the quota value is determined by the subscriptions and licenses that administrators purchase and assign in the Office 365 admin center. You can lower the quota value, and you may be able to raise the quota, but you can't exceed the maximum value that's allowed by the subscription or license. In Office 365, you can't use this parameter on public folder mailboxes.

In on-premises Exchange, the default value of this parameter is unlimited. When the UseDatabaseQuotaDefaults parameter is set to $true, the value of the this parameter is ignored, and the mailbox uses the IssueWarningQuota value on the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

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

### -Languages
The Languages parameter specifies the language preferences for this mailbox, in order of preference. Several Exchange components display information to a mailbox user in the preferred language, if that language is supported. Some of those components include quota messages, non-delivery reports (NDRs), the Outlook on the web user interface, and Unified Messaging (UM) voice prompts.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see CultureInfo Class (https://go.microsoft.com/fwlink/p/?linkId=184859).

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

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

### -LinkedCredential
This parameter is available only in on-premises Exchange.

The LinkedCredential parameter specifies the credentials used to access the domain controller specified by the LinkedDomainController parameter.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedMasterAccount
This parameter is available only in on-premises Exchange.

The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides, if the mailbox is a linked mailbox. The master account is the account that the mailbox is linked to. The master account grants access to the mailbox. You can use any value that uniquely identifies the master account.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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

### -LitigationHoldOwner
The LitigationHoldOwner parameter specifies the user who placed the mailbox on litigation hold. If you don't use this parameter when you place the mailbox on litigation hold, the value is populated automatically. If you use this parameter when you place the mailbox on litigation hold, you can specify a text value. If the value contains spaces, include the value in quotation marks ("). You can use this value for informational and reporting purposes.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxPlan
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxPlanIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTip
The MailTip parameter specifies the custom MailTip text for this recipient. The MailTip is shown to senders when they start drafting an email message to this recipient. If the value contains spaces, enclose the value in quotation marks (").

When you add a MailTip to a recipient, two things happen:

- HTML tags are automatically added to the text. For example, if you enter the text: "This mailbox is not monitored", the MailTip automatically becomes: \<html\>\<body\>This mailbox is not monitored\</body\>\</html\>. Additional HTML tags aren't supported, and the length of the MailTip can't exceed 175 displayed characters.

- The text is automatically added to the MailTipTranslations property of the recipient as the default value: default:\<MailTip text\>. If you modify the MailTip text, the default value is automatically updated in the MailTipTranslations property, and vice-versa.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTipTranslations
The MailTipTranslations parameter specifies additional languages for the custom MailTip text that's defined by the MailTip parameter. HTML tags are automatically added to the MailTip translation, additional HTML tags aren't supported, and the length of the MailTip translation can't exceed 175 displayed characters.

To add or remove MailTip translations without affecting the default MailTip or other MailTip translations, use the following syntax:

@{Add="\<culture 1\>:\<localized text 1\>","\<culture 2\>:\<localized text 2\>"...; Remove="\<culture 3\>:\<localized text 3\>","\<culture 4\>:\<localized text 4\>"...}

\<culture\> is a valid ISO 639 two-letter culture code that's associated with the language.

For example, suppose this recipient currently has the MailTip text: "This mailbox is not monitored." To add the Spanish translation, use the following value for this parameter: @{Add="ES:Esta caja no se supervisa."}.

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

### -ManagedFolderMailboxPolicy
The ManagedFolderMailboxPolicy parameter specifies a managed folder mailbox policy that controls MRM for the mailbox. If the parameter is set to $null, Exchange removes the managed folder mailbox policy from the mailbox but any managed folders in the mailbox remain.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicyAllowed
The ManagedFolderMailboxPolicyAllowed parameter bypasses the warning that MRM features aren't supported for e-mail clients running versions of Outlook earlier than Outlook 2007. When a managed folder mailbox policy is assigned to a mailbox by using the ManagedFolderMailboxPolicy parameter, the warning appears by default unless the ManagedFolderMailboxPolicyAllowed parameter is used.

Although Outlook 2003 Service Pack 3 clients are supported, they have limited MRM functionality.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxReceiveSize
This parameter is available only in on-premises Exchange.

The MaxReceiveSize parameter specifies the maximum size of a message that can be sent to the mailbox. Messages larger than the maximum size are rejected.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 1.999999 gigabytes (2147483647 bytes) or the value unlimited.

In Office 365, the value is determined by the subscriptions and licenses that administrators purchase and assign in the Office 365 admin center. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's allowed by the subscription or license.

In Office 365, you use this parameter to configure the MaxReceiveSize value on existing mailboxes. Use the Set-MailboxPlan cmdlet to change the MaxReceiveSize value for all new mailboxes that you create in the future.

In on-premises Exchange, the default value unlimited indicates the maximum receive size for the mailbox is controlled elsewhere (for example, organization, server, or connector limits).

For any message size limit, you need to set a value that's larger than the actual size you want enforced. This accounts for the Base64 encoding of attachments and other binary data. Base64 encoding increases the size of the message by approximately 33%, so the value you specify should be approximately 33% larger than the actual message size you want enforced. For example, if you specify a maximum message size value of 64 MB, you can expect a realistic maximum message size of approximately 48 MB.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 1.999999 gigabytes (2147483647 bytes) or the value unlimited.

In Office 365, the value is determined by the subscriptions and licenses that administrators purchase and assign in the Office 365 admin center. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's allowed by the subscription or license.

In Office 365, you use this parameter to configure the MaxSendSize value on existing mailboxes. Use the Set-MailboxPlan cmdlet to change the MaxSendSize value for all new mailboxes that you create in the future.

In on-premises Exchange, the default value unlimited indicates the maximum send size for the mailbox is controlled elsewhere (for example, organization, server, or connector limits).

For any message size limit, you need to set a value that's larger than the actual size you want enforced. This accounts for the Base64 encoding of attachments and other binary data. Base64 encoding increases the size of the message by approximately 33%, so the value you specify should be approximately 33% larger than the actual message size you want enforced. For example, if you specify a maximum message size value of 64 MB, you can expect a realistic maximum message size of approximately 48 MB.

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

### -MessageTrackingReadStatusEnabled
The MessageTrackingReadStatusEnabled parameter specifies whether to include detailed information in delivery reports for messages sent to the mailbox. Valid values are:

- $true: The read status of the message and the date-time that the message was delivered is shown in the delivery report for messages sent to this mailbox. This is the default value.

- $false: The read status of the message isn't displayed in the delivery report for messages sent to this mailbox. Only the date-time that the message was delivered is shown in the delivery report.

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

### -ModeratedBy
The ModeratedBy parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

You need to use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.

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

### -ModerationEnabled
The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.

- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.

You use the ModeratedBy parameter to specify the moderators.

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

### -Name
The Name parameter specifies the unique name of the mailbox. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
The Password parameter resets the password of the user account that's associated with the mailbox to the value you specify. To use this parameter on a mailbox other than your own, you need to be a member of one of the following role groups:,

- Office 365: You can't use this parameter to change another user's password. To change another user's password, use the Set-MsolUserPassword cmdlet in Office 365 (Azure AD) PowerShell. For connection instructions, see Connect to Office 365 PowerShell (https://go.microsoft.com/fwlink/p/?LinkId=614839). To change a another user's password in the Office 365 admin center, see Reset a user's password (https://go.microsoft.com/fwlink/p/?LinkId=614837).

- On-premises Exchange: The Organization Management or Help Desk role groups via the User Options role. The Reset Password role also allows you to use this parameter, but it isn't assigned to any role groups by default.

This parameter uses the syntax (ConvertTo-SecureString -String '\<password\>' -AsPlainText -Force). Or, to be prompted to enter the password and store it as a variable, run the command $password = Read-Host "Enter password" -AsSecureString, and then use the value $password for this parameter.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
This parameter is available only in on-premises Exchange.

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

If you set the EmailAddressPolicyEnabled parameter to $false, you can specify the primary address using the PrimarySmtpAddress parameter, but that means the email addresses of the mail user no longer automatically updated by email address policies.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

In Office 365, the quota value is determined by the subscriptions and licenses that administrators purchase and assign in the Office 365 admin center. You can lower the quota value, and you may be able to raise the quota, but you can't exceed the maximum value that's allowed by the subscription or license. In Office 365, you can't use this parameter on public folder mailboxes.

In on-premises Exchange, the default value of this parameter is unlimited. When the UseDatabaseQuotaDefaults parameter is set to the value $true, the value of the this parameter is ignored, and the mailbox uses the ProhibitSendQuota value on the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

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

In Office 365, the quota value is determined by the subscriptions and licenses that administrators purchase and assign in the Office 365 admin center. You can lower the quota value, but you can't exceed the maximum value that's allowed by the subscription or license. In Office 365, you can't use this parameter on public folder mailboxes.

In on-premises Exchange, the default value of this parameter is unlimited. When the UseDatabaseQuotaDefaults parameter is set to the value $true, the value of the this parameter is ignored, and the mailbox uses the ProhibitSendReceiveQuota value on the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

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

### -RecipientLimits
This parameter is available only in on-premises Exchange.

The RecipientLimits parameter specifies the maximum number of recipients allowed in messages sent by the mailbox.

A valid value is an integer or the value unlimited. The default value is unlimited.

The value unlimited indicates the maximum number of recipients per message for the mailbox is controlled elsewhere (for example, organization, server, or connector limits).

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

When the UseDatabaseQuotaDefaults parameter is set to the value $true, the value of the this parameter is ignored, and the mailbox uses the RecoverableItemsQuota value on the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

When the UseDatabaseQuotaDefaults parameter is set to the value $true, the value of the this parameter is ignored, and the mailbox uses the RecoverableItemsWarningQuota value on the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>,...\<senderN\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>",..."\<senderN\>".

To add or remove senders without affecting other existing entries, use the following syntax: @{Add="\<sender1\>","\<sender2\>"...; Remove="\<sender1\>","\<sender2\>"...}.

The senders you specify for this parameter are automatically copied to the RejectMessagesFromSendersOrMembers property. Therefore, you can't use the RejectMessagesFrom and RejectMessagesFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -RejectMessagesFromDLMembers
The RejectMessagesFromDLMembers parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are groups in your organization (distribution groups, mail-enabled security groups, and dynamic distribution groups). Specifying a group means all members of the group aren't allowed to send messages to this recipient. You can use any value that uniquely identifies the group. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple groups separated by commas. To overwrite any existing entries, use the following syntax: \<group1\>,\<group2\>,...\<groupN\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<group1\>","\<group2\>",..."\<groupN\>".

To add or remove groups without affecting other existing entries, use the following syntax: @{Add="\<group1\>","\<group2\>"...; Remove="\<group1\>","\<group2\>"...}.

The groups you specify for this parameter are automatically copied to the RejectMessagesFromSendersOrMembers property. Therefore, you can't use the RejectMessagesFromDLMembers and RejectMessagesFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all groups.

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

### -RejectMessagesFromSendersOrMembers
The RejectMessagesFromSendersOrMembers parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are individual senders and groups in your organization. Individual senders are mailboxes, mail users, and mail contacts. Groups are distribution groups, mail-enabled security groups, and dynamic distribution groups. Specifying a group means all members of the group aren't allowed to send messages to this recipient.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>,...\<senderN\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>",..."\<senderN\>".

To add or remove individual senders or groups without affecting other existing entries, use the RejectMessagesFrom and RejectMessagesFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the RejectMessagesFrom and RejectMessagesFromDLMembers properties, respectively. Therefore, you can't use the RejectMessagesFromSendersOrMembers parameter and the RejectMessagesFrom or RejectMessagesFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -RemoteRecipientType
This parameter is reserved for internal Microsoft use.

```yaml
Type: None | ProvisionMailbox | ProvisionArchive | Migrated | DeprovisionMailbox | DeprovisionArchive | RoomMailbox | EquipmentMailbox | SharedMailbox
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveManagedFolderAndPolicy
This parameter is available only in on-premises Exchange.

The RemoveManagedFolderAndPolicyswitch specifies whether to remove all MRM 1.0 policies and attributes from a mailbox. If you use this switch, MRM 1.0 policies and MRM 1.0 properties from any managed folders that were created as part of any MRM 1.0 policies are removed. Managed folders that are empty are also removed from the mailbox, and managed folders that contain items are converted to standard folders.

You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

### -ResetPasswordOnNextLogon
This parameter is available only in on-premises Exchange.

The ResetPasswordOnNextLogon parameter specifies whether the user is required to change their password the next time they log on to their mailbox. Valid values are:

- $true: The user is required to change their password the next time they log on to their mailbox.

- $false: The user isn't required to change their password the next time they log on to their mailbox. This is the default value.

In Office 365, administrators can require users to reset their password the next time they log on by using the ResetPasswordOnNextLogon parameter on the Set-User cmdlet.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

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

### -RetainDeletedItemsFor
The RetainDeletedItemsFor parameter specifies the length of time to keep soft-deleted items for the mailbox. Soft-deleted items are items that have been deleted by using any of these methods:

- Deleting items from the Deleted Items folder.

- Selecting the Empty Deleted Items Folder action.

- Deleting items using Shift + Delete.

These actions move the items to the Recoverable Items folder, into a subfolder named Deletions.

Before the deleted item retention period expires, users can recover soft-deleted items in Outlook and Outlook on the web by using the Recover Deleted Items feature. For more information, see Recoverable Items folder in Exchange 2016 (https://technet.microsoft.com/library/ee364755.aspx).

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

The default value is 14 days (14.00:00:00). In Office 365, you can increase the value to a maximum of 30 days.

In Office 365, you use this parameter to configure the RetainDeletedItemsFor value on existing mailboxes. Use the Set-MailboxPlan cmdlet to change the RetainDeletedItemsFor value for all new mailboxes that you create in the future.

In on-premises Exchange, the default value is configured by the value of the DeletedItemRetention parameter on mailbox database. To override the default value, enter a value for the RetainDeletedItemsFor parameter on the mailbox.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetainDeletedItemsUntilBackup
This parameter is available only in on-premises Exchange.

The RetainDeletedItemsUntilBackup parameter specifies whether to keep items in the Recoverable Items\\Deletions folder of the mailbox until the next database backup occurs. Valid values are:

- $true: Deleted items are kept until the next mailbox database backup. This value could effectively override the deleted item retention and recoverable items quota values.

- $false: Retention of deleted items doesn't depend on a backup of the mailbox database. This is the default value.

For more information, see Recoverable Items folder in Exchange 2016 (https://technet.microsoft.com/library/ee364755.aspx).

The default value is configured by the value of the DeletedItemRetention parameter on mailbox database. To override the default value, enter a value for the RetainDeletedItemsFor parameter on the mailbox.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionComment
The RetentionComment parameter specifies a comment that's displayed in Outlook regarding the user's retention hold status.

This comment can only be set if the RetentionHoldEnabled parameter is set to $true. This comment should be localized to the user's preferred language. If the comment contains spaces, enclose the comment in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionHoldEnabled
The RetentionHoldEnabled parameter specifies whether the mailbox is placed on retention hold. Placing the mailbox on retention hold temporarily suspends the processing of retention policies or managed folder mailbox policies for the mailbox (for example, when the user is on vacation). Valid values are:

- $true: The mailbox is placed on retention hold. Retention policies and managed folder policies are suspended for the mailbox.

- $false: The retention hold is removed from the mailbox. The mailbox is subject to retention policies and managed folder policies. This is the default value.

To set the start date for retention hold, use the StartDateForRetentionHold parameter.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleAssignmentPolicy
The RoleAssignmentPolicy parameter specifies the role assignment policy that's assigned to the mailbox.You can use any value that uniquely identifies the role assignment policy. For example:

- Name

- Distinguished name (DN)

- GUID

In Office 365, a role assignment policy must be assigned to the mailbox. In on-premises Exchange, to configure the mailbox so there's no role assignment policy assigned, use the value $null.

Use the Get-RoleAssignmentPolicy cmdlet to see the available role assignment policies. For more information, see Understanding management role assignment policies (https://technet.microsoft.com/library/dd638100.aspx).

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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

The default value is 64 kilobytes (65536 bytes).

The quota for Inbox rules applies only to enabled rules. There is no restriction on the number of disabled rules a mailbox can have. However, the total size of rules that are enabled or active can't exceed the value specified for this parameter.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SamAccountName
This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the characters !, #, $, %, ^, &, -, \_, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match). The maximum length is 20 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLDeleteEnabled
This parameter is available only in on-premises Exchange.

The SCLDeleteEnabled parameter specifies whether to silently delete messages that meet or exceed the spam confidence level (SCL) specified by the SCLDeleteThreshold parameter. Valid values are:

- $true: Messages that meet or exceed the SCLDeleteThreshold value are silently deleted without sending an non-delivery report (NDR).

- $false: Messages that meet or exceed the SCLDeleteThreshold value aren't deleted.

- $null (blank): The value isn't configured. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLDeleteThreshold
This parameter is available only in on-premises Exchange.

The SCLDeleteThreshold parameter specifies the SCL delete threshold. When the SCLDeleteEnabled parameter is set to $true, messages with an SCL greater than or equal to the specified value aresilently deleted.

A valid value is an integer from 0 through 9. This value should be greater than the other SCL\*Threshold values.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

To configure the quarantine mailbox, see Configure a spam quarantine mailbox (https://technet.microsoft.com/library/bb123746.aspx).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SCLRejectThreshold
This parameter is available only in on-premises Exchange.

The SCLRejectThreshold parameter specifies the SCL reject threshold. When the SCLRejectEnabled parameter is set to $true, messageswith an SCL greater than or equal to the specified value are rejected, and an NDR is sent to the sender.

A valid value is an integer from 0 through 9. This value should be less than the SCLDeleteThreshold value, but greater than the SCLQuarantineThreshold value.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryAddress
The SecondaryAddress parameter specifies the secondary address used by the UM-enabled user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryDialPlan
The SecondaryDialPlan parameter specifies a secondary UM dial plan to use. This parameter is provided to create a secondary proxy address.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Type: Never | Internal | Always
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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

- "\<space\>", """, "'", "(", ")", "+", ",", "-", ".", "/", ":", and "?".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SingleItemRecoveryEnabled
The SingleItemRecoveryEnabled parameter specifies whether to prevent the Recovery Items folder from being purged. Valid values are:

- $true: Single item recovery is enabled. The Recovery Items folder can't be purged. and items that have been deleted or edited can't be removed.

- $false: Single item recovery isn't enabled. The Recovery Items folder can be purged, and, items that have been deleted or edited can be removed. This is the default value.

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

### -StartDateForRetentionHold
The StartDateForRetentionHold parameter specifies the start date for the retention hold that's placed on the mailbox.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

To use this parameter, you need to set the RetentionHoldEnabled parameter to value $true.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter specifies the mailbox type for the mailbox. Valid values are:

- Regular

- Room

- Equipment

- Shared

```yaml
Type: Regular | Room | Equipment | Shared
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDtmfMap
The UMDtmfMap parameter specifies the dual-tone multiple-frequency (DTMF) map values for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Typically, these DTMF values are automatically created and updated, but you can use this parameter to make changes manually. This parameter uses the following syntax:

- emailAddress:\<integers\>

- lastNameFirstName:\<integers\>

- firstNameLastName:\<integers\>

To enter values that overwrite all existing entries, use the following syntax: emailAddress:\<integers\>,lastNameFirstName:\<integers\>,firstNameLastName:\<integers\>.

If you use this syntax and you omit any of the DTMF map values, those values are removed from the recipient. For example, if you specify only emailAddress:\<integers\>, all existing lastNameFirstName and firstNameLastName values are removed.

To add or remove values without affecting other existing entries, use the following syntax: @{Add="emailAddress:\<integers\>","lastNameFirstName:\<integers\>","firstNameLastName:\<integers\>"; Remove="emailAddress:\<integers\>","lastNameFirstName:\<integers\>","firstNameLastName:\<integers\>"}.

If you use this syntax, you don't need to specify all of the DTMF map values, and you can specify multiple DTMF map values. For example, you can use @{Add="emailAddress:\<integers1\>","emailAddress:\<intgers2\>} to add two new values for emailAddress without affecting the existing lastNameFirstName and firstNameLastName values.

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

### -UseDatabaseQuotaDefaults
This parameter is available only in on-premises Exchange.

The UseDatabaseQuotaDefaults parameter specifies whether the mailbox uses the applicable quota values configured on the mailbox database or configured on the mailbox. Valid values are:

- $true: The mailbox uses the applicable quota values that are configured on the mailbox database. Any of those quota values configured directly on the mailbox are ignored.

- $false: The mailbox uses its own values for the applicable quota values. Any of those quota values on the mailbox database are ignored.

In Office 365, the default value is $false. In on-premises Exchange, the default value is $true.

The applicable quota values are:

- CalendarLoggingQuota

- IssueWarningQuota

- ProhibitSendQuota

- ProhibitSendReceiveQuota

- RecoverableItemsQuota

- RecoverableItemsWarningQuota

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDatabaseRetentionDefaults
This parameter is available only in on-premises Exchange.

The UseDatabaseRetentionDefaults parameter specifies whether the mailbox uses the MailboxRetention attribute value that's configured on the mailbox database. This value controls how long deleted mailboxes are kept in the database before they are permanently removed (purged). The default value is 30 days. Valid values are:

- $true: The mailbox uses the MailboxRetention value that's configured on the mailbox database. This is the default value.

- $false: When the mailbox is deleted, it's retained indefinitely.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
The UserPrincipalName parameter specifies the logon name for the user account. The UPN uses an email address format \<username\>@\<domain\>. Typically, the \<domain\> value is the domain where the user account resides.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSMimeCertificate
This parameter is available only in on-premises Exchange.

The UserSMimeCertificate parameter specifies the S/MIME certificate that's used to sign a user's email messages.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowsLiveID
This parameter is available only in the cloud-based service.

The WindowsLiveID parameter renames the Microsoft account (formerly known as a Windows Live ID) that's associated with the mailbox.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditLog
This parameter is available only in on-premises Exchange.

The AuditLog switch specifies the mailbox you're modifying is an arbitration mailbox that's used to store audit log settings. You don't need to specify a value with this switch.

Notes:

- If you don't use this switch, the command can't find this type of arbitration mailbox.

- The Arbitration switch doesn't work for modifying this type of arbitration mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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

When the UseDatabaseQuotaDefaults parameter is set to the value $true, the value of the this parameter is ignored, and the mailbox uses the CalendarLoggingQuota value on the mailbox database. To use this parameter to enforce a specific quota value for the mailbox, you need to set the UseDatabaseQuotaDefaults parameter to the value $false.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderMailbox
The DefaultPublicFolderMailbox parameter assigns a specific public folder mailbox to the user. By default, the public folder mailbox used by a user is automatically selected by an algorithm that load-balances users across all public folder mailboxes.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DumpsterMessagesPerFolderCountReceiveQuota
The DumpsterMessagesPerFolderCountReceiveQuota parameter specifies the maximum number of messages that can be contained in each folder in the Recoverable Items folder (called the dumpster in previous versions of Exchange). When a folder exceeds this limit, it can't store new messages. For example, if the Deletions folder in the Recoverable Items folder has exceeded the message count limit and the mailbox owner attempts to permanently delete items from their mailbox, the deletion will fail.

To see the current value of this property, run the command Get-MailboxStatistics \<MailboxIdentity\> | Format-List DumpsterMessagesPerFolderCountReceiveQuota

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

### -DumpsterMessagesPerFolderCountWarningQuota
The DumpsterMessagesPerFolderCountWarningQuota parameters specifies the number of messages that each folder in the Recoverable Items folder (called the dumpster in previous versions of Exchange) can hold before Exchange sends a warning message to the mailbox owner and logs an event to the application event log. When this quota is reached, warning messages and logged events occur once a day.

To see the current value of this property, run the command Get-MailboxStatistics \<MailboxIdentity\> | Format-List DumpsterMessagesPerFolderCountWarningQuota

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

### -EnableRoomMailboxAccount
The EnableRoomMailboxAccount parameter specifies whether to enable the disabled user account that's associated with this room mailbox. Valid values are:

- $true: The disabled account that's associated with the room mailbox is enabled. You also need to use the RoomMailboxPassword with this value. This allows the account to log on to the room mailbox.

- $false: The account that's associated with the room mailbox is disabled. You can't use the account to logon to the room mailbox. This is the default value.

You need to use this parameter with the Room switch.

Typically, the account that's associated with a room mailbox is disabled. However, you need to enable the account for features like the Lync Room System or the Skype for Business Room System.

In Exchange Online, a room mailbox with an associated enabled account doesn't require a license.

In an on-premises Exchange organization, you also need to enable the corresponding user account in Active Directory Users and Computers or by running the Enable-ADAccount cmdlet in Windows PowerShell.

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

### -ExtendedPropertiesCountQuota
This parameter is available only in on-premises Exchange.

The ExtendedPropertiesCountQuota property is used to configure the Named Properties and NonMAPI Named Properties quotas for a mailbox. This should typically only be done if you are experiencing QuotaExceededException or MapiExceptionNamedPropsQuotaExceeded errors.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderHierarchyChildrenCountReceiveQuota
This parameter is available only in on-premises Exchange.

The FolderHierarchyChildrenCountReceiveQuota parameter specifies the maximum number of subfolders that can be created in a mailbox folder. The mailbox owner won't be able to create a new subfolder when this limit is reached.

To see the current value of this property, run the command Get-MailboxStatistics \<MailboxIdentity\> | Format-List FolderHierarchyChildrenCountReceiveQuota

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderHierarchyChildrenCountWarningQuota
This parameter is available only in on-premises Exchange.

The FolderHierarchyChildrenCountWarningQuota parameter specifies the number of subfolders that can be created in a mailbox folder before Exchange sends a warning message to the mailbox owner and logs an event to the application event log. When this quota is reached, warning messages and logged events occur once a day.

To see the current value of this property, run the command Get-MailboxStatistics \<MailboxIdentity\> | Format-List FolderHierarchyChildrenCountWarningQuota

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderHierarchyDepthReceiveQuota
This parameter is available only in on-premises Exchange.

The FolderHierarchyDepthReceiveQuota parameter specifies the maximum number of levels in the folder hierarchy of a mailbox folder. The mailbox owner won't be able to create another level in the folder hierarchy of the mailbox folder when this limit is reached.

To see the current value of this property, run the command Get-MailboxStatistics \<MailboxIdentity\> | Format-List FolderHierarchyDepthReceiveQuota

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderHierarchyDepthWarningQuota
This parameter is available only in on-premises Exchange.

The FolderHierarchyDepthWarningQuota parameter specifies the number of levels in the folder hierarchy of a mailbox folder that can be created before Exchange sends a warning message to the mailbox owner and logs an event to the application event log. When this quota is reached, warning messages and logged events occur once a day.

To see the current value of this property, run the command Get-MailboxStatistics \<MailboxIdentity\> | Format-List FolderHierarchyDepthWarningQuota

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FoldersCountReceiveQuota
This parameter is available only in on-premises Exchange.

The FoldersCountReceiveQuota parameter is used to specify a maximum number of folders within a mailbox, typically a public folder mailbox. If this value is configured and the limit is reached, no new folders will be able to be created.

To see the current value of this property, run the command Get-MailboxStatistics \<MailboxIdentity\> | Format-List FoldersCountReceiveQuota

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FoldersCountWarningQuota
This parameter is available only in on-premises Exchange.

The FoldersCountWarningQuota parameter is used to display a warning message that the folder hierarchy is full when the value specified for this parameter is reached. This parameter is typically used for public folder mailboxes.

To see the current value of this property, run the command Get-MailboxStatistics \<MailboxIdentity\> | Format-List FoldersCountReceiveQuota

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GMGen
This parameter is available only in on-premises Exchange.

The GMGen parameter specifies whether the arbitration mailbox (also called anorganization mailbox) is used for group metrics generation for the organization. In MailTips, group metrics information is used to indicate the number of recipients in a message or whether recipients are outside your organization. You can use this parameter only on an arbitration mailbox.

Valid values are $true or $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImListMigrationCompleted
The ImListMigrationCompleted parameter specifies whether a user's Lync or Skype for Business contact list is stored in their mailbox.

Valid values are:

- $true: The user's Lync or Skype for Business contact list is stored in their Exchange 2016 mailbox. This prevents you from migrating the mailbox back to an Exchange 2010 server.

- $false: The user's Lync or Skype for Business contact list is stored on a Lync or Skype for Business server. This doesn't prevent you from migrating the mailbox back to an Exchange 2010 server. This is the default value.

Lync Server 2013 and Skype for Business Server 2015 support storing the user's contact list in their Exchange 2016 mailbox. This feature is known as the unified contact store (UCS), and it allows applications to show a consistent, up-to-date contact list. However, Exchange 2010 doesn't support the unified contact store. Therefore, before you migrate a user's Exchange 2016 mailbox back to Exchange 2010, you need to move the user's Lync or Skype for Business contact list from the unified contact store back to a Lync 2013 or Skype for Business server. For more information, see Configuring Microsoft Lync Server 2013 to use the unified contact store (https://go.microsoft.com/fwlink/p/?LinkID=313550).

If you migrate an Exchange 2013 mailbox back to Exchange 2010 while the user's Lync or Skype for Business contact list is stored in the unified contact store, the user could permanently lose access to those contacts. After you verify the user's Lync or Skype for Business contact list has been moved back to a Lync 2013 or Skype for Business server, you should be able to complete the mailbox migration. If you need to migrate the mailbox despite the potential for data loss, you can manually set the ImListMigrationCompleted parameter to $false.

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

### -IsExcludedFromServingHierarchy
The IsExcludedFromServingHierarchy parameter prevents users from accessing the public folder hierarchy on this public folder mailbox. For load-balancing purposes, users are equally distributed across public folder mailboxes by default. When this parameter is set on a public folder mailbox, that mailbox isn't included in this automatic load-balancing and won't be accessed by users to retrieve the public folder hierarchy. However, if an administrator has set the DefaultPublicFolderMailbox property on a user mailbox to a specific public folder mailbox, the user will still access the specified public folder mailbox even if the IsExcludedFromServingHierarchy parameter is set for that public folder mailbox.

You should use this parameter only during public folder migrations. Don't use this parameter once the initial migration validation is complete.

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

### -IsHierarchyReady
This parameter is reserved for internal Microsoft use.

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

### -JournalArchiveAddress
This parameter is reserved for internal Microsoft use.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxMessagesPerFolderCountReceiveQuota
The MailboxMessagesPerFolderCountReceiveQuota parameter specifies the maximum number of messages for a mailbox folder. When this limit is reached, the folder can't receive new messages.

The MailboxMessagesPerFolderCountReceiveQuota value must be greater than or equal to the MailboxMessagesPerFolderCountWarningQuota value.

To see the current value of this property, run the command Get-MailboxStatistics \<MailboxIdentity\> | Format-List MailboxMessagesPerFolderCountReceiveQuota

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

### -MailboxMessagesPerFolderCountWarningQuota
The MailboxMessagesPerFolderCountWarningQuota parameter specifies the number of messages that a mailbox folder can hold before Exchange sends a warning message to the mailbox owner and logs an event to the application event log. When this quota is reached, warning messages and logged events occur once a day.

The MailboxMessagesPerFolderCountReceiveQuota value must be greater than or equal to the MailboxMessagesPerFolderCountWarningQuota value.

To see the current value of this property, run the command Get-MailboxStatistics \<MailboxIdentity\> | Format-List MailboxMessagesPerFolderCountWarningQuota

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

### -MailboxProvisioningConstraint
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxProvisioningConstraint
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxProvisioningPreferences
This parameter is reserved for internal Microsoft use.

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

### -Management
This parameter is available only in on-premises Exchange.

The Management parameter specifies whether the arbitration mailbox (also call an organization mailbox) is used to manage mailbox moves and mailbox migrations. You can use this parameter only on an arbitration mailbox.

Valid values are $true or $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageCopyForSendOnBehalfEnabled
The MessageCopyForSendOnBehalfEnabled parameter specifies whether to copy the sender for messages that are sent from a mailbox by users that have the "send on behalf of" permission. Valid values are:

- $true: When a user sends a message from the mailbox by using the "send on behalf of" permission, a copy of the message is sent to the sender's mailbox.

- $false: When a user sends a message from the mailbox by using the "send on behalf of" permission, a copy of the message isn't sent to the sender's mailbox. This is the default value.

You give users permission to send on behalf of a mailbox by using the GrantSendOnBehalfTo parameter on the mailbox.

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

### -MessageCopyForSentAsEnabled
The MessageCopyForSentAsEnabled parameter specifies whether to copy the sender for messages that are sent from a mailbox by users that have the "send as" permission. Valid values are:

- $true: When a user sends a message from the mailbox by using the "send as" permission, a copy of the message is sent to the sender's mailbox.

- $false: When a user sends a message from the mailbox by using the "send as" permission, a copy of the message isn't sent to the sender's mailbox. This is the default value.

In Exchange Online, you give a user permission to send as a mailbox by running this command: Add-RecipientPermission \<Mailbox\> -AccessRights SendAs -Trustee \<User\>.

In on-premises Exchange, you give a user permission to send as a mailbox by running this command: Add-ADPermission \<Mailbox\> -ExtendedRights "Send As" -User \<User\>.

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

### -MessageTracking
This parameter is available only in on-premises Exchange.

The MessageTracking parameter specifies whether the arbitration mailbox (also called an organization mailbox) is the anchor mailbox that's used for cross-organizational message tracking scenarios. By default, the message tracking organizational capability is assigned to the arbitration mailbox named SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}. You can use this parameter only on an arbitration mailbox.

Valid values are$true or $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: FalseNamed
Position: 
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftOnlineServicesID
The MicrosoftOnlineServicesID parameter specifies the user ID for the object. This parameter only applies to objects in the cloud-based service. It isn't available for on-premises deployments.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Migration
This parameter is reserved for internal Microsoft use.

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

### -NewPassword
This parameter is available only in on-premises Exchange.

The NewPassword parameter is used with the OldPassword parameter when a user changes their own password in Outlook on the web. By default, the NewPassword and OldPassword parameters are also available to members of the Help Desk and Organization Management role groups via the User Options role. However, administrators use the Password parameter to reset a user's password, because that parameter doesn't require the user's current password.

This parameter uses the syntax (ConvertTo-SecureString -String '\<password\>' -AsPlainText -Force). Or, to be prompted to enter the password and store it as a variable, run the command $password = Read-Host "Enter password" -AsSecureString, and then use the value $password for this parameter.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OldPassword
This parameter is available only in on-premises Exchange.

The OldPassword parameter is used with the NewPassword parameter when a user changes their own password in Outlook on the web. By default, the NewPassword and OldPassword parameters are also available to members of the Help Desk and Organization Management role groups via the User Options role. However, administrators typically use the Password parameter to reset a user's password, because that parameter doesn't require the user's current password.

This parameter uses the syntax (ConvertTo-SecureString -String '\<password\>' -AsPlainText -Force). Or, to be prompted to enter the password and store it as a variable, run the command $password = Read-Host "Enter password" -AsSecureString, and then use the value $password for this parameter.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OMEncryption
This parameter is reserved for internal Microsoft use.

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

### -PstProvider
This parameter is reserved for internal Microsoft use.

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

### -PublicFolder
The PublicFolder switch specifies that the mailbox is a public folder mailbox. This switch is required only when you modify public folder mailboxes. You don't need to specify a value with this switch.

Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueryBaseDN
This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoomMailboxPassword
Use the RoomMailboxPassword parameter to changethe password for a room mailbox that has an enabled account (the EnableRoomMailboxAccount parameter is set to the value $true.)

This parameter uses the syntax (ConvertTo-SecureString -String '\<password\>' -AsPlainText -Force). Or, to be prompted to enter the password and store it as a variable, run the command $password = Read-Host "Enter password" -AsSecureString, and then use the value $password for this parameter.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMailboxProvisioningConstraintValidation
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDataStorage
This parameter is available only in on-premises Exchange.

The UMDataStorage parameter specifies whether the arbitration mailbox (also called anorganization mailbox) is used to store UM call data records and UM custom prompts. This capability can be assigned to only one arbitration mailbox for the organization. You can use this parameter only on an arbitration mailbox.

Valid values are $true or $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMGrammar
This parameter is available only in on-premises Exchange.

The UMGrammar parameter specifies whether the arbitration mailbox (also called anorganization mailbox) is used for UM directory speech grammar generation for the organization. UM directory speech grammars will be generated and used on the Mailbox server of this arbitration mailbox. UM directory speech grammars are used in speech-enabled directory search features, such as UM auto attendants. You can use this parameter only on an arbitration mailbox.

Valid values are $true or $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Parameter Sets: Set4
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveDelayHoldApplied
This parameter is available only in the cloud-based service.

The RemoveDelayHoldApplied switch specifies whether to remove delay holds from the mailbox. You don't need to specify a value with this switch.

The removal of a hold from a mailbox is temporarily delayed to prevent the accidental purge of content that's no longer affected by the hold. This temporary delay in the removal of the hold is known as a delay hold. To see the hold history on a mailbox, replace \<MailboxIdentity\> with the name, email address, or alias of the mailbox, and run this command: Export-MailboxDiagnosticLogs -Identity \<MailboxIdentity\> -ComponentName HoldTracking.

```yaml
Type: SwitchParameter
Parameter Sets: Set5
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveDisabledArchive
This parameter is available only in the cloud-based service.

The RemoveDisabledArchive switch specifies whether to remove the disabled archive that's associated with the mailbox. You don't need to specify a value with this switch.

### -AccountDisabled
The AccountDisabled switch specifies whether to disable the account that's associated with the mailbox. Valid values are:

- $true: The associated account is disabled. The user can't log in to the mailbox.

- $false: The associated account is enabled. The user can log in to the mailbox.

```yaml
Type: $true | $false
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AttributesToClear
This parameter is reserved for internal Microsoft use.

```yaml
Type: SetMailbox+ClearableADAttributes[]
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditStorageEndTimeUTC
This parameter is reserved for internal Microsoft use.

```yaml
Type: DateTime
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditStorageStartTimeUTC
This parameter is reserved for internal Microsoft use.

```yaml
Type: DateTime
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditStorageState
This parameter is reserved for internal Microsoft use.

```yaml
Type: None | Online | Offline
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuxAuditLog
This parameter is available only in on-premises Exchange.

The AuxAuditLog switch specifies the mailbox you're modifying is an arbitration mailbox that's used to store audit log data. You don't need to specify a value with this switch.

Notes:

- If you don't use this switch, the command can't find this type of arbitration mailbox.

- The Arbitration switch doesn't work for modifying this type of arbitration mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016
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
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Online
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
Type: $true | $false
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InactiveMailbox
This parameter is available only in the cloud-based service.

The InactiveMailboxswitch specifies that the mailbox is an inactive mailbox. You don't need to specify a value with this switch.

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted.

To find inactive mailboxes, run the command Get-Mailbox -InactiveMailboxOnly | FL Name,PrimarySmtpAddress,DistinguishedName,ExchangeGuid and then use the DistinguishedName or ExchangeGuid property values for the Identity parameter (values guaranteed to be unique).

This switch is required to use the LitigationHoldEnabled and LitigationHoldDuration parameters on inactive mailboxes.

You can't use this switch to modify other properties on inactive mailboxes.

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsHierarchySyncEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxRegion
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OABReplica
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OMEncryptionStore
PARAMVALUE: $true | $false

```yaml
Type: $true | $false
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProvisionedForOfficeGraph
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiloName
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipDualWrite
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
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
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SystemMessageSizeShutoffQuota
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int64
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SystemMessageSizeWarningQuota
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int64
Parameter Sets: Set4, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/a0d413b9-d949-4df6-ba96-ac0906dedae2.aspx)
