---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/export-spsitesubscriptionsettings
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Export-SPSiteSubscriptionSettings
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Export-SPSiteSubscriptionSettings

## SYNOPSIS

Creates a backup file of site subscription data.



## SYNTAX

```
Export-SPSiteSubscriptionSettings [-Identity] <SPSiteSubscriptionPipeBind> -Path <String> [-AdminProperties]
 [-AssignmentCollection <SPAssignmentCollection>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
The Export-SPSiteSubscriptionSettings cmdlet generates a backup file of all settings in the subscription data store for the given site subscription.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### --------------EXAMPLE 1----------------- 
```
Export-SPSiteSubscriptionSettings -Identity "https://siteCollection" -Path "C:\siteCollection_sitesubscriptionsettings.txt"
```

The example backs up the subscription settings store of https://siteCollection.


### --------------EXAMPLE 2----------------- 
```
C:\PS>$site = Get-SPSite https://siteCollection
Export-SPSiteSubscriptionSettings -Identity $site.SiteSubscription -Path "C:\siteCollection_sitesubscriptionsettings.txt"
```

The example backs up the subscription settings store of https://siteCollection using the Site Subscription object.

## PARAMETERS

### -Identity
Specifies the ID of the site subscription from which to back up data.

The type must be a valid URL, in the form https://server_name or a Site Subscription object.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Path
Specifies the location of the output file.

The type must be a valid path; for example,  C:/backupfile.back..

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminProperties
Specifies that only administrator subscription properties are exported.
If this parameter is not set, only non-administrator subscription properties are exported.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Force
Forces the output backup file (if provided) to overwrite any existing file at the given path.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

