---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnptenantsite
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Set-PnPTenantSite
---

# Set-PnPTenantSite

## SYNOPSIS
Updates settings of a site collection

## SYNTAX 

### Set Properties
```powershell
Set-PnPTenantSite -Url <String>
                  [-Title <String>]
                  [-LocaleId <UInt32>]
                  [-AllowSelfServiceUpgrade [<SwitchParameter>]]
                  [-Owners <String>]
                  [-DenyAddAndCustomizePages [<SwitchParameter>]]
                  [-SharingCapability <SharingCapabilities>]
                  [-StorageMaximumLevel <Int>]
                  [-StorageWarningLevel <Int>]
                  [-DefaultLinkPermission <SharingPermissionType>]
                  [-DefaultSharingLinkType <SharingLinkType>]
                  [-SharingAllowedDomainList <String>]
                  [-SharingBlockedDomainList <String>]
                  [-BlockDownloadOfNonViewableFiles [<SwitchParameter>]]
                  [-SharingDomainRestrictionMode <SharingDomainRestrictionModes>]
                  [-CommentsOnSitePagesDisabled [<SwitchParameter>]]
                  [-DisableAppViews <AppViewsPolicy>]
                  [-DisableCompanyWideSharingLinks <CompanyWideSharingLinksPolicy>]
                  [-DisableFlows <FlowsPolicy>]
                  [-Wait [<SwitchParameter>]]
                  [-Connection <PnPConnection>]
```

### Set Lock State
```powershell
Set-PnPTenantSite -Url <String>
                  [-LockState <SiteLockState>]
                  [-Wait [<SwitchParameter>]]
                  [-Connection <PnPConnection>]
```

## REQUIRED PERMISSIONS

* SharePoint: Access to the SharePoint Tenant Administration site

## DESCRIPTION
Allows settings of a site collection to be updated

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPTenantSite -Url https://contoso.sharepoint.com -Title "Contoso Website" -Sharing Disabled
```

This will set the title of the site collection with the URL 'https://contoso.sharepoint.com' to 'Contoso Website' and disable sharing on this site collection.

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPTenantSite -Url https://contoso.sharepoint.com -Title "Contoso Website" -StorageWarningLevel 8000 -StorageMaximumLevel 10000
```

This will set the title of the site collection with the URL 'https://contoso.sharepoint.com' to 'Contoso Website', set the storage warning level to 8GB and set the storage maximum level to 10GB.

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPTenantSite -Url https://contoso.sharepoint.com/sites/sales -Owners "user@contoso.onmicrosoft.com"
```

This will add user@contoso.onmicrosoft.com as an additional site collection owner at 'https://contoso.sharepoint.com/sites/sales'.

### ------------------EXAMPLE 4------------------
```powershell
Set-PnPTenantSite -Url https://contoso.sharepoint.com/sites/sales -Owners @("user1@contoso.onmicrosoft.com", "user2@contoso.onmicrosoft.com")
```

This will add user1@contoso.onmicrosoft.com and user2@contoso.onmicrosoft.com as additional site collection owners at 'https://contoso.sharepoint.com/sites/sales'.

### ------------------EXAMPLE 5------------------
```powershell
Set-PnPTenantSite -Url https://contoso.sharepoint.com/sites/sales -NoScriptSite:$false
```

This will enable script support for the site 'https://contoso.sharepoint.com/sites/sales' if disabled.

## PARAMETERS

### -AllowSelfServiceUpgrade
Specifies if the site administrator can upgrade the site collection

```yaml
Type: SwitchParameter
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -BlockDownloadOfNonViewableFiles
Specifies if non web viewable files can be downloaded.

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -CommentsOnSitePagesDisabled
Specifies if comments on site pages are enabled

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -DefaultLinkPermission
Specifies the default link permission for the site collection. None - Respect the organization default link permission. View - Sets the default link permission for the site to "view" permissions. Edit - Sets the default link permission for the site to "edit" permissions

Only applicable to: SharePoint Online

```yaml
Type: SharingPermissionType
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -DefaultSharingLinkType
Specifies the default link type for the site collection. None - Respect the organization default sharing link type. AnonymousAccess - Sets the default sharing link for this site to an Anonymous Access or Anyone link. Internal - Sets the default sharing link for this site to the "organization" link or company shareable link. Direct - Sets the default sharing link for this site to the "Specific people" link

Only applicable to: SharePoint Online

```yaml
Type: SharingLinkType
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -DenyAddAndCustomizePages
Determines whether the Add And Customize Pages right is denied on the site collection. For more information about permission levels, see User permissions and permission levels in SharePoint.

```yaml
Type: SwitchParameter
Parameter Sets: Set Properties
Aliases: NoScriptSite

Required: False
Position: Named
Accept pipeline input: False
```

### -DisableAppViews
-

Only applicable to: SharePoint Online

```yaml
Type: AppViewsPolicy
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -DisableCompanyWideSharingLinks
-

Only applicable to: SharePoint Online

```yaml
Type: CompanyWideSharingLinksPolicy
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -DisableFlows
-

Only applicable to: SharePoint Online

```yaml
Type: FlowsPolicy
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -LocaleId
Specifies the language of this site collection. For more information, see Locale IDs supported by SharePoint at https://github.com/pnp/PnP-PowerShell/wiki/Supported-LCIDs-by-SharePoint. To get the list of supported languages on a SharePoint environment use: (Get-PnPWeb -Includes RegionalSettings.InstalledLanguages).RegionalSettings.InstalledLanguages.

```yaml
Type: UInt32
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -LockState
Sets the lockstate of a site

Only applicable to: SharePoint Online

```yaml
Type: SiteLockState
Parameter Sets: Set Lock State

Required: False
Position: Named
Accept pipeline input: False
```

### -Owners
Specifies owner(s) to add as site collection administrators. They will be added as additional site collection administrators. Existing administrators will stay. Can be both users and groups.

```yaml
Type: String
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -SharingAllowedDomainList
Specifies a list of email domains that is allowed for sharing with the external collaborators. Use the space character as the delimiter for entering multiple values. For example, "contoso.com fabrikam.com".

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -SharingBlockedDomainList
Specifies a list of email domains that is blocked for sharing with the external collaborators. Use the space character as the delimiter for entering multiple values. For example, "contoso.com fabrikam.com".

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -SharingCapability
Specifies what the sharing capabilities are for the site. Possible values: Disabled, ExternalUserSharingOnly, ExternalUserAndGuestSharing, ExistingExternalUserSharingOnly

Only applicable to: SharePoint Online

```yaml
Type: SharingCapabilities
Parameter Sets: Set Properties
Aliases: Sharing

Required: False
Position: Named
Accept pipeline input: False
```

### -SharingDomainRestrictionMode
Specifies the external sharing mode for domains.

Only applicable to: SharePoint Online

```yaml
Type: SharingDomainRestrictionModes
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -StorageMaximumLevel
Specifies the storage quota for this site collection in megabytes. This value must not exceed the company's available quota.

Only applicable to: SharePoint Online

```yaml
Type: Int
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -StorageWarningLevel
Specifies the warning level for the storage quota in megabytes. This value must not exceed the values set for the StorageMaximumLevel parameter

Only applicable to: SharePoint Online

```yaml
Type: Int
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -Title
Specifies the title of the site

```yaml
Type: String
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -Url
Specifies the URL of the site

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Wait
Wait for the operation to complete

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)