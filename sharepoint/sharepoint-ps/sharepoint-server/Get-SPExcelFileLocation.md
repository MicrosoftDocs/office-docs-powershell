---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013
title: Get-SPExcelFileLocation
schema: 2.0.0
---

# Get-SPExcelFileLocation

## SYNOPSIS
Returns a trusted file location or a list of trusted file locations.

## SYNTAX

```
Get-SPExcelFileLocation [[-Identity] <SPExcelFileLocationPipeBind>]
 -ExcelServiceApplication <SPExcelServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPExcelFileLocation cmdlet gets locations from which Excel Services Application loads workbooks.
Excel Services Application loads only workbooks that are stored in a trusted file location.
Properties of trusted file locations control how workbooks can be used when loaded by Excel Services Application.
Excel Services Application always enforces the properties that are defined by the trusted file location from which a workbook was loaded.
The properties of the trusted file location to use are determined through comparison of the file path for the workbook with the address of the trusted file location.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1-------------- 
```
PS C:\>Get-SPExcelServiceApplication -Identity "MyExcelService" | Get-SPExcelFileLocation
```

This example displays a list of trusted file locations for the Excel Services Application Web service application named MyExcelService.

### --------------EXAMPLE 2-------------- 
```
PS C:\>Get-SPExcelServiceApplication -Identity "MyExcelService" | Get-SPExcelFileLocation | Format-list *
```

This example displays a list of trusted file locations for the Excel Services Application Web service application named MyExcelService, and then formats the list of properties into a table.

### --------------EXAMPLE 3-------------- 
```
PS C:\>Get-SPExcelServiceApplication -Identity "MyExcelService" | Get-SPExcelFileLocation | where {$_.ExternalDataAllowed -ne "None"}
```

This example displays a list of trusted file locations that allow external data connectivity for the Excel Services Application Web service application named MyExcelService.

## PARAMETERS

### -Identity
Specifies the SPExcelFileLocation object to return.
If the Identity parameter is not specified, the cmdlet returns all the file locations in the specified.
Excel Services Application Web service application.

The type must be a valid string that identifies the file location, in the form http://myPortal/myTeam; a valid string that identifies the path, in the form C:\folder_name; a valid UNC path to a trusted location in the form, \\\\computer_name\share; a valid GUID, in the form  12345678-90ab-cdef-1234-567890bcdefgh; or an instance of a valid SPExcelFileLocation object.

```yaml
Type: SPExcelFileLocationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ExcelServiceApplication
Specifies the  Excel Services Application Web service application that contains the SPExcelFileLocation list object.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an Excel Services Application Web service application in the farm (for example, MyExcelService1); or an instance of a valid SPExcelServiceApplication object.

```yaml
Type: SPExcelServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013

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
Applicable: SharePoint Server 2010, SharePoint Server 2013

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

