---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchMetadataCategory
---

# Get-FASTSearchMetadataCategory

## SYNOPSIS
Retrieves a crawled property category.

## SYNTAX

```
Get-FASTSearchMetadataCategory [[-Name] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves a category object from the installation.
If no name is specified, it retrieves all categories in the system.

A category contains several crawled properties that are grouped together for setting properties that are common to them all.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1-----------------
```
PS C:\>Get-FASTSearchMetadataCategory
```

This example returns all available categories.
This is the default behavior if you do not specify any parameters.

### ---------------EXAMPLE 2-----------------
```
PS C:\>Get-FASTSearchMetadataCategory -Name SharePoint
```

This example returns one specific category, the "SharePoint" category.

### ---------------EXAMPLE 3-----------------
```
PS C:\>Get-FASTSearchMetadataCategory -Name m*
```

This example returns all categories with a name that begins with "m".
Matching is case-insensitive.

### ---------------EXAMPLE 4-----------------
```
PS C:\>$category = Get-FASTSearchMetadataCategory -Name &quot;Enterprise Crawler&quot;
PS C:\>$category.GetAllCrawledProperties()|ForEach-Object {$_.Name}
```

This example returns all crawled properties that are mapped to the category named "Enterprise Crawler".
The example first retrieves the category, and then calls the category's GetAllCrawledProperties() function to list its crawled properties.
It then iterates over the list of crawled properties and selects the name of each crawled property.

## PARAMETERS

### -Name
The name of the category to retrieve.
If no category is specified, all categories are returned.

```yaml
Type: String
Parameter Sets: (All)
Aliases: CategoryName, N
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

[Remove-FASTSearchMetadataCategory](Remove-FASTSearchMetadataCategory.md)

[Set-FASTSearchMetadataCategory](Set-FASTSearchMetadataCategory.md)

[New-FASTSearchMetadataCategory](New-FASTSearchMetadataCategory.md)

