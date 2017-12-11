---
external help file: 
applicable: SharePoint Server 2016
title: Copy-SPSideBySideFiles
schema: 2.0.0
---

# Copy-SPSideBySideFiles

## SYNOPSIS
Copy side by side files.

## SYNTAX

```
Copy-SPSideBySideFiles [-AssignmentCollection <SPAssignmentCollection>] [-LogFile <String>]
 [<CommonParameters>]
```

## DESCRIPTION
In SharePoint Server 2016, zero down time in-place upgrade is available. If the PSConfig.exe file is used during an upgrade and copy SideBySide files fail, you can use the **Copy-SPSideBySideFiles** cmdlet to copy SideBySide files. If you use Microsoft PowerShell scripts instead of PSConfig.exe to perform an upgrade, please run the **Copy-SPSideBySideFiles** cmdlet to copy SideBySide files.

## EXAMPLES

### Example 1 
```
Copy-SPSideBySideFiles -LogFile "C:\CopySideBySideFiles.log"
```

This example copies SideBySide files and writes a log data of the copy process to the CopySideBySideFiles.log file.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

**NOTE**: When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -LogFile
Specifies the fully-qualified logfile name of SideBySide copy operation. If LogFile is not specified, the logfile will be placed in default SharePoint log files folder.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

