---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPPerformancePointServiceApplication

## SYNOPSIS
Sets global runtime properties for a PerformancePoint Services application.

## SYNTAX

```
Set-SPPerformancePointServiceApplication [-Identity] <SPPerformancePointMonitoringServiceApplicationPipeBind>
 [-AnalyticQueryCellMax <Int32>] [-AnalyticQueryLoggingEnabled <Boolean>] [-ApplicationCacheEnabled <Boolean>]
 [-ApplicationCacheMinimumHitCount <Int32>] [-ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>]
 [-ApplicationProxyCacheEnabled <Boolean>] [-AssignmentCollection <SPAssignmentCollection>]
 [-CommentsDisabled <Boolean>] [-CommentsScorecardMax <Int32>] [-Confirm] [-DatabaseFailoverServer <String>]
 [-DatabaseName <String>] [-DatabaseServer <String>] [-DatabaseSQLAuthenticationCredential <PSCredential>]
 [-DataSourceQueryTimeoutSeconds <Int32>] [-DecompositionTreeMaximum <Int32>] [-ElementCacheSeconds <Int32>]
 [-FilterRememberUserSelectionsDays <Int32>] [-FilterTreeMembersMax <Int32>]
 [-IndicatorImageCacheSeconds <Int32>] [-MSMQEnabled <Boolean>] [-MSMQName <String>]
 [-SelectMeasureMaximum <Int32>] [-SessionHistoryHours <Int32>] [-SettingsDatabase <String>]
 [-ShowDetailsInitialRows <Int32>] [-ShowDetailsMaxRows <Int32>] [-ShowDetailsMaxRowsDisabled <Boolean>]
 [-TrustedContentLocationsRestricted <Boolean>] [-TrustedDataSourceLocationsRestricted <Boolean>] [-WhatIf]
 [-AnalyticResultCacheMinimumHitCount <Int32>] [-DatabaseUseWindowsAuthentication <Boolean>]
 [-DataSourceUnattendedServiceAccountTargetApplication <String>] [-FilterSearchResultsMax <Int32>]
 [-UseEffectiveUserName <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
The Set-SPPerformancePointServiceApplication cmdlet updates global runtime properties for a PerformancePoint Service application.
The changes made to properties by using this cmdlet affect all servers in the farm that run the instance of the specified PerformancePoint Service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------------EXAMPLE---------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPPerformancePointServiceApplication -Identity PPSApp_01 -DataSourceQueryTimeoutSeconds 5000
```

This example sets the Data Source Query Timeout setting to a value of 5000.
This cmdlet is equivalent to the PerformancePoint Service Settings page on the SharePoint Central Administration Web site.

### ----------------EXAMPLE---------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPPerformancePointServiceApplication -Identity PPSApp_01 -DataSourceQueryTimeoutSeconds 5000
```

This example sets the Data Source Query Timeout setting to a value of 5000.
This cmdlet is equivalent to the PerformancePoint Service Settings page on the SharePoint Central Administration Web site.

## PARAMETERS

### -Identity
Specifies the PerformancePoint Service application to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a PerformancePoint Service application (for example, PerfPointApp1); or an instance of a valid SPPerformancePointMonitoringServiceApplication object.

```yaml
Type: SPPerformancePointMonitoringServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AnalyticQueryCellMax
Specifies the maximum number of returned cells in an analytic grid.

A valid integer between 1-1,000,000,000.
The default value is 100,000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnalyticQueryLoggingEnabled
Turns on verbose logging of query events.

The type must be one of the following: True, False.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationCacheEnabled
Specifies whether rendered output cache on the application server is on (True) or off (False).
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationCacheMinimumHitCount
Specifies the minimum number of times rendered output must be requested before it is added to cache.
The default value is 2.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationPool
Specifies the existing IIS application pool to run the Web service in for the service application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an application pool (for example, AppPoolName1); or an instance of a valid IISWebServiceApplicationPool object.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ApplicationProxyCacheEnabled
Specifies rendered output cache on the web front end.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

### -CommentsDisabled
Specifies that users can add comments to scorecard cells.

The type must be one of the following: $True, $False.
The default value is $False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CommentsScorecardMax
Specifies the maximum number of comments that can be added to a scorecard.
The default value is 1000.

