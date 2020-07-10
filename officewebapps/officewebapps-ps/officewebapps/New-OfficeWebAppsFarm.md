---
external help file:
Module Name: officewebapps
title: New-OfficeWebAppsFarm
online version:
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# New-OfficeWebAppsFarm

## SYNOPSIS
Creates a new Office Online Server farm on the local computer.

## SYNTAX

```
New-OfficeWebAppsFarm [-Force] [-FarmOU <String>] [-InternalURL <String>] [-ExternalURL <String>] [-AllowHttp]
 [-AllowOutboundHttp] [-SSLOffloaded] [-CertificateName <String>] [-S2SCertificateName <String>]
 [-EditingEnabled] [-Proxy <String>] [-LogLocation <String>] [-LogRetentionInDays <UInt32>]
 [-LogVerbosity <String>] [-CacheLocation <String>] [-MaxMemoryCacheSizeInMB <Int32>]
 [-DocumentInfoCacheSize <UInt32>] [-CacheSizeInGB <Int32>] [-ClipartEnabled] [-TranslationEnabled]
 [-MaxTranslationCharacterCount <Int32>] [-TranslationServiceAppId <String>]
 [-TranslationServiceAddress <String>] [-RenderingLocalCacheLocation <String>]
 [-RecycleActiveProcessCount <UInt32>] [-AllowCEIP] [-ExcelRequestDurationMax <Int32>]
 [-ExcelSessionTimeout <Int32>] [-ExcelWorkbookSizeMax <Int32>] [-ExcelPrivateBytesMax <Int32>]
 [-ExcelConnectionLifetime <Int32>] [-ExcelExternalDataCacheLifetime <Int32>] [-ExcelAllowExternalData]
 [-ExcelUseEffectiveUserName] [-ExcelWarnOnDataRefresh] [-ExcelUdfsAllowed]
 [-ExcelMemoryCacheThreshold <Int32>] [-ExcelUnusedObjectAgeMax <Int32>] [-ExcelCachingUnusedFiles]
 [-ExcelAbortOnRefreshOnOpenFail] [-ExcelAutomaticVolatileFunctionCacheLifeTime <Int32>]
 [-ExcelConcurrentDataRequestsPerSessionMax <Int32>] [-ExcelDefaultWorkbookCalcMode <DefaultWorkbookCalcMode>]
 [-ExcelRestExternalDataEnabled] [-ExcelChartAndImageSizeMax <Int32>] [-OpenFromUrlEnabled]
 [-OpenFromUncEnabled] [-OpenFromUrlThrottlingEnabled] [-PicturePasteDisabled]
 [-RemovePersonalInformationFromLogs] [-AllowHttpSecureStoreConnections] [-WhatIf] [-Confirm]
```

## DESCRIPTION
The New-OfficeWebAppsFarm cmdlet creates a new Office Online Server farm on the local computer.
You run this cmdlet on the first server in the Office Online Server farm and then add more servers to the farm by using the New-OfficeWebAppsMachine cmdlet.

## EXAMPLES

### ------------------EXAMPLE 1---------------------
```
New-OfficeWebAppsFarm -ExternalUrl "https://office.contoso.com" -CertificateName "Office Server Cert" -EditingEnabled:$true
```

This example creates an Office Online Server farm on the local server that has editing enabled for Office in a browser. With this example, only a single URL is used for both internal and external users. The Certificate Name value is the Friendly Name of the certificate as it appears in the Computer's certificate store.

## PARAMETERS

### -AllowCEIP
Enables Customer Experience Improvement Program (CEIP) reporting on all servers in the Office Online Server farm.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowHttp
Indicates that IIS sites should be provisioned on port 80 for HTTP access.
Use AllowHTTP only in environments where all computers require IPSEC (full encryption) or in test environments that do not contain sensitive files.

Enabled automatically when you enable SSLOffloaded.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowHttpSecureStoreConnections
Indicates that secure store connections can be made by using non-SSL connections (such as HTTP).
The default is False.

Use AllowHTTPSecureStoreConnections only in environments where all computers require IPSEC (full encryption) or in test environments that do not contain sensitive files.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOutboundHttp
Allows outbound HTTP connections from Office Online Server.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CacheLocation
Specifies the location of the global disk cache that is used to store rendered image files.
The default location is %programdata%\Microsoft\OfficeWebApps\Working\d\.

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

### -CacheSizeInGB
Specifies the maximum size of the global disk cache in gigabytes.

The type must be an integer value in the range of 0 to any positive integer.
The default size is 15 GB.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateName
Specifies the friendly name of the certificate that Office Online Server uses to create HTTPS bindings.

If the specified certificate is not found or has expired, or if the specified value is associated with more than one certificate, an error is logged and the farm is not created.

