---
external help file: Microsoft.Office.TranslationServices.dll-Help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/new-sptranslationserviceapplicationproxy
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: New-SPTranslationServiceApplicationProxy
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer: 
---

# New-SPTranslationServiceApplicationProxy

## SYNOPSIS
Creates a Machine Translation Service application proxy on the local farm.


## SYNTAX

### ConnectLocal
```
New-SPTranslationServiceApplicationProxy -Name <String>
 -ServiceApplication <TranslationServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-DefaultProxyGroup] [-PartitionMode] [-WhatIf] [<CommonParameters>]
```

### ConnectRemote
```
New-SPTranslationServiceApplicationProxy -Name <String> -Uri <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DefaultProxyGroup] [-PartitionMode] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

The `New-SPTranslationServiceApplicationProxy` cmdlet creates a Machine Translation Service application proxy on the local farm.
The proxy is added to the default proxy group for the local farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### -----------EXAMPLE---------
```
$sa = New-SPTranslationServiceApplication -Name TranslationService -ApplicationPool 'SharePoint Web Services Default' -DatabaseServer Server1 -DatabaseName TranslationServiceDatabase
New-SPTranslationServiceApplicationProxy -Name TranslationServiceProxy -ServiceApplication $sa -DefaultProxyGroup
```

This example creates a Machine Translation Service application and proxy in the default proxy group named TranslationServiceProxy.


## PARAMETERS

### -Name
Specifies the display name for the new Machine Translation Service application.
The name that you use must be a unique name of a Machine Translation Service application in this farm.
The name can be a maximum of 128 characters.

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

### -ServiceApplication
Specifies the local Machine Translation Service application that is associated with the new proxy.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Machine Translation Service application (for example, MachTrans1); or an instance of a valid SPServiceApplication object.

```yaml
Type: TranslationServiceApplicationPipeBind
Parameter Sets: ConnectLocal
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Uri
Specifies the URI of the remote machine translation service application this proxy should communicate with.
This value is required only if you plan to connect a Machine Translation Service application from a remote farm.

```yaml
Type: String
Parameter Sets: ConnectRemote
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

### -DefaultProxyGroup
Specifies that the Machine Translation Service application proxy be added to the default proxy group for the local farm.

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

### -PartitionMode
Specifies that the service application restrict data by site group.
After the PartitionMode parameter is set and the service application is created, it cannot be changed.

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

[New-SPTranslationServiceApplication](New-SPTranslationServiceApplication.md)

[Set-SPTranslationServiceApplication](Set-SPTranslationServiceApplication.md)

[Set-SPTranslationServiceApplicationProxy](Set-SPTranslationServiceApplicationProxy.md)
