---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/new-spsitesubscription
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: New-SPSiteSubscription
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer: 
---

# New-SPSiteSubscription

## SYNOPSIS
Creates a new site subscription.


## SYNTAX

```
New-SPSiteSubscription [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The `New-SPSiteSubscription` cmdlet creates a new subscription to which the SPSites object can belong. 
Sites that are members of a site subscription can share settings and configuration information.
A site collection can be a member of only one site subscription and once set, cannot be changed.

Site subscriptions are not persisted in a database until used in conjunction with either an SPSite or the Site Subscription Settings Service.
After a site subscription is applied to any site collection in the farm, the site subscription can be retrieved by using the `Get-SPSiteSubscription` cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### ------------------EXAMPLE 1-----------------------
```

$subscription = New-SPSiteSubscription

```

This example creates a new site subscription.


### ------------------EXAMPLE 2-----------------------
```
$subscription = New-SPSiteSubscription
Set-SPSite -Identity https://siteUrl -SiteSubscription $subscription
```

This example creates a new Site Subscription and sets it on the site collection https://siteUrl.


### ------------------EXAMPLE 3-----------------------
```
New-SPSite -URL https://siteUrl -OwnerAlias "DOMAIN\JDow" -Language 1033 -SiteSubscription (New-SPSiteSubscription)
```

This example creates a new Site Collection at https://siteUrl along with a new Site Subscription.


## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
