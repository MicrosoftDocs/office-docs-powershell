---
external help file: Microsoft.Office.InfoPath.Server.dll-help.xml
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Install-SPInfoPathFormTemplate
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer: 
---

# Install-SPInfoPathFormTemplate

## SYNOPSIS
Installs an InfoPath form template on a farm.

## SYNTAX

```
Install-SPInfoPathFormTemplate [-Path] <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-EnableGradualUpgrade] [-NoWait] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Install-SPInfoPathFormTemplate cmdlet installs an InfoPath form template on a farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES


### ---------------EXAMPLE 1-------------- 
```
Install-SPInfoPathFormTemplate -Path c:\Form.xsn
```

This example installs a single form template to the farm.

### ---------------EXAMPLE 2-------------- 
```
"FormTemplateFirst.xsn", "FormTemplateSecond.xsn", "FormTemplateThird.xsn" | Install-SPInfoPathFormTemplate
```

This example installs multiple form templates on a farm.

## PARAMETERS

### -Path
Specifies the path and name of the form template to install.

The type must be a valid path and file name of a form template, in the form:

- C:\folder_name\formtemplate_name
- \\\\server_name\folder_name\formtemplate_name

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

### -EnableGradualUpgrade
Specifies that the new form can be gradually upgraded.

- If specified and the form template file exists, the form template is gradually upgraded and is then used for new sessions only.
- If not specified and the form template does not exist, the form is overwritten during an upgrade and is then used for exisiting and new sessions.
- If specified and the form template file does not exist, ignore the switch.
- If not specified and the file exists, the user is prompted to upgrade and to use the gradual upgrade if the upgrade is allowed.

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

### -NoWait
Specifies that the form template is installed in the background and that the progress of the installation not be shown.

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

