---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Stop-SPDistributedCacheServiceInstance

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Stop-SPDistributedCacheServiceInstance [-Graceful] [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
Use the Stop-SPDistributedCacheServiceInstance cmdlet to stop an instance of the distributed cache service on a local server.

Execution of this cmdlet moves cached items to another server to preserve them.
If you stop the distributed service before you stop each instance, cached items are lost.
To prevent cached items from being lost, use the Graceful parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------EXAMPLE---------- (SharePoint Server 2013)
```
C:\PS>Stop-SPDistributedCacheServiceInstance -Graceful
```

This example gracefully stops an instance of a distributed cache service on a local server.

### ------------EXAMPLE---------- (SharePoint Server 2016)
```
C:\PS>Stop-SPDistributedCacheServiceInstance -Graceful
```

This example gracefully stops an instance of a distributed cache service on a local server.

## PARAMETERS

### -Graceful
Specifies whether to gracefully stop an instance of the distributed cache service.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: False
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Remove-SPDistributedCacheServiceInstanceOnLocalServer]()

[Add-SPDistributedCacheServiceInstanceOnLocalServer]()

