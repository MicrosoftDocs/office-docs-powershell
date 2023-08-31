---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Set-CsTeamsSipDevicesConfiguration
author: anmandav
ms.author: anmandav
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamssipdevicesconfiguration
schema: 2.0.0
---

# Set-CsTeamsSipDevicesConfiguration

## SYNOPSIS

This cmdlet is used to manage the organization-wide Teams SIP devices configuration.

## SYNTAX

```powershell
Set-CsTeamsSipDevicesConfiguration
   [-BulkSignIn <String>]
   [-WhatIf]
   [-Confirm]
   [<CommonParameters>]
```

## DESCRIPTION

This cmdlet is used to manage the organization-wide Teams SIP devices configuration which contains settings that are applicable to SIP devices connected to teams using Teams Sip Gateway.

To execute the cmdlet, you need to hold a role within your organization such as Global Administrator, Teams Administrator, or Teams Communication Administrator.

## EXAMPLES

### Example 1

```powershell
Set-CsTeamsSipDevicesConfiguration -BulkSignIn "Enabled"
```
In this example, Bulk SignIn is set to Enabled across the organization.

### Example 2

```powershell
Set-CsTeamsSipDevicesConfiguration -BulkSignIn "Disabled"
```
In this example, Bulk SignIn is set to Disabled across the organization.

## PARAMETERS

### -BulkSignIn
Indicates whether Bulk SingIn in to Teams SIP Devices is enabled or disabled for the Common Area Phone(CAP) accounts across the organization. Possible values are 'Enabled' and 'Disabled'.

```yaml
Type: String
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Get-CsTeamsSipDevicesConfiguration](Get-CsTeamsSipDevicesConfiguration.md)
