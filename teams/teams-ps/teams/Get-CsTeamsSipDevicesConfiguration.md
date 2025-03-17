---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsSipDevicesConfiguration
author: anmandav
ms.author: anmandav
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamssipdevicesconfiguration
schema: 2.0.0
---

# Get-CsTeamsSipDevicesConfiguration

## SYNOPSIS

This cmdlet is used to retrieve the organization-wide Teams SIP devices configuration.

## SYNTAX

```powershell
Get-CsTeamsSipDevicesConfiguration [<CommonParameters>]
```

## DESCRIPTION

This cmdlet is used to retrieve the organization-wide Teams SIP devices configuration which contains settings that are applicable to SIP devices connected to Teams using Teams Sip Gateway.

To execute the cmdlet, you need to hold a role within your organization such as Global Reader, Teams Administrator, or Teams Communication Administrator.

## Examples

### Example 1

```powershell
PS C:\> Get-CsTeamsSipDevicesConfiguration

Identity                              : Global
BulkSignIn                            : Enabled
```

In this example, the organization has Bulk SignIn enabled for their SIP devices.

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsTeamsSipDevicesConfiguration](https://learn.microsoft.com/powershell/module/teams/set-csteamssipdevicesconfiguration)
