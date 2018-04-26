---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPEnterpriseSearchCrawlContentSource
schema: 2.0.0
---

# Set-SPEnterpriseSearchCrawlContentSource

## SYNOPSIS
Sets the properties of a crawl content source for a Search service application.


## SYNTAX

### MonthlyDate
```
Set-SPEnterpriseSearchCrawlContentSource [-Identity] <ContentSourcePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
 [-BDCApplicationProxyGroup <SPServiceApplicationProxyGroupPipeBind>] [-Confirm]
 [-CrawlPriority <CrawlPriority>] [-CrawlScheduleDaysOfMonth <Int32>]
 [-CrawlScheduleMonthsOfYear <MonthsOfYear>] [-CrawlScheduleRepeatDuration <Int32>]
 [-CrawlScheduleRepeatInterval <Int32>] [-CrawlScheduleStartDateTime <DateTime>] [-CustomProtocol <String>]
 [-EnableContinuousCrawls <Boolean>] [-LOBSystemSet <String[]>] [-MaxPageEnumerationDepth <Int32>]
 [-MaxSiteEnumerationDepth <Int32>] [-MonthlyCrawlSchedule] [-Name <String>]
 [-ScheduleType <ContentSourceCrawlScheduleType>] [-SearchApplication <SearchServiceApplicationPipeBind>]
 [-StartAddresses <String>] [-Tag <String>] [-WhatIf] [<CommonParameters>]
```

### Weekly
```
Set-SPEnterpriseSearchCrawlContentSource [-Identity] <ContentSourcePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
 [-BDCApplicationProxyGroup <SPServiceApplicationProxyGroupPipeBind>] [-Confirm]
 [-CrawlPriority <CrawlPriority>] [-CrawlScheduleDaysOfWeek <DaysOfWeek>]
 [-CrawlScheduleRepeatDuration <Int32>] [-CrawlScheduleRepeatInterval <Int32>]
 [-CrawlScheduleRunEveryInterval <Int32>] [-CrawlScheduleStartDateTime <DateTime>] [-CustomProtocol <String>]
 [-EnableContinuousCrawls <Boolean>] [-LOBSystemSet <String[]>] [-MaxPageEnumerationDepth <Int32>]
 [-MaxSiteEnumerationDepth <Int32>] [-Name <String>] [-ScheduleType <ContentSourceCrawlScheduleType>]
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-StartAddresses <String>] [-Tag <String>]
 [-WeeklyCrawlSchedule] [-WhatIf] [<CommonParameters>]
```

### Daily
```
Set-SPEnterpriseSearchCrawlContentSource [-Identity] <ContentSourcePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
 [-BDCApplicationProxyGroup <SPServiceApplicationProxyGroupPipeBind>] [-Confirm]
 [-CrawlPriority <CrawlPriority>] [-CrawlScheduleRepeatDuration <Int32>] [-CrawlScheduleRepeatInterval <Int32>]
 [-CrawlScheduleRunEveryInterval <Int32>] [-CrawlScheduleStartDateTime <DateTime>] [-CustomProtocol <String>]
 [-DailyCrawlSchedule] [-EnableContinuousCrawls <Boolean>] [-LOBSystemSet <String[]>]
 [-MaxPageEnumerationDepth <Int32>] [-MaxSiteEnumerationDepth <Int32>] [-Name <String>]
 -ScheduleType <ContentSourceCrawlScheduleType> [-SearchApplication <SearchServiceApplicationPipeBind>]
 [-StartAddresses <String>] [-Tag <String>] [-WhatIf] [<CommonParameters>]
```

### RemoveSchedule
```
Set-SPEnterpriseSearchCrawlContentSource [-Identity] <ContentSourcePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
 [-BDCApplicationProxyGroup <SPServiceApplicationProxyGroupPipeBind>] [-Confirm]
 [-CrawlPriority <CrawlPriority>] [-CustomProtocol <String>] [-EnableContinuousCrawls <Boolean>]
 [-LOBSystemSet <String[]>] [-MaxPageEnumerationDepth <Int32>] [-MaxSiteEnumerationDepth <Int32>]
 [-Name <String>] [-RemoveCrawlSchedule] [-ScheduleType <ContentSourceCrawlScheduleType>]
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-StartAddresses <String>] [-Tag <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Set-SPEnterpriseSearchCrawlContentSource` cmdlet updates the rules of a crawl content source when the search functionality is initially configured and after any new content source is added.
This cmdlet is called once to set the incremental crawl schedule for a content source and it is called again to set a full crawl schedule.

The value of the optional EnableContinuousCrawls parameter can be True or False.
A value of True enables continuous crawls of items in this content source.
This causes the search system to automatically start incremental crawls to process the latest changes to items in the corresponding data repositories.
This helps to keep the index fresh for items in this content source.
Search service application administrators can still configure full crawls as needed.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------------EXAMPLE---------------------
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication
PS C:\>$cs = Get-SPEnterpriseSearchCrawlContentSource -Identity 'Local SharePoint Sites' -SearchApplication $ssa
PS C:\>$cs | Set-SPEnterpriseSearchCrawlContentSource -ScheduleType Full -DailyCrawlSchedule -CrawlScheduleRunEveryInterval 30
PS C:\>$cs | Set-SPEnterpriseSearchCrawlContentSource -ScheduleType Incremental -DailyCrawlSchedule -CrawlScheduleRepeatInterval 60 -CrawlScheduleRepeatDuration 1440
```

This example returns the "Local SharePoint Sites" content source and creates a schedule to run a full crawl every 30 days and an incremental crawl every hour every day.


## PARAMETERS

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

### -BDCApplicationProxyGroup
Specifies the proxy to use for a business type content source.
This proxy group must contain a default Business Data Connectivity Metadata Store proxy.


```yaml
Type: SPServiceApplicationProxyGroupPipeBind
Parameter Sets: (All)
Aliases: 
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

