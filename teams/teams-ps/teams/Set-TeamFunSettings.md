---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Set-TeamFunSettings
online version: 
## https://docs.microsoft.com/en-us/powershell/module/teams/Set-TeamFunSettings?view=teams-ps
## On the page where it states: In this article on the right-hand menu there are 5 links for Input pointing to the same link.

schema: 2.0.0
---


# Set-TeamFunSettings

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Update Giphy, Stickers and Memes settings.

## SYNTAX

```
Set-TeamFunSettings -GroupId <String> [-AllowGiphy <String>] [-GiphyContentRating <String>]
 [-AllowStickersAndMemes <String>] [-AllowCustomMemes <String>]
```

## DESCRIPTION

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
Set-TeamFunSettings -GroupId 0ebb500c-f5f3-44dd-b155-cc8c4f383e2d -AllowGiphy true -GiphyContentRating Strict
```

## PARAMETERS

### -GroupId
GroupId of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -AllowGiphy
Setting to enable giphy for team

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GiphyContentRating
Settings to set content rating for giphy.
Can be "Strict" or "Moderate"

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowStickersAndMemes
Enable Stickers and memes

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCustomMemes
Allow custom memes to be uploaded

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### GroupId

### AllowGiphy

### GiphyContentRating

### AllowStickersAndMemes

### AllowCustomMemes

## OUTPUTS

## NOTES

## RELATED LINKS

