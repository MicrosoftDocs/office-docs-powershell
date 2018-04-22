---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPEnterpriseSearchQueryScopeRule
schema: 2.0.0
---

# Remove-SPEnterpriseSearchQueryScopeRule

## SYNOPSIS
Deletes query results scope rules.


## SYNTAX

```
Remove-SPEnterpriseSearchQueryScopeRule [-Identity] <ScopeRulePipeBind> -Url <Uri>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Scope <ScopePipeBind>]
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
After you upgrade a Search service application to SharePoint Server, you can view shared scopes, but you cannot create, update, or delete them.
Therefore, you cannot use this cmdlet for shared scopes after upgrade.
However, you can convert shared scopes to result sources, which serve a similar purpose.
Similarly, after you upgrade a SharePoint Server site collection to SharePoint Server, you can view local scopes, but you cannot create, update, or delete them.
Therefore, you cannot use this cmdlet for local scopes after you upgrade a site collection.
However, you can convert local scopes to result sources, which serve a similar purpose.

The `Remove-SPEnterpriseSearchQueryScopeRule` cmdlet deletes one or more shared scope rules from the scope rule collection.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity "MySSA"
PS C:\>$scope = Get-SPEnterpriseSearchQueryScope -Identity MustCrawl -SearchApplication $ssa
PS C:\>Get-SPEnterpriseSearchQueryScopeRule -Scope $scope -Url http://criticalSite | Remove-SPEnterpriseSearchQueryScopeRule -Url http://criticalSite
```

This example removes a scope rule for the URL http://criticalSite from a search service application named MySSA.


## PARAMETERS

### -Identity
Specifies the scope rule to delete.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a scope rule (for example, ScopeRule1); or an instance of a valid ScopeRule object.

```yaml
Type: ScopeRulePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Url
Filters to delete query scope rules for the specified results URL.

The type must be a valid URL, in the form http://server_name.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: u
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

### -Scope
Filters to delete multiple rules for a specified scope.

The type must be a valid string that identifies the scope; for example, Scope1.

```yaml
Type: ScopePipeBind
Parameter Sets: (All)
Aliases: n
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the query scope rule collection.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
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
