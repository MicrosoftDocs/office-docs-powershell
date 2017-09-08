---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPWorkManagementServiceApplication

## SYNOPSIS
Sets settings for the Work Management Service application.

## SYNTAX

```
Set-SPWorkManagementServiceApplication [-Identity] <SPWorkManagementServiceCmdletPipeBind>
 [-ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-MinimumTimeBetweenProviderRefreshes <TimeSpan>] [-MinimumTimeBetweenSearchQueries <TimeSpan>]
 [-Name <String>] [-WhatIf] [-MinimumTimeBetweenEwsSyncSubscriptionSearches <TimeSpan>]
 [-NumberOfSubscriptionSyncsPerEwsSyncRun <UInt32>] [-NumberOfUsersEwsSyncWillProcessAtOnce <UInt32>]
 [-NumberOfUsersPerEwsSyncBatch <UInt32>]
```

## DESCRIPTION
Use the Set-SPWorkManagementServiceApplication cmdlet to set settings (that is, minimum time between refreshes for aggregating tasks and load per machine for synchronization with Exchange) for the specified Work Management Service Application by using the Identity parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------EXAMPLE--------------- (SharePoint Server 2013)
```
C:\PS>$wmservice = Get-SPServiceApplication -Name "Work Management Service Application"

C:\PS>$refreshTime = New-Timespan -Minutes 10

C:\PS>Set-SPWorkManagementServiceApplication -Identity $wmservice -MinimumTimeBetweenProviderRefreshes $refreshTime
```

This example sets the minimum time between provider refreshes to 10 minutes on the service application named "Work Management Service Application".

### ---------------EXAMPLE--------------- (SharePoint Server 2016)
```
C:\PS>$wmservice = Get-SPServiceApplication -Name "Work Management Service Application"

C:\PS>$refreshTime = New-Timespan -Minutes 10

C:\PS>Set-SPWorkManagementServiceApplication -Identity $wmservice -MinimumTimeBetweenProviderRefreshes $refreshTime
```

This example sets the minimum time between provider refreshes to 10 minutes on the service application named "Work Management Service Application".

## PARAMETERS

### -Identity
Specifies the service application to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a subscription settings service application (for example, SubSettingsApp1); or an instance of a valid SPWorkManagementServiceApplication object

```yaml
Type: SPWorkManagementServiceCmdletPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ApplicationPool
Specifies the name of an application pool to use; for example, SharePoint - 1213.
If no value is specified, the default application pool is used.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinimumTimeBetweenProviderRefreshes
Specifies the minimum amount of time between cache update operations per user.
If this time has not passed since the last successful refresh request for a user, the service application does not execute new refresh requests.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinimumTimeBetweenSearchQueries
Specifies the minimum amount of time between calls to the Search Service application to discover new SharePoint task lists where a user has tasks. 
If this time has not passed since the last successful call to Search for a user, the service application does not call Search during refresh operations.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the Work Management Service application.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinimumTimeBetweenEwsSyncSubscriptionSearches
This value specifies the minimum amount of time between calls into our routine that tries to find new tenants that want to sync EWS tasks.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfSubscriptionSyncsPerEwsSyncRun
This value specifies the maximum number of tenants the service will try to sync via EWS per Timer job interval

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfUsersEwsSyncWillProcessAtOnce
This value specifies the maximum number of users a service instance machine will sync via EWS at one time across all tenants.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfUsersPerEwsSyncBatch
This value specifies the maximum number of users a service instance will try to sync on a given tenant via EWS per Timer job interval

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-SPWorkManagementServiceApplication]()

[New-SPWorkManagementServiceApplicationProxy]()

[Set-SPWorkManagementServiceApplicationProxy]()

