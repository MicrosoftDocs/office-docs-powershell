---
external help file: 
applicable: Project Server 2013, Project Server 2016, Project Server 2019
title: Test-SPProjectServiceApplication
schema: 2.0.0
---

# Test-SPProjectServiceApplication

## SYNOPSIS
This cmdlet runs a series of health checks against the Project Service Application.

## SYNTAX

```
Test-SPProjectServiceApplication [-Identity] <PsiServiceApplicationPipeBind>
 [[-Rule] <ProjectServiceApplicationHealthRuleName>] [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet runs a series of health checks against the Project Service Application.

## EXAMPLES

### ---------------EXAMPLE--------------
```
PS C:\>$sa = Get-SPServiceApplication | ?{$_.TypeName -eq 'Project Application Services'}
PS C:\>Test-SPProjectServiceApplication -Identity $sa
```

This example runs all health checks again the service application named "Project Service Application."

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### -Identity
The name of the Project Service Application to test against.

```yaml
Type: PsiServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Rule
Which rule to run against the service application.

Valid rules are:

All, CalcServiceWorkerState, QueueInFlightJobs, QueueServiceInternalState

Project Server 2013 has this additonal rule which is not available in Project Server 2016, Project Server 2019:

QueueSiteCheck

Project Server 2016, Project Server 2019 added this additional rule:

DatabasePermissions

```yaml
Type: ProjectServiceApplicationHealthRuleName
Parameter Sets: (All)
Aliases: 
Accepted values: All, QueueServiceInternalState, QueueInFlightJobs, CalcServiceWorkerState, DatabasePermissions
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Office.Project.Server.Cmdlet.PsiServiceApplicationPipeBind
Microsoft.Office.Project.Server.HealthRules.ProjectServiceApplicationHealthRuleName
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

