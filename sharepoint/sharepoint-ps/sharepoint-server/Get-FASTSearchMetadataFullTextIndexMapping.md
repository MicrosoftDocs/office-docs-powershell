---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchMetadataFullTextIndexMapping
---

# Get-FASTSearchMetadataFullTextIndexMapping

## SYNOPSIS
Retrieves mappings between managed properties and the full text indexes.

## SYNTAX

```
Get-FASTSearchMetadataFullTextIndexMapping [-FullTextIndex <FullTextIndex>]
 [-ManagedProperty <ManagedProperty>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves mappings from managed properties to full text indexes.
These mappings control which managed properties are included in each full text index.

Running Get-FASTSearchMetadataFullTextIndexMapping with only a managed property as a parameter (the ManagedProperty parameter) returns all mappings to full text indexes in which the managed property is included.

Running Get-FASTSearchMetadataFullTextIndexMapping with only a full text index as a parameter (the FullTextIndex parameter) returns all mappings from managed properties that are included in the full text index

Running Get-FASTSearchMetadataFullTextIndexMapping with both the ManagedProperty and the FullTextIndex parameters returns a single FullTextIndexMappingImpl object for that exact mapping, if it exists in the Microsoft FAST Search Server 2010 for SharePoint system.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$fulltextindex = Get-FASTSearchMetadataFullTextIndex -name content
Get-FASTSearchMetadataFullTextIndexMapping -fulltextindex $fulltextindex| ForEach-Object {$_.ManagedProperty.Name}
```

This example retrieves the full text index mappings for the full text index "content".
It then iterates over the mappings and outputs the names of the managed properties included in the full text index.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$title = Get-FASTSearchMetadataManagedProperty -name title
Get-FASTSearchMetadataFullTextIndexMapping -managedproperty $title
```

This example retrieves all full text indexes where the managed property named "title" is included.

The specified managed property is mapped to both "content" and "thirdfulltextindex", showing that there is no limit to how many full text indexes a managed property can be part of.

## PARAMETERS

### -FullTextIndex
The full text index specified to retrieve mappings.

```yaml
Type: FullTextIndex
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ManagedProperty
The managed property specified to retrieve mappings.

```yaml
Type: ManagedProperty
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-FASTSearchMetadataFullTextIndexMapping]()

[Remove-FASTSearchMetadataFullTextIndexMapping]()

[Set-FASTSearchMetadataFullTextIndexMapping]()

[Get-FASTSearchMetadataFullTextIndex]()

[Get-FASTSearchMetadataManagedProperty]()

