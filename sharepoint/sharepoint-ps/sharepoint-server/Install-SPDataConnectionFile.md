---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Install-SPDataConnectionFile
schema: 2.0.0
---

# Install-SPDataConnectionFile

## SYNOPSIS
Installs the provided data connection file.

## SYNTAX

```
Install-SPDataConnectionFile [-Path] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Category <String>] [-Confirm] [-Overwrite] [-WebAccessible] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Install-SPDataConnectionFile cmdlet installs the provided data connection file.
If the specified data connection file exists, the user is prompted to replace the existing file.

This cmdlet does not create a new file.
Instead, it creates a new data connection file object.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------EXAMPLE-------------- 
```
C:\PS>Install-SPDataConnectionFile -Path .\folder\sample.udcx -Category "Install" -WebAccessible $true

C:\PS>".\folder\sample.udcx" | Install-SPDataConnectionFile -Category "Install" -Category "Category1"  -Overwrite $true
```

This example uploads a data connection file to a specified category.

This cmdlet is equivalent to the Upload Data Connection File user interface setting that is located on the Manage Data Connection Files page of the SharePoint Central Administration Web site.

## PARAMETERS

### -Path
Specifies the full path to the name of the file in the data connection store.

The type must be the name of a valid data connection file; for example, C:\foldername\myconnection.udcx.

```yaml
Type: String
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
For more information, type the following command: `get-help about_commonparameters`

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

### -Overwrite
Overwrites the existing data connection file.
The default value is False.

```yaml
Type: SwitchParameter
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
If False, only the Forms Server can retrieve the universal data connection files internally.
The default value is False.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

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

