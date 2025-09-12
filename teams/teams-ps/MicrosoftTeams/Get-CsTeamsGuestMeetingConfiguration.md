---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsguestmeetingconfiguration
schema: 2.0.0
title: Get-CsTeamsGuestMeetingConfiguration
---

# Get-CsTeamsGuestMeetingConfiguration

## SYNOPSIS

Designates what meeting features guests using Microsoft Teams will have available.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsGuestMeetingConfiguration [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsGuestMeetingConfiguration [-Tenant <Guid>] [-Filter <String>] [-LocalStore]
 [<CommonParameters>]
```

## DESCRIPTION

The TeamsGuestMeetingConfiguration designates which meeting features guests leveraging Microsoft Teams will have available.  This configuration will apply to all guests utilizing Microsoft Teams.  Use the Get-CsTeamsGuestMeetingConfiguration cmdlet to return what values are set for your organization.

## EXAMPLES

### Example 1
```powershell
Get-CsTeamsGuestMeetingConfiguration
```

Returns the TeamsGuestMeetingConfiguration set in your organization.

## PARAMETERS

### -Filter
Internal Microsoft use.

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
The only value accepted is Global

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
Internal Microsoft use

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
Internal Microsoft use

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
