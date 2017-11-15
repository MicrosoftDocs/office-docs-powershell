---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPUsageDefinition
schema: 2.0.0
---

# Get-SPUsageDefinition

## SYNOPSIS

Returns a usage definition object.



## SYNTAX

```
Get-SPUsageDefinition [[-Identity] <SPUsageDefinitionPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPUsageDefinition cmdlet reads a usage definition object.
If the Identity parameter is not specified, this cmdlet returns the collection of usage definitions in the farm.
A usage definition object defines a specific type of usage.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -----------------EXAMPLE----------------- 
```
C:\PS>Get-SPUsageDefinition -Identity "Page Requests"
```

This example returns the SPRequestUsage provider on the local farm.

## PARAMETERS

### -Identity
Specifies the usage definition object to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a usage definition (for example, SiteSubscriptionConfig1); or an instance of a valid SPUsageDefinition object.

```yaml
Type: SPUsageDefinitionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

