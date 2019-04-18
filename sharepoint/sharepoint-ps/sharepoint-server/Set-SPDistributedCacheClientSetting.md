---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPDistributedCacheClientSetting
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Set-SPDistributedCacheClientSetting

## SYNOPSIS
Sets distributed cache settings.


## SYNTAX

```
Set-SPDistributedCacheClientSetting [-ContainerType] <SPDistributedCacheContainerType>
 [-DistributedCacheClientSettings] <SPDistributedCacheClientSettings>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Use the `Set-SPDistributedCacheClientSettings` cmdlet to set the distributed cache service based on usage.
Usage can be any type of cache that the ContainerType parameter specifies.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### --------------------EXAMPLE---------------------
```
$settings = Get-SPDistributedCacheClientSetting -ContainerType DistributedLogonTokenCache
$settings.MaxConnectionsToServer = 10
Set-SPDistributedCacheClientSetting -ContainerType DistributedLogonTokenCache -DistributedCacheClientSettings $settings
```

This example updates the MaxConnectionsToServer to 10 for DistributedLogonTokenCache.


## PARAMETERS

### -ContainerType
Specifies the container type to clear.

The valid values are the following:

-DistributedDefaultCache

-DistributedAccessCache

-DistributedActivityFeedCache

-DistributedBouncerCache

-DistributedLogonTokenCache

-DistributedServerToAppServerAccessTokenCache

-DistributedSearchCache

-DistributedSecurityTrimmingCache

-DistributedActivityFeedLMTCache

-DistributedViewStateCache


```yaml
Type: SPDistributedCacheContainerType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DistributedCacheClientSettings
Updates the various cache client settings.
It is recommended to use the default settings.

```yaml
Type: SPDistributedCacheClientSettings
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPDistributedCacheClientSetting](Get-SPDistributedCacheClientSetting.md)
