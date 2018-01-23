---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchMetadataFullTextIndex
---

# Get-FASTSearchMetadataFullTextIndex

## SYNOPSIS
Retrieves a full text index.

## SYNTAX

```
Get-FASTSearchMetadataFullTextIndex [[-Name] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves a full text index object.
The full text indexes are the searchable content of a Microsoft FAST Search Server 2010 for SharePoint system.
Although it is also possible to search on a specific managed property without using a full text index, full relevancy calculation is only done when searching in full text indexes.

If no name is specified, all full text indexes are retrieved.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataFullTextIndex -Name content
```

This example retrieves the full text index named "content".

## PARAMETERS

### -Name
The name of the full text index to retrieve.

```yaml
Type: String
Parameter Sets: (All)
Aliases: FullTextIndexName, N
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 1
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

[New-FASTSearchMetadataFullTextIndex](New-FASTSearchMetadataFullTextIndex.md)

[Remove-FASTSearchMetadataFullTextIndex](Remove-FASTSearchMetadataFullTextIndex.md)

[Set-FASTSearchMetadataFullTextIndex](Set-FASTSearchMetadataFullTextIndex.md)

