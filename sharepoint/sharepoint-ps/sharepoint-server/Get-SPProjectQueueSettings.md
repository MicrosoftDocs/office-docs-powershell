---
external help file: 
applicable: Project Server 2013, Project Server 2016, Project Server 2019
title: Get-SPProjectQueueSettings
schema: 2.0.0
---

# Get-SPProjectQueueSettings

## SYNOPSIS
Returns a list of all Project Server Queue settings and their current values for the specified Project Server Service Application.

## SYNTAX

```
Get-SPProjectQueueSettings [-ServiceApplication <PsiServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Returns a list of all Project Server Queue settings and their current values for a specific Project Server Service Application.
Settings returned include the following:

- MaxDegreeOfConcurrency
- MsgRetryInterval
- MsgRetryLimit
- SqlRetryInterval
- SqlRetryLimit
- SqlCommandTimeout
- CleanupSuccessAgeLimit
- CleanupNonSuccessAgeLimit
- PeriodicTasksInterval
- QueueTimeout
- MaxConnections

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### --------------------EXAMPLE--------------------- 
```
PS C:\>Get-SPProjectQueueSettings -ServiceApplication "Project Service Application"
```

This example retrieves the queue settings for the "Project Service Application" service application.

## PARAMETERS

### -ServiceApplication
Specifies the Project Server service application to target.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefg; a valid name of a Project Server Service Application (for example, ProjectServiceApp1); or an instance of a valid PsiServiceApplication object.

```yaml
Type: PsiServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: sa
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

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

