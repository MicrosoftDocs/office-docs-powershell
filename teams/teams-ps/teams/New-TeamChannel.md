---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: New-TeamChannel
online version: 
schema: 2.0.0
---

# New-TeamChannel

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Add a new channel to a team.

## SYNTAX

```
New-TeamChannel -GroupId <String> -DisplayName <String> [-Description <String>]
```

## DESCRIPTION

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
New-TeamChannel -GroupId 126b90a5-e65a-4fef-98e3-d9b49f4acf12 -DisplayName "Architecture"
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

### -DisplayName
Channel display name.
Names must be 50 characters or less, and can't contain the characters # % & * { } / \ : \< \> ?
+ | ' "

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

### -Description
Channel description.
Channel description can be up to 1024 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

## INPUTS

### GroupId

### DisplayName

### Description

## OUTPUTS

### Id

## NOTES

## RELATED LINKS

