---
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsguestcallingconfiguration
schema: 2.0.0
title: Get-CsTeamsGuestCallingConfiguration
---

# Get-CsTeamsGuestCallingConfiguration

## SYNOPSIS

Returns information about the GuestCallingConfiguration, which specifies what options guest users have for calling within Teams.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsGuestCallingConfiguration [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsGuestCallingConfiguration [-Tenant <Guid>] [-Filter <String>] [-LocalStore]
 [<CommonParameters>]
```

## DESCRIPTION
Returns information about the GuestCallingConfiguration, which specifies what options guest users have for calling within Teams.  To set the configuration in your organization, use Set-CsTeamsGuestCallingConfiguration

## EXAMPLES

### Example 1
```powershell
Get-CsTeamsGuestCallingConfiguration
```

Returns the results

## PARAMETERS

### -Filter
Internal Microsoft use

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
Internal Microsoft use - customers can have only one TeamsGuestCallingConfiguration

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
