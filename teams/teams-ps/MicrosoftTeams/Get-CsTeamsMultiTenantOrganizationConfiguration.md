---
applicable: Microsoft Teams
author: samlyu
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
<!-- ms.author: samlyu -->
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmultitenantorganizationconfiguration
schema: 2.0.0
title: Get-CsTeamsMultiTenantOrganizationConfiguration
---

# Get-CsTeamsMultiTenantOrganizationConfiguration

## SYNOPSIS

This cmdlet retrieves all tenant settings for Multi-tenant Organizations

## SYNTAX

```
Get-CsTeamsMultiTenantOrganizationConfiguration [<CommonParameters>]
```

## DESCRIPTION

The Get-CsTeamsMultiTenantOrganizationConfiguration cmdlet enables Teams meeting administrators to retrieve the Multi-Tenant Organization settings for their tenant. This includes the *CopilotFromHomeTenant* field, which specifies whether users in a Multi-Tenant Organization are allowed to utilize their Copilot license from their home tenant during cross-tenant meetings.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsMultiTenantOrganizationConfiguration
```

Retrieves tenant's Multi-tenant Organization Configuration, including CopilotFromHomeTenant.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsTeamsMultiTenantOrganizationConfiguration](Set-CsTeamsMultiTenantOrganizationConfiguration.md)
