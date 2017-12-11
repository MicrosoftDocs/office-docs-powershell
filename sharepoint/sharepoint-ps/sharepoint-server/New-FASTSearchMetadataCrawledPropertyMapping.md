---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: New-FASTSearchMetadataCrawledPropertyMapping
---

# New-FASTSearchMetadataCrawledPropertyMapping

## SYNOPSIS
Creates a new mapping from a crawled property to a managed property.

## SYNTAX

```
New-FASTSearchMetadataCrawledPropertyMapping -CrawledProperty <CrawledProperty>
 -ManagedProperty <ManagedProperty> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet maps a crawled property to a managed property and stores the crawled content in the Microsoft FAST Search Server 2010 for SharePoint index.

You can map a crawled property to multiple managed properties.
If you map multiple crawled properties to a single managed property, use the managed property's MergeCrawledProperties parameter to control whether or not the crawled properties are merged into the managed property or just overwritten.
See Set-FASTSearchMetadataManagedProperty for more information.

When you map a crawled property into a managed property, the variant type of the crawled property is converted into the available data types in FAST Search Server 2010 for SharePoint.
See http://go.microsoft.com/fwlink/?LinkId=163233 (http://go.microsoft.com/fwlink/?LinkId=163233) for details about this conversion, and which variant types can be converted into native FAST Search Server 2010 for SharePoint types.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$sitetitle_managedproperty = Get-FASTSearchMetadataManagedProperty -Name sitetitle
$internaltitle_crawledproperty = Get-FASTSearchMetadataCrawledProperty -name internaltitle
New-FASTSearchMetadataCrawledPropertyMapping -Managedproperty $sitetitle_managedproperty -crawledproperty $internaltitle_crawledproperty
```

This example adds a mapping from the crawled property "internaltitle" (here part of the Web category) to the managed property "sitetitle".

Note that both the crawled property and the managed property already exist, and these commands only add the mapping.
As a result, the crawled property "internaltitle" will now be mapped to "sitetitle" and stored in the FAST Search Server 2010 for SharePoint system.
The managed property can then be included in a full text index to make it searchable.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$extended_title = New-FASTSearchMetadataManagedproperty -name ExtendedTitle -Type 1
$title = Get-FASTSearchMetadataManagedProperty -name title
$title.GetCrawledPropertyMappings() | ForEach-Object { New-FASTSearchMetadataCrawledPropertyMapping -ManagedProperty $extended_title -CrawledProperty $_ }
```

This example adds a new managed property named "ExtendedTitle", and maps to "ExtendedProperty" all crawled properties that are normally mapped to the managed property named "title".
The original "title" managed property is not changed, to avoid changing the current behavior of the search system.

This example first generates a list of crawled property objects mapped to the original "title" managed property.
Then the example iterates over this list using ForEach-Object to add each of them to the new "ExtendedTitle" managed property.
More crawled properties can be added to this new managed property later without impacting the "title" managed property.

## PARAMETERS

### -CrawledProperty
The crawled property that is mapped to a managed property.

```yaml
Type: CrawledProperty
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedProperty
The managed property to which a crawled property is mapped.

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

[Get-FASTSearchMetadataCrawledPropertyMapping]()

[Remove-FASTSearchMetadataCrawledPropertyMapping]()

[Set-FASTSearchMetadataCrawledPropertyMapping]()

