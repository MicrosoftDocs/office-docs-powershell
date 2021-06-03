---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/copy-spbusinessdatacatalogacltochildren
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Copy-SPBusinessDataCatalogAclToChildren
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Copy-SPBusinessDataCatalogAclToChildren

## SYNOPSIS

Copies a set of permissions of a Business Data Connectivity Metadata Store metadata object to its child objects.



## SYNTAX

```
Copy-SPBusinessDataCatalogAclToChildren -MetadataObject <MetadataObject>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Copy-SPBusinessDataCatalogAclToChildren cmdlet copies a set of rights of a Business Data Connectivity metadata object to its child objects.

Any principals and their rights will be lost from the child metadata objects.
Make sure that the parent metadata object has the final permissions you want, or make sure to append them to the child object again after you run this cmdlet.

Running this cmdlet on a BdcObjectType BdcCatalog (Business Data Connectivity Metadata Store) will propagate to:

- BDC Models
- External Systems
- External Content Types
- Methods
- Method Instances

Running this cmdlet on a BdcObjectType Model (Business Data Connectivity Model) will propagate to:

- Nothing; this type has no child metadata objects

Running this cmdlet on a BdcObjectType LobSystem (External System) will propagate to:

- External Content Types
- Methods
- Method Instances

Running this cmdlet on a BdcObjectType Entity (External Content Type) will propagate to:

- Methods
- Method Instances

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### ------------------EXAMPLE------------------ 
```
$ExternalSystem = Get-SPBusinessDataCatalogMetadataObject -BdcObjectType "LobSystem" -ServiceContext https://contoso -Name "ContosoDatabase"
```

This example looks at the principals (users) and their corresponding rights given for the External System metadata object, and overwrites the permissions of its child metadata objects with these same principals and rights.

Any principals and their rights will be lost from the child metadata objects.
Make sure that the parent metadata object has the final permissions you want, or make sure to append them to the child object again after you run this cmdlet.

## PARAMETERS

### -MetadataObject
Specifies the Business Data Connectivity metadata object.

```yaml
Type: MetadataObject
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

