---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Set-OwaVirtualDirectory
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Set-OwaVirtualDirectory

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-OwaVirtualDirectory cmdlet to modify existing Outlook on the web virtual directories that are used in Internet Information Services (IIS) on Exchange servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-OwaVirtualDirectory [-Identity] <VirtualDirectoryIdParameter>
 [-ActionForUnknownFileAndMIMETypes <Allow | ForceSave | Block>]
 [-ActiveSyncIntegrationEnabled <$true | $false>]
 [-AdfsAuthentication <$true | $false>]
 [-AllAddressListsEnabled <$true | $false>]
 [-AllowCopyContactsToDeviceAddressBook <$true | $false>]
 [-AllowOfflineOn <PrivateComputersOnly | NoComputers | AllComputers>]
 [-AllowedFileTypes <MultiValuedProperty>]
 [-AllowedMimeTypes <MultiValuedProperty>]
 [-AnonymousFeaturesEnabled <$true | $false>]
 [-BasicAuthentication <$true | $false>]
 [-BlockedFileTypes <MultiValuedProperty>]
 [-BlockedMimeTypes <MultiValuedProperty>]
 [-BoxAttachmentsEnabled <$true | $false>]
 [-ClassicAttachmentsEnabled <$true | $false>]
 [-DropboxAttachmentsEnabled <$true | $false>]
 [-CalendarEnabled <$true | $false>]
 [-CalendarPublishingEnabled <$true | $false>]
 [-ChangePasswordEnabled <$true | $false>]
 [-ClientAuthCleanupLevel <High | Low>]
 [-Confirm]
 [-ContactsEnabled <$true | $false>]
 [-CrossSiteRedirectType <Silent | Manual>]
 [-DefaultClientLanguage <Int32>]
 [-DefaultDomain <String>]
 [-DefaultTheme <String>]
 [-DelegateAccessEnabled <$true | $false>]
 [-DigestAuthentication <$true | $false>]
 [-DirectFileAccessOnPrivateComputersEnabled <$true | $false>]
 [-DirectFileAccessOnPublicComputersEnabled <$true | $false>]
 [-DisplayPhotosEnabled <$true | $false>]
 [-DomainController <Fqdn>]
 [-Exchange2003Url <Uri>]
 [-ExchwebProxyDestination <NotSpecified | MailboxServer | PublicFolderServer>]
 [-ExplicitLogonEnabled <$true | $false>]
 [-ExtendedProtectionFlags <MultiValuedProperty>]
 [-ExtendedProtectionSPNList <MultiValuedProperty>]
 [-ExtendedProtectionTokenChecking <None | Allow | Require>]
 [-ExternalAuthenticationMethods <MultiValuedProperty>]
 [-ExternalDownloadHostName <String>]
 [-ExternalSPMySiteHostURL <String>]
 [-ExternalUrl <Uri>]
 [-FailbackUrl <Uri>]
 [-FilterWebBeaconsAndHtmlForms <UserFilterChoice | ForceFilter | DisableFilter>]
 [-ForceSaveAttachmentFilteringEnabled <$true | $false>]
 [-ForceSaveFileTypes <MultiValuedProperty>]
 [-ForceSaveMimeTypes <MultiValuedProperty>]
 [-ForceWacViewingFirstOnPrivateComputers <$true | $false>]
 [-ForceWacViewingFirstOnPublicComputers <$true | $false>]
 [-ForceWebReadyDocumentViewingFirstOnPrivateComputers <$true | $false>]
 [-ForceWebReadyDocumentViewingFirstOnPublicComputers <$true | $false>]
 [-FormsAuthentication <$true | $false>]
 [-FreCardsEnabled <$true | $false>]
 [-GlobalAddressListEnabled <$true | $false>]
 [-GoogleDriveAttachmentsEnabled <$true | $false>]
 [-GzipLevel <Off | Low | High | Error>]
 [-InstantMessagingCertificateThumbprint <String>]
 [-InstantMessagingEnabled <$true | $false>]
 [-InstantMessagingServerName <String>]
 [-InstantMessagingType <None | Ocs | Msn>]
 [-IntegratedFeaturesEnabled <$true | $false>]
 [-InternalDownloadHostName <String>]
 [-InternalSPMySiteHostURL <String>]
 [-InternalUrl <Uri>]
 [-IRMEnabled <$true | $false>]
 [-IsPublic <$true | $false>]
 [-JournalEnabled <$true | $false>]
 [-JunkEmailEnabled <$true | $false>]
 [-LegacyRedirectType <Silent | Manual>]
 [-LogonAndErrorLanguage <Int32>]
 [-LogonFormat <FullDomain | PrincipalName | UserName>]
 [-LogonPageLightSelectionEnabled <$true | $false>]
 [-LogonPagePublicPrivateSelectionEnabled <$true | $false>]
 [-NotesEnabled <$true | $false>]
 [-NotificationInterval <Int32>]
 [-OAuthAuthentication <$true | $false>]
 [-OneDriveAttachmentsEnabled <$true | $false>]
 [-OrganizationEnabled <$true | $false>]
 [-OutboundCharset <AlwaysUTF8 | AutoDetect | UserLanguageChoice>]
 [-OWALightEnabled <$true | $false>]
 [-OWAMiniEnabled <$true | $false>]
 [-PremiumClientEnabled <$true | $false>]
 [-PublicFoldersEnabled <$true | $false>]
 [-RecoverDeletedItemsEnabled <$true | $false>]
 [-RedirectToOptimalOWAServer <$true | $false>]
 [-ReferenceAttachmentsEnabled <$true | $false>]
 [-RemindersAndNotificationsEnabled <$true | $false>]
 [-RemoteDocumentsActionForUnknownServers <Allow | Block>]
 [-RemoteDocumentsAllowedServers <MultiValuedProperty>]
 [-RemoteDocumentsBlockedServers <MultiValuedProperty>]
 [-RemoteDocumentsInternalDomainSuffixList <MultiValuedProperty>]
 [-ReportJunkEmailEnabled <$true | $false>]
 [-RulesEnabled <$true | $false>]
 [-SaveAttachmentsToCloudEnabled <$true | $false>]
 [-SearchFoldersEnabled <$true | $false>]
 [-SetPhotoEnabled <$true | $false>]
 [-SetPhotoURL <String>]
 [-SignaturesEnabled <$true | $false>]
 [-SilverlightEnabled <$true | $false>]
 [-SMimeEnabled <$true | $false>]
 [-SpellCheckerEnabled <$true | $false>]
 [-TasksEnabled <$true | $false>]
 [-TextMessagingEnabled <$true | $false>]
 [-ThemeSelectionEnabled <$true | $false>]
 [-UMIntegrationEnabled <$true | $false>]
 [-UNCAccessOnPrivateComputersEnabled <$true | $false>]
 [-UNCAccessOnPublicComputersEnabled <$true | $false>]
 [-UseGB18030 <$true | $false>]
 [-UseISO885915 <$true | $false>]
 [-UserContextTimeout <Int32>]
 [-VirtualDirectoryType <NotSpecified | Mailboxes | PublicFolders | Exchweb | Exadmin>]
 [-WacEditingEnabled <$true | $false>]
 [-WacViewingOnPrivateComputersEnabled <$true | $false>]
 [-WacViewingOnPublicComputersEnabled <$true | $false>]
 [-WebPartsFrameOptionsType <Deny | AllowFrom | None | SameOrigin>]
 [-WebReadyDocumentViewingForAllSupportedTypes <$true | $false>]
 [-WebReadyDocumentViewingOnPrivateComputersEnabled <$true | $false>]
 [-WebReadyDocumentViewingOnPublicComputersEnabled <$true | $false>]
 [-WebReadyDocumentViewingSupportedFileTypes <MultiValuedProperty>]
 [-WebReadyDocumentViewingSupportedMimeTypes <MultiValuedProperty>]
 [-WebReadyFileTypes <MultiValuedProperty>]
 [-WebReadyMimeTypes <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsAuthentication <$true | $false>]
 [-WSSAccessOnPrivateComputersEnabled <$true | $false>]
 [-WSSAccessOnPublicComputersEnabled <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
Before you run the Set-OwaVirtualDirectory cmdlet, consider the following items:

- You must have Write access to virtual directory objects in Active Directory. If you don't have the necessary permissions and you try to run the Set-OwaVirtualDirectory cmdlet on the Active Directory virtual directory object, the cmdlet fails.

- You must have Write access to virtual directory objects in the metabase for some properties, such as Authentication and GZip. If you don't have the necessary permissions to run the Set-OwaVirtualDirectory cmdlet on a metabase virtual directory object or on a parameter that writes to the metabase, the cmdlet fails.

- Verify that the data source can be read. Depending on the properties that you want to set on an Outlook on the web virtual directory, you may want to run the cmdlet in a test environment on the Outlook on the web virtual directory object in Active Directory, the metabase, or both.

- You can run the Set-OwaVirtualDirectory cmdlet on any server that has the Exchange Server administration tools installed.

- Several parameters for the Set-OwaVirtualDirectory cmdlet can contain more than one value. These are known as multivalued properties. Make sure that you modify multivalued properties correctly. For information, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).

