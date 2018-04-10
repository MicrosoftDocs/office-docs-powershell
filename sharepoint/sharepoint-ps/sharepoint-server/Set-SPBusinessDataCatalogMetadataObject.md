---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPBusinessDataCatalogMetadataObject
schema: 2.0.0
---

# Set-SPBusinessDataCatalogMetadataObject

## SYNOPSIS
Sets the value of a property or attribute of a Business Data Connectivity Metadata Store metadata object.


## SYNTAX

### Display
```
Set-SPBusinessDataCatalogMetadataObject -Identity <MetadataObject>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DisplayName <String>] [-Remove]
 [-SettingId <String>] [-WhatIf] [<CommonParameters>]
```

### NameValue
```
Set-SPBusinessDataCatalogMetadataObject -Identity <MetadataObject>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-PropertyName <String>]
 [-PropertyValue <PSObject>] [-Remove] [-SettingId <String>] [-WhatIf] [<CommonParameters>]
```

### NameRemove
```
Set-SPBusinessDataCatalogMetadataObject -Identity <MetadataObject>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-PropertyName <String>] [-Remove]
 [-SettingId <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Set-SPBusinessDataCatalogMetadataObject` cmdlet sets the value of a property or attribute of a Business Data Connectivity Metadata Store metadata object.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1------------------
```
PS C:\>$obj = Get-SPBusinessDataCatalogMetadataObject -Namespace "ContosoDatabase" -Name "ContosoDatabase" -BdcObjectType "LobSystemInstance" -ServiceContext http://contoso
PS C:\>Set-SPBusinessDataCatalogMetadataObject -Identity $obj -PropertyName "ShowInSearchUI" -PropertyValue "True"
```

This example creates a property on the LobSystemInstance (External System Instance) of name ContosoDatabase.
The property has the name ShowInSearchUI and a value of True.


## PARAMETERS

### -Identity
Specifies the Business Data Connectivity Metadata Store metadata object to update.

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
Specifies the display name of the Business Data Connectivity Metadata Store metadata object.

```yaml
Type: String
Parameter Sets: Display
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyName
Specifies the name of the property to update.

```yaml
Type: String
Parameter Sets: NameValue, NameRemove
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyValue
Sets the new value of the property specified in the PropertyName parameter.

```yaml
Type: PSObject
Parameter Sets: NameValue
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Remove
Removes the property specified in the PropertyName parameter.

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
Specifies the custom environment settings model slice for which the property applies.

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

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
