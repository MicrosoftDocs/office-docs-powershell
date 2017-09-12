---
applicable: SharePoint Server 2013
schema: 2.0.0
---

# Get-SPExcelDataConnectionLibrary

## SYNOPSIS
Returns a trusted data connection library or a list of trusted data connection libraries.

## SYNTAX

```
Get-SPExcelDataConnectionLibrary [[-Identity] <SPExcelDCLPipeBind>]
 -ExcelServiceApplication <SPExcelServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPExcelDataConnectionLibrary cmdlet gets a library of data connection files that Excel Services Application and the Excel client use to connect to an external data source. 
Excel Services Application loads data connection files only if they are stored in a data connection library that is in the list of trusted data connection libraries.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1-------------- (SharePoint Server 2013)
```
C:\PS>Get-SPExcelserviceapplication -Identity "MyExcelService" | Get-SPExcelDataConnectionLibrary
```

This example displays all the data connection libraries that connection files can be loaded by an Excel Services Application Web service application.

### --------------EXAMPLE 2-------------- (SharePoint Server 2013)
```
C:\PS>Get-SPExcelserviceapplication -identity "MyExcelService" | Get-SPExcelDataConnectionLibrary | where {$_.Description.Contains("Sales Cube")}
```

This example displays all the data connection libraries that have descriptions containing the words Sales Cube from the specified Excel Services Application Web service application.

## PARAMETERS

### -Identity
Specifies the DataConnectionLibrary object to return.
If the identity parameter is not specified, this cmdlet returns all the data connection libraries that have connection files that can be loaded by Excel Services Application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a data connection library (for example, DataConnectionLib1); a valid URL, in the form http://server_name; or an instance of a valid SPExcelDCL object.

```yaml
Type: SPExcelDCLPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ExcelServiceApplication
Specifies the Excel Services Application Web service application that contains the SPExcelDataConnectionLibrary list object.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an Excel Services Application Web service application in the farm (for example, MyExcelService1); or an instance of a valid SPExcelServiceApplication object.

```yaml
Type: SPExcelServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

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
Applicable: SharePoint Server 2013

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

