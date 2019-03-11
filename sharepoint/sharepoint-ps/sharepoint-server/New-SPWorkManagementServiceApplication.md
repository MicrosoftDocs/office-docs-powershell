---
external help file: Microsoft.Office.Server.WorkManagement.dll-help.xml
applicable: SharePoint Server 2013
title: New-SPWorkManagementServiceApplication
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer: 
---

# New-SPWorkManagementServiceApplication

## SYNOPSIS
Creates a new Work Management Service application.


## SYNTAX

```
New-SPWorkManagementServiceApplication -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind> -Name <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Proxy] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the `New-SPWorkManagementServiceApplication` cmdlet to create a new Work Management Service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

Note: This functionality has been removed from SharePoint Server 2016, SharePoint Server 2019, but the cmdlet is still present in the product.

## EXAMPLES

### ------------------EXAMPLE-----------------------
```
New-SPWorkManagementServiceApplication -Name 'Work Management Service Application' -ApplicationPool 'SharePoint Web Services Default'
```

This example creates a new Work Management Service Application using the Application Pool named SharePoint Web Services Default.


## PARAMETERS

### -ApplicationPool
Specifies the name of an application pool to use; for example, SharePoint - 1213.
If no value is specified, the default application pool is used.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Specifies the name of the Work Management Service application to be created.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

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
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Proxy
Specifies whether to add the Work Management Service application to the proxy group.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

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
Applicable: SharePoint Server 2013

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

[New-SPWorkManagementServiceApplicationProxy](New-SPWorkManagementServiceApplicationProxy.md)

[Set-SPWorkManagementServiceApplication](Set-SPWorkManagementServiceApplication.md)

[Set-SPWorkManagementServiceApplicationProxy](Set-SPWorkManagementServiceApplicationProxy.md)
