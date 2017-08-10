---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsDeviceUpdateConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies a collection of Device Update Web service configuration settings.
These settings are used to manage the Device Update Web service, a Microsoft Lync Server 2010 component that enables administrators to distribute firmware updates to telephones and other devices running Microsoft Lync 2010 Phone Edition.

**Below Content Applies To:** Lync Server 2013

Modifies a collection of Device Update Web service configuration settings.
These settings are used to manage the Device Update Web service, a Lync Server component that enables administrators to distribute firmware updates to telephones and other devices running Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Modifies a collection of Device Update Web service configuration settings.
These settings are used to manage the Device Update Web service, a Skype for Business Server 2015 component that enables administrators to distribute firmware updates to telephones and other devices running Skype for Business Phone Edition.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsDeviceUpdateConfiguration [[-Identity] <XdsIdentity>] [-LogCleanUpInterval <TimeSpan>]
 [-LogCleanUpTimeOfDay <DateTime>] [-LogFlushInterval <TimeSpan>] [-MaxLogCacheLimit <UInt32>]
 [-MaxLogFileSize <UInt32>] [-ValidLogFileExtensions <PSListModifier>] [-ValidLogFileTypes <PSListModifier>]
 [-Force] [-Confirm] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsDeviceUpdateConfiguration [-Instance <PSObject>] [-LogCleanUpInterval <TimeSpan>]
 [-LogCleanUpTimeOfDay <DateTime>] [-LogFlushInterval <TimeSpan>] [-MaxLogCacheLimit <UInt32>]
 [-MaxLogFileSize <UInt32>] [-ValidLogFileExtensions <PSListModifier>] [-ValidLogFileTypes <PSListModifier>]
 [-Force] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The Device Update Web service provides a way for administrators to distribute firmware updates to devices that run Microsoft Lync 2010 Phone Edition.
Periodically, administrators upload a set of device update rules to Microsoft Lync Server 2010.
After those rules have been tested and approved, they can then be applied to the appropriate devices as those devices connect to the system.
Devices check for updates when they are first powered on, then check again when a user logs on.
After that, devices will check for updates every 24 hours.

Device update configuration settings can be applied at either the global or the site scope.
The Set-CsDeviceUpdateConfiguration cmdlet enables you to make changes to a collection of settings.
For example, you can use this cmdlet to change the length of time a log file is kept before it is automatically deleted by the system).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsDeviceUpdateConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsDeviceUpdateConfiguration"}

**Below Content Applies To:** Lync Server 2013

The Device Update Web service provides a way for administrators to distribute firmware updates to devices that run Lync Phone Edition.
Periodically, administrators upload a set of device update rules to Lync Server.
After those rules have been tested and approved, they can then be applied to the appropriate devices as those devices connect to the system.
Devices check for updates when they are first powered on, then check again when a user logs on.
After that, devices will check for updates every 24 hours.

Device update configuration settings can be applied at either the global or the site scope.
The Set-CsDeviceUpdateConfiguration cmdlet enables you to make changes to a collection of settings.
For example, you can use this cmdlet to change the length of time a log file is kept before it is automatically deleted by the system).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsDeviceUpdateConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsDeviceUpdateConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

The Device Update Web service provides a way for administrators to distribute firmware updates to devices that run Skype for Business Phone Edition.
Periodically, administrators upload a set of device update rules to Skype for Business Server 2015.
After those rules have been tested and approved, they can then be applied to the appropriate devices as those devices connect to the system.
Devices check for updates when they are first powered on, then check again when a user logs on.
After that, devices will check for updates every 24 hours.

Device update configuration settings can be applied at either the global or the site scope.
The Set-CsDeviceUpdateConfiguration cmdlet enables you to make changes to a collection of settings.
For example, you can use this cmdlet to change the length of time a log file is kept before it is automatically deleted by the system).



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsDeviceUpdateConfiguration -Identity global -MaxLogFileSize 2048000 -MaxLogCacheLimit 1024000
```

Example 1 shows how Set-CsDeviceUpdateConfiguration can be used to modify the global configuration settings.
In this case, two property values are modified: the MaxLogFileSize property is set to 2048000 bytes and the MaxLogCacheLimit property is set to 1024000 bytes.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 shows how Set-CsDeviceUpdateConfiguration can be used to modify the global configuration settings.
In this case, two property values are modified: the MaxLogFileSize property is set to 2048000 bytes and the MaxLogCacheLimit property is set to 1024000 bytes.

Set-CsDeviceUpdateConfiguration -Identity global -MaxLogFileSize 2048000 -MaxLogCacheLimit 1024000

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 shows how the Set-CsDeviceUpdateConfiguration cmdlet can be used to modify the global configuration settings.
In this case, two property values are modified: the MaxLogFileSize property is set to 2048000 bytes and the MaxLogCacheLimit property is set to 1024000 bytes.

Set-CsDeviceUpdateConfiguration -Identity global -MaxLogFileSize 2048000 -MaxLogCacheLimit 1024000

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Set-CsDeviceUpdateConfiguration -Identity site:Redmond -LogFlushInterval 00:02:00
```

