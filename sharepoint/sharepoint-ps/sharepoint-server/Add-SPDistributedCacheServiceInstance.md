---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Add-SPDistributedCacheServiceInstance
schema: 2.0.0
---

# Add-SPDistributedCacheServiceInstance

## SYNOPSIS

Adds an instance of the distributed cache service to a local server.



## SYNTAX

###  (Default)
```
Add-SPDistributedCacheServiceInstance [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### CacheSizeSet
```
Add-SPDistributedCacheServiceInstance [-AssignmentCollection <SPAssignmentCollection>] [-CacheSizeInMB <Int32>]
 [<CommonParameters>]
```

### LocalServerRoleSet
```
Add-SPDistributedCacheServiceInstance [-AssignmentCollection <SPAssignmentCollection>] [-Role <SPServerRole>]
 [<CommonParameters>]
```

## DESCRIPTION

This cmdlet contains more than one parameter set. You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets. For more information about how to use parameter sets, see [Cmdlet Parameter Sets](http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Add-SPDistributedCacheServiceInstance cmdlet to add an instance of the distributed cache server to a local server. This is required to start the AppFabric service.



## EXAMPLES

### Example 1 
```
Add-SPDistributedCacheServiceInstance
```

This example adds an instance of the distributed cache service to a local server.

## PARAMETERS

### -AssignmentCollection

Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

**NOTE**: When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.



```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CacheSizeInMB
Specifies the amount of RAM to allocate for the Distributed Cache service instance.

If this parameter is not specified, the default value will be used.

```yaml
Type: Int32
Parameter Sets: CacheSizeSet
Aliases: 
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Role
Specifies the type of server role that the Distributed Cache service instance should be configured for. 

This parameter is typically used when you are going to do a server role conversion to the specified server role.

The valid values are:

* SingleServerFarm
* DistributedCache
* WebFrontEndWithDistributedCache

```yaml
Type: SPServerRole
Parameter Sets: LocalServerRoleSet
Aliases: 
Accepted values: DistributedCache, SingleServerFarm, WebFrontEndWithDistributedCache
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Remove-SPDistributedCacheServiceInstance](Remove-SPDistributedCacheServiceInstance.md)

