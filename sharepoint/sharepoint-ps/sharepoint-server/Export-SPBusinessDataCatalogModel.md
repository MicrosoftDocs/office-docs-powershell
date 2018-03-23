---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Export-SPBusinessDataCatalogModel
schema: 2.0.0
---

# Export-SPBusinessDataCatalogModel

## SYNOPSIS

Exports a Business Data Connectivity Model.



## SYNTAX

```
Export-SPBusinessDataCatalogModel -Identity <MetadataObject> -Path <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Force] [-LocalizedNamesIncluded] [-ModelsIncluded]
 [-PermissionsIncluded] [-PropertiesIncluded] [-ProxiesIncluded] [-SettingId <String>] [<CommonParameters>]
```

## DESCRIPTION
The Export-SPBusinessDataCatalogModel cmdlet exports a Business Data Connectivity Model. 
There are two types of Business Data Connectivity models: Model type (.bdcm) and Resource type (.bdcr).
The Model type contains the base XML metadata, and can also include resource properties.
The Resource type includes only resource properties.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ 
```
C:\PS>$Model = Get-SPBusinessDataCatalogMetadataObject -BdcObjectType "Model" -Name "ContosoModel" -ServiceConext http://contoso
C:\PS>Export-SPBusinessDataCatalogModel -Identity $Model -Path "C:\folder\model.bdcm"
```

This example gets a Business Data Connectivity Model from the Business Data Connectivity Metadata Store and exports it to the location specified with the name model and using the bdcm file extension.

## PARAMETERS

### -Identity
Specifies the Business Data Connectivity Metadata Store metadata object from which to export the Business Data Connectivity Model.

```yaml
Type: MetadataObject
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Path
Specifies the path and name to use to create the export file.

The type must be a valid path in either of the following forms:

- C:\folder_name \file.bdcm
- \\\\server_name\folder_name \file.bdcm
- …\folder_name\file.bdcm

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Force
Overwrites the output file if the file exists.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalizedNamesIncluded
Specifies that names for business data fields in multiple languages are exported.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModelsIncluded
Specifies that models are included in the exported Business Data Connectivity Model file.
A model contains the base XML metadata for a system.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermissionsIncluded
Specifies that permissions from the Business Data Connectivity Model are exported.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertiesIncluded
Specifies that properties from the application definition are exported.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxiesIncluded
Specifies that proxies for Business Data Connectivity Service applications are exported.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SettingId
Specifies the custom environment settings model slice to export.

The type must be a valid string that identifies a model slice; for example, ModelSlice1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
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

