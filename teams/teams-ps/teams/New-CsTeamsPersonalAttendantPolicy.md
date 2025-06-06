---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamspersonalattendantpolicy
applicable: Microsoft Teams
title: New-CsTeamsPersonalAttendantPolicy
schema: 2.0.0
author: juliiva
ms.author: juliiva
ms.reviewer:
manager: jomarque
---

# New-CsTeamsPersonalAttendantPolicy

## SYNOPSIS

**Limited Preview:** Functionality described in this document is currently in limited preview and only authorized organizations have access.

Use this cmdlet to create a new instance of a Teams Personal Attendant Policy.

## SYNTAX

### Identity (Default)
```powershell
New-CsTeamsPersonalAttendantPolicy [-Identity] <string>
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
The Teams Personal Attendant Policy controls personal attendant and its functionalities available to users in Microsoft Teams. This cmdlet allows admins to create new policy instances.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsPersonalAttendantPolicy -Identity SalesPersonalAttendantPolicy -CallScreening Enabled
```

The cmdlet create the policy instance SalesPersonalAttendantPolicy and sets the value of the parameter CallScreening to Enabled. The rest of the parameters are set to the corresponding
values in the Global policy instance.

## PARAMETERS

### -Identity
Name of the policy instance being created.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
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

[Get-CsTeamsPersonalAttendantPolicy](./get-csteamspersonalattendantpolicy.md)

[Set-CsTeamsPersonalAttendantPolicy](./set-csteamspersonalattendantpolicy.md)

[Grant-CsTeamsPersonalAttendantPolicy](./grant-csteamspersonalattendantpolicy.md)

[Remove-CsTeamsPersonalAttendantPolicy](./remove-csteamspersonalattendantpolicy.md)


