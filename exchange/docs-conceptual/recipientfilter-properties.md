---
title: "Filterable properties for the RecipientFilter parameter"
ms.date: 06/19/2026
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: cf78aca5-6699-485c-9b15-e0adba252176
description: "Learn about the recipient properties that you can use with the RecipientFilter parameter in Exchange Server and Exchange Online cmdlets."
ai-usage: ai-assisted
#customer intent: As an Exchange admin, I want to know which recipient properties I can use with the RecipientFilter parameter so that I can build OPATH filters that return the right recipients.
---

# Filterable properties for the RecipientFilter parameter on Exchange cmdlets

You use the _RecipientFilter_ parameter to create OPATH filters based on the properties of recipient objects in Exchange Server 2016 or later and Exchange Online. The _RecipientFilter_ parameter is available in the following cmdlets, which aren't available in Security & Compliance PowerShell:

|Cmdlet|Exchange Server|Exchange Online|
|---|:---:|:---:|
|[New-AddressList](/powershell/module/exchangepowershell/new-addresslist)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|
|[Set-AddressList](/powershell/module/exchangepowershell/set-addresslist)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|
|[New-DynamicDistributionGroup](/powershell/module/exchangepowershell/new-dynamicdistributiongroup)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|
|[Set-DynamicDistributionGroup](/powershell/module/exchangepowershell/set-dynamicdistributiongroup)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|
|[New-EmailAddressPolicy](/powershell/module/exchangepowershell/new-emailaddresspolicy)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)<sup>\*</sup>|
|[Set-EmailAddressPolicy](/powershell/module/exchangepowershell/set-emailaddresspolicy)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)<sup>\*</sup>|
|[New-GlobalAddressList](/powershell/module/exchangepowershell/new-globaladdresslist)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|
|[Set-GlobalAddressList](/powershell/module/exchangepowershell/set-globaladdresslist)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|

<sup>\*</sup> In Exchange Online, the _RecipientFilter_ parameter isn't available on the **\*-EmailAddressPolicy** cmdlets (email address policies in Exchange Online apply only to Microsoft 365 Groups).

This article describes the recipient properties that are _confirmed_ to work with the _RecipientFilter_ parameter on these cmdlets. Each property has its own section that lists the LDAP display name and the values that you can filter on.

The **Value** column in each table shows the values that you can use in the filter for each property.

For more information about the _Filter_ parameter in Exchange PowerShell, see [Filterable properties for the Filter parameter on Exchange cmdlets](filter-properties.md).

As you review the properties, keep the following points in mind:

- A property might be meaningful in only one environment (Exchange Online, on-premises Exchange, or hybrid deployments). The property can exist on recipient objects in every environment, but hold a meaningful value (something other than blank or `None`) in only one of them.
- A property might correspond to a feature that's no longer used.
- You can't use properties from other Active Directory schema extensions with the _RecipientFilter_ parameter.
- Not all recipient properties have a corresponding Active Directory property. The LDAP display name is "n/a" for these properties, which indicates that Exchange calculates the value.

Keep the following syntax rules in mind when you build a filter:

- Enclose the whole OPATH filter in double quotation marks (`" "`). If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks (`' '`) instead.
- Although the _RecipientFilter_ parameter is a string (not a script block), you can also use braces (`{ }`), but only if the filter doesn't contain variables.
- Properties that hold a link to another object (for example, a mailbox, a distribution group, a mailbox database, or an email address policy) store the object's distinguished name (DN), so you must use the DN as the filter value. The object's name, email address, and GUID are accepted by the filter syntax, but don't match anything. To find an object's DN, use the **Get-** cmdlet that corresponds to the object's type (for example, `Get-EmailAddressPolicy | Format-List Name,DistinguishedName`). To use a friendly value, store the DN in a variable and then use the variable in the filter, as shown in the affected property sections.
- Wildcards (`*`) work only with the `-like` operator, and only on text string properties (for example, `"Property -like 'abc*'"`). In Exchange Online PowerShell, you can't use a wildcard as a prefix (for example, `"Property -like '*abc'"` isn't allowed).

  > [!TIP]
  > Even if a wildcard prefix works in a filter in Exchange Online PowerShell, we don't recommend using it because of poor performance.

- The values listed in each property's section describe the usable values for the OPATH _filter_, not necessarily the underlying property. The **\*-AddressList**, **\*-EmailAddressPolicy**, and **\*-GlobalAddressList** cmdlets enforce the value type that's shown. The **\*-DynamicDistributionGroup** cmdlets are more permissive: their OPATH filters can treat a typed property (for example, a date or numeric value) as a text string, so they also accept wildcards for many properties, as noted in the affected property sections.
- To look for blank or non-blank property values, use the value `$null` (for example, `'Property -eq $null'` or `'Property -ne $null'`).

