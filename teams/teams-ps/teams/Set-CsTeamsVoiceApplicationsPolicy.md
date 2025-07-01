---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsvoiceapplicationspolicy
title: Set-CsTeamsVoiceApplicationsPolicy
schema: 2.0.0
---

# Set-CsTeamsVoiceApplicationsPolicy

## SYNOPSIS

Modifies an existing Teams voice applications policy.

## SYNTAX

```
Set-CsTeamsVoiceApplicationsPolicy
 [-AllowAutoAttendantBusinessHoursGreetingChange <Boolean>]
 [-AllowAutoAttendantAfterHoursGreetingChange <Boolean>]
 [-AllowAutoAttendantHolidayGreetingChange <Boolean>]
 [-AllowAutoAttendantBusinessHoursChange <Boolean>]
 [-AllowAutoAttendantHolidaysChange <Boolean>]
 [-AllowAutoAttendantTimeZoneChange <Boolean>]
 [-AllowAutoAttendantLanguageChange <Boolean>]
 [-AllowAutoAttendantBusinessHoursRoutingChange <Boolean>]
 [-AllowAutoAttendantAfterHoursRoutingChange <Boolean>]
 [-AllowAutoAttendantHolidayRoutingChange <Boolean>]

 [-AllowCallQueueWelcomeGreetingChange <Boolean>]
 [-AllowCallQueueMusicOnHoldChange <Boolean>]
 [-AllowCallQueueOverflowSharedVoicemailGreetingChange <Boolean>]
 [-AllowCallQueueTimeoutSharedVoicemailGreetingChange <Boolean>]
 [-AllowCallQueueNoAgentSharedVoicemailGreetingChange <bool>]
 [-AllowCallQueueLanguageChange <Boolean>]
 [-AllowCallQueueMembershipChange <Boolean>]
 [-AllowCallQueueConferenceModeChange <Boolean>]
 [-AllowCallQueueRoutingMethodChange <Boolean>]
 [-AllowCallQueuePresenceBasedRoutingChange <Boolean>]
 [-AllowCallQueueOptOutChange <Boolean>]
 [-AllowCallQueueOverflowRoutingChange <Boolean>]
 [-AllowCallQueueTimeoutRoutingChange <Boolean>]
 [-AllowCallQueueNoAgentsRoutingChange <Boolean>]
 [-AllowCallQueueAgentOptChange <Boolean>]

 [-CallQueueAgentMonitorMode <Disabled | Monitor | Whisper | Barge | Takeover>]
 [-CallQueueAgentMonitorNotificationMode <Disabled | Agent>]

 [-RealTimeAutoAttendantMetricsPermission <string>]
 [-RealTimeCallQueueMetricsPermission <string>]
 [-RealTimeAgentMetricsPermission <string>]

 [-HistoricalAutoAttendantMetricsPermission <string>]
 [-HistoricalCallQueueMetricsPermission <string>]
 [-HistoricalAgentMetricsPermission <string>]

 [[-Identity] <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

`TeamsVoiceApplicationsPolicy` is used for **Supervisor Delegated Administration** which allows admins in the organization to permit certain users to make changes to auto attendant and call queue configurations.

## EXAMPLES

### EXAMPLE 1

```powershell
Set-CsTeamsVoiceApplicationsPolicy -Identity "SDA-CQ-OverflowGreeting" -AllowCallQueueOverflowSharedVoicemailGreetingChange $true
```

The command shown in Example 1 sets allowing CQ overflow shared voicemail greeting changes to per-user Teams voice applications policy.

## PARAMETERS

### -AllowAutoAttendantBusinessHoursGreetingChange

When set to `True`, users affected by the policy will be allowed to change the auto attendant's business hours greeting. When set to `False` (the default value), users affected by the policy won't be allowed to change the auto attendant's business hours greeting.

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

### -AllowAutoAttendantAfterHoursGreetingChange

When set to `True`, users affected by the policy will be allowed to change the auto attendant's after-hours greeting. When set to `False` (the default value), users affected by the policy won't be allowed to change the auto attendant's after-hours greeting.

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

When set to `True`, users affected by the policy will be allowed to change the auto attendant's holiday greeting. When set to `False` (the default value), users affected by the policy won't be allowed to change the auto attendant's holiday greeting.

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

When set to `True`, users affected by the policy will be allowed to change the auto attendant's business hours schedule. When set to `False` (the default value), users affected by the policy won't be allowed to change the auto attendant's business hours schedule.

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

When set to `True`, users affected by the policy will be allowed to change the auto attendant's holiday schedules. When set to `False` (the default value), users affected by the policy won't be allowed to change the auto attendant's holiday schedules.

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

_This feature is not currently available to authorized users._

When set to `True`, users affected by the policy will be allowed to change the auto attendant's time zone. When set to `False` (the default value), users affected by the policy won't be allowed to change the auto attendant's time zone.

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

_This feature is not currently available to authorized users._

When set to `True`, users affected by the policy will be allowed to change the auto attendant's language. When set to `False` (the default value), users affected by the policy won't be allowed to change the auto attendant's language.

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

When set to `True`, users affected by the policy will be allowed to change the auto attendant's business hours call flow. When set to `False` (the default value), users affected by the policy won't be allowed to change the auto attendant's business hours call flow.

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

When set to `True`, users affected by the policy will be allowed to change the auto attendant's after-hours call flow. When set to `False` (the default value), users affected by the policy won't be allowed to change the auto attendant's after-hours call flow.

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

When set to `True`, users affected by the policy will be allowed to change the auto attendant's holiday call flows. When set to `False` (the default value), users affected by the policy won't be allowed to change the auto attendant's holiday call flows.

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

When set to `True`, users affected by the policy will be allowed to change the call queue's welcome greeting. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's welcome greeting.

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

When set to `True`, users affected by the policy will be allowed to change the call queue's music on hold information. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's music on hold.

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

When set to `True`, users affected by the policy will be allowed to change the call queue's overflow shared voicemail greeting. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's overflow shared voicemail greeting.

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

When set to `True`, users affected by the policy will be allowed to change the call queue's timeout shared voicemail greeting. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's timeout shared voicemail greeting.

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

### -AllowCallQueueNoAgentSharedVoicemailGreetingChange

_This feature is not currently available to authorized users._

When set to `True`, users affected by the policy will be allowed to change the call queue's no agent shared voicemail greeting. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's no agent shared voicemail greeting.

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

_This feature is not currently available to authorized users._

When set to `True`, users affected by the policy will be allowed to change the call queue's language. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's language.

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

When set to `True`, users affected by the policy will be allowed to change the call queue's users. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's users.

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

When set to `True`, users affected by the policy will be allowed to change the call queue's conference mode. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's conference mode.

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

When set to `True`, users affected by the policy will be allowed to change the call queue's routing method. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's routing method.

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

When set to `True`, users affected by the policy will be allowed to change the call queue's presence-based routing option. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's presence-based routing option.

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

When set to `True`, users affected by the policy will be allowed to change the call queue opt-out setting that allows agents to opt out of receiving calls. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue opt-out setting.

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

When set to `True`, users affected by the policy will be allowed to change the call queue's overflow handling properties. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's overflow handling properties.

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

When set to `True`, users affected by the policy will be allowed to change the call queue's timeout handling properties. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's timeout handling properties.

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

When set to `True`, users affected by the policy will be allowed to change the call queue's no-agent handling properties. When set to `False` (the default value), users affected by the policy won't be allowed to change the call queue's no-agent handling properties.

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

When set to `True`, users affected by the policy will be allowed to change an agent's opt-in status in the call queue. When set to `False` (the default value), users affected by the policy won't be allowed to change an agent's opt-in status in the call queue.

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

When set to `Disabled` (the default value), users affected by the policy won't be allowed to monitor call sessions.

When set to `Monitor`, users affected by the policy will be allowed to monitor and listen to call sessions.

When set to `Whisper`, users affected by the policy will be allowed to monitor call sessions and whisper to an agent in the call.

When set to `Barge`, users affected by the policy will be allowed to monitor call sessions, whisper to an agent in the call, or join the call session.

When set to `Takeover`, users affected by the policy will be allowed to monitor call sessions, whisper to an agent in the call, join the call session, or take over the call from an agent.

```yaml
Type: Object
Parameter Sets: Dual
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: Disabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallQueueAgentMonitorNotificationMode

