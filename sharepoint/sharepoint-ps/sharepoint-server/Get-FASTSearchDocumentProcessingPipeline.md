---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchDocumentProcessingPipeline
---

# Get-FASTSearchDocumentProcessingPipeline

## SYNOPSIS
Retrieves FAST Search Server 2010 for SharePoint document processing pipelines.

## SYNTAX

```
Get-FASTSearchDocumentProcessingPipeline [[-Name] <String>] [<CommonParameters>]
```

## DESCRIPTION
A document processing pipeline consists of multiple processing stages that an item goes through before being indexed for searching.
Item processing includes adding/removing/modifying metadata, linguistic processing, language detection.
This cmdlet retrieves all FAST Search Server 2010 for SharePoint document processing pipelines.
When one pipeline name is specified, a single pipeline is retrieved if it exists.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchDocumentProcessingPipeline
```

This example retrieves all FAST Search Server 2010 for SharePoint document processing pipelines.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchDocumentProcessingPipeline -Name "Office14 (webcluster)"
```

This example retrieves a single FAST Search Server 2010 for SharePoint document processing pipeline named "Office14 (webcluster)".

## PARAMETERS

### -Name
The name of the document processing pipeline to retrieve.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 1
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

