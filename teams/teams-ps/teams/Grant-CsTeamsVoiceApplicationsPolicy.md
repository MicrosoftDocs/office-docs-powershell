---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamsvoiceapplicationspolicy
schema: 2.0.0
---

# Grant-CsTeamsVoiceApplicationsPolicy

## SYNOPSIS
Assigns a per-user Teams voice applications policy to one or more users. TeamsVoiceApplications policy governs what permissions the supervisors/users have over auto attendants and call queues.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsVoiceApplicationsPolicy [[-Identity] <String>] [-PassThru] [[-PolicyName] <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsVoiceApplicationsPolicy [-PassThru] [[-PolicyName] <String>]
 [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsVoiceApplicationsPolicy [-PassThru] [[-PolicyName] <String>]
 -Group <String> [-Rank <Int32>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
TeamsVoiceApplicationsPolicy is used for Supervisor Delegated Administration which allows tenant admins to permit certain users to make changes to auto attendant and call queue configurations.

## EXAMPLES

### EXAMPLE 1
```
Grant-CsTeamsVoiceApplicationsPolicy -Identity "Ken Myer" -PolicyName "SDA-Allow-All"
```
The command shown in Example 1 assigns the per-user Teams voice applications policy SDA-Allow-All to the user with the display name "Ken Myer".

### EXAMPLE 2
```
Grant-CsTeamsVoiceApplicationsPolicy -PolicyName "SDA-Allow-All" -Global
```
Example 2 assigns the per-user online voice routing policy "SDA-Allow-All to all the users in the tenant, except any that have an explicit policy assignment.

## PARAMETERS

### -Identity
Indicates the Identity of the user account to be assigned the per-user Teams voice applications policy. User Identities can be specified using one of the following formats: the user's SIP address, the user's user principal name (UPN), or the user's Active Directory display name (for example, Ken Myer).

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
Enables you to pass a user object through the pipeline that represents the user account being assigned the Teams voice applications policy. By default, the Grant-CsTeamsVoiceApplicationsPolicy cmdlet does not pass objects through the pipeline.

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
"Name" of the policy to be assigned. The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix). For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; likewise, a policy with the Identity tag:SDAAllowAllTeamsVoiceApplicationsPolicy has a PolicyName equal to SDAAllowAllTeamsVoiceApplicationsPolicy.

To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsvoiceapplicationspolicy)

[Set-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsvoiceapplicationspolicy)

[Remove-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsvoiceapplicationspolicy)

[New-CsTeamsVoiceApplicationsPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsvoiceapplicationspolicy)
