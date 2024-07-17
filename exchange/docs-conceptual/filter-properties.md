---
title: "Filterable properties for the Filter parameter"
ms.author: chrisda
author: chrisda
manager: deniseb
ms.date: 1/9/2024
ms.audience: ITPro
audience: ITPro
ms.topic: article
ms.service: exchange-powershell
ms.localizationpriority: medium
ms.assetid: b02b0005-2fb6-4bc2-8815-305259fa5432
description: "Learn about the filterable properties for the Filter parameter in Exchange Server and Exchange Online."
---

# Filterable properties for the Filter parameter on Exchange cmdlets

You use the _Filter_ parameter to create OPATH filters based on the properties of user and group objects in the Exchange Management Shell (Exchange Server PowerShell) and in Exchange Online PowerShell. The _Filter_ parameter is available on these recipient cmdlets:

- [Get-CASMailbox](/powershell/module/exchange/get-casmailbox)
- [Get-Contact](/powershell/module/exchange/get-contact)
- [Get-DistributionGroup](/powershell/module/exchange/get-distributiongroup)
- [Get-DynamicDistributionGroup](/powershell/module/exchange/get-dynamicdistributiongroup)
- [Get-Group](/powershell/module/exchange/get-group)
- [Get-LinkedUser](/powershell/module/exchange/get-linkeduser)
- [Get-Mailbox](/powershell/module/exchange/get-mailbox)
- [Get-MailContact](/powershell/module/exchange/get-mailcontact)
- [Get-MailPublicFolder](/powershell/module/exchange/get-mailpublicfolder)
- [Get-MailUser](/powershell/module/exchange/get-mailuser)
- [Get-Recipient](/powershell/module/exchange/get-recipient)
- [Get-RemoteMailbox](/powershell/module/exchange/get-remotemailbox)
- [Get-SecurityPrincipal](/powershell/module/exchange/get-securityprincipal)
- [Get-UMMailbox](/powershell/module/exchange/get-ummailbox)
- [Get-User](/powershell/module/exchange/get-user)
- [Get-UnifiedGroup](/powershell/module/exchange/get-unifiedgroup)

For more information about _recipient_ filters in Exchange PowerShell, see [Recipient filters in Exchange PowerShell commands](recipient-filters.md).

> [!NOTE]
> The _Filter_ parameter is also available on other cmdlets (for example, **Get-MailboxStatistics**, **Get-Queue**, and **Get-Message**). However, the property values that are accepted by the _Filter_ parameter on these cmdlets aren't similar to the user and group properties that are described in this article.

The properties that have been _confirmed_ to work with the _Filter_ parameter in user and group cmdlets are described in this article.

 **Notes**:

- The list might include:
  - Properties that are used only in one type of environment: Microsoft 365, on-premises Exchange, or hybrid. The property might exist on recipient objects in all environments, but the value is meaningful (a value other than blank or `None`) only in one type of environment.
  - Properties that are present, but correspond to features that are no longer used.

