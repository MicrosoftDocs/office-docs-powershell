---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-CsApplicationMeetingConfiguration
applicable: Skype for Business Online
title: Set-CsApplicationMeetingConfiguration
schema: 2.0.0
manager: zhengni
author: jackry6350
ms.author: yoren
ms.reviewer:
---

# Set-CsApplicationMeetingConfiguration

## SYNOPSIS

Modifies an existing application meeting configuration for the tenant.

## SYNTAX

### Identity

```
Set-CsApplicationMeetingConfiguration [-Identity <XdsIdentity>] [-AllowRemoveParticipantAppIds <PSListModifier>]
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

### -AllowRemoveParticipantAppIds

A list of application (client) IDs. For details of application (client) ID, refer to: [Get tenant and app ID values for signing in](https://docs.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal#get-tenant-and-app-id-values-for-signing-in).

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

## INPUTS

###  
None.
The `Set-CsApplicationMeetingConfiguration` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Set-CsApplicationMeetingConfiguration` cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Get-CsApplicationMeetingConfiguration](Get-CsApplicationMeetingConfiguration.md)