This value is used on every server that joins the Office Online Server farm.
Therefore, every server in the farm must have a certificate that has this friendly name.

You don't have to specify the CertificateName parameter if you are using either the AllowHttp or SSLOffloaded parameter.

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

### -ClipartEnabled
Enables support for inserting Bing images into Office documents.
This feature requires server-to-web communication, configured either directly or by using a proxy that you specify by using the Proxy parameter.

The OpenFromUrlEnabled parameter must be set to True for Bing Images to work..
The default is False.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DocumentInfoCacheSize
Specifies the maximum number of document conversion records that are stored in a memory cache.

The default value is 5000 records.

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

### -EditingEnabled
Enables support for editing in the browser.
The default is False.
Only set to True if you have the appropriate licensing to use the editing functionality.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelAbortOnRefreshOnOpenFail
Prevents a workbook from loading if data refresh fails.
This helps prevent users from seeing out-of-date information or possibly information that they should not have access to.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelAllowExternalData
Enables the refresh of supported external data in Excel workbooks in a browser where workbooks contain connections to external data.
The default is True.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelAutomaticVolatileFunctionCacheLifeTime
Specifies the maximum time, in seconds, that a computed value for a volatile function is cached for automatic recalculations.
-1: Calculates once when the workbook loads.
0: Always calculates.
1 to 2073600: Caches 1 second to 24 days.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelCachingUnusedFiles
Enable caching of files that are no longer in use by Web Excel sessions.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelChartAndImageSizeMax
Specifies the maximum size, in megabytes, of a chart or image that can be opened by Excel in a browser.
The value must be an integer greater than 0.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelConcurrentDataRequestsPerSessionMax
Specifies the maximum number of concurrent external data requests allowed in each session.
If a session must issue more than this number of requests, additional requests are queued.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelConnectionLifetime
Specifies the duration, in seconds, of external data connections for Excel in a browser.
The default is 1800 seconds.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelDefaultWorkbookCalcMode
PARAMVALUE: File | Manual | Auto | AutoDataTables

