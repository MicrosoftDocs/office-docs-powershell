---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Invoke-CsStorageServiceFlush
schema: 2.0.0
---

# Invoke-CsStorageServiceFlush

## SYNOPSIS

Flushes the Skype for Business Server Storage Service database on each Front End server in a pool.
Flushing a database involves writing all the queued data to disk, and then clearing the database queue.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Invoke-CsStorageServiceFlush -FlushType <FlushType> -PoolFqdn <Fqdn> [-Binding <String>] [-Force]
 [-HostNameStorageService <String>] [-WaitTime <TimeSpan>] [<CommonParameters>]
```

## DESCRIPTION

The Skype for Business Server Storage Service provides a common interface and infrastructure for managing Skype for Business Server data, including session data for monitoring, archiving, and conversation history, as well as for integrating with the Exchange storage system.
Like other databases, the Storage Service caches data in memory and then, as system resources permit, periodically writes that data to disk.

As a general rule, administrators do not have to interact with this queued data.
However, there could be times when the queue becomes too large or because the Registrar pool associated with the database is being failed over.
In cases like that, the Invoke-CsStorageServiceFlush cmdlet can be called in order to write all the queued data to disk and then clear the database cache.

The Invoke-CsStorageServiceFlush cmdlet is also useful when multiple Front End servers must be shut down at the same time (for example, in order to do a software upgrade).
As a general rule, Front End servers in a pool should be shut down, and restarted, one-by-one; that helps prevent data loss that could occur due to routing group rebalancing.
However, there might be occasions when you need to shutdown multiple servers at the same time.
To help guard against potential loss, you can run the Invoke-CsStorageServiceFlush cmdlet before doing the computer shutdowns.
This will flush the queue for the pool and write all that data to disk before any of the servers are actually shut down.

Skype for Business Server Control Panel: The functions carried out by the Invoke-CsStorageServiceFlush cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Invoke-CsStorageServiceFlush -PoolFqdn "atl-cs-001.litwareinc.com" -FlushType "SteadyState"
```

The command shown in Example 1 performs a "steady state" flush of the Storage Service databases found on the pool atl-cs-011.litwareinc.com.
In a steady state flush, the only data removed from the queue (and written to disk) is data that can be removed without affecting the database operation.


## PARAMETERS

### -FlushType

Specifies the type of storage flush to be performed.
Allowed values are:

SteadyState - The only data that will be flushed is data that can be removed from the queue without affecting normal operations of the storage service.
This is typically done to remove older data from the queue.

FullFlush - Flushes all the data from the queue.
This is typically used when a pool is being failed over, and when there is no expectation that the queue will be receiving any new data.



```yaml
Type: FlushType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoolFqdn
Fully qualified domain name of the pool containing the storage service to be flushed.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Binding

Windows Communication Foundation (WCF) binding.
A WCF binding determines the transport, encoding, and protocol details required for clients and services to communicate with each other.
valid values are:

NetNamedPipe

NetTCP



```yaml
Type: String
Parameter Sets: (All)
Aliases: b
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

### -HostNameStorageService

Fully qualified domain name of the server where the Skype for Business Server Storage Service is running.
This parameter is required if the Binding is set to NetTCP.



```yaml
Type: String
Parameter Sets: (All)
Aliases: h
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WaitTime
Specifies the maximum amount of time the cmdlet will wait before assuming that flushing has begun and moving on to the next step in the flushing process.

```yaml
Type: TimeSpan
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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The Invoke-CsStorageServiceFlush cmdlet does not accept pipelined data.

## OUTPUTS

###  
String value.

## NOTES

## RELATED LINKS

[Invoke-CsPoolFailOver](Invoke-CsPoolFailOver.md)

