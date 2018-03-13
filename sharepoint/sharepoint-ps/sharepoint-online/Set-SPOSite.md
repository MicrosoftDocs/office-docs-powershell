---
external help file: 
applicable: SharePoint Online
title: Set-SPOSite
schema: 2.0.0
---

# Set-SPOSite

## SYNOPSIS
Sets or updates one or more properties' values for a site collection.


## SYNTAX

### ParamSet2
```
Set-SPOSite [-Identity] <SpoSitePipeBind> -EnablePWA <Boolean> [-Confirm] [-WhatIf] [<CommonParameters>]
```

### ParamSet1
```
Set-SPOSite [-Identity] <SpoSitePipeBind> [-AllowSelfServiceUpgrade <Boolean>] [-Confirm]
 [-DenyAddAndCustomizePages <Boolean>] [-LocaleId <UInt32>] [-LockState <String>] [-NoWait] [-Owner <String>]
 [-ResourceQuota <Double>] [-ResourceQuotaWarningLevel <Double>]
 [-SandboxedCodeActivationCapability <SandboxedCodeActivationCapabilities>]
 [-SharingCapability <SharingCapabilities>] [-StorageQuota <Int64>] [-StorageQuotaWarningLevel <Int64>]
 [-Title <String>] [-WhatIf] [-AllowLimitedAccess <Boolean>] [-BlockDownloadOfNonViewableFiles <Boolean>]
 [-CommentsOnSitePagesDisabled <Boolean>] [-DisableAppViews <AppViewsPolicy>]
 [-DisableCompanyWideSharingLinks <CompanyWideSharingLinksPolicy>] [-DisableFlows <FlowsPolicy>]
 [-RestrictedToGeo <RestrictedToRegion>] [-SharingAllowedDomainList <String>]
 [-SharingBlockedDomainList <String>] [-SharingDomainRestrictionMode <SharingDomainRestrictionModes>]
 [-ShowPeoplePickerSuggestionsForGuestUsers <Boolean>] [-StorageQuotaReset] [<CommonParameters>]
```

### ParamSet3
```
Set-SPOSite [-Identity] <SpoSitePipeBind> [-Confirm] [-DisableSharingForNonOwners] [-WhatIf]
 [<CommonParameters>]
```

### ParamSet4
```
Set-SPOSite [-Identity] <SpoSitePipeBind> [-Confirm] [-WhatIf] [-NewUrl <String>] [<CommonParameters>]
```


## DESCRIPTION
For any parameters that are passed in, the `Set-SPOSite` cmdlet sets or updates the setting for the site collection identified by parameter Identity.

You must be a SharePoint Online global administrator and a site collection administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Set-SPOSite -Identity https://contoso.sharepoint.com/sites/site1 -Owner joe.healy@contoso.com -NoWait
```

Example 1 updates the owner of site collection https://contoso.sharepoint.com/sites/site1 to the person whose email address is joe.healy@contoso.com. This cmdlet is executed immediately without delay.


### -----------------------EXAMPLE 2-----------------------------
```
Set-SPOSite -Identity https://contoso.sharepoint.com/sites/site1 -ResourceQuota 0 -StorageQuota 15000
```

Example 2 updates the settings of site collection https://contoso.sharepoint.com/sites/site1. The storage quota is updated to 15000 megabytes and the resource quota is updated to 0 megabytes. 


### -----------------------EXAMPLE 3-----------------------------
```
Set-SPOSite -Identity https://contoso.sharepoint.com -StorageQuota 3000 -StorageQuotaWarningLevel 2000
```

This example updates the settings of site collection https://contoso.sharepoint.com. The storage quota is updated to 3000 megabytes and the storage quota warning level is updated to 2000 megabytes. 


### -----------------------EXAMPLE 4-----------------------------
```
Set-SPOSite -Identity https://contoso.sharepoint.com -DisableSharingForNonOwners
```

Example 4 prevents non-owners of a site from inviting new users to the site.


### -----------------------EXAMPLE 5-----------------------------
```
Set-SPOSite -Identity https://contoso.sharepoint.com/sites/groupname -StorageQuota 3000 -StorageQuotaWarningLevel 2000
```

This example sets the quota for the site.

> [!NOTE] 
> If Site Collection Storage Management is enabled for the tenant, you will not be able to set quota and will have a generic error returned. To workaround this issue, set the site collection storage management to "manual" temporarily, set your quotas and then set the site collection storage management setting back to its original setting.  


## PARAMETERS

### -EnablePWA
Determines whether site can include Project Web App.
For more information about Project Web App, see Plan SharePoint groups in Project Server.


```yaml
Type: Boolean
Parameter Sets: ParamSet2
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the URL of the site collection to update.


