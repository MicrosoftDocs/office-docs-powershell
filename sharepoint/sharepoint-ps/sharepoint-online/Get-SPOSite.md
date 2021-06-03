---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-sposite
applicable: SharePoint Online
title: Get-SPOSite
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOSite

## SYNOPSIS

Returns one or more site collections.

## SYNTAX

### ParamSet1

```powershell
Get-SPOSite [[-Identity] <SpoSitePipeBind>] [-Detailed] [-Limit <String>] [<CommonParameters>]
```

### ParamSet2

```powershell
Get-SPOSite [-Detailed] [-Filter <String>] [-IncludePersonalSite <Boolean>] [-Limit <String>]
 [-Template <String>] [<CommonParameters>]
```

### ParamSet3

```powershell
Get-SPOSite [-Identity] <SpoSitePipeBind> [-DisableSharingForNonOwnersStatus] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet contains more than one parameter set. You may only use parameters from one parameter set and you may not combine parameters from different parameter sets. For more information about how to use parameter sets, see Cmdlet Parameter Sets.

The `Get-SPOSite` cmdlet retrieves and returns properties of all site collections that match the given criteria.

With version 5361 of the SharePoint Online Management Shell, you may experience the following:

Additional site collections are now displayed. For example, all group and video sites along with team sites will be displayed.

The Detailed parameter has been deprecated. It will continue to work with earlier versions

> [!NOTE]
> Site collections in the Recycle Bin will not be retrieved by using the `Get-SPOSite` cmdlet.  

You need to be a SharePoint Online administrator or Global Administrator and be a site collection administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at [Intro to SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell?view=sharepoint-ps).

> [!NOTE]
> If Site Collection Storage Management is enabled for the tenant, you will not be able to set quota and will have a generic error returned. To workaround this issue, set the site collection storage management to "manual" temporarily, set your quotas and then set the site collection storage management setting back to its original setting.

> [!NOTE]
> If the Limit parameter is provided then the following site collection properties will not be populated and may contain a default value:
> AllowDownloadingNonWebViewableFiles, AllowEditing, AllowSelfServiceUpgrade, AnonymousLinkExpirationInDays, ConditionalAccessPolicy, DefaultLinkPermission, DefaultLinkToExistingAccess, DefaultSharingLinkType, DenyAddAndCustomizePages, DisableCompanyWideSharingLinks, ExternalUserExpirationInDays, LimitedAccessFileType, OverrideTenantAnonymousLinkExpirationPolicy, OverrideTenantExternalUserExpirationPolicy, PWAEnabled, SandboxedCodeActivationCapability, SensitivityLabel, SharingAllowedDomainList, SharingBlockedDomainList, SharingCapability, SharingDomainRestrictionMode.

## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------

```powershell
Get-SPOSite
```

Example 1 returns all site collections.

### -----------------------EXAMPLE 2-----------------------------

```powershell
Get-SPOSite -Identity https://contoso.sharepoint.com
```

Example 2 lists the site collection with detailed properties.

### -----------------------EXAMPLE 3-----------------------------

```powershell
Get-SPOSite -Identity https://contoso.sharepoint.com -DisableSharingForNonOwnersStatus
```

Example 3 Updates status on if the non owners of a site collection can share the site collection (does not set this value).

### -----------------------EXAMPLE 4-----------------------------

```powershell
Get-SPOSite -Template GROUP#0 -IncludePersonalSite:$false
```

This example enumerates Group Site Collections in a tenant.

### -----------------------EXAMPLE 5-----------------------------

```powershell
Get-SPOSite -Identity https://contoso.sharepoint.com/sites/groupname -detailed |fl
```

This example gets quota details for a Group Site.

### -----------------------EXAMPLE 6-----------------------------

```powershell
Get-SPOSite -Identity https://contoso.sharepoint.com/sites/research | Select InformationSegment
```

This example returns the InformationSegments associated to the site.

### -----------------------EXAMPLE 7-----------------------------

```powershell
Get-SPOSite -Filter { Url -like "contoso.sharepoint.com/sites/18" }
```

This example uses server side filtering to return sites matching 18.

## PARAMETERS

### -Detailed

Use this parameter to get additional property information on a site collection. You will notice a slower response time when the Detailed parameter is used.

The following properties are returned:

- ResourceUsageCurrent

- ResourceUsageAverage

- StorageUsageCurrent

- LockIssue

- WebsCount

- CompatibilityLevel

- AllowSelfServiceUpgrade

- SiteDefinedSharingCapability

Returns the stored value of the site policy.

- SharingCapability

Returns the effective access level, which is the site policy and the tenant policy combined.

```yaml
Type: SwitchParameter
Parameter Sets: ParamSet1, ParamSet2
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableSharingForNonOwnersStatus

This parameter prevents non-owners from sharing.

> [!NOTE]
> This parameter is available only in SharePoint Online Management Shell Version 16.0.4613.1211 or later.  

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

### -Filter

Specifies the script block of the server-side filter to apply. The type must be a valid filter name and value must be in the form `{ PropertyName <operator> "filterValue"}`. Valid operators are as follows: -eq, -ne, -like, -notlike.
 Currently, you can filter by these properties: Owner, Template (can be used to filter if it is the only property present in the filter), LockState, Url.
 Using the -or operator to include an additional filter is not supported.

Note: The operator values are case-sensitive.  

```yaml
Type: String
Parameter Sets: ParamSet2
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

Specifies the URL of the site collection.

```yaml
Type: SpoSitePipeBind
Parameter Sets: ParamSet1
Aliases:
Applicable: SharePoint Online

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IncludePersonalSite

Displays personal sites when value is set to $true.

The values are $true and $false. By default, the value is $false which means no personal sites will be returned.

```yaml
Type: Boolean
Parameter Sets: ParamSet2
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Limit

Specifies the maximum number of site collections to return. It can be any number. To retrieve all site collections, use ALL. The default value is 200. If this parameter is provided, then some site collection properties will not be populated and may contain a default value.

```yaml
Type: String
Parameter Sets: ParamSet1, ParamSet2
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template

Displays sites of a specific template. For example, STS, STS#0, STS#1, STS#3, GROUP#0, SRCHCEN#0 or SITEPAGEPUBLISHING#0.

```yaml
Type: String
Parameter Sets: ParamSet2
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### InformationSegment
This parameter displays the segments associated with a site. 

It is applicable for tenants who have enabled Microsoft 365 Information barriers capability. Please read https://docs.microsoft.com/microsoft-365/compliance/information-barriers documentation to understand Information barriers in SharePoint Online.

**Note**: This parameter is available only in SharePoint Online Management Shell Version 16.0.19927.12000 or later.

```yaml
Type: Collection of GUIDs
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Online.SharePoint.PowerShell.SpoSitePipeBind

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
