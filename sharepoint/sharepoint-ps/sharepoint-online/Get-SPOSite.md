---
external help file: 
applicable: SharePoint Online
title: Get-SPOSite
schema: 2.0.0
---

# Get-SPOSite

## SYNOPSIS
Returns one or more site collections.


## SYNTAX

### ParamSet1
```
Get-SPOSite [[-Identity] <SpoSitePipeBind>] [-Detailed] [-Limit <String>] [<CommonParameters>]
```

### ParamSet2
```
Get-SPOSite [-Detailed] [-Filter <String>] [-IncludePersonalSite <Boolean>] [-Limit <String>]
 [-Template <String>] [<CommonParameters>]
```

### ParamSet3
```
Get-SPOSite [-Identity] <SpoSitePipeBind> [-DisableSharingForNonOwnersStatus] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set. You may only use parameters from one parameter set and you may not combine parameters from different parameter sets. For more information about how to use parameter sets, see Cmdlet Parameter Sets. 

The `Get-SPOSite` cmdlet retrieves and returns properties of all site collections that match the given criteria.

With version 5361 of the SharePoint Online Management Shell, you may experience the following:

Additional site collections are now displayed. For example, all group and video sites along with team sites will be displayed.

The Detailed parameter has been deprecated. It will continue to work with earlier versions

You may see an impact on performance when the Filter parameter is used.

Note:  
Site collections in the Recycle Bin will not be retrieved by using the `Get-SPOSite` cmdlet.  

You need to be a SharePoint Online global administrator and a site collection administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832.

Note:  
If Site Collection Storage Management is enabled for the tenant, you will not be able to set quota and will have a generic error returned. To workaround this issue, set the site collection storage management to "manual" temporarily, set your quotas and then set the site collection storage management setting back to its original setting.  


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Get-SPOSite
```
Example 1 returns all site collections.

### -----------------------EXAMPLE 2-----------------------------
```
Get-SPOSite -Identity https://contoso.sharepoint.com 
```
Example 2 lists the site collection with detailed properties.

### -----------------------EXAMPLE 3-----------------------------
```
Get-SPOSite -Identity https://contoso.sharepoint.com -DisableSharingForNonOwnersStatus
```
Example 3 disables the ability for non owners of a site collection to share. 

### -----------------------EXAMPLE 4-----------------------------
```
Get-SPOSite -Template GROUP#0 -IncludePersonalSite:$false
```
This example enumerates Group Site Collections in a tenant.

### -----------------------EXAMPLE 5-----------------------------
```
Get-SPOSite -Identity https://contoso.sharepoint.com/sites/groupname -detailed |fl
```
This example gets quota details for a Group Site.


## PARAMETERS

### -Detailed
Use this parameter to get additional property information on a site collection. You will notice a slower response time when the Detailed parameter is used.

The following properties are returned:

--ResourceUsageCurrent

--ResourceUsageAverage

--StorageUsageCurrent

--LockIssue

--WebsCount

--CompatibilityLevel

--AllowSelfServiceUpgrade

--SiteDefinedSharingCapability-returns the stored value of the site policy.

--SharingCapability --returns the effective access level (the site policy and the tenant policy combined.


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

Note:  
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

### -Filter
Specifies the script block of the server-side filter to apply. The type must be a valid filter name and value must be in the form {$_PropertyName <operator> "filterValue"}. Valid operators are as follows: eq, ne, like, notlike.

Note:  
The operator values are case-sensitive.  


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

```yaml
Type: SpoSitePipeBind
Parameter Sets: ParamSet3
Aliases: 
Applicable: SharePoint Online

Required: True
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
Specifies the maximum number of site collections to return. It can be any number. To retrieve all site collections, use ALL. The default value is 200.


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
Displays sites of a specific template. For example, STS, STS#0 or STS#1.


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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Online.SharePoint.PowerShell.SpoSitePipeBind

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
