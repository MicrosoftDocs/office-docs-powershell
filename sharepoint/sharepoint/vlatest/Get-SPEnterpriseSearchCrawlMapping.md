---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/89a24664-f67a-4fe8-bb7c-95bf297c7776(Office.15).aspx
schema: 2.0.0
---

# Get-SPEnterpriseSearchCrawlMapping

## SYNOPSIS
Returns a crawl mapping for the search application.

## SYNTAX

```
Get-SPEnterpriseSearchCrawlMapping [[-Identity] <CrawlMappingPipeBind>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
The Get-SPEnterpriseSearchCrawlMapping cmdlet reads a CrawlMapping object when one of the crawl mapping rules is created, updated, or deleted.
Run this cmdlet when the search is initially configured, and when access is changed through a different mechanism to create the crawl mapping rule; for example, when a rule is changed to use file:\\\\ rather than http://.

If the Identity parameter is not specified, this cmdlet returns the crawl mapping collection for the specified search application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### (SharePoint Server 2013)
```
$searchapp = Get-SPEnterpriseSearchServiceApplication "SearchApp1"$searchapp | Get-SPEnterpriseSearchCrawlMapping
```

This example returns the crawl mappings for the search application SearchApp1.

### (SharePoint Server 2016)
```
C:\PS>$searchapp = Get-SPEnterpriseSearchServiceApplication "SearchApp1"
$searchapp | Get-SPEnterpriseSearchCrawlMapping
```

This example returns the crawl mappings for the search application SearchApp1.

## PARAMETERS

### -Identity
Specifies the crawl mapping to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL, in the form http://crawlmap1; or an instance of a valid CrawlMapping object.

```yaml
Type: CrawlMappingPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the crawl mapping collection.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/89a24664-f67a-4fe8-bb7c-95bf297c7776(Office.15).aspx)

