---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013
title: Set-SPExcelDataConnectionLibrary
schema: 2.0.0
---

# Set-SPExcelDataConnectionLibrary

## SYNOPSIS
Sets properties of a data connection library for Excel Services Application.


## SYNTAX

```
Set-SPExcelDataConnectionLibrary [-Identity] <SPExcelDCLPipeBind>
 -ExcelServiceApplication <SPExcelServiceApplicationPipeBind> [-Address <String>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Description <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPExcelDataConnectionLibrary` cmdlet sets the properties of a library from which Excel Services Application loads data connection files.
Excel Services Application loads data connection files only if they are stored in a data connection library that is on the list of trusted data connection libraries.
Data connection libraries constitute a kind of list that contains data connection files.
These files contain everything that Excel Services Application and the Excel client require to connect to an external data source.
Data connection libraries enable you to reuse and share data connections.
Data connections can be loaded by using information from the workbook file.
However, using a data connection library to load data connections provides an additional layer for data connections so that they can be managed separately from workbooks.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------EXAMPLE 1--------------
```
C:\PS>Get-SPExcelServiceApplication -Identity "MyExcelService" | Get-SPExcelDataConnectionLibrary | where {$_.address -eq "http://portal/site/salesDCL" } | Set-SPExcelDataConnectionLibrary -Description "This is the DCL where all the connections to the sales data are stored
```

This example sets a display description for the entry http://portal/site/salesDCL in the list of trusted data connection libraries (DCLs) that is on the Excel Services Application Web service application named MyExcelService.


### --------------EXAMPLE 2--------------
```
C:\PS>Get-SPExcelServiceApplication -Identity "MyExcelService" | Get-SPExcelDataConnectionLibrary | where {$_.address -eq "http://portal/site/salesDCL" } | Set-SPExcelDataConnectionLibrary -Address "http://portal/site/salesDCL
```

This example updates the address of the data connection library for the entry http://portal/test/site/salesDCL to http://portal/site/salesDCL in the list of trusted data connection libraries, which is on the Excel Services Application Web service application named MyExcelService.


## PARAMETERS

### -Identity
Specifies the DataConnectionLibrary object to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a data connection library (for example, DataConnectionLib1); a valid URL, in the form http://server_name; or an instance of a valid SPExcelDCL object.

```yaml
Type: SPExcelDCLPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ExcelServiceApplication
Specifies the Excel Services Application Web service application that contains SPExcelDataConnectionLibrary list object.

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

### -Address
Specifies the address of the data connection library.
The address must be unique in the list of trusted data connection libraries.

The type must be a valid URL, in the form http://server_name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies a friendly description for the data connection library.

The type must a valid a string; for example, "This is the data connection library where all the connections to the sales data are stored".

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
