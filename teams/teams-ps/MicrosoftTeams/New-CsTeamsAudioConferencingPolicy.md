---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsaudioconferencingpolicy
schema: 2.0.0
title: New-CsTeamsAudioConferencingPolicy
---

# New-CsTeamsAudioConferencingPolicy

## SYNOPSIS

## SYNTAX

```
New-CsTeamsAudioConferencingPolicy [-Identity] <String> [-AllowTollFreeDialin <Boolean>] [-Force] [-InMemory]
 [-MeetingInvitePhoneNumbers <Object>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The New-CsTeamsAudioConferencingPolicy cmdlet enables administrators to control audio conferencing toll- and toll-free numbers to be displayed in meeting invites created by users within your organization. This cmdlet creates a new Teams audio conferencing policy. Custom policies can then be assigned to users using the Grant-CsTeamsAudioConferencingPolicy cmdlet.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> New-CsTeamsAudioConferencingPolicy -Identity "EMEA Users" -AllowTollFreeDialin $False
```

The command shown in Example 1 uses the New-CsTeamsAudioConferencingPolicy cmdlet to create a new audio-conferencing policy with the Identity "EMEA users". This policy will use all the default values for a meeting policy except one: AllowTollFreeDialin; in this example, meetings created by users with this policy cannot include Toll Free phone numbers.

### EXAMPLE 2
```
PS C:\> New-CsTeamsAudioConferencingPolicy -Identity "EMEA Users" -AllowTollFreeDialin $True -MeetingInvitePhoneNumbers "+49695095XXXXX","+353156YYYYY","+1800856ZZZZZ"
```

The command shown in Example 2 uses the New-CsTeamsAudioConferencingPolicy cmdlet to create a new audio-conferencing policy with the Identity "EMEA users". This policy will use all the default values for a meeting policy except one: MeetingInvitePhoneNumbers; in this example, meetings created by users with this policy will include the following toll and toll free phone numbers "+49695095XXXXX","+353156YYYYY","+1800856ZZZZZ".

## PARAMETERS

### -AllowTollFreeDialin
Determines whether users of the Policy can have Toll free numbers

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
Specify the name of the policy that you are creating

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

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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

### -MeetingInvitePhoneNumbers
Determines the list of audio-conferencing Toll- and Toll-free telephone numbers that will be included in meetings invites created by users of this policy.

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

## OUTPUTS

### Object
## NOTES

## RELATED LINKS

[Get-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsaudioconferencingpolicy)

[Set-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsaudioconferencingpolicy)

[Grant-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsaudioconferencingpolicy)
