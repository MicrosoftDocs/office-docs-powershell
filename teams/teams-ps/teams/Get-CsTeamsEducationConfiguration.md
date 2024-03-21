---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsEducationConfiguration
author: prrathna
ms.author: prrathna
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

## DESCRIPTION

This cmdlet is used to retrieve the organization-wide education configuration for Teams which contains settings that are applicable to education organizations.

You must be a Teams Service Administrator or a Global Administrator for your organization to run the cmdlet.

## Examples

### Example 1
In this example, the organization has Email selected as the preferred contact method used for parent communication invitations.

```powershell
Get-CsTeamsEducationConfiguration
```
```Output
Identity                              : Global
ParentGuardianPreferredContactMethod  : Email
```

## PARAMETERS

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsTeamsEducationConfiguration](Set-CsTeamsEducationConfiguration.md)
