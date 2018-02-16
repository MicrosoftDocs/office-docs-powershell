---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: New-FASTSearchMetadataRankProfile
---

# New-FASTSearchMetadataRankProfile

## SYNOPSIS
Creates a new rank profile to calculate relevance in queries.

## SYNTAX

```
New-FASTSearchMetadataRankProfile -Name <String> [-Template <RankProfile>] [<CommonParameters>]
```

## DESCRIPTION
A rank profile controls the relevancy calculation for a query.
It consists of several components which are weighted so that the relevancy calculation fits the content.
See Set-FASTSearchMetadataRankProfile for more details.

A rank profile can either be created with default values, or based on another existing rank profile using the Template parameter.

The rank profile is typically specified as part of a query.
If no rank profile is specified in the query, the default rank profile is used.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>New-FASTSearchMetadataRankProfile -Name newrankdistribution
```

This example adds a new rank profile based on the default settings.
The new rank profile is called "newrankdistribution".

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$rankprofile_template = Get-FASTSearchMetadataRankProfile -Name newrankdistribution
New-FASTSearchMetadataRankProfile -Template $rankprofile_template -Name ExtraRankProfile
```

This example adds a new rank profile based on an existing rank profile called "newrankdistribution".

### ---------------EXAMPLE 3----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$new_rank_profile = New-FASTSearchMetadataRankProfile -Name ImprovedDefault
$new_rank_profile.makeDefault()
```

This example specifies a new rank profile to use as the default rank profile for the FAST Search Server 2010 for SharePoint.

## PARAMETERS

### -Name
The name of the new rank profile.

```yaml
Type: String
Parameter Sets: (All)
Aliases: RankProfileName, N
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template
An object representing the rank profile that will serve as a template in creating the new rank profile.

```yaml
Type: RankProfile
Parameter Sets: (All)
Aliases: RankProfileTemplate, T
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
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

[Remove-FASTSearchMetadataRankProfile](Remove-FASTSearchMetadataRankProfile.md)

[Set-FASTSearchMetadataRankProfile](Set-FASTSearchMetadataRankProfile.md)

[Get-FASTSearchMetadataRankProfile](Get-FASTSearchMetadataRankProfile.md)

