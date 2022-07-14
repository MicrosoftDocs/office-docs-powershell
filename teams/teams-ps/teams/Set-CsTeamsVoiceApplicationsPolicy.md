---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/en-us/powershell/module/skype/set-csteamsvoiceapplicationspolicy
schema: 2.0.0
---

# Set-CsTeamsVoiceApplicationsPolicy

## SYNOPSIS
Modifies an existing Teams voice applications policy.

## SYNTAX

```
Set-CsTeamsVoiceApplicationsPolicy [-AllowAutoAttendantAfterHoursGreetingChange <Boolean>]
 [-AllowAutoAttendantBusinessHoursGreetingChange <Boolean>]
 [-AllowAutoAttendantHolidayGreetingChange <Boolean>] [-AllowCallQueueMusicOnHoldChange <Boolean>]
 [-AllowCallQueueOverflowSharedVoicemailGreetingChange <Boolean>]
 [-AllowCallQueueTimeoutSharedVoicemailGreetingChange <Boolean>]
 [-AllowCallQueueWelcomeGreetingChange <Boolean>] [[-Identity] <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
TeamsVoiceApplicationsPolicy is used for Supervisor Delegated Administration which allows tenant admins to permit certain users to make changes to auto attendant and call queue configurations. 

## EXAMPLES

### EXAMPLE 1
```
Set-CsTeamsVoiceApplicationsPolicy -Identity "SDA-CQ-OverflowGreeting" -AllowCallQueueOverflowSharedVoicemailGreetingChange $true
```

The command shown in Example 1 sets allowing CQ overflow shared voicemail greeting changes to per-user Teams voice applications policy.

## PARAMETERS

### -AllowAutoAttendantAfterHoursGreetingChange
When set to True users affected by the policy will be allowed to change the auto attendant's after-hours greeting. When set to False (the default value) users affected by the policy will not be allowed to change the auto attendant's after-hours greeting.

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
When set to True users affected by the policy will be allowed to change the auto attendant's business hours greeting. When set to False (the default value) users affected by the policy will not be allowed to change the auto attendant's business hours greeting.

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
When set to True users affected by the policy will be allowed to change auto attendant's   holiday greeting. When set to False (the default value) users affected by the policy will not be allowed to change auto attendant's holiday greeting.

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
When set to True users affected by the policy will be allowed to change Call Queue's music on hold information. When set to False (the default value) users affected by the policy will not be allowed to change callqueue's music on hold.

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
When set to True users affected by the policy will be allowed to change Call Queue's overflow shared voicemail greeting. When set to False (the default value) users affected by the policy will not be allowed to change callqueue's overflow shared voicemail greeting.

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
When set to True users affected by the policy will be allowed to change Call Queue's timeout shared voicemail greeting. When set to False (the default value) users affected by the policy will not be allowed to change callqueue's timeout shared voicemail greeting.
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
When set to True users affected by the policy will be allowed to change the call queue's welcome greeting. When set to False (the default value) users affected by the policy will not be allowed to change the call queue's welcome greeting.

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

### -Identity
Unique identifier assigned to the policy when it was created. Teams voice applications policies can be assigned at the global scope or the per-user scope. To refer to the global instance, use this syntax:

-Identity global

To refer to a per-user policy, use syntax similar to this:

-Identity "SDA-Allow-All"

If you do not specify an Identity, then the Set-CsTeamsVoiceApplicationsPolicy cmdlet will modify the global policy.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Get-CsTeamsVoiceApplicationsPolicy](Get-CsTeamsVoiceApplicationsPolicy.md)

[Grant-CsTeamsVoiceApplicationsPolicy](Grant-CsTeamsVoiceApplicationsPolicy.md)

[Remove-CsTeamsVoiceApplicationsPolicy](Remove-CsTeamsVoiceApplicationsPolicy.md)

[New-CsTeamsVoiceApplicationsPolicy](New-CsTeamsVoiceApplicationsPolicy.md)
