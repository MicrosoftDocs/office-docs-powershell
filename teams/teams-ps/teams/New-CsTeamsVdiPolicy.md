---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
---

# New-CsTeamsVdiPolicy

## SYNOPSIS
The CsTeamsVdiPolicy cmdlets enable administrators to control the type of meetings that users can create or the features that they can access while in a meeting specifically on an unoptimized VDI environment. It also controls whether a user can be in VDI 2.0 optimization mode.

## SYNTAX

```powershell
New-CsTeamsVdiPolicy [-DisableCallsAndMeetings <Boolean>] [-DisableAudioVideoInCallsAndMeetings <Boolean>]
 [-VDI2Optimization <String>] [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsVdiPolicy cmdlets enable administrators to control the type of meetings that users can create or the features that they can access while in a meeting specifically on an unoptimized VDI environment. It also controls whether a user can be in VDI 2.0 optimization mode.

The New-CsTeamsVdiPolicy cmdlet allows administrators to define new Vdi policies that can be assigned to particular users to control Teams features related to meetings on a VDI environment.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsVdiPolicy -Identity RestrictedUserPolicy -VDI2Optimization "Disabled"
```

The command shown in Example 1 uses the New-CsTeamsVdiPolicy cmdlet to create a new Vdi policy with the Identity RestrictedUserPolicy. This policy will use all the default values for a vdi policy except one: VDI2Optimization; in this example, users with this policy will not be able to be VDI 2.0 optimized.

### Example 2
```powershell
PS C:\> New-CsTeamsVdiPolicy -Identity OnlyOptimizedPolicy -DisableAudioVideoInCallsAndMeetings $True -DisableCallsAndMeetings $True
```

In Example 2, the New-CsTeamsVdiPolicy cmdlet is used to create a Vdi policy with the Identity OnlyOptimizedPolicy. In this example two different property values are configured: DisableAudioVideoInCallsAndMeetings is set to True and DisableCallsAndMeetings is set to True. All other policy properties will use the default values.

## PARAMETERS

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

### -DisableAudioVideoInCallsAndMeetings
Determines whether a user on a non-optimized Vdi environment can hold person-to-person audio and video calls. Set this to TRUE to disallow a non-optimized user to hold person-to-person audio and video calls. Set this to FALSE to allow a non-optimized user to hold person-to-person audio and video calls. A user can still join a meeting and share screen from chat and join a meeting and share a screen and move their audio to a phone.

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

### -DisableCallsAndMeetings
Determines whether a user on a non-optimized Vdi environment can make all types of calls. Set this to TRUE to disallow a non-optimized user to make calls, join meetings, and screen share from chat. Set this to FALSE to allow a non-optimized user to make calls, join meetings, and screen share from chat.

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

### -Force
Specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the switch isn't provided in the command, you're prompted for administrative input if required.

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
Specify the name of the policy being created.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VDI2Optimization
Determines whether a user can be VDI 2.0 optimized.
* Enabled - allow a user to be VDI 2.0 optimized.
* Disabled - disallow a user to be VDI 2.0 optimized.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### TeamsVdiPolicy.Cmdlets.TeamsVdiPolicy

## NOTES

## RELATED LINKS
