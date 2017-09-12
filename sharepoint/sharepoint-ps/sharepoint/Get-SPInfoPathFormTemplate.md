---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPInfoPathFormTemplate

## SYNOPSIS
Returns a InfoPath 2013 form template.

## SYNTAX

```
Get-SPInfoPathFormTemplate [[-Identity] <SPFormTemplatePipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPInfoPathFormTemplate cmdlet reads a specific InfoPath 2013 form template or the collection of templates.
If the Identity parameter is not specified, the cmdlet returns the collection of InfoPath 2013 form templates for the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------EXAMPLE 1-------------- (SharePoint Server 2013)
```
C:\PS>Get-SPInfoPathFormTemplate
```

This example lists the Identity, DisplayName, and FormTemplateStatus property for each admininstrator-deployed InfoPath 2013 form template.

### ---------------EXAMPLE 1-------------- (SharePoint Server 2016)
```
C:\PS>Get-SPInfoPathFormTemplate
```

This example lists the Identity, DisplayName, and FormTemplateStatus property for each admininstrator-deployed InfoPath 2013 form template.

### ---------------EXAMPLE 2-------------- (SharePoint Server 2013)
```
C:\PS>"SomeFormTemplate.xsn" | Get-SPInfoPathFormTemplate | format-list
```

This example lists all the properties of the specified InfoPath 2013 form template.

### ---------------EXAMPLE 2-------------- (SharePoint Server 2016)
```
C:\PS>"SomeFormTemplate.xsn" | Get-SPInfoPathFormTemplate | format-list
```

This example lists all the properties of the specified InfoPath 2013 form template.

## PARAMETERS

### -Identity
Specifies the InfoPath 2013 form template to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a form template (for example, InfoPathFormTemplate1); a valid name of a form template files (for example, FormTemplateFile1.xsn); or an instance of a valid SPFormTemplate object.

```yaml
Type: SPFormTemplatePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

