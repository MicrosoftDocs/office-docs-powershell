---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Set-SPOTenant
schema: 2.0.0
---

# Set-SPOTenant

## SYNOPSIS
Sets properties on the SharePoint Online organization.


## SYNTAX

```
Set-SPOTenant [-ApplyAppEnforcedRestrictionsToAdHocRecipients <Boolean>] 
 [-BccExternalSharingInvitations <Boolean>] [-BccExternalSharingInvitationsList <String>] 
 [-DisplayStartASiteOption <Boolean>] [-ExternalServicesEnabled <Boolean>] [-MaxCompatibilityLevel <Int32>]
 [-MinCompatibilityLevel <Int32>] [-NoAccessRedirectUrl <String>] [-OfficeClientADALDisabled <Boolean>]
 [-ProvisionSharedWithEveryoneFolder <Boolean>] [-RequireAcceptingAccountMatchInvitedAccount <Boolean>]
 [-SearchResolveExactEmailOrUPN <Boolean>] [-SharingCapability <SharingCapabilities>]
 [-ShowAllUsersClaim <Boolean>] [-ShowEveryoneClaim <Boolean>]
 [-ShowEveryoneExceptExternalUsersClaim <Boolean>] [-SignInAccelerationDomain <String>]
 [-StartASiteFormUrl <String>] [-UsePersistentCookiesForExplorerView <Boolean>]
 [-CommentsOnSitePagesDisabled <Boolean>] [-SocialBarOnSitePagesDisabled <Boolean>]
 [-DefaultSharingLinkType <SharingLinkType>]
 [-DisableWebPartIds <Guid>]
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
 [-ContentTypeSyncSitesList MySites] [-ExcludeSiteTemplate]
```

## DESCRIPTION
You can use the `Set-SPOTenant` cmdlet to enable external services and to specify the versions in which site collections can be created.
You can also use the `Set-SPOSite` cmdlet together with the `Set-SPOTenant` cmdlet to block access to a site in your organization and redirect traffic to another site.

