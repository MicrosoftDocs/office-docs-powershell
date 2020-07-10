---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spmanagedpath
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPManagedPath
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Get-SPManagedPath

## SYNOPSIS

Returns all managed paths that match the given criteria.



## SYNTAX

### HostHeader
```
Get-SPManagedPath [[-Identity] <SPPrefixPipeBind>] [-HostHeader]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### WebApplication
```
Get-SPManagedPath [[-Identity] <SPPrefixPipeBind>] -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

The Get-SPManagedPath cmdlet returns the SharePoint managed path that matches the provided Identity for either a Web application, site collection or for all host-named site collections. 
If an Identity parameter is not provided, all managed paths for the given scope are returned.

Host-named sites (no matter the Web application in which they are contained) share a single set of managed paths.
Use the HostHeader parameter to return host-named site collections-scoped managed paths.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### --------------EXAMPLE 1----------------- 
```
Get-SPManagedPath -WebApplication https://sitename
```

This example returns all managed paths for the specified Web application.

### --------------EXAMPLE 2----------------- 
```
Get-SPManagedPath -identity "Sites" -HostHeader
```

This example gets the Sites managed path from the host-named site collections-scoped managed paths.

## PARAMETERS

### -Identity
Specifies the URL or GUID of the managed path to return.

The type must be a valid URL, in the https://server_name or a valid GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh).

```yaml
Type: SPPrefixPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostHeader
If provided, the managed paths returned are for the host-named sites in the farm.

```yaml
Type: SwitchParameter
Parameter Sets: HostHeader
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Specifies the URL or GUID of the Web application from which to get the managed path.

The type must be a valid URL, in the form https://server_name, or a valid GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh).

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: WebApplication
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

