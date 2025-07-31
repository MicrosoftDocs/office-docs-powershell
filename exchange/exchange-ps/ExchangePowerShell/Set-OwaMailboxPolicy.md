---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy
schema: 2.0.0
title: Set-OwaMailboxPolicy
---

# Set-OwaMailboxPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-OwaMailboxPolicy cmdlet to configure existing Outlook on the web mailbox policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-OwaMailboxPolicy [-Identity] <MailboxPolicyIdParameter>
 [-AccountTransferEnabled <Boolean>]
 [-ActionForUnknownFileAndMIMETypes <AttachmentBlockingActions>]
 [-ActiveSyncIntegrationEnabled <Boolean>]
 [-AdditionalAccountsEnabled <System.Boolean>]
 [-AdditionalStorageProvidersAvailable <Boolean>]
 [-AllAddressListsEnabled <Boolean>]
 [-AllowCopyContactsToDeviceAddressBook <Boolean>]
 [-AllowedFileTypes <MultiValuedProperty>]
 [-AllowedMimeTypes <MultiValuedProperty>]
 [-AllowedOrganizationAccountDomains <String[]>]
 [-AllowOfflineOn <AllowOfflineOnEnum>]
 [-BizBarEnabled <Boolean>]
 [-BlockedFileTypes <MultiValuedProperty>]
 [-BlockedMimeTypes <MultiValuedProperty>]
 [-BookingsMailboxCreationEnabled <Boolean>]
 [-BookingsMailboxDomain <String>]
 [-BoxAttachmentsEnabled <Boolean>]
 [-CalendarEnabled <Boolean>]
 [-ChangePasswordEnabled <Boolean>]
 [-ChangeSettingsAccountEnabled <System.Boolean>]
 [-ClassicAttachmentsEnabled <Boolean>]
 [-ConditionalAccessPolicy <PolicyEnum>]
 [-Confirm]
 [-ContactsEnabled <Boolean>]
 [-DefaultClientLanguage <Int32>]
 [-DefaultTheme <String>]
 [-DelegateAccessEnabled <Boolean>]
 [-DirectFileAccessOnPrivateComputersEnabled <Boolean>]
 [-DirectFileAccessOnPublicComputersEnabled <Boolean>]
 [-DisableFacebook]
 [-DisplayPhotosEnabled <Boolean>]
 [-DomainController <Fqdn>]
 [-DropboxAttachmentsEnabled <Boolean>]
 [-EmptyStateEnabled <Boolean>]
 [-ExplicitLogonEnabled <Boolean>]
 [-ExternalImageProxyEnabled <Boolean>]
 [-ExternalSPMySiteHostURL <String>]
 [-FeedbackEnabled <Boolean>]
 [-ForceSaveAttachmentFilteringEnabled <Boolean>]
 [-ForceSaveFileTypes <MultiValuedProperty>]
 [-ForceSaveMimeTypes <MultiValuedProperty>]
 [-ForceWacViewingFirstOnPrivateComputers <Boolean>]
 [-ForceWacViewingFirstOnPublicComputers <Boolean>]
 [-ForceWebReadyDocumentViewingFirstOnPrivateComputers <Boolean>]
 [-ForceWebReadyDocumentViewingFirstOnPublicComputers <Boolean>]
 [-FreCardsEnabled <Boolean>]
 [-GlobalAddressListEnabled <Boolean>]
 [-GoogleDriveAttachmentsEnabled <Boolean>]
 [-GroupCreationEnabled <Boolean>]
 [-HideClassicOutlookToggleOut <System.Boolean>]
 [-InstantMessagingEnabled <Boolean>]
 [-InstantMessagingType <InstantMessagingTypeOptions>]
 [-InterestingCalendarsEnabled <Boolean>]
 [-InternalSPMySiteHostURL <String>]
 [-IRMEnabled <Boolean>]
 [-IsDefault]
 [-ItemsToOtherAccountsEnabled <System.Boolean>]
 [-JournalEnabled <Boolean>]
 [-JunkEmailEnabled <Boolean>]
 [-LinkedInEnabled <Boolean>]
 [-LocalEventsEnabled <Boolean>]
 [-LogonAndErrorLanguage <Int32>]
 [-MessagePreviewsDisabled <Boolean>]
 [-MonthlyUpdatesEnabled <Boolean>]
 [-Name <String>]
 [-NotesEnabled <Boolean>]
 [-NpsSurveysEnabled <Boolean>]
 [-OfflineEnabledWeb <Boolean>]
 [-OfflineEnabledWin <Boolean>]
 [-OneDriveAttachmentsEnabled <Boolean>]
 [-OneWinNativeOutlookEnabled <System.Boolean>]
 [-OnSendAddinsEnabled <Boolean>]
 [-OrganizationEnabled <Boolean>]
 [-OutboundCharset <OutboundCharsetOptions>]
 [-OutlookBetaToggleEnabled <Boolean>]
 [-OutlookDataFile <OutlookDataFileFeatureState>]
 [-OutlookNewslettersAccessLevel <OutlookNewslettersAccessLevel>]
 [-OutlookNewslettersReactions <OutlookNewslettersFeatureState>]
 [-OutlookNewslettersShowMore <OutlookNewslettersFeatureState>]
 [-OWALightEnabled <Boolean>]
 [-OWAMiniEnabled <Boolean>]
 [-PersonalAccountCalendarsEnabled <Boolean>]
 [-PersonalAccountsEnabled <System.Boolean>]
 [-PhoneticSupportEnabled <Boolean>]
 [-PlacesEnabled <Boolean>]
 [-PremiumClientEnabled <Boolean>]
 [-PrintWithoutDownloadEnabled <Boolean>]
 [-ProjectMocaEnabled <Boolean>]
 [-PublicFoldersEnabled <Boolean>]
 [-RecoverDeletedItemsEnabled <Boolean>]
 [-ReferenceAttachmentsEnabled <Boolean>]
 [-RemindersAndNotificationsEnabled <Boolean>]
 [-ReportJunkEmailEnabled <Boolean>]
 [-RulesEnabled <Boolean>]
 [-SatisfactionEnabled <Boolean>]
 [-SaveAttachmentsToCloudEnabled <Boolean>]
 [-SearchFoldersEnabled <Boolean>]
 [-SetPhotoEnabled <Boolean>]
 [-SetPhotoURL <String>]
 [-ShowOnlineArchiveEnabled <Boolean>]
 [-SignaturesEnabled <Boolean>]
 [-SilverlightEnabled <Boolean>]
 [-SkipCreateUnifiedGroupCustomSharepointClassification <Boolean>]
 [-SMimeEnabled <Boolean>]
 [-SMimeSuppressNameChecksEnabled <Boolean>]
 [-SpellCheckerEnabled <Boolean>]
 [-TasksEnabled <Boolean>]
 [-TeamSnapCalendarsEnabled <Boolean>]
 [-TextMessagingEnabled <Boolean>]
 [-ThemeSelectionEnabled <Boolean>]
 [-ThirdPartyAttachmentsEnabled <Boolean>]
 [-UMIntegrationEnabled <Boolean>]
 [-UNCAccessOnPrivateComputersEnabled <Boolean>]
 [-UNCAccessOnPublicComputersEnabled <Boolean>]
 [-UseGB18030 <Boolean>]
 [-UseISO885915 <Boolean>]
 [-UserVoiceEnabled <Boolean>]
 [-WacEditingEnabled <Boolean>]
 [-WacExternalServicesEnabled <Boolean>]
 [-WacOMEXEnabled <Boolean>]
 [-WacViewingOnPrivateComputersEnabled <Boolean>]
 [-WacViewingOnPublicComputersEnabled <Boolean>]
 [-WeatherEnabled <Boolean>]
 [-WebPartsFrameOptionsType <WebPartsFrameOptions>]
 [-WebReadyDocumentViewingForAllSupportedTypes <Boolean>]
 [-WebReadyDocumentViewingOnPrivateComputersEnabled <Boolean>]
 [-WebReadyDocumentViewingOnPublicComputersEnabled <Boolean>]
 [-WebReadyDocumentViewingSupportedFileTypes <MultiValuedProperty>]
 [-WebReadyDocumentViewingSupportedMimeTypes <MultiValuedProperty>]
 [-WebReadyFileTypes <MultiValuedProperty>]
 [-WebReadyMimeTypes <MultiValuedProperty>]
 [-WhatIf]
 [-WSSAccessOnPrivateComputersEnabled <Boolean>]
 [-WSSAccessOnPublicComputersEnabled <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
In on-premises Exchange, the default Outlook on the web mailbox policy is named Default. In Exchange Online, the default Outlook on the web mailbox policy is named OwaMailboxPolicy-Default.

Changes to Outlook on the web mailbox policies may take up to 60 minutes to take effect. In on-premises Exchange, you can force an update by restarting IIS (`Stop-Service WAS -Force` and `Start-Service W3SVC`).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-OwaMailboxPolicy -Identity EMEA\Contoso\Corporate -CalendarEnabled $false
```

This example disables access to the calendar for the mailbox policy named Corporate for the tenant Contoso in the organization EMEA.

### Example 2
```powershell
Set-OwaMailboxPolicy -Identity Default -TasksEnabled $false
```

This example disables access to the Tasks folder for the default mailbox policy in an on-premises Exchange organization.

### Example 3
```powershell
Set-OwaMailboxPolicy -Identity OwaMailboxPolicy-Default -AllowedFileTypes '.doc', '.pdf'
```

This example sets the allowed file type extensions to .doc and .pdf for the default mailbox policy in an Exchange Online organization, allowing users to save files with those extensions locally or view them from a web browser.

### Example 4
```powershell
Set-OwaMailboxPolicy -Identity OwaMailboxPolicy-Default -UserVoiceEnabled $false
```

This example disables Outlook UserVoice for the default mailbox policy in Microsoft 365.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the Outlook on the web mailbox policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccountTransferEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActionForUnknownFileAndMIMETypes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ActionForUnknownFileAndMIMETypes parameter specifies how to handle file types that aren't specified in the Allow, Block, and Force Save lists for file types and MIME types. Valid values are:

- Allow (This is the default value.)
- ForceSave
- Block

```yaml
Type: AttachmentBlockingActions
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdditionalStorageProvidersAvailable

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The AdditionalStorageProvidersAvailable parameter specifies whether to allow additional storage providers (for example, Box, Dropbox, Facebook, Google Drive, Egnyte, personal OneDrive) attachments in Outlook on the web. Valid values are:

- $true: Additional storage providers are enabled in Outlook on the web. Users can connect their additional storage providers and share files over email. This is the default value.
- $false: Additional storage providers are disabled in Outlook on the web. Users can't connect their additional storage providers or share files over email.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncIntegrationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ActiveSyncIntegrationEnabled parameter specifies whether to enable or disable Exchange ActiveSync settings in Outlook on the web. Valid values are:

- $true: ActiveSync is available in Outlook on the web. This is the default value.
- $false: ActiveSync isn't available in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdditionalAccountsEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter has been deprecated and is no longer used.

To enable or disable personal accounts in the new Outlook for Windows, use the PersonalAccountsEnabled parameter.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllAddressListsEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllAddressListsEnabled parameter specifies which address lists are available in Outlook on the web. Valid values are:

- $true: All address lists are visible in Outlook on the web. This is the default value.
- $false: Only the global address list is visible in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCopyContactsToDeviceAddressBook

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowCopyContactsToDeviceAddressBook parameter specifies whether users can copy the contents of their Contacts folder to a mobile device's native address book when using Outlook on the web for devices. Valid values are:

- $true: Contacts can be copied to the device's address book in Outlook on the web for devices. This is the default value.
- $false: Contacts can't be copied to the device's address book in Outlook on the web for devices.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedFileTypes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowedFileTypes parameter specifies the attachment file types (file extensions) that can be saved locally or viewed from Outlook on the web. The default values are:

.avi, .bmp, .doc, .docm, .docx, .gif, .jpg, .mp3, .one, .pdf, .png, .ppsm, .ppsx, .ppt, .pptm, .pptx, .pub, .rpmsg, .rtf, .tif, .tiff, .txt, .vsd, .wav, .wma, .wmv, .xls, .xlsb, .xlsm, .xlsx, .zip

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

If the same file types are specified in multiple lists:

- The Block list overrides the Allow list and the Force Save list.
- The Force Save list overrides the Allow list.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedMimeTypes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllowedMimeTypes parameter specifies the MIME extensions of attachments that allow the attachments to be saved locally or viewed from Outlook on the web. The default values are:

- image/bmp
- image/gif
- image/jpeg
- image/png

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

If the same MIME types are specified in multiple lists:

- The Allow list overrides the Block list and the Force Save list.
- The Block list overrides the Force Save list.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedOrganizationAccountDomains

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The AllowedOrganizationAccountDomains parameter specifies domains where users can add work or school email accounts in the new Outlook for Windows. The default value is blank ($null), which allows work or school accounts from any domain. Setting this parameter to an empty list ([]) prevents any work or school accounts from being added.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOfflineOn

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in on-premises Exchange.

The AllowOfflineOn parameter specifies when Outlook Web App in offline mode is available for supported web browsers. Valid values are:

- PrivateComputersOnly: Offline mode is available in private computer sessions. By default in Exchange 2013 or later and Exchange Online, all Outlook on the web sessions are considered to be on private computers. In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).
- NoComputers: Offline mode is disabled.
- AllComputers: Offline mode is available for public and private computer sessions. This is the default value.

