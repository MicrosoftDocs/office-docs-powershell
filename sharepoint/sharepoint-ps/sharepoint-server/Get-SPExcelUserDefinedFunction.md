---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013
title: Get-SPExcelUserDefinedFunction
schema: 2.0.0
---

# Get-SPExcelUserDefinedFunction

## SYNOPSIS
Returns a user-defined function or a collection of user-defined functions.

## SYNTAX

```
Get-SPExcelUserDefinedFunction [[-Identity] <SPExcelUDFPipeBind>]
 -ExcelServiceApplication <SPExcelServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPExcelUserDefinedFunction cmdlet reads a user-defined function and its properties, or returns the collection of user-defined functions for an Excel Services Application Web service application. 
Excel Services Application uses only user-defined functions that are in the list of user-defined functions.
User-defined functions are managed code assemblies that can be called from an Excel Services Application workbook by using standard Excel Services Application formula syntax.
The assemblies can perform custom logic or other actions, such as refreshing data.
Windows PowerShell cmdlets operate on the entries in the user-defined function list, but do not operate on the assemblies.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1-------------- 
```
C:\PS>Get-SPExcelServiceApplication -Identity "MyExcelService" | Get-SPExcelUserDefinedFunction -Identity SampleCompany.SampleApplication.SampleUdf
```

This example displays the user-defined function named SampleCompany.SampleApplication.SampleUdf from the list of user-defined functions that is in the Excel Services Application Web service application named MyExcelService.

### --------------EXAMPLE 2-------------- 
```
C:\PS>Get-SPExcelServiceApplication | Get-SPExcelUserDefinedFunction | format-list
```

This example displays every user-defined function for every Excel Services Application Web service application in the farm, and then displays the results in a list.

## PARAMETERS

### -Identity
Specifies the UserDefinedFunction object to get.
If the Identity parameter is not specified, the cmdlet returns all of the functions in the user defined functions list.

The type must be a valid name of the code assembly (for example, SampleCompany.SampleApplication.SampleUdf); or an instance of a valid SPExcelUDF object.

```yaml
Type: SPExcelUDFPipeBind
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
Specifies the Excel Services Application Web service application that contains the SPExcelUserDefinedFunction list object.

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

