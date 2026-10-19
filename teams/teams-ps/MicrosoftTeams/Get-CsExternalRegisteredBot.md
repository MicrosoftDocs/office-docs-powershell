---
applicable: Microsoft Teams
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: yashaswinih
ms.date: 10/19/2026
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csexternalregisteredbot
schema: 2.0.0
title: Get-CsExternalRegisteredBot
---

# Get-CsExternalRegisteredBot

## SYNOPSIS

Returns registered external meeting bots that administrators can use to configure an external bot allowlist.

## SYNTAX

```powershell
Get-CsExternalRegisteredBot [<CommonParameters>]
```

## DESCRIPTION

The `Get-CsExternalRegisteredBot` cmdlet retrieves external meeting bots from the registered bot catalog. Use the returned `appId` values with the **AllowedExternalBotAppIds** parameter of [New-CsTeamsMeetingPolicy](New-CsTeamsMeetingPolicy.md) or [Set-CsTeamsMeetingPolicy](Set-CsTeamsMeetingPolicy.md).

Before running this cmdlet, sign in with an administrator account using [Connect-MicrosoftTeams](Connect-MicrosoftTeams.md). Application-only authentication isn't supported.

The cmdlet automatically retrieves additional pages of results and returns up to 400 bot records. It has no cmdlet-specific parameters. To filter or select properties from the results, use PowerShell pipeline commands.

Discovering a bot doesn't add it to a meeting policy or grant it access to meetings. Update the meeting policy separately to configure the allowlist.

## EXAMPLES

### Example 1: Get registered external bots

```powershell
Get-CsExternalRegisteredBot
```

Returns up to 400 registered external meeting bots.

### Example 2: Display bot names and application IDs

```powershell
Get-CsExternalRegisteredBot | Select-Object -Property displayName, appId
```

Displays the names and application IDs returned by the catalog. Use the `appId` values to configure **AllowedExternalBotAppIds** on a Teams meeting policy.

### Example 3: Find a bot by display name

```powershell
Get-CsExternalRegisteredBot | Where-Object { $_.displayName -eq "Contoso Meeting Assistant" }
```

Filters the returned records to bots with the specified display name. Replace the example name with the bot name you want to find. Filtering is performed locally on the results returned by the cmdlet.

## PARAMETERS

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

This cmdlet doesn't accept pipeline input.

## OUTPUTS

### System.Management.Automation.PSObject

Returns one object for each bot record. Objects preserve the properties supplied by the catalog, including `appId` and `displayName` when present. Additional properties depend on the catalog response.

## NOTES

If catalog access fails, the cmdlet returns an error rather than an empty list.

## RELATED LINKS

[Connect-MicrosoftTeams](Connect-MicrosoftTeams.md)

[Get-CsTeamsMeetingPolicy](Get-CsTeamsMeetingPolicy.md)

[New-CsTeamsMeetingPolicy](New-CsTeamsMeetingPolicy.md)

[Set-CsTeamsMeetingPolicy](Set-CsTeamsMeetingPolicy.md)