The type must be an integer value in the range of 1 to 1,000,000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -DatabaseFailoverServer
Specifies the name of the database server that contains the PerformancePoint Services database that must be mirrored.

This parameter was introduced in SharePoint Server 2010 with Service Pack 1 (SP1) and SharePoint Foundation 2010 with Service Pack 1 (SP1).

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

### -DatabaseName
Specifies the name of the PerformancePoint Services database that will be created when the service application is provisioned.

This parameter was introduced in SharePoint Server 2010 with Service Pack 1 (SP1) and SharePoint Foundation 2010 with Service Pack 1 (SP1).

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

### -DatabaseServer
Specifies the name of the database server where the PerformancePoint Services database will be created.
This should be the same server name that is used for the SharePoint content and configuration databases.

The value may be written as SQL instance\server if it is not referring to the default instance.

This parameter was introduced in SharePoint Server 2010 with Service Pack 1 (SP1) and SharePoint Foundation 2010 with Service Pack 1 (SP1).

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

### -DatabaseSQLAuthenticationCredential
Determines whether to use Windows authentication or SQL Server authentication when connecting to a PerformancePoint Services database.

This parameter was introduced in SharePoint Server 2010 with Service Pack 1 (SP1) and SharePoint Foundation 2010 with Service Pack 1 (SP1).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DataSourceQueryTimeoutSeconds
Specifies the time, in seconds, before a data source query times out.
The default value is 300.

The type must be an integer value in the range of 1 to 36,000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DecompositionTreeMaximum
Specifies the maximum number of items (per level) returned to the decomposition tree visualization.

A valid integer value between 1-1,000,000.
The default value is 25.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ElementCacheSeconds
Specifies the first class object cache expiration time.
The default value is 15.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterRememberUserSelectionsDays
Specifies the number of days that user filter selections are remembered.
The default value is 90.

The type must be an integer value in the range of 1 to 10,000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterTreeMembersMax
The maximum number of records to show in filter treeview control.
The default value is 500.

An integer value in the range of 1 to 100,000

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IndicatorImageCacheSeconds
Specifies the time, in seconds, that key performance indicator (KPI) icons are cached.
The default value is 10.

The type must be an integer value in the range of 1 to 3600.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MSMQEnabled
Specifies that notifications are sent to Microsoft Message Queuing (MSMQ) on content change.

The type must be one of the following: True, False.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MSMQName
Specifies the name of the queue.
The queue name can contain a maximum of  380 characters, and cannot contain the following characters: CR (ASCII 13), LF (ASCII 10), backslash (\\), plus sign (+), comma (,), or quotation marks ("").

The type must be a valid MSMQ name; for example, MessageQueue1.

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

### -SelectMeasureMaximum
Specifies the maximum number of measures to show in a dashboard Select Measure control.
The default value is 1000.

The type must be an integer value in the range of 1 to 1,000,000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SessionHistoryHours
Specifies the number of hours between clearing of expired user navigation history.
The default value is 2.

The type must be an integer value in the range of 1 to 48.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SettingsDatabase
Specifies the name of the PerformancePoint Service database used for that service application.

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

### -ShowDetailsInitialRows
Specifies the initial number of rows to retrieve for show details.
The default value is 1000.

The type must be an integer value in the range of 1 to 100,000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowDetailsMaxRows
Specifies the maximum number of rows to retrieve for show details.

The type must be an integer value in the range of 1 to 1,000,000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowDetailsMaxRowsDisabled
Turns off the ShowDetailsInitialRows setting.
If set to true, Analysis Services controls limit.

The type must be one of the following: True, False.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedContentLocationsRestricted
Specifies that only specified locations are trusted.
The default setting is false (trust all content locations).

The type must be one of the following: True, False.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedDataSourceLocationsRestricted
Specify to trust only specified data source locations.
The default is to trust all data source locations.

The type must be one of the following: True, False.
The default value is False.

```yaml
Type: Boolean
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

### -AnalyticResultCacheMinimumHitCount
{{Fill AnalyticResultCacheMinimumHitCount Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseUseWindowsAuthentication
{{Fill DatabaseUseWindowsAuthentication Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DataSourceUnattendedServiceAccountTargetApplication
{{Fill DataSourceUnattendedServiceAccountTargetApplication Description}}

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

### -FilterSearchResultsMax
{{Fill FilterSearchResultsMax Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseEffectiveUserName
{{Fill UseEffectiveUserName Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
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