You must be a SharePoint Online global administrator to run the cmdlet.


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Set-SPOSite -Identity https://contoso.sharepoint.com/sites/team1 -LockState NoAccess
Set-SPOTenant -NoAccessRedirectUrl 'http://www.contoso.com'
```
This example blocks access to https://contoso.sharepoint.com/sites/team1 and redirects traffic to http://www.contoso.com. 


### -----------------------EXAMPLE 2-----------------------------
```
Set-SPOTenant -ShowEveryoneExceptExternalUsersClaim $false 
```
This example hides the "Everyone Except External Users" claim in People Picker.


### -----------------------EXAMPLE 3-----------------------------
```
Set-SPOTenant -ShowAllUsersClaim $false 
```
This example hides the "All Users" claim group in People Picker.


### -----------------------EXAMPLE 4-----------------------------
```
Set-SPOTenant -UsePersistentCookiesForExplorerView $true 
```
This example enables the use of special persisted cookie for Open with Explorer.


### -----------------------EXAMPLE 5-----------------------------

```
Set-SPOTenant -LegacyAuthProtocolsEnabled $True
```

This example enables legacy authentication protocols on the tenant. This can help to enable login in situations where the admin users get an error like "Cannot contact web site 'https://contoso-admin.sharepoint.com/' or the web site does not support SharePoint Online credentials. The response status code is 'Unauthorized'.", and the underlying error is "Access denied. Before opening files in this location, you must first browse to the web site and select the option to login automatically."


### -----------------------EXAMPLE 6-----------------------------

```
Set-SPOTenant -ContentTypeSyncSiteTemplatesList MySites
```

This example enables Content Type Hub to push content types to all OneDrive for Business sites. There is no change in Content Type Publishing behaviour for other sites.


### -----------------------EXAMPLE 7-----------------------------

```
Set-SPOTenant -ContentTypeSyncSiteTemplatesList MySites -ExcludeSiteTemplate
```

This example stops publishing content types to OneDrive for Business sites.
## PARAMETERS

### -ApplyAppEnforcedRestrictionsToAdHocRecipients
When the feature is enabled, all guest users are subject to conditional access policy. By default guest users who are accessing SharePoint Online files with pass code are exempt from the conditional access policy.

The valid values are:  
False (default) - Guest access users are exempt from conditional access policy.  
True - Conditional access policy is applieda also to guest users.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -BccExternalSharingInvitations
When the feature is enabled, all external sharing invitations that are sent will blind copy the e-mail messages listed in the BccExternalSharingsInvitationList.

The valid values are:  
False (default) - BCC for external sharing is disabled.  
True - All external sharing invitations that are sent will blind copy the e-mail messages listed in the BccExternalSharingsInvitationList.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -BccExternalSharingInvitationsList
Specifies a list of e-mail addresses to be BCC'd when the BCC for External Sharing feature is enabled.  
Multiple addresses can be specified by creating a comma separated list with no spaces.

The valid values are:  
"" (default) - Blank by default, this will also clear any value that has been set.  
Single or Multiple e-mail addresses - joe@contoso.com or joe@contoso.com,bob@contoso.com


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

The valid values are:  
True (default) - Tenant users will see the Start a Site menu option.  
False - Start a Site is hidden from the menu.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalServicesEnabled
Enables external services for a tenant.  
External services are defined as services that are not in the Office 365 datacenters.

The valid values are:  
True (default) - External services are enabled for the tenant.  
False - External services that are outside of the Office 365 datacenters cannot interact with SharePoint.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: True
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

The valid values are:  
"" (default) - Blank by default, this will also remove or clear any value that has been set.  
Full URL - Example: https://contoso.sharepoint.com/Pages/Locked.aspx


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
When set to true this will disable the ability to use Modern Authentication that leverages ADAL across the tenant.

The valid values are:  
False (default) - Modern Authentication is enabled/allowed.  
True - Modern Authentication via ADAL is disabled.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProvisionSharedWithEveryoneFolder
Creates a Shared with Everyone folder in every user's new OneDrive for Business document library.

The valid values are:  
True (default) - The Shared with Everyone folder is created.  
False - No folder is created when the site and OneDrive for Business document library is created.

The default behavior of the Shared with Everyone folder changed in August 2015.  
For additional information about the change, see Provision the Shared with Everyone folder in OneDrive for Business (https://support.office.com/en-us/article/Provision-the-Shared-with-Everyone-folder-in-OneDrive-for-Business-6bb02c91-fd0b-42ba-9457-3921cb6dc5b2?ui=en-US&rs=en-US&ad=US)


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireAcceptingAccountMatchInvitedAccount
Ensures that an external user can only accept an external sharing invitation with an account matching the invited email address.

Administrators who desire increased control over external collaborators should consider enabling this feature.

Note, this only applies to new external users accepting new sharing invitations. Also, the resource owner must share with an organizational or Microsoft account or the external user will be unable to access the resource.

The valid values are:  
False (default) - When a document is shared with an external user, bob@contoso.com, it can be accepted by any user with access to the invitation link in the original e-mail.  
True - User must accept this invitation with bob@contoso.com.

> [!NOTE] 
> If this functionality is turned off (value is False), it is possible for the external/guest users you invite to your Azure AD, to log in using their personal, non-work accounts either on purpose, or by accident (they might have a pre-existing, signed in session already active in the browser window they use to accept your invitation). 

> [!NOTE] 
> Even though setting the value is instant (if you first run **Set-SPOTenant -RequireAcceptingAccountMatchInvitedAccount $True**, and then **Get-SPOTenant -RequireAcceptingAccountMatchInvitedAccount**, True should be returned), the functionality isn't turned on immediately. It may take up to 24 hours to take effect. 


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchResolveExactEmailOrUPN
Removes the search capability from People Picker. Note, recently resolved names will still appear in the list until browser cache is cleared or expired. This also does not allow SharePoint users to search for security groups or SharePoint groups.

SharePoint Administrators will still be able to use starts with or partial name matching when enabled.

The valid values are:  
False (default) - Starts with / partial name search functionality is available.  
True - Disables starts with / partial name search functionality for all SharePoint users, except SharePoint Admins.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharingCapability
Determines what level of sharing is available for the site.

The valid values are:  
ExternalUserAndGuestSharing (default) - External user sharing (share by email) and guest link sharing are both enabled.
Disabled - External user sharing (share by email) and guest link sharing are both disabled.  
ExternalUserSharingOnly - External user sharing (share by email) is enabled, but guest link sharing is disabled.

For more information about sharing, see Manage external sharing for your SharePoint online environment (http://office.microsoft.com/en-us/office365-sharepoint-online-enterprise-help/manage-external-sharing-for-your-sharepoint-online-environment-HA102849864.aspx).


```yaml
Type: SharingCapabilities
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: ExternalUserAndGuestSharing
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowAllUsersClaim
Enables the administrator to hide the All Users claim groups in People Picker.