```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AllowSelfServiceUpgrade
Determines whether site collection administrators can upgrade their site collections.


```yaml
Type: Boolean
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
PARAMVALUE: SwitchParameter


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DenyAddAndCustomizePages
Determines whether the Add And Customize Pages right is denied on the site collection.
For more information about permission levels, see User permissions and permission levels in SharePoint.


```yaml
Type: Boolean
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableSharingForNonOwners
This parameter prevents non-owners from invited new users to the site.

This parameter is available only in SharePoint Online Management Shell Version 16.0.4613.1211 or later.


```yaml
Type: SwitchParameter
Parameter Sets: ParamSet3
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocaleId
Specifies the language of this site collection.
For more information, see Locale IDs Assigned by Microsoft (http://go.microsoft.com/fwlink/p/?LinkId=242911) (http://go.microsoft.com/fwlink/p/?LinkId=242911).


```yaml
Type: UInt32
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LockState
Sets the lock state on a site.
Valid values are: NoAccess and Unlock.
When the lock state of a site is NoAccess, all traffic to the site will be blocked.
If parameter NoAccessRedirectUrl in the `Set-SPOTenant` cmdlet is set, traffic to sites that have a lock state NoAccess will be redirected to that URL.
If parameter NoAccessRedirectUrl is not set, a 403 error will be returned.


```yaml
Type: String
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoWait
Specifies to continue executing script immediately.


```yaml
Type: SwitchParameter
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
Specifies the owner of the site collection.


```yaml
Type: String
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceQuota
Specifies the resource quota in megabytes of the site collection.
The default value is 0.
For more information, see Resource Usage Limits on Sandboxed Solutions in SharePoint (http://msdn.microsoft.com/en-us/library/gg615462.aspx) (http://msdn.microsoft.com/en-us/library/gg615462.aspx).


```yaml
Type: Double
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceQuotaWarningLevel
Specifies the warning level in megabytes of the site collection to warn the site collection administrator that the site is approaching the resource quota.


```yaml
Type: Double
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SandboxedCodeActivationCapability
PARAMVALUE: Unknown | Check | Disabled | Enabled


```yaml
Type: SandboxedCodeActivationCapabilities
Parameter Sets: ParamSet1
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
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StorageQuota
Specifies the storage quota in megabytes of the site collection.


```yaml
Type: Int64
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StorageQuotaWarningLevel
Specifies the warning level in megabytes of the site collection to warn the site collection administrator that the site is approaching the storage quota.


```yaml
Type: Int64
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title
Specifies the title of the site collection.


```yaml
Type: String
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
PARAMVALUE: SwitchParameter


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLimitedAccess
{{Fill AllowLimitedAccess Description}}

```yaml
Type: Boolean
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockDownloadOfNonViewableFiles
{{Fill BlockDownloadOfNonViewableFiles Description}}

```yaml
Type: Boolean
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CommentsOnSitePagesDisabled
PARAMVALUE: $true | $false


```yaml
Type: Boolean
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableAppViews
PARAMVALUE: Unknown | Disabled | NotDisabled


```yaml
Type: AppViewsPolicy
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableCompanyWideSharingLinks
PARAMVALUE: Unknown | Disabled | NotDisabled


```yaml
Type: CompanyWideSharingLinksPolicy
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableFlows
PARAMVALUE: Unknown | Disabled | NotDisabled


```yaml
Type: FlowsPolicy
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewUrl
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: ParamSet4
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestrictedToGeo
PARAMVALUE: NoRestriction | BlockMoveOnly | BlockFull | Unknown


```yaml
Type: RestrictedToRegion
Parameter Sets: ParamSet1
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

For additional information about how to restrict a domain sharing, see Restricted Domains Sharing in Office 365 SharePoint Online and OneDrive for Business.


```yaml
Type: String
Parameter Sets: ParamSet1
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

For additional information about how to restrict a domain sharing, see Restricted Domains Sharing in Office 365 SharePoint Online and OneDrive for Business.


```yaml
Type: String
Parameter Sets: ParamSet1
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
Parameter Sets: ParamSet1
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
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StorageQuotaReset
Resets the OneDrive for Business storage quota to the tenant’s new default storage space. 


```yaml
Type: SwitchParameter
Parameter Sets: ParamSet1
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

[Set-SPOTenant](Set-SPOTenant.md)
