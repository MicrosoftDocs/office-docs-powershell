---
external help file: microsoft.office.access.server.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/copy-spaccessservicesdatabasecredentials
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Copy-SPAccessServicesDatabaseCredentials
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Copy-SPAccessServicesDatabaseCredentials

## SYNOPSIS
This cmdlet copies Access Services database credentials from one server to another.

## SYNTAX

```
Copy-SPAccessServicesDatabaseCredentials [-AppUrl] <String> [-AssignmentCollection <SPAssignmentCollection>]
 -ServerCredential <NetworkCredential> -ServiceContext <SPServiceContextPipeBind> -SourceServer <String>
 -TargetServer <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet copies Access Services database credentials from one server to another.

## EXAMPLES

### Example 1

```powershell
Copy-SPAccessServicesDatabaseCredentials -AppUrl https://app-11fb86bdec407b.apps.contoso.com/sites/team/MyDatabase -ServerCredential (Get-Credential) -ServiceContext https://team.contoso.com -SourceServer SQL01 -TargetServer SQL02
```

Copies the database credentials for the Access Services database "MyDatabase" from SQL01 to SQL02.

## PARAMETERS

### -AppUrl
The URL of the Access app. This URL is the URL of the Access app when you open it on a SharePoint site.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -ServerCredential
Credential used to connect to the source server.

```yaml
Type: NetworkCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceContext
Specifies the service context for which the realm needs to be displayed. For example, a SharePoint site URL.

```yaml
Type: SPServiceContextPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SourceServer
Source SQL Server name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetServer
Destination SQL Server name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
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

