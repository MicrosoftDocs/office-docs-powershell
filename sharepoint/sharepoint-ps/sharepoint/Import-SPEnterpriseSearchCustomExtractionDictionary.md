---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Import-SPEnterpriseSearchCustomExtractionDictionary

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Imports a custom entity extraction dictionary.

**Below Content Applies To:**SharePoint Server 2016

Imports a custom extraction dictionary.



## SYNTAX

```
Import-SPEnterpriseSearchCustomExtractionDictionary -DictionaryName <String> -FileName <String>
 -SearchApplication <SearchServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

This cmdlet imports a custom entity extraction dictionary from a .csv file.
In order to activate custom entity extraction you must also configure entity extraction in the search schema.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

**Below Content Applies To:**SharePoint Server 2016

This cmdlet imports a custom extraction dictionary from a .cvs file and deploys it to the extraction sub flow.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### ------------------EXAMPLE----------------- (SharePoint Server 2013)
```
$searchApp = Get-SPEnterpriseSearchServiceApplication


Import-SPEnterpriseSearchCustomExtractionDictionary -SearchApplication $searchApp -Filename \\host\share\entity_extraction.csv -DictionaryName Microsoft.UserDictionaries.EntityExtraction.Custom.Word.1
```

This example imports the custom entity extraction dictionary that is located at \\\\host\share to the default search service application.
The entries of this dictionary will be matched in a case-insensitive way against the terms in the documents being indexed.

### ------------------EXAMPLE----------------- (SharePoint Server 2016)
```
C:\PS>$searchApp = Get-SPEnterpriseSearchServiceApplication
Import-SPEnterpriseSearchCustomExtractionDictionary -SearchApplication $searchApp -Filename c:\transfer\entity_extraction.csv -DictionaryName Microsoft.UserDictionaries.EntityExtraction.Custom.Word.1
```

This example imports the custom extraction dictionary that is located at c:\transfer to the default search service application.
The entries of this dictionary will be matched in a case-insensitive way against the terms in the documents being indexed.

## PARAMETERS

### -DictionaryName
Specifies the name of the target dictionary.
The name must be one of the following 12 predefined dictionaries.
The name signifies the "case sensitivity" and "token matching" behavior.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileName
**Below Content Applies To:**SharePoint Server 2013

Specifies the full UNC (Universal Naming Convention) path of the .csv file to be imported.



**Below Content Applies To:**SharePoint Server 2016

Specifies the file path of the .cvs file to be imported



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
**Below Content Applies To:**SharePoint Server 2013

Specifies the search service application to which the custom entity extraction dictionary should be imported.



**Below Content Applies To:**SharePoint Server 2016

Specifies the search service application to which the custom extraction dictionary should be imported.



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/5d6287c5-d439-4233-9ddb-9ee19f2d2112(Office.15).aspx)

