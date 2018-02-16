---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchContentCollection
---

# Get-FASTSearchContentCollection

## SYNOPSIS
Retrieves Microsoft FAST Search Server 2010 for SharePoint content collections.

## SYNTAX

```
Get-FASTSearchContentCollection [[-Name] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves all FAST Search Server 2010 for SharePoint content collections.
When a collection name is specified, a single collection is retrieved, if it exists.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchContentCollection
```

This example retrieves all FAST Search Server 2010 for SharePoint content collections.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchContentCollection -Name newscollection
```

This example retrieves the "newscollection" content collection.

## PARAMETERS

### -Name
The name of the FAST Search Server 2010 for SharePoint collection to retrieve.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Clear-FASTSearchContentCollection](Clear-FASTSearchContentCollection.md)

[New-FASTSearchContentCollection](New-FASTSearchContentCollection.md)

[Remove-FASTSearchContentCollection](Remove-FASTSearchContentCollection.md)

