---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/remove-spmanagedpath
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Remove-SPManagedPath
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer: 
---

# Remove-SPManagedPath

## SYNOPSIS
Deletes the specified managed path from the specified host header or Web application.


## SYNTAX

### HostHeader
```
Remove-SPManagedPath [-Identity] <SPPrefixPipeBind> [-HostHeader]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

### WebApplication
```
Remove-SPManagedPath [-Identity] <SPPrefixPipeBind> -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

The `Remove-SPManagedPath` cmdlet deletes the managed path specified by the Identity parameter from the host header or the Web application.
The Identity must be the partial URL of the managed path to be deleted.

If you are using host-named site collections, specify the HostHeader parameter.
To delete a host-named site collection managed path, provide the HostHeader switch.
Otherwise, you must specify the Web application that contains the managed path to be deleted.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### ----------------------EXAMPLE 1----------------------------
```
Remove-SPManagedPath "sites" -HostHeader
```

This example removes the sites managed path from the list of host-named site collection managed paths.

Depending on the confirmation level of the local system, the preceding example can prompt prior to execution.


### ------------------EXAMPLE 2-----------------------
```
Get-SPWebApplication | Remove-SPManagedPath "personal" -confirm:$false
```

This example removes the personal managed path from all Web applications in the farm.
This command does not prompt for confirmation.


## PARAMETERS

### -Identity
Specifies the name of the managed path to delete.
For example, in the URL https://sitename/sites/site1, "sites" is the name of the managed path.

```yaml
Type: SPPrefixPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -HostHeader
Specifies that the Identity is a host header managed path.

```yaml
Type: SwitchParameter
Parameter Sets: HostHeader
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Specifies the identity of the Web application that hosts the managed path to delete.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid Web application name (for example, WebApplication1212); or a valid name, in the form WebApp2423.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: WebApplication
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
