---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaudioconferencingpolicy
schema: 2.0.0
title: Set-CsTeamsAudioConferencingPolicy
---

# Set-CsTeamsAudioConferencingPolicy

## SYNOPSIS

Audio conferencing policies can be used to manage audio conferencing toll- and toll-free numbers to be displayed in meeting invites created by users within your organization.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsAudioConferencingPolicy [-AllowTollFreeDialin <Boolean>] [-Force] [[-Identity] <String>]
 [-MeetingInvitePhoneNumbers <Object>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsAudioConferencingPolicy [-AllowTollFreeDialin <Boolean>] [-Force]
 [-MeetingInvitePhoneNumbers <Object>] [-Instance <PSObject>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Set-CsTeamsAudioConferencingPolicy cmdlet enables administrators to control audio conferencing toll- and toll-free numbers to be displayed in meeting invites created by users within your organization. The Set-CsTeamsAudioConferencingPolicy can be used to update an audio-conferencing policy that has been configured for use in your organization.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Set-CsTeamsAudioConferencingPolicy -Identity "EMEA Users" -AllowTollFreeDialin $False
```

In this example, AllowTollFreeDialin is set to false. All other policy properties will be left as previously assigned.

### EXAMPLE 2
```
PS C:\> Set-CsTeamsAudioConferencingPolicy -Identity "EMEA Users" -AllowTollFreeDialin $True -MeetingInvitePhoneNumbers "+49695095XXXXX","+353156YYYYY","+1800856ZZZZZ"
```

In this example, two different property values are configured: AllowTollFreeDialIn is set to True and -MeetingInvitePhoneNumbers is set to include the following Toll and Toll free numbers - "+49695095XXXXX","+353156YYYYY","+1800856ZZZZZ" other policy properties will be left as previously assigned.

## PARAMETERS

### -AllowTollFreeDialin
Determines if users of this Policy can have Toll free numbers. If toll-free numbers are available in your Microsoft Audio Conferencing bridge, this parameter controls if they can be used to join the meetings of a given user.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
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
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the policy to be Set. To set the global policy, use this syntax: -Identity global. To set a per-user policy use syntax similar to this: -Identity "Emea Users".
If this parameter is not included, the Set-CsTeamsAudioConferencingPolicy cmdlet will modify the Global policy.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MeetingInvitePhoneNumbers
Determines the list of audio-conferencing Toll- and Toll-free telephone numbers that will be included in meetings invites created by users of this policy. If no phone numbers are specified, then the phone number that is displayed in meeting invites created by users would be based on the location of the users.

```yaml
Type: Object
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### PSObject
## OUTPUTS

### Object
## NOTES

## RELATED LINKS

[Get-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsaudioconferencingpolicy)

[New-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsaudioconferencingpolicy)

[Grant-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsaudioconferencingpolicy)
