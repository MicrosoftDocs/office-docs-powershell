---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPWOPISuppressionSetting

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

The New-SPWOPISuppressionSetting cmdlet turns off Office Web Apps for the action, file name extension, or programmatic identifier that you've specified on the current SharePoint farm.



## SYNTAX

```
New-SPWOPISuppressionSetting [-Action <String>] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Extension <String>] [-ProgId <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The New-SPWOPISuppressionSetting cmdlet turns off Office Web Apps for the action, file name extension, or programmatic identifier (ProgId) that you've specified on the current SharePoint farm. 
The cmdlet does this without removing the discovery information or the ability for users to use the SharePoint Share by link feature to send a link to a document and allow the recipient to use Office Web Apps for that document type.
You may have to use this cmdlet if you want to use Excel Services to view Excel workbooks instead of the WOPI application (for example Office Web Apps Server).

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- (SharePoint Server 2013)
```
C:\PS>New-SPWOPISuppressionSetting -Extension "XLSX" -Action "view"

C:\PS>New-SPWOPISuppressionSetting -Extension "XLS" -Action "view"
```

This example turns off the ability of a user to use Office Web Apps to view  Excel workbooks that have file name extensions ".xlsx" or ".xls".

### --------------EXAMPLE 1----------------- (SharePoint Server 2016)
```
C:\PS>New-SPWOPISuppressionSetting -Extension "XLSX" -Action "view"

C:\PS>New-SPWOPISuppressionSetting -Extension "XLS" -Action "view"
```

This example turns off the ability of a user to use Office Web Apps to view  Excel workbooks that have file name extensions ".xlsx" or ".xls".

## PARAMETERS

### -Action
Specifies the action to suppress for a given extension or programmatic identifier (ProgId).
For example, "view," "edit," and "embedview." For a full list of actions, run Get-SPWOPIBinding.

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

### -Extension
Specifies the file name extension to suppress.
Run Get-SPWOPIBinding to get the list of file name extensions the WOPI application supports.

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

### -ProgId
Specifies the programmatic identifier (ProgId) for an application to suppress.
Run Get-SPWOPIBinding to get the list of ProgIds that the WOPI application supports.

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
For more information, type the following command: get-help about_commonparameters.

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

[Content roadmap for Office Web Apps]()

[Use Office Web Apps with SharePoint 2013]()

[Get-SPWOPISuppressionSetting]()

[Remove-SPWOPISuppressionSetting]()

