---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
ms.reviewer: dedaniel, robharad
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-sharedwithteamuser
schema: 2.0.0
title: Get-SharedWithTeamUser
---

# Get-SharedWithTeamUser

## SYNOPSIS
This cmdlet supports retrieving users of a shared with team.

## SYNTAX
```PowerShell
Get-SharedWithTeamUser -HostTeamId <String> -ChannelId <String> -SharedWithTeamId <String> [-Role <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet supports retrieving users of a shared with team.

## EXAMPLES

### Example 1
```PowerShell
Get-SharedWithTeamUser -HostTeamId 126b90a5-e65a-4fef-98e3-d9b49f4acf12 -ChannelId 19:cUfyYYw3h_t-1KG8-WkvVa7KLEsIx-JHmyeG43VJojg1@thread.tacv2
-SharedWithTeam d2aad370-c6ca-438b-b4d7-05f0aa911a7b
```

Returns users of a team with which a specified channel is shared.

### Example 2
```PowerShell
Get-AssociatedTeam -HostTeamId 126b90a5-e65a-4fef-98e3-d9b49f4acf12 -ChannelId 19:cUfyYYw3h_t-1KG8-WkvVa7KLEsIx-JHmyeG43VJojg1@thread.tacv2
-SharedWithTeam d2aad370-c6ca-438b-b4d7-05f0aa911a7b -Role owner
```

Returns owners of a team with which a specified channel is shared.

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

### -Role
Filters the results to only users with the given role of "Owner" or "Member".

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
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

### User

## NOTES

## RELATED LINKS
[Get-TeamUser](https://learn.microsoft.com/powershell/module/microsoftteams/get-teamuser)
