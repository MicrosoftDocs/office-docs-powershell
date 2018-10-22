---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: New-FASTSearchContentCollection
---

# New-FASTSearchContentCollection

## SYNOPSIS
Creates a new Microsoft FAST Search Server 2010 for SharePoint content collection.

## SYNTAX

```
New-FASTSearchContentCollection [-Name] <String> [[-Description] <String>] [[-Pipeline] <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new FAST Search Server 2010 for SharePoint content collection.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
PS C:\>New-FASTSearchContentCollection -Name newscollection
```

This example creates a new FAST Search Server 2010 for SharePoint content collection named "newscollection".

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
PS C:\>New-FASTSearchContentCollection -Name newscollection -Description "A collection for news content"
```

This example creates a new content collection named "newscollection", and attaches a description to it.

### ---------------EXAMPLE 3----------------- (FAST Server for SharePoint 2010)
```
PS C:\>New-FASTSearchContentCollection -Name newscollection -Description "A collection for news content" -Pipeline "Office14 (webcluster)"
```

This example creates a new content collection, and uses the FAST Search Server 2010 for SharePoint document processing pipeline "Office14 (webcluster)" to feed content to the content collection.

## PARAMETERS

### -Name
The name of the FAST Search Server 2010 for SharePoint content collection to add.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A description of the content collection to add.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pipeline
The FAST Search Server 2010 for SharePoint document processing pipeline used to feed content to the content collection.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 4
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

[Clear-FASTSearchContentCollection](Clear-FASTSearchContentCollection.md)

[Remove-FASTSearchContentCollection](Remove-FASTSearchContentCollection.md)

[Get-FASTSearchContentCollection](Get-FASTSearchContentCollection.md)

