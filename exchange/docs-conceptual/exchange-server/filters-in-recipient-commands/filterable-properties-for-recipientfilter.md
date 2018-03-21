---
title: "Filterable properties for the RecipientFilter parameter"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 3/17/2017
ms.audience: ITPro
ms.topic: article
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: cf78aca5-6699-485c-9b15-e0adba252176
description: "Learn about the recipient properties that you can use with the RecipientFilter parameter in Exchange 2016 cmdlets."
---

# Filterable properties for the -RecipientFilter parameter

Learn about the recipient properties that you can use with the _RecipientFilter_ parameter in Exchange 2016 cmdlets.
  
You use the _RecipientFilter_ parameter to create OPATH filters based on the properties of recipient objects in Exchange Server 2016. The _RecipientFilter_ parameter is available in the following cmdlets:
  
- [New-AddressList](../../../exchange-ps/email-addresses-and-address-books/new-addresslist.md) and [Set-AddressList](../../../exchange-ps/email-addresses-and-address-books/set-addresslist.md)
    
- [New-DynamicDistributionGroup](../../../exchange-ps/users-and-groups/new-dynamicdistributiongroup.md) and [Set-DynamicDistributionGroup](../../../exchange-ps/users-and-groups/set-dynamicdistributiongroup.md)
    
- [New-EmailAddressPolicy](../../../exchange-ps/email-addresses-and-address-books/new-emailaddresspolicy.md) and [Set-EmailAddressPolicy](../../../exchange-ps/email-addresses-and-address-books/set-emailaddresspolicy.md)
    
- [New-GlobalAddressList](../../../exchange-ps/email-addresses-and-address-books/new-globaladdresslist.md) and [Set-GlobalAddressList](../../../exchange-ps/email-addresses-and-address-books/set-globaladdresslist.md)
    
## Filterable recipient properties

The recipient properties that have been  *confirmed*  to work with the _RecipientFilter_ parameter in *all* cmdlets are described in the following table.
  
 **Notes**:
  
- The list might include:
    
  - Properties that are only used in one type of environment: Microsoft Office 365, on-premises Exchange, or hybrid. The property might exist on recipient objects in all environments, but the value is only meaningful (a value other than blank or  `None`) in one type of environment.
    
  - Properties that are present, but correspond to features that are no longer used in Exchange 2016.
    
- You can't use properties from other Active Directory schema extensions with the _RecipientFilter_ parameter.
    
- Not all recipient properties have a corresponding Active Directory property. The LDAP display name value in the table is "n/a" for these properties, which indicates that the property calculated (likely by Exchange).
    
- You typically use the object's name for properties that require a valid object value (for example, a mailbox, a distribution group, or an email address policy, but the property might also accept the object's distinguished name (DN) or globally unique identifier (GUID). To find the object's DN or GUID, use the **Get-** cmdlet that corresponds to the object's type (for example, `Get-EmailAddressPolicy | Format-List Name,DistinguishedName,GUID`).
    
- Text string properties that accept wildcard characters require the  `-like` operator (for example, `Property -like '*abc'`).
    
- The Value column in the table describes the acceptable values for the  *filter*  , not necessarily for the property itself. For example, a property might obviously contain a date or numeric value, but when you use that property in a filter, it might be treated like a text string (no value check, and wildcards are supported).
    
- To look for blank or non-blank property values, use the value  `$null` (for example, `Property -eq $null` or `Property -ne $null`).
    
