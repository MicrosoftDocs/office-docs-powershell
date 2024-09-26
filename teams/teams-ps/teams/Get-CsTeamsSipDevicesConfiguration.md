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
Get-CsTeamsSipDevicesConfiguration
```

## DESCRIPTION

This cmdlet is used to retrieve the organization-wide Teams SIP devices configuration which contains settings that are applicable to SIP devices connected to Teams using Teams Sip Gateway.

To execute the cmdlet, you need to hold a role within your organization such as Global Reader, Teams Administrator, or Teams Communication Administrator.

## Examples

### Example 1

```powershell
Get-CsTeamsSipDevicesConfiguration
```
```Output
Identity                              : Global
BulkSignIn                            : Enabled
```
In this example, the organization has Bulk SignIn enabled for their SIP devices.

## RELATED LINKS

[Set-CsTeamsSipDevicesConfiguration](Set-CsTeamsSipDevicesConfiguration.md)
