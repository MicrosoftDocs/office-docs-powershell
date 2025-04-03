---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-organizationconfig
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Set-OrganizationConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-OrganizationConfig

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-OrganizationConfig cmdlet to configure various settings of an Exchange organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### ShortenEventScopeParameter
```
Set-OrganizationConfig -ShortenEventScopeDefault <ShortenEventScopeMode>
 [-AcceptedDomainApprovedSendersEnabled <Boolean>]
 [-ActivityBasedAuthenticationTimeoutEnabled <Boolean>]
 [-ActivityBasedAuthenticationTimeoutInterval <EnhancedTimeSpan>]
 [-ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled <Boolean>]
 [-AppsForOfficeEnabled <Boolean>]
 [-AsyncSendEnabled <Boolean>]
 [-AuditDisabled <Boolean>]
 [-AutodiscoverPartialDirSync <Boolean>]
 [-AutoEnableArchiveMailbox <Boolean>]
 [-AutoExpandingArchive]
 [-AutomaticForcedReadReceiptEnabled <Boolean>]
 [-BlockMoveMessagesForGroupFolders <Boolean>]
 [-BookingsAddressEntryRestricted <Boolean>]
 [-BookingsAuthEnabled <Boolean>]
 [-BookingsBlockedWordsEnabled <Boolean>]
 [-BookingsCreationOfCustomQuestionsRestricted <Boolean>]
 [-BookingsEnabled <Boolean>]
 [-BookingsExposureOfStaffDetailsRestricted <Boolean>]
 [-BookingsMembershipApprovalRequired <Boolean>]
 [-BookingsNamingPolicyEnabled <Boolean>]
 [-BookingsNamingPolicyPrefix <String>]
 [-BookingsNamingPolicyPrefixEnabled <Boolean>]
 [-BookingsNamingPolicySuffix <String>]
 [-BookingsNamingPolicySuffixEnabled <Boolean>]
 [-BookingsNotesEntryRestricted <Boolean>]
 [-BookingsPaymentsEnabled <Boolean>]
 [-BookingsPhoneNumberEntryRestricted <Boolean>]
 [-BookingsSearchEngineIndexDisabled <Boolean>]
 [-BookingsSmsMicrosoftEnabled <Boolean>]
 [-BookingsSocialSharingRestricted <Boolean>]
 [-ByteEncoderTypeFor7BitCharsets <Int32>]
 [-CalendarVersionStoreEnabled <Boolean>]
 [-ComplianceMLBgdCrawlEnabled <Boolean>]
 [-Confirm]
 [-ConnectorsActionableMessagesEnabled <Boolean>]
 [-ConnectorsEnabled <Boolean>]
 [-ConnectorsEnabledForOutlook <Boolean>]
 [-ConnectorsEnabledForSharepoint <Boolean>]
 [-ConnectorsEnabledForTeams <Boolean>]
 [-ConnectorsEnabledForYammer <Boolean>]
 [-CustomerLockboxEnabled <Boolean>]
 [-DefaultAuthenticationPolicy <AuthPolicyIdParameter>]
 [-DefaultGroupAccessType <ModernGroupObjectType>]
 [-DefaultMinutesToReduceLongEventsBy <Int32>]
 [-DefaultMinutesToReduceShortEventsBy <Int32>]
 [-DefaultPublicFolderAgeLimit <EnhancedTimeSpan>]
 [-DefaultPublicFolderDeletedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderIssueWarningQuota <Unlimited>]
 [-DefaultPublicFolderMaxItemSize <Unlimited>]
 [-DefaultPublicFolderMovedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderProhibitPostQuota <Unlimited>]
 [-DirectReportsGroupAutoCreationEnabled <Boolean>]
 [-DisablePlusAddressInRecipients <Boolean>]
 [-DistributionGroupDefaultOU <OrganizationalUnitIdParameter>]
 [-DistributionGroupNameBlockedWordsList <MultiValuedProperty>]
 [-DistributionGroupNamingPolicy <DistributionGroupNamingPolicy>]
 [-ElcProcessingDisabled <Boolean>]
 [-EnableForwardingAddressSyncForMailboxes <Boolean>]
 [-EnableOutlookEvents <Boolean>]
 [-EndUserDLUpgradeFlowsDisabled <Boolean>]
 [-EwsAllowEntourage <Boolean>]
 [-EwsAllowList <MultiValuedProperty>]
 [-EwsAllowMacOutlook <Boolean>]
 [-EwsAllowOutlook <Boolean>]
 [-EwsApplicationAccessPolicy <EwsApplicationAccessPolicy>]
 [-EwsBlockList <MultiValuedProperty>]
 [-EwsEnabled <Boolean>]
 [-ExchangeNotificationEnabled <Boolean>]
 [-ExchangeNotificationRecipients <MultiValuedProperty>]
 [-FindTimeAttendeeAuthenticationEnabled <Boolean>]
 [-FindTimeAutoScheduleDisabled <Boolean>]
 [-FindTimeLockPollForAttendeesEnabled <Boolean>]
 [-FindTimeOnlineMeetingOptionDisabled <Boolean>]
 [-FocusedInboxOn <Boolean>]
 [-HierarchicalAddressBookRoot <UserContactGroupIdParameter>]
 [-HybridRSVPEnabled <Boolean>]
 [-IPListBlocked <MultiValuedProperty>]
 [-IsAgendaMailEnabled <Boolean>]
 [-IsGroupFoldersAndRulesEnabled <Boolean>]
 [-IsGroupMemberAllowedToEditContent <Boolean>]
 [-LeanPopoutEnabled <Boolean>]
 [-LinkPreviewEnabled <Boolean>]
 [-MailTipsAllTipsEnabled <Boolean>]
 [-MailTipsExternalRecipientsTipsEnabled <Boolean>]
 [-MailTipsGroupMetricsEnabled <Boolean>]
 [-MailTipsLargeAudienceThreshold <UInt32>]
 [-MailTipsMailboxSourcedTipsEnabled <Boolean>]
 [-MaskClientIpInReceivedHeadersEnabled <Boolean>]
 [-MatchSenderOrganizerProperties <Boolean>]
 [-MessageHighlightsEnabled <Boolean>]
 [-MessageRecallAlertRecipientsEnabled <Boolean>]
 [-MessageRecallAlertRecipientsReadMessagesOnlyEnabled <Boolean>]
 [-MessageRecallEnabled <System.Boolean>]
 [-MessageRecallMaxRecallableAge <Microsoft.Exchange.Data.EnhancedTimeSpan>]
 [-MessageRemindersEnabled <Boolean>]
 [-MobileAppEducationEnabled <Boolean>]
 [-OAuth2ClientProfileEnabled <Boolean>]
 [-OnlineMeetingsByDefaultEnabled <Boolean>]
 [-OutlookGifPickerDisabled <Boolean>]
 [-OutlookMobileGCCRestrictionsEnabled <Boolean>]
 [-OutlookMobileHelpShiftEnabled <Boolean>]
 [-OutlookMobileSingleAccountEnabled <Boolean>]
 [-OutlookPayEnabled <Boolean>]
 [-OutlookTextPredictionDisabled <Boolean>]
 [-PerTenantSwitchToESTSEnabled <Boolean>]
 [-PostponeRoamingSignaturesUntilLater <Boolean>]
 [-PreferredInternetCodePageForShiftJis <Int32>]
 [-PublicComputersDetectionEnabled <Boolean>]
 [-PublicFoldersEnabled <PublicFoldersDeployment>]
 [-PublicFolderShowClientControl <Boolean>]
 [-ReadTrackingEnabled <Boolean>]
 [-RecallReadMessagesEnabled <System.Boolean>]
 [-RefreshSessionEnabled <Boolean>]
 [-RejectDirectSend <Boolean>]
 [-RemotePublicFolderMailboxes <MultiValuedProperty>]
 [-RequiredCharsetCoverage <Int32>]
 [-SendFromAliasEnabled <Boolean>]
 [-SharedDomainEmailAddressFlowEnabled <Boolean>]
 [-SiteMailboxCreationURL <Uri>]
 [-SmtpActionableMessagesEnabled <Boolean>]
 [-UnblockUnsafeSenderPromptEnabled <Boolean>]
 [-VisibleMeetingUpdateProperties <String>]
 [-WebPushNotificationsDisabled <Boolean>]
 [-WebSuggestedRepliesDisabled <Boolean>]
 [-WhatIf]
 [-WorkspaceTenantEnabled <Boolean>]
 [<CommonParameters>]
```

