---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-OwaMailboxPolicy

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-OwaMailboxPolicy cmdlet to configure an existing Microsoft Office Outlook Web App mailbox policy.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-OwaMailboxPolicy cmdlet to configure existing MicrosoftOutlook Web App mailbox policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-OwaMailboxPolicy cmdlet to configure existing Outlook on the web mailbox policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-OwaMailboxPolicy [-Identity] <MailboxPolicyIdParameter>
 [-ActionForUnknownFileAndMIMETypes <Allow | ForceSave | Block>]
 [-ActiveSyncIntegrationEnabled <$true | $false>] [-AllAddressListsEnabled <$true | $false>]
 [-AllowedFileTypes <MultiValuedProperty>] [-AllowedMimeTypes <MultiValuedProperty>]
 [-BlockedFileTypes <MultiValuedProperty>] [-BlockedMimeTypes <MultiValuedProperty>]
 [-CalendarEnabled <$true | $false>] [-ChangePasswordEnabled <$true | $false>] [-Confirm]
 [-ContactsEnabled <$true | $false>] [-DefaultClientLanguage <Int32>] [-DefaultTheme <String>]
 [-DelegateAccessEnabled <$true | $false>] [-DirectFileAccessOnPrivateComputersEnabled <$true | $false>]
 [-DirectFileAccessOnPublicComputersEnabled <$true | $false>] [-DomainController <Fqdn>]
 [-ExplicitLogonEnabled <$true | $false>] [-ForceSaveAttachmentFilteringEnabled <$true | $false>]
 [-ForceSaveFileTypes <MultiValuedProperty>] [-ForceSaveMimeTypes <MultiValuedProperty>]
 [-ForceWebReadyDocumentViewingFirstOnPrivateComputers <$true | $false>]
 [-ForceWebReadyDocumentViewingFirstOnPublicComputers <$true | $false>]
 [-GlobalAddressListEnabled <$true | $false>] [-InstantMessagingEnabled <$true | $false>]
 [-InstantMessagingType <None | Ocs | Msn>] [-IRMEnabled <$true | $false>] [-JournalEnabled <$true | $false>]
 [-JunkEmailEnabled <$true | $false>] [-LogonAndErrorLanguage <Int32>] [-Name <String>]
 [-NotesEnabled <$true | $false>] [-OrganizationEnabled <$true | $false>]
 [-OutboundCharset <AlwaysUTF8 | AutoDetect | UserLanguageChoice>] [-OWALightEnabled <$true | $false>]
 [-OWAMiniEnabled <$true | $false>] [-PhoneticSupportEnabled <$true | $false>]
 [-PremiumClientEnabled <$true | $false>] [-PublicFoldersEnabled <$true | $false>]
 [-RecoverDeletedItemsEnabled <$true | $false>] [-RemindersAndNotificationsEnabled <$true | $false>]
 [-RulesEnabled <$true | $false>] [-SearchFoldersEnabled <$true | $false>]
 [-SignaturesEnabled <$true | $false>] [-SilverlightEnabled <$true | $false>] [-SMimeEnabled <$true | $false>]
 [-SpellCheckerEnabled <$true | $false>] [-TasksEnabled <$true | $false>]
 [-TextMessagingEnabled <$true | $false>] [-ThemeSelectionEnabled <$true | $false>]
 [-UMIntegrationEnabled <$true | $false>] [-UNCAccessOnPrivateComputersEnabled <$true | $false>]
 [-UNCAccessOnPublicComputersEnabled <$true | $false>] [-UseGB18030 <$true | $false>]
 [-UseISO885915 <$true | $false>] [-WebReadyDocumentViewingForAllSupportedTypes <$true | $false>]
 [-WebReadyDocumentViewingOnPrivateComputersEnabled <$true | $false>]
 [-WebReadyDocumentViewingOnPublicComputersEnabled <$true | $false>]
 [-WebReadyDocumentViewingSupportedFileTypes <MultiValuedProperty>]
 [-WebReadyDocumentViewingSupportedMimeTypes <MultiValuedProperty>] [-WebReadyFileTypes <MultiValuedProperty>]
 [-WebReadyMimeTypes <MultiValuedProperty>] [-WhatIf] [-WSSAccessOnPrivateComputersEnabled <$true | $false>]
 [-WSSAccessOnPublicComputersEnabled <$true | $false>] [-AllowCopyContactsToDeviceAddressBook <$true | $false>]
 [-AllowOfflineOn <PrivateComputersOnly | NoComputers | AllComputers>] [-DisableFacebook]
 [-DisplayPhotosEnabled <$true | $false>] [-FacebookEnabled <$true | $false>]
 [-ForceWacViewingFirstOnPrivateComputers <$true | $false>]
 [-ForceWacViewingFirstOnPublicComputers <$true | $false>] [-GroupCreationEnabled <$true | $false>]
 [-IsDefault] [-LinkedInEnabled <$true | $false>] [-PlacesEnabled <$true | $false>]
 [-ReportJunkEmailEnabled <$true | $false>] [-SetPhotoEnabled <$true | $false>] [-SetPhotoURL <String>]
 [-SkipCreateUnifiedGroupCustomSharepointClassification <$true | $false>]
 [-WacExternalServicesEnabled <$true | $false>] [-WacOMEXEnabled <$true | $false>]
 [-WacViewingOnPrivateComputersEnabled <$true | $false>] [-WacViewingOnPublicComputersEnabled <$true | $false>]
 [-WeatherEnabled <$true | $false>] [-WebPartsFrameOptionsType <Deny | AllowFrom | None | SameOrigin>]
 [-BoxAttachmentsEnabled <$true | $false>] [-ClassicAttachmentsEnabled <$true | $false>]
 [-DropboxAttachmentsEnabled <$true | $false>] [-ExternalSPMySiteHostURL <String>]
 [-FreCardsEnabled <$true | $false>] [-GoogleDriveAttachmentsEnabled <$true | $false>]
 [-InterestingCalendarsEnabled <$true | $false>] [-InternalSPMySiteHostURL <String>]
 [-LocalEventsEnabled <$true | $false>] [-OneDriveAttachmentsEnabled <$true | $false>]
 [-OnSendAddinsEnabled <$true | $false>] [-ReferenceAttachmentsEnabled <$true | $false>]
 [-SatisfactionEnabled <$true | $false>] [-SaveAttachmentsToCloudEnabled <$true | $false>]
 [-ThirdPartyAttachmentsEnabled <$true | $false>] [-UserVoiceEnabled <$true | $false>]
 [-WacEditingEnabled <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

By default, when Exchange is installed, an Outlook Web App mailbox policy named default is created in the organization. The Set-OwaMailboxPolicy cmdlet configures an existing Outlook Web App mailbox policy.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Outlook Web App mailbox policies" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

By default, an Outlook Web App mailbox policy named Default is created in the organization. The Set-OwaMailboxPolicy cmdlet configures an existing Outlook Web App mailbox policy.

Changes to Outlook Web App mailbox polices may take up to 60 minutes to take effect. In on-premises Exchange 2013, you can force an update by running the command IISRESET /noforce.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Outlook Web App mailbox policies" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

In on-premises Exchange, theOutlook on the web mailbox policy is named Default. In Office 365, the default Outlook on the web mailbox policy is named OwaMailboxPolicy-Default.

Changes to Outlook on the web mailbox polices may take up to 60 minutes to take effect. In on-premises Exchange, you can force an update by running the command IISRESET /noforce.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-OwaMailboxPolicy -Identity EMEA\Contoso\Corporate -CalendarEnabled $false
```

This example disables access to the calendar for the mailbox policy Corporate for the tenant Contoso in the organization EMEA.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-OwaMailboxPolicy -Identity EMEA\Contoso\Corporate -CalendarEnabled $false
```

This example disables access to the calendar for the mailbox policy Corporate for the tenant Contoso in the organization EMEA.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-OwaMailboxPolicy -Identity EMEA\Contoso\Corporate -CalendarEnabled $false
```

This example disables access to the calendar for the mailbox policy named Corporate for the tenant Contoso in the organization EMEA.

### Example 1 -------------------------- (Exchange Online)
```
Set-OwaMailboxPolicy -Identity EMEA\Contoso\Corporate -CalendarEnabled $false
```

This example disables access to the calendar for the mailbox policy named Corporate for the tenant Contoso in the organization EMEA.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-OwaMailboxPolicy -Identity Default -TasksEnabled $false
```

This example disables access to the Tasks folder for the default mailbox policy.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-OwaMailboxPolicy -Identity Default -TasksEnabled $false
```

This example disables access to the Tasks folder for the default mailbox policy.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-OwaMailboxPolicy -Identity Default -TasksEnabled $false
```

This example disables access to the Tasks folder for the default mailbox policy in an on-premises Exchange organization.

### Example 2 -------------------------- (Exchange Online)
```
Set-OwaMailboxPolicy -Identity Default -TasksEnabled $false
```

This example disables access to the Tasks folder for the default mailbox policy in an on-premises Exchange organization.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-OwaMailboxPolicy -Identity Default -AllowedFileTypes '.doc', '.pdf'
```

This example sets the allowed file type extensions to .doc and .pdf for the default mailbox policy, allowing users to save files with those extensions locally or view them from a Web browser.

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-OwaMailboxPolicy -Identity Default -AllowedFileTypes '.doc', '.pdf'
```

This example sets the allowed file type extensions to .doc and .pdf for the default mailbox policy, allowing users to save files with those extensions locally or view them from a web browser.

### Example 3 -------------------------- (Exchange Server 2016)
```
Set-OwaMailboxPolicy -Identity OwaMailboxPolicy-Default -AllowedFileTypes '.doc', '.pdf'
```

This example sets the allowed file type extensions to .doc and .pdf for the default mailbox policy in an Office 365 organization, allowing users to save files with those extensions locally or view them from a web browser.

### Example 3 -------------------------- (Exchange Online)
```
Set-OwaMailboxPolicy -Identity OwaMailboxPolicy-Default -AllowedFileTypes '.doc', '.pdf'
```

This example sets the allowed file type extensions to .doc and .pdf for the default mailbox policy in an Office 365 organization, allowing users to save files with those extensions locally or view them from a web browser.

### Example 4 -------------------------- (Exchange Server 2016)
```
Set-OwaMailboxPolicy -Identity OwaMailboxPolicy-Default -UserVoiceEnabled $false
```

This example disables Outlook UserVoice for the default mailbox policy in Office 365.

### Example 4 -------------------------- (Exchange Online)
```
Set-OwaMailboxPolicy -Identity OwaMailboxPolicy-Default -UserVoiceEnabled $false
```

This example disables Outlook UserVoice for the default mailbox policy in Office 365.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the name of the policy or the path to the policy including the name, for example, \<Organization\>\\\<ResellerA\>\\\<Reseller…n\>\\\<Tenant\>\\\<Object Name\>.



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the mailbox policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

In multi-tenant environments, you can use the path to the policy including the name, for example, \<Organization\>\\\<ResellerA\>\\\<Reseller…n\>\\\<Tenant\>\\\<Policy Name\>.



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
!!! Exchange Server 2010, Exchange Server 2013

The ActionForUnknownFileAndMIMETypes parameter specifies how to handle files that aren't included in other File Access Management lists.

The following values are valid for this parameter:

- Allow

- ForceSave

- Block



!!! Exchange Server 2016, Exchange Online

The ActionForUnknownFileAndMIMETypes parameter specifies how to handle files that aren't included in other File Access Management lists. Valid values are:

- Allow

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
!!! Exchange Server 2010

The ActiveSyncIntegrationEnabled parameter specifies whether to disable Microsoft Exchange ActiveSync on the Outlook Web App Options page.



!!! Exchange Server 2013

The ActiveSyncIntegrationEnabled parameter specifies whether to disable Microsoft Exchange ActiveSync on the Outlook Web AppOptions page.



!!! Exchange Server 2016, Exchange Online

The ActiveSyncIntegrationEnabled parameter specifies whether to disable Exchange ActiveSync on the Options page in Outlook on the web.



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
!!! Exchange Server 2010

The AllAddressListsEnabled parameter specifies which address lists are available to the user.

You can use one of the following values:

- If set to $true, users can view all address lists.

- If set to $false, users can view only the global address list.



!!! Exchange Server 2013

The AllAddressListsEnabled parameter specifies which address lists are available to the user.

You can use either $true or $false as follows:

- If set to $true, users can view all address lists.

- If set to $false, users can view only the global address list.



!!! Exchange Server 2016, Exchange Online

The AllAddressListsEnabled parameter specifies which address lists are available to the user. Valid values are:

- $true: Users can view all address lists.

- $false: Users can view only the global address list.



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

### -AllowedFileTypes
!!! Exchange Server 2010

The AllowedFileTypes parameter specifies the extensions of file types that the user can save locally and view from a Web browser. If the same extensions are in multiple settings lists, the most secure setting overrides the less secure settings.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The AllowedFileTypes parameter specifies the extensions of file types that the user can save locally and view from a web browser. If the same extensions are in multiple settings lists, the most secure setting overrides the less secure settings.



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
!!! Exchange Server 2010

The AllowedMimeTypes parameter creates extensions of MIME attachments that users can save locally and view from a Web browser. If the same extensions are in multiple settings lists, the most secure setting overrides the less secure settings.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The AllowedMimeTypes parameter creates extensions of MIME attachments that users can save locally and view from a web browser. If the same extensions are in multiple settings lists, the most secure setting overrides the less secure settings.



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

### -BlockedFileTypes
!!! Exchange Server 2010

The BlockedFileTypes parameter specifies a list of extensions of attachments that are blocked. Attachments that contain these blocked extensions can't be saved locally or viewed from a Web browser.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The BlockedFileTypes parameter specifies a list of extensions of attachments that are blocked. Attachments that contain these blocked extensions can't be saved locally or viewed from a web browser.



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
!!! Exchange Server 2010

The BlockedMimeTypes parameter specifies a list of MIME extensions of attachments that are blocked. Attachments that contain these blocked MIME extensions can't be saved locally or viewed from a Web browser.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The BlockedMimeTypes parameter specifies a list of MIME extensions of attachments that are blocked. Attachments that contain these blocked MIME extensions can't be saved locally or viewed from a web browser.



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
The CalendarEnabled parameter specifies whether to enable or disable the calendar for users.

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
This parameter is available only in on-premises Exchange.

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

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContactsEnabled
The ContactsEnabled parameter specifies whether Contacts are enabled for users.

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
!!! Exchange Server 2010

The DefaultClientLanguage parameter isn't available in this release.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The DefaultTheme parameter specifies the default theme used by Outlook Web App when the user has not selected a theme.



!!! Exchange Server 2013

The DefaultTheme parameter specifies the default theme used by Outlook Web App when the user hasn't selected a theme.



!!! Exchange Server 2016, Exchange Online

The DefaultTheme parameter specifies the default theme used by Outlook on the web when the user hasn't selected a theme.



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
!!! Exchange Server 2010, Exchange Server 2013

The DelegateAccessEnabled parameter specifies whether delegates can use Outlook Web App to open folders they have delegate access to through this virtual directory.



!!! Exchange Server 2016, Exchange Online

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

### -DirectFileAccessOnPrivateComputersEnabled
The DirectFileAccessOnPrivateComputersEnabled parameter specifies the left-click options on attachments when the user has chosen to log on using the Private option. If this parameter is set to $true, Open is an available option. If it's set to $false, the Open option is disabled.

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
The DirectFileAccessOnPublicComputersEnabled parameter specifies the left-click options on attachments when the user has chosen to log on using the Public option. If this parameter is set to $true, Open is an available option. If it's set to $false, the Open option is disabled.

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

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExplicitLogonEnabled
!!! Exchange Server 2010, Exchange Server 2013

The ExplicitLogonEnabled parameter specifies whether to allow a user to open someone else's mailbox in Outlook Web App. If this parameter is set to $true, it allows a user to open someone else's mailbox in Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The ExplicitLogonEnabled parameter specifies whether to allow a user to open someone else's mailbox in Outlook on the web. If this parameter is set to $true, it allows a user to open someone else's mailbox in Outlook on the web.



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

### -ForceSaveAttachmentFilteringEnabled
!!! Exchange Server 2010

The ForceSaveAttachmentFilteringEnabled parameter sets whether files which are included in the list of extensions created by the ForceSaveFileTypes parameter are filtered before the user can save them.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ForceSaveAttachmentFilteringEnabled parameter specifies whether files which are included in the list of extensions created by the ForceSaveFileTypes parameter are filtered before the user can save them.



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
The ForceSaveFileTypes parameter creates a list of extensions of attachments that can be opened only after the file is saved locally on the user's computer.

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
The ForceSaveMimeTypes parameter specifies the MIME types of attachments that can be opened only after the file is saved locally on the user's computer.

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

### -ForceWebReadyDocumentViewingFirstOnPrivateComputers
!!! Exchange Server 2010

The ForceWebReadyDocumentViewingFirstOnPrivateComputers parameter specifies whether a user who has logged on using the Private option can open a document directly without first viewing it as a Web page.



!!! Exchange Server 2013

The ForceWebReadyDocumentViewingFirstOnPrivateComputers parameter specifies whether a user who has logged on using the Private option can open a document directly without first viewing it as a web page.



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
!!! Exchange Server 2010

The ForceWebReadyDocumentViewingFirstOnPublicComputers parameter specifies whether a user who has logged on using the Public option can open a document directly without first viewing it as a Web page.



!!! Exchange Server 2013

The ForceWebReadyDocumentViewingFirstOnPublicComputers parameter specifies whether a user who has logged on using the Public option can open a document directly without first viewing it as a web page.



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

### -GlobalAddressListEnabled
!!! Exchange Server 2010, Exchange Server 2013

The GlobalAddressListEnabled parameter specifies whether to show the global address list in Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The GlobalAddressListEnabled parameter specifies whether to show the global address list in Outlook on the web.



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

### -InstantMessagingEnabled
!!! Exchange Server 2010, Exchange Server 2013

The InstantMessagingEnabled parameter specifies whether to enable instant messaging in Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The InstantMessagingEnabled parameter specifies whether to enable instant messaging in Outlook on the web.



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
!!! Exchange Server 2010

The InstantMessagingType parameter specifies the type of instant messaging provider to be used. Set this parameter to 0 for no provider and 1 for Microsoft Office Communication Server. Outlook Live organizations can also set this parameter to 2 for Microsoft Network(MSN).



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The InstantMessagingType parameter specifies the type of instant messaging provider to be used. Set this parameter to None for no provider and Ocs for Microsoft Office Communication Server. The Msn value is no longer used and will be deprecated.



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

### -IRMEnabled
The IRMEnabled parameter specifies whether the Information Rights Management (IRM) feature is enabled.

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

### -JournalEnabled
The JournalEnabled parameter specifies whether the Journal folder is visible.

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
!!! Exchange Server 2010

The JunkEmailEnabled parameter specifies whether the Junk E-Mail management tools are enabled.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The JunkEmailEnabled parameter specifies whether the Junk Email management tools are enabled.



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

### -LogonAndErrorLanguage
!!! Exchange Server 2010, Exchange Server 2013

The LogonAndErrorLanguage parameter specifies which language Outlook Web App uses for forms-based authentication and for error messages that occur when a user's current language setting can't be read. When this parameter has a value of 0, the language selection is undefined.



!!! Exchange Server 2016, Exchange Online

The LogonAndErrorLanguage parameter specifies which language Outlook on the web uses for forms-based authentication and for error messages that occur when a user's current language setting can't be read. When this parameter has a value of 0, the language selection is undefined.



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
!!! Exchange Server 2010

The Name parameter specifies a name for the new policy.



!!! Exchange Server 2013

The Name parameter specifies a name for the policy.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010, Exchange Server 2013

The NotesEnabled parameter specifies whether the Notes folder is visible in Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The NotesEnabled parameter specifies whether the Notes folder is visible in Outlook on the web.



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

### -OrganizationEnabled
!!! Exchange Server 2010

When the OrganizationEnabled parameter is set to $false, the Automatic Reply option doesn't include external and internal options, the address book doesn't show the organization hierarchy, and the Resources tab in Calendar forms is turned off.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

When the OrganizationEnabled parameter is set to $false, the Automatic Reply option doesn't include external and internal options, the address book doesn't show the organization hierarchy, and the Resources tab in Calendar forms is disabled.



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
!!! Exchange Server 2010, Exchange Server 2013

The OutboundCharset parameter specifies the character set used for messages sent by users on a specific Outlook Web App virtual directory.



!!! Exchange Server 2016, Exchange Online

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

### -OWALightEnabled
!!! Exchange Server 2010, Exchange Server 2013

The OWALightEnabled parameter, when set to $false, removes the option to use the light version of Outlook Web App from the logon page and removes the Accessibility check box from the General Options tab. This parameter doesn't apply to Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The OWALightEnabled parameter, when set to $false, removes the option to use the light version of Outlook on the web from the logon page and removes the Accessibility check box from the General Options tab. This parameter doesn't apply to Outlook on the web.



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

### -PremiumClientEnabled
!!! Exchange Server 2010

The PremiumClientEnabled parameter specifies whether a user can access Outlook Web App. This parameter doesn't apply to the light version of Outlook Web App.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -PublicFoldersEnabled
!!! Exchange Server 2010

The PublicFoldersEnabled parameter specifies whether a user can browse or read items in public folders using Outlook Web App.

By default, the PublicFoldersEnabled parameter is set to $true. If the PublicFoldersEnabled parameter is set to $false, users can only access their private mailboxes in Outlook Web App.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -RecoverDeletedItemsEnabled
!!! Exchange Server 2010, Exchange Server 2013

The RecoverDeletedItemsEnabled parameter specifies whether a user can use Outlook Web App to view, recover, or delete permanently items that have been deleted from the Deleted Items folder. By default, the RecoverDeletedItemsEnabled parameter is set to $true. If the RecoverDeletedItemsEnabled parameter is set to $false, the items deleted from the Deleted Items folder are retained. However, users can't view, recover, or permanently delete them using Outlook Web App.



!!! Exchange Server 2016, Exchange Online

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

### -RemindersAndNotificationsEnabled
!!! Exchange Server 2010, Exchange Server 2013

The RemindersAndNotificationsEnabled parameter specifies whether notifications and reminders are enabled in Outlook Web App. This parameter doesn't apply to the light version of Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The RemindersAndNotificationsEnabled parameter specifies whether notifications and reminders are enabled in Outlook on the web. This parameter doesn't apply to the light version of Outlook on the web.



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

### -RulesEnabled
!!! Exchange Server 2010, Exchange Server 2013

The RulesEnabled parameter specifies whether a user can view, create, or modify server-side rules using Outlook Web App. By default, the RulesEnabled parameter is set to $true. If the RulesEnabled parameter is set to $false, users must use Microsoft Outlook to view, create, and modify server-side rules.



!!! Exchange Server 2016, Exchange Online

The RulesEnabled parameter specifies whether a user can view, create, or modify server-side rules using Outlook on the web. By default, the RulesEnabled parameter is set to $true. If the RulesEnabled parameter is set to $false, users must use Outlook to view, create, and modify server-side rules.



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

### -SearchFoldersEnabled
!!! Exchange Server 2010, Exchange Server 2013

The SearchFoldersEnabled parameter specifies whether Search Folders are available in Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The SearchFoldersEnabled parameter specifies whether Search Folders are available in Outlook on the web.



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

### -SignaturesEnabled
!!! Exchange Server 2010

The SignaturesEnabled parameter specifies whether a user can use the Signature feature in Outlook Web App.



!!! Exchange Server 2013

This parameter enables or disables the use of signatures in Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The SignaturesEnabled parameter specifies whether to enable or disable the use of signatures in Outlook on the web.



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
!!! Exchange Server 2010

The SilverlightEnabled parameter specifies whether a user can use Microsoft Silverlight features in Outlook Web App.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -SMimeEnabled
!!! Exchange Server 2010

The SMimeEnabled parameter specifies whether users can download the S/MIME control for Outlook Web App and use it to read and compose signed and encrypted messages. By default, the SMimeEnabled parameter is set to $true. If the SMimeEnabled parameter is set to $false, users are unable to read or compose messages that are opaque-signed or encrypted. Messages that are clear-signed can be read but not composed, and their signatures aren't validated.



!!! Exchange Server 2013

This parameter has been deprecated and is no longer used.

To configure the S/MIME settings in Outlook Web App, use the Get-SmimeConfig and Set-SmimeConfig cmdlets. For more information, see S/MIME for message signing and encryption.



!!! Exchange Server 2016, Exchange Online

This parameter has been deprecated and is no longer used.

To configure the S/MIME settings in Outlook on the web, use the Get-SmimeConfig and Set-SmimeConfig cmdlets. For more information, see S/MIME for message signing and encryption.



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

### -SpellCheckerEnabled
!!! Exchange Server 2010

The SpellCheckerEnabled parameter specifies whether a user can check spelling in Outlook Web App. This parameter doesn't apply to the light version of Outlook Web App.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -TasksEnabled
!!! Exchange Server 2010, Exchange Server 2013

The TasksEnabled parameter specifies whether a user can use the Tasks feature in Outlook Web App. This parameter doesn't apply to the light version of Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The TasksEnabled parameter specifies whether a user can use the Tasks feature in Outlook on the web. This parameter doesn't apply to the light version of Outlook on the web.



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
!!! Exchange Server 2010, Exchange Server 2013

The TextMessagingEnabled parameter specifies whether users can send and receive text messages. This parameter doesn't apply to the light version of Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The TextMessagingEnabled parameter specifies whether users can send and receive text messages. This parameter doesn't apply to the light version of Outlook on the web.



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
!!! Exchange Server 2010, Exchange Server 2013

The ThemeSelectionEnabled parameter specifies whether users can select a theme in Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The ThemeSelectionEnabled parameter specifies whether users can select a theme in Outlook on the web.



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

### -UMIntegrationEnabled
!!! Exchange Server 2010

The UMIntegrationEnabled parameter specifies whether Unified Messaging is enabled on Outlook Web App. This setting applies only if Unified Messaging has been enabled for a user using the Enable-UMMailbox cmdlet. This parameter doesn't apply to the light version of Outlook Web App.



!!! Exchange Server 2013

The UMIntegrationEnabled parameter specifies whether Unified Messaging is enabled in Outlook Web App. This setting applies only if Unified Messaging has been enabled for a user using the Enable-UMMailbox cmdlet. This parameter doesn't apply to the light version of Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The UMIntegrationEnabled parameter specifies whether Unified Messaging is enabled in Outlook on the web. This setting applies only if Unified Messaging has been enabled for a user using the Enable-UMMailbox cmdlet. This parameter doesn't apply to the light version of Outlook on the web.



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
!!! Exchange Server 2010

The UNCAccessOnPrivateComputersEnabled parameter isn't available in this release.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -UNCAccessOnPublicComputersEnabled
!!! Exchange Server 2010

The UNCAccessOnPublicComputersEnabled parameter isn't available in this release.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -UseGB18030
!!! Exchange Server 2010

The UseGB18030 parameter specifies when to use the character set GB18030. This parameter is a character-handling registry key that works in coordination with the OutboundCharset registry key. When the UseGB18030 parameter is set to 1, the character set GB18030 is used wherever GB2312 would have been used.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The UseGB18030 parameter specifies when to use the character set GB18030. This parameter is a character-handling registry key that works in coordination with the OutboundCharset registry key. When the UseGB18030 parameter is set to $true, the character set GB18030 is used wherever GB2312 would have been used.



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
!!! Exchange Server 2010

The UseISO885915 parameter specifies when to use the character set ISO8859-15. This parameter is a character-handling registry key that works in coordination with the OutboundCharset registry key. When the UseISO885915 parameter is set to 1, the character set ISO8859-15 is used wherever ISO8859-1 would have been used.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The UseISO885915 parameter specifies when to use the character set ISO8859-15. This parameter is a character-handling registry key that works in coordination with the OutboundCharset registry key. When the UseISO885915 parameter is set to $true, the character set ISO8859-15 is used wherever ISO8859-1 would have been used.



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

### -WebReadyDocumentViewingForAllSupportedTypes
The WebReadyDocumentViewingForAllSupportedTypes parameter enables WebReady Document Viewing for all supported file and MIME types. If this parameter is set to $false, use the WebReadyFileTypes and WebReadyMimeTypes parameters to set which file and MIME types to convert.

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
The WebReadyDocumentViewingOnPrivateComputersEnabled parameter specifies whether WebReady Document Viewing is enabled when the user selects the This is a private computer option on the Outlook Web App logon page.

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
The WebReadyDocumentViewingOnPublicComputersEnabled parameter specifies whether WebReady Document Viewing is enabled when the user selects the This is a public or shared computer option on the Outlook Web App logon page.

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
The read-only WebReadyDocumentViewingSupportedMimeTypes parameter lists the MIME types supported by the conversion engine

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WSSAccessOnPrivateComputersEnabled
!!! Exchange Server 2010

The WSSAccessOnPrivateComputersEnabled parameter isn't available in this release.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The WSSAccessOnPublicComputersEnabled parameter isn't available in this release.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -AllowCopyContactsToDeviceAddressBook
!!! Exchange Server 2013

The AllowCopyContactsToDeviceAddressBook parameter specifies if users can copy the contents of their Contacts folder to a mobile device's native address book when using OWA for Devices.



!!! Exchange Server 2016, Exchange Online

The AllowCopyContactsToDeviceAddressBook parameter specifies if users can copy the contents of their Contacts folder to a mobile device's native address book when using Outlook on the web for devices.



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

### -AllowOfflineOn
!!! Exchange Server 2013

The AllowOfflineOn parameter specifies which computers can use Outlook Web App in offline mode. The possible values are PrivateComputersOnly, NoComputers, or AllComputers. The value is set to AllComputers by default. If you set the value to PrivateComputersOnly, only users who log into Outlook Web App using the Private option are able to use Outlook Web App in offline mode.

If the feature is enabled, and if users are using a supported browser, they can use Outlook Web App in offline mode. Users can turn the feature on or off in Outlook Web App. To turn the feature on, users click the gear icon, and then select Stop using offline. To turn the feature off, users click the gear icon, and then select Use mail offline. The supported browsers for this feature in Microsoft Exchange Server 2013 are Microsoft Internet Explorer 10, Safari 4, or Chrome 16. For more information, see Using Outlook Web App offline (https://go.microsoft.com/fwlink/p/?linkid=267644).



!!! Exchange Server 2016, Exchange Online

The AllowOfflineOn parameter specifies which computers can use Outlook on the web in offline mode. The possible values are PrivateComputersOnly, NoComputers, or AllComputers. The value is set to AllComputers by default. If you set the value to PrivateComputersOnly, only users who log into Outlook on the web using the Private option are able to use Outlook on the web in offline mode.

If the feature is enabled, and if users are using a supported browser, they can use Outlook on the web in offline mode. Users can turn the feature on or off in Outlook on the web. To turn the feature on, users click the gear icon, and then select Stop using offline. To turn the feature off, users click the gear icon, and then select Use mail offline.For more information about the supported browsers for this feature, see Using Outlook Web App offline (https://go.microsoft.com/fwlink/p/?linkid=267644).



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

### -DisableFacebook
!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The DisableFacebook switch disables Facebook integration with Outlook Web App.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The DisableFacebook switch disables Facebook integration with Outlook on the web.



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

### -DisplayPhotosEnabled
!!! Exchange Server 2013

The DisplayPhotosEnabled parameter specifies whether users see sender photos in Outlook Web App. The possible values for this parameter are $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online

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

### -FacebookEnabled
The FacebookEnabled parameter specifies whether users can synchronize their Facebook contacts to their Contacts folder. The possible values for this parameter are $true or $false. The default value is $true.

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

### -ForceWacViewingFirstOnPrivateComputers
The ForceWacViewingFirstOnPrivateComputers parameter specifies whether a user who has logged on using the Private option can open an Office file directly without first viewing it as a web page.

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
The ForceWacViewingFirstOnPublicComputers parameter specifies whether a user who has logged on using the Public option can open an Office file directly without first viewing it as a web page.

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

### -GroupCreationEnabled
!!! Exchange Server 2013

This parameter is reserved for internal Microsoft use.



!!! Exchange Server 2016, Exchange Online

The GroupCreationEnabled parameter specifies whether to allow users to create Office 365 groups in Outlook on the web. Valid values are:

- $true: Users can create Office 365 groups in Outlook on the web. This is the default value.

- $false: Users can't create Office 365 groups in Outlook on the web.



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

### -IsDefault
The IsDefault parameter specifies whether this policy is the default policy. The default value is $false. If another policy is currently set as the default, setting this parameter replaces the old default policy with this policy.

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

### -LinkedInEnabled
This parameter is available only in the cloud-based service.

The LinkedInEnabled parameter specifies whether users can synchronize their LinkedIn contacts to their Contacts folder. The possible values for this parameter are $true or $false. The default value is $true.

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

### -PlacesEnabled
!!! Exchange Server 2013

This parameter is reserved for internal Microsoft use.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The PlacesEnabled parameter specifies whether to enable or disable Places in Outlook on the web. Places lets users search, share and map location details by using Bing. Valid values are:

- $true: Places is enabled. This is the default value.

- $false: Places is disabled.



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

### -ReportJunkEmailEnabled
!!! Exchange Server 2013

The ReportJunkEmailEnabled parameter specifies whether users can report messages as junk to Microsoft in Outlook Web App. Valid input for this parameter is $true or $false. The default value is $true.

If you set this parameter to $false, the Report mail as junk window doesn't appear after users select Mark as junk. This parameter is meaningful only when the JunkEmailEnabled parameter is set to $true.



!!! Exchange Server 2016, Exchange Online

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

### -SetPhotoEnabled
!!! Exchange Server 2013

The SetPhotoEnabled parameter specifies whether users can add, change, and remove their sender photo in Outlook Web App. The possible values for this parameter are $true or $false. The default value is $false. When this value is set to $true, users can manage their sender photo using two methods. They can click their name in the upper-right corner of Outlook Web App, click Change, and then browse to the photo they want to use. Alternatively, users can manage their photo by clicking the gear icon in the upper-right corner of Outlook Web App, and then clicking Options \> Account \> My account \> Edit \> Change.



!!! Exchange Server 2016, Exchange Online

The SetPhotoEnabled parameter specifies whether users can add, change, and remove their sender photo in Outlook on the web. The possible values for this parameter are $true or $false. The default value is $false. When this value is set to $true, users can manage their sender photo using two methods. They can click their name in the upper-right corner of Outlook on the web, click Change, and then browse to the photo they want to use. Alternatively, users can manage their photo by clicking the gear icon in the upper-right corner of Outlook on the web, and then clicking Options \> Account \> My account \> Edit \> Change.



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
The SetPhotoURL parameter specifies the location of the user photos. This value isn't set by default.

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

### -SkipCreateUnifiedGroupCustomSharepointClassification
The SkipCreateUnifiedGroupCustomSharepointClassification parameter causes the custom Sharepoint page during unified group creation to be skipped.

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

### -WacExternalServicesEnabled
!!! Exchange Server 2013

The WacExternalServicesEnabled parameter enables or disables external services that may be used by Web Access Companion (WAC). The default value is $true.



!!! Exchange Server 2016, Exchange Online

The WacExternalServicesEnabled parameter specifies whether to enable or disable external services when viewing documents in Outlook on the web (for example, machine translation). Valid values are:

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
!!! Exchange Server 2013

The WacOMEXEnabled parameter enables or disables apps for Outlook. The default value is $false.



!!! Exchange Server 2016, Exchange Online

The WacOMEXEnabled parameter specifies whether to enable or disable apps for Outlook. Valid values are:

- $true: apps for Outlook are enabled.

- $false: apps for Outlook are disabled. This is the default value.



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
!!! Exchange Server 2013

The WacViewingOnPrivateComputersEnabled parameter specifies whether a user who has logged into Outlook Web App using the Private option can view supported Office files using Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The WacViewingOnPrivateComputersEnabled parameter specifies whether to enable or disable web viewing of supported Office documents in private computer sessions. By default, all Outlook on the web sessions are considered to be on private computers. Valid values are:

- $true: In private computer sessions, users can view supported Office documents in the web browser. This is the default value.

- $false: In private computer sessions, users can't view supported Office documents in the web browser. Users can still open the file in a supported application, or save the file locally.



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
!!! Exchange Server 2013

The WacViewingOnPublicComputersEnabled parameter specifies whether a user who has logged into Outlook Web App using the Public option can view supported Office files using Outlook Web App.



!!! Exchange Server 2016, Exchange Online

The WacViewingOnPublicComputersEnabled parameter specifies whether to enable or disable web viewing of supported Office documents in public computer sessions. Valid values are:

- $true: In public computer sessions, users can view supported Office documents in the web browser. This is the default value.

- $false: In public computer sessions, users can't view supported Office documents in the web browser. Users can still open the file in a supported application, or save the file locally.

By default, this setting is meaningless, because all Outlook on the web sessions are considered to be on private computers. In on-premises Exchange, the only way that users can specify public computer sessions is if you've enabled the selection on the sign in page (the LogonPagePublicPrivateSelectionEnabled parameter value is $true on the Set-OwaVirtualDirectory cmdlet).



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
!!! Exchange Server 2013

This parameter is reserved for internal Microsoft use.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The WeatherEnabled parameter specifies whether to enable or disable weather information in the calendar in Outlook on the web. Valid values are:

- $true: Weather is enabled. This is the default value.

- $false: Weather is disabled. This is the default value.



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

### -WebPartsFrameOptionsType
!!! Exchange Server 2013

The WebPartsFrameOptionsType parameter specifies what sources can access Outlook Web App web parts in IFRAME or FRAME elements.

This parameter can have the following values:

- None This indicates that there are no restrictions on displaying Outlook Web App content in a frame.

- SameOrigin This is the default value and the recommended value. This allows display of Outlook Web App content only in a frame that has the same origin as the content.

- Deny This blocks display of Outlook Web App content in a frame regardless of the origin of the site attempting to access it.

- AllowFrom This isn't yet available. It will be implemented in a later release.



!!! Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BoxAttachmentsEnabled
This parameter is available only in the cloud-based service.

The BoxAttachmentsEnabled parameter specifies whether to allow Box attachments in Outlook on the web when the value of the ThirdPartyAttachmentsEnabled parameter is $true. Valid values are:

- $true: Box attachments are enabled. This is the default value.

- $false: Box attachments are disabled.

This parameter has no effect if the value of the ThirdPartyAttachmentsEnabled parameter is $false.

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

### -ClassicAttachmentsEnabled
The ClassicAttachmentsEnabled parameter specifies whether users can attach local files as regular email attachments. Valid values are:

- $true: Users can attach local files to email messages. This is the default value.

- $false: Users can't attach local files to email messages.

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

### -DropboxAttachmentsEnabled
This parameter is available only in the cloud-based service.

The DropboxAttachmentsEnabled parameter specifies whether to allow Dropbox attachments in Outlook on the web when the value of the ThirdPartyAttachmentsEnabled parameter is $true. Valid values are:

- $true: Dropbox attachments are enabled. This is the default value.

- $false: Dropbox attachments are disabled.

This parameter has no effect if the value of the ThirdPartyAttachmentsEnabled parameter is $false.

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

### -FreCardsEnabled
This parameter is available only in the cloud-based service.

The FreCardsEnabled parameter specifies whether to enable or disable the theme, signature, and phone cards in Outlook on the web. Valid values are:

- $true: The theme, signature, and phone cards are visible in Outlook on the web. This is the default value.

- $false: The theme, signature, and phone cards aren't visible in Outlook on the web. Only the introduction, time zone, and final cards are visible.

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

### -GoogleDriveAttachmentsEnabled
This parameter is available only in the cloud-based service.

The GoogleDriveAttachmentsEnabled parameter specifies whether to allow Google Drive attachments in Outlook on the web when the value of the ThirdPartyAttachmentsEnabled parameter is $true. Valid values are:

- $true: Google Drive attachments are enabled. This is the default value.

- $false: Google Drive attachments are disabled.

This parameter has no effect if the value of the ThirdPartyAttachmentsEnabled parameter is $false.

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

### -InterestingCalendarsEnabled
This parameter is available only in the cloud-based service.

The InterestingCalendarsEnabled parameter specifies whether to enable interesting calendars in Outlook on the web. Valid values are:

- $true: Interesting calendars are enabled. This is the default value.

- $false: Interesting calendars are disabled.

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

### -LocalEventsEnabled
This parameter is available only in the cloud-based service.

The LocalEventsEnabled parameter specifies whether to enable local events calendars in Outlook on the web. Valid values are:

- $true: Local events are enabled.

- $false: Local events are disabled. This is the default value.

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
This parameter is available only in the cloud-based service.

The OnSendAddinsEnabled parameter specifies whether to enable or disable on send add-ins in Outlook on the web (add-ins that support events when a user clicks Send). Valid values are:

- $true: On send add-ins are enabled.

- $false: On send add-ins are disabled. This is the default value.

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

### -ReferenceAttachmentsEnabled
The ReferenceAttachmentsEnabled parameter specifies whether users can attach files from the cloud as linked attachments. Valid values are:

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

### -ThirdPartyAttachmentsEnabled
This parameter is available only in the cloud-based service.

The ThirdPartyAttachmentsEnabled parameter specifies whether to allow third-party attachments in Outlook on the web. Valid values are:

- $true: Third-party attachments are enabled. Users can connect their third-party file sharing accounts and share files over email. This is the default value.

- $false: Third-party attachments are disabled. Users can't connect their third-party file sharing accounts or share files over email.

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

### -UserVoiceEnabled
This parameter is available only in the cloud-based service.

The UserVoiceEnabled parameter specifies whether to enable or disable Outlook UserVoice in Outlook on the web. Outlook UserVoice is a customer feedback area that's available in Office 365. Valid values are:

- $true: Outlook UserVoice is enabled. This is the default value.

- $false: Outlook UserVoice is disabled.

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

### -WacEditingEnabled
The WacEditingEnabled parameter specifies whether to enable or disable editing documents in Outlook on the web by using Office Online Server (formerly known as Office Web Apps Server and Web Access Companion Server). Valid values are:

- $true: Users can edit supported documents in Outlook on the web. This is the default value.

- $false: Users can't edit supported documents in Outlook on the web

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