- Many of the Outlook on the web virtual directory settings require you to restart IIS (Stop-Service WAS -Force and Start-Service W3SVC) before the change takes effect. For example, when you enable or disable forms-based authentication, or when you enable or disable the Private computer option on the sign-in page.

- To switch from forms-based authentication to Basic authentication, you must first disable forms-based authentication, and then as a separate task, enable Basic authentication. You can't disable forms-based authentication and enable Basic authentication in a single task.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-OwaVirtualDirectory -Identity "Contoso\owa (default Web site)" -DirectFileAccessOnPublicComputersEnabled $false
```

This example sets the DirectFileAccessOnPublicComputersEnabled parameter to $false on the Outlook on the web virtual directory owa on the default Internet Information Services (IIS) website on the Exchange server Contoso.

### -------------------------- Example 2 --------------------------
```
Set-OwaVirtualDirectory -Identity "Contoso\owa (default Web site)" -ActionForUnknownFileAndMIMETypes Block
```

This example sets the ActionForUnknownFileAndMIMETypes parameter to Block on the default Outlook on the web virtual directory owa on the server Contoso.

## PARAMETERS

### -Identity
The Identity parameter specifies the Outlook on the web virtual directory that you want to modify.

You can use any value that uniquely identifies the virtual directory. For example:

- Name or \<Server\>\\Name

- Distinguished name (DN)

- GUID

The Name value uses the syntax "\<VirtualDirectoryName\> (\<WebsiteName\>)" from the properties of the virtual directory. You can specify the wildcard character (\*) instead of the default website by using the syntax \<VirtualDirectoryName\>\*.

```yaml
Type: VirtualDirectoryIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncIntegrationEnabled
The ActiveSyncIntegrationEnabled parameter specifies whether to enable or disable Exchange ActiveSync settings in Outlook on the web. Valid values are:

