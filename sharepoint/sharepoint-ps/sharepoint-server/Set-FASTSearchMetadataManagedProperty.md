---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchMetadataManagedProperty
---

# Set-FASTSearchMetadataManagedProperty

## SYNOPSIS
Updates the features of a managed property.

## SYNTAX

### ManagedProperty
```
Set-FASTSearchMetadataManagedProperty -ManagedProperty <ManagedProperty> [-Description <String>]
 [-MergeCrawledProperties <Boolean>] [-Queryable <Boolean>] [-RefinementEnabled <Boolean>]
 [-SortableType <Int32>] [-SummaryType <Int32>] [-StemmingEnabled <Boolean>] [-DecimalPlaces <Int32>]
 [-MaxIndexSize <Int32>] [-MaxResultSize <Int32>] [-IsMapped <Boolean>] [<CommonParameters>]
```

### Name
```
Set-FASTSearchMetadataManagedProperty -Name <String> [-Description <String>]
 [-MergeCrawledProperties <Boolean>] [-Queryable <Boolean>] [-RefinementEnabled <Boolean>]
 [-SortableType <Int32>] [-SummaryType <Int32>] [-StemmingEnabled <Boolean>] [-DecimalPlaces <Int32>]
 [-MaxIndexSize <Int32>] [-MaxResultSize <Int32>] [-IsMapped <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates the properties/features of an existing managed property.

Several of these changes require that the content be recrawled/re-fed to take full effect.
If, for example, a managed property is made searchable (Queryable) it will only become searchable after the content is updated.
During the recrawl/re-feed, the new content will be searchable, while the old will not.

For properties such as whether the managed property should have sorting enabled (SortableType), the managed property defaults to the value '0' until the content has been re-fed/recrawled.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$title = Get-FASTSearchMetadataManagedProperty -name title
Set-FASTSearchMetadataManagedProperty -ManagedProperty $title -Refinement 1
```

This example enables refinement for the managed property "title".
Content must be re-fed/recrawled to populate the refinement.
Until it is populated, the refinement defaults to having no value.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$title = Get-FASTSearchMetadataManagedProperty -name title
Set-FASTSearchMetadataManagedProperty -ManagedProperty $title -Queryable 1
```

This example enables searching against the "title" managed property.
A front-end application can search in the specified managed property using the syntax: "title:\<search terms\>".

Relevancy is not calculated for such queries (unlike searches against the full text indexes), and only the quality component of the relevancy score is available.

The content must be recrawled/re-fed for this to take effect.

### ---------------EXAMPLE 3----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$title = Get-FASTSearchMetadataManagedProperty -name title
Set-FASTSearchMetadataManagedProperty -ManagedProperty $title -SummaryType 1
```

This example changes the summary type for the managed property named "title" from dynamic to static.
A static summary type means that the entire contents of the managed property is returned as part of the item summary.

The content must be recrawled/re-fed for this to take effect.

## PARAMETERS

### -ManagedProperty
The managed property object to modify.

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
The name of the managed property to modify.

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

### -Description
A text string describing the managed property's use.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MergeCrawledProperties
This Boolean value controls whether or not multiple crawled properties mapped to this managed property are merged when multiple crawled properties are present in the input.

If not set, only the first element of the first non-empty crawled property is stored in the managed property.
The one that is chosen is the crawled property that was mapped to the managed property first.

The content must be re-fed/recrawled for this change to take effect.

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

### -Queryable
This Boolean value specifies whether or not the managed property is directly searchable on its own (and not only as part of a full text index).

If not set, it can only be searched when included in a full text index.

The content must be recrawled/re-fed again for this change to take effect.

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

### -RefinementEnabled
This Boolean value specifies whether or not a refiner is available for the managed property.

Refiners group search results based on the values of individual managed properties from the complete result set of a query.
Refiners are often used to navigate the result set in the front-end application.

After enabling refinement on a managed property, the content must be recrawled/re-fed for the change to take effect.

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

### -SortableType
The sorting type of the managed property.
Valid values are:

-- 0 ("sorting disabled") specifies that the managed property is not sortable.
-- 1 ("sorting enabled") specifies that the managed property is sortable.
-- 2 ("latent sorting") specifies that the managed property is prepared for sorting, but must be changed to "sorting enabled" for sorting to be supported.

In contrast to switching from "sorting disabled" to "sorting enabled", this does not require reprocessing of data.

Setting sorting to latent on a managed property can help reduce memory resource usage, while keeping the option of enabling sorting quickly at a later date.

If a managed property is changed from "sorting disabled" to "sorting enabled", the sort value will default to 0 for all documents that have not been recrawled/re-fed.

Managed properties of the type datetime always have sorting enabled.

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

### -SummaryType
The type of summary to return for the managed property.
Valid values are:

-- 0 (summary disabled), no content is returned for this managed property.
-- 1 (static), the full value of the managed property is returned.
-- 2 (dynamic), hit highlighting is done on the content of the managed property based on the query terms, and a hit highlighted summary is returned.

The content must be recrawled/re-fed for any change in this setting to take effect, except when disabling summary generation.

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

### -StemmingEnabled
Enables or disables stemming for the managed property.

Stemming is the process of reducing words to their base form, or expanding to all known forms, to increase recall.
Whether stemming is done through reduction or expansion depends on the content language.

The content must be recrawled/re-fed for this to take effect.

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

### -DecimalPlaces
This integer parameter specifies how many decimal places should be used for the managed property.

A higher number of decimals provides a more precise result, but reduces the minimum and maximum number size that can be stored in the managed property.

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

### -MaxIndexSize
This integer parameter sets the maximum number of kilobytes indexed for the managed property.

Valid values range from 0 through 2097151 (2GB).

The measured value equals the data stored prior to indexing and is slightly larger than the effective number of kilobytes that is searchable for the managed property.

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

### -MaxResultSize
This integer parameter sets the maximum number of kilobytes that can be returned for this managed property.

If a managed property's content is longer than this, then the returned version of the managed property is truncated to the specified value.

Valid values are from 0 through 2097151 (2GB).

If the summary type of the managed property is dynamic, then this size refers to the size of the source data used for generating the hit highlighted summary.

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

### -IsMapped
This Boolean parameter specifies whether or not the managed property is mapped to support Alternate Access Mappings in SharePoint.

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

[Get-FASTSearchMetadataManagedProperty](Get-FASTSearchMetadataManagedProperty.md)

[New-FASTSearchMetadataManagedProperty](New-FASTSearchMetadataManagedProperty.md)

[Remove-FASTSearchMetadataManagedProperty](Remove-FASTSearchMetadataManagedProperty.md)

