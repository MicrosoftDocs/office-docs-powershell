---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spscaleoutdatabaselogentry
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPScaleOutDatabaseLogEntry
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Get-SPScaleOutDatabaseLogEntry

## SYNOPSIS

Queries a scale-out database for scale-out logs.



## SYNTAX

```
Get-SPScaleOutDatabaseLogEntry -Count <Int32> -Database <SPDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-CorrelationId <Guid>]
 [-MajorAction <SPScaleOutDatabaseMajorAction>] [-RangeLimitPoint <Byte[]>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-SPScaleOutDatabaseLogEntry cmdlet to query a scale-out database for scale-out logs that include specified criteria.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### -------------EXAMPLE----------- 
```
C:\PS>$databases = Get-SPScaleOutDatabase -ServiceApplication $serviceApplication

C:\PS>$database = $databases[0]

Get-SPScaleOutDatabaseLogEntry -Database  $database -Count 10 -MajorAction DataMove
```

This example gets the 10 most recent scale-out log entries from the first scale-out database of the given service application.

## PARAMETERS

### -Count
Specifies the number of scale-out log entries to return.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
Specifies the scale-out database from which to return the scale-out logs

```yaml
Type: SPDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
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

### -CorrelationId
Specifies the correlation id of the scale-out logs to be returned.
Correlation id of the log entries that belong to the same major action are the same.

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

### -MajorAction
Specifies the major action of the scale-out log entries to be returned.
The values are the following:

DataMove -A data migration operation between two scale-out databases.

Recovery -Any data recovery operation that is performed to recover from a failure.

```yaml
Type: SPScaleOutDatabaseMajorAction
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RangeLimitPoint

Specifies the range limit point of the scale-out log entries to be returned.

The range limit point has different meaning depending on the action that records the log entry.

--If the action is to create, change or delete a data subrange, the range limit point represents the following:
--If the action targets a lower data subrange, the range limit point represents the start point of that lower data subrange.
--If the action targets an upper data subrange, the range limit point represents the end point of that upper data subrange.
--If the action is to extend a data range, the range limit point represents the following:
--If the action extends the start point of the data range, range limit point represents the new start point of the data range.
--If the action extends the end point of the data range, range limit point represents the new end point of the data range.



```yaml
Type: Byte[]
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

