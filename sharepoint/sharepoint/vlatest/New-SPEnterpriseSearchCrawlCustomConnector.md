---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/9cfc9653-9bee-4c3a-8739-9bc81aa3e699(Office.15).aspx
schema: 2.0.0
---

# New-SPEnterpriseSearchCrawlCustomConnector

## SYNOPSIS
Registers a protocol for custom crawling.

## SYNTAX

```
New-SPEnterpriseSearchCrawlCustomConnector -ModelFilePath <String> -Protocol <String>
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Name <String>] [-WhatIf]
```

## DESCRIPTION
The New-SPEnterpriseSearchCrawlCustomConnector cmdlet registers, for a search system, the protocol that is used to crawl the custom repository.

If the Name parameter is not provided, in the administration application user interface (UI) the name protocol identifies the protocol specified.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$searchApp = Get-SPEnterpriseSearchServiceApplication mySearchServiceAppNew-SPEnterpriseSearchCrawlCustomConnector -SearchApplication $searchApp -ModelFilePath \\models\myFileTypeModel.mft -Protocol "mftml://"
```

This example creates a custom connector for a file type whose model is located at \\\\models\myFileTypeModel.mft and has the protocol name mftml://.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$searchApp = Get-SPEnterpriseSearchServiceApplication mySearchServiceApp
New-SPEnterpriseSearchCrawlCustomConnector -SearchApplication $searchApp 
-ModelFilePath \\models\myFileTypeModel.mft -Protocol "mftml://"
```

This example creates a custom connector for a file type whose model is located at \\\\models\myFileTypeModel.mft and has the protocol name mftml://.

## PARAMETERS

### -ModelFilePath
Specifies the path to a model file.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Protocol
Specifies the string version of the protocol; for example, dctm://.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that is associated with the protocol.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object

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

### -Name
Specifies the display name of the custom connector that appears on the SharePoint Central Administration Web site.

```yaml
Type: String
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

[Online Version](http://technet.microsoft.com/EN-US/library/9cfc9653-9bee-4c3a-8739-9bc81aa3e699(Office.15).aspx)