- For more information about creating filters in recipient commands, see [Additional OPATH syntax information](https://technet.microsoft.com/library/b22affa2-ef51-4e4e-b59c-a58620baf8aa.aspx#OPATH).
    
****

|**Property name**|**LDAP display name**|**Value**|**Comments**|
|:-----|:-----|:-----|:-----|
| _AcceptMessagesOnlyFrom_ <br/> | _authOrig_ <br/> |Dynamic distribution groups: String (wildcards accepted).  <br/> Others: Blank or non-blank.  <br/> ||
| _AcceptMessagesOnlyFromDLMembers_ <br/> | _dLMemSubmitPerms_ <br/> |Dynamic distribution groups: String (wildcards accepted).  <br/> Others: Blank or non-blank.  <br/> ||
| _ActiveSyncAllowedDeviceIDs_ <br/> | _msExchMobileAllowedDeviceIds_ <br/> |String (wildcards accepted).  <br/> ||
| _ActiveSyncBlockedDeviceIDs_ <br/> | _msExchMobileBlockedDeviceIds_ <br/> |String (wildcards accepted).  <br/> ||
| _ActiveSyncEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _ActiveSyncMailboxPolicy_ <br/> | _msExchMobileMailboxPolicyLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> |The default Exchange ActiveSync mailbox policy is named Default.  <br/> |
| _ActiveSyncSuppressReadReceipt_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _AddressBookPolicy_ <br/> | _msExchAddressBookPolicyLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _AddressListMembership_ <br/> | _showInAddressBook_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _AdminDisplayName_ <br/> | _adminDisplayName_ <br/> |String (wildcards accepted).  <br/> ||
| _AdministrativeUnits_ <br/> | _msExchAdministrativeUnitLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _AggregatedMailboxGuids_ <br/> | _msExchAlternateMailboxes_ <br/> |String (wildcards accepted).  <br/> ||
| _Alias_ <br/> | _mailNickname_ <br/> |String (wildcards accepted).  <br/> |This property contains the recipient's Exchange alias (also known as the mail nickname). This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one _Alias_ value. <br/> |
| _AllowUMCallsFromNonUsers_ <br/> | _msExchUMListInDirectorySearch_ <br/> | `None` (0) or `SearchEnabled` (1) <br/> ||
| _ArbitrationMailbox_ <br/> | _msExchArbitrationMailbox_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _ArchiveDatabase_ <br/> | _msExchArchiveDatabaseLink_ <br/> |String  <br/> ||
| _ArchiveDomain_ <br/> | _msExchArchiveAddress_ <br/> |String (wildcards accepted).  <br/> ||
| _ArchiveGuid_ <br/> | _msExchArchiveGUID_ <br/> |String (wildcards accepted).  <br/> ||
| _ArchiveName_ <br/> | _msExchArchiveName_ <br/> |String (wildcards accepted).  <br/> ||
| _ArchiveQuota_ <br/> | _msExchArchiveQuota_ <br/> |Dynamic distribution groups: A byte quantified size value (for example,  `300MB` or `1.5GB`). Unqualified values are treated as bytes.  <br/> Others: Blank or non-blank.  <br/> ||
| _ArchiveWarningQuota_ <br/> | _msExchArchiveWarnQuota_ <br/> |Dynamic distribution groups: A byte quantified size value (for example,  `300MB` or `1.5GB`). Unqualified values are treated as bytes.  <br/> Others: Blank or non-blank.  <br/> ||
| _ArchiveRelease_ <br/> | _msExchArchiveRelease_ <br/> |String (wildcards accepted).  <br/> ||
| _ArchiveState_ <br/> |n/a  <br/> | `None` (0), `Local` (1), `HostedProvisioned` (2), `HostedPending` (3), or `OnPremise` (4). <br/> ||
| _ArchiveStatus_ <br/> | _msExchArchiveStatus_ <br/> | `None` (0) or `Active` (1). <br/> ||
| _AssistantName_ <br/> | _msExchAssistantName_ <br/> |String (wildcards accepted).  <br/> |The name of the recipient's assistant.  <br/> |
| _AuditEnabled_ <br/> | _msExchMailboxAuditEnable_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _AuditLogAgeLimit_ <br/> | _msExchMailboxAuditLogAgeLimit_ <br/> |Dynamic distribution groups: String (wildcards accepted).  <br/> Others: Blank or non-blank.  <br/> |The value of this property is a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> |
| _AuthenticationPolicy_ <br/> | _msExchAuthPolicyLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _C_ <br/> | _C_ <br/> |String (wildcards accepted).  <br/> |This property contains the two-letter country/region designation from International Organization for Standardization (ISO) 3166. For more information, see [Country Codes - ISO 3166](https://go.microsoft.com/fwlink/p/?linkid=213779).  <br/> |
| _CalendarLoggingQuota_ <br/> | _msExchCalendarLoggingQuota_ <br/> |Dynamic distribution groups:  `Unlimited` or a byte quantified size value (for example, `300MB` or `1.5GB`). Unqualified values are treated as bytes.  <br/> Others:  `Unlimited`, or blank/non-blank.  <br/> ||
| _CalendarRepairDisabled_ <br/> | _msExchCalendarRepairDisabled_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _Certificate_ <br/> | _userCertificate_ <br/> | `System.Byte[]` <br/> |This property contains the DER-encoded X509v3 certificates that are issued to the user.  <br/> |
| _CertificateSubject_ <br/> | _n/a_ <br/> | `X509:<I>X500Issuer<S>X500Subject` (for example, `X509:<I>C=US,O=InternetCA,CN=APublicCertificateAuthority<S>C=US,O=Fabrikam,OU=Sales,CN=Jeff Smith`)  <br/> |The X509 certificate that's published for the user account (visible on the **Published Certificates** tab in Active Directory Users and Computers). <br/> |
| _City_ <br/> | _l_ <br/> |String (wildcards accepted).  <br/> |The recipient's city.  <br/> |
| _Co_ <br/> | _Co_ <br/> |String (wildcards accepted).  <br/> |The name of the recipient's country or region. You can locate valid _Co_ values on the **Address** tab in the recipient's properties in Active Directory Users and Computers. <br/> |
| _CommonName_ <br/> | _cn_ <br/> |String (wildcards accepted).  <br/> ||
| _ComplianceTagHoldApplied_ <br/> | _n/a_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _Company_ <br/> | _company_ <br/> |String (wildcards accepted).  <br/> |The recipient's company name.  <br/> |
| _CountryCode_ <br/> | _CountryCode_ <br/> |Integers  <br/> |This property contains the numeric country/region designation from ISO 3166. For more information, see [Country Codes - ISO 3166](https://go.microsoft.com/fwlink/p/?linkid=213779).  <br/> |
| _CountryOrRegion_ <br/> |c  <br/> |String (wildcards accepted).  <br/> |This property contains the two-letter country/region designation from ISO 3166. For more information, see [Country Codes - ISO 3166](https://go.microsoft.com/fwlink/p/?linkid=213779).  <br/> |
| _CustomAttribute1_ to _CustomAttribute15_ <br/> | _extensionAttribute1_ to _extensionAttribute15_ <br/> |String (wildcards accepted).  <br/> |These properties contain custom attributes that you can add to a recipient.  <br/> |
| _Database_ <br/> | _homeMDB_ <br/> |String (wildcards accepted).  <br/> |The identity of the user's mailbox database.  <br/> |
| _Department_ <br/> | _department_ <br/> |String (wildcards accepted).  <br/> |The recipient's department.  <br/> |
| _DataEncryptionPolicy_ <br/> | _msExchDataEncryptionPolicyLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _DefaultPublicFolderMailbox_ <br/> | _msExchPublicFolderMailbox_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _DeletedItemFlags_ <br/> | _deletedItemFlags_ <br/> | `DatabaseDefault` (0), `RetainUntilBackupOrCustomPeriod` (3), or `RetainForCustomPeriod` (5). <br/> ||
| _DeliverToMailboxAndForward_ <br/> | _deliverAndRedirect_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _Description_ <br/> | _description_ <br/> |String (wildcards accepted).  <br/> ||
| _DirectReports_ <br/> | _directReports_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _DisabledArchiveDatabase_ <br/> | _msExchDisabledArchiveDatabaseLink_ <br/> |String (wildcards accepted).  <br/> ||
| _DisabledArchiveGuid_ <br/> | _msExchDisabledArchiveDatabaseGUID_ <br/> |String (wildcards accepted).  <br/> ||
| _DisplayName_ <br/> | _displayName_ <br/> |String (wildcards accepted).  <br/> ||
| _DistinguishedName_ <br/> | _distinguishedName_ <br/> |String (wildcards accepted).  <br/> ||
| _EcpEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _ElcExpirationSuspensionEndDate_ <br/> | _msExchELCExpirySuspensionEnd_ <br/> |Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server.  <br/> Others: Blank or non-blank.  <br/> |This property contains a date-time value.  <br/> |
| _ElcExpirationSuspensionStartDate_ <br/> | _msExchELCExpirySuspensionStart_ <br/> |Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server.  <br/> Others: Blank or non-blank.  <br/> |This property contains a date-time value.  <br/> |
| _ElcMailboxFlags_ <br/> | _msExchELCMailboxFlags_ <br/> | `None` (0), `ExpirationSuspended` (1), `ElcV2` (2), `DisableCalendarLogging` (4), <br/>  `LitigationHold` (8), `SingleItemRecovery` (16), `ValidArchiveDatabase` (32), `ShouldUseDefaultRetentionPolicy` (128), `EnableSiteMailboxMessageDedup` (256), `ElcProcessingDisabled` (512), or `ComplianceTagHold` (1024). <br/> ||
| _EmailAddresses_ <br/> | _proxyAddresses_ <br/> |String (wildcards accepted).  <br/> |This property contains the recipient's email addresses (the primary email address and all proxy addresses).  <br/> |
| _EmailAddressPolicyEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _EntryId_ <br/> | _msExchPublicFolderEntryId_ <br/> |String (wildcards accepted).  <br/> ||
| _EwsApplicationAccessPolicy_ <br/> | _msExchEwsApplicationAccessPolicy_ <br/> | `EnforceAllowList` or `EnforceBlockList`.  <br/> ||
| _EwsEnabled_ <br/> | _msExchEwsEnabled_ <br/> |Integer  <br/> ||
| _ExchangeGuid_ <br/> | _msExchMailboxGuid_ <br/> |String (wildcards accepted).  <br/> ||
| _ExchangeUserAccountControl_ <br/> | _msExchUserAccountControl_ <br/> |For valid values, see [ADS_USER_FLAG_ENUM enumeration](https://go.microsoft.com/fwlink/p/?linkid=190424). The integer values will work as described. Most of the text values won't work as described (even if you remove  `ADS_UF` and all underscores). <br/> ||
| _ExchangeVersion_ <br/> | _msExchVersion_ <br/> |Dynamic distribution groups: String (wildcards accepted).  <br/> Others:  `ExchangeObjectVersion` values. <br/> ||
| _ExpansionServer_ <br/> | _msExchExpansionServerName_ <br/> |String (wildcards accepted).  <br/> ||
| _ExtensionCustomAttribute1_ to _ExtensionCustomAttribute5_ <br/> | _msExchExtensionCustomAttribute1_ to _msExchExtensionCustomAttribute5_ <br/> |String (wildcards accepted).  <br/> ||
| _ExternalDirectoryObjectId_ <br/> | _msExchExternalDirectoryObjectId_ <br/> |String (wildcards accepted).  <br/> ||
| _ExternalEmailAddress_ <br/> | _targetAddress_ <br/> |String (wildcards accepted).  <br/> |This property contains the external email address for mail contacts and mail users.  <br/> |
| _ExternalOofOptions_ <br/> | _msExchExternalOOFOptions_ <br/> | `External` (0) or `InternalOnly` (1). <br/> ||
| _Fax_ <br/> | _facsimileTelephoneNumber_ <br/> |String (wildcards accepted).  <br/> ||
| _FirstName_ <br/> | _givenName_ <br/> |String (wildcards accepted).  <br/> |The recipient's first name.  <br/> |
| _ForwardingAddress_ <br/> | _altRecipient_ <br/> |String (wildcards accepted).  <br/> ||
| _ForwardingSmtpAddress_ <br/> | _msExchGenericForwardingAddress_ <br/> |String (wildcards accepted).  <br/> ||
| _GeneratedOfflineAddressBooks_ <br/> | _msExchOABGeneratingMailboxBL_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _GrantSendOnBehalfTo_ <br/> | _publicDelegates_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _GroupType_ <br/> | _groupType_ <br/> | `None` (0), `Global` (2), `DomainLocal` (4), `BuiltinLocal` (5), `Universal` (8), or `SecurityEnabled` (-2147483648). <br/> ||
| _Guid_ <br/> | _objectGuid_ <br/> |String (wildcards accepted).  <br/> ||
| _HasActiveSyncDevicePartnership_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _HiddenFromAddressListsEnabled_ <br/> | _msExchHideFromAddressLists_ <br/> |Boolean ( `$true` or `$false`)  <br/> |This property specifies whether the recipient is visible in the global address list or other address lists.  <br/> |
| _HiddenGroupMembershipEnabled_ <br/> | _hideDLMembership_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _HomeMTA_ <br/> | _homeMTA_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _HomePhone_ <br/> | _homePhone_ <br/> |String (wildcards accepted).  <br/> ||
| _Id_ <br/> | _distinguishedName_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _ImapEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _ImmutableId_ <br/> | _msExchGenericImmutableId_ <br/> |String (wildcards accepted).  <br/> ||
| _IncludedRecipients_ <br/> |n/a  <br/> | `None` (0), `MailboxUsers` (1), `Resources` (2), `MailContacts` (4), `MailGroups` (8), `MailUsers` (16), or `AllRecipients` (-1). <br/> ||
| _IncludeInGarbageCollection_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _Initials_ <br/> | _initials_ <br/> |String (wildcards accepted).  <br/> ||
| _InPlaceHolds_ <br/> | _msExchUserHoldPolicies_ <br/> |String  <br/> ||
| _InPlaceHoldsRaw_ <br/> |n/a  <br/> |String  <br/> ||
| _InternetEncoding_ <br/> | _internetEncoding_ <br/> |Integer  <br/> |For valid values, see the Remarks section in the topic, [Encoding Class](https://go.microsoft.com/fwlink/p/?linkid=184080).  <br/> |
| _IsDirSynced_ <br/> | _msExchIsMSODirsynced_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _IsExcludedFromServingHierarchy_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _IsHierarchyReady_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _IsHierarchySyncEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _IsInactiveMailbox_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _IsMailboxEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> |This property specifies whether the user is mailbox-enabled.  <br/> |
| _IsSecurityPrincipal_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _IsSoftDeletedByDisable_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _IsSoftDeletedByRemove_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _IssueWarningQuota_ <br/> | _mDBStorageQuota_ <br/> |Dynamic distribution groups: A byte quantified size value (for example,  `300MB` or `1.5GB`). Unqualified values are treated as bytes.  <br/> Others: Blank or non-blank.  <br/> ||
| _JournalArchiveAddress_ <br/> |n/a  <br/> |An SMTP email address (for example,  `julia@contoso.com`).  <br/> ||
| _LanguagesRaw_ <br/> | _msExchUserCulture_ <br/> |String (wildcards accepted).  <br/> |This property contains the language preference for this mailbox in the format  `<ISO 639 two-letter culture code>-<ISO 3166 two-letter subculture code>`. For example, United States English is  `en-US`. For more information, see [CultureInfo Class](https://go.microsoft.com/fwlink/p/?LinkID=255174).  <br/> |
| _LastExchangeChangedTime_ <br/> | _msExchLastExchangeChangedTime_ <br/> |Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server.  <br/> Others: Blank or non-blank.  <br/> ||
| _LastName_ <br/> | _sn_ <br/> |String (wildcards accepted).  <br/> ||
| _LdapRecipientFilter_ <br/> | _msExchDynamicDLFilter_ <br/> |String (wildcards accepted).  <br/> ||
| _LegacyExchangeDN_ <br/> | _legacyExchangeDN_ <br/> |String (wildcards accepted).  <br/> ||
| _LitigationHoldDate_ <br/> | _msExchLitigationHoldDate_ <br/> |Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server.  <br/> Others: Blank or non-blank.  <br/> ||
| _LitigationHoldEnabled_ <br/> | _n/a_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _LitigationHoldOwner_ <br/> | _msExchLitigationHoldOwner_ <br/> |String (wildcards accepted).  <br/> ||
| _LocaleID_ <br/> | _localeID_ <br/> |Integer  <br/> |For valid values, [Microsoft Locale ID Values](https://go.microsoft.com/fwlink/p/?linkid=229656).  <br/> |
| _MailboxMoveBatchName_ <br/> | _msExchMailboxMoveBatchName_ <br/> |String (wildcards accepted).  <br/> ||
| _MailboxMoveFlags_ <br/> | _msExchMailboxMoveFlags_ <br/> |For valid values, see the description of the _Flags_ parameter in[Get-MoveRequest](../../../exchange-ps/move-and-migration/get-moverequest.md).  <br/> ||
| _MailboxMoveRemoteHostName_ <br/> | _msExchMailboxMoveRemoteHostName_ <br/> |String (wildcards accepted).  <br/> ||
| _MailboxMoveSourceMDB_ <br/> | _msExchMailboxMoveSourceMDBLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _MailboxMoveStatus_ <br/> | _msExchMailboxMoveStatus_ <br/> |For valid values, see the description of the _MoveStatus_ parameter in[Get-MoveRequest](../../../exchange-ps/move-and-migration/get-moverequest.md).  <br/> ||
| _MailboxMoveTargetMDB_ <br/> | _msExchMailboxMoveTargetMDBLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _MailboxPlan_ <br/> | _msExchParentPlanLink_ <br/> |String (wildcards accepted).  <br/> |Mailbox plans correspond to Office 365 license types. The availability of a license plans is determined by the selections that you make when you enroll your domain.  <br/> |
| _MailboxRelease_ <br/> | _msExchMailboxRelease_ <br/> |String (wildcards accepted).  <br/> ||
| _MailTipTranslations_ <br/> | _msExchSenderHintTranslations_ <br/> |String (wildcards accepted).  <br/> ||
| _ManagedBy_ <br/> | _managedBy_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> |This property identifies the security principal that's the manager of the group.  <br/> |
| _Manager_ <br/> | _manager_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> |The recipient's manager.  <br/> |
| _MAPIEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _MapiRecipient_ <br/> | _mAPIRecipient_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _MaxBlockedSenders_ <br/> | _msExchMaxBlockedSenders_ <br/> | `Unlimited` or an integer. <br/> ||
| _MaxSafeSenders_ <br/> | _msExchMaxSafeSenders_ <br/> | `Unlimited` or an integer. <br/> ||
| _MaxReceiveSize_ <br/> | _delivContLength_ <br/> |Dynamic distribution groups: A byte quantified size value (for example,  `50MB`). Unqualified values are treated as bytes.  <br/> Others: Blank or non-blank.  <br/> ||
| _MaxSendSize_ <br/> | _submissionContLength_ <br/> |Dynamic distribution groups: A byte quantified size value (for example,  `50MB`). Unqualified values are treated as bytes.  <br/> Others: Blank or non-blank.  <br/> ||
| _MemberDepartRestriction_ <br/> | _msExchGroupDepartRestriction_ <br/> | `Closed` (0), `Open` (1), or `ApprovalRequired` (2). <br/> ||
| _MemberJoinRestriction_ <br/> | _msExchGroupDepartRestriction_ <br/> | `Closed` (0), `Open` (1), or `ApprovalRequired` (2). <br/> ||
| _MemberOfGroup_ <br/> | _memberOf_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _Members_ <br/> | _member_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _MessageHygieneFlags_ <br/> | _msExchMessageHygieneFlags_ <br/> | `None` (0) or `AntispamBypass` (1). <br/> ||
| _MobileAdminExtendedSettings_ <br/> | _msExchOmaAdminExtendedSettings_ <br/> |String (wildcards accepted).  <br/> ||
| _MobileMailboxFlags_ <br/> | _msExchMobileMailboxFlags_ <br/> | `None` (0), `HasDevicePartnership` (1), or ActiveSyncSuppressReadReceipt (2). <br/> ||
| _MobileFeaturesEnabled_ <br/> | _msExchOmaAdminWirelessEnable_ <br/> | `None` (0), `AirSyncDisabled` (4), or `MowaDisabled` (8). <br/> ||
| _MobilePhone_ <br/> | _mobile_ <br/> |String (wildcards accepted).  <br/> ||
| _ModeratedBy_ <br/> | _msExchModeratedByLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _ModerationEnabled_ <br/> | _msExchEnableModeration_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _Name_ <br/> | _name_ <br/> |String (wildcards accepted).  <br/> |The unique name value of the recipient.  <br/> |
| _NetID_ <br/> |n/a  <br/> |A sample value is  `1003BFFD9A0CFA03`.  <br/> |This property is populated for Office 365 mailboxes in hybrid environments.  <br/> |
| _Notes_ <br/> | _info_ <br/> |String (wildcards accepted).  <br/> ||
| _ObjectCategory_ <br/> | _objectCategory_ <br/> |Dynamic distribution groups: String (wildcards accepted).  <br/> Others: Valid Active Directory  `ObjectCategory` values. <br/> |Valid values use the format  `CN=<Type>,CN=Schema,CN=Configuration,DC=<domain>`, where _\<Type\>_ is typically `Person` or `Group` for recipients. For example, `CN=Person,CN=Schema,CN=Configuration,DC=contoso,DC=com`.  <br/> |
| _ObjectClass_ <br/> | _objectClass_ <br/> |Dynamic distribution groups: String (wildcards accepted).  <br/> Others: Valid Active Directory  `ObjectCategory` values. <br/> | Common values for recipients are: `contact`,  `organizationalPerson`,  `person`,  `top`,  `group`,  `msExchDynamicDistributionList`, and  `user`.  <br/> |
| _Office_ <br/> | _physicalDeliveryOfficeName_ <br/> |String (wildcards accepted).  <br/> ||
| _OfflineAddressBook_ <br/> | _msExchUseOAB_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> |This property contains the offline address book (OAB) that's associated with this recipient.  <br/> |
| _OperatorNumber_ <br/> | _msExchUMOperatorNumber_ <br/> |String (wildcards accepted).  <br/> ||
| _OtherFax_ <br/> | _otherFacsimileTelephoneNumber_ <br/> |String (wildcards accepted).  <br/> ||
| _OtherHomePhone_ <br/> | _otherHomePhone_ <br/> |String (wildcards accepted).  <br/> ||
| _OtherTelephone_ <br/> | _otherTelephone_ <br/> |String (wildcards accepted).  <br/> ||
| _OWAEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _OWAforDevicesEnabled_ <br/> | _msExchOmaAdminWirelessEnable_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _OWAMailboxPolicy_ <br/> | _msExchOWAPolicy_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _Pager_ <br/> | _pager_ <br/> |String (wildcards accepted).  <br/> ||
| _Phone_ <br/> | _telephoneNumber_ <br/> |String (wildcards accepted).  <br/> ||
| _PhoneProviderId_ <br/> | _msExchUMPhoneProvider_ <br/> |String (wildcards accepted).  <br/> ||
| _PhoneticCompany_ <br/> | _msDS-PhoneticCompanyName_ <br/> |String (wildcards accepted).  <br/> ||
| _PhoneticDepartment_ <br/> | _msDS-PhoneticDepartment_ <br/> |String (wildcards accepted).  <br/> ||
| _PhoneticDisplayName_ <br/> | _msDS-PhoneticDisplayName_ <br/> |String (wildcards accepted).  <br/> ||
| _PhoneticFirstName_ <br/> | _msDS-PhoneticFirstName_ <br/> |String (wildcards accepted).  <br/> ||
| _PhoneticLastName_ <br/> | _msDS-PhoneticLastName_ <br/> |String (wildcards accepted).  <br/> ||
| _PoliciesExcluded_ <br/> | _msExchPoliciesExcluded_ <br/> |String (wildcards accepted).  <br/> ||
| _PoliciesIncluded_ <br/> | _msExchPoliciesIncluded_ <br/> |String (wildcards accepted).  <br/> ||
| _PopEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _PostalCode_ <br/> | _postalCode_ <br/> |String (wildcards accepted).  <br/> ||
| _PostOfficeBox_ <br/> | _postOfficeBox_ <br/> |String (wildcards accepted).  <br/> ||
| _PreviousRecipientTypeDetails_ <br/> | _msExchPreviousRecipientTypeDetails_ <br/> |For valid values, see the description of the _RecipientTypeDetails_ parameter in[Get-Recipient](../../../exchange-ps/users-and-groups/get-recipient.md).  <br/> ||
| _PrimaryGroupId_ <br/> | _primaryGroupId_ <br/> |Integer  <br/> |For domain users, the value of this property is typically 513, which corresponds to the Domain Users group.  <br/> |
| _PrimarySmtpAddress_ <br/> |n/a  <br/> |String (wildcards accepted).  <br/> ||
| _ProhibitSendQuota_ <br/> | _mDBOverQuotaLimit_ <br/> |Dynamic distribution groups: A byte quantified size value (for example,  `50MB` or `1.5GB`). Unqualified values are treated as bytes.  <br/> Others: Blank or non-blank.  <br/> ||
| _ProhibitSendReceiveQuota_ <br/> | _mDBOverHardQuotaLimit_ <br/> |Dynamic distribution groups: A byte quantified size value (for example,  `50MB` or `1.5GB`). Unqualified values are treated as bytes.  <br/> Others: Blank or non-blank.  <br/> ||
| _ProtocolSettings_ <br/> | _protocolSettings_ <br/> |String (wildcards accepted).  <br/> ||
| _PublicFolderContacts_ <br/> | _pFContacts_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _PurportedSearchUI_ <br/> | _msExchPurportedSearchUI_ <br/> |String (wildcards accepted).  <br/> ||
| _QueryBaseDN_ <br/> | _msExchQueryBaseDN_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _RawCanonicalName_ <br/> | _canonicalName_ <br/> |String (wildcards accepted).  <br/> ||
| _RawExternalEmailAddress_ <br/> | _targetAddress_ <br/> |String (wildcards accepted).  <br/> ||
| _RawName_ <br/> | _name_ <br/> |String (wildcards accepted).  <br/> ||
| _RecipientContainer_ <br/> | _msExchDynamicDLBaseDN_ <br/> |String (wildcards accepted).  <br/> |The Active Directory container or organizational unit (OU) that holds the recipient object.  <br/> |
| _RecipientDisplayType_ <br/> | _msExchRecipientDisplayType_ <br/> | `MailboxUser` (0), `DistributionGroup` (1), `PublicFolder` (2), `DynamicDistributionGroup` (3), `Organization` (4), `PrivateDistributionList` (5), `RemoteMailUser` (6). `ConferenceRoomMailbox` (7), or `EquipmentMailbox` (8). <br/> ||
| _RecipientFilter_ <br/> | _msExchQueryFilter_ <br/> |String (wildcards accepted).  <br/> ||
| _RecipientLimits_ <br/> | _msExchRecipLimit_ <br/> | `Unlimited` or an integer. <br/> |This property specifies the maximum number of recipients that are allowed in messages sent by the mailbox.  <br/> |
| _RecipientType_ <br/> |n/a  <br/> |For valid values, see the description of the _RecipientType_ parameter in[Get-Recipient](../../../exchange-ps/users-and-groups/get-recipient.md).  <br/> ||
| _RecipientTypeDetails_ <br/> |n/a  <br/> |For valid values, see the description of the _RecipientTypeDetails_ parameter in[Get-Recipient](../../../exchange-ps/users-and-groups/get-recipient.md).  <br/> ||
| _RecoverableItemsQuota_ <br/> | _msExchDumpsterQuota_ <br/> |Dynamic distribution groups: A byte quantified size value (for example,  `50MB` or `1.5GB`). Unqualified values are treated as bytes.  <br/> Others: Blank or non-blank.  <br/> ||
| _RecoverableItemsWarningQuota_ <br/> | _msExchDumpsterWarningQuota_ <br/> |Dynamic distribution groups: A byte quantified size value (for example,  `50MB` or `1.5GB`). Unqualified values are treated as bytes.  <br/> Others: Blank or non-blank.  <br/> ||
| _RejectMessagesFrom_ <br/> | _unauthOrig_ <br/> |Dynamic distribution groups: String (wildcards accepted).  <br/> Others: Blank or non-blank.  <br/> ||
| _RejectMessagesFromDLMembers_ <br/> | _dLMemRejectPerms_ <br/> |Dynamic distribution groups: String (wildcards accepted).  <br/> Others: Blank or non-blank.  <br/> ||
| _RemoteAccountPolicy_ <br/> | _msExchSyncAccountsPolicyDN_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _RemotePowerShellEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _RemoteRecipientType_ <br/> | _msExchRemoteRecipientType_ <br/> | `None` (0), `ProvisionMailbox` (1), `ProvisionArchive` (2), `Migrated` (4), `DeprovisionMailbox` (8), `DeprovisionArchive` (16), `RoomMailbox` (32), `EquipmentMailbox` (64), `SharedMailbox` (96), or `TeamMailbox` (128). <br/> ||
| _ReportToManagerEnabled_ <br/> | _reportToOwner_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _ReportToOriginatorEnabled_ <br/> | _reportToOriginator_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _RequireAllSendersAreAuthenticated_ <br/> | _msExchRequireAuthToSendTo_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _ResourceCapacity_ <br/> | _msExchResourceCapacity_ <br/> |Integers.  <br/> ||
| _ResourceCustom_ <br/> |n/a  <br/> |String  <br/> ||
| _ResourceMetaData_ <br/> | _msExchResourceMetaData_ <br/> |String (wildcards accepted).  <br/> ||
| _ResourcePropertiesDisplay_ <br/> | _msExchResourceDisplay_ <br/> |String (wildcards accepted).  <br/> ||
| _ResourceSearchProperties_ <br/> | _msExchResourceSearchProperties_ <br/> |String (wildcards accepted).  <br/> ||
| _ResourceType_ <br/> |n/a  <br/> | `Room` (0) or `Equipment` (1). <br/> ||
| _RetainDeletedItemsFor_ <br/> | _garbageCollPeriod_ <br/> |Dynamic distribution groups: A time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> Others: Blank or non-blank.  <br/> ||
| _RetentionComment_ <br/> | _msExchRetentionComment_ <br/> |String (wildcards accepted).  <br/> ||
| _RetentionPolicy_ <br/> |n/a  <br/> |String  <br/> ||
| _RetentionUrl_ <br/> | _msExchRetentionURL_ <br/> |String (wildcards accepted).  <br/> ||
| _RoleAssignmentPolicy_ <br/> | _msExchRBACPolicyLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _RulesQuota_ <br/> | _msExchMDBRulesQuota_ <br/> |Dynamic distribution groups: A byte quantified size value (for example,  `50MB` or `1.5GB`). Unqualified values are treated as bytes.  <br/> Others: Blank or non-blank.  <br/> ||
| _SamAccountName_ <br/> | _SamAccountName_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> |This property specifies an identifier that's compatible with older versions of Microsoft Windows client and server operating systems (also known as the pre-Windows 2000 user account or group name)  <br/> |
| _SafeRecipientsHash_ <br/> | _msExchSafeRecipientsHash_ <br/> | `System.Byte[]` <br/> |A user's safe recipients list is hashed (SHA-256) one way before it's stored as a binary large object in Active Directory.  <br/> |
| _SafeSendersHash_ <br/> | _msExchSafeSendersHash_ <br/> | `System.Byte[]` <br/> |A user's safe senders list is hashed (SHA-256) one way before it's stored as a binary large object in Active Directory.  <br/> |
| _SCLDeleteThresholdInt_ <br/> | _msExchMessageHygieneSCLDeleteThreshold_ <br/> |An integer from 0 through 9.  <br/> ||
| _SCLJunkThresholdInt_ <br/> | _msExchMessageHygieneSCLJunkThreshold_ <br/> |An integer from 0 through 9.  <br/> ||
| _SCLQuarantineThresholdInt_ <br/> | _msExchMessageHygieneSCLQuarantineThreshold_ <br/> |An integer from 0 through 9.  <br/> ||
| _SCLRejectThresholdInt_ <br/> | _msExchMessageHygieneSCLRejectThreshold_ <br/> |An integer from 0 through 9.  <br/> ||
| _SecurityProtocol_ <br/> | _securityProtocol_ <br/> | `System.Byte[]` <br/> ||
| _SendDeliveryReportsTo_ <br/> |n/a  <br/> | `None` (0), `Manager` (1) or `Originator` (2). <br/> ||
| _SendOofMessageToOriginatorEnabled_ <br/> | _oOFReplyToOriginator_ <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _ServerLegacyDN_ <br/> | _msExchHomeServerName_ <br/> |String (wildcards accepted).  <br/> ||
| _ServerName_ <br/> |n/a  <br/> |String  <br/> ||
| _SharingPolicy_ <br/> | _msExchSharingPolicyLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _SimpleDisplayName_ <br/> | _displayNamePrintable_ <br/> |String (wildcards accepted).  <br/> ||
| _SingleItemrecoveryEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _SKUAssigned_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> ||
| _SMimeCertificate_ <br/> | _userSMIMECertificate_ <br/> | `System.Byte[]` <br/> |This property contains the binary encoded S/MIME certificates that are issued to the user.  <br/> |
| _StateOrProvince_ <br/> | _st_ <br/> |String (wildcards accepted).  <br/> ||
| _StreetAddress_ <br/> | _streetAddress_ <br/> |String (wildcards accepted).  <br/> ||
| _StsRefreshTokensValidFrom_ <br/> | _msExchStsRefreshTokensValidFrom_ <br/> |Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server.  <br/> Others: Blank or non-blank.  <br/> ||
| _TelephoneAssistant_ <br/> | _telephoneAssistant_ <br/> |String (wildcards accepted).  <br/> ||
| _TextEncodedORAddress_ <br/> | _textEncodedORAddress_ <br/> |String (wildcards accepted).  <br/> ||
| _ThrottlingPolicy_ <br/> | _msExchThrottlingPolicyDN_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _Title_ <br/> | _title_ <br/> |String (wildcards accepted).  <br/> ||
| _UMAddresses_ <br/> | _msExchUMAddresses_ <br/> |String (wildcards accepted).  <br/> ||
| _UMCallingLineIds_ <br/> | _msExchUMCallingLineIds_ <br/> |String (wildcards accepted).  <br/> ||
| _UMDtmfMap_ <br/> | _msExchUMDtmfMap_ <br/> |String (wildcards accepted).  <br/> ||
| _UMEnabled_ <br/> |n/a  <br/> |Boolean ( `$true` or `$false`)  <br/> |This property specifies whether Unified Messaging (UM) is enabled for this mailbox.  <br/> |
| _UMEnabledFlags_ <br/> | _msExchUMEnabledFlags_ <br/> | `None` (0), `UMEnabled` (1), `FaxEnabled` (2), `TUIAccessToCalendarEnabled` (4), `TUIAccessToEmailEnabled` (8), `SubscriberAccessEnabled` (16), `TUIAccessToAddressBookEnabled` (32), `AnonymousCallersCanLeaveMessages` (256), `ASREnabled` (512), or `VoiceMailAnalysisEnabled` (1024). <br/> ||
| _UMMailboxPolicy_ <br/> | _msExchUMTemplateLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _UMPinChecksum_ <br/> | _msExchUMPinChecksum_ <br/> | `System.Byte[]` <br/> ||
| _UMRecipientDialPlanId_ <br/> | _msExchUMRecipientDialPlanLink_ <br/> |String (wildcards accepted in dynamic distribution groups).  <br/> ||
| _UMServerWritableFlags_ <br/> | _msExchUMServerWritableFlags_ <br/> | `None` (0), `MissedCallNotificationEnabled` (1), `SMSVoiceMailNotificationEnabled` (2), `SMSMissedCallNotificationEnabled` (4), or `PinlessAccessToVoiceMailEnabled` (8). <br/> ||
| _UMSpokenName_ <br/> | _msExchUMSpokenName_ <br/> | `System.Byte[]` <br/> ||
| _UnicodePassword_ <br/> | _unicodePwd_ <br/> | `System.Byte[]` <br/> ||
| _UsageLocation_ <br/> | _msExchUsageLocation_ <br/> |A valid two-letter country/region ISO 3166 value, or the corresponding display name (for example,  `US` or `UnitedStates`). For more information, see [Country Codes - ISO 3166](https://go.microsoft.com/fwlink/p/?linkid=213779).  <br/> ||
| _UseDatabaseQuotaDefaults_ <br/> | _mDBUseDefaults_ <br/> |Boolean ( `$true` or `$false`)  <br/> |If the value of this property is $true, the values of these properties are ignored for the mailbox: _IssueWarningQuota_, _ProhibitSendQuota_, _ProhibitSendReceiveQuota_, , _CalendarLoggingQuota_, _RecoverableItemsWarningQuota_, and _RecoverableItemsQuota_.  <br/> |
| _UserAccountControl_ <br/> | _userAccountControl_ <br/> |For valid values, see the Remarks section in [User-Account-Control attribute](https://go.microsoft.com/fwlink/p/?linkid=183366). You need to convert the hexadecimal values to decimal. Most of the text values won't work as described (even if you remove  `ADS_UF` and all underscores). <br/> ||
| _UserPrincipalName_ <br/> | _userPrincipalName_ <br/> |String (wildcards accepted).  <br/> |This property contains the user principal name (UPN) for this recipient (for example,  `kim@contoso.com`).  <br/> |
| _VoiceMailSettings_ <br/> | _msExchUCVoiceMailSettings_ <br/> |String (wildcards accepted).  <br/> |Valid values for this property are:  `ExchangeHostedVoiceMail=0`,  `ExchangeHostedVoiceMail=1`,  `CsHostedVoiceMail=0`, or  `CsHostedVoiceMail=1`.  <br/> |
| _WebPage_ <br/> | _wWWHomePage_ <br/> |String (wildcards accepted).  <br/> ||
| _WhenChanged_ <br/> | _whenChanged_ <br/> |Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server.  <br/> Others: Blank or non-blank.  <br/> ||
| _WhenChangedUTC_ <br/> |n/a  <br/> |Dynamic distribution groups: A date/time value in Coordinated Universal Time (UTC).  <br/> Others: Blank or non-blank.  <br/> ||
| _WhenCreated_ <br/> | _whenCreated_ <br/> |Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server.  <br/> Others: Blank or non-blank.  <br/> ||
| _WhenCreatedUTC_ <br/> |n/a  <br/> |Dynamic distribution groups: A date/time value in UTC.  <br/> Others: Blank or non-blank.  <br/> ||
| _WhenMailboxCreated_ <br/> | _msExchWhenMailboxCreated_ <br/> |Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server.  <br/> Others: Blank or non-blank.  <br/> ||
| _WhenSoftDeleted_ <br/> | _msExchWhenSoftDeletedTime_ <br/> |Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server.  <br/> Others: Blank or non-blank.  <br/> ||
| _WindowsEmailAddress_ <br/> | _mail_ <br/> |String (wildcards accepted).  <br/> ||
| _WindowsLiveID_ <br/> | _msExchWindowsLiveID_ <br/> |String (wildcards accepted).  <br/> ||
   
## For more information

Exchange 2007 was the first version of Exchange that required OPATH filters instead of LDAP filters. For more information about converting LDAP filters to OPATH filters, see the Microsoft Exchange Team Blog article, [Need help converting your LDAP filters to OPATH?](https://go.microsoft.com/fwlink/p/?LinkId=88854).
  
For more information about the syntax that can be used within OPATH filters, see [Exchange cmdlet syntax](../exchange-cmdlet-syntax.md).