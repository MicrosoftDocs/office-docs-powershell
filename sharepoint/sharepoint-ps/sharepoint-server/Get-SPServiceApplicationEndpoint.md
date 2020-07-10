---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spserviceapplicationendpoint
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPServiceApplicationEndpoint
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Get-SPServiceApplicationEndpoint

## SYNOPSIS

Returns the endpoint of a service application.



## SYNTAX

### Identity
```
Get-SPServiceApplicationEndpoint [-Identity] <SPServiceEndpointPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### Name
```
Get-SPServiceApplicationEndpoint -ServiceApplication <SPServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Name <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

The Get-SPServiceApplicationEndpoint cmdlet sets the host of a service endpoint.
Use the second parameter set and do not specify the Name parameter to return a collection of all endpoints for the specified service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### -------------------EXAMPLE-------------------- 
```
Get-SPServiceApplicationEndpoint -ServiceApplication "ServiceSubApp1"
```

This example returns the SPServiceEndpoint object based on the specified service application.

## PARAMETERS

### -Identity
Specifies the service endpoint to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URI of an endpoint address, in the form https://sitename:8003/servicemodelsamples/service; or an instance of a valid SPServiceEndpoint object.

```yaml
Type: SPServiceEndpointPipeBind
Parameter Sets: Identity
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ServiceApplication
Specifies the service application to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a subscription settings service application (for example, SubscriptionSettingsApp1); or an instance of a valid SPServiceApplication object.

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: Name
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

### -Name
Specifies the name of the service application endpoint.

The type must be a valid name of an service application endpoint; for example, SvcAppEndpoint1.

```yaml
Type: String
Parameter Sets: Name
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

