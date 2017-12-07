---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013
title: New-SPExcelUserDefinedFunction
schema: 2.0.0
---

# New-SPExcelUserDefinedFunction

## SYNOPSIS
Adds a new user-defined function to Excel Services Application.


## SYNTAX

```
New-SPExcelUserDefinedFunction -Assembly <String> -ExcelServiceApplication <SPExcelServiceApplicationPipeBind>
 [-AssemblyLocation <AssemblyLocation>] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Description <String>] [-Enable] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `New-SPExcelUserDefinedFunction` cmdlet adds a user-defined function to an Excel Services Application Web service application. 
Excel Services Application uses only user-defined functions that have an entry in the list of user-defined functions.
User-defined functions are managed code assemblies that can be called from an Excel Services Application workbook by using standard  Excel Services Application formula syntax.
The assemblies can perform custom logic or other actions, such as refresh data.
Windows PowerShell cmdlets operate on the entries that are in the list of user-defined functions, but they do not operate on the assemblies.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>Get-SPExcelServiceApplication | New-SPExcelUserDefinedFunction -Assembly "SampleCompany.SampleApplication.SampleUdf" -AssemblyLocation GAC
```

This example adds the SampleComany.SampleApplication.SampleUdf file to every Excel Services Application Web service application in the farm.

The user-defined function assembly is deployed to the global assembly cache (GAC).


## PARAMETERS

### -Assembly
Specifies the strongly typed name of the assembly.
The name must be unique in the list of user-defined functions.
The name can be a maximum of 4096 alphanumeric characters.

The type must be a string of alphanumeric characters; for example:

-- SampleCompany.SampleApplication.SampleUdf
-- C:\UDFs\SampleUdf.dll
-- \\\\MyNetworkServer\UDFs\SampleUdf.dll

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelServiceApplication
Specifies the Excel Services Application Web service application that contains the list of user-defined functions.

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

### -AssemblyLocation
Specifies the location where the assembly is stored.
The default value is GAC.

The type must be one of the following: GAC or LocalFile.

```yaml
Type: AssemblyLocation
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
Specifies a friendly description for the user-defined function.
The name can be a maximum of 4096 alphanumeric characters.
The default value is an empty string.

The type must be a valid string of alphanumeric characters; for example, this is the user-defined function for consolidation reports.

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

### -Enable
Activates the user-defined function for use with Excel Services Application.
The default value is True.

```yaml
Type: SwitchParameter
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
