---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamspersonalattendantpolicy
applicable: Microsoft Teams
title: Set-CsTeamsPersonalAttendantPolicy
schema: 2.0.0
author: juliiva
ms.author: juliiva
ms.reviewer:
manager: jomarque
---

# Set-CsTeamsPersonalAttendantPolicy

## SYNOPSIS

**Limited Preview:** Functionality described in this document is currently in limited preview and only authorized organizations have access.

Use this cmdlet to update values in existing Teams Personal Attendant Policies.

## SYNTAX

### Identity (Default)
```powershell
Set-CsTeamsPersonalAttendantPolicy -Identity <string>
 [-PersonalAttendant <string>]
 [-CallScreening <string>]
 [-CalendarBookings <string>]
 [-InboundInternalCalls <string>]
 [-InboundFederatedCalls <string>]
 [-InboundPSTNCalls <string>]
 [-AutomaticTranscription <string>]
 [-AutomaticRecording <string>]
 [-Confirm]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Teams Personal Attendant Policy controls personal attendant and its functionalities available to users in Microsoft Teams. This cmdlet allows admins to set values in
a given Personal Attendant Policy instance.

Only the parameters specified are changed. Other parameters keep their existing values.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsPersonalAttendantPolicy -Identity Global -CallScreening Disabled
```

Sets the value of the parameter CallScreening in the Global (default) Teams Personal Attendant Policy instance.

### Example 2
```powershell
PS C:\> Set-CsTeamsPersonalAttendantPolicy -Identity SalesPersonalAttendantPolicy -CalendarBookings Disabled
```

Sets the value of the parameter CalendarBookings to Disabled in the Teams Personal Attendant Policy instance called SalesPersonalAttendantPolicy.

## PARAMETERS

### -Identity
Name of the policy instance being created.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PersonalAttendant
Enables the user to use the personal attendant

Possible values:

- EnabledUserOverride: Users can set their preferences from personal attendant settings in the Teams app.
- Enabled: Enables the user to use this functionality.
- Disabled: The user is not enabled to use this functionality.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: EnabledUserOverride
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallScreening
Enables the user to use the personal attendant call context evaluation features

Possible values:

- EnabledUserOverride: Users can set their preferences from personal attendant settings in the Teams app.
- Enabled: Enables the user to use this functionality.
- Disabled: The user is not enabled to use this functionality.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: EnabledUserOverride
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarBookings
Enables the user to use the personal attendant calendar related features

Possible values:

- EnabledUserOverride: Users can set their preferences from personal attendant settings in the Teams app.
- Enabled: Enables the user to use this functionality.
- Disabled: The user is not enabled to use this functionality.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: EnabledUserOverride
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundInternalCalls
Enables the user to use the personal attendant for incoming domain calls

Possible values:

- EnabledUserOverride: Users can set their preferences from personal attendant settings in the Teams app.
- Enabled: Enables the user to use this functionality.
- Disabled: The user is not enabled to use this functionality.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: EnabledUserOverride
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundFederatedCalls
Enables the user to use the personal attendant for incoming calls from other domains

Possible values:

- EnabledUserOverride: Users can set their preferences from personal attendant settings in the Teams app.
- Enabled: Enables the user to use this functionality.
- Disabled: The user is not enabled to use this functionality.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: EnabledUserOverride
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundPSTNCalls
Enables the user to use the personal attendant for incoming PSTN calls

Possible values:

- EnabledUserOverride: Users can set their preferences from personal attendant settings in the Teams app.
- Enabled: Enables the user to use this functionality.
- Disabled: The user is not enabled to use this functionality.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: EnabledUserOverride
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomaticTranscription
Enables the user to use the automatic storing of personal attendant call transcriptions

Possible values:

- EnabledUserOverride: Users can set their preferences from personal attendant settings in the Teams app.
- Enabled: Enables the user to use this functionality.
- Disabled: The user is not enabled to use this functionality.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: EnabledUserOverride
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomaticRecording
Enables the user to use the automatic storing of personal attendant call recordings

Possible values:

- EnabledUserOverride: Users can set their preferences from personal attendant settings in the Teams app.
- Enabled: Enables the user to use this functionality.
- Disabled: The user is not enabled to use this functionality.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: EnabledUserOverride
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

The cmdlet is available in Teams PowerShell module ?.?.? or later.

## RELATED LINKS

[New-CsTeamsPersonalAttendantPolicy](./new-csteamspersonalattendantpolicy.md)

[Get-CsTeamsPersonalAttendantPolicy](./get-csteamspersonalattendantpolicy.md)

[Grant-CsTeamsPersonalAttendantPolicy](./grant-csteamspersonalattendantpolicy.md)

[Remove-CsTeamsPersonalAttendantPolicy](./remove-csteamspersonalattendantpolicy.md)
