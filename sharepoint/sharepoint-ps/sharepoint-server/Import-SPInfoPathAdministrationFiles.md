---
external help file: Microsoft.Office.InfoPath.Server.dll-help.xml
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Import-SPInfoPathAdministrationFiles
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer: 
---

# Import-SPInfoPathAdministrationFiles

## SYNOPSIS
Imports InfoPath form templates and .udcx files that are located on the SharePoint Central Administration Web site.

## SYNTAX

```
Import-SPInfoPathAdministrationFiles [-Path] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Identity <SPFormsServicePipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Import-SPInfoPathAdministrationFiles cmdlet imports InfoPath form templates (.xsn files) and universal data connections (.udcx files) that are located on the SharePoint Central Administration Web site into the specified InfoPath Forms Services service.
This cmdlet imports from a backup package that includes all workflow forms in InfoPath that were deployed by an administrator and not included with SharePoint Foundation, and browser forms that were deployed by an administrator.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### --------------EXAMPLE----------------- 
```
Import-SPInfoPathAdministrationFiles -path "backupfiles.cab"
```

This example imports form templates (XSN files) and universal data connections (UDCX files) located on the SharePoint Central Administration Web site into the specified Forms service.

## PARAMETERS

### -Path
Specifies the location of the .cab file to import.

The type must be a valid file path, in the form \\\\ipadmin\folder\backups1\ipfsfiles.cab.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
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

### -Identity
Specifies the destination InfoPath Forms Services service for the import.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a forms service (for example, FormsService1); or an instance of a valid SPFormsService object.

```yaml
Type: SPFormsServicePipeBind
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

