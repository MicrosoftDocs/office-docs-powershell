---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spworkflowconfig
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPWorkflowConfig
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Get-SPWorkflowConfig

## SYNOPSIS

Returns workflow settings for the specified Web application.



## SYNTAX

### SiteCollection
```
Get-SPWorkflowConfig [-SiteCollection] <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

### WebApplication
```
Get-SPWorkflowConfig [-WebApplication] <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

The Get-SPWorkflowConfig cmdlet returns workflow settings for the Web application specified by the WebApplication parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### --------------EXAMPLE----------------- 
```
Get-SPWorkFlowConfig -webapplication https://sitename
```

This example gets workflow settings for the specified Web application (https://sitename).

To get farm-level workflow settings for event delivery time-out, postpone threshold, and batch size, use the Get-SPFarmConfig cmdlet.

## PARAMETERS

### -SiteCollection
Specifies the name or URL of the site collection.

The only other parameter that is used with the SiteCollection parameter is the DeclarativeWorkflowsEnabled parameter.
No other parameters are used.

```yaml
Type: SPSitePipeBind
Parameter Sets: SiteCollection
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -WebApplication
Specifies the name or URL of the Web application.

The type must be a valid name, in the form WebApplication-1212, or a URL, in the form https://server_name/WebApplication-1212.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: WebApplication
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