For more information about OPATH filter syntax, see [Additional OPATH syntax information](recipient-filters.md#additional-opath-syntax-information).

For filtering considerations for the nine exclusive **Get-EXO\*** cmdlets in the Exchange Online PowerShell module, see [Filters in the Exchange Online PowerShell module](filters-v2.md).

## AcceptMessagesOnlyFrom

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_authOrig_|Blank or non-blank.|

With the **\*-DynamicDistributionGroup** cmdlets, you can also match a specific recipient in the list by using the recipient's distinguished name (DN). Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Oscar Banda").DistinguishedName`), and then use the variable in the filter (`"AcceptMessagesOnlyFrom -eq '$dn'"`).

## AcceptMessagesOnlyFromDLMembers

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_dLMemSubmitPerms_|Blank or non-blank.|

With the **\*-DynamicDistributionGroup** cmdlets, you can also match a specific recipient in the list by using the recipient's distinguished name (DN). Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Pedro Pizarro").DistinguishedName`), and then use the variable in the filter (`"AcceptMessagesOnlyFromDLMembers -eq '$dn'"`).

## ActiveSyncAllowedDeviceIDs

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMobileAllowedDeviceIds_|String (wildcards accepted).|

## ActiveSyncBlockedDeviceIDs

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMobileBlockedDeviceIds_|String (wildcards accepted).|

## ActiveSyncEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## ActiveSyncMailboxPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMobileMailboxPolicyLink_|Distinguished name (DN).|

The default Exchange ActiveSync mailbox policy is named Default.

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-ActiveSyncMailboxPolicy "Default").DistinguishedName`), and then use the variable in the filter (`"ActiveSyncMailboxPolicy -eq '$dn'"`).

## ActiveSyncSuppressReadReceipt

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## AddressBookPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchAddressBookPolicyLink_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-AddressBookPolicy "All ABP").DistinguishedName`), and then use the variable in the filter (`"AddressBookPolicy -eq '$dn'"`).

## AddressListMembership

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_showInAddressBook_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-AddressList "All Users").DistinguishedName`), and then use the variable in the filter (`"AddressListMembership -eq '$dn'"`).

## AdminDisplayName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_adminDisplayName_|String (wildcards accepted).|

## AdministrativeUnits

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchAdministrativeUnitLink_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-AdministrativeUnit "West Coast").DistinguishedName`), and then use the variable in the filter (`"AdministrativeUnits -eq '$dn'"`).

## AggregatedMailboxGuids

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchAlternateMailboxes_|GUID.|

## Alias

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_mailNickname_|String (wildcards accepted).|

This property contains the recipient's Exchange alias (also known as the mail nickname). This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one _Alias_ value.

## AllowUMCallsFromNonUsers

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMListInDirectorySearch_|`None` (0) or `SearchEnabled` (1).|

## ArbitrationMailbox

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchArbitrationMailbox_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Mailbox -Arbitration "SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}").DistinguishedName`), and then use the variable in the filter (`"ArbitrationMailbox -eq '$dn'"`).

## ArchiveDatabase

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchArchiveDatabaseLink_|Distinguished name (DN).|

In Exchange Server, friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxDatabase "Mailbox Database 1234567890").DistinguishedName`), and then use the variable in the filter (`"ArchiveDatabase -eq '$dn'"`).

In Exchange Online, you can filter only on the presence or absence of an archive database (`"ArchiveDatabase -ne $null"` or `"ArchiveDatabase -eq $null"`). Filtering by a specific archive database value isn't supported.

## ArchiveDomain

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchArchiveAddress_|String (wildcards accepted).|

## ArchiveGuid

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchArchiveGUID_|GUID.|

## ArchiveName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchArchiveName_|String (wildcards accepted).|

## ArchiveQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchArchiveQuota_|A byte quantified size value (for example, `300MB` or `1.5GB`). Unqualified values are treated as bytes.|

## ArchiveRelease

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchArchiveRelease_|String (wildcards accepted).|

## ArchiveState

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|<ul><li>`None` (0)</li><li>`Local` (1)</li><li>`HostedProvisioned` (2)</li><li>`HostedPending` (3)</li><li>`OnPremise` (4)</li></ul>|

## ArchiveStatus

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchArchiveStatus_|`None` (0) or `Active` (1).|

## ArchiveWarningQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchArchiveWarnQuota_|A byte quantified size value (for example, `300MB` or `1.5GB`). Unqualified values are treated as bytes.|

## AssistantName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchAssistantName_|String (wildcards accepted).|

The name of the recipient's assistant.

## AuditEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMailboxAuditEnable_|Boolean (`$true` or `$false`).|

## AuditLogAgeLimit

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMailboxAuditLogAgeLimit_|Timespan.|

The value of this property is a time span: `dd.hh:mm:ss`, where `dd` is days, `hh` is hours, `mm` is minutes, and `ss` is seconds.

## AuthenticationPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchAuthPolicyLink_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-AuthenticationPolicy "Engineering Group").DistinguishedName`), and then use the variable in the filter (`"AuthenticationPolicy -eq '$dn'"`).

## C

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_C_|String (wildcards accepted).|

