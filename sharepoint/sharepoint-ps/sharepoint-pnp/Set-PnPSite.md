---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpsite
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Set-PnPSite
---

# Set-PnPSite

## SYNOPSIS
Sets Site Collection properties.

## SYNTAX 

### Set Properties
```powershell
Set-PnPSite [-Classification <String>]
            [-DisableFlows [<SwitchParameter>]]
            [-LogoFilePath <String>]
            [-Sharing <SharingCapabilities>]
            [-StorageMaximumLevel <Int>]
            [-StorageWarningLevel <Int>]
            [-AllowSelfServiceUpgrade [<SwitchParameter>]]
            [-NoScriptSite [<SwitchParameter>]]
            [-Owners <String>]
            [-CommentsOnSitePagesDisabled [<SwitchParameter>]]
            [-DefaultLinkPermission <SharingPermissionType>]
            [-DefaultSharingLinkType <SharingLinkType>]
            [-DisableAppViews <AppViewsPolicy>]
            [-DisableCompanyWideSharingLinks <CompanyWideSharingLinksPolicy>]
            [-DisableSharingForNonOwners [<SwitchParameter>]]
            [-LocaleId <UInt32>]
            [-RestrictedToGeo <RestrictedToRegion>]
            [-SocialBarOnSitePagesDisabled [<SwitchParameter>]]
            [-Identity <String>]
            [-Connection <PnPConnection>]
```

### Set Lock State
```powershell
Set-PnPSite [-LockState <SiteLockState>]
            [-Wait [<SwitchParameter>]]
            [-Identity <String>]
            [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPSite -Classification "HBI"
```

Sets the current site classification to HBI

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPSite -Classification $null
```

Unsets the current site classification

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPSite -DisableFlows
```

Disables Microsoft Flow for this site, and also hides the Flow button from the ribbon

### ------------------EXAMPLE 4------------------
```powershell
Set-PnPSite -DisableFlows:$false
```

Enables Microsoft Flow for this site

### ------------------EXAMPLE 5------------------
```powershell
Set-PnPSite -LogoFilePath c:\images\mylogo.png
```

Sets the logo if the site is a modern team site

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

### -Classification
The classification to set

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -CommentsOnSitePagesDisabled
Specifies if comments on site pages are enabled or disabled

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

### -DisableAppViews


Only applicable to: SharePoint Online

```yaml
Type: AppViewsPolicy
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -DisableCompanyWideSharingLinks


Only applicable to: SharePoint Online

```yaml
Type: CompanyWideSharingLinksPolicy
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -DisableFlows
Disables Microsoft Flow for this site

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -DisableSharingForNonOwners
Specifies to prevent non-owners from inviting new users to the site

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity


```yaml
Type: String
Parameter Sets: (All)
Aliases: Url

Required: False
Position: Named
Accept pipeline input: False
```

### -LocaleId
Specifies the language of this site collection.

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

### -LogoFilePath
Sets the logo of the site if it concerns a modern team site. Provide a full path to a local image file on your disk which you want to use as the site logo. The logo will be uploaded automatically to SharePoint. If you want to set the logo for a classic site, use Set-PnPWeb -SiteLogoUrl.

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -NoScriptSite
Specifies if a site allows custom script or not. See https://support.office.com/en-us/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f for more information.

```yaml
Type: SwitchParameter
Parameter Sets: Set Properties
Aliases: DenyAndAddCustomizePages

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

### -RestrictedToGeo
Specifies the Geo/Region restrictions of this site.

Only applicable to: SharePoint Online

```yaml
Type: RestrictedToRegion
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -Sharing
Specifies what the sharing capabilities are for the site. Possible values: Disabled, ExternalUserSharingOnly, ExternalUserAndGuestSharing, ExistingExternalUserSharingOnly

Only applicable to: SharePoint Online

```yaml
Type: SharingCapabilities
Parameter Sets: Set Properties

Required: False
Position: Named
Accept pipeline input: False
```

### -SocialBarOnSitePagesDisabled
Disables or enables the Social Bar for Site Collection.

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
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

### -Wait
Wait for the operation to complete

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Set Lock State

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