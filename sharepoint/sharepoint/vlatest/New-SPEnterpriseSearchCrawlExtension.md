---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/4e7dad0d-7ae9-446e-8455-f6f69f8004a0(Office.15).aspx
schema: 2.0.0
---

# New-SPEnterpriseSearchCrawlExtension

## SYNOPSIS
Adds an extension rule to a Search service application.

## SYNTAX

```
New-SPEnterpriseSearchCrawlExtension [[-Name] <String>] -SearchApplication <SearchServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
The New-SPEnterpriseSearchCrawlExtension cmdlet adds a file name extension to the list of file types that you want to include in the index.
After a new IFilter is registered, run this cmdlet so that the new file type will be crawled.
If a file type is added without registering an associated IFilter, only the file properties will be crawled and included in the index.
After you run this cmdlet, you must run a full crawl of all content sources that might contain this file type to guarantee that files of this type are in the index.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$searchapp = Get-SPEnterpriseSearchServiceApplication "SearchApp1"$searchapp | New-SPEnterpriseSearchCrawlExtension "pdf"
```

This example adds the PDF file type to the list of file name extensions to include in the index.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$searchapp = Get-SPEnterpriseSearchServiceApplication "SearchApp1"
$searchapp | New-SPEnterpriseSearchCrawlExtension "pdf"
```

This example adds the PDF file type to the list of file name extensions to include in the index.

## PARAMETERS

### -Name
Specifies the new file name extension.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the extension collection.

The type must be a valid GUID in the form 12345678-90ab-cdef-1234-567890bcdefgh, a valid search application name (for example, SearchApp1), or an instance of a valid SearchServiceApplication object.

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

[Online Version](http://technet.microsoft.com/EN-US/library/4e7dad0d-7ae9-446e-8455-f6f69f8004a0(Office.15).aspx)

