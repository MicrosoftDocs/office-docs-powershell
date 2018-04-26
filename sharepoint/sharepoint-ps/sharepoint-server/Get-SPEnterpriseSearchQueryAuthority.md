---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPEnterpriseSearchQueryAuthority
schema: 2.0.0
---

# Get-SPEnterpriseSearchQueryAuthority

## SYNOPSIS
Returns an authoritative page.

## SYNTAX

```
Get-SPEnterpriseSearchQueryAuthority [[-Identity] <AuthorityPagePipeBind>] -Owner <SearchObjectOwner>
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPEnterpriseSearchQueryAuthority cmdlet reads a QueryAuthority object when the authoritative page is created or deleted or when the query rank is modified.

If the Identity parameter is not specified, this cmdlet returns the authority page collection for the specified search application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ 
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication -Identity 'Search Service Application'
PS C:\>Get-SPEnterpriseSearchQueryAuthority -Identity 'http://contoso.com' -SearchApplication $ssa
```

This example obtains the authoritative page for the URL http://contoso.com from the search service application named 'Search Service Application'.

### ------------------EXAMPLE 2------------------ 
```
PS C:\>Get-SPEnterpriseSearchQueryAuthority -SearchApplication 'Search Service Application'
```

This example obtains the collection of query authority pages from a search service application named 'Search Service Application'.

## PARAMETERS

### -Identity
Specifies the query authority to get.

The type must be a valid URL, in the form http://server_name; or an instance of a valid AuthorityPage object.

```yaml
Type: AuthorityPagePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
Specifies the search object owner that defines the scope at which the corresponding Query Authority is created.The owner must be one of the following valid levels:- Search Service Application- Site Subscription

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
Specifies the search application that contains the authority page to get.

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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

