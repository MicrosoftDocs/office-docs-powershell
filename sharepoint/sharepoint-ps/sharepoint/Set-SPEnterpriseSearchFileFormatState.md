---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPEnterpriseSearchFileFormatState

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Enables or disables parsing of a specified file format.

**Below Content Applies To:**SharePoint Server 2016

Sets the activation state of a parser for a given file format.



## SYNTAX

```
Set-SPEnterpriseSearchFileFormatState [-Identity] <DocumentParserFileFormatStatePipeBind> [-Enable] <Boolean>
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf] [-UseIFilter <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

The Set-SPEnterpriseSearchFileFormatState cmdlet enables or disables the content processing component from parsing a specified file format.
You can only use this cmdlet for file formats that the content processing component parses with a built-in format handler or a built-in filter-based format handler (iFilter).
Use the Get-SPEnterpriseSearchFileFormat cmdlet to verify that a content processing component uses a built-in format handler or built-in iFilter for a specified file format.

To enable parsing of a file format, set Enabled to "$TRUE".
To disable parsing of a file format, set Enabled to "$FALSE".

A file format can support more than one file name extension, see 
      Default crawled file name extensions and parsed file types in SharePoint Server 2013for an overview.
The Set-SPEnterpriseSearchFileFormatState cmdlet enables or disables parsing of all file name extensions the file format supports.

Your change is effective after you restart the SharePoint 2013 Search Host Controller process of each server that hosts a content processing component in the Search service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

**Below Content Applies To:**SharePoint Server 2016

The Set-SPEnterpriseSearchFileFormatState cmdlet sets the activation state of the parser that corresponds to the specified file format.
By default, the initial activation state of all file formats is $TRUE (enabled).
Use this cmdlet to temporarily disable a malfunctioning parser.
The system will only consider the change after a restart of the content processing components.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### --------EXAMPLE-------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication
Set-SPEnterpriseSearchFileFormatState -SearchApplication $ssa PDF $FALSE
```

This example uses the Set-SPEnterpriseSearchFileFormatState cmdlet to disable the format handler for the file format "PDF."

### --------EXAMPLE-------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
Set-SPEnterpriseSearchFileFormatState -SearchApplication $ssa PDF $FALSE
```

This example uses the Set-SPEnterpriseSearchFileFormatState cmdlet to disable the parser for the file format "PDF".

## PARAMETERS

### -Identity
**Below Content Applies To:**SharePoint Server 2013

Specifies the identification of the file format to be disabled or enabled.



**Below Content Applies To:**SharePoint Server 2016

Specifies the identification of the format to be disabled or enabled.



```yaml
Type: DocumentParserFileFormatStatePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Enable
**Below Content Applies To:**SharePoint Server 2013

Specifies the activation state of the file format.
The activation state can be $FALSE (disabled) or $TRUE (enabled).



**Below Content Applies To:**SharePoint Server 2016

Specifies the activation state of the parser that corresponds to the specified file format.
The activation state can be $FALSE (disabled) or $TRUE (enabled).



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
**Below Content Applies To:**SharePoint Server 2013

Specifies the name of the search application that contains the file format.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.



**Below Content Applies To:**SharePoint Server 2016

Specifies the name of the search application.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.



```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
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

### -UseIFilter
{{Fill UseIFilter Description}}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
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

[Online Version](http://technet.microsoft.com/EN-US/library/e02ccce0-3c16-4d25-bf6d-1cabeb67907f(Office.15).aspx)

[New-SPEnterpriseSearchFileFormat]()

[Get-SPEnterpriseSearchFileFormat]()

[Remove-SPEnterpriseSearchFileFormat]()

