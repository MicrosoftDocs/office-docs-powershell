---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsClsProvider

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Creates a new centralized logging trace provider.
Trace providers are application components that generate trace messages or trace events useful in troubleshooting problems with Lync Server.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new centralized logging trace provider.
Trace providers are application components that generate trace messages or trace events useful in troubleshooting problems with Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsClsProvider -Flags <String> -Level <ProviderLevel> -Name <String> -Type <ProviderType> [-Guid <String>]
 [-Role <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Microsoft Lync Server 2013 Preview.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using Windows PowerShell and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Lync Server.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

Each centralized logging scenario requires one or more trace providers to generate the messages and events that are logged in the trace logs.
Lync Server 2013 Preview ships with a large number of these providers predefined for you.
The New-CsClsProvider cmdlet provides a way for developers who are extending Lync Server to take advantage of centralized logging for custom new application/component.

It is also possible to define custom scenarios by using the New-CsClsScenario cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsClsProvider"}

Lync Server Control Panel: The functions carried out by the New-CsClsProvider cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server 2015.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions Skype for Business Server 2015.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

Each centralized logging scenario requires one or more trace providers to generate the messages and events that are logged in the trace logs.
Skype for Business Server 2015 ships with a large number of these providers predefined for you.
The New-CsClsProvider cmdlet provides a way for developers who are Skype for Business Server 2015 to take advantage of centralized logging for custom new application/component.

It is also possible to define custom scenarios by using the New-CsClsScenario cmdlet.

Skype for Business Server Control Panel: The functions carried out by the New-CsClsProvider cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 create a new centralized logging scenario provider and then add that provider to the WAC scenario configured for the Redmond site.
To do this, the first command in the example uses the New-CsClsProvider cmdlet to create a new provider with the name WebInfrastructure; this new provider is stored in a variable named $provider.
The second command in the example then adds this new provider to the scenario site:Redmond/WAC.
Because the command uses the syntax @{Add=$provider} the new provider will be added to the WAC scenario in addition to any other providers already configured for that

$provider = New-CsClsProvider -Name "WebInfrastructure" -Type "WPP" -Level "Warning" -Flags "All"

Set-CsClsScenario -Identity "site:Redmond/WAC" -Provider @{Add=$provider}

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 create a new centralized logging scenario provider and then add that provider to the WAC scenario configured for the Redmond site.
To do this, the first command in the example uses the New-CsClsProvider cmdlet to create a new provider with the name WebInfrastructure; this new provider is stored in a variable named $provider.
The second command in the example then adds this new provider to the scenario site:Redmond/WAC.
Because the command uses the syntax @{Add=$provider} the new provider will be added to the WAC scenario in addition to any other providers already configured for that

$provider = New-CsClsProvider -Name "WebInfrastructure" -Type "WPP" -Level "Warning" -Flags "All"

Set-CsClsScenario -Identity "site:Redmond/WAC" -Provider @{Add=$provider}

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In Example 2, however, the new provider will replace any (and all) the existing providers configured for the WAC scenario.
This is done by using the syntax @{Replace=$provider}.

$provider = New-CsClsProvider -Name "WebInfrastructure" -Type "WPP" -Level "Warning" -Flags "All"

Set-CsClsScenario -Identity "site:Redmond/WAC" -Provider @{Replace=$provider}

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In Example 2, however, the new provider will replace any (and all) the existing providers configured for the WAC scenario.
This is done by using the syntax @{Replace=$provider}.

$provider = New-CsClsProvider -Name "WebInfrastructure" -Type "WPP" -Level "Warning" -Flags "All"

Set-CsClsScenario -Identity "site:Redmond/WAC" -Provider @{Replace=$provider}

## PARAMETERS

### -Flags
Specifies individual protocols and subcomponents involved in the trace.
For example, the SipStack provider includes the following flags: TF_COMPONENT, TF_RTCHTTP, TF_CONNECTION, TF_DIAG.

Most providers are configured to use all available flags.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Level
**Below Content Applies To:** Lync Server 2013

Tracing level for events recorded by the provider: Allowed values are:

* Fatal
* Error
* Warning
* Info
* Verbose
* Debug
* All



**Below Content Applies To:** Skype for Business Server 2015

Tracing level for events recorded by the provider: Allowed values are:

* Fatal
* Error
* Warning
* Info
* Verbose
* Debug



```yaml
Type: ProviderLevel
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Unique name for the new provider.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
**Below Content Applies To:** Lync Server 2013

Type of tracing used by the provider.
Allowed values are:

* WPP (Windows software trace preprocessor)
* EventLog
* IISLog



**Below Content Applies To:** Skype for Business Server 2015

Type of tracing used by the provider.
Allowed values are:

WPP (Windows software trace preprocessor)

EventLog

IISLog



```yaml
Type: ProviderType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Guid
Globally unique identifier assigned to the provider.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Role
**Below Content Applies To:** Lync Server 2013

Lync Server server role for the provider.
For example, FE for Front End server or Edge for Edge Server.



**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 server role for the provider.
For example, FE for Front End server or Edge for Edge Server.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
New-CsClsProvider does not accept pipelined input.

###  
None.
The New-CsClsProvider cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsClsProvider creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Provider object.

###  
The New-CsClsProvider cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Provider object.

## NOTES

## RELATED LINKS

[New-CsClsScenario]()

[Set-CsClsScenario]()

[Online Version](http://technet.microsoft.com/EN-US/library/9b0a90c1-27ab-49c8-88f2-a381cf14625e(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9b0a90c1-27ab-49c8-88f2-a381cf14625e(OCS.16).aspx)

