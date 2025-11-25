---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csphonenumbertenantconfiguration
schema: 2.0.0
title: Remove-CsPhoneNumberTenantConfiguration
---

# Remove-CsPhoneNumberTenantConfiguration

## SYNOPSIS
This cmdlet allows the admins to remove a tenant default configuration that applies to all telephone numbers within the tenant.

## SYNTAX

```
Remove-CsPhoneNumberTenantConfiguration [-AssignmentEmailEnabled] [-UnassignmentEmailEnabled] [-AssignmentBlockedForever] [-AssignmentBlockedDays] [-AllowOnPremToOnlineMigration]
[<CommonParameters>]
```

## DESCRIPTION

This cmdlet allows the teams phone administrators to remove a tenant default configuration that applies to all the telephone numbers within the tenant. 

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsPhoneNumberTenantConfiguration -AssignmentEmailEnabled -UnassignmentEmailEnabled
```

The above example shows how to remove email notification configuration setting for all the telephone number assignment and unassignment operations within the tenant.

### Example 2
```powershell
PS C:\> Remove-CsPhoneNumberTenantConfiguration -AssignmentBlockedForever
```

The above example shows how to remove the indefinite assignment block configuration for all the telephone numbers within the tenant.


## PARAMETERS

### -AssignmentEmailEnabled
Indicates the assignment email notification configuration will be removed.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnassignmentEmailEnabled
Indicates the unassignment email notification configuration will be removed.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentBlockedForever
Indicates the assignment blocked forever configuration will be removed.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentBlockedDays
Indicates the assignment blocked days configuration will be removed.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOnPremToOnlineMigration
Indicates the configuration will be removed for allowing OnPremises direct routing numbers to be automatically migrated to online direct routing numbers if an online operation is performed.

```yaml
Type: System.Management.Automation.SwitchParameter
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
[Set-CsPhoneNumberTenantConfiguration](Set-CsPhoneNumberTenantConfiguration.md)

[Get-CsPhoneNumberTenantConfiguration](Get-CsPhoneNumberTenantConfiguration.md)