- $true: ActiveSync is available in Outlook on the web. This is the default value.

- $false: ActiveSync isn't avaialble in Outlook on the web

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

### -AdfsAuthentication
The AdfsAuthentication parameter enables or disables Active Directory Federation Services (ADFS) authentication on the Outlook on the web virtual directory. Valid values are:

- $true: ADFS authentication is enabled. You need to set the AdfsAuthentication parameter on Set-EcpVirtualDirectory to $true before you can use this value.

- $false: ADFS authentication is disabled. This is the default value. You need to set the AdfsAuthentication parameter on Set-EcpVirtualDirectory to $false before you can use this value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOfflineOn
The AllowOfflineOn parameter specifies when Outlook on the web in offline mode is avaialble for supported web browsers. Valid values are:

- PrivateComputersOnly: Offline mode is available in private computer sessions. By default in Exchange 2013 or later, all Outlook on the web sessions are considered to be on private computers. In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true).

- NoComputers: Offline mode is disabled.

- AllComputers: Offline mode is available for public and private computer sessions. This is the default value. 

When offline mode is available, uers can turn offline mode on or off themselves in Outlook on the web. For more information, see [Using Outlook Web App offline](https://go.microsoft.com/fwlink/p/?linkid=267644).

```yaml
Type: PrivateComputersOnly | NoComputers | AllComputers
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnonymousFeaturesEnabled
The AnonymousFeaturesEnabled parameter specifies whether you want to allow Outlook on the web users that are logged on anonymously to access specific features. Valid values are:

- $true: Features are enabled for anonymous users. For example, anonymous users can view and change meeting content. This is the default value.

- $false: Features are disabled for anonymous users.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BasicAuthentication
The BasicAuthentication parameter specifies whether Basic authentication is enabled on the virtual directory. Valid values are:

- $true: Basic authentication is enabled. This is the default value.

- $false: Basic authentication is disabled.

This parameter can be used with the FormsAuthentication parameter or with the DigestAuthentication and WindowsAuthentication parameters.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BoxAttachmentsEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarPublishingEnabled
This parameter is available or functional only in Exchange Server 2010.

The CalendarPublishingEnabled parameter specifies whether users can publish their calendar from Outlook Web App. Valid values are:

- $true: Calendar publishing is enabled. This is the default value.

- $false: Calendar publishing is disabled.

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

### -ChangePasswordEnabled
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
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAuthCleanupLevel
The ClientAuthCleanupLevel parameter specifies how much of the cache is cleared when the user logs off from Outlook on the web. Valid values are:

- Low

- High (This is the default value)

This parameter doesn't apply to the light version of Outlook on the web.

```yaml
Type: High | Low
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CrossSiteRedirectType
This parameter is available or functional only in Exchange Server 2010.

The CrossSiteRedirectType parameter controls how a Client Access server redirects Outlook Web App to the Client Access server infrastructure in another Active Directory site. Valid values are:

- Silent: Users are automatically redirected when the Client Access server redirects an Outlook Web App request to Client Access server infrastructure in another Active Directory site. If using forms-based authentication, SSL is required. For redirection to occur, the target OWA virtual directory must have an ExternalURL value.

- Manual: Users receive a notification that they are accessing the wrong URL and that they must click a link to access the preferred Outlook Web App URL for their mailbox. This notification occurs only when the Client Access server determines that it must redirect an Outlook Web App request to the Client Access server infrastructure in another Active Directory site. For redirection to occur, the target OWA virtual directory must have an ExternalURL value.

The default value is Manual.

```yaml
Type: Silent | Manual
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultDomain
The DefaultDomain parameter specifies which domain to use when the LogonFormat parameter is set to UserName (for example, contoso.com).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

### -DigestAuthentication
The DigestAuthentication parameter specifies whether Digest authentication is enabled on the virtual directory. Valid values are:

- $true: Digest authentication is enabled.

- $false: Digest authentication is disabled. This is the default value.

You can use this parameter with the FormsAuthentication parameter.

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

### -DirectFileAccessOnPrivateComputersEnabled
The DirectFileAccessOnPrivateComputersEnabled parameter specifies the left-click options for attachments in Outlook on the web for private computer sessions. Valid values are:

- $true: Open is available for attachments in Outlook on the web for private computer sessions. This is the default value.

- $false: Open isn't available for attachments in Outlook on the web for private computer sessions. Note that Office and .pdf documents can still be previewed in Outlook on the web.

By default in Exchange 2013 or later, all Outlook on the web sessions are considered to be on private computers.

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

### -DirectFileAccessOnPublicComputersEnabled
The DirectFileAccessOnPrivateComputersEnabled parameter specifies the left-click options for attachments in Outlook on the web for public computer sessions. Valid values are:

- $true: Open is available for attachments in Outlook on the web for public computer sessions. This is the default value.

- $false: Open isn't available for attachments in Outlook on the web for public computer sessions. Note that Office and .pdf documents can still be previewed in Outlook on the web.

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true).

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

### -DisplayPhotosEnabled
The DisplayPhotosEnabled parameter specifies whether users see sender photos in Outlook on the web. Valid values are:

- $true: Users see sender photos in Outlook on the web. This is the default value.

- $false: Users don't see sender photos in Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
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

### -DropboxAttachmentsEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Exchange2003Url
This parameter is available or functional only in Exchange Server 2010.

The Exchange2003Url parameter specifies the Outlook Web App URL for Exchange Server 2003 mailboxes. The URL must include the Outlook Web App virtual directory name, even if you're using a redirect to simplify the URL specified by the Exchange2003Url parameter.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchwebProxyDestination
This parameter has been deprecated and is no longer used.

```yaml
Type: NotSpecified | MailboxServer | PublicFolderServer
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedProtectionFlags
The ExtendedProtectionFlags parameter specifies custom settings for Extended Protection for Authentication on the virtual directory. Valid values are:

- None: This is the default setting.

- AllowDotlessSPN: Required if you want to use Service Principal Name (SPN) values that don't contain FQDNs (for example, HTTP/ContosoMail instead of HTTP/mail.contoso.com). You specify SPNs with the ExtendedProtectionSPNList parameter. This setting makes Extended Protection for Authentication less secure because dotless certificates aren't unique, so it isn't possible to ensure that the client-to-proxy connection was established over a secure channel.

- NoServiceNameCheck: The SPN list isn't checked to validate a channel binding token. This setting makes Extended Protection for Authentication less secure. We generally don't recommend this setting.

- Proxy: A proxy server is responsible for terminating the SSL channel. To use this setting, you need to register an SPN by using the ExtendedProtectionSPNList parameter.

- ProxyCoHosting: HTTP and HTTPS traffic may be accessing the virtual directory, and a proxy server is located between at least some of the clients and the Client Access services on the Exchange server.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedProtectionSPNList
The ExtendedProtectionSPNList parameter specifies a list of valid Service Principal Names (SPNs) if you're using Extended Protection for Authentication on the virtual directory. Valid values are:

- $null (blank): This is the default value.

- Single SPN or comma delimited list of valid SPNs: The SPN value format is \<protocol\>/\<FQDN\>. For example, HTTP/mail.contoso.com. To add an SPN that's not an FQDN (for example, HTTP/ContosoMail), you also need to use the AllowDotlessSPN value for the ExtendedProtectionFlags parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedProtectionTokenChecking
The ExtendedProtectionTokenChecking parameter defines how you want to use Extended Protection for Authentication on the virtual directory. Extended Protection for Authentication isn't enabled by default. Valid values are:

- None: Extended Protection for Authentication isn't be used on the virtual directory. This is the default value.

- Allow: Extended Protection for Authentication is used for connections between clients and the virtual directory if both the client and server support it. Connections that don't support Extended Protection for Authentication will work, but may not be as secure as connections that use Extended Protection for Authentication.

- Require: Extended Protection for Authentication is used for all connections between clients and the virtual directory. If either the client or server doesn't support it, the connection will fail. If you use this value, you also need to set an SPN value for the ExtendedProtectionSPNList parameter.

Note: If you use the value Allow or Require, and you have a proxy server between the client and the Client Access services on the Mailbox server that's configured to terminate the client-to-proxy SSL channel, you also need to configure one or more Service Principal Names (SPNs) by using the ExtendedProtectionSPNList parameter.

```yaml
Type: None | Allow | Require
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAuthenticationMethods
The ExternalAuthenticationMethods parameter restricts the authentication methods that can be used to connect to the virtual directory from outside the firewall. Valid values are:

- Adfs

- Basic

- Certificate

- Digest

- Fba

- Kerberos

- LiveIdBasic

- LiveIdFba

- LiveIdNegotiate

- NegoEx

- Negotiate

- Ntlm

- OAuth

- WindowsIntegrated

- WSSecurity

You can specify multiple values separated by commas.

Although you can specify any of these values, whether or not the authentication method actually works for external connections depends on other factors. For example:

- Is the authentication method available on the virtual directory?

- Is the authentication method available, but disabled on the virtual directory?

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDownloadHostName
The ExternalDownloadHostName parameter specifies the download location for files in Outlook on the web for external users (for example, in-line image files).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
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
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalUrl
The ExternalURL parameter specifies the URL that's used to connect to the virtual directory from outside the firewall.

This setting is important when Secure Sockets Layer (SSL) is used.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailbackUrl
The FailbackUrl parameter specifies the URL that Outlook on the web uses to connect to the server after failback in a site resilience process and requires a separate DNS entry pointing to the original server's IP address.

This parameter value must be different from the ExternalUrl parameter.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterWebBeaconsAndHtmlForms
The FilterWebBeaconsAndHtmlForms parameter specifies how web beacons are handled in Outlook on the web. Valid values are:

- UserFilterChoice (This is the default value)

- ForceFilter

- DisableFilter

```yaml
Type: UserFilterChoice | ForceFilter | DisableFilter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

By default in Exchange 2013 or later, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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

By default in Exchange 2013 or later, all Outlook on the web sessions are considered to be on private computers.

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

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true).

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

