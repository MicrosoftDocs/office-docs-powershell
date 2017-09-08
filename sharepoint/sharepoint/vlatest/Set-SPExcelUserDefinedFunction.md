---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/7a7d5e1e-20d5-4736-b5b0-7d2e16374762(Office.15).aspx
schema: 2.0.0
---

# Set-SPExcelUserDefinedFunction

## SYNOPSIS
Sets properties of a user-defined function in Excel Services Application.

## SYNTAX

```
Set-SPExcelUserDefinedFunction [-Identity] <SPExcelUDFPipeBind>
 -ExcelServiceApplication <SPExcelServiceApplicationPipeBind> [-Assembly <String>]
 [-AssemblyLocation <AssemblyLocation>] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Description <String>] [-Enable] [-WhatIf]
```

## DESCRIPTION
The Set-SPExcelUserDefinedFunction cmdlet sets properties of a user-defined function assembly. 
Excel Services Application uses only user-defined functions that have an entry in the user-defined function list.
User-defined functions are managed code assemblies that can be called from an Excel Services Application workbook by using standard Excel Services Application formula syntax.
The assemblies can perform custom logic or other actions, such as refresh data.
Windows PowerShell cmdlets operate on the entries in the user-defined function list and do not operate on the assemblies.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1-------------- (SharePoint Server 2013)
```
C:\PS>Set-SPExcelUserDefinedFunction -ExcelServiceApplication "My Excel Service" -Identity SampleCompany.SampleApplication.SampleUdf -Description "This is the new description for the sample UDF"
```

This example changes the description of the user-defined function (UDF) to the UDF SampleCompany.SampleApplication.SampleUdf file for the Excel Services Application Web service application named My Excel Service.

### --------------EXAMPLE 2-------------- (SharePoint Server 2013)
```
C:\PS>Get-SPExcelServiceApplication "My Excel Service" | Set-SPExcelUserDefinedFunction -Identity SampleCompany.SampleApplication.SampleUdf -Enable: $false
```

This example disables the sample UDF SampleCompany.SampleApplication.SampleUdf file from the Excel Services Application named My Excel Service.

## PARAMETERS

### -Identity
Specifies the SPExcelUserDefinedFunction object to update.

The type must be a valid name of the code assembly; for example, SampleCompany.SampleApplication.SampleUdf; or an instance of a valid SPExcelUDF object.

```yaml
Type: SPExcelUDFPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
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

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Assembly
Specifies the strongly-typed name of the assembly.
The name must be unique in the list of user-defined functions, and cannot be more than 4096 alphanumeric characters long.

The type must be a string of alphanumeric characters; for example, SampleCompany.SampleApplication.SampleUdf, C:\UDFs\SampleUdf.dll, or \\\\MyNetworkServer\UDFs\SampleUdf.dll.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssemblyLocation
Specifies the location where the assembly is stored.

The type must be one of the following: GAC or LocalFile.

```yaml
Type: AssemblyLocation
Parameter Sets: (All)
Aliases: 

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies a display description for the user-defined function.
The name cannot be more than 4096 alphanumeric characters long.

The type must be a string of alphanumeric characters; for example, this is the user-defined function for consolidation reports.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enable
Activates the user-defined function for use with Excel Services Application.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

