---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Import-SPBusinessDataCatalogModel
schema: 2.0.0
---

# Import-SPBusinessDataCatalogModel

## SYNOPSIS

Imports a Business Data Connectivity Model.

## SYNTAX

### Catalog
```
Import-SPBusinessDataCatalogModel -Identity <MetadataObject> -Path <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Force] [-LocalizedNamesIncluded]
 [-ModelsIncluded] [-PermissionsIncluded] [-PropertiesIncluded] [-SettingId <String>] [-WhatIf]
 [<CommonParameters>]
```

### ServiceContext
```
Import-SPBusinessDataCatalogModel -Path <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Force] [-LocalizedNamesIncluded] [-ModelsIncluded] [-PermissionsIncluded] [-PropertiesIncluded]
 [-SettingId <String>] [-WhatIf] -ServiceContext <SPServiceContextPipeBind> [<CommonParameters>]
```

## DESCRIPTION
The Import-SPBusinessDataCatalogModel cmdlet imports a Business Data Connectivity Model.
There are two types of Business Data Connectivity models: Model type (.bdcm) and Resource type (.bdcr).
The Model type contains the base XML metadata, and can also include resource properties.
The Resource type includes only resource properties.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ 
```
C:\PS>$MetadataStore = Get-SPBusinessDataCatalogMetadataObject -BdcObjectType "Catalog" -ServiceConext http://contoso
PS C:\>Import-SPBusinessDataCatalogModel -Path "C:\folder\model.bdcm" -Identity $MetadataStore
```

This example gets the Business Data Connectivity Metadata Store and then imports a Business Data Connectivity Model of Model type to it from the path specified with the name model.

### ------------------EXAMPLE 2------------------ 
```
PS C:\>Import-SPBusinessDataCatalogModel -Path "C:\Program Files\Duet Enterprise\2.0\BDC Models\Reporting.en-us.bdcr -Identity $bdcCatalog -ModelsIncluded:$false
```

This example imports a resource only file by using the ModelsIncluded parameter.

## PARAMETERS

### -Identity
Specifies the Business Data Connectivity Metadata Store metadata object to import to.

```yaml
Type: MetadataObject
Parameter Sets: Catalog
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Path
Specifies the path and name to use.

The type must be a valid path in either of the following forms:

- C:\folder_name\file.bdcm
- \\\\server_name\folder_name\file.bdcm
- …\folder_name\file.bdcm

```yaml
Type: String
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

### -Force
Overwrites the Business Data Connectivity Model if the file exists.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalizedNamesIncluded
Specifies that names for business data fields in multiple languages are imported.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModelsIncluded
Specifies that models are included in the imported Business Data Connectivity Model file.
A model contains the base XML metadata for a system.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionsIncluded
Specifies that permissions from the Business Data Connectivity Model are imported.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertiesIncluded
Specifies that properties from the Business Data Connectivity Model are imported.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SettingId
Specifies the custom environment settings model slice to import.

The type must be a valid string that identifies a model slice; for example, ModelSlice1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
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

### -ServiceContext
Specifies the service context to set.

```yaml
Type: SPServiceContextPipeBind
Parameter Sets: ServiceContext
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

