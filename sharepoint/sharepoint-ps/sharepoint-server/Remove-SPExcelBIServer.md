---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013
title: Remove-SPExcelBIServer
schema: 2.0.0
---

# Remove-SPExcelBIServer

## SYNOPSIS

Removes an instance of Analysis Services.


## SYNTAX

```
Remove-SPExcelBIServer [-Identity] <SPExcelBIServerPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] -ExcelServiceApplication <SPExcelServiceApplicationPipeBind> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

Use the Remove-SPExcelBIServer cmdlet to remove an instance of Analysis Services from the Allow List of BI servers to be used with
Excel Services.





## EXAMPLES

### -----------------------EXAMPLE-----------------------------
```
PS C:\>Remove-SPExcelBIServer -ExcelServiceApplication "MyExcel"

```

This example removes the instance of the anaylsis services that uses the Excel Service Application named, "MyExcel".



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

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -ExcelServiceApplication
Specifies the Excel Services Application Web service application that contains the SPExcelFileLocation list object.The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an Excel Services Application Web service application in the farm (for example, MyExcelService1); or an instance of a valid SPExcelServiceApplication object.
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
Specifies the ExcelServiceApplication identity.

```yaml
Type: SPExcelBIServerPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### Microsoft.Office.Excel.Server.Cmdlet.SPExcelBIServerPipeBind
Microsoft.Office.Excel.Server.Cmdlet.SPExcelServiceApplicationPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
