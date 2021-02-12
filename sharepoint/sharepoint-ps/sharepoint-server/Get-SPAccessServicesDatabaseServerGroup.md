---
external help file: microsoft.office.access.server.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spaccessservicesdatabaseservergroup
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPAccessServicesDatabaseServerGroup
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Get-SPAccessServicesDatabaseServerGroup

## SYNOPSIS
Returns a database server group.

## SYNTAX

```
Get-SPAccessServicesDatabaseServerGroup [-ServiceContext] <SPServiceContextPipeBind>
 [[-DatabaseServerGroup] <AccessServicesDatabaseServerGroupPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Returns a database server group associated with the given service context.

## EXAMPLES

### Example 1 
```
Get-SPAccessServicesDatabaseServerGroup -ServiceContext http://siteUrl
```
Returns the database server group associated with the site, http://siteUrl.

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

### -DatabaseServerGroup
The name of the database server group.

```yaml
Type: AccessServicesDatabaseServerGroupPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ServiceContext
Specifies the service context to retrieve Access Services database server information from.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPServiceContextPipeBind
Microsoft.Office.Access.Services.PowerShell.AccessServicesDatabaseServerGroupPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

