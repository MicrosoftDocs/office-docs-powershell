---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPEnterpriseSearchCrawlComponent

## SYNOPSIS
Creates a new crawl component for the given topology and search service instance.

## SYNTAX

```
New-SPEnterpriseSearchCrawlComponent -SearchServiceInstance <SearchServiceInstancePipeBind>
 -SearchTopology <SearchTopologyPipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Creates a new crawl component and adds it to an inactive search topology in a specific search service instance.
The change is effectuated when the search topology is enabled.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication


New-SPEnterpriseSearchCrawlComponent -SearchTopology 06e6651d-ecdd-4105-bb65-6a83b6155525 -SearchServiceInstance 56e6651d-ecdd-4105-bb65-6a83b6155525 -SearchApplication $ssa
```

This example adds a new crawl component to the search topology with the identity 06e6651d-ecdd-4105-bb65-6a83b6155525 in the search service instance with identity 56e6651d-ecdd-4105-bb65-6a83b6155525 in the default search service application referenced by $ssa.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
New-SPEnterpriseSearchCrawlComponent -SearchTopology 06e6651d-ecdd-4105-bb65-6a83b6155525 -SearchServiceInstance 56e6651d-ecdd-4105-bb65-6a83b6155525 -SearchApplication $ssa
```

This example adds a new crawl component to the search topology with the identity 06e6651d-ecdd-4105-bb65-6a83b6155525 in the search service instance with identity 56e6651d-ecdd-4105-bb65-6a83b6155525 in the default search service application referenced by $ssa.

## PARAMETERS

### -SearchServiceInstance
**Below Content Applies To:**SharePoint Server 2013

Specifies the search service instance that will host the new crawl component.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh, a valid name of a search topology server, or an instance of a valid SearchServiceInstance object.



**Below Content Applies To:**SharePoint Server 2016

Specifies the search service instance that will host the new crawl component.



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
Specifies the search topology where the new crawl component should be added.

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

[Online Version](http://technet.microsoft.com/EN-US/library/98f86631-c6b5-4379-ab89-5d0884cb0fd0(Office.15).aspx)

