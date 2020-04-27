---
external help file: microsoft.office.access.server.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/set-spaccessservicesdatabaseservergroupmapping
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPAccessServicesDatabaseServerGroupMapping
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Set-SPAccessServicesDatabaseServerGroupMapping

## SYNOPSIS
Sets or creates the Access Services database server group mapping.


## SYNTAX

### ClearDatabaseServerGroupMappingParameterSetName
```
Set-SPAccessServicesDatabaseServerGroupMapping [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-ClearMapping] [-Confirm] [-CorporateCatalog]
 [-DeveloperSite] [-ObjectModel] [-RemoteObjectModel] [-StoreFront] [-WhatIf] [<CommonParameters>]
```

### SetDatabaseServerGroupMappingParameter
```
Set-SPAccessServicesDatabaseServerGroupMapping [-ServiceContext] <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-CorporateCatalog]
 -DatabaseServerGroup <AccessServicesDatabaseServerGroupPipeBind> [-DeveloperSite] [-ObjectModel]
 [-RemoteObjectModel] [-StoreFront] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to set the database server group to package source mapping.

## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
$site = (Get-SPWebApplication -IncludeCentralAdministration | ?{$_.IsAdministrationWebApplication -eq $true}).Sites[0]
Set-SPAccessServicesDatabaseServerGroupMapping -ServiceContext $site -DatabaseServiceGroup GROUP2
```
Creates an Access Services database group named GROUP2.

### --------------------EXAMPLE 1---------------------
```
$site = (Get-SPWebApplication -IncludeCentralAdministration | ?{$_.IsAdministrationWebApplication -eq $true}).Sites[0]
Set-SPAccessServicesDatabaseServerGroupMapping -ServiceContext $site -DatabaseServiceGroup GROUP2 -CorporateCatalog
```

Sets the database group named GROUP2 associating the group with packages from the corporate catalog.

## PARAMETERS

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

### -ClearMapping
Clears the database group mapping.

```yaml
Type: SwitchParameter
Parameter Sets: ClearDatabaseServerGroupMappingParameterSetName
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CorporateCatalog
Associates the database server group with packages uploaded to the corporate catalog (SharePoint Add-ins).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServerGroup
The name of the database server group to set or create.

```yaml
Type: AccessServicesDatabaseServerGroupPipeBind
Parameter Sets: SetDatabaseServerGroupMappingParameter
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeveloperSite
Associates the database server group with packages that came from the Developer Site. A Developer Site is one type of SharePoint template, intended as a site for developers to build, test and publish Office Add-ins.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ObjectModel
Associates the database server group with packages uploaded via the server-side object model.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteObjectModel
Associates the database server group with packages that are uploaded via the client-side object model.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceContext
Specifies the service context which is in the form of an instance of an SPServiceContext object, an SPSiteAdministration object identifier, or a SPSite object. An example of a service context value is an identifier from the ID field, a string identifier, a URI, or a string representation of a GUID.

```yaml
Type: SPServiceContextPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -StoreFront
Associates the SharePoint Marketplace with the database server group.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

### Microsoft.SharePoint.PowerShell.SPServiceContextPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
