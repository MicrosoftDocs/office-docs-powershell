---
external help file: 
applicable: SharePoint Online
title: Set-SPOTenant
schema: 2.0.0
---

# Set-SPOTenant

## SYNOPSIS
Sets properties on the SharePoint Online organization.


## SYNTAX

```
Set-SPOTenant [-BccExternalSharingInvitations <Boolean>] [-BccExternalSharingInvitationsList <String>]
 [-DisplayStartASiteOption <Boolean>] [-ExternalServicesEnabled <Boolean>] [-MaxCompatibilityLevel <Int32>]
 [-MinCompatibilityLevel <Int32>] [-NoAccessRedirectUrl <String>] [-OfficeClientADALDisabled <Boolean>]
 [-ProvisionSharedWithEveryoneFolder <Boolean>] [-RequireAcceptingAccountMatchInvitedAccount <Boolean>]
 [-SearchResolveExactEmailOrUPN <Boolean>] [-SharingCapability <SharingCapabilities>]
 [-ShowAllUsersClaim <Boolean>] [-ShowEveryoneClaim <Boolean>]
 [-ShowEveryoneExceptExternalUsersClaim <Boolean>] [-SignInAccelerationDomain <String>]
 [-StartASiteFormUrl <String>] [-UsePersistentCookiesForExplorerView <Boolean>]
 [-CommentsOnSitePagesDisabled <Boolean>] [-DefaultSharingLinkType <SharingLinkType>]
 [-DisallowInfectedFileDownload <Boolean>] [-EnableGuestSignInAcceleration <Boolean>]
 [-FileAnonymousLinkType <AnonymousLinkType>] [-FolderAnonymousLinkType <AnonymousLinkType>]
 [-IPAddressAllowList <String>] [-IPAddressEnforcement <Boolean>] [-IPAddressWACTokenLifetime <Int32>]
 [-LegacyAuthProtocolsEnabled <Boolean>] [-NotificationsInOneDriveForBusinessEnabled <Boolean>]
 [-NotificationsInSharePointEnabled <Boolean>] [-NotifyOwnersWhenInvitationsAccepted <Boolean>]
 [-NotifyOwnersWhenItemsReshared <Boolean>] [-ODBAccessRequests <SharingState>]
 [-ODBMembersCanShare <SharingState>] [-OneDriveForGuestsEnabled <Boolean>] [-OneDriveStorageQuota <Int64>]
 [-OrphanedPersonalSitesRetentionPeriod <Int32>] [-OwnerAnonymousNotification <Boolean>]
 [-PermissiveBrowserFileHandlingOverride <Boolean>] [-PreventExternalUsersFromResharing <Boolean>]
 [-PublicCdnAllowedFileTypes <String>] [-PublicCdnEnabled <Boolean>]
 [-RequireAnonymousLinksExpireInDays <Int32>] [-SharingAllowedDomainList <String>]
 [-SharingBlockedDomainList <String>] [-SharingDomainRestrictionMode <SharingDomainRestrictionModes>]
 [-ShowPeoplePickerSuggestionsForGuestUsers <Boolean>]
 [-SpecialCharactersStateInFileFolderNames <SpecialCharactersState>] [-UseFindPeopleInPeoplePicker <Boolean>]
 [-UserVoiceForFeedbackEnabled <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
You can use the `Set-SPOTenant` cmdlet to enable external services and to specify the versions in which site collections can be created.
You can also use the `Set-SPOSite` cmdlet together with the `Set-SPOTenant` cmdlet to block access to a site in your organization and redirect traffic to another site.

You must be a SharePoint Online service administrator (able to access SharePoint Admin Center) to run the cmdlet.


## EXAMPLES

### --------------------EXAMPLE---------------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}


## PARAMETERS

### -BccExternalSharingInvitations
Enables the BCC for External Sharing feature.
When the feature is enabled, all external sharing invitations will blind copy the e-mail messages listed in the BccExternalSharingsInvitationList.

Accepts a value of true (enabled) or false (disabled).
By default this feature is set to false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BccExternalSharingInvitationsList
Specifies a list of e-mail addresses to be BCC'd when the BCC for External Sharing feature is enabled.
Multiple addresses can be specified by creating a comma separated list with no spaces.

For example: joe@contoso.com,bob@contoso.com

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayStartASiteOption
Determines whether tenant users see the Start a Site menu option.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalServicesEnabled
Enables external services for a tenant.
External services are defined as services that are not in the Office 365 datacenters.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxCompatibilityLevel
Specifies the upper bound on the compatibility level for new sites.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinCompatibilityLevel
Specifies the lower bound on the compatibility level for new sites.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoAccessRedirectUrl
Specifies the URL of the redirected site for those site collections which have the locked state "NoAccess."

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OfficeClientADALDisabled
PARAMVALUE: $true | $false

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProvisionSharedWithEveryoneFolder
Creates a Shared with Everyone folder in every user's new OneDrive for Business document library.

The default value is True which mean the folder is created.

A value of False means no folder is created when the site and OneDrive for Business document library is created.

The default behavior of the Shared with Everyone folder is changing in August 2015.
For additional information about the change, see Provision the Shared with Everyone folder in OneDrive for Business (https://support.office.com/en-us/article/Provision-the-Shared-with-Everyone-folder-in-OneDrive-for-Business-6bb02c91-fd0b-42ba-9457-3921cb6dc5b2?ui=en-US&rs=en-US&ad=US)

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireAcceptingAccountMatchInvitedAccount
Ensures that an external user can only accept an external sharing invitation with an account matching the invited email address.

The parameter accepts two values: True or False.

True-User must accept this invitation with bob@contoso.com.

False- When a document is shared with an external user, bob@contoso.com, it can be accepted by any user with access to the invitation link in the original e-mail.

Administrators who desire increased control over external collaborators should consider enabling this feature.

This only applies to new external users accepting new sharing invitations.

The resource owner must share with an organizational or Microsoft account or the external user will be unable to access the resource.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchResolveExactEmailOrUPN
Removes the search capability from People Picker.

The valid values are:

Recently resolved names will still appear in the list.

False- Restores default search functionality.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharingCapability
Determines what level of sharing is available for the site.
The possible values are: Disabled - external user sharing (share by email) and guest link sharing are both disabled, ExternalUserSharingOnly - external user sharing (share by email) is enabled, but guest link sharing is disabled, or ExternalUserAndGuestSharing - external user sharing (share by email) and guest link sharing are both enabled.

For more information about sharing, see Manage external sharing for your SharePoint online environment (http://office.microsoft.com/en-us/office365-sharepoint-online-enterprise-help/manage-external-sharing-for-your-sharepoint-online-environment-HA102849864.aspx).

```yaml
Type: SharingCapabilities
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowAllUsersClaim
Enables the administrator to hide the All Users claim groups in People Picker.
When users share an item with "All Users (x)", it is accessible to all organization members in the tenant's Azure Active Directory who have authenticated with variable.
For example, "All Users (x)" shares with users who have used NTLM to authentication with SharePoint.

