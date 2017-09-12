---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPPerformancePointServiceApplicationTrustedLocation

## SYNOPSIS
Returns a trusted location object and properties for a PerformancePoint Service application.

## SYNTAX

```
Get-SPPerformancePointServiceApplicationTrustedLocation [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Identity <SPPerformancePointMonitoringServiceApplicationTrustedLocationPipeBind>]
 [-ServiceApplication <SPPerformancePointMonitoringServiceApplicationPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-SPPerformancePointMonitoringServiceApplicationTrustedLocation cmdlet to read a trusted location object and properties.
If the Identity parameter is not specified, this cmdlet returns the list of all trusted locations and their properties for a PerformancePoint Service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------------------EXAMPLE---------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPPerformancePointServiceApplication PPSApp_01 | Get-SPPerformancePointServiceApplicationTrustedLocation -Identity $_.ID | select *
```

This example retrieves TrustedLocation information for the PPSApp_01 PerformancePoint Service application.

### ----------------------EXAMPLE---------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPPerformancePointServiceApplication PPSApp_01 | Get-SPPerformancePointServiceApplicationTrustedLocation -Identity $_.ID | select *
```

This example retrieves TrustedLocation information for the PPSApp_01 PerformancePoint Service application.

## PARAMETERS

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

### -Identity
Specifies the trusted location to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or an instance of a valid SPPerformancePointMonitoringServiceApplicationTrustedLocation object.

```yaml
Type: SPPerformancePointMonitoringServiceApplicationTrustedLocationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ServiceApplication
Specifies the PerformancePoint Service application that contains the trusted location.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a PerformancePoint Service application (for example, PerfPointApp1); or an instance of a valid SPPerformancePointMonitoringServiceApplication object.

```yaml
Type: SPPerformancePointMonitoringServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

