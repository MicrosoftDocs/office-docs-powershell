---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPEnterpriseSearchQueryScope

## SYNOPSIS
Returns a query results scope.

## SYNTAX

```
Get-SPEnterpriseSearchQueryScope [[-Identity] <ScopePipeBind>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Url <Uri>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPEnterpriseSearchQueryScope cmdlet reads a QueryScope object when the shared scope is created or deleted, or when the definition of the shared scope is updated.

If the Identity parameter is not specified, this cmdlet returns the query scope collection from the specified search application.

In SharePoint Server 2013, result sources provide the functionality that scopes provided in SharePoint Server 2010.

During an upgrade from SharePoint Server 2010, to retain legacy settings, shared scopes are automatically migrated.
However, these scopes are read-only after the migration.
This cmdlet can be used to read a shared scope that has been migrated.

During an upgrade from SharePoint Server 2010, to preserve legacy settings, local scopes are also automatically migrated when the corresponding sites or site collections are migrated.
In a SharePoint Server 2013 farm, the scopes of a site or site collection that is in SharePoint Server 2010 mode are read-write, whereas the scopes of a site or site collection after upgrade to SharePoint Server 2013 mode are read-only.
This cmdlet can be used to read a migrated local scope in either situation.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$ssa = Get-SPenterpriseSearchServiceApplication -Identity MySSAGet-SPEnterpriseSearchQueryScope -Identity MustCrawl -SearchApplication $ssa | Set-SPEnterpriseSearchQueryScope -Description "Business critical sites to index" -CompilationType 1 -AlternateResultsPage http://altServer
```

This example obtains a reference to the scope named MustCrawl on the search application named MySSA, and changes the description, compilation type, and alternate access URL.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPenterpriseSearchServiceApplication -Identity MySSA
Get-SPEnterpriseSearchQueryScope -Identity MustCrawl -SearchApplication $ssa | Set-SPEnterpriseSearchQueryScope -Description "Business critical sites to index" -CompilationType 1 -AlternateResultsPage http://altServer
```

This example obtains a reference to the scope named MustCrawl on the search application named MySSA, and changes the description, compilation type, and alternate access URL.

## PARAMETERS

### -Identity
Specifies the results scope to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a scope (for example, Scope1); or an instance of a valid Scope object.

```yaml
Type: ScopePipeBind
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
Specifies the search application that contains the query scope.

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

### -Url
Filters to return scopes for the specified results URL.

The type must be a valid URL, in the form http://server_name.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: u
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

[Online Version](http://technet.microsoft.com/EN-US/library/228495d6-4716-4627-b46f-2b85eaa8edbc(Office.15).aspx)

