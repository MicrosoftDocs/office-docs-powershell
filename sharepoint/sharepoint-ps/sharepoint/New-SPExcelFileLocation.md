---
external help file: 
applicable: SharePoint Server 2013
schema: 2.0.0
---

# New-SPExcelFileLocation

## SYNOPSIS
Adds a new trusted location to Excel Services Application.

## SYNTAX

```
New-SPExcelFileLocation -Address <String> -ExcelServiceApplication <SPExcelServiceApplicationPipeBind>
 [-AbortOnRefreshOnOpenFail] [-AssignmentCollection <SPAssignmentCollection>]
 [-AutomaticVolatileFunctionCacheLifetime <Int32>] [-ChartAndImageSizeMax <Int32>]
 [-ConcurrentDataRequestsPerSessionMax <Int32>] [-Confirm] [-DefaultWorkbookCalcMode <DefaultWorkbookCalcMode>]
 [-Description <String>] [-DisplayGranularExtDataErrors] [-ExternalDataAllowed <AllowExternalData>]
 [-IncludeChildren] [-LocationType <LocationType>] [-ManualExtDataCacheLifetime <Int32>]
 [-NewWorkbookSessionTimeout <Int32>] [-PeriodicExtDataCacheLifetime <Int32>] [-RequestDurationMax <Int32>]
 [-RESTExternalDataAllowed] [-SessionTimeout <Int32>] [-ShortSessionTimeout <Int32>] [-UdfsAllowed]
 [-WarnOnDataRefresh] [-WhatIf] [-WorkbookSizeMax <Int32>] [-ChartRenderDurationMax <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
The New-SPExcelFileLocation cmdlet adds a new location to the list of trusted file locations in an Excel Services Application Web service application. 
Excel Services Application loads only workbooks that are stored in a trusted file location.
Properties of trusted file locations control how workbooks can be used when loaded on Excel Services Application.
Excel Services Application always enforces the properties defined by the trusted file location from which a workbook was loaded.
The properties that the trusted file location uses are determined through comparison of the file path for the workbook with the Address parameter of the trusted file location.

The longest match takes precedence.
For example, if http://portal/site/ and http://portal/site/subsite are trusted locations, and you load a workbook from the subsite, the application uses the properties from the subsite trusted location because it has the longest matching address.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1-------------- (SharePoint Server 2013)
```
C:\PS>Get-SPExcelServiceApplication -identity "MyExcelService" | New-SPExcelFileLocation -address "http://myPortal/myTeam" -includechildren -locationType SharePoint -description "This is my team's site on myPortal." -workbooksizemax 50 -externaldataallowed DclAndEmbedded -WarnOnDataRefresh:$false
```

This example adds a new trusted file location to the list of trusted file locations that is in the Excel Services Application Web service application named MyExcelService.

This example enables workbooks to load from any child or subfolder that starts with http://myPortal/myTeam.
All workbooks loaded from this location must be smaller than 50 megabytes (MB) in size.
The workbooks can refresh external data by using connections that are embedded in the workbook file or stored in a data connection library.
A warning message that the workbook is attempting to refresh external data will not be displayed.

### --------------EXAMPLE 2-------------- (SharePoint Server 2013)
```
C:\PS>Get-SPExcelServiceApplication -identity "MyExcelService" | New-SPExcelFileLocation -address http://myPortal/myTeam/managers -locationType SharePoint -description "This is the manager's subsite for myTeam."
```

This example adds a new trusted file location to the list of trusted file locations that is in the Excel Services Application Web service application named MyExcelService with a given address and description.

## PARAMETERS

### -Address
Specifies a Web folder, or file directory from which Excel Services Application can load workbooks.

The type must be a valid URL, in the form http://myPortal/myTeam; or a valid UNC path in form, \\\\server_name\folder_name

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelServiceApplication
Specifies the Excel Services Application Web service application that contains the SPExcelFileLocation list object.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an Excel Services Application Web service application in the farm (for example, MyExcelService1); or an instance of a valid SPExcelServiceApplication object.

```yaml
Type: SPExcelServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AbortOnRefreshOnOpenFail
Specifies that the loading of a Excel Services Application file automatically fails if an automatic data refresh operation fails when the file is opened.
The load is failed only if the following conditions are true:

- The user has SharePoint Product and Technologies read-only permissions to the file.
- The workbook file has data connections that are refreshed automatically when the Excel Services Application file is opened.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

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
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AutomaticVolatileFunctionCacheLifetime
Specifies the maximum time, in seconds, that a computed value for a volatile function is cached for automatic recalculations.
Valid values include:

-1 Calculates once when the workbook loads.

0 Always calculates.

1 to 2073600   Caches 1 second to 24 days.
The default integer value is 300.

