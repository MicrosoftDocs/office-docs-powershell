---
applicable: SharePoint Online
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
For any parameters that are passed in, the Set-SPOSite cmdlet sets or updates the setting for the site collection identified by parameter Identity.

You must be a SharePoint Online global administrator and a site collection administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

###   (SharePoint Online)
```

```

###   (SharePoint Online)
```

```

###   (SharePoint Online)
```

```

###   (SharePoint Online)
```

```

## PARAMETERS

### -EnablePWA
Determines whether site can include Project Web App.
For more information about Project Web App ,see Plan SharePoint groups in Project Server 2013.

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
For more information about permission levels, see User permissions and permission levels in SharePoint 2013.

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
If parameter NoAccessRedirectUrl in the Set-SPOTenant cmdlet is set, traffic to sites that have a lock state NoAccess will be redirected to that URL.
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
For more information, see Resource Usage Limits on Sandboxed Solutions in SharePoint 2010 (http://msdn.microsoft.com/en-us/library/gg615462.aspx) (http://msdn.microsoft.com/en-us/library/gg615462.aspx).

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

For more information about sharing, see .
Manage external sharing for your SharePoint online environment (http://office.microsoft.com/en-us/office365-sharepoint-online-enterprise-help/manage-external-sharing-for-your-sharepoint-online-environment-HA102849864.aspx).

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
{{Fill CommentsOnSitePagesDisabled Description}}

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
{{Fill DisableAppViews Description}}

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
{{Fill DisableCompanyWideSharingLinks Description}}

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
{{Fill DisableFlows Description}}

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
{{Fill NewUrl Description}}

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
{{Fill RestrictedToGeo Description}}

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
{{Fill SharingAllowedDomainList Description}}

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
{{Fill SharingBlockedDomainList Description}}

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
{{Fill SharingDomainRestrictionMode Description}}

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
{{Fill ShowPeoplePickerSuggestionsForGuestUsers Description}}

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
{{Fill StorageQuotaReset Description}}

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

[Set-SPOTenant]()

[Online Version](http://technet.microsoft.com/EN-US/library/de2a6a72-cff9-4afd-9144-97a28fcdbe40(Office.15).aspx)

