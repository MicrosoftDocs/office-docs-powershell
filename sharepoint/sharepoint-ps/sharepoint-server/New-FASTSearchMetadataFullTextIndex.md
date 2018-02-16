---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: New-FASTSearchMetadataFullTextIndex
---

# New-FASTSearchMetadataFullTextIndex

## SYNOPSIS
Creates a new full text index.

## SYNTAX

```
New-FASTSearchMetadataFullTextIndex -Description <String> -Name <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new full text index in Microsoft FAST Search Server 2010 for SharePoint.
A full text index can be searched by specifying the full text index name in a query.
For example: "extracontent:car" searches for the term "car" in the full text index named "extracontent".
If no full text index is specified, the default full text index is used.
A relevancy score is calculated when searching the full text index, according to the rank profile specified in the query (or the default rank profile, if no rank profile is specified).

See Set-FASTSearchMetadataFullTextIndex for details about changing the default full text index for searching.

See Set-FASTSearchMetadataRankProfile for more details about rank profiles.

Use New-FASTSearchMetadataFullTextIndexMapping to create mappings from managed properties to a new full text index.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>New-FASTSearchMetadataFullTextIndex -Name CommonSharePoint -Description "Content from the common SharePoint site."
```

This example creates a new full text index named "CommonSharePoint".
After it has been created, you can map managed properties into the full text index.
See New-FASTSearchMetadataFullTextIndexMapping for details about mapping properties into a full text index.

## PARAMETERS

### -Description
Description of the full text index, including the type of content or which connector feeds the data.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Name of the new full text index.

```yaml
Type: String
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

[Remove-FASTSearchMetadataFullTextIndex](Remove-FASTSearchMetadataFullTextIndex.md)

[Set-FASTSearchMetadataFullTextIndex](Set-FASTSearchMetadataFullTextIndex.md)

[Get-FASTSearchMetadataFullTextIndex](Get-FASTSearchMetadataFullTextIndex.md)

[Set-FASTSearchMetadataRankProfile](Set-FASTSearchMetadataRankProfile.md)

[New-FASTSearchMetadataFullTextIndexMapping](New-FASTSearchMetadataFullTextIndexMapping.md)

