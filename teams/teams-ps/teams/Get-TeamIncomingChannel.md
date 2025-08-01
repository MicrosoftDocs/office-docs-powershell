---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-teamincomingchannel
title: Get-TeamIncomingChannel
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer: dedaniel, robharad
---

# Get-TeamIncomingChannel

## SYNOPSIS
This cmdlet supports retrieving incoming channels of a team.

## SYNTAX
```PowerShell
Get-TeamIncomingChannel -GroupId <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet supports retrieving incoming channels of a team.

## EXAMPLES

### Example 1
```PowerShell
Get-TeamIncomingChannel -GroupId 126b90a5-e65a-4fef-98e3-d9b49f4acf12
```

Returns incoming channels of a team.

## PARAMETERS

### -GroupId
Group ID of the team

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

### GroupId

## OUTPUTS

### Channel

## NOTES

## RELATED LINKS
[Get-TeamChannel](https://learn.microsoft.com/powershell/module/teams/get-teamchannel)
[Get-TeamAllChannel](https://learn.microsoft.com/powershell/module/teams/get-teamchannel)
