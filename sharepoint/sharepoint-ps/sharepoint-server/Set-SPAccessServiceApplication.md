---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPAccessServiceApplication
schema: 2.0.0
---

# Set-SPAccessServiceApplication

## SYNOPSIS
Sets global properties of an existing Access Services application in SharePoint Server.


## SYNTAX

```
Set-SPAccessServiceApplication [-Identity] <SPAccessServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-CacheTimeout <Int32>] [-ColumnsMax <Int32>] [-Confirm]
 [-NonRemotableQueriesAllowed] [-OrderByMax <Int32>] [-OuterJoinsAllowed] [-OutputCalculatedColumnsMax <Int32>]
 [-PrivateBytesMax <Int32>] [-RecordsInTableMax <Int32>] [-RequestDurationMax <Int32>] [-RowsMax <Int32>]
 [-SessionMemoryMax <Int32>] [-SessionsPerAnonymousUserMax <Int32>] [-SessionsPerUserMax <Int32>]
 [-SourcesMax <Int32>] [-TemplateSizeMax <Int32>] [-WhatIf] [-ApplicationLogSizeMax <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPAccessServiceApplication` cmdlet sets the global runtime properties of an existing Access Services application in SharePoint Server.
The changes made to the properties by using this cmdlet affect all machines in the farm on which this Access Services application runs.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------EXAMPLE 1------------------
```
C:\PS>Set-SPAccessServiceApplication -identity "MyAccessService" -requestDurationMax 100
```

This example sets the Access Services application named MyAccessService to let requests take up to 100 seconds before they time out.


### ------------EXAMPLE 2------------------
```
C:\PS>Get-SPAccessServiceApplication | Set-SPAccessServiceApplication -sessionsPerUserMax 5
```

This example sets every Access Services application in the farm to allow up to five sessions per user on each back-end application server computer on which Access Services runs.

First, every Access Services application is retrieved and then a new value is set by using the `Set-SPAccessServiceApplication` cmdlet.


### ------------EXAMPLE 3------------------
```
C:\PS>Get-SPAccessServiceApplication | where {$_.rowsMax -gt 50000 } | Set-SPAccessServiceApplication -rowsMax 50000
```

This example sets every Access Services application in the farm that allows more than 50,000 rows to be returned from, or used in, a query and then sets the service application to allow up to 50,000 rows only.

First, every Access Services application that has more than 50,000 rows is retrieved and then a new value is set by using the `Set-SPAccessServiceApplication` cmdlet.


## PARAMETERS

### -Identity
Specifies the Access Services application to update.

The type must be a valid name of an Access Services application; for example, AccessSrvApp1; a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or an instance of a valid SPAccessServiceApplication object.

```yaml
Type: SPAccessServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
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

### -CacheTimeout
Specifies the number of seconds that a data cache will remain active on Access services with no user activity.
Valid values include: -1, cache never times out; 1 to 2073600, cache remains active from 1 second to 24 days.

The type must be the integers -1, or an integer in the range of 1 to 2073600 (24 days).
The default value is 300.

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

### -ColumnsMax
Specifies the maximum number of columns that a list involved in a query can contain, or that the output of the query can contain.
The default value is 30.

The type must be an integer in the range of 1 to 255.

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

### -NonRemotableQueriesAllowed
Specifies that queries that cannot be sent remotely to the database tier can run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputCalculatedColumnsMax
Specifies the maximum number of calculated columns that can be included in the output as a part of the query.
Calculated columns in the underlying SharePoint list are not included.
The default value is 10.

The type must be an integer in the range of 1 to 32.

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

### -PrivateBytesMax
Specifies the maximum private bytes in megabytes that can be used by Access Services.
When set to -1 it defaults to 75 percent of physical memory on the machine.
Valid values: -1, no limit, from 1 to any positive integer.The default value is -1.

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

### -RecordsInTableMax
Specifies the maximum number of records allowed for a table in the Access Services  application.
Valid values include: -1, no limit, and 1 to any positive integer.
The default value is 500000.

The type must be the integer -1, or an integer in the range of 1 to MaxInt.

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

### -RequestDurationMax
Specifies the maximum number of seconds that a request to perform an operation can use before the request times out.
Valid values include: -1, no limit, 1 to 2073600, cache remains active 1 second to 24 days.
The default value is 30.

The type must be the integer -1, or an integer in the range of 1 to 2073600 (24 days)

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

### -RowsMax
Specifies the maximum number of rows that a list involved in a query can have, or that the output of the query can have.
The default value is 50000.

The type must be an integer in the range of 1 to 200000.

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

### -SessionMemoryMax
Specifies the maximum allowable size, in megabytes, of an individual session.
Valid values include: 0, disable property, 1 to 4095.
The default value is 64.

The type must be the integer 0, or an integer in the range of 1 to 4095.

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

### -SessionsPerAnonymousUserMax
The maximum number of sessions allowed per user.
If this maximum is reached, the oldest session will be deleted when a new session is started.
Valid values include: -1, no limit, and 1 to any positive integer.
The default value is 10.

The integer -1, or an integer in the range of 1 to MaxInt

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

### -SessionsPerUserMax
Specifies the maximum number of sessions allowed per user.
If this maximum is reached, the oldest session will be deleted when a new session is started.
Valid values include: -1, no limit, and 1 to any positive integer.
The default value is 10.

The integer -1, or an integer in the range of 1 to MaxInt.

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

### -SourcesMax
Specifies the maximum number of lists that may be used as input to a query at one time.
The default value is 8.

The type must be an integer in the range of 1 to 20.

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

### -TemplateSizeMax
The maximum allowable size in megabytes (MB) allowed for Access templates (.accdt files) uploaded into the solution gallery.
Valid values: -1, no limit, from 1 to any positive integer.

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

### -ApplicationLogSizeMax
{{Fill ApplicationLogSizeMax Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
