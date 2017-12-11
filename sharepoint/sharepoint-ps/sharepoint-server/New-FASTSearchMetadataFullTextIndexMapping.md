---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: New-FASTSearchMetadataFullTextIndexMapping
---

# New-FASTSearchMetadataFullTextIndexMapping

## SYNOPSIS
Creates a new mapping from a managed property into the full text index.

## SYNTAX

```
New-FASTSearchMetadataFullTextIndexMapping -FullTextIndex <FullTextIndex> -Level <Int32>
 -ManagedProperty <ManagedProperty> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet adds the content of a managed property to a full text index by mapping the managed property into the full text index.
The mapping is only applicable to new content; existing content must be re-fed to appear in this full text index.

The managed properties are ordered by a concept called importance level.
If the number of matching documents for a query term is greater than the StopWordThreshold for the rank profile in use, the Microsoft FAST Search Server 2010 for SharePoint system retries the query, limiting the managed properties searched to those from a higher importance level.

Importance level 1 (the first level that will be used in a query) includes managed properties from all levels 1 and up.
Importance level 2 includes levels 2 and up.
The maximum level is 7.

This process is called drilling.
See Set-FASTSearchMetadataRankProfile for more information about StopWordThreshold.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$title = Get-FASTSearchMetadataManagedProperty -name title
$fulltextindex = Get-FASTSearchMetadataFullTextIndex -Name thirdfulltextindex
New-FASTSearchMetadataFullTextIndexMapping -ManagedProperty $title -FullTextIndex $fulltextindex -Level 3
```

This example maps the managed property called "title" into the full text index named "thirdfulltextindex" at level 3.

After this mapping is made, the content must be re-fed to populate the full text index.

## PARAMETERS

### -FullTextIndex
The full text index to add the mapping to.

```yaml
Type: FullTextIndex
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Level
The importance level of this managed property.
Allowed values are 1 through 7.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: ImportanceLevel, L
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedProperty
The managed property being mapped to the full text index.

```yaml
Type: ManagedProperty
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
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

[Remove-FASTSearchMetadataFullTextIndexMapping]()

[Set-FASTSearchMetadataFullTextIndexMapping]()

[Get-FASTSearchMetadataFullTextIndexMapping]()

[Set-FASTSearchMetadataRankProfile]()

[Get-FASTSearchMetadataManagedProperty]()

[Get-FASTSearchMetadataFullTextIndex]()