When users share an item with "All Users (x)", it is accessible to all organization members in the tenant's Azure Active Directory who have authenticated with via this method. When users share an item with "All Users (x)" it is accessible to all organtization members in the tenant that used NTLM to authentication with SharePoint.

Note, the All Users (authenticated) group is equivalent to the Everyone claim, and shows as Everyone.
To change this, see -ShowEveryoneClaim.

The valid values are:  
True (default) - The All Users claim groups are displayed in People Picker.  
False - The All Users claim groups are hidden in People Picker.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowEveryoneClaim
Enables the administrator to hide the Everyone claim in the People Picker.  
When users share an item with Everyone, it is accessible to all authenticated users in the tenant's Azure Active Directory, including any active external users who have previously accepted invitations.

Note, that some SharePoint system resources such as templates and pages are required to be shared to Everyone and this type of sharing does not expose any user data or metadata.

The valid values are:  
True (default) - The Everyone claim group is displayed in People Picker.  
False - The Everyone claim group is hidden from the People Picker.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowEveryoneExceptExternalUsersClaim
Enables the administrator to hide the "Everyone except external users" claim in the People Picker.  
When users share an item with "Everyone except external users", it is accessible to all organization members in the tenant's Azure Active Directory, but not to any users who have previously accepted invitations.

The valid values are:  
True (default) - The Everyone except external users is displayed in People Picker.  
False - The Everyone except external users claim is not visible in People Picker.


```yaml
Type: Boolean

Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignInAccelerationDomain
Specifies the home realm discovery value to be sent to Azure Active Directory (AAD) during the user sign-in process.

When the organization uses a third-party identity provider, this prevents the user from seeing the Azure Active Directory Home Realm Discovery web page and ensures the user only sees their company's Identity Provider's portal.  
This value can also be used with Azure Active Directory Premium to customize the Azure Active Directory login page.

Acceleration will not occur on site collections that are shared externally.

This value should be configured with the login domain that is used by your company (that is, example@contoso.com).

If your company has multiple third-party identity providers, configuring the sign-in acceleration value will break sign-in for your organization.

The valid values are:  
"" (default) - Blank by default, this will also remove or clear any value that has been set.  
Login Domain - For example: "contoso.com"


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

The valid values are:  
"" (default) - Blank by default, this will also remove or clear any value that has been set.  
Full URL - Example: "https://contoso.sharepoint.com/path/to/form"


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

The valid values are:  
False (default) - No special cookie is generated and the normal Office 365 sign-in length/timing applies.  
True - Generates a special cookie that will allow "Open with Explorer" to function if the "Keep Me Signed In" box is not checked at sign-in.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -CommentsOnSitePagesDisabled
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

### -SocialBarOnSitePagesDisabled
Disables or enables the Social Bar.

The Social Bar will appear on all modern SharePoint pages with the exception of the home page of a site. It will give users the ability to like a page, see the number of views, likes, and comments on a page, and see the people who have liked a page.

PARAMVALUE: $true | $false


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultSharingLinkType
Lets administrators choose what type of link appears is selected in the “Get a link” sharing dialog box in OneDrive for Business and SharePoint Online.

For additional information about how to change the default link type, see Change the default link type when users get links for sharing.

> [!NOTE] 
> Setting this value to “none” will default “get a link” to the most permissive link available (that is, if anonymous links are enabled, the default link will be anonymous access; if they are disabled then the default link will be internal.  

The values are: 
None
Direct
Internal
AnonymousAccess


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

### -DisabledWebPartIds
PARAMVALUE: <Guid>[,<Guid>,...]
 
Allows administrators prevent certain, specific web parts from being added to pages or rendering on pages on which they were previously added. Only web parts that utilize third-party services (Amazon Kindle, YouTube, Twitter) can be disabled in such a manner.
 
To disable a specific web part you need to enter its GUID as the parameter: Amazon Kindle (46698648-fcd5-41fc-9526-c7f7b2ace919), YouTube (544dd15b-cf3c-441b-96da-004d5a8cea1d), Twitter (f6fdf4f8-4a24-437b-a127-32e66a5dd9b4)

You can enter in multiple GUIDs by using a comma to separate them. To view a list of disabled web parts, use Get-SPOSite to get DisabledWebPartIds.

To reenable disabled web parts, use the Set-SPOSite with the -DisabledWebPartIds parameter and corresponding GUIDs. 
 
```yaml
Type: Guid[]
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
Prevents the Download button from being displayed on the Virus Found warning page. 

