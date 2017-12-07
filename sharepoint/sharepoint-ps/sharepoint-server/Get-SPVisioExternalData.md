---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPVisioExternalData
schema: 2.0.0
---

# Get-SPVisioExternalData

## SYNOPSIS
Returns the settings for external data connections for a Visio Services application.

## SYNTAX

```
Get-SPVisioExternalData -VisioServiceApplication <SPVisioServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPVisioExternalData cmdlet reads the service settings for managing settings that are related to connecting to external data.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------------ 
```
C:\PS>Get-SPVisioExternalData -VisioServiceApplication "VGS1"
```

This example gets settings related to external data for a Visio Services application.

### ------------------EXAMPLE 2------------------------ 
```
C:\PS>Get-SPVisioServiceApplication -identity "VGS1" | Get-SPVisioExternalData
```

This example uses a pipe bind to get settings related to external data for a Visio Services application.

## PARAMETERS

### -VisioServiceApplication
Specifies the Visio Services application that contains the SPVisioExternalData object.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Visio Services application (for example, MyVisioService1); or an instance of a valid SPVisioServiceApplication object.

```yaml
Type: SPVisioServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
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

