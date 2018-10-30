---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPInfoPathFormsService
schema: 2.0.0
---

# Set-SPInfoPathFormsService

## SYNOPSIS
Sets parameters for InfoPath Forms Services in SharePoint Server.


## SYNTAX

```
Set-SPInfoPathFormsService [-ActiveSessionTimeout <Int32>] [-AllowEmbeddedSqlForDataConnections <String>]
 [-AllowUdcAuthenticationForDataConnections <String>] [-AllowUserFormBrowserEnabling <String>]
 [-AllowUserFormBrowserRendering <String>] [-AllowUserFormCrossDomainDataConnections <String>]
 [-AllowViewState <String>] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-DefaultDataConnectionTimeout <Int32>] [-Identity <SPFormsServicePipeBind>]
 [-MaxDataConnectionResponseSize <Int32>] [-MaxDataConnectionRoundTrip <Int32>]
 [-MaxDataConnectionTimeout <Int32>] [-MaxFormLoadTime <Int32>] [-MaxPostbacksPerSession <Int32>]
 [-MaxUserActionsPerPostback <Int32>] [-MemoryCacheSize <Int32>] [-RequireSslForDataConnections <String>]
 [-ViewStateThreshold <Int32>] [-WhatIf] [-MaxSizeOfUserFormState <Int32>] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPInfoPathFormsService` cmdlet modifies the settings for InfoPath Forms Services in SharePoint Server.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------EXAMPLE 1-----------------
```
PS C:\>Set-SPInfoPathFormsService -AllowUserFormBrowserEnabling $true -AllowUserFormBrowserRendering $false
```

This example modifies the AllowUserFormBrowserEnabling and AllowUserFormBrowserRendering parameter values.

### --------------EXAMPLE 2-----------------
```
PS C:\>Set-SPInfoPathFormsService -AllowViewState $true -ViewStateThreshold 40961
```

This example modifies the AllowViewState and ViewStateThreshold parameter values.

## PARAMETERS

### -ActiveSessionTimeout
Specifies the duration, in minutes, that a form's session state can remain active.
The default value is 1440.

The type must be a non-negative integer value in the range from 0 through 999,999.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowEmbeddedSqlForDataConnections
Specifies a value that indicates whether embedded SQL authentication can be used by browser-enabled InfoPath form templates.

The type must be one of the following values: True, False (default)

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUdcAuthenticationForDataConnections
Specifies that authentication information in a universal data connection (.udcx file) can be used.

The type must be one of the following values: True (default), False

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserFormBrowserEnabling
Specifies that users can browser enable form templates that do not contain form code, require full trust, enable rendering on a mobile device, or use a data connection managed by a server administrator.

The type must be one of the following values: True (default), False

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserFormBrowserRendering
Specifies that browser-enabled form templates will be rendered by InfoPath Forms Services.

The type must be one of the following values: True (default), False

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserFormCrossDomainDataConnections
Specifies that data connections to data sources located in a different domain can be queried.

The type must be one of the following values: True, False (default)

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowViewState
Defines the location to store form session state: View state when True, or Session State Service when False.

The type must be one of the following values: True, False (default)

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultDataConnectionTimeout
Specifies the default data connection timeout in milliseconds.
The default value is 10000 (10 seconds).

The type must be a non-negative integer and less than or equal to the value set for MaxDataConnectionTimeout.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the InfoPath Forms Services service to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an InfoPath Forms Services service (for example, FormsService1); or an instance of a valid SPFormsService object.

```yaml
Type: SPFormsServicePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDataConnectionResponseSize
Specifies the maximum size allowed for a data connection response.
The default value is 15000 kilobytes (KB).

The type must be a non-negative integer.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDataConnectionRoundTrip
Sets a threshold, in milliseconds, for the maximum time it takes from the start of a data request to the return of the data request on the server (the data connection round trip).
If the data connection round trip time exceeds this threshold, an event is logged in the Operational log.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDataConnectionTimeout
Specifies the maximum data connection timeout in milliseconds.
The default value is 20000 (20 seconds).

The type must be a non-negative integer and less than or equal to 999999.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxFormLoadTime
Sets a threshold, in milliseconds, for maximum form load time.
If form load time exceeds this threshold, an event is logged in the Operational log.

The MaxFormLoadTime parameter measures the time it takes for a form to open, starting from when the request is accepted by the server until it leaves the server.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxPostbacksPerSession
Specifies the value of the maximum postbacks that an instance of a browser-enabled InfoPath form template can make to the InfoPath Forms Services service.
The default value is 20.

The type must be a non-negative integer and less than or equal to 999999.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxUserActionsPerPostback
Specifies the maximum user actions per postback.
The default value is 200.

The type must be a non-negative integer and less than or equal to 999999.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemoryCacheSize
Sets the size, in megabytes (MB), of the cache for solutions in memory.

The default value is 250 MB.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSslForDataConnections
Specifies the Secure Sockets Layer (SSL) requirement value.
If data connections in browser-enabled form templates require basic authentication or digest authentication, a password is sent over the network.
Set this value to True to require an SSL-encrypted connection for these authentication types.

The type must be one of the following values: True (default), False.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ViewStateThreshold
Specifies the maximum size in kilobytes of the session state when stored in the form view.
The default value is 40.

The type must be a non-negative integer and less than or equal to 99,999,999.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSizeOfUserFormState
Specifies the value of the maximum size in kilobytes of session state an instance of a browser-enabled InfoPath form template can use. The default value is 4096.

The type must be a non-negative integer and less than or equal to 999999.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
