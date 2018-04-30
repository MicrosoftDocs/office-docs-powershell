---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPEnterpriseSearchResultSource
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
This cmdlet deletes a specified result source.
This cmdlet supports the same delete operations as are supported through the "Manage Result Sources" page in Central Administration.
The result source cannot be a built-in source (a built-in source has the BuiltIn property set to true). 
For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1------------------
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
PS C:\>$owner = Get-SPEnterpriseSearchOwner -Level SSA
PS C:\>Remove-SPEnterpriseSearchResultSource -Identity "Custom SharePoint Result Source" -SearchApplication $ssa -Owner $owner
```

This example deletes the search service application level result source with the name "Custom SharePoint Result Source".


### ------------------EXAMPLE 2------------------
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
PS C:\>$owner = Get-SPEnterpriseSearchOwner -Level SSA
PS C:\>Remove-SPEnterpriseSearchResultSource -Identity 12345678-90ab-cdef-1234-567890bcdefgh -SearchApplication $ssa -Owner $owner
```

This example deletes the search service application level result source with the id 12345678-90ab-cdef-1234-567890bcdefgh.


### ------------------EXAMPLE 3------------------
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "Search Service Application"
PS C:\>$owner = Get-SPEnterpriseSearchOwner -Level SSA
PS C:\>$resultSource = Get-SPEnterpriseSearchResultSource -Identity "Custom SharePoint Result Source" -SearchApplication $ssa -Owner $owner
PS C:\>Remove-SPEnterpriseSearchResultSource -Identity $resultSource -SearchApplication $ssa -Owner $owner
```

This example deletes the search service application level result source with the name "Custom SharePoint Result Source", by specifying a Source instance.


## PARAMETERS

### -Identity
Specifies the result source to delete.
The result source cannot be a built in source.
The type must be a valid GUID string, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a result source (for example, "Custom SharePoint Result Source"); or an instance of a valid Source object.


```yaml
Type: ResultSourcePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Owner
Specifies the search object owner that defines the scope at which the corresponding result source is available.


```yaml
Type: SearchObjectOwner
Parameter Sets: (All)
Aliases: o
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.


```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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

[New-SPEnterpriseSearchResultSource](New-SPEnterpriseSearchResultSource.md)

[Get-SPEnterpriseSearchResultSource](Get-SPEnterpriseSearchResultSource.md)

[Set-SPEnterpriseSearchResultSource](Set-SPEnterpriseSearchResultSource.md)

[Get-SPEnterpriseSearchOwner](Get-SPEnterpriseSearchOwner.md)
