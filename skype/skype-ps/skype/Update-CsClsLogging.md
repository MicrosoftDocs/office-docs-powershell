---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Update-CsClsLogging
schema: 2.0.0
---

# Update-CsClsLogging

## SYNOPSIS
Updates the duration time for all active centralized logging scenarios.
Centralized logging provides a way for administrators to simultaneously enable or disable Skype for Business Server tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Update-CsClsLogging -Duration <String> [-AsXml] [-Computers <String[]>] [-Pools <String[]>]
 [<CommonParameters>]
```

## DESCRIPTION
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the `Search-CsClsLogging` cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Skype for Business Server.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

It is also possible to define custom scenarios by using the `New-CsClsScenario` cmdlet.

By default, logging operations run for 4 hours (240 minutes) before automatically stopping; however, administrators have the option of specifying a different duration time when they begin logging.
In addition, administrators can also use the `Update-CsClsLogging` cmdlet to change the duration time for all the scenarios currently being logged.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Update-CsClsLogging -Duration 60
```

The command shown in Example 1 modifies the logging duration time for servers in the topology.
In this example, the duration time is set to 1 hour (60 minutes).


### -------------------------- Example 2 --------------------------
```
Update-CsClsLogging -Duration 60 -Pools "atl-cs-001.litwareinc.com"
```

In Example 2, the duration time is modified for all the servers in the pool atl-cs-001.litwareinc.com.


## PARAMETERS

### -Duration
Amount of time that the logging operation should run.
For example, this syntax causes the logging operation to run for 2 hours (120 minutes) and then stop:

`-Duration 120`

This following syntax would specify a duration of 3 hours and 14 minutes:

`-Duration 3:15`

The following syntax would specify a duration of 6 days, 5 hours and 12 minutes:

`-Duration 6.5:12`

The default value is 30 minutes.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsXml
When specified, information is returned using XML.

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

### -Computers
Enables administrators to updates the centralized logging service on a specified server or set of servers.
To update a single server, specify the fully qualified domain name of that server.
For example:

`-Computers "atl-server-001.litwareinc.com"`

Multiple servers can be specified by separating the computer FQDNs using commas:

`-Computers "atl-server-001.litwareinc.com","red-server-002.litwareinc.com"`

If you do not the Computers parameter or the Pools parameter, `Update-CsClsLogging` will automatically run against all the computers in the topology.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pools
Enables administrators to update the centralized logging service on each server in a pool.
To update the servers in a pool, specify the fully qualified domain name of that pool.
For example:

`-Pools "atl-cs-001.litwareinc.com"`

Multiple pools can be specified by separating the pool FQDNs using commas:

`-Pools "atl-cs-001.litwareinc.com","red-cs-002.litwareinc.com"`

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The Update-CsClsLogging cmdlet does not accept pipelined input.

## OUTPUTS

###  
String value.

## NOTES

## RELATED LINKS

[Search-CsClsLogging](Search-CsClsLogging.md)

[Show-CsClsLogging](Show-CsClsLogging.md)

[Start-CsClsLogging](Start-CsClsLogging.md)

[Stop-CsClsLogging](Stop-CsClsLogging.md)

[Sync-CsClsLogging](Sync-CsClsLogging.md)