This property contains the two-letter country/region designation from the International Organization for Standardization (ISO) 3166 standard. For more information, see [Country Codes - ISO 3166](https://www.iso.org/iso-3166-country-codes.html).

## CalendarLoggingQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchCalendarLoggingQuota_|`Unlimited` or a byte quantified size value (for example, `300MB` or `1.5GB`). Unqualified values are treated as bytes.|

## CalendarRepairDisabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchCalendarRepairDisabled_|Boolean (`$true` or `$false`).|

## Certificate

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_userCertificate_|`System.Byte[]`.|

This property contains the DER-encoded X.509 v3 certificates issued to the user.

## CertificateSubject

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|`X509:<I>X500Issuer<S>X500Subject` (for example, `X509:<I>C=US,O=InternetCA,CN=APublicCertificateAuthority<S>C=US,O=Fabrikam,OU=Sales,CN=Rand Zaher`).|

The X.509 certificate published for the user account (visible on the **Published Certificates** tab in Active Directory Users and Computers).

## City

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_l_|String (wildcards accepted).|

The recipient's city.

## Co

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_Co_|String (wildcards accepted).|

The name of the recipient's country or region. You can locate valid _Co_ values on the **Address** tab in the recipient's properties in Active Directory Users and Computers.

## CommonName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_cn_|String (wildcards accepted).|

## Company

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_company_|String (wildcards accepted).|

The recipient's company name.

## ComplianceTagHoldApplied

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## CountryOrRegion

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|String (wildcards accepted).|

This calculated property filters on the country/region using either the two-letter ISO 3166 country code (for example, `US`) or the country name (for example, `United States`). The underlying _c_, _co_, and _countryCode_ properties store these values. For more information, see [Country Codes - ISO 3166](https://www.iso.org/iso-3166-country-codes.html).

## CustomAttribute1 to CustomAttribute15

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_extensionAttribute1_ to _extensionAttribute15_|String (wildcards accepted).|

These properties contain custom attributes that you can add to a recipient.

## Database

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_homeMDB_|Distinguished name (DN).|

The identity of the user's mailbox database.

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxDatabase "Mailbox Database 1234567890").DistinguishedName`), and then use the variable in the filter (`"Database -eq '$dn'"`).

## DataEncryptionPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchDataEncryptionPolicyLink_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-DataEncryptionPolicy "US Mailboxes").DistinguishedName`), and then use the variable in the filter (`"DataEncryptionPolicy -eq '$dn'"`).

## DefaultPublicFolderMailbox

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchPublicFolderMailbox_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Mailbox "PF Mailbox").DistinguishedName`), and then use the variable in the filter (`"DefaultPublicFolderMailbox -eq '$dn'"`).

## DeletedItemFlags

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_deletedItemFlags_|<ul><li>`DatabaseDefault` (0)</li><li>`RetainUntilBackupOrCustomPeriod` (3)</li><li>`RetainForCustomPeriod` (5)</li></ul>|

## DeliverToMailboxAndForward

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_deliverAndRedirect_|Boolean (`$true` or `$false`).|

## Department

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_department_|String (wildcards accepted).|

The recipient's department.

## Description

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_description_|String (wildcards accepted).|

## DirectReports

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_directReports_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Rick Hofer").DistinguishedName`), and then use the variable in the filter (`"DirectReports -eq '$dn'"`).

## DisabledArchiveDatabase

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchDisabledArchiveDatabaseLink_|Distinguished name (DN).|

In Exchange Server, friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxDatabase "Mailbox Database 1234567890").DistinguishedName`), and then use the variable in the filter (`"DisabledArchiveDatabase -eq '$dn'"`).

In Exchange Online, you can filter only on the presence or absence of a disabled archive database (`"DisabledArchiveDatabase -ne $null"` or `"DisabledArchiveDatabase -eq $null"`). Filtering by a specific archive database value isn't supported.

## DisabledArchiveGuid

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchDisabledArchiveDatabaseGUID_|GUID.|

## DisplayName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_displayName_|String (wildcards accepted).|

## DistinguishedName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_distinguishedName_|String.|

With the **\*-DynamicDistributionGroup** cmdlets, you can also use a text string with wildcards for this property.

## EcpEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## ElcExpirationSuspensionEndDate

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchELCExpirySuspensionEnd_|A date/time value using the time zone and regional settings of the Exchange server.|

This property contains a date/time value.

## ElcExpirationSuspensionStartDate

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchELCExpirySuspensionStart_|A date/time value using the time zone and regional settings of the Exchange server.|

This property contains a date/time value.

## ElcMailboxFlags

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchELCMailboxFlags_|<ul><li>`None` (0)</li><li>`ExpirationSuspended` (1)</li><li>`ElcV2` (2)</li><li>`DisableCalendarLogging` (4)</li><li>`LitigationHold` (8)</li><li>`SingleItemRecovery` (16)</li><li>`ValidArchiveDatabase` (32)</li><li>`ShouldUseDefaultRetentionPolicy` (128)</li><li>`EnableSiteMailboxMessageDedup` (256)</li><li>`ElcProcessingDisabled` (512)</li><li>`ComplianceTagHold` (1024)</li></ul>|

## EmailAddresses

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_proxyAddresses_|String (wildcards accepted).|

This property contains the recipient's email addresses (the primary email address and all proxy addresses). This is the property used to identify inactive mailboxes.

## EmailAddressPolicyEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## EntryId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchPublicFolderEntryId_|String (wildcards accepted).|

## EwsApplicationAccessPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchEwsApplicationAccessPolicy_|`EnforceAllowList` or `EnforceBlockList`.|

## EwsEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchEwsEnabled_|Integer.|

## ExchangeGuid

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMailboxGuid_|GUID.|

## ExchangeUserAccountControl

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUserAccountControl_|For valid values, see [ADS_USER_FLAG_ENUM enumeration](/windows/win32/api/iads/ne-iads-ads_user_flag_enum). The integer values work as described. Most of the text values don't work as described (even if you remove `ADS_UF` and all underscores).|

## ExchangeVersion

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchVersion_|`ExchangeObjectVersion` values.|

## ExpansionServer

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchExpansionServerName_|String (wildcards accepted).|

## ExtensionCustomAttribute1 to ExtensionCustomAttribute5

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchExtensionCustomAttribute1_ to _msExchExtensionCustomAttribute5_|String (wildcards accepted).|

In Exchange Online, these attributes are typically blank because Microsoft Entra Connect Sync doesn't synchronize them, so filtering on these properties usually returns no results. For more information, see [Microsoft Entra Connect Sync: Attributes synchronized to Microsoft Entra ID](/entra/identity/hybrid/connect/reference-connect-sync-attributes-synchronized).

## ExternalDirectoryObjectId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchExternalDirectoryObjectId_|String (wildcards accepted).|

## ExternalEmailAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_targetAddress_|String (wildcards accepted).|

This property contains the external email address for mail contacts and mail users.

## ExternalOofOptions

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchExternalOOFOptions_|`External` (0) or `InternalOnly` (1).|

## Fax

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_facsimileTelephoneNumber_|String (wildcards accepted).|

## FirstName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_givenName_|String (wildcards accepted).|

The recipient's first name.

## ForwardingAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_altRecipient_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Suk-Jae Yoo").DistinguishedName`), and then use the variable in the filter (`"ForwardingAddress -eq '$dn'"`).

## ForwardingSmtpAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchGenericForwardingAddress_|String (wildcards accepted).|

## GeneratedOfflineAddressBooks

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchOABGeneratingMailboxBL_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-OfflineAddressBook "Default Offline Address Book").DistinguishedName`), and then use the variable in the filter (`"GeneratedOfflineAddressBooks -eq '$dn'"`).

## GrantSendOnBehalfTo

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_publicDelegates_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Valeria Barrios").DistinguishedName`), and then use the variable in the filter (`"GrantSendOnBehalfTo -eq '$dn'"`).

## GroupType

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_groupType_|<ul><li>`None` (0)</li><li>`Global` (2)</li><li>`DomainLocal` (4)</li><li>`BuiltinLocal` (5)</li><li>`Universal` (8)</li><li>`SecurityEnabled` (-2147483648)</li></ul>|

## Guid

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_objectGuid_|GUID.|

## HasActiveSyncDevicePartnership

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## HiddenFromAddressListsEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchHideFromAddressLists_|Boolean (`$true` or `$false`).|

This property specifies whether the recipient is visible in the global address list or other address lists.

## HiddenGroupMembershipEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_hideDLMembership_|Boolean (`$true` or `$false`).|

## HomeMTA

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_homeMTA_|Distinguished name (DN).|

You must use the object's distinguished name (DN) in the filter. The object's name and GUID don't work.

## HomePhone

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_homePhone_|String (wildcards accepted).|

## Id

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_distinguishedName_|String.|

With the **\*-DynamicDistributionGroup** cmdlets, you can also use a text string with wildcards for this property.

## ImapEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## ImmutableId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchGenericImmutableId_|String (wildcards accepted).|

## IncludedRecipients

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|<ul><li>`None` (0)</li><li>`MailboxUsers` (1)</li><li>`Resources` (2)</li><li>`MailContacts` (4)</li><li>`MailGroups` (8)</li><li>`MailUsers` (16)</li><li>`AllRecipients` (-1)</li></ul>|

## IncludeInGarbageCollection

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## Initials

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_initials_|String (wildcards accepted).|

## InPlaceHolds

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUserHoldPolicies_|String.|

## InPlaceHoldsRaw

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|String (wildcards accepted).|

With the **\*-DynamicDistributionGroup** cmdlets, you can't use wildcards for this property.

## InternetEncoding

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_internetEncoding_|Integer.|

For valid values, see the Remarks section in [Encoding Class](/dotnet/api/system.text.encoding).

## IsDirSynced

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchIsMSODirsynced_|Boolean (`$true` or `$false`).|

## IsExcludedFromServingHierarchy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## IsHierarchyReady

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## IsHierarchySyncEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## IsInactiveMailbox

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## IsMailboxEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

This property specifies whether the user is mailbox-enabled.

## IsSecurityPrincipal

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## IsSoftDeletedByDisable

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## IsSoftDeletedByRemove

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## IssueWarningQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_mDBStorageQuota_|A byte quantified size value (for example, `300MB` or `1.5GB`). Unqualified values are treated as bytes.|

## JournalArchiveAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|An SMTP email address (for example, `julia@contoso.com`).|

## LanguagesRaw

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUserCulture_|String (wildcards accepted).|

This property contains the language preference for this mailbox in the format `<ISO 639 two-letter culture code>-<ISO 3166 two-letter subculture code>`. For example, United States English is `en-US`. For more information, see [CultureInfo Class](/dotnet/api/system.globalization.cultureinfo).

## LastExchangeChangedTime

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchLastExchangeChangedTime_|A date/time value using the time zone and regional settings of the Exchange server.|

## LastName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_sn_|String (wildcards accepted).|

## LdapRecipientFilter

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchDynamicDLFilter_|String (wildcards accepted).|

## LegacyExchangeDN

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_legacyExchangeDN_|String (wildcards accepted).|

## LitigationHoldDate

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchLitigationHoldDate_|A date/time value using the time zone and regional settings of the Exchange server.|

## LitigationHoldEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## LitigationHoldOwner

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchLitigationHoldOwner_|String (wildcards accepted).|

## LocaleID

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_localeID_|Integer.|

For valid values, see [Microsoft Locale ID Values](/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a).

## MailboxMoveBatchName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMailboxMoveBatchName_|String (wildcards accepted).|

## MailboxMoveFlags

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMailboxMoveFlags_|For valid values, see the description of the _Flags_ parameter in [Get-MoveRequest](/powershell/module/exchangepowershell/get-moverequest).|

## MailboxMoveRemoteHostName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMailboxMoveRemoteHostName_|String (wildcards accepted).|

