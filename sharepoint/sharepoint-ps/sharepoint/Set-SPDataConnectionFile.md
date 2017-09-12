---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPDataConnectionFile

## SYNOPSIS
Sets properties of a data connection file.

## SYNTAX

```
Set-SPDataConnectionFile [-Identity] <SPDataConnectionFilePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Category <String>] [-Confirm] [-Description <String>]
 [-DisplayName <String>] [-WebAccessible <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Set-SPDataConnectionFile cmdlet sets the properties of the data connection file specified in the Identity parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE----------------- (SharePoint Server 2013)
```
C:\PS>Set-SPDataConnectionFile -Identity "sample.udcx" -Category "Temp"
```

This example updates the Category of the specified .udcx file.

### --------------EXAMPLE----------------- (SharePoint Server 2016)
```
C:\PS>Set-SPDataConnectionFile -Identity "sample.udcx" -Category "Temp"
```

This example updates the Category of the specified .udcx file.

### --------------EXAMPLE 2----------------- (SharePoint Server 2013)
```
C:\PS>Set-SPDataConnectionFile -Identity "sample.udcx" -DisplayName "NewDisplayName"
```

This example updates the DisplayName of the specified .udcx file.

### --------------EXAMPLE 2----------------- (SharePoint Server 2016)
```
C:\PS>Set-SPDataConnectionFile -Identity "sample.udcx" -DisplayName "NewDisplayName"
```

This example updates the DisplayName of the specified .udcx file.

### --------------EXAMPLE 3----------------- (SharePoint Server 2013)
```
C:\PS>Sample.udcx" | Set-SPDataConnectionFile -Category "Temp"
```

This example updates the Category of the specified .udcx file.

### --------------EXAMPLE 3----------------- (SharePoint Server 2016)
```
C:\PS>Sample.udcx" | Set-SPDataConnectionFile -Category "Temp"
```

This example updates the Category of the specified .udcx file.

### --------------EXAMPLE 4----------------- (SharePoint Server 2013)
```
C:\PS>Get-SPDataConnectionFile | where {$_.Category -eq "Category1"}  | Set-SPDataConnectionFile -Category "Category2"
```

This example updates the Category field for the collection of .udcx files that are returned from a query used by the Get-SPDataConnectionFile cmdlet.

### --------------EXAMPLE 4----------------- (SharePoint Server 2016)
```
C:\PS>Get-SPDataConnectionFile | where {$_.Category -eq "Category1"}  | Set-SPDataConnectionFile -Category "Category2"
```

This example updates the Category field for the collection of .udcx files that are returned from a query used by the Get-SPDataConnectionFile cmdlet.

## PARAMETERS

### -Identity
Specifies the data connection file to update.

The type must be a valid GUID, in form 12345678-90ab-cdef-1234-567890bcdefgh;  a valid name of a data connection file (for example, DataConnectionFileName1.udcx); or an instance of a valid SPDataConnectionFile object.

```yaml
Type: SPDataConnectionFilePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Category
Sets an arbitrary category on the file which can be used to group the files.
The category name can have a maximum of 255 characters.

The type must be a valid string value; for example, Category1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Sets the description for the data connection file.
The name can be a maximum of 4096 alphanumeric characters.

The type must be a valid string; for example, Description of my universal data connection file.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
Specifies the display name that describes the data connection file.
The name can have a maximum of 255 characters.

The type must be a valid string; for example, InfoPathUDC1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebAccessible
Specifies that the universal data connection file can be accessed by using the Web service.
If false, only the forms server can retrieve the universal data connection files internally.
The default value is False.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

