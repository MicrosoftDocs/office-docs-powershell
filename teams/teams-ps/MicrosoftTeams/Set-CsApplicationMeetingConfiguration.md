---
applicable: Teams
author: jackry6350
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: zhengni
Module Name: MicrosoftTeams
ms.author: yoren
online version: https://learn.microsoft.com/powershell/module/teams/set-CsApplicationMeetingConfiguration
schema: 2.0.0
title: Set-CsApplicationMeetingConfiguration
---

# Set-CsApplicationMeetingConfiguration

## SYNOPSIS

Modifies an existing application meeting configuration for the tenant.

## SYNTAX

### Identity

```
Set-CsApplicationMeetingConfiguration [-Identity <XdsIdentity>] [-AllowRemoveParticipantAppIds <PSListModifier>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsApplicationMeetingConfiguration [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet modifies an existing application meeting configuration for the tenant.

## EXAMPLES

### Add new app ID to the configuration to allow remove participant for the tenant

```
PS C:\> Set-CsApplicationMeetingConfiguration -AllowRemoveParticipantAppIds @{Add="5817674c-81d9-4adb-bfb2-8f6a442e4622"}
```

The command shown above adds a new app ID "5817674c-81d9-4adb-bfb2-8f6a442e4622" to the application meeting configuration settings for the tenant to allow it to remove participant.

### Remove app IDs from the configuration to allow remove participant for the tenant

```
PS C:\> Set-CsApplicationMeetingConfiguration -AllowRemoveParticipantAppIds @{Remove="5817674c-81d9-4adb-bfb2-8f6a442e4622"}
```

The command shown above removes the app ID "5817674c-81d9-4adb-bfb2-8f6a442e4622" from the application meeting configuration settings for the tenant to disallow it to remove participant.

## PARAMETERS

### -AllowRemoveParticipantAppIds

A list of application (client) IDs. For details of application (client) ID, refer to: [Get tenant and app ID values for signing in](https://learn.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal#get-tenant-and-app-id-values-for-signing-in).

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Teams

Prompts you for confirmation before executing the command.

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

### -Force

> Applicable: Teams

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

Unique identifier of the application meeting configuration settings to be returned.
Because you can only have a single, global instance of these settings, you do not have to include the Identity when calling the Set-CsApplicationMeetingConfiguration cmdlet.
However, you can use the following syntax to retrieve the global settings: -Identity global.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Teams

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Teams

Describes what would happen if you executed the command without actually executing the command.

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

### Input types
None.
The `Set-CsApplicationMeetingConfiguration` cmdlet does not accept pipelined input.

## OUTPUTS

### Output types
The `Set-CsApplicationMeetingConfiguration` cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Get-CsApplicationMeetingConfiguration](https://learn.microsoft.com/powershell/module/teams/get-csapplicationmeetingconfiguration)
