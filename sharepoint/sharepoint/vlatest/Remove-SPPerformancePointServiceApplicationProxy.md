---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Remove-SPPerformancePointServiceApplicationProxy

## SYNOPSIS
Deletes the proxy for a PerformancePoint Service application.

## SYNTAX

```
Remove-SPPerformancePointServiceApplicationProxy
 [-Identity] <SPPerformancePointMonitoringServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
The Remove-SPPerformancePointServiceApplicationProxy cmdlet deletes the proxy for a PerformancePoint Service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE-------------------- (SharePoint Server 2013)
```
C:\PS>Remove-SPPerformancePointServiceApplicationProxy -Identity PPS_Application_Proxy_01
```

This example removes the PPS_Application_Proxy_01 application proxy from its associated PerformancePoint Service application.

### ------------------EXAMPLE-------------------- (SharePoint Server 2016)
```
C:\PS>Remove-SPPerformancePointServiceApplicationProxy -Identity PPS_Application_Proxy_01
```

This example removes the PPS_Application_Proxy_01 application proxy from its associated PerformancePoint Service application.

## PARAMETERS

### -Identity
Specifies the PerformancePoint Service application proxy to delete.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a PerformancePoint Service application proxy (for example, PerfPointAppProxy1); or an instance of a valid SPPerformancePointMonitoringServiceApplicationProxy object.

```yaml
Type: SPPerformancePointMonitoringServiceApplicationProxyPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

Required: False
Position: Named
Default value: False
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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

