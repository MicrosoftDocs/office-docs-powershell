---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchMetadataRankProfile
---

# Get-FASTSearchMetadataRankProfile

## SYNOPSIS
Retrieves rank profiles from the Microsoft FAST Search Server 2010 for SharePoint system.

## SYNTAX

```
Get-FASTSearchMetadataRankProfile [[-Name] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves rank profiles which match the Name parameter.
A rank profile is a weighting scheme for calculating relevance, specifying how each relevance component should be weighted when calculating an item's relevance.

See Set-FASTSearchMetadataRankProfile for details about rank profile parameters.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataRankProfile -Name newdefault
```

This example retrieves the rank profile named "newdefault".

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchMetadataRankProfile -Name *?default
```

This example retrieves all rank profiles that match the pattern "*?default".
It will not match the default rankprofile named "default".

## PARAMETERS

### -Name
The name of the rank profile to retrieve.
This option supports wildcards, and matching is case-insensitive.

```yaml
Type: String
Parameter Sets: (All)
Aliases: RankProfileName, N
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

[New-FASTSearchMetadataRankProfile](New-FASTSearchMetadataRankProfile.md)

[Remove-FASTSearchMetadataRankProfile](Remove-FASTSearchMetadataRankProfile.md)

[Set-FASTSearchMetadataRankProfile](Set-FASTSearchMetadataRankProfile.md)

