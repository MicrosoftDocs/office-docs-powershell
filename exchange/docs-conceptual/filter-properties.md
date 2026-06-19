---
title: "Filterable properties for the Filter parameter"
ms.date: 06/19/2026
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: b02b0005-2fb6-4bc2-8815-305259fa5432
description: "Learn about the filterable properties for the Filter parameter in Exchange Server, Exchange Online, and Security & Compliance PowerShell."
ai-usage: ai-assisted
#customer intent: As an Exchange admin, I want to know which properties I can use with the Filter parameter so that I can build server-side OPATH filters that return the right users and groups.
---

# Filterable properties for the Filter parameter on Exchange cmdlets

You use the _Filter_ parameter to create OPATH filters that find user and group objects based on their property values. The _Filter_ parameter is available in Exchange Server PowerShell, Exchange Online PowerShell, and Security & Compliance PowerShell on the following user and group cmdlets:

|Cmdlet|Exchange Server|Exchange Online|Security & Compliance|
|---|:---:|:---:|:---:|
|[Get-CASMailbox](/powershell/module/exchangepowershell/get-casmailbox)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-Contact](/powershell/module/exchangepowershell/get-contact)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-DistributionGroup](/powershell/module/exchangepowershell/get-distributiongroup)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-DynamicDistributionGroup](/powershell/module/exchangepowershell/get-dynamicdistributiongroup)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-Group](/powershell/module/exchangepowershell/get-group)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-LinkedUser](/powershell/module/exchangepowershell/get-linkeduser)|![Not supported](media/feature_absent_icon.png)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-Mailbox](/powershell/module/exchangepowershell/get-mailbox)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-MailContact](/powershell/module/exchangepowershell/get-mailcontact)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-MailPublicFolder](/powershell/module/exchangepowershell/get-mailpublicfolder)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-MailUser](/powershell/module/exchangepowershell/get-mailuser)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-Recipient](/powershell/module/exchangepowershell/get-recipient)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|
|[Get-RemoteMailbox](/powershell/module/exchangepowershell/get-remotemailbox)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-SecurityPrincipal](/powershell/module/exchangepowershell/get-securityprincipal)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|
|[Get-UMMailbox](/powershell/module/exchangepowershell/get-ummailbox)|![Supported](media/feature_present_icon.png)<sup>\*</sup>|![Not supported](media/feature_absent_icon.png)|![Not supported](media/feature_absent_icon.png)|
|[Get-User](/powershell/module/exchangepowershell/get-user)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|![Supported](media/feature_present_icon.png)|
|[Get-UnifiedGroup](/powershell/module/exchangepowershell/get-unifiedgroup)|![Not supported](media/feature_absent_icon.png)|![Supported](media/feature_present_icon.png)|![Not supported](media/feature_absent_icon.png)|

This article describes the user and group properties that are _confirmed_ to work with the _Filter_ parameter on these cmdlets. Each property has its own section that lists the supported environments, the LDAP display name, the cmdlets where the property is available, and the values that you can filter on.

<sup>\*</sup> **Get-UMMailbox** is available only in Exchange Server 2016 and earlier. Unified Messaging was removed in Exchange Server 2019.

For more information about _recipient_ filters in Exchange PowerShell, see [Recipient filters in Exchange PowerShell commands](recipient-filters.md).

> [!NOTE]
> The _Filter_ parameter is also available on other cmdlets (for example, **Get-MailboxStatistics**, **Get-Queue**, and **Get-Message**). However, the property values on those cmdlets aren't similar to the user and group properties that are described in this article.

As you review the properties, keep the following points in mind:

- A property might be meaningful in only one environment (Exchange Online, on-premises Exchange, hybrid deployments, or Security & Compliance PowerShell). The property can exist on user and group objects in every environment, but hold a meaningful value (something other than blank or `None`) in only one of them.
- A property might correspond to a feature that's no longer used.
- Not all user and group properties have a corresponding Active Directory property. The LDAP display name is "n/a" for these properties, which indicates that Exchange calculates the value.
- A property is filterable only on the cmdlets listed in its section. Using it on a cmdlet that isn't listed returns a "not a recognized filterable property" error, even when that cmdlet returns the same objects.

Keep the following syntax rules in mind when you build a filter:

- Enclose the whole OPATH filter in double quotation marks (`" "`). If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks (`' '`) instead.
- Although the _Filter_ parameter is a string (not a script block), you can also use braces (`{ }`), but only if the filter doesn't contain variables.
- Wildcards (`*`) work only with the `-like` operator, and only on text string properties (for example, `"Property -like 'abc*'"`). Properties that hold non-string values (for example, SIDs, GUIDs, enumerations, or boolean values) require an exact match with `-eq` or `-ne`.
- To look for blank or non-blank property values, use the value `$null` (for example, `'Property -eq $null'` or `'Property -ne $null'`).
- Some non-string properties don't support `$null` comparisons. For example, filtering on a SID property requires an actual value (`-eq '<value>'`) rather than `-eq $null` or `-ne $null`.

For more information about OPATH filter syntax, see [Additional OPATH syntax information](recipient-filters.md#additional-opath-syntax-information).

For filtering considerations for the nine exclusive **Get-EXO\*** cmdlets in the Exchange Online PowerShell module, see [Filters in the Exchange Online PowerShell module](filters-v2.md).

## AcceptMessagesOnlyFrom

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_authOrig_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the individual recipient (a mailbox, mail user, or mail contact).

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Akia Al-Zuhairi").DistinguishedName`), and then use the variable in the filter (`"AcceptMessagesOnlyFrom -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## AcceptMessagesOnlyFromDLMembers

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_dLMemSubmitPerms_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name or canonical distinguished name of the group (a distribution group, mail-enabled security group, or dynamic distribution group).

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-DistributionGroup "Marketing Department").DistinguishedName`), and then use the variable in the filter (`"AcceptMessagesOnlyFromDLMembers -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## ActiveSyncAllowedDeviceIDs

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMobileAllowedDeviceIds_|**Get-CASMailbox**|String (wildcards accepted) or `$null`|

A device ID is a text string that uniquely identifies the device. Use the **Get-MobileDevice** cmdlet to see the devices that have ActiveSync partnerships with a mailbox. To see the device IDs on a mailbox, replace _\<MailboxIdentity\>_ with the name, alias, or email address of the mailbox, and run this command: `Get-MobileDevice -Mailbox <MailboxIdentity> | Format-List`.

After you have the device ID value, you can use it in the filter. For example, `Get-CasMailbox -Filter "(ActiveSyncAllowedDeviceIDs -like 'text1*') -or (ActiveSyncAllowedDeviceIDs -eq 'text2')"`.

## ActiveSyncBlockedDeviceIDs

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMobileBlockedDeviceIds_|**Get-CASMailbox**|String (wildcards accepted) or `$null`|

A device ID is a text string that uniquely identifies the device. Use the **Get-MobileDevice** cmdlet to see the devices that have ActiveSync partnerships with a mailbox. To see the device IDs on a mailbox, replace _\<MailboxIdentity\>_ with the name, alias, or email address of the mailbox, and run this command: `Get-MobileDevice -Mailbox <MailboxIdentity> | Format-List`.

After you have the device ID value, you can use it in a filter. For example, `Get-CasMailbox -Filter "(ActiveSyncBlockedDeviceIDs -like 'text1*') -or (ActiveSyncBlockedDeviceIDs -eq 'text2')"`.

## ActiveSyncEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CasMailbox -Filter 'ActiveSyncEnabled -eq $false'`.

## ActiveSyncMailboxPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMobileMailboxPolicyLink_|**Get-CASMailbox** <br/> **Get-Recipient**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the ActiveSync mailbox policy.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MobileDeviceMailboxPolicy "Default").DistinguishedName`), and then use the variable in the filter (`"ActiveSyncMailboxPolicy -eq '$dn'"`).

> [!NOTE]
> For the default assignment of the default ActiveSync mailbox policy (named Default) to a mailbox, the value of the **ActiveSyncMailboxPolicy** property is blank (`$null`).

## ActiveSyncSuppressReadReceipt

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CasMailbox -Filter 'ActiveSyncSuppressReadReceipt -eq $true'`.

## AddressBookPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchAddressBookPolicyLink_|**Get-Mailbox** <br/> **Get-Recipient**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the address book policy.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-AddressBookPolicy "Contoso ABP").DistinguishedName`), and then use the variable in the filter (`"AddressBookPolicy -eq '$dn'"`).