When offline mode is available, users can turn offline mode on or off themselves in Outlook Web App. For more information, see [Use offline settings in Outlook on the web](https://support.microsoft.com/office/a34c9d9d-16ac-4020-b730-ffa7c7540ae7).

```yaml
Type: AllowOfflineOnEnum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BizBarEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill BizBarEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedFileTypes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The BlockedFileTypes parameter specifies a list of attachment file types (file extensions) that can't be saved locally or viewed from Outlook on the web. The default values are:

.ade, .adp, .apk, .app, .appcontent-ms, .application, .appref-ms, .appx, .asp, .aspx, .asx, .bas, .bat, .bgi, .cab, .cdxml, .cer, .chm, .cmd, .cnt, .com, .cpl, .crt, .csh, .der, .diagcab, .exe, .fxp, .gadget, .grp, .hlp, .hpj, .hta, .htc, .img, .inf, .ins, .iso, .isp, .its, .jar, .jnlp, .js, .jse, .ksh, .library-ms, .lnk, .mad, .maf, .mag, .mam, .maq, .mar, .mas, .mat, .mau, .mav, .maw, .mcf, .mda, .mdb, .mde, .mdt, .mdw, .mdz, .mht, .mhtml, .msc, .msh, .msh1, .msh1xml, .msh2, .msh2xml, .mshxml, .msi, .msp, .mst, .msu, .ops, .osd, .pcd, .pif, .pl, .plg, .prf, .prg, .printerexport, .ps1, .ps1xml, .ps2, .ps2xml, .psc1, .psc2, .psd1, .psdm1, .pssc, .pst, .py, .pyc, .pyo, .pyw, .pyz, .pyzw, .reg, .scf, .scr, .sct, .search-ms, .settingcontent-ms, .shb, .shs, .theme, .tmp, .udl, .url, .vb, .vbe, .vbp, .vbs, .vhd, .vhdx, .vsmacros, .vsw, .webpnp, .website, .ws, .wsb, .wsc, .wsf, .wsh, .xbap, .xll, .xnk

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

If the same file types are specified in multiple lists:

- The Allow list overrides the Block list and the Force Save list.
- The Block list overrides the Force Save list.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedMimeTypes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The BlockedMimeTypes parameter specifies MIME extensions in attachments that prevent the attachments from being saved locally or viewed from Outlook on the web. The default values are:

- application/hta
- application/javascript
- application/msaccess
- application/prg
- application/x-javascript
- text/javascript
- text/scriplet
- x-internet-signup

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

If the same MIME types are specified in multiple lists:

- The Allow list overrides the Block list and the Force Save list.
- The Block list overrides the Force Save list.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsMailboxCreationEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The BookingsMailboxCreationEnabled parameter allows you disable Microsoft Bookings.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsMailboxDomain

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill BookingsMailboxDomain Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BoxAttachmentsEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in on-premises Exchange.

The CalendarEnabled parameter specifies whether to enable or disable the calendar in Outlook Web App. Valid values are:

- $true: The Calendar is available in Outlook Web App. This is the default value.
- $false: The Calendar isn't available in Outlook Web App.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChangePasswordEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in on-premises Exchange.

The ChangePasswordEnabled parameter specifies whether users can change their passwords from inside Outlook on the web. Valid values are:

- $true: The Change password option is available in Outlook on the web. This is the default value in on-premises Exchange.
- $false: The Change password option isn't available in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChangeSettingsAccountEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The ChangeSettingsAccountEnabled parameter specifies whether users can change the email account where app-wide settings (for example, theme and privacy settings) are associated in the new Outlook for Windows. Valid values are:

- $true: Users can change their settings account in the new Outlook for Windows. This is the default value.
- $false: Users can't change their settings account in the new Outlook for Windows.

**Note**: The settings account is referred to as the primary account in the new Outlook for Windows setting at Settings \> Accounts \> Email accounts \> Manage.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClassicAttachmentsEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The ClassicAttachmentsEnabled parameter specifies whether users can attach local files as regular email attachments in Outlook on the web. Valid values are:

- $true: Users can attach local files to email messages in Outlook on the web. This is the default value.
- $false: Users can't attach local files to email messages in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalAccessPolicy

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The ConditionalAccessPolicy parameter specifies the Outlook on the Web Policy for limited access. For this feature to work properly, you also need to configure a Conditional Access policy in the Microsoft Entra admin center.

**Note**: When you enable a Conditional Access policy, users will no longer be able to access the light version of Outlook on the web. An error message will direct them to use the default premium experience.

Valid values are:

- Off: No conditional access policy is applied to Outlook on the web. This is the default value.
- ReadOnly: Users can't download attachments to their local computer, and can't enable Offline Mode on non-compliant computers. They can still view attachments in the browser. This doesn't apply to in-line images.
- ReadOnlyPlusAttachmentsBlocked: All restrictions from ReadOnly apply, but users can't view attachments in the browser. This doesn't apply to in-line images.

```yaml
Type: PolicyEnum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContactsEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in on-premises Exchange.

The ContactsEnabled parameter specifies whether to enable or disable Contacts in Outlook Web App. Valid values are:

- $true: Contacts are available in Outlook Web App. This is the default value.
- $false: Contacts aren't available in Outlook Web App.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultClientLanguage

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter has been deprecated and is no longer used.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultTheme

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DefaultTheme parameter specifies the default theme that's used in Outlook on the web when the user hasn't selected a theme. The default value is blank ($null). For more information about the built-in themes that are available in Outlook on the web, see [Default Outlook on the web themes in Exchange](https://learn.microsoft.com/Exchange/clients/outlook-on-the-web/themes#default-outlook-on-the-web-themes-in-exchange-2016).

Note that this parameter is a text string, and the value you specify isn't validated against the list of available themes.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DelegateAccessEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in on-premises Exchange.

The DelegateAccessEnabled parameter specifies whether delegates can use Outlook on the web or Outlook Web App to open folders that they have delegate access to. Valid values are:

- $true: Delegates can open the mailbox in Outlook on the web. This is the default value.
- $false: Delegates can't open the mailbox in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DirectFileAccessOnPrivateComputersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DirectFileAccessOnPrivateComputersEnabled parameter specifies the left-click options for attachments in Outlook on the web for private computer sessions. Valid values are:

- $true: Open is available for attachments in Outlook on the web for private computer sessions. This is the default value.
- $false: Open isn't available for attachments in Outlook on the web for private computer sessions. Note that Office and .pdf documents can still be previewed in Outlook on the web.

By default in Exchange 2013 or later and Exchange Online, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DirectFileAccessOnPublicComputersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DirectFileAccessOnPublicComputersEnabled parameter specifies the left-click options for attachments in Outlook on the web for public computer sessions. Valid values are:

- $true: Open is available for attachments in Outlook on the web for public computer sessions. This is the default value.
- $false: Open isn't available for attachments in Outlook on the web for public computer sessions. Note that Office and .pdf documents can still be previewed in Outlook on the web.

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableFacebook

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

**Note**: Facebook integration is no longer available. For more information, see [Facebook Connect is no longer available](https://support.microsoft.com/office/facebook-connect-is-no-longer-available-f31c8107-7b5a-4e3d-8a22-e506dacb6db6).

The DisableFacebook switch specifies whether users can synchronize their Facebook contacts to their Contacts folder in Outlook on the web. By default, Facebook integration is enabled.

- To disable Facebook integration, use this switch without a value.
- To enable Facebook integration after it's been disabled, use this exact syntax: `-DisableFacebook:$false`.

The value of this switch is stored in the FacebookEnabled property in the output of the Get-OwaMailboxPolicy cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayPhotosEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The DisplayPhotosEnabled parameter specifies whether users see sender photos in Outlook on the web. Valid values are:

- $true: Users see sender photos in Outlook on the web. This is the default value.
- $false: Users don't see sender photos in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DropboxAttachmentsEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmptyStateEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill EmptyStateEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExplicitLogonEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in on-premises Exchange.

The ExplicitLogonEnabled parameter specifies whether to allow a user to open someone else's mailbox in Outlook on the web (provided that user has permissions to the mailbox). Valid values are:

- $true: A user with the required permissions is able to open someone else's mailbox in Outlook on the web. This is the default value.
- $false: A user with the required permissions isn't able to open someone else's mailbox in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalImageProxyEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The ExternalImageProxyEnabled parameter specifies whether to load all external images through the Outlook external image proxy. Valid values are:

- $true: All external images are loaded through the Outlook external image proxy. This is the default value.
- $false: All external images are loaded through the web browser. This is potentially unsafe, as the images could have mixed content or malformed images that ask for user credentials.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalSPMySiteHostURL

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExternalSPMySiteHostURL specifies the My Site Host URL for external users (for example, `https://sp01.contoso.com`).

This parameter is part of rich document collaboration that allows links to documents in OneDrive to appear as regular file attachments in messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FeedbackEnabled

> Applicable: Exchange Online

This cmdlet is available only in the cloud-based service.

The FeedbackEnabled parameter specifies whether to enable or disable inline feedback surveys in Outlook on the web. Valid values are:

- $true: Inline feedback surveys are enabled. This is the default value.
- $false: Inline feedback surveys are disabled.

 Surveys allow users to provide feedback on specific features. For example, for the text predictions feature, the inline feedback "Are the above autocomplete suggestions helpful (yes/no)?" is shown. If a user chooses "no" they can provide specific feedback.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceSaveAttachmentFilteringEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ForceSaveAttachmentFilteringEnabled parameter specifies whether files are filtered before they can be saved from Outlook on the web. Valid values are:

- $true: The attachments specified by the ForceSaveFileTypes parameter are filtered before they can be saved from Outlook on the web.
- $false: The attachments aren't filtered before they're saved. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceSaveFileTypes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ForceSaveFileTypes parameter specifies the attachment file types (file extensions) that can only be saved from Outlook on the web (not opened). The default values are:

.ade, .adp, .app, .asp, .aspx, .asx, .bas, .bat, .cer, .chm, .cmd, .com, .cpl, .crt, .csh, .dcr, .dir, .exe, .fxp, .gadget, .hlp, .hta, .htm, .html, .inf, .ins, .isp, .its, .js, .jse, .ksh, .lnk, .mad, .maf, .mag, .mam, .maq, .mar, .mas, .mat, .mau, .mav, .maw, .mda, .mdb, .mde, .mdt, .mdw, .mdz, .msc, .msh, .mshxml, .msi, .msp, .mst, .ops, .pcd, .pif, .plg, .prf, .prg, .ps1, .ps1xml, .ps2, .ps2xml, .psc1, .psc2, .pst, .reg, .scf, .scr, .sct, .shb, .shs, .spl, .swf, .tmp, .url, .vb, .vbe, .vbs, .vsmacro, .vss, .vst, .vsw, .ws, .wsc, .wsf, .wsh

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

If the same file types are specified in multiple lists:

- The Allow list overrides the Block list and the Force Save list.
- The Block list overrides the Force Save list.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceSaveMimeTypes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ForceSaveMimeTypes parameter specifies the MIME extensions in attachments that only allow the attachments to be saved locally (not opened). The default values are:

- Application/futuresplash
- Application/octet-stream
- Application/x-director
- Application/x-shockwave-flash
- text/html

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

If the same MIME types are specified in multiple lists:

- The Allow list overrides the Block list and the Force Save list.
- The Block list overrides the Force Save list.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceWacViewingFirstOnPrivateComputers

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ForceWacViewingFirstOnPrivateComputers parameter specifies whether private computers must first preview an Office file as a web page in Office Online Server (formerly known as Office Web Apps Server and Web Access Companion Server) before opening the file in the local application. Valid values are:

- $true: Private computers must first preview an Office file as a web page in Office Online Server before opening the file.
- $false: Private computers aren't required to preview an Office file as a web page in Office Online Server before opening the file. This is the default value.

By default in Exchange 2013 or later and Exchange Online, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceWacViewingFirstOnPublicComputers

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ForceWacViewingFirstOnPublicComputers parameter specifies whether public computers must first preview an Office file as a web page in Office Online Server before opening the file in the local application. Valid values are:

- $true: Public computers must first preview an Office file as a web page in Office Online Server before opening the file.
- $false: Public computers aren't required to preview an Office file as a web page in Office Online Server before opening the file. This is the default value.

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceWebReadyDocumentViewingFirstOnPrivateComputers

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The ForceWebReadyDocumentViewingFirstOnPrivateComputers parameter specifies whether private computers must first preview an Office file as a web page in WebReady Document Viewing before opening the file from Outlook Web App. Valid values are:

- $true: Private computers must first preview an Office file as a web page in WebReady Document Viewing before opening the file.
- $false: Private computers aren't required to preview an Office file as a web page in WebReady Document Viewing before opening the file. This is the default value.

By default in Exchange 2013 or later and Exchange Online, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceWebReadyDocumentViewingFirstOnPublicComputers

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The ForceWebReadyDocumentViewingFirstOnPublicComputers parameter specifies whether Public computers must first preview an Office file as a web page in WebReady Document Viewing before opening the file from Outlook Web App. Valid values are:

- $true: Public computers must first preview an Office file as a web page in WebReady Document Viewing before opening the file.
- $false: Public computers aren't required to preview an Office file as a web page in WebReady Document Viewing before opening the file. This is the default value.

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FreCardsEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalAddressListEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The GlobalAddressListEnabled parameter specifies whether the global address list is available in Outlook on the web. Valid values are:

- $true: The global address list is visible in Outlook on the web. This is the default value.
- $false: The global address list isn't visible in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GoogleDriveAttachmentsEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupCreationEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in the cloud-based service.

The GroupCreationEnabled parameter specifies whether Microsoft 365 Group creation is available in Outlook and Outlook on the web. Valid values are:

- $true: Users can create Microsoft 365 Groups in Outlook and Outlook on the web. This is the default value.
- $false: Users can't create Microsoft 365 Groups in Outlook and Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HideClassicOutlookToggleOut

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The HideClassicOutlookToggleOut parameter specifies whether to enable or disable hiding the toggle in new Outlook that allows users to switch back to classic Outlook. Valid values are:

- $true: The toggle to switch back to classic Outlook is hidden in new Outlook for Windows.
- $false: The toggle to switch back to classic Outlook isn't hidden in new Outlook for Windows. This is the default value.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InstantMessagingEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The InstantMessagingEnabled parameter specifies whether instant messaging is available in Outlook on the web. This does not affect chat capabilities provided by Skype for Business or Teams. Valid values are:

- $true: Instant messaging is available in Outlook on the web. This is the default value.
- $false: Instant messaging isn't available in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InstantMessagingType

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The InstantMessagingType parameter specifies the type of instant messaging provider in Outlook on the web. Valid values are:

- None: This is the default value in on-premises Exchange.
- Ocs: Lync or Skype (formerly known as Office Communication Server). This is the default value in Exchange Online.

```yaml
Type: InstantMessagingTypeOptions
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InterestingCalendarsEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The InterestingCalendarsEnabled parameter specifies whether interesting calendars are available in Outlook on the web. Valid values are:

- $true: Interesting calendars are available in Outlook on thew web. This is the default value.
- $false: Interesting calendars aren't available in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalSPMySiteHostURL

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The InternalSPMySiteHostURL specifies the My Site Host URL for internal users (for example, `https://sp01.contoso.com`).

This parameter is part of rich document collaboration that allows links to documents in OneDrive to appear as regular file attachments in messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IRMEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The IRMEnabled parameter specifies whether Information Rights Management (IRM) features are available in Outlook on the web. Valid values are:

- $true: IRM is available in Outlook on the web. This is the default value.
- $false: IRM isn't available in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefault

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The IsDefault switch specifies whether the Outlook on the web policy is the default policy that's used to configure the Outlook on the web settings for new mailboxes. You don't need to specify a value with this switch.

If another policy is currently set as the default, this switch replaces the old default policy with this policy.

**Note**: In Exchange Online - and excluding resource mailboxes - this value will be superseded by the **OwaMailboxPolicy** parameter in each organization's [CASMailboxPlan](https://learn.microsoft.com/powershell/module/exchangepowershell/set-casmailboxplan). That value will instead be applied per each mailbox's SKU.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemsToOtherAccountsEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The ItemsToOtherAccountsEnabled parameter specifies whether users can move or copy email messages between accounts. Valid values are:

- $true: Users can move and copy messages to and from external accounts.
- $false: Users can't move or copy messages to and from external accounts. This is the default value.

**Note:** This policy doesn't affect moving or copying messages between Microsoft 365 Groups and shared mailboxes within the organization.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JournalEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The JournalEnabled parameter specifies whether the Journal folder is available in Outlook on the web. Valid values are:

- $true: The Journal folder is visible in Outlook on the web. This is the default value.
- $false: The Journal folder isn't visible in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JunkEmailEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The JunkEmailEnabled parameter specifies whether the Junk Email folder and junk email management are available in Outlook on the web. Valid values are:

- $true: The Junk Email folder and junk email management are available in Outlook on the web. This is the default value.
- $false: The Junk Email folder and junk email management aren't available in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedInEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

LinkedIn integration is no longer supported.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalEventsEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The LocalEventsEnabled parameter specifies whether local events calendars are available in Outlook on the web. Valid values are:

- $true: Local events are available in Outlook on the web.
- $false: Local events aren't available in Outlook on the web. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogonAndErrorLanguage

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The LogonAndErrorLanguage parameter specifies the language that used in Outlook on the web for forms-based authentication and for error messages when a user's current language setting can't be read.

A valid value is a supported Microsoft Windows Language Code Identifier (LCID). For example, 1033 is US English.

The default value is 0, which means the logon and error language selection is undefined.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessagePreviewsDisabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill MessagePreviewsDisabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonthlyUpdatesEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill MonthlyUpdatesEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies the unique name for the policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotesEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The NotesEnabled parameter specifies whether the Notes folder is available in Outlook on the web. Valid values are:

- $true: The Notes folder is visible in Outlook on the web. This is the default value.
- $false: The Notes folder isn't visible in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NpsSurveysEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The NpsSurveysEnabled parameter specifies whether to enable or disable the Net Promoter Score (NPS) survey in Outlook on the web. The survey allows users to rate Outlook on the web on a scale of 1 to 5, and to provide feedback and suggested improvements in free text. Valid values are:

- $true: The NPS survey is available in Outlook on the web. This is the default value.
- $false: The NPS survey isn't available in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OfflineEnabledWeb

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The OfflineEnabledWeb parameter specifies whether offline capabilities are available in Outlook on the web, including saving items to the local device (view items without an internet connection). Valid values are:

- $true: Users can manage offline capabilities in Outlook on the web. This is the default value.
- $false: Users can't manage offline capabilities in Outlook on the web. No items are saved to the user's device. Previously save items are deleted.

When offline capabilities are available, users can turn offline capabilities on or off themselves in Outlook on the web at Settings \> General \> Offline.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OfflineEnabledWin

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The OfflineEnabledWin parameter specifies whether offline capabilities are available in the new Outlook for Windows, including saving items to the local device (view items without an internet connection). Valid values are:

- $true: Users can manage offline capabilities in the new Outlook for Windows. This is the default value.
- $false: Users can't manage offline capabilities in the new Outlook for Windows. No items are saved to the user's device. Previously save items are deleted.

When offline capabilities are available, users can turn offline capabilities on or off themselves in the New Outlook for Windows at Settings \> General \> Offline. By default, offline capabilities are turned on.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveAttachmentsEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter has been deprecated and is no longer used.

To enable or disable personal OneDrive in Outlook on the web, use the AdditionalStorageProvidersAvailable parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneWinNativeOutlookEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The OneWinNativeOutlookEnabled parameter controls the availability of the new Outlook for Windows App. Valid values are:

- $true: The New Outlook for Windows App is available. This is the default value.
- $false: The new Outlook for Windows App isn't available.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnSendAddinsEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The OnSendAddinsEnabled parameter specifies whether a mail item can be edited while an on-send add-in is processing it in Outlook on the web or the new Outlook on Windows. Valid values are:

- $true: A user can't edit a mail item while an on-send add-in is processing the item.
- $false: A user can edit a mail item while an on-send add-in is processing the item. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

When the OrganizationEnabled parameter is set to $false, the Automatic Reply option doesn't include external and internal options, the address book doesn't show the organization hierarchy, and the Resources tab in Calendar forms is disabled. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutboundCharset

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The OutboundCharset parameter specifies the character set that's used for outgoing messages in Outlook on the web. Valid values are:

- AutoDetect: Examine the first 2 kilobytes (KB) of text in the message to determine the character set that's used in outgoing messages. This is the default value.
- AlwaysUTF8: Always use UTF-8 encoded Unicode characters in outgoing messages, regardless of the detected text in the message, or the user's language choice in Outlook on the web. Use this value if replies to UTF-8 encoded messages aren't being encoded in UTF-8.
- UserLanguageChoice: Use the user's language choice in Outlook on the web to encode outgoing messages.

```yaml
Type: OutboundCharsetOptions
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookBetaToggleEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The OutlookBetaToggleEnabled parameter specifies whether to enable or disable the Outlook on the web Preview toggle. The Preview toggle allows users to try the new Outlook on the web experience. Valid values are:

- $true: The Outlook on the web Preview toggle is enabled. Users can easily switch back and forth between both experiences. This is the default value.
- $false: Outlook on the web Preview is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookNewslettersAccessLevel

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The OutlookNewslettersAccessLevelAccess parameter specifies the access level in Outlook Newsletters. Valid values are:

- NoAccess: No access to Outlook Newsletters in the New Outlook for Windows or Outlook on the web. Users can still read email messages sent or forwarded to them.
- ReadOnly: Read newsletters and browse pages in Outlook Newsletters.
- ReadWrite: Full authoring permissions to create pages and newsletters in Outlook Newsletters.
- Undefined: This is the default value. Currently, this value is equivalent to NoAccess.

```yaml
Type: OutlookNewslettersAccessLevel
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookDataFile

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The OutlookDataFile parameter specifies what users can do with .pst files in the new Outlook for Windows. Valid values are:

- Allow: The default value. Users can open .pst files, import from a .pst file to a mailbox, export from a mailbox to a .pst file, and copy items to and from .pst files.
- NoExport: Users can't export from a mailbox to a .pst file.
- NoExportNoGrow: Users can't export from a mailbox to a .pst file, or copy items from a mailbox to a .pst file.
- NoExportNoOpen: Users can't export from a mailbox to a .pst file, or open new .pst files.
- NoExportNoOpenNoGrow: Users can't export from a mailbox to a .pst file, copy items from a mailbox to a .pst file, or open new .pst files.
- Deny: Users can't open new .pst files, import from a .pst file to a mailbox, export from a mailbox to a .pst file, or copy items to and from .pst files.

```yaml
Type: OutlookDataFileFeatureState
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Allow
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookNewslettersReactions

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The OutlookNewslettersReactions parameter specifies whether reactions are enabled in Outlook Newsletters. Readers can react to individual sections or the entire newsletter. They can also comment using integrated controls at the end of the newsletter. Valid values are:

- DefaultOff: The controls are turned off.
- DefaultOn: The controls are turned on.
- Disabled: The controls are disabled for users.
- Undefined: This is the default value.

```yaml
Type: OutlookNewslettersFeatureState
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookNewslettersShowMore

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The OutlookNewslettersShowMore parameter specifies whether recommendations to other Outlook Newsletters are included in the footer of published newsletter editions. Valid values are:

- DefaultOff: Recommendations are turned off.
- DefaultOn: Recommendations are turned on.
- Disabled: Recommendations are disabled for users.
- Undefined: This is the default value.

Authors can disable these recommendations for each individual newsletter edition, or admins can use this parameter to globally disable these recommendations.

```yaml
Type: OutlookNewslettersFeatureState
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWALightEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The OWALightEnabled parameter controls the availability of the light version of Outlook on the web. Valid values are:

- $true: The light version of Outlook on the web is available. This is the default value.
- $false: The light version of Outlook on the web isn't available. This setting prevents access to Outlook on the web for unsupported browsers that can only use the light version of Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAMiniEnabled

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The OWAMiniEnabled parameter controls the availability of the mini version of Outlook Web App. Valid values are:

- $true: The mini version of Outlook Web App is available. This is the default value.
- $false: The mini version of Outlook Web App isn't available.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PersonalAccountCalendarsEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The PersonalAccountCalendarsEnabled parameter specifies whether to allow users to connect to their personal Outlook.com or Google Calendar in Outlook on the web. Valid values are:

- $true: Users can connect to their Outlook.com or Google Calendar to see those events in their Outlook on the web calendar. This is the default value.
- $false: Users can't connect to their Outlook.com or Google Calendar in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PersonalAccountsEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The PersonalAccountsEnabled parameter specifies whether to allow users to add their personal accounts (for example, Outlook.com, Gmail, or Yahoo!) in the new Outlook for Windows. Valid values are:

- $true: Users can add their personal accounts in the new Outlook for Windows. This is the default value.
- $false: Users can't add their personal accounts in the new Outlook for Windows.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneticSupportEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The PhoneticSupportEnabled parameter specifies phonetically spelled entries in the address book. This parameter is available for use in Japan.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PlacesEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The PlacesEnabled parameter specifies whether to enable or disable Places in Outlook on the web. Places lets users search, share, and map location details by using Bing. Valid values are:

- $true: Places is enabled. This is the default value.
- $false: Places is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PremiumClientEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The PremiumClientEnabled parameter controls the availability of the full version of Outlook Web App. Valid values are:

- $true: The full version of Outlook Web App is available for supported browsers. This is the default value.
- $false: The full version of Outlook Web App isn't available.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrintWithoutDownloadEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The PrintWithoutDownloadEnabled specifies whether to allow printing of supported files without downloading the attachment in Outlook on the web. Valid values are:

- $true: Supported files can be printed without being downloaded in Outlook on the web. This is the default value.
- $false: Supported files must be downloaded before they can be printed in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProjectMocaEnabled

> Applicable: Exchange Online

**Note**: The feature that's associated with this parameter is currently in Preview, is not available to all organizations, and is subject to change.

This parameter is available only in the cloud-based service.

The ProjectMocaEnabled parameter enables or disables access to Project Moca in Outlook on the web. Valid values are:

- $true: Access to Project Moca is enabled in Outlook on the web.
- $false: Access to Project Moca is disabled in Outlook on the web. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFoldersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in Exchange Server 2010.

The PublicFoldersEnabled parameter specifies whether a user can browse or read items in public folders in Outlook Web App. Valid values are:

- $true: Public folders are available in Outlook Web App. This is the default value.
- $false: Public folders aren't available in Outlook Web App.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecoverDeletedItemsEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in Exchange Server 2010.

The RecoverDeletedItemsEnabled parameter specifies whether a user can use Outlook Web App to view, recover, or delete permanently items that have been deleted from the Deleted Items folder. Valid values are:

- $true: Users can view, recover, or permanently delete items in Outlook Web App. This is the default value.
- $false: Users can't view, recover, or permanently delete items in Outlook Web App. Items deleted from the Deleted Items folder in Outlook Web App are still retained.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReferenceAttachmentsEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The ReferenceAttachmentsEnabled parameter specifies whether users can attach files from the cloud as linked attachments in Outlook on the web. Valid values are:

- $true: Users can attach files that are stored in the cloud as linked attachments. If the file hasn't been uploaded to the cloud yet, the users can attach and upload the file in the same step. This is the default value.
- $false: Users can't share files in the cloud as linked attachments. They need to download a local copy of the file before attaching the file to the email message.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemindersAndNotificationsEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RemindersAndNotificationsEnabled parameter specifies whether notifications and reminders are enabled in Outlook on the web. Valid values are:

- $true: Notifications and reminders are enabled in Outlook on the web. This is the default value.
- $false: Notifications and reminders are disabled in Outlook on the web.

This parameter doesn't apply to the light version of Outlook Web App.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportJunkEmailEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

**Note**: In Exchange Online, this parameter does not affect the ability of users to report messages. Whether a user is able to report messages and where is controlled in the Microsoft Defender portal as described in [User reported message settings](https://learn.microsoft.com/defender-office-365/submissions-user-reported-messages-custom-mailbox).

The ReportJunkEmailEnabled parameter specifies whether users can report messages as junk or not junk to Microsoft in Outlook on the web. Valid values are:

- $true: This is the default value. Selecting a message in the Junk Email folder and clicking **Not junk** \> **Not junk** moves the message back into the Inbox and gives users the option to report the message to Microsoft. Selecting a message in any other email folder and clicking **Junk** \> **Junk folder** moves the message to the Junk Email folder and gives users the option to report the message to Microsoft. Selecting a message and clicking **Not junk** \> **Phishing** (in the Junk Email folder) and **Junk** \> **Phishing** (everywhere else) are available to report phishing messages to Microsoft.
- $false: Selecting a message in the Junk Email folder and clicking **Not junk** \> **Not junk** moves the message back into the Inbox with no option to report the message to Microsoft. Selecting a message in any other email folder and clicking **Junk** \> **Junk** moves the message to the Junk Email folder with no option to report the message to Microsoft. Selecting a message and clicking **Not junk** \> **Phishing** (in the Junk Email folder) and **Junk** \> **Phishing** (everywhere else) are available to report phishing messages to Microsoft.

This parameter is meaningful only when the JunkEmailEnabled parameter is set to $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RulesEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RulesEnabled parameter specifies whether a user can view, create, or modify server-side rules in Outlook on the web. Valid values are:

- $true: Users can view, create, or modify server-side rules in Outlook on the web. This is the default value.
- $false: Users can't view, create, or modify server-side rules in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SatisfactionEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The SatisfactionEnabled parameter specifies whether to enable or disable the satisfaction survey. Valid values are:

- $true: The satisfaction survey is enabled. This is the default value.
- $false: The satisfaction survey is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SaveAttachmentsToCloudEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The SaveAttachmentsToCloudEnabled parameter specifies whether users can save regular email attachments to the cloud. Valid values are:

- $true: Users can save regular email attachments to the cloud. This is the default value.
- $false: Users can only save regular email attachments locally.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchFoldersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SearchFoldersEnabled parameter specifies whether Search Folders are available in Outlook on the web. Valid values are:

- $true: Search Folders are visible in Outlook on the Web. This is the default value.
- $false: Search Folders aren't visible in Outlook on the Web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetPhotoEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SetPhotoEnabled parameter specifies whether users can add, change, and remove their sender photo in Outlook on the web. Valid values are:

- $true: Users can manage their photos in Outlook on the web. This is the default value.
- $false: Users can't manage their user photo in Outlook on the web.

**Note**: To control whether users can update photos for Exchange Online, see [Configure User Administrator support for profile photo updates](https://learn.microsoft.com/graph/profilephoto-configure-settings#configure-user-administrator-support-for-profile-photo-updates).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetPhotoURL

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SetPhotoURL parameter controls where users go to select their photo. Note that you can't specify a URL that contains one or more picture files, as there is no mechanism to copy a URL photo to the properties of the users' Exchange Online mailboxes.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowOnlineArchiveEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill ShowOnlineArchiveEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignaturesEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SignaturesEnabled parameter specifies whether to enable or disable the use of signatures in Outlook on the web. Valid values are:

- $true: Signatures are available in Outlook on the web. This is the default value.
- $false: Signatures aren't available in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SilverlightEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in Exchange Server 2010.

The SilverlightEnabled parameter specifies whether a user can use Microsoft Silverlight features in Outlook Web App. Valid values are:

- $true: Silverlight features are available in Outlook Web App. This is the default value.
- $false: Silverlight features aren't available in Outlook Web App.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipCreateUnifiedGroupCustomSharepointClassification

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in the cloud-based service.

The SkipCreateUnifiedGroupCustomSharepointClassification parameter specifies whether to skip a custom SharePoint page during the creation of Microsoft 365 Groups in Outlook on the web. Valid values are:

- $true: The custom SharePoint page is skipped when a user creates a Microsoft 365 Group in Outlook on the web. This is the default value.
- $false: The custom SharePoint page is shown when a user creates a Microsoft 365 Group in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SMimeEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is functional only in Exchange Server 2010.

The SMimeEnabled parameter specifies whether users can download the S/MIME control for Outlook Web App and use it to read and compose signed and encrypted messages. Valid values are:

- $true: Users can read and compose S/MIME signed and encrypted messages in Outlook Web App. This is the default value.
- $false: Users can't read or compose messages in Outlook Web App that are opaque-signed or encrypted by using S/MIME. Messages that are clear-signed can be read but not composed, and their signatures aren't validated.

**Note**: In Exchange 2013 or later, use the Get-SmimeConfig and Set-SmimeConfig cmdlets to configure the S/MIME settings in Outlook on the web. For more information, see [S/MIME for message signing and encryption](https://learn.microsoft.com/Exchange/policy-and-compliance/smime).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SMimeSuppressNameChecksEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The SMimeSuppressNameChecksEnabled switch specifies whether to suppress name check in S/MIME messages. You don't need to specify a value with this switch.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpellCheckerEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in Exchange Server 2010.

The SpellCheckerEnabled parameter specifies whether to enable or disable the built-in Outlook Web App spell checker in the full version of Outlook Web App. Valid values are:

- $true: Spell checking is available in Outlook Web App. This is the default value.
- $false: Spell checking isn't available in Outlook Web App.

This parameter doesn't apply to the light version of Outlook Web App.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TasksEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in on-premises Exchange.

The TasksEnabled parameter specifies whether Tasks folder is available in Outlook Web App. Valid values are:

- $true: The Tasks folder is available in Outlook Web App. This is the default value.
- $false: The Tasks folder isn't available in Outlook Web App.

This parameter doesn't apply to the light version of Outlook Web App.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamSnapCalendarsEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The TeamSnapCalendarsEnabled parameter specifies whether to allow users to connect to their personal TeamSnap calendars in Outlook on the web. Valid values are:

- $true: Users can connect to their TeamSnap calendars to see those events in their Outlook on the web calendar. This is the default value.
- $false: Users can't connect to their TeamSnap calendars in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TextMessagingEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The TextMessagingEnabled parameter specifies whether users can send and receive text messages in Outlook on the web. Valid values are:

- $true: Text messaging is available in Outlook on the web. This is the default value.
- $false: Text messaging isn't available in Outlook on the web.

This parameter doesn't apply to the light version of Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThemeSelectionEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ThemeSelectionEnabled parameter specifies whether users can change the theme in Outlook on the web. Valid values are:

- $true: Users can specify the theme in Outlook on the web. This is the default value.
- $false: Users can't specify or change the theme in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThirdPartyAttachmentsEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMIntegrationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The UMIntegrationEnabled parameter specifies whether Unified Messaging (UM) integration is enabled in Outlook on the web. Valid values are:

- $true: UM integration is enabled in Outlook on the web. This is the default value.
- $false: UM integration is disabled in Outlook on the web.

This setting applies only if Unified Messaging has been enabled for a user (for example, bu using the Enable-UMMailbox cmdlet).

This parameter doesn't apply to the light version of Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UNCAccessOnPrivateComputersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

This parameter has been deprecated and is no longer used.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UNCAccessOnPublicComputersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

This parameter has been deprecated and is no longer used.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseGB18030

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The UseGB18030 parameter specifies whether to use the GB18030 character set instead of GB2312 in Outlook on the web. Valid values are:

- $true: GB18030 is used wherever GB2312 would have been used in Outlook on the web.
- $false: GB2312 isn't replaced by GB18030 in Outlook on the web. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseISO885915

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The UseISO885915 parameter specifies whether to use the character set ISO8859-15 instead of ISO8859-1 in Outlook on the web. Valid values are:

- $true: ISO8859-15 is used wherever ISO8859-1 would have been used in Outlook on the web.
- $false: ISO8859-1 isn't replaced by GB18030 in Outlook on the web. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserVoiceEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is functional only in the cloud-based service.

The UserVoiceEnabled parameter specifies whether to enable or disable Outlook UserVoice in Outlook on the web. Outlook UserVoice is a customer feedback area that's available in Microsoft 365. Valid values are:

- $true: Outlook UserVoice is enabled. This is the default value.
- $false: Outlook UserVoice is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WacEditingEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The WacEditingEnabled parameter specifies whether to enable or disable editing documents in Outlook on the web by using Office Online Server (formerly known as Office Web Apps Server and Web Access Companion Server). Valid values are:

- $true: Users can edit supported documents in Outlook on the web. This is the default value.
- $false: Users can't edit supported documents in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WacExternalServicesEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WacExternalServicesEnabled parameter specifies whether to enable or disable external services when viewing documents in Outlook on the web (for example, machine translation) by using Office Online Server. Valid values are:

- $true: External services are enabled when viewing supported documents in Outlook on the web. This is the default value.
- $false: External services are disabled when viewing supported documents in Outlook on the web.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WacOMEXEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WacOMEXEnabled parameter specifies whether to enable or disable apps for Outlook in Outlook on the web in Office Online Server. Valid values are:

- $true: apps for Outlook are enabled in Outlook on the web.
- $false: apps for Outlook are disabled in Outlook on the web. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WacViewingOnPrivateComputersEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WacViewingOnPrivateComputersEnabled parameter specifies whether to enable or disable web viewing of supported Office documents private computer sessions in Office Online Server (formerly known as Office Web Apps Server and Web Access Companion Server). By default, all Outlook on the web sessions are considered to be on private computers. Valid values are:

- $true: In private computer sessions, users can view supported Office documents in the web browser. This is the default value.
- $false: In private computer sessions, users can't view supported Office documents in the web browser. Users can still open the file in a supported application or save the file locally.

By default in Exchange 2013 or later and Exchange Online, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WacViewingOnPublicComputersEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WacViewingOnPublicComputersEnabled parameter specifies whether to enable or disable web viewing of supported Office documents in public computer sessions in Office Online Server. Valid values are:

- $true: In public computer sessions, users can view supported Office documents in the web browser. This is the default value.
- $false: In public computer sessions, users can't view supported Office documents in the web browser. Users can still open the file in a supported application or save the file locally.

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeatherEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The WeatherEnabled parameter specifies whether to enable or disable weather information in the calendar in Outlook on the web. Valid values are:

- $true: Weather is enabled. This is the default value.
- $false: Weather is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebPartsFrameOptionsType

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WebPartsFrameOptionsType parameter specifies what sources can access web parts in IFRAME or FRAME elements in Outlook on the web. Valid values are:

- None: There are no restrictions on displaying Outlook on the web content in a frame.
- SameOrigin: This is the default value and the recommended value. Display Outlook on the web content only in a frame that has the same origin as the content.
- Deny: Blocks display of Outlook on the web content in a frame, regardless of the origin of the site attempting to access it.

```yaml
Type: WebPartsFrameOptions
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyDocumentViewingForAllSupportedTypes

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

The WebReadyDocumentViewingForAllSupportedTypes parameter specifies whether to enable WebReady Document Viewing for all supported file and MIME types. Valid values are:

- $true: All supported attachment types are available for WebReady Document Viewing. This is the default value.
- $false: Only the attachment types that are specified by the WebReadyFileTypes and WebReadyMimeTypes parameters are available for WebReady Document Viewing (you can remove values from the lists).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyDocumentViewingOnPrivateComputersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

The WebReadyDocumentViewingOnPrivateComputersEnabled parameter specifies whether WebReady Document Viewing is available in private computer sessions. Valid values are:

- $true: WebReady Document Viewing is available in private computer sessions. This is the default value.
- $false: WebReady Document Viewing isn't available in private computer sessions.

By default in Exchange 2013, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyDocumentViewingOnPublicComputersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

The WebReadyDocumentViewingOnPublicComputersEnabled parameter specifies whether WebReady Document Viewing is in public computer sessions. Valid values are:

- $true: WebReady Document Viewing is available for public computer sessions. This is the default value.
- $false: WebReady Document Viewing isn't available for public computer sessions.

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyDocumentViewingSupportedFileTypes

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

This is a read-only parameter that can't be modified; use the WebReadyFileTypes parameter instead.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyDocumentViewingSupportedMimeTypes

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

This is a read-only parameter that can't be modified; use the WebReadyMimeTypes parameter instead.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyFileTypes

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

The WebReadyFileTypes parameter specifies the attachment file types (file extensions) that can be viewed by WebReady Document Viewing in Outlook on the web. The default value is all supported file types:

- .doc
- .docx
- .dot
- .pdf
- .pps
- .ppt
- .pptx
- .rtf
- .xls
- .xlsx

You can only remove or add values from within the list of supported file types (you can't add additional values).

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

This list is used only if the WebReadyDocumentViewingForAllSupportedTypes parameter is set to $false. Otherwise, all supported file types are available in WebReady Document Viewing.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyMimeTypes

> Applicable: Exchange Server 2010, Exchange Server 2013

This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

The WebReadyMimeTypes parameter specifies the MIME extensions of attachments that allow the attachments to be viewed by WebReady Document Viewing in Outlook on the web. The default value is all supported MIME types:

- application/msword
- application/pdf
- application/vnd.ms-excel
- application/vnd.ms-powerpoint
- application/vnd.openxmlformats-officedocument.presentationml.presentation
- application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
- application/vnd.openxmlformats-officedocument.wordprocessingml.document
- application/x-msexcel
- application/x-mspowerpoint

You can only remove or add values from within the list of supported file types (you can't add additional values).

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

This list is used only if the WebReadyDocumentViewingForAllSupportedTypes parameter is set to $false. Otherwise, all supported MIME types are available in WebReady Document Viewing.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WSSAccessOnPrivateComputersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter has been deprecated and is no longer used.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WSSAccessOnPublicComputersEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter has been deprecated and is no longer used.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

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

[New-OwaMailboxPolicy](https://learn.microsoft.com/powershell/module/exchangepowershell/new-owamailboxpolicy)

[Get-OwaMailboxPolicy](https://learn.microsoft.com/powershell/module/exchangepowershell/get-owamailboxpolicy)

[Set-CASMailbox](https://learn.microsoft.com/powershell/module/exchangepowershell/set-casmailbox)

[Outlook on the web mailbox policy procedures in Exchange Online](https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/outlook-web-app-mailbox-policy-procedures)
