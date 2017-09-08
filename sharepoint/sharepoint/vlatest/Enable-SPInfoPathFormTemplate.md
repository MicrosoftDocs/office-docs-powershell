---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Enable-SPInfoPathFormTemplate

## SYNOPSIS
Activates a InfoPath 2013 form template in the specified site collection.

## SYNTAX

```
Enable-SPInfoPathFormTemplate [-Identity] <SPFormTemplatePipeBind> -Site <SPSitePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
The Enable-SPInfoPathFormTemplate cmdlet activates an InfoPath 2013 form template to the SharePoint site collection specified in the Site parameter.
This cmdlet returns a new InfoPath 2013 form template.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE----------------- (SharePoint Server 2013)
```
C:\PS>Enable-SPInfoPathFormTemplate -Identity "FormTemplate.xsn" -Site "http://TestSite"

C:\PS>"FormTemplatexsn" | Enable-SPInfoPathFormTemplate -Site "http://TestSite"
```

This example activates an InfoPath 2013 form template to a site collection named TestSite.

### --------------EXAMPLE----------------- (SharePoint Server 2016)
```
C:\PS>Enable-SPInfoPathFormTemplate -Identity "FormTemplate.xsn" -Site "http://TestSite"

C:\PS>"FormTemplatexsn" | Enable-SPInfoPathFormTemplate -Site "http://TestSite"
```

This example activates an InfoPath 2013 form template to a site collection named TestSite.

## PARAMETERS

### -Identity
Specifies the InfoPath 2013 form template to activate.
The form template must be an administrator-approved, browser-enabled form template that is available on the server farm.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a form template (for example, InfoPathFormTemplate1); a valid name of a form template files (for example, FormTemplateFile1.xsn); or an instance of a valid SPFormTemplate object.

```yaml
Type: SPFormTemplatePipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Site
Specifies the site collection that contains the InfoPath 2013 form template to activate.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL, in the form http://server_name; or an instance of a valid SPSite object.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: url

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
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
For more information, type the following command: get-help about_commonparameters

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