## AddressListMembership

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_showInAddressBook_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the address list.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-AddressList "All Contacts").DistinguishedName`), and then use the variable in the filter (`"AddressListMembership -eq '$dn'"`).

## AdminDisplayName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Not supported](media/feature_absent_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_adminDisplayName_|**Get-SecurityPrincipal**|String (wildcards accepted) or `$null`|

For example, `Get-SecurityPrincipal -Filter 'AdminDisplayName -ne $null' | Format-Table -Auto Name,AdminDisplayName`.

## AdministrativeUnits

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchAdministrativeUnitLink_|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|`$null`|

For example, `Get-User -Filter 'AdministrativeUnits -ne $null'`.

## AggregatedMailboxGuids

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchAlternateMailboxes_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

For example, `Get-Mailbox -Filter 'AggregatedMailboxGuids -ne $null'`.

## Alias

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_mailNickname_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

For example, `Get-Recipient -Filter "Alias -like 'smith*'"`.

## AllowUMCallsFromNonUsers

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUMListInDirectorySearch_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-UMMailbox** <br/> **Get-User**|`None` (0) or `SearchEnabled` (1)|

For example, `Get-User -Filter "AllowUMCallsFromNonUsers -ne 'SearchEnabled'"`.

## ArbitrationMailbox

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchArbitrationMailbox_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the arbitration mailbox.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Mailbox -Arbitration "SystemMailbox{1f05a927-2e8f-4cbb-9039-2cfb8b95e486}").DistinguishedName`), and then use the variable in the filter (`"ArbitrationMailbox -eq '$dn'"`).

## ArchiveDatabase

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchArchiveDatabaseLink_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|Distinguished name (DN) or `$null`.|

In Exchange Server, this filter requires the distinguished name of the archive mailbox database.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxDatabase "Mailbox Database 1234567890").DistinguishedName`), and then use the variable in the filter (`"ArchiveDatabase -eq '$dn'"`).

In Exchange Online, you can filter only on the presence or absence of an archive database. For example, `Get-Mailbox -Filter "ArchiveDatabase -ne $null"` or `Get-Mailbox -Filter "ArchiveDatabase -eq $null"`. Filtering by a specific archive database value isn't supported.

## ArchiveDomain

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchArchiveAddress_|**Get-Mailbox**|String (wildcards accepted) or `$null`|

This property is used in on-premises Exchange environments to identify the Exchange Online organization that holds the archive mailbox. For example, `Get-Mailbox -Filter "ArchiveDomain -like 'contoso.onmicrosoft.com*'"`.

## ArchiveGuid

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchArchiveGUID_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|String or `$null`|

This filter requires the GUID of the archive mailbox. For example, `Get-Mailbox -Filter "ArchiveGuid -eq '6476f55e-e5eb-4462-a095-f2cb585d648d'"`.

You can find the GUID of archive mailboxes by running this command: `Get-Mailbox -Archive | Format-Table -Auto Name,ArchiveGUID`.

## ArchiveName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchArchiveName_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

This filter requires the name of the archive mailbox. For example, `Get-Mailbox -Filter "ArchiveName -like 'In-Place Archive*'"`.

You can find the names of archive mailboxes by running this command: `Get-Mailbox -Archive | Format-Table -Auto Name,ArchiveName`.

## ArchiveQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchArchiveQuota_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "ArchiveQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "ArchiveQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.ArchiveQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.ArchiveQuota -gt '85GB'"`.

## ArchiveRelease

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchArchiveRelease_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-User**|<ul><li>`None`</li><li>`E14`</li><li>`E15`</li><li>`$null`</li></ul>|

For example, `Get-Recipient -Filter "ArchiveRelease -eq 'E15'"`.

## ArchiveState

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|<ul><li>`None` (0)</li><li>`Local` (1)</li><li>`HostedProvisioned` (2)</li><li>`HostedPending` (3)</li><li>`OnPremise` (4)</li></ul>|

For example, `Get-Recipient -Filter "ArchiveState -eq 'HostedProvisioned'"`.

## ArchiveStatus

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchArchiveStatus_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|`None` (0) or `Active` (1).|

For example, `Get-Recipient -Filter "ArchiveStatus -eq 'Active'"`.

## ArchiveWarningQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchArchiveWarnQuota_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "ArchiveWarningQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "ArchiveWarningQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.ArchiveWarningQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.ArchiveWarningQuota -gt '85GB'"`.

## AssistantName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchAssistantName_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "AssistantName -like 'Julia*'"`.

## AuditEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxAuditEnable_|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'AuditEnabled -eq $true'`.

## AuditLogAgeLimit

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxAuditLogAgeLimit_|**Get-Mailbox** <br/> **Get-UnifiedGroup**|A time span value: _dd.hh:mm:ss_ where _dd_ = days, _hh_ = hours, _mm_ = minutes, and _ss_ = seconds.|

You can't use the _Filter_ parameter to look for time span values for this property. Instead, use this syntax: `Get-Mailbox | where "$_.AuditLogAgeLimit -<Operator> '<TimeSpan>'"`. For example, `Get-Mailbox | where "$_.AuditLogAgeLimit -gt '60.00:00:00'"`.

## AuthenticationPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchAuthPolicyLink_|**Get-User**|Distinguished name (DN) (wildcards accepted) or `$null`.|

This filter requires the distinguished name of the authentication policy.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-AuthenticationPolicy "Block Basic Auth").DistinguishedName`), and then use the variable in the filter (`"AuthenticationPolicy -eq '$dn'"`).

## BlockedSendersHash

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchBlockedSendersHash_|**Get-Recipient**|Blank ( `$null`) or a hashed value.|

Realistically, you can only use this value to filter on blank or non-blank values. For example, `Get-Recipient -Filter 'BlockedSendersHash -ne $null'`.

## c

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_c_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-SecurityPrincipal** <br/> **Get-User**|String (wildcards accepted) or `$null`|

This filter requires the ISO 3166-1 two-letter country code for the user (for example, `US` for the United States). This property is used together with the _co_ and _countryCode_ properties to define the user's country in Active Directory.

For example, `Get-User -Filter "c -eq 'US'"`.

## CalendarLoggingQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchCalendarLoggingQuota_|**Get-Mailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "CalendarLoggingQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "CalendarLoggingQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.CalendarLoggingQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.CalendarLoggingQuota -gt '10GB'"`.

## CalendarRepairDisabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchCalendarRepairDisabled_|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'CalendarRepairDisabled -eq $true'`.

## CertificateSubject

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-User**|String|

The X509 certificate that's published for the user account (visible on the **Published Certificates** tab in Active Directory Users and Computers).

For example, `Get-User -Filter "CertificateSubject -eq 'X509:<I>C=US,O=InternetCA,CN=APublicCertificateAuthority<S>C=US,O=Fabrikam,OU=Sales,CN=Felipe Apodaca'"`.

## City

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_l_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "City -eq 'Redmond'"`.

## Company

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_company_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Company -like 'Contoso*'"`.

## ComplianceTagHoldApplied

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-MailUser**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'ComplianceTagHoldApplied -eq $true'`.

## ConsumerNetID

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-User**|String or `$null`|

For example, `Get-User -Filter 'ConsumerNetID -ne $null'`.

## CountryCode

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_countryCode_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-SecurityPrincipal** <br/> **Get-User**|Integer|

This filter requires the ISO 3166-1 three-digit country code for the user (for example, `840` for the United States). This property is used together with the _c_ and _co_ properties to define the user's country in Active Directory.

For example, `Get-User -Filter "countryCode -eq 796"`.

## CountryOrRegion

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-SecurityPrincipal** <br/> **Get-User**|String (wildcards accepted)|

This calculated property filters on the country/region using either the ISO 3166-1 two-letter country code (for example, `US`) or the country name (for example, `United States`). The underlying _c_, _co_, and _countryCode_ properties store these values, and they're automatically configured when you select a user's country in Active Directory Users and Computers ( **Address** tab > **Country/region** field) or the Exchange admin center (user properties > **Contact information** tab > **Country/Region** field).

For example, `Get-User -Filter "CountryOrRegion -like 'United*'"`.

## CustomAttribute1 to CustomAttribute15

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_extensionAttribute1_ to _extensionAttribute15_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "CustomAttribute8 -like 'audited*'"`.

## Database

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Not supported](media/feature_absent_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_homeMDB_|**Get-Mailbox** <br/> **Get-Recipient**|Distinguished name (DN).|

This filter requires the distinguished name of the mailbox database.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxDatabase "Mailbox Database 1234567890").DistinguishedName`), and then use the variable in the filter (`"Database -eq '$dn'"`).

## DefaultPublicFolderMailbox

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchPublicFolderMailbox_|**Get-Mailbox**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name or canonical distinguished name of the public folder mailbox.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Mailbox -PublicFolder "PF Mailbox01").DistinguishedName`), and then use the variable in the filter (`"DefaultPublicFolderMailbox -eq '$dn'"`).

## DeletedItemFlags

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_deletedItemFlags_|**Get-Mailbox** <br/> **Get-SecurityPrincipal**|<ul><li>`DatabaseDefault` (0)</li><li>`RetainUntilBackupOrCustomPeriod` (3)</li><li>`RetainForCustomPeriod` (5)</li></ul>|

For example, `Get-Mailbox -Filter "DeletedItemFlags -ne 'DatabaseDefault'"`.

## DeliverToMailboxAndForward

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_deliverAndRedirect_|**Get-Mailbox** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-MailPublicFolder**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'DeliverToMailboxAndForward -eq $true'`.

## Department

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_department_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "Department -like 'Engineering*'"`.

