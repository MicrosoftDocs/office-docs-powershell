---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/split-spscaleoutdatabase
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Split-SPScaleOutDatabase
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Split-SPScaleOutDatabase

## SYNOPSIS
Moves a specified percentage of partitions from one scale-out database to another.


## SYNTAX

### NewDatabase
```
Split-SPScaleOutDatabase -NewDatabaseName <String> -SourceDatabase <SPDatabasePipeBind>
 -SourceServiceApplication <SPServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-MoveLowerHalf] [-NewDatabaseCredentials <PSCredential>] [-NewDatabaseFailoverServer <String>]
 [-NewDatabaseServer <String>] [-SourcePercentage <Int32>] [-WhatIf] [<CommonParameters>]
```

### ExistingDatabase
```
Split-SPScaleOutDatabase -SourceDatabase <SPDatabasePipeBind>
 -SourceServiceApplication <SPServiceApplicationPipeBind> -TargetDatabase <SPDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-MoveLowerHalf] [-SourcePercentage <Int32>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

Use the `Split-SPScaleOutDatabase` cmdlet to move a specified percentage of partitions from a source database to an existing target database or to a new database that you create with the specified parameters.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### ---------------EXAMPLE 1---------------
```
$databases = Get-SPScaleOutDatabase -ServiceApplication $serviceApplication
$database = $databases[0]
Split-SPScaleOutDatabase -NewDatabaseName Database2 -NewDatabaseServer MyDatabaseServer -SourceDatabase $database -SourceServiceApplication $serviceApplication -SourcePercentage 30
```

This example creates a new scale-out database named Database2 on the MyDatabaseServer database server  in the given service application.

The example also moves 30% of the data from the upper side of the data range in the first scale-out database of the given service application.

### ---------------EXAMPLE 2---------------

```
$ssa = Get-SPEnterpriseSearchServiceApplication

$newReportingDb = "Search_AnalyticsReporting2"
$reportingDb = Get-SPScaleOutDatabase -SearchApplication $ssa
Split-SPServerScaleOutDatabase -SourceServiceApplication $ssa -SourceDatabase $reportingDb -NewDatabaseName $newReportingDb -SourcePercentage 33

```
This example scales out the Search Analytics database, moving 33% of data to the new databases.

## PARAMETERS

### -NewDatabaseName
Specifies the name of a new scale-out database that you are creating.

```yaml
Type: String
Parameter Sets: NewDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceDatabase
The source scale-out database to move data from.

```yaml
Type: SPDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceServiceApplication
The service application in which the data move operation will take place.

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDatabase
The target scale-out database to move data to.

```yaml
Type: SPDatabasePipeBind
Parameter Sets: ExistingDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveLowerHalf
Specifies whether to move the lower or the upper side of the data range from the source scale-out database.
If this parameter is not specified, the default behavior is to move the upper side of the source scale-out database data range.

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

### -NewDatabaseCredentials
Specifies the credentials to use when creating the scale-out database.
These credentials will have owner rights on the newly created scale-out database.
If a value is not provided, the current user's credentials will be used by default.

```yaml
Type: PSCredential
Parameter Sets: NewDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewDatabaseFailoverServer
Specifies the failover server name of the new scale-out database to be created.
If a value is not provided, the new scale-out database does not have a failover server.

```yaml
Type: String
Parameter Sets: NewDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewDatabaseServer
Specifies the name of the server of the new scale-out database to be created.
If a value is not provided, the default database server is used.

```yaml
Type: String
Parameter Sets: NewDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourcePercentage
Specifies the percentage of data in the source scale-out database to move.
If a value is not provided, the default value of 50 percent is used.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

[Add-SPScaleOutDatabase](Add-SPScaleOutDatabase.md)

[Get-SPScaleOutDatabase](Get-SPScaleOutDatabase.md)

[Remove-SPScaleOutDatabase](Remove-SPScaleOutDatabase.md)
