---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-CsApplicationMeetingConfiguration
applicable: Teams
title: Get-CsApplicationMeetingConfiguration
schema: 2.0.0
manager: zhengni
author: jackry6350
ms.author: yoren
ms.reviewer:
---

# Get-CsApplicationMeetingConfiguration

## SYNOPSIS

Retrieves information about the application meeting configuration settings configured for the tenant.

## SYNTAX

### Identity

```
Get-CsApplicationMeetingConfiguration [-Identity <XdsIdentity>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet retrieves information about the application meeting configuration settings configured for the tenant.

## EXAMPLES

### Retrieve application meeting configuration settings for the tenant.

```
PS C:\> Get-CsApplicationMeetingConfiguration
```

The command shown above returns application meeting configuration settings that have been configured for the tenant.

## PARAMETERS

### -Identity

Unique identifier of the application meeting configuration settings to be returned.
Because you can only have a single, global instance of these settings, you do not have to include the Identity when calling the Get-CsApplicationMeetingConfiguration cmdlet.
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

### -Filter
Enables you to use wildcards when specifying the application meeting configuration settings to be returned.
Because you can only have a single, global instance of these settings there is little reason to use the Filter parameter.
However, if you prefer, you can use syntax similar to this to retrieve the global settings: -Identity "g*".

```yaml
Type: String
Parameter Sets: Filter
Aliases:
Applicable: Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the application meeting configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.PlatformApplications.ApplicationMeetingConfiguration

## NOTES

## RELATED LINKS

[Set-CsApplicationMeetingConfiguration](https://learn.microsoft.com/powershell/module/teams/set-csapplicationmeetingconfiguration)
