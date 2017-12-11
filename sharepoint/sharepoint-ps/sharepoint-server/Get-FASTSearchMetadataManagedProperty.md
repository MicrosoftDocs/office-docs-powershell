---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchMetadataManagedProperty
---

# Get-FASTSearchMetadataManagedProperty

## SYNOPSIS
Retrieves a managed property with the specified name.

## SYNTAX

```
Get-FASTSearchMetadataManagedProperty [[-Name] <String>] [<CommonParameters>]
```

## DESCRIPTION
This command retrieves managed properties that match the input parameter.
If wildcards are used, the command may return more than one managed property.

A managed property is a piece of information (such as title, author, etc.) that is stored for each item in the index.

See Set-FASTSearchMetadataManagedProperty for details about the managed property parameters and how to configure them.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataManagedProperty -name title
```

This example retrieves a managed property named "title".
It returns an object representing the managed property.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataManagedProperty -name content*
```

This example returns all managed properties with names starting with "content".
It returns a list of managed property objects.

## PARAMETERS

### -Name
The name of the managed property to retrieve.
This option supports wildcards, and the matching is case-insensitive.

```yaml
Type: String
Parameter Sets: (All)
Aliases: ManagedPropertyName, N
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

[New-FASTSearchMetadataManagedProperty]()

[Set-FASTSearchMetadataManagedProperty]()

[Remove-FASTSearchMetadataManagedProperty]()

