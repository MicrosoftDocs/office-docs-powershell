---
external help file: Microsoft.SharePoint.PowerShell.SSOUpgrade-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spsecurestoreapplication
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPSecureStoreApplication
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Get-SPSecureStoreApplication

## SYNOPSIS
Returns a Secure Store application.

## SYNTAX

### NameSet
```
Get-SPSecureStoreApplication -Name <String> -ServiceContext <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### AllSet
```
Get-SPSecureStoreApplication -ServiceContext <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-All] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

The Get-SPSecureStoreApplication cmdlet returns a Secure Store application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### ------------------EXAMPLE 1------------------ 
```
$ssApp = Get-SPSecureStoreApplication -ServiceContext http://contoso -Name "ContosoTargetApplication"
```

This example gets the Secure Store application for the target application with the name ContosoTargetApplication.

### ------------------EXAMPLE 2------------------ 
```
Get-SPSecureStoreApplication -ServiceContext http://contoso -All
```

This example returns all of the Secure Store applications http://contoso.

## PARAMETERS

### -Name
Specifies the name of the Secure Store application to get.

```yaml
Type: String
Parameter Sets: NameSet
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceContext
Specifies the service context for the local Secure Store application to connect to.

```yaml
Type: SPServiceContextPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -All
Returns all secure store applications for the given Service Context.

```yaml
Type: SwitchParameter
Parameter Sets: AllSet
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
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

