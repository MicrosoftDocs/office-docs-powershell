---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsaudioconferencingpolicy
title: Get-CsTeamsAudioConferencingPolicy
schema: 2.0.0
---

# Get-CsTeamsAudioConferencingPolicy

## SYNOPSIS

Audio conferencing policies can be used to manage audio conferencing toll- and toll-free numbers to be displayed in meeting invites created by users within your organization.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsAudioConferencingPolicy [[-Identity] <String>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsAudioConferencingPolicy [-LocalStore] [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsTeamsAudioConferencingPolicy cmdlet enables administrators to control audio conferencing toll- and toll-free numbers to be displayed in meeting invites created by users within your organization. The Get-CsTeamsAudioConferencingPolicy cmdlet enables you to return information about all the audio-conferencing policies that have been configured for use in your organization.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Get-CsTeamsAudioConferencingPolicy
```

The command shown in Example 1, Get-CsTeamsAudioConferencingPolicy is called without any additional parameters; this returns a collection of all the teams audio conferencing policies configured for use in your organization.

### EXAMPLE 2
```
PS C:\> Get-CsTeamsAudioConferencingPolicy -Identity "EMEA Users"
```

The command shown in Example 2, Get-CsTeamsAudioConferencingPolicy is used to return the per-user audio conferencing policy that has an Identity "EMEA Users". Because identities are unique, this command will never return more than one item.

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the policy to be retrieved. To retrieve the global policy, use this syntax: -Identity global. To retrieve a per-user policy use syntax similar to this: -Identity "EMEA Users".
If this parameter is not included, the Get-CsTeamsAudioConferencingPolicy cmdlet will return a collection of all the teams audio conferencing policies configured for use in your organization.

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

### -LocalStore
Internal Microsoft use only.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### Object
## NOTES

## RELATED LINKS

[Set-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsaudioconferencingpolicy)

[New-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsaudioconferencingpolicy)

[Grant-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsaudioconferencingpolicy)
