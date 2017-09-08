---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/26d6e44c-a606-47a1-a3e0-c4919670f684(Office.15).aspx
schema: 2.0.0
---

# Get-SPExcelServiceApplication

## SYNOPSIS
Returns an SPExcelServiceApplication object.

## SYNTAX

```
Get-SPExcelServiceApplication [[-Identity] <SPExcelServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
The Get-SPExcelServiceApplication cmdlet retrieves an SPExcelServiceApplication object. 
If the object returned by this cmdlet is changed, the change affects all instances of the specified Excel Services Application Web service application in the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1-------------- (SharePoint Server 2013)
```
C:\PS>Get-SPExcelServiceApplication "MyExcelServices"
```

This example displays the Excel Services Application Web service application named MyExcelServices.

### --------------EXAMPLE 2-------------- (SharePoint Server 2013)
```
C:\PS>Get-SPExcelServiceApplication
```

This example displays every Excel Services Application Web service application that runs in the farm.

### --------------EXAMPLE 3-------------- (SharePoint Server 2013)
```
C:\PS>Get-SPExcelServiceApplication -Identity "MyExcelService" | format-list *
```

This example displays Excel Services Application Web service application named MyExcelService, and then displays all of its settings in a list format.

## PARAMETERS

### -Identity
Specifies the ExcelServiceApplication object to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an Excel Services Application Web service application in the farm (for example, MyExcelService1); or an instance of a valid SPExcelServiceApplication object.

```yaml
Type: SPExcelServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

