---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPEnterpriseSearchResultItemType
schema: 2.0.0
---

# Remove-SPEnterpriseSearchResultItemType

## SYNOPSIS
Removes a result item type for a search object owner.


## SYNTAX

```
Remove-SPEnterpriseSearchResultItemType [-Identity] <ResultItemTypePipeBind> -Owner <SearchObjectOwner>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-SearchApplication <SearchServiceApplicationPipeBind>]
 [-SearchApplicationProxy <SearchServiceApplicationProxyPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Remove-SPEnterpriseSearchResultItemType` cmdlet removes a user-created result item type, given a result type identity and a search owner.
You cannot use this cmdlet to remove the built-in result item types that are included with SharePoint products.

Result item types enable you to change the look of search results based on the type of result. 
You start by defining a collection of rules, which will be evaluated against the properties of results.
Then you define the display template to use for rendering that type of result.
Once you have created the result item type, results matching the rules of the result item type will display using the specified display template.

Example use cases:

- Change the look of results for a particular file name extension, for example Word documents.
- Change the look of a particular content type in search results.
- Change the look of results from a particular author.
- Add a result action to results from a particular result source as part of a custom search application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$web = Get-SPWeb "UrlOfTheSite"
$tenantOwner = Get-SPEnterpriseSearchOwner -Level SPSite -SPWeb $web
$searchapp = Get-SPEnterpriseSearchServiceApplication

$resultType = Get-SPEnterpriseSearchResultItemType -Owner $tenantOwner -SearchApplication $searchapp
$resultType.BuiltIn

Remove-SPEnterpriseSearchResultItemType -Identity $resultType -Owner $tenantOwner -SearchApplication $searchapp
```

This example first defines variables for the URL of the site, the search owner and search application.
It then retrieves the result item type and checks whether the result item type is a built-in result item type or not.
If $resultType.BuiltIn returns false, the result item type is not built-in and you can modify it.
Next, the example removes the result item type referenced by $resultType for the owner referenced by $tenantOwner.

## PARAMETERS

### -Identity
Specifies the result item type to update.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: ResultItemTypePipeBind
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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
For more information, type the following command: `get-help about_commonparameters`

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
Accept pipeline input: False
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

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

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

[New-SPEnterpriseSearchResultItemType]()

[Set-SPEnterpriseSearchResultItemType]()

[Get-SPEnterpriseSearchResultItemType]()

[Get-SPEnterpriseSearchOwner]()
