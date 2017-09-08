---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Remove-SPWOPIBinding

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Remove-SPWOPIBinding [[-Identity] <SPWopiBindingPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_2
```
Remove-SPWOPIBinding [-Action <String>] [-Application <String>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Extension <String>] [-ProgId <String>]
 [-Server <String>] [-WhatIf] [-WOPIZone <String>]
```

### UNNAMED_PARAMETER_SET_3
```
Remove-SPWOPIBinding [-All] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
The Remove-SPWOPIBinding cmdlet removes bindings for applications, file name extensions, and their associated actions on the current SharePoint farm where this cmdlet is run. 
After you run this cmdlet, you can use New-SPWOPIBinding to re-create the bindings as needed.
If you remove all the bindings for an application, users cannot use Office Web Apps or the SharePoint Share by link feature for that application.
If you remove all the bindings on the SharePoint farm where this cmdlet is run, users cannot use Office Web Apps or the SharePoint Share by link feature for any applications in the SharePoint library.

If you want to stop using Office Web Apps for default clicks, but must preserve the bindings' discovery information and the ability for users to use the SharePoint Share by link feature to send a link to a document and allow the recipient to use Office Web Apps for that document type, use the New-SPWOPISuppression cmdlet instead.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- (SharePoint Server 2013)
```
C:\PS>Remove-SPWOPIBinding -Application "Excel"
```

This example removes all bindings for Excel on the current SharePoint farm where this cmdlet is run.

### --------------EXAMPLE 1----------------- (SharePoint Server 2016)
```
C:\PS>Remove-SPWOPIBinding -Application "Excel"
```

This example removes all bindings for Excel on the current SharePoint farm where this cmdlet is run.

### --------------EXAMPLE 2----------------- (SharePoint Server 2013)
```
C:\PS>Remove-SPWOPIBinding -All:$true
```

This example removes all bindings on the current SharePoint farm where this cmdlet is run.

### --------------EXAMPLE 2----------------- (SharePoint Server 2016)
```
C:\PS>Remove-SPWOPIBinding -All:$true
```

This example removes all bindings on the current SharePoint farm where this cmdlet is run.

### --------------EXAMPLE 3----------------- (SharePoint Server 2013)
```
C:\PS>Get-SPWOPIBinding -Action "MobileView" | Remove-SPWOPIBinding
```

This example removes all bindings for Office Mobile Web Apps on the current SharePoint farm where this cmdlet is run.

### --------------EXAMPLE 3----------------- (SharePoint Server 2016)
```
C:\PS>Get-SPWOPIBinding -Action "MobileView" | Remove-SPWOPIBinding
```

This example removes all bindings for Office Mobile Web Apps on the current SharePoint farm where this cmdlet is run.

## PARAMETERS

### -Identity
Specifies the binding.

```yaml
Type: SPWopiBindingPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Action
Specifies the action to remove bindings for.
For example, "view," "edit," and "embedview." For a list of actions run Get-SPWOPIBinding.
Most typically you will not use this parameter.
If you specify some actions but not others, some features in SharePoint may not work.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_3
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Application
Specifies application to remove bindings for.
Possible applications are as follows: "Word," "Excel," "PowerPoint," or "OneNote." Run Get-SPWOPIBinding to get the list of applications.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Extension
Specifies the file name extensions to remove bindings for.
Run Get-SPWOPIBinding to get the list of file name extensions.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProgId
Specifies the programmatic identifier (ProgID) for an application to remove bindings for.
Run Get-SPWOPIBinding to get the list of ProgIDs.
You may only want to use this parameter to remove bindings for OneNote.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WOPIZone
Specifies the zone to remove bindings for.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Content roadmap for Office Web Apps]()

[Use Office Web Apps with SharePoint 2013]()

[New-SPWOPIBinding]()

[Get-SPWOPIBinding]()

[Set-SPWOPIBinding]()

[New-SPWOPISuppressionSetting]()

