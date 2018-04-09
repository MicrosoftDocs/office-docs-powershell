---
external help file: 
applicable: SharePoint Server 2016
title: Enable-ProjectServerLicense
schema: 2.0.0
---

# Enable-ProjectServerLicense

## SYNOPSIS
Enables all Project Server functionality in the farm. The cmdlet depends on the farm having a valid SharePoint Server license (trials are allowed). Any existing Project Web App sites will become read/write. A Project Server Trial key will only be accepted if the farm has never had a Project Server trial key previously.

## SYNTAX

```
Enable-ProjectServerLicense [-Key] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
Enables Project Server functionality on the farm.

## EXAMPLES

### Example 1 
```
PS C:\>Enable-ProjectServerLicense -Key XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
```

This example enables all Project Server functionality in the farm. The type of license being enabled (full or trial) depends on the key that is passed in.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

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

### -Key
License key (trial or full).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 0
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

