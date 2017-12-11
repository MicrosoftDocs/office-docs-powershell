---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: New-FASTSearchMetadataManagedProperty
---

# New-FASTSearchMetadataManagedProperty

## SYNOPSIS
Creates a new managed property.

## SYNTAX

```
New-FASTSearchMetadataManagedProperty -Name <String> -Type <Int32> [-Description <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new managed property in the Microsoft FAST Search Server 2010 for SharePoint system.
The managed property can be one of the following data types:

-- Text: UTF-8 encoded text string
-- Integer: Signed 64 bit integer
-- Boolean: true / false
-- Float: Double-precision 64-bit floating point, as specified in IEEE-754
-- Decimal: Integer with up to 27 decimals (number of decimals is set through the DecimalPlaces parameter of the managed property; see Set-FASTSearchMetadataManagedProperty).
-- Datetime: Date range in ISO8601 format. Valid date range is -29000-01-01T00:00:00,000 to 29000-12-31T23:59:59,999. Managed properties which have the type datetime always have sorting enabled.

See http://go.microsoft.com/fwlink/?LinkId=163234 (http://go.microsoft.com/fwlink/?LinkId=163234) for more detailed information about the valid value ranges for each of these data types, and how illegal values are handled.

For IEEE-754, see http://ieeexplore.ieee.org/servlet/opac?punumber=2355 (http://ieeexplore.ieee.org/servlet/opac?punumber=2355).

For details about the options that can be set on a managed property, see Set-FASTSearchMetadataManagedProperty.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>New-FASTSearchMetadataManagedProperty -name integervalue -type 2 -description "A managed property for integer values"
```

This example creates a managed property called "integervalue" of type 2 (integer).
To further change the settings on the managed property, see Set-FASTSearchMetadataManagedProperty.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$managedproperty = New-FASTSearchMetadataManagedProperty -Name webtitle -type 1 -description "Titles from RSS and Sitemap Files"
$rsstitle = Get-FASTSearchMetadataCrawledProperty -Name rss.title
$sitetitle = Get-FASTSearchMetadataCrawledProperty -Name sitemap.title
New-FASTSearchMetadataCrawledPropertyMapping -ManagedProperty $managedproperty -CrawledProperty $rsstitle
New-FASTSearchMetadataCrawledPropertyMapping -ManagedProperty $managedproperty -CrawledProperty $sitetitle
$content_fulltextindex = Get-FASTSearchMetadataFullTextIndex -name content
New-FASTSearchMetadataFullTextIndexMapping -FullTextIndex $content_fulltextindex -ManagedProperty $managedproperty -level 7
```

This example shows a complete work-flow for making a new managed property and mapping a crawled property to it.
It creates a new managed property called "webtitle" to which it maps the crawled properties "rss.title" and "sitemap.title".
The "webtitle" managed property is then mapped into the full text index "content" at importance level 7.

After this, you can feed documents (not shown here) with the crawled properties "rss.title" and "sitemap.title", and they will appear in the "webtitle" managed property.
This managed property is then searchable as part of the full text index named "content".

To make the managed property searchable on its own, see Set-FASTSearchMetadataManagedProperty-Queryable.

## PARAMETERS

### -Name
The name of the new managed property.

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

### -Type
An integer representing the data type of the new managed property.
Valid values are:

-- 1 (Text)
-- 2 (Integer)
-- 3 (Boolean)
-- 4 (Float)
-- 5 (Decimal)
-- 6 (Datetime)

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A text description of the managed property explaining what the managed property is used for.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-FASTSearchMetadataManagedProperty]()

[Set-FASTSearchMetadataManagedProperty]()

[Remove-FASTSearchMetadataManagedProperty]()

