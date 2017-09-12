---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPEnterpriseSearchQueryScopeRule

## SYNOPSIS
Adds a shared scope rule to a query scope.

## SYNTAX

```
New-SPEnterpriseSearchQueryScopeRule -RuleType <String> -Scope <ScopePipeBind> -Url <Uri>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-FilterBehavior <String>]
 [-ManagedProperty <ManagedPropertyPipeBind>] [-MatchingString <String>] [-PropertyValue <String>]
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-UrlScopeRuleType <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
After you upgrade a Search service application from SharePoint Server 2010 to SharePoint Server 2013, you can view shared scopes, but you cannot create, update, or delete them.
Therefore, you cannot use this cmdlet for shared scopes after upgrade.
However, you can convert shared scopes to result sources, which serve a similar purpose.
Similarly, after you upgrade a SharePoint Server 2010 site collection to SharePoint Server 2013 mode, you can view local scopes, but you cannot create, update, or delete them.
Therefore, you cannot use this cmdlet for local scopes after you upgrade a site collection.
However, you can convert local scopes to result sources, which serve a similar purpose.

The New-SPEnterpriseSearchQueryScopeRule cmdlet creates a new shared scope rule.
SPEnterpriseSearchQueryScopeRule represents a query results scope rule that can be applied to a scope.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication -Identity

$scope = Get-SPEnterpriseSearchQueryScope -Identity MustCrawl -SearchApplication $ssa

$sr = New-SPEnterpriseSearchQueryScopeRule -Scope $scope -RuleType AllContent -Url http://criticalSite

Get-SPEnterpriseSearchQueryScopeRule -Scope $scope -Url http://criticalSite
```

This example creates a new scope rule of type AllContent for the URL http://criticalSite.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity

C:\PS>$scope = Get-SPEnterpriseSearchQueryScope -Identity MustCrawl -SearchApplication $ssa

C:\PS>$sr = New-SPEnterpriseSearchQueryScopeRule -Scope $scope -RuleType AllContent -Url http://criticalSite

C:\PS>Get-SPEnterpriseSearchQueryScopeRule -Scope $scope -Url http://criticalSite
```

This example creates a new scope rule of type AllContent for the URL http://criticalSite.

## PARAMETERS

### -RuleType
Specifies the type of scope rule to create.

The type must be one of the following values: AllContent, Url, or PropertyQuery.

```yaml
Type: String
Parameter Sets: (All)
Aliases: type
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scope
Applies the query scope rule to the specified scope.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a scope (for example, Scope1); or an instance of a valid Scope object.

```yaml
Type: ScopePipeBind
Parameter Sets: (All)
Aliases: s
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Url
Specifies the results URL that is associated with the query scope rule.

The type must be a valid URL, in the form http://server_name.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: u
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

### -FilterBehavior
Specifies the type of scope rule to create for the query scope.
The default value is Include.

The type must be one of the following values: Exclude, Include, or Require.

```yaml
Type: String
Parameter Sets: (All)
Aliases: f
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedProperty
Specifies the managed property to use for the PropertyQuery scope rule.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a managed property (for example, ManagedProperty1); or an instance of a valid ManagedProperty object.

```yaml
Type: ManagedPropertyPipeBind
Parameter Sets: (All)
Aliases: mname
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MatchingString
Specifies the string to use when matching the URL rule type.

```yaml
Type: String
Parameter Sets: (All)
Aliases: text
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyValue
Specifies the property value to use when matching the PropertyQuery rule type.

```yaml
Type: String
Parameter Sets: (All)
Aliases: value
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UrlScopeRuleType
Specifies the value to use when matching the URL rule type.

```yaml
Type: String
Parameter Sets: (All)
Aliases: ut
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

[Online Version](http://technet.microsoft.com/EN-US/library/fbcd7080-339c-470d-8bed-2509c99df204(Office.15).aspx)

