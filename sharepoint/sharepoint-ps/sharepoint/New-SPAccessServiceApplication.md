---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPAccessServiceApplication

## SYNOPSIS
Creates a new instance of an Access Services application in SharePoint Server.

## SYNTAX

```
New-SPAccessServiceApplication [-Name <String>] -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-CacheTimeout <Int32>] [-ColumnsMax <Int32>] [-Confirm]
 [-Default] [-NonRemotableQueriesAllowed] [-OrderByMax <Int32>] [-OuterJoinsAllowed]
 [-OutputCalculatedColumnsMax <Int32>] [-PrivateBytesMax <Int32>] [-RecordsInTableMax <Int32>]
 [-RequestDurationMax <Int32>] [-RowsMax <Int32>] [-SessionMemoryMax <Int32>]
 [-SessionsPerAnonymousUserMax <Int32>] [-SessionsPerUserMax <Int32>] [-SourcesMax <Int32>]
 [-TemplateSizeMax <Int32>] [-WhatIf] [-ApplicationLogSizeMax <Int32>] [<CommonParameters>]
```

## DESCRIPTION
The New-SPAccessServiceApplication cmdlet creates a new instance of an Access Services application in SharePoint Server 2013.
After you create a new Access Services application, use the Set-SPAccessServiceApplication cmdlet to modify its global settings.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------EXAMPLE 1---------------- 
```
C:\PS>New-SPAccessServiceApplication -Name "MyAccessService" -SPIisWebServiceApplicationPool MyAppPool
```

This example creates a new instance of Access Services named MyAccessService that runs under the application pool named MyAppPool.

### ------------EXAMPLE 2---------------- 
```
C:\PS>New-SPAccessServiceApplication -Name "MyAccessService" -SPIisWebServiceApplicationPool MyAppPool -SessionsPerUserMax 25
```

This example creates a new instance of Access Services named MyAccessService that runs under the application pool named MyAppPool, which allows up to 25 sessions per user on each back end application server machine on which Access Services runs.

## PARAMETERS

### -Name
Specifies the display name of the Access Services application to create.
The name can contain a maximum of 128 characters and can contain the comma (,), equal sign (=), or colon (:) characters provided they are enclosed in quotation marks.

The type must be a valid name of an Access Services application; for example, AccessSrvApp1.

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

### -ApplicationPool
Specifies the existing Internet Information Services (IIS) application pool to run the Web service in for the new Access Services application.

The type must be a valid instance of a SPIisWebServiceApplicationPool object.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
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

### -CacheTimeout
Specifies the number of seconds that a data cache will remain active on Access Services with no user activity.
Valid values include: -1, cache never times out; 1 to 2073600, cache remains active from 1 second to 24 days.

The type must be the integers -1, or an integer in the range of 1 to 2073600 (24 days).
The default value is 300.

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

### -ColumnsMax
Specifies the maximum number of columns that a list involved in a query can contain, or that the output of the query can contain.
The default value is 30.

The type must be an integer in the range of 1 to 255

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

### -Default
Specifies that the service application is associated with Web applications by adding this service application's proxy to the farm's default proxy list.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NonRemotableQueriesAllowed
Specifies that queries that cannot be remoted to the database tier can run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrderByMax
Specifies the maximum number of Order By clauses in the query.
The default value is 4.

The type must be an integer in the range of 1 to 8.

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

### -OuterJoinsAllowed
Specifies that left and right outer joins are supported.
Inner joins are always supported.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputCalculatedColumnsMax
Specifies the maximum number of calculated columns that can be included in the output as a part of the query.
Calculated columns in the underlying list are not included.
The default value is 10.

The type must be an integer in the range of 1 to 32.

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

### -PrivateBytesMax
Specifies the maximum private bytes in megabytes (MB) that can be used by Access Services.
When set to -1, Access Services defaults to 75 percent of physical memory on the machine.
Valid values are -1 (no limit), and from 1 to any positive integer.The default value is -1.

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

### -RecordsInTableMax
Specifies the maximum number of records allowed for a table in the Access Services application.
Valid values include: -1, no limit, and 1 to any positive integer.
The default value is 500000.

The type must be the integer -1, or an integer in the range of 1 to MaxInt.

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

### -RequestDurationMax
Specifies the maximum number of seconds that a request to perform an operation can use before the request times out.
Valid values include: -1, no limit, 1 to 2073600, cache remains active 1 second to 24 days.
The default value is 30.

The type must be the integer -1, or an integer in the range of 1 to 2073600 (24 days)

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

### -RowsMax
Specifies the maximum number of rows that a list involved in a query can have, or that the output of the query can have.
The default value is 50000.

The type must be an integer in the range of 1 to 200000.

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

### -SessionMemoryMax
Specifies the maximum allowable size, in megabytes, of an individual session.
Valid values include 0, disable property, and 1 to 4095.
The default value is 64.

The type must be the integer 0, or an integer in the range of 1 to 4095.

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

### -SessionsPerAnonymousUserMax
Specifies the maximum number of sessions allowed per user.
If this maximum is reached, the oldest session will be deleted when a new session is started.
Valid values include: -1, no limit, and 1 to any positive integer.
The default value is 10.

The type must be the integer -1, or an integer in the range of 1 to MaxInt.

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

### -SessionsPerUserMax
Specifies the maximum number of sessions allowed per user.
If this maximum is reached, the oldest session will be deleted when a new session is started.
Valid values include: -1, no limit, and 1 to any positive integer.
The default value is 10.

The type must be the integer -1, or an integer in the range of 1 to MaxInt.

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

### -SourcesMax
Specifies the maximum number of lists that can be used as input to a query at one time.
The default value is 8.

The type must be an integer in the range of 1 to 20.

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

### -TemplateSizeMax
The maximum allowable size in megabytes allowed for Access templates (.accdt file files) uploaded into the solution gallery.
Valid values: -1(no limit), from 1 to any positive integer.

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

### -ApplicationLogSizeMax
{{Fill ApplicationLogSizeMax Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

