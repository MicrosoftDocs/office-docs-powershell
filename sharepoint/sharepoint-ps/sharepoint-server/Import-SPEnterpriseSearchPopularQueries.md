---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Import-SPEnterpriseSearchPopularQueries
schema: 2.0.0
---

# Import-SPEnterpriseSearchPopularQueries

## SYNOPSIS
Imports queries from a comma-separated list.
The search box will suggest these queries as users type.

## SYNTAX

```
Import-SPEnterpriseSearchPopularQueries -ResultSource <Source>
 -SearchApplicationProxy <SearchServiceApplicationProxyPipeBind> -Web <SPWeb>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Filename <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Import-SPEnterpriseSearchPopularQueries cmdlet imports queries from a comma-separated list.
As the user types a query in the search box, the search box will suggest queries from the comma-separated list.
The search box bases these suggestions on:

- The SPWeb the search box is located on.
- The Result Source configured on the search box.

For example, if the search box is located on the "Engineering" SPWeb, the suggested queries will differ from if the search box is located on the "Management" SPWeb.
Likewise, if the Result Source on the search box is "Local SharePoint Results", the suggested queries will differ from if the Result Source is "Conversations".

The comma-separated list must consist of one line per query, where each line contains the following items:

Query Text.
The actual query expression.

Query Count.
The number of times this query was executed.

Click Count.
The number of times any user clicked any result for this query.

LCID.
The locale identifier (LCID) for the language of the query.

Each line must use the formatting: Query Text,Query Count,Click Count,LCID.
For example, Company store,100,80,1033.
For suggestions to appear in the search box, the Click Count value must be more than five.
The search box ranks query suggestions by their Click Count values (approximately).

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------EXAMPLE-------- 
```
C:\PS>$ssap = Get-SPEnterpriseSearchServiceApplicationProxy

$hostname = hostname
$web = get-spsite | get-spweb | where {$_.Url-eq "http://$hostname"}

$owner = new-object Microsoft.Office.Server.Search.Administration.SearchObjectOwner -ArgumentList @([Microsoft.Office.Server.Search.Administration.SearchObjectLevel]::SPWeb,$web)
$mgr = new-object Microsoft.Office.Server.Search.Administration.Query.FederationManager -ArgumentList $ssap
$source = $mgr.GetSourceByName("Local SharePoint Results", $owner)

Import-SPEnterpriseSearchPopularQueries -SearchApplicationProxy $ssap -Filename C:\input.txt -ResultSource $source -Web $web
```

This example uses the Import-SPEnterpriseSearchPopularQueries cmdlet to import the queries file that is named C:\input.txt and associate with it the Result Source referenced by $source and the SPWeb referenced by $web.
The example defines the variable $web as the SPWeb with URL http://hostname, and the variable $source as the Result Source named "Local SharePoint Results" at the SPWeb referenced by $web.

## PARAMETERS

### -ResultSource
Specifies the Result Source to associate with the imported queries.
The type must be an instance of a valid Source object.

```yaml
Type: Source
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplicationProxy
Specifies the proxy for the search application to which the queries file should be imported.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application proxy name (for example, SearchAppProxy1); or an instance of a valid SearchServiceApplicationProxy object.

```yaml
Type: SearchServiceApplicationProxyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Web
Specifies the SPWeb to associate with the imported queries.
The type must be an instance of a valid SPWeb object.

```yaml
Type: SPWeb
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

### -Filename
Specifies the full UNC (Universal Naming Convention) path of the file to import.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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