## DirectReports

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_directReports_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name or canonical distinguished name of the direct report.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Angela Gruber").DistinguishedName`), and then use the variable in the filter (`"DirectReports -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## DisabledArchiveDatabase

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchDisabledArchiveDatabaseLink_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|Distinguished name (DN) or `$null`.|

In Exchange Server, this filter requires the distinguished name of the disabled archive mailbox database.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxDatabase "Mailbox Database 1234567890").DistinguishedName`), and then use the variable in the filter (`"DisabledArchiveDatabase -eq '$dn'"`).

In Exchange Online, you can filter only on the presence or absence of a disabled archive database. For example, `Get-Mailbox -Filter "DisabledArchiveDatabase -ne $null"` or `Get-Mailbox -Filter "DisabledArchiveDatabase -eq $null"`. Filtering by a specific archive database value isn't supported.

## DisabledArchiveGuid

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchDisabledArchiveDatabaseGUID_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

This filter requires the GUID of the disabled archive mailbox. For example, `Get-Mailbox -Filter "DisabledArchiveGuid -eq '6476f55e-e5eb-4462-a095-f2cb585d648d'"`.

You can find the GUID of archive mailboxes by running this command: `Get-Mailbox -Archive | Format-Table -Auto Name,ArchiveGUID`.

## DisplayName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_displayName_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

For example, `Get-Recipient -Filter "DisplayName -like 'Julia*'"`.

## DistinguishedName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_distinguishedName_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|Distinguished name (DN).|

This filter requires the distinguished name of the recipient.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Bishamon Tamura").DistinguishedName`), and then use the variable in the filter (`"DistinguishedName -eq '$dn'"`).

## EcpEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CASMailbox -Filter 'EcpEnabled -eq $false'`.

## EmailAddresses

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_proxyAddresses_|**Get-CASMailbox** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UMMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

For example, `Get-Recipient -Filter "EmailAddresses -like 'marketing*'"`.

When you use a complete email address, you don't need to account for the `smtp:` prefix. If you use wildcards, you do. For example, if `"EmailAddresses -eq 'lila@fabrikam.com'"` returns a match, `"EmailAddresses -like 'lila*'"` doesn't return a match, but `"EmailAddresses -like 'smtp:lila*'"` returns a match.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## EmailAddressPolicyEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-Recipient -Filter 'EmailAddressPolicyEnabled -eq $false'`.

## EntryId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchPublicFolderEntryId_|**Get-MailPublicFolder**|String (wildcards accepted)|

For example, `Get-MailPublicFolder -Filter "EntryId -like '60000*'"`.

You can find the entry IDs of mail-enabled public folders by running this command: `Get-MailPublicFolder | Format-List Name,EntryId`.

## EwsApplicationAccessPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchEwsApplicationAccessPolicy_|**Get-CASMailbox**|<ul><li>`EnforceAllowList`</li><li>`EnforceBlockList`</li><li>`$null`</li></ul>|

For example, `Get-CASMailbox -Filter "EwsApplicationAccessPolicy -eq 'EnforceAllowList'"`.

## EwsEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchEwsEnabled_|**Get-CASMailbox**|0 (disabled), 1 (enabled) or `$null`.|

For example, `Get-CASMailbox -Filter "EwsEnabled -eq 1"`.

## ExchangeGuid

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxGuid_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String|

For example, `Get-Mailbox -Filter "ExchangeGuid -eq 'c80a753d-bd4a-4e19-804a-6344d833ecd8'"`.

To find the Exchange GUID of a recipient, replace _\<RecipientIdentity\>_ with the name, alias, or email address of the recipient, and run this command: `Get-Recipient -Identity "<RecipientIdentity>" | Format-List Name,ExchangeGuid`.

Note that an object's Exchange GUID value is different than its GUID value. Also, the Exchange GUID value for non-mailboxes (mail contacts, mail users, distribution groups, dynamic distribution groups, mail-enabled security groups, and mail-enabled public folders) is `00000000-0000-0000-0000-000000000000`.

## ExchangeUserAccountControl

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUserAccountControl_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|`None` (0) or `AccountDisabled` (2)|

For example, `Get-Mailbox -Filter "ExchangeUserAccountControl -eq 'AccountDisabled'"`.

## ExchangeVersion

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchVersion_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User**|Integer|

This property contains the earliest version of Exchange that you can use to manage the recipient. The property values that you see are different than the values that you need to use in the filter. To see the **ExchangeVersion** property values, run this command: `Get-Recipient | Format-Table Name,RecipientType,ExchangeVersion`.

For the Exchange 2010 value `0.10 (14.0.100.0)`, use the value 44220983382016 in the filter.

For the Exchange 2013 or Exchange 2016 value `0.20 (15.0.0.0)`, use the value 88218628259840 in the filter.

For example, `Get-Recipient -Filter "ExchangeVersion -lt 88218628259840"`.

## ExpansionServer

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchExpansionServerName_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Recipient**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "ExpansionServer -like 'Mailbox01*'"`.

For an exact match, you need to use the **ExchangeLegacyDN** value of the server. For example, `Get-Recipient -Filter "ExpansionServer -eq '/o=Contoso Corporation/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Mailbox01'"`

You can find the **ExchangeLegacyDN** value by running this command: `Get-ExchangeServer | Format-List Name,ExchangeLegacyDN`.

## ExtensionCustomAttribute1 to ExtensionCustomAttribute5

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchExtensionCustomAttribute1_ to _msExchExtensionCustomAttribute5_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "ExtensionCustomAttribute3 -like 'audited*'"`.

## ExternalDirectoryObjectId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchExternalDirectoryObjectId_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String or `$null`|

For example, `Get-Recipient -Filter 'ExternalDirectoryObjectId -ne $null'`.

## ExternalEmailAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_targetAddress_|**Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "ExternalEmailAddress -like '@fabrikam.com*'"`.

When you use a complete email address, you don't need to account for the `smtp:` prefix. If you use wildcards, you do. For example, if `"ExternalEmailAddress -eq 'lila@fabrikam.com'"` returns a match, `"ExternalEmailAddress -like 'lila*'"` doesn't return a match, but `"ExternalEmailAddress -like 'smtp:lila*'"` returns a match.

## ExternalOofOptions

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchExternalOOFOptions_|**Get-Mailbox**|`External` (0) or `InternalOnly` (1)|

For example, `Get-Mailbox -Filter "ExternalOofOptions -eq 'External'"`.

## Fax

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_facsimileTelephoneNumber_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Fax -like '206*'"`.

## FirstName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_givenName_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "FirstName -like 'Chris*'"`.

## ForwardingAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_altRecipient_|**Get-Mailbox** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name or canonical distinguished name of the forwarding recipient.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Daigoro Aoki").DistinguishedName`), and then use the variable in the filter (`"ForwardingAddress -eq '$dn'"`).

## ForwardingSmtpAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchGenericForwardingAddress_|**Get-Mailbox**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "ForwardingSmtpAddress -like '@fabrikam.com*'"`.

When you use a complete email address, you don't need to account for the `smtp:` prefix. If you use wildcards, you do. For example, if `"ForwardingSmtpAddress -eq 'lila@fabrikam.com'"` returns a match, `"ForwardingSmtpAddress -like 'lila*'"` doesn't return a match, but `"ForwardingSmtpAddress -like 'smtp:lila*'"` returns a match.

## GeneratedOfflineAddressBooks

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchOABGeneratingMailboxBL_|**Get-Mailbox**|Distinguished name (DN) or `$null`.|

This property is only meaningful on arbitration mailboxes, so you need to use the _Arbitration_ switch in the filter command. Also, this filter requires the distinguished name of the offline address book.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-OfflineAddressBook "Default Offline Address Book").DistinguishedName`), and then use the variable in the filter (`"GeneratedOfflineAddressBooks -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## GrantSendOnBehalfTo

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_publicDelegates_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name or canonical distinguished name of the mail-enabled security principal (mailbox, mail user, or mail-enabled security group).

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Elizabeth Brunner").DistinguishedName`), and then use the variable in the filter (`"GrantSendOnBehalfTo -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## GroupExternalMemberCount

**Applicable**:

