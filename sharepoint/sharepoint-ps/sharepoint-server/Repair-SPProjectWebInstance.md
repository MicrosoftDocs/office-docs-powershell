---
external help file: 
applicable: Project Server 2013, Project Server 2016
title: Repair-SPProjectWebInstance
schema: 2.0.0
---

# Repair-SPProjectWebInstance

## SYNOPSIS
Re-queues specific Project Server queue items that may have fallen out of the queue.


## SYNTAX

```
Repair-SPProjectWebInstance [-Identity] <ProjectInstancePipeBind> -RepairRule <ProjectSiteHealthRuleName>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The `Repair-SPProjectWebInstance` cmdlet re-queues specific Project Server queue items that may have fallen out of the queue.
This includes triggers that may have been missed and queue jobs that were enqueued on a server that was subsequently removed from the farm.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).


## EXAMPLES

### ----------------------EXAMPLE-----------------------
```
C:\PS>Repair-SPProjectWebInstance -Identity http://contoso-appsrv/PWA -RepairRule QueueMissingTriggers
```

This example enqueues any missing triggers for the Project Web App instance at http://contoso-appsrv/PWA.


## PARAMETERS

### -Identity
The identity of the instance of Project Web App.

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

### -RepairRule
Valid values: QueueMissingTriggers searches the Project Web App for any triggers that might have been missed; QueueStaleServerGroups re-queues any jobs that were picked up by a server that was subsequently removed from the farm.

```yaml
Type: ProjectSiteHealthRuleName
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016

Required: True
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

[Test-SPProjectWebInstance]()