## MailboxMoveSourceMDB

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMailboxMoveSourceMDBLink_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxDatabase "Mailbox Database 1234567890").DistinguishedName`), and then use the variable in the filter (`"MailboxMoveSourceMDB -eq '$dn'"`).

## MailboxMoveStatus

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMailboxMoveStatus_|For valid values, see the description of the _MoveStatus_ parameter in [Get-MoveRequest](/powershell/module/exchangepowershell/get-moverequest).|

## MailboxMoveTargetMDB

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMailboxMoveTargetMDBLink_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxDatabase "Mailbox Database 1234567890").DistinguishedName`), and then use the variable in the filter (`"MailboxMoveTargetMDB -eq '$dn'"`).

## MailboxPlan

**Applicable**:

- ![Not supported](media/feature_absent_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchParentPlanLink_|Distinguished name (DN).|

Mailbox plans correspond to Microsoft 365 license types. The availability of license plans is determined by the selections that you make when you enroll your domain.

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxPlan "ExchangeOnlineEnterprise").DistinguishedName`), and then use the variable in the filter (`"MailboxPlan -eq '$dn'"`).

## MailboxRelease

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMailboxRelease_|String (wildcards accepted).|

## MailTipTranslations

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchSenderHintTranslations_|String (wildcards accepted).|

## ManagedBy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_managedBy_|Distinguished name (DN).|

This property identifies the security principal that manages the group.

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Yuudai Uchida").DistinguishedName`), and then use the variable in the filter (`"ManagedBy -eq '$dn'"`).

## Manager

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_manager_|Distinguished name (DN).|

The recipient's manager.

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Yuuto Sasaki").DistinguishedName`), and then use the variable in the filter (`"Manager -eq '$dn'"`).

## MAPIEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## MapiRecipient

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_mAPIRecipient_|Boolean (`$true` or `$false`).|

## MaxBlockedSenders

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMaxBlockedSenders_|`Unlimited` or an integer.|

## MaxReceiveSize

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_delivContLength_|A byte quantified size value (for example, `50MB`). Unqualified values are treated as bytes.|

## MaxSafeSenders

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMaxSafeSenders_|`Unlimited` or an integer.|

## MaxSendSize

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_submissionContLength_|A byte quantified size value (for example, `50MB`). Unqualified values are treated as bytes.|

## MemberDepartRestriction

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchGroupDepartRestriction_|<ul><li>`Closed` (0)</li><li>`Open` (1)</li><li>`ApprovalRequired` (2)</li></ul>|

## MemberJoinRestriction

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchGroupJoinRestriction_|<ul><li>`Closed` (0)</li><li>`Open` (1)</li><li>`ApprovalRequired` (2)</li></ul>|

## MemberOfGroup

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_memberOf_|Distinguished name (DN).|

You must use the distinguished name (DN). This property works only with groups that Exchange recognizes, so Microsoft Entra security groups don't work.

## Members

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_member_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Akia Al-Zuhairi").DistinguishedName`), and then use the variable in the filter (`"Members -eq '$dn'"`).

## MessageHygieneFlags

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMessageHygieneFlags_|`None` (0) or `AntispamBypass` (1).|

## MobileAdminExtendedSettings

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchOmaAdminExtendedSettings_|String (wildcards accepted).|

## MobileFeaturesEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchOmaAdminWirelessEnable_|<ul><li>`None` (0)</li><li>`AirSyncDisabled` (4)</li><li>`MowaDisabled` (8)</li></ul>|

## MobileMailboxFlags

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMobileMailboxFlags_|<ul><li>`None` (0)</li><li>`HasDevicePartnership` (1)</li><li>`ActiveSyncSuppressReadReceipt` (2)</li></ul>|

## MobilePhone

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_mobile_|String (wildcards accepted).|

## ModeratedBy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchModeratedByLink_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Angela Gruber").DistinguishedName`), and then use the variable in the filter (`"ModeratedBy -eq '$dn'"`).

## ModerationEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchEnableModeration_|Boolean (`$true` or `$false`).|

## Name

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_name_|String (wildcards accepted).|

The recipient's unique name.

## NetID

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|A sample value is `1003BFFD9A0CFA03`.|

This property is populated for Exchange Online mailboxes in hybrid environments.

## Notes

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_info_|String (wildcards accepted).|

## ObjectCategory

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_objectCategory_|Valid Active Directory `ObjectCategory` values.|

Valid values use the format `CN=<Type>,CN=Schema,CN=Configuration,DC=<domain>`, where _\<Type\>_ is typically `Person` or `Group` for recipients. For example, `CN=Person,CN=Schema,CN=Configuration,DC=contoso,DC=com`.

With the **\*-DynamicDistributionGroup** cmdlets, you can also use a text string with wildcards for this property.

## ObjectClass

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_objectClass_|Valid Active Directory `ObjectClass` values.|

Common values for recipients are:

- `contact`
- `organizationalPerson`
- `person`
- `top`
- `group`
- `msExchDynamicDistributionList`
- `user`

With the **\*-DynamicDistributionGroup** cmdlets, you can also use a text string with wildcards for this property.

## Office

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_physicalDeliveryOfficeName_|String (wildcards accepted).|

## OfflineAddressBook

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUseOAB_|Distinguished name (DN).|

