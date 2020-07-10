---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/set-spusageservice
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPUsageService
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Set-SPUsageService

## SYNOPSIS
Updates the properties of a usage service.


## SYNTAX

```
Set-SPUsageService [[-Identity] <SPUsageServicePipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-LoggingEnabled <Boolean>] [-UsageLogCutTime <UInt32>] [-UsageLogLocation <String>]
 [-UsageLogMaxFileSizeKB <UInt32>] [-UsageLogMaxSpaceGB <UInt32>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPUsageService` cmdlet updates the properties of a usage service.
If the Identity parameter is not specified, the cmdlet applies the changes to the local usage service.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### --------------------EXAMPLE-----------------
```
Set-SPUsageService -LoggingEnabled $false

Set-SPUsageService -UsageLogLocation "D:\\testusagelogdir"


Set-SPUsageService -UsageLogCutTime 5
```

The examples disables usage logging, changes the directory where usage files are stored and creates a new usage log file every 5 minutes.


## PARAMETERS

### -Identity
Specifies the usage service to update.

The type must be in one of the following forms:

--A valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh
--A valid name of a usage service (for example, UsageService1)
--An instance of a valid SPUsageService object.

```yaml
Type: SPUsageServicePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoggingEnabled
Specifies that usage data is logged to usage files.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UsageLogCutTime
Specifies the time, in minutes, of usage data that is collected per usage log file.
The default time is 5 minutes.

The value must be an integer in the range of 1 to 1440.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -UsageLogLocation
Specifies the path on every computer in the farm where usage log files are created.

The value must be a valid local path in the following form:

- C:\folder_name

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -UsageLogMaxFileSizeKB
Specifies the maximum size of a single usage file that is applied to all the usage providers.

The minimum value is 512 kilobytes (KB) and the maximum value is 65536 KB.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -UsageLogMaxSpaceGB
The maximum amount of space (measured in gigabytes) allowed for usage logs.
Althought the parameter is present in later SharePoint Server versions, it is applicable only to SharePoint Server 2010.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
