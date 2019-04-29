---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Set-TeamGuestSettings
online version: 
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Set-TeamGuestSettings

## SYNOPSIS
Note: This cmdlet is deprecated as of our 1.0 PowerShell release, and is not supported in our 1.0 release.  To set a Team's settings, run Set-Team.

Updates team guest settings.

## SYNTAX

```
Set-TeamGuestSettings -GroupId <String> [-AllowCreateUpdateChannels <String>] [-AllowDeleteChannels <String>]
```

## DESCRIPTION

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
Set-TeamGuestSettings -GroupId a61f5a96-a0cf-43db-a7c8-cec05f8a8fc4 -AllowCreateUpdateChannels true
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

### -AllowCreateUpdateChannels
Settings to create and update channels

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

### -AllowDeleteChannels
Settings to Delete channels

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

### AllowCreateUpdateChannels

### AllowDeleteChannels

## OUTPUTS

## NOTES

## RELATED LINKS

