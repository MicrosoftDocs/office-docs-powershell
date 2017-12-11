---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchMetadataFullTextIndex
---

# Set-FASTSearchMetadataFullTextIndex

## SYNOPSIS
Updates the properties of a full text index.

## SYNTAX

### FullTextIndex
```
Set-FASTSearchMetadataFullTextIndex -FullTextIndex <FullTextIndex> [-Description <String>]
 [-StemmingEnabled <Boolean>] [<CommonParameters>]
```

### Name
```
Set-FASTSearchMetadataFullTextIndex -Name <String> [-Description <String>] [-StemmingEnabled <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet enables/disables stemming and changes the description of a full text index.

Stemming is the process of reducing words to their base form or expanding to all known forms to increase recall.
Whether stemming is done through reduction or expansion depends on the language in which the content is written.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Set-FASTSearchMetadataFullTextIndex -name content -description "Central content repository"
```

This example updates the description of the existing full text index named "content".

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Set-FASTSearchMetadataFullTextIndex -Name content -StemmingEnabled 1
```

This example enables stemming on the full text index named "content".
The content of the full text index must be recrawled/re-fed for this change to take effect.

## PARAMETERS

### -FullTextIndex
An object representing the full text index to be updated.

```yaml
Type: FullTextIndex
Parameter Sets: FullTextIndex
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Name
Name of the full text index to be updated.

```yaml
Type: String
Parameter Sets: Name
Aliases: FullTextIndexName, N
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Description
A new description to use for the full text index.

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

### -StemmingEnabled
Enables or disables stemming for this full text index.

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

[New-FASTSearchMetadataFullTextIndex]()

[Remove-FASTSearchMetadataFullTextIndex]()

[Get-FASTSearchMetadataFullTextIndex]()

