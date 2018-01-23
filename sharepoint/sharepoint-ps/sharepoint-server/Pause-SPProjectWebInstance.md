---
external help file: 
applicable: Project Server 2013, Project Server 2016
title: Pause-SPProjectWebInstance
schema: 2.0.0
---

# Pause-SPProjectWebInstance

## SYNOPSIS
Switches the specified instance of Project Web App to read-only, preventing any changes from being made through the Project Server PSI or CSOM.


## SYNTAX

```
Pause-SPProjectWebInstance [-Identity] <ProjectInstancePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Switches the specified instance of Project Web App to read-only, preventing any changes from being made through the Project Server Interface (PSI) or Client Server Object Model (CSOM).
While in this state the database is not actually read-only and the Queue service can still write to the database, but it will not pick up any new jobs to process.
This cmdlet is used to allow the queue to empty out before an administrator switches the database to read-only.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).


## EXAMPLES

### ------------------EXAMPLE-----------------------
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}


## PARAMETERS

### -Identity
Specifies the instance of Project Web App to be switched to read-only mode.
It can be the unique id of the instance, the URL of the Project Web App site, the site collection object that contains the Project Web App site (an SPSite), or the Project Web App instance object itself (a PSSite).

```yaml
Type: ProjectInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016

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

[Resume-SPProjectWebInstance](Resume-SPProjectWebInstance.md)
