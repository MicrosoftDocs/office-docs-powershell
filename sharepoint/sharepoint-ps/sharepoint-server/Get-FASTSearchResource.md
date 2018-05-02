---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchResource
---

# Get-FASTSearchResource

## SYNOPSIS
Downloads a resource from the resource store.

## SYNTAX

```
Get-FASTSearchResource [-Path] <String> [-FilePath] <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet downloads a specified file located in the Microsoft FAST Search Server 2010 for SharePoint resource store to the local environment.
The location of the resource store is typically specified in %FASTSEARCH%/etc/Admin.config (where %FASTSEARCH% is the FAST Search Server 2010 for SharePoint installation folder.)

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1-----------------
```
PS C:\>Get-FASTSearchResource dictionaries\spellcheck\check_en.aut c:\check_en.aut
```

This example downloads dictionaries\spellcheck\check_en.aut from the resource store to c:\check_en.aut.

## PARAMETERS

### -Path
Partial URI within the resource store where the file needs to be downloaded from.

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
Path to download the resource.

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

[Remove-FASTSearchResource](Remove-FASTSearchResource.md)

[Add-FASTSearchResource](Add-FASTSearchResource.md)