### -FormsAuthentication
The FormsAuthentication parameter enables or disables forms-based authentication on the Outlook on the web virtual directory. Valid values are:

- $true: Forms-based authentication is ensabled in Outlook on the web. This is the default value. The BasicAuthentication parameter is also set to $true, and the DigestAuthentication and WindowsAuthentication parameters are set to $false.

- $false: Forms-based authentication is disabled in Outlook on the web.

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

### -FreCardsEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GoogleDriveAttachmentsEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GzipLevel
The GzipLevel parameter sets Gzip configuration information for the Outlook on the web virtual directory. Valid values are:

- Off

- Low (This is the default value)

- High

- Error

```yaml
Type: Off | Low | High | Error
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InstantMessagingCertificateThumbprint
The InstantMessagingCertificateThumbprint parameter specifies the trusted certificate used to communicate between the instant messaging server and the Mailbox server. Use the Get-ExchangeCertificate cmdlet to find the thumbprint of the certificate.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InstantMessagingServerName
The InstantMessagingServerName parameter specifies the fully qualified domain name (FQDN) of the instant messaging server or set of servers behind a load balancing device.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InstantMessagingType
The InstantMessagingType parameter specifies the type of instant messaging provider in Outlook on the web. Valid values are:

- None: This is the default value.

- Ocs: Lync or Skype (formerly known as Office Communication Server).

```yaml
Type: None | Ocs | Msn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IntegratedFeaturesEnabled
The IntegratedFeaturesEnabled parameter specifies whether to allow Outlook on the web users who are logged on using Integrated Windows authentication to access specific features. Valid values are:

