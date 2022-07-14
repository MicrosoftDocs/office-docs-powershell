---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/en-us/powershell/module/skype/new-csteamsvoiceapplicationspolicy
schema: 2.0.0
---

# New-CsTeamsVoiceApplicationsPolicy

## SYNOPSIS
Creates a new teams voice applications policy. TeamsVoiceApplications policy governs what permissions the supervisors/users have over Auto Attendants and Call Queues.

## SYNTAX

```
New-CsTeamsVoiceApplicationsPolicy [-Identity] <String> [-AllowAutoAttendantAfterHoursGreetingChange <Boolean>]
 [-AllowAutoAttendantBusinessHoursGreetingChange <Boolean>]
 [-AllowAutoAttendantHolidayGreetingChange <Boolean>] [-AllowCallQueueMusicOnHoldChange <Boolean>]
 [-AllowCallQueueOverflowSharedVoicemailGreetingChange <Boolean>]
 [-AllowCallQueueTimeoutSharedVoicemailGreetingChange <Boolean>]
 [-AllowCallQueueWelcomeGreetingChange <Boolean>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
TeamsVoiceApplicationsPolicy is used for Supervisor Delegated Administration which allows tenant admins to permit certain users to make changes to auto attendant and call queue configurations. 


## EXAMPLES

### EXAMPLE 1
```
New-CsTeamsVoiceApplicationsPolicy -Identity SDA-Allow-Moh -AllowCallQueueMusicOnHoldChange $true
```
The command shown in Example 1 creates a new per-user Teams voice applications policy with the Identity SDA-Allow-Moh. This policy allows delegated administrators to change the music on hold information.

### EXAMPLE 
```
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
This property allows supervisor/user to change auto-attendant's after hours greeting. 

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
This property allows supervisors and users to change auto attendants' business hours greetings.

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
This property allows supervisors and users to change auto attendants' holiday greetings.

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
This property allows supervisors and users to change call queue music on hold information.

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
This property allows supervisors and users to change call queue overflow shared voicemail information (TTS or AudioFile).

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
This property allows supervisor/user to change Call Queue timeout shared voicemail information (TTS or AudioFile).

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
This property allows supervisor/user to change Call Queue welcome greeting.
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

