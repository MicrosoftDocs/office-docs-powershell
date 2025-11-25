---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csphonenumbertenantconfiguration
schema: 2.0.0
title: Set-CsPhoneNumberTenantConfiguration
---

# Set-CsPhoneNumberTenantConfiguration

## SYNOPSIS
This cmdlet allows the admins to set a tenant default configuration that applies to all telephone numbers within the tenant.

## SYNTAX

```
Set-CsPhoneNumberTenantConfiguration [-AssignmentEmailEnabled <bool>] [-UnassignmentEmailEnabled <bool>] [-AssignmentBlockedForever <bool>] [-AssignmentBlockedDays <Integer>] [-AllowOnPremToOnlineMigration <bool>]
[<CommonParameters>]
```

## DESCRIPTION

This cmdlet sets the tenant-level default configuration for Teams Phone. The default settings automatically apply to all telephone numbers within the tenant, ensuring consistent behavior across the organization. If a specific number operation indicates its own configuration, that configuration takes precedence over the tenant default.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsPhoneNumberTenantConfiguration -AssignmentEmailEnabled $true -UnassignmentEmailEnabled $true
```

The above example shows how to enable email notifications for all the telephone number assignment and unassignment operations within the tenant. Once set, any telephone number assignment or unassignment operation will send an automatic email to the end users notifying the change. 

### Example 2
```powershell
PS C:\> Set-CsPhoneNumberTenantConfiguration -AssignmentBlockedForever $true
```

The above example shows how to set an indefinite assignment block to all the telephone numbers within the tenant. Once set, any telephone number unassignment operation will make the telephone number unavailable for assignment until the [block is manually removed](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csphonenumberassignmentblock?view=teams-ps) by an admin. Note: AssignmentBlockedForever and AssignmentBlockedDays configurations are mutually exclusive. If one is set, the other one will not be available to be set at tenant configuration level.

### Example 3
```powershell
PS C:\> Set-CsPhoneNumberTenantConfiguration -AllowOnPremToOnlineMigration $false
```

The above example shows how to disallow OnPremises to Online Direct Routing (DR) number automatic migration. Once set, any online operation on a DR OnPremises number will not automatically convert it to Online DR number. If this configuration is set to False, only way to migrate an OnPremises DR number to Online DR number would be manually removing the number from OnPremises and manually adding the number to Online after DirSync. 

## PARAMETERS

### -AssignmentEmailEnabled
Enables email notifications for all telephone number assignment operations.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnassignmentEmailEnabled
Enables email notifications for all telephone number unassignment operations.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentBlockedForever
Sets an indefinite block on assignment for all the telephone numbers upon unassignment.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentBlockedDays
Sets a duration based assignment block on all the telephone numbers upon unassignment. ***This feature is currently not available.***

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOnPremToOnlineMigration
Allows Direct Routing numbers to be migrated from OnPremises to Online automatically.

```yaml
Type: System.Boolean
Parameter Sets: (All)
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

### None

## NOTES

## RELATED LINKS
[Remove-CsPhoneNumberTenantConfiguration](Remove-CsPhoneNumberTenantConfiguration.md)

[Get-CsPhoneNumberTenantConfiguration](Get-CsPhoneNumberTenantConfiguration.md)