---
external help file: 
applicable: Project Server 2013, Project Server 2016
title: Set-SPProjectPCSSettings
schema: 2.0.0
---

# Set-SPProjectPCSSettings

## SYNOPSIS
Sets the settings for the Project Calculation Engine on Project Server.

## SYNTAX

```
Set-SPProjectPCSSettings [-ServiceApplication <PsiServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [-CachePersistence <Int32>] [-EditingSessionTimeout <Int32>]
 [-MaximumIdleWorkersCount <Int32>] [-MaximumProjectSize <Int32>] [-MaximumSessionsPerUser <Int32>]
 [-MaximumWorkersCount <Int32>] [-MinimumMemoryRequired <Int32>] [-RequestTimeLimits <Int32>]
 [-NetTcpPort <Int32>] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPProjectPCSSettings` cmdlet lets you configure the different settings that govern the operations of the Project Calculation Engine on Project Server.
The settings are per service application, which is identified by the Service Application parameter provided to this cmdlet.
The settings have maximum and minimum values that are enforced by Project Server.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).


## EXAMPLES

### ----------------------EXAMPLE-----------------------
```
C:\PS>Set-SPProjectPCSSettings -sa "Project Service Application" -MaximumSessionsPerUser 500
```

This example sets 500 as the maximum allowed Project Calculation Engine sessions that a user can open on the "Project Service Application" service application.


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

### -CachePersistence
The maximum length of time before the Project Calculation Engine can begin to remove temporary cache files of projects opened on the Project Server service application.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EditingSessionTimeout
The maximum length of time that a user can be idle in a Project Calculation Engine session before a timeout occurs.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumIdleWorkersCount
The maximum number of idle Project Calculation Engine sessions available at a given time.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumProjectSize
The maximum size of a project that can be opened by the Project Calculation Engine.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumSessionsPerUser
The maximum number of sessions that a user is allowed to open.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumWorkersCount
The maximum number of Project Calculation Engine sessions that can be created.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinimumMemoryRequired
The minimum memory required before launching a new Project Calculation Engine session.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestTimeLimits
The maximum allowable time for a request to the Project Calculation Engine to complete before the Project Calculation Engine session is terminated.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetTcpPort
The TCP port to use with the PCS service.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016

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