- $true: Integrated featurs are enabled. For example, users logged on using Integrated Windows authentication can view and change meeting content. This is the default value.

- $false: Itegrated features are disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalDownloadHostName
The InternalDownloadHostName parameter specifies the download location for files in Outlook on the web for internal users (for example, in-line image files). The default value is blank ($null).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
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
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalUrl
The InternalURL parameter specifies the URL that's used to connect to the virtual directory from inside the firewall.

This setting is important when SSL is used.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsPublic
The IsPublic parameter specifies whether external users use the virtual directory for Outlook on the web in multiple virtual directory environments (you've configured separate virtual directories on the same server for internal vs. external Outlook on the web connections). Valid values are:

- $true: External users use the virtual directory for Outlook on the web.

- $false: External users don't use the virtual directory for Outlook on the web. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JournalEnabled
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

### -JunkEmailEnabled
The JunkEmailEnabled parameter specifies whether the Junk Email management tools are enabled.

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

### -LegacyRedirectType
This parameter is available or functional only in Exchange Server 2010.

The LegacyRedirectType parameter specifies the type of redirect that Outlook Web App uses to a legacy Client Access server or Front End server when forms-based authentication isn't used on the Exchange 2010 Outlook Web App virtual directory. Valid values are:

- Silent: A standard redirect is used. This is the default value.

- Manual: An intermediate page is displayed to show the legacy URL so that users can change their bookmarks.

```yaml
Type: Silent | Manual
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogonFormat
The LogonFormat parameter specifies the type of logon format that's required for forms-based authentication on the Outlook on the web sign-in page. Valid values are:

- FullDomain: Requires the format domain\\username. This is the default value.

- UserName: Requires only the username, but you also need to specify a value for the DefaultDomain parameter.

- PrincipalName: Requires the user principal name (UPN) (for example, user@contoso.com). This sign-in method works only for users whose UPN name is the same as their email address.


```yaml
Type: FullDomain | PrincipalName | UserName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogonPageLightSelectionEnabled
The LogonPageLightSelectionEnabled parameter specifies whether the Outlook on the web sign-in page includes the option to sign in to the light version of Outlook on the web. Valid values are:

- $true: The option to use the light version of Outlook on the web is available on the sign-in page. This is the default value.

- $fase: The option to use the light version of Outlook on the web is available on the sign-in page.

This parameter is meaninful only for browsers that support the full version of Outlook on the web; unsupported browsers are always required to use the light version of Outlook on the web.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogonPagePublicPrivateSelectionEnabled
The LogonPagePublicPrivateSelectionEnabled parameter specifies whether the Outlook on the web sign-in page includes the public/private computer session option at sign-in. Valid values are:

- $true: The public/private computer session selection is available on the Outlook on the web sign-in page.

- $fase: The public/private computer session selection isn't available on the Outlook on the web sign-in page. All sessions are considered to be on private computers. This is the default value.

By default in Exchange 2013 or later, all Outlook on the web sessions are considered to be on private computers. Users can only specify public computer sessions if you've set this parameter value to $false.

When you change the value of this parameter, restart IIS (Stop-Service WAS -Force and Start-Service W3SVC).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationInterval
This parameter is available or functional only in Exchange Server 2010.

The NotificationInterval parameter specifies the polling frequency in seconds that the client polls the server for new item notifications, reminder updates, and session time-out information in Outlook Web App.

The default value is 120 seconds.

This parameter doesn't apply to the light version of Outlook Web App.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OAuthAuthentication
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveAttachmentsEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

### -PremiumClientEnabled
The PremiumClientEnabled parameter controls the availability of the full version of Outlook Web App. Valid values are:

- $true: The full version of Outlook Web App is avaialble for supported browsers. This is the default value.

- $false: The full version of Outlook Web App isn't avaialble.

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

### -PublicFoldersEnabled
This parameter is available or functional only in Exchange Server 2010.

The PublicFoldersEnabled parameter specifies whether a user can browse or read items in public folders in Outlook Web App. Valid values are:

- $true: Public folders are available in Outlook Web App. This is the default value.

- $false: Public folders aren't available in Outlook Web App.

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

### -RecoverDeletedItemsEnabled
This parameter is available or functional only in Exchange Server 2010.

The RecoverDeletedItemsEnabled parameter specifies whether a user can use Outlook Web App to view, recover, or delete permanently items that have been deleted from the Deleted Items folder. Valid values are:

- $true: Users can view, recover, or permanently delete items in Outlook Web App. This is the default value.

- $false: Users can't view, recover, or permanently delete items in Outlook Web App. Items deleted from the Deleted Items folder in Outlook Web App are still retained.

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

### -RedirectToOptimalOWAServer
The RedirectToOptimalOWAServer parameter specifies whether to find the optimal server for Outlook on the web. Valid values are:

- $true: Outlook on the web uses service discovery to find the best Mailbox server to use after a user authenticates. This is the default value.

- $false: Outlook on the web doesn't redirect clients to the optimal Mailbox server.

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

### -ReferenceAttachmentsEnabled
The ReferenceAttachmentsEnabled parameter specifies whether users can attach files from the cloud as linked attachments in Outlook on the web. Valid values are:

- $true: Users can attach files that are stored in the cloud as linked attachments. If the file hasn't been uploaded to the cloud yet, the users can attach and upload the file in the same step. This is the default value.

- $false: Users can't share files in the cloud as linked attachments. They need to download a local copy of the file before attaching the file to the email message.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteDocumentsActionForUnknownServers
This parameter is available or functional only in Exchange Server 2010.

This parameter has been deprecated and is no longer used.

```yaml
Type: Allow | Block
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteDocumentsAllowedServers
This parameter is available or functional only in Exchange Server 2010.

This parameter has been deprecated and is no longer used.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteDocumentsBlockedServers
This parameter is available or functional only in Exchange Server 2010.

This parameter has been deprecated and is no longer used.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteDocumentsInternalDomainSuffixList
This parameter is available or functional only in Exchange Server 2010.

This parameter has been deprecated and is no longer used.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2016
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
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UNCAccessOnPrivateComputersEnabled
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserContextTimeout
The UserContextTimeout parameter specifies the time-out setting in minutes for a user context object. This parameter doesn't limit public and private forms-based authentication time-out settings.

The default value is 60.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VirtualDirectoryType
This parameter has been deprecated and is no longer used.

```yaml
Type: NotSpecified | Mailboxes | PublicFolders | Exchweb | Exadmin
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2016
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

By default in Exchange 2013 or later, all Outlook on the web sessions are considered to be on private computers.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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

In Exchange 2013 or later, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2013, Exchange Server 2016
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
- 
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

In Exchange 2013, users can only specify public computer sessions if you've enabled the private/public selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true).

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

This is a read-only parameter that can't be modified; use the WebReadyMimeTypes parameter instead..

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowsAuthentication
The WindowsAuthentication parameter enables or disables Integrated Windows authentication on the virtual directory. Valid values are:

- $true: Integrated Windows authentication is enabled on the Outlook on the web virtual directory.

- $true: Integrated Windows authentication is disabled on the Outlook on the web virtual directory. This is the default value.

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

### -WSSAccessOnPrivateComputersEnabled
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

### -WSSAccessOnPublicComputersEnabled
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

[Online Version](https://technet.microsoft.com/library/7fadcc2e-6339-48b1-b15c-c89e45d4e430.aspx)
