---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/60a5a81a-4c8a-47d6-8226-81b1e9d2fab9(Office.15).aspx
schema: 2.0.0
---

# New-SPEnterpriseSearchTopology

## SYNOPSIS
Creates a new search topology in the given search service application.

## SYNTAX

```
New-SPEnterpriseSearchTopology -SearchApplication <SearchServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Clone] [-Confirm]
 [-SearchTopology <SearchTopologyPipeBind>] [-WhatIf]
```

## DESCRIPTION
This cmdlet creates a new, inactive search topology in the given search service application.
If the Clone switch is used, a cloned topology is created.
Otherwise, an empty topology is created.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication

New-SPEnterpriseSearchTopology -SearchApplication $ssa
```

This example creates a new, empty search topology in the search service application referenced by $ssa.

### ------------------EXAMPLE 1------------------ (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
New-SPEnterpriseSearchTopology -SearchApplication $ssa
```

This example creates a new, empty search topology in the search service application referenced by $ssa.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication


New-SPEnterpriseSearchTopology -SearchApplication $ssa -Clone -SearchTopology $topo
```

This example creates a new search topology in the search service application referenced by $ssa by cloning the existing topology referenced by $topo.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
New-SPEnterpriseSearchTopology -SearchApplication $ssa -Clone -SearchTopology $topo
```

This example creates a new search topology in the search service application referenced by $ssa by cloning the existing topology referenced by $topo.

## PARAMETERS

### -SearchApplication
Specifies the search application to which the search topology will belong.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Clone
@{Text=}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Specifies that the new search topology is to be created by cloning an existing search topology.

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

### -SearchTopology
Specifies the existing search topology of which the new topology will be a clone.

```yaml
Type: SearchTopologyPipeBind
Parameter Sets: (All)
Aliases: 

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

[Online Version](http://technet.microsoft.com/EN-US/library/60a5a81a-4c8a-47d6-8226-81b1e9d2fab9(Office.15).aspx)

[Get-SPEnterpriseSearchTopology]()

[Set-SPEnterpriseSearchTopology]()

[Remove-SPEnterpriseSearchTopology]()