```yaml
Type: DefaultWorkbookCalcMode
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelExternalDataCacheLifetime
Specifies the duration, in seconds, of the external data cache lifetime in Excel in a browser.
The default is 300 seconds.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelMemoryCacheThreshold
The percentage of the Maximum Private Bytes that can be allocated to inactive objects.
When the memory cache threshold is exceeded, cached objects that are not currently in use are released.
Valid values: 0 (disables caching of inactive objects); from 1 through 95.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelPrivateBytesMax
Specifies the maximum private bytes, in megabytes, used by Excel in a browser.
When set to -1, the maximum private bytes use 50 percent of physical memory on the computer.

The type must be -1 or any positive integer.
The default value is -1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelRequestDurationMax
Specifies the maximum duration, in seconds, for a single request in a session.
After this time elapses, the request times out.

The type must be -1 (no limit) or an integer in the range of 1 to 2073600.
The default value is 300.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelRestExternalDataEnabled
Allow requests from the REST API to refresh external data connections.
This setting has no effect if Allow External Data is set to None.
Check box Bool.
Default is False.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelSessionTimeout
Specifies the time, in seconds, that a session remains active in Excel in a browser when there is no user activity.
Valid values include the following:

-1 Session never expires.

0 Session expires at the end of a single request.

1 to 2073600Session remains active for 1 second to 24 days.
The default value is 450.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelUdfsAllowed
Enables User Defined Functions for Excel in a browser.
The default is False.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelUnusedObjectAgeMax
The maximum time (in minutes) that inactive objects remain in the memory cache.
Inactive objects are objects that are not used in a session.
Valid values: -1 (no maximum); from 1 through 34560 (24 days).
Default is -1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelUseEffectiveUserName
Enables the use of the Analysis Services EffectiveUserName parameter with Excel in a browser.
The default is False.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelWarnOnDataRefresh
Turns off or on the warning dialog displayed when data refreshes in Excel in a browser.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcelWorkbookSizeMax
Specifies the maximum size, in megabytes, of a workbook that can be loaded.

The type must be an integer value in the range of 1 to 2000.
The default value is 10.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalURL
Specifies the URL root that clients use to access the Office Online Server farm from the Internet.
In the case of a load-balanced, multiserver Office Online Server farm, the external URL is bound to the IP address of the external-facing load balancer.

An Office Online Server farm requires at least one URL, set using either ExternalURL or InternalURL.
You can also set both internal and external URLs.

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

### -FarmOU
Specifies the name of the Active Directory organizational unit (OU) that servers must be a member of to join the Office Online Server farm.
Use this parameter to prevent unauthorized servers (that is, servers that are not in the OU) from joining an Office Online Server farm.

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

### -Force
Suppresses any user prompts by answering Yes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalURL
Specifies the URL root that clients use to access the Office Online Server farm from the intranet.

An Office Online Server farm requires at least one URL, set using either ExternalURL or InternalURL.
You can also set both internal and external URLs.

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

### -LogLocation
Specifies the location on the local computer where activity logs are stored.

The location applies for every server in the farm and cannot be customized on a per-server basis.
The default location is %programdata%\Microsoft\OfficeWebApps\Data\Logs\ULS\.

Be sure to allow sufficient disk space on the drive on which logs are stored.

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

### -LogRetentionInDays
Specifies the number of days that log entries are stored.
Log entries older than the configured date are trimmed.

The type must be an integer value in the range of 0 to 365.
The default value is 7 days.

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

### -LogVerbosity
Specifies how much information is stored in the trace log files.
The values are as follows:

VerboseEX writes low-level detail to the trace log file.
Useful for traces that are likely to be high volume.

Verbose writes low-level detail to the trace log file.

Medium writes medium-level detail to the trace log file.

High writes high-level detail to the trace log file.

Monitorable writes traces that represent an unusual code path and actions that should be monitored.

Unexpected writes traces that represent an unexpected code path and actions that should be monitored.

None writes no trace information to the trace log file.

Leaving the LogVerbosity at a low level for an extended period of time will negatively impact performance.

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

### -MaxMemoryCacheSizeInMB
Specifies, in megabytes, the maximum amount of memory that the rendering cache can use.

The type must be an integer value in the range of 0 to any positive integer.
The default size is 75 MB.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxTranslationCharacterCount
Specifies the maximum amount of characters a document can have in order to be translated.

The type must be an integer value.
The value can be set to 0 to indicate no limit or a value from 2000 to 2,000,000.
The default value is 125,000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OpenFromUncEnabled
Turns on or off the ability to use Online Viewers to view Office files from a UNC path.

You must first set OpenFromUrlEnabled to True to allow Online Viewers to display files in UNC paths.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OpenFromUrlEnabled
Turns on or off the ability to use Online Viewers to view Office files from a URL or UNC path.
The default is False.

You must set this parameter to True when you use ClipartEnabled.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OpenFromUrlThrottlingEnabled
Throttles the number of Open From URL requests from any given server in a time period.
The default throttling values, which are not configurable, make sure that an Office Online Server farm will not overwhelm a single server with requests for content to be viewed in the Online Viewers.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PicturePasteDisabled
Turns off the ability for users to paste images from a web page into Office in a browser.
The default is False.
If OpenFromURLEnabled is set to True and PicturePasteDisabled is not set or set to False, users can paste images into Office in a browser.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Proxy
Specifies the URL of the proxy server that is configured to allow HTTP requests to external sites.
Typically configured in conjunction with the ClipartEnabled and TranslationEnabled parameters.

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

### -RecycleActiveProcessCount
Specifies the number of files that a single Word or PowerPoint process can render before the process is recycled.

The type must be an integer value in the range of 1 to 1000.
The default value is 5.

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

### -RemovePersonalInformationFromLogs
Provides a best effort scrub of personal information from Office Online Server logs and replaces values with a SHA256 hash.
Potentially scrubbed information can be:

Document names and URLs

IP addresses

Email addresses

User names

The default is False.
Note that enabling this parameter doesn't guarantee that personal information won't be logged to the Office Online Server logs.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RenderingLocalCacheLocation
Specifies the location of the temporary cache for use by the Word and PowerPoint Viewing Services.

The default location is %programdata%\Microsoft\OfficeWebApps\Working\waccache\.

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

### -S2SCertificateName
The friendly name of the certificate to use for server-to-server authentication with SharePoint Server.

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

### -SSLOffloaded
Indicates to the servers in the Office Online Server farm that SSL is offloaded to the load balancer.
When SSLOffloaded is enabled, web applications are bound to port 80 (HTTP) on the local server.
However, HTML that references other resources, such as CSS or images, uses HTTPS URLs for those references.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TranslationEnabled
Enables support for automatic document translation using Microsoft Translator, an online service that translates text between languages.
The translated file is shown in Word.
Because Microsoft Translator is an online service, you must enable server-to-web communication directly or by using a proxy that you specify by using the Proxy parameter.

Microsoft Translator may collect data to improve the quality of translations.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TranslationServiceAddress
Specifies the URL of the translation server that translation requests are sent to.
The default is the Microsoft Translator online service.
Typically you will not use this parameter unless you must change translation services.

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

### -TranslationServiceAppId
Specifies the application ID for the translation service.
The default is the public application ID for Office in a browser.
Typically you will not use this parameter unless you have negotiated with Microsoft Translator for additional services and they have provided you with a private application ID.

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
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
