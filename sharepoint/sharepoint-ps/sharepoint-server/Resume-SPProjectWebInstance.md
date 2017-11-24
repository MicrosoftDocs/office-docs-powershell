---
external help file: 
applicable: SharePoint Server 2016
title: Resume-SPProjectWebInstance
schema: 2.0.0
---

# Resume-SPProjectWebInstance

## SYNOPSIS
Switches the specified instance of Project Web App to read-write mode, allowing users to change data again.


## SYNTAX

```
Resume-SPProjectWebInstance [-Identity] <ProjectInstancePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Switches the specified instance of Project Web App to read-write mode, allowing users to change data again.
This cmdlet does not set the database itself to read-write.
The database must be set to read-write before you run this cmdlet, or this cmdlet will fail.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).


## EXAMPLES

### ----------------------EXAMPLE-----------------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}


## PARAMETERS

### -Identity
Specifies the instance of Project Web App to be switched to read-write mode.
It can be the unique id of the instance, the URL of the Project Web App site, the site collection object that contains the Project Web App site (an SPSite), or the Project Web App instance object itself (a PSSite).

```yaml
Type: ProjectInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 1
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

## OUTPUTS

## NOTES

## RELATED LINKS

[Pause-SPProjectWebInstance]()
