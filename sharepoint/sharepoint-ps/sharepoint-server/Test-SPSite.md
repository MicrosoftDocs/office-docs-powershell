---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/test-spsite
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Test-SPSite
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Test-SPSite

## SYNOPSIS
Activates the RunTests method against a referenced SPSite object.


## SYNTAX

```
Test-SPSite [-Identity] <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-RuleId <Guid>]
 [-RunAlways] [<CommonParameters>]
```

## DESCRIPTION
The `Test-SPSite` cmdlet runs one or all site collection health checks on the site collection and its contents.
This cmdlet reports the rules which were run and provides a summary of the results.

To run tests in repair mode, use the `Repair-SPSite` cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### --------------EXAMPLE 1------------
```
Test-SPSite https://<site name>/sites/testsite
```

This example runs all the site collection health checks on the https://\<site name\>/sites/testsite site collection.

### --------------EXAMPLE 2------------
```
Test-SPSite https://<site name</sites/testsite -Rule "ee967197-ccbe-4c00-88e4-e6fab81145e1"
```

This example runs just the "Missing Galleries Check" on the https://\<site name\>/sites/testsite site collection.

## PARAMETERS

### -Identity
Specifies the URL or GUID of the site to run a test.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -RuleId
Specifies one specific site health rule to run.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RunAlways
Forces a rule to run even if a health check was run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Repair-SPSite](Repair-SPSite.md)
