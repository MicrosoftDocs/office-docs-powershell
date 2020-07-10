---
external help file: Microsoft.Office.Server.Search.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/restore-spenterprisesearchserviceapplicationindex
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Restore-SPEnterpriseSearchServiceApplicationIndex
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer: 
---

# Restore-SPEnterpriseSearchServiceApplicationIndex

## SYNOPSIS
Restores the search index from the specified backup files.


## SYNTAX

### Restore
```
Restore-SPEnterpriseSearchServiceApplicationIndex [-SearchApplication] <SearchServiceApplication>
 [-BackupFolder] <String> [-AllReplicas] [-AllowMove] [[-Retries] <Int32>] [[-RetryPauseSeconds] <Int32>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

### RestoreProgress
```
Restore-SPEnterpriseSearchServiceApplicationIndex [-SearchApplication] <SearchServiceApplication>
 [-Handle] <String> [[-Retries] <Int32>] [[-RetryPauseSeconds] <Int32>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

This cmdlet will clear the complete search index for a specified search service application and replace it with the search index from the specified backup files.

This cmdlet supports parameter sets.
The first set of parameters is for Application Configuration Attach mode and the second set of parameters is for Search Application Attach mode.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### ------------------EXAMPLE 1------------------
```
$ssa = Get-SPEnterpriseSearchServiceApplication
$handle = Restore-SPEnterpriseSearchServiceApplicationIndex -SearchApplication $ssa -BackupFolder "\\sample\backup\spbr0000"
Restore-SPEnterpriseSearchServiceApplicationIndex -SearchApplication $ssa -Handle $handle
```

This example starts a restore of the search index in the default search service application from a backup located at \\\\sample\backup\spbr0000.


### ------------------EXAMPLE 2------------------
```
$handle = Restore-SPEnterpriseSearchServiceApplicationIndex -SearchApplication $ssa -BackupFolder "\\sample\backup\spbr0000"
Restore-SPEnterpriseSearchServiceApplicationIndex -SearchApplication "Search Service Application" -Handle $handle
```

This example checks the status of the running job to restore of the search index in the search service application Search Service Application with the handle $handle .


## PARAMETERS

### -SearchApplication
Specifies the search service application that contains the index files that should be restored.

```yaml
Type: SearchServiceApplication
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackupFolder
Specifies the full file path of the backup files.

```yaml
Type: String
Parameter Sets: Restore
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Handle
A handle returned from an initial call using Parameter set 1.

```yaml
Type: String
Parameter Sets: RestoreProgress
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllReplicas
Specifies a switch to restore all replicas, not just the primary.

```yaml
Type: SwitchParameter
Parameter Sets: Restore
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowMove
Specifies a switch to move instead of copying files when restoring. 
Moving may be faster than copying.


```yaml
Type: SwitchParameter
Parameter Sets: Restore
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Retries
Specifies the number of times to retry if temporary failure occurs.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetryPauseSeconds
Seconds to pause between retries if temporary failure occurs.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 6
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
