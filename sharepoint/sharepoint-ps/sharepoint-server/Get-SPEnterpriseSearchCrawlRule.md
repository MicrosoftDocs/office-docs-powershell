---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPEnterpriseSearchCrawlRule
schema: 2.0.0
---

# Get-SPEnterpriseSearchCrawlRule

## SYNOPSIS
Accesses crawl rules.

## SYNTAX

```
Get-SPEnterpriseSearchCrawlRule [[-Identity] <CrawlRulePipeBind>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Get-SPEnterpriseSearchCrawlRule cmdlet for a search administrator to run this procedure to retrieve the crawl rule when the crawl rule is updated or deleted.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------EXAMPLE 1----------------- 
```
C:\PS>$searchApp = Get-SPEnterpriseSearchServiceApplication ExampleSearchServiceApplication 
$crawlRule = Get-SPEnterpriseSearchCrawlRule -SearchApplication  $searchApp -Identity http://example
$crawlRule | Set-SPEnterpriseSearchCrawlRule -Type InclusionRule
```

This example uses the Get-SPEnterpriseSearchCrawlRule cmdlet to retrieve a crawl rule in order to change its type from ExclusionRule to InclusionRule.

### ---------------EXAMPLE 2--------------- 
```
C:\PS>$searchApp = Get-SPEnterpriseSearchServiceApplication MySearchServiceApp Get-SPEnterpriseSearchCrawlRule -SearchApplication $searchApp | where 
{$_.Path -like "*example*"}
```

This example returns a list of crawl rules with paths that contain the word example from the search service application named, MySearchServiceApp.

## PARAMETERS

### -Identity
Specifies the search crawl rule path.
A valid URL, such as "http://server_name", or an instance of a valid CrawlRule object

```yaml
Type: CrawlRulePipeBind
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
Specifies the search application that contains the crawl rule.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object

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


