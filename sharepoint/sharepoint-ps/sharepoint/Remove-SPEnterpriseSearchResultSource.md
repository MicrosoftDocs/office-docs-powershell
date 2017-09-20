---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Remove-SPEnterpriseSearchResultSource

## SYNOPSIS
Deletes a result source.

## SYNTAX

```
Remove-SPEnterpriseSearchResultSource [-Identity] <ResultSourcePipeBind> -Owner <SearchObjectOwner>
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

This cmdlet deletes a specified result source.
This cmdlet supports the same delete operations as are supported through the "Manage Result Sources" page in the SharePoint Central Administration website.
The result source cannot be a built-in source (a built-in source has the BuiltIn property set to true).

**Below Content Applies To:**SharePoint Server 2016

This cmdlet deletes a specified result source.
This cmdlet supports the same delete operations as are supported through the "Manage Result Sources" page in Central Administration.
The result source cannot be a built-in source (a built-in source has the BuiltIn property set to true). 
      For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### --------EXAMPLE1 -------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"

$owner = Get-SPEnterpriseSearchOwner -Level SSA

Remove-SPEnterpriseSearchResultSource -Identity "Custom SharePoint Result Source" -SearchApplication $ssa -Owner $owner
```

This example deletes the search service application level result source with the name "Custom SharePoint Result Source".

### --------------  Example 1: Delete result source by name  -------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
$owner = Get-SPEnterpriseSearchOwner -Level SSA
Remove-SPEnterpriseSearchResultSource -Identity "Custom SharePoint Result Source" -SearchApplication $ssa -Owner $owner
```

This example deletes the search service application level result source with the name "Custom SharePoint Result Source".

### --------EXAMPLE 2 -------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"

$owner = Get-SPEnterpriseSearchOwner -Level SSA

Remove-SPEnterpriseSearchResultSource -Identity 12345678-90ab-cdef-1234-567890bcdefgh -SearchApplication $ssa -Owner $owner
```

This example deletes the search service application level result source with the id 12345678-90ab-cdef-1234-567890bcdefgh.

### --------------  Example 2: Delete result source by id  -------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
$owner = Get-SPEnterpriseSearchOwner -Level SSA
Remove-SPEnterpriseSearchResultSource -Identity 12345678-90ab-cdef-1234-567890bcdefgh -SearchApplication $ssa -Owner $owner
```

This example deletes the search service application level result source with the id 12345678-90ab-cdef-1234-567890bcdefgh.

### --------EXAMPLE 3 -------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"

$owner = Get-SPEnterpriseSearchOwner -Level SSA

$resultSource = Get-SPEnterpriseSearchResultSource -Identity "Custom SharePoint Result Source" -SearchApplication $ssa -Owner $owner

Remove-SPEnterpriseSearchResultSource -Identity $resultSource -SearchApplication $ssa -Owner $owner
```

This example deletes the search service application level result source with the name "Custom SharePoint Result Source", by specifying a Source instance.

### --------------  Example 3: Delete result source by instance  -------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
$owner = Get-SPEnterpriseSearchOwner -Level SSA
$resultSource = Get-SPEnterpriseSearchResultSource -Identity "Custom SharePoint Result Source" -SearchApplication $ssa -Owner $owner
Remove-SPEnterpriseSearchResultSource -Identity $resultSource -SearchApplication $ssa -Owner $owner
```

This example deletes the search service application level result source with the name "Custom SharePoint Result Source", by specifying a Source instance.

## PARAMETERS

### -Identity
**Below Content Applies To:**SharePoint Server 2013

Specifies the result source to delete.
The type must be a valid GUID string, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a result source (for example, "Custom SharePoint Result Source"); or an instance of a valid Source object.



**Below Content Applies To:**SharePoint Server 2016

Specifies the result source to delete.
The result source cannot be a built in source.
The type must be a valid GUID string, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a result source (for example, "Custom SharePoint Result Source"); or an instance of a valid Source object.



```yaml
Type: ResultSourcePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Owner
**Below Content Applies To:**SharePoint Server 2013

Specifies the search object owner and its level to retrieve result source.



**Below Content Applies To:**SharePoint Server 2016

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
**Below Content Applies To:**SharePoint Server 2013

Specifies the search application.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object



**Below Content Applies To:**SharePoint Server 2016

Specifies the search application.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.



```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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

[Online Version](http://technet.microsoft.com/EN-US/library/aa7f0dfe-cbda-4962-81b1-14174c249822(Office.15).aspx)

[New-SPEnterpriseSearchResultSource]()

[Get-SPEnterpriseSearchResultSource]()

[Set-SPEnterpriseSearchResultSource]()

[Get-SPEnterpriseSearchOwner]()

