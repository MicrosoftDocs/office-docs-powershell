---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPEnterpriseSearchTopology
schema: 2.0.0
---

# Get-SPEnterpriseSearchTopology

## SYNOPSIS
Retrieves one or all search topologies that belong to a given search service application.

## SYNTAX

```
Get-SPEnterpriseSearchTopology [[-Identity] <SearchTopologyPipeBind>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-Active]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves a given search topology, the active search topology, or all search topologies that belong to a given search service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ 
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication
PS C:\>Get-SPEnterpriseSearchTopology -SearchApplication $ssa
```

This example retrieves all search topologies of the search service application referenced by $ssa.

### ------------------EXAMPLE 2------------------ 
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication
PS C:\>Get-SPEnterpriseSearchTopology -SearchApplication $ssa -Active
```

This example retrieves the active search topology of the search service application referenced by $ssa.

### ------------------EXAMPLE 3------------------ 
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication
PS C:\>Get-SPEnterpriseSearchTopology -SearchApplication $ssa -Identity '10fa59cb-4b32-4fe6-8f8d-065388df201e'
```

This example retrieves search topology with the identity 10fa59cb-4b32-4fe6-8f8d-065388df201e of the search service application referenced by $ssa.

## PARAMETERS

### -Identity
Specifies the search topology to retrieve.

```yaml
Type: SearchTopologyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application to which the search topology belongs.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Active
Specifies that the active search topology should be returned.

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

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.
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

[New-SPEnterpriseSearchTopology](New-SPEnterpriseSearchTopology.md)

[Set-SPEnterpriseSearchTopology](Set-SPEnterpriseSearchTopology.md)

[Remove-SPEnterpriseSearchTopology](Remove-SPEnterpriseSearchTopology.md)

