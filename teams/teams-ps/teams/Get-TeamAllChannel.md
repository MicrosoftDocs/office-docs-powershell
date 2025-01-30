---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-teamallchannel
title: Get-TeamAllChannel
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer: dedaniel, robharad
---

# Get-TeamAllChannel

## SYNOPSIS
This cmdlet supports retrieving all channels of a team, including incoming channels and channels hosted by the team.

## SYNTAX
```PowerShell
Get-TeamAllChannel -GroupId <String> [-MembershipType <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet supports retrieving all channels of a team, including incoming channels and channels hosted by the team.

## EXAMPLES

### Example 1
```PowerShell
Get-TeamAllChannel -GroupId 126b90a5-e65a-4fef-98e3-d9b49f4acf12
```

Returns all channels of a team.

### Example 2
```PowerShell
Get-TeamAllChannel -GroupId 126b90a5-e65a-4fef-98e3-d9b49f4acf12 -MembershipType Shared
```

Returns all shared channels of a team.

## PARAMETERS

### -GroupId
Returns the Group ID of the team.

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

### -MembershipType
Membership type of the channel to display; Standard, Private, or Shared

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### GroupId, MembershipType

## OUTPUTS

### Channel

## NOTES

## RELATED LINKS
[Get-TeamChannel](https://learn.microsoft.com/powershell/module/teams/get-teamchannel)
[Get-TeamIncomingChannel](https://learn.microsoft.com/powershell/module/teams/get-teamchannel)
