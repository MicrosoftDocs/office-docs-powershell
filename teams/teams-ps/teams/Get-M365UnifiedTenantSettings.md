---
external help file: Microsoft.Teams.PowerShell.TeamsCmdlets.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/Get-M365UnifiedTenantSettings
applicable: Microsoft Teams
title: Get-M365UnifiedTenantSettings
author: lkueter
ms.author: sribagchi
manager: rahulrgupta
ms.date: 10/22/2024
schema: 2.0.0
---

# Get-M365UnifiedTenantSettings

## SYNOPSIS

This cmdlet returns the current tenant settings for a particular tenant

## SYNTAX

```powershell
Get-M365UnifiedTenantSettings -SettingNames <String[]> [<CommonParameters>]
```

## DESCRIPTION

Get-M365UnifiedTenantSettings retrieves the current tenant settings for a particular tenant.

## EXAMPLES

### Example 1

```powershell
PS C:\> Get-M365UnifiedTenantSettings
```

Returns all the current tenant settings for this tenant.

### Example 2

```powershell
PS C:\> Get-M365UnifiedTenantSettings -SettingNames DefaultApp
```

Returns the current tenant setting for DefaultApp for this tenant.

### Example 3

```powershell
PS C:\> Get-M365UnifiedTenantSettings -SettingNames DefaultApp,EnableCopilotExtensibility
```

Returns the current tenant setting for DefaultApp and EnableCopilotExtensibility for this tenant.

## PARAMETERS

### -SettingNames

Setting names requested. Possible values - DefaultApp,GlobalApp,PrivateApp,EnableCopilotExtensibility

```yaml
Type: String
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

### None

## OUTPUTS

### System.Object

**SettingName**
Setting Name returned.

**SettingValue**
The status of this setting in the tenant.
Values:

- All
- None
- Some (only applicable for EnableCopilotExtensibility)

**Users**
The list of users this setting is applicable to (only applicable for EnableCopilotExtensibility).

**Groups**
The list of groups this setting is applicable to (only applicable for EnableCopilotExtensibility).

## NOTES

## RELATED LINKS
