---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Show-CsClsLogging

## SYNOPSIS
Shows the current status of the centralized logging service.
(That is, shows which centralized logging scenarios are currently active.) Centralized logging provides a way for administrators to simultaneously enable or disable Skype for Business Server tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Show-CsClsLogging [-AsXml] [-Computers <String[]>] [-Pools <String[]>] [<CommonParameters>]
```

## DESCRIPTION
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the `Search-CsClsLogging` cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Skype for Business Server.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

It is also possible to define custom scenarios by using the `New-CsClsScenario` cmdlet.

The `Show-CsClsLogging` cmdlet returns information about all the scenarios currently being logged on a computer or set of computers; this information includes the name and duration of each active scenario, as well as the date and time that logging began.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Show-CsClsLogging
```

The command shown in Example 1 returns information about the scenarios currently being logged on all the Computers in the topology.


### -------------------------- Example 2 --------------------------
```
Show-CsClsLogging -Pools "atl-cs-001.litwareinc.com"
```

In Example 2, logging information is returned for all the servers in the pool `atl-cs-001…litwareinc.com…`


## PARAMETERS

### -AsXml
When specified, information is returned using XML.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Computers
Enables administrators to return logging information from a specified server or set of servers.
To return information from a single server, specify the fully qualified domain name of that server.
For example:

`-Computers "atl-server-001.litwareinc.com"`

Multiple servers can be specified by separating the computer FQDNs using commas:

`-Computers "atl-server-001.litwareinc.com","red-server-002.litwareinc.com"`

If you do not include the Computers parameter or the Pools parameter, the `Show-CsClsLogging` cmdlet will show the status of all Computers in the topology.


```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pools
Enables administrators to return logging information for each server in a pool.
To return information for a pool, specify the fully qualified domain name of that pool.
For example:

`-Pools "atl-cs-001.litwareinc.com"`

Multiple pools can be specified by separating the pool FQDNs using commas:

`-Pools "atl-cs-001.litwareinc.com","red-cs-002.litwareinc.com"`

```yaml
Type: String[]
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
The `Show-CsClsLogging` cmdlet does not accept pipelined input.

## OUTPUTS

###  
String value or XML output.
The `Show-CsClsLogging` cmdlet does not return objects.

## NOTES

## RELATED LINKS

[Search-CsClsLogging]()

[Start-CsClsLogging]()

[Stop-CsClsLogging]()

[Sync-CsClsLogging]()

[Update-CsClsLogging]()
