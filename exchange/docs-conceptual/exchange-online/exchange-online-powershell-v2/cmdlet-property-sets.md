---
title: Property sets in Exchange Online PowerShell V2 cmdlets"
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
ms.topic: article
ms.service: exchange-online
localization_priority: Priority
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn about the available property sets in the Exchange Online PowerShell V2 module."
---

# Property sets in Exchange Online PowerShell V2 cmdlets

This topic describes the property sets that are available in the new cmdlets in the [Exchange Online PowerShell V2 module](exchange-online-powershell-v2.md). For more information about property sets, see [Properties and property sets](exchange-online-powershell-v2.md#properties-and-property-sets).

## Get-EXOCasMailbox property sets

The available property sets for the **Get-EXOCasMailbox** cmdlet and the properties they contain are described in the following table:

|||
|:-----|:-----|
|**PropertySet**|**Properties**|
|**Minimum**|ActiveSyncEnabled <br/> DisplayName <br/> ECPEnabled <br/> EmailAddresses <br/> EwsEnabled <br/> ExchangeVersion <br/> Guid <br/> Identity <br/> ImapEnabled <br/> MAPIEnabled <br/> Name <br/> OWAEnabled <br/> OrganizationId <br/> PopEnabled <br/> PrimarySmtpAddress <br/> ServerLegacyDN|
|**ActiveSync**|ActiveSyncAllowedDeviceIDs <br/> ActiveSyncBlockedDeviceIDs <br/> ActiveSyncEnabled <br/> ActiveSyncMailboxPolicy <br/> ActiveSyncMailboxPolicyIsDefaulted <br/> ActiveSyncSuppressReadReceipt <br/> ExternalDirectoryObjectId <br/> Guid <br/> HasActiveSyncDevicePartnership <br/> Identity <br/> Name <br/> OrganizationId|
|**Ews**|EwsAllowMacOutlook <br/> EwsAllowOutlook <br/> EwsEnabled <br/> ExternalDirectoryObjectId <br/> Guid <br/> Identity <br/> Name <br/> OrganizationId|
|**Imap**|ExternalDirectoryObjectId <br/> Guid <br/> Identity <br/> ImapEnableExactRFC822Size <br/> ImapEnabled <br/> ImapForceICalForCalendarRetrievalOption <br/> ImapMessagesRetrievalMimeFormat <br/> ImapSuppressReadReceipt <br/> ImapUseProtocolDefaults <br/> Name <br/> OrganizationId|
|**Mapi**|ExternalDirectoryObjectId <br/> Guid <br/> Identity <br/> MAPIBlockOutlookExternalConnectivity <br/> MAPIBlockOutlookNonCachedMode <br/> MAPIBlockOutlookRpcHttp <br/> MAPIBlockOutlookVersions <br/> MAPIEnabled <br/> MapiHttpEnabled <br/> Name <br/> OrganizationId|
|**Pop**|ExternalDirectoryObjectId <br/> Guid <br/> Identity <br/> Name <br/> OrganizationId <br/> PopEnableExactRFC822Size <br/> PopEnabled <br/> PopMessagesRetrievalMimeFormat <br/> PopSuppressReadReceipt <br/> PopUseProtocolDefaults|
|**ProtocolSettings**|ExternalDirectoryObjectId <br/> ExternalImapSettings <br/> ExternalPopSettings <br/> ExternalSmtpSettings <br/> Guid <br/> Identity <br/> InternalImapSettings <br/> InternalPopSettings <br/> InternalSmtpSettings <br/> Name <br/> OrganizationId|

**Note**: The following **Get-CasMailbox** parameters aren't available on **Get-EXOCasMailbox**:

- *ActiveSyncDebugLogging*

- *IgnoreDefaultScope*

- *ReadIsOptimizedForAccessibility*

- *SortBy*

For more information, see:

- [Get-EXOCASMailbox](https://review.docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exocasmailbox?branch=EXORestModule-chrisda)

- [Get-CASMailbox](https://docs.microsoft.com/powershell/module/exchange/client-access/get-casmailbox)

## Get-EXOMailbox property sets

The available property sets for the **Get-EXOMailbox** cmdlet and the properties they contain are described in the following table:

|||
|:-----|:-----|
|**PropertySet**|**Properties**|
|**Minimum**|Alias <br/> DisplayName <br/> DistinguishedName <br/> EmailAddresses <br/> ExchangeVersion <br/> ExternalDirectoryObjectId <br/> Guid <br/> Id <br/> Name <br/> OrganizationId <br/> PrimarySmtpAddress <br/> RecipientType <br/> RecipientTypeDetails <br/> UserPrincipalName|
|**AddressList**|AddressBookPolicy <br/> AddressListMembership <br/> ExternalDirectoryObjectId <br/> GeneratedOfflineAddressBooks <br/> HiddenFromAddressListsEnabled <br/> OfflineAddressBook|
|**Archive**|ArchiveDatabase <br/> ArchiveDomain <br/> ArchiveGuid <br/> ArchiveName <br/> ArchiveQuota <br/> ArchiveRelease <br/> ArchiveState <br/> ArchiveStatus <br/> ArchiveWarningQuota <br/> AutoExpandingArchiveEnabled <br/> DisabledArchiveDatabase <br/> DisabledArchiveGuid <br/> ExternalDirectoryObjectId <br/> JournalArchiveAddress|
|**Audit**|AuditAdmin <br/> AuditDelegate <br/> AuditEnabled <br/> AuditLogAgeLimit <br/> AuditOwner <br/> DefaultAuditSet <br/> ExternalDirectoryObjectId|
|**Custom**|CustomAttribute1 <br/> CustomAttribute2 <br/> CustomAttribute3 <br/> CustomAttribute4 <br/> CustomAttribute5 <br/> CustomAttribute6 <br/> CustomAttribute7 <br/> CustomAttribute8 <br/> CustomAttribute9 <br/> CustomAttribute10 <br/> CustomAttribute11 <br/> CustomAttribute12 <br/> CustomAttribute13 <br/> CustomAttribute14 <br/> CustomAttribute15 <br/> ExtensionCustomAttribute1 <br/> ExtensionCustomAttribute2 <br/> ExtensionCustomAttribute3 <br/> ExtensionCustomAttribute4 <br/> ExtensionCustomAttribute5 <br/> ExternalDirectoryObjectId|
|**Delivery**|AcceptMessagesOnlyFrom <br/> AcceptMessagesOnlyFromDLMembers <br/> AcceptMessagesOnlyFromSendersOrMembers <br/> DeliverToMailboxAndForward <br/> DowngradeHighPriorityMessagesEnabled <br/> ExternalDirectoryObjectId <br/> ForwardingAddress <br/> ForwardingSmtpAddress <br/> GrantSendOnBehalfTo <br/> MaxBlockedSenders <br/> MaxReceiveSize <br/> MaxSafeSenders <br/> MaxSendSize <br/> MessageCopyForSendOnBehalfEnabled <br/> MessageCopyForSentAsEnabled <br/> MessageRecallProcessingEnabled <br/> MessageTrackingReadStatusEnabled <br/> RecipientLimits <br/> RejectMessagesFrom <br/> RejectMessagesFromDLMembers <br/> RejectMessagesFromSendersOrMembers <br/> RulesQuota|
|**Hold**|ComplianceTagHoldApplied <br/> DelayHoldApplied <br/> ExternalDirectoryObjectId <br/> InPlaceHolds <br/> InactiveMailboxRetireTime <br/> LitigationHoldDate <br/> LitigationHoldDuration <br/> LitigationHoldEnabled <br/> LitigationHoldOwner|
|**Moderation**|BypassModerationFromSendersOrMembers <br/> ExternalDirectoryObjectId <br/> ModeratedBy <br/> ModerationEnabled <br/> SendModerationNotifications|
|**Move**|ExternalDirectoryObjectId <br/> MailboxMoveBatchName <br/> MailboxMoveFlags <br/> MailboxMoveRemoteHostName <br/> MailboxMoveSourceMDB <br/> MailboxMoveStatus <br/> MailboxMoveTargetMDB|
|**Policy**|AddressBookPolicy <br/> DataEncryptionPolicy <br/> EmailAddressPolicyEnabled <br/> ExternalDirectoryObjectId <br/> ManagedFolderMailboxPolicy <br/> PoliciesExcluded <br/> PoliciesIncluded <br/> RemoteAccountPolicy <br/> RetentionPolicy <br/> RetentionUrl <br/> RoleAssignmentPolicy <br/> SharingPolicy <br/> ThrottlingPolicy|
|**PublicFolder**|DefaultPublicFolderMailbox <br/> EffectivePublicFolderMailbox <br/> ExternalDirectoryObjectId <br/> IsExcludedFromServingHierarchy <br/> IsHierarchyReady <br/> IsHierarchySyncEnabled <br/> IsRootPublicFolderMailbox|
|**Quota**|ArchiveQuota <br/> ArchiveWarningQuota <br/> CalendarLoggingQuota <br/> ExternalDirectoryObjectId <br/> IssueWarningQuota <br/> ProhibitSendQuota <br/> ProhibitSendReceiveQuota <br/> RecoverableItemsQuota <br/> RecoverableItemsWarningQuota <br/> RulesQuota <br/> UseDatabaseQuotaDefaults|
|**Resource**|ExternalDirectoryObjectId <br/> IsResource <br/> ResourceCapacity <br/> ResourceCustom <br/> ResourceType <br/> RoomMailboxAccountEnabled|
|**Retention**|EndDateForRetentionHold <br/> ExternalDirectoryObjectId <br/> OrphanSoftDeleteTrackingTime <br/> RetainDeletedItemsFor <br/> RetainDeletedItemsUntilBackup <br/> RetentionComment <br/> RetentionHoldEnabled <br/> RetentionPolicy <br/> RetentionUrl <br/> SingleItemRecoveryEnabled <br/> StartDateForRetentionHold <br/> UseDatabaseRetentionDefaults|
|**SCL**|AntispamBypassEnabled <br/> ExternalDirectoryObjectId <br/> SCLDeleteEnabled <br/> SCLDeleteThreshold <br/> SCLJunkEnabled <br/> SCLJunkThreshold <br/> SCLQuarantineEnabled <br/> SCLQuarantineThreshold <br/> SCLRejectEnabled <br/> SCLRejectThreshold|
|**SoftDelete**|ExternalDirectoryObjectId <br/> IncludeInGarbageCollection <br/> IsInactiveMailbox <br/> IsSoftDeletedByDisable <br/> IsSoftDeletedByRemove <br/> WhenSoftDeleted|
|**StatisticsSeed**|ArchiveDatabaseGuid <br/> DatabaseGuid <br/> ExchangeGuid <br/> ExternalDirectoryObjectId|

**Note**: The following **Get-Mailbox** parameters aren't available on **Get-EXOMailbox**:

- *Async*

- *GroupMailbox*

- *Migration*

- *PublicFolder*

- *SortBy*

For more information, see:

- [Get-EXOMailbox](https://review.docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomailbox?branch=EXORestModule-chrisda)

- [Get-Mailbox](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailbox)

## Get-EXORecipient property sets

The available property sets for the **Get-EXORecipient** cmdlet and the properties they contain are described in the following table:

|||
|:-----|:-----|
|**PropertySet**|**Properties**|
|Minimum|ExchangeVersion <br/> ExternalDirectoryObjectID <br/> Name <br/> OrganizationId <br/> RecipientType <br/> RecipientTypeDetails|
|Archive|ArchiveDatabase <br/> ArchiveGuid <br/> ArchiveRelease <br/> ArchiveState <br/> ArchiveStatus|
|Custom|CustomAttribute1 <br/> CustomAttribute2 <br/> CustomAttribute3 <br/> CustomAttribute4 <br/> CustomAttribute5 <br/> CustomAttribute6 <br/> CustomAttribute7 <br/> CustomAttribute8 <br/> CustomAttribute9 <br/> CustomAttribute10 <br/> CustomAttribute11 <br/> CustomAttribute12 <br/> CustomAttribute13 <br/> CustomAttribute14 <br/> CustomAttribute15 <br/> ExtensionCustomAttribute1 <br/> ExtensionCustomAttribute2 <br/> ExtensionCustomAttribute3 <br/> ExtensionCustomAttribute4 <br/> ExtensionCustomAttribute5|
|MailboxMove|MailboxMoveBatchName <br/> MailboxMoveFlags <br/> MailboxMoveRemoteHostName <br/> MailboxMoveSourceMDB <br/> MailboxMoveStatus <br/> MailboxMoveTargetMDB|
|Policy|ActiveSyncMailboxPolicy <br/> ActiveSyncMailboxPolicyIsDefaulted <br/> AddressBookPolicy <br/> EmailAddressPolicyEnabled <br/> ManagedFolderMailboxPolicy <br/> OwaMailboxPolicy <br/> PoliciesExcluded <br/> PoliciesIncluded <br/> RetentionPolicy <br/> SharingPolicy <br/> ShouldUseDefaultRetentionPolicy <br/> UMMailboxPolicy|

**Note**: The following **Get-Recipient** parameters aren't available on **Get-EXORecipient**:

- *SortBy*

For more information, see:

- [Get-EXORecipient](https://review.docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exorecipient?branch=EXORestModule-chrisda)

- [Get-Recipient](https://docs.microsoft.com/powershell/module/exchange/users-and-groups/get-recipient)

### Get-EXOMailboxStatistics property sets

The available property sets for the **Get-EXOMailboxStatistics** cmdlet and the properties they contain are described in the following table:

|||
|:-----|:-----|
|**PropertySet**|**Properties**|
|Minimum|Database <br/> DatabaseName <br/> DisplayName <br/> ExternalDirectoryOrganizationId <br/> Identity <br/> IsArchiveMailbox <br/> LegacyDN <br/> MailboxGuid <br/> MailboxType <br/> MailboxTypeDetail <br/> MapiIdentity <br/> OwnerADGuid|
|AccessHistory|DisconnectDate <br/> LastCalendarTime <br/> LastContactsTime <br/> LastEmailTime <br/> LastFileTime <br/> LastInteractionTime <br/> LastLoggedOnUserAccount <br/> LastLogoffTime <br/> LastLogonTime <br/> LastProfileTime <br/> LastTasksTime <br/> LastUserAccessTime <br/> LastUserActionTime <br/> LastUserActionUpdateTime|
|All|CurrentSchemaVersion <br/> DataEncryptionPolicyId <br/> DisconnectReason <br/> FastIsEnabled <br/> IsAbandonedMoveDestination <br/> IsClutterEnabled <br/> IsDatabaseCopyActive <br/> IsEncrypted <br/> IsMoveDestination <br/> IsQuarantined <br/> IsValid <br/> KeyVersionIDs <br/> NeedsToMove <br/> ObjectClass <br/> ObjectState <br/> QuarantineEnd <br/> ResourceUsageRollingAvgDatabaseReads <br/> ResourceUsageRollingAvgRop <br/> ResourceUsageRollingClientTypes <br/> StorageLimitStatus <br/> SystemMessageCount <br/> SystemMessageSize|
|BigFunnel|BigFunnelCorruptedCount <br/> BigFunnelCorruptedSize <br/> BigFunnelFilterTableAvailableSize <br/> BigFunnelFilterTableTotalSize <br/> BigFunnelIndexedCount <br/> BigFunnelIndexedSize <br/> BigFunnelIsEnabled <br/> BigFunnelLargePOITableAvailableSize <br/> BigFunnelLargePOITableTotalSize <br/> BigFunnelMailboxCreationVersion <br/> BigFunnelMaintainRefiners <br/> BigFunnelMessageCount <br/> BigFunnelNotIndexedCount <br/> BigFunnelNotIndexedSize <br/> BigFunnelPartiallyIndexedCount <br/> BigFunnelPartiallyIndexedSize <br/> BigFunnelPostingListTableAvailableSize <br/> BigFunnelPostingListTableTotalSize <br/> BigFunnelShouldNotBeIndexedCount <br/> BigFunnelShouldNotBeIndexedSize <br/> BigFunnelStaleCount <br/> BigFunnelStaleSize <br/> BigFunnelTotalPOISize <br/> BigFunnelUpgradeInProgress|
|Item|AssociatedItemCount <br/> DeletedItemCount <br/> ItemCount <br/> TotalDeletedItemSize <br/> TotalItemSize|
|MCDB|MCDBBigFunnelFilterTableAvailableSize <br/> MCDBBigFunnelFilterTablePercentReplicated <br/> MCDBBigFunnelFilterTableTotalSize <br/> MCDBBigFunnelLargePOITableAvailableSize <br/> MCDBBigFunnelLargePOITablePercentReplicated <br/> MCDBBigFunnelLargePOITableTotalSize <br/> MCDBBigFunnelPostingListTableAvailableSize <br/> MCDBBigFunnelPostingListTablePercentReplicated <br/> MCDBBigFunnelPostingListTableTotalSize <br/> MCDBMessageTableAvailableSize <br/> MCDBMessageTablePercentReplicated <br/> MCDBMessageTableTotalSize <br/> MCDBOtherTablesAvailableSize <br/> MCDBOtherTablesTotalSize|
|MoveHistory|MoveHistory|
|MoveReport|MoveHistory|
|Quota|DatabaseIssueWarningQuota <br/> DatabaseProhibitSendQuota <br/> DatabaseProhibitSendReceiveQuota <br/> DumpsterMessagesPerFolderCountReceiveQuota <br/> DumpsterMessagesPerFolderCountWarningQuota <br/> FolderHierarchyChildrenCountReceiveQuota <br/> FolderHierarchyChildrenCountWarningQuota <br/> FolderHierarchyDepthReceiveQuota <br/> FolderHierarchyDepthWarningQuota <br/> FoldersCountReceiveQuota <br/> FoldersCountWarningQuota <br/> MailboxMessagesPerFolderCountReceiveQuota <br/> MailboxMessagesPerFolderCountWarningQuota <br/> NamedPropertiesCountQuota <br/> SystemMessageSizeWarningQuota <br/> SystemMessageSizeShutoffQuota|
|Table|AttachmentTableAvailableSize <br/> AttachmentTableTotalSize <br/> MailboxTableIdentifier <br/> MessageTableAvailableSize <br/> MessageTableTotalSize <br/> OtherTablesAvailableSize <br/> OtherTablesTotalSize|

For more information, see:

- Get-EXOMailboxStatistics

- [Get-MailboxStatistics](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailboxstatistics)

### Get-EXOMobileDeviceStatistics property sets

The available property sets for the **EXOMobileDeviceStatistics** cmdlet and the properties they contain are described in the following table:

|||
|:-----|:-----|
|**PropertySet**|**Properties**|
|Minimum|DeviceId <br/> Identity <br/> LastSuccessSync <br/> LastSyncAttemptTime|
|Access|DeviceAccessState <br/> DeviceAccessStateReason <br/> DeviceAccessControlRule|
|Device|ClientType <br/> DeviceEnableOutboundSMS <br/> DeviceFriendlyName <br/> DeviceID <br/> DeviceImei <br/> DeviceMobileOperator <br/> DeviceModel <br/> DeviceOS <br/> DeviceOSLanguage <br/> DevicePhoneNumber <br/> DeviceType <br/> DeviceUserAgent <br/> Status <br/> StatusNote|
|Others|Guid <br/> Identity <br/> MailboxLogReport <br/> RecoveryPassword|
|Policy|DevicePolicyApplicationStatus <br/> DevicePolicyApplied <br/> LastPolicyUpdateTime|
|Sync|FirstSyncTime <br/> LastPingHeartbeat <br/> LastSuccessSync <br/> LastSyncAttemptTime <br/> NumberOfFoldersSynced <br/> SyncStateUpgradeTime|
|Wipe|AccountOnlyDeviceWipeAckTime <br/> AccountOnlyDeviceWipeRequestTime <br/> AccountOnlyDeviceWipeSentTime <br/> DeviceWipeAckTime <br/> DeviceWipeRequestTime <br/> DeviceWipeSentTime <br/> IsRemoteWipeSupported <br/> LastAccountOnlyDeviceWipeRequestor <br/> LastDeviceWipeRequestor|

For more information, see:

- Get-EXOMobileDeviceStatistics

- [Get-MobileDeviceStatistics](https://docs.microsoft.com/powershell/module/exchange/devices/get-mobiledevicestatistics)
