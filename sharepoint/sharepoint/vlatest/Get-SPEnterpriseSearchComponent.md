---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/e0342473-a608-4745-b5ea-7b7c812b2ba2(Office.15).aspx
schema: 2.0.0
---

# Get-SPEnterpriseSearchComponent

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Get-SPEnterpriseSearchComponent [[-Identity] <SearchComponentPipeBind>]
 -SearchTopology <SearchTopologyPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-SearchApplication <SearchServiceApplicationPipeBind>]
```

## DESCRIPTION
This cmdlet retrieves the search component with the specified identity from the given search topology.
If an identity is not provided, all search components in the given search topology will be retrieved.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1----------------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication

Get-SPEnterpriseSearchComponent -SearchTopology 56e6651d-ecdd-4105-bb65-6a83b6155525 -Identity 06e6651d-ecdd-4105-bb65-6a83b6155525 -SearchApplication $ssa
```

This example retrieves the search component with the identity 06e6651d-ecdd-4105-bb65-6a83b6155525 from the search topology with identity 56e6651d-ecdd-4105-bb65-6a83b6155525 in the search service application referenced by $ssa.

### ------------------EXAMPLE 1----------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
Get-SPEnterpriseSearchComponent -SearchTopology 56e6651d-ecdd-4105-bb65-6a83b6155525 -Identity 06e6651d-ecdd-4105-bb65-6a83b6155525 -SearchApplication $ssa
```

This example retrieves the search component with the identity 06e6651d-ecdd-4105-bb65-6a83b6155525 from the search topology with identity 56e6651d-ecdd-4105-bb65-6a83b6155525 in the search service application referenced by $ssa.

### ------------------EXAMPLE 2----------------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication

Get-SPEnterpriseSearchComponent -SearchTopology 56e6651d-ecdd-4105-bb65-6a83b6155525 -SearchApplication $ssa
```

This example retrieves all search components from the search topology with the identity 56e6651d-ecdd-4105-bb65-6a83b6155525 in the search service application referenced by $ssa.

### ------------------EXAMPLE 2----------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
Get-SPEnterpriseSearchComponent -SearchTopology 56e6651d-ecdd-4105-bb65-6a83b6155525 -SearchApplication $ssa
```

This example retrieves all search components from the search topology with the identity 56e6651d-ecdd-4105-bb65-6a83b6155525 in the search service application referenced by $ssa.

## PARAMETERS

### -Identity
Specifies the identity for a search component.

```yaml
Type: SearchComponentPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchTopology
Specifies the search topology from which to retrieve the search component/search components.

```yaml
Type: SearchTopologyPipeBind
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

### -SearchApplication
Specifies the search service application that contains the search topology and search component/search components.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/e0342473-a608-4745-b5ea-7b7c812b2ba2(Office.15).aspx)

