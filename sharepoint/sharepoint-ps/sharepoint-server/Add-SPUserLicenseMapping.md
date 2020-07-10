---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/add-spuserlicensemapping
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Add-SPUserLicenseMapping
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Add-SPUserLicenseMapping

## SYNOPSIS

Maps a security group, forms-based role, or claim to a SharePoint user license.



## SYNTAX

```
Add-SPUserLicenseMapping
 -Mapping <System.Collections.Generic.List`1[Microsoft.SharePoint.PowerShell.SPUserLicenseMapping]>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

The Add-SPUserLicenseMapping cmdlet maps a claim, Active Directory Domain Services (AD DS) security group, or forms-based role to a SharePoint user license for a farm or web application.
To specify a mapping to a specific web application, use the WebApplication parameter.
If you do not specify parameters, mapping applies to the entire SharePoint farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### ---------------EXAMPLE 1------------------- 
```
$a = New-SPUserLicenseMapping -SecurityGroup yoursecuritygroup -License Enterprise
Add-SPUserLicenseMapping -Mapping $a
```

This example adds user mappings for the entire farm.

## PARAMETERS

### -Mapping
```yaml
Type: List<Microsoft.SharePoint.PowerShell.SPUserLicenseMapping>
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

[Disable-SPUserLicensing](Disable-SPUserLicensing.md)

[Enable-SPUserLicensing](Enable-SPUserLicensing.md)

[Get-SPUserLicenseMapping](Get-SPUserLicenseMapping.md)

[Remove-SPUserLicenseMapping](Remove-SPUserLicenseMapping.md)

