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

This cmdlet is used to retrieve the organization-wide Teams SIP devices configuration which contains settings that are applicable to SIP devices connected to teams using Teams Sip Gateway.

You must be a Teams Service Administrator or a Global Administrator for your organization to run the cmdlet.

## Examples

### Example 1
In this example, the organization has Bulk SignIn enabled for their SIP devices.

```powershell
Get-CsTeamsSipDevicesConfiguration
```
```Output
Identity                              : Global
BulkSignIn                            : Enabled
```

## PARAMETERS

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsTeamsSipDevicesConfiguration](Set-CsTeamsSipDevicesConfiguration.md)
