---
title: "Set-MailboxPlan"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 7/12/2017
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 16812582-1dba-4b58-8400-bda0dc730a04

description: "This cmdlet is available only in the cloud-based service."
---

# Set-MailboxPlan

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-MailboxPlan** cmdlet to modify the settings of mailbox plans in the cloud-based service.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-MailboxPlan -Identity <MailboxPlanIdParameter> [-AddOnSKUCapability <MultiValuedProperty>] [-Alias <String>] [-AntispamBypassEnabled <$true | $false>] [-ApplyMandatoryProperties <SwitchParameter>] [-ArchiveDomain <SmtpDomain>] [-ArchiveName <MultiValuedProperty>] [-ArchiveQuota <Unlimited>] [-ArchiveStatus <None | Active>] [-ArchiveWarningQuota <Unlimited>] [-AuditAdmin <MultiValuedProperty>] [-AuditDelegate <MultiValuedProperty>] [-AuditEnabled <$true | $false>] [-AuditLogAgeLimit <EnhancedTimeSpan>] [-CalendarLoggingQuota <Unlimited>] [-CalendarRepairDisabled <$true | $false>] [-CalendarVersionStoreDisabled <$true | $false>] [-Confirm [<SwitchParameter>]] [-CustomAttribute1 <String>] [-Database <DatabaseIdParameter>] [-DeliverToMailboxAndForward <$true | $false>] [-DisplayName <String>] [-DomainController <Fqdn>] [-DowngradeHighPriorityMessagesEnabled <$true | $false>] [-EmailAddressPolicyEnabled <$true | $false>] [-EndDateForRetentionHold <DateTime>] [-ExternalOofOptions <InternalOnly | External>] [-Force <SwitchParameter>] [-HiddenFromAddressListsEnabled <$true | $false>] [-IgnoreDefaultScope <SwitchParameter>] [-IsDefault <SwitchParameter>] [-IsDefaultForPreviousVersion <SwitchParameter>] [-IssueWarningQuota <Unlimited>] [-LitigationHoldDate <DateTime>] [-LitigationHoldEnabled <$true | $false>] [-LitigationHoldOwner <String>] [-MailboxPlanRelease <AllReleases | NonCurrentRelease | CurrentRelease>] [-MaxBlockedSenders <Int32>] [-MaxReceiveSize <Unlimited>] [-MaxSafeSenders <Int32>] [-MaxSendSize <Unlimited>] [-MessageTrackingReadStatusEnabled <$true | $false>] [-Name <String>] [-OfflineAddressBook <OfflineAddressBookIdParameter>] [-ProhibitSendQuota <Unlimited>] [-ProhibitSendReceiveQuota <Unlimited>] [-QueryBaseDNRestrictionEnabled <$true | $false>] [-RecipientLimits <Unlimited>] [-RecoverableItemsQuota <Unlimited>] [-RecoverableItemsWarningQuota <Unlimited>] [-RemoteAccountPolicy <RemoteAccountPolicyIdParameter>] [-RemoteRecipientType <None | ProvisionMailbox | ProvisionArchive | Migrated | DeprovisionMailbox | DeprovisionArchive | RoomMailbox | EquipmentMailbox | SharedMailbox | TeamMailbox>] [-RequireSenderAuthenticationEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>] [-RetainDeletedItemsFor <EnhancedTimeSpan>] [-RetainDeletedItemsUntilBackup <$true | $false>] [-RetentionComment <String>] [-RetentionHoldEnabled <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>] [-RetentionUrl <String>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-RulesQuota <ByteQuantifiedSize>] [-SCLDeleteEnabled <$true | $false>] [-SCLDeleteThreshold <Int32>] [-SCLJunkEnabled <$true | $false>] [-SCLJunkThreshold <Int32>] [-SCLQuarantineEnabled <$true | $false>] [-SCLQuarantineThreshold <Int32>] [-SCLRejectEnabled <$true | $false>] [-SCLRejectThreshold <Int32>] [-SharingPolicy <SharingPolicyIdParameter>] [-SingleItemRecoveryEnabled <$true | $false>] [-SKUCapability <None | BPOS_S_Deskless | BPOS_S_Standard | BPOS_S_Enterprise | BPOS_S_Archive | BPOS_L_Standard | BPOS_B_Standard | BPOS_B_CustomDomain | BPOS_S_MidSize | BPOS_S_ArchiveAddOn | BPOS_S_EopStandardAddOn | BPOS_S_EopPremiumAddOn | BPOS_Unmanaged | BPOS_S_ATPAddOn | BPOS_S_Analytics | BPOS_S_Foundation | BPOS_S_EquivioAnalytics | BPOS_S_CustomerLockbox | SBRM | BPOS_S_Essentials | BPOS_S_ThreatIntelligenceAddOn | BPOS_S_BookingsAddOn | TOU_Signed | FederatedUser | Partner_Managed | MasteredOnPremise | ResourceMailbox | ExcludedFromBackSync | UMFeatureRestricted | RichCoexistence | OrganizationCapabilityUMGrammar | OrganizationCapabilityUMDataStorage | OrganizationCapabilityOABGen | OrganizationCapabilityGMGen | OrganizationCapabilityClientExtensions | BEVDirLockdown | OrganizationCapabilityUMGrammarReady | OrganizationCapabilityMailRouting | OrganizationCapabilityManagement | OrganizationCapabilityTenantUpgrade | OrganizationCapabilityScaleOut | OrganizationCapabilityMessageTracking | OrganizationCapabilityPstProvider | OrganizationCapabilitySuiteServiceStorage | OrganizationCapabilityOfficeMessageEncryption | OrganizationCapabilityMigration | UMPlanAllowed | OrganizationCapabilityOABReplica | OrganizationCapabilityOfficeGraph | OrganizationCapabilityOfficeMessageEncryptionStore | OrganizationCapabilityShardRelevancyFeatureStore | OrganizationCapabilityOrgPartition>] [-StartDateForRetentionHold <DateTime>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-UseDatabaseQuotaDefaults <$true | $false>] [-UseDatabaseRetentionDefaults <$true | $false>] [-UserCertificate <MultiValuedProperty>] [-UserPrincipalName <String>] [-UserSMimeCertificate <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example lowers the default mailbox quotas in the mailbox plan named  `ExchangeOnlineEnterprise`.
  
```
Set-MailboxPlan -Identity ExchangeOnlineEnterprise -ProhibitSendReceiveQuota 40GB -ProhibitSendQuota 39.5GB -IssueWarningQuota 39GB
```

## Detailed Description
<a name="DetailedDescription"> </a>

A mailbox plan is a template that automatically configures properties on new mailboxes. Mailbox plans correspond to Microsoft Office 365 license types. The availability of a mailbox plan is determined by the selections you make when you enroll your domain in Office 365.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPlanIdParameter  <br/> | The _Identity_ parameter specifies the mailbox plan that you want to modify. You can use any value that uniquely identifies the mailbox plan. For example: <br/>  Name <br/>  Alias <br/>  Display name <br/>  Distinguished name (DN) <br/>  GUID <br/> **LegacyExchangeDN** <br/> |
| _AddOnSKUCapability_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Alias_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AntispamBypassEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ApplyMandatoryProperties_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ArchiveDomain_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpDomain  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ArchiveName_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ArchiveQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ArchiveStatus_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.ArchiveStatusFlags  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ArchiveWarningQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AuditAdmin_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AuditDelegate_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AuditEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AuditLogAgeLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _CalendarLoggingQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _CalendarRepairDisabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _CalendarVersionStoreDisabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CustomAttribute1_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Database_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DeliverToMailboxAndForward_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DowngradeHighPriorityMessagesEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EmailAddressPolicyEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EndDateForRetentionHold_ <br/> |Optional  <br/> |System.DateTime  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExternalOofOptions_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.ExternalOofOptions  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _HiddenFromAddressListsEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _IsDefault_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IsDefault_ switch specifies that the mailbox plan is the default mailbox plan. You don't need to specify a value with this switch. <br/> New and enabled mailboxes receive the settings in the default mailbox plan.  <br/> |
| _IsDefaultForPreviousVersion_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _IssueWarningQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _IssueWarningQuota_ parameter specifies the warning threshold for the size of the mailbox. If the mailbox reaches or exceeds this size, the user receives a descriptive warning message. <br/>  A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value `unlimited`. When you enter a number, you can qualify it with one of the following units:  <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The _IssueWarningQuota_ value must be less than or equal to the _ProhibitSendReceiveQuota_ value. <br/>  The maximum value is determined by the mailbox plan. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan. <br/> |
| _LitigationHoldDate_ <br/> |Optional  <br/> |System.DateTime  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _LitigationHoldEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _LitigationHoldOwner_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MailboxPlanRelease_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.MailboxPlanRelease  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MaxBlockedSenders_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MaxReceiveSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _MaxReceiveSize_ parameter specifies the maximum size of a message that can be sent to created or enabled mailboxes that have the mailbox plan applied to them. Messages larger than the maximum size are rejected. <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  A valid value is a number up to 150MB. The default value is 36MB. <br/>  The maximum value is determined by the mailbox plan. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan. <br/> > [!NOTE]>  For any message size limit, you need to set a value that's larger than the actual size you want enforced. This accounts for the Base64 encoding of attachments and other binary data. Base64 encoding increases the size of the message by approximately 33%, so the value you specify should be approximately 33% larger than the actual message size you want enforced. For example, if you specify a maximum message size value of 64 MB, you can expect a realistic maximum message size of approximately 48 MB.          |
| _MaxSafeSenders_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MaxSendSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _MaxSendSize_ parameter specifies the maximum size of a message that can be sent by created or enabled mailboxes that have the mailbox plan applied to them. <br/>  When you enter a value, qualify the value with one of the following units: <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  A valid value is a number up to 150MB. The default value is 35MB. <br/>  The maximum value is determined by the mailbox plan. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan. <br/> > [!NOTE]>  For any message size limit, you need to set a value that's larger than the actual size you want enforced. This accounts for the Base64 encoding of attachments and other binary data. Base64 encoding increases the size of the message by approximately 33%, so the value you specify should be approximately 33% larger than the actual message size you want enforced. For example, if you specify a maximum message size value of 64 MB, you can expect a realistic maximum message size of approximately 48 MB.          |
| _MessageTrackingReadStatusEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OfflineAddressBook_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OfflineAddressBookIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ProhibitSendQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _ProhibitSendQuota_ parameter specifies a size limit for the mailbox. If the mailbox reaches or exceeds this size, the mailbox can't send new messages, and the user receives a descriptive warning message. <br/>  A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value `unlimited`. When you enter a number, you can qualify it with one of the following units:  <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The _ProhibitSendQuota_ value must be less than or equal to the _ProhibitSendReceiveQuota_ value. <br/>  The maximum value is determined by the mailbox plan. You can lower the value, and you may be able to raise the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan. <br/> |
| _ProhibitSendReceiveQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _ProhibitSendReceiveQuota_ parameter specifies a size limit for the mailbox. If the mailbox reaches or exceeds this size, the mailbox can't send or receive new messages. Messages sent to the mailbox are returned to the sender with a descriptive error message. This value effectively determines the maximum size of the mailbox. <br/>  A valid value is a number up to 1.999999999 terabytes (2199023254528 bytes) or the value `unlimited`. When you enter a number, you can qualify it with one of the following units:  <br/>  `B` (bytes) <br/>  `KB` (kilobytes) <br/>  `MB` (megabytes) <br/>  `GB` (gigabytes) <br/>  `TB` (terabytes) <br/>  Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte. <br/>  The value must be greater than or equal to the _ProhibitSendQuota_ or _IssueWarningQuota_ values. <br/>  The maximum value is determined by the mailbox plan. You can lower the value, but you can't exceed the maximum value that's specified by the subscription or license that corresponds to the mailbox plan. <br/> |
| _QueryBaseDNRestrictionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RecipientLimits_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RecoverableItemsQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RecoverableItemsWarningQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemoteAccountPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RemoteAccountPolicyIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemoteRecipientType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.RemoteRecipientType  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RequireSenderAuthenticationEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ResetPasswordOnNextLogon_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RetainDeletedItemsFor_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> | The _RetainDeletedItemsFor_ parameter specifies the length of time to keep soft-deleted items for the mailbox.Soft-deleted items are items that have been deleted by using any of these methods: <br/>  Deleting items from the Deleted Items folder. <br/>  Selecting the **Empty Deleted Items Folder** action. <br/>  Deleting items using Shift + Delete. <br/>  These actions move the items to the Recoverable Items folder, into a subfolder named Deletions. <br/>  Before the deleted item retention period expires, users can recover soft-deleted items in Outlook and Outlook on the web by using the **Recover Deleted Items** feature. For more information, see[Recoverable Items folder in Exchange 2016](https://technet.microsoft.com/library/ee364755.aspx).  <br/>  To specify a value, enter it as a time span: `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/>  The default value is 14 days ( `14.00:00:00`). In Office 365, you can increase the value to a maximum of 30 days.  <br/> |
| _RetainDeletedItemsUntilBackup_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RetentionComment_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RetentionHoldEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RetentionPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> | The _RetentionPolicy_ parameter specifies the retention policy that you want applied to mailboxes that have the mailbox plan applied to them. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished Name (DN) <br/>  GUID <br/>  Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained. <br/>  Use the **Get-RetentionPolicy** cmdlet to see the available retention policies. <br/> |
| _RetentionUrl_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RoleAssignmentPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> | The _RoleAssignmentPolicy_ parameter specifies the management role assignment policy that's associated with the mailbox plan. This role assignment policy is assigned to all created or enabled mailboxes that have the mailbox plan assigned to them. <br/>  The default value is blank ( `$null`). This value means that new mailboxes receive the default role assignment policy that's configured for the organization. By default, the default role assignment policy is named Default Role Assignment Policy.  <br/>  To associate a role assignment policy with the mailbox plan, you use any value that uniquely identifies the role assignment policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  To see the available role assignment policies, use the **Get-RoleAssignmentPolicy** cmdlet. <br/> |
| _RulesQuota_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ByteQuantifiedSize  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SCLDeleteEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SCLDeleteThreshold_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SCLJunkEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SCLJunkThreshold_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SCLQuarantineEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SCLQuarantineThreshold_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SCLRejectEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SCLRejectThreshold_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SharingPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.SharingPolicyIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SingleItemRecoveryEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SKUCapability_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Capability  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _StartDateForRetentionHold_ <br/> |Optional  <br/> |System.DateTime  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ThrottlingPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ThrottlingPolicyIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _UseDatabaseQuotaDefaults_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _UseDatabaseRetentionDefaults_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _UserCertificate_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _UserPrincipalName_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _UserSMimeCertificate_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

