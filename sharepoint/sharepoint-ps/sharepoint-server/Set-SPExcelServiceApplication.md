---
external help file: 
applicable: SharePoint Server 2013
title: Set-SPExcelServiceApplication
schema: 2.0.0
---

# Set-SPExcelServiceApplication

## SYNOPSIS
Sets global properties for Excel Services Application.


## SYNTAX

### ExistingTargetApplicationParameterSet
```
Set-SPExcelServiceApplication [[-Identity] <SPExcelServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [-CachingOfUnusedFilesEnable] [-Confirm]
 [-CrossDomainAccessAllowed] [-EncryptedUserConnectionRequired <EncryptedConnectionMode>]
 [-ExternalDataConnectionLifetime <Int32>] [-FileAccessMethod <FileAccessMethod>]
 [-LoadBalancingScheme <LoadBalancingScheme>] [-MemoryCacheThreshold <Int32>] [-PrivateBytesMax <Int32>]
 [-SessionsPerUserMax <Int32>] [-SiteCollectionAnonymousSessionsMax <Int32>]
 [-TerminateProcessOnAccessViolation] [-ThrottleAccessViolationsPerSiteCollection <Int32>]
 [-UnattendedAccountApplicationId <String>] [-UnusedObjectAgeMax <Int32>] [-WhatIf] [-WorkbookCache <String>]
 [-WorkbookCacheSizeMax <Int32>] [-UseEffectiveUserName] [-WorkbookModelUsageTracker <String>]
 [<CommonParameters>]
```

### NewTargetApplicationParameterSet
```
Set-SPExcelServiceApplication [[-Identity] <SPExcelServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [-CachingOfUnusedFilesEnable] [-Confirm]
 [-CrossDomainAccessAllowed] [-EncryptedUserConnectionRequired <EncryptedConnectionMode>]
 [-ExternalDataConnectionLifetime <Int32>] [-FileAccessMethod <FileAccessMethod>]
 [-LoadBalancingScheme <LoadBalancingScheme>] [-MemoryCacheThreshold <Int32>] [-PrivateBytesMax <Int32>]
 [-SessionsPerUserMax <Int32>] [-SiteCollectionAnonymousSessionsMax <Int32>]
 [-TerminateProcessOnAccessViolation] [-ThrottleAccessViolationsPerSiteCollection <Int32>]
 [-UnusedObjectAgeMax <Int32>] [-WhatIf] [-WorkbookCache <String>] [-WorkbookCacheSizeMax <Int32>]
 [-UnattendedServiceAccount <PSCredential>] [-UseEffectiveUserName] [-WorkbookModelUsageTracker <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The `Set-ExcelServiceApplication` cmdlet changes global runtime properties for Excel Services Application. 
Changes to properties that are made by using this cmdlet affect all machines in the farm that are running an instance of the specified Excel Services Application Web service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------EXAMPLE 1--------------
```
C:\PS>Set-SPExcelServiceApplication ExcelServiceTestApplication -sessionsperusermax 10
```

This example sets the Excel Services Application Web service application named ExcelServiceTestApplication to enable each user to open no more than 10 sessions at one time on a back-end application server that runs Excel Services Application.


### --------------EXAMPLE 2--------------
```
C:\PS>Get-SPExcelServiceApplication | where{ $_.privatebytesmax -ne -1 } | Set-SPExcelServiceApplication -PrivateBytesMax -1
```

This example displays every Excel Services Application application that runs in the farm that is using a user-specified value for the maximum number of private bytes of memory on the computer and then sets that value to -1, which indicates that Excel Services Application will consume 50 percent of the available memory resources.


## PARAMETERS

### -Identity
Specifies the SPExcelServiceApplication object to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an Excel Services Application Web service application in the farm (for example, MyExcelService1); or an instance of a valid SPExcelServiceApplication object.

```yaml
Type: SPExcelServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
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
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CachingOfUnusedFilesEnable
Specifies that files that are no longer used by Excel Services Application can remain in the cache for later use.
The default is true when the parameter is not specified on the command.

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

### -CrossDomainAccessAllowed
Specifies that trusted workbooks and data connection files can be requested and rendered by Web Parts or pages that reside in other HTTP domains.

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

### -EncryptedUserConnectionRequired
Requires that encryption is used between the end-user and the server running Excel Services Application.
The scope of this setting is the logical server.
The default value is None.

The type must be one of the following: None or Connection.