The preceding command modifies the LogFlushInterval property for the device update configuration settings with the Identity site:Redmond.
To do this, the Identity parameter is used to specify the settings at the Redmond site and the LogFlushInterval parameter is used to indicate the property value that be changed.
In this case, the LogFlushInterval is set to 2 minutes (00 hours: 02 minutes: 00 seconds).

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 modifies the LogFlushInterval property for the device update configuration settings with the Identity site:Redmond.
To do this, the Identity parameter is used to specify the settings at the Redmond site and the LogFlushInterval parameter is used to indicate the property value that be changed.
In this case, the LogFlushInterval is set to 2 minutes (00 hours: 02 minutes: 00 seconds).

Set-CsDeviceUpdateConfiguration -Identity site:Redmond -LogFlushInterval 00:02:00

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 modifies the LogFlushInterval property for the device update configuration settings with the Identity site:Redmond.
To do this, the Identity parameter is used to specify the settings at the Redmond site and the LogFlushInterval parameter is used to indicate the property value that be changed.
In this case, the LogFlushInterval is set to 2 minutes (00 hours: 02 minutes: 00 seconds).

Set-CsDeviceUpdateConfiguration -Identity site:Redmond -LogFlushInterval 00:02:00

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsDeviceUpdateConfiguration | Set-CsDeviceUpdateConfiguration -LogCleanUpInterval 14.00:00:00
```

In Example 3, all of the device configuration update settings in the organization are modified in order to set the LogCleanUpInterval to 14 days.
To do this, Get-CsDeviceUpdateConfiguration is first used to retrieve a collection of all the device update configuration settings currently in use.
This collection is then piped to Set-CsDeviceUpdateConfiguration, which uses the LogCleanUpInterval parameter to set the log clean up interval time for each item in the collection to 14 days (14 days .
00 hours : 00 minutes : 00 seconds).

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all of the device configuration update settings in the organization are modified in order to set the LogCleanUpInterval to 14 days.
To do this, Get-CsDeviceUpdateConfiguration is first used to retrieve a collection of all the device update configuration settings currently in use.
This collection is then piped to Set-CsDeviceUpdateConfiguration, which uses the LogCleanUpInterval parameter to set the log clean up interval time for each item in the collection to 14 days (14 days .
00 hours : 00 minutes : 00 seconds).

Get-CsDeviceUpdateConfiguration | Set-CsDeviceUpdateConfiguration -LogCleanUpInterval 14.00:00:00

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all of the device configuration update settings in the organization are modified in order to set the LogCleanUpInterval to 14 days.
To do this, the Get-CsDeviceUpdateConfiguration cmdlet is first used to retrieve a collection of all the device update configuration settings currently in use.
This collection is then piped to the Set-CsDeviceUpdateConfiguration cmdlet, which uses the LogCleanUpInterval parameter to set the log clean up interval time for each item in the collection to 14 days (14 days .
00 hours : 00 minutes : 00 seconds).

Get-CsDeviceUpdateConfiguration | Set-CsDeviceUpdateConfiguration -LogCleanUpInterval 14.00:00:00

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsDeviceUpdateConfiguration -Filter "site:*" | Set-CsDeviceUpdateConfiguration -LogCleanUpInterval 20.00:00:00
```

Example 4 demonstrates how you can modify a property value for all the device update configuration settings that have been configured at the site scope; in this case, the command sets the LogCleanUpInterval to 20 days (20 days .
00 hours : 00 minutes : 00 seconds).
In order to do this, the Get-CsDeviceUpdateConfiguration cmdlet is used along with the Filter parameter; the filter value "site:*" limits the returned data to settings that have an Identity that begins with the string value "site:".
This filtered collection is then piped to Set-CsDeviceUpdateConfiguration, which changes the value of the log cleanup interval for each item in the collection.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 demonstrates how you can modify a property value for all the device update configuration settings that have been configured at the site scope; in this case, the command sets the LogCleanUpInterval to 20 days (20 days .
00 hours : 00 minutes : 00 seconds).
In order to do this, the Get-CsDeviceUpdateConfiguration cmdlet is used along with the Filter parameter; the filter value "site:*" limits the returned data to settings that have an Identity that begins with the string value "site:".
This filtered collection is then piped to Set-CsDeviceUpdateConfiguration, which changes the value of the log cleanup interval for each item in the collection.

Get-CsDeviceUpdateConfiguration -Filter "site:*" | Set-CsDeviceUpdateConfiguration -LogCleanUpInterval 20.00:00:00

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 demonstrates how you can modify a property value for all the device update configuration settings that have been configured at the site scope; in this case, the command sets the LogCleanUpInterval to 20 days (20 days .
00 hours : 00 minutes : 00 seconds).
In order to do this, the Get-CsDeviceUpdateConfiguration cmdlet is used along with the Filter parameter; the filter value "site:*" limits the returned data to settings that have an Identity that begins with the string value "site:".
This filtered collection is then piped to the Set-CsDeviceUpdateConfiguration cmdlet, which changes the value of the log cleanup interval for each item in the collection.

Get-CsDeviceUpdateConfiguration -Filter "site:*" | Set-CsDeviceUpdateConfiguration -LogCleanUpInterval 20.00:00:00

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsDeviceUpdateConfiguration | Set-CsDeviceUpdateConfiguration -ValidLogFileTypes @{Remove="CELog"}
```

The preceding command removes CELog from the list of valid log file types used by the device update configuration settings.
In this command, Get-CsDeviceUpdateConfiguration is first used to retrieve a collection of all the device update configuration settings currently in use in the organization.
That collection is then piped to Set-CsDeviceUpdateConfiguration, which uses the ValidLogFileTypes parameter in order to remove CELog from the list of valid log file types.
The parameter value passed to ValidLogFileTypes, @{Remove="CELog"}, instructs Set-CsDeviceUpdateConfiguration to remove CELog from the set of valid file types.
To remove multiple files types in a single command, simply include the additional types as part of a comma-separated list.
For example:

@{Remove="CELog","Watson"}

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

Example 5 removes CELog from the list of valid log file types used by the device update configuration settings.
In this command, Get-CsDeviceUpdateConfiguration is first used to retrieve a collection of all the device update configuration settings currently in use in the organization.
That collection is then piped to Set-CsDeviceUpdateConfiguration, which uses the ValidLogFileTypes parameter in order to remove CELog from the list of valid log file types.
The parameter value passed to ValidLogFileTypes, @{Remove="CELog"}, instructs Set-CsDeviceUpdateConfiguration to remove CELog from the set of valid file types.
To remove multiple files types in a single command, simply include the additional types as part of a comma-separated list.
For example:

@{Remove="CELog","Watson"}

Get-CsDeviceUpdateConfiguration | Set-CsDeviceUpdateConfiguration -ValidLogFileTypes @{Remove="CELog"}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 removes CELog from the list of valid log file types used by the device update configuration settings.
In this command, the Get-CsDeviceUpdateConfiguration cmdlet is first used to retrieve a collection of all the device update configuration settings currently in use in the organization.
That collection is then piped to the Set-CsDeviceUpdateConfiguration cmdlet, which uses the ValidLogFileTypes parameter in order to remove CELog from the list of valid log file types.
The parameter value passed to ValidLogFileTypes, @{Remove="CELog"}, instructs the Set-CsDeviceUpdateConfiguration cmdlet to remove CELog from the set of valid file types.
To remove multiple files types in a single command, simply include the additional types as part of a comma-separated list.
For example:

@{Remove="CELog","Watson"}

Get-CsDeviceUpdateConfiguration | Set-CsDeviceUpdateConfiguration -ValidLogFileTypes @{Remove="CELog"}

## PARAMETERS

### -Identity
Unique identifier for the device update configuration settings to be modified.
To refer to the global settings, use this syntax: -Identity global.
To refer to site settings, use syntax similar to this: -Identity "site:Redmond".
Note that you cannot use wildcards when specifying an Identity.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -LogCleanUpInterval
Specifies the amount of time a device update log file is kept before it is deleted by the system.

The value must be entered in the format dd.hh:mm:ss where dd is days, hh is hours, mm is minutes, and ss is seconds.
To enter only days, you must follow the value with a period (.).

Minimum Value: 1.00:00:00 (1 Day)

Maximum Value: 365.00:00:00 (1 Year)

Default: 10.00:00:00 (10 Days)

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogCleanUpTimeOfDay
Indicates the time of day when the system checks to see if there are any expired log files that should be deleted.
(Expired log files are any files older than the value specified in by the LogCleanupInterval property.)

The value passed to the LogCleanupTimeOfDay parameter should be in the 24-hour time format hh:mm, where hh represents the hours and mm represents the minutes.
In this format, midnight is represented as 00:00; 8:30 A.M.
is represented as 08:30; and 11:52 P.M.
is represented as 23:52.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogFlushInterval
Indicates how often information stored in the log file cache is written to the actual log file.
By default, device update information is not immediately written to the log file; instead, that information is cached in memory until: 1) the log flush time interval has expired; or, 2) the cache has reached its maximum size.
If this value is set to 10 minutes (00:10:00), then information in the cache will be written to the log file every 10 minutes.
After the data has been logged the cache will be cleared.

The value must be entered in the format hh:mm:ss where hh is hours, mm is minutes, and ss is seconds.

Minimum Value: 00:01:00 (1 minute)

Maximum Value: 1:00:00 (1 hour)

Default: 00:05:00

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxLogCacheLimit
Indicates the maximum amount of information (in bytes) that can held in the log file cache before that cache must be cleared and the data written to a log file.
By default, log files are "flushed" every 5 minutes.
(For details, see the description of the parameter LogFlushInterval.) However, if the cache reaches its maximum size the information in it will automatically be written to a log file (and the cache cleared), even if the log flush interval has not yet expired.

Default: 512000

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxLogFileSize
Indicates the maximum size, in bytes, for an individual log file.
When a file reaches the maximum size, the next batch of data is automatically written to a new log file.
The old log file will be retained until the log cleanup interval has expired.

Default: 1024000

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidLogFileExtensions
**Below Content Applies To:** Lync Server 2010

Indicates the valid log file extensions that can be used with the Device Update Web service.
This list can be modified; however, there is no reason to modify the list unless you have a Lync 2010 Phone Edition-compatible device that creates log files that use a different file extension.

Default: .dmp, .clg, .clg2, .bak, .kdmp, .dat, .bin, .cat, .xml, .txt, .hex



**Below Content Applies To:** Lync Server 2013

Indicates the valid log file extensions that can be used with the Device Update Web service.
This list can be modified; however, there is no reason to modify the list unless you have a Lync Phone Edition-compatible device that creates log files that use a different file extension.

Default: .dmp, .clg, .clg2, .bak, .kdmp, .dat, .bin, .cat, .xml, .txt, .hex



**Below Content Applies To:** Skype for Business Server 2015

Indicates the valid log file extensions that can be used with the Device Update Web service.
This list can be modified; however, there is no reason to modify the list unless you have a Lync Phone Edition compatible device that creates log files that use a different file extension.

Default: .dmp, .clg, .clg2, .bak, .kdmp, .dat, .bin, .cat, .xml, .txt, .hex



```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidLogFileTypes
**Below Content Applies To:** Lync Server 2010

