---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPEnterpriseSearchResultItemType
schema: 2.0.0
---

# Get-SPEnterpriseSearchResultItemType

## SYNOPSIS
Retrieves result item types.

## SYNTAX

```
Get-SPEnterpriseSearchResultItemType [[-Identity] <ResultItemTypePipeBind>] -Owner <SearchObjectOwner>
 [-AssignmentCollection <SPAssignmentCollection>] [-SearchApplication <SearchServiceApplicationPipeBind>]
 [-SearchApplicationProxy <SearchServiceApplicationProxyPipeBind>] [<CommonParameters>]
```

## DESCRIPTION

The Get-SPEnterpriseSearchResultItemType cmdlet retrieves the result item types that exist for the specified owner.

Result item types enable you to change the look of search results based on the type of result.
You start by defining a collection of rules, which will be evaluated against the properties of results.
Then you define the display template to use for rendering that type of result. 
Once you have created the result item type, results matching the rules of the result item type will render using the specified display template.

Example use cases:

- Change the look of results for a particular file name extension, for example Word documents.
- Change the look of a particular content type in search results.
- Change the look of results from a particular author.
- Add a result action to results from a particular result source as part of a custom search application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### --------EXAMPLE-------- 
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
$tenantOwner = Get-SPEnterpriseSearchOwner -Level SPSite
Get-SPEnterpriseSearchResultItemType -Owner $tenantOwner -SearchApplication $ssa
```

This example retrieves the result item types that are defined for the owner referenced by $tenantowner for the search application referenced by $ssa.
Although SearchApplication and SearchApplicationProxy are optional parameters, this cmdlet requires use of one of them.

## PARAMETERS

### -Identity
Specifies the result item type to update.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: ResultItemTypePipeBind
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
Specifies the search object owner that defines the scope at which the result item type is created.

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

### -SearchApplication
Specifies the name of the search application.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SearchApplicationProxy
Specifies the proxy of the search application that contains the result item type.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application proxy name (for example, SearchAppProxy1); or an instance of a valid SearchServiceApplicationProxy object.

```yaml
Type: SearchServiceApplicationProxyPipeBind
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

[New-SPEnterpriseSearchResultItemType](New-SPEnterpriseSearchResultItemType.md)

[Set-SPEnterpriseSearchResultItemType](Set-SPEnterpriseSearchResultItemType.md)

[Remove-SPEnterpriseSearchResultItemType](Remove-SPEnterpriseSearchResultItemType.md)

[Get-SPEnterpriseSearchOwner](Get-SPEnterpriseSearchOwner.md)

