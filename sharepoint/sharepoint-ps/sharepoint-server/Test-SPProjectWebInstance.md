---
external help file: microsoft.office.project.server.stsadmcommandhandler.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/test-spprojectwebinstance
applicable: Project Server 2013, Project Server 2016, Project Server 2019
title: Test-SPProjectWebInstance
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Test-SPProjectWebInstance

## SYNOPSIS
Runs a suite of tests on an existing Project Web Instance.

## SYNTAX

```
Test-SPProjectWebInstance [-Identity] <ProjectInstancePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Rule <ProjectSiteHealthRuleName>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet runs a suite of tests on an existing Project Web Instance.
The tests are designed to verify the health status of the Project Web Instance.
The cmdlet returns the set of tests as a list of Microsoft.Office.Project.Server.HealthRules objects associated with a status of type SPSiteHealthStatusType (Passed, FailedWarning, FailedError).

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at https://go.microsoft.com/fwlink/p/?LinkId=251833 (https://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### ----------------------EXAMPLE-----------------------
```
Get-SPProjectWebInstance | Test-SPProjectWebInstance
```

This example runs a suite of tests on all Project Web Instances in the SharePoint Server farm.

## PARAMETERS

### -Identity
Specifies a Project Web Instance.

```yaml
Type: ProjectInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

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
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Rule
{{Fill Rule Description}}

```yaml
Type: ProjectSiteHealthRuleName
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

