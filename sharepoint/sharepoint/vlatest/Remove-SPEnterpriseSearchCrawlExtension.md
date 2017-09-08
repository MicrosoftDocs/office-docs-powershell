---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/f09e4c7c-c4a7-4c3b-a271-a7f011b125ad(Office.15).aspx
schema: 2.0.0
---

# Remove-SPEnterpriseSearchCrawlExtension

## SYNOPSIS
Removes a file name extension from the list of files that can be crawled.

## SYNTAX

```
Remove-SPEnterpriseSearchCrawlExtension [-Identity] <ExtensionPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-WhatIf]
```

## DESCRIPTION
The Remove-SPEnterpriseSearchCrawlExtension cmdlet prevents files with this extension from being crawled.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### Add code example. (SharePoint Server 2013)
```
$searchapp = Get-SPEnterpriseSearchServiceApplication "SearchApp1"$searchapp | Get-SPEnterpriseSearchCrawlExtension "pdf" | Remove-SPEnterpriseSearchCrawlExtension
```

This example removes the PDF IFilter and removes the pdf file extension from the list of file types to include in the content index.

### Add code example. (SharePoint Server 2016)
```
C:\PS>$searchapp = Get-SPEnterpriseSearchServiceApplication "SearchApp1"
$searchapp | Get-SPEnterpriseSearchCrawlExtension "pdf" | Remove-SPEnterpriseSearchCrawlExtension
```

This example removes the PDF IFilter and removes the pdf file extension from the list of file types to include in the content index.

## PARAMETERS

### -Identity
The file name extension to remove.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid file name extension (for example, .xml); or an instance of a valid CrawlExtension object.

```yaml
Type: ExtensionPipeBind
Parameter Sets: (All)
Aliases: 

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

### -SearchApplication
Specifies the search application that contains the extension collection.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
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

[Online Version](http://technet.microsoft.com/EN-US/library/f09e4c7c-c4a7-4c3b-a271-a7f011b125ad(Office.15).aspx)

