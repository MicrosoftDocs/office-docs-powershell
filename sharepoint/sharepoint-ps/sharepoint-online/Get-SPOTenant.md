---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Get-SPOTenant
schema: 2.0.0
---

# Get-SPOTenant

## SYNOPSIS
Returns SharePoint Online organization properties.

## SYNTAX

```
Get-SPOTenant [<CommonParameters>]
```

## DESCRIPTION
The `Get-SPOTenant` cmdlet returns organization-level site collection properties such as StorageQuota, StorageQuotaAllocated, ResourceQuota, ResourceQuotaAllocated and SiteCreationMode.

Currently, there are no parameters for this cmdlet.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

###   ------------ Example 1 --------------------
```
Get-SPOTenant
```
This example returns the organization-level site collection properties such as StorageQuota, StorageQuotaAllocated, ResourceQuota, ResourceQuotaAllocated, SiteCreationMode and OneDriveStorageQuota.


## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS
| Property     | Description |
|--------------|--------------|
| StorageQuota       | Specifies the value of the storage quota that is available for the tenant.
| StorageQuotaAllocated       | Specifies the value of the storage quota that is allocated for all sites in the tenant
| ResourceQuota| Specifies the value of the resource quota for the tenant.
| ResourceQuotaAllocated | Specifies the value of the resource quota allocated to all sites in the tenant.
| OneDriveStorageQuota | Default OneDrive for Business storage quota for tenant. Used when a new OneDrive for Business site is created. 
| CompatibilityRange       | Specifies the lower and upper bound on the compatibility level for new sites 
| ExternalServicesEnabled       | Specifies if external services are enabled for the tenant. 
| NoAccessRedirectUrl       | Specifies the URL of the redirected sites which have a locked state. "No Access" 
| SharingCapability       | Determines what level of sharing is available for the site. The valid values are: ExternalUserAndGuestSharing (default) - External user sharing (share by email) and guest link sharing are both enabled. Disabled - External user sharing (share by email) and guest link sharing are both disabled. ExternalUserSharingOnly - External user sharing (share by email) is enabled, but guest link sharing is disabled. Allowed values Disabled,ExternalUserSharingOnly,ExternalUserAndGuestSharing,ExistingExternalUserSharingOnly 
| DisplayStartASiteOption       | Determines whether tenant users see the Start a Site menu option. Allowed values true,false. 
| StartASiteFormUrl       | Specifies URL of the form to load in the Start a Site dialog. The valid values are: "" (default) - Blank by default, this will also remove or clear any value that has been set. Full URL - Example:"https://contoso.sharepoint.com/path/to/form"' |
| ShowEveryoneClaim       | Enables the administrator to hide the Everyone claim in the People Picker. When users share an item with Everyone, it is accessible to all authenticated users in the tenant\'s Azure Active Directory, including any active external users who have previously accepted invitations. Note, that some SharePoint system resources such as templates and pages are required to be shared to Everyone and this type of sharing does not expose any user data or metadata. Allowed values true,false
| ShowAllUsersClaim       | Enables the administrator to hide the All Users claim groups in People Picker. When users share an item with "All Users (x)", it is accessible to all organization members in the tenant\'s Azure Active Directory who have authenticated with via this method. When users share an item with "All Users (x)" it is accessible to all organtization members in the tenant that used NTLM to authentication with SharePoint. Allowed values true,false 
| OfficeClientADALDisabled       | When set to true this will disable the ability to use Modern Authentication that leverages ADAL across the tenant. Allowed values true,false
| LegacyAuthProtocolsEnabled        | By default this value is set to true. Setting this parameter prevents Office clients using non-modern authentication protocols from accessing SharePoint Online resources. A value of true - Enables Office clients using non-modern authentication protocols(such as, Forms-Based Authentication (FBA) or Identity Client Runtime Library (IDCRL)) to access SharePoint resources. Allowed values true,false
| ShowEveryoneExceptExternalUsersClaim       | Enables the administrator to hide the "Everyone except external users" claim in the People Picker. When users share an item with "Everyone except external users", it is accessible to all organization members in the tenant\'s Azure Active Directory, but not to any users who have previously accepted invitations. Allowed values true,false 
| SearchResolveExactEmailOrUPN       | Removes the search capability from People Picker. Note, recently resolved names will still appear in the list until browser cache is cleared or expired. This also does not allow SharePoint users to search for security groups or SharePoint groups. SharePoint Administrators will still be able to use starts with or partial name matching when enabled. The valid values are: False (default) - Starts with / partial name search functionality is available. True - Disables starts with / partial name search functionality for all SharePoint users, except SharePoint Admins.
| RequireAcceptingAccountMatchInvitedAccount       | Ensures that an external user can only accept an external sharing invitation with an account matching the invited email address. Administrators who desire increased control over external collaborators should consider enabling this feature. Allowed values true,false 
| ProvisionSharedWithEveryoneFolder       | Creates a Shared with Everyone folder in every user\'s new OneDrive for Business document library. The valid values are: True (default) - The Shared with Everyone folder is created. False - No folder is created when the site and OneDrive for Business document library is created. Allowed values true,false 
| SignInAccelerationDomain       | Specifies the home realm discovery value to be sent to Azure Active Directory (AAD) during the user sign-in process. When the organization uses a third-party identity provider, this prevents the user from seeing the Azure Active Directory Home Realm Discovery web page and ensures the user only sees their company\'s Identity Provider\'s portal. This value can also be used with Azure Active Directory Premium to customize the Azure Active Directory login page. Acceleration will not occur on site collections that are shared externally. This value should be configured with the login domain that is used by your company (that is, example@contoso.com). If your company has multiple third-party identity providers, configuring the sign-in acceleration value will break sign-in for your organization. The valid values are: "" (default) - Blank by default, this will also remove or clear any value that has been set. Login Domain - For example: "contoso.com". No value assigned by default' 
| EnableGuestSignInAcceleration       | Accelerates guest-enabled site collections as well as member-only site collections when the SignInAccelerationDomain parameter is set. Allowed values true,false 
| UsePersistentCookiesForExplorerView       | Lets SharePoint issue a special cookie that will allow this feature to work even when "Keep Me Signed In" is not selected. "Open with Explorer" requires persisted cookies to operate correctly. When the user does not select "Keep Me Signed in" at the time of sign -in, "Open with Explorer" will fail. This special cookie expires after 30 minutes and cannot be cleared by closing the browser or signing out of SharePoint Online.To clear this cookie, the user must log out of their Windows session. The valid values are: False(default) - No special cookie is generated and the normal Office 365 sign -in length / timing applies. True - Generates a special cookie that will allow "Open with Explorer" to function if the "Keep Me Signed In" box is not checked at sign -in. Allowed values true,false
| ContentTypeSyncSiteTemplatesList       | Enables ContentType syndication to OneDrive for Business. Example value: "MySites".
| BccExternalSharingInvitations       | When the feature is enabled, all external sharing invitations that are sent will blind copy the e-mail messages listed in the BccExternalSharingsInvitationList. Allowed values true,false 
| BccExternalSharingInvitationsList       | Specifies a list of e-mail addresses to be BCC\'d when the BCC for External Sharing feature is enabled. Multiple addresses can be specified by creating a comma separated list with no spaces'. 
| UserVoiceForFeedbackEnabled       | Enables or disables the User Voice Feedback button. Allowed values true,false 
| PublicCdnEnabled        | Enables or disables the publish CDN. Allowed values true,false
| PublicCdnAllowedFileTypes       | Specifies public CDN allowed file types'
| PublicCdnOrigins         | Specifies the public CDN locations (libraries) for assets.
| RequireAnonymousLinksExpireInDays       | Specifies all anonymous links that have been created (or will be created) will expire after the set number of days. To remove the expiration requirement, set the value to zero (0)' 
| SharingAllowedDomainList       | Specifies a list of email domains that is allowed for sharing with the external collaborators. Use the space character as the delimiter for entering multiple values. For example, "contoso.com fabrikam.com"' 
| SharingBlockedDomainList        | Specifies a list of email domains that is blocked or prohibited for sharing with the external collaborators. Use space character as the delimiter for entering multiple values. For example, "contoso.com fabrikam.com"' 
| SharingDomainRestrictionMode       | Specifies the external sharing mode for domains. Allowed values None,AllowList,BlockList 
| OneDriveForGuestsEnabled       | Specifies a default OneDrive for Business storage quota for the tenant. It will be used for new OneDrive for Business sites created. A typical use will be to reduce the amount of storage associated with OneDrive for Business to a level below what the License entitles the users. For example, it could be used to set the quota to 10 gigabytes (GB) by default' 
| IPAddressEnforcement        | Allows access from network locations that are defined by an administrator. The values are true and false. The default value is false which means the setting is disabled. Before the iPAddressEnforcement parameter is set, make sure you add a valid IPv4 or IPv6 address to the iPAddressAllowList parameter. Allowed values true,false 
| IPAddressAllowList       | Configures multiple IP addresses or IP address ranges (IPv4 or IPv6). Use commas to separate multiple IP addresses or IP address ranges. Verify there are no overlapping IP addresses and ensure IP ranges use Classless Inter-Domain Routing (CIDR) notation. For example, 172.16.0.0, 192.168.1.0/27. No value is assigned by default'
| IPAddressWACTokenLifetime       | IP Address WAC token lifetime' 
| UseFindPeopleInPeoplePicker       | Specifies if use find people in PeoplePicker to true or false. Note: When set to true, users aren\'t able to share with security groups or SharePoint groups. Allowed values true,false 
| DefaultSharingLinkType        | Lets administrators choose what type of link appears is selected in the “Get a link” sharing dialog box in OneDrive for Business and SharePoint Online. Allowed values None,Direct,Internal,AnonymousAccess 
| ODBMembersCanShare       | Lets administrators set policy on re-sharing behavior in OneDrive for Business. Allowed values Unspecified,On,Off 
| ODBAccessRequests       | Lets administrators set policy on access requests and requests to share in OneDrive for Business. Allowed values Unspecified,On,Off
| PreventExternalUsersFromResharing       | Prevents external users from resharing. Allowed values true,false
| ShowPeoplePickerSuggestionsForGuestUsers       | Shows people picker suggestions for guest users. Allowed values true,false
| FileAnonymousLinkType       | Specifies the file anonymous link type to None, View or Edit
| FolderAnonymousLinkType       | Specifies the folder anonymous link type to None, View or Edit
| NotifyOwnersWhenItemsReshared       | When this parameter is set to true and another user re-shares a document from a user\'s OneDrive for Business, the OneDrive for Business owner is notified by email. For additional information about how to configure notifications for external sharing, see Configure notifications for external sharing for OneDrive for Business. Allowed values true,false 
| NotifyOwnersWhenInvitationsAccepted        | When this parameter is set to true and when an external user accepts an invitation to a resource in a user\'s OneDrive for Business, the OneDrive for Business owner is notified by email. For additional information about how to configure notifications for external sharing, see Configure notifications for external sharing for OneDrive for Business. Allowed values true,false 
| NotificationsInOneDriveForBusinessEnabled        | Enables or disables notifications in OneDrive for business. Allowed values true,false
| NotificationsInSharePointEnabled        | Enables or disables notifications in SharePoint. Allowed values true,false 
| SpecialCharactersStateInFileFolderNames       | Sets the special characters state in file and folder names in SharePoint and OneDrive for Business. Allowed values NoPreference,Allowed,Disallowed 
| OwnerAnonymousNotification        | Enables or disables owner anonymous notification. Allowed values true,false
| CommentsOnSitePagesDisabled       | Enables or disables comments on site pages. Allowed values true,false
| CommentsOnFilesDisabled         |Enables or disables comments on files. Allowed values true,false 
| SocialBarOnSitePagesDisabled        | Enables or disables social bar on site pages. Allowed values true,false
| OrphanedPersonalSitesRetentionPeriod       | Specifies the number of days after a user's Active Directory account is deleted that their OneDrive for Business content will be deleted. The value range is in days, between 30 and 3650. The default value is 30' 
| PermissiveBrowserFileHandlingOverride       | Permissive browser fileHandling override. Allowed values true,false 
| DisallowInfectedFileDownload         | Prevents the Download button from being displayed on the Virus Found warning page. Allowed values true,false
| DefaultLinkPermission        | Choose the dafault permission that is selected when users share. This applies to anonymous access, internal and direct links. Allowed values None,View,Edit 
| CustomizedExternalSharingServiceUrl        | 
| ConditionalAccessPolicy         | Configures conditional access policy. Allowed values AllowFullAccess,AllowLimitedAccess,BlockAccess
| AllowDownloadingNonWebViewableFiles       | Allows downloading non web viewable files. The Allowed values true,false
| AllowEditing         | Allows editing. Allowed values true,false
| ApplyAppEnforcedRestrictionsToAdHocRecipients       | Applies app enforced restrictions to AdHoc recipients. Allowed values true,false
| FilePickerExternalImageSearchEnabled        | Enables file picker external image search. Allowed values true,false
| EmailAttestationRequired       | 	Specifies if email attestation to required. Allowed values true,false
| EmailAttestationReAuthDays       |  Specifies email attestation re-auth days' 
| SyncPrivacyProfileProperties        | 	Syncs privacy profile properties. Allowed values true,false
| DisabledWebPartIds        | Specifies disabled web part Ids. Array of GUIDs split by comma (','). Example:c9b1909e-901a-0000-2cdb-e91c3f46320a,c9b1909e-901a-0000-2cdb-e91c3f463201'
| EnableMinimumVersionRequirement        | Specifies minimum version requirement. Allowed values true,false
| MarkNewFilesSensitiveByDefault        |
| EnableAIPIntegration       | 


## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)
