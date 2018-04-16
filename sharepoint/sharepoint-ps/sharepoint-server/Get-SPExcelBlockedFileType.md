---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013
title: Get-SPExcelBlockedFileType
schema: 2.0.0
---

# Get-SPExcelBlockedFileType

## SYNOPSIS
Returns a file type or list of file types that are prevented from loading.

## SYNTAX

```
Get-SPExcelBlockedFileType [[-Identity] <SPExcelBlockedFileTypePipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] -ExcelServiceApplication <SPExcelServiceApplicationPipeBind>
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPExcelBlockedFileType cmdlet reads a file type or a list of file types that cannot be loaded in Excel Services Application.  Excel Services Application does not load any files that correspond to a file type in this list.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [http://go.microsoft.com/fwlink/p/?LinkId=251831](http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### Example 1 
```
PS C:\>Get-SPExcelBlockedFileType -ExcelServiceApplication 'Excel Service Application'
```

This example retrieves all blocked file types for the service application named 'Excel Service Application'.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### -ExcelServiceApplication
Specifies the Excel Services Application Web service application that contains the SPBlockedExcelFileType list object.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an Excel
Services Application Web service application in the farm (for example, MyExcelService1); or an instance of a valid SPExcelServiceApplication object.

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

### -Identity
Specifies the Excel Services Application Web service application that contains the SPBlockedExcelFileType list object.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an Excel
Services Application Web service application in the farm (for example, MyExcelService1); or an instance of a valid SPExcelServiceApplication object.

```yaml
Type: SPExcelBlockedFileTypePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Office.Excel.Server.Cmdlet.SPExcelBlockedFileTypePipeBind
Microsoft.Office.Excel.Server.Cmdlet.SPExcelServiceApplicationPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

