---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Install-SPHelpCollection

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Install-SPHelpCollection [-All] [-AssignmentCollection <SPAssignmentCollection>]
```

### UNNAMED_PARAMETER_SET_2
```
Install-SPHelpCollection -LiteralPath <String> [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Install-SPHelpCollection cmdlet installs the Help site collection files for SharePoint 2010 Products in the current farm.
Use the LiteralPath parameter to install specific custom Help collection files.
If the LiteralPath parameter is not specified, all available Help in the Help site collection is installed and existing Help collection files are overwritten.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
C:\PS>Install-SPHelpCollection -LiteralPath 'C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\14\HCCab\1033\OSSAdmin.cab'
```

This example installs the specified help collection in the current farm.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Install-SPHelpCollection -LiteralPath 'C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\14\HCCab\1033\OSSAdmin.cab'
```

This example installs the specified help collection in the current farm.

## PARAMETERS

### -All
If the LiteralPath parameter is not specified, specifies that all Help Collection CABs under %Program Files%\Common Files\Microsoft Shared\Web Server Extensions\14\HCCab\\\<LCID\> in the Help site collection are installed, and existing Help collections are overwritten.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -LiteralPath
Specifies the exact path to a specific custom Help file in the Help site collection cab file.

The type must be a valid path in either of the following forms:

- C:\folder_name
- \\\\server_name\folder_name

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

