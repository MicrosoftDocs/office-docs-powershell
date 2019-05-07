---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Set-TeamMessagingSettings
online version: 
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Set-TeamMessagingSettings

## SYNOPSIS
Note: This cmdlet is deprecated as of our 1.0 PowerShell release, and is not supported in our 1.0 release.  To set a Team's settings, run Set-Team.

Updates team messaging settings.

## SYNTAX

```
Set-TeamMessagingSettings -GroupId <String> [-AllowUserEditMessages <String>]
 [-AllowUserDeleteMessages <String>] [-AllowOwnerDeleteMessages <String>] [-AllowTeamMentions <String>]
 [-AllowChannelMentions <String>]
```

## DESCRIPTION

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
Set-TeamMessagingSettings -GroupId 4ba546e6-e28d-4645-8cc1-d3575ef9d266 -AllowUserEditMessages true
```

### --------------------------  Example 2  --------------------------
```
Set-TeamMessagingSettings -GroupId 4ba546e6-e28d-4645-8cc1-d3575ef9d266 -AllowUserDeleteMessages false -AllowChannelMentions true
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

### -AllowUserEditMessages
Setting to allow user to edit messages

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

### -AllowUserDeleteMessages
Setting to allow user to delete messages

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

### -AllowOwnerDeleteMessages
Setting to allow owner to Delete messages

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

### -AllowTeamMentions
Allow @team or @\[team name\] mentions.
This will notify everyone in the team

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

### -AllowChannelMentions
Allow @channel or @\[channel name\] mentions.
This wil notify members who've favorited that channel

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

### AllowUserEditMessages

### AllowUserDeleteMessages

### AllowOwnerDeleteMessages

### AllowTeamMentions

### AllowChannelMentions

## OUTPUTS

## NOTES

## RELATED LINKS

