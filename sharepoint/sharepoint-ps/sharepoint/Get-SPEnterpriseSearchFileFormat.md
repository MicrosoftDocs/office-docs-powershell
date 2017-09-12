---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPEnterpriseSearchFileFormat

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Retrieves all file formats that the parsing system has format handlers for.

**Below Content Applies To:**SharePoint Server 2016

Retrieves all parseable file formats.



## SYNTAX

```
Get-SPEnterpriseSearchFileFormat [[-Identity] <DocumentParserFileFormatPipeBind>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

The Get-SPEnterpriseSearchFileFormat cmdlet retrieves the following information about a specified file format:

If you do not specify a format ID, the cmdlet returns the list of information for all the file formats that the content processing component has format handlers for.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

**Below Content Applies To:**SharePoint Server 2016

The Get-SPEnterpriseSearchFileFormat cmdlet returns the file format information for a given format ID.
If no format ID is provided, the cmdlet returns all the parseable file formats.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### -------------EXAMPLE 1------------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication
Get-SPEnterpriseSearchFileFormat -SearchApplication $ssa
```

This example uses the Get-SPEnterpriseSearchFileFormat to retrieve all file formats that the Search service application referenced by $ssa has format handlers for.

### -------------EXAMPLE 1------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
Get-SPEnterpriseSearchFileFormat -SearchApplication $ssa
```

This example uses the Get-SPEnterpriseSearchFileFormat to retrieve all parseable file formats in the search service application referenced by $ssa.

### -------------EXAMPLE 2------------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication
Get-SPEnterpriseSearchFileFormat -SearchApplication $ssa zip
```

This example uses the Get-SPEnterpriseSearchFileFormat cmdlet to retrieve information about the file format "zip" in the Search service application referenced by $ssa.
The result is as follows:

### -------------EXAMPLE 2------------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
Get-SPEnterpriseSearchFileFormat -SearchApplication $ssa doc
```

This example uses the Get-SPEnterpriseSearchFileFormat cmdlet to retrieve information about the file format doc in the search service application referenced by $ssa.

## PARAMETERS

### -Identity
Specifies the format ID for which to retrieve file format information.

```yaml
Type: DocumentParserFileFormatPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
**Below Content Applies To:**SharePoint Server 2013

Specifies the Search application for which to retrieve file format information.
The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.



**Below Content Applies To:**SharePoint Server 2016

Specifies the search application for which to retrieve file format information.
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/5813415a-a741-4371-9500-fd8e0dfb6977(Office.15).aspx)

[New-SPEnterpriseSearchFileFormat]()

[Set-SPEnterpriseSearchFileFormatState]()

[Remove-SPEnterpriseSearchFileFormat]()

