---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Test-SPInfoPathFormTemplate

## SYNOPSIS
Validates that a InfoPath 2013 form template is browser-enabled.

## SYNTAX

```
Test-SPInfoPathFormTemplate [-Path] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The Test-SPInfoPathFormTemplate cmdlet validates that an InfoPath 2013 form template can be browser-enabled.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------EXAMPLE-------------- (SharePoint Server 2013)
```
C:\PS>Test-SPInfoPathFormTemplate -Identity formName.xsn
```

This example validates an InfoPath 2013 form template for a specified name.

### ---------------EXAMPLE-------------- (SharePoint Server 2016)
```
C:\PS>Test-SPInfoPathFormTemplate -Identity formName.xsn
```

This example validates an InfoPath 2013 form template for a specified name.

## PARAMETERS

### -Path
Specifies the path and name of the InfoPath 2013 form template to install.

The type must be a valid path and file name of a form template, in the form:

- C:\folder_name\formtemplate_name
- \\\\server_name\folder_name\formtemplate_name

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