```yaml
Type: EncryptedConnectionMode
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDataConnectionLifetime
Specifies the maximum number of seconds that an external data connection can remain open in the connection pool.

Valid values are:

-1  Never recycle

1 to 2073600  Remain active 1 second to 24 days.

The default value is 1800.

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

### -FileAccessMethod
Specifies the authentication method that Excel Services Application uses to retrieve files.
UseFileAccessAccount specifies that all workbooks always use the credentials of the service account running Excel Services Application.
UseImpersonation specifies that Excel Services Application retrieves the workbook files as the user who makes the request.
The default value is UseImpersonation.

The type must be one of the following: UseImpersonation or UseFileAccessAccount.

```yaml
Type: FileAccessMethod
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoadBalancingScheme
Specifies the load-balancing schema that is used by the Excel Services Application Web service application to send requests to different back-end Excel Services Application computers.
The default value is WorkbookURL.

The type must be one of the following: RoundRobin, Local, or WorkbookURL.

```yaml
Type: LoadBalancingScheme
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemoryCacheThreshold
Specifies the percentage of the maximum private bytes that can be allocated to inactive objects.
When the memory cache threshold is exceeded, cached objects that are not currently in use are released.
Setting this value to 0 disables caching of inactive objects.
The default value is 90.

The type must be an integer in the range of 0 to 95.

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

### -PrivateBytesMax
Specifies the maximum private bytes, in megabytes, that are used by Excel Services Application.
When set to -1, the maximum private bytes defaults to 50 percent of physical memory on the computer.
Valid values include -1 for no limit, and any positive integer.
The default value is -1.

The type must be -1 or any positive integer.

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

### -SessionsPerUserMax
Specifies the maximum number of sessions allowed for a user.
If a user reaches this maximum the oldest session is deleted when a new session is started.
Valid values include -1 for no limit, and any positive integer.
The default value is 25.

The type must be -1 or any positive integer.

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

### -SiteCollectionAnonymousSessionsMax
Specifies the maximum number of anonymous sessions allowed per site collection.
A value of 0 specifies that no anonymous sessions are allowed.
Valid values include -1 for no limit, 0 to disable the setting, or any positive integer.
The default value is 25.

The type must be -1, 0, or any positive integer.

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

### -TerminateProcessOnAccessViolation
Terminates Excel Services Application when an access violation occurs in the process.

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

### -ThrottleAccessViolationsPerSiteCollection
Specifies that if a workbook causes an access violation error on Excel Services Application, all files originating from that workbook's site collection are blocked from loading for the specified period (in seconds).
Existing sessions for files on that site collection are unaffected.
Valid values include 0 to disable the setting, and the range of 1 to 2073600 seconds (24 days).
The default value is 0.

The type must be an integer value in the range of 0 to 2073600.

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

### -UnattendedAccountApplicationId
Specifies that the application ID that is used to look up the unattended service account credentials from the secure storage service that is specified by the UnattendedAccountSecureServiceAppName parameter.
The secure storage service is contacted when this parameter is set and specific error cases occur.
Valid values are alphanumeric strings with a maximum of 256 characters.
The default value is an empty string.

The type must be a valid string of alphanumeric characters; for example, UnattendedServiceAccountID.

The unattended account is a single account that all workbooks can use to refresh data.
An unattended account is required when workbook connections specify None for authentication, or when any non-Windows credentials are used to refresh data.

```yaml
Type: String
Parameter Sets: ExistingTargetApplicationParameterSet
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnusedObjectAgeMax
Specifies the maximum amount of time, in minutes, that objects not currently used in a session are kept in the memory cache.
Valid values include -1 for no maximum setting, and a positive integer in the range of 1 to 34560 minutes (24 days).
The default value is -1.

The type must be -1, or an integer in the range of 1 to 34560.

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

### -WorkbookCache
Specifies the local file system location of the cache that is used to store workbooks that are used by Excel Services Application.

If no value is specified, the default value is a subdirectory in the system temporary directory.

The type must be a valid path in either of the following forms:

-- C:\folder_name
-- \\\\server_name\folder_name

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

### -WorkbookCacheSizeMax
Specifies the maximum allowable size, in megabytes, of an individual session.
The default value is 0.

The type must be any positive integer.

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

### -UnattendedServiceAccount
{{Fill UnattendedServiceAccount Description}}

```yaml
Type: PSCredential
Parameter Sets: NewTargetApplicationParameterSet
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseEffectiveUserName
{{Fill UseEffectiveUserName Description}}

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

### -WorkbookModelUsageTracker
{{Fill WorkbookModelUsageTracker Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
