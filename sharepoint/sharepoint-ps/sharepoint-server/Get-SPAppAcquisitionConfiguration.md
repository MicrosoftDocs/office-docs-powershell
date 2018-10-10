---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPAppAcquisitionConfiguration
schema: 2.0.0
---

# Get-SPAppAcquisitionConfiguration

## SYNOPSIS

Returns app acquisition settings.

## SYNTAX

### MarketplaceSettingsInSiteSubscription
```
Get-SPAppAcquisitionConfiguration -SiteSubscription <SPSiteSubscriptionPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### MarketplaceSettingsInWebApplication
```
Get-SPAppAcquisitionConfiguration [-AssignmentCollection <SPAssignmentCollection>]
 -WebApplication <SPWebApplicationPipeBind> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets [http://go.microsoft.com/fwlink/?LinkID=187810](http://go.microsoft.com/fwlink/?LinkID=187810).

Use the `Get-SPAppAcquisitionConfiguration` cmdlet to return app acquisition settings from the SharePoint Storeor App Catalog.

## EXAMPLES

### ------------EXAMPLE 1------- 
```
PS C:\>Get-SPAppAcquisitionConfiguration -WebApplication http://localhost
```

This example returns app acquisition settings for the specified web application.


### ------------EXAMPLE 2------- 
```
PS C:\>Get-SPAppAcquisitionConfiguration -SiteSubscription http://localhost/sites/SharePointOnlineAdmin
```

This example returns app acquisition settings for the specified tenant.

## PARAMETERS

### -SiteSubscription

Specifies the site collection for which app acquisition settings are to be returned.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: MarketplaceSettingsInSiteSubscription
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection

Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WebApplication

Specifies the web application for which app acquisition settings are to be returned.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: MarketplaceSettingsInWebApplication
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPWebApplicationPipeBind
Microsoft.SharePoint.PowerShell.SPSiteSubscriptionPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-SPAppAcquisitionConfiguration](Set-SPAppAcquisitionConfiguration.md)

