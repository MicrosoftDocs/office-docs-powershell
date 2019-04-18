---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Start-SPDiagnosticsSession
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Start-SPDiagnosticsSession

## SYNOPSIS
Starts a diagnostic session to report diagnostic information to the usage database.


## SYNTAX

```
Start-SPDiagnosticsSession [-AssignmentCollection <SPAssignmentCollection>] [-CorrelationId <Guid>]
 [-Dashboard] [-TraceLevel <String>] [<CommonParameters>]
```

## DESCRIPTION
Use the `Start-SPDiagnosticsSession` cmdlet to report diagnostic information to the usage database.
After a diagnostic session starts, all Windows PowerShell for SharePoint cmdlets in Windows PowerShell scripts will use the same correlation to report diagnostic information.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### -------------EXAMPLE-------
```
$correlationId = [guid]::NewGuid()
Start-SPDiagnosticsSession -CorrelationId $correlationId -Dashboard:$true -TraceLevel Verbose
```

This example starts a diagnostic session for a specified correlation ID with the trace level of verbose.


## PARAMETERS

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

### -CorrelationId
Specifies the correlation ID to be used for the diagnostic session.

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

### -Dashboard
Specifies that diagnostics behave as if the developer dashboard were enabled.

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

### -TraceLevel
Specifies the Unified Logging Service (ULS) trace level override.

--High
--Medium
--Monitorable
--Unexpected
--Verbose
--VerboseEx
--None


```yaml
Type: String
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

[Stop-SPDiagnosticsSession](Stop-SPDiagnosticsSession.md)
