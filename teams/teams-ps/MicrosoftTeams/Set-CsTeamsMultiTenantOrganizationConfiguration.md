---
applicable: Microsoft Teams
author: samlyu
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
<!--- ms.author: samlyu --->
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmultitenantorganizationconfiguration
schema: 2.0.0
title: Set-CsTeamsMultiTenantOrganizationConfiguration
---

# Set-CsTeamsMultiTenantOrganizationConfiguration

## SYNOPSIS

This cmdlet configures the Multi-tenant Organization settings for the tenant.

## SYNTAX

```
Set-CsTeamsMultiTenantOrganizationConfiguration
       [[-Identity] <string>]
       [-CopilotFromHomeTenant <Enabled/Disabled>]
```

## DESCRIPTION
The Set-CsTeamsMultiTenantOrganizationConfiguration cmdlet configures tenant settings for Multi-tenant Organizations. This includes the CopilotFromHomeTenant parameter, which determines if users in a Multi-Tenant Organization can use their Copilot license from their home tenant during cross-tenant meetings

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsMultiTenantOrganizationConfiguration -Identity Global -CopilotFromHomeTenant Disabled
```

Set Teams Multi-tenant Organization Setting "CopilotFromHomeTenant" value to "Disabled" for global as default.

### Example 2
```powershell
PS C:\> Set-CsTeamsMultiTenantOrganizationConfiguration -Identity Global -CopilotFromHomeTenant Enabled

```

Set Teams Multi-tenant Organization Setting "CopilotFromHomeTenant" value to "Enabled" for global as default.

## PARAMETERS

### -CopilotFromHomeTenant
Setting value of the Teams Multi-tenant Organization Setting. CopilotFromHomeTenant controls user access to Copilot license in their home tenant during cross-tenant meetings.

```yaml
Type: Boolean
Parameter Sets: ("Enabled","Disabled")
Aliases:

Required: True
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Identity of the Teams Multi-tenant Organization Setting.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
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

[Get-CsTeamsMultiTenantOrganizationConfiguration](Get-CsTeamsMultiTenantOrganizationConfiguration.md)
