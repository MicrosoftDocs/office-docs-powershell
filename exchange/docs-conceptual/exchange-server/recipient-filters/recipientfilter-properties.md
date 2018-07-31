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
  
- [New-AddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/new-addresslist.md) and [Set-AddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/set-addresslist.md)
    
- [New-DynamicDistributionGroup](../../../exchange-ps/exchange/users-and-groups/new-dynamicdistributiongroup.md) and [Set-DynamicDistributionGroup](../../../exchange-ps/exchange/users-and-groups/set-dynamicdistributiongroup.md)
    
- [New-EmailAddressPolicy](../../../exchange-ps/exchange/email-addresses-and-address-books/new-emailaddresspolicy.md) and [Set-EmailAddressPolicy](../../../exchange-ps/exchange/email-addresses-and-address-books/set-emailaddresspolicy.md)
    
- [New-GlobalAddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/new-globaladdresslist.md) and [Set-GlobalAddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/set-globaladdresslist.md)
    
## Filterable recipient properties

The recipient properties that have been  *confirmed*  to work with the _RecipientFilter_ parameter in *all* cmdlets are described in the following table.
  
 **Notes**:
  
- The list might include:
    
  - Properties that are only used in one type of environment: Microsoft Office 365, on-premises Exchange, or hybrid. The property might exist on recipient objects in all environments, but the value is only meaningful (a value other than blank or `None`) in one type of environment.
    
  - Properties that are present, but correspond to features that are no longer used in Exchange 2016.
    
- You can't use properties from other Active Directory schema extensions with the _RecipientFilter_ parameter.
    
- Not all recipient properties have a corresponding Active Directory property. The LDAP display name value in the table is "n/a" for these properties, which indicates that the property calculated (likely by Exchange).
    
- You typically use the object's name for properties that require a valid object value (for example, a mailbox, a distribution group, or an email address policy, but the property might also accept the object's distinguished name (DN) or globally unique identifier (GUID). To find the object's DN or GUID, use the **Get-** cmdlet that corresponds to the object's type (for example, `Get-EmailAddressPolicy | Format-List Name,DistinguishedName,GUID`).
    
- Text string properties that accept wildcard characters require the `-like` operator (for example, `Property -like '*abc'`).
    
- The Value column in the table describes the acceptable values for the  *filter*  , not necessarily for the property itself. For example, a property might obviously contain a date or numeric value, but when you use that property in a filter, it might be treated like a text string (no value check, and wildcards are supported).
    
- To look for blank or non-blank property values, use the value `$null` (for example, `Property -eq $null` or `Property -ne $null`).
    
- For more information about creating filters in recipient commands, see [Additional OPATH syntax information](https://technet.microsoft.com/library/b22affa2-ef51-4e4e-b59c-a58620baf8aa.aspx#OPATH).
    
****

|**Property name**|**LDAP display name**|**Value**|**Comments**|
|:-----|:-----|:-----|:-----|
|_AcceptMessagesOnlyFrom_|_authOrig_|Dynamic distribution groups: String (wildcards accepted). <br/> Others: Blank or non-blank.||
|_AcceptMessagesOnlyFromDLMembers_|_dLMemSubmitPerms_|Dynamic distribution groups: String (wildcards accepted). <br/> Others: Blank or non-blank.||
|_ActiveSyncAllowedDeviceIDs_|_msExchMobileAllowedDeviceIds_|String (wildcards accepted).||
|_ActiveSyncBlockedDeviceIDs_|_msExchMobileBlockedDeviceIds_|String (wildcards accepted).||
|_ActiveSyncEnabled_|n/a|Boolean ( `$true` or `$false`)||
|_ActiveSyncMailboxPolicy_|_msExchMobileMailboxPolicyLink_|String (wildcards accepted in dynamic distribution groups).|The default Exchange ActiveSync mailbox policy is named Default.|
|_ActiveSyncSuppressReadReceipt_|n/a|Boolean ( `$true` or `$false`)||
|_AddressBookPolicy_|_msExchAddressBookPolicyLink_|String (wildcards accepted in dynamic distribution groups).||
|_AddressListMembership_|_showInAddressBook_|String (wildcards accepted in dynamic distribution groups).||
|_AdminDisplayName_|_adminDisplayName_|String (wildcards accepted).||
|_AdministrativeUnits_|_msExchAdministrativeUnitLink_|String (wildcards accepted in dynamic distribution groups).||
|_AggregatedMailboxGuids_|_msExchAlternateMailboxes_|String (wildcards accepted).||
|_Alias_|_mailNickname_|String (wildcards accepted).|This property contains the recipient's Exchange alias (also known as the mail nickname). This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one _Alias_ value.|
|_AllowUMCallsFromNonUsers_|_msExchUMListInDirectorySearch_|`None` (0) or `SearchEnabled` (1)||
|_ArbitrationMailbox_|_msExchArbitrationMailbox_|String (wildcards accepted in dynamic distribution groups).||
|_ArchiveDatabase_|_msExchArchiveDatabaseLink_|String||
|_ArchiveDomain_|_msExchArchiveAddress_|String (wildcards accepted).||
|_ArchiveGuid_|_msExchArchiveGUID_|String (wildcards accepted).||
|_ArchiveName_|_msExchArchiveName_|String (wildcards accepted).||
|_ArchiveQuota_|_msExchArchiveQuota_|Dynamic distribution groups: A byte quantified size value (for example, `300MB` or `1.5GB`). Unqualified values are treated as bytes. <br/> Others: Blank or non-blank.||
|_ArchiveWarningQuota_|_msExchArchiveWarnQuota_|Dynamic distribution groups: A byte quantified size value (for example, `300MB` or `1.5GB`). Unqualified values are treated as bytes. <br/> Others: Blank or non-blank.||
|_ArchiveRelease_|_msExchArchiveRelease_|String (wildcards accepted).||
|_ArchiveState_|n/a|`None` (0), `Local` (1), `HostedProvisioned` (2), `HostedPending` (3), or `OnPremise` (4).||
|_ArchiveStatus_|_msExchArchiveStatus_|`None` (0) or `Active` (1).||
|_AssistantName_|_msExchAssistantName_|String (wildcards accepted).|The name of the recipient's assistant.|
|_AuditEnabled_|_msExchMailboxAuditEnable_|Boolean ( `$true` or `$false`)||
|_AuditLogAgeLimit_|_msExchMailboxAuditLogAgeLimit_|Dynamic distribution groups: String (wildcards accepted). <br/> Others: Blank or non-blank.|The value of this property is a time span: `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds.|
|_AuthenticationPolicy_|_msExchAuthPolicyLink_|String (wildcards accepted in dynamic distribution groups).||
|_C_|_C_|String (wildcards accepted).|This property contains the two-letter country/region designation from International Organization for Standardization (ISO) 3166. For more information, see [Country Codes - ISO 3166](https://go.microsoft.com/fwlink/p/?linkid=213779).|
|_CalendarLoggingQuota_|_msExchCalendarLoggingQuota_|Dynamic distribution groups: `Unlimited` or a byte quantified size value (for example, `300MB` or `1.5GB`). Unqualified values are treated as bytes. <br/> Others: `Unlimited`, or blank/non-blank.||
|_CalendarRepairDisabled_|_msExchCalendarRepairDisabled_|Boolean ( `$true` or `$false`)||
|_Certificate_|_userCertificate_|`System.Byte[]`|This property contains the DER-encoded X509v3 certificates that are issued to the user.|
|_CertificateSubject_|n/a|`X509:<I>X500Issuer<S>X500Subject` (for example, `X509:<I>C=US,O=InternetCA,CN=APublicCertificateAuthority<S>C=US,O=Fabrikam,OU=Sales,CN=Jeff Smith`)|The X509 certificate that's published for the user account (visible on the **Published Certificates** tab in Active Directory Users and Computers).|
|_City_|_l_|String (wildcards accepted).|The recipient's city.|
|_Co_|_Co_|String (wildcards accepted).|The name of the recipient's country or region. You can locate valid _Co_ values on the **Address** tab in the recipient's properties in Active Directory Users and Computers.|
|_CommonName_|_cn_|String (wildcards accepted).||
|_ComplianceTagHoldApplied_|_n/a_|Boolean ( `$true` or `$false`)||
|_Company_|_company_|String (wildcards accepted).|The recipient's company name.|
|_CountryCode_|_CountryCode_|Integers|This property contains the numeric country/region designation from ISO 3166. For more information, see [Country Codes - ISO 3166](https://go.microsoft.com/fwlink/p/?linkid=213779).|
|_CountryOrRegion_|c|String (wildcards accepted).|This property contains the two-letter country/region designation from ISO 3166. For more information, see [Country Codes - ISO 3166](https://go.microsoft.com/fwlink/p/?linkid=213779).|
|_CustomAttribute1_ to _CustomAttribute15_|_extensionAttribute1_ to _extensionAttribute15_|String (wildcards accepted).|These properties contain custom attributes that you can add to a recipient.|
|_Database_|_homeMDB_|String (wildcards accepted).|The identity of the user's mailbox database.|
|_Department_|_department_|String (wildcards accepted).|The recipient's department.|
|_DataEncryptionPolicy_|_msExchDataEncryptionPolicyLink_|String (wildcards accepted in dynamic distribution groups).||
|_DefaultPublicFolderMailbox_|_msExchPublicFolderMailbox_|String (wildcards accepted in dynamic distribution groups).||
|_DeletedItemFlags_|_deletedItemFlags_|`DatabaseDefault` (0), `RetainUntilBackupOrCustomPeriod` (3), or `RetainForCustomPeriod` (5).||
|_DeliverToMailboxAndForward_|_deliverAndRedirect_|Boolean ( `$true` or `$false`)||
|_Description_|_description_|String (wildcards accepted).||
|_DirectReports_|_directReports_|String (wildcards accepted in dynamic distribution groups).||
|_DisabledArchiveDatabase_|_msExchDisabledArchiveDatabaseLink_|String (wildcards accepted).||
|_DisabledArchiveGuid_|_msExchDisabledArchiveDatabaseGUID_|String (wildcards accepted).||
|_DisplayName_|_displayName_|String (wildcards accepted).||
|_DistinguishedName_|_distinguishedName_|String (wildcards accepted).||
|_EcpEnabled_|n/a|Boolean ( `$true` or `$false`)||
|_ElcExpirationSuspensionEndDate_|_msExchELCExpirySuspensionEnd_|Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server. <br/> Others: Blank or non-blank.|This property contains a date-time value.|
|_ElcExpirationSuspensionStartDate_|_msExchELCExpirySuspensionStart_|Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server. <br/> Others: Blank or non-blank.|This property contains a date-time value.|
|_ElcMailboxFlags_|_msExchELCMailboxFlags_|`None` (0), `ExpirationSuspended` (1), `ElcV2` (2), `DisableCalendarLogging` (4),`LitigationHold` (8), `SingleItemRecovery` (16), `ValidArchiveDatabase` (32), `ShouldUseDefaultRetentionPolicy` (128), `EnableSiteMailboxMessageDedup` (256), `ElcProcessingDisabled` (512), or `ComplianceTagHold` (1024).||
|_EmailAddresses_|_proxyAddresses_|String (wildcards accepted).|This property contains the recipient's email addresses (the primary email address and all proxy addresses).|
|_EmailAddressPolicyEnabled_|n/a|Boolean ( `$true` or `$false`)||
|_EntryId_|_msExchPublicFolderEntryId_|String (wildcards accepted).||
|_EwsApplicationAccessPolicy_|_msExchEwsApplicationAccessPolicy_|`EnforceAllowList` or `EnforceBlockList`.||
|_EwsEnabled_|_msExchEwsEnabled_|Integer||
|_ExchangeGuid_|_msExchMailboxGuid_|String (wildcards accepted).||
|_ExchangeUserAccountControl_|_msExchUserAccountControl_|For valid values, see [ADS_USER_FLAG_ENUM enumeration](https://go.microsoft.com/fwlink/p/?linkid=190424). The integer values will work as described. Most of the text values won't work as described (even if you remove `ADS_UF` and all underscores).||
|_ExchangeVersion_|_msExchVersion_|Dynamic distribution groups: String (wildcards accepted). <br/> Others: `ExchangeObjectVersion` values.||
|_ExpansionServer_|_msExchExpansionServerName_|String (wildcards accepted).||
|_ExtensionCustomAttribute1_ to _ExtensionCustomAttribute5_|_msExchExtensionCustomAttribute1_ to _msExchExtensionCustomAttribute5_|String (wildcards accepted).||
|_ExternalDirectoryObjectId_|_msExchExternalDirectoryObjectId_|String (wildcards accepted).||
|_ExternalEmailAddress_|_targetAddress_|String (wildcards accepted).|This property contains the external email address for mail contacts and mail users.|
|_ExternalOofOptions_|_msExchExternalOOFOptions_|`External` (0) or `InternalOnly` (1).||
|_Fax_|_facsimileTelephoneNumber_|String (wildcards accepted).||
|_FirstName_|_givenName_|String (wildcards accepted).|The recipient's first name.|
|_ForwardingAddress_|_altRecipient_|String (wildcards accepted).||
|_ForwardingSmtpAddress_|_msExchGenericForwardingAddress_|String (wildcards accepted).||
|_GeneratedOfflineAddressBooks_|_msExchOABGeneratingMailboxBL_|String (wildcards accepted in dynamic distribution groups).||
|_GrantSendOnBehalfTo_|_publicDelegates_|String (wildcards accepted in dynamic distribution groups).||
|_GroupType_|_groupType_|`None` (0), `Global` (2), `DomainLocal` (4), `BuiltinLocal` (5), `Universal` (8), or `SecurityEnabled` (-2147483648).||
|_Guid_|_objectGuid_|String (wildcards accepted).||
|_HasActiveSyncDevicePartnership_|n/a|Boolean ( `$true` or `$false`)||
|_HiddenFromAddressListsEnabled_|_msExchHideFromAddressLists_|Boolean ( `$true` or `$false`)|This property specifies whether the recipient is visible in the global address list or other address lists.|
|_HiddenGroupMembershipEnabled_|_hideDLMembership_|Boolean ( `$true` or `$false`)||
|_HomeMTA_|_homeMTA_|String (wildcards accepted in dynamic distribution groups).||
|_HomePhone_|_homePhone_|String (wildcards accepted).||
|_Id_|_distinguishedName_|String (wildcards accepted in dynamic distribution groups).||
|_ImapEnabled_|n/a|Boolean ( `$true` or `$false`)||
|_ImmutableId_|_msExchGenericImmutableId_|String (wildcards accepted).||
|_IncludedRecipients_|n/a|`None` (0), `MailboxUsers` (1), `Resources` (2), `MailContacts` (4), `MailGroups` (8), `MailUsers` (16), or `AllRecipients` (-1).||
|_IncludeInGarbageCollection_|n/a|Boolean ( `$true` or `$false`)||
|_Initials_|_initials_|String (wildcards accepted).||
|_InPlaceHolds_|_msExchUserHoldPolicies_|String||
|_InPlaceHoldsRaw_|n/a|String||
|_InternetEncoding_|_internetEncoding_|Integer|For valid values, see the Remarks section in the topic, [Encoding Class](https://go.microsoft.com/fwlink/p/?linkid=184080).|
|_IsDirSynced_|_msExchIsMSODirsynced_|Boolean ( `$true` or `$false`)||
|_IsExcludedFromServingHierarchy_|n/a|Boolean ( `$true` or `$false`)||
|_IsHierarchyReady_|n/a|Boolean ( `$true` or `$false`)||
|_IsHierarchySyncEnabled_|n/a|Boolean ( `$true` or `$false`)||
|_IsInactiveMailbox_|n/a|Boolean ( `$true` or `$false`)||
|_IsMailboxEnabled_|n/a|Boolean ( `$true` or `$false`)|This property specifies whether the user is mailbox-enabled.|
|_IsSecurityPrincipal_|n/a|Boolean ( `$true` or `$false`)||
|_IsSoftDeletedByDisable_|n/a|Boolean ( `$true` or `$false`)||
|_IsSoftDeletedByRemove_|n/a|Boolean ( `$true` or `$false`)||
|_IssueWarningQuota_|_mDBStorageQuota_|Dynamic distribution groups: A byte quantified size value (for example, `300MB` or `1.5GB`). Unqualified values are treated as bytes. <br/> Others: Blank or non-blank.||
|_JournalArchiveAddress_|n/a|An SMTP email address (for example, `julia@contoso.com`).||
|_LanguagesRaw_|_msExchUserCulture_|String (wildcards accepted).|This property contains the language preference for this mailbox in the format `<ISO 639 two-letter culture code>-<ISO 3166 two-letter subculture code>`. For example, United States English is `en-US`. For more information, see [CultureInfo Class](https://go.microsoft.com/fwlink/p/?LinkID=255174).|
|_LastExchangeChangedTime_|_msExchLastExchangeChangedTime_|Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server. <br/> Others: Blank or non-blank.||
|_LastName_|_sn_|String (wildcards accepted).||
|_LdapRecipientFilter_|_msExchDynamicDLFilter_|String (wildcards accepted).||
|_LegacyExchangeDN_|_legacyExchangeDN_|String (wildcards accepted).||
|_LitigationHoldDate_|_msExchLitigationHoldDate_|Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server. <br/> Others: Blank or non-blank.||
|_LitigationHoldEnabled_|_n/a_|Boolean ( `$true` or `$false`)||
|_LitigationHoldOwner_|_msExchLitigationHoldOwner_|String (wildcards accepted).||
|_LocaleID_|_localeID_|Integer|For valid values, [Microsoft Locale ID Values](https://go.microsoft.com/fwlink/p/?linkid=229656).|
|_MailboxMoveBatchName_|_msExchMailboxMoveBatchName_|String (wildcards accepted).||
|_MailboxMoveFlags_|_msExchMailboxMoveFlags_|For valid values, see the description of the _Flags_ parameter in[Get-MoveRequest](../../../exchange-ps/exchange/move-and-migration/get-moverequest.md).||
|_MailboxMoveRemoteHostName_|_msExchMailboxMoveRemoteHostName_|String (wildcards accepted).||
|_MailboxMoveSourceMDB_|_msExchMailboxMoveSourceMDBLink_|String (wildcards accepted in dynamic distribution groups).||
|_MailboxMoveStatus_|_msExchMailboxMoveStatus_|For valid values, see the description of the _MoveStatus_ parameter in[Get-MoveRequest](../../../exchange-ps/exchange/move-and-migration/get-moverequest.md).||
|_MailboxMoveTargetMDB_|_msExchMailboxMoveTargetMDBLink_|String (wildcards accepted in dynamic distribution groups).||
|_MailboxPlan_|_msExchParentPlanLink_|String (wildcards accepted).|Mailbox plans correspond to Office 365 license types. The availability of a license plans is determined by the selections that you make when you enroll your domain.|
|_MailboxRelease_|_msExchMailboxRelease_|String (wildcards accepted).||
|_MailTipTranslations_|_msExchSenderHintTranslations_|String (wildcards accepted).||
|_ManagedBy_|_managedBy_|String (wildcards accepted in dynamic distribution groups).|This property identifies the security principal that's the manager of the group.|
|_Manager_|_manager_|String (wildcards accepted in dynamic distribution groups).|The recipient's manager.|
|_MAPIEnabled_|n/a|Boolean ( `$true` or `$false`)||
|_MapiRecipient_|_mAPIRecipient_|Boolean ( `$true` or `$false`)||
|_MaxBlockedSenders_|_msExchMaxBlockedSenders_|`Unlimited` or an integer.||
|_MaxSafeSenders_|_msExchMaxSafeSenders_|`Unlimited` or an integer.||
|_MaxReceiveSize_|_delivContLength_|Dynamic distribution groups: A byte quantified size value (for example, `50MB`). Unqualified values are treated as bytes. <br/> Others: Blank or non-blank.||
|_MaxSendSize_|_submissionContLength_|Dynamic distribution groups: A byte quantified size value (for example, `50MB`). Unqualified values are treated as bytes. <br/> Others: Blank or non-blank.||
|_MemberDepartRestriction_|_msExchGroupDepartRestriction_|`Closed` (0), `Open` (1), or `ApprovalRequired` (2).||
|_MemberJoinRestriction_|_msExchGroupDepartRestriction_|`Closed` (0), `Open` (1), or `ApprovalRequired` (2).||
|_MemberOfGroup_|_memberOf_|String (wildcards accepted in dynamic distribution groups).||
|_Members_|_member_|String (wildcards accepted in dynamic distribution groups).||
|_MessageHygieneFlags_|_msExchMessageHygieneFlags_|`None` (0) or `AntispamBypass` (1).||
|_MobileAdminExtendedSettings_|_msExchOmaAdminExtendedSettings_|String (wildcards accepted).||
|_MobileMailboxFlags_|_msExchMobileMailboxFlags_|`None` (0), `HasDevicePartnership` (1), or ActiveSyncSuppressReadReceipt (2).||
|_MobileFeaturesEnabled_|_msExchOmaAdminWirelessEnable_|`None` (0), `AirSyncDisabled` (4), or `MowaDisabled` (8).||
|_MobilePhone_|_mobile_|String (wildcards accepted).||
|_ModeratedBy_|_msExchModeratedByLink_|String (wildcards accepted in dynamic distribution groups).||
|_ModerationEnabled_|_msExchEnableModeration_|Boolean ( `$true` or `$false`)||
|_Name_|_name_|String (wildcards accepted).|The unique name value of the recipient.|
|_NetID_|n/a|A sample value is `1003BFFD9A0CFA03`.|This property is populated for Office 365 mailboxes in hybrid environments.|
|_Notes_|_info_|String (wildcards accepted).||
|_ObjectCategory_|_objectCategory_|Dynamic distribution groups: String (wildcards accepted). <br/> Others: Valid Active Directory `ObjectCategory` values.|Valid values use the format `CN=<Type>,CN=Schema,CN=Configuration,DC=<domain>`, where _\<Type\>_ is typically `Person` or `Group` for recipients. For example, `CN=Person,CN=Schema,CN=Configuration,DC=contoso,DC=com`.|
|_ObjectClass_|_objectClass_|Dynamic distribution groups: String (wildcards accepted). <br/> Others: Valid Active Directory `ObjectCategory` values.|Common values for recipients are: `contact`, `organizationalPerson`, `person`, `top`, `group`, `msExchDynamicDistributionList`, and `user`.|
|_Office_|_physicalDeliveryOfficeName_|String (wildcards accepted).||
|_OfflineAddressBook_|_msExchUseOAB_|String (wildcards accepted in dynamic distribution groups).|This property contains the offline address book (OAB) that's associated with this recipient.|
|_OperatorNumber_|_msExchUMOperatorNumber_|String (wildcards accepted).||
|_OtherFax_|_otherFacsimileTelephoneNumber_|String (wildcards accepted).||
|_OtherHomePhone_|_otherHomePhone_|String (wildcards accepted).||
|_OtherTelephone_|_otherTelephone_|String (wildcards accepted).||
|_OWAEnabled_|n/a|Boolean ( `$true` or `$false`)||
|_OWAforDevicesEnabled_|_msExchOmaAdminWirelessEnable_|Boolean ( `$true` or `$false`)||
|_OWAMailboxPolicy_|_msExchOWAPolicy_|String (wildcards accepted in dynamic distribution groups).||
|_Pager_|_pager_|String (wildcards accepted).||
|_Phone_|_telephoneNumber_|String (wildcards accepted).||
|_PhoneProviderId_|_msExchUMPhoneProvider_|String (wildcards accepted).||
|_PhoneticCompany_|_msDS-PhoneticCompanyName_|String (wildcards accepted).||
|_PhoneticDepartment_|_msDS-PhoneticDepartment_|String (wildcards accepted).||
|_PhoneticDisplayName_|_msDS-PhoneticDisplayName_|String (wildcards accepted).||
|_PhoneticFirstName_|_msDS-PhoneticFirstName_|String (wildcards accepted).||
|_PhoneticLastName_|_msDS-PhoneticLastName_|String (wildcards accepted).||
|_PoliciesExcluded_|_msExchPoliciesExcluded_|String (wildcards accepted).||
|_PoliciesIncluded_|_msExchPoliciesIncluded_|String (wildcards accepted).||
|_PopEnabled_|n/a|Boolean ( `$true` or `$false`)||
|_PostalCode_|_postalCode_|String (wildcards accepted).||
|_PostOfficeBox_|_postOfficeBox_|String (wildcards accepted).||
|_PreviousRecipientTypeDetails_|_msExchPreviousRecipientTypeDetails_|For valid values, see the description of the _RecipientTypeDetails_ parameter in [Get-Recipient](../../../exchange-ps/exchange/users-and-groups/get-recipient.md).||
|_PrimaryGroupId_|_primaryGroupId_|Integer|For domain users, the value of this property is typically 513, which corresponds to the Domain Users group.|
|_PrimarySmtpAddress_|n/a|String (wildcards accepted).||
|_ProhibitSendQuota_|_mDBOverQuotaLimit_|Dynamic distribution groups: A byte quantified size value (for example, `50MB` or `1.5GB`). Unqualified values are treated as bytes. <br/> Others: Blank or non-blank.||
|_ProhibitSendReceiveQuota_|_mDBOverHardQuotaLimit_|Dynamic distribution groups: A byte quantified size value (for example, `50MB` or `1.5GB`). Unqualified values are treated as bytes. <br/> Others: Blank or non-blank.||
|_ProtocolSettings_|_protocolSettings_|String (wildcards accepted).||
|_PublicFolderContacts_|_pFContacts_|String (wildcards accepted in dynamic distribution groups).||
|_PurportedSearchUI_|_msExchPurportedSearchUI_|String (wildcards accepted).||
|_QueryBaseDN_|_msExchQueryBaseDN_|String (wildcards accepted in dynamic distribution groups).||
|_RawCanonicalName_|_canonicalName_|String (wildcards accepted).||
|_RawExternalEmailAddress_|_targetAddress_|String (wildcards accepted).||
|_RawName_|_name_|String (wildcards accepted).||
|_RecipientContainer_|_msExchDynamicDLBaseDN_|String (wildcards accepted).|The Active Directory container or organizational unit (OU) that holds the recipient object.|
|_RecipientDisplayType_|_msExchRecipientDisplayType_|`MailboxUser` (0), `DistributionGroup` (1), `PublicFolder` (2), `DynamicDistributionGroup` (3), `Organization` (4), `PrivateDistributionList` (5), `RemoteMailUser` (6). `ConferenceRoomMailbox` (7), or `EquipmentMailbox` (8).||
|_RecipientFilter_|_msExchQueryFilter_|String (wildcards accepted).||
|_RecipientLimits_|_msExchRecipLimit_|`Unlimited` or an integer.|This property specifies the maximum number of recipients that are allowed in messages sent by the mailbox.|
|_RecipientType_|n/a|For valid values, see the description of the _RecipientType_ parameter in [Get-Recipient](../../../exchange-ps/exchange/users-and-groups/get-recipient.md).||
|_RecipientTypeDetails_|n/a|For valid values, see the description of the _RecipientTypeDetails_ parameter in [Get-Recipient](../../../exchange-ps/exchange/users-and-groups/get-recipient.md).||
|_RecoverableItemsQuota_|_msExchDumpsterQuota_|Dynamic distribution groups: A byte quantified size value (for example, `50MB` or `1.5GB`). Unqualified values are treated as bytes. <br/> Others: Blank or non-blank.||
|_RecoverableItemsWarningQuota_|_msExchDumpsterWarningQuota_|Dynamic distribution groups: A byte quantified size value (for example, `50MB` or `1.5GB`). Unqualified values are treated as bytes. <br/> Others: Blank or non-blank.||
|_RejectMessagesFrom_|_unauthOrig_|Dynamic distribution groups: String (wildcards accepted). <br/> Others: Blank or non-blank.||
|_RejectMessagesFromDLMembers_|_dLMemRejectPerms_|Dynamic distribution groups: String (wildcards accepted). <br/> Others: Blank or non-blank.||
|_RemoteAccountPolicy_|_msExchSyncAccountsPolicyDN_|String (wildcards accepted in dynamic distribution groups).||
|_RemotePowerShellEnabled_|n/a|Boolean ( `$true` or `$false`)||
|_RemoteRecipientType_|_msExchRemoteRecipientType_|`None` (0), `ProvisionMailbox` (1), `ProvisionArchive` (2), `Migrated` (4), `DeprovisionMailbox` (8), `DeprovisionArchive` (16), `RoomMailbox` (32), `EquipmentMailbox` (64), `SharedMailbox` (96), or `TeamMailbox` (128).||
|_ReportToManagerEnabled_|_reportToOwner_|Boolean ( `$true` or `$false`)||
|_ReportToOriginatorEnabled_|_reportToOriginator_|Boolean ( `$true` or `$false`)||
|_RequireAllSendersAreAuthenticated_|_msExchRequireAuthToSendTo_|Boolean ( `$true` or `$false`)||
|_ResourceCapacity_|_msExchResourceCapacity_|Integers.||
|_ResourceCustom_|n/a|String||
|_ResourceMetaData_|_msExchResourceMetaData_|String (wildcards accepted).||
|_ResourcePropertiesDisplay_|_msExchResourceDisplay_|String (wildcards accepted).||
|_ResourceSearchProperties_|_msExchResourceSearchProperties_|String (wildcards accepted).||
|_ResourceType_|n/a|`Room` (0) or `Equipment` (1).||
|_RetainDeletedItemsFor_|_garbageCollPeriod_|Dynamic distribution groups: A time span: `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> Others: Blank or non-blank.||
|_RetentionComment_|_msExchRetentionComment_|String (wildcards accepted).||
|_RetentionPolicy_|n/a|String||
|_RetentionUrl_|_msExchRetentionURL_|String (wildcards accepted).||
|_RoleAssignmentPolicy_|_msExchRBACPolicyLink_|String (wildcards accepted in dynamic distribution groups).||
|_RulesQuota_|_msExchMDBRulesQuota_|Dynamic distribution groups: A byte quantified size value (for example, `50MB` or `1.5GB`). Unqualified values are treated as bytes. <br/> Others: Blank or non-blank.||
|_SamAccountName_|_SamAccountName_|String (wildcards accepted in dynamic distribution groups).|This property specifies an identifier that's compatible with older versions of Microsoft Windows client and server operating systems (also known as the pre-Windows 2000 user account or group name)|
|_SafeRecipientsHash_|_msExchSafeRecipientsHash_|`System.Byte[]`|A user's safe recipients list is hashed (SHA-256) one way before it's stored as a binary large object in Active Directory.|
|_SafeSendersHash_|_msExchSafeSendersHash_|`System.Byte[]`|A user's safe senders list is hashed (SHA-256) one way before it's stored as a binary large object in Active Directory.|
|_SCLDeleteThresholdInt_|_msExchMessageHygieneSCLDeleteThreshold_|An integer from 0 through 9.||
|_SCLJunkThresholdInt_|_msExchMessageHygieneSCLJunkThreshold_|An integer from 0 through 9.||
|_SCLQuarantineThresholdInt_|_msExchMessageHygieneSCLQuarantineThreshold_|An integer from 0 through 9.||
|_SCLRejectThresholdInt_|_msExchMessageHygieneSCLRejectThreshold_|An integer from 0 through 9.||
|_SecurityProtocol_|_securityProtocol_|`System.Byte[]`||
|_SendDeliveryReportsTo_|n/a|`None` (0), `Manager` (1) or `Originator` (2).||
|_SendOofMessageToOriginatorEnabled_|_oOFReplyToOriginator_|Boolean ( `$true` or `$false`)||
|_ServerLegacyDN_|_msExchHomeServerName_|String (wildcards accepted).||
|_ServerName_|n/a|String||
|_SharingPolicy_|_msExchSharingPolicyLink_|String (wildcards accepted in dynamic distribution groups).||
|_SimpleDisplayName_|_displayNamePrintable_|String (wildcards accepted).||
|_SingleItemrecoveryEnabled_|n/a|Boolean ( `$true` or `$false`)||
|_SKUAssigned_|n/a|Boolean ( `$true` or `$false`)||
|_SMimeCertificate_|_userSMIMECertificate_|`System.Byte[]`|This property contains the binary encoded S/MIME certificates that are issued to the user.|
|_StateOrProvince_|_st_|String (wildcards accepted).||
|_StreetAddress_|_streetAddress_|String (wildcards accepted).||
|_StsRefreshTokensValidFrom_|_msExchStsRefreshTokensValidFrom_|Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server. <br/> Others: Blank or non-blank.||
|_TelephoneAssistant_|_telephoneAssistant_|String (wildcards accepted).||
|_TextEncodedORAddress_|_textEncodedORAddress_|String (wildcards accepted).||
|_ThrottlingPolicy_|_msExchThrottlingPolicyDN_|String (wildcards accepted in dynamic distribution groups).||
|_Title_|_title_|String (wildcards accepted).||
|_UMAddresses_|_msExchUMAddresses_|String (wildcards accepted).||
|_UMCallingLineIds_|_msExchUMCallingLineIds_|String (wildcards accepted).||
|_UMDtmfMap_|_msExchUMDtmfMap_|String (wildcards accepted).||
|_UMEnabled_|n/a|Boolean ( `$true` or `$false`)|This property specifies whether Unified Messaging (UM) is enabled for this mailbox.|
|_UMEnabledFlags_|_msExchUMEnabledFlags_|`None` (0), `UMEnabled` (1), `FaxEnabled` (2), `TUIAccessToCalendarEnabled` (4), `TUIAccessToEmailEnabled` (8), `SubscriberAccessEnabled` (16), `TUIAccessToAddressBookEnabled` (32), `AnonymousCallersCanLeaveMessages` (256), `ASREnabled` (512), or `VoiceMailAnalysisEnabled` (1024).||
|_UMMailboxPolicy_|_msExchUMTemplateLink_|String (wildcards accepted in dynamic distribution groups).||
|_UMPinChecksum_|_msExchUMPinChecksum_|`System.Byte[]`||
|_UMRecipientDialPlanId_|_msExchUMRecipientDialPlanLink_|String (wildcards accepted in dynamic distribution groups).||
|_UMServerWritableFlags_|_msExchUMServerWritableFlags_|`None` (0), `MissedCallNotificationEnabled` (1), `SMSVoiceMailNotificationEnabled` (2), `SMSMissedCallNotificationEnabled` (4), or `PinlessAccessToVoiceMailEnabled` (8).||
|_UMSpokenName_|_msExchUMSpokenName_|`System.Byte[]`||
|_UnicodePassword_|_unicodePwd_|`System.Byte[]`||
|_UsageLocation_|_msExchUsageLocation_|A valid two-letter country/region ISO 3166 value, or the corresponding display name (for example, `US` or `UnitedStates`). For more information, see [Country Codes - ISO 3166](https://go.microsoft.com/fwlink/p/?linkid=213779).||
|_UseDatabaseQuotaDefaults_|_mDBUseDefaults_|Boolean ( `$true` or `$false`)|If the value of this property is $true, the values of these properties are ignored for the mailbox: _IssueWarningQuota_, _ProhibitSendQuota_, _ProhibitSendReceiveQuota_, , _CalendarLoggingQuota_, _RecoverableItemsWarningQuota_, and _RecoverableItemsQuota_.|
|_UserAccountControl_|_userAccountControl_|For valid values, see the Remarks section in [User-Account-Control attribute](https://go.microsoft.com/fwlink/p/?linkid=183366). You need to convert the hexadecimal values to decimal. Most of the text values won't work as described (even if you remove `ADS_UF` and all underscores).||
|_UserPrincipalName_|_userPrincipalName_|String (wildcards accepted).|This property contains the user principal name (UPN) for this recipient (for example, `kim@contoso.com`).|
|_VoiceMailSettings_|_msExchUCVoiceMailSettings_|String (wildcards accepted).|Valid values for this property are: `ExchangeHostedVoiceMail=0`, `ExchangeHostedVoiceMail=1`, `CsHostedVoiceMail=0`, or `CsHostedVoiceMail=1`.|
|_WebPage_|_wWWHomePage_|String (wildcards accepted).||
|_WhenChanged_|_whenChanged_|Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server. <br/> Others: Blank or non-blank.||
|_WhenChangedUTC_|n/a|Dynamic distribution groups: A date/time value in Coordinated Universal Time (UTC). <br/> Others: Blank or non-blank.||
|_WhenCreated_|_whenCreated_|Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server. <br/> Others: Blank or non-blank.||
|_WhenCreatedUTC_|n/a|Dynamic distribution groups: A date/time value in UTC. <br/> Others: Blank or non-blank.||
|_WhenMailboxCreated_|_msExchWhenMailboxCreated_|Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server. <br/> Others: Blank or non-blank.||
|_WhenSoftDeleted_|_msExchWhenSoftDeletedTime_|Dynamic distribution groups: A date/time value using the time zone and regional settings of the Exchange server. <br/> Others: Blank or non-blank.||
|_WindowsEmailAddress_|_mail_|String (wildcards accepted).||
|_WindowsLiveID_|_msExchWindowsLiveID_|String (wildcards accepted).||
   
## For more information

Exchange 2007 was the first version of Exchange that required OPATH filters instead of LDAP filters. For more information about converting LDAP filters to OPATH filters, see the Microsoft Exchange Team Blog article, [Need help converting your LDAP filters to OPATH?](https://go.microsoft.com/fwlink/p/?LinkId=88854).
  
For more information about the syntax that can be used within OPATH filters, see [Exchange cmdlet syntax](../exchange-cmdlet-syntax.md).
