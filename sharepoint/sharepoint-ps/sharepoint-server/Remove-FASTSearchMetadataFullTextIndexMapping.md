---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Remove-FASTSearchMetadataFullTextIndexMapping
---

# Remove-FASTSearchMetadataFullTextIndexMapping

## SYNOPSIS
Removes a managed-property-to-full-text-index mapping.

## SYNTAX

```
Remove-FASTSearchMetadataFullTextIndexMapping [-Mapping] <FullTextIndexMapping> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes the mapping of a managed property to a full text index.
The managed properties are not affected, and can still be mapped to other full text indexes.

The content must be recrawled/re-fed to reflect that managed properties have been removed from full text indexes.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
PS C:\>$fulltextindex = Get-FASTSearchMetadataFullTextIndex -Name content
PS C:\>$managedproperty = Get-FASTSearchMetadataManagedProperty -Name CreatedBy
PS C:\>$fulltextindexmapping = Get-FASTSearchMetadataFullTextIndexMapping -ManagedProperty $managedproperty -FullTextIndex $fulltextindex
PS C:\>Remove-FASTSearchMetadataFullTextIndexMapping -mapping $fulltextindexmapping
```

This example removes the mapping of the managed property "CreatedBy" from the full text index "content".
Since the cmdlet takes an object of the mapping, the example first retrieves the mapping using Get-FASTSearchMetadataFullTextIndexMapping.

## PARAMETERS

### -Mapping
An object representing the full text index mapping to be removed.

```yaml
Type: FullTextIndexMapping
Parameter Sets: (All)
Aliases: FullTextIndexMapping, M
Applicable: FAST Server for SharePoint 2010

Required: True
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

[New-FASTSearchMetadataFullTextIndexMapping](New-FASTSearchMetadataFullTextIndexMapping.md)

[Set-FASTSearchMetadataFullTextIndexMapping](Set-FASTSearchMetadataFullTextIndexMapping.md)

[Get-FASTSearchMetadataFullTextIndexMapping](Get-FASTSearchMetadataFullTextIndexMapping.md)