PARAMVALUE: Disabled | Agent

When set to `Disabled` (the default value), users affected by the policy won't be allowed to monitor agents during call sessions.

When set to `Agent`, users affected by the policy will be allowed to monitor agents during call sessions.

```yaml
Type: Object
Parameter Sets: Dual
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: Disabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -RealTimeAutoAttendantMetricsPermission

PARAMVALUE: Disabled | AuthorizedOnly | All

When set to `Disabled` (the default value), users affected by the policy won't receive real-time metrics for auto attendants.

When set to `AuthorizedOnly`, users affected by the policy will receive real-time metrics for auto attendants they are authorized for.

> [!IMPORTANT]
> The `All` option is no longer supported. The parameter will be accepted and saved however any user assigned a policy with *RealTimeAutoAttendantMetricsPermission* set to `All` will not be able to access real-time metrics.

```yaml
Type: Object
Parameter Sets: Dual
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RealTimeCallQueueMetricsPermission

PARAMVALUE: Disabled | AuthorizedOnly | All

When set to `Disabled` (the default value), users affected by the policy won't receive real-time metrics for call queues.

When set to `AuthorizedOnly`, users affected by the policy will receive real-time metrics for call queues they are authorized for.

> [!IMPORTANT]
> The `All` option is no longer supported. The parameter will be accepted and saved however any user assigned a policy with *RealTimeCallQueueMetricsPermission* set to `All` will not be able to access real-time metrics.

