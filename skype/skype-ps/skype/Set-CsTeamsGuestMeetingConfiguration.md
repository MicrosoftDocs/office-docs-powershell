---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
online version:
applicable: Skype for Business Online
title: Set-CsTeamsGuestMeetingConfiguration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsTeamsGuestMeetingConfiguration

## SYNOPSIS

Designates what meeting features guests using Microsoft Teams will have available. Use this cmdlet to set the configuration.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsGuestMeetingConfiguration [-Tenant <Guid>] [-AllowIPVideo <Boolean>]
 [-ScreenSharingMode <String>] [-AllowMeetNow <Boolean>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsGuestMeetingConfiguration [-Tenant <Guid>] [-AllowIPVideo <Boolean>]
 [-ScreenSharingMode <String>] [-AllowMeetNow <Boolean>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

The TeamsGuestMeetingConfiguration designates which meeting features guests leveraging Microsoft Teams will have available.  This configuration will apply to all guests utilizing Microsoft Teams.  Use the Set-CsTeamsGuestMeetingConfiguration cmdlet to designate what values are set for your organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsGuestMeetingConfiguration -Identity Global -AllowMeetNow $false -AllowIPVideo $false
```

Disables Guests' usage of MeetNow and Video calling in the organization; all other values of the configuration are left as is.

## PARAMETERS

### -AllowIPVideo
Determines whether video is enabled in  a user's meetings or calls. Set this to TRUE to allow guests to share their video. Set this to FALSE to prohibit guests from sharing their video

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

### -AllowMeetNow
Determines whether guests can start ad-hoc meetings. Set this to TRUE to allow guests to start ad-hoc meetings. Set this to FALSE to prohibit guests from starting ad-hoc meetings. 


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

### -Confirm
Prompts you for confirmation before running the cmdlet.

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
Suppresses all non fatal errors.

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
The only input allowed is "Global"

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

### -Instance
Pipe the existing configuration from a Get- call.

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScreenSharingMode
Determines the mode in which guests can share a screen in calls or meetings. Set this to SingleApplication to allow the user to share an  application at a given point in time. Set this to EntireScreen to allow the user to share anything on their screens. Set this to Disabled to prohibit the user from sharing their screens

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
