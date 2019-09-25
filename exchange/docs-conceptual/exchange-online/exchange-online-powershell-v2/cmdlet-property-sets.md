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

## Get-ExoCasMailbox property sets

The available property sets for this cmdlet and the properties they contain are described in the following table:

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

**Note**: The following **Get-CasMailbox** parameters aren't available on **Get-ExoCasMailbox**:

- *ActiveSyncDebugLogging*

- *IgnoreDefaultScope*

- *ReadIsOptimizedForAccessibility*

- *SortBy*

### See also

- [Get-ExoCASMailbox](https://review.docs.microsoft.com/powershell/module/exchange/exchange-ps-v2-module/get-exocasmailbox?branch=ExORestModule-chrisda)

- [Get-CASMailbox](https://docs.microsoft.com/powershell/module/exchange/client-access/get-casmailbox)

## Get-ExOMailbox property sets

The available property sets for this cmdlet and the properties they contain are described in the following table:

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

**Note**: The following **Get-Mailbox** parameters aren't available on **Get-ExoMailbox**:

- *Async*

- *GroupMailbox*

- *Migration*

- *PublicFolder*

- *SortBy*

### See also

- [Get-ExoMailbox](https://review.docs.microsoft.com/powershell/module/exchange/exchange-ps-v2-module/get-exomailbox?branch=ExORestModule-chrisda)

- [Get-Mailbox](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailbox)
