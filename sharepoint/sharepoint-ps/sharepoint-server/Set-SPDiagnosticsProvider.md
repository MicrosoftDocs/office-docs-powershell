---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPDiagnosticsProvider
schema: 2.0.0
---

# Set-SPDiagnosticsProvider

## SYNOPSIS
Enables a diagnostics provider and updates its retention policy.


## SYNTAX

```
Set-SPDiagnosticsProvider [-Identity] <SPDiagnosticsProviderPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DaysRetained <Int32>] [-Enable] [-WhatIf]
 [-MaxTotalSizeInBytes <Int64>] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPDiagnosticsProvider` cmdlet enables a diagnostics provider and updates its retention policy.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1-----------------------
```
C:\PS>Get-SPDiagnosticsProvider job-diagnostics-event-log-provider | Set-SPDiagnosticsProvider -Enable:$false

C:\PS>Get-SPDiagnosticsProvider job-diagnostics-event-log-provider
```

This example disables the event log diagnostics provider.


### ------------------EXAMPLE 2-----------------------
```
C:\PS>Get-SPDiagnosticsProvider job-diagnostics-event-log-provider | Set-SPDiagnosticsProvider -Enable -DaysRetained 10

C:\PS>Get-SPDiagnosticsProvider job-diagnostics-event-log-provider
```

This example enables the event log diagnostics provider and changes its retention policy to 10 days.


## PARAMETERS

### -Identity
Specifies the diagnostics provider to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a diagnostic provider (for example, DiagnosticProv1); or an instance of a valid SPDiagnosticsProvider object.

```yaml
Type: SPDiagnosticsProviderPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DaysRetained
Specifies the number of days to retain the data collected by a diagnostics provider.

The type must be a valid integer value in the range of 1 to 14.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enable
Turns on or off the specified diagnostics provider.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxTotalSizeInBytes
{{Fill MaxTotalSizeInBytes Description}}

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
