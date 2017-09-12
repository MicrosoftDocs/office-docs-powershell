---
applicable: SharePoint Server 2013
schema: 2.0.0
---

# Remove-SPExcelFileLocation

## SYNOPSIS
Removes a trusted file location from Excel Services Application.

## SYNTAX

```
Remove-SPExcelFileLocation [-Identity] <SPExcelFileLocationPipeBind>
 -ExcelServiceApplication <SPExcelServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Remove-SPExcelFileLocation cmdlet removes a location from the list of trusted file locations.
Excel Services Application loads only workbooks that are stored in a trusted file location.
Properties of trusted file locations control how workbooks can be used when loaded on Excel Services Application. 
Excel Services Application always enforces the properties defined by the trusted file location from which a workbook was loaded.
The properties used by the trusted file location are determined by comparing the file path for the workbook with the Address parameter of the trusted file location.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1-------------- (SharePoint Server 2013)
```
C:\PS>Remove-SPExcelFileLocation -ExcelServiceApplication "My Excel Service" -Identity http://portal/badTeamSite
```

This example removes the http://portal/badTeamSite from the list of trusted file locations for the Excel Services Application Web service application named My Excel Service.

### --------------EXAMPLE 2-------------- (SharePoint Server 2013)
```
C:\PS>Get-SPExcelServiceApplication | Get-SPExcelFileLocation | where {$_.Address -ne "http://"} | Remove-SPExcelFileLocation
```

This example removes all nondefault trusted file locations from every Excel Services Application Web service application in the farm.

## PARAMETERS

### -Identity
Specifies the FileLocation object to remove.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid string that identifies the file location, in the form http://myPortal/myTeam; a valid string that identifies the path, in the form C:\folder_name; or an instance of a valid SPExcelFileLocation object.

```yaml
Type: SPExcelFileLocationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ExcelServiceApplication
Specifies the Excel Services Application Web service application that contains the SPExcelFileLocation list object.

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
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
Applicable: SharePoint Server 2013

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

