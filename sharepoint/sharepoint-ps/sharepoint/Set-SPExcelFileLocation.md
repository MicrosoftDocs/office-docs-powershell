---
external help file: 
applicable: SharePoint Server 2013
schema: 2.0.0
---

# Set-SPExcelFileLocation

## SYNOPSIS
Sets properties of a trusted file location for Excel Services Application.


## SYNTAX

```
Set-SPExcelFileLocation [-Identity] <SPExcelFileLocationPipeBind>
 -ExcelServiceApplication <SPExcelServiceApplicationPipeBind> [-AbortOnRefreshOnOpenFail] [-Address <String>]
 [-AssignmentCollection <SPAssignmentCollection>] [-AutomaticVolatileFunctionCacheLifetime <Int32>]
 [-ChartAndImageSizeMax <Int32>] [-ConcurrentDataRequestsPerSessionMax <Int32>] [-Confirm]
 [-DefaultWorkbookCalcMode <DefaultWorkbookCalcMode>] [-Description <String>] [-DisplayGranularExtDataErrors]
 [-ExternalDataAllowed <AllowExternalData>] [-IncludeChildren] [-LocationType <LocationType>]
 [-ManualExtDataCacheLifetime <Int32>] [-NewWorkbookSessionTimeout <Int32>]
 [-PeriodicExtDataCacheLifetime <Int32>] [-RequestDurationMax <Int32>] [-RESTExternalDataAllowed]
 [-SessionTimeout <Int32>] [-ShortSessionTimeout <Int32>] [-UdfsAllowed] [-WarnOnDataRefresh] [-WhatIf]
 [-WorkbookSizeMax <Int32>] [-ChartRenderDurationMax <Int32>] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPExcelFileLocation` cmdlet sets properties of a location from which Excel Services Application loads workbooks.
Excel Services Application  loads only workbooks that are stored in a trusted file location.
Properties of trusted file locations control how workbooks can be used when they are loaded on Excel Services Application.
Excel Services Application always enforces the properties that are defined by the trusted file location from which a workbook was loaded.
The properties that are used by the trusted file location are determined by comparison of the file path for the workbook with the Address parameter of the trusted file location.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------EXAMPLE 1--------------
```
C:\PS>Get-SPExcelFileLocation -ExcelServiceApplication "My Excel Service" | where { $_.externaldataallowed -eq "DclAndEmbedded"} | Set-SPExcelFileLocation -ExernalDataAllowed Dcl
```

This example gets every trusted file location for the Excel Services Application Web service application named My Excel Service that allows data connections to load from workbook files and specifies that the locations must use a data connection library to load data connections.


### --------------EXAMPLE 2--------------
```
C:\PS>Get-SPExcelServiceApplication | Get-SPExcelFileLocation | where {$_.Address -eq "http://"} | Set-SPExcelFileLocation -Description "This is the default trusted file location for Excel Services Application. It allows any file from anywhere in SharePoint to load."
```

This example changes the description of the default file location for every Excel Services Application Web service application in the farm.


## PARAMETERS

### -Identity
Specifies the FileLocation object to update.
The name must be unique in the list of file locations.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid string identifying the file location, in the form http://myPortal/myTeam; a valid string identifying the path, in the form C:\folder_name; or an instance of a valid SPExcelFileLocation object.

```yaml
Type: SPExcelFileLocationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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
Specifies that the load of a Excel Services Application file automatically fails if an automatic data refresh operation fails when the file is opened.
The load is failed only if the following conditions are true:

-- User has read-only permissions to the Excel Services Application file.
-- Workbook file has data connections that refresh automatically when the Excel file is opened.

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

### -Address
System.String

Specifies a Web folder, or file directory from which Excel Services Application can load workbooks.

The type must be a valid URL, in the form http://myPortal/myTeam; or a valid UNC path in form, \\\\server_name\folder_name

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

-1, calculate once when the workbook loads

0, always calculate

1 to 2073600, cache 1 second to 24 days

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
For more information, type the following command: `get-help about_commonparameters`

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
All of the settings except the File setting override the workbook settings.
If this parameter is changed, it is applied to all new sessions on Excel Services Application when the ConfigDB properties cache is refreshed.
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
Specifies the type of external data access allowed for workbooks:
None specifies that data refresh is disabled.
Dcl specifies that data is refreshed only when it uses a connection file in a trusted data connection library.
DclandEmbedded specifies that a data connection library can be used but is not required.
The scope of this setting is the trusted location.

The default value is None.

The type must be one of the following: None, Dcl, or DclAndEmbedded.

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
For example, if the trusted file location is http://portal, and IncludeChildren is true, then http://portal/subSite is also trusted, as is any subURL under the URL specified in Address.

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
The type of location.
LocationType indicates how Excel Services Application retrieves files from that location specified in Address.
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
Specifies the time, in seconds, that Excel Services Application waits before re-issuing a manual, or user-initiated, external data request.
During this period, the results from the previous external data request may be returned from an external data cache.

Valid values are:

-1  Never refresh after first query

1 to 2073600   Caches 1 second to 24 days.

The default value is 300.

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
Specifies the time, in seconds, that a session for a new, unsaved, workbook will remain active on Excel Services Application with no user activity.
The default value 1800.
Valid values include the following:

-1, session never expires

0, session expires at the end of a single request

1 to 2073600, remain active 1 second to 24 days.

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
Specifies the time, in seconds, that Excel Services Application waits before re-issuing an on-open or periodic (that is, automatic) external data request.
During this period, the results from the previous external data request may be returned from an external data cache.
A value -1 specifies to never refresh after the first query.

The type must be -1, 0, or an integer in the range of 1 to 2073600.

The default value is 300.

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
After this time elapses the request is timed out.

The type must be -1 (no limit) or an integer in the range of 1 to 2073600.

The default value is 300.

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

The RESTExternalDataAllowed parameter has no effect if  the External DataAllowed parameter is set to None.

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
Specifies the time, in seconds, that a session will remain active on Excel Services Application with no user activity.
The default is 300 seconds.
The default value is 300.
Valid values include:

-1, session never expires

0, session expires at the end of a single request

1 to 2073600, remain active 1 second to 24 days

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
After this time has elapsed, if the user is not active, then the session is closed.
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
Specifies that user-defined functions can be called by workbooks loaded from the trusted file location that is specified in Address.

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
For more information, type the following command: `get-help about_commonparameters`

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
