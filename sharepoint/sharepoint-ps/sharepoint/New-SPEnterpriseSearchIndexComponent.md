---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPEnterpriseSearchIndexComponent

## SYNOPSIS
Creates a new index component for the given topology and search service instance.

## SYNTAX

```
New-SPEnterpriseSearchIndexComponent -SearchServiceInstance <SearchServiceInstancePipeBind>
 -SearchTopology <SearchTopologyPipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-IndexPartition <UInt32>] [-RootDirectory <String>] [-SearchApplication <SearchServiceApplicationPipeBind>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Creates a new index component and adds it to an inactive search topology in a specific search service instance.
The change is effectuated when the search topology is enabled.

## EXAMPLES

### ------------------EXAMPLE----------------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication

New-SPEnterpriseSearchIndexComponent -SearchTopology 06e6651d-ecdd-4105-bb65-6a83b6155525 -SearchServiceInstance 56e6651d-ecdd-4105-bb65-6a83b6155525 -SearchApplication $ssa -IndexPartition 1 -RootDirectory E:\Index
```

This example adds a new search index component to the search topology with identity 06e6651d-ecdd-4105-bb65-6a83b6155525 in the search service instance with identity 56e6651d-ecdd-4105-bb65-6a83b6155525 in the default search service application referenced by $ssa, with index partition 1 and root directory E:\Index.

### ------------------EXAMPLE----------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
New-SPEnterpriseSearchIndexComponent -SearchTopology 06e6651d-ecdd-4105-bb65-6a83b6155525 -SearchServiceInstance 56e6651d-ecdd-4105-bb65-6a83b6155525 -SearchApplication $ssa -IndexPartition 1 -RootDirectory E:\Index
```

This example adds a new search index component to the search topology with identity 06e6651d-ecdd-4105-bb65-6a83b6155525 in the search service instance with identity 56e6651d-ecdd-4105-bb65-6a83b6155525 in the default search service application referenced by $ssa, with index partition 1 and root directory E:\Index.

## PARAMETERS

### -SearchServiceInstance
**Below Content Applies To:**SharePoint Server 2013

Specifies the search service instance that will host the new index component.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh, a valid name of a search topology server, or an instance of a valid SearchServiceInstance object.



**Below Content Applies To:**SharePoint Server 2016

Specifies the search service instance that will host the new index component.



```yaml
Type: SearchServiceInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchTopology
Specifies the search topology where the new index component should be added.

```yaml
Type: SearchTopologyPipeBind
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

### -IndexPartition
Specifies the index partition number to assign to the new search index component.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RootDirectory
**Below Content Applies To:**SharePoint Server 2013

Specifies the root directory that will hold the index location for the new search index component.
This is needed if you want to isolate the index on dedicated discs in order to avoid I/O contention with other parts of the system, other system sharing the same disks, or because you do not want to risk the index filling up the OS disk (generally C: )

If you specify the root directory to be the root of a volume, e.g.
E:, the index will not be cleaned up if you delete the SSA.
You will then have to delete the index files manually.

You can't enter the same root directory for multiple index components on the same server.
If you are adding a new index component that represents an index replica of an index partition, specify a different root directory location for each index component that you add.
If you use the same root directory for multiple index components, your search index may get corrupted.



**Below Content Applies To:**SharePoint Server 2016

Specifies the root directory that will hold the index location for the new search index component.
This is needed if you want to isolate the index on dedicated discs in order to avoid I/O contention with other parts of the system, other system sharing the same disks, or because you do not want to risk the index filling up the OS disk (generally C: )

If you specify the root directory to be the root of a volume, e.g.
E:, the index will not be cleaned up if you delete the SSA. 
You will then have to delete the SSA manually.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search service application that contains the search topology.

```yaml
Type: SearchServiceApplicationPipeBind
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

[Online Version](http://technet.microsoft.com/EN-US/library/b2ad4e49-d34f-4a59-aa19-9a79f536f830(Office.15).aspx)

