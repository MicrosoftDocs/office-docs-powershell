---
author: anmandav
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: anmandav
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamssipdevicesconfiguration
schema: 2.0.0
title: Set-CsTeamsSipDevicesConfiguration
---

# Set-CsTeamsSipDevicesConfiguration

## SYNOPSIS

This cmdlet is used to manage the organization-wide Teams SIP devices configuration.

## SYNTAX

```powershell
Set-CsTeamsSipDevicesConfiguration [-BulkSignIn <String>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION

This cmdlet is used to manage the organization-wide Teams SIP devices configuration which contains settings that are applicable to SIP devices connected to Teams using Teams Sip Gateway.

To execute the cmdlet, you need to hold a role within your organization such as Teams Administrator or Teams Communication Administrator.

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
Indicates whether Bulk SingIn into Teams SIP devices is enabled or disabled for the common area phone (CAP) accounts across the organization. Possible values are **Enabled** and '**Disabled**.

```yaml
Type: String
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsSipDevicesConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamssipdevicesconfiguration)
