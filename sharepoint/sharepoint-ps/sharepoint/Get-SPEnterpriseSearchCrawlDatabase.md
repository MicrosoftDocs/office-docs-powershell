---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPEnterpriseSearchCrawlDatabase

## SYNOPSIS
Returns a crawl store.

## SYNTAX

```
Get-SPEnterpriseSearchCrawlDatabase [[-Identity] <CrawlStorePipeBind>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPEnterpriseSearchCrawlDatabase cmdlet returns a CrawlStore object for use during configuration and when a crawl database for a search service application is modified or deleted.
A crawl database stores crawl history data for a search service application.

If the Identity parameter is not specified, this cmdlet returns the crawl database collection for the specified search application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------EXAMPLE------------------- (SharePoint Server 2013)
```
$crawlDatabase = Get-SPEnterpriseSearchCrawlDatabase -SearchApplicationMySearchServiceApp -Identity CrawlDB_1
```

This example gets a reference to the crawl database CrawlDB_1 from the search service application named MySearchServiceApp.

### -------------------EXAMPLE------------------- (SharePoint Server 2016)
```
C:\PS>
$crawlDatabase = Get-SPEnterpriseSearchCrawlDatabase -SearchApplication
MySearchServiceApp -Identity CrawlDB_1
```

This example gets a reference to the crawl database CrawlDB_1 from the search service application named MySearchServiceApp.

## PARAMETERS

### -Identity
Specifies the crawl database to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a CrawlStore object, in the form CrawlStore1; or an instance of a valid CrawlStore object.

```yaml
Type: CrawlStorePipeBind
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
Specifies the search application that contains the crawl database.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d4944100-fea2-4a6c-9ea3-553cd99c856b(Office.15).aspx)

