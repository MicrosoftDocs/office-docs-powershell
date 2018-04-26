---
external help file: 
applicable: SharePoint Server 2016
title: Get-ProjectServerLicense
schema: 2.0.0
---

# Get-ProjectServerLicense

## SYNOPSIS
Retrieves the status of the license for Project Server. If the current license is a trial, it will also indicate the expiry date and if it has expired.

## SYNTAX

```
Get-ProjectServerLicense [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Retrieves the status of the license for Project Server. If the current license is a trial, it will also indicate the expiry date and if it has expired.

## EXAMPLES

### Example 1 
```
PS C:\>Get-ProjectServerLicense
```

Gets the status of the Project Server license and when it was activated.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the
objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