Accepts a value of true (enabled) to hide the Download button or false (disabled) to display the Download button. By default this feature is set to false.


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
Accelerates guest-enabled site collections as well as member-only site collections when the SignInAccelerationDomain parameter is set. 

> [!NOTE] 
> If enabled, your identity provider must be capable of authenticating guest users. If it is not, guest users will be unable to log in and access content that was shared with them.  


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
PARAMVALUE: None | View | Edit


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
PARAMVALUE: None | View | Edit


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
Configures multiple IP addresses or IP address ranges (IPv4 or IPv6).

Use commas to separate multiple IP addresses or IP address ranges. Verify there are no overlapping IP addresses and ensure IP ranges use Classless Inter-Domain Routing (CIDR) notation. For example, 172.16.0.0, 192.168.1.0/27.

> [!NOTE] 
> The IPAddressAllowList parameter only lets administrators set IP addresses or ranges that are recognized as trusted. To only grant access from these IP addresses or ranges, set the IPAddressEnforcement parameter to $true.  


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
Allows access from network locations that are defined by an administrator.

The values are $true and $false. The default value is $false which means the setting is disabled.

Before the IPAddressEnforcement parameter is set, make sure you add a valid IPv4 or IPv6 address to the IPAddressAllowList parameter.


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
PARAMVALUE: Int32


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
By default this value is set to $True, which means that authentication using legacy protocols is enabled.

Setting this parameter to $False prevents Office clients using non-modern authentication protocols from accessing SharePoint Online resources.

A value of True- Enables Office clients using non-modern authentication protocols (such as, Forms-Based Authentication (FBA) or Identity Client Runtime Library (IDCRL)) to access SharePoint resources. 

A value of False- Prevents Office clients using non-modern authentication protocols from accessing SharePoint Online resources.

> [!NOTE] 
> This may also prevent third-party apps from accessing SharePoint Online resources.
Also, this will also block apps using the SharePointOnlineCredentials class to access SharePoint Online resources. For additional information about SharePointOnlineCredentials, see SharePointOnlineCredentials class.  

> [!NOTE] 
> The change is not instant. It might take up to 24 hours to be applied.

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

### -NotificationsInSharePointEnabled
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

### -NotifyOwnersWhenInvitationsAccepted
When this parameter is set to $true and when an external user accepts an invitation to a resource in a user’s OneDrive for Business, the OneDrive for Business owner is notified by e-mail.

For additional information about how to configure notifications for external sharing, see Configure notifications for external sharing for OneDrive for Business.

The values are $true and $false.


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
When this parameter is set to $true and another user re-shares a document from a user’s OneDrive for Business, the OneDrive for Business owner is notified by e-mail.

For additional information about how to configure notifications for external sharing, see Configure notifications for external sharing for OneDrive for Business.

The values are $true and $false.


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
Lets administrators set policy on access requests and requests to share in OneDrive for Business.

Values:

On- Users without permission to share can trigger sharing requests to the OneDrive for Business owner when they attempt to share. Also, users without permission to a file or folder can trigger access requests to the OneDrive for Business owner when they attempt to access an item they do not have permissions to.

Off- Prevent access requests and requests to share on OneDrive for Business.

Unspecified- Let each OneDrive for Business owner enable or disable access requests and requests to share on their OneDrive.


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
Lets administrators set policy on re-sharing behavior in OneDrive for Business.

Values:

On- Users with edit permissions can re-share.

Off- Only OneDrive for Business owner can share. The value of ODBAccessRequests defines whether a request to share gets sent to the owner.

Unspecified- Let each OneDrive for Business owner enable or disable re-sharing behavior on their OneDrive.


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
Lets OneDrive for Business creation for administrator managed guest users. Administrator managed Guest users use credentials in the resource tenant to access the resources.

