---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
ms.reviewer: dedaniel, robharad
online version: https://learn.microsoft.com/powershell/module/teams/remove-sharedwithteam
schema: 2.0.0
title: Remove-SharedWithTeam
---

# Remove-SharedWithTeam

## SYNOPSIS
This cmdlet supports unsharing a channel with a team.

## SYNTAX
```PowerShell
Remove-SharedWithTeam -HostTeamId <String> -ChannelId <String> -SharedWithTeamId <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet supports unsharing a channel with a team.

## EXAMPLES

### Example 1
```PowerShell
Remove-SharedWithTeam -HostTeamId 126b90a5-e65a-4fef-98e3-d9b49f4acf12 -ChannelId 19:cUfyYYw3h_t-1KG8-WkvVa7KLEsIx-JHmyeG43VJojg1@thread.tacv2
-SharedWithTeam d2aad370-c6ca-438b-b4d7-05f0aa911a7b
```

Unshares a channel with a team.

## PARAMETERS

### -ChannelId
Thread ID of the shared channel.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -HostTeamId
Team ID of the host team (Group ID).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -SharedWithTeamId
Team ID of the shared with team.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### HostTeamId

### ChannelId

### SharedWithTeamId

## OUTPUTS

## NOTES

## RELATED LINKS
[Remove-Team](https://learn.microsoft.com/powershell/module/teams/remove-team)
