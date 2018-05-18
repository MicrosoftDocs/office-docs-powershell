---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsClsConfiguration
schema: 2.0.0
---

# Set-CsClsConfiguration

## SYNOPSIS
Modifies an existing collection of centralized logging configuration settings.
Centralized logging provides a way for administrators to simultaneously enable or disable tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsClsConfiguration [[-Identity] <XdsIdentity>] [-CacheFileLocalFolders <String>]
 [-CacheFileLocalMaxDiskUsage <UInt32>] [-CacheFileLocalRetentionPeriod <UInt32>]
 [-CacheFileNetworkFolder <String>] [-ComponentThrottleLimit <UInt32>] [-ComponentThrottleSample <UInt32>]
 [-Confirm] [-EtlFileFolder <String>] [-EtlFileRolloverMinutes <UInt32>] [-EtlFileRolloverSizeMB <UInt32>]
 [-Force] [-MinimumClsAgentServiceVersion <UInt32>] [-Regions <PSListModifier>] [-Scenarios <PSListModifier>]
 [-SearchTerms <PSListModifier>] [-SecurityGroups <PSListModifier>] [-TmfFileSearchPath <String>] [-WhatIf]
 [-NetworkUsagePacketSize <UInt32>] [-NetworkUsageThreshold <UInt32>] [-Version <String>] [<CommonParameters>]
```

### Instance
```
Set-CsClsConfiguration [-CacheFileLocalFolders <String>] [-CacheFileLocalMaxDiskUsage <UInt32>]
 [-CacheFileLocalRetentionPeriod <UInt32>] [-CacheFileNetworkFolder <String>]
 [-ComponentThrottleLimit <UInt32>] [-ComponentThrottleSample <UInt32>] [-Confirm] [-EtlFileFolder <String>]
 [-EtlFileRolloverMinutes <UInt32>] [-EtlFileRolloverSizeMB <UInt32>] [-Force] [-Instance <PSObject>]
 [-MinimumClsAgentServiceVersion <UInt32>] [-Regions <PSListModifier>] [-Scenarios <PSListModifier>]
 [-SearchTerms <PSListModifier>] [-SecurityGroups <PSListModifier>] [-TmfFileSearchPath <String>] [-WhatIf]
 [-NetworkUsagePacketSize <UInt32>] [-NetworkUsageThreshold <UInt32>] [-Version <String>] [<CommonParameters>]
```

## DESCRIPTION
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the `Search-CsClsLogging` cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Skype for Business Server.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

It is also possible to define custom scenarios by using the `New-CsClsScenario` cmdlet.

Centralized logging is managed by using collections of centralized logging service configuration settings.
When you install Skype for Business Server, you install a global set of these configuration settings; in addition, administrators can add custom settings collections at the site scope.
Administrators can use the `Set-CsClsConfiguration` cmdlet to modify any of these settings.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsClsConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsClsConfiguration -Identity "global" -EtlRolloverFileSizeMB 40
```

In Example 1, the global collection of centralized logging configuration settings is modified to set the maximum size of an ETL file to 40 megabytes.


### -------------------------- Example 2 --------------------------
```
Get-CsClsConfiguration | Set-CsClsConfiguration -EtlRolloverFileSizeMB 40
```

The command shown in Example 2 modifies the maximum ETL file size for all the centralized logging configuration settings in use in the organization.
To do this, the command first calls the `Get-CsClsConfiguration` cmdlet to return a collection of all the centralized logging settings.
That collection is then piped to the `Set-CsClsConfiguration` cmdlet, which changes the value of the EtlRolloverFileSizeMB property for each item in the collection to 40 megabytes.


## PARAMETERS

### -CacheFileLocalFolders
One or more full paths to the local folders where the cache files will be stored.
The default value is %TEMP%\Tracing.
If more than one path is specified, then separate them with semi-colons.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CacheFileLocalMaxDiskUsage
Maximum amount of disk space (percentage) that can be used for the cache files.
The default value is 80.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CacheFileLocalRetentionPeriod
Maximum number of days that cache files are retained locally.
The default value is 14.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CacheFileNetworkFolder
Full UNC path to the network cache folder.
There is no default value.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComponentThrottleLimit
Maximum rate at which a component is allowed to generate trace records before its tracing is throttled.
The default value is 5000 trace calls per second.

The default value is 5000.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComponentThrottleSample
Maximum number of times the ComponentThrottleLimit can be exceeded within a one minute interval.
The default value is 3.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EtlFileFolder
Full path to the folder where the event log trace files will be stored.
The default value is %TEMP%\Tracing.
Note that %TEMP% is evaluated in the contents of the CLS Service so it actual expands to %WINDIR%\ServiceProfiles\NetworkService\AppData\Local

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EtlFileRolloverMinutes
Maximum amount of time (in minutes) that can elapse before a new event log trace file is created.
(This new file will be created even if the existing trace file has not reached the specified rollover size.) The default value is 60.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EtlFileRolloverSizeMB
Maximum size (in megabytes) that at event trace log file can reach before a new file is created.
The default value is 20.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier of the centralized logging configuration settings to be modified.
To refer to the global settings, use this syntax:

`-Identity global`

To refer to site settings, use syntax similar to this:

`-Identity site:Redmond`

You cannot use wildcards when specifying an Identity.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MinimumClsAgentServiceVersion
Specifies the minimum version of the centralized logging service agent to be used when logging data; any computers with an agent version lower than the minimum value will be excluded from the logging operations.
The default value is 6, representing Skype for Business Server.
This parameter is intended for use with Skype for Business Online.


```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Regions
Collection of regions defined for the centralized logging configuration settings.
Regions are defined using the `New-CsClsRegion` cmdlet.

This parameter is intended for use with Skype for Business Online.


```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scenarios
Collection of components/situations that can be traced using centralized logging.
Scenarios are managed using the CsClsScenario cmdlets.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchTerms
Collection of terms that help determine the personally identifiable information available to technical support personnel who search the centralized logging files.
Search terms are managed using the CsClsSearchTerm cmdlets.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecurityGroups
Security groups who are allowed to access the log files.

This parameter is intended for use with Skype for Business Online.


```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TmfFileSearchPath
Search path for TMF (trace message format) files.
TMF files convert binary trace messages to a human-readable format.
This should be a UNC or DFC path, to allow it to be accessible from multiple computers.
If the path is not UNC or DFC, every machine any reference to a local folder path must contain all needed TMX files.
Local file paths will work, but must be maintained.

There's no need to set the location C:\Program Files\Common Files\Skype for Business Server 2015\Tracing\ because every ClsAgent will automatically check this location.

Do not set CacheFileLocalFolders to the same value as TmfFileSearchPath.
Any .tmx files found in the CacheFileLocalFolders path will be deleted.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkUsagePacketSize
Packet size (in kilobytes) for transmitting agent search results and copying cache files over the network.
The default value is 64 KB.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkUsageThreshold
Bandwidth usage threshold (in MB per second) for transmitting agent search results and copying cache files over the network.
The default value is 10.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Version
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
The `Set-CsClsConfiguration` cmdlet accepts pipelined instances of the icrosoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.CentralizedLoggingConfiguration object.

## OUTPUTS

###  
None.
Instead, the `Set-CsClsConfiguration` cmdlet modifies existing instances of the icrosoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.CentralizedLoggingConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsClsConfiguration](Get-CsClsConfiguration.md)

[New-CsClsConfiguration](New-CsClsConfiguration.md)

[Remove-CsClsConfiguration](Remove-CsClsConfiguration.md)

