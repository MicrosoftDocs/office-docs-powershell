---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsEducationConfiguration
author: SaritaBehera
ms.author: saritabehera
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamseducationconfiguration
schema: 2.0.0
---

# Get-CsTeamsEducationConfiguration

## SYNOPSIS

This cmdlet is used to retrieve the organization-wide education configuration for Teams.

## SYNTAX

```powershell
Get-CsTeamsEducationConfiguration
```

### Identity (Default)
```
Get-CsTeamsEducationConfiguration [-Identity <String>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsEducationConfiguration [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet is used to retrieve the organization-wide education configuration for Teams which contains settings that are applicable to education organizations.

You must be a Teams Service Administrator or a Global Administrator for your organization to run the cmdlet.

## Examples

### Example 1
In this example, the organization has set the defaults as follows:
  - Email is set as the preferred contact method for the parent communication invites.
  - Capability to edit parent contact information by educators is enabled.

```powershell
Get-CsTeamsEducationConfiguration
```
```Output
Identity                              : Global
ParentGuardianPreferredContactMethod  : Email
UpdateParentInformation               : Enabled
```

## PARAMETERS

### -Filter

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsTeamsEducationConfiguration](Set-CsTeamsEducationConfiguration.md)
