---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamsaudioconferencingpolicy
title: Grant-CsTeamsAudioConferencingPolicy
schema: 2.0.0
---

# Grant-CsTeamsAudioConferencingPolicy

## SYNOPSIS

Assigns a Teams audio-conferencing policy at the per-user scope. Audio conferencing policies are used to manage audio conferencing toll- and toll-free numbers to be displayed in meeting invites created by users within your organization.

## SYNTAX

### GrantToTenant (Default)
```
Grant-CsTeamsAudioConferencingPolicy [-Global] [-PassThru] [[-PolicyName] <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsAudioConferencingPolicy [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] -Group <String> [-Rank <Int32>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Identity
```
Grant-CsTeamsAudioConferencingPolicy [-PassThru] [[-PolicyName] <String>] [[-Identity] <String>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Granular control over which audio conferencing features your users can or cannot use is an important feature for many organizations. This cmdlet lets you assign a teams audio conferencing policy at the per-user scope. Audio conferencing policies determine the audio-conferencing toll- and toll-free numbers to be displayed in meeting invites created by users within your organization.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Grant-CsTeamsAudioCOnferencingPolicy -identity "Ken Myer" -PolicyName "Emea Users"
```

In this example, a user with identity "Ken Myer" is being assigned the "Emea Users" policy.

## PARAMETERS

### -Global
When you use this cmdlet without specifying a user identity, the policy applies to all users in your tenant, except any that have an explicit policy assignment. To skip a warning when you do this operation, specify this parameter.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Indicates the Identity of the user account to be assigned the per-user online voice routing policy. User Identities can be specified using one of the following formats: 1) the user's SIP address; 2) the user's user principal name (UPN); or, 3) the user's Active Directory display name (for example, Ken Myer).

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being assigned the online voice routing policy.
Enables you to pass a user object through the pipeline that represents the user account being assigned the online voice routing policy.

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

### -PolicyName
The name of the custom policy that is being assigned to the user. To remove a specific assignment and fall back to the default tenant policy, you can assign to $Null.

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

### -Rank
The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: GrantToGroup
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: GrantToGroup
Aliases:

Required: True
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

[Remove-CsTeamsAudioConferencingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsaudioconferencingpolicy)
