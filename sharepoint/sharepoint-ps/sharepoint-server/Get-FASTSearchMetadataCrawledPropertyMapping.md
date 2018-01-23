---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchMetadataCrawledPropertyMapping
---

# Get-FASTSearchMetadataCrawledPropertyMapping

## SYNOPSIS
Retrieves a list of crawled properties mapped to a managed property.

## SYNTAX

### Name
```
Get-FASTSearchMetadataCrawledPropertyMapping [-Name] <String> [<CommonParameters>]
```

### ManagedProperty
```
Get-FASTSearchMetadataCrawledPropertyMapping -ManagedProperty <ManagedProperty> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves a list of the crawled properties that are mapped to a managed property.
The managed property can be specified with the Name parameter or by a ManagedPropertyImpl object as returned by Get-FASTSearchMetadataManagedProperty (using the ManagedProperty parameter).

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataCrawledPropertyMapping -Name title
```

This example returns a list of crawled properties that are mapped to the managed property named "title".

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$managedproperty = Get-FASTSearchMetadataManagedProperty -name title
Get-FASTSearchMetadataCrawledPropertyMapping -ManagedProperty $managedproperty
```

This example first retrieves a ManagedPropertyImpl object, and then uses it to look up the corresponding crawled property mappings.
It returns all crawled properties that are set up to map content into this managed property.

### ---------------EXAMPLE 3----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$crawledproperty = Get-FASTSearchmetadataCrawledProperty -name title
$crawledproperty.GetMappedManagedProperties()
```

These commands are the opposite of Get-FASTSearchMetdataCrawledPropertyMapping; they find all managed properties that have a mapping for a specific crawled property.
This is useful when assessing how modifying a crawled property will impact the search index.

## PARAMETERS

### -Name
The name of a managed property for finding crawled properties.

```yaml
Type: String
Parameter Sets: Name
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ManagedProperty
The managed property object for finding crawled properties.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-FASTSearchMetadataCrawledPropertyMapping](New-FASTSearchMetadataCrawledPropertyMapping.md)

[Remove-FASTSearchMetadataCrawledPropertyMapping](Remove-FASTSearchMetadataCrawledPropertyMapping.md)

[Set-FASTSearchMetadataCrawledPropertyMapping](Set-FASTSearchMetadataCrawledPropertyMapping.md)

[Get-FASTSearchMetadataCrawledProperty](Get-FASTSearchMetadataCrawledProperty.md)

[Get-FASTSearchMetadataManagedProperty](Get-FASTSearchMetadataManagedProperty.md)

