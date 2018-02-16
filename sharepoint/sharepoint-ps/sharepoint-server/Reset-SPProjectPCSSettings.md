---
external help file: 
applicable: Project Server 2013, Project Server 2016
title: Reset-SPProjectPCSSettings
schema: 2.0.0
---

# Reset-SPProjectPCSSettings

## SYNOPSIS
Resets the settings for the Project Calculation Engine on Project Server.


## SYNTAX

```
Reset-SPProjectPCSSettings [-ServiceApplication <PsiServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The `Reset-SPProjectPCSSettings` cmdlet lets you reset the settings that control the operations of the Project Calculation Engine on Project Server.
The cmdlet requires you to identify the Project Server service application.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).


## EXAMPLES

### ----------------------EXAMPLE-----------------------
```
C:\PS>Reset-SPProjectPCSSettings -sa "Project Service Application"
```

This cmdlet resets the settings for the Project Calculation Engine that is running on the "Project Service Application" service application.


## PARAMETERS

### -ServiceApplication
The Project Server service application for which the settings are to be read.

```yaml
Type: PsiServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: sa
Applicable: Project Server 2013, Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
Applicable: Project Server 2013, Project Server 2016

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
