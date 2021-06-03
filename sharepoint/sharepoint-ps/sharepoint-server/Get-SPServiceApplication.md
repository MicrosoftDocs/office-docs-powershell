---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spserviceapplication
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPServiceApplication
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Get-SPServiceApplication

## SYNOPSIS

Returns the specified service application.



## SYNTAX

```
Get-SPServiceApplication [[-Identity] <SPServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Name <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPServiceApplication cmdlet returns the service application specified by the Identity parameter.
If no parameter is specified, the cmdlet returns all service applications in the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### ------------------EXAMPLE 1---------------------- 
```
Get-SPServiceApplication
```

This example returns all service applications in the farm.

### ------------------EXAMPLE 2---------------------- 
```
Get-SPServiceApplication -Identity e2c2be70-6382-4ce7-8a44-ae7dadff5597
```

This example returns the service application that has the Identity "e2c2be70-6382-4ce7-8a44-ae7dadff5597".

### ------------------EXAMPLE 3---------------------- 
```
Get-SPServiceApplication -Name AccountingServiceApp
```

This example returns the service application that has the friendly name "AccountingServiceApp".

You can use either the Identity or the Name parameter but if you use both, the command will process the Identity first and ignore the Name.

## PARAMETERS

### -Identity
Specifies the GUID of the service application to get.

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 1
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
Specifies the friendly name of the new usage application.The type must be a valid name of a usage application; for example, UsageApplication1.

```yaml
Type: String
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