The valid values are:

True- The All Users claim groups are displayed in People Picker.

False- The All Users claim groups are hidden in People Picker.

The default value is True.

All Users (authenticated) is equivalent to the Everyone claim.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowEveryoneClaim
Enables the administrator to hide the Everyone claim in the People Picker.
When users share an item with Everyone, it is accessible to all authenticated users in the tenant's Azure Active Directory, including any active external users who have previously accepted invitations.

The valid values are:

True- The Everyone claim group is displayed in People Picker.

Some SharePoint system resources such as templates and pages are required by be shared to Everyone and this type of sharing does not expose any user data or metadata.

The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowEveryoneExceptExternalUsersClaim
Enables the administrator to hide the "Everyone except external users" claim in the People Picker.
When users share an item with "Everyone except external users", it is accessible to all organization members in the tenant's Azure Active Directory, but not to any users who have previously accepted invitations.

The valid values are:

True - The Everyone except external users is displayed in People Picker.

False - The Everyone except external users claim is not visible in People Picker .

The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignInAccelerationDomain
Specifies home realm discovery value to be sent to Azure Active Directory (AAD) during the user sign-in process.

When the organization uses a third-party identity provider, this prevents the user from seeing the Azure Active Directory Home Realm Discovery web page and ensures the user only sees their company's Identity Provider's portal.
This value can also be used with Azure Active Directory Premium to customize the Azure Active Directory login page.

