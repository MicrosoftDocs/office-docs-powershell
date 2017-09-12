---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPEnterpriseSearchFileFormat

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Adds the ability to parse a new file format.

**Below Content Applies To:**SharePoint Server 2016

Adds a new file format to the parsing system.



## SYNTAX

```
New-SPEnterpriseSearchFileFormat [-FormatId] <String> [-FormatName] <String> [-MimeType] <String>
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

The New-SPEnterpriseSearchFileFormat cmdlet enables the content processing component to parse files with a specified file format and file name extension.
The cmdlet can only enable parsing of the file format and file name extension if the server that hosts the content processing component has a relevant third-party filter-based format handler (iFilter) installed.
You can use the Get-SPEnterpriseSearchFileFormat cmdlet to verify that an iFilter is installed for a specified file format.

During iFilter installation, the operating system registered the iFilter with one or more file name extensions.
Use the New-SPEnterpriseSearchFileFormat cmdlet for each registered file name extension that you want to enable the content processing component to parse.
Do this on each server that hosts a content processing component in the Search service application.

Your change is effective after you restart the SharePoint 2013 Search Host Controller process of each server that hosts a content processing component in the Search service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

**Below Content Applies To:**SharePoint Server 2016

The New-SPEnterpriseSearchFileFormat cmdlet adds a new file format and a corresponding file name extension to the search parsing system.
This binds the file format to a filter-based format handler in the search parsing system.
Thus, the search parsing system can only parse the new file format if the user has installed a corresponding filter-based format handler, an IFilter, for the new file format.
If the installed IFilter registers more than one file name extension, the user must use the New-SPEnterpriseSearchFileFormat cmdlet to add a new file format to the parsing system for each of these file name extensions.
The user must also ensure that the file name extension of the new file format is a member of the file-type inclusion list.
The file-type inclusion list specifies which files that are crawled, based on their file name extensions.
The system will only consider the new file format after a restart of the content processing components.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### -------------EXAMPLE------------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication
New-SPEnterpriseSearchFileFormat -SearchApplication $ssa sample SampleApp application/SampleApp
```

This example uses the New-SPEnterpriseSearchFileFormat cmdlet to enable the content processing component in the Search service application referenced by $ssa to parse files that have the file name extension "sample", the file format "SampleApp", and the mime type "application/SampleApp".

### -------------EXAMPLE------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
New-SPEnterpriseSearchFileFormat -SearchApplication $ssa foo FooApp text/foo
```

This example uses the New-SPEnterpriseSearchFileFormat cmdlet to add a new file format FooApp with the belonging file name extension foo to the parsing system in the search service application referenced by $ssa

## PARAMETERS

### -FormatId
**Below Content Applies To:**SharePoint Server 2013

Specifies the file name extension of the format to parse.



**Below Content Applies To:**SharePoint Server 2016

Specifies the file name extension of the format to add.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FormatName
**Below Content Applies To:**SharePoint Server 2013

Specifies the name of the format to parse.
Usually this is the name of the application handling the format.



**Below Content Applies To:**SharePoint Server 2016

Specifies the name of the format to add.
Usually this is the name of the application handling the format.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MimeType
**Below Content Applies To:**SharePoint Server 2013

Specifies the mime type of the format to parse.



**Below Content Applies To:**SharePoint Server 2016

Specifies the mime type of the format to add.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application for which to add the new file format.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/31eda9aa-0214-4765-a949-75ad209e4c79(Office.15).aspx)

[Get-SPEnterpriseSearchFileFormat]()

[Set-SPEnterpriseSearchFileFormatState]()

[Remove-SPEnterpriseSearchFileFormat]()

