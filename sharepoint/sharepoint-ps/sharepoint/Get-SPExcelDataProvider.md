---
external help file: 
applicable: SharePoint Server 2013
schema: 2.0.0
---

# Get-SPExcelDataProvider

## SYNOPSIS
Returns a safe data provider or a list of safe data providers.

## SYNTAX

```
Get-SPExcelDataProvider -ExcelServiceApplication <SPExcelServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPExcelDataProvider cmdlet reads a safe data provider or a list of safe data providers for an Excel Services Application.
Excel Services Application refreshes external data connections only if the data provider for the connection is on the list of safe data providers.
Excel Services Application includes a set of common data providers on this list.
Therefore, using cmdlets to modify safe data providers is typically done only in custom data connection scenarios.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------------EXAMPLE--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPExcelServiceApplication -Identity "ExcelServices" | Get-SPExcelDataProvider | where {$_.ProviderID -eq "SQLOLEDB"}
```

This example displays the data provider with the provider identifier (ID) SQLOLEDB from the list of data providers that is on the MyExcelService application.
To select a specific provider from the list of safe providers, you must pipe a where clause that can filter the list of providers.

### --------------EXAMPLE-------------- (SharePoint Server 2013)
```
C:\PS>Get-SPExcelDataProvider -ExcelServiceApplication "Excel Services" | format-table
```

This example displays a list of safe data providers for the specific Excel Services Application Web service application, and then formats the results of the data providers in a table.

## PARAMETERS

### -ExcelServiceApplication
Specifies the Excel Services Application Web service application that contains the SPExcelDataProvider list object.

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