Acceleration will not occur on site collections that are shared externally.

This value should be configured with the login domain that is used by your company (that is, example@contoso.com).

If your company has multiple third-party identity providers, configuring the sign-in acceleration value will break sign-in for your organization.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartASiteFormUrl
Specifies URL of the form to load in the Start a Site dialog.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UsePersistentCookiesForExplorerView
Lets SharePoint issue a special cookie that will allow this feature to work even when "Keep Me Signed In" is not selected.

"Open with Explorer" requires persisted cookies to operate correctly.
When the user does not select "Keep Me Signed in" at the time of sign-in, "Open with Explorer" will fail.

This special cookie expires after 30 minutes and cannot be cleared by closing the browser or signing out of SharePoint Online.
To clear this cookie, the user must log out of their Windows session.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CommentsOnSitePagesDisabled
{{Fill CommentsOnSitePagesDisabled Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultSharingLinkType
{{Fill DefaultSharingLinkType Description}}

```yaml
Type: SharingLinkType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisallowInfectedFileDownload
{{Fill DisallowInfectedFileDownload Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableGuestSignInAcceleration
{{Fill EnableGuestSignInAcceleration Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileAnonymousLinkType
{{Fill FileAnonymousLinkType Description}}

```yaml
Type: AnonymousLinkType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderAnonymousLinkType
{{Fill FolderAnonymousLinkType Description}}

```yaml
Type: AnonymousLinkType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddressAllowList
{{Fill IPAddressAllowList Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddressEnforcement
{{Fill IPAddressEnforcement Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddressWACTokenLifetime
{{Fill IPAddressWACTokenLifetime Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LegacyAuthProtocolsEnabled
{{Fill LegacyAuthProtocolsEnabled Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationsInOneDriveForBusinessEnabled
{{Fill NotificationsInOneDriveForBusinessEnabled Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationsInSharePointEnabled
{{Fill NotificationsInSharePointEnabled Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyOwnersWhenInvitationsAccepted
{{Fill NotifyOwnersWhenInvitationsAccepted Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyOwnersWhenItemsReshared
{{Fill NotifyOwnersWhenItemsReshared Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ODBAccessRequests
{{Fill ODBAccessRequests Description}}

```yaml
Type: SharingState
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ODBMembersCanShare
{{Fill ODBMembersCanShare Description}}

```yaml
Type: SharingState
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveForGuestsEnabled
{{Fill OneDriveForGuestsEnabled Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveStorageQuota
{{Fill OneDriveStorageQuota Description}}

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrphanedPersonalSitesRetentionPeriod
{{Fill OrphanedPersonalSitesRetentionPeriod Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwnerAnonymousNotification
{{Fill OwnerAnonymousNotification Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissiveBrowserFileHandlingOverride
{{Fill PermissiveBrowserFileHandlingOverride Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreventExternalUsersFromResharing
{{Fill PreventExternalUsersFromResharing Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicCdnAllowedFileTypes
{{Fill PublicCdnAllowedFileTypes Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicCdnEnabled
{{Fill PublicCdnEnabled Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireAnonymousLinksExpireInDays
{{Fill RequireAnonymousLinksExpireInDays Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharingAllowedDomainList
{{Fill SharingAllowedDomainList Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharingBlockedDomainList
{{Fill SharingBlockedDomainList Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharingDomainRestrictionMode
{{Fill SharingDomainRestrictionMode Description}}

```yaml
Type: SharingDomainRestrictionModes
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowPeoplePickerSuggestionsForGuestUsers
{{Fill ShowPeoplePickerSuggestionsForGuestUsers Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpecialCharactersStateInFileFolderNames
{{Fill SpecialCharactersStateInFileFolderNames Description}}

```yaml
Type: SpecialCharactersState
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseFindPeopleInPeoplePicker
{{Fill UseFindPeopleInPeoplePicker Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserVoiceForFeedbackEnabled
{{Fill UserVoiceForFeedbackEnabled Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Upgrade-SPOSite]()

[Set-SPOSite]()
