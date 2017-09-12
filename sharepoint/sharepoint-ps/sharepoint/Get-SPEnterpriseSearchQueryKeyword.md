---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPEnterpriseSearchQueryKeyword

## SYNOPSIS
Returns a keyword term.

## SYNTAX

```
Get-SPEnterpriseSearchQueryKeyword [[-Identity] <KeywordPipeBind>] -Site <SPSitePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPEnterpriseSearchQueryKeyword cmdlet reads a QueryKeyword object when the keyword rule is created, updated, or deleted.

If the Identity parameter is not specified, this cmdlet returns the query keyword collection from the specified search application.

You can use this cmdlet for keywords in site collections that are in SharePoint Server 2010 mode.
You cannot use this cmdlet after a site collection is upgraded to SharePoint Server 2013 mode because keywords and Best Bets are automatically migrated to query rules.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
Get-SPEnterpriseSearchQueryKeyword -Identity Engineering -Site http://myserver/sites/engineering | Set-SPEnterpriseSearchQueryKeyword -StartDate "12/25/2009" -EndDate "12/24/2010" -Site http://myserver/sites/engineering
```

This example gets a reference to the keyword with the term Engineering from the site http://myserver/sites/engineering and sets the start dates and end dates for the keyword.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Get-SPEnterpriseSearchQueryKeyword -Identity Engineering -Site http://myserver/sites/engineering | Set-SPEnterpriseSearchQueryKeyword -StartDate "12/25/2009" -EndDate "12/24/2010" -Site http://myserver/sites/engineering
```

This example gets a reference to the keyword with the term Engineering from the site http://myserver/sites/engineering and sets the start dates and end dates for the keyword.

## PARAMETERS

### -Identity
Specifies the keyword term to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid string that contains a keyword term (for example, KeywordTerm1); or an instance of a valid Keyword object.

```yaml
Type: KeywordPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
Filters to return keywords with the specified results URL.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL, in the form http://server_name; or an instance of a valid SPSite object.

```yaml
Type: SPSitePipeBind
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0dcc571f-cc53-4838-9f32-cf0baab4306f(Office.15).aspx)