This property contains the offline address book (OAB) that's associated with this recipient.

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-OfflineAddressBook "Default Offline Address Book").DistinguishedName`), and then use the variable in the filter (`"OfflineAddressBook -eq '$dn'"`).

## OperatorNumber

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMOperatorNumber_|String (wildcards accepted).|

## OtherFax

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_otherFacsimileTelephoneNumber_|String (wildcards accepted).|

## OtherHomePhone

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_otherHomePhone_|String (wildcards accepted).|

## OtherTelephone

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_otherTelephone_|String (wildcards accepted).|

## OWAEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## OWAforDevicesEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchOmaAdminWirelessEnable_|Boolean (`$true` or `$false`).|

## OWAMailboxPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchOWAPolicy_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-OwaMailboxPolicy "Default").DistinguishedName`), and then use the variable in the filter (`"OWAMailboxPolicy -eq '$dn'"`).

## Pager

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_pager_|String (wildcards accepted).|

## Phone

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_telephoneNumber_|String (wildcards accepted).|

## PhoneProviderId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMPhoneProvider_|String (wildcards accepted).|

## PhoneticCompany

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msDS-PhoneticCompanyName_|String (wildcards accepted).|

## PhoneticDepartment

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msDS-PhoneticDepartment_|String (wildcards accepted).|

## PhoneticDisplayName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msDS-PhoneticDisplayName_|String (wildcards accepted).|

## PhoneticFirstName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msDS-PhoneticFirstName_|String (wildcards accepted).|

## PhoneticLastName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msDS-PhoneticLastName_|String (wildcards accepted).|

## PoliciesExcluded

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchPoliciesExcluded_|String (wildcards accepted).|

## PoliciesIncluded

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchPoliciesIncluded_|String (wildcards accepted).|

## PopEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## PostalCode

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_postalCode_|String (wildcards accepted).|

## PostOfficeBox

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_postOfficeBox_|String (wildcards accepted).|

## PreviousRecipientTypeDetails

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchPreviousRecipientTypeDetails_|For valid values, see the description of the _RecipientTypeDetails_ parameter in [Get-Recipient](/powershell/module/exchangepowershell/get-recipient).|

## PrimaryGroupId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_primaryGroupId_|Integer.|

For domain users, the value of this property is typically 513, which corresponds to the Domain Users group.

## PrimarySmtpAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|String (wildcards accepted).|

Don't use the _PrimarySmtpAddress_ property; use the _EmailAddresses_ property instead. Any filter that uses the _PrimarySmtpAddress_ property also searches values in the _EmailAddresses_ property. For example, if a mailbox has the primary email address `dario@contoso.com` and the proxy addresses `dario2@contoso.com` and `dario3@contoso.com`, all of the following filters return that mailbox in the result: `"PrimarySmtpAddress -eq 'dario@contoso.com'"`, `"PrimarySmtpAddress -eq 'dario2@contoso.com'"`, or `"PrimarySmtpAddress -eq 'dario3@contoso.com'"`.

## ProhibitSendQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_mDBOverQuotaLimit_|A byte quantified size value (for example, `50MB` or `1.5GB`). Unqualified values are treated as bytes.|

## ProhibitSendReceiveQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_mDBOverHardQuotaLimit_|A byte quantified size value (for example, `50MB` or `1.5GB`). Unqualified values are treated as bytes.|

## ProtocolSettings

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_protocolSettings_|String (wildcards accepted).|

## PublicFolderContacts

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_pFContacts_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Bishamon Tamura").DistinguishedName`), and then use the variable in the filter (`"PublicFolderContacts -eq '$dn'"`).

## PurportedSearchUI

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchPurportedSearchUI_|String (wildcards accepted).|

## QueryBaseDN

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchQueryBaseDN_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-OrganizationalUnit "contoso.com/Users").DistinguishedName`), and then use the variable in the filter (`"QueryBaseDN -eq '$dn'"`).

## RawCanonicalName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_canonicalName_|String (wildcards accepted).|

This property is based on a constructed Active Directory attribute and doesn't correctly resolve all members when used in `Get-Recipient -RecipientPreviewFilter`.

## RawExternalEmailAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_targetAddress_|String (wildcards accepted).|

## RawName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_name_|String (wildcards accepted).|

## RecipientContainer

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchDynamicDLBaseDN_|Distinguished name (DN).|

The Active Directory container or organizational unit (OU) that holds the recipient object.

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-OrganizationalUnit "contoso.com/Users").DistinguishedName`), and then use the variable in the filter (`"RecipientContainer -eq '$dn'"`).

## RecipientDisplayType

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchRecipientDisplayType_|<ul><li>`MailboxUser` (0)</li><li>`DistributionGroup` (1)</li><li>`PublicFolder` (2)</li><li>`DynamicDistributionGroup` (3)</li><li>`Organization` (4)</li><li>`PrivateDistributionList` (5)</li><li>`RemoteMailUser` (6)</li><li>`ConferenceRoomMailbox` (7)</li><li>`EquipmentMailbox` (8)</li></ul>|

## RecipientFilter

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchQueryFilter_|String (wildcards accepted).|

## RecipientLimits

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchRecipLimit_|`Unlimited` or an integer.|

This property specifies the maximum number of recipients allowed in messages that the mailbox sends.

## RecipientType

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|For valid values, see the description of the _RecipientType_ parameter in [Get-Recipient](/powershell/module/exchangepowershell/get-recipient).|

## RecipientTypeDetails

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|For valid values, see the description of the _RecipientTypeDetails_ parameter in [Get-Recipient](/powershell/module/exchangepowershell/get-recipient).|

## RecoverableItemsQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchDumpsterQuota_|A byte quantified size value (for example, `50MB` or `1.5GB`). Unqualified values are treated as bytes.|

## RecoverableItemsWarningQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchDumpsterWarningQuota_|A byte quantified size value (for example, `50MB` or `1.5GB`). Unqualified values are treated as bytes.|

## RejectMessagesFrom

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_unauthOrig_|Blank or non-blank.|

With the **\*-DynamicDistributionGroup** cmdlets, you can also match a specific recipient in the list by using the recipient's distinguished name (DN). Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Daigoro Aoki").DistinguishedName`), and then use the variable in the filter (`"RejectMessagesFrom -eq '$dn'"`).

## RejectMessagesFromDLMembers

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_dLMemRejectPerms_|Blank or non-blank.|

With the **\*-DynamicDistributionGroup** cmdlets, you can also match a specific recipient in the list by using the recipient's distinguished name (DN). Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Elizabeth Brunner").DistinguishedName`), and then use the variable in the filter (`"RejectMessagesFromDLMembers -eq '$dn'"`).

## RemoteAccountPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchSyncAccountsPolicyDN_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

## RemotePowerShellEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## RemoteRecipientType

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchRemoteRecipientType_|<ul><li>`None` (0)</li><li>`ProvisionMailbox` (1)</li><li>`ProvisionArchive` (2)</li><li>`Migrated` (4)</li><li>`DeprovisionMailbox` (8)</li><li>`DeprovisionArchive` (16)</li><li>`RoomMailbox` (32)</li><li>`EquipmentMailbox` (64)</li><li>`SharedMailbox` (96)</li><li>`TeamMailbox` (128)</li></ul>|

## ReportToManagerEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_reportToOwner_|Boolean (`$true` or `$false`).|

## ReportToOriginatorEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_reportToOriginator_|Boolean (`$true` or `$false`).|

## RequireAllSendersAreAuthenticated

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchRequireAuthToSendTo_|Boolean (`$true` or `$false`).|

## ResourceCapacity

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchResourceCapacity_|Integer.|

## ResourceCustom

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|String.|

## ResourceMetaData

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchResourceMetaData_|String (wildcards accepted).|

## ResourcePropertiesDisplay

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchResourceDisplay_|String (wildcards accepted).|

## ResourceSearchProperties

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchResourceSearchProperties_|String (wildcards accepted).|

## ResourceType

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|`Room` (0) or `Equipment` (1).|

## RetainDeletedItemsFor

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_garbageCollPeriod_|Timespan.|

The value of this property is a time span: `dd.hh:mm:ss`, where `dd` is days, `hh` is hours, `mm` is minutes, and `ss` is seconds.

## RetentionComment

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchRetentionComment_|String (wildcards accepted).|

## RetentionPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|String.|

## RetentionUrl

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchRetentionURL_|String (wildcards accepted).|

## RoleAssignmentPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchRBACPolicyLink_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-RoleAssignmentPolicy "Default Role Assignment Policy").DistinguishedName`), and then use the variable in the filter (`"RoleAssignmentPolicy -eq '$dn'"`).

## RulesQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMDBRulesQuota_|A byte quantified size value (for example, `50MB` or `1.5GB`). Unqualified values are treated as bytes.|

## SafeRecipientsHash

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchSafeRecipientsHash_|`System.Byte[]`.|

A user's safe recipients list is one-way hashed with SHA-256 before it's stored as a binary large object in Active Directory.

## SafeSendersHash

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchSafeSendersHash_|`System.Byte[]`.|

A user's safe senders list is one-way hashed with SHA-256 before it's stored as a binary large object in Active Directory.

## SamAccountName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_SamAccountName_|String (wildcards accepted).|

This property specifies an identifier that's compatible with older versions of Microsoft Windows client and server operating systems (also known as the pre-Windows 2000 user account or group name).

## SCLDeleteThresholdInt

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMessageHygieneSCLDeleteThreshold_|An integer from 0 through 9.|

## SCLJunkThresholdInt

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMessageHygieneSCLJunkThreshold_|An integer from 0 through 9.|

## SCLQuarantineThresholdInt

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMessageHygieneSCLQuarantineThreshold_|An integer from 0 through 9.|

## SCLRejectThresholdInt

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchMessageHygieneSCLRejectThreshold_|An integer from 0 through 9.|

## SecurityProtocol

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_securityProtocol_|`System.Byte[]`.|

## SendDeliveryReportsTo

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|<ul><li>`None` (0)</li><li>`Manager` (1)</li><li>`Originator` (2)</li></ul>|

## SendOofMessageToOriginatorEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_oOFReplyToOriginator_|Boolean (`$true` or `$false`).|

## ServerLegacyDN

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchHomeServerName_|String (wildcards accepted).|

## ServerName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|String.|

## SharingPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchSharingPolicyLink_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-SharingPolicy "Default Sharing Policy").DistinguishedName`), and then use the variable in the filter (`"SharingPolicy -eq '$dn'"`).

## SimpleDisplayName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_displayNamePrintable_|String (wildcards accepted).|

## SingleItemRecoveryEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## SKUAssigned

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

## SMimeCertificate

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_userSMIMECertificate_|`System.Byte[]`.|

This property contains the binary encoded S/MIME certificates that are issued to the user.

## StateOrProvince

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_st_|String (wildcards accepted).|

## StreetAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_streetAddress_|String (wildcards accepted).|

## StsRefreshTokensValidFrom

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchStsRefreshTokensValidFrom_|A date/time value using the time zone and regional settings of the Exchange server.|

## TelephoneAssistant

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_telephoneAssistant_|String (wildcards accepted).|

## TextEncodedORAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_textEncodedORAddress_|String (wildcards accepted).|

## ThrottlingPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchThrottlingPolicyDN_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-ThrottlingPolicy "Sales Throttling Policy").DistinguishedName`), and then use the variable in the filter (`"ThrottlingPolicy -eq '$dn'"`).

## Title

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_title_|String (wildcards accepted).|

## UMAddresses

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier; Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMAddresses_|String (wildcards accepted).|

## UMCallingLineIds

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier; Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMCallingLineIds_|String (wildcards accepted).|

## UMDtmfMap

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier; Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMDtmfMap_|String (wildcards accepted).|

## UMEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier; Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|Boolean (`$true` or `$false`).|

This property specifies whether Unified Messaging (UM) is enabled for this mailbox.

## UMEnabledFlags

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier; Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMEnabledFlags_|<ul><li>`None` (0)</li><li>`UMEnabled` (1)</li><li>`FaxEnabled` (2)</li><li>`TUIAccessToCalendarEnabled` (4)</li><li>`TUIAccessToEmailEnabled` (8)</li><li>`SubscriberAccessEnabled` (16)</li><li>`TUIAccessToAddressBookEnabled` (32)</li><li>`AnonymousCallersCanLeaveMessages` (256)</li><li>`ASREnabled` (512)</li><li>`VoiceMailAnalysisEnabled` (1024)</li></ul>|

## UMMailboxPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier; Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMTemplateLink_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-UMMailboxPolicy "MyUMMailboxPolicy").DistinguishedName`), and then use the variable in the filter (`"UMMailboxPolicy -eq '$dn'"`).

## UMPinChecksum

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier; Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMPinChecksum_|`System.Byte[]`.|

## UMRecipientDialPlanId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier; Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMRecipientDialPlanLink_|Distinguished name (DN).|

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-UMDialPlan "MyUMDialPlan").DistinguishedName`), and then use the variable in the filter (`"UMRecipientDialPlanId -eq '$dn'"`).

## UMServerWritableFlags

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier; Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMServerWritableFlags_|<ul><li>`None` (0)</li><li>`MissedCallNotificationEnabled` (1)</li><li>`SMSVoiceMailNotificationEnabled` (2)</li><li>`SMSMissedCallNotificationEnabled` (4)</li><li>`PinlessAccessToVoiceMailEnabled` (8)</li></ul>|

## UMSpokenName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier; Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUMSpokenName_|`System.Byte[]`.|

## UnicodePassword

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_unicodePwd_|`System.Byte[]`.|

## UsageLocation

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUsageLocation_|A valid ISO 3166-1 two-letter country code value or the corresponding display name (for example, `US` or `UnitedStates`). For more information, see [Country Codes - ISO 3166](https://www.iso.org/iso-3166-country-codes.html).|

## UseDatabaseQuotaDefaults

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_mDBUseDefaults_|Boolean (`$true` or `$false`).|

If the value of this property is `$true`, the values of these properties are ignored for the mailbox:

- _IssueWarningQuota_
- _ProhibitSendQuota_
- _ProhibitSendReceiveQuota_
- _CalendarLoggingQuota_
- _RecoverableItemsWarningQuota_
- _RecoverableItemsQuota_

## UserAccountControl

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_userAccountControl_|For valid values, see the Remarks section in [User-Account-Control attribute](/windows/win32/adschema/a-useraccountcontrol). You need to convert the hexadecimal values to decimal. Most of the text values don't work as described (even if you remove `ADS_UF` and all underscores).|

## UserPrincipalName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_userPrincipalName_|String (wildcards accepted).|

This property contains the user principal name (UPN) for this recipient (for example, `kim@contoso.com`). You can't use this property to identify inactive mailboxes.

## VoiceMailSettings

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchUCVoiceMailSettings_|String (wildcards accepted).|

Valid values for this property are:

- `ExchangeHostedVoiceMail=0`
- `ExchangeHostedVoiceMail=1`
- `CsHostedVoiceMail=0`
- `CsHostedVoiceMail=1`

In Exchange Online, this property holds a legacy hosted voicemail value and is typically blank, so filtering on this property usually returns no results.

## WebPage

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_wWWHomePage_|String (wildcards accepted).|

## WhenChanged

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_whenChanged_|A date/time value using the time zone and regional settings of the Exchange server.|

## WhenChangedUTC

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|A date/time value in Coordinated Universal Time (UTC).|

## WhenCreated

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_whenCreated_|A date/time value using the time zone and regional settings of the Exchange server.|

## WhenCreatedUTC

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|n/a|A date/time value in Coordinated Universal Time (UTC).|

## WhenMailboxCreated

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchWhenMailboxCreated_|A date/time value using the time zone and regional settings of the Exchange server.|

## WhenSoftDeleted

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchWhenSoftDeletedTime_|A date/time value using the time zone and regional settings of the Exchange server.|

## WindowsEmailAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_mail_|String (wildcards accepted).|

## WindowsLiveID

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online

|LDAP display name|Value|
|---|---|
|_msExchWindowsLiveID_|String (wildcards accepted).|

## For more information

Exchange Server 2007 was the first version of Exchange that required OPATH filters instead of LDAP filters. For more information about converting LDAP filters to OPATH filters, see the Microsoft Exchange Team Blog article [Need help converting your LDAP filters to OPATH?](https://techcommunity.microsoft.com/t5/Exchange-Team-Blog/Need-help-converting-your-LDAP-filters-to-OPATH/ba-p/595108).