### -CrawlPriority
Specifies the priority of this content source.

The type must be one of the following integers: 1= Normal, 2=High.


```yaml
Type: CrawlPriority
Parameter Sets: (All)
Aliases: p
Accepted values: Normal, High
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CrawlScheduleDaysOfMonth
Specifies the days on which to crawl when the MonthlyCrawlSchedule parameter is set.


```yaml
Type: Int32
Parameter Sets: MonthlyDate
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CrawlScheduleDaysOfWeek
Specifies the days on which to crawl when the WeeklyCrawlSchedule parameter is set.


```yaml
Type: DaysOfWeek
Parameter Sets: Weekly
Aliases: 
Accepted values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Weekdays, Saturday, Weekends, Everyday
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CrawlScheduleMonthsOfYear
Specifies the months on which to crawl when the MonthlyCrawlSchedule parameter is set.


```yaml
Type: MonthsOfYear
Parameter Sets: MonthlyDate
Aliases: month
Accepted values: January, February, March, April, May, June, July, August, September, October, November, December, AllMonths
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CrawlScheduleRepeatDuration
Specifies the number of times to repeat the crawl schedule.


```yaml
Type: Int32
Parameter Sets: MonthlyDate, Weekly, Daily
Aliases: duration
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CrawlScheduleRepeatInterval
Specifies the number of minutes between each repeat interval for the crawl schedule


```yaml
Type: Int32
Parameter Sets: MonthlyDate, Weekly, Daily
Aliases: interval
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CrawlScheduleRunEveryInterval
Specifies the interval between crawls.

When the DailyCrawlSchedule parameter is set, specifies the number of days between crawls.

When the WeeklyCrawlSchedule parameter is set, specifies the number of weeks between crawls.


```yaml
Type: Int32
Parameter Sets: Weekly, Daily
Aliases: every
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CrawlScheduleStartDateTime
Specifies the initial date of the crawl.
The default value is midnight on the current day.


```yaml
Type: DateTime
Parameter Sets: MonthlyDate, Weekly, Daily
Aliases: start
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomProtocol
Specifies the custom protocol, handled by the custom connector, to use for this content source.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DailyCrawlSchedule
Base schedule on days between crawls.


```yaml
Type: SwitchParameter
Parameter Sets: Daily
Aliases: daily
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableContinuousCrawls
Specifies the value of the EnableContinuousCrawls parameter: True or False.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the crawl content source to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a ContentSource object (for example, ContentSource1); or an instance of a valid ContentSource object.


```yaml
Type: ContentSourcePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -LOBSystemSet
Specifies a comma-separated list of Business Data Connectivity Metadata Store system names and system instance names for a business type content source.


```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxPageEnumerationDepth
Specifies, for a web or custom type content source, the number of page hops that the crawler can make from the start address to a content item.


```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSiteEnumerationDepth
Specifies, for a web or custom type content source, the number of site hops that the crawler can take from the start address to a content item.


```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonthlyCrawlSchedule
Base the schedule on months between crawls.


```yaml
Type: SwitchParameter
Parameter Sets: MonthlyDate
Aliases: monthly
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the new display name for the content source.

The type must be a valid name of a content source; for example, ContentSource1.


```yaml
Type: String
Parameter Sets: (All)
Aliases: n
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveCrawlSchedule
Deletes the specified crawl.


```yaml
Type: SwitchParameter
Parameter Sets: RemoveSchedule
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScheduleType
Specifies the type of crawl schedule.

The type must be one of the following values: Full or Incremental.


```yaml
Type: ContentSourceCrawlScheduleType
Parameter Sets: MonthlyDate, Weekly, RemoveSchedule
Aliases: 
Accepted values: Full, Incremental, Full, Incremental
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: ContentSourceCrawlScheduleType
Parameter Sets: Daily
Aliases: 
Accepted values: Full, Incremental, Full, Incremental
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the content source.

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

### -StartAddresses
Specifies the comma-separated list of URLs at which to start a crawl for this content source.

The type must be a valid URL, in the form http://server_name.


```yaml
Type: String
Parameter Sets: (All)
Aliases: s
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tag
Specifies the URL for the page to modify the settings for a custom content source.
The string that specifies the URL can contain a maximum of 1,024 characters.

The type must be a valid URL, in the form http://server_name.


```yaml
Type: String
Parameter Sets: (All)
Aliases: t
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WeeklyCrawlSchedule
Base the schedule on weeks between crawls.


```yaml
Type: SwitchParameter
Parameter Sets: Weekly
Aliases: weekly
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

### Microsoft.Office.Server.Search.Cmdlet.ContentSourcePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
