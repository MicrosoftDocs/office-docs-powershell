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

You must be a Teams Service Administrator or a Global Administrator for your organization to run the cmdlet.

## EXAMPLES

### Example 1
In this example, Bulk SignIn is set to Disabled across the organization.

```powershell
Set-CsTeamsSipDevicesConfiguration -BulkSignIn "Enabled"
```

### Example 2
In this example, Bulk SignIn is set to Disabled across the organization.

```powershell
Set-CsTeamsSipDevicesConfiguration -BulkSignIn "Disabled"
```

## PARAMETERS

### -BulkSignIn
Indicates whether Bulk SingIn in to Teams SIP Devices is enabled or disabled for the Common Area Phone(CAP) accounts across the organization. Possible values are 'Enabled' and 'Disabled'.

```yaml
Type: String
Position: Named
Default value: Disabled
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsSipDevicesConfiguration](Get-CsTeamsSipDevicesConfiguration.md)
