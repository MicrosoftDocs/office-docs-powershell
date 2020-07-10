---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/set-spcustomlayoutspage
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPCustomLayoutsPage
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Set-SPCustomLayoutsPage

## SYNOPSIS
Maps a new path for a custom layout page.


## SYNTAX

### CustomPage
```
Set-SPCustomLayoutsPage -Identity <SPCustomPage> -RelativePath <String>
 -WebApplication <SPWebApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-WhatIf] [-CompatibilityLevel <Int32>] [<CommonParameters>]
```

### ResetCustomPage
```
Set-SPCustomLayoutsPage -Identity <SPCustomPage> [-Reset] -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [-CompatibilityLevel <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

The `Set-SPCustomLayoutsPage` cmdlet maps a new path for a custom layouts page in a Web application.
To remove the mapping for a custom layouts page, use the Reset parameter instead of the RelativePath parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### ------------------EXAMPLE-----------------------
```
Set-SPCustomLayoutsPage -Identity AccessDenied -RelativePath "/_layouts/custompages/myaccessdenied.aspx" -WebApplication "https://server_name/mywebapp"
```

This example maps the specified path for the AccessDenied layout page in the Web application "https://server_name/mywebapp".


## PARAMETERS

### -Identity
Specifies the custom layout page to set.

The type must be one of the following: None, AccessDenied, Confirmation, Error, Login, RequestAccess, Signout, or WebDeleted.

```yaml
Type: SPCustomPage
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RelativePath
Specifies the path of the custom layout page.

The type must be a valid path of a layout page, in the form _layouts/custompages/myaccessdenied.aspx.

```yaml
Type: String
Parameter Sets: CustomPage
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reset
Resets the mapping of a custom layouts page.

```yaml
Type: SwitchParameter
Parameter Sets: ResetCustomPage
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Specifies the SharePoint Web application that contains the custom layout page.

The type must be a valid URL, in the form https://server_name; a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of SharePoint Web application (for example, MyOfficeApp1); or an instance of a valid SPWebApplication object.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

### -CompatibilityLevel
Specifies the version of templates to use when creating a new SPSite object. This value sets the initial CompatibilityLevel value for the site collection. When this parameter is not specified, the CompatibilityLevel will default to the highest possible version for the web application depending on the CompatibilityRange setting.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
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