- ![Not supported](media/feature_absent_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-UnifiedGroup**|Integer|

For example, `Get-UnifiedGroup -Filter "GroupExternalMemberCount -gt 0"`.

## GroupMemberCount

**Applicable**:

- ![Not supported](media/feature_absent_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-UnifiedGroup**|Integer|

For example, `Get-UnifiedGroup -Filter "GroupMemberCount -gt 100"`.

## GroupType

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_groupType_|**Get-DistributionGroup** <br/> **Get-Group** <br/> **Get-UnifiedGroup**|<ul><li>`None` (0)</li><li>`Global` (2)</li><li>`DomainLocal` (4)</li><li>`BuiltinLocal` (5)</li><li>`Universal` (8)</li><li>`SecurityEnabled` (-2147483648)</li></ul>|

Distribution groups have the value `Universal`, and mail-enabled security groups have the value `Universal, SecurityEnabled`. You can specify multiple values separated by commas, and the order doesn't matter. For example, `Get-DistributionGroup -Filter "GroupType -eq 'Universal,SecurityEnabled'"` returns the same results as `Get-DistributionGroup -Filter "GroupType -eq 'SecurityEnabled,Universal'"`.

This multivalued property returns a match only if the property _equals_ the specified value.

## Guid

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_objectGuid_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String|

For example, `Get-Recipient -Filter "Guid -eq '8a68c198-be28-4a30-83e9-bffb760c65ba'"`.

You can find the GUIDs of recipients by running this command: `Get-Recipient | Format-List Name,RecipientType,Guid`.

Note that an object's GUID value is different than its Exchange GUID value.

## HasActiveSyncDevicePartnership

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox** <br/> **Get-Recipient**|Boolean (`$true` or `$false`)|

For example, `Get-Recipient -Filter 'HasActiveSyncDevicePartnership -eq $true'`.

## HiddenFromAddressListsEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchHideFromAddressLists_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-Recipient -Filter 'HiddenFromAddressListsEnabled -eq $true'`.

## HiddenGroupMembershipEnabled

**Applicable**:

- ![Not supported](media/feature_absent_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_hideDLMembership_|**Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-UnifiedGroup -Filter 'HiddenGroupMembershipEnabled -eq $true'`.

## HomePhone

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_homePhone_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "HomePhone -like '206*'"`.

## Id

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_distinguishedName_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-SecurityPrincipal** <br/> **Get-UnifiedGroup**|Distinguished name (DN).|

This filter requires the distinguished name or canonical distinguished name of the recipient.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Felipe Apodaca").DistinguishedName`), and then use the variable in the filter (`"Id -eq '$dn'"`).

## IgnoreMissingFolderLink

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-MailPublicFolder**|Boolean (`$true` or `$false`)|

For example, `Get-MailPublicFolder -Filter 'IgnoreMissingFolderLink -eq $true'`.

## ImapEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CASMailbox -Filter 'ImapEnabled -eq $false'`.

## ImmutableId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchGenericImmutableId_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

For example, `Get-Mailbox -Filter 'ImmutableId -ne $null'`.

## IncludeInGarbageCollection

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IncludeInGarbageCollection -eq $true'`.

## Initials

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_initials_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Initials -like 'B.'"`.

## InPlaceHolds

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUserHoldPolicies_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String|

This filter requires the **InPlaceHoldIdentity** value of the mailbox search. For example, `Get-Mailbox -Filter "InPlaceHolds -eq '9d0f81154cc64c6b923ecc0be5ced0d7'"`.

To find the **InPlaceHoldIdentity** values of mailbox searches, run this command: `Get-MailboxSearch | Format-Table Name,InPlaceHoldIdentity`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## InPlaceHoldsRaw

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-User**|String|

This filter requires the **InPlaceHoldIdentity** value of the mailbox search. For example, `Get-Mailbox -Filter "InPlaceHoldsRaw -eq '9d0f81154cc64c6b923ecc0be5ced0d7'"`.

To find the **InPlaceHoldIdentity** values of mailbox searches, run this command: `Get-MailboxSearch | Format-Table Name,InPlaceHoldIdentity`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## IsDirSynced

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchIsMSODirsynced_|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-User -Filter 'IsDirSynced -eq $true'`.

## IsExcludedFromServingHierarchy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsExcludedFromServingHierarchy -eq $true'`.

## IsHierarchyReady

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsHierarchyReady -eq $false'`.

## IsHierarchySyncEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsHierarchySyncEnabled -eq $false'`.

## IsInactiveMailbox

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsInactiveMailbox -eq $false'`.

## IsLinked

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-User**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsLinked -eq $true'`.

## IsMailboxEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsMailboxEnabled -eq $false'`.

## IsResource

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsResource -eq $true'`.

## IsSecurityPrincipal

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-User**|Boolean (`$true` or `$false`)|

For example, `Get-User -Filter 'IsSecurityPrincipal -eq $false'`.

## IsShared

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsShared -eq $true'`.

## IsSoftDeletedByDisable

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsSoftDeletedByDisable -eq $true'`.

## IsSoftDeletedByRemove

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'IsSoftDeletedByRemove -eq $true'`.

## IssueWarningQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_mDBStorageQuota_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "IssueWarningQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "IssueWarningQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.IssueWarningQuota -<Operator> '<Size>'`". For example, `Get-Mailbox | where "$_.IssueWarningQuota -lt '50GB'"`.

## JournalArchiveAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String|

This property uses an SMTP email address. For example, `Get-Mailbox -Filter "JournalArchiveAddress -eq 'michelle@contoso.com'"`.

## LanguagesRaw

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUserCulture_|**Get-Mailbox**|String (wildcards accepted) or `$null`|

This property is named **Languages** in the properties of a mailbox, and it contains the language preference for the mailbox in the format `<ISO 639 two-letter culture code>-<ISO 3166 two-letter subculture code>`. For example, United States English is `en-US`. For more information, see [CultureInfo Class](/dotnet/api/system.globalization.cultureinfo).

You can specify multiple values separated by commas, but the order matters. For example, `Get-Mailbox -Filter "LanguagesRaw -eq 'en-US,es-MX'"` returns different results than `Get-Mailbox -Filter "LanguagesRaw -eq 'es-MX,en-US'"`.

For single values, this multivalued property returns a match only if the property _contains_ the specified value.

## LastExchangeChangedTime

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchLastExchangeChangedTime_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|`$null` or a date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Mailbox -Filter 'LastExchangeChangedTime -ne $null'`.

## LastName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_sn_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "LastName -like 'Martin*'"`.

## LegacyExchangeDN

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_legacyExchangeDN_|**Get-CASMailbox** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

For example, `Get-User -Filter "LegacyExchangeDN -like 'Osca*'"`.

Wildcards in filters on this property are supported only in Exchange Server. In Exchange Online and Security & Compliance PowerShell, use an exact value match instead.

You can find LegacyExchangeDN values for users by running this command: `Get-User | Format-List Name,LegacyExchangeDN`

## LitigationHoldDate

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchLitigationHoldDate_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|`$null` or a date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Mailbox -Filter "LitigationHoldDate -gt '8/13/2017'"`.

## LitigationHoldEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'LitigationHoldEnabled -eq $true'`.

## LitigationHoldOwner

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchLitigationHoldOwner_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

This property uses the user principal name of the litigation hold owner. For example, `Get-Mailbox -Filter "LitigationHoldOwner -eq 'agruber@contoso.com'"`.

## MailboxContainerGUID

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxContainerGuid_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String or `$null`|

For example, `Get-Mailbox -Filter 'MailboxContainerGUID -ne $null'`.

## MailboxMoveBatchName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveBatchName_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

This property includes the name of the migration batch. For example, `Get-Mailbox -Filter "MailboxMoveBatchName -like 'LocalMove 01*'"`.

You can find the names of migration batches by running the **Get-MigrationBatch** command. Note that migration batches that you create in the Exchange admin center use the naming convention `MigrationService:<MigrationBatchName>`.

## MailboxMoveFlags

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveFlags_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|For valid values, see the description of the _Flags_ parameter in [Get-MoveRequest](/powershell/module/exchangepowershell/get-moverequest#-flags).|

For example, `Get-Mailbox -Filter "MailboxMoveFlags -ne 'None'"`.

You can specify multiple values separated by commas, and the order doesn't matter. For example, `Get-Recipient -Filter "MailboxMoveFlags -eq 'IntraOrg,Pull'"` returns the same results as `Get-Recipient -Filter "MailboxMoveFlags -eq 'Pull,IntraOrg'"`.

This multivalued property returns a match only if the property _equals_ the specified value.

## MailboxMoveRemoteHostName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveRemoteHostName_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|String or `$null`|

For example, `Get-Mailbox -Filter "MailboxMoveRemoteHostName -eq 'mail.contoso.com'"`.

## MailboxMoveSourceMDB

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveSourceMDBLink_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the source mailbox database.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxDatabase "Mailbox Database 1234567890").DistinguishedName`), and then use the variable in the filter (`"MailboxMoveSourceMDB -eq '$dn'"`).

## MailboxMoveStatus

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveStatus_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|For valid values, see the description of the _MoveStatus_ parameter in [Get-MoveRequest](/powershell/module/exchangepowershell/get-moverequest#-movestatus).|

For example, `Get-Mailbox -Filter "MailboxMoveStatus -eq 'Completed'"`.

## MailboxMoveTargetMDB

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxMoveTargetMDBLink_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the target mailbox database.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxDatabase "Mailbox Database 1234567890").DistinguishedName`), and then use the variable in the filter (`"MailboxMoveTargetMDB -eq '$dn'"`).

## MailboxPlan

**Applicable**:

- ![Not supported](media/feature_absent_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchParentPlanLink_|**Get-Mailbox**|Distinguished name (DN).|

Mailbox plans correspond to Microsoft 365 license types. The availability of license plans is determined by the selections that you make when you enroll your domain.

Friendly identifier values like name don't work in the filter.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-MailboxPlan "ExchangeOnlineEnterprise").DistinguishedName`), and then use the variable in the filter (`"MailboxPlan -eq '$dn'"`).

## MailboxRelease

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxRelease_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-User**|<ul><li>`None`</li><li>`E14`</li><li>`E15`</li><li>`$null`</li></ul>|

For example, `Get-Recipient -Filter "MailboxRelease -eq 'E15'"`.

## MailTipTranslations

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchSenderHintTranslations_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted) or `$null`|

When you use this property in a filter, you need to account for the leading and trailing HTML tags. For example, `Get-DistributionGroup -Filter "MailTipTranslations -like 'is not monitored.*'"`.

## ManagedBy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_managedBy_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-Recipient** <br/> **Get-UnifiedGroup**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name or canonical distinguished name of the group owner (a mail-enabled security principal, which is a mailbox, mail user, or mail-enabled security group).

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Gabriela Laureano").DistinguishedName`), and then use the variable in the filter (`"ManagedBy -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## ManagedFolderMailboxPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMailboxTemplateLink_|**Get-Mailbox** <br/> **Get-Recipient**|Distinguished name (DN) or `$null`.|

Managed folder mailbox policies aren't available in Exchange 2013 or later.

For example, `Get-Mailbox -Filter 'ManagedFolderMailboxPolicy -eq $null'`.

This filter requires the distinguished name of the managed folder mailbox policy.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-ManagedFolderMailboxPolicy "MFM Inbox Policy").DistinguishedName`), and then use the variable in the filter (`"ManagedFolderMailboxPolicy -eq '$dn'"`).

## Manager

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_manager_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name or canonical distinguished name of the manager (a mailbox or mail user).

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Hyun-Ae Rim").DistinguishedName`), and then use the variable in the filter (`"Manager -eq '$dn'"`).

## MAPIEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CASMailbox -Filter 'MAPIEnabled -eq $false'`.

## MasterAccountSid

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMasterAccountSid_|**Get-Mailbox** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-SecurityPrincipal** <br/> **Get-User**|String or `$null`|

For example, `Get-Mailbox -Filter "MasterAccountSid -eq 'S-1-5-10'"`.

This value is blank ( `$null`) for mailboxes with associated user accounts, and `S-1-5-10` (Self) for mailboxes without associated user accounts (for example, shared mailboxes, resource mailboxes, discovery search mailboxes, arbitration mailboxes, and public folder mailboxes).

## MaxBlockedSenders

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMaxBlockedSenders_|**Get-Mailbox**|Integer or `$null`|

For example, `Get-Mailbox -Filter "MaxBlockedSenders -gt 0"`.

## MaxReceiveSize

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_delivContLength_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|A byte quantified size value (for example, `75MB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "MaxReceiveSize -eq 'Unlimited'"` or `Get-Mailbox -Filter "MaxReceiveSize -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.MaxReceiveSize -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.MaxReceiveSize -gt '50GB'"`.

## MaxSafeSenders

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMaxSafeSenders_|**Get-Mailbox**|Integer or `$null`|

For example, `Get-Mailbox -Filter "MaxSafeSenders -gt 0"`.

## MaxSendSize

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_submissionContLength_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|A byte quantified size value (for example, `75MB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "MaxSendSize -eq 'Unlimited'"` or `Get-Mailbox -Filter "MaxSendSize -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.MaxReceiveSize -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.MaxSendSize -gt '50GB'"`.

## MemberDepartRestriction

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchGroupDepartRestriction_|**Get-DistributionGroup**|<ul><li>`Closed` (0)</li><li>`Open` (1)</li><li>`ApprovalRequired` (2)</li></ul>|

For example, `Get-DistributionGroup -Filter "MemberDepartRestriction -eq 'ApprovalRequired'"`.

## MemberJoinRestriction

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchGroupJoinRestriction_|**Get-DistributionGroup**|<ul><li>`Closed` (0)</li><li>`Open` (1)</li><li>`ApprovalRequired` (2)</li></ul>|

For example, `Get-DistributionGroup -Filter "MemberJoinRestriction -eq 'ApprovalRequired'"`.

## MemberOfGroup

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_memberOf_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name or canonical distinguished name of the distribution group or mail-enabled security group.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-DistributionGroup "Marketing Department").DistinguishedName`), and then use the variable in the filter (`"MemberOfGroup -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## Members

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_member_|**Get-DistributionGroup** <br/> **Get-Group** <br/> **Get-Recipient**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name or canonical distinguished name of the group member.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Jacob Berger").DistinguishedName`), and then use the variable in the filter (`"Members -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## MobilePhone

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_mobile_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "MobilePhone -like '555*'"`.

## ModeratedBy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchModeratedByLink_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Distinguished name (DN).|

This filter requires the distinguished name or canonical distinguished name of the group moderator (a mail-enabled security principal, which is a mailbox, mail-user, or mail-enabled security group).

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Joanne Schwarz").DistinguishedName`), and then use the variable in the filter (`"ModeratedBy -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## ModerationEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchEnableModeration_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-DistributionGroup -Filter 'ModerationEnabled -eq $true'`.

## Name

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_name_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

For example, `Get-User -Filter "Name -like 'Laura*'"`.

## NetID

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-User**|String|

This property is populated for Exchange Online mailboxes in hybrid environments. A sample value is `1003BFFD9A0CFA03`.

For example, `Get-User -Filter 'NetId -ne $null'`.

## Notes

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_info_|**Get-Contact** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Notes -like 'Events Team*'"`.

## ObjectCategory

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_objectCategory_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String|

This filter requires the canonical distinguished name of the object. The value uses the syntax `<domain>/Configuration/Schema/<Type>`.

Valid _\<Type\>_ values are:

- `Person` for mailboxes, mail users, and mail contacts
- `Group` for distribution groups, mail-enabled security groups, and Microsoft 365 Groups
- `ms-Exch-Public-Folder` for mail-enabled public folders
- `ms-Exch-Dynamic-Distribution-List` for dynamic distribution groups

For example, `Get-Recipient -Filter "ObjectCategory -eq 'contoso.com/Configuration/Schema/Group'"`.

## ObjectClass

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_objectClass_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String|

The value of this property is `top, person, organizationalPerson, user` for mailboxes and mail users, `top, person, organizationalPerson, contact` for mail contacts, `top, group` for distribution groups, mail-enabled security groups and Microsoft 365 Groups, `msExchDynamicDistributionList` for dynamic distribution groups and `top, publicFolder` for mail-enabled public folders

For example, `Get-Recipient -Filter "ObjectClass -eq 'Contact'"`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## Office

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_physicalDeliveryOfficeName_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Office -like '22*'"`.

## OfflineAddressBook

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUseOAB_|**Get-Mailbox**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the offline address book.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-OfflineAddressBook "Default Offline Address Book").DistinguishedName`), and then use the variable in the filter (`"OfflineAddressBook -eq '$dn'"`).

## OnPremisesObjectId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-MailPublicFolder**|String or `$null`|

For example, `Get-MailPublicFolder -Filter 'OnPremisesObjectId -ne $null'`.

## OperatorNumber

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server<sup>\*</sup>
- ![Not supported](media/feature_absent_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

<sup>\*</sup> **Get-UMMailbox** is available only in Exchange Server 2016 and earlier. Unified Messaging was removed in Exchange Server 2019.

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUMOperatorNumber_|**Get-UMMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-UMMailbox -Filter "OperatorNumber -eq 5"`.

## OtherFax

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_otherFacsimileTelephoneNumber_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "OtherFax -like '206*'"`.

## OtherHomePhone

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_otherHomePhone_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "OtherHomePhone -like '206*'"`.

## OtherTelephone

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_otherTelephone_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "OtherTelephone -like '206*'"`.

## OWAEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

The filter operates backwards. For example, `Get-CASMailbox -Filter 'OWAEnabled -eq $true'` returns mailboxes where the **OWAEnabled** property is `False`, and `Get-CASMailbox -Filter 'OWAEnabled -eq $false'` returns mailboxes where the **OWAEnabled** property is `True`

## OWAforDevicesEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchOmaAdminWirelessEnable_|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CASMailbox -Filter 'OWAForDevicesEnabled -eq $true'`.

## OWAMailboxPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchOWAPolicy_|**Get-CASMailbox** <br/> **Get-Recipient**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the Outlook on the web mailbox policy (formerly known as an Outlook Web App mailbox policy).

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-OwaMailboxPolicy "Default").DistinguishedName`), and then use the variable in the filter (`"OWAMailboxPolicy -eq '$dn'"`).

## Pager

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_pager_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Pager -like '206*'"`.

## PersistedCapabilities

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String|

Typically, the value of this property something other than `$null` (blank) for Microsoft 365 accounts and mailboxes. For more information about the valid property values, see [Capability enumeration](/previous-versions/office/exchange-server-api/ff441134(v=exchg.150)).

For example, `Get-Mailbox -Filter 'PersistedCapabilities -ne $null'`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## Phone

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_telephoneNumber_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Phone -like '206*'"`.

