---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchMetadataCrawledPropertyMapping
---

# Set-FASTSearchMetadataCrawledPropertyMapping

## SYNOPSIS
Specifies which crawled properties map into specific managed properties.

## SYNTAX

### ManagedProperty
```
Set-FASTSearchMetadataCrawledPropertyMapping
 -CrawledPropertyMapping <System.Collections.Generic.List`1[Microsoft.SharePoint.Search.Extended.Administration.Schema.CrawledProperty]>
 -ManagedProperty <ManagedProperty> [<CommonParameters>]
```

### Name
```
Set-FASTSearchMetadataCrawledPropertyMapping
 -CrawledPropertyMapping <System.Collections.Generic.List`1[Microsoft.SharePoint.Search.Extended.Administration.Schema.CrawledProperty]>
 -Name <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet replaces a managed property's crawled property mappings with a set of mappings specified as a parameter (CrawledPropertyMapping).
All other existing crawled property mappings for the managed property are removed.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$title = Get-FASTSearchMetadataManagedProperty -Name title
$extendedtitle = Get-FASTSearchMetadataManagedProperty -name extendedtitle
$mappings_for_title = $title.GetCrawledPropertyMappings()
Set-FASTSearchMetadataCrawledPropertyMapping -CrawledPropertyMapping $mappings_for_title -ManagedProperty $extendedtitle
```

This example adds the crawled property mappings from the managed property "title" to the managed property "extendedtitle".

The example first retrieves a list of the crawled property mappings for the managed property named "title" using the GetCrawledPropertyMappings().
It then calls Set-FASTSearchMetadataCrawledPropertyMapping with this list as a parameter.
This replaces any existing crawled property mappings for the managed property "extendedtitle".

## PARAMETERS

### -CrawledPropertyMapping
The list of crawled property mappings applied to the specified managed property.
The order in the list controls which crawled property is used when multiple crawled properties exist.
The list must consist of one or more Microsoft.SharePoint.Search.Extended.Administration.Schema.CrawledPropertyImpl objects.

```yaml
Type: System.Collections.Generic.List`1[Microsoft.SharePoint.Search.Extended.Administration.Schema.CrawledProperty]
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
An object representing a managed property.

```yaml
Type: ManagedProperty
Parameter Sets: ManagedProperty
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Name
The name of the managed property whose crawled property mappings you are updating.

```yaml
Type: String
Parameter Sets: Name
Aliases: ManagedPropertyName, N
Applicable: FAST Server for SharePoint 2010

Required: True
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

[Get-FASTSearchMetadataCrawledPropertyMapping](Get-FASTSearchMetadataCrawledPropertyMapping.md)

[New-FASTSearchMetadataCrawledPropertyMapping](New-FASTSearchMetadataCrawledPropertyMapping.md)

[Remove-FASTSearchMetadataCrawledPropertyMapping](Remove-FASTSearchMetadataCrawledPropertyMapping.md)

