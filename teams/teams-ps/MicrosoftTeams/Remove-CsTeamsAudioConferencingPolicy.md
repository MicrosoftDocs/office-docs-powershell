---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsaudioconferencingpolicy
schema: 2.0.0
title: Remove-CsTeamsAudioConferencingPolicy
---

# Remove-CsTeamsAudioConferencingPolicy

## SYNOPSIS

Deletes a custom Teams audio conferencing policy. Audio conferencing policies are used to manage audio conferencing toll- and toll-free numbers to be displayed in meeting invites created by users within your organization.

## SYNTAX

```
Remove-CsTeamsAudioConferencingPolicy [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Deletes a previously created TeamsAudioConferencingPolicy. Any users with no explicitly assigned policies will then fall back to the default (Global) policy in the organization. You cannot delete the global policy from the organization.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Remove-CsTeamsAudioCOnferencingPolicy -Identity "Emea Users"
```

In the example shown above, the command will delete the "Emea Users" audio conferencing policy from the organization's list of policies.

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

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.
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
Unique identifier for the TeamsAudioConferencingPolicy to be removed. To remove global policy, use this syntax: -Identity global. (Note that the global policy cannot be removed. Instead, all the policy properties will be reset to their default values.) To remove a custom policy, use this syntax: `-Identity "<policy name>"`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### String
## OUTPUTS

### Object
## NOTES

## RELATED LINKS

[Get-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsaudioconferencingpolicy)

[Set-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsaudioconferencingpolicy)

[Grant-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsaudioconferencingpolicy)
