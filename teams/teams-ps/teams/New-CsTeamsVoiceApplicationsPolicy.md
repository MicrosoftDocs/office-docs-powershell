---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/skype/new-csteamsvoiceapplicationspolicy
schema: 2.0.0
ROBOTS: NOINDEX
---

# New-CsTeamsVoiceApplicationsPolicy

## SYNOPSIS

Creates a new Teams voice applications policy. TeamsVoiceApplications policy governs what permissions the supervisors/users have over auto attendants and call queues.

## SYNTAX

```
New-CsTeamsVoiceApplicationsPolicy [-Identity] <String> 
 [-AllowAutoAttendantAfterHoursGreetingChange <Boolean>]
 [-AllowAutoAttendantBusinessHoursGreetingChange <Boolean>] 
 [-AllowAutoAttendantHolidayGreetingChange <Boolean>]
 [-AllowAutoAttendantBusinessHoursChange <Boolean>]
 [-AllowAutoAttendantTimeZoneChange <Boolean>]
 [-AllowAutoAttendantLanguageChange <Boolean>]
 [-AllowAutoAttendantHolidaysChange <Boolean>]
 [-AllowAutoAttendantBusinessHoursRoutingChange <Boolean>]
 [-AllowAutoAttendantAfterHoursRoutingChange <Boolean>]
 [-AllowAutoAttendantHolidayRoutingChange <Boolean>]
 [-AllowCallQueueOverflowSharedVoicemailGreetingChange <Boolean>]
 [-AllowCallQueueTimeoutSharedVoicemailGreetingChange <Boolean>]
 [-AllowCallQueueWelcomeGreetingChange <Boolean>] 
 [-AllowCallQueueMusicOnHoldChange <Boolean>]
 [-AllowCallQueueOptOutChange <Boolean>] 
 [-AllowCallQueueAgentOptChange <Boolean>]
 [-AllowCallQueueMembershipChange <Boolean>] 
 [-AllowCallQueueRoutingMethodChange <Boolean>]
 [-AllowCallQueuePresenceBasedRoutingChange <Boolean>]
 [-AllowCallQueueLanguageChange <Boolean>] 
 [-AllowCallQueueOverflowRoutingChange <Boolean>]
 [-AllowCallQueueTimeoutRoutingChange <Boolean>] 
 [-AllowCallQueueNoAgentsRoutingChange <Boolean>]
 [-AllowCallQueueConferenceModeChange <Boolean>]
 [-CallQueueAgentMonitorMode <Disabled | Monitor | Whisper | Barge | Takeover>]
 [-CallQueueAgentMonitorNotificationMode <Disabled | Agent>]
 [-WhatIf] 
 [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

TeamsVoiceApplicationsPolicy is used for Supervisor Delegated Administration which allows tenant admins to permit certain users to make changes to auto attendant and call queue configurations.

## EXAMPLES

### EXAMPLE 1

```powershell
New-CsTeamsVoiceApplicationsPolicy -Identity SDA-Allow-CQ-Moh -AllowCallQueueMusicOnHoldChange $true
```

The command shown in Example 1 creates a new per-user Teams voice applications policy with the Identity SDA-Allow-Moh. This policy allows delegated administrators to change the music on hold information.

### EXAMPLE 2

```powershell
New-CsTeamsVoiceApplicationsPolicy -Identity SDA-Allow-AA-After-Hour -AllowAutoAttendantAfterHoursGreetingChange $true 
```

The command shown in Example 2 creates a new per-user Teams voice applications policy with the Identity SDA-Allow-AA-After-Hour. This policy allows delegated administrators to change after-hours greetings for auto attendants.

## PARAMETERS

### -Identity

Unique identifier assigned to the policy when it was created.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAutoAttendantAfterHoursGreetingChange

This parameter allows supervisors and users to change auto attendants' after-hours greetings.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAutoAttendantBusinessHoursGreetingChange

This parameter allows supervisors and users to change auto attendants' business hours greetings.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAutoAttendantHolidayGreetingChange

This parameter allows supervisors and users to change auto attendants' holiday greetings.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAutoAttendantBusinessHoursChange

This parameter allows supervisors and users to change auto attendants' business hours schedule.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAutoAttendantTimeZoneChange

This parameter allows supervisors and users to change auto attendants' time zone.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAutoAttendantLanguageChange

This parameter allows supervisors and users to change auto attendants' language.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAutoAttendantHolidaysChange

This parameter allows supervisors and users to change auto attendants' holiday schedules.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAutoAttendantBusinessHoursRoutingChange

This parameter allows supervisors and users to change auto attendants' business hours call flow.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAutoAttendantAfterHoursRoutingChange

This parameter allows supervisors and users to change auto attendants' after-hours call flow.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAutoAttendantHolidayRoutingChange

This parameter allows supervisors and users to change auto attendants' holiday call flows.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueMusicOnHoldChange

This parameter allows supervisors and users to change call queue music on hold information.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueOptOutChange

This parameter allows supervisors and users to change the call queue opt-out setting that allows agents to opt out of receiving calls.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueAgentOptChange

This parameter allows supervisors and users to change an agent's opt-in status in the call queue.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueOverflowSharedVoicemailGreetingChange

This parameter allows supervisors and users to change call queue overflow shared voicemail information (TTS or AudioFile).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueTimeoutSharedVoicemailGreetingChange

This parameter allows supervisors and users to change call queue timeout shared voicemail information (TTS or AudioFile).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueWelcomeGreetingChange

This parameter allows supervisors and users to change the call queue's welcome greeting.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueMembershipChange

This parameter allows supervisors and users to change the call queue's users.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueRoutingMethodChange

This parameter allows supervisors and users to change the call queue's routing method.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueuePresenceBasedRoutingChange

This parameter allows supervisors and users to change the call queue's presence-based routing option.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueLanguageChange

This parameter allows supervisors and users to change the call queue's language.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueOverflowRoutingChange

This parameter allows supervisors and users to change the call queue's overflow handling properties.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueTimeoutRoutingChange

This parameter allows supervisors and users to change the call queue's timeout handling properties.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueNoAgentsRoutingChange

This parameter allows supervisors and users to change the call queue's no-agent handling properties.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCallQueueConferenceModeChange

This parameter allows supervisors and users to change the call queue's conference mode.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallQueueAgentMonitorMode

PARAMVALUE: Disabled | Monitor | Whisper | Barge | Takeover

This parameter allows supervisors and users to monitor agents during call sessions and take actions allowed when necessary.

When set to Disabled (the default value), users affected by the policy will not be allowed to monitor call sessions.

When set to Monitor, users affected by the policy will be allowed to monitor and listen to call sessions.

When set to Whisper, users affected by the policy will be allowed to monitor call sessions and whisper to an agent in the call.

When set to Barge, users affected by the policy will be allowed to monitor call sessions, whisper to an agent in the call, or join the call session.

When set to Takeover, users affected by the policy will be allowed to monitor call sessions, whisper to an agent in the call, join the call session, or take over the call from an agent.

```yaml
Type: Object
Parameter Sets: Dual
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: Disabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallQueueAgentMonitorNotificationMode

PARAMVALUE: Disabled | Agent

This parameter allows supervisors and users to monitor agents.

```yaml
Type: Object
Parameter Sets: Dual
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: Disabled
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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsVoiceApplicationsPolicy](Get-CsTeamsVoiceApplicationsPolicy.md)

[Grant-CsTeamsVoiceApplicationsPolicy](Grant-CsTeamsVoiceApplicationsPolicy.md)

[Remove-CsTeamsVoiceApplicationsPolicy](Remove-CsTeamsVoiceApplicationsPolicy.md)

[Set-CsTeamsVoiceApplicationsPolicy](Set-CsTeamsVoiceApplicationsPolicy.md)