The valid values are the following: 

$true-Administrator managed Guest users can be given OneDrives, provided needed licenses are assigned.

$false- Administrator managed Guest users can't be given OneDrives as functionality is turned off.


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
Sets a default OneDrive for Business storage quota for the tenant. It will be used for new OneDrive for Business sites created.

A typical use will be to reduce the amount of storage associated with OneDrive for Business to a level below what the License entitles the users. For example, it could be used to set the quota to 10 gigabytes (GB) by default.

If value is set to 0, the parameter will have no effect.

If the value is set larger than the Maximum allowed OneDrive for Business quota, it will have no effect.


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
Specifies the number of days after a user's Active Directory account is deleted that their OneDrive for Business content will be deleted. 

The value range is in days, between 30 and 3650. The default value is 30.


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

### -PermissiveBrowserFileHandlingOverride
Enables the Permissive browser file handling. By default, the browser file handling is set to Strict. The Strict setting adds headers that force the browser to download certain types of files. The forced download improves security by disallowing the automatic execution of Web content. When the setting is set to Permissive, no headers are added and certain types of files can be executed in the browser instead of download. 

The valid values are:

True- Enable the Permissive browser file handling setting.

False- Keep the default Strict browser file handling setting.


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

### -PublicCdnAllowedFileTypes
PARAMVALUE: String


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

### -RequireAnonymousLinksExpireInDays
Specifies all anonymous links that have been created (or will be created) will expire after the set number of days .

To remove the expiration requirement, set the value to zero (0). 


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
Specifies a list of email domains that is allowed for sharing with the external collaborators. Use the space character as the delimiter for entering multiple values. For example, “contoso.com fabrikam.com”. 

For additional information about how to restrict a domain sharing, see Restricted Domains Sharing in Office 365 SharePoint Online and OneDrive for Business


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
Specifies a list of email domains that is blocked or prohibited for sharing with the external collaborators. Use space character as the delimiter for entering multiple values. For example, “contoso.com fabrikam.com”. 

For additional information about how to restrict a domain sharing, see Restricted Domains Sharing in Office 365 SharePoint Online and OneDrive for Business


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
Specifies the external sharing mode for domains.

The following values are:
None
AllowList
BlockList

For additional information about how to restrict a domain sharing, see Restricted Domains Sharing in Office 365 SharePoint Online and OneDrive for Business.


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

### -SpecialCharactersStateInFileFolderNames
Permits the use of special characters in file and folder names in SharePoint Online and OneDrive for Business document libraries. 

> [!NOTE] 
> The only two characters that can be managed at this time are the # and % characters.  

The following are the valid values: 

NoPreference- Support for feature will be enabled by Microsoft on your Office 365 tenant.

Allowed- Lets the # and % characters in file and folder names in SharePoint Online and OneDrive for Business document libraries.

Disallowed- Disallows the # and % characters in file and folder names in SharePoint Online and OneDrive for Business document libraries.


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

> [!NOTE] 
> When set to $true, users aren't able to share with security groups or SharePoint groups.  


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
PARAMVALUE: $true | $false

When set to $true, the "Feedback" link will be shown at the bottom of all modern SharePoint Online pages. The "Feedback" link will allow the end user to fill out a feedback form inside SharePoint Online which will then create an entry in the public SharePoint UserVoice topic. When set to $false, feedback link will not be shown anymore. It may take up to an hour for a change of this property to be reflected consistently throughout your tenant.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: $true
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentTypeSyncSiteTemplatesList MySites [-ExcludeSiteTemplate]
By default Content Type Hub will no longer push content types to OneDrive for Business sites (formerly known as MySites).

In case you want the Content Type Hub to push content types to OneDrive for Business sites, use:

```Set-SPOTenant -ContentTypeSyncSiteTemplatesList MySites```

When the feature is enabled, the Content Type Hub will push content types to OneDrive for Business sites.

Once you have enabled Content Type publishing to OneDrive for Business sites, you can disable it later using: 

``` Set-SPOTenant -ContentTypeSyncSiteTemplatesList MySites -ExcludeSiteTemplate```


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





### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Upgrade-SPOSite](Upgrade-SPOSite.md)

[Set-SPOSite](Set-SPOSite.md)