```yaml
Type: Object
Parameter Sets: Dual
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RealTimeAgentMetricsPermission

PARAMVALUE: Disabled | AuthorizedOnly | All

When set to `Disabled` (the default value), users affected by the policy won't receive real-time metrics for agents.

When set to `AuthorizedOnly`, users affected by the policy will receive real-time metrics for agents who are members in the call queues they are authorized for.

> [!IMPORTANT]
> The `All` option is no longer supported. The parameter will be accepted and saved however any user assigned a policy with *RealTimeAgentMetricsPermission* set to `All` will not be able to access real-time metrics.

```yaml
Type: Object
Parameter Sets: Dual
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HistoricalAutoAttendantMetricsPermission

PARAMVALUE: Disabled | AuthorizedOnly | All

When set to `Disabled` (the default value), users affected by the policy won't receive historical metrics for auto attendants.

When set to `AuthorizedOnly`, users affected by the policy will receive historical metrics for auto attendants they are authorized for.

When set to `All`, users affected by the policy will receive historical metrics for all auto attendants in the organization.

```yaml
Type: Object
Parameter Sets: Dual
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HistoricalCallQueueMetricsPermission

PARAMVALUE: Disabled | AuthorizedOnly | All

When set to `Disabled` (the default value), users affected by the policy won't receive historical metrics for call queues.

When set to `AuthorizedOnly`, users affected by the policy will receive historical metrics for call queues they are authorized for.

When set to `All`, users affected by the policy will receive historical metrics for all call queues in the organization.

```yaml
Type: Object
Parameter Sets: Dual
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HistoricalAgentMetricsPermission

PARAMVALUE: Disabled | AuthorizedOnly | All

When set to `Disabled` (the default value), users affected by the policy won't receive historical metrics for agents.

When set to `AuthorizedOnly`, users affected by the policy will receive historical metrics for agents who are members in the call queues they are authorized for.

When set to `All`, users affected by the policy will receive historical metrics for all agents in all call queues in the organization.

```yaml
Type: Object
Parameter Sets: Dual
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

Unique identifier assigned to the policy when it was created. Teams voice applications policies can be assigned at the global scope or the per-user scope. To refer to the global instance, use this syntax:

-Identity global

To refer to a per-user policy, use syntax similar to this:

-Identity "SDA-Allow-All"

If you do not specify an Identity, then the `Set-CsTeamsVoiceApplicationsPolicy` cmdlet will modify the global policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
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

[Get-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsvoiceapplicationspolicy)

[Grant-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsvoiceapplicationspolicy)

[Remove-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsvoiceapplicationspolicy)

[New-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsvoiceapplicationspolicy)
