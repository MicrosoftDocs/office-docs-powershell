---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: New-SPEnterpriseSearchQueryScope
schema: 2.0.0
---

# New-SPEnterpriseSearchQueryScope

## SYNOPSIS
Adds a query results scope to a shared search application.


## SYNTAX

```
New-SPEnterpriseSearchQueryScope [-AlternateResultsPage <String>]
 [-AssignmentCollection <SPAssignmentCollection>] [-CompilationType <Int32>] [-Confirm] -Description <String>
 -DisplayInAdminUI <Boolean> [-ExtendedSearchFilter <String>] -Name <String> [-OwningSiteUrl <Uri>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
After you upgrade a Search service application to SharePoint Server, you can view shared scopes, but you cannot create, update, or delete them.
Therefore, you cannot use this cmdlet for shared scopes after upgrade.
However, you can convert shared scopes to result sources, which serve a similar purpose.
Similarly, after you upgrade a SharePoint Server site collection to SharePoint Server mode, you can view local scopes, but you cannot create, update, or delete them.
Therefore, you cannot use this cmdlet for local scopes after you upgrade a site collection.
However, you can convert local scopes to result sources, which serve a similar purpose.

Use the `New-SPEnterpriseSearchQueryScope` cmdlet to create a new shared scope.
SPEnterpriseSearchQueryScope represents a query results scope used by all shared search applications on the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity MySSA
$ssa | New-SPEnterpriseSearchQueryScope -Name MustCrawl -Description "Sites we must crawl" -DisplayInAdminUI $true
```

This example adds a scope named MustCrawl that will be displayed in the administration UI to the search service application named MySSA.


## PARAMETERS

### -AlternateResultsPage
Specifies the location to display results for the new query scope.

The type must be a valid URL, in the form http://server_name.


```yaml
Type: String
Parameter Sets: (All)
Aliases: a
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CompilationType
Specifies the compilation type of the new scope.
The value 0 specifies the conditionally compiled scope type and the value 1 specifies the always compiled scope type.

The type must be either of the following: 0 or 1.


```yaml
Type: Int32
Parameter Sets: (All)
Aliases: type
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -Description
Adds a description of the new query scope.

The type must be a valid string; for example, a description of a query scope.


```yaml
Type: String
Parameter Sets: (All)
Aliases: d
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayInAdminUI
Specifies that the new scope is displayed in the administration application user interface (UI).
The default setting is to hide the new scope in the administration application UI.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: disp
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedSearchFilter
{{Fill ExtendedSearchFilter Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: f
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the identity of the scope to create.

The type must be a valid name of a scope (for example, Scope1).


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwningSiteUrl
Specifies the SharePoint site that is associated with the new scope.

The type must be a valid SharePoint site URL, in the form http://server_name.


```yaml
Type: Uri
Parameter Sets: (All)
Aliases: o
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the query scope collection.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.


```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
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
