---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPVisioServiceApplication
schema: 2.0.0
---

# Get-SPVisioServiceApplication

## SYNOPSIS
Returns properties of a Visio Services application or a collection of Visio Services applications.

## SYNTAX

```
Get-SPVisioServiceApplication [[-Identity] <SPVisioServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPVisioServiceApplication cmdlet retrieves the settings of the specified Visio Services application.
If the Identity parameter is not specified, this cmdlet returns the collection of Visio Services applications in the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -----------------------EXAMPLE 1------------------------- 
```
C:\PS>Get-SPVisioServiceApplication
```

This example returns a collection of all Visio Services applications in the farm.

### -----------------------EXAMPLE 2------------------------- 
```
C:\PS>Get-SPVisioServiceApplication "VGS1"
```

This example returns properties of the VGS1  Visio Services application.

## PARAMETERS

### -Identity
Specifies the Visio Services application to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Visio Services application (for example, MyVisioService1); or an instance of a valid SPVisioServiceApplication object.

```yaml
Type: SPVisioServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

