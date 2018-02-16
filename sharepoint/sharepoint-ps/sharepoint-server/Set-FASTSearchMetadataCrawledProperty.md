---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchMetadataCrawledProperty
---

# Set-FASTSearchMetadataCrawledProperty

## SYNOPSIS
Updates the properties of a crawled property.

## SYNTAX

### CrawledProperty
```
Set-FASTSearchMetadataCrawledProperty -CrawledProperty <CrawledProperty> [-Propset <Guid>]
 [-VariantType <Int32>] [-IsMappedToContents <Boolean>] [<CommonParameters>]
```

### Name
```
Set-FASTSearchMetadataCrawledProperty -Name <String> [-Propset <Guid>] [-VariantType <Int32>]
 [-IsMappedToContents <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet specifies if a crawled property should be automatically indexed as part of the default full text index, "content".

When the IsMappedToContents parameter is set to "true", the crawled property is added to the default searchable index.

To find the crawled property to update, specify a crawled property object, or the combination of name, property set, and variant type.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$description = Get-FASTSearchMetadataCrawledProperty -Name Description
$description # Before
Set-FASTSearchMetadataCrawledProperty -CrawledProperty $description -IsMappedToContents 1
$description # After
```

This example automatically maps a crawled property to the full text index "content", making the content of the crawled property searchable.

## PARAMETERS

### -CrawledProperty
An object representing the crawled property to update.

```yaml
Type: CrawledProperty
Parameter Sets: CrawledProperty
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Name
The name of the crawled property to update.

```yaml
Type: String
Parameter Sets: Name
Aliases: CrawledPropertyName, N
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Propset
The property set GUID of the crawled property which is being updated.

The GUID controls which category the crawled property is part of.
A GUID (Global Unique Identifier) is a 128-bit integer that has a very low probability of being duplicated.
The accepted GUID format is "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" or a System.Guid object.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VariantType
An integer value specifying the variant type of the updated crawled property.

See http://go.microsoft.com/fwlink/?LinkId=163232 (http://go.microsoft.com/fwlink/?LinkId=163232) for a list of common variant types.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsMappedToContents
This Boolean parameter specifies whether or not the content of the crawled property should be automatically mapped into the default full text index.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

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

[New-FASTSearchMetadataCrawledProperty](New-FASTSearchMetadataCrawledProperty.md)

[Get-FASTSearchMetadataCrawledProperty](Get-FASTSearchMetadataCrawledProperty.md)