## PhoneProviderId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server<sup>\*</sup>
- ![Not supported](media/feature_absent_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

<sup>\*</sup> **Get-UMMailbox** is available only in Exchange Server 2016 and earlier. Unified Messaging was removed in Exchange Server 2019.

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUMPhoneProvider_|**Get-UMMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-UMMailbox -Filter "PhoneProviderId -like '206*'"`.

## PhoneticDisplayName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msDS-PhoneticDisplayName_|**Get-Contact** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-MailPublicFolder** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "PhoneticDisplayName -like 'Lila*'"`.

## PoliciesExcluded

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchPoliciesExcluded_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String or `$null`|

For example, `Get-Recipient -Filter 'PoliciesExcluded -ne $null'`.

## PoliciesIncluded

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchPoliciesIncluded_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|String or `$null`|

For example, `Get-Recipient -Filter 'PoliciesIncluded -eq $null'`.

## PopEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-CASMailbox -Filter 'POPEnabled -eq $false'`.

## PostalCode

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_postalCode_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "PostalCode -eq 90210"`.

## PostOfficeBox

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_postOfficeBox_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "PostOfficeBox -like '555*'"`.

## PreviousRecipientTypeDetails

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchPreviousRecipientTypeDetails_|**Get-LinkedUser** <br/> **Get-User**|String or `$null`|

For valid values, see the description of the _RecipientTypeDetails_ parameter in [Get-Recipient](/powershell/module/exchangepowershell/get-recipient#-recipienttypedetails).

For example, `Get-User -Filter "PreviousRecipientTypeDetails -eq 'UserMailbox'"`.

## PrimarySmtpAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UMMailbox** <br/> **Get-UnifiedGroup**|String (wildcards accepted)|

Don't use the _PrimarySmtpAddress_ property; use the _EmailAddresses_ property instead. Any filter that uses the _PrimarySmtpAddress_ property also searches values in the _EmailAddresses_ property. For example, if a mailbox has the primary email address dario@contoso.com, and the additional proxy addresses dario2@contoso.com and dario3@contoso.com, all of the following filters return that mailbox in the result: `"PrimarySmtpAddress -eq 'dario@contoso.com'"`, `"PrimarySmtpAddress -eq 'dario2@contoso.com'"`, or `"PrimarySmtpAddress -eq 'dario3@contoso.com'"`.

## ProhibitSendQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_mDBOverQuotaLimit_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "ProhibitSendQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "ProhibitSendQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.ProhibitSendQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.ProhibitSendQuota -lt '70GB'"`.

## ProhibitSendReceiveQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_mDBOverHardQuotaLimit_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "ProhibitSendReceiveQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "ProhibitSendReceiveQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.ProhibitSendReceiveQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.ProhibitSendReceiveQuota -lt '70GB'"`.

## ProtocolSettings

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_protocolSettings_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

The default value of this property on mailboxes is `RemotePowerShell§1`. This property is populated with additional values when you use Set-CASMailbox to disable protocols (for example, POP3 or IMAP4).

For example, `Get-Mailbox -Filter "ProtocolSettings -like 'POP3*'"`.

## PublicFolderContacts

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_pFContacts_|**Get-MailPublicFolder**|Distinguished name (DN) or `$null`.|

This property is displayed as **Contacts** in the results of the command `Get-MailPublicFolder -Identity <PublicFolderIdentity> | Format-List`, but you need to use the property name **PublicFolderContacts** in the filter.

This filter requires the distinguished name or canonical distinguished name of the public folder contact.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Kathleen Reiter").DistinguishedName`), and then use the variable in the filter (`"PublicFolderContacts -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## QueryBaseDN

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchQueryBaseDN_|**Get-Mailbox**|String or `$null`|

This property was used in Exchange 2007 global address list segregation to specify a location in Active Directory. This feature was replaced by address book policies in Exchange 2010 Service Pack 2, so the value of this property should always be blank ( `$null`).

For example, `Get-Mailbox -Filter 'QueryBaseDN -ne $null'`.

## RecipientContainer

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchDynamicDLBaseDN_|**Get-DynamicDistributionGroup**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name or canonical distinguished name of the organizational unit or container in Active Directory.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-OrganizationalUnit "contoso.com/Users").DistinguishedName`), and then use the variable in the filter (`"RecipientContainer -eq '$dn'"`).

## RecipientLimits

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchRecipLimit_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|Integer or `Unlimited`|

For example, `Get-Mailbox -Filter "RecipientLimits -ne 'Unlimited'"`.

## RecipientType

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-User** <br/> **Get-UnifiedGroup**|<ul><li>`DynamicDistributionGroup`</li><li>`MailContact`</li><li>`MailNonUniversalGroup`</li><li>`MailUniversalDistributionGroup`</li><li>`MailUniversalSecurityGroup`</li><li>`MailUser`</li><li>`PublicFolder`</li><li>`UserMailbox`</li></ul>|

For example, `Get-Recipient -Filter "RecipientType -eq 'MailContact'"`.

## RecipientTypeDetails

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-User** <br/> **Get-UnifiedGroup**|String|

For valid values, see the description of the _RecipientTypeDetails_ parameter in [Get-Recipient](/powershell/module/exchangepowershell/get-recipient#-recipienttypedetails).

For example, `Get-Recipient -Filter "RecipientTypeDetails -eq 'SharedMailbox'"`.

## RecoverableItemsQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchDumpsterQuota_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "RecoverableItemsQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "RecoverableItemsQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.RecoverableItemsQuota -<Operator> '<Size>'`. For example, `Get-Mailbox | where "$_.RecoverableItemsQuota -gt '35GB'"`.

## RecoverableItemsWarningQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchDumpsterWarningQuota_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A byte quantified size value (for example, `300MB` or `1.5GB`), or `Unlimited`. Unqualified values are treated as bytes.|

You can only use the _Filter_ parameter to look for the value `Unlimited` for this property. For example, `Get-Mailbox -Filter "RecoverableItemsWarningQuota -eq 'Unlimited'"` or `Get-Mailbox -Filter "RecoverableItemsWarningQuota -ne 'Unlimited'"`.

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.RecoverableItemsWarningQuota -<Operator> '<Size>'`". For example, `Get-Mailbox | where "$_.RecoverableItemsWarningQuota -gt '25GB'"`.

## RejectMessagesFrom

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_unauthOrig_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the individual recipient (a mailbox, mail user, or mail contact).

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-Recipient "Mai Fujito").DistinguishedName`), and then use the variable in the filter (`"RejectMessagesFrom -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## RejectMessagesFromDLMembers

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_dLMemRejectPerms_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UnifiedGroup**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name or canonical distinguished name of the group (a distribution group, mail-enabled security group, or dynamic distribution group).

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-DistributionGroup "Marketing Department").DistinguishedName`), and then use the variable in the filter (`"RejectMessagesFromDLMembers -eq '$dn'"`).

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## RemoteAccountPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchSyncAccountsPolicyDN_|**Get-Mailbox**|String or `$null`|

This filter requires the distinguished name of the remote account policy. For example, `Get-Mailbox -Filter "RemoteAccountPolicy -eq 'CN=Contoso Remote Account Policy,CN=Remote Accounts Policies Container,CN=Contoso Corporation,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com'"`.

## RemotePowerShellEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-User**|Boolean (`$true` or `$false`)|

For example, `Get-User -Filter 'RemotePowerShellEnabled -eq $false'`.

## RemoteRecipientType

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchRemoteRecipientType_|**Get-Mailbox** <br/> **Get-RemoteMailbox**|<ul><li>`None` (0)</li><li>`ProvisionMailbox` (1)</li><li>`ProvisionArchive` (2)</li><li>`Migrated` (4)</li><li>`DeprovisionMailbox` (8)</li><li>`DeprovisionArchive` (16)</li><li>`RoomMailbox` (32)</li><li>`EquipmentMailbox` (64)</li><li>`SharedMailbox` (96)</li><li>`TeamMailbox` (128)</li><li>`$null`</li></ul>|

For example, `Get-RemoteMailbox -Filter "RemoteRecipientType -eq 'ProvisionMailbox'"`.

## ReportToManagerEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_reportToOwner_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-DistributionGroup -Filter 'ReportToManagerEnabled -eq $true'`.

## ReportToOriginatorEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_reportToOriginator_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-DistributionGroup -Filter 'ReportToOriginatorEnabled -eq $false'`.

## RequireAllSendersAreAuthenticated

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchRequireAuthToSendTo_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal**|Boolean (`$true` or `$false`)|

This property is displayed as **RequireSenderAuthenticationEnabled** in the results of the command `Get-<RecipientType> -Identity <RecipientIdentity> | Format-List`, but you need to use the property name **RequireAllSendersAreAuthenticated** in the filter. For example, `Get-DistributionGroup -Filter 'RequireAllSendersAreAuthenticated -eq $false'`.

## ResourceBehaviorOptions

**Applicable**:

