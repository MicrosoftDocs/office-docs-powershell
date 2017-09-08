---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Remove-SPWOPISuppressionSetting

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Remove-SPWOPISuppressionSetting [-Action <String>] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Extension <String>] [-ProgId <String>] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_2
```
Remove-SPWOPISuppressionSetting [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Identity <String>] [-WhatIf]
```

## DESCRIPTION
The Remove-SPWOPISuppressionSetting cmdlet removes the suppression settings for a file name extension or programmatic indentifier (ProgID) and action on the current SharePoint farm where this cmdlet is run.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- (SharePoint Server 2013)
```
C:\PS>Remove-SPWOPISuppressionSetting -Extension "XLSX" -Action "view"
```

This example removes suppression settings for viewing Excel workbooks that have the file name extension ".xlsx."

### --------------EXAMPLE 1----------------- (SharePoint Server 2016)
```
C:\PS>Remove-SPWOPISuppressionSetting -Extension "XLSX" -Action "view"
```

This example removes suppression settings for viewing Excel workbooks that have the file name extension ".xlsx."

### --------------EXAMPLE 2----------------- (SharePoint Server 2013)
```
C:\PS>Get-SPWOPISuppressionSetting | Remove-SPWOPISuppressionSetting
```

This example removes all suppression settings on the current SharePoint farm where this cmdlet is run.

### --------------EXAMPLE 2----------------- (SharePoint Server 2016)
```
C:\PS>Get-SPWOPISuppressionSetting | Remove-SPWOPISuppressionSetting
```

This example removes all suppression settings on the current SharePoint farm where this cmdlet is run.

## PARAMETERS

### -Action
Specifies the action for a given file name extension or programmatic identifier (ProgId). 
For example, "view," "edit," and "embedview."

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
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
Specifies the file name extension.
Run Get-SPWOPIBinding to get the list of file name extensions the WOPI application supports.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies a string that represents a SPWOPISuppressionSetting.
Run Get-SPWOPISuppressionSetting to see examples of such strings.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ProgId
Specifies the programmatic identifier (ProgID) for an application to suppress.
Run Get-SPWOPIBinding to get the list of ProgIDs that the WOPI application supports.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Content roadmap for Office Web Apps]()

[Use Office Web Apps with SharePoint 2013]()

[New-SPWOPISuppressionSetting]()

[Get-SPWOPISuppressionSetting]()

