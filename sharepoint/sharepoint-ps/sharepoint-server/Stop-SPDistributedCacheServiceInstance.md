---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Stop-SPDistributedCacheServiceInstance
schema: 2.0.0
---

# Stop-SPDistributedCacheServiceInstance

## SYNOPSIS
Stops an instance of the Distributed Cache service on a local server.


## SYNTAX

```
Stop-SPDistributedCacheServiceInstance [-Graceful] [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Stop-SPDistributedCacheServiceInstance cmdlet to stop an instance of the Distributed Cache service on a local server. While a -Graceful switch does exist, this cmdlet is not capable of properly transferring cached items to another Distributed Cache host within the farm. Follow the guidance available at [Manage the Distributed Cache service in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/jj219613.aspx) to properly issue a graceful shutdown of the Distributed Cache service.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [http://go.microsoft.com/fwlink/p/?LinkId=251831](http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------ Example 1 ----------
```
C:\PS>
```
Please see referenced article instead of using this cmdlet directly: [Manage the Distributed Cache service in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/jj219613.aspx)

## PARAMETERS

### -Graceful
Specifies whether to gracefully stop an instance of the Distributed Cache service.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Remove-SPDistributedCacheServiceInstance](Remove-SPDistributedCacheServiceInstance.md)

[Add-SPDistributedCacheServiceInstance](Add-SPDistributedCacheServiceInstance.md)
