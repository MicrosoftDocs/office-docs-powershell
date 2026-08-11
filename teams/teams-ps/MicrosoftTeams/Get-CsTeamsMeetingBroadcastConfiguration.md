---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmeetingbroadcastconfiguration
schema: 2.0.0
title: Get-CsTeamsMeetingBroadcastConfiguration
---

# Get-CsTeamsMeetingBroadcastConfiguration

## SYNOPSIS
Gets Tenant level configuration for broadcast events in Teams.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsMeetingBroadcastConfiguration [-Tenant <Guid>] [-ExposeSDNConfigurationJsonBlob <Boolean>]
 [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsMeetingBroadcastConfiguration [-Tenant <Guid>] [-ExposeSDNConfigurationJsonBlob <Boolean>]
 [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Tenant level configuration for broadcast events in Teams

## EXAMPLES

## PARAMETERS

### -ExposeSDNConfigurationJsonBlob
Extract SDN properties as a Json Blob in get.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Not applicable to online service - you can only have one configuration.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
You can only have one configuration - "Global"

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Not applicable to online service.

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

### -Tenant
Not applicable to online service

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

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

### System.Object

## NOTES

## RELATED LINKS
