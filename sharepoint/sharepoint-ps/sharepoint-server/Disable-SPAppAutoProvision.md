---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/disable-spappautoprovision
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Disable-SPAppAutoProvision
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Disable-SPAppAutoProvision

## SYNOPSIS

Disables automatic provisioning of an app.



## SYNTAX

```
Disable-SPAppAutoProvision [-AssignmentCollection <SPAssignmentCollection>]
 [-SiteSubscription <SPSiteSubscriptionPipeBind>] [<CommonParameters>]
```

## DESCRIPTION
Use the Disable-SPAppAutoProvision cmdlet to disable automatic provisioning of an app to the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### ---------------EXAMPLE 1-------------- 
```
Disable-SPAppAutoProvision
```

This example disables app auto provisioning for the farm.
The app auto provisioning is enabled by default.
This setting overrides site subscription level setting.

### ---------------EXAMPLE 2-------------- 
```
C:\PS>$subscription = Get-SPSiteSubscription https://Contoso.com

Disable-SPAppAutoProvision -SiteSubscription $subscription
```

This example disables app auto provisioning for the site subscription for Contoso.Com site.
The app auto provisioning is enabled by default.

## PARAMETERS

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SiteSubscription
Specifies the site collection for which auto provisioning is to be disabled.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

[Enable-SPAppAutoProvision](Enable-SPAppAutoProvision.md)

[Get-SPAppAutoProvisionConnection](Get-SPAppAutoProvisionConnection.md)

[Set-SPAppAutoProvisionConnection](Set-SPAppAutoProvisionConnection.md)

