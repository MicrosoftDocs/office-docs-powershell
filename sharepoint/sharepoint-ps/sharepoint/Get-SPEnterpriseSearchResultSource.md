---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPEnterpriseSearchResultSource

## SYNOPSIS
Retrieves a result source.

## SYNTAX

```
Get-SPEnterpriseSearchResultSource [[-Identity] <ResultSourcePipeBind>] -Owner <SearchObjectOwner>
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

This cmdlet retrieves a result source object.
If the Identity parameter is not specified, this cmdlet returns the result source collection for the specified search object owner.

**Below Content Applies To:**SharePoint Server 2016

This cmdlet retrieves a result source object.
If the Identity parameter is not specified, this cmdlet returns the result source collection for the specified search object owner. 
      For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### ------------------EXAMPLE 1------------------ (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"

$owner = Get-SPEnterpriseSearchOwner -Level SSA

Get-SPEnterpriseSearchResultSource -Identity "Local SharePoint Results" -SearchApplication $ssa -Owner $owner
```

This example retrieves the search service application level result source with the name "Local SharePoint Results".

### --------------  Example 1: Get result source by name  -------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
$owner = Get-SPEnterpriseSearchOwner -Level SSA
Get-SPEnterpriseSearchResultSource -Identity "Local SharePoint Results" -SearchApplication $ssa -Owner $owner
```

This example retrieves the search service application level result source with the name "Local SharePoint Results".

### ------------------EXAMPLE 2--------------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"

$owner = Get-SPEnterpriseSearchOwner -Level SSA

Get-SPEnterpriseSearchResultSource -Identity 8413cd39-2156-4e00-b54d-11efd9abdB89 -SearchApplication $ssa -Owner $owner
```

This example retrieves the search service application level result source with the id 8413cd39-2156-4e00-b54d-11efd9abdB89.

### --------------  Example 2: Get result source by id  -------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
$owner = Get-SPEnterpriseSearchOwner -Level SSA
Get-SPEnterpriseSearchResultSource -Identity 8413cd39-2156-4e00-b54d-11efd9abdB89 -SearchApplication $ssa -Owner $owner
```

This example retrieves the search service application level result source with the id 8413cd39-2156-4e00-b54d-11efd9abdB89.

### ------------------EXAMPLE 3------------------ (SharePoint Server 2013)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
$owner = Get-SPEnterpriseSearchOwner -Level SSA

Get-SPEnterpriseSearchResultSource -SearchApplication $ssa -Owner $owner
```

This example retrieves all the search service application level result sources.

### --------------  Example 3: Get all result sources under SSA  -------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
$owner = Get-SPEnterpriseSearchOwner -Level SSA
Get-SPEnterpriseSearchResultSource -SearchApplication $ssa -Owner $owner
```

This example retrieves all the search service application level result sources.

## PARAMETERS

### -Identity
Specifies the result source to retrieve.
The type must be a valid GUID string, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a result source (for example, "Local SharePoint Results"); or an instance of a valid Source object.
If not specified, the result source collection for the specified search object owner is returned.

```yaml
Type: ResultSourcePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
Specifies the search object owner that defines the scope at which the corresponding result source is available.

```yaml
Type: SearchObjectOwner
Parameter Sets: (All)
Aliases: o
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name, for example, SearchApp1, or an instance of a valid SearchServiceApplication object.

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

### -AssignmentCollection
**Below Content Applies To:**SharePoint Server 2013

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.



**Below Content Applies To:**SharePoint Server 2016

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

[Online Version](http://technet.microsoft.com/EN-US/library/d9cc5400-3c42-4fbe-b7bb-d65cf47bf448(Office.15).aspx)

[New-SPEnterpriseSearchResultSource]()

[Set-SPEnterpriseSearchResultSource]()

[Remove-SPEnterpriseSearchResultSource]()

[Get-SPEnterpriseSearchOwner]()