- ![Not supported](media/feature_absent_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-UnifiedGroup**|<ul><li>`AllowOnlyMembersToPost`</li><li>`CalendarMemberReadOnly`</li><li>`ConnectorsEnabled`</li><li>`HideGroupInOutlook`</li><li>`NotebookForLearningCommunitiesEnabled`</li><li>`ReportToOriginator`</li><li>`SharePointReadonlyForMembers`</li><li>`SubscriptionEnabled`</li><li>`SubscribeMembersToCalendarEvents`</li><li>`SubscribeMembersToCalendarEventsDisabled`</li><li>`SubscribeNewGroupMembers`</li><li>`WelcomeEmailDisabled`</li><li>`WelcomeEmailEnabled`</li><li>`$null`</li></ul>|

For example, `Get-UnifiedGroup -Filter "ResourceBehaviorOptions -eq 'CalendarMemberReadOnly'"`

## ResourceCapacity

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchResourceCapacity_|**Get-Mailbox**|Integer or `$null`|

For example, `Get-Mailbox -Filter "ResourceCapacity -gt 15"`

## ResourceCustom

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|String|

You create custom resource properties by using the Set-ResourceConfig cmdlet. For example, `Set-ResourceConfig -ResourcePropertySchema Room/Whiteboard,Equipment/Van`. After you create the properties, you can assign them to room or equipment mailboxes. For example, `Set-Mailbox -Identity "Conference Room 1" -ResourceCustom Whiteboard`.

When you search for values, use the custom resource property that's assigned to the room or equipment mailbox. For example, `Get-Mailbox -Filter "ResourceCustom -eq 'Whiteboard'"`.

## ResourceProvisioningOptions

**Applicable**:

- ![Not supported](media/feature_absent_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-UnifiedGroup**|`Team` or `$null`|

For example, `Get-UnifiedGroup -Filter "ResourceProvisioningOptions -eq 'Team'"`

## ResourceType

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-Recipient**|`Room` (0) or `Equipment` (1)|

For example, `Get-Mailbox -Filter "ResourceType -eq 'Equipment'"`

## RetainDeletedItemsFor

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_garbageCollPeriod_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|A time span value: _dd.hh:mm:ss_ where _dd_ = days, _hh_ = hours, _mm_ = minutes, and _ss_ = seconds.|

You can't use the _Filter_ parameter to look for time span values for this property. Instead, use this syntax: `Get-Mailbox | where "$_.RetainDeletedItemsFor -<Operator> '<TimeSpan>'"`. For example, `Get-Mailbox | where "$_.RetainDeletedItemsFor -gt '14.00:00:00'"`.

## RetentionComment

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchRetentionComment_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "RetentionComment -like '7 years*'"`

## RetentionPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-Recipient**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the retention policy.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-RetentionPolicy "Default MRM Policy").DistinguishedName`), and then use the variable in the filter (`"RetentionPolicy -eq '$dn'"`).

## RetentionUrl

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchRetentionURL_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "RetentionUrl -like 'https://intranet.contoso.com/*'"`

## RoleAssignmentPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchRBACPolicyLink_|**Get-Mailbox**|Distinguished name (DN) (wildcards accepted) or `$null`.|

This filter requires the distinguished name of the role assignment policy in Exchange Online.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-RoleAssignmentPolicy "Default Role Assignment Policy").DistinguishedName`), and then use the variable in the filter (`"RoleAssignmentPolicy -eq '$dn'"`).

## RulesQuota

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMDBRulesQuota_|**Get-Mailbox**|A byte quantified size value (for example, `50B` or `128KB`). Unqualified values are treated as bytes.|

You can't use the _Filter_ parameter to look for size values of this property. Instead, use this syntax: `Get-Mailbox | where "$_.RulesQuota -<Operator> '<Size>'"`. For example, `Get-Mailbox | where "$_.RulesQuota -lt '256KB'"`.

## SafeRecipientsHash

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchSafeRecipientsHash_|**Get-Recipient**|Blank ( `$null`) or a hashed value.|

Realistically, you can only use this value to filter on blank or non-blank values. For example, `Get-Recipient -Filter 'SafeRecipientsHash -ne $null'`.

## SafeSendersHash

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchSafeSendersHash_|**Get-Recipient**|Blank ( `$null`) or a hashed value.|

Realistically, you can only use this value to filter on blank or non-blank values. For example, `Get-Recipient -Filter 'SafeSendersHash -ne $null'`.

## SamAccountName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_SamAccountName_|**Get-CASMailbox** <br/> **Get-DistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-UMMailbox** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Recipient -Filter "SamAccountName -like 'laura*'"`

## SCLDeleteThresholdInt

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMessageHygieneSCLDeleteThreshold_|**Get-Mailbox**|-2147483648 (SCL value 0), -2147483647 (SCL value 1), -2147483646 (SCL value 2), -2147483645 (SCL value 3), -2147483644 (SCL value 4), -2147483643 (SCL value 5), -2147483642 (SCL value 6), -2147483641 (SCL value 7), -2147483640 (SCL value 8), -2147483639 (SCL value 9) or `$null`|

This property is displayed as **SCLDeleteThreshold** in the results of the command `Get-Mailbox -Identity <MailboxIdentity> | Format-List`, but you need to use the property name **SCLDeleteThresholdInt** in the filter. For example, `Get-Mailbox -Filter "SCLDeleteThresholdInt -ge -2147483640"`.

## SCLJunkThresholdInt

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMessageHygieneSCLJunkThreshold_|**Get-Mailbox**|-2147483648 (SCL value 0), -2147483647 (SCL value 1), -2147483646 (SCL value 2), -2147483645 (SCL value 3), -2147483644 (SCL value 4), -2147483643 (SCL value 5), -2147483642 (SCL value 6), -2147483641 (SCL value 7), -2147483640 (SCL value 8), -2147483639 (SCL value 9) or `$null`|

This property is displayed as **SCLJunkThreshold** in the results of the command `Get-Mailbox -Identity <MailboxIdentity> | Format-List`, but you need to use the property name **SCLJunkThresholdInt** in the filter. For example, `Get-Mailbox -Filter "SCLJunkThresholdInt -ge -2147483645"`.

## SCLQuarantineThresholdInt

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMessageHygieneSCLQuarantineThreshold_|**Get-Mailbox**|-2147483648 (SCL value 0), -2147483647 (SCL value 1), -2147483646 (SCL value 2), -2147483645 (SCL value 3), -2147483644 (SCL value 4), -2147483643 (SCL value 5), -2147483642 (SCL value 6), -2147483641 (SCL value 7), -2147483640 (SCL value 8), -2147483639 (SCL value 9) or `$null`|

This property is displayed as **SCLQuarantineThreshold** in the results of the command `Get-Mailbox -Identity <MailboxIdentity> | Format-List`, but you need to use the property name **SCLQuarantineThresholdInt** in the filter. For example, `Get-Mailbox -Filter "SCLQuarantineThresholdInt -ge -2147483643"`.

## SCLRejectThresholdInt

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchMessageHygieneSCLRejectThreshold_|**Get-Mailbox**|-2147483648 (SCL value 0), -2147483647 (SCL value 1), -2147483646 (SCL value 2), -2147483645 (SCL value 3), -2147483644 (SCL value 4), -2147483643 (SCL value 5), -2147483642 (SCL value 6), -2147483641 (SCL value 7), -2147483640 (SCL value 8), -2147483639 (SCL value 9) or `$null`|

This property is displayed as **SCLRejectThreshold** in the results of the command `Get-Mailbox -Identity <MailboxIdentity> | Format-List`, but you need to use the property name **SCLRejectThresholdInt** in the filter. For example, `Get-Mailbox -Filter "SCLRejectThresholdInt -ge -2147483641"`.

## SendOofMessageToOriginatorEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_oOFReplyToOriginator_|**Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-UnifiedGroup**|Boolean (`$true` or `$false`)|

For example, `Get-DistributionGroup -Filter 'SendOofMessageToOriginatorEnabled -eq $true'`.

## ServerLegacyDN

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchHomeServerName_|**Get-CASMailbox** <br/> **Get-Mailbox** <br/> **Get-Recipient** <br/> **Get-UMMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "ServerLegacyDN -like 'Mailbox01'"`.

This is an example of a complete **ServerLegacyDN** value: `/o=Contoso Corporation/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Mailbox01`.

## ServerName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox** <br/> **Get-Mailbox** <br/> **Get-Recipient** <br/> **Get-UMMailbox**|String|

For example, `Get-Recipient -Filter "ServerName -eq 'Mailbox01'"`.

## SharingPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchSharingPolicyLink_|**Get-Mailbox** <br/> **Get-Recipient**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the sharing policy.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-SharingPolicy "Custom Sharing Policy").DistinguishedName`), and then use the variable in the filter (`"SharingPolicy -eq '$dn'"`).

> [!NOTE]
> For the default assignment of the default sharing policy (named Default Sharing Policy) to a mailbox, the value of the **SharingPolicy** property is blank (`$null`).

## Sid

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_objectSid_|**Get-Group** <br/> **Get-LinkedUser** <br/> **Get-SecurityPrincipal** <br/> **Get-User**|String|

