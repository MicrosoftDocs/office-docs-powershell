---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPPerformancePointServiceApplicationProxy

## SYNOPSIS
Creates a proxy for a PerformancePoint Service application.

## SYNTAX

```
New-SPPerformancePointServiceApplicationProxy [-Name] <String>
 -ServiceApplication <SPPerformancePointMonitoringServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Default] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The New-SPPerformancePointServiceApplicationProxy cmdlet creates a proxy for a PerformancePoint Service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------EXAMPLE-------------------- (SharePoint Server 2013)
```
C:\PS>New-SPPerformancePointServiceApplicationProxy -Name PPS_Application_Proxy_01 -ServiceApplication PPS_Application_01 -Default
```

This example creates a new PerformancePoint Service application proxy named PPS_Application_Proxy_01, associated with the service application named PPS_Application_01 and is added to the Default proxy group.

### --------------------EXAMPLE-------------------- (SharePoint Server 2016)
```
C:\PS>New-SPPerformancePointServiceApplicationProxy -Name PPS_Application_Proxy_01 -ServiceApplication PPS_Application_01 -Default
```

This example creates a new PerformancePoint Service application proxy named PPS_Application_Proxy_01, associated with the service application named PPS_Application_01 and is added to the Default proxy group.

## PARAMETERS

### -Name
Specifies the name of the PerformancePoint Service application proxy to create.

The type must be a valid name of a PerformancePoint Service application proxy; for example, PerfPointAppProxy1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ServiceApplication
Specifies the PerformancePoint Service application that is associated with the new service application proxy.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a PerformancePoint service application (for example, PerfPointApp1); or an instance of a valid SPPerformancePointMonitoringServiceApplication object.

```yaml
Type: SPPerformancePointMonitoringServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Default
Specifies that the new application proxy will be added to the default service application proxy group.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