The type must be the integers -1 or 0, or an integer value in the range of 1 to 2073600.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChartAndImageSizeMax
Specifies the maximum size, in megabytes, of a chart or image that can be opened.
The default value is 1.

The type must be a valid integer greater than 0.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConcurrentDataRequestsPerSessionMax
Specifies the maximum number of concurrent external data requests allowed in each session.
If a session must issue more than this number of requests, additional requests must be queued.
The scope of this setting is the logical server.
The default value is 5.

The type must be a positive integer.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

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
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultWorkbookCalcMode
Specifies the calculation mode of workbooks.
Settings other than File override the workbook settings.
The default setting is File.

The type must be one of the following: File, Manual, Auto, or AutoDataTables.

```yaml
Type: DefaultWorkbookCalcMode
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies a friendly description for the new file location.

The type must be a valid string; for example, this is the file location of the monthly sales reports.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayGranularExtDataErrors
Displays granular error messages for external data failures for files in this location.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDataAllowed
Specifies the type of external data access allowed for workbooks.
None specifies that data refresh is disabled.
Dcl specifies that data is refreshed only when it uses a connection file in a trusted data connection library.
DclandEmbedded specifies that a data connection library can be used but is not required.
The scope of this setting is the trusted location.
The default value is None.

The type must be any of the following settings:

None

Dcl

DclAndEmbedded

```yaml
Type: AllowExternalData
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeChildren
Indicates that subordinate URLs, directories and libraries are trusted.
For example, if the trusted file location is http://portal, and IncludeChildren is true, http://portal/subSite is also trusted, as is any URL subordinate to the URL specified in Address.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationType
Specifies the type of location.
Location type indicates how Excel Services Application retrieves files from the location specified in Address.
The default setting is the SharePoint type.
The default value is SharePoint.

The type must be one of the following: SharePoint, UNC, or HTTP.

```yaml
Type: LocationType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManualExtDataCacheLifetime
Specifies the time, in seconds, that Excel Services Application waits before it re-issues a manual, or user-initiated, external data request.
During this time period, the results from the previous external data request can be returned from an external data cache.
The default value is 300.

The valid values are any one of the following items:

-1 Never refresh after first query.1 to 2073600- Caches 1 second to 24 days.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewWorkbookSessionTimeout
Specifies the time, in seconds, that a session for a new, unsaved, workbook remains active on Excel Services Application with no user activity.
Valid values include the following:

-1   Session never expires.

0   Session expires at the end of a single request.

1 to 2073600   Remains active 1 second to 24 days.
The default value is 1800.

The type must be -1, 0, or an integer in the range of 1 to 2073600.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PeriodicExtDataCacheLifetime
Specifies the time, in seconds, that Excel Services Application waits before it re-issues an on-open or periodic (that is, automatic) external data request.
During this time period, the results from the previous external data request can be returned from an external data cache.
A value of -1 specifies never to refresh after the first query.
The default value is 300.

The type must be -1, 0, or integer in the range of 1 to 2073600.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestDurationMax
Specifies the maximum duration, in seconds, for a single request in a session.
After this time elapses, the request times out.
The default value is 300.

The type must be -1 (no limit) or an integer in the range of 1 to 2073600.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RESTExternalDataAllowed
Specifies whether requests from the Representational State Transfer (REST) Application Programming Interface (API) are permitted to refresh external data connections.
The RESTExternalDataAllowed parameter has no effect if ExternalDataAllowed parameter is set to None.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SessionTimeout
Specifies the time, in seconds, that a session remains active on Excel Services Application with no user activity.
Valid values include the following:

-1   Session never expires.

0   session expires at the end of a single request.

1 to 2073600   Remains active 1 second to 24 days.
The default value is 300.

The type must be -1, 0, or an integer in the range of 1 to 2073600.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShortSessionTimeout
Specifies the time, in seconds, that a user has to make the initial interaction with a spreadsheet.
After this time has elapsed, if the user is not active, the session is closed.
The value must always be less than SessionTimeout.
If the ShortSessionTimeout value is greater than or equal to SessionTimeout, an error is returned.
The default value is 75.

The type must be -1 or an integer in the range of 1 to 2073600.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UdfsAllowed
Specifies that user-defined functions can be called by workbooks that are loaded from the trusted file location that is specified in Address.

The default value is False.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WarnOnDataRefresh
Specifies that a warning is displayed to the user on the first refresh of data for the workbook.
The default value is True.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

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
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkbookSizeMax
Specifies the maximum size, in megabytes, of a workbook that can be loaded.
The default value is 10.

The type must be an integer value in the range of 1 to 2000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChartRenderDurationMax
{{Fill ChartRenderDurationMax Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

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