For example, `Get-User -Filter "Sid -eq 's-1-5-21-3628364307-1600040346-819251021-2603'"`.

## SidHistory

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_SIDHistory_|**Get-Group** <br/> **Get-LinkedUser** <br/> **Get-User**|String or `$null`|

For example, `Get-User -Filter "SidHistory -eq 's-1-5-21-3628364307-1600040346-819251021-2603'"`.

Filtering by the `$null` value on this property is supported only in Exchange Server. In Exchange Online and Security & Compliance PowerShell, use an exact value match instead.

## SimpleDisplayName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_displayNamePrintable_|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "SimpleDisplayName -like 'lila*'"`.

## SingleItemRecoveryEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'SingleItemRecoveryEnabled -eq $true'`.

## SKUAssigned

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-User**|Boolean (`$true` or `$false`) or `$null`.|

For example, `Get-User -Filter 'SKUAssigned -eq $true'`.

## SourceAnchor

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter 'SourceAnchor -ne $null'`.

## StateOrProvince

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_st_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "StateOrProvince -like 'Carolina*'"`.

## StreetAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_streetAddress_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "StreetAddress -like '36th Ave NE*'"`.

## StsRefreshTokensValidFrom

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchStsRefreshTokensValidFrom_|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|`$null` or a date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-User -Filter "StsRefreshTokensValidFrom -gt '8/1/2017'"`.

## TelephoneAssistant

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_telephoneAssistant_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "TelephoneAssistant -like '206*'"`.

## ThrottlingPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchThrottlingPolicyDN_|**Get-Mailbox**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the throttling policy.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-ThrottlingPolicy "Custom Throttling Policy").DistinguishedName`), and then use the variable in the filter (`"ThrottlingPolicy -eq '$dn'"`).

## Title

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_title_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "Title -eq 'Dr.'"`.

## UMAddresses

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier. Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUMAddresses_|**Get-UMMailbox**|String (wildcards accepted) or `$null`|

For example, `Get-UMMailbox -Filter "UMAddresses -like 'EUM:*'"`.

## UMCallingLineIds

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier. Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUMCallingLineIds_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "UMCallingLineIds -like '123*'"`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## UMDtmfMap

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier. Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUMDtmfMap_|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-UMMailbox** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "UMDtmfMap -like '26297*'"`.

Although this property is multi-valued, the filter returns a match if the property _contains_ the specified value.

## UMEnabled

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier. Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-Mailbox** <br/> **Get-Recipient** <br/> **Get-UMMailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'UMEnabled -eq $true'`.

## UMMailboxPolicy

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier. Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUMTemplateLink_|**Get-Recipient** <br/> **Get-UMMailbox**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the UM mailbox policy.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-UMMailboxPolicy "Contoso Default Policy").DistinguishedName`), and then use the variable in the filter (`"UMMailboxPolicy -eq '$dn'"`).

## UMRecipientDialPlanId

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server (Exchange 2016 or earlier. Unified Messaging was removed in Exchange 2019)
- ![Not supported](media/feature_absent_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUMRecipientDialPlanLink_|**Get-Recipient**|Distinguished name (DN) or `$null`.|

This filter requires the distinguished name of the UM dial plan.

To use a friendly value, store the DN in a variable (for example, `$dn = (Get-UMDialPlan "Contoso Dial Plan").DistinguishedName`), and then use the variable in the filter (`"UMRecipientDialPlanId -eq '$dn'"`).

## UpgradeRequest

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-User**|<ul><li>`None` (0)</li><li>`TenantUpgrade` (1)</li><li>`PrestageUpgrade` (2)</li><li>`CancelPrestageUpgrade` (3)</li><li>`PilotUpgrade` (4)</li><li>`TenantUpgradeDryRun` (5)</li></ul>|

For example, `Get-User -Filter "UpgradeRequest -ne 'None'"`.

## UpgradeStatus

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-User**|<ul><li>`None` (0)</li><li>`NotStarted` (1)</li><li>`InProgress` (2)</li><li>`Warning` (3)</li><li>`Error` (4)</li><li>`Cancelled` (5)</li><li>`Complete` (6)</li><li>`ForceComplete` (7)</li></ul>|

For example, `Get-User -Filter "UpgradeStatus -ne 'None'"`.

## UsageLocation

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUsageLocation_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient**|String|

This filter requires the ISO 3166-1 country name (for example, `United States`), or two-letter country code (for example `US`) for the user in Microsoft 365. For more information, see [Country Codes - ISO 3166](https://www.iso.org/iso-3166-country-codes.html).

For example, `Get-Recipient -Filter 'UsageLocation -eq "US"'`.

## UseDatabaseQuotaDefaults

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Not supported](media/feature_absent_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_mDBUseDefaults_|**Get-Mailbox**|Boolean (`$true` or `$false`)|

For example, `Get-Mailbox -Filter 'UseDatabaseQuotaDefaults -eq $false'`.

## UserAccountControl

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_userAccountControl_|**Get-LinkedUser** <br/> **Get-User**|<ul><li>`AccountDisabled`</li><li>`DoNotExpirePassword`</li><li>`NormalAccount`</li></ul>|

For example, `Get-User -Filter "UserAccountControl -eq 'NormalAccount'"`.

You can specify multiple values separated by commas, but the order matters. For example, `Get-User -Filter "UserAccountControl -eq 'AccountDisabled,NormalAccount'"` returns different results than `Get-User -Filter "UserAccountControl -eq 'NormalAccount,AccountDisabled'"`.

This multivalued property returns a match only if the property _equals_ the specified value.

## UserPrincipalName

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_userPrincipalName_|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|String (wildcards accepted)|

For example, `Get-User -Filter "UserPrincipalName -like 'julia@*'"`.

## VoiceMailSettings

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchUCVoiceMailSettings_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

Valid values for this property are:

- `ExchangeHostedVoiceMail=0`
- `ExchangeHostedVoiceMail=1`
- `CsHostedVoiceMail=0`
- `CsHostedVoiceMail=1`

For example, `Get-User -Filter 'VoiceMailSettings -ne $null'`.

In Exchange Online, this property holds a legacy hosted voicemail value and is typically blank, so filtering on this property usually returns no results.

## WebPage

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_wWWHomePage_|**Get-Contact** <br/> **Get-LinkedUser** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-User -Filter "WebPage -like 'https://intranet.contoso.com/*'"`.

## WhenChanged

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_WhenChanged_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Recipient -Filter "WhenChanged -gt '8/1/2017 2:00:00 PM'"`.

## WhenChangedUTC

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Recipient -Filter "WhenChangedUTC -gt '8/1/2017 2:00:00 PM'"`.

## WhenCreated

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_whenCreated_|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Recipient -Filter "WhenCreated -gt '8/1/2017 2:00:00 PM'"`.

## WhenCreatedUTC

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|n/a|**Get-CASMailbox** <br/> **Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox** <br/> **Get-SecurityPrincipal** <br/> **Get-UMMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Recipient -Filter "WhenCreatedUTC -gt '8/1/2017 2:00:00 PM'"`.

## WhenMailboxCreated

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchWhenMailboxCreated_|**Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-RemoteMailbox**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

For example, `Get-Recipient -Filter "WhenMailboxCreated -gt '8/1/2017 2:00:00 PM'"`.

## WhenSoftDeleted

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchWhenSoftDeletedTime_|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User** <br/> **Get-UnifiedGroup**|A date/time value: 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601 (UTC)|

This filter requires the _SoftDeleted_ switch in the command for mailboxes.

For example, `Get-Mailbox -SoftDeletedMailbox -Filter "WhenSoftDeleted -gt '8/1/2017 2:00:00 PM'"`.

## WindowsEmailAddress

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_mail_|**Get-Contact** <br/> **Get-DistributionGroup** <br/> **Get-DynamicDistributionGroup** <br/> **Get-Group** <br/> **Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailContact** <br/> **Get-MailPublicFolder** <br/> **Get-MailUser** <br/> **Get-RemoteMailbox** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "WindowsEmailAddress -like '@fabrikam.com*'"`.

## WindowsLiveID

**Applicable**:

- ![Supported](media/feature_present_icon.png) Exchange Server
- ![Supported](media/feature_present_icon.png) Exchange Online
- ![Supported](media/feature_present_icon.png) Security & Compliance

|LDAP display name|Cmdlets|Value|
|---|---|---|
|_msExchWindowsLiveID_|**Get-LinkedUser** <br/> **Get-Mailbox** <br/> **Get-MailUser** <br/> **Get-Recipient** <br/> **Get-User**|String (wildcards accepted) or `$null`|

For example, `Get-Mailbox -Filter "WindowsLiveID -like '*@fabrikam.onmicrosoft.com'"`.

## For more information

Exchange 2007 was the first version of Exchange that required OPATH filters instead of LDAP filters. For more information about converting LDAP filters to OPATH filters, see the Microsoft Exchange Team Blog article, [Need help converting your LDAP filters to OPATH?](https://techcommunity.microsoft.com/t5/exchange-team-blog/need-help-converting-your-ldap-filters-to-opath/ba-p/595108).
