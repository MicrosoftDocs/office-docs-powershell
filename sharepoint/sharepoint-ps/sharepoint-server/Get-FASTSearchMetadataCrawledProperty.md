---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchMetadataCrawledProperty
---

# Get-FASTSearchMetadataCrawledProperty

## SYNOPSIS
Retrieves a crawled property from Microsoft FAST Search Server 2010 for SharePoint.

## SYNTAX

```
Get-FASTSearchMetadataCrawledProperty [[-Name] <String>] [-Count <Int32>] [-Filter <String>] [-Offset <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves a crawled property from the FAST Search Server 2010 for SharePoint system.
If the cmdlet is called without any parameters, it returns all crawled properties in the system.
The order of the returned crawled property list is fixed, and multiple calls return the same ordered list as long as no new crawled properties have been added.

Get-FASTSearchMetadataCrawledProperty supports several ways of looking up properties.
Run with a single parameter or with a named parameter (using Name), the cmdlet retrieves crawled properties with that exact name, if any exist.
The Name parameter supports wildcards.
Alternatively, a filter can be specified (using the Filter parameter) to search the crawled properties and to return any crawled property with a name that includes the filter value.
The filter option does not support wildcards.

Retrieving crawled properties with the Filter parameter is much more efficient than using the Name parameter.

To paginate a set of results from this cmdlet, use an Offset and Count to control the number of returned results.

Offset and Count are calculated before either filter or named matching is done.
This means that if a crawled property falls outside the \[Offset,Offset+Count\] range, it will not be returned.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataCrawledProperty
```

Calling Get-FASTSearchMetadataCrawledProperty without any parameters returns all known crawled properties in the FAST Search Server 2010 for SharePoint system.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataCrawledProperty -Name viewurl
```

This example retrieves a crawled property with the exact name "viewurl".

### ---------------EXAMPLE 3----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataCrawledProperty -filter 4
```

This example retrieves and returns any crawled property that includes a "4" in its name.

### ---------------EXAMPLE 4----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataCrawledproperty -filter url -count 2
```

This example retrieves the first two crawled properties with the name "url".

### ---------------EXAMPLE 5----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataCrawledproperty |ForEach-Object{ if ($_.IsMappedToContents) {$_.Name} }
```

This example returns the names of all crawled properties that have the IsMappedToContents parameter set to "true".
The example first retrieves all configured crawled properties, and then iterates over them to find those with IsMappedToContents set to "true"

### ---------------EXAMPLE 6----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataCrawledproperty -offset 0 -count 2
Get-FASTSearchMetadataCrawledproperty -offset 2 -count 2
Get-FASTSearchMetadataCrawledproperty -offset 4 -count 2
```

This example generates a list of two crawled properties each time the cmdlet is run.
The Offset is increased by the Count value to start returning crawled properties where the last run ended.

### ---------------EXAMPLE 7----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataCrawledProperty -filter url| where-object {($_.Name -eq "url") -and ($_.VariantType -eq 31) -and ($_.Propset -eq "63e90878-0292-490d-8b7c-f3905a8b65fd")}
```

This example lists all potential matches to a named crawled property, and then selects the exact crawled property by iterating over the result set and picking out the result that also matches both the requested property set and variant type.
The command returns the "url" crawled property in the "Enterprise Crawler" category.

## PARAMETERS

### -Name
The name of crawled property to retrieve.

The Name parameter supports wildcards.
Combine the Name parameter with the Offset and Count parameters to control the range that is searched.

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

### -Count
The maximum number of crawled properties to return (starting from the first returned crawled property, or from the index given by the Offset parameter).

If the Filter or Name parameter is specified, these will only be applied after the result set has been narrowed down to the range \[Offset, Offset + Count\].

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

### -Filter
The term used to search for configured crawled properties.

The Filter parameter does not support wildcards.
Matching is case-insensitive, and matches a string anywhere within the name attribute of the crawled property.

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

### -Offset
The offset in the result set from which to start returning results.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-FASTSearchMetadataCrawledProperty](New-FASTSearchMetadataCrawledProperty.md)

[Set-FASTSearchMetadataCrawledProperty](Set-FASTSearchMetadataCrawledProperty.md)

