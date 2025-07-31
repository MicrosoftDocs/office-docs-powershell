---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/remove-team
schema: 2.0.0
title: Remove-Team
---

# Remove-Team

## SYNOPSIS

This cmdlet deletes a specified Team from Microsoft Teams.

NOTE: The associated Office 365 Unified Group will also be removed.

## SYNTAX

```
Remove-Team -GroupId <String> [<CommonParameters>]
```

## DESCRIPTION

Removes a specified team via GroupID and all its associated components, like O365 Unified Group...

## EXAMPLES

### Example 1
```
Remove-Team -GroupId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df
```

## PARAMETERS

### -GroupId
GroupId of the team

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

## OUTPUTS

## NOTES

## RELATED LINKS

[New-Team](https://learn.microsoft.com/powershell/module/teams/new-team)