### AdfsAuthenticationParameter
```
Set-OrganizationConfig [-AdfsAudienceUris <MultiValuedProperty>] [-AdfsEncryptCertificateThumbprint <String>] [-AdfsIssuer <Uri>] [-AdfsSignCertificateThumbprints <MultiValuedProperty>]
 [-ACLableSyncedObjectEnabled <Boolean>]
 [-ActivityBasedAuthenticationTimeoutEnabled <Boolean>]
 [-ActivityBasedAuthenticationTimeoutInterval <EnhancedTimeSpan>]
 [-ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled <Boolean>]
 [-AppsForOfficeEnabled <Boolean>]
 [-AsyncSendEnabled <Boolean>]
 [-ByteEncoderTypeFor7BitCharsets <Int32>]
 [-Confirm]
 [-ConnectorsActionableMessagesEnabled <Boolean>]
 [-ConnectorsEnabled <Boolean>]
 [-CustomerFeedbackEnabled <Boolean>]
 [-DataClassifications <String>]
 [-DefaultAuthenticationPolicy <AuthPolicyIdParameter>]
 [-DefaultPublicFolderAgeLimit <EnhancedTimeSpan>]
 [-DefaultPublicFolderDeletedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderIssueWarningQuota <Unlimited>]
 [-DefaultPublicFolderMaxItemSize <Unlimited>]
 [-DefaultPublicFolderMovedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderProhibitPostQuota <Unlimited>]
 [-DistributionGroupDefaultOU <OrganizationalUnitIdParameter>]
 [-DistributionGroupNameBlockedWordsList <MultiValuedProperty>]
 [-DistributionGroupNamingPolicy <DistributionGroupNamingPolicy>]
 [-DomainController <Fqdn>]
 [-EmptyAddressBookForNonExchangeUsers]
 [-EnableAuthAdminReadSession]
 [-EnableDownloadDomains <Boolean>]
 [-EnableOrgWidePermissionOnScopedRoles]
 [-EwsAllowEntourage <Boolean>]
 [-EwsAllowList <MultiValuedProperty>]
 [-EwsAllowMacOutlook <Boolean>]
 [-EwsAllowOutlook <Boolean>]
 [-EwsApplicationAccessPolicy <EwsApplicationAccessPolicy>]
 [-EwsBlockList <MultiValuedProperty>]
 [-EwsEnabled <Boolean>]
 [-HierarchicalAddressBookRoot <UserContactGroupIdParameter>]
 [-Industry <IndustryType>]
 [-IsAgendaMailEnabled <Boolean>]
 [-IsExcludedFromOffboardMigration <Boolean>]
 [-IsExcludedFromOnboardMigration <Boolean>]
 [-IsFfoMigrationInProgress <Boolean>]
 [-LeanPopoutEnabled <Boolean>]
 [-LinkPreviewEnabled <Boolean>]
 [-MailboxDataEncryptionEnabled]
 [-MailTipsAllTipsEnabled <Boolean>]
 [-MailTipsExternalRecipientsTipsEnabled <Boolean>]
 [-MailTipsGroupMetricsEnabled <Boolean>]
 [-MailTipsLargeAudienceThreshold <UInt32>]
 [-MailTipsMailboxSourcedTipsEnabled <Boolean>]
 [-ManagedFolderHomepage <String>]
 [-MapiHttpEnabled <Boolean>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-MicrosoftExchangeRecipientEmailAddresses <ProxyAddressCollection>]
 [-MicrosoftExchangeRecipientEmailAddressPolicyEnabled <Boolean>]
 [-MicrosoftExchangeRecipientPrimarySmtpAddress <SmtpAddress>]
 [-MicrosoftExchangeRecipientReplyRecipient <RecipientIdParameter>]
 [-MitigationsEnabled <Boolean>]
 [-OabShadowDistributionOldestFileAgeLimit <EnhancedTimeSpan>]
 [-OAuth2ClientProfileEnabled <Boolean>]
 [-OrganizationSummary <MultiValuedProperty>]
 [-PreferredInternetCodePageForShiftJis <Int32>]
 [-PublicComputersDetectionEnabled <Boolean>]
 [-PublicFolderMailboxesLockedForNewConnections <Boolean>]
 [-PublicFolderMailboxesMigrationComplete <Boolean>]
 [-PublicFolderMigrationComplete <Boolean>]
 [-PublicFolderShowClientControl <Boolean>]
 [-PublicFoldersEnabled <PublicFoldersDeployment>]
 [-PublicFoldersLockedForMigration <Boolean>]
 [-ReadTrackingEnabled <Boolean>]
 [-RefreshSessionEnabled <Boolean>]
 [-RemotePublicFolderMailboxes <MultiValuedProperty>]
 [-RequiredCharsetCoverage <Int32>]
 [-SCLJunkThreshold <Int32>]
 [-SiteMailboxCreationURL <Uri>]
 [-SmtpActionableMessagesEnabled <Boolean>]
 [-UMAvailableLanguages <MultiValuedProperty>]
 [-UnblockUnsafeSenderPromptEnabled <Boolean>]
 [-UseIcsSyncStateStreaming]
 [-WACDiscoveryEndpoint <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### AdfsAuthenticationRawConfiguration
```
Set-OrganizationConfig [-AdfsAuthenticationConfiguration <String>]
 [-ACLableSyncedObjectEnabled <Boolean>]
 [-ActivityBasedAuthenticationTimeoutEnabled <Boolean>]
 [-ActivityBasedAuthenticationTimeoutInterval <EnhancedTimeSpan>]
 [-ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled <Boolean>]
 [-AppsForOfficeEnabled <Boolean>]
 [-AsyncSendEnabled <Boolean>]
 [-ByteEncoderTypeFor7BitCharsets <Int32>]
 [-Confirm]
 [-ConnectorsActionableMessagesEnabled <Boolean>]
 [-ConnectorsEnabled <Boolean>]
 [-CustomerFeedbackEnabled <Boolean>]
 [-DataClassifications <String>]
 [-DefaultAuthenticationPolicy <AuthPolicyIdParameter>]
 [-DefaultPublicFolderAgeLimit <EnhancedTimeSpan>]
 [-DefaultPublicFolderDeletedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderIssueWarningQuota <Unlimited>]
 [-DefaultPublicFolderMaxItemSize <Unlimited>]
 [-DefaultPublicFolderMovedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderProhibitPostQuota <Unlimited>]
 [-DistributionGroupDefaultOU <OrganizationalUnitIdParameter>]
 [-DistributionGroupNameBlockedWordsList <MultiValuedProperty>]
 [-DistributionGroupNamingPolicy <DistributionGroupNamingPolicy>]
 [-DomainController <Fqdn>]
 [-EmptyAddressBookForNonExchangeUsers]
 [-EnableAuthAdminReadSession]
 [-EnableDownloadDomains <Boolean>]
 [-EnableOrgWidePermissionOnScopedRoles]
 [-EwsAllowEntourage <Boolean>]
 [-EwsAllowList <MultiValuedProperty>]
 [-EwsAllowMacOutlook <Boolean>]
 [-EwsAllowOutlook <Boolean>]
 [-EwsApplicationAccessPolicy <EwsApplicationAccessPolicy>]
 [-EwsBlockList <MultiValuedProperty>]
 [-EwsEnabled <Boolean>]
 [-HierarchicalAddressBookRoot <UserContactGroupIdParameter>]
 [-Industry <IndustryType>]
 [-IsAgendaMailEnabled <Boolean>]
 [-IsExcludedFromOffboardMigration <Boolean>]
 [-IsExcludedFromOnboardMigration <Boolean>]
 [-IsFfoMigrationInProgress <Boolean>]
 [-LeanPopoutEnabled <Boolean>]
 [-LinkPreviewEnabled <Boolean>]
 [-MailboxDataEncryptionEnabled]
 [-MailTipsAllTipsEnabled <Boolean>]
 [-MailTipsExternalRecipientsTipsEnabled <Boolean>]
 [-MailTipsGroupMetricsEnabled <Boolean>]
 [-MailTipsLargeAudienceThreshold <UInt32>]
 [-MailTipsMailboxSourcedTipsEnabled <Boolean>]
 [-ManagedFolderHomepage <String>]
 [-MapiHttpEnabled <Boolean>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-MicrosoftExchangeRecipientEmailAddresses <ProxyAddressCollection>]
 [-MicrosoftExchangeRecipientEmailAddressPolicyEnabled <Boolean>]
 [-MicrosoftExchangeRecipientPrimarySmtpAddress <SmtpAddress>]
 [-MicrosoftExchangeRecipientReplyRecipient <RecipientIdParameter>]
 [-MitigationsEnabled <Boolean>]
 [-OabShadowDistributionOldestFileAgeLimit <EnhancedTimeSpan>]
 [-OAuth2ClientProfileEnabled <Boolean>]
 [-OrganizationSummary <MultiValuedProperty>]
 [-PreferredInternetCodePageForShiftJis <Int32>]
 [-PublicComputersDetectionEnabled <Boolean>]
 [-PublicFolderMailboxesLockedForNewConnections <Boolean>]
 [-PublicFolderMailboxesMigrationComplete <Boolean>]
 [-PublicFolderMigrationComplete <Boolean>]
 [-PublicFoldersEnabled <PublicFoldersDeployment>]
 [-PublicFolderShowClientControl <Boolean>]
 [-PublicFoldersLockedForMigration <Boolean>]
 [-ReadTrackingEnabled <Boolean>]
 [-RefreshSessionEnabled <Boolean>]
 [-RemotePublicFolderMailboxes <MultiValuedProperty>]
 [-RequiredCharsetCoverage <Int32>]
 [-SCLJunkThreshold <Int32>]
 [-SiteMailboxCreationURL <Uri>]
 [-SmtpActionableMessagesEnabled <Boolean>]
 [-UMAvailableLanguages <MultiValuedProperty>]
 [-UnblockUnsafeSenderPromptEnabled <Boolean>]
 [-UseIcsSyncStateStreaming]
 [-WACDiscoveryEndpoint <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### DelayedDelicensingParameterSet
```
Set-OrganizationConfig [-DelayedDelicensingEnabled <Boolean>] [-EndUserMailNotificationForDelayedDelicensingEnabled <Boolean>] [-TenantAdminNotificationForDelayedDelicensingEnabled <Boolean>]
 [-AcceptedDomainApprovedSendersEnabled <Boolean>]
 [-ActivityBasedAuthenticationTimeoutEnabled <Boolean>]
 [-ActivityBasedAuthenticationTimeoutInterval <EnhancedTimeSpan>]
 [-ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled <Boolean>]
 [-AppsForOfficeEnabled <Boolean>]
 [-AsyncSendEnabled <Boolean>]
 [-AuditDisabled <Boolean>]
 [-AutodiscoverPartialDirSync <Boolean>]
 [-AutoEnableArchiveMailbox <Boolean>]
 [-AutoExpandingArchive]
 [-AutomaticForcedReadReceiptEnabled <Boolean>]
 [-BlockMoveMessagesForGroupFolders <Boolean>]
 [-BookingsAddressEntryRestricted <Boolean>]
 [-BookingsAuthEnabled <Boolean>]
 [-BookingsBlockedWordsEnabled <Boolean>]
 [-BookingsCreationOfCustomQuestionsRestricted <Boolean>]
 [-BookingsEnabled <Boolean>]
 [-BookingsExposureOfStaffDetailsRestricted <Boolean>]
 [-BookingsMembershipApprovalRequired <Boolean>]
 [-BookingsNamingPolicyEnabled <Boolean>]
 [-BookingsNamingPolicyPrefix <String>]
 [-BookingsNamingPolicyPrefixEnabled <Boolean>]
 [-BookingsNamingPolicySuffix <String>]
 [-BookingsNamingPolicySuffixEnabled <Boolean>]
 [-BookingsNotesEntryRestricted <Boolean>]
 [-BookingsPaymentsEnabled <Boolean>]
 [-BookingsPhoneNumberEntryRestricted <Boolean>]
 [-BookingsSearchEngineIndexDisabled <Boolean>]
 [-BookingsSmsMicrosoftEnabled <Boolean>]
 [-BookingsSocialSharingRestricted <Boolean>]
 [-ByteEncoderTypeFor7BitCharsets <Int32>]
 [-CalendarVersionStoreEnabled <Boolean>]
 [-ComplianceMLBgdCrawlEnabled <Boolean>]
 [-Confirm]
 [-ConnectorsActionableMessagesEnabled <Boolean>]
 [-ConnectorsEnabled <Boolean>]
 [-ConnectorsEnabledForOutlook <Boolean>]
 [-ConnectorsEnabledForSharepoint <Boolean>]
 [-ConnectorsEnabledForTeams <Boolean>]
 [-ConnectorsEnabledForYammer <Boolean>]
 [-CustomerLockboxEnabled <Boolean>]
 [-DefaultAuthenticationPolicy <AuthPolicyIdParameter>]
 [-DefaultGroupAccessType <ModernGroupObjectType>]
 [-DefaultPublicFolderAgeLimit <EnhancedTimeSpan>]
 [-DefaultPublicFolderDeletedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderIssueWarningQuota <Unlimited>]
 [-DefaultPublicFolderMaxItemSize <Unlimited>]
 [-DefaultPublicFolderMovedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderProhibitPostQuota <Unlimited>]
 [-DirectReportsGroupAutoCreationEnabled <Boolean>]
 [-DisablePlusAddressInRecipients <Boolean>]
 [-DistributionGroupDefaultOU <OrganizationalUnitIdParameter>]
 [-DistributionGroupNameBlockedWordsList <MultiValuedProperty>]
 [-DistributionGroupNamingPolicy <DistributionGroupNamingPolicy>]
 [-ElcProcessingDisabled <Boolean>]
 [-EnableForwardingAddressSyncForMailboxes <Boolean>]
 [-EnableOutlookEvents <Boolean>]
 [-EndUserDLUpgradeFlowsDisabled <Boolean>]
 [-EwsAllowEntourage <Boolean>]
 [-EwsAllowList <MultiValuedProperty>]
 [-EwsAllowMacOutlook <Boolean>]
 [-EwsAllowOutlook <Boolean>]
 [-EwsApplicationAccessPolicy <EwsApplicationAccessPolicy>]
 [-EwsBlockList <MultiValuedProperty>]
 [-EwsEnabled <Boolean>]
 [-ExchangeNotificationEnabled <Boolean>]
 [-ExchangeNotificationRecipients <MultiValuedProperty>]
 [-FindTimeAttendeeAuthenticationEnabled <Boolean>]
 [-FindTimeAutoScheduleDisabled <Boolean>]
 [-FindTimeLockPollForAttendeesEnabled <Boolean>]
 [-FindTimeOnlineMeetingOptionDisabled <Boolean>]
 [-FocusedInboxOn <Boolean>]
 [-HierarchicalAddressBookRoot <UserContactGroupIdParameter>]
 [-HybridRSVPEnabled <Boolean>]
 [-IPListBlocked <MultiValuedProperty>]
 [-IsAgendaMailEnabled <Boolean>]
 [-IsGroupFoldersAndRulesEnabled <Boolean>]
 [-IsGroupMemberAllowedToEditContent <Boolean>]
 [-LeanPopoutEnabled <Boolean>]
 [-LinkPreviewEnabled <Boolean>]
 [-MailTipsAllTipsEnabled <Boolean>]
 [-MailTipsExternalRecipientsTipsEnabled <Boolean>]
 [-MailTipsGroupMetricsEnabled <Boolean>]
 [-MailTipsLargeAudienceThreshold <UInt32>]
 [-MailTipsMailboxSourcedTipsEnabled <Boolean>]
 [-MaskClientIpInReceivedHeadersEnabled <Boolean>]
 [-MatchSenderOrganizerProperties <Boolean>]
 [-MessageHighlightsEnabled <Boolean>]
 [-MessageRecallEnabled <System.Boolean>]
 [-MessageRemindersEnabled <Boolean>]
 [-MobileAppEducationEnabled <Boolean>]
 [-OAuth2ClientProfileEnabled <Boolean>]
 [-OnlineMeetingsByDefaultEnabled <Boolean>]
 [-OutlookGifPickerDisabled <Boolean>]
 [-OutlookMobileGCCRestrictionsEnabled <Boolean>]
 [-OutlookMobileHelpShiftEnabled <Boolean>]
 [-OutlookMobileSingleAccountEnabled <Boolean>]
 [-OutlookPayEnabled <Boolean>]
 [-OutlookTextPredictionDisabled <Boolean>]
 [-PerTenantSwitchToESTSEnabled <Boolean>]
 [-PostponeRoamingSignaturesUntilLater <Boolean>]
 [-PreferredInternetCodePageForShiftJis <Int32>]
 [-PublicComputersDetectionEnabled <Boolean>]
 [-PublicFoldersEnabled <PublicFoldersDeployment>]
 [-PublicFolderShowClientControl <Boolean>]
 [-ReadTrackingEnabled <Boolean>]
 [-RefreshSessionEnabled <Boolean>]
 [-RemotePublicFolderMailboxes <MultiValuedProperty>]
 [-RequiredCharsetCoverage <Int32>]
 [-SendFromAliasEnabled <Boolean>]
 [-SharedDomainEmailAddressFlowEnabled <Boolean>]
 [-SiteMailboxCreationURL <Uri>]
 [-SmtpActionableMessagesEnabled <Boolean>]
 [-UnblockUnsafeSenderPromptEnabled <Boolean>]
 [-VisibleMeetingUpdateProperties <String>]
 [-WebPushNotificationsDisabled <Boolean>]
 [-WebSuggestedRepliesDisabled <Boolean>]
 [-WhatIf]
 [-WorkspaceTenantEnabled <Boolean>]
 [<CommonParameters>]
```

### Identity
```
Set-OrganizationConfig
 [-ActivityBasedAuthenticationTimeoutEnabled <Boolean>]
 [-ActivityBasedAuthenticationTimeoutInterval <EnhancedTimeSpan>]
 [-ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled <Boolean>]
 [-ByteEncoderTypeFor7BitCharsets <Int32>]
 [-Confirm]
 [-CustomerFeedbackEnabled <Boolean>]
 [-DefaultAuthenticationPolicy <AuthPolicyIdParameter>]
 [-DistributionGroupDefaultOU <OrganizationalUnitIdParameter>]
 [-DistributionGroupNameBlockedWordsList <MultiValuedProperty>]
 [-DistributionGroupNamingPolicy <DistributionGroupNamingPolicy>]
 [-DomainController <Fqdn>]
 [-EwsAllowEntourage <Boolean>]
 [-EwsAllowList <MultiValuedProperty>]
 [-EwsAllowMacOutlook <Boolean>]
 [-EwsAllowOutlook <Boolean>]
 [-EwsApplicationAccessPolicy <EwsApplicationAccessPolicy>]
 [-EwsBlockList <MultiValuedProperty>]
 [-EwsEnabled <Boolean>]
 [-Force]
 [-HierarchicalAddressBookRoot <UserContactGroupIdParameter>]
 [-Industry <IndustryType>]
 [-MailTipsAllTipsEnabled <Boolean>]
 [-MailTipsExternalRecipientsTipsEnabled <Boolean>]
 [-MailTipsGroupMetricsEnabled <Boolean>]
 [-MailTipsLargeAudienceThreshold <UInt32>]
 [-MailTipsMailboxSourcedTipsEnabled <Boolean>]
 [-ManagedFolderHomepage <String>]
 [-MicrosoftExchangeRecipientEmailAddresses <ProxyAddressCollection>]
 [-MicrosoftExchangeRecipientEmailAddressPolicyEnabled <Boolean>]
 [-MicrosoftExchangeRecipientPrimarySmtpAddress <SmtpAddress>]
 [-MicrosoftExchangeRecipientReplyRecipient <RecipientIdParameter>]
 [-OabShadowDistributionOldestFileAgeLimit <EnhancedTimeSpan>]
 [-OrganizationSummary <MultiValuedProperty>]
 [-PermanentlyDeleteDisabled <Boolean>]
 [-PreferredInternetCodePageForShiftJis <Int32>]
 [-PublicFolderContentReplicationDisabled <Boolean>]
 [-PublicFolderMigrationComplete <Boolean>]
 [-PublicFoldersLockedForMigration <Boolean>]
 [-ReadTrackingEnabled <Boolean>]
 [-RequiredCharsetCoverage <Int32>]
 [-SCLJunkThreshold <Int32>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION

> [!TIP]
> The output of the **Get-OrganizationConfig** cmdlet often shows curly braces or `{}` around properties values that accept multiple comma-separated values. Don't use those extra characters in values for the corresponding parameters on this cmdlet. Use the syntax as explained in the parameter descriptions.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-OrganizationConfig -DistributionGroupDefaultOU Users\Groups -DistributionGroupNameBlockedWordsList curse,bad,offensive -DistributionGroupNamingPolicy "DL_<GroupName>_<Department><CountryCode>"
```

This example creates a distribution group naming policy using the following configuration:

Distribution groups will be created in the Users\\Groups container.

The words curse, bad, and offensive will be blocked from being used in distribution group names.

All distribution groups will be prefixed with `DL_` and suffixed with an underscore (\_\) and the user's department and country code.

### Example 2
```powershell
Set-OrganizationConfig -EwsApplicationAccessPolicy EnforceBlockList -EwsBlockList $null
```

This example allows all client applications to use REST and EWS.

### Example 3
```powershell
Set-OrganizationConfig -EwsApplicationAccessPolicy EnforceBlockList -EwsBlockList "OtherApps*"
```

This example allows all client applications to use REST and EWS, except those that are specified by the EwsBlockList parameter.

### Example 4
```powershell
Set-OrganizationConfig -EwsApplicationAccessPolicy EnforceAllowList -EwsAllowList $null
```

This example prevents all client applications from using REST and EWS.

### Example 5
```powershell
Set-OrganizationConfig -EwsApplicationAccessPolicy EnforceAllowList -EwsAllowList "CorpApp*"
```

This example allows only the client applications specified by the EwsAllowList parameter to use REST and EWS.

### Example 6
```powershell
Set-OrganizationConfig -VisibleMeetingUpdateProperties "Location,Subject,Body,AllProperties:15"
```

In Exchange Online, this example results in meeting updates being auto-processed (meeting update messages aren't visible in attendee Inbox folders) except any changes to meeting location, subject and body as well as any property changes within 15 minutes of the meeting start time.

## PARAMETERS

### -ShortenEventScopeDefault
This parameter is available only in the cloud-based service.

The ShortenEventScopeDefault parameter specifies whether calendar events start late or end early in the organization. Valid values are:

- 0 or None: Calendar events in the organization don't automatically start late or end early. This is the default value.
- 1 or EndEarly: By default, the end time of all calendar events is reduced by the number of minutes as specified by the values of the DefaultMinutesToReduceLongEventsBy and DefaultMinutesToReduceShortEventsBy parameters.
- 2 or StartLate: By default, the start time of all calendar events is delayed by the number of minutes as specified by the values of the DefaultMinutesToReduceLongEventsBy and DefaultMinutesToReduceShortEventsBy parameters.

```yaml
Type: ShortenEventScopeMode
Parameter Sets: ShortenEventScopeParameter
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptedDomainApprovedSendersEnabled
This parameter is available only in the cloud-based service.

{{ Fill AcceptedDomainApprovedSendersEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ACLableSyncedObjectEnabled
This parameter is available only in on-premises Exchange.

The ACLableSyncedObjectEnabled parameter specifies whether remote mailboxes in hybrid environments are stamped as ACLableSyncedMailboxUser.

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActivityBasedAuthenticationTimeoutEnabled
The ActivityBasedAuthenticationTimeoutEnabled parameter enables or disables the inactivity interval for automatic logoff in Outlook on the web (formerly known as Outlook Web App). Valid values are:

- $true: The ActivityBasedAuthenticationTimeoutInterval parameter specifies the period of inactivity that causes logoff in Outlook on the web. This is the default value.
- $false: Automatic logoff based on a period of inactivity in Outlook on the web is disabled.

If you're using single sign-on, use the ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled parameter.

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

### -ActivityBasedAuthenticationTimeoutInterval
The ActivityBasedAuthenticationTimeoutInterval parameter specifies the period of inactivity that causes an automatic logoff in Outlook on the web.

You enter this value as a time span: hh:mm:ss where hh = hours, mm = minutes and ss = seconds.

Valid values for this parameter are from 00:05:00 to 08:00:00 (5 minutes to 8 hours). The default value is 06:00:00 (6 hours).

The value of this parameter is meaningful only if the ActivityBasedAuthenticationTimeoutEnabled or ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled parameter value is $true.

For more information about the activity-based timeout in Outlook on the web, see [Description of the Activity-Based Authentication Timeout for OWA in Office 365](https://support.microsoft.com/topic/0c101e1b-020e-69c1-a0b0-26532d60c0a4).

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

### -ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled
The ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled parameter enables or disables the inactivity interval for automatic logoff for single sign-on in Outlook on the Web. Valid values are:

- $true: The ActivityBasedAuthenticationTimeoutInterval parameter specifies the period of inactivity in Outlook on the web that causes logoff for single sign-on. This is the default value.
- $false: Automatic logoff based on a period of inactivity in Outlook on the web is disabled for single sign-on.

If you aren't using single sign-on, use the ActivityBasedAuthenticationTimeoutEnabled parameter.

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

### -AdfsAudienceUris
This parameter is available only in on-premises Exchange.

The AdfsAudienceUris parameter specifies one or more external URLs that are used for Active Directory Federation Services (AD FS) claims-based authentication. For example, the external Outlook on the web and external Exchange admin center (EAC) URLs.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

For more information about configuring AD FS claims based authentication in Exchange, see [Use AD FS claims-based authentication with Outlook on the web](https://learn.microsoft.com/Exchange/clients/outlook-on-the-web/ad-fs-claims-based-auth).

```yaml
Type: MultiValuedProperty
Parameter Sets: AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdfsAuthenticationConfiguration
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdfsEncryptCertificateThumbprint
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdfsIssuer
This parameter is available only in on-premises Exchange.

The AdfsIssuer parameter specifies URL of the AD FS server that's used for AD FS claims-based authentication. This is the URL where AD FS relying parties send users for authentication.

To get this value, open Windows PowerShell on the AD FS server and run the command Get-ADFSEndpoint -AddressPath /adfs/ls | Format-List FullUrl.

```yaml
Type: Uri
Parameter Sets: AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdfsSignCertificateThumbprints
This parameter is available only in on-premises Exchange.

The AdfsSignCertificateThumbprints parameter specifies one or more X.509 token-signing certificates that are used for AD FS claims-based authentication. This parameter uses certificate thumbprint values (GUIDs) to identify the certificates.

To get the thumbprint values of the primary and secondary token-signing certificates, open Windows PowerShell on the AD FS server and run the command Get-ADFSCertificate -CertificateType "Token-signing". For more information, see [Get-ADFSCertificate](https://learn.microsoft.com/powershell/module/adfs/get-adfscertificate).

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppsForOfficeEnabled
The AppsForOfficeEnabled parameter specifies whether to enable apps for Outlook features. By default, the parameter is set to $true. If the flag is set to $false, no new apps can be activated for any user in the organization.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsyncSendEnabled
The AsyncSendEnabled parameter specifies whether to enable or disable async send in Outlook on the web. Valid values are:

- $true: Async send is enabled. This is the default value.
- $false: Async send is disabled.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditDisabled
This parameter is available only in the cloud-based service.

The AuditDisabled parameter specifies whether to disable or enable mailbox auditing for the organization. Valid values are:

- $true: Mailbox auditing is disabled for the organization.
- $false: Allow mailbox auditing in the organization. This is the default value.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutodiscoverPartialDirSync
This parameter is available only in the cloud-based service.

The AutodiscoverPartialDirSync parameter is for scenarios where tenants have Directory Synced some of their Active Directory users into the cloud, but still have on-premises Exchange users that are not Directory Synced. Setting this parameter to $true will cause unknown users to be redirected to the on-premises endpoint and will allow on-premises users to discover their mailbox automatically. Online email addresses will be susceptible to enumeration. We recommend full Directory Sync for all Active Directory users and leaving this parameter with the default $false.

After you enable AutodiscoverPartialDirSync, it will take approximately 3 hours to fully saturate across the cloud.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoEnableArchiveMailbox
This parameter is available only in the cloud-based service.

When the AutoEnableArchiveMailbox parameter is enabled, an archive mailbox will be automatically provisioned when the primary mailbox reaches 90% of the quota (if licenses supports archiving). 


```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoExpandingArchive
This parameter is available only in the cloud-based service.

The AutoExpandingArchive switch enables the auto-expanding archiving feature in an Exchange Online organization. You don't need to specify a value with this switch.

After you enable auto-expanding archiving, additional storage space is automatically added to a user's archive mailbox when it approaches the storage limit. Note that a user's archive mailbox has to be enabled before auto-expanding archiving can take effect. Also note that after you enable auto-expanding archiving for your organization, it can't be disabled.

```yaml
Type: SwitchParameter
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomaticForcedReadReceiptEnabled
This parameter is available only in the cloud-based service.

{{ Fill AutomaticForcedReadReceiptEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockMoveMessagesForGroupFolders
This parameter is available only in the cloud-based service.

The BlockMoveMessagesForGroupFolders parameter specifies whether to prevent group owners or group members from moving messages between folders in Microsoft 365 Groups. Valid values are:

- $true: Group owners or group members can't move messages between folders in Microsoft 365 groups (manually or vial Inbox rules).
- $false: Group owners or group members can move messages between folders in Microsoft 365 groups. This is the default value.

The value of this parameter is meaningful only when the value of the IsGroupFoldersAndRulesEnabled parameter is $true.

Whether group members (not just group owners) are allowed to move messages between folders in Microsoft 365 Groups also depends on the following settings:

- The value of the IsGroupMemberAllowedToEditContent parameter is $true.
- The group owner selected **All members will be able to create, edit, move, copy, and delete mail folders and rules within the group** in the properties of the group in Outlook on the web.

For more information, see [Manage Folders and Rules feature in Microsoft 365 Groups](https://learn.microsoft.com/microsoft-365/enterprise/manage-folders-and-rules-feature).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsAddressEntryRestricted
This parameter is available only in the cloud-based service.

The BookingsAddressEntryRestricted parameter specifies whether addresses can be collected from Bookings customers. Valid values are:

- $true: Addresses can't be collected from Bookings customers.
- $false: Addresses can be collected from Bookings customers.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsAuthEnabled
This parameter is available only in the cloud-based service.

The BookingsAuthEnabled parameter specifies whether to enforce authentication to access all published Bookings pages. Valid values are:

- $true: All new and existing Bookings pages are forced to authenticate users before they can book the appointment.
- $false: All bookings pages are not forced to authenticate users.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsBlockedWordsEnabled
This parameter is available only in the cloud-based service.

{{ Fill BookingsBlockedWordsEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsCreationOfCustomQuestionsRestricted
This parameter is available only in the cloud-based service.

The BookingsCreationOfCustomQuestionsRestricted parameter specifies whether Bookings admins can add custom questions. Valid values are:

- $true: Bookings admins can't add custom questions.
- $false: Bookings admins can add custom questions.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsEnabled
This parameter is available only in the cloud-based service.

The BookingsEnabled parameter specifies whether to enable Microsoft Bookings in an organization. Valid values are:

- $true: Bookings is enabled.
- $false: Bookings is disabled. This is the default value.

Microsoft Bookings is an online and mobile app for small businesses who provide appointment services to customers.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsExposureOfStaffDetailsRestricted
This parameter is available only in the cloud-based service.

The BookingsExposureOfStaffDetailsRestricted parameter specifies whether the attributes of internal Bookings staff members (for example, email addresses) are visible to external Bookings customers. Valid values are:

- $true: Internal Bookings staff member attributes aren't visible to external Bookings customers.
- $false: Internal Bookings staff member attributes are visible to external Bookings customers.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsMembershipApprovalRequired
This parameter is available only in the cloud-based service.

The BookingsMembershipApprovalRequired parameter enables a membership approval requirement when new staff members are added to Bookings calendars. Valid values are:

- $true: Newly added staff members need to accept membership in Bookings calendars before the resources are bookable.
- $false: Newly added staff members do not need to accept membership in Bookings calendars to make the resources bookable.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsNamingPolicyEnabled
This parameter is available only in the cloud-based service.

{{ Fill BookingsNamingPolicyEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsNamingPolicyPrefix
This parameter is available only in the cloud-based service.

{{ Fill BookingsNamingPolicyPrefix Description }}

```yaml
Type: String
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsNamingPolicyPrefixEnabled
This parameter is available only in the cloud-based service.

{{ Fill BookingsNamingPolicyPrefixEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsNamingPolicySuffix
This parameter is available only in the cloud-based service.

{{ Fill BookingsNamingPolicySuffix Description }}

```yaml
Type: String
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsNamingPolicySuffixEnabled
This parameter is available only in the cloud-based service.

{{ Fill BookingsNamingPolicySuffixEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsNotesEntryRestricted
This parameter is available only in the cloud-based service.

The BookingsNotesEntryRestricted parameter specifies whether appointment notes can be collected from Bookings customers. Valid values are:

- $true: Appointment notes can't be collected from Bookings customers.
- $false: Appointment notes can be collected from Bookings customers.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsPaymentsEnabled
This parameter is available only in the cloud-based service.

The BookingsPaymentsEnabled parameter specifies whether to enable the online payment node inside Bookings. Valid values are:

- $true: Online payments are enabled.
- $false: Online payments are disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsPhoneNumberEntryRestricted
This parameter is available only in the cloud-based service.

The BookingsPhoneNumberEntryRestricted parameter specifies whether phone numbers can be collected from Bookings customers. Valid values are:

- $true: Appointment notes can't be collected from Bookings customers.
- $false: Appointment notes can be collected from Bookings customers.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsSearchEngineIndexDisabled
This parameter is available only in the cloud-based service.

{{ Fill BookingsSearchEngineIndexDisabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsSmsMicrosoftEnabled
This parameter is available only in the cloud-based service.

{{ Fill BookingsSmsMicrosoftEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsSocialSharingRestricted
This parameter is available only in the cloud-based service.

The BookingsSocialSharingRestricted parameter specifies whether users can see the social sharing options inside Bookings. Valid values are:

- $true: Social sharing options are restricted.
- $false: Users can see social sharing options inside Bookings. This is the default value.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ByteEncoderTypeFor7BitCharsets
The ByteEncoderTypeFor7BitCharsets parameter specifies the 7-bit transfer encoding method for MIME format for messages sent to this remote domain. The valid values for this parameter are:

- 0: Always use default 7-bit transfer encoding for HTML and plain text.
- 1: Always use QP (quoted-printable) encoding for HTML and plain text.
- 2: Always use Base64 encoding for HTML and plain text.
- 5: Use QP encoding for HTML and plain text unless line wrapping is enabled in plain text. If line wrapping is enabled, use 7-bit encoding for plain text.
- 6: Use Base64 encoding for HTML and plain text, unless line wrapping is enabled in plain text. If line wrapping is enabled in plain text, use Base64 encoding for HTML, and use 7-bit encoding for plain text.
- 13: Always use QP encoding for HTML. Always use 7-bit encoding for plain text.
- 14: Always use Base64 encoding for HTML. Always use 7-bit encoding for plain text.

If no value is specified, Exchange always uses QP encoding for HTML and plain text.

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

### -CalendarVersionStoreEnabled
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComplianceMLBgdCrawlEnabled
This parameter is available only in the cloud-based service.

{{ Fill ComplianceMLBgdCrawlEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorsActionableMessagesEnabled
The ConnectorsActionableMessagesEnabled parameter specifies whether to enable or disable actionable buttons in messages (connector cards) from connected apps on Outlook on the web. Valid values are:

- $true: Action buttons in connector cards are enabled, which allows you to take quick actions directly from Outlook on the web (for example, Like or Comment). This is the default value.
- $false: Action buttons in connector cards are disabled.

For more information about actionable messages in connected apps, see [Connect apps to your inbox in Outlook on the web](https://support.microsoft.com/office/3d41b99c-bf8d-47d4-bc7a-97758b74689d).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorsEnabled
The ConnectorsEnabled parameter specifies whether to enable or disable all connected apps in organization. Valid values are:

- $true: Connectors are enabled. This is the default value.
- $false: Connectors are disabled.

The workloads that are affected by this parameter are Outlook, SharePoint, Teams, and Viva Engage.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorsEnabledForOutlook
This parameter is available only in the cloud-based service.

The ConnectorsEnabledForOutlook parameter specifies whether to enable or disable connected apps in Outlook on the web. Valid values are:

- $true: Connectors are enabled. This is the default value.
- $false: Connectors are disabled.

To enable and disable the ability to use connectors on specific Microsoft 365 Groups, set the value of this parameter to $true, and then use the ConnectorsEnabled switch on the Set-UnifiedGroup cmdlet.

For more information about connectors for Outlook on the web, see [Connect apps to your inbox in Outlook on the web](https://support.microsoft.com/office/3d41b99c-bf8d-47d4-bc7a-97758b74689d).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorsEnabledForSharepoint
This parameter is available only in the cloud-based service.

The ConnectorsEnabledForSharepoint parameter specifies whether to enable or disable connected apps on SharePoint. Valid values are:

- $true: Connectors are enabled. This is the default value.
- $false: Connectors are disabled.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorsEnabledForTeams
This parameter is available only in the cloud-based service.

The ConnectorsEnabledForTeams parameter specifies whether to enable or disable connected apps on Teams. Valid values are:

- $true: Connectors are enabled. This is the default value.
- $false: Connectors are disabled.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorsEnabledForYammer
This parameter is available only in the cloud-based service.

The ConnectorsEnabledForYammer parameter specifies whether to enable or disable connected apps on Viva Engage. Valid values are:

- $true: Connectors are enabled. This is the default value.
- $false: Connectors are disabled.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomerFeedbackEnabled
This parameter is available only in on-premises Exchange.

The CustomerFeedbackEnabled parameter specifies whether the Exchange server is enrolled in the Microsoft Customer Experience Improvement Program.

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomerLockboxEnabled
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DataClassifications
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultAuthenticationPolicy
The DefaultAuthenticationPolicy parameter specifies the authentication policy that's used for the whole organization. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

To remove the default policy assignment for the organization, use the value $null.

You create authentication policies with the New-AuthenticationPolicy cmdlet to block or selectively allow Basic authentication or (in Exchange 2019 CU2 or later) other legacy authentication methods.

```yaml
Type: AuthPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultGroupAccessType
This parameter is available only in the cloud-based service.

The DefaultGroupAccessType parameter specifies the default access type for Microsoft 365 Groups. Valid values are:

- Public
- Private (this is the default value)

```yaml
Type: ModernGroupObjectType
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: Private
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultMinutesToReduceLongEventsBy
This parameter is available only in the cloud-based service.

The DefaultMinutesToReduceLongEventsBy parameter specifies the number of minutes to reduce calendar events by if the events are 60 minutes or longer. A valid value is an integer from 0 to 29. The default value is 10.

To use this parameter, you also need to include the ShortenEventScopeDefault parameter.

Whether long events start late or end early by the specified number of minutes depends on the value of the ShortenEventScopeDefault parameter (EndEarly or StartLate).

```yaml
Type: Int32
Parameter Sets: ShortenEventScopeParameter
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultMinutesToReduceShortEventsBy
This parameter is available only in the cloud-based service.

The DefaultMinutesToReduceShortEventsBy parameter specifies the number of minutes to reduce calendar events by if the events are less than 60 minutes long. A valid value is an integer from 0 to 29. The default value is 5.

To use this parameter, you also need to include the ShortenEventScopeDefault parameter.

Whether short events start late or end early by the specified number of minutes depends on the value of the ShortenEventScopeDefault parameter (EndEarly or StartLate).

```yaml
Type: Int32
Parameter Sets: ShortenEventScopeParameter
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderAgeLimit
The DefaultPublicFolderAgeLimit parameter specifies the default age limit for the contents of public folders across the entire organization. Content in a public folder is automatically deleted when this age limit is exceeded. This attribute applies to all public folders in the organization that don't have their own AgeLimit setting.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds. Or, enter the value $null. The default value is blank ($null).

```yaml
Type: EnhancedTimeSpan
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderDeletedItemRetention
The DefaultPublicFolderDeletedItemRetention parameter specifies the default value of the length of time to retain deleted items for public folders across the entire organization. This attribute applies to all public folders in the organization that don't have their own RetainDeletedItemsFor attribute set.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderIssueWarningQuota
The DefaultPublicFolderIssueWarningQuota parameter specifies the default value across the entire organization for the public folder size at which a warning message is sent to this folder's owners, warning that the public folder is almost full. This attribute applies to all public folders within the organization that don't have their own warning quota attribute set. The default value of this attribute is unlimited.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 0 through 2199023254529 bytes(2 TB). If you enter a value of unlimited, no size limit is imposed on the public folder.

```yaml
Type: Unlimited
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderMaxItemSize
The DefaultPublicFolderMaxItemSize parameter specifies the default maximum size for posted items within public folders across the entire organization. Items larger than the value of the DefaultPublicFolderMaxItemSize parameter are rejected. This attribute applies to all public folders within the organization that don't have their own MaxItemSize attribute set. The default value of this attribute is unlimited.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 0 through 2199023254529 bytes (2 TB). If you enter a value of unlimited, no size limit is imposed on the public folder.

```yaml
Type: Unlimited
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderMovedItemRetention
The DefaultPublicFolderMovedItemRetention parameter specifies how long items that have been moved between mailboxes are kept in the source mailbox for recovery purposes before being removed by the Public Folder Assistant.

When you move folder contents between mailboxes, a copy of the original data is left on the source mailbox, inaccessible for users but available for recovery by system administrators. If the move process fails and you want to roll it back, use the Set-PublicFolder -OverrideContentMailbox command to recover data. For more information, see [Set-PublicFolder](https://learn.microsoft.com/powershell/module/exchange/set-publicfolder).

```yaml
Type: EnhancedTimeSpan
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderProhibitPostQuota
The DefaultPublicFolderProhibitPostQuota parameter specifies the size of a public folder at which users are notified that the public folder is full. Users can't post to a folder whose size is larger than the DefaultPublicFolderProhibitPostQuota parameter value. The default value of this attribute is unlimited.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 0 through 2199023254529 bytes (2 TB). If you enter a value of unlimited, no size limit is imposed on the public folder.

```yaml
Type: Unlimited
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DelayedDelicensingEnabled
This parameter is available only in the cloud-based service.

The DelayedDelicensingEnabled parameter enables or disables a 30 day grace period for Exchange Online license removals from mailboxes. Valid values are:

- $true: Exchange Online license removals from mailboxes are delayed by 30 days. Admins can use the delay to identify potential mistakes and avoid disruptions for affected users.
- $false: Exchange Online license removals from mailboxes aren't delayed. This is the default value.

Use the TenantAdminNotificationForDelayedDelicensingEnabled parameter to turn on weekly Service Health advisory notifications for admins about the number of Exchange Online delicensed users who are in the 30 day grace period during the specified 8 day interval. For more information about Service Health, see [How to check Microsoft 365 service health](https://learn.microsoft.com/microsoft-365/enterprise/view-service-health).

Use the EndUserMailNotificationForDelayedDelicensingEnabled to send affected users periodic email notifications that they're going to lose access to their mailbox.

Use the Get-PendingDelicenseUser cmdlet to view mailboxes with pending mailbox license removal requests.

Use the Expedite-Delicensing cmdlet to end the delay for removing the Exchange Online license from the mailbox.

When you set the value of the DelayedDelicensingEnabled parameter to $true, the TenantAdminNotificationForDelayedDelicensingEnabled and EndUserMailNotificationForDelayedDelicensingEnabled parameters are set to $true by default.

When you set the value of the DelayedDelicensingEnabled parameter to $false, the TenantAdminNotificationForDelayedDelicensingEnabled and EndUserMailNotificationForDelayedDelicensingEnabled parameters are set to $false by default.

```yaml
Type: Boolean
Parameter Sets: DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DirectReportsGroupAutoCreationEnabled
This parameter is available only in the cloud-based service.

The DirectReportsGroupAutoCreationEnabled parameter specifies whether to enable or disable the automatic creation of direct report Microsoft 365 Groups. Valid values are:

- $true: The automatic creation of direct report Microsoft 365 Groups is enabled.
- $false: The automatic creation of direct report Microsoft 365 Groups is disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisablePlusAddressInRecipients
This parameter is available only in the cloud-based service.

The DisablePlusAddressInRecipients parameter specifies whether to enable or disable plus addressing (also known as subaddressing) for Exchange Online mailboxes. Valid values are:

- $true: Plus addressing is disabled. You can no longer use the plus sign in regular email addresses. The plus sign is available only for plus addressing.
- $false: Plus addressing is enabled. You can use the plus sign in regular email addresses.

For more information about plus addressing, see [Plus addressing in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributionGroupDefaultOU
The DistributionGroupDefaultOU parameter specifies the container where distribution groups are created by default.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributionGroupNameBlockedWordsList
The DistributionGroupNameBlockedWordsList parameter specifies words that can't be included in the Display Name values of distribution groups that are created by users. Separate multiple values with commas.

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

### -DistributionGroupNamingPolicy
The DistributionGroupNamingPolicy parameter specifies the additional text that's applied to the Display Name value of distribution groups created by users. You can require a prefix, a suffix, or both. The prefix and suffix can be text strings, user attribute values from the person who created the group, or a combination of text strings and attributes.

The basic syntax for this parameter is `"prefix<GroupName>suffix"`. The value `<GroupName>` is a literal value that you must always include.

You can use the following user attributes. The actual values are determined by the user who creates the group:

- `<City>`
- `<Company>`
- `<CountryCode>`
- `<CountryOrRegion>`
- `<CustomAttribute1>` to `<CustomAttribute15>`
- `<Department>`
- `<ExtensionCustomAttribute1>` to `<ExtensionCustomAttribute5>`
- `<Office>`
- `<StateOrProvince>`
- `<Title>`

For example: `"DL_<StateOrProvince>_<GroupName>"`, `"<StateOrProvince>-<City>-<Office>-<GroupName>"` or `"<GroupName> <CustomAttribute1>"`.

```yaml
Type: DistributionGroupNamingPolicy
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

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ElcProcessingDisabled
This parameter is available only in the cloud-based service.

The ElcProcessingDisabled parameter specifies whether to enable or disable the processing of mailboxes by the Managed Folder Assistant. Valid values are:

- $true: The Managed Folder Assistant isn't allowed to process mailboxes in the organization. Note that this setting will be ignored on a mailbox if a retention policy that has Preservation Lock enabled is applied to that mailbox.
- $false: The Managed Folder Assistant is allowed to process mailboxes in the organization. This is the default value.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmptyAddressBookForNonExchangeUsers
This parameter is available only in on-premises Exchange.

{{ Fill EmptyAddressBookForNonExchangeUsers Description }}

```yaml
Type: SwitchParameter
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAuthAdminReadSession
This parameter is available only in on-premises Exchange.

The EnableAuthAdminReadSession switch enables a recipient read session in Exchange 2016 CU17 or later, or in Exchange 2019 CU6 or later. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDownloadDomains
This parameter is available only in on-premises Exchange.

The EnableDownloadDomains parameter specifies that Outlook on the web downloads inline images from a different domain than the rest of Outlook on the web. Valid values are:

- $true: Outlook on the web uses a different download domain for inline images (for example, downloads.contoso.com). Before you enable this setting, you need to create a CNAME record and certificate for this domain, and add the domain to the ExternalDownloadHostName and InternalDownloadHostName parameters on the Set-OwaVirtualDirectory cmdlet.
- $false: The setting is disabled. This is the default value.

For more information about the security vulnerability that's addressed by this parameter, and for detailed configuration instructions, see [CVE 2021 1730](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-1730).

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableForwardingAddressSyncForMailboxes
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOrgWidePermissionOnScopedRoles
This parameter is available only in on-premises Exchange.

{{ Fill EnableOrgWidePermissionOnScopedRoles Description }}

```yaml
Type: SwitchParameter
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOutlookEvents
This parameter is available only in the cloud-based service.

The EnableOutlookEvents parameter specifies whether Outlook or Outlook on the web (formerly known as Outlook Web App) automatically discovers events from email messages and adds them to user calendars. Valid values are:

- $true: Discovery of events from email messages is enabled.
- $false: Discovery of events from email messages is disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserDLUpgradeFlowsDisabled
This parameter is available only in the cloud-based service.

The EndUserDLUpgradeFlowsDisabled parameter specifies whether to prevent users from upgrading their own distribution groups to Microsoft 365 Groups in an Exchange Online organization. Valid values are:

- $true: Users can upgrade distribution groups that they own to Microsoft 365 Groups.
- $false: Users can't upgrade distribution groups that they own to Microsoft 365 Groups. This is the default value.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserMailNotificationForDelayedDelicensingEnabled
This parameter is available only in the cloud-based service.

The EndUserMailNotificationForDelayedDelicensingEnabled parameter enables or disables periodic email warnings to affected users that have pending Exchange Online license removal requests on their mailboxes. Valid values are:

- $true: Affected users receive periodic email notifications about losing access to their mailbox starting ~18 days after the Exchange Online license was removed.
- $false: Affected users don't receive periodic email notifications about losing access to their mailbox. This is the default value.

The value of this parameter is meaningful on when the value of the DelayedDelicensingEnabled parameter is $true.

Use the TenantAdminNotificationForDelayedDelicensingEnabled parameter to turn on weekly Service Health advisory notifications for admins about the number of Exchange Online delicensed users who are in the 30 day grace period during the specified 8 day interval. For more information about Service Health, see [How to check Microsoft 365 service health](https://learn.microsoft.com/microsoft-365/enterprise/view-service-health).

```yaml
Type: Boolean
Parameter Sets: DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowEntourage
The EwsAllowEntourage parameter specifies whether to enable or disable Entourage 2008 to access Exchange Web Services (EWS) for the entire organization. The default value is $true.

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

### -EwsAllowList
The EwsAllowList parameter specifies the applications that are allowed to access EWS or REST when the EwsApplicationAccessPolicy parameter is set to EwsAllowList. Other applications that aren't specified by this parameter aren't allowed to access EWS or REST. You identify the application by its user agent string value. Wildcard characters (\*) are supported.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

**Note**: If users receive an error when they try to run "Play My Emails" in Outlook Mobile, use this parameter to add the value "Cortana" to the list of allowed applications.

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

### -EwsAllowMacOutlook
The EwsAllowMacOutlook parameter enables or disables access to mailboxes by Outlook for Mac clients that use Exchange Web Services (for example, Outlook for Mac 2011 or later).

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

### -EwsAllowOutlook
The EwsAllowOutlook parameter enables or disables access to mailboxes by Outlook clients that use Exchange Web Services. Outlook uses Exchange Web Services for free/busy, out-of-office settings, and calendar sharing.

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

### -EwsApplicationAccessPolicy
The EwsApplicationAccessPolicy parameter specifies the client applications that have access to EWS and REST. Valid values are:

- EnforceAllowList: Only applications specified by the EwsAllowList parameter are allowed to access EWS and REST. Access by other applications is blocked.
- EnforceBlockList: All applications are allowed to access EWS and REST, except for the applications specified by the EwsBlockList parameter.

Note that if the EwsAllowEntourage, EwsAllowMacOutlook or EwsAllowOutlook parameters are set to a true or false value, they take precedence for access to EWS by Entourage, Mac Outlook, or Outlook, respectively.

```yaml
Type: EwsApplicationAccessPolicy
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsBlockList
The EwsBlockList parameter specifies the applications that aren't allowed to access EWS or REST when the EwsApplicationAccessPolicy parameter is set to EnforceBlockList. All other applications that aren't specified by this parameter are allowed to access EWS or REST. You identify the application by its user agent string value. Wildcard characters (\*) are supported.

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

### -EwsEnabled
The EwsEnabled parameter specifies whether to globally enable or disable EWS access for the entire organization, regardless of what application is making the request. Valid values are:

- $true: All EWS access is enabled.
- $false: All EWS access is disabled.
- $null (blank): The setting isn't configured. Access to EWS is controlled individually by the related EWS parameters (for example EwsAllowEntourage). This is the default value.

This parameter has no affect on access to REST.

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

### -ExchangeNotificationEnabled
This parameter is available only in the cloud-based service.

The ExchangeNotificationEnabled parameter enables or disables Exchange notifications sent to administrators regarding their organizations. Valid input for this parameter is $true or $false.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeNotificationRecipients
This parameter is available only in the cloud-based service.

The ExchangeNotificationRecipients parameter specifies the recipients for Exchange notifications sent to administrators regarding their organizations. If the ExchangeNotificationEnabled parameter is set to $false, no notification messages are sent. Be sure to enclose values that contain spaces in quotation marks (") and separate multiple values with commas. If this parameter isn't set, Exchange notifications are sent to all administrators.

```yaml
Type: MultiValuedProperty
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FindTimeAttendeeAuthenticationEnabled
This parameter is available only in the cloud-based service.

The FindTimeAttendeeAuthenticationEnabled parameter controls whether attendees are required to verify their identity in meeting polls using the FindTime Outlook add-in. Valid values are:

- $true: Attendees are required to validate their identity and the meeting organizer can't turn off this setting (Always On).
- $false: By default, attendees are required to verify their identity, but the meeting organizer is allowed to turn this setting off.

This setting overrides individual user settings.

For more information about FindTime, see [How to create a FindTime poll](https://support.microsoft.com/office/4dc806ed-fde3-4ea7-8c5e-b5d1fddab4a6).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FindTimeAutoScheduleDisabled
This parameter is available only in the cloud-based service.

The FindTimeAutoScheduleDisabled parameter controls automatically scheduling the meeting once a consensus is reached in meeting polls using the FindTime Outlook add-in. Valid values are:

- $true: Reaching a consensus for the meeting time doesn't automatically schedule the meeting, and the meeting organizer can't change this setting (Off).
- $false: By default, reaching a consensus for the meeting time doesn't automatically schedule the meeting, but meeting organizer is allowed to turn on this setting.

This setting overrides individual user settings.

For more information about FindTime, see [How to create a FindTime poll](https://support.microsoft.com/office/4dc806ed-fde3-4ea7-8c5e-b5d1fddab4a6).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FindTimeLockPollForAttendeesEnabled
This parameter is available only in the cloud-based service.

The FindTimeLockPollForAttendeesEnabled controls whether the **Lock poll for attendees** setting is managed by the organization. Valid values are:

- $true: **Lock poll for attendees** is on. Attendees will not be able to suggest new times or edit other attendees. The meeting organizer can't turn off this setting (always on).
- $false: By default, **Lock poll for attendees** is off (initial default) or on (the user saved settings from last poll), but the meeting organizer is allowed to turn the setting off or on to allow or prevent attendees from suggesting new times or editing attendees.

This setting overrides individual user settings.

For more information about FindTime, see [How to create a FindTime poll](https://support.microsoft.com/office/4dc806ed-fde3-4ea7-8c5e-b5d1fddab4a6).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FindTimeOnlineMeetingOptionDisabled
This parameter is available only in the cloud-based service.

The FindTimeOnlineMeetingOptionDisabled parameter controls the availability of the **Online meeting** checkbox for Teams or Skype in meeting polls using the FindTime Outlook add-in. Valid values are:

- $true: The **Online meeting** checkbox is not available in the meeting poll in FindTime, and the meeting organizer can't change this setting. If your organization uses a third-party online meeting provider, the meeting organizer can make the meeting online using the third-party provider while creating the meeting based on the FindTime poll results.
- $false: The **Online meeting** checkbox is available in the meeting poll in FindTime, so the meeting organizer can choose to select or not select this setting.

This setting overrides individual user settings.

For more information about FindTime, see [How to create a FindTime poll](https://support.microsoft.com/office/4dc806ed-fde3-4ea7-8c5e-b5d1fddab4a6).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FocusedInboxOn
This parameter is available only in the cloud-based service.

The FocusedInboxOn parameter enables or disables Focused Inbox for the organization. Valid values are:

- $true: Focused Inbox is enabled.
- $false: Focused Inbox is disabled.

To disable Focused Inbox on specific mailboxes, enable Focused Inbox for the organization, and then use the Set-FocusedInbox cmdlet.

Focused Inbox is a replacement for Clutter that separates the Inbox into the Focused and Other tabs in Outlook on the web and newer versions of Outlook. Important emails are on the Focused tab while the rest are on the Other tab.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
This parameter is available only in Exchange Server 2010.

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -HierarchicalAddressBookRoot
The HierarchicalAddressBookRoot parameter specifies the user, contact, or group to be used as the root organization for a hierarchical address book in the Exchange organization. You can use any value that uniquely identifies the recipient. For example:

- Name
- Distinguished name (DN)
- Canonical DN
- GUID

Setting a value for this parameter enables the hierarchical address book to be automatically displayed in Outlook for the organization.

The default value is blank. To reset this parameter, use the value $null.

```yaml
Type: UserContactGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HybridRSVPEnabled
This parameter is available only in the cloud-based service.

The HybridRSVPEnabled parameter enables or disables Hybrid RSVP for your organization. Hybrid RSVP allows users the option to indicate if they will attend a meeting in-person or virtually when responding to a meeting invitation on Outlook. Valid values are:

- $true: Hybrid RSVP is enabled (this is the default value).
- $false: Hybrid RSVP is disabled.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Industry
This parameter is available only in on-premises Exchange.

The Industry parameter specifies the industry that best represents your organization.

```yaml
Type: IndustryType
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPListBlocked
This parameter is available only in the cloud-based service.

This parameter only affects Basic authentication connections.

The IPListBlocked parameter specifies the blocked IP addresses that aren't allowed to connect to Exchange Online organization. Valid values are:

- Single IP address: For example, 192.168.1.1 or fe80::39bd:88f7:6969:d223%11.
- IP address range: For example, 192.168.0.1-192.168.0.254 or 192.168.8.2(255.255.255.0).
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.3.1/24 or 2001:0DB8::CD3/60.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

This parameter has a limit of approximately 1200 entries.

Changes to this parameter might take up to 4 hours to fully propagate across the service.

```yaml
Type: MultiValuedProperty
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsAgendaMailEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromOffboardMigration
This parameter is available only in on-premises Exchange.

The IsExcludedFromOffboardMigration parameter specifies that no new moves from the cloud to your on-premises organization are permitted. When this flag is set, no offboarding move requests are allowed.

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromOnboardMigration
This parameter is available only in on-premises Exchange.

The IsExcludedFromOnboardMigration parameter specifies that no new moves from your on-premises organization to the cloud are permitted. When this flag is set, no onboarding move requests are allowed.

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsFfoMigrationInProgress
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsGroupFoldersAndRulesEnabled
This parameter is available only in the cloud-based service.

The IsGroupFoldersAndRulesEnabled specifies whether group owners (by default) can create folders and move messages (manually or by using Inbox rules) in Microsoft 365 Groups. Valid values are:

- $true: Group owners can create folders and move messages between folders in Microsoft 365 Groups.
- $false: Group owners can't create folders or move messages between folders in Microsoft 365 Groups. This is the default value.

To allow group owners to allow group users to create folders and moved messages in Microsoft 365 Groups, use the IsGroupMemberAllowedToEditContent parameter.

For more information, see [Manage Folders and Rules feature in Microsoft 365 Groups](https://learn.microsoft.com/microsoft-365/enterprise/manage-folders-and-rules-feature).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsGroupMemberAllowedToEditContent
This parameter is available only in the cloud-based service.

The IsGroupMemberAllowedToEditContent parameter specifies whether group owners can allow group members to manage folders and messages in Microsoft 365 Groups. Valid values are:

- $true: Group owners can use the **All members will be able to create, edit, move, copy, and delete mail folders and rules within the group** setting in the group properties in Outlook on the web to allow group members to do the following tasks in Microsoft 365 Groups:

  • Create, rename, move, copy, and delete folders.

  • Move, copy, and delete messages manually or via Inbox rules.

  • Create, edit, copy, and delete Inbox rules.

- $false: Group owners can't use the **All members will be able to create, edit, move, copy, and delete mail folders and rules within the group** setting in the group properties in Outlook on the web to allow group members to manage folders and messages in Microsoft 365 Groups. Only group owners can manage folders and messages in Microsoft 365 Groups. This is the default value.

The value of this parameter is meaningful only when the value of the IsGroupFoldersAndRulesEnabled parameter is $true.

To prevent group owners or group members from moving messages between folders manually or vial Inbox rules in Microsoft 365 Groups, use the BlockMoveMessagesForGroupFolders parameter.

For more information, see [Manage Folders and Rules feature in Microsoft 365 Groups](https://learn.microsoft.com/microsoft-365/enterprise/manage-folders-and-rules-feature).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -LeanPopoutEnabled
The LeanPopoutEnabled parameter specifies whether to enable faster loading of pop-out messages in Outlook on the web for Internet Explorer and Microsoft Edge. Valid values are:

- $true: Lean pop-outs are enabled.
- $false: Lean pop-outs are disabled. This is the default value.

**Notes**:

- Lean pop-outs aren't available for messages that contain attachments or information rights management (IRM) restrictions.
- Outlook add-ins and Skype for Business Online presence aren't available with lean pop-outs.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkPreviewEnabled
The LinkPreviewEnabled parameter specifies whether link preview of URLs in email messages is allowed for the organization. Valid values are:

- $true: Link preview of URLs in email messages is allowed. Users can enable or disable link preview in their Outlook on the web settings. This is the default value.
- $false: Link preview of URLs in email messages is not allowed. Users can't enable link preview in their Outlook on the web settings.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxDataEncryptionEnabled
This parameter is available only in on-premises Exchange.

{{ Fill MailboxDataEncryptionEnabled Description }}

```yaml
Type: SwitchParameter
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTipsAllTipsEnabled
The MailTipsAllTipsEnabled parameter specifies whether MailTips are enabled. The default value is $true.

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

### -MailTipsExternalRecipientsTipsEnabled
The MailTipsExternalRecipientsTipsEnabled parameter specifies whether MailTips for external recipients are enabled. The default value is $false.

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

### -MailTipsGroupMetricsEnabled
The MailTipsGroupMetricsEnabled parameter specifies whether MailTips that rely on group metrics data are enabled. The default value is $true.

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

### -MailTipsLargeAudienceThreshold
The MailTipsLargeAudienceThreshold parameter specifies what a large audience is. The default value is 25.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTipsMailboxSourcedTipsEnabled
The MailTipsMailboxSourcedTipsEnabled parameter specifies whether MailTips that rely on mailbox data (out-of-office or full mailbox) are enabled.

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

### -ManagedFolderHomepage
This parameter is available only in on-premises Exchange.

The ManagedFolderHomepage parameter specifies the URL of the web page that's displayed when users click the Managed Folders folder in Outlook. If a URL isn't specified, Outlook doesn't display a managed folders home page.

```yaml
Type: String
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MapiHttpEnabled
This parameter is available only in on-premises Exchange.

The MapiHttpEnabled parameter enables or disables access to mailboxes in Outlook by using MAPI over HTTP. Valid values are:

- $true: Access to mailboxes by using MAPI over HTTP is enabled. This is the default value.
- $false: Access to mailboxes by using MAPI over HTTP is disabled.

You can use the MapiHttpEnabled parameter on the Set-CASMailbox cmdlet to override the global MAPI over HTTP settings for individual users.

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaskClientIpInReceivedHeadersEnabled
This parameter is available only in the cloud-based service.

{{ Fill MaskClientIpInReceivedHeadersEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MatchSenderOrganizerProperties
This parameter is available only in the cloud-based service.

{{ Fill MatchSenderOrganizerProperties Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentMigrations
This parameter is available only in on-premises Exchange.

The MaxConcurrentMigrations parameter specifies the maximum number of concurrent migrations that your organization can configure at any specific time.

```yaml
Type: Unlimited
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageHighlightsEnabled
This parameter is available only in the cloud-based service.

{{ Fill MessageHighlightsEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageRecallAlertRecipientsEnabled
This parameter is available only in the cloud-based service.

{{ Fill MessageRecallAlertRecipientsEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageRecallAlertRecipientsReadMessagesOnlyEnabled
This parameter is available only in the cloud-based service.

{{ Fill MessageRecallAlertRecipientsReadMessagesOnlyEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageRecallEnabled
This parameter is available only in the cloud-based service.

{{ Fill MessageRecallEnabled Description }}

```yaml
Type: System.Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageRecallMaxRecallableAge
{{ Fill MessageRecallMaxRecallableAge Description }}

```yaml
Type: Microsoft.Exchange.Data.EnhancedTimeSpan
Parameter Sets: ShortenEventScopeParameter
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageRemindersEnabled
This parameter is available only in the cloud-based service.

The MessageRemindersEnabled parameter enables or disables the message reminders feature in the organization. Valid values are:

- $true: Message reminders are enabled. A message is moved to the top of the user's inbox if Outlook determines that the message requires follow-up or a reply. Only one message is moved at a time, and the user must take action on the message before another message is moved to the top of the Inbox.
- $false: Message reminders are disabled.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftExchangeRecipientEmailAddresses
This parameter is available only in on-premises Exchange.

The MicrosoftExchangeRecipientEmailAddresses parameter specifies one or more email addresses for the recipient. All valid Microsoft Exchange email address types may be used. You can specify multiple values for this parameter as a comma-delimited list. If the MicrosoftExchangeRecipientEmailAddressPolicyEnabled parameter is set to $true, the email addresses are automatically generated by the default email address policy. This means you can't use the MicrosoftExchangeRecipientEmailAddresses parameter.

Email addresses that you specify by using the MicrosoftExchangeRecipientEmailAddresses parameter replace any existing email addresses already configured.

```yaml
Type: ProxyAddressCollection
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftExchangeRecipientEmailAddressPolicyEnabled
This parameter is available only in on-premises Exchange.

The MicrosoftExchangeRecipientEmailAddressPolicyEnabled parameter specifies whether the default email address policy is automatically applied to the Exchange recipient. The default value is $true. If this parameter is set to $true, Exchange automatically adds new email addresses to the Exchange recipient when email address policies are added or modified in the Exchange organization. If this parameter is set to $false, you must manually add new email addresses to the Exchange recipient when email address policies are added or modified.

If you change the value of the MicrosoftExchangeRecipientEmailAddressPolicyEnabled parameter from $false to $true, any email addresses that you defined by using the MicrosoftExchangeRecipientEmailAddresses parameter are preserved. However, the value of the MicrosoftExchangeRecipientPrimarySmtpAddress parameter reverts to `MicrosoftExchange329e71ec88ae4615bbc36ab6ce41109e@<Accepted Domain in Highest Priority Email Address Policy>`.

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftExchangeRecipientPrimarySmtpAddress
This parameter is available only in on-premises Exchange.

The MicrosoftExchangeRecipientPrimarySmtpAddress parameter specifies the primary return SMTP email address for the Exchange recipient. If the MicrosoftExchangeRecipientEmailAddressPolicyEnabled parameter is set to $true, you can't use the MicrosoftExchangeRecipientPrimarySmtpAddress parameter.

If you modify the value of the MicrosoftExchangeRecipientPrimarySmtpAddress parameter, the value is automatically added to the list of email addresses defined in the MicrosoftExchangeRecipientEmailAddresses parameter.

The MicrosoftExchangeRecipientPrimarySmtpAddress parameter is meaningful only if the Exchange recipient has more than one defined SMTP email address. If the MicrosoftExchangeRecipientEmailAddresses parameter has only one defined SMTP email address, the value of the MicrosoftExchangeRecipientPrimarySmtpAddress parameter and the MicrosoftExchangeRecipientEmailAddresses parameter are the same.

```yaml
Type: SmtpAddress
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftExchangeRecipientReplyRecipient
This parameter is available only in on-premises Exchange.

The MicrosoftExchangeRecipientReplyRecipient parameter specifies the recipient that should receive messages sent to the Exchange recipient. Typically, you would configure a mailbox to receive the messages sent to the Exchange recipient. You can use any value that uniquely identifies the recipient: For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MitigationsEnabled
This parameter is available only in on-premises Exchange.

The MitigationsEnabled parameter specifies whether the Exchange Emergency Mitigation service (EM service) is enabled in the organization. Valid values are:

- $true: The EM Service automatically applies mitigations on Exchange servers where the value of the _MitigationsEnabled_ parameter is $true on the **Set-ExchangeServer**.
- $false: Mitigations are not automatically applied on Exchange servers.

For more information, see [Exchange Emergency Mitigation (EM) service](https://learn.microsoft.com/exchange/exchange-emergency-mitigation-service).

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MobileAppEducationEnabled
This parameter is available only in the cloud-based service.

The MobileAppEducationEnabled specifies whether to show or hide the Outlook for iOS and Android education reminder in Outlook on the web (formerly known as Outlook Web App). Valid values are:

- $true: Outlook on the web and Outlook desktop will show the education reminder to users who aren't using Outlook for iOS and Android to check their company email and calendar events. This is the default value.
- $false: The Outlook for iOS and Android education reminder is disabled.

This setting will affect Outlook desktop at some point in the future.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OabShadowDistributionOldestFileAgeLimit
This parameter is available only in on-premises Exchange.

{{ Fill OabShadowDistributionOldestFileAgeLimit Description }}

```yaml
Type: EnhancedTimeSpan
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OAuth2ClientProfileEnabled
The OAuth2ClientProfileEnabled parameter enables or disables modern authentication in the Exchange organization. Valid values are:

- $true: modern authentication is enabled.
- $false: modern authentication is disabled.

modern authentication is based on the Active Directory Authentication Library (ADAL) and OAuth 2.0, and enables authentication features like multi-factor authentication (MFA), certificate-based authentication (CBA), and third-party SAML identity providers.

When you enable modern authentication in Exchange Online, we recommend that you also enable it in Skype for Business Online. For more information, see [Skype for Business Online: Enable your tenant for modern authentication](https://aka.ms/SkypeModernAuth).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnlineMeetingsByDefaultEnabled
This parameter is available only in the cloud-based service.

The OnlineMeetingsByDefaultEnabled parameter specifies whether to set all meetings as Teams or Skype for Business by default during meeting creation. Valid values are:

- $true: All meetings are online by default.
- $false: All meetings are not online by default.
- $null: If the organization value has not been specified, the default behavior is for meetings to be online.

If a user has already directly interacted with this setting in Outlook or Outlook on the web (formerly known as Outlook Web App or OWA), the value of this parameter is ignored. Eventually, this parameter will override the Outlook-configured setting.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationSummary
This parameter is available only in on-premises Exchange.

The OrganizationSummary parameter specifies a summarized description that best represents your organization.

```yaml
Type: MultiValuedProperty
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookGifPickerDisabled
This parameter is available only in the cloud-based service.

The OutlookGifPickerDisabled parameter disables the GIF Search (powered by Bing) feature that's built into the Compose page in Outlook on the web. Valid values are:

- $true: GIF Search in Outlook on the web is disabled.
- $false: GIF Search in Outlook on the web is enabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookMobileGCCRestrictionsEnabled
This parameter is available only in the cloud-based service.

The OutlookMobileGCCRestrictionsEnabled parameter specifies whether to enable or disable features within Outlook for iOS and Android that are not FedRAMP compliant for Microsoft 365 US Government Community Cloud (GCC) customers. Valid values are:

- $true: Disable features that aren't FedRAMP compliant for GCC customers. This is the default value for all GCC customers.
- $false: Enable features that aren't FedRAMP compliant for GCC customers.

The Outlook for iOS and Android feature and services that are not FedRAMP compliant for Microsoft 365 US Government customers include:

- Multi-account support
- Third-party services
- HelpShift and in-app support
- Any Microsoft services that are outside the Microsoft 365 US Government Community Cloud (for example, Bing and Cortana).

 For a full list of Features and services that are not FedRAMP compliant for GCC customers, see [Services and features of Outlook for iOS and Android that aren't available for Government Community Cloud users](https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-in-the-government-cloud#services-and-features-not-available).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookMobileHelpShiftEnabled
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookMobileSingleAccountEnabled
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookPayEnabled
This parameter is available only in the cloud-based service.

The OutlookPayEnabled parameter enables or disables Microsoft Pay in the Microsoft 365 organization. Valid values are:

- $true: Payments in Outlook are enabled.
- $False: Payments in Outlook are disabled.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookTextPredictionDisabled
This parameter is available only in the cloud-based service.

{{ Fill OutlookTextPredictionDisabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermanentlyDeleteDisabled
This parameter is available only in Exchange Server 2010.

The PermanentlyDeleteDisabled parameter specifies whether to disable the PermanentlyDelete retention action for messaging records management (MRM). Valid values are:

- $true The PermanentlyDelete retention action is disabled. This setting only prevents items from being permanently deleted. It doesn't modify existing polices, block the creation of policies with the PermanentlyDelete action or notify users that thePermanentlyDelete action won't actually take effect.
- $false The PermanentlyDelete retention action is enabled. This is the default value.

A message that's permanently deleted can't be recovered by using the Recoverable Items folder. Additionally, permanently deleted messages aren't returned by a Discovery search, unless litigation hold or single item recovery is enabled for the mailbox.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PerTenantSwitchToESTSEnabled
This parameter is available only in the cloud-based service.

This parameter has been deprecated and is no longer used.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostponeRoamingSignaturesUntilLater
This parameter is available only in the cloud-based service.

The PostponeRoamingSignaturesUntilLater parameter controls whether roaming signatures are enabled or disabled in Outlook on the web (formerly known as Outlook Web App or OWA) and the new Outlook for Windows. Valid values are:

- $true: Roaming signatures are disabled for Outlook on the web and the new Outlook for Windows. For Windows clients, the registry setting to disable roaming signatures still works. For more information, see [Outlook roaming signatures](https://support.microsoft.com/office/420c2995-1f57-4291-9004-8f6f97c54d15). When roaming signatures are disabled, admins can use the signature-related parameters on the Set-MailboxMessageConfiguration cmdlet (for example, AutoAddSignature, AutoAddSignatureOnReply, and SignatureHtml) to configure email signatures.

  Previously, the only way to disable roaming signatures in Outlook on the web was to open a support ticket. With the introduction of this parameter and value, admins can disable roaming signatures themselves.

- $false: Roaming signatures are enabled for Outlook on the web and the new Outlook for Windows. This is the default value.

We recommend that independent software vendors (ISVs) onboard to the [signature API](https://learn.microsoft.com/javascript/api/outlook/office.body#outlook-office-body-setsignatureasync-member(1)) based on [event-based hooks
](https://learn.microsoft.com/office/dev/add-ins/outlook/autolaunch).

We have no plans to support roaming signature management in the Microsoft Graph API.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredInternetCodePageForShiftJis
This parameter is reserved for internal Microsoft use.

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

### -PublicComputersDetectionEnabled
The PublicComputersDetectionEnabled parameter specifies whether Outlook on the web will detect when a user signs from a public or private computer or network, and then enforces the attachment handling settings from public networks. The default is $false. However, if you set this parameter to $true, Outlook on the web will determine if the user is signing in from a public computer, and all public attachment handling rules will be applied and enforced.

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

### -PublicFolderContentReplicationDisabled
This parameter is available only in Exchange Server 2010.

The PublicFolderContentReplicationDisabled parameter is used during public folder migration. When you set the PublicFolderContentReplicationDisabled parameter to $true, public folder content is not replicated to Exchange during the initial migration. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderMailboxesLockedForNewConnections
This parameter is available only in on-premises Exchange.

The PublicFolderMailboxesLockedForNewConnections parameter specifies whether users are allowed to make new connections to public folder mailboxes. Valid values are:

- $true: Users aren't allowed to make new connections to public folder mailboxes. You use this setting during the final stages of public folder migrations.
- $false: Users are allowed to make new connections to public folder mailboxes. This is the default value.

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderMailboxesMigrationComplete
This parameter is available only in on-premises Exchange.

The PublicFolderMailboxesMigrationComplete parameter is used during public folder migration.

- $true: Queued messages are rerouted to the new destination.
- $false (This is the default value)

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderMigrationComplete
This parameter is available only in on-premises Exchange.

The PublicFolderMigrationComplete parameter is used during public folder migration. When you set the PublicFolderMigrationComplete parameter to $true, transport starts rerouting the queued messages to a new destination. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFoldersEnabled
The PublicFoldersEnabled parameter specifies how public folders are deployed in your organization. Valid values are:

- Local: The public folders are deployed locally in your organization.
- Remote: The public folders are deployed in the remote forest.
- None: No public folders are deployed for this organization.

```yaml
Type: PublicFoldersDeployment
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderShowClientControl
The PublicFolderShowClientControl parameter enables or disables the control access feature for public folders in Microsoft Outlook. Valid values are:

- $true: User access to public folders in Outlook is controlled by the value of the PublicFolderClientAccess parameter on the Set-CASMailbox cmdlet (the default value is $false).
- $false: This is the default value. User access to public folders in Outlook is enabled (the control access feature is disabled). The value of the PublicFolderClientAccess parameter on the Set-CASMailbox cmdlet is meaningless.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: $false
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFoldersLockedForMigration
This parameter is available only in on-premises Exchange.

The PublicFoldersLockedForMigration parameter specifies whether users are locked out from accessing down level public folder servers. When you set the PublicFoldersLockedForMigration parameter to $true, users are locked out from accessing down level public folder servers. This is used for public folder migration during final stages. The default value is $false, which means that the user is able to access public folder servers.

```yaml
Type: Boolean
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadTrackingEnabled
The ReadTrackingEnabled parameter specifies whether the tracking for read status for messages in an organization is enabled. The default value is $false.

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

### -RecallReadMessagesEnabled
This parameter is available only in the cloud-based service.

{{ Fill RecallReadMessagesEnabled Description }}

```yaml
Type: System.Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshSessionEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectDirectSend
This parameter is available only in the cloud-based service.

{{ Fill RejectDirectSend Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemotePublicFolderMailboxes
The RemotePublicFolderMailboxes parameter specifies the identities of the public folder objects (represented as mail user objects locally) corresponding to the public folder mailboxes created in the remote forest. The public folder values set here are used only if the public folder deployment is a remote deployment.

```yaml
Type: MultiValuedProperty
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiredCharsetCoverage
This parameter is reserved for internal Microsoft use.

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

### -SCLJunkThreshold
This parameter is available only in on-premises Exchange.

The SCLJunkThreshold parameter specifies the spam confidence level (SCL) threshold. Messages with an SCL greater than the value that you specify for the SCLJunkThreshold parameter are moved to the Junk Email folder. Valid values are integers from 0 through 9, inclusive.

```yaml
Type: Int32
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendFromAliasEnabled
This parameter is available only in the cloud-based service.

The SendFromAliasEnabled parameter allows mailbox users to send messages using aliases (proxy addresses). Valid values are:

- $true: Aliases on messages will no longer be rewritten to their primary SMTP addresses. Compatible Outlook clients will allow sending from aliases and replying to aliases. Even without an updated Outlook client, users might see changes in behavior because the setting affects all messages sent and received by a mailbox.
- $false: Aliases on messages sent or received will be rewritten to their primary email address. This is the default value.

For more information about the availability of the feature in Outlook on the web, see the [Microsoft 365 roadmap item](https://www.microsoft.com/microsoft-365/roadmap?filters=Exchange&searchterms=59437). For Outlook for Windows, see this [Microsoft 365 roadmap item](https://www.microsoft.com/microsoft-365/roadmap?filters=Outlook&searchterms=64123).

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharedDomainEmailAddressFlowEnabled
This parameter is available only in the cloud-based service.

{{ Fill SharedDomainEmailAddressFlowEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteMailboxCreationURL
The SiteMailboxCreationURL parameter specifies the URL that's used to create site mailboxes. Site mailboxes improve collaboration and user productivity by allowing access to both SharePoint documents and Exchange email in Outlook 2013 or later.

```yaml
Type: Uri
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmtpActionableMessagesEnabled
The SmtpActionableMessagesEnabled parameter specifies whether to enable or disable action buttons in email messages in Outlook on the web. Valid values are:

- $true: Action buttons in email messages are enabled. This is the default value.
- $false: Action buttons in email messages are disabled.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantAdminNotificationForDelayedDelicensingEnabled
This parameter is available only in the cloud-based service.

The TenantAdminNotificationForDelayedDelicensingEnabled parameter enables or disables weekly admin Service Health advisory notifications that are sent to admins. Valid values are:

- $true: Weekly Service Health advisory notifications are sent to admins about the number of Exchange Online delicensed users who are in the 30 day grace period during the specified 8 day interval.
- $false: Disable weekly Service Health advisory notifications about the number of Exchange Online delicensed users. This is the default value.

For more information about Service Health, see [How to check Microsoft 365 service health](https://learn.microsoft.com/microsoft-365/enterprise/view-service-health).

The value of this parameter is meaningful on when the value of the DelayedDelicensingEnabled parameter is $true.

Use the EndUserMailNotificationForDelayedDelicensingEnabled to send affected users periodic email notifications that they're going to lose access to their mailbox.

```yaml
Type: Boolean
Parameter Sets: DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMAvailableLanguages
This parameter is available only in on-premises Exchange.

This parameter has been deprecated and is no longer used.

```yaml
Type: MultiValuedProperty
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnblockUnsafeSenderPromptEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseIcsSyncStateStreaming
This parameter is available only in on-premises Exchange.

{{ Fill UseIcsSyncStateStreaming Description }}

```yaml
Type: SwitchParameter
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VisibleMeetingUpdateProperties
This parameter is available only in the cloud-based service.

The VisibleMeetingUpdateProperties parameter specifies whether meeting message updates will be auto-processed on behalf of attendees. Auto-processed updates are applied to the attendee's calendar item, and then the meeting message is moved to the deleted items. The attendee never sees the update in their inbox, but their calendar is updated.

This parameter uses the syntax: `"MeetingProperty1:MeetingStartTimeWithinXMinutes1,MeetingProperty2:MeetingStartTimeWithinXMinutes2,...MeetingPropertyN:MeetingStartTimeWithinXMinutesN"`.

The valid meeting properties to monitor for updates are:

- Location: The meeting location field.
- Subject: The meeting subject or title.
- Sensitivity: The sensitivity (privacy) of the event.
- Body: The meeting body or description.
- OnlineMeetingLinks: The meeting join URL.
- AllowForwarding: The option to allow or prevent forwarding of meetings.
- RequestResponses: The option on whether responses are requested.
- AllowNewTimeProposals: The option to allow or prevent new time proposals.
- ShowAs: The free/busy state of the meeting: Free, Tentative, Busy, Working elsewhere, or Away/Out of office.
- Reminder: The reminder time.
- AllProperties: Any meeting change.

If you don't specify a MeetingStartTimeWithinXMinutes value for the meeting property, any change to the meeting property will result in visible meeting update messages (regardless of how soon or how far away the meeting is). For updates to recurring meetings, the meeting start time is the start time of the next occurrence in the series.

The default value is `"Location,AllProperties:15"`: changes to the meeting location at any time, or changes to other meeting properties within 15 minutes of the meeting start time results in visible meeting update messages.

In the following scenarios, meeting update messages are not auto-processed, regardless of the values specified in this parameter. In these scenarios, attendees will always see meeting update messages in their Inbox:

- The update contains a change to the meeting date, time, or recurrence pattern.
- The meeting message is received for a delegated shared calendar.
- The receiving attendee is @ mentioned in the meeting body.
- The attendee has not yet responded to the meeting.

```yaml
Type: String
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WACDiscoveryEndpoint
This parameter is available only in on-premises Exchange.

The WacDiscoveryEndpoint parameter specifies the discovery endpoint for Office Online Server (formerly known as Office Web Apps Server and Web Access Companion Server) for all mailboxes in the organization. For example, `https://oos.internal.contoso.com/hosting/discovery`.

Office Online Server enables users to view supported file attachments in Outlook on the web (formerly known as Outlook Web App).

```yaml
Type: String
Parameter Sets: AdfsAuthenticationParameter, AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebPushNotificationsDisabled
This parameter is available only in the cloud-based service.

The WebPushNotificationsDisabled parameter specifies whether to enable or disable Web Push Notifications in Outlook on the Web. This feature provides web push notifications which appear on a user's desktop while the user is not using Outlook on the Web. This brings awareness of incoming messages while they are working elsewhere on their computer. Valid values are:

- $true: Web Push Notifications are disabled.
- $false: Web Push Notifications are enabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebSuggestedRepliesDisabled
This parameter is available only in the cloud-based service.

The WebSuggestedRepliesDisabled parameter specifies whether to enable or disable Suggested Replies in Outlook on the web. This feature provides suggested replies to emails so users can easily and quickly respond to messages. Valid values are:

- $true: Suggested Replies are disabled.
- $false: Suggested Replies are enabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkspaceTenantEnabled
This parameter is available only in the cloud-based service.

The WorkspaceTenantEnabled parameter enables or disables workspace booking in the organization. Valid values are:

- $true: In Outlook for iOS and Android, the calendar setting for workspace booking is visible and is off by default.
- $false: In Outlook for iOS and Android, the calendar setting for workspace booking is hidden.

```yaml
Type: Boolean
Parameter Sets: ShortenEventScopeParameter, DelayedDelicensingParameterSet
Aliases:
Applicable: Exchange Online

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
