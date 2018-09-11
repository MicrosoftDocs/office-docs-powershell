---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-OwaMailboxPolicy
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-OwaMailboxPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-OwaMailboxPolicy cmdlet to configure existing Outlook on the web mailbox policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-OwaMailboxPolicy [-Identity] <MailboxPolicyIdParameter>
 [-ActionForUnknownFileAndMIMETypes <Allow | ForceSave | Block>]
 [-ActiveSyncIntegrationEnabled <$true | $false>]
 [-AllAddressListsEnabled <$true | $false>]
 [-AllowCopyContactsToDeviceAddressBook <$true | $false>]
 [-AllowedFileTypes <MultiValuedProperty>]
 [-AllowedMimeTypes <MultiValuedProperty>]
 [-AllowOfflineOn <PrivateComputersOnly | NoComputers | AllComputers>]
 [-BlockedFileTypes <MultiValuedProperty>]
 [-BlockedMimeTypes <MultiValuedProperty>]
 [-CalendarEnabled <$true | $false>]
 [-ChangePasswordEnabled <$true | $false>]
 [-ClassicAttachmentsEnabled <$true | $false>]
 [-ConditionalAccessPolicy <Off | ReadOnly | ReadOnlyPlusAttachmentsBlocked>]
 [-Confirm]
 [-ContactsEnabled <$true | $false>]
 [-DefaultClientLanguage <Int32>]
 [-DefaultTheme <String>]
 [-DelegateAccessEnabled <$true | $false>]
 [-DirectFileAccessOnPrivateComputersEnabled <$true | $false>]
 [-DirectFileAccessOnPublicComputersEnabled <$true | $false>]
 [-DisableFacebook]
 [-DisplayPhotosEnabled <$true | $false>]
 [-DomainController <Fqdn>]
 [-ExplicitLogonEnabled <$true | $false>]
 [-ExternalSPMySiteHostURL <String>]
 [-ForceSaveAttachmentFilteringEnabled <$true | $false>]
 [-ForceSaveFileTypes <MultiValuedProperty>]
 [-ForceSaveMimeTypes <MultiValuedProperty>]
 [-ForceWacViewingFirstOnPrivateComputers <$true | $false>]
 [-ForceWacViewingFirstOnPublicComputers <$true | $false>]
 [-ForceWebReadyDocumentViewingFirstOnPrivateComputers <$true | $false>]
 [-ForceWebReadyDocumentViewingFirstOnPublicComputers <$true | $false>]
 [-FreCardsEnabled <$true | $false>]
 [-GlobalAddressListEnabled <$true | $false>]
 [-GroupCreationEnabled <$true | $false>]
 [-InstantMessagingEnabled <$true | $false>]
 [-InstantMessagingType <None | Ocs | Msn>]
 [-InterestingCalendarsEnabled <$true | $false>]
 [-InternalSPMySiteHostURL <String>]
 [-IRMEnabled <$true | $false>]
 [-IsDefault]
 [-JournalEnabled <$true | $false>]
 [-JunkEmailEnabled <$true | $false>]
 [-LinkedInEnabled <$true | $false>]
 [-LocalEventsEnabled <$true | $false>]
 [-LogonAndErrorLanguage <Int32>]
 [-Name <String>]
 [-NotesEnabled <$true | $false>]
 [-OrganizationEnabled <$true | $false>]
 [-OneDriveAttachmentsEnabled <$true | $false>]
 [-OnSendAddinsEnabled <$true | $false>]
 [-OutboundCharset <AlwaysUTF8 | AutoDetect | UserLanguageChoice>]
 [-OutlookBetaToggleEnabled <$true | $false>] [<CommonParameters>]
 [-OWALightEnabled <$true | $false>]
 [-OWAMiniEnabled <$true | $false>]
 [-PhoneticSupportEnabled <$true | $false>]
 [-PlacesEnabled <$true | $false>]
 [-PremiumClientEnabled <$true | $false>]
 [-PrintWithoutDownloadEnabled <$true | $false>]
 [-PublicFoldersEnabled <$true | $false>]
 [-RecoverDeletedItemsEnabled <$true | $false>]
 [-ReferenceAttachmentsEnabled <$true | $false>]
 [-RemindersAndNotificationsEnabled <$true | $false>]
 [-ReportJunkEmailEnabled <$true | $false>]
 [-RulesEnabled <$true | $false>]
 [-SatisfactionEnabled <$true | $false>]
 [-SaveAttachmentsToCloudEnabled <$true | $false>]
 [-SearchFoldersEnabled <$true | $false>]
 [-SetPhotoEnabled <$true | $false>]
 [-SetPhotoURL <String>]
 [-SignaturesEnabled <$true | $false>]
 [-SilverlightEnabled <$true | $false>]
 [-SkipCreateUnifiedGroupCustomSharepointClassification <$true | $false>]
 [-SMimeEnabled <$true | $false>] [-SpellCheckerEnabled <$true | $false>]
 [-TasksEnabled <$true | $false>]
 [-TextMessagingEnabled <$true | $false>]
 [-ThemeSelectionEnabled <$true | $false>]
 [-ThirdPartyAttachmentsEnabled <$true | $false>]
 [-ThirdPartyFileProvidersEnabled <$true | $false>]
 [-UMIntegrationEnabled <$true | $false>]
 [-UNCAccessOnPrivateComputersEnabled <$true | $false>]
 [-UNCAccessOnPublicComputersEnabled <$true | $false>]
 [-UseGB18030 <$true | $false>]
 [-UseISO885915 <$true | $false>]
 [-UserVoiceEnabled <$true | $false>]
 [-WacEditingEnabled <$true | $false>]
 [-WacExternalServicesEnabled <$true | $false>]
 [-WacOMEXEnabled <$true | $false>]
 [-WacViewingOnPrivateComputersEnabled <$true | $false>]
 [-WacViewingOnPublicComputersEnabled <$true | $false>]
 [-WeatherEnabled <$true | $false>]
 [-WebPartsFrameOptionsType <Deny | AllowFrom | None | SameOrigin>]
 [-WebReadyDocumentViewingForAllSupportedTypes <$true | $false>]
 [-WebReadyDocumentViewingOnPrivateComputersEnabled <$true | $false>]
 [-WebReadyDocumentViewingOnPublicComputersEnabled <$true | $false>]
 [-WebReadyDocumentViewingSupportedFileTypes <MultiValuedProperty>]
 [-WebReadyDocumentViewingSupportedMimeTypes <MultiValuedProperty>]
 [-WebReadyFileTypes <MultiValuedProperty>]
 [-WebReadyMimeTypes <MultiValuedProperty>]
 [-WhatIf]
 [-WSSAccessOnPrivateComputersEnabled <$true | $false>]
 [-WSSAccessOnPublicComputersEnabled <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
In on-premises Exchange, the default Outlook on the web mailbox policy is named Default. In Office 365, the default Outlook on the web mailbox policy is named OwaMailboxPolicy-Default.

Changes to Outlook on the web mailbox polices may take up to 60 minutes to take effect. In on-premises Exchange, you can force an update by restarting IIS (Stop-Service WAS -Force and Start-Service W3SVC).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-OwaMailboxPolicy -Identity EMEA\Contoso\Corporate -CalendarEnabled $false
```

This example disables access to the calendar for the mailbox policy named Corporate for the tenant Contoso in the organization EMEA.

### -------------------------- Example 2 --------------------------
```
Set-OwaMailboxPolicy -Identity Default -TasksEnabled $false
```

This example disables access to the Tasks folder for the default mailbox policy in an on-premises Exchange organization.

### -------------------------- Example 3 --------------------------
```
Set-OwaMailboxPolicy -Identity OwaMailboxPolicy-Default -AllowedFileTypes '.doc', '.pdf'
```

This example sets the allowed file type extensions to .doc and .pdf for the default mailbox policy in an Office 365 organization, allowing users to save files with those extensions locally or view them from a web browser.

### -------------------------- Example 4 --------------------------
```
Set-OwaMailboxPolicy -Identity OwaMailboxPolicy-Default -UserVoiceEnabled $false
```

This example disables Outlook UserVoice for the default mailbox policy in Office 365.

## PARAMETERS

### -Identity
The Identity parameter specifies the Outlook on the web mailbox policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActionForUnknownFileAndMIMETypes
The ActionForUnknownFileAndMIMETypes parameter specifies how to handle file types that aren't specified in the Allow, Block, and Force Save lists for file types and MIME types. Valid values are:

- Allow (This is the default value.)

- ForceSave

- Block

```yaml
Type: Allow | ForceSave | Block
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncIntegrationEnabled
The ActiveSyncIntegrationEnabled parameter specifies whether to enable or disable Exchange ActiveSync settings in Outlook on the web. Valid values are:

- $true: ActiveSync is available in Outlook on the web. This is the default value.

- $false: ActiveSync isn't avaialble in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllAddressListsEnabled
The AllAddressListsEnabled parameter specifies which address lists are available in Outlook on the web. Valid values are:

- $true: All address lists are visible in Outlook on the web. This is the default value.

- $false: Only the global address list is visible in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCopyContactsToDeviceAddressBook
The AllowCopyContactsToDeviceAddressBook parameter specifies whether users can copy the contents of their Contacts folder to a mobile device's native address book when using Outlook on the web for devices. Valid values are:

- $true: Contacts can be copied to the device's address book in Outlook on the web for devices. This is the default value.

- $false: Contacts cann't be copied to the device's address book in Outlook on the web for devices.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedFileTypes
The AllowedFileTypes parameter specifies the attachment file types (file extensions) that can be saved locally or viewed from Outlook on the web. The default values are:

.avi, .bmp, .doc, .docm, .docx, .gif, .jpg, .mp3, .one, .pdf, .png, .ppsm, .ppsx, .ppt, .pptm, .pptx, .pub, .rpmsg, .rtf, .tif, .tiff, .txt, .vsd, .wav, .wma, .wmv, .xls, .xlsb, .xlsm, .xlsx, .zip

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

If the same file types are specified in multiple lists:

- The Allow list overrides the Block list and the Force Save list.

- The Block list overrides the Force Save list. 

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedMimeTypes
The AllowedMimeTypes parameter specifies the MIME extentions of attachments that allow the attachments to be saved locally or viewed from Outlook on the web. The default values are:

- image/bmp

- image/gif

- image/jpeg

- image/png

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

If the same MIME types are specified in multiple lists:

- The Allow list overrides the Block list and the Force Save list.

- The Block list overrides the Force Save list. 

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOfflineOn
The AllowOfflineOn parameter specifies when Outlook on the web in offline mode is avaialble for supported web browsers. Valid values are:

- PrivateComputersOnly: Offline mode is available in private computer sessions. By default in Exchange 2013 or later and Exchange Online, all Outlook on the web sessions are considered to be on private computers. In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).

