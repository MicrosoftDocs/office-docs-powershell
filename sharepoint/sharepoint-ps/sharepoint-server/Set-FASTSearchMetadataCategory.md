---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchMetadataCategory
---

# Set-FASTSearchMetadataCategory

## SYNOPSIS
Updates the settings of a crawled property category.

## SYNTAX

### Category
```
Set-FASTSearchMetadataCategory -Category <Category> [-MapToContents <Boolean>]
 [-DiscoverNewProperties <Boolean>] [-NewName <String>] [<CommonParameters>]
```

### Name
```
Set-FASTSearchMetadataCategory -Name <String> [-MapToContents <Boolean>] [-DiscoverNewProperties <Boolean>]
 [-NewName <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet changes the settings of a crawled property category.
A category is a group of crawled properties, and the properties of the category control the default behavior of the member crawled properties.

If MapToContents is set to "true" on a crawled property category, new crawled properties added to a category are mapped to the "content" full text index.
The names of the crawled properties mapped to the "content" full text index are added to the crawledpropertynames managed property.
You can override this action by setting the crawled property's IsMappedToContents parameter to "false".

You can call the cmdlet with either the name of the category (Name parameter), or with a category object (Category parameter).

You can also use the cmdlet to rename a category.

You can only map a crawled property to one category at a time.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Set-FASTSearchMetadataCategory -Name Titles -DiscoverNewProperties 1 -MapToContents 1
```

With this example, all new crawled properties for the category "Titles" are automatically discovered and added to the category.
A crawled property is considered a member of the category if it has the same property set as the category.

This example also sets MapToContents so that new crawled properties are mapped to the "content" full text index.
If you do not want a newly discovered crawled property made available through the full text index, override this action by setting the specific crawled property's IsMappedToContents parameter to false.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Set-FASTSearchMetadataCategory -Name ExtendedTitle -Newname Titles
```

This example changes the name of the category "ExtendedTitle" to "Titles".

## PARAMETERS

### -Category
Specifies the category to be changed.

```yaml
Type: Category
Parameter Sets: Category
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Name
The name of the category to update.

```yaml
Type: String
Parameter Sets: Name
Aliases: CategoryName, N
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -MapToContents
If this parameter is set to true, all newly created or discovered properties (if automatic discovery is enabled) are added to the "content" full text index.

The name of each crawled property is added to the "crawledpropertynames" managed property.

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

### -DiscoverNewProperties
If this parameter is set to true, previously unknown crawled properties mapped to this category (having the same property set identifier) are created and added to the category.

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

### -NewName
The new name for the category.

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

[Get-FASTSearchMetadataCategory](Get-FASTSearchMetadataCategory.md)

[Remove-FASTSearchMetadataCategory](Remove-FASTSearchMetadataCategory.md)

[New-FASTSearchMetadataCategory](New-FASTSearchMetadataCategory.md)

