---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Add-FASTSearchResource
---

# Add-FASTSearchResource

## SYNOPSIS
Uploads a resource to the resource store.

## SYNTAX

```
Add-FASTSearchResource [-Path] <String> [-FilePath] <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet uploads a specified file, located in the local environment, to the Microsoft FAST Search Server 2010 for SharePoint resource store.
The location of the resource store is typically specified in %FASTSEARCH%/etc/Admin.config (where %FASTSEARCH% is the FAST Search Server 2010 for SharePoint installation folder.) Specify a unique location of the resource in the upload URI.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Add-FASTSearchResource dictionaries\spellcheck\check_en.aut c:\check_en.aut
```

This example uploads the file c:\check_en.aut to dictionaries\spellcheck\check_en.aut to the resource store.

## PARAMETERS

### -Path
Partial URI within the resource store where the file will be uploaded.

```yaml
Type: String
Parameter Sets: (All)
Aliases: ResourceURI
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilePath
Path of the local resource to be uploaded.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 2
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

[Get-FASTSearchResource]()

[Remove-FASTSearchResource]()

