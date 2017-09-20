---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: New-CsClsProvider
schema: 2.0.0
---

# New-CsClsProvider

## SYNOPSIS

Creates a new centralized logging trace provider.
Trace providers are application components that generate trace messages or trace events useful in troubleshooting problems with Skype for Business Server.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsClsProvider -Flags <String> -Level <ProviderLevel> -Name <String> -Type <ProviderType> [-Guid <String>]
 [-Role <String>] [<CommonParameters>]
```

## DESCRIPTION

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions Skype for Business Server.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

Each centralized logging scenario requires one or more trace providers to generate the messages and events that are logged in the trace logs.
Skype for Business Server ships with a large number of these providers predefined for you.
The New-CsClsProvider cmdlet provides a way for developers who are Skype for Business Server to take advantage of centralized logging for custom new application/component.

It is also possible to define custom scenarios by using the New-CsClsScenario cmdlet.

Skype for Business Server Control Panel: The functions carried out by the New-CsClsProvider cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

$provider = New-CsClsProvider -Name "WebInfrastructure" -Type "WPP" -Level "Warning" -Flags "All"

Set-CsClsScenario -Identity "site:Redmond/WAC" -Provider @{Add=$provider}
```

The commands shown in Example 1 create a new centralized logging scenario provider and then add that provider to the WAC scenario configured for the Redmond site.
To do this, the first command in the example uses the New-CsClsProvider cmdlet to create a new provider with the name WebInfrastructure; this new provider is stored in a variable named $provider.
The second command in the example then adds this new provider to the scenario site:Redmond/WAC.
Because the command uses the syntax @{Add=$provider} the new provider will be added to the WAC scenario in addition to any other providers already configured for that

### -------------------------- Example 2 -------------------------- 
```

$provider = New-CsClsProvider -Name "WebInfrastructure" -Type "WPP" -Level "Warning" -Flags "All"

Set-CsClsScenario -Identity "site:Redmond/WAC" -Provider @{Replace=$provider}
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In Example 2, however, the new provider will replace any (and all) the existing providers configured for the WAC scenario.
This is done by using the syntax @{Replace=$provider}.


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

Skype for Business Server server role for the provider.
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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsClsProvider cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsClsProvider cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Provider object.

## NOTES

## RELATED LINKS

[New-CsClsScenario]()

[Set-CsClsScenario]()
