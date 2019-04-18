---
external help file: Microsoft.Office.Server.UserProfiles.dll-help.xml
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Update-SPRepopulateMicroblogLMTCache
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Update-SPRepopulateMicroblogLMTCache

## SYNOPSIS
Refreshes the cache.

## SYNTAX

```
Update-SPRepopulateMicroblogLMTCache -ProfileServiceApplicationProxy <SPServiceApplicationProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Use the `Update-SPRepopulateMicroblogLMTCache` cmdlet to refresh when the Feed Cache Repopulation Job timer job fails to work.
The `Update-SPRepopulateMicroblogLMTCache` cmdlet forcefully refreshes the last modified times of all the known persisted entities to FeedCache.

When you refresh the cache, the `Update-SPRepopulateMicroblogLMTCache` cmdlet should be run first and then the `Update-SPRepopulateMicroblogFeedCache` cmdlet second.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### ------------EXAMPLE-----------
```
$proxy = Get-SPServiceApplicationProxy | ?{$_.TypeName -eq 'User Profile Service Application Proxy'}
Update-SPRepopulateMicroblogLMTCache -ProfileServiceApplicationProxy $proxy
```

This example refreshes the cache for the specified proxy.

## PARAMETERS

### -ProfileServiceApplicationProxy
Specifies the User Profile Service application proxy to update.

The type must be in one of the following forms:


--A valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh

--A valid name of a service application proxy (for example, UserProfileSvcProxy1)

--An instance of a valid SPServiceApplicationProxy object

```yaml
Type: SPServiceApplicationProxyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
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

[Update-SPRepopulateMicroblogFeedCache](Update-SPRepopulateMicroblogFeedCache.md)