Indicates the log file types retained by the device update system.
The default file types include the following:

Watson.
Log files automatically generated by a device in the event of a system crash.

Config. 
Microsoft RoundTable conferencing device profiles that are created any time you configure a RoundTable device.

DiagLog.
Self-diagnostic data for RoundTable devices.

CELog.
Lync 2010 Phone logs that contain the results of functional tests as well as a record of critical system events.

Additional file types can be added if you have a Lync 2010 Phone Edition-compatible device that creates a different kind of log file.
You can also remove files.
For example, if you do not want to store CELog files then you can remove the CELog file type.



**Below Content Applies To:** Lync Server 2013

Indicates the log file types retained by the device update system.
The default file types include the following:

Watson.
Log files automatically generated by a device in the event of a system crash.

CELog.
LyncPhone logs that contain the results of functional tests and also a record of critical system events.

Additional file types can be added if you have a Lync Phone Edition-compatible device that creates a different kind of log file.
You can also remove files.
For example, if you do not want to store CELog files then you can remove the CELog file type.



**Below Content Applies To:** Skype for Business Server 2015

Indicates the log file types retained by the device update system.
The default file types include the following:

Watson.
Log files automatically generated by a device in the event of a system crash.

CELog.
Skype for Business Phone logs that contain the results of functional tests and also a record of critical system events.

Additional file types can be added if you have a Skype for Business Phone Edition-compatible device that creates a different kind of log file.
You can also remove files.
For example, if you do not want to store CELog files then you can remove the CELog file type.



```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdateConfiguration object.
Set-CsDeviceUpdateConfiguration accepts pipelined instances of the device update configuration object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdateConfiguration object.
The Set-CsDeviceUpdateConfiguration cmdlet accepts pipelined instances of the device update configuration object.

## OUTPUTS

###  
Set-CsDeviceUpdateConfiguration does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdateConfiguration object.

###  
The Set-CsDeviceUpdateConfiguration cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdateConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/4f200a03-984a-4c5b-a9c1-a866ba1851cd(OCS.14).aspx)

[Get-CsDeviceUpdateConfiguration]()

[New-CsDeviceUpdateConfiguration]()

[Remove-CsDeviceUpdateConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/4f200a03-984a-4c5b-a9c1-a866ba1851cd(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/4f200a03-984a-4c5b-a9c1-a866ba1851cd(OCS.16).aspx)

