---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/remove-spwopibinding
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Remove-SPWOPIBinding
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer: 
---

# Remove-SPWOPIBinding

## SYNOPSIS
Removes bindings for applications, file name extensions and their associated actions on the current SharePoint farm where this cmdlet is run.


## SYNTAX

### Identity
```
Remove-SPWOPIBinding [[-Identity] <SPWopiBindingPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf] [<CommonParameters>]
```

### Filter
```
Remove-SPWOPIBinding [-Action <String>] [-Application <String>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Extension <String>] [-ProgId <String>]
 [-Server <String>] [-WhatIf] [-WOPIZone <String>] [<CommonParameters>]
```

### RemoveAll
```
Remove-SPWOPIBinding [-All] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The `Remove-SPWOPIBinding` cmdlet removes bindings for applications, file name extensions and their associated actions on the current SharePoint farm where this cmdlet is run. 
After you run this cmdlet, you can use `New-SPWOPIBinding` to re-create the bindings as needed.
If you remove all the bindings for an application, users cannot use Office Web Apps or the SharePoint Share by link feature for that application.
If you remove all the bindings on the SharePoint farm where this cmdlet is run, users cannot use Office Web Apps or the SharePoint Share by link feature for any applications in the SharePoint library.

If you want to stop using Office Web Apps for default clicks, but must preserve the bindings' discovery information and the ability for users to use the SharePoint Share by link feature to send a link to a document and allow the recipient to use Office Web Apps for that document type, use the `New-SPWOPISuppression` cmdlet instead.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### --------------EXAMPLE 1-----------------
```
Remove-SPWOPIBinding -Application "Excel"
```

This example removes all bindings for Excel on the current SharePoint farm where this cmdlet is run.


### --------------EXAMPLE 2-----------------
```
Remove-SPWOPIBinding -All:$true
```

This example removes all bindings on the current SharePoint farm where this cmdlet is run.


### --------------EXAMPLE 3-----------------
```
Get-SPWOPIBinding -Action "MobileView" | Remove-SPWOPIBinding
```

This example removes all bindings for Office Mobile Web Apps on the current SharePoint farm where this cmdlet is run.


## PARAMETERS

### -Identity
Specifies the binding.

```yaml
Type: SPWopiBindingPipeBind
Parameter Sets: Identity
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Action
Specifies the action to remove bindings for.
For example, "view," "edit," and "embedview." For a list of actions run `Get-SPWOPIBinding`.
Most typically you will not use this parameter.
If you specify some actions but not others, some features in SharePoint may not work.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -All
Removes all bindings.

```yaml
Type: SwitchParameter
Parameter Sets: RemoveAll
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Application
Specifies application to remove bindings for.
Possible applications are as follows: "Word," "Excel," "PowerPoint," or "OneNote." Run `Get-SPWOPIBinding` to get the list of applications.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Extension
Specifies the file name extensions to remove bindings for.
Run `Get-SPWOPIBinding` to get the list of file name extensions.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProgId
Specifies the programmatic identifier (ProgID) for an application to remove bindings for.
Run `Get-SPWOPIBinding` to get the list of ProgIDs.
You may only want to use this parameter to remove bindings for OneNote.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
Specifies the name of WOPI application (like Office Web Apps Server) to remove bindings for.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WOPIZone
Specifies the zone to remove bindings for.

```yaml
Type: String
Parameter Sets: Filter
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

[Content roadmap for Office Web Apps]()

[Use Office Web Apps with SharePoint 2013]()

[New-SPWOPIBinding](New-SPWOPIBinding.md)

[Get-SPWOPIBinding](Get-SPWOPIBinding.md)

[Set-SPWOPIBinding](Set-SPWOPIBinding.md)

[New-SPWOPISuppressionSetting](New-SPWOPISuppressionSetting.md)
