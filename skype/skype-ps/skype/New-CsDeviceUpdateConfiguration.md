---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsDeviceUpdateConfiguration
schema: 2.0.0
---

# New-CsDeviceUpdateConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new instance of device update configuration settings.
These settings are used to manage the Device Update Web service, a Microsoft Lync Server 2010 component that enables administrators to distribute firmware updates to telephones and other devices running Microsoft Lync 2010 Phone Edition.

**Below Content Applies To:** Lync Server 2013

Creates a new instance of device update configuration settings.
These settings are used to manage the Device Update Web service, a Lync Server component that enables administrators to distribute firmware updates to telephones and other devices running Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new instance of device update configuration settings.
These settings are used to manage the Device Update Web service, a Skype for Business Server 2015 component that enables administrators to distribute firmware updates to telephones and other devices running Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsDeviceUpdateConfiguration [-Identity] <XdsIdentity> [-LogCleanUpInterval <TimeSpan>]
 [-LogCleanUpTimeOfDay <DateTime>] [-LogFlushInterval <TimeSpan>] [-MaxLogCacheLimit <UInt32>]
 [-MaxLogFileSize <UInt32>] [-ValidLogFileExtensions <PSListModifier>] [-ValidLogFileTypes <PSListModifier>]
 [-Force] [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The Device Update Web service provides a way for administrators to distribute firmware updates to devices that run Lync 2010 Phone Edition.
Periodically, administrators upload a set of device update rules to Lync Server 2010.
After those rules have been tested and approved, they can then be applied to the appropriate devices as those devices connect to the system.
Devices check for updates when they are first powered on, then check again when a user logs on.
After that, devices check for updates every 24 hours.

Device update configuration settings, which are used to manage the Device Update Web service, can be assigned to the global level or to the site scope.
To create a new collection of settings for a site, use the New-CsDeviceUpdateConfiguration cmdlet.
Note that you can only create new settings at the site scope; your command will fail if you try to create a new collection of settings at the global scope.
In addition, your command will fail if you try to create a new collection of settings for, say, the Redmond site, and that site already hosts a collection of device update configuration settings.
That's because you can only have one collection of device update configuration settings per site.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsDeviceUpdateConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsDeviceUpdateConfiguration"}

**Below Content Applies To:** Lync Server 2013

The Device Update Web service provides a way for administrators to distribute firmware updates to devices that run Lync Server.
Periodically, administrators upload a set of device update rules to Lync Server.
After those rules have been tested and approved, they can then be applied to the appropriate devices as those devices connect to the system.
Devices check for updates when they are first powered on, then check again when a user logs on.
After that, devices check for updates every 24 hours.

Device update configuration settings, which are used to manage the Device Update Web service, can be assigned to the global level or to the site scope.
To create a new collection of settings for a site, use the New-CsDeviceUpdateConfiguration cmdlet.
Note that you can only create new settings at the site scope; your command will fail if you try to create a new collection of settings at the global scope.
In addition, your command will fail if you try to create a new collection of settings for, say, the Redmond site, and that site already hosts a collection of device update configuration settings.
That's because you can only have one collection of device update configuration settings per site.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsDeviceUpdateConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsDeviceUpdateConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

The Device Update Web service provides a way for administrators to distribute firmware updates to devices that run Skype for Business Server 2015.
Periodically, administrators upload a set of device update rules to Skype for Business Server 2015.
After those rules have been tested and approved, they can then be applied to the appropriate devices as those devices connect to the system.
Devices check for updates when they are first powered on, then check again when a user logs on.
After that, devices check for updates every 24 hours.

Device update configuration settings, which are used to manage the Device Update Web service, can be assigned to the global level or to the site scope.
To create a new collection of settings for a site, use the New-CsDeviceUpdateConfiguration cmdlet.
Note that you can only create new settings at the site scope; your command will fail if you try to create a new collection of settings at the global scope.
In addition, your command will fail if you try to create a new collection of settings for, say, the Redmond site, and that site already hosts a collection of device update configuration settings.
That's because you can only have one collection of device update configuration settings per site.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsDeviceUpdateConfiguration -Identity site:Redmond
```

The command shown in Example 1 creates a new set of device update configuration settings with the Identity site:Redmond.
Because no other parameters are included in the command, this new collection of configuration settings will use the default values for each property.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new set of device update configuration settings with the Identity site:Redmond.
Because no other parameters are included in the command, this new collection of configuration settings will use the default values for each property.

New-CsDeviceUpdateConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new set of device update configuration settings with the Identity site:Redmond.
Because no other parameters are included in the command, this new collection of configuration settings will use the default values for each property.

New-CsDeviceUpdateConfiguration -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
New-CsDeviceUpdateConfiguration -Identity site:Redmond -MaxLogFileSize 204800 -LogCleanUpInterval 7.00:00:00
```

The preceding command also creates a new set of device update configuration settings with the Identity site:Redmond.
In this case, two additional parameters are used in order to customize the new settings: MaxLogFileSize is used to set the maximum log file size to 2048000 bytes, while LogCleanUpInterval is used to set the log cleanup interval time to 7 days (7 days .
00 hours : 00 minutes : 00 seconds).

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 also creates a new set of device update configuration settings with the Identity site:Redmond.
In this case, two additional parameters are used in order to customize the new settings: MaxLogFileSize is used to set the maximum log file size to 2048000 bytes, while LogCleanUpInterval is used to set the log cleanup interval time to 7 days (7 days .
00 hours : 00 minutes : 00 seconds).

New-CsDeviceUpdateConfiguration -Identity site:Redmond -MaxLogFileSize 204800 -LogCleanUpInterval 7.00:00:00

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 also creates a new set of device update configuration settings with the Identity site:Redmond.
In this case, two additional parameters are used in order to customize the new settings: MaxLogFileSize is used to set the maximum log file size to 2048000 bytes, while LogCleanUpInterval is used to set the log cleanup interval time to 7 days (7 days .
00 hours : 00 minutes : 00 seconds).

New-CsDeviceUpdateConfiguration -Identity site:Redmond -MaxLogFileSize 204800 -LogCleanUpInterval 7.00:00:00

## PARAMETERS

### -Identity
Indicates the Identity of the new device update configuration settings.
Because new settings can only be created at the site scope, the Identity will look something like this: -Identity "site:Redmond".

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
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

The value passed to the LogCleanupTimeOfDay parameter must be in the 24-hour time format hh:mm, where hh represents the hours and mm represents the minutes.
In this format, midnight is represented as 00:00; 8:30 A.M.
is represented as 08:30; and 11:52 P.M.
is represented as 23:52.
The default value is null.

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
Indicates the maximum amount of information (in bytes) that can be held in the log file cache before that cache must be cleared and the data written to a log file.
By default, log files are "flushed" every X number of minutes.
(For details, see the description of the parameter LogFlushInterval.) However, if the cache reaches its maximum size, the information in it will automatically be written to a log file (and the cache cleared) even if the log flush interval has not yet expired.

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
This list can be modified; however, there is no reason to modify the list unless you have a device running Lync 2010 Phone Edition  that creates log files that use a different file extension.

Default: .dmp, .clg, .clg2, .bak, .kdmp, .dat, .bin, .cat, .xml, .txt, .hex



**Below Content Applies To:** Lync Server 2013

Indicates the valid log file extensions that can be used with the Device Update Web service.
This list can be modified; however, there is no reason to modify the list unless you have a device running Lync Server that creates log files that use a different file extension.

Default: .dmp, .clg, .clg2, .bak, .kdmp, .dat, .bin, .cat, .xml, .txt, .hex



**Below Content Applies To:** Skype for Business Server 2015

Indicates the valid log file extensions that can be used with the Device Update Web service.
This list can be modified; however, there is no reason to modify the list unless you have a device running Skype for Business that creates log files that use a different file extension.

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
Logs for phones running Lync 2010  that contain the results of functional tests as well as a record of critical system events.

Additional file types can be added if you have a device running Lync 2010 Phone Edition that creates a different kind of log file.
You can also remove files.
For example, if you do not want to store CELog files then you can remove the CELog file type.



**Below Content Applies To:** Lync Server 2013

Indicates the log file types retained by the device update system.
The default file types include the following:

Watson.
Log files automatically generated by a device if the system stops responding.

CELog.
Logs for phones running Lync that contain the results of functional tests and a record of critical system events.

Additional file types can be added if you have a device running Lync Phone Edition that creates a different kind of log file.
You can also remove files.
For example, if you do not want to store CELog files then you can remove the CELog file type.



**Below Content Applies To:** Skype for Business Server 2015

Indicates the log file types retained by the device update system.
The default file types include the following:

Watson.
Log files automatically generated by a device if the system stops responding.

CELog.
Logs for phones running Skype for Business that contain the results of functional tests and a record of critical system events.

Additional file types can be added if you have a device running Skype for Business Phone Edition that creates a different kind of log file.
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

### -InMemory
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
New-CsDeviceUpdateConfiguration does not accept pipelined input.

###  
None.
The New-CsDeviceUpdateConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsDeviceUpdateConfiguration cmdlet creates instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdateConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/2a06450d-291e-40f9-a780-45e2c4b28494(OCS.14).aspx)

[Get-CsDeviceUpdateConfiguration](Get-CsDeviceUpdateConfiguration.md)

[Remove-CsDeviceUpdateConfiguration](Remove-CsDeviceUpdateConfiguration.md)

[Set-CsDeviceUpdateConfiguration](Set-CsDeviceUpdateConfiguration.md)

[Online Version](http://technet.microsoft.com/EN-US/library/2a06450d-291e-40f9-a780-45e2c4b28494(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2a06450d-291e-40f9-a780-45e2c4b28494(OCS.16).aspx)