- NoComputers: Offline mode is disabled.

- AllComputers: Offline mode is available for public and private computer sessions. This is the default value. 

When offline mode is available, uers can turn offline mode on or off themselves in Outlook on the web. For more information, see [Using Outlook Web App offline](https://go.microsoft.com/fwlink/p/?linkid=267644).

```yaml
Type: PrivateComputersOnly | NoComputers | AllComputers
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedFileTypes
The BlockedFileTypes parameter specifies a list of attachment file types (file extensions) that can't be saved locally or viewed from Outlook on the web. The default values are:

.ade, .adp, .app, .asp, .aspx, .asx, .bas, .bat, .chm, .cmd, .com, .cpl, .csh, .exe, .fxp, .gadget, .hlp, .hta, .htc, .inf, .ins, .isp, .its, .js, .jse, .ksh, .lnk, .mad, .maf, .mag, .mam, .maq, .mar, .mas, .mat, .mau, .mav, .maw, .mda, .mdb, .mde, .mdt, .mdw, .mdz, .mht, .mhtml, .msc, .msh, .msh1, .msh1xml, .msh2, .msh2xml, .mshxml, .msi, .msp, .mst, .ops, .pcd, .pif, .plg, .prf, .prg, .ps1, .ps1xml, .ps2, .ps2xml, .psc1, .psc2, .pst, .reg, .scf, .scr, .sct, .shb, .shs, .tmp, .url, .vb, .vbe, .vbs, .vsmacros, .vss, .vst, .vsw, .ws, .wsc, .wsf, .wsh

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

If the same file types are specified in multiple lists:

- The Allow list overrides the Block list and the Force Save list.

- The Block list overrides the Force Save list. 

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedMimeTypes
The BlockedMimeTypes parameter specifies MIME extentions in attachments that prevent the attachments from being saved locally or viewed from Outlook on the web. The default values are:

- application/hta

- application/javascript

- application/msaccess

- application/prg

- application/x-javascript

- text/javascript

- text/scriplet

- x-internet-signup

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

If the same MIME types are specified in multiple lists:

- The Allow list overrides the Block list and the Force Save list.

- The Block list overrides the Force Save list. 

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarEnabled
The CalendarEnabled parameter specifies whether to enable or disable the calendar in Outlook on the web. Valid values are:

- $true: The Calendar is available in Outlook on the web. This is the default value.

- $false: The Calendar isn't available in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChangePasswordEnabled
This parameter is available or functional only in on-premises Exchange.

The ChangePasswordEnabled parameter specifies whether users can change their passwords from inside Outlook on the web. Valid values are:

- $true: The Change password option is available in Outlook on the web. This is the default value in on-premises Exchange.

- $false: The Change password option isn't available in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClassicAttachmentsEnabled
The ClassicAttachmentsEnabled parameter specifies whether users can attach local files as regular email attachments in Outlook on the web. Valid values are:

- $true: Users can attach local files to email messages in Outlook on the web. This is the default value.

- $false: Users can't attach local files to email messages in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalAccessPolicy
This parameter is available only in the cloud-based service.

The ConditionalAccessPolicy parameter specifies the conditional access policy for Outlook on the web. Valid values are:

- Off: No conditional access policy is applied to Outlook on the web. This is the default value.

- ReadOnly

- ReadOnlyPlusAttachmentsBlocked

```yaml
Type: Off | ReadOnly | ReadOnlyPlusAttachmentsBlocked
Parameter Sets: (All)
Aliases:
Applicable: xchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContactsEnabled
The ContactsEnabled parameter specifies whether to enable or disable Contacts in Outlook on the web. Valid values are:

- $true: Contacts are available in Outlook on the web. This is the default value.

- $false: Contacts aren't available in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultClientLanguage
This parameter has been deprecated and is no longer used.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultTheme
The DefaultTheme parameter specifies the default theme that's used in Outlook on the web when the user hasn't selected a theme. The default value is blank ($null). For more information about the built-in themes that are avaialble in Outlook on the web, see [Default Outlook on the web themes in Exchange](https://docs.microsoft.com/Exchange/clients/outlook-on-the-web/themes#default-outlook-on-the-web-themes-in-exchange-2016).

Note that this parameter is a text string, and the value you specify isn't validated against the list of available themes.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DelegateAccessEnabled
This parameter is available or functional only in Exchange Server 2010.

The DelegateAccessEnabled parameter specifies whether delegates can use Outlook Web App to open folders that they have delegate access to. Valid values are:

- $true: Delegates can open the mailbox in Outlook Web App. This is the default value.

- $false: Delegates can't open the mailbox in Outlook Web App.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DirectFileAccessOnPrivateComputersEnabled
The DirectFileAccessOnPrivateComputersEnabled parameter specifies the left-click options for attachments in Outlook on the web for private computer sessions. Valid values are:

- $true: Open is available for attachments in Outlook on the web for private computer sessions. This is the default value.

- $false: Open isn't available for attachments in Outlook on the web for private computer sessions. Note that Office and .pdf documents can still be previewed in Outlook on the web.

By default in Exchange 2013 or later and Exchange Online, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DirectFileAccessOnPublicComputersEnabled
The DirectFileAccessOnPrivateComputersEnabled parameter specifies the left-click options for attachments in Outlook on the web for public computer sessions. Valid values are:

- $true: Open is available for attachments in Outlook on the web for public computer sessions. This is the default value.

- $false: Open isn't available for attachments in Outlook on the web for public computer sessions. Note that Office and .pdf documents can still be previewed in Outlook on the web.

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableFacebook
This parameter is available only in the cloud-based service.

The DisableFacebook switch specifies whether users can synchronize their Facebook contacts to their Contacts folder in Outlook on the web. By default, Facebook integration is enabled.

- To disable Facebook integration, use this switch without a value.

- To enable Facebook ingetration after it's been disabled, use this exact syntax: -DisableFacebook:$false.

Note that the value of this parameter is stored in the FacebookEnabled property in the output of the Get-OwaMailboxPolicy cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayPhotosEnabled
The DisplayPhotosEnabled parameter specifies whether users see sender photos in Outlook on the web. Valid values are:

- $true: Users see sender photos in Outlook on the web. This is the default value.

- $false: Users don't see sender photos in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExplicitLogonEnabled
The ExplicitLogonEnabled parameter specifies whether to allow a user to open someone else's mailbox in Outlook on the web (provided that user has permissions to the mailbox). Valid values are:

- $true: A user with the required permissions is able to open someone else's mailbox in Outlook on the web. This is the default value.

- $false: A user with the required permissions isn't able to open someone else's mailbox in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalSPMySiteHostURL
The ExternalSPMySiteHostURL specifies the My Site Host URL for external users (for example, https://sp01.contoso.com).

This parameter is part of rich document collaboration that allows links to documents in OneDrive for Business to appear as regular file attachments in messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceSaveAttachmentFilteringEnabled
The ForceSaveAttachmentFilteringEnabled parameter specifies whether files are filtered before they can be saved from Outlook on the web. Valid values are:

- $true: The attachments specified by the ForceSaveFileTypes parameter are filtered before they can be saved from Outlook on the web.

- $false: The attachments aren't filtered before they're saved. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceSaveFileTypes
The ForceSaveFileTypes parameter specifies the attachment file types (file extensions) that can only be saved from Outlook on the web (not opened). The default values are:

.ade, .adp, .app, .asp, .aspx, .asx, .bas, .bat, .cer, .chm, .cmd, .com, .cpl, .crt, .csh, .dcr, .dir, .exe, .fxp, .gadget, .hlp, .hta, .htm, .html, .inf, .ins, .isp, .its, .js, .jse, .ksh, .lnk, .mad, .maf, .mag, .mam, .maq, .mar, .mas, .mat, .mau, .mav, .maw, .mda, .mdb, .mde, .mdt, .mdw, .mdz, .msc, .msh, .mshxml, .msi, .msp, .mst, .ops, .pcd, .pif, .plg, .prf, .prg, .ps1, .ps1xml, .ps2, .ps2xml, .psc1, .psc2, .pst, .reg, .scf, .scr, .sct, .shb, .shs, .spl, .swf, .tmp, .url, .vb, .vbe, .vbs, .vsmacro, .vss, .vst, .vsw, .ws, .wsc, .wsf, .wsh

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

If the same file types are specified in multiple lists:

- The Allow list overrides the Block list and the Force Save list.

- The Block list overrides the Force Save list. 

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceSaveMimeTypes
The ForceSaveMimeTypes parameter specifies the MIME extentions in attachments that only allow the attachments to be saved locally (not opened). The default values are:

- Application/futuresplash

- Application/octet-stream

- Application/x-director

- Application/x-shockwave-flash

- text/html

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

If the same MIME types are specified in multiple lists:

- The Allow list overrides the Block list and the Force Save list.

- The Block list overrides the Force Save list. 

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceWacViewingFirstOnPrivateComputers
The ForceWacViewingFirstOnPrivateComputers parameter specifies whether private computers must first preview an Office file as a web page in Office Online Server (formerly known as Office Web Apps Server and Web Access Companion Server) before opening the file in the local application. Valid values are:

- $true: Private computers must first preview an Office file as a web page in Office Online Server before opening the file.

- $false: Private computers aren't required to preview an Office file as a web page in Office Online Server before opening the file. This is the default value.

By default in Exchange 2013 or later and Exchange Online, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceWacViewingFirstOnPublicComputers
The ForceWacViewingFirstOnPublicComputers parameter specifies whether public computers must first preview an Office file as a web page in Office Online Server before opening the file in the local application. Valid values are:

- $true: Public computers must first preview an Office file as a web page in Office Online Server before opening the file.

- $false: Public computers aren't required to preview an Office file as a web page in Office Online Server before opening the file. This is the default value.

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceWebReadyDocumentViewingFirstOnPrivateComputers
This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The ForceWebReadyDocumentViewingFirstOnPrivateComputers parameter specifies whether private computers must first preview an Office file as a web page in WebReady Document Viewing before opening the file from Outlook Web App. Valid values are:

- $true: Private computers must first preview an Office file as a web page in WebReady Document Viewing before opening the file.

- $false: Private computers aren't required to preview an Office file as a web page in WebReady Document Viewing before opening the file. This is the default value.

By default in Exchange 2013 or later and Exchange Online, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceWebReadyDocumentViewingFirstOnPublicComputers
This parameter is available only in Exchange Server 2010 or Exchange Server 2013.

The ForceWebReadyDocumentViewingFirstOnPublicComputers parameter specifies whether Public computers must first preview an Office file as a web page in WebReady Document Viewing before opening the file from Outlook Web App. Valid values are:

- $true: Public computers must first preview an Office file as a web page in WebReady Document Viewing before opening the file.

- $false: Public computers aren't required to preview an Office file as a web page in WebReady Document Viewing before opening the file. This is the default value.

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FreCardsEnabled
This parameter is available only in the cloud-based service.

The FreCardsEnabled parameter specifies whether the theme, signature, and phone cards are available in Outlook on the web. Valid values are:

- $true: The theme, signature, and phone cards are visible in Outlook on the web. This is the default value.

- $false: The theme, signature, and phone cards aren't visible in Outlook on the web. Only the introduction, time zone, and final cards are visible.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalAddressListEnabled
The GlobalAddressListEnabled parameter specifies whether the global address list is available in Outlook on the web. Valid values are:

- $true: The global address list is visible in Outlook on the web. This is the default value.

- $false: The global address list isn't visible in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupCreationEnabled
This parameter is available or functional only in the cloud-based service.

The GroupCreationEnabled parameter specifies whether Office 365 group creation is available in Outlook on the web. Valid values are:

- $true: Users can create Office 365 groups in Outlook on the web. This is the default value.

- $false: Users can't create Office 365 groups in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InstantMessagingEnabled
The InstantMessagingEnabled parameter specifies whether instant messaging is available in Outlook on the web. Valid values are:

- $true: Instant messaging is available in Outlook on the web. This is the default value.

- $false: Instnant messaging isn't available in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InstantMessagingType
The InstantMessagingType parameter specifies the type of instant messaging provider in Outlook on the web. Valid values are:

- None: This is the default value in on-premises Exchange.

- Ocs: Lync or Skype (formerly known as Office Communication Server). This is the default value in Exchange Online.

```yaml
Type: None | Ocs | Msn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -InterestingCalendarsEnabled
This parameter is available only in the cloud-based service.

The InterestingCalendarsEnabled parameter specifies whether interesting calendars are avaialble in Outlook on the web. Valid values are:

- $true: Interesting calendars are available in Outlook on thew web. This is the default value.

- $false: Interesting calendars aren't available in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalSPMySiteHostURL
The InternalSPMySiteHostURL specifies the My Site Host URL for internal users (for example, https://sp01.contoso.com).

This parameter is part of rich document collaboration that allows links to documents in OneDrive for Business to appear as regular file attachments in messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IRMEnabled
The IRMEnabled parameter specifies whether Information Rights Management (IRM) features are avaiable in Outlook on the web. Valid values are:

- $true: IRM is available in Outlook on the web. This is the default value.

- $false: IRM isn't available in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefault
The IsDefault switch specifies whether the Outlook on the web policy is the default policy that's used to configure the Outlook on the web settings for new mailboxes. You don't need to specify a value with this switch.

 If another policy is currently set as the default, this switch replaces the old default policy with this policy.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JournalEnabled
The JournalEnabled parameter specifies whether the Journal folder is available in Outlook on the web. Valid values are:

- $true: The Journal folder is visible in Outlook on the web. This is the default value.

- $false: The Journal folder isn't visible in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JunkEmailEnabled
This parameter is available only in on-premises Exchange.

The JunkEmailEnabled parameter specifies whether the Junk Email folder and junk email management are available in Outlook on the web.

- $true: The Junk Email folder and junk email management are avaialble in Outlook on the web. This is the default value.

- $false: The Junk Email folder and junk email management aren't available in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedInEnabled
This parameter is available only in the cloud-based service.

The LinkedInEnabled parameter specifies whether users can synchronize their LinkedIn contacts to their Contacts folder. Valid values are:

- $true: LinkedIn integration is enabled. This is the default value.

- $false: LinkedIn integration is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalEventsEnabled
This parameter is available only in the cloud-based service.

The LocalEventsEnabled parameter specifies whether local events calendars are available in Outlook on the web. Valid values are:

- $true: Local events are available in Outlook on the web.

- $false: Local events aren't available in Outlook on the web. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogonAndErrorLanguage
The LogonAndErrorLanguage parameter specifies the language that used in Outlook on the web for forms-based authentication and for error messages when a user's current language setting can't be read.

A valid value is a supported Microsoft Windows Language Code Identifier (LCID). For example, 1033 is US English.

The default value is 0, which means the logon and error language selection is undefined.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name for the policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotesEnabled
The NotesEnabled parameter specifies whether the Notes folder is available in Outlook on the web. Valid values are:

- $true: The Notes folder is visible in Outlook on the web. This is the default value.

- $false: The Notes folder isn't visible in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveAttachmentsEnabled
The OneDriveAttachmentsEnabled parameter specifies whether to allow OneDrive attachments in Outlook on the web. Valid values are:

- $true: OneDrive attachments are enabled. This is the default value.

- $false: OneDrive attachments are disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnSendAddinsEnabled
This parameter is available or functional only in the cloud-based service.

The OnSendAddinsEnabled parameter specifies whether to enable or disable on send add-ins in Outlook on the web (add-ins that support events when a user clicks Send). Valid values are:

- $true: On send add-ins are enabled.

- $false: On send add-ins are disabled. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationEnabled
When the OrganizationEnabled parameter is set to $false, the Automatic Reply option doesn't include external and internal options, the address book doesn't show the organization hierarchy, and the Resources tab in Calendar forms is disabled. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutboundCharset
The OutboundCharset parameter specifies the character set that's used for outgoing messages in Outlook on the web. Valid values are:

- AutoDetect: Examine the first 2 kilobytes (KB) of text in the message to determine the character set that's used in outgoing messages. This is the default value.

- AlwaysUTF8: Always use UTF-8 encoded UNICODE characters in outgoing messages, regardless of the detected text in the message, or the user's language choice in Outlook on the web. Use this value if replies to UTF-8 encoded messages aren't being encoded in UTF-8.

- UserLanguageChoice: Use the user's language choice in Outlook on the web to encode outgoing messages.

```yaml
Type: AlwaysUTF8 | AutoDetect | UserLanguageChoice
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookBetaToggleEnabled
This parameter is available only in the cloud-based service.

The OutlookBetaToggleEnabled parameter specifies whether to enable or disable the Outlook on the web Preview toggle. The Preview toggle allows users to try the new Outlook on the web experience. Valid values are:

- $true: The Outlook on the web Preview toggle is enabled. Users can easily switch back and forth between both experiences. This is the default value.

- $false: Outlook on the web Preview is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWALightEnabled
The OWALightEnabled parameter controls the availability of the light version of Outlook on the web. Valid values are:

- $true: The light version of Outlook on the web is avaialble. This is the default value.

- $false: The light version of Outlook on the web is isn't avaialble. This setting prevents access to Outlook on the web for unsupported browsers that can only use the light version of Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAMiniEnabled
This parameter is available or functional only in Exchange Server 2010.

The OWAMiniEnabled parameter controls the availability of the mini version of Outlook Web App. Valid values are:

- $true: The mini version of Outlook Web App is avaialble. This is the default value.

- $false: The mini version of Outlook Web App isn't avaialble.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneticSupportEnabled
The PhoneticSupportEnabled parameter specifies phonetically spelled entries in the address book. This parameter is available for use in Japan.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PlacesEnabled
This parameter is available only in the cloud-based service.

The PlacesEnabled parameter specifies whether to enable or disable Places in Outlook on the web. Places lets users search, share, and map location details by using Bing. Valid values are:

- $true: Places is enabled. This is the default value.

- $false: Places is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PremiumClientEnabled
The PremiumClientEnabled parameter controls the availability of the full version of Outlook Web App. Valid values are:

- $true: The full version of Outlook Web App is avaialble for supported browsers. This is the default value.

- $false: The full version of Outlook Web App isn't avaialble.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrintWithoutDownloadEnabled
This parameter is available only in the cloud-based service.

The PrintWithoutDownloadEnabled specifies whether to allow printing of supported files without downloading the attachment in Outlook on the web. Valid values are:

- $true: Supported files can be printed without being downloaded in Outlook web app. This is the default value.

- $false: Supported files must be downloaded before they can be printed in Outlook web app.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFoldersEnabled
This parameter is available or functional only in Exchange Server 2010.

The PublicFoldersEnabled parameter specifies whether a user can browse or read items in public folders in Outlook Web App. Valid values are:

- $true: Public folders are available in Outlook Web App. This is the default value.

- $false: Public folders aren't available in Outlook Web App.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecoverDeletedItemsEnabled
This parameter is available or functional only in Exchange Server 2010.

The RecoverDeletedItemsEnabled parameter specifies whether a user can use Outlook Web App to view, recover, or delete permanently items that have been deleted from the Deleted Items folder. Valid values are:

- $true: Users can view, recover, or permanently delete items in Outlook Web App. This is the default value.

- $false: Users can't view, recover, or permanently delete items in Outlook Web App. Items deleted from the Deleted Items folder in Outlook Web App are still retained.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReferenceAttachmentsEnabled
The ReferenceAttachmentsEnabled parameter specifies whether users can attach files from the cloud as linked attachments in Outlook on the web. Valid values are:

- $true: Users can attach files that are stored in the cloud as linked attachments. If the file hasn't been uploaded to the cloud yet, the users can attach and upload the file in the same step. This is the default value.

- $false: Users can't share files in the cloud as linked attachments. They need to download a local copy of the file before attaching the file to the email message.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemindersAndNotificationsEnabled
The RemindersAndNotificationsEnabled parameter specifies whether notifications and reminders are enabled in Outlook on the web. Valid values are:

- $true: Notifications and reminders are enabled in Outlook on the web. This is the default value.

- $false: Notifications and reminders are disabled in Outlook on the web.

This parameter doesn't apply to the light version of Outlook Web App.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportJunkEmailEnabled
The ReportJunkEmailEnabled parameter specifies whether users can report messages to Microsoft or unsubscribe from messages in Outlook on the web. Valid values are:

- $true: The Report junk, Report phishing or Report not junk options are available after the user selects Mark as junk, Mark as phishing, or Mark as not junk. The Unsubscribe option is also available. This is the default value.

- $false: The Report junk, Report phishing, Report not junk and Unsubscribe options aren't available.

This parameter is meaningful only when the JunkEmailEnabled parameter is set to $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RulesEnabled
The RulesEnabled parameter specifies whether a user can view, create, or modify server-side rules in Outlook on the web. Valid values are:

- $true: Users can view, create, or modify server-side rules in Outlook on the web. This is the default value.

- $false: Users can't view, create, or modify server-side rules in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SatisfactionEnabled
The SatisfactionEnabled parameter specifies whether to enable or disable the satisfaction survey. Valid values are:

- $true: The satisfaction survey is enabled. This is the default value.

- $false: The satisfaction survey is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SaveAttachmentsToCloudEnabled
The SaveAttachmentsToCloudEnabled parameter specifies whether users can save regular email attachments to the cloud. Valid values are:

- $true: Users can save regular email attachments to the cloud. This is the default value.

- $false: Users can only save regular email attachments locally.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchFoldersEnabled
The SearchFoldersEnabled parameter specifies whether Search Folders are available in Outlook on the web. Valid values are:

- $true: Search Folders are visible in Outlook on the Web. This is the default value.

- $false: Search Folders aren't visible in Outlook on the Web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetPhotoEnabled
The SetPhotoEnabled parameter specifies whether users can add, change, and remove their sender photo in Outlook on the web. Valid values are:

- $true: Users can manage their photos in Outlook on the web. This is the default value.

- $false: Users can't manage their user photo in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetPhotoURL
The SetPhotoURL parameter specifies the location (URL) of user photos. The default value of this parameter is blank ($null).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignaturesEnabled
The SignaturesEnabled parameter specifies whether to enable or disable the use of signatures in Outlook on the web. Valid values are:

- $true: Signatures are available in Outlook on the web. This is the default value.

- $false: Signatures aren't available in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SilverlightEnabled
This parameter is available or functional only in Exchange Server 2010.

The SilverlightEnabled parameter specifies whether a user can use Microsoft Silverlight features in Outlook Web App. Valid values are:

- $true: Silverlight features are available in Outlook Web App. This is the default value.

- $false: Silverlight features aren't available in Outlook Web App.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipCreateUnifiedGroupCustomSharepointClassification
This parameter is available only in the cloud-based service.

The SkipCreateUnifiedGroupCustomSharepointClassification parameter specifies whether to skip a custom Sharepoint page during the creation of Office 365 Groups in Outlook web app. Valid values are:

- $true: The custom SharePoint page is skipped when a user creates an Office 365 group in Outlook on the web. This is the default value.

- $false: The custom SharePoint page is shown when a user creates an Office 365 group in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SMimeEnabled
This parameter is available or functional only in Exchange Server 2010.

The SMimeEnabled parameter specifies whether users can download the S/MIME control for Outlook Web App and use it to read and compose signed and encrypted messages. Valid values are:

- $true: Users can read and compose S/MIME signed and encrypted messages in Outlook Web App. This is the default value.

- $false: Users can't read or compose messages in Outlook Web App that are opaque-signed or encrypted by using S/MIME. Messages that are clear-signed can be read but not composed, and their signatures aren't validated.

**Note**: In Exchange 2013 or later, use the Get-SmimeConfig and Set-SmimeConfig cmdlets to configure the S/MIME settings in Outlook on the web. For more information, see {S/MIME for message signing and encryption](https://technet.microsoft.com/library/dn626158.aspx).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpellCheckerEnabled
This parameter is available or functional only in Exchange Server 2010.

The SpellCheckerEnabled parameter specifies whether to enable or disable the built-in Outlook Web App spell checker in the full version of Outlook Web App. Valid values are:

- $true: Spell checking is available in Outlook Web App. This is the default value.

- $false: Spell checking isn't available in Outlook Web App.

This parameter doesn't apply to the light version of Outlook Web App.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TasksEnabled
The TasksEnabled parameter specifies whether Tasks folder is available in Outlook on the web. Valid values are:

- $true: The Tasks folder is available in Outlook on the web. This is the default value.

- $false: The Tasks folder isn't available in Outlook on the web.

This parameter doesn't apply to the light version of Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TextMessagingEnabled
The TextMessagingEnabled parameter specifies whether users can send and receive text messages in Outlook on the web. Valid values are:

- $true: Text messaging is available in Outlook on the web. This is the default value.

- $false: Text messaging isn't available in Outlook on the web.

This parameter doesn't apply to the light version of Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThemeSelectionEnabled
The ThemeSelectionEnabled parameter specifies whether users can change the theme in Outlook on the web. Valid values are:

- $true: Users can specify the theme in Outlook on the web. This is the default value.

- $false: Users can't specify or change the theme in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThirdPartyAttachmentsEnabled
This parameter is available only in the cloud-based service.

This parameter has been deprecated and is no longer used.

To enable or disable third party attachments in Outlook on the web, use the ThirdPartyFileProvidersEnabled parameter.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThirdPartyFileProvidersEnabled
This parameter is available only in the cloud-based service.

The ThirdPartyFileProvidersEnabled parameter specifies whether to allow third-party (for example, Box, Dropbox, and Egnyte) attachments in Outlook on the web. Valid values are:

- $true: Third-party attachments are enabled in Outlook on the web. Users can connect their third-party file sharing accounts and share files over emailp.

- $false: Third-party attachments are disabled in Outlook on the web. Users can't connect their third-party file sharing accounts or share files over email. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMIntegrationEnabled
The UMIntegrationEnabled parameter specifies whether Unified Messaging (UM) integration is enabled in Outlook on the web. Valid values are:

- $true: UM integration is enabled in Outlook on the web. This is the default value.

- $false: UM integration is disabled in Outlook on the web.

This setting applies only if Unified Messaging has been enabled for a user (for example, bu using the Enable-UMMailbox cmdlet).

This parameter doesn't apply to the light version of Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UNCAccessOnPrivateComputersEnabled
This parameter is available only in on-premises Exchange.

This parameter has been deprecated and is no longer used.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UNCAccessOnPublicComputersEnabled
This parameter is available only in on-premises Exchange.

This parameter has been deprecated and is no longer used.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseGB18030
The UseGB18030 parameter specifies whether to use the GB18030 character set instead of GB2312 in Outlook on the web. Valid values are:

- $true: GB18030 is used wherever GB2312 would have been used in Outlook on the web.

- $false: GB2312 isn't replaced by GB18030 in Outlook on the web. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseISO885915
The UseISO885915 parameter specifies whether to use the character set ISO8859-15 instead of ISO8859-1 in Outlook on the web. Valid values are:

- $true: ISO8859-15 is used wherever ISO8859-1 would have been used in Outlook on the web.

- $false: ISO8859-1 isn't replaced by GB18030 in Outlook on the web. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserVoiceEnabled
This parameter is available only in the cloud-based service.

The UserVoiceEnabled parameter specifies whether to enable or disable Outlook UserVoice in Outlook on the web. Outlook UserVoice is a customer feedback area that's available in Office 365. Valid values are:

- $true: Outlook UserVoice is enabled. This is the default value.

- $false: Outlook UserVoice is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WacEditingEnabled
The WacEditingEnabled parameter specifies whether to enable or disable editing documents in Outlook on the web by using Office Online Server (formerly known as Office Web Apps Server and Web Access Companion Server). Valid values are:

- $true: Users can edit supported documents in Outlook on the web. This is the default value.

- $false: Users can't edit supported documents in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WacExternalServicesEnabled
The WacExternalServicesEnabled parameter specifies whether to enable or disable external services when viewing documents in Outlook on the web (for example, machine translation) by using Office Online Server. Valid values are:

- $true: External services are enabled when viewing supported documents in Outlook on the web. This is the default value.

- $false: External services are disabled when viewing supported documents in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WacOMEXEnabled
The WacOMEXEnabled parameter specifies whether to enable or disable apps for Outlook in Outlook on the web in Office Online Server. Valid values are:

- $true: apps for Outlook are enabled in Outlook on the web.

- $false: apps for Outlook are disabled in Outlook on the web. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WacViewingOnPrivateComputersEnabled
The WacViewingOnPrivateComputersEnabled parameter specifies whether to enable or disable web viewing of supported Office documents private computer sessions in Office Online Server (formerly known as Office Web Apps Server and Web Access Companion Server). By default, all Outlook on the web sessions are considered to be on private computers. Valid values are:

- $true: In private computer sessions, users can view supported Office documents in the web browser. This is the default value.

- $false: In private computer sessions, users can't view supported Office documents in the web browser. Users can still open the file in a supported application or save the file locally.

By default in Exchange 2013 or later and Exchange Online, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WacViewingOnPublicComputersEnabled
The WacViewingOnPublicComputersEnabled parameter specifies whether to enable or disable web viewing of supported Office documents in public computer sessions in Office Online Server. Valid values are:

- $true: In public computer sessions, users can view supported Office documents in the web browser. This is the default value.

- $false: In public computer sessions, users can't view supported Office documents in the web browser. Users can still open the file in a supported application or save the file locally.

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeatherEnabled
This parameter is available only in the cloud-based service.

The WeatherEnabled parameter specifies whether to enable or disable weather information in the calendar in Outlook on the web. Valid values are:

- $true: Weather is enabled. This is the default value.

- $false: Weather is disabled. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebPartsFrameOptionsType
The WebPartsFrameOptionsType parameter specifies what sources can access web parts in IFRAME or FRAME elements in Outlook on the web. Valid values are:

- None: Tthere are no restrictions on displaying Outlook on the web content in a frame.

- SameOrigin: This is the default value and the recommended value. Display Outlook on the web content only in a frame that has the same origin as the content.

- Deny: Blocks display of Outlook on the web content in a frame, regardless of the origin of the site attempting to access it.

```yaml
Type: Deny | AllowFrom | None | SameOrigin
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyDocumentViewingForAllSupportedTypes
This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

The WebReadyDocumentViewingForAllSupportedTypes parameter specifies whether to enable WebReady Document Viewing for all supported file and MIME types. Valid values are:

- $true: All supported attachment types are avaialble for WebReady Document Viewing. This is the default value.

- $false: Only the attachment types that are specified by the WebReadyFileTypes and WebReadyMimeTypes parameters are avaialble for WebReady Document Viewing (you can remove values from the lists).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyDocumentViewingOnPrivateComputersEnabled
This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

The WebReadyDocumentViewingOnPrivateComputersEnabled parameter specifies whether WebReady Document Viewing is available in private computer sessions. Valid values are:

- $true: WebReady Document Viewing is availble in private computer sessions. This is the default value.

- $false: WebReady Document Viewing isn't availble in private computer sessions.

By default in Exchange 2013, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyDocumentViewingOnPublicComputersEnabled
This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

The WebReadyDocumentViewingOnPublicComputersEnabled parameter specifies whether WebReady Document Viewing is in public computer sessions. Valid values are:

- $true: WebReady Document Viewing is availble for public computer sessions. This is the default value.

- $false: WebReady Document Viewing isn't availble for public computer sessions.

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyDocumentViewingSupportedFileTypes
This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

This is a read-only parameter that can't be modified; use the WebReadyFileTypes parameter instead.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyDocumentViewingSupportedMimeTypes
This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

This is a read-only parameter that can't be modified; use the WebReadyMimeTypes parameter instead.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyFileTypes
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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

This list is used only if the WebReadyDocumentViewingForAllSupportedTypes parameter is set to $false. Otherwise, all supported file types are available in WebReady Document Viewing.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebReadyMimeTypes
This parameter is available only in Exchange Server 2010 and Exchange Server 2013.

The WebReadyMimeTypes parameter specifies the MIME extentions of attachments that allow the attachments to be viewed by WebReady Document Viewing in Outlook on the web. The default value is all supported MIME types:

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

This list is used only if the WebReadyDocumentViewingForAllSupportedTypes parameter is set to $false. Otherwise, all supported MIME types are available in WebReady Document Viewing.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WSSAccessOnPrivateComputersEnabled
This parameter has been deprecated and is no longer used.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WSSAccessOnPublicComputersEnabled
This parameter has been deprecated and is no longer used.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/530166f7-ab42-4609-ba73-9b5a39b567be.aspx)
