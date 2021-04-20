---
external help file: sharepointserver.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/remove-fastsearchresource
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer: 
title: Remove-FASTSearchResource
---

# Remove-FASTSearchResource

## SYNOPSIS
Deletes a resource from the resource store.

## SYNTAX

```
Remove-FASTSearchResource [-Path] <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet deletes a specified file located in the Microsoft FAST Search Server 2010 for SharePoint resource store.
The location of the resource store is typically specified in %FASTSEARCH%/etc/Admin.config (where %FASTSEARCH% is the FAST Search Server 2010 for SharePoint installation folder.)

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (https://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
Remove-FASTSearchResource dictionaries\spellcheck\check_en.aut
```

This example deletes the resource dictionaries\spellcheck\check_en.aut from the resource store.

## PARAMETERS

### -Path
Partial URI within the resource store of the file which will be deleted.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-FASTSearchResource](Get-FASTSearchResource.md)

[Add-FASTSearchResource](Add-FASTSearchResource.md)

