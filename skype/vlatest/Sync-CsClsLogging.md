---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Sync-CsClsLogging

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Flushes the centralized logging service cache.
Centralized logging provides a way for administrators to simultaneously enable or disable Microsoft Lync Server 2013 Preview tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Flushes the centralized logging service cache.
Centralized logging provides a way for administrators to simultaneously enable or disable Skype for Business Server 2015 tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Sync-CsClsLogging [-AsXml] [-Computers <String[]>] [-Pools <String[]>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Microsoft Lync Server 2013 Preview.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using Windows PowerShell and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Lync Server.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

It is also possible to define custom scenarios by using the New-CsClsScenario cmdlet.

When a scenario is being logged, the service will maintain data in memory and then periodically write that data to disk.
However, at any time administrators can run the Sync-CsClsLogging cmdlet to "flush" the data cache.
When this is done, all the logging data currently in memory will be written to disk, the data caches will be cleared, and the log files will be available for searching.

**Below Content Applies To:** Skype for Business Server 2015

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server 2015.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Skype for Business Server 2015.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

It is also possible to define custom scenarios by using the New-CsClsScenario cmdlet.

When a scenario is being logged, the service will maintain data in memory and then periodically write that data to disk.
However, at any time administrators can run the Sync-CsClsLogging cmdlet to "flush" the data cache.
When this is done, all the logging data currently in memory will be written to disk, the data caches will be cleared, and the log files will be available for searching.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 flushes the centralized logging caches for all the servers in the topology.

Sync-CsClsLogging

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 flushes the centralized logging caches for all the servers in the topology.

Sync-CsClsLogging

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the centralized logging caches are flushed on all the servers in the pool atl-cs-001.litwareinc.com.

Start-CsClsLogging -Pools "atl-cs-001.litwareinc.com"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the centralized logging caches are flushed on all the servers in the pool atl-cs-001.litwareinc.com.

Sync-CsClsLogging -Pools "atl-cs-001.litwareinc.com"

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
**Below Content Applies To:** Lync Server 2013

Enables administrators to flush the centralized logging service cache on a specified server or set of servers.
To flush a single server cache, specify the fully qualified domain name of that server.
For example:

-Computers "atl-server-001.litwareinc.com"

Multiple servers can be specified by separating the computer FQDNs using commas:

-Computers "atl-server-001.litwareinc.com","red-server-002.litwareinc.com"

If you do not include the Computers parameter or the Pools parameter, Sync-CsClsLogging will apply the command against all pools in the topology.



**Below Content Applies To:** Skype for Business Server 2015

Enables administrators to flush the centralized logging service cache on a specified server or set of servers.
To flush a single server cache, specify the fully qualified domain name of that server.
For example:

-Computers "atl-server-001.litwareinc.com"

Multiple servers can be specified by separating the computer FQDNs using commas:

-Computers "atl-server-001.litwareinc.com","red-server-002.litwareinc.com"

If you do not include the Computers parameter or the Pools parameter, the Sync-CsClsLogging cmdlet will apply the command against all pools in the topology.



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
Enables administrators to flush the centralized logging service cache on each server in a pool.
To flush the server caches in a pool, specify the fully qualified domain name of that pool.
For example:

-Pools "atl-cs-001.litwareinc.com"

Multiple pools can be specified by separating the pool FQDNs using commas:

-Pools "atl-cs-001.litwareinc.com","red-cs-002.litwareinc.com"

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
Sync-CsClsLogging does not accept pipelined input.

###  
None.
The Sync-CsClsLogging cmdlet does not accept pipelined input.

## OUTPUTS

###  
String value.
Sync-CsClsLogging does not return objects.

###  
String value.
The Sync-CsClsLogging cmdlet does not return objects.

## NOTES

## RELATED LINKS

[Search-CsClsLogging]()

[Show-CsClsLogging]()

[Start-CsClsLogging]()

[Stop-CsClsLogging]()

[Update-CsClsLogging]()

[Online Version](http://technet.microsoft.com/EN-US/library/0df996b7-1834-42f1-84e5-346ba74631e7(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0df996b7-1834-42f1-84e5-346ba74631e7(OCS.16).aspx)

