---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
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
 [-ActiveSyncIntegrationEnabled <$true | $false>] [-AllAddressListsEnabled <$true | $false>]
 [-AllowedFileTypes <MultiValuedProperty>] [-AllowedMimeTypes <MultiValuedProperty>]
 [-BasicAuthentication <$true | $false>] [-BlockedFileTypes <MultiValuedProperty>]
 [-BlockedMimeTypes <MultiValuedProperty>] [-CalendarEnabled <$true | $false>]
 [-CalendarPublishingEnabled <$true | $false>] [-ChangePasswordEnabled <$true | $false>]
 [-ClientAuthCleanupLevel <High | Low>] [-Confirm] [-ContactsEnabled <$true | $false>]
 [-CrossSiteRedirectType <Silent | Manual>] [-DefaultClientLanguage <Int32>] [-DefaultDomain <String>]
 [-DefaultTheme <String>] [-DelegateAccessEnabled <$true | $false>] [-DigestAuthentication <$true | $false>]
 [-DirectFileAccessOnPrivateComputersEnabled <$true | $false>]
 [-DirectFileAccessOnPublicComputersEnabled <$true | $false>] [-DomainController <Fqdn>]
 [-Exchange2003Url <Uri>] [-ExchwebProxyDestination <NotSpecified | MailboxServer | PublicFolderServer>]
 [-ExplicitLogonEnabled <$true | $false>] [-ExtendedProtectionFlags <MultiValuedProperty>]
 [-ExtendedProtectionSPNList <MultiValuedProperty>] [-ExtendedProtectionTokenChecking <None | Allow | Require>]
 [-ExternalAuthenticationMethods <MultiValuedProperty>] [-ExternalUrl <Uri>] [-FailbackUrl <Uri>]
 [-FilterWebBeaconsAndHtmlForms <UserFilterChoice | ForceFilter | DisableFilter>]
 [-ForceSaveAttachmentFilteringEnabled <$true | $false>] [-ForceSaveFileTypes <MultiValuedProperty>]
 [-ForceSaveMimeTypes <MultiValuedProperty>]
 [-ForceWebReadyDocumentViewingFirstOnPrivateComputers <$true | $false>]
 [-ForceWebReadyDocumentViewingFirstOnPublicComputers <$true | $false>] [-FormsAuthentication <$true | $false>]
 [-GlobalAddressListEnabled <$true | $false>] [-GzipLevel <Off | Low | High | Error>]
 [-InstantMessagingCertificateThumbprint <String>] [-InstantMessagingEnabled <$true | $false>]
 [-InstantMessagingServerName <String>] [-InstantMessagingType <None | Ocs | Msn>] [-InternalUrl <Uri>]
 [-IRMEnabled <$true | $false>] [-JournalEnabled <$true | $false>] [-JunkEmailEnabled <$true | $false>]
 [-LegacyRedirectType <Silent | Manual>] [-LiveIdAuthentication <$true | $false>]
 [-LogonAndErrorLanguage <Int32>] [-LogonFormat <FullDomain | PrincipalName | UserName>]
 [-NotesEnabled <$true | $false>] [-NotificationInterval <Int32>] [-OrganizationEnabled <$true | $false>]
 [-OutboundCharset <AlwaysUTF8 | AutoDetect | UserLanguageChoice>] [-OWALightEnabled <$true | $false>]
 [-OWAMiniEnabled <$true | $false>] [-PremiumClientEnabled <$true | $false>]
 [-PublicFoldersEnabled <$true | $false>] [-RecoverDeletedItemsEnabled <$true | $false>]
 [-RedirectToOptimalOWAServer <$true | $false>] [-RemindersAndNotificationsEnabled <$true | $false>]
 [-RemoteDocumentsActionForUnknownServers <Allow | Block>]
 [-RemoteDocumentsAllowedServers <MultiValuedProperty>] [-RemoteDocumentsBlockedServers <MultiValuedProperty>]
 [-RemoteDocumentsInternalDomainSuffixList <MultiValuedProperty>] [-RulesEnabled <$true | $false>]
 [-SearchFoldersEnabled <$true | $false>] [-SignaturesEnabled <$true | $false>]
 [-SilverlightEnabled <$true | $false>] [-SMimeEnabled <$true | $false>]
 [-SpellCheckerEnabled <$true | $false>] [-TasksEnabled <$true | $false>]
 [-TextMessagingEnabled <$true | $false>] [-ThemeSelectionEnabled <$true | $false>]
 [-UMIntegrationEnabled <$true | $false>] [-UNCAccessOnPrivateComputersEnabled <$true | $false>]
 [-UNCAccessOnPublicComputersEnabled <$true | $false>] [-UseGB18030 <$true | $false>]
 [-UseISO885915 <$true | $false>] [-UserContextTimeout <Int32>]
 [-VirtualDirectoryType <NotSpecified | Mailboxes | PublicFolders | Exchweb | Exadmin>]
 [-WebReadyDocumentViewingForAllSupportedTypes <$true | $false>]
 [-WebReadyDocumentViewingOnPrivateComputersEnabled <$true | $false>]
 [-WebReadyDocumentViewingOnPublicComputersEnabled <$true | $false>]
 [-WebReadyDocumentViewingSupportedFileTypes <MultiValuedProperty>]
 [-WebReadyDocumentViewingSupportedMimeTypes <MultiValuedProperty>] [-WebReadyFileTypes <MultiValuedProperty>]
 [-WebReadyMimeTypes <MultiValuedProperty>] [-WhatIf] [-WindowsAuthentication <$true | $false>]
 [-WSSAccessOnPrivateComputersEnabled <$true | $false>] [-WSSAccessOnPublicComputersEnabled <$true | $false>]
 [-AdfsAuthentication <$true | $false>] [-AllowCopyContactsToDeviceAddressBook <$true | $false>]
 [-AllowOfflineOn <PrivateComputersOnly | NoComputers | AllComputers>]
 [-AnonymousFeaturesEnabled <$true | $false>] [-DisplayPhotosEnabled <$true | $false>]
 [-ForceWacViewingFirstOnPrivateComputers <$true | $false>]
 [-ForceWacViewingFirstOnPublicComputers <$true | $false>] [-IntegratedFeaturesEnabled <$true | $false>]
 [-IsPublic <$true | $false>] [-LogonPageLightSelectionEnabled <$true | $false>]
 [-LogonPagePublicPrivateSelectionEnabled <$true | $false>] [-OAuthAuthentication <$true | $false>]
 [-ReportJunkEmailEnabled <$true | $false>] [-SetPhotoEnabled <$true | $false>] [-SetPhotoURL <String>]
 [-WacViewingOnPrivateComputersEnabled <$true | $false>] [-WacViewingOnPublicComputersEnabled <$true | $false>]
 [-WebPartsFrameOptionsType <Deny | AllowFrom | None | SameOrigin>] [-BoxAttachmentsEnabled <$true | $false>]
 [-ClassicAttachmentsEnabled <$true | $false>] [-DropboxAttachmentsEnabled <$true | $false>]
 [-ExternalDownloadHostName <String>] [-ExternalSPMySiteHostURL <String>] [-FreCardsEnabled <$true | $false>]
 [-GoogleDriveAttachmentsEnabled <$true | $false>] [-InternalDownloadHostName <String>]
 [-InternalSPMySiteHostURL <String>] [-OneDriveAttachmentsEnabled <$true | $false>]
 [-ReferenceAttachmentsEnabled <$true | $false>] [-SaveAttachmentsToCloudEnabled <$true | $false>]
 [-WacEditingEnabled <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
Before you run the Set-OwaVirtualDirectory cmdlet, consider the following items:

- You must have Write access to virtual directory objects in Active Directory. If you don't have the necessary permissions and you try to run the Set-OwaVirtualDirectory cmdlet on the Active Directory virtual directory object, the cmdlet fails.

- You must have Write access to virtual directory objects in the metabase for some properties, such as Authentication and GZip. If you don't have the necessary permissions to run the Set-OwaVirtualDirectory cmdlet on a metabase virtual directory object or on a parameter that writes to the metabase, the cmdlet fails.

- Verify that the data source can be read. Depending on the properties that you want to set on an Outlook on the web virtual directory, you may want to run the cmdlet in a test environment on the Outlook on the web virtual directory object in Active Directory, the metabase, or both.

- You can run the Set-OwaVirtualDirectory cmdlet on any server that has the Exchange Server administration tools installed.

- Several parameters for the Set-OwaVirtualDirectory cmdlet can contain more than one value. These are known as multivalued properties. Make sure that you modify multivalued properties correctly. For information, see Modifying multivalued properties.

- Many of the Outlook on the web virtual directory settings require you to run the IISReset /noforce command before the change takes effect. For example, when you enable or disable forms-based authentication, or when you enable or disable the Private computer option on the sign-in page.

- To switch from forms-based authentication to Basic authentication, you must first disable forms-based authentication, and then as a separate task, enable Basic authentication. You can't disable forms-based authentication and enable Basic authentication in a single task.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-OwaVirtualDirectory -Identity "Contoso\owa (default Web site)" -DirectFileAccessOnPublicComputersEnabled $false
```

This example sets the DirectFileAccessOnPublicComputersEnabled parameter to $false on the Outlook on the web virtual directory owa on the default Internet Information Services (IIS) website on the Exchange server Contoso.

### Example 2
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
The ActionForUnknownFileAndMIMETypes parameter specifies how to handle files that aren't included in other File Access Management lists.

The following values are valid for this parameter:

- Allow

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
The ActiveSyncIntegrationEnabled parameter disables Exchange ActiveSync on the Options page in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllAddressListsEnabled
The AllAddressListsEnabled parameter specifies which address lists are available to the user.

You can use one of the following values:

- If set to $true, users can view all address lists.

- If set to $false, users can view only the global address list (GAL).

The default value is $true.

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

### -AllowedFileTypes
The AllowedFileTypes parameter specifies the extensions of file types that the user can save locally and view from a web browser. If the same extensions are in multiple settings lists, the most secure setting overrides the less secure settings.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

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

### -AllowedMimeTypes
The AllowedMimeTypes parameter specifies extensions of MIME attachments that users can save locally and view from a web browser. If the same extensions are in multiple settings lists, the most secure setting overrides the less secure settings.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

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
The BlockedFileTypes parameter specifies a list of extensions of attachments that are blocked. Attachments that contain these blocked extensions can't be saved locally or viewed from a web browser.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

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

### -BlockedMimeTypes
The BlockedMimeTypes parameter specifies a list of MIME extensions of attachments that are blocked. Attachments that contain these blocked MIME extensions can't be saved locally or viewed from a web browser.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

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

### -CalendarEnabled
The CalendarEnabled parameter specifies whether to enable the calendar for users.

Valid input for this parameter is $true or $false. The default value is $true.

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
The CalendarPublishingEnabled parameter specifies whether users can publish their calendar from Outlook Web App.

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
The ChangePasswordEnabled parameter specifies whether users can change their passwords from inside Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

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

### -ClientAuthCleanupLevel
The ClientAuthCleanupLevel parameter specifies how much of the cache is cleared when the user logs off in Outlook on the web. This parameter doesn't apply to the light version of Outlook on the web.

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContactsEnabled
The ContactsEnabled parameter specifies whether Contacts are enabled for users.

Valid input for this parameter is $true or $false. The default value is $true.

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
The CrossSiteRedirectType parameter controls the method by which a Client Access server redirects a user's Web browser to Client Access server infrastructure in another Active Directory site.

You can use one of the following values:

- Silent

- Manual

If set to Silent, a user's Web browser is automatically redirected when the Client Access server redirects an Outlook Web App request to Client Access server infrastructure in another Active Directory site. If using forms-based authentication, SSL is required. For redirection to occur, the target Client Access server /owa virtual directory must have an ExternalURL value.

If set to Manual, users receive a notification that they are accessing the wrong URL and that they must click a link to access the preferred Outlook Web App URL for their mailbox. This notification occurs only when the Client Access server determines that it must redirect an Outlook Web App request to Client Access server infrastructure in another Active Directory site. For redirection to occur, the target Client Access server /owa virtual directory must have an ExternalURL value.

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
This parameter is available or functional only in Exchange Server 2010.

The DefaultClientLanguage parameter, if set to a value other than 0, specifies the language used by Outlook Web App when a user who has not selected a specific language on the Options page signs in to Outlook Web App.

$null is not a valid value for this parameter.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultDomain
The DefaultDomain parameter specifies which domain to use when the LogonFormat parameter is set to UserName.

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
The DefaultTheme parameter specifies the default theme used by Outlook on the web when the user hasn't selected a theme.

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

The DelegateAccessEnabled parameter specifies whether delegates can use Outlook Web App to open folders, which they have delegate access to, through this virtual directory.

Valid input for this parameter is $true or $false. The default value is $true.

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

This parameter can't be used with the FormsAuthentication parameter.

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
The DirectFileAccessOnPrivateComputersEnabled parameter specifies the left-click options on attachments. If this parameter is set to $true, Open is an available option. If it's set to $false, the Open option is disabled. The default value is $true.

By default, Outlook on the web in Exchange 2016 assumes you are connecting from a private computer. In order to show the Private computer option at sign-in, you set the LogonPagePublicPrivateSelectionEnabled parameter to the value $true.

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
The DirectFileAccessOnPublicComputersEnabled parameter specifies the left-click options on attachments when a user logs on after unchecking the Private computer option. If this parameter is set to $true, Open is an available option. If it's set to $false, the Open option is disabled. The default value is $true.

By default, Outlook on the web in Exchange 2016 assumes you are connecting from a private computer. Therefore, this parameter is meaningful only if you set the LogonPagePublicPrivateSelectionEnabled parameter to the value $true. This allows you to uncheck the Private computer option at sign-in, which indicates you are connecting from a public computer.

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
This parameter is available or functional only in Exchange Server 2010.

The ExchwebProxyDestination parameter is no longer used and will be deprecated.

```yaml
Type: NotSpecified | MailboxServer | PublicFolderServer
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExplicitLogonEnabled
The ExplicitLogonEnabled parameter specifies whether to allow a user to open someone else's mailbox in Outlook on the web. If this parameter is set to $true, it allows a user to open someone else's mailbox in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

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

- $null: This is the default value.

- Single SPN or comma delimited list of valid SPNs: The SPN value format is \<protocol\>/\<FQDN\>. For example, HTTP/mail.contoso.com. To add an SPN that's not an FQDN (for example, HTTP/ContosoMail), you also need to use the AllowDotlessSPN value for the ExtendedProtectionFlags parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

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

Note:

If you use the value Allow or Require, and you have a proxy server between the client and the Client Access services on the Mailbox server that's configured to terminate the client-to-proxy SSL channel, you also need to configure one or more Service Principal Names (SPNs) by using the ExtendedProtectionSPNList parameter.

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
The FailbackUrl parameter specifies the host name Outlook on the web uses to connect to the server after failback in a site resilience process and requires a separate DNS entry pointing to the original server's IP address. The FailbackUrl parameter must be different from the ExternalUrl parameter.

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
The FilterWebBeaconsAndHtmlForms parameter specifies how web beacons are handled. The possible values are UserFilterChoice, ForceFilter and DisableFilter.

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
The ForceSaveAttachmentFilteringEnabled parameter specifies whether files included in the list of extensions created by the ForceSaveFileTypes parameter are filtered before the user can save them.

Valid input for this parameter is $true or $false. The default value is $false.

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
The ForceSaveFileTypes parameter specifies a list of extensions of attachments that can be opened only after the file is saved locally on the user's computer.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

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

### -ForceSaveMimeTypes
The ForceSaveMimeTypes parameter specifies the MIME types of attachments that can be opened only after the file is saved locally on the user's computer.

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

### -ForceWebReadyDocumentViewingFirstOnPrivateComputers
The ForceWebReadyDocumentViewingFirstOnPrivateComputers parameter specifies whether a user can open a document directly without first viewing it as a web page.

Valid input for this parameter is $true or $false. The default value is $false.

By default, Outlook Web App in Exchange 2013 assumes you are connecting from a private computer. In order to show the Private computer option at sign-in, you set the LogonPagePublicPrivateSelectionEnabled parameter to the value $true.

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
The ForceWebReadyDocumentViewingFirstOnPublicComputers parameter specifies whether a user who logs on after unchecking the Private computer option can open a document directly without first viewing it as a web page.

Valid input for this parameter is $true or $false. The default value is $false.

By default, Outlook Web App in Exchange 2013 assumes you are connecting from a private computer. Therefore, this parameter is meaningful only if you set the LogonPagePublicPrivateSelectionEnabled parameter to the value $true. This allows you to uncheck the Private computer option at sign-in, which indicates you are connecting from a public computer.

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
The FormsAuthentication parameter enables or disables forms-based authentication on the Outlook on the web virtual directory.

Valid input for this parameter is $true or $false. The default value is $true.

If the FormsAuthentication parameter is set to $true, the BasicAuthentication parameter is set to $true, and the DigestAuthentication and WindowsAuthentication parameters are set to $false.

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

### -GlobalAddressListEnabled
The GlobalAddressListEnabled parameter specifies whether to show the global address list in Outlook on the web.

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

### -GzipLevel
The GzipLevel parameter sets Gzip configuration information for the Outlook on the web virtual directory.

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
The InstantMessagingEnabled parameter specifies whether to enable instant messaging in Outlook on the web.

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
The InstantMessagingType parameter specifies the type of instant messaging provider to be used. Set this parameter to None for no provider and Ocs for Skype for Business. The Msn value is no longer used and will be deprecated.

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
The IRMEnabled parameter specifies whether the Information Rights Management (IRM) feature is enabled.

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

### -JournalEnabled
The JournalEnabled parameter specifies whether the Journal folder is visible.

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
The LegacyRedirectType parameter specifies the type of redirect that Outlook Web App uses to a legacy Client Access server or Front End server when forms-based authentication isn't used on the Exchange 2010 Outlook Web App virtual directory.

The following values are valid for this parameter:

- Silent

- Manual

Silent causes a standard redirect. Manual displays an intermediate page that shows the legacy URL so that users can change their bookmarks.

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

### -LiveIdAuthentication
The LiveIdAuthentication parameter specifies whether to configure Outlook Web App to use logon via Windows Live ID. Set this parameter to $true to configure Outlook Web App to use logon via Windows Live ID.

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

### -LogonAndErrorLanguage
The LogonAndErrorLanguage parameter specifies which language Outlook on the web uses for forms-based authentication and for error messages that occur when a user's current language setting can't be read. When this parameter has a value of 0, the language selection is undefined.

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
The LogonFormat parameter specifies the type of logon format forms-based authentication must use on the Outlook on the web sign-in page.

Possible attributes are FullDomain, UserName, or PrincipalName.

If you specify the FullDomain attribute, the User name field on the Outlook on the web sign-in page requires the user name to be entered in the format domain\\user name.

If you specify the UserName attribute, you must also specify the DefaultDomain parameter.

If you specify the PrincipalName attribute, the User name field on the Outlook on the web sign-in page requires a user principal name (UPN) address. This sign-in method works only for users whose UPN name is the same as their email address.

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

### -NotesEnabled
The NotesEnabled parameter specifies whether the Notes folder is visible in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

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

The NotificationInterval parameter specifies the polling frequency, in seconds, with which the client must poll the server for new item notifications, reminder updates, and session time-out information in Outlook Web App. This parameter doesn't apply to the light version of Outlook Web App.

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
This parameter is available or functional only in Exchange Server 2010.

The OWALightEnabled parameter, when set to $false, removes the option to use the light version of Outlook Web App from the logon page and removes the Accessibility check box from the General Options tab. This parameter doesn't apply to Outlook Web App.

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

### -OWAMiniEnabled
This parameter controls whether the mini version of Outlook Web App is enabled.

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
This parameter is available or functional only in Exchange Server 2010.

The PremiumClientEnabled parameter specifies whether a user can access Outlook Web App. This parameter doesn't apply to the light version of Outlook Web App.

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

### -PublicFoldersEnabled
The PublicFoldersEnabled parameter specifies whether a user can browse or read items in public folders using Outlook on the web.

By default, the PublicFoldersEnabled parameter is set to $true. If the PublicFoldersEnabled parameter is set to $false, users can only access their private mailboxes in Outlook on the web.

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

The RecoverDeletedItemsEnabled parameter specifies whether a user can use Outlook Web App to view, recover, or delete permanently items that have been deleted from the Deleted Items folder. By default, the RecoverDeletedItemsEnabled parameter is set to $true. If the RecoverDeletedItemsEnabled parameter is set to $false, the items deleted from the Deleted Items folder are retained. However, users can't view, recover, or permanently delete them using Outlook Web App.

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

### -RedirectToOptimalOWAServer
The RedirectToOptimalOWAServer parameter, when set to $true, causes Outlook on the web to use service discovery to find the best Mailbox server to use after a user authenticates. If redirection is disabled, Outlook on the web doesn't redirect clients to the most optimal Mailbox server.

Valid input for this parameter is $true or $false. The default value is $true.

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

### -RemindersAndNotificationsEnabled
The RemindersAndNotificationsEnabled parameter specifies whether notifications and reminders are enabled in Outlook on the web. This parameter doesn't apply to the light version of Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

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

The RemoteDocumentsActionForUnknownServers parameter isn't available in this release.


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

The RemoteDocumentsAllowedServers parameter isn't available in this release.

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

The RemoteDocumentsBlockedServers parameter isn't available in this release.

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

The RemoteDocumentsInternalDomainSuffixList parameter isn't available in this release.

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

### -RulesEnabled
The RulesEnabled parameter specifies whether a user can view, create, or modify server-side rules using Outlook on the web. By default, the RulesEnabled parameter is set to $true. If the RulesEnabled parameter is set to $false, users must use Microsoft Outlook to view, create, and modify server-side rules.

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

### -SearchFoldersEnabled
The SearchFoldersEnabled parameter specifies whether Search Folders are available in Outlook on the web.

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

### -SignaturesEnabled
The SignaturesEnabled parameter specifies whether to enable or disable the use of signatures in Outlook on the web.

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

The SilverlightEnabled parameter specifies whether a user can use Microsoft Silverlight features in Outlook Web App.

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

The SMimeEnabled parameter specifies whether users can download the S/MIME control for Outlook Web App and use it to read and compose signed and encrypted messages. By default, the SMimeEnabled parameter is set to $true. If the SMimeEnabled parameter is set to $false, users are unable to read or compose messages that are opaque-signed or encrypted. Messages that are clear-signed can be read but not composed, and their signatures aren't validated.

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

The SpellCheckerEnabled parameter specifies whether a user can check spelling in Outlook Web App. This parameter doesn't apply to the light version of Outlook Web App.

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
The TasksEnabled parameter specifies whether a user can use the Tasks feature in Outlook on the web. This parameter doesn't apply to the light version of Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

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
The TextMessagingEnabled parameter specifies whether users can send and receive text messages. This parameter doesn't apply to the light version of Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

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
The ThemeSelectionEnabled parameter specifies whether users can select a theme in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

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
The UMIntegrationEnabled parameter specifies whether Unified Messaging is enabled on Outlook on the web. This setting applies only if Unified Messaging has been enabled for a user using the Enable-UMMailbox cmdlet. This parameter doesn't apply to the light version of Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

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
This parameter is available or functional only in Exchange Server 2010.

The UNCAccessOnPrivateComputersEnabled parameter isn't available in this release.

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
This parameter is available or functional only in Exchange Server 2010.

The UNCAccessOnPublicComputersEnabled parameter isn't available in this release.

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
The UseGB18030 parameter specifies when to use the character set GB18030. This parameter is a character-handling registry key that works in coordination with the OutboundCharset registry key. When the UseGB18030 parameter is set to $true, the character set GB18030 is used wherever GB2312 would have been used. The default value is $false.

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
The UseISO885915 parameter specifies when to use the character set ISO8859-15. This parameter is a character-handling registry key that works in coordination with the OutboundCharset registry key. When the UseISO885915 parameter is set to $true, the character set ISO8859-15 is used wherever ISO8859-1 would have been used. The default value is $false.

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
The UserContextTimeout parameter specifies the time-out setting, in minutes, for a user context object. This parameter doesn't limit public and private forms-based authentication time-out settings.

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
This parameter is available or functional only in Exchange Server 2010.

The VirtualDirectoryType parameter description isn't available in this release.

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

### -WebReadyDocumentViewingForAllSupportedTypes
The WebReadyDocumentViewingForAllSupportedTypes parameter enables WebReady Document Viewing for all supported file and MIME types. If this parameter is set to $false, use the WebReadyFileTypes and WebReadyMimeTypes parameters to set which file and MIME types to convert.

Valid input for this parameter is $true or $false. The default value is $true.

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
The WebReadyDocumentViewingOnPrivateComputersEnabled parameter enables or disables WebReady Document Viewing.

Valid input for this parameter is $true or $false. The default value is $true.

By default, Outlook Web App in Exchange 2013 assumes you are connecting from a private computer. In order to show the Private computer option at sign-in, you set the LogonPagePublicPrivateSelectionEnabled parameter to the value $true.

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
The WebReadyDocumentViewingOnPublicComputersEnabled parameter enables or disables WebReady Document Viewing for a user who logs on after unchecking the Private computer option.

Valid input for this parameter is $true or $false. The default value is $true.

By default, Outlook Web App in Exchange 2013 assumes you are connecting from a private computer. Therefore, this parameter is meaningful only if you set the LogonPagePublicPrivateSelectionEnabled parameter to the value $true. This allows you to uncheck the Private computer option at sign-in, which indicates you are connecting from a public computer.

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
The read-only WebReadyDocumentViewingSupportedFileTypes parameter lists the file types supported by the conversion engine.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

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
The read-only WebReadyDocumentViewingSupportedMimeTypes parameter lists the MIME types supported by the conversion engine.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

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
The WebReadyFileTypes parameter creates a list of file types on which WebReady Document Viewing is performed.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

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
The WebReadyMimeTypes parameter creates a list of MIME types on which WebReady Document Viewing is performed.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowsAuthentication
The WindowsAuthentication parameter enables or disables Integrated Windows authentication on the Outlook on the web virtual directory.

Valid input for this parameter is $true or $false. The default value is $false.

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
This parameter is available or functional only in Exchange Server 2010.

The WSSAccessOnPrivateComputersEnabled parameter isn't available in this release.

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

### -WSSAccessOnPublicComputersEnabled
This parameter is available or functional only in Exchange Server 2010.

The WSSAccessOnPublicComputersEnabled parameter isn't available in this release.

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

### -AdfsAuthentication
The AdfsAuthentication parameter enables or disables Active Directory Federation Services (ADFS) authentication on the Outlook on the web virtual directory. Valid input for this parameter is $true or $false. The default value is $false.

The ADFS authentication settings for Set-OwaVirtualDirectory and Set-EcpVirtualDirectory are related. You need to set the AdfsAuthentication parameter on Set-EcpVirtualDirectory to $true before you can set the AdfsAuthentication parameter on Set-OwaVirtualDirectory to $true. Likewise, you need to set the AdfsAuthentication parameter on Set-OwaVirtualDirectory to $false before you can set the AdfsAuthentication parameter on Set-EcpVirtualDirectory to $false.

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

### -AllowCopyContactsToDeviceAddressBook
The AllowCopyContactsToDeviceAddressBook parameter specifies if users can copy the contents of their Contacts folder to a mobile device's native address book when using Outlook on the web for devices.

Valid input for this parameter is $true or $false. The default value is $true.

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

### -AllowOfflineOn
The AllowOfflineOn parameter specifies which computers can use Outlook on the web in offline mode. The possible values are:

- NoComputers

- AllComputers

- PrivateComputersOnly

The default value is AllComputers.

By default, Outlook on the web in Exchange 2016 assumes you are connecting from a private computer. In order to show the Private computer option at sign-in, you set the LogonPagePublicPrivateSelectionEnabled parameter to the value $true.

If the feature is enabled and users are using a supported browser, they can use Outlook on the web in offline mode. Users can turn the feature on or off in Outlook on the web. To turn the feature on, click the gear icon and then select Stop using offline. To turn the feature off, click the gear icon and then select Use mail offline. The supported browsers are Microsoft Internet Explorer 10, Safari 4, or Chrome 16. For more information, see Using Outlook Web App offline (https://go.microsoft.com/fwlink/p/?linkid=267644).

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
The AnonymousFeaturesEnabled parameter specifies whether you want to allow Outlook on the web users that are logged on anonymously to access specific features. For example, if this value is set to $true, users logged on using anonymous authentication can view and change meeting content. This parameter is set to $true by default.

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

### -DisplayPhotosEnabled
The DisplayPhotosEnabled parameter specifies whether users see sender photos in Outlook on the web. The possible values for this parameter are $true or $false. The default value is $true.

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

### -ForceWacViewingFirstOnPrivateComputers
The ForceWacViewingFirstOnPrivateComputers parameter specifies whether a user can open an Office file directly without first viewing it as a web page.

Valid input for this parameter is $true or $false. The default value is $false.

By default, Outlook on the web in Exchange 2016 assumes you are connecting from a private computer. In order to show the Private computer option at sign-in, you set the LogonPagePublicPrivateSelectionEnabled parameter to the value $true.

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
The ForceWacViewingFirstOnPublicComputers parameter specifies whether a user who logs on after unchecking the Private computer option can open an Office file directly without first viewing it as a web page.

Valid input for this parameter is $true or $false. The default value is $false.

By default, Outlook on the web in Exchange 2016 assumes you are connecting from a private computer. Therefore, this parameter is meaningful only if you set the LogonPagePublicPrivateSelectionEnabled parameter to the value $true. This allows you to uncheck the Private computer option at sign-in, which indicates you are connecting from a public computer.

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

### -IntegratedFeaturesEnabled
The IntegratedFeaturesEnabled parameter specifies whether to allow Outlook on the web users who are logged on using Integrated Windows authentication to access specific features. For example, if this value is set to $true, users logged on using Integrated Windows authentication can view and change meeting content. This is set to $true by default.

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

### -IsPublic
The IsPublic parameter specifies whether external users use the virtual directory for Outlook on the web in multiple virtual directory environments (you've configured separate virtual directories on the same server for internal vs. external Outlook on the web connections). Valid values are:

- $true: External users use the virtual directory for Outlook on the web.

- $false: External users don't use the virtual directory for Outlook on the web.

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

### -LogonPageLightSelectionEnabled
The LogonPageLightSelectionEnabled parameter specifies whether the Outlook on the web sign-in page includes the option to sign in to the light version of Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

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
The LogonPagePublicPrivateSelectionEnabled parameter specifies whether the Outlook on the web sign-in page includes the Private computer option at sign-in. By default,

Valid input for this parameter is $true or $false. The default value is $false. By default, Exchange assumes you are connecting from a private computer.

To make the Private computer option available to check or uncheck, set the value of this parameter to $true, and then restart IIS.

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

### -ReportJunkEmailEnabled
The ReportJunkEmailEnabled parameter specifies whether users can report messages as junk to Microsoft in Outlook on the web. Valid input for this parameter is $true or $false. The default value is $true.

If you set this parameter to $false, the Report mail as junk window doesn't appear after users select Mark as junk. This parameter is meaningful only when the JunkEmailEnabled parameter is set to $true.

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

### -SetPhotoEnabled
The SetPhotoEnabled parameter specifies whether users can add, change, and remove their sender photo in Outlook on the web. The possible values for this parameter are $true or $false. The default value is $false. When this value is set to $true, users can manage their sender photo using two methods. They can click their name in the upper-right corner of Outlook on the web, click change, and then browse to the photo they want to use. Alternatively, users can manage their photo by clicking the gear icon in the upper-right corner of Outlook on the web, and then clicking Options \> Account \> My account \> Edit \> Change.

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
The SetPhotoURL parameter specifies the location of the user photos. This value isn't set by default.

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

### -WacViewingOnPrivateComputersEnabled
The WacViewingOnPrivateComputersEnabled parameter specifies whether to enable or disable web viewing of supported Office documents in private computer sessions. Valid values are:

- $true: In private computer sessions, users can view supported Office documents in the web browser. This is the default value.

- $false: In private computer sessions, users can't view supported Office documents in the web browser. Users can still open the file in a supported application, or save the file locally.

By default, Outlook on the web in Exchange 2016 assumes you are connecting from a private computer. In order to show the Private computer option at sign-in, you set the LogonPagePublicPrivateSelectionEnabled parameter to the value $true.

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
The WacViewingOnPublicComputersEnabled parameter specifies whether to enable or disable web viewing of supported Office documents in public computer sessions. Valid values are:

- $true: In public computer sessions, users can view supported Office documents in the web browser. This is the default value.

- $false: In public computer sessions, users can't view supported Office documents in the web browser. Users can still open the file in a supported application, or save the file locally.

By default, Outlook on the web in Exchange 2016 assumes you are connecting from a private computer. Therefore, this parameter is meaningful only if you set the LogonPagePublicPrivateSelectionEnabled parameter to the value $true. This allows you to uncheck the Private computer option at sign-in, which indicates you are connecting from a public computer.

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
The WebPartsFrameOptionsType parameter specifies what sources can access Outlook on the web web parts in IFRAME or FRAME elements.

Valid values are:

- None: This indicates that there are no restrictions on displaying Outlook on the web content in a frame.

- SameOrigin: This is the default value and the recommended value. This allows display of Outlook on the web content only in a frame that has the same origin as the content.

- Deny: This blocks display of Outlook on the web content in a frame regardless of the origin of the site attempting to access it.

- AllowFrom: This isn't yet available. It will be implemented in a later release.

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

### -ClassicAttachmentsEnabled
The ClassicAttachmentsEnabled parameter specifies whether users can attach local files as regular email attachments. Valid values are:

- $true: Users can attach local files to email messages. This is the default value.

- $false: Users can't attach local files to email messages.

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

### -FreCardsEnabled
The FreCardsEnabled parameter specifies whether to enable or disable the theme, signature, and phone cards in Outlook on the web. Valid values are:

- $true: The theme, signature, and phone cards are visible in Outlook on the web. This is the default value.

- $false: The theme, signature, and phone cards aren't visible in Outlook on the web. Only the introduction, time zone, and final cards are visible.

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

### -InternalDownloadHostName
The InternalDownloadHostName parameter specifies the download location for files in Outlook on the web for internal users (for example, in-line image files).

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

### -ReferenceAttachmentsEnabled
The ReferenceAttachmentsEnabled parameter specifies whether users can attach files from the cloud as linked attachments. Valid values are:

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

### -WacEditingEnabled
The WacEditingEnabled parameter specifies whether to enable or disable editing documents in Outlook on the web by using Office Online Server (formerly known as Office Web Apps Server and Web Access Companion Server). Valid values are:

- $true: Users can edit supported documents in Outlook on the web. This is the default value.

- $false: Users can't edit supported documents in Outlook on the web

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
