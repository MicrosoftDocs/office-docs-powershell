---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-cstenantmigrationconfiguration
applicable: Skype for Business Online
title: Get-CsTenantMigrationConfiguration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsTenantMigrationConfiguration

## SYNOPSIS
Use the Get-CsTenantMigrationConfiguration cmdlet to check if Meeting Migration Service (MMS) is enabled in your organization.

## SYNTAX

```
Get-CsTenantMigrationConfiguration [-LocalStore] [[-Identity] <XdsIdentity>] [-Tenant <Guid>] [-Filter <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Meeting Migration Service (MMS) is a Skype for Business service that runs in the background and automatically updates Skype for Business and Microsoft Teams meetings for users. MMS is designed to eliminate the need for users to run the Meeting Migration Tool to update their Skype for Business and Microsoft Teams meetings. This tool does not migrate Skype for Business meetings into Microsoft Teams meetings.

The Get-CsTenantMigrationConfiguration cmdlet retrieves the Meeting Migration Service configuration in your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsTenantMigrationConfiguration
```

This example shows the MMS configuration in your organization.

## PARAMETERS

### -Filter
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Set-CsTenantMigrationConfiguration](https://docs.microsoft.com/powershell/module/skype/set-cstenantmigrationconfiguration?view=skype-ps)