- Not all recipient properties have a corresponding Active Directory property. The LDAP display name value is "n/a" for these properties, which indicates that the property is calculated (likely by Exchange).

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although the _Filter_ parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables. For more information, see [Additional OPATH syntax information](recipient-filters.md#additional-opath-syntax-information).

- Text string properties that accept wildcard characters require the `-like` operator (for example, `"Property -like 'abc*'"`).

- To look for blank or non-blank property values, use the value `$null` (for example, `'Property -eq $null'` or `'Property -ne $null'`).

- For filtering considerations for the nine exclusive **Get-EXO\*** cmdlets in the Exchange Online PowerShell module, see [Filters in the Exchange Online PowerShell module](filters-v2.md).

## AcceptMessagesOnlyFrom

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_authOrig_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String or `$null`|

This filter requires the distinguished name of the individual recipient (a mailbox, mail user, or mail contact). For example, `Get-DistributionGroup -Filter "AcceptMessagesOnlyFrom -eq 'CN=Yuudai Uchida,CN=Users,DC=contoso,DC=com'"` or `Get-DistributionGroup -Filter "AcceptMessagesOnlyFrom -eq 'contoso.com/Users/Angela Gruber'"`.

To find the distinguished name of the individual recipient, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## AcceptMessagesOnlyFromDLMembers

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_dLMemSubmitPerms_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String or `$null`|

This filter requires the distinguished name or canonical distinguished name of the group (a distribution group, mail-enabled security group, or dynamic distribution group). For example, `Get-Mailbox -Filter "AcceptMessagesOnlyFromDLMembers -eq 'CN=Marketing Department,CN=Users,DC=contoso,DC=com'"`. or `Get-Mailbox -Filter "AcceptMessagesOnlyFromDLMembers -eq 'contoso.com/Users/Marketing Department'"`.

To find the distinguished name of the group, replace _\<GroupIdentity\>_ with the name, alias, or email address of the group, and run one of these commands: `Get-DistributionGroup -Identity "<GroupIdentity>" | Format-List Name,DistinguishedName` or `Get-DynamicDistributionGroup -Identity "<GroupIdentity>" | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## ActiveSyncAllowedDeviceIDs

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMobileAllowedDeviceIds_|**Get-CASMailbox**|String (wildcards accepted) or `$null`|

A device ID is a text string that uniquely identifies the device. Use the **Get-MobileDevice** cmdlet to see the devices that have ActiveSync partnerships with a mailbox. To see the device IDs on a mailbox, replace _\<MailboxIdentity\>_ with the name, alias, or email address of the mailbox, and run this command: `Get-MobileDevice -Mailbox <MailboxIdentity> | Format-List`.

After you have the device ID value, you can use it in the filter. For example, `Get-CasMailbox -Filter "(ActiveSyncAllowedDeviceIDs -like 'text1*') -or (ActiveSyncAllowedDeviceIDs -eq 'text2'"`.

## ActiveSyncBlockedDeviceIDs

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMobileBlockedDeviceIds_|**Get-CASMailbox**|String (wildcards accepted) or `$null`|

A device ID is a text string that uniquely identifies the device. Use the **Get-MobileDevice** cmdlet to see the devices that have ActiveSync partnerships with a mailbox. To see the device IDs on a mailbox, replace _\<MailboxIdentity\>_ with the name, alias, or email address of the mailbox, and run this command: `Get-MobileDevice -Mailbox <MailboxIdentity> | Format-List`.

After you have the device ID value, you can use it in a filter. For example, `Get-CasMailbox -Filter "(ActiveSyncBlockedDeviceIDs -like 'text1*') -or (ActiveSyncBlockedDeviceIDs -eq 'text2'"`.

## ActiveSyncEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CasMailbox -Filter 'ActiveSyncEnable -eq $false'`.

## ActiveSyncMailboxPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMobileMailboxPolicyLink_|**Get-CASMailbox** <br/> **Get-Recipient**|String or `$null`|

This filter requires the distinguished name of the ActiveSync mailbox policy. For example, `Get-CASMailbox -Filter "ActiveSyncMailboxPolicy -eq 'CN=Default,CN=Mobile Mailbox Policies,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

You can find the distinguished names of ActiveSync mailbox policies by running this command: `Get-MobileDeviceMailboxPolicy | Format-List Name,DistinguishedName`.

> [!NOTE]
> For the default assignment of the default ActiveSync mailbox policy (named Default) to a mailbox, the value of the **ActiveSyncMailboxPolicy** property is blank (`$null`).

## ActiveSyncSuppressReadReceipt

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CasMailbox -Filter 'ActiveSyncSuppressReadReceipt -eq $true'`.

## AddressBookPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchAddressBookPolicyLink_|**Get-Mailbox** <br/> **Get-Recipient**|String or `$null`|

This filter requires the distinguished name of the address book policy. For example, `Get-Mailbox -Filter "AddressBookPolicy -eq 'CN=Contoso ABP,CN=AddressBook Mailbox Policies,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

You can find the distinguished names of address book policies by running this command: `Get-AddressBookPolicy | Format-List Name,DistinguishedName`.

## AddressListMembership

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_showInAddressBook_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String or `$null`|

This filter requires the distinguished name of the address list. For example, `Get-MailContact -Filter "AddressListMembership -eq 'CN=All Contacts,CN=All Address Lists,CN=Address Lists Container,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

You can find the distinguished names of address lists by running this command: `Get-AddressList | Format-List Name,DistinguishedName`.

## AdminDisplayName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_adminDisplayName_|**Get-SecurityPrincipal**|String (wildcards accepted) or `$null`|

For example, `Get-SecurityPrincipal -Filter 'AdminDisplayName -ne $null' | Format-Table -Auto Name,AdminDisplayName`.

## AdministrativeUnits

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchAdministrativeUnitLink_|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|`$null`|

For example, `Get-User -Filter 'AdministrativeUnits -ne $null'`.

## AggregatedMailboxGuids

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchAlternateMailboxes_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

For example, `Get-Mailbox -Filter 'AggregatedMailboxGuids -ne $null'`.

## Alias

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_mailNickname_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

For example, `Get-Recipient -Filter "Alias -like 'smith*'"`.

## AllowUMCallsFromNonUsers

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUMListInDirectorySearch_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-UMMailbox** <br/> **Get-User**|`None` (0) or `SearchEnabled` (1)|

For example, `Get-User -Filter "AllowUMCallsFromNonUsers -ne 'SearchEnabled'"`.

## ArbitrationMailbox

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchArbitrationMailbox_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

This filter requires the distinguished name of the arbitration mailbox. For example, `Get-DistributionGroup -Filter "ArbitrationMailbox -eq 'CN=SystemMailbox"1f05a927-2e8f-4cbb-9039-2cfb8b95e486",CN=Users,DC=contoso,DC=com'"`.

You can find the distinguished names of arbitration mailboxes by running this command: `Get-Mailbox -Arbitration | Format-List Name,DistinguishedName`.

## ArchiveDatabase

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchArchiveDatabaseLink_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|String or `$null`|

This filter requires the distinguished name of the archive mailbox database. For example, `Get-Mailbox -Filter "ArchiveMailbox -eq 'CN=MBX DB02,CN=Databases,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

You can find the distinguished names of mailbox databases by running this command: `Get-MailboxDatabase | Format-List Name,DistinguishedName`.

## ArchiveDomain

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchArchiveAddress_|**Get-Mailbox**|String (wildcards accepted) or `$null`|

This property is used in on-premises Exchange environments to identify the Exchange Online organization that holds the archive mailbox. For example, `Get-Mailbox -Filter "ArchiveDomain -like 'contoso.onmicrosoft.com*'"`.

## ArchiveGuid

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchArchiveGUID_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|String or `$null`|

This filter requires the GUID of the archive mailbox. For example, `Get-Mailbox -Filter "ArchiveMailbox -eq '6476f55e-e5eb-4462-a095-f2cb585d648d'"`.

You can find the GUID of archive mailboxes by running this command: `Get-Mailbox -Archive | Format-Table -Auto Name,ArchiveGUID`.

## ArchiveName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchArchiveName_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

This filter requires the name of the archive mailbox. For example, `Get-Mailbox -Filter "ArchiveName -like 'In-Place Archive*'"`.

You can find the names of archive mailboxes by running this command: `Get-Mailbox -Archive | Format-Table -Auto Name,ArchiveName`.

## ArchiveQuota

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchArchiveQuota_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "ArchiveQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "ArchiveQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.ArchiveQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.ArchiveQuota -gt '85GB'"`.

## ArchiveRelease

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchArchiveRelease_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-User**|`None`, `E14`, `E15`, or `$null`.|

For example, `Get-Recipient -Filter 'ArchiveRelease -ne $null'`.

## ArchiveState

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|`None` (0), `Local` (1), `HostedProvisioned` (2), `HostedPending` (3), or `OnPremise` (4).|

For example, `Get-Recipient -Filter "ArchiveState -eq 'HostedProvisioned'"`.

## ArchiveStatus

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchArchiveStatus_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|`None` (0) or `Active` (1).|

For example, `Get-Recipient -Filter "ArchiveStatus -eq 'Active'"`.

## ArchiveWarningQuota

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchArchiveWarnQuota_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "ArchiveWarningQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "ArchiveWarningQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.ArchiveWarningQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.ArchiveWarningQuota -gt '85GB'"`.

## AssistantName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchAssistantName_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "AssistantName -like 'Julia*'"`.

## AuditEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxAuditEnable_|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'AuditEnabled -eq $true'`.

## AuditLogAgeLimit

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxAuditLogAgeLimit_|**Get-Mailbox** <br/> **Get-UnifiedGroup**|A time span value: _dd.hh:mm:ss_ where _dd_ = days, _hh_ = hours, _mm_ = minutes, and _ss_ = seconds.|

You can't use the _Filter_ parameter to look for time span values for this property. Instead, use this syntax: `Get-Mailbox | where "$_.AuditLogAgeLimit -<Operator> '<TimeSpan>'"`. For example, `Get-Mailbox | where "$_.AuditLogAgeLimit -gt '60.00:00:00'"`.

## AuthenticationPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchAuthPolicyLink_|**Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "AuthenticationPolicy -eq 'CN=Block Basic Auth,CN=Auth Policies,CN=Configuration,CN=contoso.onmicrosoft.com,CN=ConfigurationUnits,DC=NAMPR11B009,DC=PROD,DC=OUTLOOK,DC=COM'"`.

## BlockedSendersHash

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchBlockedSendersHash_|**Get-Recipient**|Blank ( `$null`) or a hashed value.|

Realistically, you can only use this value to filter on blank or non-blank values. For example, `Get-Recipient -Filter 'BlockedSendersHash -ne $null'.`

## c

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_c_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-SecurityPrincipal** <br/> **Get-User**|String (wildcards accepted) or `$null`|

This filter requires the ISO 3166-1 two-letter country code for the user (for example, `US` for the United States). This property is used together with the _co_ and _countryCode_ properties to define the user's country in Active Directory.

For example, `Get-User -Filter "c -eq 'US'"`.

## CalendarLoggingQuota

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchCalendarLoggingQuota_|**Get-Mailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "CalendarLoggingQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "CalendarLoggingQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.CalendarLoggingQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.CalendarLoggingQuota -gt '10GB'"`.

## CalendarRepairDisabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchCalendarRepairDisabled_|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'CalendarRepairDisabled -eq $true'`.

## CertificateSubject

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-User**|String or `$null`|

The X509 certificate that's published for the user account (visible on the **Published Certificates** tab in Active Directory Users and Computers).

For example, `Get-User -Filter "CertificateSubject -eq 'X509:<I>C=US,O=InternetCA,CN=APublicCertificateAuthority<S>C=US,O=Fabrikam,OU=Sales,CN=Jeff Smith`')

## City

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_l_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "City -eq 'Redmond'"`.

## Company

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_company_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Company -like 'Contoso*'"`.

## ComplianceTagHoldApplied

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-MailUser**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'ComplianceTagHoldApplied -eq $true'`.

## ConsumerNetID

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-User**|String or `$null`|

For example, `Get-User -Filter 'ConsumerNetID -ne $null'`.

## CountryCode

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_countryCode_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-SecurityPrincipal** <br/> **Get-User**|Integer|

This filter requires the ISO 3166-1 three-digit country code for the user (for example, `840` for the United States). This property is used together with the _c_ and _co_ properties to define the user's country in Active Directory.

For example, `Get-User -Filter "countryCode -eq 796"`.

## CountryOrRegion

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_co_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-SecurityPrincipal** <br/> **Get-User**|String|

This filter requires the ISO 3166-1 country name for the user (for example, `United States`). You can select an available value in Active Directory Users and Computers ( **Address** tab > **Country/region** field), or the Exchange admin center (user properties > **Contact information** tab > **Country/Region** field).

When you select a user's country in Active Directory Users and Computers or the EAC, the corresponding values for the _co_ and _countryCode_ properties are automatically configured.

For example, `Get-User -Filter "CountryOrRegion -like 'United*'"`.

## CustomAttribute1 to CustomAttribute15

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_extensionAttribute1_ to _extensionAttribute15_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "CustomAttribute8 -like 'audited*'"`.

## Database

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_homeMDB_|**Get-Mailbox** <br/> **Get-Recipient**|String|

This filter requires the distinguished name of the mailbox database. For example, `Get-Mailbox -Filter "Database -eq 'CN=MBX DB02,CN=Databases,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

You can find the distinguished names of mailbox databases by running this command: `Get-MailboxDatabase | Format-List Name,DistinguishedName`.

## DefaultPublicFolderMailbox

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchPublicFolderMailbox_|**Get-Mailbox**|String or `$null`|

This filter requires the distinguished name or canonical distinguished name of the public folder mailbox. For example, `Get-Mailbox -Filter "DefaultPublicFolderMailbox -eq 'CN=PF Mailbox01,CN=Users,DC=contoso,DC=com'"` or `Get-Mailbox -Filter "DefaultPublicFolderMailbox -eq 'contoso.com/Users/PF Mailbox01'"`.

To find the distinguished names of public folder mailboxes, run this command: `Get-Mailbox -PublicFolder | Format-List Name,DistinguishedName`.

## DeletedItemFlags

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_deletedItemFlags_|**Get-Mailbox** <br/> **Get-SecurityPrincipal**|`DatabaseDefault` (0), `RetainUntilBackupOrCustomPeriod` (3), or `RetainForCustomPeriod` (5).|

For example, `Get-Mailbox -Filter "DeletedItemFlags -ne 'DatabaseDefault'"`.

## DeliverToMailboxAndForward

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_deliverAndRedirect_|**Get-Mailbox** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-MailPublicFolder**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'DeliverToMailboxAndForward -eq $true'`.

## Department

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_department_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "Department -like 'Engineering*'"`.

## DirectReports

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_directReports_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String or `$null`|

This filter requires the distinguished name or canonical distinguished name of the direct report. For example, `Get-User -Filter "DirectReports -eq 'CN=Angela Gruber,CN=Users,DC=contoso,DC=com'"` or `Get-User -Filter "DirectReports -eq 'contoso.com/Users/Angela Gruber'"`.

To find the distinguished name of a direct report, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## DisabledArchiveDatabase

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchDisabledArchiveDatabaseLink_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

This filter requires the distinguished name of the disabled archive mailbox database. For example, `Get-Mailbox -Filter "DisabledArchiveDatabase -eq 'CN=MBX DB02,CN=Databases,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

You can find the distinguished names of mailbox databases by running this command: `Get-MailboxDatabase | Format-List Name,DistinguishedName`.

## DisabledArchiveGuid

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchDisabledArchiveDatabaseGUID_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

This filter requires the GUID of the disabled archive mailbox. For example, `Get-Mailbox -Filter "DisabledArchiveGuid -eq '6476f55e-e5eb-4462-a095-f2cb585d648d'"`.

You can find the GUID of archive mailboxes by running this command: `Get-Mailbox -Archive | Format-Table -Auto Name,ArchiveGUID`.

## DisplayName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_displayName_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

For example, `Get-Recipient -Filter "DisplayName -like 'Julia*'"`.

## DistinguishedName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_distinguishedName_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String|

This filter requires the distinguished name of the recipient. For example, `Get-Mailbox -Filter "DistinguishedName -eq 'CN=Basho Kato,CN=Users,DC=contoso,DC=com'"`.

You can find the distinguished names of recipients by running this command: `Get-Recipient | Format-List Name,RecipientType,DistinguishedName`.

## EcpEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CASMailbox -Filter 'EcpEnabled -eq $false'`.

## EmailAddresses

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_proxyAddresses_|**Get-CASMailbox** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UMMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

For example, `Get-Recipient -Filter "EmailAddresses -like 'marketing*'"`.

When you use a complete email address, you don't need to account for the `smtp:` prefix. If you use wildcards, you do. For example, if `"EmailAddresses -eq 'lila@fabrikam.com'"` returns a match, `"EmailAddresses -like 'lila*'"` won't return a match, but or `"EmailAddresses -like 'smtp:lila*'"` will return a match.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## EmailAddressPolicyEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-Recipient -Filter 'EmailAddressPolicyEnabled -eq $false'`.

## EntryId

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchPublicFolderEntryId_|**Get-MailPublicFolder**|String (wildcards accepted)|

For example, `Get-MailPublicFolder -Filter "EntryId -like '60000*'"`.

You can find the entry IDs of mail-enabled public folders by running this command: `Get-MailPublicFolder | Format-List Name,EntryId`.

## EwsApplicationAccessPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchEwsApplicationAccessPolicy_|**Get-CASMailbox**|`EnforceAllowList`, `EnforceBlockList`. or `$null`|

For example, `Get-CASMailbox -Filter 'EwsApplicationAccessPolicy -ne $null'`.

## EwsEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchEwsEnabled_|**Get-CASMailbox**|0 (disabled), 1 (enabled) or `$null`.|

For example, `Get-CASMailbox -Filter "EwsEnabled -eq 1"`.

## ExchangeGuid

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxGuid_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String|

For example, `Get-Mailbox -Filter "ExchangeGuid -eq 'c80a753d-bd4a-4e19-804a-6344d833ecd8'"`.

To find the Exchange GUID of a recipient, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,ExchangeGuid`.

Note that an object's Exchange GUID value is different than its GUID value. Also, the Exchange GUID value for non-mailboxes (mail contacts, mail users, distribution groups, dynamic distribution groups, mail-enabled security groups, and mail-enabled public folders) is `00000000-0000-0000-0000-000000000000`.

## ExchangeUserAccountControl

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUserAccountControl_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|`None` (0) or `AccountDisabled` (2)|

For example, `Get-Mailbox -Filter "ExchangeUserAccountControl -eq 'AccountDisabled'"`.

## ExchangeVersion

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchVersion_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMMailbox** <br/> **Get-User**|Integer|

This property contains the earliest version of Exchange that you can use to manage the recipient. The property values that you see are different than the values that you need to use in the filter. To see the **ExchangeVersion** property values, run this command: `Get-Recipient | Format-Table Name,RecipientType,ExchangeVersion`.

For the Exchange 2010 value `0.10 (14.0.100.0)`, use the value 44220983382016 in the filter.

For the Exchange 2013 or Exchange 2016 value `0.20 (15.0.0.0)`, use the value 88218628259840 in the filter.

For example, `Get-Recipient -Filter "ExchangeVersion -lt 88218628259840"`.

## ExpansionServer

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchExpansionServerName_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Recipient**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "ExpansionServer -like 'Mailbox01*'"`.

For an exact match, you need to use the **ExchangeLegacyDN** value of the server. For example, `Get-Recipient -Filter "ExpansionServer -eq '/o=Contoso Corporation/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Mailbox01'"`

You can find the **ExchangeLegacyDN** value by running this command: `Get-ExchangeServer | Format-List Name,ExchangeLegacyDN`.

## ExtensionCustomAttribute1 to ExtensionCustomAttribute5

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchExtensionCustomAttribute1_ to _msExchExtensionCustomAttribute5_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "ExtensionCustomAttribute8 -like 'audited*'"`.

## ExternalDirectoryObjectId

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchExternalDirectoryObjectId_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String or `$null`|

For example, `Get-Recipient -Filter 'ExternalDirectoryObjectId -ne $null'`.

## ExternalEmailAddress

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_targetAddress_|**Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "ExternalEmailAddress -like '@fabrikam.com*'"`.

When you use a complete email address, you don't need to account for the `smtp:` prefix. If you use wildcards, you do. For example, if `"ExternalEmailAddress -eq 'lila@fabrikam.com'"` returns a match, `"ExternalEmailAddress -like 'lila*'"` won't return a match, but `"ExternalEmailAddress -like 'smtp:lila*'"` will return a match.

## ExternalOofOptions

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchExternalOOFOptions_|**Get-Mailbox**|`External` (0) or `InternalOnly` (1)|

For example, `Get-Mailbox -Filter "ExternalOofOptions -eq 'External'"`.

## Fax

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_facsimileTelephoneNumber_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Fax -like '206*'"`.

## FirstName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_givenName_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "FirstName -like 'Chris*'"`.

## ForwardingAddress

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_altRecipient_|**Get-Mailbox** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

This filter requires the distinguished name or canonical distinguished name of the forwarding recipient. For example, `Get-Mailbox -Filter "ForwardingAddress -eq 'CN=Angela Gruber,CN=Users,DC=contoso,DC=com'"` or `Get-Mailbox -Filter "ForwardingAddress -eq 'contoso.com/Users/Angela Gruber'"`.

To find the distinguished name of a forwarding recipient, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,DistinguishedName`.

## ForwardingSmtpAddress

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchGenericForwardingAddress_|**Get-Mailbox**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "ForwardingSmtpAddress -like '@fabrikam.com*'"`.

When you use a complete email address, you don't need to account for the `smtp:` prefix. If you use wildcards, you do. For example, if `"ForwardingSmtpAddress -eq 'lila@fabrikam.com'"` returns a match, `"ForwardingSmtpAddress -like 'lila*'"` won't return a match, but `"ForwardingSmtpAddress -like 'smtp:lila*'"` will return a match.

## GeneratedOfflineAddressBooks

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchOABGeneratingMailboxBL_|**Get-Mailbox**|String or `$null`|

This property is only meaningful on arbitration mailboxes, so you need to use the _Arbitration_ switch in the filter command. Also, This filter requires the distinguished name of the offline address book. For example, `Get-Mailbox -Arbitration -Filter "GeneratedOfflineAddressBooks -eq 'CN=OAB 1,CN=Offline Address Lists,CN=Address Lists Container,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

You can find the distinguished names of offline address books by running this command: `Get-OfflineAddressBook | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## GrantSendOnBehalfTo

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_publicDelegates_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String or `$null`|

This filter requires the distinguished name or canonical distinguished name of the mail-enabled security principal (mailbox, mail user, or mail-enabled security group). For example, `Get-Mailbox -Filter "GrantSendOnBehalfTo -eq 'CN=Angela Gruber,CN=Users,DC=contoso,DC=com'"` or `Get-Mailbox -Filter "GrantSendOnBehalfTo -eq 'contoso.com/Users/Angela Gruber'"`.

To find the distinguished name of a mail-enabled security principal, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## GroupMemberCount

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-UnifiedGroup**|Integer|

For example, `Get-UnifiedGroup -Filter "GroupMemberCount -gt 100"`.

## GroupExternalMemberCount

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-UnifiedGroup**|Integer|

For example, `Get-UnifiedGroup -Filter "GroupExternalMemberCount -gt 0"`.

## GroupType

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_groupType_|**Get-DistributionGroup** <br/> **Get-Group** <br/> **Get-UnifiedGroup**|`None` (0), `Global` (2), `DomainLocal` (4), `BuiltinLocal` (5), `Universal` (8), or `SecurityEnabled` (-2147483648).|

Distribution groups have the value `Universal`, and mail-enabled security groups have the value `Universal, SecurityEnabled`. You can specify multiple values separated by commas, and the order doesn't matter. For example, `Get-DistributionGroup -Filter "GroupType -eq 'Universal,SecurityEnabled'"` returns the same results as `Get-DistributionGroup -Filter "GroupType -eq 'SecurityEnabled,Universal'"`.

This multivalued property will only return a match if the property _equals_ the specified value.

## Guid

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_objectGuid_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String|

For example, `Get-Recipient -Filter "Guid -eq '8a68c198-be28-4a30-83e9-bffb760c65ba'"`.

You can find the GUIDs of recipients by running this command: `Get-Recipient | Format-List Name,RecipientType,Guid`.

Note that an object's GUID value is different than its Exchange GUID value.

## HasActiveSyncDevicePartnership

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox** <br/> **Get-Recipient**|Boolean (`$true` or `$false`)|

For example, `Get-Recipient -Filter 'HasActiveSyncDevicePartnership -eq $true'`.

## HiddenFromAddressListsEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchHideFromAddressLists_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-Recipient -Filter 'HiddenFromAddressListsEnabled -eq $true'`.

## HiddenGroupMembershipEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_hideDLMembership_|**Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-UnifiedGroup -Filter 'HiddenGroupMembershipEnabled -eq $true'`.

## HomePhone

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_homePhone_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "HomePhone -like '206*'"`.

## Id

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_distinguishedName_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UMMMailbox** <br/> **Get-User** <br/> **Get-SecurityPrincipal** <br/> **Get-UnifiedGroup**|String|

This filter requires the distinguished name or canonical distinguished name of the recipient. For example, `Get-Mailbox -Filter "Id -eq 'CN=Angela Gruber,CN=Users,DC=contoso,DC=com'"` or `Get-Mailbox -Filter "Id -eq 'contoso.com/Users/Angela Gruber'"`.

To find the distinguished name of a recipient, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,DistinguishedName`.

## IgnoreMissingFolderLink

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-MailPublicFolder**|Boolean (`$true` or `$false`)|

For example, `Get-MailPublicFolder -Filter 'IgnoreMissingFolderLink -eq $true'`.

## ImapEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CASMailbox -Filter 'ImapEnabled -eq $false'`.

## ImmutableId

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchGenericImmutableId_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

For example, `Get-Mailbox -Filter 'ImmutableId -ne $null'`.

## IncludeInGarbageCollection

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IncludeInGarbageCollection -eq $true'`.

## Initials

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_initials_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Initials -like 'B.'"`.

## InPlaceHolds

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUserHoldPolicies_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String|

This filter requires the **InPlaceHoldIdentity** value of the mailbox search. For example, `Get-Mailbox -Filter "InPlaceHolds -eq '9d0f81154cc64c6b923ecc0be5ced0d7'"`.

To find the **InPlaceHoldIdentity** values of mailbox searches, run this command: `Get-MailboxSearch | Format-Table Name,InPlaceHoldIdentity`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## InPlaceHoldsRaw

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-User**|String|

This filter requires the **InPlaceHoldIdentity** value of the mailbox search. For example, `Get-Mailbox -Filter "InPlaceHoldsRaw -eq '9d0f81154cc64c6b923ecc0be5ced0d7'"`.

To find the **InPlaceHoldIdentity** values of mailbox searches, run this command: `Get-MailboxSearch | Format-Table Name,InPlaceHoldIdentity`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## IsDirSynced

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchIsMSODirsynced_|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-User -Filter 'IsDirSynced -eq $true'`.

## IsExcludedFromServingHierarchy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsExcludedFromServingHierarchy -eq $true'`.

## IsHierarchyReady

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsHierarchyReady -eq $false'`.

## IsHierarchySyncEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsHierarchySyncEnabled -eq $false'`.

## IsInactiveMailbox

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsInactiveMailbox -eq $false'`.

## IsLinked

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-User**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsLinked -eq $true'`.

## IsMailboxEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsMailboxEnabled -eq $false'`.

## IsResource

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsResource -eq $true'`.

## IsSecurityPrincipal

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-User**|Boolean (`$true` or `$false`)|

For example, `Get-User -Filter 'IsSecurityPrincipal -eq $false'`.

## IsShared

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsShared -eq $true'`.

## IsSoftDeletedByDisable

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsSoftDeletedByDisable -eq $true'`.

## IsSoftDeletedByRemove

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsSoftDeletedByRemove -eq $true'`.

## IssueWarningQuota

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_mDBStorageQuota_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "IssueWarningQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "IssueWarningQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.IssueWarningQuota -<Operator> '<Size>'`". For example, `Get-Mailbox | where "$_.IssueWarningQuota -lt '50GB'"`.

## JournalArchiveAddress

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String|

This property uses an SMTP email address. For example, `Get-Mailbox -Filter "JournalArchiveAddress -eq 'michelle@contoso.com'"`.

## LanguagesRaw

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUserCulture_|**Get-Mailbox**|String (wildcards accepted) or `$null`|

This property is named **Languages** in the properties of a mailbox, and it contains the language preference for the mailbox in the format `<ISO 639 two-letter culture code>-<ISO 3166 two-letter subculture code>`. For example, United States English is `en-US`. For more information, see [CultureInfo Class](/dotnet/api/system.globalization.cultureinfo).

You can specify multiple values separated by commas, but the order matters. For example, `Get-Mailbox -Filter "LanguagesRaw -eq 'en-US,es-MX'"` returns different results than `Get-Mailbox -Filter "LanguagesRaw -eq 'es-MX,en-US'"`.

For single values, this multivalued property will return a match if the property _contains_ the specified value.

## LastExchangeChangedTime

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchLastExchangeChangedTime_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|`$null` or a date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Mailbox -Filter 'LastExchangeChangedTime -ne $null'`.

## LegacyExchangeDN

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_legacyExchangeDN_|**Get-CASMailbox** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

For example, `Get-User -Filter "LegacyExchangeDN -like 'Osca*'"`.

You can find LegacyExchangeDN values for users by running this command: `Get-User | Format-List Name,LegacyExchangeDN`

## LitigationHoldDate

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchLitigationHoldDate_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|`$null` or a date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Mailbox -Filter "LitigationHoldDate -gt '8/13/2017'"`.

## LitigationHoldEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'LitigationHoldEnabled -eq $true'`.

## LitigationHoldOwner

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchLitigationHoldOwner_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

This property uses the user principal name of the litigation hold owner. For example, `Get-Mailbox -Filter "LitigationHoldOwner -eq 'agruber@contoso.com'"`.

## LastName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_sn_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "LastName -like 'Martin*'"`.

## MailboxContainerGUID

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxContainerGuid_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

For example, `Get-Mailbox -Filter 'MailboxContainerGUID -ne $null'`.

## MailboxMoveBatchName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveBatchName_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

This property includes the name of the migration batch. For example, `Get-Mailbox -Filter "MailboxMoveBatchName -like 'LocalMove 01*'"`.

You can find the names of migration batches by running the **Get-MigrationBatch** command. Note that migration batches that you create in the Exchange admin center use the naming convention `MigrationService:<MigrationBatchName>`.

## MailboxMoveFlags

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveFlags_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|For valid values, see the description of the _Flags_ parameter in [Get-MoveRequest](/powershell/module/exchange/get-moverequest#-flags).|

For example, `Get-Mailbox -Filter "MailboxMoveFlags -ne 'None'"`.

You can specify multiple values separated by commas, and the order doesn't matter. For example, `Get-Recipient -Filter "MailboxMoveFlags -eq 'IntraOrg,Pull'"` returns the same results as `Get-Recipient -Filter "MailboxMoveFlags -eq 'Pull,IntraOrg'"`.

This multivalued property will only return a match if the property _equals_ the specified value.

## MailboxMoveRemoteHostName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveRemoteHostName_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|String or `$null`|

For example, `Get-Mailbox -Filter 'MailboxMoveRemoteHostName -ne $null'`.

## MailboxMoveSourceMDB

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveSourceMDBLink_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|String or `$null`|

This filter requires the distinguished name of the source mailbox database. For example, `Get-Mailbox -Filter "MailboxMoveSourceMDB -eq 'CN=MBX DB02,CN=Databases,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

You can find the distinguished names of mailbox databases by running this command: `Get-MailboxDatabase | Format-List Name,DistinguishedName`.

## MailboxMoveStatus

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveStatus_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|For valid values, see the description of the _MoveStatus_ parameter in [Get-MoveRequest](/powershell/module/exchange/get-moverequest#-movestatus).|

For example, `Get-Mailbox -Filter "MailboxMoveStatus -eq 'Completed'"`.

## MailboxMoveTargetMDB

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveTargetMDBLink_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|String or `$null`|

This filter requires the distinguished name of the target mailbox database. For example, `Get-Mailbox -Filter "MailboxMoveTargetMDB -eq 'CN=MBX DB02,CN=Databases,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

You can find the distinguished names of mailbox databases by running this command: `Get-MailboxDatabase | Format-List Name,DistinguishedName`.

## MailboxPlan

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchParentPlanLink_|**Get-Mailbox**|String or `$null`|

Mailbox plans correspond to Microsoft 365 license types. The availability of a license plans is determined by the selections that you make when you enroll your domain.

For example, `Get-Mailbox -Filter 'MailboxPlan -ne $null'`.

## MailboxRelease

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxRelease_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-User**|`None`, `E14`, `E15`, or `$null`.|

For example, `Get-Recipient -Filter 'MailboxRelease -ne $null'`.

## MailTipTranslations

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchSenderHintTranslations_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted) or `$null`|

When you use this property in a filter, you need to account for the leading and trailing HTML tags. For example, `Get-DistributionGroup -Filter "MailTipTranslations -like 'is not monitored.*'"`.

## ManagedBy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_managedBy_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-Recipient** <br/> **Get-UnifiedGroup**|String or `$null`|

This filter requires the distinguished name or canonical distinguished name of the group owner (a mail-enabled security principal, which is a mailbox, mail user, or mail-enabled security group). For example, `Get-Mailbox -Filter "ManagedBy -eq 'CN=Angela Gruber,CN=Users,DC=contoso,DC=com'"` or `Get-Mailbox -Filter "ManagedBy -eq 'contoso.com/Users/Angela Gruber'"`.

To find the distinguished name of a mail-enabled security principal, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## ManagedFolderMailboxPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMailboxTemplateLink_|**Get-Mailbox** <br/> **Get-Recipient**|String or `$null`|

Managed folder mailbox policies aren't available in Exchange 2013 or later.

For example, `Get-Mailbox -Filter 'ManagedFolderMailboxPolicy -eq $null'`.

This filter requires the distinguished name of the managed folder mailbox policy. For example, `Get-Mailbox -Filter "ManagedFolderMailboxPolicy -eq 'CN=MFM Inbox Policy,CN=ELC Mailbox Policies,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

You can find the distinguished names of managed folder mailbox policies on Exchange 2010 servers by running this command: `Get-ManagedFolderMailboxPolicy | Format-List Name,DistinguishedName`.

## Manager

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_manager_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String or `$null`|

This filter requires the distinguished name or canonical distinguished name of the manager (a mailbox or mail user). For example, `Get-User -Filter "Manager -eq 'CN=Angela Gruber,CN=Users,DC=contoso,DC=com'"` or `Get-Mailbox -Filter "Manager -eq 'contoso.com/Users/Angela Gruber'"`.

To find the distinguished name of a manager, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,DistinguishedName.`

## MAPIEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CASMailbox -Filter 'MAPIEnabled -eq $false'`.

## MasterAccountSid

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMasterAccountSid_|**Get-Mailbox** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-SecurityPrincipal** <br/> **Get-User**|String or `$null`|

For example, `Get-Mailbox -Filter 'MasterAccountSid -ne $null'`.

This value is blank ( `$null`) for mailboxes with associated user accounts, and `S-1-5-10` (Self) for mailboxes without associated user accounts (for example, shared mailboxes, resource mailboxes, discovery search mailboxes, arbitration mailboxes, and public folder mailboxes).

## MaxBlockedSenders

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMaxBlockedSenders_|**Get-Mailbox**|Integer or `$null`|

For example, `Get-Mailbox -Filter "MaxBlockedSenders -gt 0"`.

## MaxReceiveSize

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_delivContLength_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|A byte quantified size value (for example, `75MB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "MaxReceiveSize -eq 'Unlimited'"` or `Get-Mailbox -Filter "MaxReceiveSize -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.MaxReceiveSize -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.MaxReceiveSize -gt '50GB'"`.

## MaxSafeSenders

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMaxSafeSenders_|**Get-Mailbox**|Integer or `$null`|

For example, `Get-Mailbox -Filter "MaxSafeSenders -gt 0"`.

## MaxSendSize

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_submissionContLength_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|A byte quantified size value (for example, `75MB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "MaxSendSize -eq 'Unlimited'"` or `Get-Mailbox -Filter "MaxSendSize -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.MaxReceiveSize -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.MaxSendSize -gt '50GB'"`.

## MemberDepartRestriction

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchGroupDepartRestriction_|**Get-DistributionGroup**|`Closed` (0), `Open` (1), or `ApprovalRequired` (2).|

For example, `Get-DistributionGroup -Filter "MemberDepartRestriction -eq 'ApprovalRequired'"`.

## MemberJoinRestriction

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchGroupDepartRestriction_|**Get-DistributionGroup**|`Closed` (0), `Open` (1), or `ApprovalRequired` (2).|

For example, `Get-DistributionGroup -Filter "MemberJoinRestriction -eq 'ApprovalRequired'"`.

## MemberOfGroup

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_memberOf_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMMailbox** <br/> **Get-User**|String or `$null`|

This filter requires the distinguished name or canonical distinguished name of the distribution group or mail-enabled security group. For example, `Get-User -Filter "MemberOfGroup -eq 'CN=Marketing Department,CN=Users,DC=contoso,DC=com'"` or `Get-User -Filter "MemberOfGroup -eq 'contoso.com/Users/Marketing Group'"`.

To find the distinguished name of a group, replace _\<GroupIdentity\>_ with the name, alias, or email address of the group, and run this command: `Get-DistributionGroup -Identity "<GroupIdentity>" | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## Members

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_member_|**Get-DistributionGroup** <br/> **Get-Group** <br/> **Get-Recipient** <br/> **Get-SecurityPrincipal**|String or `$null`|

This filter requires the distinguished name or canonical distinguished name of the group member. For example, `Get-Group -Filter "Members -eq 'CN=Angela Gruber,CN=Users,DC=contoso,DC=com'"` or `Get-User -Filter "Members -eq 'contoso.com/Users/Angela Gruber'"`.

To find the distinguished name of a group member, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the group member, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## MobilePhone

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_mobile_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "MobilePhone -like '555*'"`.

## ModeratedBy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchModeratedByLink_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String|

This filter requires the distinguished name or canonical distinguished name of the group moderator (a mail-enabled security principal, which is a mailbox, mail-user, or mail-enabled security group). For example, `Get-DistributionGroup -Filter "ModeratedBy -eq 'CN=Angela Gruber,CN=Users,DC=contoso,DC=com'"` or `Get-DistributionGroup -Filter "ModeratedBy -eq 'contoso.com/Users/Angela Gruber'"`.

To find the distinguished name of a mail-enabled security principal, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## ModerationEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchEnableModeration_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-DistributionGroup -Filter 'ModerationEnabled -eq $true'`.

## Name

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_name_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

For example, `Get-User -Filter "Name -like 'Laura*'"`.

## NetID

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-User**|String or `$null`|

This property is populated for Exchange Online mailboxes in hybrid environments. A sample value is `1003BFFD9A0CFA03`.

For example, `Get-User -Filter 'NetId -ne $null'`.

## Notes

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_info_|**Get-Contact** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Notes -like 'Events Team*'"`.

## ObjectCategory

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_objectCategory_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String|

This filter requires the canonical distinguished name of the object. The value uses the syntax `<domain>/Configuration/Schema/<Type>`.

Valid _\<Type\>_ values are: `Person` for mailboxes, mail users, and mail contacts, `Group` for distribution groups, mail-enabled security groups and Microsoft 365 Groups, `ms-Exch-Public-Folder` for mail-enabled public folders, and `ms-Exch-Dynamic-Distribution-List` for dynamic distribution groups.

For example, `Get-Recipient -Filter "ObjectCategory -eq 'contoso.com/Configuration/Schema/Group'"`.

## ObjectClass

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_objectClass_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String|

The value of this property is `top, person, organizationalPerson, user` for mailboxes and mail users, `top, person, organizationalPerson, contact` for mail contacts, `top, group` for distribution groups, mail-enabled security groups and Microsoft 365 Groups, `msExchDynamicDistributionList` for dynamic distribution groups and `top, publicFolder` for mail-enabled public folders

For example, `Get-Recipient -Filter "ObjectClass -eq 'Contact'"`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## Office

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_physicalDeliveryOfficeName_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Office -like '22*'"`.

## OfflineAddressBook

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUseOAB_|**Get-Mailbox**|String or `$null`|

This filter requires the distinguished name of the offline address book. For example, `Get-Mailbox -Arbitration -Filter "OfflineAddressBook -eq 'CN=OAB 1,CN=Offline Address Lists,CN=Address Lists Container,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`

You can find the distinguished names of offline address books by running this command: `Get-OfflineAddressBook | Format-List Name,DistinguishedName`.

## OnPremisesObjectId

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-MailPublicFolder**|String or `$null`|

For example, `Get-MailPublicFolder -Filter 'OnPremisesObjectId -ne $null'`.

## OperatorNumber

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUMOperatorNumber_|**Get-UMMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-UMMailbox -Filter "OperatorNumber -eq 5"`.

## OtherFax

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_otherFacsimileTelephoneNumber_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "OtherFax -like '206*'"`.

## OtherHomePhone

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_otherHomePhone_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "OtherHomePhone -like '206*'"`.

## OtherTelephone

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_otherTelephone_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "OtherTelephone -like '206*'"`.

## OWAEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

The filter operates backwards. For example, `Get-CASMailbox -Filter 'OWAEnabled -eq $true'` returns mailboxes where the **OWAEnabled** property is `False`, and `Get-CASMailbox -Filter 'OWAEnabled -eq $false'` returns mailboxes where the **OWAEnabled** property is `True`

## OWAforDevicesEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchOmaAdminWirelessEnable_|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CASMailbox -Filter 'OWAForDevicesEnabled -eq $true'`.

## OWAMailboxPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchOWAPolicy_|**Get-CASMailbox** <br/> **Get-Recipient**|String or `$null`|

This filter requires the distinguished name of the Outlook on the web mailbox policy (formerly known as an Outlook Web App mailbox policy). For example, `Get-CASMailbox -Filter "OWAMailboxPolicy -eq 'CN=Default,CN=OWA Mailbox Policies,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com`'".

You can find the distinguished names of Outlook on the web mailbox policies by running this command: `Get-OwaMailboxPolicy | Format-List Name,DistinguishedName`.

## Pager

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_pager_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Pager -like '206*'"`.

## PersistedCapabilities

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

Typically, the value of this property something other than `$null` (blank) for Microsoft 365 accounts and mailboxes. For more information about the valid property values, see [Capability enumeration](/previous-versions/office/exchange-server-api/ff441134(v=exchg.150)).

For example, `Get-Mailbox -Filter 'PersistedCapabilities -ne $null'`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## Phone

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_telephoneNumber_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Phone -like '206*'"`.

## PhoneProviderId

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUMPhoneProvider_|**Get-UMMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-UMMailbox -Filter "PhoneProviderId -like '206*'"`.

## PhoneticDisplayName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msDS-PhoneticDisplayName_|**Get-Contact** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-MailPublicFolder** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "PhoneticDisplayName -like 'Lila*'"`.

## PoliciesExcluded

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchPoliciesExcluded_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String or `$null`|

For example, `Get-Recipient -Filter 'PoliciesExcluded -ne $null'`.

## PoliciesIncluded

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchPoliciesIncluded_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String or `$null`|

For example, `Get-Recipient -Filter 'PoliciesIncluded -eq $null'`.

## PopEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CASMailbox -Filter 'POPEnabled -eq $false'`.

## PostalCode

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_postalCode_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "PostalCode -eq 90210"`.

## PostOfficeBox

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_postOfficeBox_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "PostOfficeBox -like '555*'"`.

## PreviousRecipientTypeDetails

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchPreviousRecipientTypeDetails_|**Get-LinkedUser** <br/> **Get-User**|String or `$null`|

For valid values, see the description of the _RecipientTypeDetails_ parameter in [Get-Recipient](/powershell/module/exchange/get-recipient#-recipienttypedetails).

For example, `Get-User -Filter 'PreviousRecipientTypeDetails -ne $null'`.

## PrimarySmtpAddress

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UMMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

Don't use the _PrimarySmtpAddress_ property; use the _EmailAddresses_ property instead. Any filter that uses the _PrimarySmtpAddress_ property will also search values in the _EmailAddresses_ property. For example, if a mailbox has the primary email address dario@contoso.com, and the additional proxy addresses dario2@contoso.com and dario3@contoso.com, all of the following filters will return that mailbox in the result: `"PrimarySmtpAddress -eq 'dario@contoso.com'"`, `"PrimarySmtpAddress -eq 'dario2@contoso.com'"`, or `"PrimarySmtpAddress -eq 'dario3@contoso.com'"`.

## ProhibitSendQuota

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_mDBOverQuotaLimit_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "ProhibitSendQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "ProhibitSendQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.ProhibitSendQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.ProhibitSendQuota -lt '70GB'"`.

## ProhibitSendReceiveQuota

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_mDBOverHardQuotaLimit_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "ProhibitSendReceiveQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "ProhibitSendReceiveQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.ProhibitSendReceiveQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.ProhibitSendReceiveQuota -lt '70GB'"`.

## ProtocolSettings

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_protocolSettings_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

The default value of this property on mailboxes is `RemotePowerShell§1`. This property is populated with additional values when you use Set-CASMailbox to disable protocols (for example, POP3 or IMAP4).

For example, `Get-Mailbox -Filter "ProtocolSettings -like 'POP3*'"`.

## PublicFolderContacts

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_pFContacts_|**Get-MailPublicFolder**|String or `$null`|

This property is displayed as **Contacts** in the results of the command `Get-MailPublicFolder -Identity <PublicFolderIdentity> | Format-List`, but you need to use the property name **PublicFolderContacts** in the filter.

This filter requires the distinguished name or canonical distinguished name of the public folder contact. For example, `Get-MailPublicFolder -Filter "PublicFolderContacts -eq 'CN=Angela Gruber,CN=Users,DC=contoso,DC=com'"` or `Get-MailPublicFolder -Filter "PublicFolderContacts -eq 'contoso.com/Users/Angela Gruber'"`.

To find the distinguished name of a public folder contact, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## QueryBaseDN

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchQueryBaseDN_|**Get-Mailbox**|String or `$null`|

This property was used in Exchange 2007 global address list segregation to specify a location in Active Directory. This feature was replaced by address book policies in Exchange 2010 Service Pack 2, so the value of this property should always be blank ( `$null`).

For example, `Get-Mailbox -Filter 'QueryBaseDN -ne $null'`.

## RecipientContainer

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchDynamicDLBaseDN_|**Get-DynamicDistributionGroup**|String or `$null`|

This filter requires the distinguished name or canonical distinguished name of the organizational unit or container in Active Directory. For example, `Get-DynamicDistributionGroup -Filter "RecipientContainer -eq 'CN=Users,DC=contoso,DC=com'"` or `Get-DynamicDistributionGroup -Filter "RecipientContainer -eq 'contoso.com/Users'"`

To find the distinguished names or canonical distinguished names of organizational units and containers in Active Directory, run this command: `Get-OrganizationalUnit -IncludeContainers | Format-List Name,DistinguishedName,ID`.

## RecipientLimits

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchRecipLimit_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|Integer or `Unlimited`|

For example, `Get-Mailbox -Filter "RecipientLimits -ne 'Unlimited'"`.

## RecipientType

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-User** <br/> **Get-UnifiedGroup**|`DynamicDistributionGroup`, `MailContact`, `MailNonUniversalGroup`, `MailUniversalDistributionGroup`, `MailUniversalSecurityGroup`, `MailUser`, `PublicFolder` or `UserMailbox`|

For example, `Get-Recipient -Filter "RecipientType -eq 'MailContact'"`.

## RecipientTypeDetails

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String|

For valid values, see the description of the _RecipientTypeDetails_ parameter in [Get-Recipient](/powershell/module/exchange/get-recipient#-recipienttypedetails).

For example, `Get-Recipient -Filter "RecipientTypeDetails -eq 'SharedMailbox'"`.

## RecoverableItemsQuota

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchDumpsterQuota_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "RecoverableItemsQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "RecoverableItemsQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.RecoverableItemsQuota -<Operator> '<Size>'`. For example, `Get-Mailbox | where "$_.RecoverableItemsQuota -gt '35GB'"`.

## RecoverableItemsWarningQuota

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchDumpsterWarningQuota_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "RecoverableItemsWarningQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "RecoverableItemsWarningQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.RecoverableItemsWarningQuota -<Operator> '<Size>'`". For example, `Get-Mailbox | where "$_.RecoverableItemsWarningQuota -gt '25GB'"`.

## RejectMessagesFrom

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_unauthOrig_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String or `$null`|

This filter requires the distinguished name of the individual recipient (a mailbox, mail user, or mail contact). For example, `Get-DistributionGroup -Filter "RejectMessagesFrom -eq 'CN=Yuudai Uchida,CN=Users,DC=contoso,DC=com'"` or `Get-DistributionGroup -Filter "RejectMessagesFrom -eq 'contoso.com/Users/Angela Gruber'"`.

To find the distinguished name of the individual recipient, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## RejectMessagesFromDLMembers

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_dLMemRejectPerms_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String or `$null`|

This filter requires the distinguished name or canonical distinguished name of the group (a distribution group, mail-enabled security group, or dynamic distribution group). For example, `Get-Mailbox -Filter "RejectMessagesFromDLMembers -eq 'CN=Marketing Department,CN=Users,DC=contoso,DC=com'"` or `Get-Mailbox -Filter "RejectMessagesFromDLMembers -eq 'contoso.com/Users/Marketing Department'"`.

To find the distinguished name of the group, replace _\<GroupIdentity\>_ with the name, alias, or email address of the group, and run one of these commands: `Get-DistributionGroup -Identity "<GroupIdentity>" | Format-List Name,DistinguishedName` or `Get-DynamicDistributionGroup -Identity "<GroupIdentity>" | Format-List Name,DistinguishedName`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## RemoteAccountPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchSyncAccountsPolicyDN_|**Get-Mailbox**|String or `$null`|

This filter requires the distinguished name of the remote account policy. For example, `Get-Mailbox -Filter "RemoteAccountPolicy -eq 'CN=Contoso Remote Account Policy,CN=Remote Accounts Policies Container,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

## RemotePowerShellEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-User**|Boolean (`$true` or `$false`)|

For example, `Get-User -Filter 'RemotePowerShellEnabled -eq $false'`.

## RemoteRecipientType

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchRemoteRecipientType_|**Get-Mailbox** <br/> **Get-RemoteMailbox**|`None` (0), `ProvisionMailbox` (1), `ProvisionArchive` (2), `Migrated` (4), `DeprovisionMailbox` (8), `DeprovisionArchive` (16), `RoomMailbox` (32), `EquipmentMailbox` (64), `SharedMailbox` (96), `TeamMailbox` (128), or `$null`.|

For example, `Get-RemoteMailbox -Filter "RemoteRecipientType -eq 'ProvisionMailbox'"`.

## ReportToManagerEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_reportToOwner_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-DistributionGroup -Filter 'ReportToManagerEnabled -eq $true'`.

## ReportToOriginatorEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_reportToOriginator_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-DistributionGroup -Filter 'ReportToOriginatorEnabled -eq $false'`.

## RequireAllSendersAreAuthenticated

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchRequireAuthToSendTo_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal**|Boolean (`$true` or `$false`)|

This property is displayed as **RequireSenderAuthenticationEnabled** in the results of the command `Get-<RecipientType> -Identity <RecipientIdentity> | Format-List`, but you need to use the property name **RequireAllSendersAreAuthenticated** in the filter. For example, `Get-DistributionGroup -Filter 'RequireAllSendersAreAuthenticated -eq $false'`.

## ResourceBehaviorOptions

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-UnifiedGroup**|`AllowOnlyMembersToPost`, `CalendarMemberReadOnly`, `ConnectorsEnabled`, `HideGroupInOutlook`, `NotebookForLearningCommunitiesEnabled`, `ReportToOriginator`, `SharePointReadonlyForMembers`, `SubscriptionEnabled`, `SubscribeMembersToCalendarEvents`, `SubscribeMembersToCalendarEventsDisabled`, `SubscribeNewGroupMembers`, `WelcomeEmailDisabled`, `WelcomeEmailEnabled`, or `$null`|

For example, `Get-UnifiedGroup -Filter "ResourceBehaviorOptions -eq 'CalendarMemberReadOnly'"`

## ResourceCapacity

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchResourceCapacity_|**Get-Mailbox**|Integer or `$null`|

For example, `Get-Mailbox -Filter "ResourceCapacity -gt 15"`

## ResourceCustom

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|String or `$null`|

You create custom resource properties by using the Set-ResourceConfig cmdlet. For example, `Set-ResourceConfig -ResourcePropertySchema Room/Whiteboard,Equipment/Van`. After you create the properties, you can assign them to room or equipment mailboxes. For example, `Set-Mailbox -Identity "Conference Room 1" -ResourceCustom Whiteboard`.

When you search for values, use the custom resource property that's assigned to the room or equipment mailbox. For example, `Get-Mailbox -Filter "ResourceCustom -eq 'Whiteboard'"`.

## ResourceProvisioningOptions

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-UnifiedGroup**|`Team` or `$null`|

For example, `Get-UnifiedGroup -Filter "ResourceProvisioningOptions -eq 'Team'"`

## ResourceType

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-Recipient**|`Room` (0), `Equipment` (1), or `$null`|

For example, `Get-Mailbox -Filter "ResourceType -eq 'Equipment'"`

## RetainDeletedItemsFor

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_garbageCollPeriod_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A time span value: _dd.hh:mm:ss_ where _dd_ = days, _hh_ = hours, _mm_ = minutes, and _ss_ = seconds.|

You can't use the _Filter_ parameter to look for time span values for this property. Instead, use this syntax: `Get-Mailbox | where "$_.RetainDeletedItemsFor -<Operator> '<TimeSpan>'"`. For example, `Get-Mailbox | where "$_.RetainDeletedItemsFor -gt '14.00:00:00'"`.

## RetentionComment

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchRetentionComment_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "RetentionComment -like '7 years*'"`

## RetentionPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-Recipient**|String or `$null`|

This filter requires the distinguished name of the retention policy. For example, `Get-Mailbox -Filter "RetentionPolicy -eq 'CN=Default MRM Policy,CN=Retention Policies Container,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

To find the distinguished names of retention policies, run this command: `Get-RetentionPolicy | Format-List Name,DistinguishedName`.

## RetentionUrl

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchRetentionURL_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "RetentionUrl -like 'https://intranet.contoso.com/*'"`

## RoleAssignmentPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchRBACPolicyLink_|**Get-Mailbox**|String (wildcards accepted) or `$null`|

This filter requires the distinguished name of the role assignment policy in Exchange Online. For example, `Get-Mailbox -Filter "RoleAssignmentPolicy -eq 'CN=Default Role Assignment Policy,CN=Policies,CN=RBAC,CN=Configuration,CN=contoso.onmicrosoft.com,CN=ConfigurationUnits,DC=NAMPR10A001,DC=PROD,DC=OUTLOOK,DC=COM'"`.

To find the distinguished names of role assignment policies in Exchange Online, run this command: `Get-RoleAssignmentPolicy | Format-List Name,DistinguishedName`.

## RulesQuota

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMDBRulesQuota_|**Get-Mailbox**|A byte quantified size value (for example, `50B` or `128KB`). Unqualified values are treated as bytes.|

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.RulesQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.RulesQuota -lt '256KB'"`.

## SafeRecipientsHash

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchSafeRecipientsHash_|**Get-Recipient**|Blank ( `$null`) or a hashed value.|

Realistically, you can only use this value to filter on blank or non-blank values. For example, `Get-Recipient -Filter 'SafeRecipientsHash -ne $null'.`

## SafeSendersHash

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchSafeSendersHash_|**Get-Recipient**|Blank ( `$null`) or a hashed value.|

Realistically, you can only use this value to filter on blank or non-blank values. For example, `Get-Recipient -Filter 'SafeSendersHash -ne $null'.`

## SamAccountName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_SamAccountName_|**Get-CASMailbox** <br/> **Get-DistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UMMailbox** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "SamAccountName -like 'laura*'"`

## SCLDeleteThresholdInt

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMessageHygieneSCLDeleteThreshold_|**Get-Mailbox**|-2147483648 (SCL value 0), -2147483647 (SCL value 1), -2147483646 (SCL value 2), -2147483645 (SCL value 3), -2147483644 (SCL value 4), -2147483643 (SCL value 5), -2147483642 (SCL value 6), -2147483641 (SCL value 7), -2147483640 (SCL value 8), -2147483639 (SCL value 9) or `$null`|

This property is displayed as **SCLDeleteThreshold** in the results of the command `Get-Mailbox -Identity <MailboxIdentity> | Format-List`, but you need to use the property name **SCLDeleteThresholdInt** in the filter. For example, `Get-Mailbox -Filter "SCLDeleteThresholdInt -ge -2147483640"`.

## SCLJunkThresholdInt

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMessageHygieneSCLJunkThreshold_|**Get-Mailbox**|-2147483648 (SCL value 0), -2147483647 (SCL value 1), -2147483646 (SCL value 2), -2147483645 (SCL value 3), -2147483644 (SCL value 4), -2147483643 (SCL value 5), -2147483642 (SCL value 6), -2147483641 (SCL value 7), -2147483640 (SCL value 8), -2147483639 (SCL value 9) or `$null`|

This property is displayed as **SCLJunkThreshold** in the results of the command `Get-Mailbox -Identity <MailboxIdentity> | Format-List`, but you need to use the property name **SCLJunkThresholdInt** in the filter. For example, `Get-Mailbox -Filter "SCLJunkThresholdInt -ge -2147483645"`.

## SCLQuarantineThresholdInt

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMessageHygieneSCLQuarantineThreshold_|**Get-Mailbox**|-2147483648 (SCL value 0), -2147483647 (SCL value 1), -2147483646 (SCL value 2), -2147483645 (SCL value 3), -2147483644 (SCL value 4), -2147483643 (SCL value 5), -2147483642 (SCL value 6), -2147483641 (SCL value 7), -2147483640 (SCL value 8), -2147483639 (SCL value 9) or `$null`|

This property is displayed as **SCLQuarantineThreshold** in the results of the command `Get-Mailbox -Identity <MailboxIdentity> | Format-List`, but you need to use the property name **SCLQuarantineThresholdInt** in the filter. For example, `Get-Mailbox -Filter "SCLQuarantineThresholdInt -ge -2147483643"`.

## SCLRejectThresholdInt

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchMessageHygieneSCLRejectThreshold_|**Get-Mailbox**|-2147483648 (SCL value 0), -2147483647 (SCL value 1), -2147483646 (SCL value 2), -2147483645 (SCL value 3), -2147483644 (SCL value 4), -2147483643 (SCL value 5), -2147483642 (SCL value 6), -2147483641 (SCL value 7), -2147483640 (SCL value 8), -2147483639 (SCL value 9) or `$null`|

This property is displayed as **SCLRejectThreshold** in the results of the command `Get-Mailbox -Identity <MailboxIdentity> | Format-List`, but you need to use the property name **SCLRejectThresholdInt** in the filter. For example, `Get-Mailbox -Filter "SCLRejectThresholdInt -ge -2147483641"`.

## SendOofMessageToOriginatorEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_oOFReplyToOriginator_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-DistributionGroup -Filter 'SendOofMessageToOriginatorEnabled -eq $true'`.

## ServerLegacyDN

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchHomeServerName_|**Get-CASMailbox** <br/> **Get-Mailbox** <br/> **Get-Recipient** <br/> **Get-UMMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "ServerLegacyDN -like 'Mailbox01'"`.

This is an example of a complete **ServerLegacyDN** value: `/o=Contoso Corporation/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Mailbox01`.

## ServerName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox** <br/> **Get-Mailbox** <br/> **Get-Recipient** <br/> **Get-UMMailbox**|String or `$null`|

For example, `Get-Recipient -Filter "ServerName -eq 'Mailbox01'"`.

## SharingPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchSharingPolicyLink_|**Get-Mailbox** <br/> **Get-Recipient**|String or `$null`|

This filter requires the distinguished name of the sharing policy. For example, `Get-Mailbox -Filter "SharingPolicy -eq 'CN=Custom Sharing Policy,CN=Federation,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

To find the distinguished names of sharing policies, run this command: `Get-SharingPolicy | Format-List Name,DistinguishedName`.

> [!NOTE]
> For the default assignment of the default sharing policy (named Default Sharing Policy) to a mailbox, the value of the **SharingPolicy** property is blank (`$null`).

## Sid

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_objectSid_|**Get-Group** <br/> **Get-LinkedUser** <br/> **Get-SecurityPrincipal** <br/> **Get-User**|String|

For example, `Get-User -Filter "Sid -eq 's-1-5-21-3628364307-1600040346-819251021-2603'"`.

## SidHistory

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_SIDHistory_|**Get-Group** <br/> **Get-LinkedUser** <br/> **Get-User**|String or `$null`|

For example, `Get-User -Filter "SidHistory -eq 's-1-5-21-3628364307-1600040346-819251021-2603'"`.

## SimpleDisplayName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_displayNamePrintable_|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "SimpleDisplayName -like 'lila*'"`.

## SingleItemrecoveryEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'SingleItemRecoveryEnabled -eq $true'`.

## SKUAssigned

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-User**|Boolean (`$true` or `$false`) or `$null`.|

For example, `Get-User -Filter 'SKUAssigned -eq $true'`.

## SourceAnchor

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter 'SourceAnchor -ne $null'`.

## StateOrProvince

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_st_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "StateOrProvince -like 'Carolina*'"`.

## StreetAddress

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_streetAddress_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "StreetAddress -like '36th Ave NE*'"`.

## StsRefreshTokensValidFrom

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchStsRefreshTokensValidFrom_|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|`$null` or a date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-User -Filter "StsRefreshTokensValidFrom -gt '8/1/2017'"`.

## TelephoneAssistant

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_telephoneAssistant_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "TelephoneAssistant -like '206*'"`.

## ThrottlingPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchThrottlingPolicyDN_|**Get-Mailbox**|String or `$null`|

This filter requires the distinguished name of the throttling policy. For example, `Get-Mailbox -Filter "ThrottlingPolicy -eq 'CN=Custom Throttling Policy,CN=Global Settings,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

To find the distinguished names of throttling policies, run this command: `Get-ThrottlingPolicy | Format-List Name,DistinguishedName`.

## Title

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_title_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Title -eq 'Dr.'"`.

## UMAddresses

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUMAddresses_|**Get-UMMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-UMMailbox -Filter 'UMAddresses -ne $null'`.

## UMCallingLineIds

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUMCallingLineIds_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "UMCallingLineIds -like '123*'"`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## UMDtmfMap

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUMDtmfMap_|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UMMailbox** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "UMDtmfMap -like '26297*'"`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## UMEnabled

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-Recipient** <br/> **Get-UMMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'UMEnabled -eq $true'`.

## UMMailboxPolicy

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUMTemplateLink_|**Get-Recipient** <br/> **Get-UMMailbox**|String or `$null`|

This filter requires the distinguished name of the UM mailbox policy. For example, `Get-Recipient -Filter "UMMailboxPolicy -eq 'CN=Contoso Default Policy,CN=UM Mailbox Policies,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

To find the distinguished names of UM mailbox policies, run this command: `Get-UMMailboxPolicy | Format-List Name,DistinguishedName`.

## UMRecipientDialPlanId

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUMRecipientDialPlanLink_|**Get-Recipient**|String or `$null`|

This filter requires the distinguished name of the UM dial plan. For example, `Get-Recipient -Filter "UMMailboxPolicy -eq 'CN=Contoso Dial Plan,CN=UM DialPlan Container,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

To find the distinguished names of UM dial plans, run this command: `Get-UMDialPlan | Format-List Name,DistinguishedName`.

## UpgradeRequest

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-User**|`None` (0), `TenantUpgrade` (1), `PrestageUpgrade` (2), `CancelPrestageUpgrade` (3), `PilotUpgrade` (4), or `TenantUpgradeDryRun` (5),|

For example, `Get-User -Filter "UpgradeRequest -ne 'None'"`.

## UpgradeStatus

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-User**|`None` (0), `NotStarted` (1), `InProgress` (2), `Warning` (3), `Error` (4), `Cancelled` (5), `Complete` (6), or `ForceComplete` (7).|

For example, `Get-User -Filter "UpgradeStatus -ne 'None'"`.

## UsageLocation

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUsageLocation_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient**|String or `$null`|

This filter requires the ISO 3166-1 country name (for example, `United States`), or two-letter country code (for example `US`) for the user in Microsoft 365. For more information, see [Country Codes - ISO 3166](https://www.iso.org/iso-3166-country-codes.html).

For example, `Get-Recipient -Filter 'UsageLocation -eq "US"'`.

## UseDatabaseQuotaDefaults

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_mDBUseDefaults_|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'UseDatabaseQuotaDefaults -eq $false'`.

## UserAccountControl

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_userAccountControl_|**Get-LinkedUser** <br/> **Get-User**|`AccountDisabled`, `DoNotExpirePassword`, or `NormalAccount`|

For example, `Get-User -Filter "UserAccountControl -eq 'NormalAccount'"`.

You can specify multiple values separated by commas, but the order matters. For example, `Get-User -Filter "UserAccountControl -eq 'AccountDisabled,NormalAccount'"` returns different results than `Get-User -Filter "UserAccountControl -eq 'NormalAccount,AccountDisabled'"`.

This multivalued property will only return a match if the property _equals_ the specified value.

## UserPrincipalName

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_userPrincipalName_|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|String (wildcards accepted)|

For example, `Get-User -Filter "UserPrincipalName -like 'julia@*'"`.

## VoiceMailSettings

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchUCVoiceMailSettings_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String or `$null`|

For example, `Get-User -Filter 'VoiceMailSettings -ne $null'`.

## WebPage

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_wWWHomePage_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "WebPage -like 'https://intranet.contoso.com/*'"`.

## WhenChanged

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_WhenChanged_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Recipient -Filter "WhenChanged -gt '8/1/2017 2:00:00 PM'"`.

## WhenChangedUTC

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Recipient -Filter "WhenChangedUTC -gt '8/1/2017 2:00:00 PM'"`.

## WhenCreated

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_whenCreated_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Recipient -Filter "WhenCreated -gt '8/1/2017 2:00:00 PM'"`.

## WhenCreatedUTC

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Recipient -Filter "WhenCreatedUTC -gt '8/1/2017 2:00:00 PM'"`.

## WhenMailboxCreated

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchWhenMailboxCreated_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Recipient -Filter "WhenMailboxCreated -gt '8/1/2017 2:00:00 PM'"`.

## WhenSoftDeleted

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchWhenSoftDeletedTime_|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

This filter requires the _SoftDeleted_ switch in the command for mailboxes.

For example, `Get-Mailbox -SoftDeletedMailbox -Filter "WhenSoftDeleted -gt '8/1/2017 2:00:00 PM'"`.

## WindowsEmailAddress

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_mail_|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "WindowsEmailAddress -like '@fabrikam.com*'"`.

## WindowsLiveID

|LDAP display name|Available on cmdlets|Value|
|---|---|---|
|_msExchWindowsLiveID_|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "WindowsEmailAddress -like '@fabrikam.onmicrosoft.com*'"`.|

## For more information

Exchange 2007 was the first version of Exchange that required OPATH filters instead of LDAP filters. For more information about converting LDAP filters to OPATH filters, see the Microsoft Exchange Team Blog article, [Need help converting your LDAP filters to OPATH?](https://techcommunity.microsoft.com/t5/exchange-team-blog/need-help-converting-your-ldap-filters-to-opath/ba-p/595108).
