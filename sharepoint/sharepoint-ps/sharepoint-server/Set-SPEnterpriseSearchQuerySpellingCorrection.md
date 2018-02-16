---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPEnterpriseSearchQuerySpellingCorrection
schema: 2.0.0
---

# Set-SPEnterpriseSearchQuerySpellingCorrection

## SYNOPSIS
Sets the operation status of the Query Spelling Corrections (QSC) component.

## SYNTAX

```
Set-SPEnterpriseSearchQuerySpellingCorrection [-AssignmentCollection <SPAssignmentCollection>]
 [-ContentAlignmentEnabled <Boolean>] [-DiacriticsInSuggestionsEnabled <Boolean>]
 [-Identity <QuerySpellingCorrectionPipeBind>] [-MaxDictionarySize <Int32>] [-MaxProcessingTime <TimeSpan>]
 -SearchApplication <SearchServiceApplicationPipeBind> [-SecurityTrimmingEnabled <Boolean>]
 [-SpellingDictionary <SpellingDictionaryType>] [-TermFrequencyThreshold <Int32>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet provides access to the configuration options for the QSC component.
The two most prominent configuration options are the switch to enable the content-alignment process and the selection of dictionaries to be used for query spelling correction, that is the set of fixed dictionaries per language or the dynamic dictionary that is being produced by the content alignment process.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE-----------------
```
C:\PS>$searchApp = Get-SPEnterpriseSearchServiceApplication
Set-SpEnterpriseSEarchQuerySpellingCorrection -SearchApplication $searchApp -SpellingDictionary dynamic
```

This example sets the dictionary named dynamic to be used for query spelling correction for the default search service application.


## PARAMETERS

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

### -ContentAlignmentEnabled
A Boolean value to enable or deactivate the content alignment process.


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

### -DiacriticsInSuggestionsEnabled
A switch to enable or disable spelling suggestions that contain diacritics (for example, German umlaut umlaut). 
The default setting is true.


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
Specifies an object that represents the current status for the query spelling correction.


```yaml
Type: QuerySpellingCorrectionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MaxDictionarySize
Specifies the maximal number of terms in a content-aligned spelling dictionary.
In a multi-tenant environment, this number is valid per tenant.


```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxProcessingTime
Specifies the maximum runtime for compiling a content-aligned spelling dictionary.
The default value is 6 hours.


```yaml
Type: TimeSpan
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
Specifies the search service application that contains the QSC components.


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

### -SecurityTrimmingEnabled
A Boolean value to enable or deactivate the security check for spelling suggestions. 
If enabled, only spelling suggestions that deliver at least one document for the current user are shown.


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

### -SpellingDictionary
Specifies the dictionary to be used for query spelling correction.
The two available values are dynamic and static.
When value is set to dynamic, the query spelling correction uses the content-aligned dictionary.
When value is set to static, the query spelling correction uses the out of the box static spelling dictionaries.


```yaml
Type: SpellingDictionaryType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TermFrequencyThreshold
Specifies the minimum number of documents that must contain the most frequently used term in the document collection for the content-alignment process to be executed.
In a multi-tenant environment, this number is valid per tenant.


```yaml
Type: Int32
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
