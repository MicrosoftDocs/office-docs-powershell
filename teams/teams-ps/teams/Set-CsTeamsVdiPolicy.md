---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-cteamsvdipolicy
title: Set-CsTeamsVdiPolicy
schema: 2.0.0
---

# Set-CsTeamsVdiPolicy

## SYNOPSIS
The CsTeamsVdiPolicy cmdlets enable administrators to control the type of meetings that users can create or the features that they can access while in a meeting specifically on an unoptimized VDI environment. It also controls whether a user can be in VDI 2.0 optimization mode.

## SYNTAX

```powershell
Set-CsTeamsVdiPolicy [-Identity] <String>
 [-Confirm]
 [-DisableAudioVideoInCallsAndMeetings <Boolean>]
 [-DisableCallsAndMeetings <Boolean>]
 [-Force]
 [-VDI2Optimization <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsVdiPolicy cmdlets enable administrators to control the type of meetings that users can create or the features that they can access while in a meeting specifically on an unoptimized VDI environment. It also controls whether a user can be in VDI 2.0 optimization mode.

The SetCsTeamsVdiPolicy cmdlet allows administrators to update existing Vdi policies that can be assigned to particular users to control Teams features related to Vdi.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsVdiPolicy -Identity RestrictedUserPolicy -VDI2Optimization "Disabled"
```

The command shown in Example 1 uses the Set-CsTeamsVdiPolicy cmdlet to update an existing vdi policy with the Identity RestrictedUserPolicy. This policy will use all the existing values except one: VDI2Optimization; in this example, users with this policy can not be in VDI 2.0 optimized.

### Example 2
```powershell
PS C:\> Set-CsTeamsVdiPolicy -Identity OnlyOptimizedPolicy -DisableAudioVideoInCallsAndMeetings $True -DisableCallsAndMeetings $True
```

In Example 2, the Set-CsTeamsVdiPolicy cmdlet is used to update a Vdi policy with the Identity OnlyOptimizedPolicy. In this example two different property values are configured: DisableAudioVideoInCallsAndMeetings is set to True and DisableCallsAndMeetings is set to True. All other policy properties will use the existing values.

## PARAMETERS

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

### -VDI2Optimization
Determines whether a user can be VDI 2.0 optimized.

- Enabled: Allow a user to be VDI 2.0 optimized.
- Disabled: Disallow a user from being VDI 2.0 optimized.

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

### System.Void

## NOTES

## RELATED LINKS
