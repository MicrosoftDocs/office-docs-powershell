---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPWOPIBinding

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Creates a new binding to associate file name extensions or applications with actions on the current SharePoint farm where this cmdlet is run.



## SYNTAX

```
New-SPWOPIBinding -ServerName <String> [-Action <String>] [-AllowHTTP] [-Application <String>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Extension <String>] [-FileName <String>]
 [-ProgId <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The New-SPWOPIBinding cmdlet associates file name extensions or applications to actions on the current SharePoint farm where this cmdlet is run.
Each binding allows you to use the WOPI application to view or edit files in your SharePoint library.
For example, when a user sees a Word document in a SharePoint document list, the SharePoint list will display the available options to view or edit the document based on the actions that are bound to Word on that SharePoint farm.

To use a WOPI application, such as a server that runs Office Web Apps Server, for Office Web Apps, you must run this cmdlet on the SharePoint farm before you can use the Office Web Apps.

If you run New-SPWOPIBinding for an application or file name extension where the binding (or association) already exists, the cmdlet will fail.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- (SharePoint Server 2013)
```
C:\PS>New-SPWOPIBinding -ServerName "Server.corp.Contoso.com"
```

This example creates bindings for all the applications and file name extensions that the WOPI application supports on the current SharePoint farm where this cmdlet is run.

### --------------EXAMPLE 1----------------- (SharePoint Server 2016)
```
C:\PS>New-SPWOPIBinding -ServerName "Server.corp.Contoso.com"
```

This example creates bindings for all the applications and file name extensions that the WOPI application supports on the current SharePoint farm where this cmdlet is run.

### --------------EXAMPLE 2----------------- (SharePoint Server 2013)
```
C:\PS>New-SPWOPIBinding -ServerName "Server.corp.Contoso.com" -Application "Excel"
```

This example associates Excel with all the actions that the WOPI application supports for Excel on the current SharePoint farm where this cmdlet is run.

### --------------EXAMPLE 2----------------- (SharePoint Server 2016)
```
C:\PS>New-SPWOPIBinding -ServerName "Server.corp.Contoso.com" -Application "Excel"
```

This example associates Excel with all the actions that the WOPI application supports for Excel on the current SharePoint farm where this cmdlet is run.

## PARAMETERS

### -ServerName
Specifies the name or fully qualified domain name (FQDN) of the WOPI application (such as a server that runs Office Web Apps Server).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Action
Specifies the action to bind.
For example, "view," "edit," and "embedview." For a list of actions that the WOPI application supports, run Get-SPWOPIBinding.
Typically, you will not use this parameter.
If you specify some actions but not others, some SharePoint features may not work.

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

### -AllowHTTP
Specifies that the cmdlet can use HTTP for discovery of what the WOPI application supports.
If this is specified as True, the discovery information from the WOPI application will be sent on a nonsecure connection.

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

### -Application
Specifies applications to bind.
Possible applications are as follows: "Word," "Excel," "PowerPoint," or "OneNote." Run Get-SPWOPIBinding to get the full list of application the WOPI application supports.

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
Specifies the file name extensions to bind.
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

### -FileName
Specifies the path of the xml file that contains the discover information for the WOPI application.
You can load discovery information from an xml file instead of requesting from the WOPI application directly.

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
Specifies the programmatic identifier (ProgID) for an application to bind.
Run Get-SPWOPIBinding to get the list of ProgIDs that the WOPI application supports.
You may only want to use this parameter to associate an action to an OneNote folder.

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

[Content roadmap for Office Web Apps]()

[Use Office Web Apps with SharePoint 2013]()

[Get-SPWOPIBinding]()

[Set-SPWOPIBinding]()

[Remove-SPWOPIBinding]()

