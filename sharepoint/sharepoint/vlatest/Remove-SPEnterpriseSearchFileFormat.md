---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/6956dda6-e77b-4842-8f51-1bcc510853b6(Office.15).aspx
schema: 2.0.0
---

# Remove-SPEnterpriseSearchFileFormat

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Remove-SPEnterpriseSearchFileFormat [-Identity] <DocumentParserFileFormatPipeBind>
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf]
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

The Remove-SPEnterpriseSearchFileFormat removes the ability of the content processing component to use a third-party filter-based format handler (iFilter) to parse files with a specified file format and file name extension.
You can use the Get-SPEnterpriseSearchFileFormat cmdlet to verify that a content processing component uses a third-party iFilter for a specified file format.

During iFilter installation, the operating system registered the iFilter with one or more file name extensions.
Use the Remove-SPEnterpriseSearchFileFormat cmdlet for each registered file name extension that the content processing component no longer shall parse.
Do this on each server that hosts a content processing component in the Search service application.

Your change is effective after you restart the SharePoint 2013 Search Host Controller process of each server that hosts a content processing component in the Search service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).
Below Content Applies To: SharePoint Server 2016

The Remove-SPEnterpriseSearchFileFormat removes a file format from the search parsing system.
The search parsing system will only consider the change after a restart of the content processing components.
Afterwards the search parsing system will stop parsing the file format.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------EXAMPLE-------- (SharePoint Server 2013)
```
$ssa = Get-SPEnterpriseSearchServiceApplication
Remove-SPEnterpriseSearchFileFormat -SearchApplication $ssa -Identity sample
```

This example uses the Remove-SPEnterpriseSearchFileFormat cmdlet to remove the file format with the belonging file name extension "sample" in the Search service application referenced by $ssa.

### --------EXAMPLE-------- (SharePoint Server 2016)
```
C:\PS>$ssa = Get-SPEnterpriseSearchServiceApplication
Remove-SPEnterpriseSearchFileFormat -SearchApplication $ssa -Identity foo
```

This example uses the Remove-SPEnterpriseSearchFileFormat cmdlet to remove the file format with the belonging file name extension foo in the search service application referenced by $ssa.

## PARAMETERS

### -Identity
Below Content Applies To: SharePoint Server 2013

Specifies the identification of the format to disable parsing of.
Below Content Applies To: SharePoint Server 2016

Specifies the identification of the format to be removed.

```yaml
Type: DocumentParserFileFormatPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SearchApplication
Below Content Applies To: SharePoint Server 2013

Specifies the Search service application that contains the file format.
Below Content Applies To: SharePoint Server 2016

Specifies the search service application that contains the file format.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

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

[Online Version](http://technet.microsoft.com/EN-US/library/6956dda6-e77b-4842-8f51-1bcc510853b6(Office.15).aspx)

[New-SPEnterpriseSearchFileFormat]()

[Get-SPEnterpriseSearchFileFormat]()

[Set-SPEnterpriseSearchFileFormatState]()

