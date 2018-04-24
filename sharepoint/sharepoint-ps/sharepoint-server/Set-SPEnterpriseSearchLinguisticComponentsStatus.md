---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPEnterpriseSearchLinguisticComponentsStatus
schema: 2.0.0
---

# Set-SPEnterpriseSearchLinguisticComponentsStatus

## SYNOPSIS
Sets the operation status of the linguistic query and document processing components.


## SYNTAX

```
Set-SPEnterpriseSearchLinguisticComponentsStatus [-AllEnabled <Boolean>]
 [-AssignmentCollection <SPAssignmentCollection>] [-EntityExtractionEnabled <Boolean>]
 [-Identity <LinguisticComponentsStatusPipeBind>] [-QuerySpellingEnabled <Boolean>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-StemmingEnabled <Boolean>]
 [-ThesaurusEnabled <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sets the operational status of the linguistic query and document processing components.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1-----------------
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication
PS C:\>Set-SpEnterpriseSearchLinguisticComponentsStatus -SearchApplication $ssa -StemmingEnabled $false
```

This example shows how to disable stemming during query processing by setting the parameter StemmingEnabled to false.


### ------------------EXAMPLE 2-----------------
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication
PS C:\>Set-SpEnterpriseSearchLinguisticComponentsStatus -SearchApplication $ssa -AllEnabled $false
```

This example shows how to disable all linguistic query and document processing functionalities.


## PARAMETERS

### -AllEnabled
A Boolean value to enable or deactivate all linguistic functionalities.


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

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.


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

### -EntityExtractionEnabled
A Boolean value to enable or deactivate the company extractor and all custom extractors during document processing.


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

### -Identity
An object that represents the current status of the linguistic components.


```yaml
Type: LinguisticComponentsStatusPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -QuerySpellingEnabled
A Boolean value to enable or deactivate query spelling correction.


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

### -SearchApplication
Specifies the search service application that contains the linguistic processing components.


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

### -StemmingEnabled
A Boolean value to enable or deactivate expansive stemming during query processing.


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

### -ThesaurusEnabled
A Boolean value to enable or deactivate thesaurus lookup during query processing.


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

[Get-SPEnterpriseSearchLinguisticComponentsStatus](Get-SPEnterpriseSearchLinguisticComponentsStatus.md)
