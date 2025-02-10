---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamseventspolicy
title: Grant-CsTeamsEventsPolicy
schema: 2.0.0
---

# Grant-CsTeamsEventsPolicy

## SYNOPSIS
Assigns Teams Events policy to a user, group of users, or the entire tenant. Note that this policy is currently still in preview.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsEventsPolicy [[-Identity] <String>] [-PassThru] [[-PolicyName] <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsEventsPolicy [-PassThru] [[-PolicyName] <String>] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsEventsPolicy [-PassThru] [[-PolicyName] <String>]
 [-Group] <String> [-Rank <Int32>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Assigns Teams Events policy to a user, group of users, or the entire tenant.

TeamsEventsPolicy is used to configure options for customizing Teams Events experiences.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsEventsPolicy -Identity "user1@contoso.com" -Policy DisablePublicWebinars
```

The command shown in Example 1 assigns the per-user Teams Events policy, DisablePublicWebinars, to the user with the user principal name (UPN) "user1@contoso.com".

### Example 2
```powershell
PS C:\> Grant-CsTeamsEventsPolicy -Identity "user1@contoso.com" -Policy $null
```

The command shown in Example 2 revokes the per-user Teams Events policy for the user with the user principal name (UPN) "user1@contoso.com". As a result, the user will be managed by the global Teams Events policy.

### Example 3
```powershell
PS C:\> Grant-CsTeamsEventsPolicy -Group "sales@contoso.com" -Rank 10 -Policy DisablePublicWebinars
```

The command shown in Example 3 assigns the Teams Events policy, DisablePublicWebinars, to the members of the group "sales@contoso.com".

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

### -Global
Use this switch if you want to grant the specified policy to be the default policy for all users in the tenant.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
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
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the identity of the target user. Acceptable values include:

Example: jphillips@contoso.com

Example: sip:jphillips@contoso.com

Example: 98403f08-577c-46dd-851a-f0460a13b03d

Use the "Global" Identity if you wish to set the policy for the entire tenant.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
Enables passing a user object through the pipeline that represents the user being assigned the policy. By default, the Grant-CsTeamsEventsPolicy cmdlet does not pass objects through the pipeline.

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

### -PolicyName
"Name" of the policy to be assigned. The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix). For example, a policy with the Identity tag:DisablePublicWebinars has a PolicyName equal to DisablePublicWebinars.

To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
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

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
