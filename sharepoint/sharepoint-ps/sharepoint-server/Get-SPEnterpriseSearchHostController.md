---
external help file: Microsoft.Office.Server.Search.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spenterprisesearchhostcontroller
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPEnterpriseSearchHostController
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Get-SPEnterpriseSearchHostController

## SYNOPSIS
Lists the specified or all search host controllers in the farm.

## SYNTAX

```
Get-SPEnterpriseSearchHostController [-AssignmentCollection <SPAssignmentCollection>]
 [-SearchServiceInstance <SearchServiceInstancePipeBind>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet lists the specified or all SearchHostControllers in the farm.
The SearchHostController is related to the SearchServiceInstance, where the SearchHostController manages the search components that run on a server, and maintains a local repository for linguistic dictionaries.
The search components retrieve the linguistic dictionaries from the PrimaryHostController.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### ------------------EXAMPLE 1------------------ 
```
Get-SPEnterpriseSearchHostController
```

This example retrieves a list of all HostControllers in the farm with their status (primary/secondary) and repository version.

### ------------------EXAMPLE 2------------------ 
```
$ssi = Get-SPEnterpriseSearchServiceInstance -Local
Get-SPEnterpriseSearchHostController -SearchServiceInstance $ssi
```

This example retrieves the status information for the SearchHostController on the local server.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### -SearchServiceInstance
The Search Service instance of the server from where the SearchHostController object is returned.

```yaml
Type: SearchServiceInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS


