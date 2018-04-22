---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Remove-SPEnterpriseSearchLanguageResourcePhrase
schema: 2.0.0
---

# Remove-SPEnterpriseSearchLanguageResourcePhrase

## SYNOPSIS
Deletes a language resource phrase from a shared search application.


## SYNTAX

```
Remove-SPEnterpriseSearchLanguageResourcePhrase [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 -Identity <LanguageResourcePhrasePipeBind> [-Language <String>] [-Mapping <String>] -Owner <SearchObjectOwner>
 [-SearchApplication <SearchServiceApplicationPipeBind>] [-SourceId <Guid>] [-Type <LanguageResourceType>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Remove-SPEnterpriseSearchLanguageResourcePhrase` cmdlet deletes one or more language resource phrases from the collection of language resource phrases in a shared search application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE------------------
```
PS C:\>$searchapp = Get-SPEnterpriseSearchServiceApplication "SearchApp1"
PS C:\>$obsoletephrase = Get-SPEnterpriseSearchLanguageResourcePhrase -SearchApplication $searchapp -Language en-us -Type QuerySuggestionBlockList -Identity secret
PS C:\>$obsoletephrase | Remove-SPEnterpriseSearchLanguageResourcePhrase -SearchApplication $searchapp -Type QuerySuggestionBlockList -Language en-us
```

This example removes a language resource item on the QuerySuggestionBlockList for the en-us language.


## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.


```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The language resource phrase to delete.

The type must be a string; a valid name of a language resource phrase (for example, LanguageResourcePhrase1); or an instance of a valid LanguageResourcePhrase object.


```yaml
Type: LanguageResourcePhrasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Language
Deletes phrases of the specified language only.

The type must be a valid name of a language; for example, en_us.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mapping
Allows a term or phrase to be mapped to another term or phrase.
For example, the nickname "John" could be mapped to "Jonathan".

This parameter only applies to nicknames and substitutions.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
Specifies the search object owner that defines the scope at which the corresponding LanguageResourcePhrase is created.

The owner must be one of the following valid levels:

- Search Service Application

- Site Subscription

- Site Collection

- Site


```yaml
Type: SearchObjectOwner
Parameter Sets: (All)
Aliases: o
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the language resources.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.


```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceId
Identifies the search result source for which the LanguageResourcePhrase applies to.


```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
Constrains to delete phrases of specified type.

The type must be one of the following valid types of phrases:

- QuerySuggestionBlockList

- QuerySuggestionAlwaysSuggest

- Nickname

- QuerySuggestionSubstitution


```yaml
Type: LanguageResourceType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
