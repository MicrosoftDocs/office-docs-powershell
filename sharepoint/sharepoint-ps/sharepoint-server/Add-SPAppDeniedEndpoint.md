---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/add-spappdeniedendpoint
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Add-SPAppDeniedEndpoint
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Add-SPAppDeniedEndpoint

## SYNOPSIS

Adds a  relative URL endpoint of a server to the list of app-denied endpoints.



## SYNTAX

```
Add-SPAppDeniedEndpoint [-Endpoint] <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Add-SPAppDeniedEndpoint cmdlet to add a  relative URL endpoint of a server to the list of app-denied endpoints in the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### -------------EXAMPLE------------- 
```
Add-SPAppDeniedEndpoint -Endpoint "/_vti_bin/contoso/service.asmx"
```

This example adds the "/_vti_bin/contoso/service.asmx" endpoint to the list of denied endpoints for apps.
Apps will not be able to access this endpoint.

## PARAMETERS

### -Endpoint
Specifies a relative URL endpoint of a server that is added to the list of app-denied endpoints.
Apps will not be able to access relative URL endpoints of a server that exist in the app-denied endpoint list.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: False
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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

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

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

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

## OUTPUTS

## NOTES

## RELATED LINKS

[Remove-SPAppDeniedEndpoint](Remove-SPAppDeniedEndpoint.md)

